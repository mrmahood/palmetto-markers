export type Era =
  | "colonial"
  | "revolution"
  | "early-republic"
  | "antebellum"
  | "civil-war"
  | "reconstruction"
  | "new-south"
  | "interwar"
  | "postwar"
  | "other";

export type Marker = {
  id: string;
  name: string;
  name2: string;
  lat: number;
  lng: number;
  county: string;
  cc: string;
  region: string;
  city: string;
  addr: string;
  front: string;
  back: string;
  year: number | null;
  era: Era | string;
  tags: string[];
  sponsor: string;
  missing: boolean;
};

export type MarkerIndex = {
  id: string;
  n: string;
  lat: number;
  lng: number;
  c: string;
  r: string;
  e: string;
  t: string[];
  city: string;
  y: number | null;
};

export const ERA_LABEL: Record<string, string> = {
  colonial: "Colonial",
  revolution: "Revolution",
  "early-republic": "Early Republic",
  antebellum: "Antebellum",
  "civil-war": "Civil War",
  reconstruction: "Reconstruction",
  "new-south": "New South",
  interwar: "1913–1941",
  postwar: "1941–present",
  other: "Other",
};

export const REGION_ORDER = ["Lowcountry", "Midlands", "Pee Dee", "Upstate"] as const;

export const THEME_LABEL: Record<string, string> = {
  "african-american": "African American",
  "native-american": "Native American",
  women: "Women",
  revolution: "Revolution",
  "civil-war": "Civil War",
  reconstruction: "Reconstruction",
  gullah: "Gullah Geechee",
  church: "Faith",
  school: "Schools",
  plantation: "Plantation",
  battle: "Battles",
  military: "Military",
  cemetery: "Cemetery",
  home: "Homes",
  town: "Towns",
  business: "Business",
  "civil-rights": "Civil Rights",
};

export const MARKER_COUNT = 2137;

let cache: Marker[] | null = null;
let byId: Map<string, Marker> | null = null;
let inflight: Promise<Marker[]> | null = null;
let indexCache: Marker[] | null = null;

function fromIndex(row: MarkerIndex): Marker {
  return {
    id: row.id,
    name: row.n,
    name2: "",
    lat: row.lat,
    lng: row.lng,
    county: row.c,
    cc: "",
    region: row.r,
    city: row.city,
    addr: "",
    front: "",
    back: "",
    year: row.y,
    era: row.e,
    tags: row.t,
    sponsor: "",
    missing: false,
  };
}

function setCache(data: Marker[]) {
  cache = data;
  byId = new Map(data.map((m) => [m.id, m]));
}

export function loadMarkers(): Promise<Marker[]> {
  if (cache) return Promise.resolve(cache);
  if (!inflight) {
    inflight = fetch("/data/markers.json")
      .then((r) => {
        if (!r.ok) throw new Error("Could not load markers");
        return r.json() as Promise<Marker[]>;
      })
      .then((data) => {
        setCache(data);
        return data;
      });
  }
  return inflight;
}

export async function loadMapMarkers(): Promise<Marker[]> {
  if (cache) return cache;
  if (indexCache) {
    void loadMarkers();
    return indexCache;
  }
  const res = await fetch("/data/index.json");
  if (!res.ok) return loadMarkers();
  const rows = (await res.json()) as MarkerIndex[];
  indexCache = rows.map(fromIndex);
  void loadMarkers();
  return indexCache;
}

export async function getMarker(id: string): Promise<Marker | undefined> {
  if (byId?.has(id)) {
    const hit = byId.get(id);
    if (hit?.front) return hit;
  }
  const all = await loadMarkers();
  return all.find((m) => m.id === id);
}

if (typeof window !== "undefined") {
  void loadMapMarkers();
}

export function inscription(m: Marker): string {
  return [m.front, m.back].filter(Boolean).join(" ");
}

export function lessonScript(m: Marker): string {
  const extra = FEATURED_LESSONS[m.id];
  const body = inscription(m);
  const where = [m.city, m.county + " County"].filter(Boolean).join(", ");
  const intro = extra
    ? extra
    : `${m.name}. ${where}. A South Carolina Historical Marker.`;
  return `${intro} ${body}`.replace(/\s+/g, " ").trim();
}

/** Tagged script for xAI TTS — unhurried, with room to breathe. */
export function spokenLesson(m: Marker): string {
  const extra = FEATURED_LESSONS[m.id];
  const body = inscription(m);
  const where = [m.city, m.county + " County"].filter(Boolean).join(", ");
  const intro = extra
    ? extra
    : `${m.name}. [pause] ${where}. [pause] A South Carolina Historical Marker.`;
  return `<soft>${intro}</soft> [pause] ${body}`.replace(/\s+/g, " ").trim();
}

export function heroImage(m: Marker): string {
  return imageFor(m).src;
}

export function imageCredit(m: Marker): string {
  return imageFor(m).credit;
}

type HistImg = { src: string; credit: string };

const LOC = "Library of Congress";
const HABS = "Historic American Buildings Survey, Library of Congress";
const FSA = "Farm Security Administration / Library of Congress";
const NPS = "National Park Service / Library of Congress";

const BY_ID: Record<string, HistImg> = {
  "10-46": {
    src: "/images/hist/fort-sullivan-plan.jpg",
    credit: `Plan of the attack on Fort Sullivan, 28 June 1776. ${LOC}.`,
  },
  "10-05": {
    src: "/images/hist/fort-moultrie.jpg",
    credit: `Fort Moultrie, Charleston Harbor. ${LOC}.`,
  },
  "10-76": {
    src: "/images/hist/planter.jpg",
    credit: `Steamer Planter, Charleston. ${LOC}.`,
  },
  "07-15": {
    src: "/images/hist/penn-school.jpg",
    credit: `Laura Towne’s school, St. Helena Island. ${LOC}.`,
  },
  "07-23": {
    src: "/images/hist/st-helena-july4.jpg",
    credit: `Fourth of July, St. Helena Island, 1939. Marion Post Wolcott, ${FSA}.`,
  },
  "07-24": {
    src: "/images/hist/st-helena-july4.jpg",
    credit: `Fourth of July, St. Helena Island, 1939. Marion Post Wolcott, ${FSA}.`,
  },
  "40-122": {
    src: "/images/hist/statehouse-now.jpg",
    credit: `South Carolina State House, Columbia. Carol M. Highsmith, ${LOC}.`,
  },
  "46-06": {
    src: "/images/hist/catawba-map.jpg",
    credit: `Catawba deerskin map presented to Gov. Nicholson, c. 1721. ${LOC}.`,
  },
  "46-21": {
    src: "/images/hist/catawba-map.jpg",
    credit: `Catawba deerskin map presented to Gov. Nicholson, c. 1721. ${LOC}.`,
  },
  "46-45": {
    src: "/images/hist/catawba-map.jpg",
    credit: `Catawba deerskin map presented to Gov. Nicholson, c. 1721. ${LOC}.`,
  },
  "46-49": {
    src: "/images/hist/circular-church.jpg",
    credit: `Ruins of Circular Church, Charleston, 1865. ${LOC}.`,
  },
  "46-68": {
    src: "/images/hist/penn-school.jpg",
    credit: `Laura Towne’s school, St. Helena Island. ${LOC}.`,
  },
  "46-87": {
    src: "/images/hist/circular-churchyard.jpg",
    credit: `Churchyard, Circular Church, Charleston. ${LOC}.`,
  },
  "46-89": {
    src: "/images/hist/penn-school.jpg",
    credit: `Laura Towne’s school, St. Helena Island. ${LOC}.`,
  },
  "46-04": {
    src: "/images/hist/charleston-ruins.jpg",
    credit: `Ruins in Charleston, 1865. ${LOC}.`,
  },
  "29-28": {
    src: "/images/hist/camden-sketch.jpg",
    credit: `Battle near Camden, 1780. ${LOC}.`,
  },
  "29-33": {
    src: "/images/hist/circular-churchyard.jpg",
    credit: `Churchyard, Circular Church, Charleston. ${LOC}.`,
  },
  "29-35": {
    src: "/images/hist/graniteville-mill.jpg",
    credit: `Graniteville Mill, Aiken County. ${HABS}.`,
  },
  "28-01": {
    src: "/images/hist/camden-sketch.jpg",
    credit: `Sketch of the battle near Camden, 16 August 1780. ${LOC}.`,
  },
  "24-03": {
    src: "/images/hist/kings-mountain.jpg",
    credit: `Kings Mountain National Military Park map. ${NPS}.`,
  },
  "35-11": {
    src: "/images/hist/roper.jpg",
    credit: `Daniel C. Roper leaving the Treasury, c. 1918–20. National Photo Company, ${LOC}.`,
  },
  "46-62": {
    src: "/images/hist/aragon-mill.jpg",
    credit: `Workers at Aragon Mill, Rock Hill, 1912. Lewis Hine, ${LOC}. No public-domain photograph of the later Celanese Celriver plant was found.`,
  },
  "46-38": {
    src: "/images/hist/aragon-mill.jpg",
    credit: `Workers at Aragon Mill, Rock Hill, 1912. Lewis Hine, ${LOC}.`,
  },
  "46-40": {
    src: "/images/hist/aragon-doffers.jpg",
    credit: `Doffers at Aragon Mill, Rock Hill, 1912. Lewis Hine, ${LOC}.`,
  },
  "46-23": {
    src: "/images/hist/aragon-doffers.jpg",
    credit: `Aragon Mill, Rock Hill, 1912. Lewis Hine, ${LOC}.`,
  },
  "46-46": {
    src: "/images/hist/olympia-mill.jpg",
    credit: `Olympia Cotton Mill, Columbia, 1909. ${LOC}.`,
  },
};

function hashPick<T>(id: string, arr: readonly T[]): T {
  let n = 0;
  for (const c of id) n = (n * 33 + c.charCodeAt(0)) >>> 0;
  return arr[n % arr.length];
}

const IMG = {
  mill: {
    src: "/images/hist/graniteville-mill.jpg",
    credit: `Graniteville Mill, Aiken County. ${HABS}.`,
  },
  aragon: {
    src: "/images/hist/aragon-mill.jpg",
    credit: `Workers at Aragon Mill, Rock Hill, 1912. Lewis Hine, ${LOC}.`,
  },
  doffers: {
    src: "/images/hist/aragon-doffers.jpg",
    credit: `Doffers at Aragon Mill, Rock Hill, 1912. Lewis Hine, ${LOC}.`,
  },
  olympia: {
    src: "/images/hist/olympia-mill.jpg",
    credit: `Olympia Cotton Mill, Columbia, 1909. ${LOC}.`,
  },
  millModern: {
    src: "/images/hist/drayton-mill.jpg",
    credit: `Former Drayton Mill, Spartanburg. Carol M. Highsmith, ${LOC}.`,
  },
  newberry: {
    src: "/images/hist/newberry-mill.jpg",
    credit: `Noon hour, Newberry Mills, 1908. Lewis Hine, ${LOC}.`,
  },
  steel: {
    src: "/images/hist/georgetown-steel.jpg",
    credit: `Steel mill, Georgetown. Carol M. Highsmith, ${LOC}.`,
  },
  cotton: {
    src: "/images/hist/cotton-sumter.jpg",
    credit: `Children picking cotton, Sumter County. ${FSA}.`,
  },
  rural: {
    src: "/images/hist/sharecropper.jpg",
    credit: `South Carolina sharecropper. ${FSA}.`,
  },
  ruralHouse: {
    src: "/images/hist/sharecropper-house.jpg",
    credit: `House of a cotton sharecropper near Gaffney. ${FSA}.`,
  },
  hall: {
    src: "/images/hist/drayton-hall.jpg",
    credit: `Drayton Hall, Charleston. Carol M. Highsmith, ${LOC}.`,
  },
  peedee: {
    src: "/images/hist/marlborough-map.jpg",
    credit: `Marlborough District, South Carolina. ${LOC}.`,
  },
  peedeeWater: {
    src: "/images/hist/georgetown-harbor.jpg",
    credit: `Harbor, Georgetown. Carol M. Highsmith, ${LOC}.`,
  },
  church: {
    src: "/images/hist/circular-church.jpg",
    credit: `Ruins of Circular Church and Secession Hall, Charleston, 1865. ${LOC}.`,
  },
  yard: {
    src: "/images/hist/circular-churchyard.jpg",
    credit: `Churchyard, Circular Church, Charleston. ${LOC}.`,
  },
  school: {
    src: "/images/hist/penn-school.jpg",
    credit: `Laura Towne’s school, St. Helena Island. ${LOC}.`,
  },
  gullah: {
    src: "/images/hist/st-helena-july4.jpg",
    credit: `Fourth of July, St. Helena Island, 1939. Marion Post Wolcott, ${FSA}.`,
  },
  homeGullah: {
    src: "/images/hist/st-helena-home.jpg",
    credit: `Home on St. Helena Island. ${FSA}.`,
  },
  native: {
    src: "/images/hist/catawba-map.jpg",
    credit: `Catawba deerskin map, c. 1721. ${LOC}.`,
  },
  capitol: {
    src: "/images/hist/statehouse-now.jpg",
    credit: `South Carolina State House. Carol M. Highsmith, ${LOC}.`,
  },
  ruins: {
    src: "/images/hist/charleston-ruins.jpg",
    credit: `Ruins in Charleston, 1865. ${LOC}.`,
  },
  sumter: {
    src: "/images/hist/fort-sumter.jpg",
    credit: `Interior of Fort Sumter, April 1865. ${LOC}.`,
  },
  camden: {
    src: "/images/hist/camden-sketch.jpg",
    credit: `Battle near Camden, 1780. ${LOC}.`,
  },
  sullivan: {
    src: "/images/hist/fort-sullivan-plan.jpg",
    credit: `Attack on Fort Sullivan, 1776. ${LOC}.`,
  },
  moultrie: {
    src: "/images/hist/fort-moultrie.jpg",
    credit: `Fort Moultrie, Charleston Harbor. ${LOC}.`,
  },
  harbor: {
    src: "/images/hist/charleston-harbor.jpg",
    credit: `Charleston Harbor. Carol M. Highsmith, ${LOC}.`,
  },
  kings: {
    src: "/images/hist/kings-mountain.jpg",
    credit: `Kings Mountain. ${NPS}.`,
  },
  planter: {
    src: "/images/hist/planter.jpg",
    credit: `Steamer Planter, Charleston. ${LOC}.`,
  },
} as const satisfies Record<string, HistImg>;

function imageFor(m: Marker): HistImg {
  if (BY_ID[m.id]) return BY_ID[m.id];
  const tags = new Set(m.tags);
  const blob = `${m.name} ${m.city} ${m.county}`.toLowerCase();
  const rockHill = /rock hill/.test(blob);

  if (m.id === "40-122" || /state house/i.test(m.name)) return IMG.capitol;
  if (tags.has("gullah") || m.id === "07-15")
    return hashPick(m.id, [IMG.gullah, IMG.homeGullah, IMG.school]);
  if (rockHill && /mill|plant|factory|depot|textile|yarn|cotton|bleacher/i.test(blob))
    return hashPick(m.id, [IMG.aragon, IMG.doffers]);
  if (tags.has("church") || /church|chapel|synagogue|mosque|parish/i.test(m.name))
    return hashPick(m.id, [IMG.church, IMG.yard]);
  if (tags.has("school") || /school|college|academy|university|institute/i.test(m.name))
    return IMG.school;
  if (tags.has("native-american")) return IMG.native;
  if (tags.has("cemetery") || /cemetery|grave|churchyard/i.test(m.name)) return IMG.yard;
  if (tags.has("plantation") || /plantation/i.test(m.name))
    return hashPick(m.id, [IMG.hall, IMG.planter]);
  if (tags.has("home") || /house|hall|mansion|homeplace/i.test(m.name))
    return hashPick(m.id, [IMG.hall, IMG.ruralHouse, IMG.homeGullah]);
  if (tags.has("civil-rights") || /massacre|sit-in|sit ins/i.test(m.name)) return IMG.ruins;
  if (/mill|depot|factory|plant|textile|yarn|foundry|iron works/i.test(blob))
    return hashPick(m.id, [IMG.mill, IMG.olympia, IMG.newberry, IMG.millModern, IMG.steel]);
  if (m.era === "revolution" && tags.has("battle")) return IMG.camden;
  if (m.era === "revolution")
    return hashPick(m.id, [IMG.sullivan, IMG.camden, IMG.moultrie]);
  if (m.era === "civil-war") return hashPick(m.id, [IMG.sumter, IMG.ruins]);
  if (m.era === "reconstruction")
    return hashPick(m.id, [IMG.school, IMG.gullah, IMG.ruins]);
  if (tags.has("african-american"))
    return hashPick(m.id, [IMG.gullah, IMG.school, IMG.rural, IMG.homeGullah]);
  if (/\(\d{4}\s*[-–]\s*\d{4}\)/.test(m.name) || /born |diplomat|governor|senator|congress/i.test(m.name)) {
    if (m.region === "Pee Dee") return hashPick(m.id, [IMG.peedee, IMG.cotton]);
    if (m.region === "Lowcountry") return IMG.harbor;
    return hashPick(m.id, [IMG.capitol, IMG.peedee]);
  }
  if (m.era === "interwar")
    return hashPick(m.id, [IMG.rural, IMG.cotton, IMG.ruralHouse]);
  if (m.era === "postwar")
    return hashPick(m.id, [IMG.millModern, IMG.steel, IMG.capitol]);
  if (m.era === "new-south")
    return hashPick(m.id, [IMG.olympia, IMG.mill, IMG.newberry]);
  if (m.era === "antebellum")
    return hashPick(m.id, [IMG.hall, IMG.planter, IMG.cotton]);
  if (m.era === "early-republic" || m.era === "colonial")
    return hashPick(m.id, [IMG.peedee, IMG.native, IMG.sullivan]);
  if (m.region === "Pee Dee")
    return hashPick(m.id, [IMG.peedee, IMG.cotton, IMG.peedeeWater]);
  if (m.region === "Midlands")
    return hashPick(m.id, [IMG.capitol, IMG.olympia, IMG.cotton]);
  if (m.region === "Upstate")
    return hashPick(m.id, [IMG.kings, IMG.millModern, IMG.ruralHouse]);
  if (m.region === "Lowcountry")
    return hashPick(m.id, [IMG.harbor, IMG.hall, IMG.gullah]);
  return IMG.capitol;
}

const FORT_MILL_VIDEO: Record<string, string> = {
  "29-28": "/videos/battlefield.mp4",
  "29-33": "/videos/church.mp4",
  "29-35": "/videos/mill.mp4",
  "46-04": "/videos/civil-war.mp4",
  "46-21": "/videos/catawba.mp4",
  "46-45": "/videos/catawba.mp4",
  "46-49": "/videos/church.mp4",
  "46-68": "/videos/penn.mp4",
  "46-87": "/videos/church.mp4",
  "46-89": "/videos/penn.mp4",
};

const FILM_FOR_IMAGE: Record<string, string> = {
  "/images/hist/roper.jpg": "/videos/roper.mp4",
  "/images/hist/aragon-mill.jpg": "/videos/aragon.mp4",
  "/images/hist/aragon-doffers.jpg": "/videos/aragon.mp4",
  "/images/hist/cotton-sumter.jpg": "/videos/cotton.mp4",
  "/images/hist/drayton-hall.jpg": "/videos/plantation.mp4",
  "/images/hist/marlborough-map.jpg": "/videos/peedee.mp4",
  "/images/hist/drayton-mill.jpg": "/videos/mill-modern.mp4",
  "/images/hist/sharecropper.jpg": "/videos/rural.mp4",
  "/images/hist/sharecropper-house.jpg": "/videos/rural.mp4",
  "/images/hist/georgetown-steel.jpg": "/videos/steel.mp4",
  "/images/hist/georgetown-harbor.jpg": "/videos/peedee-harbor.mp4",
  "/images/hist/olympia-mill.jpg": "/videos/olympia.mp4",
  "/images/hist/graniteville-mill.jpg": "/videos/mill.mp4",
  "/images/hist/newberry-mill.jpg": "/videos/mill.mp4",
  "/images/hist/circular-church.jpg": "/videos/church.mp4",
  "/images/hist/circular-churchyard.jpg": "/videos/church.mp4",
  "/images/hist/penn-school.jpg": "/videos/penn.mp4",
  "/images/hist/st-helena-july4.jpg": "/videos/st-helena.mp4",
  "/images/hist/st-helena-home.jpg": "/videos/st-helena.mp4",
  "/images/hist/catawba-map.jpg": "/videos/catawba.mp4",
  "/images/hist/statehouse-now.jpg": "/videos/capitol.mp4",
  "/images/hist/charleston-ruins.jpg": "/videos/civil-war.mp4",
  "/images/hist/fort-sumter.jpg": "/videos/sumter.mp4",
  "/images/hist/camden-sketch.jpg": "/videos/battlefield.mp4",
  "/images/hist/fort-sullivan-plan.jpg": "/videos/revolution.mp4",
  "/images/hist/fort-moultrie.jpg": "/videos/moultrie.mp4",
  "/images/hist/charleston-harbor.jpg": "/videos/moultrie.mp4",
  "/images/hist/kings-mountain.jpg": "/videos/battlefield.mp4",
  "/images/hist/planter.jpg": "/videos/planter.mp4",
};

export function lessonVideo(m: Marker): string {
  if (FORT_MILL_VIDEO[m.id]) return FORT_MILL_VIDEO[m.id];
  const src = imageFor(m).src;
  return FILM_FOR_IMAGE[src] ?? "/videos/capitol.mp4";
}

export type SceneKind =
  | "palmetto"
  | "fort"
  | "cannon"
  | "church"
  | "school"
  | "marsh"
  | "mill"
  | "capitol"
  | "native";

export function sceneKind(m: Marker): SceneKind {
  if (m.id === "40-122") return "capitol";
  if (m.tags.includes("church")) return "church";
  if (m.tags.includes("school")) return "school";
  if (m.tags.includes("native-american")) return "native";
  if (m.tags.includes("gullah") || m.region === "Lowcountry") return "marsh";
  if (/mill|depot/i.test(m.name)) return "mill";
  if (m.era === "civil-war") return "fort";
  if (m.era === "revolution") return "cannon";
  return "palmetto";
}

const FEATURED_LESSONS: Record<string, string> = {
  "10-46":
    "This is the fight that named South Carolina the Palmetto State. On Sullivan's Island in 1776, a half-finished fort of palmetto logs shrugged off the British fleet.",
  "07-15":
    "Penn School, founded in 1862 on St. Helena Island, became one of the first schools in the South for formerly enslaved people — a seedbed of Gullah Geechee education and civil rights.",
  "07-23":
    "Mitchelville, on Hilton Head, was among the first self-governed towns of formerly enslaved people in the United States, laid out during the Civil War under Union occupation.",
  "07-24":
    "Each New Year's Day in Beaufort County, Gullah communities mark Emancipation Day — the reading of freedom on the Sea Islands, months before the rest of the Confederacy fell.",
  "40-122":
    "The South Carolina State House in Columbia has been the seat of state government since the 1850s, its grounds a ledger of war, reconstruction, and the long argument over who the state belongs to.",
  "46-06":
    "Nation Ford was the ancient Catawba crossing of the river, later a wagon road, railroad, and Civil War corridor — the hinge between the Carolina piedmont and the wider world.",
  "46-21":
    "Fort Mill grew from a Catawba frontier and a plantation landscape into a mill town. Its name recalls a colonial-era fort near the Catawba River, not a Civil War earthwork.",
  "38-27":
    "In 1968, highway patrolmen fired on students protesting segregation at a bowling alley in Orangeburg. Three young men were killed. It remains one of the bloodiest days of the civil rights movement in South Carolina.",
  "02-45":
    "The Hamburg Massacre of 1876 was a Reconstruction-era attack on a Black militia company in Aiken County — a turning point that helped end Reconstruction in South Carolina.",
  "28-01":
    "In August 1780, Horatio Gates's American army broke before Cornwallis at Camden. The disaster opened the grim partisan war in the Carolina backcountry.",
  "24-03":
    "Ninety Six was a colonial backcountry fort and the scene of a long 1781 siege — a star-shaped earthwork still etched in the red clay of Greenwood County.",
  "44-07":
    "At Blackstock's in 1780, Thomas Sumter's militia bloodied Banastre Tarleton's British legion. It was a rare open-field check on the British in the upcountry.",
  "29-09":
    "Andrew Jackson, seventh president of the United States, was born in 1767 in the Waxhaws, a Scots-Irish settlement that straddled the Carolina line.",
  "10-76":
    "In 1862, Robert Smalls — an enslaved harbor pilot — seized the Confederate steamer Planter in Charleston Harbor and delivered it, and freedom, to the Union blockade.",
  "07-39":
    "In 1863 Harriet Tubman guided a Union raid up the Combahee River, freeing more than 700 people from rice plantations — the only military raid of the war planned by a woman.",
  "18-04":
    "Middleton Place on the Ashley River was a rice plantation and the family seat of a Declaration signer. Its surviving landscape is one of the oldest designed gardens in America.",
};

export function searchMarkers(markers: Marker[], q: string): Marker[] {
  const s = q.trim().toLowerCase();
  if (!s) return markers;
  return markers.filter((m) => {
    const hay = `${m.name} ${m.name2} ${m.city} ${m.county} ${m.addr} ${m.front} ${m.id}`.toLowerCase();
    return hay.includes(s);
  });
}
