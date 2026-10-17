import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Charleston sites. Facts are from that marker only.
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

export const charlestonLessonsA: MarkerLesson[] = [
  lesson(
    "10-01",
    "First scheduled steam railroad service",
    "Charleston to Hamburg timeline",
    [
      cited(
        "10-01",
        "South Carolina Canal & Rail Road Company Original Track Location in Charleston",
        "front",
      ),
    ],
    [
      {
        kind: "scene",
        id: "canal",
        kicker: "December 25, 1830",
        title: "Scheduled steam service begins",
        partLabel: "the first service",
        art: art(
          "m1001-canal.jpg",
          "Illustration of a canal beside an empty track bed. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "service",
            label: "December 25, 1830",
            x: 32,
            y: 52,
            fact: "Began its first successful scheduled steam railroad service in America on December 25, 1830.",
          },
          {
            id: "america",
            label: "In America",
            x: 74,
            y: 42,
            fact: "The marker calls that run the first successful scheduled steam railroad service in America.",
          },
        ],
      },
      {
        kind: "scene",
        id: "rail",
        kicker: "1833",
        title: "World's longest railroad",
        partLabel: "Charleston to Hamburg",
        art: art(
          "m1001-rail.jpg",
          "Illustration of an early steam locomotive on a long track. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "miles",
            label: "136 miles",
            x: 32,
            y: 46,
            fact: "By 1833 its 136 miles from Charleston to Hamburg made it the world's longest railroad.",
          },
          {
            id: "southern",
            label: "Southern Railway",
            x: 74,
            y: 60,
            fact: "Now a part of Southern Railway System.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1833",
        title: "Miles from Charleston to Hamburg",
        partLabel: "136 miles",
        value: 136,
        unit: "miles",
        meant:
          "What this meant: the marker says that by 1833 its 136 miles from Charleston to Hamburg made it the world's longest railroad.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1001-rail.jpg",
          "Illustration of an early steam locomotive on a long track. Not a historical photograph.",
        ),
        nowArt: art(
          "m1001-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early steam railroad, for the line the marker says ran 136 miles from Charleston to Hamburg by 1833. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "service",
            year: "December 25, 1830",
            label: "Scheduled steam railroad service begins.",
            why: "The marker says it began its first successful scheduled steam railroad service in America on December 25, 1830.",
          },
          {
            id: "longest",
            year: "1833",
            label: "The line is the world's longest railroad.",
            why: "The marker says that by 1833 its 136 miles from Charleston to Hamburg made it the world's longest railroad.",
          },
          {
            id: "southern",
            year: "Now",
            label: "It is part of the Southern Railway System.",
            why: "The marker says it is now a part of the Southern Railway System.",
          },
        ],
        ["longest", "service", "southern"],
      ),
      takeaway([
        "Began its first successful scheduled steam railroad service in America on December 25, 1830.",
        "By 1833 its 136 miles from Charleston to Hamburg made it the world's longest railroad.",
        "Now a part of Southern Railway System.",
      ]),
    ],
  ),
  lesson(
    "10-02",
    "One of the oldest Presbyterian congregations",
    "John's Island Presbyterian timeline",
    [
      cited("10-02", "John's Island Presbyterian Church", "front"),
      span(
        '"104 years" is 1823 minus 1719, the years the marker prints for the enlargement and the original sanctuary.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "About 1710",
        title: "Founded by early settlers",
        partLabel: "the congregation",
        art: art(
          "m1002-church.jpg",
          "Illustration of a small meeting house and an oak. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "About 1710",
            x: 32,
            y: 50,
            fact: "Founded by early English, Scottish, and French settlers about 1710.",
          },
          {
            id: "oldest",
            label: "In South Carolina",
            x: 74,
            y: 40,
            fact: "This is one of the oldest Presbyterian congregations in South Carolina.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "About 1719",
        title: "Built, then enlarged",
        partLabel: "the sanctuary",
        art: art(
          "m1002-yard.jpg",
          "Illustration of a church and an open churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "About 1719",
            x: 32,
            y: 44,
            fact: "The original sanctuary is believed to have been built about 1719.",
          },
          {
            id: "enlarged",
            label: "1823",
            x: 74,
            y: 58,
            fact: "The original sanctuary was enlarged in 1823.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1719-1823",
        title: "Years from the sanctuary to its enlargement",
        partLabel: "104 years",
        value: 104,
        unit: "years",
        meant:
          "What this meant: 1823 comes 104 years after 1719. That is the stretch from the year the original sanctuary was believed to have been built to the year it was enlarged.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1002-church.jpg",
          "Illustration of a small meeting house and an oak. Not a historical photograph.",
        ),
        nowArt: art(
          "m1002-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a meeting house, for the congregation the marker says was founded about 1710. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a churchyard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "About 1710",
            label: "Settlers found the congregation.",
            why: "The marker says it was founded by early English, Scottish, and French settlers about 1710.",
          },
          {
            id: "built",
            year: "About 1719",
            label: "The original sanctuary is built.",
            why: "The marker says the original sanctuary is believed to have been built about 1719.",
          },
          {
            id: "enlarged",
            year: "1823",
            label: "The sanctuary is enlarged.",
            why: "The marker says the original sanctuary was enlarged in 1823.",
          },
        ],
        ["enlarged", "founded", "built"],
      ),
      takeaway([
        "Founded by early English, Scottish, and French settlers about 1710.",
        "This is one of the oldest Presbyterian congregations in South Carolina.",
        "The original sanctuary, believed to have been built about 1719, was enlarged in 1823.",
      ]),
    ],
  ),
  lesson(
    "10-03",
    "A brick house on East Bay",
    "Thomas Smith timeline",
    [cited("10-03", "Thomas Smith", "front")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1684",
        title: "Arrived, and a house on this corner",
        partLabel: "the town house",
        art: art(
          "m1003-house.jpg",
          "Illustration of a brick town house and a wharf. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "house",
            label: "East Bay",
            x: 32,
            y: 48,
            fact: "His brick town house with a wharf on Cooper River was here on the corner of East Bay & Longitude Lane.",
          },
          {
            id: "arrived",
            label: "1684",
            x: 74,
            y: 60,
            fact: "He arrived in Charles Town in 1684 with his first wife, Barbara Atkins, and sons, Thomas and George.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1690-1694",
        title: "Cacique, landgrave, and governor",
        partLabel: "his offices",
        art: art(
          "m1003-yard.jpg",
          "Illustration of a walled yard beside a brick house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "offices",
            label: "1690 and 1691",
            x: 32,
            y: 42,
            fact: "A cacique by 1690, he was created Landgrave by the Lords Proprietors on May 13, 1691.",
          },
          {
            id: "governor",
            label: "1693-1694",
            x: 74,
            y: 56,
            fact: "Governor of Carolina, 1693-1694. Planter, Merchant, Surgeon. He died in his 46th year on November 16, 1694.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "November 16, 1694",
        title: "Died in his 46th year",
        partLabel: "his 46th year",
        value: 46,
        unit: "year",
        meant:
          "What this meant: the marker says he died in his 46th year on November 16, 1694.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1003-house.jpg",
          "Illustration of a brick town house and a wharf. Not a historical photograph.",
        ),
        nowArt: art(
          "m1003-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick town house and wharf, for the house the marker places on the corner of East Bay & Longitude Lane. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "arrived",
            year: "1684",
            label: "He arrives in Charles Town.",
            why: "The marker says he arrived in Charles Town in 1684 with his first wife, Barbara Atkins, and sons, Thomas and George.",
          },
          {
            id: "cacique",
            year: "1690",
            label: "He is a cacique.",
            why: "The marker says he was a cacique by 1690.",
          },
          {
            id: "landgrave",
            year: "May 13, 1691",
            label: "The Lords Proprietors create him Landgrave.",
            why: "The marker says he was created Landgrave by the Lords Proprietors on May 13, 1691.",
          },
          {
            id: "died",
            year: "November 16, 1694",
            label: "He dies in his 46th year.",
            why: "The marker says he was Governor of Carolina, 1693-1694, and died in his 46th year on November 16, 1694.",
          },
        ],
        ["landgrave", "arrived", "died", "cacique"],
      ),
      takeaway([
        "Governor of Carolina, 1693-1694. Planter, Merchant, Surgeon. He arrived in Charles Town in 1684 with his first wife, Barbara Atkins, and sons, Thomas and George.",
        "A cacique by 1690, he was created Landgrave by the Lords Proprietors on May 13, 1691. He died in his 46th year on November 16, 1694.",
        "His brick town house with a wharf on Cooper River was here on the corner of East Bay & Longitude Lane.",
      ]),
    ],
  ),
  lesson(
    "10-04",
    "One of the oldest bank buildings",
    "Old Bank Building timeline",
    [cited("10-04", "Old Bank Building", "front")],
    [
      {
        kind: "scene",
        id: "bank",
        kicker: "1797",
        title: "Built for the Bank of South Carolina",
        partLabel: "the bank",
        art: art(
          "m1004-bank.jpg",
          "Illustration of an early brick bank and its steps. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "begun",
            label: "1797",
            x: 32,
            y: 46,
            fact: "Construction having begun in 1797, this building was occupied by the Bank of South Carolina on December 10, 1798.",
          },
          {
            id: "oldest",
            label: "December 10, 1798",
            x: 74,
            y: 58,
            fact: "That occupancy made it one of the oldest bank buildings in the U. S.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1835",
        title: "Library, chamber, then a bank again",
        partLabel: "later uses",
        art: art(
          "m1004-street.jpg",
          "Illustration of an old brick building on a quiet street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "library",
            label: "1835-1916",
            x: 32,
            y: 40,
            fact: "It served as a bank until 1835. The Charleston Library Society used it 1835-1916.",
          },
          {
            id: "chamber",
            label: "1967",
            x: 74,
            y: 62,
            fact: "It was owned and occupied for the next fifty years by the Charleston Chamber of Commerce. In 1967 it reverted to its first use and became a bank again.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Fifty years",
        title: "Owned by the Chamber of Commerce",
        partLabel: "50 years",
        value: 50,
        unit: "years",
        meant:
          "What this meant: the marker says the Charleston Chamber of Commerce owned and occupied the building for the next fifty years.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1004-bank.jpg",
          "Illustration of an early brick bank and its steps. Not a historical photograph.",
        ),
        nowArt: art(
          "m1004-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early bank building, for the building the marker says the Bank of South Carolina occupied on December 10, 1798. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "begun",
            year: "1797",
            label: "Construction begins.",
            why: "The marker says construction began in 1797.",
          },
          {
            id: "occupied",
            year: "December 10, 1798",
            label: "The Bank of South Carolina occupies the building.",
            why: "The marker says the building was occupied by the Bank of South Carolina on December 10, 1798, making it one of the oldest bank buildings in the U. S.",
          },
          {
            id: "library",
            year: "1835",
            label: "The Charleston Library Society begins to use it.",
            why: "The marker says it served as a bank until 1835 and the Charleston Library Society used it 1835-1916.",
          },
          {
            id: "again",
            year: "1967",
            label: "It becomes a bank again.",
            why: "The marker says the Charleston Chamber of Commerce owned and occupied it for the next fifty years. In 1967 it reverted to its first use and became a bank again.",
          },
        ],
        ["library", "begun", "again", "occupied"],
      ),
      takeaway([
        "Construction having begun in 1797, this building was occupied by the Bank of South Carolina on December 10, 1798, making it one of the oldest bank buildings in the U. S.",
        "It served as a bank until 1835. The Charleston Library Society used it 1835-1916.",
        "It was owned and occupied for the next fifty years by the Charleston Chamber of Commerce. In 1967 it reverted to its first use and became a bank again.",
      ]),
    ],
  ),
];
