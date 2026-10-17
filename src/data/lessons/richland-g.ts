import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Columbia churches and houses, seventh Richland batch. Facts are from that marker only.
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

export const richlandLessonsG: MarkerLesson[] = [
  lesson(
    "40-21",
    "A church rebuilt of salvaged brick",
    "Washington Street Methodist Church timeline",
    [
      cited("40-21", "Washington Street Methodist Church", "front"),
      span("\"9 years\" is 1875 minus 1866, the year the present church was dedicated and the year it was reconstructed."),
    ],
    [
      {
        kind: "scene",
        id: "early",
        kicker: "Between 1803 and 1805",
        title: "A church, then another",
        partLabel: "the early churches",
        art: art("m4021-early.jpg", "Illustration of an early church. Not a historical photograph."),
        hotspots: [
          {
            id: "first",
            label: "Between 1803 and 1805",
            x: 32,
            y: 54,
            fact: "A church was built here between 1803 and 1805.",
          },
          {
            id: "second",
            label: "1832",
            x: 74,
            y: 42,
            fact: "Another church was erected in 1832.",
          },
        ],
      },
      {
        kind: "scene",
        id: "rebuild",
        kicker: "1866",
        title: "Burned, then reconstructed",
        partLabel: "the rebuilt church",
        art: art("m4021-rebuild.jpg", "Illustration of a rebuilt brick church. Not a historical photograph."),
        hotspots: [
          {
            id: "burned",
            label: "1865",
            x: 32,
            y: 58,
            fact: "The church erected in 1832 was burned by Union troops in 1865 and reconstructed in 1866 of salvaged brick and clay mortar.",
          },
          {
            id: "capers",
            label: "1875",
            x: 74,
            y: 40,
            fact: "The present church was dedicated in 1875. Bishop Wm. Capers (1790-1855), founder of missions to slaves in S. C., was pastor and is buried here.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1866-1875",
        title: "Years from reconstruction to dedication",
        partLabel: "9 years",
        value: 9,
        unit: "years",
        meant: "What this meant: 1875 comes 9 years after 1866. That is the stretch from the year the church was reconstructed to the year the present church was dedicated. The marker's \"between 1803 and 1805\" stays a range.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4021-early.jpg", "Illustration of the early church. Not a historical photograph."),
        nowArt: art("m4021-today.jpg", "Illustration of a marker and a church. Not a photograph of the site today."),
        thenCaption: "Illustration of an early church, for the church the marker says was built here between 1803 and 1805. Not a historical photograph.",
        nowCaption: "Illustration of a marker and a church. Not a photograph of the site today.",
      },
      order(
        [
          { id: "built", year: "Between 1803 and 1805", label: "A church is built here.", why: "The marker says a church was built here between 1803 and 1805. That stays a range." },
          { id: "erected", year: "1832", label: "Another church is erected.", why: "The marker dates that church to 1832." },
          { id: "rebuilt", year: "1866", label: "It is reconstructed of salvaged brick and clay mortar.", why: "The marker says Union troops burned it in 1865 and it was reconstructed in 1866." },
          { id: "dedicated", year: "1875", label: "The present church is dedicated.", why: "The marker dates that dedication to 1875." },
        ],
        ["dedicated", "built", "rebuilt", "erected"],
      ),
      takeaway([
        "A church was built here between 1803 and 1805. Another church was erected in 1832.",
        "Union troops burned that church in 1865. It was reconstructed in 1866 of salvaged brick and clay mortar, and the present church was dedicated in 1875.",
        "Bishop Wm. Capers (1790-1855), founder of missions to slaves in S. C., was pastor and is buried here.",
      ]),
    ],
  ),
  lesson(
    "40-22",
    "The first congregation in Columbia",
    "First Presbyterian Church timeline",
    [
      cited("40-22", "First Presbyterian Church", "front"),
      span("\"15 years\" is 1813 minus 1798, the year the churchyard was granted to this church and the year it was allotted as a public burying ground."),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1795",
        title: "The first congregation",
        partLabel: "the church",
        art: art("m4022-church.jpg", "Illustration of a church. Not a historical photograph."),
        hotspots: [
          {
            id: "organized",
            label: "1795",
            x: 32,
            y: 48,
            fact: "The first congregation organized in Columbia was organized in 1795.",
          },
          {
            id: "grant",
            label: "1813",
            x: 74,
            y: 56,
            fact: "The churchyard was granted to this church in 1813.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1798",
        title: "A public burying ground, then the church's",
        partLabel: "the churchyard",
        art: art("m4022-yard.jpg", "Illustration of a churchyard with blank stones. Not a historical photograph."),
        hotspots: [
          {
            id: "allotted",
            label: "1798",
            x: 32,
            y: 58,
            fact: "The churchyard was allotted as a public burying ground in 1798. Here are buried D. E. Dunlap, first pastor; Chancellor H. W. DeSaussure; and Jonathan Maxcy, first President of S. C. College.",
          },
          {
            id: "buried",
            label: "Buried here",
            x: 74,
            y: 44,
            fact: "Here are also buried Ann Pamela Cuningham, founder of Mt. Vernon Ladies' Association; U. S. Senators F. H. Elmore and Wm. F. DeSaussure, and the parents of Woodrow Wilson.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1798-1813",
        title: "Years from public burying ground to the grant",
        partLabel: "15 years",
        value: 15,
        unit: "years",
        meant: "What this meant: 1813 comes 15 years after 1798. That is the stretch from the year the churchyard was allotted as a public burying ground to the year it was granted to this church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4022-church.jpg", "Illustration of the church. Not a historical photograph."),
        nowArt: art("m4022-today.jpg", "Illustration of a marker and a church. Not a photograph of the site today."),
        thenCaption: "Illustration of the church, for the first congregation the marker says was organized in Columbia in 1795. Not a historical photograph.",
        nowCaption: "Illustration of a marker and a church. Not a photograph of the site today.",
      },
      order(
        [
          { id: "organized", year: "1795", label: "The first congregation is organized in Columbia.", why: "The marker dates that congregation to 1795." },
          { id: "allotted", year: "1798", label: "The churchyard is allotted as a public burying ground.", why: "The marker dates that allotment to 1798." },
          { id: "granted", year: "1813", label: "The churchyard is granted to this church.", why: "The marker dates that grant to 1813." },
        ],
        ["granted", "organized", "allotted"],
      ),
      takeaway([
        "The first congregation organized in Columbia was organized in 1795.",
        "The churchyard, allotted as a public burying ground in 1798, was granted to this church in 1813.",
        "Buried here are D. E. Dunlap, first pastor; Chancellor H. W. DeSaussure; Jonathan Maxcy, first President of S. C. College; Ann Pamela Cuningham, founder of Mt. Vernon Ladies' Association; U. S. Senators F. H. Elmore and Wm. F. DeSaussure, and the parents of Woodrow Wilson.",
      ]),
    ],
  ),
  lesson(
    "40-23",
    "The last home of Wade Hampton",
    "Wade Hampton house timeline",
    [
      cited("40-23", "Last Home of Wade Hampton", "front"),
      span("\"12 years\" is 1891 minus 1879, the years the marker prints for U. S. Senator."),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1899",
        title: "A house given by a grateful people",
        partLabel: "the house",
        art: art("m4023-house.jpg", "Illustration of the house. Not a historical photograph."),
        hotspots: [
          {
            id: "gift",
            label: "1899",
            x: 32,
            y: 50,
            fact: "This house was given to Wade Hampton, III, in 1899 by a grateful people.",
          },
          {
            id: "died",
            label: "April 11, 1902",
            x: 74,
            y: 42,
            fact: "Wade Hampton, III, born March 28, 1818, died April 11, 1902 in this house.",
          },
        ],
      },
      {
        kind: "scene",
        id: "service",
        kicker: "1861",
        title: "Colonel, then senator",
        partLabel: "his offices",
        art: art("m4023-service.jpg", "Illustration of a figure seen from behind in a uniform cloak. Not a historical photograph."),
        hotspots: [
          {
            id: "legion",
            label: "1861",
            x: 32,
            y: 46,
            fact: "He was commander of Hampton Legion in 1861, with rank of Colonel, and Lieutenant General, C. S. A., in 1865.",
          },
          {
            id: "offices",
            label: "1876-91",
            x: 74,
            y: 58,
            fact: "He was Governor of S. C. from 1876 to 1879 and U. S. Senator from 1879 to 1891.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1879-1891",
        title: "Years as U. S. Senator",
        partLabel: "12 years",
        value: 12,
        unit: "years",
        meant: "What this meant: 1891 comes 12 years after 1879. That is the stretch the marker prints for his years as U. S. Senator.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4023-house.jpg", "Illustration of the house. Not a historical photograph."),
        nowArt: art("m4023-today.jpg", "Illustration of a house and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of the house the marker says was given to him in 1899. Not a historical photograph.",
        nowCaption: "Illustration of a house and a marker. Not a photograph of the site today.",
      },
      order(
        [
          { id: "born", year: "March 28, 1818", label: "Wade Hampton, III, is born.", why: "The marker dates his birth to March 28, 1818." },
          { id: "legion", year: "1861", label: "He commands Hampton Legion, with rank of Colonel.", why: "The marker dates that command to 1861. He was Lieutenant General, C. S. A., in 1865." },
          { id: "senator", year: "1879", label: "His years as U. S. Senator begin.", why: "The marker prints U. S. Senator 1879-91. He was Governor of S. C. from 1876 to 1879." },
          { id: "died", year: "April 11, 1902", label: "He dies in this house.", why: "The marker says he died April 11, 1902 in this house, given to him in 1899 by a grateful people." },
        ],
        ["died", "born", "senator", "legion"],
      ),
      takeaway([
        "Wade Hampton, III, was born March 28, 1818. He was commander of Hampton Legion in 1861, with rank of Colonel, and Lieutenant General, C. S. A., in 1865.",
        "He was Governor of S. C. from 1876 to 1879 and U. S. Senator from 1879 to 1891.",
        "He died April 11, 1902 in this house, given to him in 1899 by a grateful people.",
      ]),
    ],
  ),
  lesson(
    "40-24",
    "One of the oldest houses in Columbia",
    "Horry-Guignard House timeline",
    [
      cited("40-24", "Horry-Guignard House", "front"),
      span("\"4 years\" is 1802 minus 1798, the years the marker prints for Surveyor General of S.C."),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "Before 1813",
        title: "Probably Peter Horry's house",
        partLabel: "the early house",
        art: art("m4024-house.jpg", "Illustration of an early house. Not a historical photograph."),
        hotspots: [
          {
            id: "built",
            label: "Before 1813",
            x: 32,
            y: 50,
            fact: "This is one of the oldest houses in Columbia. It was built before 1813, probably by Peter Horry (1747-1815).",
          },
          {
            id: "horry",
            label: "Peter Horry",
            x: 74,
            y: 55,
            fact: "Peter Horry was a Colonel in Revolution and Brigadier General of S.C. militia.",
          },
        ],
      },
      {
        kind: "scene",
        id: "later",
        kicker: "Later",
        title: "Later, John Gabriel Guignard's home",
        partLabel: "the later home",
        art: art("m4024-later.jpg", "Illustration of the same house later. Not a historical photograph."),
        hotspots: [
          {
            id: "guignard",
            label: "John Gabriel Guignard",
            x: 32,
            y: 48,
            fact: "It was later the home of John Gabriel Guignard (1751-1822).",
          },
          {
            id: "surveyor",
            label: "1798-1802",
            x: 74,
            y: 56,
            fact: "He was Surveyor General of S.C. from 1798 to 1802.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1798-1802",
        title: "Years Guignard was Surveyor General",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant: "What this meant: 1802 comes 4 years after 1798. That is the stretch the marker prints for John Gabriel Guignard as Surveyor General of S.C. The marker's \"before 1813\" and \"probably\" stay hedged.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4024-house.jpg", "Illustration of the early house. Not a historical photograph."),
        nowArt: art("m4024-today.jpg", "Illustration of a house and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of a house the marker says was built before 1813, probably by Peter Horry. Not a historical photograph.",
        nowCaption: "Illustration of a house and a marker. Not a photograph of the site today.",
      },
      order(
        [
          { id: "start", year: "1798", label: "Guignard's years as Surveyor General of S.C. begin.", why: "The marker prints Surveyor General of S.C., 1798-1802." },
          { id: "end", year: "1802", label: "The years printed for Surveyor General of S.C. end.", why: "The marker prints that office as 1798-1802. The house was built before 1813, probably by Peter Horry. Those words stay hedged." },
        ],
        ["end", "start"],
      ),
      takeaway([
        "This is one of the oldest houses in Columbia. It was built before 1813, probably by Peter Horry (1747-1815).",
        "Peter Horry was a Colonel in Revolution and Brigadier General of S.C. militia.",
        "It was later the home of John Gabriel Guignard (1751-1822), Surveyor General of S.C. from 1798 to 1802.",
      ]),
    ],
  ),
];
