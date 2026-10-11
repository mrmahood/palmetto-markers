import type {
  LessonArt,
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Second Beaufort pass. Facts stay on each marker’s inscription.
 * 07-62 is the companion plaque for the same Beaufort College building as 07-26
 * and is left on the inscription so the two pages do not repeat one lesson. */

const INTRO =
  "Move through the years on this marker. Tap the picture. Every fact is from the inscription.";

function art(file: string, label: string): LessonArt {
  return { src: `/images/lessons/${file}`, label };
}

function cited(id: string, name: string, sides: "front" | "front and back"): LessonSource {
  return {
    id: "inscription",
    label: `South Carolina Historical Marker ${id}, “${name},” ${sides} inscription. South Carolina Department of Archives and History, Historical Marker Program.`,
  };
}

function span(note: string): LessonSource {
  return { id: "span", label: note };
}

function lesson(
  markerId: string,
  title: string,
  timelineLabel: string,
  sources: LessonSource[],
  panels: LessonPanel[],
): MarkerLesson {
  return { markerId, title, intro: INTRO, timelineLabel, sources, panels };
}

function order(events: LessonEvent[], offer: string[]): LessonPanel {
  return {
    kind: "order",
    id: "task",
    kicker: "Try it",
    title: "Put the events in order",
    partLabel: "put events in order",
    prompt: "Tap the earliest event first. The marker is the answer key.",
    doneLine: "That’s the order on the marker.",
    events,
    offer,
  };
}

function takeaway(lines: string[]): LessonPanel {
  return {
    kind: "takeaway",
    id: "takeaway",
    kicker: "Takeaway",
    title: "3 things to remember",
    partLabel: "three things to remember",
    lines,
  };
}

export const beaufortLessonsB: MarkerLesson[] = [
  lesson(
    "07-18",
    "Fish Hall and two brothers",
    "Fish Hall timeline",
    [
      cited("07-18", "Fish Hall Plantation", "front and back"),
      span("“500 acres” is the size of the 1717 grant printed on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "cabins",
        kicker: "1717",
        title: "A grant, then a plantation",
        partLabel: "the plantation",
        art: art(
          "fishhall-cabins.jpg",
          "Illustration of low tabby ruins in a field. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grant",
            label: "The 1717 grant",
            x: 32,
            y: 58,
            fact: "This plantation was part of a 1717 proprietary land grant of 500 acres to Col. John Barnwell. Later owners included members of the Green, Ellis, and Pope families.",
          },
          {
            id: "tabby",
            label: "The ruins and the graves",
            x: 74,
            y: 46,
            fact: "Nearby tabby ruins are the remains of fireplaces of slave cabins. The marker says graves of Black people, who made up most of the island’s population until after the 1950s, are in nearby Drayton Cemetery.",
          },
        ],
      },
      {
        kind: "scene",
        id: "ships",
        kicker: "1861",
        title: "Brothers on opposite sides",
        partLabel: "the brothers",
        art: art(
          "fishhall-ships.jpg",
          "Illustration of two warships on a sound. Not portraits of those ships, and not a historical photograph.",
        ),
        hotspots: [
          {
            id: "thomas",
            label: "Thomas F. Drayton",
            x: 28,
            y: 58,
            fact: "Confederate Brig. Gen. Thomas F. Drayton commanded this area at the Battle of Port Royal on November 7, 1861. Earlier he had married Emma Catherine Pope, whose parents owned Fish Hall.",
          },
          {
            id: "percival",
            label: "Percival Drayton",
            x: 76,
            y: 52,
            fact: "His brother, Capt. Percival Drayton, commanded the Union warship Pocahontas at that same battle.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1717",
        title: "The grant the marker prints",
        partLabel: "acres",
        value: 500,
        unit: "acres",
        meant: "What this meant: the marker says Col. John Barnwell’s 1717 proprietary grant, of which this plantation was part, was 500 acres.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("fishhall-cabins.jpg", "Illustration of tabby cabin remains. Not a historical photograph."),
        nowArt: art(
          "fishhall-today.jpg",
          "Illustration of a marker in a field. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of tabby ruins, for the fireplace remains the marker describes. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker in a field, for the spot on Roy Gall Road beside Barker Field. Not a photograph of that field.",
      },
      order(
        [
          {
            id: "grant",
            year: "1717",
            label: "John Barnwell receives a 500-acre grant.",
            why: "The marker dates that proprietary grant to 1717.",
          },
          {
            id: "owners",
            year: "Later",
            label: "The Green, Ellis, and Pope families own it.",
            why: "The marker lists those later owners and does not print their years.",
          },
          {
            id: "marry",
            year: "Before",
            label: "Thomas Drayton marries Emma Catherine Pope.",
            why: "The marker says he married her earlier, and that her parents owned Fish Hall.",
          },
          {
            id: "battle",
            year: "1861",
            label: "The brothers are on opposite sides at Port Royal.",
            why: "The marker dates the battle to November 7, 1861, with Thomas in command of the area and Percival commanding Pocahontas.",
          },
        ],
        ["battle", "grant", "marry", "owners"],
      ),
      takeaway([
        "Fish Hall was part of John Barnwell’s 500-acre grant of 1717. Tabby ruins nearby are fireplace remains of slave cabins.",
        "Thomas F. Drayton, who married into the Pope family that owned Fish Hall, commanded this area on November 7, 1861.",
        "That same day his brother Percival commanded the Union warship Pocahontas.",
      ]),
    ],
  ),
  lesson(
    "07-26",
    "Beaufort College",
    "Beaufort College timeline",
    [
      cited("07-26", "Beaufort College", "front and back"),
      span("“9 years” is 1861 minus 1852, the years the marker gives for this building as the college."),
    ],
    [
      {
        kind: "scene",
        id: "building",
        kicker: "1852",
        title: "A Greek Revival academy",
        partLabel: "the building",
        art: art(
          "college-building.jpg",
          "Illustration of a columned school building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rooms",
            label: "This building",
            x: 30,
            y: 52,
            fact: "Beaufort College, a preparatory academy founded in 1795, occupied this Greek Revival building from 1852 to 1861. John Gibbes Barnwell II designed it with two classrooms, two offices, and a library modeled on the one at South Carolina College.",
          },
          {
            id: "moves",
            label: "Before this building",
            x: 74,
            y: 46,
            fact: "The school opened in 1804 at Bay and Church streets, closed in 1817 after a yellow fever epidemic, and reopened in 1820 at Newcastle and Craven streets.",
          },
        ],
      },
      {
        kind: "scene",
        id: "tents",
        kicker: "1861",
        title: "A school, then a hospital",
        partLabel: "the occupation",
        art: art(
          "college-tents.jpg",
          "Illustration of the school with tents beside it. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "close",
            label: "Fall of 1861",
            x: 30,
            y: 52,
            fact: "The college closed in the fall of 1861 when Federal troops occupied Beaufort. For the rest of the war it was a school for former slaves and part of a hospital for freedmen and Federal soldiers.",
          },
          {
            id: "later",
            label: "After the war",
            x: 74,
            y: 55,
            fact: "It was headquarters of the Freedmen’s Bureau here during Reconstruction, a public elementary school in 1909, and in 1959 the University of South Carolina acquired the building for its Beaufort campus.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1852–1861",
        title: "Years the college used this building",
        partLabel: "years in this building",
        value: 9,
        unit: "years",
        meant: "What this meant: 1861 comes 9 years after 1852. Those are the years the marker gives for the college in this building, before Federal occupation closed it.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("college-building.jpg", "Illustration of the 1852 academy. Not a historical photograph."),
        nowArt: art(
          "college-today.jpg",
          "Illustration of a marker and the building at 800 Carteret Street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the academy the marker says the college occupied from 1852 to 1861. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and building, for 800 Carteret Street. The marker says the University of South Carolina acquired it in 1959. Not a photograph of the campus.",
      },
      order(
        [
          {
            id: "found",
            year: "1795",
            label: "Beaufort College is founded.",
            why: "The marker dates the founding of the preparatory academy to 1795.",
          },
          {
            id: "open",
            year: "1804",
            label: "It opens at Bay and Church streets.",
            why: "The marker says it opened there in 1804, closed in 1817 after yellow fever, and reopened in 1820 on Newcastle and Craven.",
          },
          {
            id: "here",
            year: "1852",
            label: "This building becomes the college.",
            why: "The marker says the college occupied this building, designed by John Gibbes Barnwell II, from 1852.",
          },
          {
            id: "shut",
            year: "1861",
            label: "It closes when Federal troops occupy Beaufort.",
            why: "The marker says the doors closed in the fall of 1861, and the building then served former slaves and as part of a hospital.",
          },
        ],
        ["here", "found", "shut", "open"],
      ),
      takeaway([
        "Founded in 1795, the college moved twice before this Greek Revival building of 1852, which held two classrooms, two offices, and a library.",
        "In the fall of 1861 it closed. During the war it was a school for former slaves, part of a hospital, and later a Freedmen’s Bureau headquarters.",
        "It became a public elementary school in 1909. In 1959 the University of South Carolina acquired the building for its Beaufort campus.",
      ]),
    ],
  ),
  lesson(
    "07-28",
    "Battery Saxton",
    "Battery Saxton timeline",
    [
      cited("07-28", "Battery Saxton", "front and back"),
      span("“3” is the number of 8-inch siege howitzers the marker says the battery held."),
    ],
    [
      {
        kind: "scene",
        id: "guns",
        kicker: "1862",
        title: "Three howitzers",
        partLabel: "the battery",
        art: art(
          "battery-guns.jpg",
          "Illustration of an earthwork with three cannons. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Who built it",
            x: 34,
            y: 55,
            fact: "Battery Saxton was built here in 1862, in the second line of earthworks Federal troops built while occupying Beaufort. The 1st New York Engineers laid it out with the assistance of Black laborers.",
          },
          {
            id: "guns",
            label: "The guns",
            x: 62,
            y: 58,
            fact: "It held 3 eight-inch siege howitzers and was occupied from 1862 to 1865.",
          },
        ],
      },
      {
        kind: "scene",
        id: "line",
        kicker: "1862",
        title: "From the creek to the river",
        partLabel: "the line",
        art: art(
          "battery-line.jpg",
          "Illustration of earthworks between a creek and a river. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "line",
            label: "The line",
            x: 40,
            y: 55,
            fact: "It was one of two batteries anchoring a line from Battery Creek to the Beaufort River. The marker says remnants are visible just south of U.S. Highway 21, called Shell Road during the war.",
          },
          {
            id: "saxton",
            label: "Rufus Saxton",
            x: 74,
            y: 42,
            fact: "The battery was named for Brig. Gen. Rufus Saxton (1824–1908) of Massachusetts. As military governor of the Georgia and South Carolina sea islands from 1862 to 1865, he pushed education for freedmen and the raising of Black units for the U.S. Army.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "On the marker",
        title: "Howitzers the marker counts",
        partLabel: "howitzers",
        value: 3,
        unit: "howitzers",
        meant: "What this meant: the marker says Battery Saxton held 3 eight-inch siege howitzers.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("battery-guns.jpg", "Illustration of the 1862 battery. Not a historical photograph."),
        nowArt: art(
          "battery-today.jpg",
          "Illustration of a marker and low earthworks. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an earthwork battery, for the one built here in 1862. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and earthworks, for 2226 Boundary Street, where the marker says remnants are still visible. Not a photograph of the site.",
      },
      order(
        [
          {
            id: "built",
            year: "1862",
            label: "The battery is built in the second line of earthworks.",
            why: "The marker dates construction to 1862 and names the 1st New York Engineers and Black laborers.",
          },
          {
            id: "held",
            year: "1862",
            label: "It is occupied through 1865, with 3 howitzers.",
            why: "The marker says it was occupied 1862–65 as one of two batteries from Battery Creek to the Beaufort River.",
          },
          {
            id: "bureau",
            year: "1865",
            label: "Saxton becomes a Freedmen’s Bureau commissioner.",
            why: "The marker says that after his years as military governor, he was assistant commissioner for South Carolina, Georgia, and Florida in 1865–66.",
          },
        ],
        ["bureau", "built", "held"],
      ),
      takeaway([
        "Battery Saxton was a Federal earthwork of 1862, laid out by the 1st New York Engineers with Black laborers, and armed with 3 eight-inch siege howitzers.",
        "It anchored a line from Battery Creek to the Beaufort River until 1865. Remnants are still marked south of the old Shell Road.",
        "It was named for Rufus Saxton, military governor of the sea islands, who backed schools for freedmen and Black units in the U.S. Army.",
      ]),
    ],
  ),
  lesson(
    "07-39",
    "The Combahee River raid",
    "Combahee raid timeline",
    [
      cited("07-39", "Combahee River Raid", "front and back"),
      span("“300” is the number of soldiers the marker says the gunboats landed. “More than 700” is printed separately and is not rounded down to 700."),
    ],
    [
      {
        kind: "scene",
        id: "boats",
        kicker: "1863",
        title: "Up the Combahee",
        partLabel: "the raid",
        art: art(
          "combahee-boats.jpg",
          "Illustration of gunboats and rice fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "raid",
            label: "June 1–2, 1863",
            x: 32,
            y: 55,
            fact: "On June 1–2, 1863, parts of the 2nd South Carolina Volunteer Infantry, an African American unit, and the 3rd Rhode Island Artillery raided up the Confederate-held Combahee. Col. James Montgomery led them. Harriet Tubman, already famous for her work with the Underground Railroad, went with him.",
          },
          {
            id: "land",
            label: "The landing",
            x: 72,
            y: 48,
            fact: "Union gunboats landed 300 soldiers along the river. One force came ashore here at Combahee Ferry.",
          },
        ],
      },
      {
        kind: "scene",
        id: "ferry",
        kicker: "1863",
        title: "Ashore at the ferry",
        partLabel: "the ferry",
        art: art(
          "combahee-ferry.jpg",
          "Illustration of a ferry landing and rice fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rice",
            label: "What the soldiers took",
            x: 70,
            y: 55,
            fact: "Soldiers took livestock and supplies and destroyed houses, barns, and rice at nearby plantations.",
          },
          {
            id: "free",
            label: "Taken to freedom",
            x: 32,
            y: 58,
            fact: "More than 700 enslaved men, women, and children were taken to freedom, in perhaps the largest emancipation event in wartime South Carolina. Some of the freedmen soon enlisted in the U.S. Army.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "June 1863",
        title: "Soldiers the marker says landed",
        partLabel: "soldiers landed",
        value: 300,
        unit: "soldiers",
        meant: "What this meant: the marker says Union gunboats landed 300 soldiers along the river. It separately says more than 700 enslaved people were taken to freedom. That second figure is not a round 700.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("combahee-ferry.jpg", "Illustration of the ferry landing. Not a historical photograph."),
        nowArt: art(
          "combahee-today.jpg",
          "Illustration of a marker at a bridge landing. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a landing and rice fields, for Combahee Ferry on June 1–2, 1863. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a bridge, for Steel Bridge Landing on U.S. 17 at the Beaufort–Colleton line. Not a photograph of that landing.",
      },
      order(
        [
          {
            id: "start",
            year: "1863",
            label: "Montgomery’s raid starts up the Combahee. Tubman is with him.",
            why: "The marker dates the raid to June 1–2, 1863, and says Harriet Tubman accompanied Col. James Montgomery.",
          },
          {
            id: "land",
            year: "1863",
            label: "Gunboats land 300 soldiers. One force comes ashore here.",
            why: "The marker says one force landed at Combahee Ferry.",
          },
          {
            id: "burn",
            year: "1863",
            label: "Plantation houses, barns, and rice are destroyed.",
            why: "The marker lists livestock, supplies, houses, barns, and rice.",
          },
          {
            id: "free",
            year: "1863",
            label: "More than 700 people are taken to freedom.",
            why: "The marker calls it perhaps the largest emancipation event in wartime South Carolina. Some freedmen soon enlisted.",
          },
        ],
        ["free", "start", "burn", "land"],
      ),
      takeaway([
        "On June 1–2, 1863, Col. James Montgomery led African American troops and Rhode Island artillery up the Combahee. Harriet Tubman went with them.",
        "Gunboats landed 300 soldiers. At this ferry they struck plantations and took people off them.",
        "More than 700 enslaved people were taken to freedom. The marker calls it perhaps the largest emancipation event in wartime South Carolina.",
      ]),
    ],
  ),
  lesson(
    "07-60",
    "The rear-range light",
    "Hilton Head range light timeline",
    [
      cited("07-60", "Hilton Head Rear-Range Lighthouse", "front and back"),
      span("“92 feet” is the height above sea level the marker gives for the light."),
    ],
    [
      {
        kind: "scene",
        id: "tower",
        kicker: "1879",
        title: "A light over the sound",
        partLabel: "the tower",
        art: art(
          "range-tower.jpg",
          "Illustration of a skeletal iron lighthouse in marsh. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1879–1880",
            x: 24,
            y: 42,
            fact: "The rear lighthouse of the Hilton Head Range Light Station was built in 1879–1880 by the U.S. Light House Board. Its light stood 92 feet above sea level and was visible from 15 miles away, to guide ships in Port Royal Sound.",
          },
        ],
      },
      {
        kind: "scene",
        id: "pair",
        kicker: "1884",
        title: "Two lights in a line",
        partLabel: "the range",
        art: art(
          "range-pair.jpg",
          "Illustration of a distant tower and a nearer beacon. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "align",
            label: "How sailors used it",
            x: 22,
            y: 48,
            fact: "Sailors entering Port Royal Sound steered until the rear light and the forward beacon lined up. The forward beacon stood more than a mile in front of this tower. The shifting channel forced that beacon to be moved many times.",
          },
          {
            id: "house",
            label: "1884",
            x: 78,
            y: 62,
            fact: "In 1884 a movable keeper’s house with a beacon built into it was made for those frequent moves. The station was decommissioned in 1932. The lighthouse is listed in the National Register. The marker does not give that listing’s year.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The light",
        title: "Feet above the sea",
        partLabel: "feet",
        value: 92,
        unit: "feet",
        meant: "What this meant: the marker says the light stood 92 feet above sea level and could be seen from 15 miles away.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("range-tower.jpg", "Illustration of the rear light. Not a historical photograph."),
        nowArt: art(
          "range-today.jpg",
          "Illustration of a marker and an iron tower. Not a photograph of the lighthouse today.",
        ),
        thenCaption:
          "Illustration of a skeletal tower, for the rear light built in 1879–1880. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and tower, for Leamington Lane. The marker says the light was decommissioned in 1932. Not a photograph of the tower.",
      },
      order(
        [
          {
            id: "built",
            year: "1879",
            label: "The Light House Board builds the rear tower.",
            why: "The marker dates the tower to 1879–1880.",
          },
          {
            id: "steer",
            year: "Then",
            label: "Ships steer until the two lights line up.",
            why: "The marker explains the range: rear tower and forward beacon, the beacon more than a mile in front.",
          },
          {
            id: "move",
            year: "1884",
            label: "A movable keeper’s house is built.",
            why: "The marker says the shifting channel forced many moves, and the 1884 house had a beacon built in.",
          },
          {
            id: "out",
            year: "1932",
            label: "The station is decommissioned.",
            why: "The marker dates decommissioning to 1932.",
          },
        ],
        ["out", "built", "move", "steer"],
      ),
      takeaway([
        "The rear range light went up in 1879–1880. Its light was 92 feet above the sea and visible 15 miles out.",
        "Ships lined it up with a forward beacon more than a mile ahead. A movable keeper’s house of 1884 followed the shifting channel.",
        "The station was decommissioned in 1932. The tower is on the National Register. This marker does not date that listing.",
      ]),
    ],
  ),
  lesson(
    "07-69",
    "Oyotunji Village",
    "Oyotunji timeline",
    [
      cited("07-69", "Oyotunji Village", "front and back"),
      span("“9 acres” is the size of the parcel the marker prints. “As many as 150–200” is the marker’s range, not a single headcount."),
    ],
    [
      {
        kind: "scene",
        id: "court",
        kicker: "1972",
        title: "Oyo again awakes",
        partLabel: "the village",
        art: art(
          "oyotunji-court.jpg",
          "Illustration of porch houses, a small school, and a market stall. Not a photograph of Oyotunji.",
        ),
        hotspots: [
          {
            id: "name",
            label: "The name",
            x: 32,
            y: 55,
            fact: "In 1972 they established Oyotunji Village on a 9-acre parcel here. The name refers to the West African empire and is Yoruba for “Oyo again awakes.”",
          },
          {
            id: "built",
            label: "What they built",
            x: 78,
            y: 62,
            fact: "Here they built temples, shrines, homes, a school, a museum, and a bazaar. The picture is an illustration of homes, a school, and a market, not a plan of the village.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gate",
        kicker: "1970",
        title: "From New York to Sheldon",
        partLabel: "the founding",
        art: art(
          "oyotunji-gate.jpg",
          "Illustration of a wooden gate and porch houses. Not a photograph of the village.",
        ),
        hotspots: [
          {
            id: "arrive",
            label: "1970",
            x: 28,
            y: 55,
            fact: "In 1970 members of the New York Yoruba Temple arrived in Beaufort County to found an African village centered on traditional Yoruba religion and culture. They were influenced by Black Nationalist thought and rented lots at two other sites first.",
          },
          {
            id: "oba",
            label: "The lead founder",
            x: 72,
            y: 48,
            fact: "The lead founder was Oba Efuntola Oseijeman Adelabu Adefunmi I (1928–2005), born Walter Eugene King in Detroit. By the early 1980s the village was home to as many as 150 to 200 people.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1972",
        title: "Acres the marker gives this parcel",
        partLabel: "acres",
        value: 9,
        unit: "acres",
        meant: "What this meant: the marker says they established the village on a 9-acre parcel here in 1972, after renting two earlier sites.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("oyotunji-court.jpg", "Illustration of the compound. Not a photograph of Oyotunji."),
        nowArt: art(
          "oyotunji-today.jpg",
          "Illustration of a marker by a highway. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of houses, a school, and a market, for the buildings the marker lists. Not a photograph of Oyotunji.",
        nowCaption:
          "Illustration of a marker by a road, for Bryant Lane and U.S. 17/21 at Sheldon. Not a photograph of the village.",
      },
      order(
        [
          {
            id: "arrive",
            year: "1970",
            label: "Members of the New York Yoruba Temple arrive in the county.",
            why: "The marker dates their arrival to 1970.",
          },
          {
            id: "rent",
            year: "Next",
            label: "They rent lots at two other sites.",
            why: "The marker says those rentals came before the village here, and it does not date them.",
          },
          {
            id: "here",
            year: "1972",
            label: "Oyotunji is established on 9 acres.",
            why: "The marker dates the village on this parcel to 1972.",
          },
          {
            id: "grow",
            year: "1980s",
            label: "As many as 150 to 200 people live here.",
            why: "The marker gives that range for the early 1980s. It is not a single count.",
          },
        ],
        ["here", "arrive", "grow", "rent"],
      ),
      takeaway([
        "In 1970 members of the New York Yoruba Temple came to Beaufort County to found a village of traditional Yoruba religion and culture.",
        "In 1972, after two rented sites, they established Oyotunji, “Oyo again awakes,” on 9 acres and built temples, shrines, homes, a school, a museum, and a bazaar.",
        "The lead founder was Oba Adefunmi I, born Walter Eugene King in Detroit. By the early 1980s the marker says the village held as many as 150 to 200 people.",
      ]),
    ],
  ),
  lesson(
    "07-76",
    "Grace Chapel",
    "Grace Chapel timeline",
    [cited("07-76", "Grace Chapel A.M.E. Church", "front and back")],
    [
      {
        kind: "scene",
        id: "chapel",
        kicker: "1858",
        title: "A chapel for Black members",
        partLabel: "the chapel",
        art: art(
          "grace-chapel.jpg",
          "Illustration of a wooden chapel. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1858",
            x: 32,
            y: 52,
            fact: "The wooden building was built in 1858 and known as Grace Chapel. The Parish Church of St. Helena built it for the use of enslaved and free Black members.",
          },
        ],
      },
      {
        kind: "scene",
        id: "door",
        kicker: "1869",
        title: "Beaufort A.M.E.",
        partLabel: "the congregation",
        art: art(
          "grace-door.jpg",
          "Illustration of the chapel with an open door. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "org",
            label: "How the church formed",
            x: 32,
            y: 52,
            fact: "A.M.E. missionaries began preaching to freedpeople here in 1863. The Rev. Theophilus G. Steward did more local work in 1865. The church formally organized in 1869 as Beaufort A.M.E. and acquired this building in 1872.",
          },
          {
            id: "later",
            label: "After 1872",
            x: 72,
            y: 58,
            fact: "The congregation took the name Grace Chapel. Remodeled in 1911, it became a place for programs, performances, and meetings. In 2017 the church moved to a new building on Lady’s Island.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("grace-chapel.jpg", "Illustration of the 1858 chapel. Not a historical photograph."),
        nowArt: art(
          "grace-today.jpg",
          "Illustration of a marker on a quiet street. Not a photograph of 500 Charles Street.",
        ),
        thenCaption:
          "Illustration of a wooden chapel, for the 1858 building the marker describes. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a street, for 500 Charles Street. The marker says the congregation moved to Lady’s Island in 2017. Not a photograph of the old site.",
      },
      order(
        [
          {
            id: "built",
            year: "1858",
            label: "St. Helena’s builds Grace Chapel for Black members.",
            why: "The marker says the parish built it in 1858 for enslaved and free Black members.",
          },
          {
            id: "preach",
            year: "1863",
            label: "A.M.E. missionaries begin preaching here.",
            why: "The marker dates that preaching to 1863, and Steward’s further work to 1865.",
          },
          {
            id: "org",
            year: "1869",
            label: "Beaufort A.M.E. is formally organized.",
            why: "The marker dates the organization to 1869.",
          },
          {
            id: "buy",
            year: "1872",
            label: "The congregation acquires this building.",
            why: "The marker says they acquired the wooden chapel for worship in 1872.",
          },
        ],
        ["org", "built", "buy", "preach"],
      ),
      takeaway([
        "Grace Chapel was built in 1858 by St. Helena’s for enslaved and free Black members.",
        "A.M.E. preaching began in 1863. The congregation organized in 1869, acquired the building in 1872, and took the chapel’s name.",
        "Remodeled in 1911, it stayed a public gathering place until the church moved to Lady’s Island in 2017.",
      ]),
    ],
  ),
  lesson(
    "07-07",
    "Battle of Port Royal",
    "Port Royal battle timeline",
    [
      cited("07-07", "Battle of Port Royal", "front"),
      span("“18” is the number of Union warships the marker prints. “About 55” craft and “about 13,000” troops are the marker’s approximations."),
    ],
    [
      {
        kind: "scene",
        id: "ships",
        kicker: "1861",
        title: "Four and a half hours",
        partLabel: "the bombardment",
        art: art(
          "portroyal-ships.jpg",
          "Illustration of warships and a shore fort. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "fleet",
            label: "The fleet",
            x: 32,
            y: 52,
            fact: "On November 7, 1861, 18 Union warships and about 55 supporting craft, led by Adm. S. F. DuPont, bombarded Confederate forces for 4 1/2 hours.",
          },
          {
            id: "forts",
            label: "The two forts",
            x: 78,
            y: 48,
            fact: "Fort Walker was on this shore. Fort Beauregard was on the opposite point.",
          },
        ],
      },
      {
        kind: "scene",
        id: "beach",
        kicker: "1861",
        title: "The landing",
        partLabel: "the landing",
        art: art(
          "portroyal-beach.jpg",
          "Illustration of ships offshore and an empty beach. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "land",
            label: "The troops",
            x: 70,
            y: 62,
            fact: "About 13,000 troops under Gen. Thomas W. Sherman then landed on this beach and established the main Union blockade base on the South Atlantic coast.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "November 7",
        title: "Warships the marker counts",
        partLabel: "warships",
        value: 18,
        unit: "warships",
        meant: "What this meant: the marker says 18 Union warships, with about 55 supporting craft, bombarded the forts. The “about” figures are the marker’s, not exact counts.",
      },
      order(
        [
          {
            id: "guns",
            year: "1861",
            label: "DuPont’s fleet bombards the forts for 4 1/2 hours.",
            why: "The marker dates the battle to November 7, 1861, and starts with the bombardment.",
          },
          {
            id: "forts",
            year: "1861",
            label: "Fort Walker is on this shore, Fort Beauregard opposite.",
            why: "The marker names both forts in that bombardment.",
          },
          {
            id: "land",
            year: "1861",
            label: "About 13,000 troops land and open the blockade base.",
            why: "The marker says the landing followed the bombardment.",
          },
        ],
        ["land", "guns", "forts"],
      ),
      takeaway([
        "On November 7, 1861, 18 Union warships and about 55 other craft under Admiral DuPont bombarded Fort Walker and Fort Beauregard for 4 1/2 hours.",
        "Fort Walker stood on this Hilton Head shore. Fort Beauregard stood on the opposite point.",
        "About 13,000 troops under Gen. Thomas W. Sherman landed and made this the main Union blockade base on the South Atlantic coast.",
      ]),
    ],
  ),
  lesson(
    "07-41",
    "The G.A.R. hall",
    "G.A.R. hall timeline",
    [cited("07-41", "Grand Army of the Republic Hall", "front and back")],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "1896",
        title: "David Hunter Post No. 9",
        partLabel: "the hall",
        art: art("gar-hall.jpg", "Illustration of a wooden meeting hall. Not a historical photograph."),
        hotspots: [
          {
            id: "post",
            label: "The post",
            x: 32,
            y: 52,
            fact: "This building was built about 1896 by the David Hunter Post No. 9 of the Grand Army of the Republic. The G.A.R., founded in 1866, was a society for Union veterans, with white and Black posts.",
          },
          {
            id: "vets",
            label: "Who founded the post",
            x: 74,
            y: 46,
            fact: "African American veterans founded the post in 1888. Many had been enslaved on Sea Island plantations and had served in the United States Colored Troops.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "Decoration Day",
        title: "A day at the national cemetery",
        partLabel: "Decoration Day",
        art: art(
          "gar-cemetery.jpg",
          "Illustration of a cemetery gate and plain stones. Not a photograph of Beaufort National Cemetery.",
        ),
        hotspots: [
          {
            id: "hunter",
            label: "The name",
            x: 30,
            y: 58,
            fact: "The post was named for Gen. David Hunter (1802–1886), who in 1862 organized the nucleus of the 1st South Carolina Volunteers (Colored).",
          },
          {
            id: "day",
            label: "Decoration Day",
            x: 72,
            y: 48,
            fact: "Robert Smalls (1839–1915), Civil War figure, legislator, militia general, and congressman, was a post officer. The post held Decoration Day services at Beaufort National Cemetery. The Sons of Union Veterans still do.",
          },
        ],
      },
      order(
        [
          {
            id: "hunter",
            year: "1862",
            label: "David Hunter organizes the nucleus of the 1st South Carolina Volunteers.",
            why: "The marker dates that organizing to 1862, before the G.A.R. existed.",
          },
          {
            id: "gar",
            year: "1866",
            label: "The Grand Army of the Republic is founded.",
            why: "The marker dates the national society to 1866.",
          },
          {
            id: "post",
            year: "1888",
            label: "African American veterans found David Hunter Post.",
            why: "The marker dates the local post to 1888.",
          },
          {
            id: "hall",
            year: "1896",
            label: "The post builds this hall.",
            why: "The marker says the building went up about 1896.",
          },
        ],
        ["hall", "hunter", "post", "gar"],
      ),
      takeaway([
        "The G.A.R. was founded in 1866 for Union veterans. David Hunter Post No. 9 was founded in 1888 by African American veterans, many of them formerly enslaved Sea Island soldiers.",
        "The hall went up about 1896. The post was named for Gen. David Hunter, who in 1862 organized the nucleus of the 1st South Carolina Volunteers.",
        "Robert Smalls was a post officer. The post’s Decoration Day at Beaufort National Cemetery is still kept by the Sons of Union Veterans.",
      ]),
    ],
  ),
  lesson(
    "07-65",
    "The Pigeon Point camp",
    "Pigeon Point camp timeline",
    [
      cited("07-65", "World War II POW Camp", "front and back"),
      span("“Around 250” is the marker’s figure for Italian soldiers at this camp, not an exact roster."),
    ],
    [
      {
        kind: "scene",
        id: "tents",
        kicker: "1943",
        title: "Tents at Pigeon Point",
        partLabel: "the camp",
        art: art("pow-tents.jpg", "Illustration of tents in a field. Not a historical photograph."),
        hotspots: [
          {
            id: "open",
            label: "October 1943",
            x: 34,
            y: 58,
            fact: "In October 1943 the U.S. Army opened a prisoner-of-war camp near here. It was one of more than twenty such camps in South Carolina. It opened one month after Italy surrendered.",
          },
          {
            id: "men",
            label: "Who was held here",
            x: 70,
            y: 48,
            fact: "Around 250 Italian soldiers arrived from Camp Wheeler, near Macon, Georgia, after capture in North Africa. They lived in tents. The marker says more than 425,000 Axis prisoners were held in the United States during the war.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "1943",
        title: "Work in the fields",
        partLabel: "the harvest",
        art: art(
          "pow-fields.jpg",
          "Illustration of vegetable rows and crates. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "work",
            label: "The harvest",
            x: 32,
            y: 62,
            fact: "Beaufort County truck farmers employed the Italian soldiers to harvest vegetables, filling in for farm workers who were overseas or in better-paying war jobs.",
          },
          {
            id: "close",
            label: "When it closed",
            x: 74,
            y: 50,
            fact: "This camp closed by spring 1944. Axis prisoners remained in other South Carolina camps until 1946, when the last prisoners left U.S. soil.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "This camp",
        title: "The marker’s figure for this camp",
        partLabel: "soldiers",
        value: 250,
        unit: "soldiers, around",
        meant: "What this meant: the marker says around 250 Italian soldiers were held here. “More than twenty” camps and “more than 425,000” prisoners nationwide are separate figures, not exact totals.",
      },
      order(
        [
          {
            id: "open",
            year: "1943",
            label: "The camp opens in October, a month after Italy surrenders.",
            why: "The marker dates the opening to October 1943 and ties it to Italy’s surrender the month before.",
          },
          {
            id: "arrive",
            year: "1943",
            label: "Around 250 Italian soldiers arrive and live in tents.",
            why: "The marker says they came from Camp Wheeler after capture in North Africa.",
          },
          {
            id: "work",
            year: "1943",
            label: "They harvest vegetables for county truck farmers.",
            why: "The marker says that work filled a wartime labor shortage.",
          },
          {
            id: "close",
            year: "1944",
            label: "This camp closes by spring.",
            why: "The marker says it closed by spring 1944. Other camps in the state lasted until 1946.",
          },
        ],
        ["work", "open", "close", "arrive"],
      ),
      takeaway([
        "In October 1943 the Army opened a prisoner camp near Pigeon Point, one of more than twenty in South Carolina.",
        "Around 250 Italian soldiers, captured in North Africa, lived in tents and harvested vegetables for local truck farmers.",
        "This camp closed by spring 1944. The marker says the last Axis prisoners left the United States in 1946.",
      ]),
    ],
  ),
  lesson(
    "07-68",
    "The Great Fire of 1907",
    "Great Fire timeline",
    [
      cited("07-68", "Great Fire of 1907", "front and back"),
      span("“At least forty” is the marker’s figure for buildings damaged or destroyed. The lesson does not turn that into an exact 40."),
    ],
    [
      {
        kind: "scene",
        id: "start",
        kicker: "1907",
        title: "A barn, then Bay Street",
        partLabel: "where it started",
        art: art(
          "fire-start.jpg",
          "Illustration of a barn and a corner store on fire. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "barn",
            label: "1:30 in the afternoon",
            x: 30,
            y: 55,
            fact: "On January 19, 1907, a fire started around 1:30 p.m. in F. W. Scheper’s barn south of here and moved into a large store at this corner.",
          },
          {
            id: "wind",
            label: "The wind",
            x: 72,
            y: 42,
            fact: "The fire moved west on Bay Street. Strong winds scattered embers over much of downtown, up Carteret Street and to the northeast, as far as half a mile away.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1907",
        title: "After the flames",
        partLabel: "the losses",
        art: art(
          "fire-street.jpg",
          "Illustration of a damaged empty street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "count",
            label: "The buildings",
            x: 36,
            y: 52,
            fact: "Black and white volunteer firemen could not put the fire out. Their equipment was overpowered. At least forty buildings were damaged or destroyed. New ordinances then governed the materials and location of new buildings.",
          },
          {
            id: "death",
            label: "The one death",
            x: 70,
            y: 48,
            fact: "The only death was William Bennett, a member of the African American Allen Brass Band, who was shot by a soldier on patrol.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "January 19",
        title: "Buildings, at least",
        partLabel: "buildings",
        value: 40,
        unit: "buildings, at least",
        meant: "What this meant: the marker says at least forty buildings were damaged or destroyed. It does not give an exact total.",
      },
      order(
        [
          {
            id: "barn",
            year: "1907",
            label: "The fire starts in Scheper’s barn around 1:30 p.m.",
            why: "The marker dates January 19 and starts the fire in the barn south of this corner.",
          },
          {
            id: "store",
            year: "1907",
            label: "It reaches the store at this corner and runs west on Bay.",
            why: "The marker says the fire moved from the barn into that store, then west.",
          },
          {
            id: "loss",
            year: "1907",
            label: "At least forty buildings are damaged or destroyed.",
            why: "The marker gives that figure after the fire subsided.",
          },
          {
            id: "death",
            year: "1907",
            label: "William Bennett is shot by a soldier on patrol.",
            why: "The marker says that was the only death, and names him as a member of the Allen Brass Band.",
          },
        ],
        ["loss", "barn", "death", "store"],
      ),
      takeaway([
        "On January 19, 1907, the fire began about 1:30 p.m. in F. W. Scheper’s barn and entered the store at this corner of Bay Street.",
        "Wind carried it as far as half a mile. At least forty buildings were damaged or destroyed, and the town wrote new building rules.",
        "The only death was William Bennett of the Allen Brass Band, shot by a soldier on patrol.",
      ]),
    ],
  ),
  lesson(
    "07-70",
    "Beaufort Colored School",
    "Beaufort Colored School timeline",
    [
      cited("07-70", "Beaufort Colored School", "front and back"),
      span("“Thirteen” is the number of trustees the marker prints. “More than 300” students is a separate figure and is not treated as exactly 300."),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1867",
        title: "A house, thirteen trustees",
        partLabel: "the school",
        art: art(
          "colored-school.jpg",
          "Illustration of a two-story frame house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "open",
            label: "1867",
            x: 32,
            y: 52,
            fact: "Beaufort Colored School opened here in 1867 in a two-story frame residence. Thirteen free-born and previously enslaved Black men were the trustees. It was also called Beaufort Colored High School and Beaufort Town School.",
          },
          {
            id: "teachers",
            label: "The first teachers",
            x: 74,
            y: 58,
            fact: "Northern missionaries who had come to the Sea Islands in 1862 to open schools for former slaves were the first staff.",
          },
        ],
      },
      {
        kind: "scene",
        id: "side",
        kicker: "1925",
        title: "The only public school",
        partLabel: "the later years",
        art: art(
          "colored-side.jpg",
          "Illustration of the frame house from the side. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "only",
            label: "By the 1920s",
            x: 30,
            y: 52,
            fact: "It became the town’s only public school for African Americans. By the 1920s more than 300 students attended.",
          },
          {
            id: "smalls",
            label: "1925",
            x: 72,
            y: 48,
            fact: "After pressure from white school officials, and the 1925 construction of a new school at Ribault Road and Greene Street, the trustees gave up this property. The new school was named for Robert Smalls, one of the original thirteen founders.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1867",
        title: "Trustees the marker names as a number",
        partLabel: "trustees",
        value: 13,
        unit: "trustees",
        meant: "What this meant: the marker says thirteen free-born and previously enslaved Black men held this property as trustees. Robert Smalls was one of them.",
      },
      order(
        [
          {
            id: "come",
            year: "1862",
            label: "Northern missionaries come to open schools.",
            why: "The marker dates their arrival in the Sea Islands to 1862.",
          },
          {
            id: "open",
            year: "1867",
            label: "The school opens in a frame house under thirteen trustees.",
            why: "The marker dates the opening on this site to 1867.",
          },
          {
            id: "grow",
            year: "1920s",
            label: "More than 300 students attend the town’s only public school for African Americans.",
            why: "The marker places that enrollment in the 1920s.",
          },
          {
            id: "move",
            year: "1925",
            label: "A new school named for Robert Smalls replaces this site.",
            why: "The marker dates the new building at Ribault Road and Greene Street to 1925 and says the trustees then gave up this property.",
          },
        ],
        ["grow", "come", "move", "open"],
      ),
      takeaway([
        "The school opened in 1867 in a two-story house held by thirteen Black trustees, some free-born and some formerly enslaved.",
        "Missionaries who had come in 1862 were the first teachers. By the 1920s it was the town’s only public school for African Americans, with more than 300 students.",
        "In 1925 a new school on Ribault Road, named for founder Robert Smalls, replaced it.",
      ]),
    ],
  ),
  lesson(
    "07-72",
    "Fort Howell",
    "Fort Howell timeline",
    [cited("07-72", "Fort Howell", "front")],
    [
      {
        kind: "scene",
        id: "fort",
        kicker: "1864",
        title: "Built to cover Mitchelville",
        partLabel: "the fort",
        art: art(
          "howell-fort.jpg",
          "Illustration of an earth fort and distant houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "August to November 1864",
            x: 32,
            y: 55,
            fact: "The fort was built from August to November 1864 by the 32nd U.S. Colored Infantry and the 144th New York Infantry.",
          },
          {
            id: "why",
            label: "Why it was here",
            x: 76,
            y: 46,
            fact: "It was built to defend the nearby freedmen’s village of Mitchelville from Confederate raids. It was named for Gen. Joshua B. Howell (1806–1864).",
          },
        ],
      },
      {
        kind: "scene",
        id: "today",
        kicker: "2011",
        title: "Still in the ground",
        partLabel: "the listing",
        art: art(
          "howell-today.jpg",
          "Illustration of a marker and grassy fort walls. Not a photograph of the fort today.",
        ),
        hotspots: [
          {
            id: "list",
            label: "2011",
            x: 55,
            y: 48,
            fact: "The marker says the fort is significant for its design and structural integrity. It was listed in the National Register of Historic Places in 2011.",
          },
        ],
      },
      order(
        [
          {
            id: "born",
            year: "1806",
            label: "Joshua B. Howell is born.",
            why: "The marker prints his lifespan as 1806–1864.",
          },
          {
            id: "built",
            year: "1864",
            label: "The 32nd U.S. Colored Infantry and the 144th New York build the fort.",
            why: "The marker dates the work to August–November 1864.",
          },
          {
            id: "name",
            year: "1864",
            label: "It is named for Howell and set to defend Mitchelville.",
            why: "The marker gives both the name and the purpose. Howell died in 1864.",
          },
          {
            id: "list",
            year: "2011",
            label: "The fort is listed in the National Register.",
            why: "The marker dates that listing to 2011.",
          },
        ],
        ["list", "born", "name", "built"],
      ),
      takeaway([
        "From August to November 1864, the 32nd U.S. Colored Infantry and the 144th New York Infantry built this earth fort.",
        "It defended Mitchelville, the freedmen’s village nearby, and was named for Gen. Joshua B. Howell, who died that year.",
        "The marker credits the fort’s design and the fact that it still holds together. It was listed in the National Register in 2011.",
      ]),
    ],
  ),
];
