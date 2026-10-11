import type {
  LessonArt,
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Beaufort County pilot. Every fact is from that marker’s own inscription.
 * A year-span is only the difference of two years the marker prints.
 * Markers with one dated event, no dates, or a missing plaque are not here. */

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

function order(
  events: LessonEvent[],
  offer: string[],
): LessonPanel {
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

export const beaufortLessons: MarkerLesson[] = [
  lesson(
    "07-04",
    "Sheldon Church, in order",
    "Sheldon Church timeline",
    [
      cited("07-04", "Prince William’s Parish Church", "front and back"),
      span("“46 years” is 1825 minus 1779, the burning and the rebuild printed on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "built",
        kicker: "1751",
        title: "A church called Sheldon",
        partLabel: "the church is built",
        art: art(
          "sheldon-church.jpg",
          "Illustration of a standing brick church and churchyard, for Prince William’s Parish Church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "church",
            label: "The church",
            x: 32,
            y: 55,
            fact: "These ruins are of Prince William’s Parish Church, built about 1751–57. Lt. Gov. William Bull I (1683–1755) paid for most of it, and he is buried here.",
          },
          {
            id: "name",
            label: "Why it is called Sheldon",
            x: 74,
            y: 48,
            fact: "It is an Anglican church. People often call it Sheldon, after Bull’s plantation.",
          },
        ],
      },
      {
        kind: "scene",
        id: "ruins",
        kicker: "1779",
        title: "Burned, then taken down",
        partLabel: "fire and ruins",
        art: art(
          "sheldon-ruins.jpg",
          "Illustration of roofless brick ruins. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "burn",
            label: "The 1779 burning",
            x: 32,
            y: 52,
            fact: "Local Loyalists burned the church in 1779 during a raid by Gen. Augustine Prevost. The interior and roof were rebuilt in 1825–26.",
          },
          {
            id: "freedmen",
            label: "Who took it down",
            x: 72,
            y: 58,
            fact: "Many people believed Federal troops burned Sheldon Church in 1865. The marker says local freedmen dismantled it about 1865–67.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1779–1825",
        title: "Years between the fire and the rebuild",
        partLabel: "years between",
        value: 46,
        unit: "years",
        meant: "What this meant: 1825 comes 46 years after 1779. That is the stretch from the Loyalist burning to the rebuilt roof, using the years on the marker.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "sheldon-church.jpg",
          "Illustration of a standing church, for the building raised about 1751–57. Not a historical photograph.",
        ),
        nowArt: art(
          "sheldon-today.jpg",
          "Illustration of ruins and a marker on Old Sheldon Church Road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a standing church, for the building the marker says was raised about 1751–57. Not a historical photograph.",
        nowCaption:
          "Illustration of the ruins and a marker, for the site on Old Sheldon Church Road. Not a photograph of the ruins today.",
      },
      order(
        [
          {
            id: "built",
            year: "1751",
            label: "The church is built, paid for mostly by William Bull I.",
            why: "The marker dates the building to about 1751–57 and says Bull is buried here.",
          },
          {
            id: "burn",
            year: "1779",
            label: "Local Loyalists burn it during Prevost’s raid.",
            why: "The back of the marker dates that burning to 1779.",
          },
          {
            id: "roof",
            year: "1825",
            label: "The interior and roof are rebuilt.",
            why: "The marker says the interior and roof were rebuilt in 1825–26.",
          },
          {
            id: "down",
            year: "1865",
            label: "Local freedmen dismantle it. Federal troops did not burn it.",
            why: "The marker says the Federal-fire story is wrong. Freedmen dismantled the church about 1865–67.",
          },
        ],
        ["roof", "built", "down", "burn"],
      ),
      takeaway([
        "Prince William’s Parish Church was built about 1751–57. William Bull I paid for most of it, is buried here, and gave the church its other name, Sheldon.",
        "Loyalists burned it in 1779. The interior and roof were rebuilt in 1825–26.",
        "About 1865–67 local freedmen took the church down. The marker says the story of a Federal burning is not what happened.",
      ]),
    ],
  ),
  lesson(
    "07-14",
    "Tabernacle and Robert Smalls",
    "Tabernacle timeline",
    [
      cited("07-14", "Tabernacle Baptist Church", "front and back"),
      span("“9 years” is printed on the marker. It is not a count made for this lesson."),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1861",
        title: "A church of their own",
        partLabel: "the congregation",
        art: art(
          "tabernacle-church.jpg",
          "Illustration of a wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "formed",
            label: "How Tabernacle began",
            x: 34,
            y: 52,
            fact: "Black members of Beaufort Baptist Church formed Tabernacle after other members left during the Federal occupation in 1861. They used the Beaufort church’s lecture room during the war.",
          },
          {
            id: "bought",
            label: "This property",
            x: 72,
            y: 48,
            fact: "In 1867 the Black congregation bought this property from Beaufort Baptist Church. The present building was dedicated in 1894. Many new churches have grown from Tabernacle.",
          },
        ],
      },
      {
        kind: "scene",
        id: "boat",
        kicker: "1862",
        title: "The gunboat Planter",
        partLabel: "the Planter",
        art: art(
          "tabernacle-boat.jpg",
          "Illustration of a steam gunboat on a river. Not a picture of the Planter, and not a historical photograph.",
        ),
        hotspots: [
          {
            id: "planter",
            label: "The Planter",
            x: 28,
            y: 62,
            fact: "In 1862 Robert Smalls commandeered the Confederate gunboat Planter, on which he was a crewman, and delivered it to Union forces.",
          },
          {
            id: "life",
            label: "Robert Smalls",
            x: 78,
            y: 42,
            fact: "Born a slave in Beaufort in 1839, he lived to serve as a congressman. He died in 1915 and is buried here.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "In Congress",
        title: "Years the marker gives him in Congress",
        partLabel: "years in Congress",
        value: 9,
        unit: "years",
        meant: "What this meant: the marker says his life as a freedman included 9 years in Congress, the S.C. House and Senate, and the constitutional conventions of 1868 and 1895.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "tabernacle-church.jpg",
          "Illustration of a wooden church, for the congregation that bought this property in 1867. Not a historical photograph.",
        ),
        nowArt: art(
          "tabernacle-today.jpg",
          "Illustration of a marker and a church at 907 Craven Street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church, for Tabernacle’s early years. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and church, for 907 Craven Street, where the marker says he is buried. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1839",
            label: "Robert Smalls is born enslaved in Beaufort.",
            why: "The marker gives 1839 as his birth year and says he was born a slave in Beaufort.",
          },
          {
            id: "church",
            year: "1861",
            label: "Black members form Tabernacle after the occupation.",
            why: "The marker says they formed the church after other members evacuated in the 1861 occupation.",
          },
          {
            id: "planter",
            year: "1862",
            label: "He takes the gunboat Planter to Union forces.",
            why: "The marker dates the Planter to 1862 and says he was a crewman.",
          },
          {
            id: "lot",
            year: "1867",
            label: "The congregation buys this property.",
            why: "The marker says the Black congregation bought this property from Beaufort Baptist Church in 1867.",
          },
        ],
        ["planter", "born", "lot", "church"],
      ),
      takeaway([
        "Tabernacle was formed in 1861 by Black members of Beaufort Baptist Church. They bought this property in 1867, and the present building was dedicated in 1894.",
        "Robert Smalls, born enslaved in Beaufort in 1839, took the gunboat Planter to Union forces in 1862.",
        "He served in two state constitutional conventions, the S.C. House and Senate, and 9 years in Congress. He died in 1915 and is buried here.",
      ]),
    ],
  ),
  lesson(
    "07-22",
    "St. Helena’s Church",
    "St. Helena’s timeline",
    [
      cited("07-22", "St. Helena’s Church", "front and back"),
      span("“55 years” is printed on the marker, for Dr. Joseph R. Walker’s time as rector."),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1724",
        title: "The parish builds",
        partLabel: "the building",
        art: art(
          "sthelena-church.jpg",
          "Illustration of an early brick church and churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "parish",
            label: "The parish",
            x: 32,
            y: 52,
            fact: "The Episcopal parish was established by act of the Assembly on June 7, 1712. The first known rector, William Guy, held early services in settlers’ homes. The parish suffered in the 1715 Yemassee attack.",
          },
          {
            id: "silver",
            label: "The building and the silver",
            x: 74,
            y: 50,
            fact: "The present building went up in 1724 and was enlarged in 1817 and 1842. In 1734 John Bull, a militia captain, gave the parish communion silver.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "Churchyard",
        title: "Horses, a hospital, and graves",
        partLabel: "the churchyard",
        art: art(
          "sthelena-yard.jpg",
          "Illustration of a churchyard with plain stones. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "war",
            label: "Two wars",
            x: 30,
            y: 62,
            fact: "Local tradition on the marker says the British used the church to stable horses in the Revolution, and that it was a hospital in the Civil War.",
          },
          {
            id: "graves",
            label: "Who is buried here",
            x: 74,
            y: 46,
            fact: "The marker says the churchyard holds 2 British officers, 3 American generals, and 17 ministers.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "From 1823",
        title: "How long one rector served",
        partLabel: "years as rector",
        value: 55,
        unit: "years",
        meant: "What this meant: the marker says Dr. Joseph R. Walker became rector in 1823 and served 55 years. In that time at least 25 parishioners entered the ministry.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "sthelena-church.jpg",
          "Illustration of the 1724 church. Not a historical photograph.",
        ),
        nowArt: art(
          "sthelena-today.jpg",
          "Illustration of a marker and church at 505 Church Street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a church, for the building the marker dates to 1724. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and church, for 505 Church Street. The marker also notes a 1962 parish house. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "act",
            year: "1712",
            label: "The Assembly establishes the parish on June 7.",
            why: "The marker dates the parish to an act of June 7, 1712.",
          },
          {
            id: "yemassee",
            year: "1715",
            label: "The parish suffers in the Yemassee attack.",
            why: "The marker places that attack in 1715, after the parish existed and before the present building.",
          },
          {
            id: "walls",
            year: "1724",
            label: "The present building goes up.",
            why: "The marker says the present building was constructed in 1724.",
          },
          {
            id: "silver",
            year: "1734",
            label: "John Bull gives communion silver.",
            why: "The marker dates that gift to 1734 and calls Bull a militia captain.",
          },
        ],
        ["walls", "act", "silver", "yemassee"],
      ),
      takeaway([
        "St. Helena’s parish dates to June 7, 1712. The present building was constructed in 1724 and later enlarged in 1817 and 1842.",
        "The marker’s local tradition says the British stabled horses here in the Revolution and that the church was a Civil War hospital.",
        "From 1823, Dr. Joseph R. Walker was rector for 55 years. The churchyard holds 2 British officers, 3 American generals, and 17 ministers.",
      ]),
    ],
  ),
  lesson(
    "07-46",
    "Daufuskie Island",
    "Daufuskie timeline",
    [
      cited("07-46", "Daufuskie Island", "front and back"),
      span("“5,200 acres” is printed on the marker. It is not a measurement made for this lesson."),
    ],
    [
      {
        kind: "scene",
        id: "fields",
        kicker: "Before 1790",
        title: "Indigo, then cotton",
        partLabel: "crops",
        art: art(
          "daufuskie-fields.jpg",
          "Illustration of crop rows beside a tidal creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "seen",
            label: "Who saw the island",
            x: 32,
            y: 64,
            fact: "The marker says this 5,200-acre island lies between the Cooper and New Rivers. Spanish and English explorers saw it in 1521 and 1663. English arrivals received grants about 1700.",
          },
          {
            id: "crops",
            label: "The crops",
            x: 74,
            y: 46,
            fact: "Indigo was the main crop before the Revolution, when most planters here were Loyalists. Sea island cotton was the main crop after 1790.",
          },
        ],
      },
      {
        kind: "scene",
        id: "farms",
        kicker: "1861",
        title: "After the planters left",
        partLabel: "small farms",
        art: art(
          "daufuskie-farms.jpg",
          "Illustration of small farmhouses and a dock. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "left",
            label: "1861",
            x: 30,
            y: 55,
            fact: "In 1861, when Union forces captured the sea islands, planters abandoned Daufuskie.",
          },
          {
            id: "people",
            label: "Who lived here after",
            x: 74,
            y: 58,
            fact: "Freedmen during and just after the Civil War, and then their descendants, made up almost all of the population until near the end of the 20th century. Many owned small farms or worked in the oyster industry.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "On the marker",
        title: "The size the marker gives",
        partLabel: "acres",
        value: 5200,
        unit: "acres",
        meant: "What this meant: the marker prints 5,200 acres for the island between the Cooper and New Rivers. That figure is the marker’s, not a new survey.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "daufuskie-fields.jpg",
          "Illustration of fields, for the indigo and cotton years. Not a historical photograph.",
        ),
        nowArt: art(
          "daufuskie-today.jpg",
          "Illustration of a marker at a boat landing. Not a photograph of the landing today.",
        ),
        thenCaption:
          "Illustration of fields, for the crop years the marker describes. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a landing, for the Beaufort County boat landing named on the marker. Not a photograph of that landing.",
      },
      order(
        [
          {
            id: "spanish",
            year: "1521",
            label: "Spanish explorers see the island. English explorers come in 1663.",
            why: "The marker names those two years for Spanish and English explorers.",
          },
          {
            id: "grants",
            year: "1700",
            label: "English arrivals receive grants.",
            why: "The marker says grants came about 1700.",
          },
          {
            id: "cotton",
            year: "1790",
            label: "Sea island cotton becomes the main crop.",
            why: "The marker says cotton was the main crop after 1790. Before that, it was indigo.",
          },
          {
            id: "leave",
            year: "1861",
            label: "Planters abandon the island.",
            why: "The marker ties that leaving to the Union capture of the sea islands in 1861.",
          },
        ],
        ["cotton", "spanish", "leave", "grants"],
      ),
      takeaway([
        "Daufuskie is the 5,200-acre island between the Cooper and New Rivers. Explorers saw it in 1521 and 1663, and English grants came about 1700.",
        "Indigo, then sea island cotton, fed the plantations. Most planters here were Loyalists, and they left in 1861.",
        "Freedmen and their descendants made up almost the whole population into the late 20th century. The island was listed in the National Register in 1982 and named in the Gullah Geechee corridor in 2006.",
      ]),
    ],
  ),
  lesson(
    "07-50",
    "The Shanklin School",
    "Port Royal Agricultural School timeline",
    [
      cited("07-50", "Port Royal Agricultural School", "front and back"),
      span("“54 years” is 1955 minus 1901, the opening and closing years printed on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1901",
        title: "A school on the Tuskegee plan",
        partLabel: "the school opens",
        art: art(
          "shanklin-school.jpg",
          "Illustration of a frame school and a workshop. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "open",
            label: "Who founded it",
            x: 30,
            y: 52,
            fact: "The Port Royal Agricultural School, later the Beaufort County Training School, operated nearby from 1901 to 1955. Beaufort citizens led by Abbie Holmes Christensen (1852–1938) founded it.",
          },
          {
            id: "model",
            label: "The model",
            x: 74,
            y: 48,
            fact: "It offered vocational and academic education for Black students and was modeled on Booker T. Washington’s Tuskegee Institute, with his advice and support.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "1908",
        title: "A model school, he said",
        partLabel: "the tour",
        art: art(
          "shanklin-fields.jpg",
          "Illustration of crop rows and a schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "tour",
            label: "Washington’s words",
            x: 30,
            y: 66,
            fact: "Booker T. Washington called it “a model school of its kind” when he toured it in 1908.",
          },
          {
            id: "shanklin",
            label: "The Shanklins",
            x: 76,
            y: 44,
            fact: "People usually called it the Shanklin School for Joseph S. Shanklin (1872–1957), a Tuskegee alumnus and principal from 1903 to 1946. His wife India (1876–1939) was matron, nurse, and a teacher.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1901–1955",
        title: "How long the marker says it ran",
        partLabel: "years open",
        value: 54,
        unit: "years",
        meant: "What this meant: 1955 comes 54 years after 1901. Those are the years the marker gives for the school, from its start until it closed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "shanklin-school.jpg",
          "Illustration of a school, for the campus that operated nearby. Not a historical photograph.",
        ),
        nowArt: art(
          "shanklin-today.jpg",
          "Illustration of a marker on a rural road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a school and workshop, for the vocational school the marker describes. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a rural road, for Shanklin Road, where the marker stands. The school closed in 1955. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "open",
            year: "1901",
            label: "The Port Royal Agricultural School opens.",
            why: "The marker says it operated nearby from 1901 and was founded by citizens led by Abbie Holmes Christensen.",
          },
          {
            id: "principal",
            year: "1903",
            label: "Joseph S. Shanklin becomes principal.",
            why: "The marker says he was principal from 1903 to 1946.",
          },
          {
            id: "tour",
            year: "1908",
            label: "Booker T. Washington tours it and praises it.",
            why: "The marker quotes him in 1908: “a model school of its kind.”",
          },
          {
            id: "public",
            year: "1920",
            label: "It becomes a public school.",
            why: "The marker says that after it was renamed Beaufort County Training School, it became a public school in 1920.",
          },
        ],
        ["tour", "open", "public", "principal"],
      ),
      takeaway([
        "Citizens led by Abbie Holmes Christensen opened the school in 1901 on the Tuskegee plan, for vocational and academic education for Black students.",
        "Joseph and India Shanklin ran much of its daily life. Washington toured in 1908 and called it a model of its kind.",
        "It became a public school in 1920 and closed in 1955. Shanklin Elementary, 2.6 miles west, opened in 1994.",
      ]),
    ],
  ),
  lesson(
    "07-56",
    "Parris Island",
    "Parris Island timeline",
    [
      cited("07-56", "Parris Island", "front and back"),
      span("“21 years” is 1587 minus 1566, the years the marker gives for Spanish Santa Elena."),
    ],
    [
      {
        kind: "scene",
        id: "fort",
        kicker: "1562",
        title: "French, then Spanish",
        partLabel: "the first forts",
        art: art(
          "parris-fort.jpg",
          "Illustration of a timber fort and a ship. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "french",
            label: "Charlesfort",
            x: 30,
            y: 52,
            fact: "The marker dates European occupation to the French Charlesfort, 1562–1563.",
          },
          {
            id: "spanish",
            label: "Santa Elena",
            x: 74,
            y: 46,
            fact: "The Spanish built Santa Elena from 1566 to 1587. It was the capital of Spanish Florida from 1571 to 1576.",
          },
        ],
      },
      {
        kind: "scene",
        id: "pier",
        kicker: "1861",
        title: "A base on the sound",
        partLabel: "the base",
        art: art(
          "parris-pier.jpg",
          "Illustration of a pier and low barracks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "coal",
            label: "The Civil War station",
            x: 30,
            y: 58,
            fact: "Union forces captured Port Royal Sound in 1861. Parris Island was a quartermaster coaling station for the rest of the Civil War. Port Royal Naval Station opened in 1889.",
          },
          {
            id: "marines",
            label: "The Marine Corps",
            x: 74,
            y: 48,
            fact: "The base was dedicated to the Marine Corps in 1915 and was the principal training place for Marine recruits in World War I. After World War II it was the only training site for enlisted women Marines.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1566–1587",
        title: "How long the marker gives Santa Elena",
        partLabel: "years at Santa Elena",
        value: 21,
        unit: "years",
        meant: "What this meant: 1587 comes 21 years after 1566. Those are the years the marker prints for Spanish Santa Elena. It also says the town was the capital of Spanish Florida from 1571 to 1576.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "parris-fort.jpg",
          "Illustration of a timber fort, for Charlesfort and Santa Elena. Not a historical photograph.",
        ),
        nowArt: art(
          "parris-today.jpg",
          "Illustration of a marker by a gate. Not a photograph of the base today.",
        ),
        thenCaption:
          "Illustration of a timber fort and ship, for the 1500s occupations the marker names. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a gate, for the spot near the Marine Corps base entry the marker names. Not a photograph of that gate.",
      },
      order(
        [
          {
            id: "french",
            year: "1562",
            label: "The French build Charlesfort.",
            why: "The marker dates Charlesfort to 1562–1563.",
          },
          {
            id: "spanish",
            year: "1566",
            label: "The Spanish build Santa Elena.",
            why: "The marker dates Santa Elena to 1566–1587 and says it was the capital of Spanish Florida from 1571 to 1576.",
          },
          {
            id: "name",
            year: "1715",
            label: "Alexander Parris buys the island.",
            why: "The marker says William III granted it to Robert Daniel in 1698, and Col. Alexander Parris, the namesake, bought it in 1715.",
          },
          {
            id: "marines",
            year: "1915",
            label: "The base is dedicated to the Marine Corps.",
            why: "The marker dates that change to 1915, after the naval station opened in 1889.",
          },
        ],
        ["name", "french", "marines", "spanish"],
      ),
      takeaway([
        "French Charlesfort lasted 1562–1563. Spanish Santa Elena lasted 1566–1587 and was the capital of Spanish Florida from 1571 to 1576.",
        "The island takes its name from Col. Alexander Parris, who bought it in 1715. Union forces used it as a coaling station after 1861.",
        "Marines took the base in 1915. It trained recruits in World War I and, after World War II, was the only training site for enlisted women Marines.",
      ]),
    ],
  ),
  lesson(
    "07-67",
    "The Carnegie Library",
    "Carnegie Library timeline",
    [
      cited("07-67", "Carnegie Library", "front and back"),
      span("“14” is printed on the marker: one of fourteen Carnegie libraries in South Carolina."),
    ],
    [
      {
        kind: "scene",
        id: "room",
        kicker: "1802",
        title: "A library, then none",
        partLabel: "the first libraries",
        art: art(
          "carnegie-room.jpg",
          "Illustration of a reading room with blank shelves. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "society",
            label: "The 1802 society",
            x: 32,
            y: 52,
            fact: "The Beaufort Library Society formed in 1802. Union soldiers confiscated its collection in 1862, and Beaufort had no permanent library until 1918.",
          },
          {
            id: "clover",
            label: "The Clover Club",
            x: 74,
            y: 50,
            fact: "In 1902 the Clover Club, a local women’s literary group, began a small subscription library and urged the town toward a Carnegie building.",
          },
        ],
      },
      {
        kind: "scene",
        id: "building",
        kicker: "1918",
        title: "The township library opens",
        partLabel: "the building",
        art: art(
          "carnegie-building.jpg",
          "Illustration of a small columned library. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "open",
            label: "Opening day",
            x: 30,
            y: 55,
            fact: "Built in 1917–18, it was one of fourteen libraries in South Carolina funded by the Carnegie Corporation. It opened as the Beaufort Township Library on March 25, 1918.",
          },
          {
            id: "makers",
            label: "Who built it",
            x: 76,
            y: 42,
            fact: "The town gave the lot. The Clover Club gave many of the first books. James Hagood Sams of Columbia designed it, and J. H. Moore of Camden built it.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "In South Carolina",
        title: "Carnegie libraries the marker counts",
        partLabel: "libraries in the state",
        value: 14,
        unit: "libraries",
        meant: "What this meant: the marker says this was one of fourteen libraries built in South Carolina with Carnegie Corporation funding.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same corner",
        partLabel: "then and now",
        thenArt: art(
          "carnegie-building.jpg",
          "Illustration of the 1918 library. Not a historical photograph.",
        ),
        nowArt: art(
          "carnegie-today.jpg",
          "Illustration of a marker at a street corner. Not a photograph of the corner today.",
        ),
        thenCaption:
          "Illustration of a library building, for the one that opened in 1918. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at the corner of Carteret and Craven. The marker says a new library across Craven Street replaced this one in 1964. Not a photograph of the corner.",
      },
      order(
        [
          {
            id: "society",
            year: "1802",
            label: "The Beaufort Library Society forms.",
            why: "The marker dates that society to 1802.",
          },
          {
            id: "seized",
            year: "1862",
            label: "Union soldiers confiscate the collection.",
            why: "The marker says that confiscation in 1862 left Beaufort without a permanent library.",
          },
          {
            id: "clover",
            year: "1902",
            label: "The Clover Club starts a subscription library.",
            why: "The marker dates the Clover Club library to 1902.",
          },
          {
            id: "open",
            year: "1918",
            label: "The township library opens on March 25.",
            why: "The marker says the Carnegie building opened as the Beaufort Township Library on March 25, 1918.",
          },
        ],
        ["clover", "society", "open", "seized"],
      ),
      takeaway([
        "Beaufort’s library story on this marker runs from an 1802 society, to a collection taken in 1862, to the Clover Club in 1902.",
        "The Carnegie building, one of fourteen in the state, opened on March 25, 1918, on a lot the town gave.",
        "In 1962 the township library became a county system. In 1964 a new building across Craven Street replaced this one.",
      ]),
    ],
  ),
  lesson(
    "07-03",
    "Chapel of Ease",
    "Chapel of Ease timeline",
    [cited("07-03", "Chapel of Ease", "front")],
    [
      {
        kind: "scene",
        id: "chapel",
        kicker: "1740",
        title: "A chapel for St. Helena’s",
        partLabel: "the chapel",
        art: art(
          "chapel-ease.jpg",
          "Illustration of a small wooden chapel. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "When it was built",
            x: 32,
            y: 52,
            fact: "The marker says the chapel, belonging to St. Helena’s Church in Beaufort, was built about 1740.",
          },
          {
            id: "separate",
            label: "After the Revolution",
            x: 74,
            y: 46,
            fact: "It was made a separate church after the Revolution. The marker does not give that year.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fire",
        kicker: "1886",
        title: "A forest fire",
        partLabel: "the fire",
        art: art(
          "chapel-fire.jpg",
          "Illustration of a burned chapel and a distant fire. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "burned",
            label: "February 22, 1886",
            x: 32,
            y: 55,
            fact: "A forest fire burned the chapel on February 22, 1886.",
          },
        ],
      },
      order(
        [
          {
            id: "built",
            year: "1740",
            label: "The chapel is built, about 1740.",
            why: "The marker says it was built about 1740 and belonged to St. Helena’s Church.",
          },
          {
            id: "separate",
            year: "Later",
            label: "It becomes a separate church after the Revolution.",
            why: "The marker places that change after the Revolution and does not print a year.",
          },
          {
            id: "fire",
            year: "1886",
            label: "A forest fire burns it on February 22.",
            why: "The marker dates the fire to February 22, 1886.",
          },
        ],
        ["fire", "built", "separate"],
      ),
      takeaway([
        "The chapel on Lands End Road was built about 1740 for St. Helena’s Church in Beaufort.",
        "After the Revolution it became a separate church. The marker does not date that step.",
        "A forest fire burned it on February 22, 1886.",
      ]),
    ],
  ),
  lesson(
    "07-16",
    "Mather School",
    "Mather School timeline",
    [cited("07-16", "Mather School", "front")],
    [
      {
        kind: "scene",
        id: "open",
        kicker: "After the war",
        title: "Rachel Crane Mather’s school",
        partLabel: "the founding",
        art: art(
          "mather-school.jpg",
          "Illustration of a frame schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founder",
            label: "The founder",
            x: 32,
            y: 52,
            fact: "Shortly after the Civil War, Rachel Crane Mather of Boston founded Mather School here. The marker does not give the founding year.",
          },
        ],
      },
      {
        kind: "scene",
        id: "closed",
        kicker: "1968",
        title: "Closed and sold",
        partLabel: "the closing",
        art: art(
          "mather-closed.jpg",
          "Illustration of an empty schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "society",
            label: "1882",
            x: 32,
            y: 54,
            fact: "In 1882 the Woman’s American Baptist Home Mission Society took on the school and ran it as a normal school for Black girls.",
          },
          {
            id: "end",
            label: "1968",
            x: 72,
            y: 58,
            fact: "With some changes, the school continued until 1968, when it was closed and sold to the state for the education of all races.",
          },
        ],
      },
      order(
        [
          {
            id: "found",
            year: "First",
            label: "Rachel Crane Mather of Boston founds the school.",
            why: "The marker says she founded it here shortly after the Civil War and does not print that year.",
          },
          {
            id: "society",
            year: "1882",
            label: "A Baptist mission society takes up support.",
            why: "The marker says the Woman’s American Baptist Home Mission Society assumed support in 1882 and ran a normal school for Black girls.",
          },
          {
            id: "close",
            year: "1968",
            label: "The school closes and is sold to the state.",
            why: "The marker says it closed in 1968 and was sold for the educational benefit of all races.",
          },
        ],
        ["close", "found", "society"],
      ),
      takeaway([
        "Rachel Crane Mather of Boston founded the school here shortly after the Civil War.",
        "From 1882 a Baptist mission society supported it as a normal school for Black girls.",
        "It closed in 1968 and was sold to the state for the education of students of all races.",
      ]),
    ],
  ),
  lesson(
    "07-23",
    "Mitchelville",
    "Mitchelville timeline",
    [cited("07-23", "Mitchelville Site", "front")],
    [
      {
        kind: "scene",
        id: "fall",
        kicker: "1861",
        title: "Hilton Head falls",
        partLabel: "1861",
        art: art(
          "mitchelville-shore.jpg",
          "Illustration of a marsh shore and the start of a wooden town. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "union",
            label: "1861",
            x: 30,
            y: 58,
            fact: "The marker says Hilton Head fell to Union forces in 1861. It does not tell the battle on this plaque.",
          },
        ],
      },
      {
        kind: "scene",
        id: "town",
        kicker: "1862",
        title: "A town for former slaves",
        partLabel: "1862",
        art: art(
          "mitchelville-town.jpg",
          "Illustration of a row of small wooden houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "name",
            label: "The name",
            x: 32,
            y: 52,
            fact: "In 1862 this town, planned for the area’s former slaves and named for General Ormsby M. Mitchel, began.",
          },
        ],
      },
      order(
        [
          {
            id: "fall",
            year: "1861",
            label: "Hilton Head falls to Union forces.",
            why: "The marker starts with that fall in 1861.",
          },
          {
            id: "town",
            year: "1862",
            label: "Mitchelville begins, planned for former slaves.",
            why: "The marker says the town began in 1862 and was named for General Ormsby M. Mitchel.",
          },
        ],
        ["town", "fall"],
      ),
      takeaway([
        "Hilton Head fell to Union forces in 1861.",
        "In 1862 a town planned for the area’s former slaves began on this site.",
        "It was named for General Ormsby M. Mitchel. This marker does not add a longer history than that.",
      ]),
    ],
  ),
  lesson(
    "07-24",
    "Emancipation Day",
    "Emancipation Day timeline",
    [cited("07-24", "Emancipation Day", "front and back")],
    [
      {
        kind: "scene",
        id: "day",
        kicker: "1863",
        title: "New Year’s Day on the river",
        partLabel: "the ceremony",
        art: art(
          "emancipation-gathering.jpg",
          "Illustration of people seen from behind on a riverbank. Not a historical photograph, and not a portrait.",
        ),
        hotspots: [
          {
            id: "crowd",
            label: "Who came",
            x: 28,
            y: 68,
            fact: "On New Year’s Day 1863, John Joyner Smith’s plantation was the scene of ceremonies for the Emancipation Proclamation. Hundreds of freedmen and women came from Port Royal, Beaufort, and the sea islands.",
          },
          {
            id: "read",
            label: "The reading",
            x: 72,
            y: 40,
            fact: "They joined Federal military and civil authorities. After the proclamation was read, a Black regiment received its colors.",
          },
        ],
      },
      {
        kind: "scene",
        id: "camp",
        kicker: "1862",
        title: "Camp Saxton",
        partLabel: "the camp",
        art: art(
          "emancipation-camp.jpg",
          "Illustration of tents and a blank flag by a river. Not a historical photograph. The flag stands for the colors named on the marker and is not a copy of them.",
        ),
        hotspots: [
          {
            id: "regiment",
            label: "The regiment",
            x: 32,
            y: 68,
            fact: "The 1st South Carolina Volunteers, later the 33rd U.S. Colored Troops, was the first Black regiment formed for regular service in the U.S. Army during the Civil War. It organized and trained here from late 1862 to early 1863.",
          },
          {
            id: "flag",
            label: "What Higginson wrote",
            x: 82,
            y: 36,
            fact: "Col. Thomas W. Higginson wrote, “Just think of it! - the first day they had ever had a country, the first flag they had seen which promised anything to their people.”",
          },
        ],
      },
      order(
        [
          {
            id: "camp",
            year: "1862",
            label: "The regiment organizes at Camp Saxton.",
            why: "The marker says the regiment organized and trained here from late 1862 to early 1863.",
          },
          {
            id: "day",
            year: "1863",
            label: "On January 1 the proclamation is read.",
            why: "The marker dates the ceremony to New Year’s Day 1863 on John Joyner Smith’s plantation.",
          },
          {
            id: "colors",
            year: "1863",
            label: "The 1st South Carolina Volunteers receive their colors.",
            why: "The marker says that happened after the proclamation was read, the same day.",
          },
        ],
        ["day", "camp", "colors"],
      ),
      takeaway([
        "January 1, 1863, on John Joyner Smith’s plantation, hundreds of freed people and Federal authorities marked the Emancipation Proclamation.",
        "The 1st South Carolina Volunteers, the first Black regiment formed for regular U.S. Army service in the war, received its colors that day.",
        "The same ground was Camp Saxton, where the regiment, later the 33rd U.S. Colored Troops, trained from late 1862 to early 1863.",
      ]),
    ],
  ),
  lesson(
    "07-32",
    "The Great Sea Island Storm",
    "Sea Island storm timeline",
    [cited("07-32", "The Great Sea Island Storm", "front and back")],
    [
      {
        kind: "scene",
        id: "storm",
        kicker: "1893",
        title: "The night the water rose",
        partLabel: "the storm",
        art: art(
          "storm-islands.jpg",
          "Illustration of floodwater and bent oaks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "night",
            label: "August 27, 1893",
            x: 34,
            y: 48,
            fact: "On the night of August 27, 1893, a tropical cyclone made landfall just east of Savannah. The marker calls it the largest and most powerful storm to hit South Carolina until Hurricane Hugo in 1989.",
          },
          {
            id: "force",
            label: "Wind and water",
            x: 70,
            y: 58,
            fact: "Gusts were as high as 120 miles an hour and the storm surge as high as 12 feet. The worst struck St. Helena, Hilton Head, Daufuskie, Parris, and smaller islands.",
          },
        ],
      },
      {
        kind: "scene",
        id: "relief",
        kicker: "1893",
        title: "After the water",
        partLabel: "the relief",
        art: art(
          "storm-relief.jpg",
          "Illustration of boats, crates, and tents. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "loss",
            label: "The losses",
            x: 30,
            y: 58,
            fact: "The storm killed more than 2,000 people and left more than 70,000 destitute in coastal South Carolina and Georgia. Losses were most catastrophic among Black people who were former slaves or their descendants.",
          },
          {
            id: "redcross",
            label: "Clara Barton",
            x: 74,
            y: 48,
            fact: "Clara Barton and the American Red Cross launched a massive relief effort, the first after a hurricane in U.S. history. Donations in 1893–94 fed, clothed, and sheltered thousands.",
          },
        ],
      },
      order(
        [
          {
            id: "land",
            year: "1893",
            label: "The cyclone makes landfall on August 27.",
            why: "The marker dates the landfall, just east of Savannah, to the night of August 27, 1893.",
          },
          {
            id: "islands",
            year: "1893",
            label: "The worst of it hits the Sea Islands.",
            why: "The marker names St. Helena, Hilton Head, Daufuskie, Parris, and smaller islands.",
          },
          {
            id: "help",
            year: "1893",
            label: "The Red Cross relief begins.",
            why: "The marker says Clara Barton and the Red Cross fed, clothed, and sheltered people with donations in 1893–94.",
          },
        ],
        ["help", "land", "islands"],
      ),
      takeaway([
        "On August 27, 1893, the storm came ashore just east of Savannah, with gusts as high as 120 miles an hour and a surge as high as 12 feet.",
        "It killed more than 2,000 people and left more than 70,000 destitute. The heaviest losses fell on Black Sea Island communities.",
        "Clara Barton and the Red Cross ran their first hurricane relief here, in 1893–94. The marker says Hugo in 1989 was the next storm this powerful in the state.",
      ]),
    ],
  ),
  lesson(
    "07-42",
    "Cherry Hill School",
    "Cherry Hill timeline",
    [cited("07-42", "Cherry Hill School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1937",
        title: "One room, built for Black students",
        partLabel: "the building",
        art: art(
          "cherry-school.jpg",
          "Illustration of a one-room schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "first",
            label: "The first separate building",
            x: 32,
            y: 52,
            fact: "This one-room frame school, built about 1937, was the first separate school building for African American students on Hilton Head. Classes had been in the parsonage of St. James Baptist Church.",
          },
          {
            id: "paid",
            label: "Who paid",
            x: 74,
            y: 58,
            fact: "The Black community raised funds to buy this tract, and Beaufort County agreed to build the school.",
          },
        ],
      },
      {
        kind: "scene",
        id: "side",
        kicker: "1937",
        title: "One teacher, about thirty students",
        partLabel: "the classroom",
        art: art(
          "cherry-side.jpg",
          "Illustration of the school from the side. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grades",
            label: "The grades",
            x: 32,
            y: 52,
            fact: "It was an elementary school with one teacher and an average of about 30 students. It opened in 1937 with grades 1–5 and added grade 6 the next school year.",
          },
          {
            id: "keep",
            label: "Keeping it open",
            x: 74,
            y: 48,
            fact: "The Black community helped pay for maintenance and also supplemented teacher salaries. The school was listed in the National Register of Historic Places in 2012.",
          },
        ],
      },
      order(
        [
          {
            id: "parsonage",
            year: "Before",
            label: "Classes meet in the St. James Baptist parsonage.",
            why: "The marker says this building replaced that earlier Cherry Hill School.",
          },
          {
            id: "build",
            year: "1937",
            label: "The county builds this one-room school.",
            why: "The marker says the community bought the tract and the county built the school about 1937.",
          },
          {
            id: "sixth",
            year: "1938",
            label: "Grade 6 is added the next school year.",
            why: "The marker says it opened with grades 1–5 and added grade 6 the next year.",
          },
          {
            id: "register",
            year: "2012",
            label: "It is listed in the National Register.",
            why: "The marker dates that listing to 2012.",
          },
        ],
        ["sixth", "parsonage", "register", "build"],
      ),
      takeaway([
        "Cherry Hill, built about 1937, was the first separate school building for African American students on Hilton Head.",
        "One teacher taught about 30 students. Grades 1–5 came first, then grade 6.",
        "The Black community bought the land, helped with upkeep, and added to teacher pay. The school was listed in the National Register in 2012.",
      ]),
    ],
  ),
  lesson(
    "07-43",
    "The Burning of Bluffton",
    "Bluffton timeline",
    [cited("07-43", "The Burning of Bluffton", "front and back")],
    [
      {
        kind: "scene",
        id: "village",
        kicker: "1861",
        title: "A summer village, emptied",
        partLabel: "the village",
        art: art(
          "bluffton-village.jpg",
          "Illustration of wooden houses on a bluff. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "empty",
            label: "November 1861",
            x: 32,
            y: 50,
            fact: "Bluffton was a planters’ summer village. Seasonal and year-round residents largely left when Federal forces captured Beaufort and Port Royal in November 1861.",
          },
          {
            id: "watch",
            label: "A Confederate outpost",
            x: 74,
            y: 48,
            fact: "Confederate forces used it as an outpost to watch Port Royal Sound and the Charleston and Savannah Railroad.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fire",
        kicker: "1863",
        title: "June 4, 1863",
        partLabel: "the raid",
        art: art(
          "bluffton-fire.jpg",
          "Illustration of burning houses and a gunboat. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "land",
            label: "The landing",
            x: 34,
            y: 52,
            fact: "Early on June 4, 1863, about 1,000 Federals landed at Hunting Island Plantation and marched to Bluffton. Pickets raised the alarm but could not stop them at once.",
          },
          {
            id: "burn",
            label: "What burned",
            x: 76,
            y: 42,
            fact: "A short fight ended when shells from a Federal gunboat drove off a small Confederate force camped on the May River. Infantry then burned some 40 houses and other buildings, about two-thirds of the village. The Charleston Mercury called the raid “an outrage.”",
          },
        ],
      },
      order(
        [
          {
            id: "leave",
            year: "1861",
            label: "Residents leave after Beaufort and Port Royal fall.",
            why: "The marker dates that capture, and the emptying of Bluffton, to November 1861.",
          },
          {
            id: "land",
            year: "1863",
            label: "About 1,000 Federals land and march in on June 4.",
            why: "The marker dates the expedition to June 4, 1863, from Hunting Island Plantation.",
          },
          {
            id: "shells",
            year: "1863",
            label: "A gunboat’s shells end the skirmish.",
            why: "The marker says shells drove off the Confederate force camped on the May River.",
          },
          {
            id: "burn",
            year: "1863",
            label: "About two-thirds of the village is burned.",
            why: "The marker says some 40 houses and other buildings, about two-thirds of the village, were burned.",
          },
        ],
        ["burn", "leave", "shells", "land"],
      ),
      takeaway([
        "Bluffton was a planters’ summer village. Most people left after Federal forces took Beaufort and Port Royal in November 1861.",
        "On June 4, 1863, about 1,000 Federals marched in from Hunting Island. A gunboat ended a short fight on the May River.",
        "They burned some 40 houses, about two-thirds of the village. The Charleston Mercury called the raid an outrage.",
      ]),
    ],
  ),
];
