import * as THREE from "three";
import type { SceneKind } from "./markers";

export type ArHandle = {
  resize: (w: number, h: number) => void;
  setKind: (kind: SceneKind) => void;
  setParallax: (x: number, y: number) => void;
  setLocked: (on: boolean) => void;
  dispose: () => void;
};

const SAGE = 0x7f9c8a;
const PINE = 0x1a2620;
const PARCHMENT = 0xece7dc;
const TRUNK = 0x5c4634;
const FROND = 0x3d6b52;
const IRON = 0x3a3f3c;
const BRICK = 0x6e4a3a;
const MARSH = 0x8a9a6e;

const palmettoMat = {
  trunk: new THREE.MeshStandardMaterial({ color: TRUNK, roughness: 0.92 }),
  boot: new THREE.MeshStandardMaterial({ color: 0x4a3828, roughness: 1 }),
  frond: new THREE.MeshStandardMaterial({
    color: FROND,
    roughness: 0.65,
    side: THREE.DoubleSide,
  }),
};
const woodMat = new THREE.MeshStandardMaterial({ color: 0x6b5340, roughness: 0.95 });
const ironMat = new THREE.MeshStandardMaterial({
  color: IRON,
  metalness: 0.72,
  roughness: 0.38,
});
const stoneMat = new THREE.MeshStandardMaterial({ color: 0xc5c0b4, roughness: 0.7 });
const brickMat = new THREE.MeshStandardMaterial({ color: BRICK, roughness: 0.88 });

function palmetto(height = 2.4): THREE.Group {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.07, 0.13, height, 10),
    palmettoMat.trunk,
  );
  trunk.position.y = height / 2;
  g.add(trunk);
  const boot = new THREE.Mesh(
    new THREE.CylinderGeometry(0.16, 0.2, 0.28, 10),
    palmettoMat.boot,
  );
  boot.position.y = 0.12;
  g.add(boot);
  for (let i = 0; i < 16; i++) {
    const leaf = new THREE.Mesh(
      new THREE.ConeGeometry(0.07, 1.25, 5),
      palmettoMat.frond,
    );
    const a = (i / 16) * Math.PI * 2;
    const tilt = 0.85 + (i % 3) * 0.08;
    leaf.position.set(Math.cos(a) * 0.16, height - 0.04, Math.sin(a) * 0.16);
    leaf.rotation.z = Math.cos(a) * tilt;
    leaf.rotation.x = Math.sin(a) * tilt;
    g.add(leaf);
  }
  g.userData.wind = true;
  return g;
}

function plaque(): THREE.Group {
  const g = new THREE.Group();
  const board = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 1.62, 0.07),
    new THREE.MeshStandardMaterial({ color: 0x101618, metalness: 0.62, roughness: 0.28 }),
  );
  board.position.y = 1.12;
  g.add(board);
  const post = new THREE.Mesh(
    new THREE.BoxGeometry(0.09, 1.2, 0.09),
    new THREE.MeshStandardMaterial({ color: 0x2a2f2c, metalness: 0.45, roughness: 0.5 }),
  );
  post.position.y = 0.5;
  g.add(post);
  const emblem = new THREE.Mesh(
    new THREE.CircleGeometry(0.13, 24),
    new THREE.MeshStandardMaterial({ color: PARCHMENT, metalness: 0.65, roughness: 0.28 }),
  );
  emblem.position.set(0, 1.64, 0.04);
  g.add(emblem);
  const crescent = new THREE.Mesh(
    new THREE.TorusGeometry(0.09, 0.018, 8, 18, Math.PI * 1.2),
    new THREE.MeshStandardMaterial({ color: SAGE, metalness: 0.5, roughness: 0.35 }),
  );
  crescent.position.set(0, 1.64, 0.05);
  g.add(crescent);
  for (let i = 0; i < 7; i++) {
    const line = new THREE.Mesh(
      new THREE.BoxGeometry(0.82 - i * 0.035, 0.028, 0.012),
      new THREE.MeshStandardMaterial({ color: 0xc9c3b5, roughness: 0.45 }),
    );
    line.position.set(0, 1.18 - i * 0.11, 0.042);
    g.add(line);
  }
  return g;
}

function cannon(): THREE.Group {
  const g = new THREE.Group();
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.13, 1.55, 14), ironMat);
  barrel.rotation.z = Math.PI / 2.35;
  barrel.position.set(0.22, 0.48, 0);
  g.add(barrel);
  const muzzle = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.02, 8, 16), ironMat);
  muzzle.rotation.y = Math.PI / 2;
  muzzle.position.set(0.92, 0.62, 0);
  g.add(muzzle);
  const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.08, 16);
  const w1 = new THREE.Mesh(wheelGeo, ironMat);
  const w2 = w1.clone();
  w1.rotation.x = Math.PI / 2;
  w2.rotation.x = Math.PI / 2;
  w1.position.set(-0.12, 0.3, 0.34);
  w2.position.set(-0.12, 0.3, -0.34);
  g.add(w1, w2);
  const trail = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.08, 0.18), woodMat);
  trail.position.set(-0.15, 0.22, 0);
  g.add(trail);
  return g;
}

function logFort(): THREE.Group {
  const g = new THREE.Group();
  for (let i = -5; i <= 5; i++) {
    const h = 1.15 + (i % 2) * 0.18;
    const log = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, h, 7), woodMat);
    log.position.set(i * 0.17, h / 2, -0.55);
    g.add(log);
  }
  const sand = new THREE.Mesh(
    new THREE.BoxGeometry(2.1, 0.35, 0.55),
    new THREE.MeshStandardMaterial({ color: 0xb9a57a, roughness: 1 }),
  );
  sand.position.set(0, 0.16, -0.35);
  g.add(sand);
  return g;
}

function church(): THREE.Group {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: 0xe8e2d4, roughness: 0.78 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.85, 1.7), white);
  body.position.y = 0.52;
  g.add(body);
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(1.1, 0.58, 4),
    new THREE.MeshStandardMaterial({ color: 0x3d4a44, roughness: 0.7 }),
  );
  roof.position.y = 1.2;
  roof.rotation.y = Math.PI / 4;
  g.add(roof);
  const steeple = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.78, 0.3), white);
  steeple.position.set(0, 1.52, 0.58);
  g.add(steeple);
  const spire = new THREE.Mesh(
    new THREE.ConeGeometry(0.2, 0.62, 8),
    new THREE.MeshStandardMaterial({ color: SAGE, roughness: 0.45 }),
  );
  spire.position.set(0, 2.18, 0.58);
  g.add(spire);
  return g;
}

function schoolhouse(): THREE.Group {
  const g = new THREE.Group();
  const pine = new THREE.MeshStandardMaterial({ color: 0xb0895a, roughness: 0.88 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.75, 1.15), pine);
  body.position.y = 0.48;
  g.add(body);
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(1.25, 0.48, 4),
    new THREE.MeshStandardMaterial({ color: 0x4a4038, roughness: 0.8 }),
  );
  roof.rotation.y = Math.PI / 4;
  roof.position.y = 1.08;
  g.add(roof);
  const stoop = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.12, 0.35),
    new THREE.MeshStandardMaterial({ color: 0x8a7a68, roughness: 1 }),
  );
  stoop.position.set(0, 0.08, 0.7);
  g.add(stoop);
  return g;
}

function marshTufts(): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color: MARSH,
    roughness: 0.9,
    side: THREE.DoubleSide,
  });
  for (let i = 0; i < 28; i++) {
    const blade = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.45 + (i % 5) * 0.12, 4), mat);
    blade.position.set(((i * 17) % 24) / 10 - 1.2, 0.28, ((i * 13) % 24) / 10 - 1.2);
    blade.rotation.z = ((i % 5) - 2) * 0.08;
    g.add(blade);
  }
  return g;
}

function mill(): THREE.Group {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.45, 1.25, 0.95), brickMat);
  body.position.y = 0.72;
  g.add(body);
  const wheel = new THREE.Mesh(
    new THREE.TorusGeometry(0.48, 0.055, 8, 20),
    ironMat,
  );
  wheel.position.set(0.9, 0.58, 0);
  wheel.rotation.y = Math.PI / 2;
  wheel.userData.spin = true;
  g.add(wheel);
  return g;
}

function capitol(): THREE.Group {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.52, 1.15), stoneMat);
  base.position.y = 0.32;
  g.add(base);
  const colMat = new THREE.MeshStandardMaterial({ color: 0xddd8cc, roughness: 0.5 });
  for (const x of [-0.7, -0.23, 0.23, 0.7]) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.065, 0.85, 10), colMat);
    col.position.set(x, 0.95, 0.42);
    g.add(col);
  }
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(0.42, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: SAGE, metalness: 0.35, roughness: 0.4 }),
  );
  dome.position.y = 1.52;
  g.add(dome);
  return g;
}

function nativeRiver(): THREE.Group {
  const g = new THREE.Group();
  const water = new THREE.Mesh(
    new THREE.CircleGeometry(1.45, 32),
    new THREE.MeshStandardMaterial({
      color: 0x3a5a62,
      roughness: 0.12,
      metalness: 0.45,
    }),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.03;
  water.userData.ripple = true;
  g.add(water);
  const rock = new THREE.MeshStandardMaterial({ color: 0x7a756c, roughness: 1 });
  for (let i = 0; i < 9; i++) {
    const s = new THREE.Mesh(new THREE.DodecahedronGeometry(0.1 + (i % 3) * 0.04, 0), rock);
    s.position.set((i - 4) * 0.26, 0.07, Math.sin(i * 1.3) * 0.22);
    g.add(s);
  }
  return g;
}

function photoFrame(url: string): THREE.Group {
  const g = new THREE.Group();
  const frame = new THREE.Mesh(
    new THREE.BoxGeometry(2.05, 1.38, 0.06),
    new THREE.MeshStandardMaterial({ color: 0x1a1612, roughness: 0.55, metalness: 0.2 }),
  );
  g.add(frame);
  const loader = new THREE.TextureLoader();
  loader.setCrossOrigin("anonymous");
  loader.load(url, (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    const img = new THREE.Mesh(
      new THREE.PlaneGeometry(1.92, 1.24),
      new THREE.MeshBasicMaterial({ map: tex }),
    );
    img.position.z = 0.034;
    g.add(img);
  });
  g.position.set(-0.15, 1.55, -1.15);
  g.rotation.y = 0.12;
  g.scale.setScalar(0.001);
  g.userData.reveal = true;
  return g;
}

function dust(): THREE.Points {
  const n = 80;
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 5;
    pos[i * 3 + 1] = Math.random() * 3;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xece7dc,
    size: 0.035,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
  });
  const p = new THREE.Points(geo, mat);
  p.userData.dust = true;
  return p;
}

function ground(): THREE.Mesh {
  return new THREE.Mesh(
    new THREE.CircleGeometry(3.6, 40),
    new THREE.MeshStandardMaterial({ color: PINE, roughness: 1 }),
  );
}

function buildKind(kind: SceneKind, photoUrl: string): THREE.Group {
  const root = new THREE.Group();
  const floor = ground();
  floor.rotation.x = -Math.PI / 2;
  root.add(floor);
  const sign = plaque();
  sign.position.set(0.95, 0, 0.78);
  sign.rotation.y = -0.48;
  root.add(sign);
  root.add(photoFrame(photoUrl));
  root.add(dust());

  switch (kind) {
    case "cannon": {
      root.add(logFort());
      const c = cannon();
      c.position.set(-0.65, 0, 0.35);
      root.add(c);
      const p = palmetto(2.2);
      p.position.set(-1.25, 0, -0.55);
      root.add(p);
      break;
    }
    case "fort":
      root.add(logFort());
      {
        const wall = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.58, 0.38), brickMat);
        wall.position.set(0, 0.3, -0.5);
        root.add(wall);
      }
      break;
    case "church":
      root.add(church());
      break;
    case "school":
      root.add(schoolhouse());
      break;
    case "marsh": {
      root.add(marshTufts());
      const p = palmetto(2.7);
      p.position.set(-0.95, 0, -0.45);
      root.add(p);
      break;
    }
    case "mill":
      root.add(mill());
      break;
    case "capitol":
      root.add(capitol());
      break;
    case "native":
      root.add(nativeRiver());
      break;
    default: {
      const p = palmetto(2.7);
      p.position.set(-0.75, 0, 0.12);
      root.add(p);
      const p2 = palmetto(1.9);
      p2.position.set(0.4, 0, -0.85);
      p2.scale.setScalar(0.78);
      root.add(p2);
    }
  }
  return root;
}

export function createArWorld(
  canvas: HTMLCanvasElement,
  kind: SceneKind,
  photoUrl: string,
): ArHandle {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0c110f, 0.045);
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 80);
  camera.position.set(0, 1.5, 4.4);
  camera.lookAt(0, 0.95, 0);

  scene.add(new THREE.HemisphereLight(0xf3ead8, 0x142018, 1.05));
  const key = new THREE.DirectionalLight(0xffe2b8, 1.55);
  key.position.set(3.4, 6.8, 2.6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(SAGE, 0.55);
  rim.position.set(-3.2, 2.2, -2.4);
  scene.add(rim);
  const fill = new THREE.PointLight(0xece7dc, 0.45, 8);
  fill.position.set(0.4, 1.8, 2.2);
  scene.add(fill);

  const pivot = new THREE.Group();
  scene.add(pivot);
  let content = buildKind(kind, photoUrl);
  pivot.add(content);

  let last = performance.now();
  let running = true;
  let locked = false;
  let lockT = 0;
  let parallax = { x: 0, y: 0 };
  const targetParallax = { x: 0, y: 0 };
  const camZ = { current: 4.4, goal: 4.4 };

  const tick = (now: number) => {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    parallax.x += (targetParallax.x - parallax.x) * 4 * dt;
    parallax.y += (targetParallax.y - parallax.y) * 4 * dt;
    lockT = THREE.MathUtils.damp(lockT, locked ? 1 : 0, 3.2, dt);
    camZ.goal = locked ? 3.15 : 4.4;
    camZ.current = THREE.MathUtils.damp(camZ.current, camZ.goal, 2.4, dt);

    pivot.rotation.y = now * 0.00012 + parallax.x * 0.28;
    pivot.position.y = Math.sin(now * 0.0009) * 0.03;
    camera.position.x = parallax.x * 0.35;
    camera.position.y = 1.5 + parallax.y * 0.28;
    camera.position.z = camZ.current;
    camera.lookAt(0, 0.95, 0);

    content.traverse((obj) => {
      if (obj.userData.wind) obj.rotation.z = Math.sin(now * 0.0014) * 0.035;
      if (obj.userData.spin) obj.rotation.z += dt * 0.8;
      if (obj.userData.ripple) obj.rotation.z = Math.sin(now * 0.0007) * 0.04;
      if (obj.userData.reveal) {
        const s = 0.05 + lockT * 0.95;
        obj.scale.setScalar(s);
        obj.position.y = 1.35 + lockT * 0.25;
      }
      if (obj.userData.dust && obj instanceof THREE.Points) {
        const arr = obj.geometry.attributes.position.array as Float32Array;
        for (let i = 1; i < arr.length; i += 3) {
          arr[i] += dt * 0.12;
          if (arr[i] > 3.2) arr[i] = 0;
        }
        obj.geometry.attributes.position.needsUpdate = true;
      }
    });

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  const resize = (w: number, h: number) => {
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
  };

  const swap = (next: SceneKind, url = photoUrl) => {
    pivot.remove(content);
    content.traverse((obj) => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
        obj.geometry.dispose();
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        for (const m of mats) {
          if ("map" in m && m.map) m.map.dispose();
          m.dispose();
        }
      }
    });
    content = buildKind(next, url);
    pivot.add(content);
  };

  return {
    resize,
    setKind: (next) => swap(next),
    setParallax: (x, y) => {
      targetParallax.x = THREE.MathUtils.clamp(x, -1, 1);
      targetParallax.y = THREE.MathUtils.clamp(y, -1, 1);
    },
    setLocked: (on) => {
      locked = on;
    },
    dispose: () => {
      running = false;
      content.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
          obj.geometry.dispose();
        }
      });
      renderer.dispose();
    },
  };
}
