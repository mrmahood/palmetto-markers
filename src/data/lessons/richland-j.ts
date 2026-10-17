import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia sites. Facts are from that marker only.
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

export const richlandLessonsJ: MarkerLesson[] = [
  lesson(
    "40-47",
    "A cantonment named for Jackson",
    "Camp Jackson timeline",
    [cited("40-47", "Camp Jackson", "front")],
    [
      {
        kind: "scene",
        id: "camp",
        kicker: "June 2, 1917",
        title: "Approved as a cantonment site",
        partLabel: "the camp",
        art: art(
          "m4047-camp.jpg",
          "Illustration of a training camp of tents. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "name",
            label: "Gen. Andrew Jackson",
            x: 32,
            y: 54,
            fact: "Named in honor of Gen. Andrew Jackson.",
          },
          {
            id: "approved",
            label: "June 2, 1917",
            x: 74,
            y: 42,
            fact: "This cantonment site 1 ½ mi. north was approved by the War Dept. June 2, 1917.",
          },
        ],
      },
      {
        kind: "scene",
        id: "troops",
        kicker: "June 1918",
        title: "Officers, men, and two divisions",
        partLabel: "the recorded strength",
        art: art(
          "m4047-troops.jpg",
          "Illustration of rows of soldiers seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "strength",
            label: "June 1918",
            x: 32,
            y: 48,
            fact: "Maximum strength was recorded in June 1918: 3,302 officers; 45,402 men.",
          },
          {
            id: "divisions",
            label: "The divisions",
            x: 74,
            y: 58,
            fact: "The 81st Division was trained here Aug. 29, 1917-May 18, 1918; the 5th Division was stationed here Oct. 20, 1920-Oct. 4, 1921. Made a training camp for National Guard 1925.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "June 1918",
        title: "Men at the recorded maximum",
        partLabel: "45,402 men",
        value: 45402,
        unit: "men",
        meant:
          "What this meant: the marker records a maximum strength in June 1918 of 3,302 officers and 45,402 men.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4047-camp.jpg",
          "Illustration of a training camp of tents. Not a historical photograph.",
        ),
        nowArt: art(
          "m4047-today.jpg",
          "Illustration of a marker at a road corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a training camp of tents, for the cantonment the marker says was approved June 2, 1917. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a road corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "approved",
            year: "June 2, 1917",
            label: "The War Dept. approves this cantonment site.",
            why: "The marker dates that approval to June 2, 1917. The site is 1 ½ mi. north.",
          },
          {
            id: "eightyfirst",
            year: "Aug. 29, 1917",
            label: "Training of the 81st Division begins.",
            why: "The marker says the 81st Division was trained here Aug. 29, 1917-May 18, 1918.",
          },
          {
            id: "fifth",
            year: "Oct. 20, 1920",
            label: "The 5th Division is stationed here.",
            why: "The marker says the 5th Division was stationed here Oct. 20, 1920-Oct. 4, 1921.",
          },
          {
            id: "guard",
            year: "1925",
            label: "It is made a training camp for the National Guard.",
            why: "The marker says it was made a training camp for National Guard 1925.",
          },
        ],
        ["fifth", "approved", "guard", "eightyfirst"],
      ),
      takeaway([
        "Named in honor of Gen. Andrew Jackson. This cantonment site 1 ½ mi. north was approved by the War Dept. June 2, 1917.",
        "Maximum strength was recorded in June 1918: 3,302 officers; 45,402 men.",
        "The 81st Division was trained here Aug. 29, 1917-May 18, 1918; the 5th Division was stationed here Oct. 20, 1920-Oct. 4, 1921. Made a training camp for National Guard 1925.",
      ]),
    ],
  ),
  lesson(
    "40-50",
    "Burned to delay Sherman's army",
    "Broad River timeline",
    [
      cited("40-50", "Broad River", "front"),
      span(
        '"2 years" is 1867 minus 1865, the years the marker prints for the rebuilding and the burning of the bridge.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "river",
        kicker: "About 1745",
        title: "A boundary and a ford",
        partLabel: "the river",
        art: art("m4050-river.jpg", "Illustration of a river ford. Not a historical photograph."),
        hotspots: [
          {
            id: "boundary",
            label: "Cherokee and Catawba",
            x: 32,
            y: 52,
            fact: "Early boundary between Cherokee and Catawba Indians. Name first applied about 1745.",
          },
          {
            id: "ford",
            label: "Faust's Ford",
            x: 74,
            y: 44,
            fact: "Faust's Ford, 2 mi. above, used in Revolution.",
          },
        ],
      },
      {
        kind: "scene",
        id: "bridge",
        kicker: "1829",
        title: "Opened, burned, and rebuilt",
        partLabel: "the bridge",
        art: art(
          "m4050-bridge.jpg",
          "Illustration of a river bridge. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "first",
            label: "1829 and 1865",
            x: 32,
            y: 50,
            fact: "First bridge opened 1829, burned 1865 to delay Sherman's army which crossed on pontoon bridges downstream.",
          },
          {
            id: "later",
            label: "1867, 1925, 1930",
            x: 74,
            y: 40,
            fact: "Bridge rebuilt 1867, burned 1925. Concrete bridge completed 1930.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1865-1867",
        title: "Years until the bridge was rebuilt",
        partLabel: "2 years",
        value: 2,
        unit: "years",
        meant:
          "What this meant: 1867 comes 2 years after 1865. That is the stretch from the year the first bridge was burned to the year it was rebuilt.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4050-bridge.jpg",
          "Illustration of a river bridge. Not a historical photograph.",
        ),
        nowArt: art(
          "m4050-today.jpg",
          "Illustration of a marker by a river bridge. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a bridge, for the first bridge the marker says opened in 1829. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a river bridge. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "name",
            year: "About 1745",
            label: "The name is first applied.",
            why: "The marker says the name was first applied about 1745.",
          },
          {
            id: "opened",
            year: "1829",
            label: "The first bridge opens.",
            why: "The marker says the first bridge opened in 1829.",
          },
          {
            id: "burned",
            year: "1865",
            label: "The bridge is burned to delay Sherman's army.",
            why: "The marker says it was burned in 1865 to delay Sherman's army, which crossed on pontoon bridges downstream.",
          },
          {
            id: "concrete",
            year: "1930",
            label: "A concrete bridge is completed.",
            why: "The marker says a concrete bridge was completed in 1930. The bridge had been rebuilt in 1867 and burned in 1925.",
          },
        ],
        ["concrete", "name", "burned", "opened"],
      ),
      takeaway([
        "Early boundary between Cherokee and Catawba Indians. Name first applied about 1745. Faust's Ford, 2 mi. above, used in Revolution.",
        "First bridge opened 1829, burned 1865 to delay Sherman's army which crossed on pontoon bridges downstream.",
        "Bridge rebuilt 1867, burned 1925. Concrete bridge completed 1930.",
      ]),
    ],
  ),
  lesson(
    "40-52",
    "Reopened after the burning of Columbia",
    "Columbia Female College timeline",
    [
      cited("40-52", "Original Site of Columbia College", "front"),
      span(
        '"8 years" is 1873 minus 1865, the year the college was reopened and the year classes ended.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "college",
        kicker: "1854",
        title: "Columbia Female College",
        partLabel: "the college",
        art: art(
          "m4052-college.jpg",
          "Illustration of a female college building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "land",
            label: "1854",
            x: 32,
            y: 50,
            fact: "This land was purchased in 1854 by the South Carolina Conference of the Methodist Episcopal Church as the site of Columbia Female College.",
          },
          {
            id: "charter",
            label: "Dec. 21, 1854",
            x: 74,
            y: 40,
            fact: "Chartered by S. C. General Assembly Dec. 21, 1854. Classes were held from 1859 to 1865.",
          },
        ],
      },
      {
        kind: "scene",
        id: "later",
        kicker: "1873",
        title: "Survived, reopened, then moved",
        partLabel: "the later campus",
        art: art(
          "m4052-later.jpg",
          "Illustration of the college campus later. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "reopened",
            label: "1873",
            x: 32,
            y: 52,
            fact: "The college survived the burning of Columbia and was reopened in 1873.",
          },
          {
            id: "moved",
            label: "1905",
            x: 74,
            y: 44,
            fact: "In 1905, the school was moved to its present site as the Columbia College.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1865-1873",
        title: "Years from the close of classes to reopening",
        partLabel: "8 years",
        value: 8,
        unit: "years",
        meant:
          "What this meant: 1873 comes 8 years after 1865. That is the stretch from the close of classes to the year the college was reopened.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4052-college.jpg",
          "Illustration of a female college building. Not a historical photograph.",
        ),
        nowArt: art(
          "m4052-today.jpg",
          "Illustration of a marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a college building, for Columbia Female College, which the marker says was chartered Dec. 21, 1854. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "purchased",
            year: "1854",
            label: "The land is purchased and the college is chartered.",
            why: "The marker dates the purchase to 1854 and the charter by the S. C. General Assembly to Dec. 21, 1854.",
          },
          {
            id: "classes",
            year: "1859",
            label: "Classes begin.",
            why: "The marker says classes were held from 1859 to 1865.",
          },
          {
            id: "closed",
            year: "1865",
            label: "Classes end.",
            why: "The marker says classes were held from 1859 to 1865.",
          },
          {
            id: "reopened",
            year: "1873",
            label: "The college is reopened.",
            why: "The marker says the college was reopened in 1873.",
          },
        ],
        ["reopened", "purchased", "closed", "classes"],
      ),
      takeaway([
        "This land was purchased in 1854 by the South Carolina Conference of the Methodist Episcopal Church as the site of Columbia Female College, chartered by the S. C. General Assembly Dec. 21, 1854.",
        "Classes were held from 1859 to 1865. The college survived the burning of Columbia and was reopened in 1873.",
        "In 1905, the school was moved to its present site as the Columbia College.",
      ]),
    ],
  ),
  lesson(
    "40-53",
    "Burned by Union troops",
    "Court House Square timeline",
    [
      cited("40-53", "Court House Square", "front"),
      span(
        '"9 years" is 1865 minus 1856, the year Union troops burned the Athenaeum and the new court house and the year the Athenaeum was incorporated.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "court",
        kicker: "1803-04",
        title: "The second court house",
        partLabel: "the court house",
        art: art("m4053-court.jpg", "Illustration of a court house. Not a historical photograph."),
        hotspots: [
          {
            id: "second",
            label: "1803-04",
            x: 32,
            y: 48,
            fact: "Richland County's second court house was built in 1803-04 on the northeast corner of Richardson (Main) and Washington Streets.",
          },
          {
            id: "razed",
            label: "The 1850s",
            x: 74,
            y: 42,
            fact: "In the 1850s, it was razed and a new court house erected on the same site.",
          },
        ],
      },
      {
        kind: "scene",
        id: "athenaeum",
        kicker: "1856",
        title: "A lecture hall and a library",
        partLabel: "the Athenaeum",
        art: art(
          "m4053-athenaeum.jpg",
          "Illustration of a lecture hall and a library. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "hall",
            label: "1856",
            x: 32,
            y: 54,
            fact: "On the southeast corner was located the Athenaeum, incorporated in 1856, which contained a lecture and exhibit hall and a library.",
          },
          {
            id: "burned",
            label: "1865",
            x: 74,
            y: 46,
            fact: "The Athenaeum and the new court house were both burned by Union troops in 1865.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1856-1865",
        title: "Years from incorporation to the fire",
        partLabel: "9 years",
        value: 9,
        unit: "years",
        meant:
          "What this meant: 1865 comes 9 years after 1856. That is the stretch from the year the Athenaeum was incorporated to the year Union troops burned it and the new court house.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4053-court.jpg",
          "Illustration of a court house. Not a historical photograph.",
        ),
        nowArt: art(
          "m4053-today.jpg",
          "Illustration of a marker at a bank corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a court house, for the second court house the marker says was built in 1803-04. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a bank corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "second",
            year: "1803-04",
            label: "The second court house is built.",
            why: "The marker dates Richland County's second court house to 1803-04, on the northeast corner of Richardson (Main) and Washington Streets.",
          },
          {
            id: "athenaeum",
            year: "1856",
            label: "The Athenaeum is incorporated.",
            why: "The marker says the Athenaeum, on the southeast corner, was incorporated in 1856 and contained a lecture and exhibit hall and a library.",
          },
          {
            id: "burned",
            year: "1865",
            label: "Union troops burn the Athenaeum and the new court house.",
            why: "The marker says both were burned by Union troops in 1865.",
          },
        ],
        ["burned", "second", "athenaeum"],
      ),
      takeaway([
        "Richland County's second court house was built in 1803-04 on the northeast corner of Richardson (Main) and Washington Streets.",
        "In the 1850s, it was razed and a new court house erected on the same site. On the southeast corner was the Athenaeum, incorporated in 1856, with a lecture and exhibit hall and a library.",
        "The Athenaeum and the new court house were both burned by Union troops in 1865.",
      ]),
    ],
  ),
];
