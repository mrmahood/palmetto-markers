import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Darlington sites. Facts are from that marker only.
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

export const darlingtonLessonsJ: MarkerLesson[] = [
  lesson(
    "16-39",
    "Designed in the Beaux Arts style",
    "Japonica Hall timeline",
    [
      cited("16-39", "Japonica Hall", "front and back"),
      span(
        '"83 years" is 1914 minus 1831, the years the marker prints for Maj. James Jonathan Lucas (1831-1914).',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1896-97",
        title: "A Beaux Arts house",
        partLabel: "the house",
        art: art(
          "m1639-house.jpg",
          "Illustration of a Beaux Arts house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1896-97",
            x: 32,
            y: 46,
            fact: "This house, built in 1896-97 and designed in the Beaux Arts style by noted S.C. architect Charles Coker Wilson, was the home of Maj. James Jonathan Lucas (1831-1914).",
          },
          {
            id: "earlier",
            label: "Burned in 1892",
            x: 74,
            y: 58,
            fact: "An earlier house here, which burned in 1892, had been the home of Dr. Thomas Smith (d. 1875), who married the widow of Judge Samuel Wilds.",
          },
        ],
      },
      {
        kind: "scene",
        id: "service",
        kicker: "1862",
        title: "Heavy artillery on James Island",
        partLabel: "his service",
        art: art(
          "m1639-battery.jpg",
          "Illustration of heavy artillery on a coastal island. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "representative",
            label: "1856-1862",
            x: 32,
            y: 48,
            fact: "Lucas served Charleston District as a state representative 1856-1862.",
          },
          {
            id: "battalion",
            label: "Lucas' Battalion",
            x: 74,
            y: 40,
            fact: "In 1862, Lucas, a Citadel graduate, organized and became major of Lucas' Battalion of Heavy Artillery, which spent most of the Civil War on James Island near Charleston.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1831-1914",
        title: "Years the marker prints for Major Lucas",
        partLabel: "83 years",
        value: 83,
        unit: "years",
        meant:
          "What this meant: 1914 comes 83 years after 1831. Those are the years the marker prints for Maj. James Jonathan Lucas (1831-1914).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1639-house.jpg",
          "Illustration of a Beaux Arts house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1639-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Beaux Arts house, for the house the marker says was built in 1896-97 and designed by Charles Coker Wilson. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "rep",
            year: "1856",
            label: "Lucas serves Charleston District as a state representative.",
            why: "The marker says Lucas served Charleston District as a state representative 1856-1862.",
          },
          {
            id: "battalion",
            year: "1862",
            label: "He organizes Lucas' Battalion of Heavy Artillery.",
            why: "The marker says that in 1862, Lucas, a Citadel graduate, organized and became major of Lucas' Battalion of Heavy Artillery, which spent most of the Civil War on James Island near Charleston.",
          },
          {
            id: "society",
            year: "1865",
            label: "Maj. Lucas moves to Society Hill.",
            why: "The marker says Maj. Lucas moved to Society Hill in 1865, and later served as a director of the Cheraw & Darlington RR and Atlantic Coast Line RR.",
          },
          {
            id: "built",
            year: "1896-97",
            label: "This house is built in the Beaux Arts style.",
            why: "The marker says this house, built in 1896-97 and designed in the Beaux Arts style by noted S.C. architect Charles Coker Wilson, was the home of Maj. James Jonathan Lucas (1831-1914).",
          },
          {
            id: "listed",
            year: "1989",
            label: "Japonica Hall is listed in the National Register.",
            why: "The marker says Japonica Hall was listed in the National Register of Historic Places in 1989.",
          },
        ],
        ["built", "rep", "listed", "society", "battalion"],
      ),
      takeaway([
        "This house, built in 1896-97 and designed in the Beaux Arts style by noted S.C. architect Charles Coker Wilson, was the home of Maj. James Jonathan Lucas (1831-1914).",
        "In 1862, Lucas, a Citadel graduate, organized and became major of Lucas' Battalion of Heavy Artillery, which spent most of the Civil War on James Island near Charleston.",
        "Japonica Hall was listed in the National Register of Historic Places in 1989.",
      ]),
    ],
  ),
  lesson(
    "16-40",
    "Routed them in hand-to-hand combat",
    "Williamson's Bridge timeline",
    [
      cited("16-40", "Williamson's Bridge", "front"),
      span(
        '"64 years" is 1818 minus 1754, the years the marker prints for Lt. Col. Lamuel Benton (1754-1818).',
      ),
    ],
    [
      {
        kind: "scene",
        id: "bridge",
        kicker: "By 1771",
        title: "Built over Black Creek",
        partLabel: "the bridge",
        art: art(
          "m1640-bridge.jpg",
          "Illustration of a wooden bridge over a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "By 1771",
            x: 32,
            y: 50,
            fact: "Williamson's Bridge was built over Black Creek by 1771.",
          },
          {
            id: "clash",
            label: "1780",
            x: 74,
            y: 40,
            fact: 'In 1780 a part of Brig. Gen. Francis Marion\'s S.C. militia brigade – the "Pee Dee Regiment" or "Cheraws Militia" under Lt. Col. Lamuel Benton (1754-1818) – clashed with Loyalists here.',
          },
        ],
      },
      {
        kind: "scene",
        id: "fight",
        kicker: "1780",
        title: "Forced from the bridge",
        partLabel: "the clash",
        art: art(
          "m1640-fight.jpg",
          "Illustration of a skirmish at a wooden bridge. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "forced",
            label: "From the bridge",
            x: 32,
            y: 46,
            fact: "Benton's militiamen forced the Tories from the bridge, pursued them for some distance, and finally routed them in hand-to-hand combat.",
          },
          {
            id: "benton",
            label: "1754-1818",
            x: 74,
            y: 58,
            fact: 'In 1780 a part of Brig. Gen. Francis Marion\'s S.C. militia brigade – the "Pee Dee Regiment" or "Cheraws Militia" under Lt. Col. Lamuel Benton (1754-1818) – clashed with Loyalists here.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1754-1818",
        title: "Years the marker prints for Lamuel Benton",
        partLabel: "64 years",
        value: 64,
        unit: "years",
        meant:
          "What this meant: 1818 comes 64 years after 1754. Those are the years the marker prints for Lt. Col. Lamuel Benton (1754-1818).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1640-bridge.jpg",
          "Illustration of a wooden bridge over a creek. Not a historical photograph.",
        ),
        nowArt: art(
          "m1640-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden bridge over a creek, for the bridge the marker says was built over Black Creek by 1771. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "By 1771",
            label: "Williamson's Bridge is built over Black Creek.",
            why: "The marker says Williamson's Bridge was built over Black Creek by 1771.",
          },
          {
            id: "clash",
            year: "1780",
            label: "Benton's militiamen clash with Loyalists here.",
            why: 'The marker says that in 1780 a part of Brig. Gen. Francis Marion\'s S.C. militia brigade – the "Pee Dee Regiment" or "Cheraws Militia" under Lt. Col. Lamuel Benton (1754-1818) – clashed with Loyalists here.',
          },
          {
            id: "rout",
            year: "1780",
            label: "They rout the Tories in hand-to-hand combat.",
            why: "The marker says Benton's militiamen forced the Tories from the bridge, pursued them for some distance, and finally routed them in hand-to-hand combat.",
          },
        ],
        ["rout", "built", "clash"],
      ),
      takeaway([
        "Williamson's Bridge was built over Black Creek by 1771.",
        'In 1780 a part of Brig. Gen. Francis Marion\'s S.C. militia brigade – the "Pee Dee Regiment" or "Cheraws Militia" under Lt. Col. Lamuel Benton (1754-1818) – clashed with Loyalists here.',
        "Benton's militiamen forced the Tories from the bridge, pursued them for some distance, and finally routed them in hand-to-hand combat.",
      ]),
    ],
  ),
  lesson(
    "16-41",
    "Birthplace of Maj. James Lide Coker",
    "Caleb Coker House timeline",
    [
      cited("16-41", "Caleb Coker House", "front"),
      span(
        '"67 years" is 1869 minus 1802, the years the marker prints for Caleb Coker (1802-1869).',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "ca. 1832",
        title: "Home, and a son's birthplace",
        partLabel: "the house",
        art: art(
          "m1641-house.jpg",
          "Illustration of an early wooden house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "home",
            label: "ca. 1832",
            x: 32,
            y: 48,
            fact: "This house, built ca. 1832, was the home of Caleb Coker (1802-1869).",
          },
          {
            id: "son",
            label: "1837-1918",
            x: 74,
            y: 40,
            fact: "This house was the birthplace of his son Maj. James Lide Coker (1837-1918), Confederate officer, industrialist, and founder of Coker College.",
          },
        ],
      },
      {
        kind: "scene",
        id: "merchant",
        kicker: "A merchant",
        title: "Railroad, library, and society",
        partLabel: "his offices",
        art: art(
          "m1641-rail.jpg",
          "Illustration of a railroad beside cotton fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rail",
            label: "Cheraw & Darlington RR",
            x: 32,
            y: 52,
            fact: "Caleb Coker, a merchant, was also a director of the Cheraw & Darlington RR.",
          },
          {
            id: "library",
            label: "Library and society",
            x: 74,
            y: 42,
            fact: "Caleb Coker, a merchant, was also librarian of the Society Hill Library Society, and a charter member of the Darlington Agricultural Society.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1802-1869",
        title: "Years the marker prints for Caleb Coker",
        partLabel: "67 years",
        value: 67,
        unit: "years",
        meant:
          "What this meant: 1869 comes 67 years after 1802. Those are the years the marker prints for Caleb Coker (1802-1869).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1641-house.jpg",
          "Illustration of an early wooden house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1641-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early wooden house, for the house the marker says was built ca. 1832 and was the home of Caleb Coker. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "early",
            year: "1802",
            label: "The earlier year the marker prints for Caleb Coker.",
            why: "The marker says this house was the home of Caleb Coker (1802-1869).",
          },
          {
            id: "built",
            year: "ca. 1832",
            label: "This house is built.",
            why: "The marker says this house, built ca. 1832, was the home of Caleb Coker (1802-1869) and the birthplace of his son Maj. James Lide Coker (1837-1918), Confederate officer, industrialist, and founder of Coker College.",
          },
          {
            id: "son",
            year: "1837",
            label: "Maj. James Lide Coker is born here.",
            why: "The marker says this house was the birthplace of his son Maj. James Lide Coker (1837-1918).",
          },
          {
            id: "later",
            year: "1869",
            label: "The later year the marker prints for Caleb Coker.",
            why: "The marker prints 1869 as the later year for Caleb Coker (1802-1869).",
          },
        ],
        ["son", "early", "later", "built"],
      ),
      takeaway([
        "This house, built ca. 1832, was the home of Caleb Coker (1802-1869) and the birthplace of his son Maj. James Lide Coker (1837-1918), Confederate officer, industrialist, and founder of Coker College.",
        "Caleb Coker, a merchant, was also a director of the Cheraw & Darlington RR.",
        "Caleb Coker, a merchant, was also librarian of the Society Hill Library Society, and a charter member of the Darlington Agricultural Society.",
      ]),
    ],
  ),
  lesson(
    "16-42",
    "Last cotton oil mill still operating in S.C.",
    "Hartsville Oil Mill timeline",
    [
      cited("16-42", "Hartsville Oil Mill", "front and back"),
      span(
        '"93 years" is 1993 minus 1900, the years the marker prints for the mill standing here until 1993 and for its founding in 1900.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1900",
        title: "Founded to crush cottonseed",
        partLabel: "the mill",
        art: art(
          "m1642-mill.jpg",
          "Illustration of a cotton oil mill and cotton bales. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1900 to 1993",
            x: 32,
            y: 46,
            fact: "The Hartsville Oil Mill, founded in 1900 by J.L. Coker, D.R. Coker, and J.J. Lawton, stood here until 1993.",
          },
          {
            id: "products",
            label: "Oil, meal, and lint",
            x: 74,
            y: 58,
            fact: "A cotton oil mill, it crushed cottonseed to produce cooking oil; meal and cake for feed and fertilizer; and lint for stuffing and explosives.",
          },
        ],
      },
      {
        kind: "scene",
        id: "office",
        kicker: "1915",
        title: "An office, then screw presses",
        partLabel: "the mill office",
        art: art(
          "m1642-office.jpg",
          "Illustration of a mill office beside presses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "office",
            label: "Built in 1915",
            x: 32,
            y: 44,
            fact: "The mill office, still standing at this site, was built in 1915.",
          },
          {
            id: "presses",
            label: "1954",
            x: 74,
            y: 56,
            fact: "Under the leadership of president E.H. Lawton, Sr., the mill was converted from hydraulic presses to screw presses in 1954.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1900-1993",
        title: "Years from the founding to 1993",
        partLabel: "93 years",
        value: 93,
        unit: "years",
        meant:
          "What this meant: 1993 comes 93 years after 1900. That is the stretch from the year the mill was founded to the year the marker says it stood here until.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1642-mill.jpg",
          "Illustration of a cotton oil mill and cotton bales. Not a historical photograph.",
        ),
        nowArt: art(
          "m1642-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cotton oil mill, for the mill the marker says was founded in 1900 and stood here until 1993. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1900",
            label: "J.L. Coker, D.R. Coker, and J.J. Lawton found the mill.",
            why: "The marker says the Hartsville Oil Mill, founded in 1900 by J.L. Coker, D.R. Coker, and J.J. Lawton, stood here until 1993.",
          },
          {
            id: "chartered",
            year: "1909",
            label: "The mill is chartered, with Lawton as president.",
            why: "The marker says it was chartered in 1909 with Lawton as president, treasurer, and general manager; Albert Jordan as secretary; and C.G. Timberlake as superintendent.",
          },
          {
            id: "soybeans",
            year: "By 1957",
            label: "The mill begins extracting oil and meal from soybeans.",
            why: "The marker says the mill began extracting oil and meal from soybeans by 1957.",
          },
          {
            id: "sold",
            year: "1981",
            label: "The company sells the Hartsville mill.",
            why: "The marker says the company sold the Hartsville mill in 1981 and moved its headquarters to Darlington.",
          },
          {
            id: "last",
            year: "2000",
            label: "It is the last cotton oil mill still operating in S.C.",
            why: "The marker says that in 2000 it was the last cotton oil mill still operating in S.C.",
          },
        ],
        ["sold", "founded", "last", "soybeans", "chartered"],
      ),
      takeaway([
        "The Hartsville Oil Mill, founded in 1900 by J.L. Coker, D.R. Coker, and J.J. Lawton, stood here until 1993.",
        "A cotton oil mill, it crushed cottonseed to produce cooking oil; meal and cake for feed and fertilizer; and lint for stuffing and explosives.",
        "In 2000 it was the last cotton oil mill still operating in S.C.",
      ]),
    ],
  ),
];
