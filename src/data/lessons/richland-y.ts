import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Richland County sites. Facts are from that marker only.
 * A year-span is only the difference of two years the marker prints. */

const INTRO =
  "Move through the years on this marker. Tap the picture. Every fact is from the inscription.";

function cited(id: string, name: string, sides: "front" | "front and back"): LessonSource {
  return {
    id: "inscription",
    label: `South Carolina Historical Marker ${id}, "${name}," ${sides} inscription. South Carolina Department of Archives and History, Historical Marker Program.`,
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
    doneLine: "That's the order on the marker.",
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

export const richlandLessonsY: MarkerLesson[] = [
  lesson(
    "40-124",
    "Bonds and currency printed here",
    "Printing plant timeline",
    [
      cited("40-124", "Confederate Printing Plant", "front and back"),
      span(
        '"12 years" is 1907 minus 1895, the years the marker prints for the building as a warehouse for the state liquor dispensary system.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "plant",
        kicker: "1863-64",
        title: "Built for Evans & Cogswell",
        partLabel: "the printing plant",
        art: art(
          "m40124-plant.jpg",
          "Illustration of a printing plant and stacks of paper. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1863-64",
            x: 32,
            y: 48,
            fact: "This building was constructed in 1863-64 for the printing and stationery firm of Evans & Cogswell. That firm, founded in Charleston, produced bonds and currency for the Confederacy throughout the war and moved to Columbia in 1863.",
          },
          {
            id: "printed",
            label: "April 1864",
            x: 74,
            y: 40,
            fact: "From April 1864 to February 1865 Confederate bonds and currency were printed and processed in this building. The Confederate Treasury Note Bureau moved its headquarters here as well in the spring of 1864.",
          },
        ],
      },
      {
        kind: "scene",
        id: "press",
        kicker: "February 1865",
        title: "Sheets off the press",
        partLabel: "the press",
        art: art(
          "m40124-press.jpg",
          "Illustration of a printing press and cut sheets. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "women",
            label: "After 1864",
            x: 32,
            y: 52,
            fact: "After 1864 Evans and Cogswell printed almost all bonds and currency for the Confederate Treasury. Many young women were employed here to sign and cut sheets as they came off the press.",
          },
          {
            id: "burned",
            label: "February 1865",
            x: 74,
            y: 42,
            fact: "When Federal troops burned part of the building in February 1865 they carried off the printing plates and “an immense quantity” of currency.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1895-1907",
        title: "Years as a dispensary warehouse",
        partLabel: "12 years",
        value: 12,
        unit: "years",
        meant:
          "What this meant: 1907 comes 12 years after 1895. That is the stretch the marker prints for this building as a warehouse for the state liquor dispensary system.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40124-plant.jpg",
          "Illustration of a printing plant and stacks of paper. Not a historical photograph.",
        ),
        nowArt: art(
          "m40124-today.jpg",
          "Illustration of a blank marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a printing plant and stacks of paper, for the building the marker says was constructed in 1863-64. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "columbia",
            year: "1863",
            label: "Evans & Cogswell move to Columbia.",
            why: "The marker says the firm, founded in Charleston, moved to Columbia in 1863. The building was constructed in 1863-64.",
          },
          {
            id: "bureau",
            year: "Spring 1864",
            label: "The Treasury Note Bureau moves its headquarters here.",
            why: "The marker says the Confederate Treasury Note Bureau moved its headquarters here in the spring of 1864. Bonds and currency were printed here from April 1864 to February 1865.",
          },
          {
            id: "burned",
            year: "February 1865",
            label: "Federal troops burn part of the building.",
            why: "The marker says Federal troops burned part of the building in February 1865 and carried off the printing plates and “an immense quantity” of currency.",
          },
          {
            id: "warehouse",
            year: "1895",
            label: "The building becomes a dispensary warehouse.",
            why: "The marker says the building served as a warehouse for the state liquor dispensary system from 1895 to 1907.",
          },
        ],
        ["burned", "warehouse", "columbia", "bureau"],
      ),
      takeaway([
        "From April 1864 to February 1865 Confederate bonds and currency were printed and processed in this building, constructed in 1863-64 for Evans & Cogswell. The firm moved to Columbia in 1863, and the Confederate Treasury Note Bureau moved its headquarters here in the spring of 1864.",
        "After 1864 Evans and Cogswell printed almost all bonds and currency for the Confederate Treasury. Many young women were employed here to sign and cut sheets as they came off the press.",
        "Federal troops burned part of the building in February 1865 and carried off the printing plates and “an immense quantity” of currency. The building served as a warehouse for the state liquor dispensary system from 1895 to 1907.",
      ]),
    ],
  ),
  lesson(
    "40-125",
    "The third passenger depot",
    "Seaboard depot timeline",
    [
      cited("40-125", "Seaboard Air Line Passenger Depot", "front and back"),
      span(
        '"87 years" is 1991 minus 1904, the years the marker prints for the building of this depot and the end of its passenger service.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "depot",
        kicker: "1904",
        title: "Built by the Seaboard Air Line",
        partLabel: "the depot",
        art: art(
          "m40125-depot.jpg",
          "Illustration of a passenger depot and a baggage room. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1904",
            x: 32,
            y: 46,
            fact: "This depot, built by the Seaboard Air Line Railway in 1904, was the third passenger depot built in Columbia.",
          },
          {
            id: "earlier",
            label: "About 1850",
            x: 74,
            y: 38,
            fact: "It followed the South Carolina Railroad Depot on Gervais St., built about 1850, and the Union Station on Main St., built in 1902.",
          },
        ],
      },
      {
        kind: "scene",
        id: "train",
        kicker: "Until 1991",
        title: "An alternative to Union Station",
        partLabel: "the train",
        art: art(
          "m40125-train.jpg",
          "Illustration of a passenger train and a platform. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "alternative",
            label: "The baggage room",
            x: 32,
            y: 50,
            fact: "This depot and its adjacent baggage room was an alternative to Union Station, which served passengers on the Atlantic Coast Line Railroad and the Southern Railway.",
          },
          {
            id: "service",
            label: "Until 1991",
            x: 74,
            y: 42,
            fact: "They served passengers on the Seaboard Air Line Railway (later the Seaboard Coast Line Railroad) until 1991. Listed in the National Register of Historic Places in 1983 as part of the West Gervais Street Historic District. The relocation of the tracks across Gervais Street was an important step in the revitalization of the Congaree Vista in the 1980s and 1990s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1904-1991",
        title: "Years from building to the last passengers",
        partLabel: "87 years",
        value: 87,
        unit: "years",
        meant:
          "What this meant: 1991 comes 87 years after 1904. That is the stretch from the year this depot was built to the year it last served passengers.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40125-depot.jpg",
          "Illustration of a passenger depot and a baggage room. Not a historical photograph.",
        ),
        nowArt: art(
          "m40125-today.jpg",
          "Illustration of a blank marker beside a street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a passenger depot and a baggage room, for the depot the marker says was built by the Seaboard Air Line Railway in 1904. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker beside a street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "scr",
            year: "About 1850",
            label: "The South Carolina Railroad Depot is built on Gervais St.",
            why: "The marker says this depot was the third passenger depot built in Columbia, following the South Carolina Railroad Depot on Gervais St., built about 1850.",
          },
          {
            id: "union",
            year: "1902",
            label: "Union Station is built on Main St.",
            why: "The marker says Union Station on Main St. was built in 1902, before this depot.",
          },
          {
            id: "seaboard",
            year: "1904",
            label: "This Seaboard depot is built.",
            why: "The marker says this depot was built by the Seaboard Air Line Railway in 1904 and was the third passenger depot built in Columbia.",
          },
          {
            id: "ended",
            year: "1991",
            label: "Passenger service here ends.",
            why: "The marker says the depot and baggage room served passengers on the Seaboard Air Line Railway (later the Seaboard Coast Line Railroad) until 1991.",
          },
        ],
        ["union", "ended", "scr", "seaboard"],
      ),
      takeaway([
        "This depot, built by the Seaboard Air Line Railway in 1904, was the third passenger depot built in Columbia, following the South Carolina Railroad Depot on Gervais St., built about 1850, and the Union Station on Main St., built in 1902.",
        "This depot and its adjacent baggage room was an alternative to Union Station, which served passengers on the Atlantic Coast Line Railroad and the Southern Railway.",
        "The depot and baggage room were listed in the National Register of Historic Places in 1983 as part of the West Gervais Street Historic District and served passengers until 1991. Relocating the tracks across Gervais Street was an important step in the revitalization of the Congaree Vista in the 1980s and 1990s.",
      ]),
    ],
  ),
  lesson(
    "40-126",
    "Home of Celia Mann",
    "Mann-Simons timeline",
    [
      cited("40-126", "Mann-Simons Cottage", "front and back"),
      span(
        '"68 years" is 1867 minus 1799, the years the marker prints for Celia Mann\'s death and birth.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "Before 1850",
        title: "A cottage for Celia Mann",
        partLabel: "the cottage",
        art: art(
          "m40126-house.jpg",
          "Illustration of a cottage and a tree. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "cottage",
            label: "Before 1850",
            x: 32,
            y: 48,
            fact: "This cottage, built before 1850, with alterations and additions throughout the nineteenth and twentieth centuries, was the home of Celia Mann (1799-1867) and her husband Ben Delane.",
          },
          {
            id: "freedom",
            label: "The 1840s",
            x: 74,
            y: 40,
            fact: "They were among the few free blacks living in Columbia in the two decades before the Civil War. Mann, born a slave in Charleston, earned or bought her freedom in the 1840s and moved to Columbia, where she worked as a midwife.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1977",
        title: "A basement, then a museum",
        partLabel: "the yard",
        art: art(
          "m40126-yard.jpg",
          "Illustration of a cottage yard and a basement stair. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "churches",
            label: "Three churches",
            x: 32,
            y: 54,
            fact: "Three Baptist churches (First Calvary, Second Calvary, and Zion) trace their origins to services held in the basement of this house.",
          },
          {
            id: "museum",
            label: "Since 1977",
            x: 74,
            y: 42,
            fact: "After Mann's death her daughter Agnes Jackson (d. 1907) lived here; descendants of Agnes Jackson's second husband Bill Simons owned the house until 1960. It was listed in the National Register of Historic Places in 1973 and has been a museum since 1977.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1799-1867",
        title: "Years from the birth year to the death year",
        partLabel: "68 years",
        value: 68,
        unit: "years",
        meant:
          "What this meant: 1867 comes 68 years after 1799. Those are the years the marker prints for Celia Mann, her death year and her birth year.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40126-house.jpg",
          "Illustration of a cottage and a tree. Not a historical photograph.",
        ),
        nowArt: art(
          "m40126-today.jpg",
          "Illustration of a blank marker on a cottage street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cottage and a tree, for the cottage the marker says was built before 1850. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker on a cottage street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1799",
            label: "Celia Mann is born.",
            why: "The marker prints Celia Mann's years as 1799-1867 and says she was born a slave in Charleston.",
          },
          {
            id: "freedom",
            year: "The 1840s",
            label: "She earns or buys her freedom and moves to Columbia.",
            why: "The marker says she earned or bought her freedom in the 1840s and moved to Columbia, where she worked as a midwife.",
          },
          {
            id: "death",
            year: "1867",
            label: "Celia Mann dies.",
            why: "The marker prints her years as 1799-1867. After her death her daughter Agnes Jackson (d. 1907) lived here.",
          },
          {
            id: "museum",
            year: "1977",
            label: "The house has been a museum since this year.",
            why: "The marker says it has been a museum since 1977. It was listed in the National Register of Historic Places in 1973.",
          },
        ],
        ["museum", "freedom", "born", "death"],
      ),
      takeaway([
        "This cottage, built before 1850, was the home of Celia Mann (1799-1867) and her husband Ben Delane, among the few free blacks living in Columbia in the two decades before the Civil War. Born a slave in Charleston, she earned or bought her freedom in the 1840s and worked in Columbia as a midwife.",
        "Three Baptist churches (First Calvary, Second Calvary, and Zion) trace their origins to services held in the basement of this house.",
        "After Mann's death her daughter Agnes Jackson (d. 1907) lived here; descendants of Agnes Jackson's second husband Bill Simons owned the house until 1960. It was listed in the National Register of Historic Places in 1973 and has been a museum since 1977.",
      ]),
    ],
  ),
  lesson(
    "40-129",
    "Italianate house on the Wateree",
    "Kensington timeline",
    [
      cited("40-129", "Kensington", "front and back"),
      span(
        '"2 years" is 1854 minus 1852, the years the marker prints for the building of the Italianate Revival house.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1852-54",
        title: "Built for the Singletons",
        partLabel: "the house",
        art: art(
          "m40129-house.jpg",
          "Illustration of an Italianate house and a river. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1852-54",
            x: 32,
            y: 46,
            fact: "This plantation on the Wateree River features a remarkable Italianate Revival house built in 1852-54.",
          },
          {
            id: "architects",
            label: "The Singletons",
            x: 74,
            y: 38,
            fact: "Designed by Charleston architects Edward C. Jones and Francis D. Lee, it was built for Matthew Richard Singleton (1817-1854) and Martha Kinloch Singleton (1818-1892).",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1879",
        title: "Farmed, listed, then restored",
        partLabel: "the fields",
        art: art(
          "m40129-yard.jpg",
          "Illustration of farmed fields and a barn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "memoir",
            label: "1879",
            x: 32,
            y: 52,
            fact: "Jacob Stroyer described life as a slave here in his memoir, first published in 1879.",
          },
          {
            id: "later",
            label: "1971",
            x: 74,
            y: 40,
            fact: "Kensington was owned by members of the Singleton, Hamer, and Lanham families until the late twentieth century, and though the house fell into disrepair the land was farmed for many years. It was listed in the National Register of Historic Places in 1971, sold to Union Camp (later International Paper) in 1981, restored in 1983-84, and opened for educational programs.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1852-54",
        title: "Years the marker gives for building the house",
        partLabel: "2 years",
        value: 2,
        unit: "years",
        meant:
          "What this meant: 1854 comes 2 years after 1852. That is the stretch the marker prints for the building of the Italianate Revival house.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40129-house.jpg",
          "Illustration of an Italianate house and a river. Not a historical photograph.",
        ),
        nowArt: art(
          "m40129-today.jpg",
          "Illustration of a blank marker on a rural road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an Italianate house and a river, for the house the marker says was built in 1852-54 on the Wateree River. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker on a rural road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1852-54",
            label: "The Italianate Revival house is built.",
            why: "The marker says the house was built in 1852-54 for Matthew Richard Singleton (1817-1854) and Martha Kinloch Singleton (1818-1892), designed by Edward C. Jones and Francis D. Lee.",
          },
          {
            id: "memoir",
            year: "1879",
            label: "Jacob Stroyer's memoir is first published.",
            why: "The marker says Jacob Stroyer described life as a slave here in his memoir, first published in 1879.",
          },
          {
            id: "listed",
            year: "1971",
            label: "Kensington is listed in the National Register.",
            why: "The marker says Kensington was listed in the National Register of Historic Places in 1971.",
          },
          {
            id: "sold",
            year: "1981",
            label: "The plantation is sold to Union Camp.",
            why: "The marker says it was sold to Union Camp (later International Paper) in 1981, restored in 1983-84, and opened for educational programs.",
          },
        ],
        ["memoir", "sold", "built", "listed"],
      ),
      takeaway([
        "This plantation on the Wateree River features a remarkable Italianate Revival house built in 1852-54, designed by Charleston architects Edward C. Jones and Francis D. Lee for Matthew Richard Singleton (1817-1854) and Martha Kinloch Singleton (1818-1892).",
        "Jacob Stroyer described life as a slave here in his memoir, first published in 1879. The Singleton, Hamer, and Lanham families owned Kensington until the late twentieth century; the house fell into disrepair and the land was farmed for many years.",
        "Kensington was listed in the National Register of Historic Places in 1971, sold to Union Camp (later International Paper) in 1981, restored in 1983-84, and opened for educational programs.",
      ]),
    ],
  ),
];
