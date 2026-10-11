#!/usr/bin/env node
/**
 * Palmetto Markers verification harness.
 *
 *   node .cursor/skills/verify-palmetto/scripts/verify.mjs run
 *   node .cursor/skills/verify-palmetto/scripts/verify.mjs doctor [--url URL]
 *   node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature atlas|scan|lesson|explore|tours|required
 *   node .cursor/skills/verify-palmetto/scripts/verify.mjs cleanup
 *
 * `run` launches a local Vite server (unless --url is set), doctors it, drives
 * the atlas and scan flows, runs `npm test`, writes evidence, then stops only
 * the server this file started.
 */
import { spawn } from "node:child_process";
import {
  createWriteStream,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { createServer } from "node:net";
import { delimiter, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const DEFAULT_PORT = 8091;
const ATLAS_LABEL = "South Carolina historical marker atlas";
const PLAQUE_PLACEHOLDER = /Number on the plaque/;
// Longer than the retired bundle's mount timer (`setTimeout(openCamera, 250)`).
// Sampling as soon as the button appears still reads 0 calls.
const CAMERA_IDLE_MS = 3000;
const OLD_IPHONE_CAMERA_COPY = "iPhone: tap Open camera, then allow access.";

const repoRoot = dirname(
  dirname(dirname(dirname(dirname(fileURLToPath(import.meta.url))))),
);

function usage() {
  return `usage: node .cursor/skills/verify-palmetto/scripts/verify.mjs <run|doctor|drive|cleanup> [options]
  --url <origin>     Drive this http(s) origin instead of launching Vite
  --port <n>         Launch port (default ${DEFAULT_PORT})
  --out <dir>        Evidence directory (default verify-output/palmetto)
  --feature <name>   atlas, scan, lesson, explore, tours, or required
  --skip-test        With run, do not execute npm test
  --no-video         Do not record a session video`;
}

function parseArgs(argv) {
  const opts = {
    command: "run",
    url: null,
    port: DEFAULT_PORT,
    out: join(repoRoot, "verify-output", "palmetto"),
    feature: "required",
    skipTest: false,
    video: true,
  };
  const args = [...argv];
  if (args[0] && !args[0].startsWith("--")) opts.command = args.shift();
  while (args.length) {
    const flag = args.shift();
    if (flag === "--url") opts.url = args.shift() ?? "";
    else if (flag === "--port") opts.port = Number(args.shift());
    else if (flag === "--out") opts.out = resolve(args.shift() ?? "");
    else if (flag === "--feature") opts.feature = args.shift() ?? "";
    else if (flag === "--skip-test") opts.skipTest = true;
    else if (flag === "--no-video") opts.video = false;
    else if (flag === "--help" || flag === "-h") opts.command = "help";
    else throw new Error(`unknown argument: ${flag}\n${usage()}`);
  }
  if (!["run", "doctor", "drive", "cleanup", "help"].includes(opts.command)) {
    throw new Error(`unknown command: ${opts.command}\n${usage()}`);
  }
  if (opts.url) opts.url = checkedUrl(opts.url);
  if (!Number.isInteger(opts.port) || opts.port < 1 || opts.port > 65535) {
    throw new Error(`invalid --port: ${opts.port}`);
  }
  const features = new Set(["atlas", "scan", "lesson", "explore", "tours", "required"]);
  if (!features.has(opts.feature)) {
    throw new Error(`unknown --feature ${opts.feature}`);
  }
  return opts;
}

function checkedUrl(value) {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error(`not a valid URL: ${value}`);
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error(`only http/https URLs are allowed, got ${parsed.protocol}`);
  }
  if (parsed.username || parsed.password) {
    throw new Error("URLs with credentials are not allowed");
  }
  return parsed.origin;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function alive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function cmdline(pid) {
  try {
    return readFileSync(`/proc/${pid}/cmdline`, "utf8").replaceAll("\0", " ");
  } catch {
    return "";
  }
}

function serverMetaPath(outDir) {
  return join(outDir, "server.json");
}

function readMeta(outDir) {
  const path = serverMetaPath(outDir);
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
}

function portFree(port) {
  return new Promise((resolvePort) => {
    const server = createServer();
    server.once("error", () => resolvePort(false));
    server.once("listening", () => server.close(() => resolvePort(true)));
    server.listen(port, "127.0.0.1");
  });
}

async function httpOk(url, path) {
  const target = new URL(path, url).toString();
  const res = await fetch(target, { redirect: "follow" });
  return { ok: res.ok, status: res.status, target };
}

async function waitUntilReady(url, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  let last = "no response";
  while (Date.now() < deadline) {
    try {
      const home = await httpOk(url, "/");
      const index = await httpOk(url, "/data/index.json");
      if (home.ok && index.ok) return { home: home.status, index: index.status };
      last = `GET / ${home.status}, GET /data/index.json ${index.status}`;
    } catch (err) {
      last = err instanceof Error ? err.message : String(err);
    }
    await sleep(400);
  }
  throw new Error(`server not ready at ${url}: ${last}`);
}

async function doctor(url, outDir, { requireOwned = false } = {}) {
  const home = await httpOk(url, "/");
  const index = await httpOk(url, "/data/index.json");
  const meta = readMeta(outDir);
  const owned =
    Boolean(meta) &&
    meta.url === url &&
    meta.owner === "verify-palmetto" &&
    alive(meta.pid) &&
    cmdline(meta.pid).includes("vite");
  const report = {
    ok: home.ok && index.ok && (!requireOwned || owned),
    url,
    home: home.status,
    index: index.status,
    owned,
    pid: owned ? meta.pid : null,
  };
  if (!home.ok || !index.ok) {
    report.error = "home page or marker index did not return HTTP 200";
  } else if (requireOwned && !owned) {
    report.error = "this URL is up, but it is not the verification server recorded in server.json";
  }
  return report;
}

async function stopRecordedServer(outDir) {
  const meta = readMeta(outDir);
  if (!meta?.pid) return { stopped: false, reason: "no recorded server" };
  if (!alive(meta.pid)) {
    rmSync(serverMetaPath(outDir), { force: true });
    return { stopped: false, reason: "pid already exited", pid: meta.pid };
  }
  const cmd = cmdline(meta.pid);
  if (meta.owner !== "verify-palmetto" || !cmd.includes("vite")) {
    return {
      stopped: false,
      reason: "refusing to kill a process that is not the recorded Vite server",
      pid: meta.pid,
    };
  }
  process.kill(meta.pid, "SIGTERM");
  for (let i = 0; i < 25; i++) {
    if (!alive(meta.pid)) break;
    await sleep(200);
  }
  if (alive(meta.pid)) process.kill(meta.pid, "SIGKILL");
  rmSync(serverMetaPath(outDir), { force: true });
  return { stopped: true, pid: meta.pid, port: meta.port };
}

async function launchServer(outDir, preferredPort) {
  mkdirSync(outDir, { recursive: true });
  await stopRecordedServer(outDir);
  let port = preferredPort;
  for (let i = 0; i < 15; i++) {
    if (await portFree(port)) break;
    port += 1;
  }
  if (!(await portFree(port))) {
    throw new Error(`no free verification port from ${preferredPort} through ${port}`);
  }
  const url = `http://127.0.0.1:${port}`;
  const logStream = createWriteStream(join(outDir, "dev-server.log"));
  const child = spawn(
    process.execPath,
    [
      join(repoRoot, "scripts", "with-app-env.mjs"),
      "vite",
      "dev",
      "--host",
      "127.0.0.1",
      "--port",
      String(port),
      "--strictPort",
    ],
    {
      cwd: repoRoot,
      detached: true,
      stdio: ["ignore", "pipe", "pipe"],
      env: {
        ...process.env,
        PATH: `${join(repoRoot, "node_modules", ".bin")}${delimiter}${process.env.PATH ?? ""}`,
      },
    },
  );
  child.stdout?.pipe(logStream);
  child.stderr?.pipe(logStream);
  child.unref();
  child.stdout?.unref();
  child.stderr?.unref();
  logStream.on("open", () => {
    if (typeof logStream.unref === "function") logStream.unref();
  });
  const meta = {
    owner: "verify-palmetto",
    pid: child.pid,
    port,
    url,
    startedAt: new Date().toISOString(),
  };
  writeFileSync(serverMetaPath(outDir), JSON.stringify(meta, null, 2));
  try {
    await waitUntilReady(url, 60000);
  } catch (err) {
    await stopRecordedServer(outDir);
    throw err;
  }
  return meta;
}

function runNpmTest(outDir) {
  return new Promise((resolveTest) => {
    const child = spawn("npm", ["test"], {
      cwd: repoRoot,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let out = "";
    child.stdout.on("data", (buf) => {
      out += buf.toString();
    });
    child.stderr.on("data", (buf) => {
      out += buf.toString();
    });
    child.on("error", (err) => {
      resolveTest({ ok: false, detail: err.message, tail: "" });
    });
    child.on("close", (code) => {
      try {
        writeFileSync(join(outDir, "npm-test.log"), out);
      } catch {
        /* evidence dir is best-effort */
      }
      const tail = out.trim().split("\n").slice(-30).join("\n");
      const summaryLine = out.match(/# pass \d+[\s\S]*# fail \d+/);
      const counts = summaryLine ? summaryLine[0].replace(/\s+/g, " ") : "";
      resolveTest({
        ok: code === 0,
        detail: code === 0 ? "npm test exited 0" : `npm test exited ${code}${counts ? ` (${counts})` : ""}`,
        tail,
      });
    });
  });
}

async function sampleAtlas(page) {
  return page.evaluate(() => {
    const canvas = document.querySelector(
      'canvas[aria-label="South Carolina historical marker atlas"]',
    );
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const width = canvas.width;
    const height = canvas.height;
    let pixels;
    try {
      pixels = ctx.getImageData(0, 0, width, height).data;
    } catch (err) {
      return { error: String(err) };
    }
    const dpr = width / canvas.clientWidth || 1;
    const cell = Math.max(8, Math.round(14 * dpr));
    const top = Math.round(130 * dpr);
    const bottom = height - Math.round(130 * dpr);
    const rightLimit = width - Math.round(64 * dpr);
    const cells = new Map();
    let lightCluster = 0;
    let darkCluster = 0;
    let pin = 0;

    function near(r, g, b, R, G, B, tol) {
      return Math.abs(r - R) + Math.abs(g - G) + Math.abs(b - B) < tol;
    }

    for (let y = top; y < bottom; y += 2) {
      for (let x = 0; x < rightLimit; x += 2) {
        const i = (y * width + x) * 4;
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        // Day clusters are #1f7a4d and #16603c. Tolerances stay under the gap
        // to shore #1f6b45 (23 and 29) so the coastline is not a cluster.
        const dayCluster =
          near(r, g, b, 31, 122, 77, 18) || near(r, g, b, 22, 96, 60, 18);
        // Ink #3d5c4c and earth #4a5538. The dark shore highlight is not a cluster.
        const nightCluster =
          near(r, g, b, 61, 92, 76, 40) || near(r, g, b, 74, 85, 56, 40);
        // Day pins are #d4532c. Cream matches day land #f7f1e4 and ink pins,
        // so cream is kept separate and only used as a pin on the dark map.
        const dayPin = near(r, g, b, 212, 83, 44, 36);
        const cream = r > 220 && g > 205 && b > 185 && Math.abs(r - g) < 25;
        let kind = null;
        if (dayCluster) {
          kind = "cluster";
          lightCluster += 1;
        } else if (nightCluster) {
          kind = "cluster";
          darkCluster += 1;
        } else if (dayPin) {
          kind = "pin";
          pin += 1;
        } else if (cream) {
          kind = "cream";
        }
        if (!kind) continue;
        const key = `${Math.floor(x / cell)},${Math.floor(y / cell)},${kind}`;
        const bucket = cells.get(key) ?? { kind, n: 0, x: 0, y: 0 };
        bucket.n += 1;
        bucket.x += x;
        bucket.y += y;
        cells.set(key, bucket);
      }
    }

    const creamIsPin = lightCluster < 80;
    const targets = [...cells.values()]
      .filter((bucket) => {
        if (bucket.kind === "cluster") return bucket.n >= 8;
        if (bucket.kind === "cream") return creamIsPin && bucket.n >= 18;
        return bucket.n >= 18;
      })
      .map((bucket) => (bucket.kind === "cream" ? { ...bucket, kind: "pin" } : bucket))
      .sort((a, b) => {
        const rank = { cluster: 0, pin: 1 };
        return rank[a.kind] - rank[b.kind] || b.n - a.n;
      })
      .slice(0, 12)
      .map((bucket) => ({
        kind: bucket.kind,
        n: bucket.n,
        x: bucket.x / bucket.n / dpr,
        y: bucket.y / bucket.n / dpr,
      }));

    return {
      lightCluster,
      darkCluster,
      pin,
      dpr,
      width: canvas.clientWidth,
      height: canvas.clientHeight,
      targets,
    };
  });
}

async function waitForAtlasPaint(page, mode) {
  let last = null;
  for (let i = 0; i < 40; i++) {
    last = await sampleAtlas(page);
    const light = last?.lightCluster ?? 0;
    const dark = last?.darkCluster ?? 0;
    if (last && !last.error) {
      if (mode === "light" && light >= 80) return last;
      // A light map can still match a few ink-cluster pixels. Dark mode has
      // to clear that floor and drop the day greens.
      if (mode === "dark" && dark >= 400 && light < 80) return last;
    }
    await page.waitForTimeout(250);
  }
  throw new Error(
    `marker pins or clusters did not render in ${mode} mode (lightCluster=${last?.lightCluster ?? 0}, darkCluster=${last?.darkCluster ?? 0}, pin=${last?.pin ?? 0}${last?.error ? `, ${last.error}` : ""})`,
  );
}

async function clickAtlasTarget(page, target) {
  const canvas = page.getByRole("application", { name: ATLAS_LABEL });
  const box = await canvas.boundingBox();
  if (!box) throw new Error("atlas canvas has no box");
  const x = box.x + target.x;
  const y = box.y + target.y;
  const hit = await page.evaluate(({ x: px, y: py }) => {
    const stack = document.elementsFromPoint(px, py).slice(0, 4).map((el) => {
      const className = String(el.className || "").replace(/\s+/g, ".").slice(0, 70);
      return `${el.tagName}${className ? "." + className : ""}`;
    });
    const el = document.elementFromPoint(px, py);
    if (!el) return null;
    return {
      tag: el.tagName,
      label: el.getAttribute("aria-label"),
      stack: stack.join(" > "),
    };
  }, { x, y });
  if (hit?.label !== ATLAS_LABEL) return { clicked: false, hit };
  await page.mouse.click(x, y);
  return { clicked: true, hit };
}

async function readMarkerPreview(page) {
  const article = page.locator("article").filter({
    has: page.getByRole("button", { name: "Lesson" }),
  });
  if (!(await article.isVisible().catch(() => false))) return null;
  const name = (await article.getByRole("heading").innerText()).trim();
  const meta = (await article.locator("p").first().innerText()).trim();
  const id = meta.match(/\d{2}-\d{2,3}/)?.[0] ?? "";
  if (!name || !id) return null;
  return { name, id, meta };
}

async function readStack(page) {
  const panel = page.locator("div.z-30").filter({ hasText: /\d+ markers here/ });
  if (!(await panel.first().isVisible().catch(() => false))) return null;
  const button = panel.getByRole("button").first();
  if (!(await button.isVisible().catch(() => false))) return null;
  return button;
}

async function check(step, id, fn) {
  try {
    const detail = await fn();
    step({ id, ok: true, detail: detail == null ? "" : String(detail) });
    return true;
  } catch (err) {
    step({
      id,
      ok: false,
      detail: err instanceof Error ? err.message : String(err),
    });
    return false;
  }
}

async function dismissOnboarding(page) {
  const onboard = page.getByRole("button", { name: "Open the atlas" });
  const showed = await onboard
    .waitFor({ state: "visible", timeout: 8000 })
    .then(() => true)
    .catch(() => false);
  if (!showed) return "cover already dismissed";
  for (let i = 0; i < 4; i++) {
    await onboard.click();
    const hid = await onboard
      .waitFor({ state: "hidden", timeout: 2000 })
      .then(() => true)
      .catch(() => false);
    if (!hid) continue;
    // Persist rehydration can paint the cover again if the tap landed first.
    await page.waitForTimeout(700);
    if (!(await onboard.isVisible().catch(() => false))) return "dismissed Open the atlas";
  }
  throw new Error("Open the atlas cover stayed up");
}

async function driveAtlas(page, shot, step) {
  const loaded = await check(step, "atlas: page loads", async () => {
    await page.goto("/", { waitUntil: "domcontentloaded", timeout: 45000 });
    const dismissed = await dismissOnboarding(page);
    await page.getByRole("application", { name: ATLAS_LABEL }).waitFor({ timeout: 15000 });
    await page.getByText(/official South Carolina markers/).waitFor({ timeout: 15000 });
    const title = await page.title();
    if (!title.includes("Palmetto")) throw new Error(`title was “${title}”`);
    return `${title}; ${dismissed}`;
  });
  if (!loaded) {
    await shot("fail-atlas-load.png").catch(() => {});
    return;
  }

  let sampled = null;
  const rendered = await check(step, "atlas: pins or clusters render", async () => {
    sampled = await waitForAtlasPaint(page, "light");
    await shot("01-atlas-loaded.png");
    return `${sampled.lightCluster} light cluster pixels, ${sampled.targets.length} tap targets`;
  });
  if (!rendered) {
    await shot("fail-atlas-pins.png").catch(() => {});
    return;
  }

  const darkened = await check(step, "atlas: switch to dark mode", async () => {
    await page.getByRole("button", { name: "Switch to dark mode" }).click();
    const dark = await waitForAtlasPaint(page, "dark");
    await shot("01-atlas-dark.png");
    return `${dark.darkCluster} dark cluster pixels`;
  });
  if (!darkened) {
    await shot("fail-atlas-dark.png").catch(() => {});
    return;
  }

  const restored = await check(step, "atlas: switch to light mode", async () => {
    await page.getByRole("button", { name: "Switch to light mode" }).click();
    sampled = await waitForAtlasPaint(page, "light");
    return `${sampled.lightCluster} light cluster pixels`;
  });
  if (!restored) {
    await shot("fail-atlas-light.png").catch(() => {});
    return;
  }

  await check(step, "atlas: tap opens marker details", async () => {
    let preview = null;
    const attempts = [];
    const missed = [];
    for (let n = 0; n < 10 && !preview; n++) {
      const stackButton = await readStack(page);
      if (stackButton) {
        const label = (await stackButton.innerText()).replace(/\s+/g, " ").trim();
        await stackButton.click();
        attempts.push(`stack:${label}`);
        await page.waitForTimeout(500);
        preview = await readMarkerPreview(page);
        if (preview) break;
        continue;
      }
      const sample = n === 0 ? sampled : await sampleAtlas(page);
      const target = sample?.targets?.find(
        (candidate) =>
          !missed.some((prior) => Math.hypot(prior.x - candidate.x, prior.y - candidate.y) < 28),
      );
      if (!target) {
        attempts.push("no-target");
        break;
      }
      const click = await clickAtlasTarget(page, target);
      attempts.push(
        click.clicked
          ? `${target.kind}@${Math.round(target.x)},${Math.round(target.y)}`
          : `blocked:${click.hit?.stack ?? click.hit?.tag ?? "none"}`,
      );
      if (!click.clicked) missed.push(target);
      await page.waitForTimeout(1100);
      preview = await readMarkerPreview(page);
      if (!preview) missed.push(target);
    }
    if (!preview) {
      await shot("fail-atlas-tap.png");
      throw new Error(`tapping a pin or cluster did not open marker details (${attempts.join(" → ")})`);
    }
    await shot("02-atlas-marker-details.png");
    return `${preview.name} (${preview.id}) via ${attempts.join(" → ")}`;
  });
}

async function gumCalls(page) {
  return page.evaluate(() => window.__palmettoVerify?.getUserMediaCalls ?? 0);
}

async function hasOldIphoneCameraCopy(page) {
  const text = await page.locator("body").innerText();
  return text.replace(/\s+/g, " ").includes(OLD_IPHONE_CAMERA_COPY);
}

async function liveVideoOpacity(page) {
  return page.locator("video").first().evaluate((el) => getComputedStyle(el).opacity);
}

async function ensurePlaqueInput(page) {
  const input = page.getByPlaceholder(PLAQUE_PLACEHOLDER);
  if (await input.isVisible().catch(() => false)) return input;
  const again = page.getByRole("button", { name: "Scan another marker" });
  if (await again.isVisible().catch(() => false)) await again.click();
  await input.waitFor({ timeout: 8000 });
  return input;
}

async function assertPlaqueHit(page, typed, name, id) {
  const input = await ensurePlaqueInput(page);
  await input.fill(typed);
  const row = page.getByRole("button", { name: new RegExp(name) }).first();
  await row.waitFor({ timeout: 10000 });
  const text = (await row.innerText()).replace(/\s+/g, " ");
  if (!text.includes(name) || !new RegExp(`(?:^|\\s)${id}(?:\\s|·|$)`).test(text)) {
    throw new Error(`typing ${typed} showed “${text}”, expected ${name} ${id}`);
  }
  await row.click();
  await page.getByRole("heading", { level: 2, name }).waitFor({ timeout: 8000 });
  const meta = (
    await page.locator("h2").locator("xpath=preceding-sibling::p[1]").innerText()
  ).trim();
  if (!meta.startsWith(id)) {
    throw new Error(`locked card for ${typed} showed “${meta}”, expected id ${id}`);
  }
  return `${typed} → ${name} ${id}`;
}

async function driveScan(page, shot, step) {
  const closed = await check(step, "scan: camera stays closed on load", async () => {
    await page.goto("/ar", { waitUntil: "domcontentloaded", timeout: 45000 });
    // The live video is in the first render. Idle after that, with no clicks
    // and no typing, so a mount timer can call getUserMedia before we sample.
    await page.locator("video").first().waitFor({ state: "attached", timeout: 15000 });
    await page.waitForTimeout(CAMERA_IDLE_MS);
    const callsBefore = await gumCalls(page);
    const opacityBefore = await liveVideoOpacity(page);
    const oldCopy = await hasOldIphoneCameraCopy(page);
    const headingVisible = await page
      .getByRole("heading", { name: "Scan the plaque" })
      .isVisible()
      .catch(() => false);
    const openVisible = await page
      .getByRole("button", { name: "Open camera" })
      .isVisible()
      .catch(() => false);
    const problems = [];
    if (callsBefore !== 0) {
      problems.push(
        `getUserMedia was called ${callsBefore} time${callsBefore === 1 ? "" : "s"} during ${CAMERA_IDLE_MS}ms with no interaction`,
      );
    }
    if (opacityBefore !== "0") {
      problems.push(`camera preview was visible on load (opacity=${opacityBefore})`);
    }
    if (!headingVisible) problems.push("heading Scan the plaque was not visible");
    if (!openVisible) problems.push("button Open camera was not visible");
    if (oldCopy) {
      problems.push(`old copy “${OLD_IPHONE_CAMERA_COPY}” is still on the page`);
    }
    if (problems.length) throw new Error(problems.join("; "));
    await shot("03-scan-camera-closed.png");
    return `Open camera stayed closed for ${CAMERA_IDLE_MS}ms (getUserMedia calls=0)`;
  });
  if (!closed) {
    await shot("fail-scan-load.png").catch(() => {});
    return;
  }

  const cameraOk = await check(step, "scan: Open camera", async () => {
    const open = page.getByRole("button", { name: "Open camera" });
    // A click during hydration is dropped. Tap again once the handler sticks.
    // Stop as soon as getUserMedia has run so a retry cannot add a second call.
    let clicks = 0;
    for (let i = 0; i < 5 && (await gumCalls(page)) === 0; i++) {
      if (!(await open.isVisible().catch(() => false))) break;
      await open.click();
      clicks += 1;
      await page.waitForTimeout(400);
    }
    const hold = page.getByText("Hold the plaque in the frame");
    const alert = page.getByRole("alert");
    const opened = await Promise.race([
      hold.waitFor({ timeout: 10000 }).then(() => "open"),
      alert.waitFor({ timeout: 10000 }).then(async () => `error:${await alert.innerText()}`),
    ]).catch(() => "timeout");
    if (opened !== "open") {
      await shot("fail-scan-camera.png");
      const debug = await page.evaluate(() => ({
        calls: window.__palmettoVerify?.getUserMediaCalls ?? null,
        fake: window.__palmettoVerify?.usedCanvasStream ?? null,
        buttons: [...document.querySelectorAll("button")].map((b) => b.innerText.trim()),
        alerts: [...document.querySelectorAll("[role=alert]")].map((a) => a.innerText.trim()),
        opacity: getComputedStyle(document.querySelector("video")).opacity,
        hasStream: Boolean(document.querySelector("video")?.srcObject),
      }));
      throw new Error(`Open camera did not start the fake camera (${opened}) ${JSON.stringify(debug)}`);
    }
    const callsAfter = await gumCalls(page);
    const opacityAfter = await liveVideoOpacity(page);
    if (callsAfter !== 1) {
      throw new Error(
        `Open camera called getUserMedia ${callsAfter} times after ${clicks} click${clicks === 1 ? "" : "s"}, expected exactly 1`,
      );
    }
    if (opacityAfter !== "1") {
      throw new Error(`camera preview stayed hidden (opacity=${opacityAfter})`);
    }
    await page.getByRole("button", { name: "Scan plaque" }).waitFor({ timeout: 5000 });
    await shot("04-scan-camera-open.png");
    return `getUserMedia calls=${callsAfter}`;
  });

  const plaques = [
    ["46-21", "Fort Mill", "46-21", "05-scan-fort-mill.png", "scan: 46-21 resolves to Fort Mill"],
    ["7-15", "Penn School", "07-15", "06-scan-penn-7-15.png", "scan: 7-15 resolves to Penn School 07-15"],
    ["07-15", "Penn School", "07-15", "07-scan-penn-07-15.png", "scan: 07-15 resolves to Penn School 07-15"],
  ];
  for (const [typed, name, id, file, label] of plaques) {
    await check(step, label, async () => {
      if (!cameraOk) await ensurePlaqueInput(page);
      const detail = await assertPlaqueHit(page, typed, name, id);
      await shot(file);
      return detail;
    });
  }
}

async function driveLesson(page, shot, step) {
  const opened = await check(step, "lesson: Fort Mill", async () => {
    await page.goto("/markers/46-21", { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.getByRole("heading", { level: 1, name: "Fort Mill", exact: true }).waitFor({ timeout: 15000 });
    await page.getByText(/46-21/).first().waitFor();
    await page.getByRole("heading", { name: "Official inscription" }).waitFor();
    await page.getByRole("button", { name: "Play lesson" }).waitFor();
    await shot("08-lesson-fort-mill.png");
    return "Fort Mill (46-21) shows Play lesson";
  });
  if (!opened) return;

  await check(step, "lesson: hands-on inscription", async () => {
    const title = page.getByRole("heading", { name: "How Fort Mill got its name" });
    await title.scrollIntoViewIfNeeded();
    await page.getByText(/hands-on lesson/i).first().waitFor();
    await page.getByText(/Every fact is from the inscription\./).waitFor();
    const next = page.getByRole("button", { name: "Next" });
    await next.scrollIntoViewIfNeeded();
    await next.click();
    await page.getByText(/Part 2 of/).waitFor({ timeout: 8000 });
    await shot("08-lesson-fort-mill-hands-on.png");
    return "How Fort Mill got its name advanced to part 2";
  });
}

async function driveExplore(page, shot, step) {
  await check(step, "explore: Lowcountry", async () => {
    await page.goto("/explore", { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.getByRole("heading", { name: "Explore" }).waitFor({ timeout: 15000 });
    await page.getByRole("button", { name: "Lowcountry" }).click();
    const link = page.locator('a[href*="/markers/"]').first();
    await link.waitFor({ timeout: 15000 });
    await shot("09-explore-lowcountry.png");
    const label = (await link.innerText()).replace(/\s+/g, " ").trim();
    await link.click();
    await page.waitForURL(/\/markers\//, { timeout: 15000 });
    await page.getByRole("heading", { level: 1 }).waitFor({ timeout: 15000 });
    await shot("10-explore-lesson.png");
    return `opened ${label}`;
  });
}

async function driveTours(page, shot, step) {
  await check(step, "tours: Charleston Harbor", async () => {
    await page.goto("/tours", { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.getByRole("heading", { name: "Tours" }).waitFor({ timeout: 15000 });
    await page.getByRole("link", { name: /Charleston Harbor/ }).click();
    await page.waitForURL(/\/tours\/charleston-harbor/, { timeout: 15000 });
    await page.getByRole("heading", { name: "Charleston Harbor" }).waitFor({ timeout: 15000 });
    await shot("11-tour-charleston-harbor.png");
    return "Charleston Harbor tour opened";
  });
}

const DRIVERS = {
  atlas: driveAtlas,
  scan: driveScan,
  lesson: driveLesson,
  explore: driveExplore,
  tours: driveTours,
};

async function withBrowser(url, outDir, video, features, onStep) {
  mkdirSync(outDir, { recursive: true });
  let browser = null;
  let context = null;
  let page = null;
  try {
  browser = await chromium.launch({
    channel: "chrome",
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--use-fake-device-for-media-stream",
      "--use-fake-ui-for-media-stream",
      "--autoplay-policy=no-user-gesture-required",
    ],
  });
  context = await browser.newContext({
    baseURL: url,
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
    permissions: ["camera"],
    recordVideo: video ? { dir: outDir, size: { width: 390, height: 844 } } : undefined,
  });
  await context.addInitScript(() => {
    const devices = navigator.mediaDevices;
    window.__palmettoVerify = { getUserMediaCalls: 0, usedCanvasStream: false };
    if (!devices?.getUserMedia) return;
    const orig = devices.getUserMedia.bind(devices);
    function canvasStream() {
      const canvas = document.createElement("canvas");
      canvas.width = 640;
      canvas.height = 480;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#1d2a24";
        ctx.fillRect(0, 0, 640, 480);
        ctx.fillStyle = "#ece7dc";
        ctx.font = "64px sans-serif";
        ctx.fillText("46-21", 48, 250);
      }
      window.__palmettoVerify.usedCanvasStream = true;
      return canvas.captureStream(10);
    }
    devices.getUserMedia = (constraints) => {
      window.__palmettoVerify.getUserMediaCalls += 1;
      return new Promise((resolve, reject) => {
        let settled = false;
        const timer = setTimeout(() => {
          if (settled) return;
          settled = true;
          try {
            resolve(canvasStream());
          } catch (err) {
            reject(err);
          }
        }, 1500);
        orig(constraints).then(
          (stream) => {
            if (settled) {
              stream.getTracks().forEach((track) => track.stop());
              return;
            }
            settled = true;
            clearTimeout(timer);
            resolve(stream);
          },
          (err) => {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            try {
              resolve(canvasStream());
            } catch {
              reject(err);
            }
          },
        );
      });
    };
  });
  await context.grantPermissions(["camera"], { origin: url });
  page = await context.newPage();
  page.setDefaultTimeout(20000);
  page.setDefaultNavigationTimeout(45000);
  const shot = async (name) => {
    const path = join(outDir, name);
    await page.screenshot({ path, fullPage: false });
    return path;
  };

    for (const feature of features) {
      try {
        await DRIVERS[feature](page, shot, onStep);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        try {
          await shot(`fail-${feature}.png`);
        } catch {
          /* page may already be closed */
        }
        onStep({ id: feature, ok: false, detail: message });
      }
    }
  } finally {
    const videoHandle = video && page ? page.video() : null;
    await context?.close().catch(() => {});
    await browser?.close().catch(() => {});
    if (videoHandle) {
      try {
        const recorded = await videoHandle.path();
        const target = join(outDir, "session.webm");
        if (recorded && recorded !== target) renameSync(recorded, target);
      } catch {
        /* video is optional evidence */
      }
    }
  }
}

function featuresFor(name) {
  if (name === "required") return ["atlas", "scan"];
  return [name];
}

function printSummary(steps) {
  const failed = steps.filter((step) => !step.ok);
  console.log("");
  console.log(failed.length === 0 ? "PASS  palmetto verification" : "FAIL  palmetto verification");
  for (const step of steps) {
    console.log(`${step.ok ? "PASS" : "FAIL"}  ${step.id}${step.detail ? ` — ${step.detail}` : ""}`);
  }
  console.log(`${steps.length - failed.length} passed, ${failed.length} failed`);
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.command === "help") {
    console.log(usage());
    return;
  }
  mkdirSync(opts.out, { recursive: true });

  if (opts.command === "cleanup") {
    const result = await stopRecordedServer(opts.out);
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  let launched = null;
  let url = opts.url;
  if (!url) {
    const existing = readMeta(opts.out);
    if (existing?.url && alive(existing.pid) && cmdline(existing.pid).includes("vite")) {
      url = existing.url;
    }
  }
  if (opts.command === "run" && !opts.url) {
    launched = await launchServer(opts.out, opts.port);
    url = launched.url;
  }
  if (!url) throw new Error("no URL. Pass --url or run `verify.mjs run` to launch one.");

  if (opts.command === "doctor") {
    const report = await doctor(url, opts.out, { requireOwned: !opts.url });
    console.log(JSON.stringify(report, null, 2));
    if (!report.ok) process.exitCode = 1;
    return;
  }

  const report = await doctor(url, opts.out, { requireOwned: Boolean(launched) });
  console.log(`doctor ${report.ok ? "ok" : "not ok"} ${url} home=${report.home} index=${report.index}`);
  if (!report.ok) {
    const steps = [{ id: "doctor", ok: false, detail: report.error || "doctor failed" }];
    writeFileSync(join(opts.out, "summary.json"), JSON.stringify({ url, steps }, null, 2));
    printSummary(steps);
    if (launched) await stopRecordedServer(opts.out);
    process.exitCode = 1;
    return;
  }

  const testsPromise = opts.command === "run" && !opts.skipTest ? runNpmTest(opts.out) : null;
  const steps = [{ id: "doctor", ok: true, detail: url }];
  const features = featuresFor(opts.command === "drive" ? opts.feature : opts.feature);
  try {
    await withBrowser(url, opts.out, opts.video, features, (step) => {
      steps.push(step);
      console.log(`${step.ok ? "PASS" : "FAIL"}  ${step.id} — ${step.detail}`);
    });
  } finally {
    if (launched) {
      const stopped = await stopRecordedServer(opts.out);
      steps.push({
        id: "cleanup",
        ok: stopped.stopped === true,
        detail: stopped.stopped ? `stopped pid ${stopped.pid}` : stopped.reason,
      });
    }
  }
  if (testsPromise) {
    const tests = await testsPromise;
    steps.push({ id: "npm test", ok: tests.ok, detail: tests.detail });
    if (!tests.ok && tests.tail) console.error(tests.tail);
  }

  const summary = {
    url,
    ok: steps.every((step) => step.ok),
    evidence: opts.out,
    steps,
  };
  writeFileSync(join(opts.out, "summary.json"), JSON.stringify(summary, null, 2));
  printSummary(steps);
  console.log(`evidence ${opts.out}`);
  if (!summary.ok) process.exitCode = 1;
  process.exit(process.exitCode ?? 0);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
