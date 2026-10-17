import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const SCRIPT = join(dirname(fileURLToPath(import.meta.url)), "check-lesson-plate.py");

test("lesson illustrations stay on the dollar-bill plate", () => {
  const result = spawnSync("python3", [SCRIPT], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /^ok \d+ lesson pictures on the dollar-bill plate/);
});
