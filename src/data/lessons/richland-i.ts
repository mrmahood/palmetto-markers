import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Columbia hospital, canal, bridges, and a church. Facts are from that marker only.
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

export const richlandLessonsI: MarkerLesson[] = [
  lesson(
    "40-35",
    "A hospital begun by Columbia women",
    "Wayside Hospital timeline",
    [
      cited("40-35", "Site of Wayside Hospital", "front"),
      span("\"3 years\" is 1865 minus 1862, the year the marker says the hospital was closed and the year it was established."),
    ],
    [
      {
        kind: "scene",
        id: "hospital",
        kicker: "March 10, 1862",
        title: "Established by Columbia women",
        partLabel: "the hospital",
        art: art("m4035-hospital.jpg", "Illustration of a wayside hospital building. Not a historical photograph."),
        hotspots: [
          {
            id: "opened",
            label: "March 10, 1862",
            x: 32,
            y: 48,
            fact: "Established March 10, 1862 by a group of Columbia women to care for sick and wounded Confederate soldiers.",
          },
          {
            id: "gifts",
            label: "Voluntary contributions",
            x: 74,
            y: 56,
            fact: "The hospital was supported by voluntary contributions.",
          },
        ],
      },
      {
        kind: "scene",
        id: "ward",
        kicker: "February 15, 1865",
        title: "Cared for, then closed",
        partLabel: "the ward",
        art: art("m4035-ward.jpg", "Illustration of a calm hospital ward, figures seen from behind. Not a historical photograph."),
        hotspots: [
          {
            id: "cared",
            label: "About 75,000",
            x: 32,
            y: 54,
            fact: "About 75,000 men were cared for before the hospital was closed February 15, 1865.",
          },
          {
            id: "quote",
            label: "A little nucleus",
            x: 74,
            y: 42,
            fact: "The marker quotes, \"From this little nucleus spread the grand system of wayside hospitals.\"",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1862-1865",
        title: "Years from opening to closing",
        partLabel: "3 years",
        value: 3,
        unit: "years",
        meant: "What this meant: 1865 comes 3 years after 1862. That is the stretch from the year the marker says the hospital was established to the year it was closed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4035-hospital.jpg", "Illustration of the wayside hospital. Not a historical photograph."),
        nowArt: art("m4035-today.jpg", "Illustration of a marker on a city street. Not a photograph of the site today."),
        thenCaption: "Illustration of a wayside hospital building, for the hospital the marker says was established March 10, 1862. Not a historical photograph.",
        nowCaption: "Illustration of a marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          { id: "open", year: "March 10, 1862", label: "A group of Columbia women establish the hospital.", why: "The marker dates the hospital to March 10, 1862." },
          { id: "close", year: "February 15, 1865", label: "The hospital is closed.", why: "The marker says the hospital was closed February 15, 1865." },
        ],
        ["close", "open"],
      ),
      takeaway([
        "Established March 10, 1862 by a group of Columbia women to care for sick and wounded Confederate soldiers. Supported by voluntary contributions.",
        "About 75,000 men were cared for before the hospital was closed February 15, 1865.",
        "The marker quotes, \"From this little nucleus spread the grand system of wayside hospitals.\"",
      ]),
    ],
  ),
  lesson(
    "40-37",
    "A canal from freight to power",
    "Columbia Canal timeline",
    [
      cited("40-37", "Columbia Canal", "front"),
      span("\"15 years\" is 1895 minus 1880, the last and first years the marker prints for the enlargement, written as 1880-95."),
    ],
    [
      {
        kind: "scene",
        id: "canal",
        kicker: "1824",
        title: "A link toward Charleston",
        partLabel: "the canal",
        art: art("m4037-canal.jpg", "Illustration of a canal with freight boats. Not a historical photograph."),
        hotspots: [
          {
            id: "done",
            label: "1824",
            x: 32,
            y: 50,
            fact: "Completed 1824. It was an important link in the system of waterways transporting freight between the up country and Charleston.",
          },
          {
            id: "rail",
            label: "After 1850",
            x: 74,
            y: 58,
            fact: "Supplanted by railroads for transportation after 1850.",
          },
        ],
      },
      {
        kind: "scene",
        id: "works",
        kicker: "1880-95",
        title: "Powder works, then power companies",
        partLabel: "the works",
        art: art("m4037-works.jpg", "Illustration of quiet powder-works buildings beside a canal. Not a historical photograph."),
        hotspots: [
          {
            id: "powder",
            label: "Powder works",
            x: 32,
            y: 46,
            fact: "Leased to the Confederate government to run powder works.",
          },
          {
            id: "power",
            label: "1880-95",
            x: 74,
            y: 56,
            fact: "Enlarged 1880-95 and since sold to successive power companies.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1880-1895",
        title: "Years of enlargement",
        partLabel: "15 years",
        value: 15,
        unit: "years",
        meant: "What this meant: 1895 comes 15 years after 1880. That is the stretch the marker prints for the enlargement, written as 1880-95.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4037-canal.jpg", "Illustration of the canal. Not a historical photograph."),
        nowArt: art("m4037-today.jpg", "Illustration of a marker on a bridge. Not a photograph of the site today."),
        thenCaption: "Illustration of a canal with boats, for the canal the marker says was completed in 1824. Not a historical photograph.",
        nowCaption: "Illustration of a marker on a bridge. Not a photograph of the site today.",
      },
      order(
        [
          { id: "finish", year: "1824", label: "The canal is completed.", why: "The marker says the canal was completed in 1824." },
          { id: "railroads", year: "After 1850", label: "Railroads supplant it for transportation.", why: "The marker says it was supplanted by railroads for transportation after 1850." },
          { id: "start", year: "1880", label: "The enlargement years begin.", why: "The marker prints the enlargement as 1880-95." },
          { id: "end", year: "1895", label: "The enlargement years end.", why: "The marker prints the enlargement as 1880-95, so those years run through 1895." },
        ],
        ["railroads", "end", "finish", "start"],
      ),
      takeaway([
        "The Columbia Canal was completed in 1824, an important link in the waterways transporting freight between the up country and Charleston.",
        "It was supplanted by railroads for transportation after 1850, and leased to the Confederate government to run powder works.",
        "Enlarged 1880-95 and since sold to successive power companies.",
      ]),
    ],
  ),
  lesson(
    "40-38",
    "From a wooden bridge to concrete",
    "Congaree River Bridges timeline",
    [
      cited("40-38", "Congaree River Bridges", "front"),
      span("\"100 years\" is 1927 minus 1827, the year a concrete bridge was completed and the year the first wooden bridge was completed."),
    ],
    [
      {
        kind: "scene",
        id: "wood",
        kicker: "1827",
        title: "The first wooden bridge",
        partLabel: "the wooden bridge",
        art: art("m4038-bridge.jpg", "Illustration of a wooden river bridge. Not a historical photograph."),
        hotspots: [
          {
            id: "name",
            label: "Until 1715",
            x: 32,
            y: 44,
            fact: "This river took its name from the Congaree Indians, a Siouan tribe which occupied the valley until the Yemassee War in 1715.",
          },
          {
            id: "first",
            label: "1827",
            x: 74,
            y: 56,
            fact: "The first wooden bridge here was completed in 1827.",
          },
        ],
      },
      {
        kind: "scene",
        id: "concrete",
        kicker: "1927",
        title: "Burned, rebuilt, then concrete",
        partLabel: "the later bridge",
        art: art("m4038-later.jpg", "Illustration of a concrete river bridge. Not a historical photograph."),
        hotspots: [
          {
            id: "burned",
            label: "1865 and 1870",
            x: 32,
            y: 50,
            fact: "It was burned to delay the advance of Sherman's Army in 1865, and rebuilt in 1870.",
          },
          {
            id: "concrete",
            label: "1927",
            x: 74,
            y: 40,
            fact: "A concrete bridge was completed in 1927.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1827-1927",
        title: "Years from the first bridge to the concrete bridge",
        partLabel: "100 years",
        value: 100,
        unit: "years",
        meant: "What this meant: 1927 comes 100 years after 1827. That is the stretch from the year the first wooden bridge was completed to the year a concrete bridge was completed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4038-bridge.jpg", "Illustration of the wooden bridge. Not a historical photograph."),
        nowArt: art("m4038-today.jpg", "Illustration of a marker by a river bridge. Not a photograph of the site today."),
        thenCaption: "Illustration of a wooden bridge, for the first bridge the marker says was completed in 1827. Not a historical photograph.",
        nowCaption: "Illustration of a marker by a river bridge. Not a photograph of the site today.",
      },
      order(
        [
          { id: "wood", year: "1827", label: "The first wooden bridge is completed.", why: "The marker says the first wooden bridge here was completed in 1827." },
          { id: "burned", year: "1865", label: "The bridge is burned to delay Sherman's Army.", why: "The marker says it was burned in 1865 to delay the advance of Sherman's Army." },
          { id: "rebuilt", year: "1870", label: "The bridge is rebuilt.", why: "The marker says it was rebuilt in 1870." },
          { id: "concrete", year: "1927", label: "A concrete bridge is completed.", why: "The marker says a concrete bridge was completed in 1927." },
        ],
        ["burned", "wood", "concrete", "rebuilt"],
      ),
      takeaway([
        "This river took its name from the Congaree Indians, a Siouan tribe which occupied the valley until the Yemassee War in 1715.",
        "The first wooden bridge here was completed in 1827. It was burned to delay the advance of Sherman's Army in 1865, and rebuilt in 1870.",
        "A concrete bridge was completed in 1927.",
      ]),
    ],
  ),
  lesson(
    "40-45",
    "A church on Tom's Creek",
    "Congaree Baptist Church timeline",
    [
      cited("40-45", "Congaree Baptist Church", "front"),
      span("\"22 miles\" is the distance the marker prints. It is not a measurement made for this lesson."),
    ],
    [
      {
        kind: "scene",
        id: "meet",
        kicker: "1766",
        title: "The original church",
        partLabel: "the original church",
        art: art("m4045-church.jpg", "Illustration of a simple early meeting house. Not a historical photograph."),
        hotspots: [
          {
            id: "organized",
            label: "1766",
            x: 32,
            y: 48,
            fact: "A few miles south was the site of original Congaree Baptist Church, organized 1766 with the Rev. Joseph Reese as pastor.",
          },
          {
            id: "probably",
            label: "Probably first",
            x: 74,
            y: 56,
            fact: "Probably first church in bounds of present Richland County.",
          },
        ],
      },
      {
        kind: "scene",
        id: "creek",
        kicker: "Since 1800",
        title: "On Tom's Creek",
        partLabel: "the creek church",
        art: art("m4045-creek.jpg", "Illustration of a church beside a creek. Not a historical photograph."),
        hotspots: [
          {
            id: "since",
            label: "Since 1800",
            x: 32,
            y: 46,
            fact: "Since 1800 located on Tom's Creek.",
          },
          {
            id: "miles",
            label: "22 miles",
            x: 74,
            y: 58,
            fact: "The marker places that location 22 miles south of Columbia.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Since 1800",
        title: "Miles south of Columbia",
        partLabel: "22 miles",
        value: 22,
        unit: "miles",
        meant: "What this meant: the marker places the church since 1800 on Tom's Creek 22 miles south of Columbia.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4045-church.jpg", "Illustration of the early meeting house. Not a historical photograph."),
        nowArt: art("m4045-today.jpg", "Illustration of a marker on a highway. Not a photograph of the site today."),
        thenCaption: "Illustration of a simple meeting house, for the original church the marker says was organized in 1766. Not a historical photograph.",
        nowCaption: "Illustration of a marker on a highway. Not a photograph of the site today.",
      },
      order(
        [
          { id: "organized", year: "1766", label: "The original church is organized, with the Rev. Joseph Reese as pastor.", why: "The marker says the original Congaree Baptist Church was organized 1766 with the Rev. Joseph Reese as pastor." },
          { id: "creek", year: "1800", label: "The church is located on Tom's Creek.", why: "The marker says that since 1800 it has been located on Tom's Creek 22 miles south of Columbia." },
        ],
        ["creek", "organized"],
      ),
      takeaway([
        "A few miles south was the site of original Congaree Baptist Church, organized 1766 with the Rev. Joseph Reese as pastor.",
        "Probably first church in bounds of present Richland County.",
        "Since 1800 located on Tom's Creek 22 miles south of Columbia.",
      ]),
    ],
  ),
];
