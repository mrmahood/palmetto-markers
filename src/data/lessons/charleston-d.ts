import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Charleston County sites. Facts are from that marker only.
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

export const charlestonLessonsD: MarkerLesson[] = [
  lesson(
    "10-17",
    "Inherited after his father's death",
    "The Elms timeline",
    [
      cited("10-17", "The Elms Plantation", "front"),
      span(
        '"67 years" is 1749 minus 1682, the years the marker prints for Ralph Izard\'s inheritance and his great-grandfather\'s settlement in SC.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1682",
        title: "Established here, then inherited",
        partLabel: "the house",
        art: art(
          "m1017-house.jpg",
          "Illustration of a plantation house among elm trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "settled",
            label: "1682",
            x: 32,
            y: 54,
            fact: "The Elms, which remained in the Izard family for generations, was established here by Izard's great-grandfather (also named Ralph), who settled in SC in 1682.",
          },
          {
            id: "inherited",
            label: "1749",
            x: 74,
            y: 42,
            fact: "Ralph Izard inherited The Elms after his father's death in 1749.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "The Revolution",
        title: "Patriot support and public service",
        partLabel: "the fields",
        art: art(
          "m1017-fields.jpg",
          "Illustration of plantation fields and a tree line. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "support",
            label: "The Revolution",
            x: 32,
            y: 48,
            fact: "During the Revolution he provided financial support to the Patriot cause.",
          },
          {
            id: "offices",
            label: "Diplomat and senator",
            x: 74,
            y: 58,
            fact: "He also served as a foreign diplomat, advisor to George Washington, and US senator.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1682-1749",
        title: "Years from the settlement to the inheritance",
        partLabel: "67 years",
        value: 67,
        unit: "years",
        meant:
          "What this meant: 1749 comes 67 years after 1682. That is the stretch from the year Izard's great-grandfather settled in SC to the year Ralph Izard inherited The Elms.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1017-house.jpg",
          "Illustration of a plantation house among elm trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m1017-today.jpg",
          "Illustration of a blank marker post under trees. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plantation house among elm trees, for The Elms, which the marker says was established here by Izard's great-grandfather. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker post under trees. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "settled",
            year: "1682",
            label: "Izard's great-grandfather settles in SC and establishes The Elms.",
            why: "The marker says The Elms was established here by Izard's great-grandfather (also named Ralph), who settled in SC in 1682.",
          },
          {
            id: "inherited",
            year: "1749",
            label: "Ralph Izard inherits The Elms after his father's death.",
            why: "The marker says Ralph Izard inherited The Elms after his father's death in 1749.",
          },
          {
            id: "support",
            year: "During the Revolution",
            label: "He provides financial support to the Patriot cause.",
            why: "The marker says that during the Revolution he provided financial support to the Patriot cause.",
          },
        ],
        ["support", "settled", "inherited"],
      ),
      takeaway([
        "Ralph Izard inherited The Elms after his father's death in 1749.",
        "During the Revolution he provided financial support to the Patriot cause. He also served as a foreign diplomat, advisor to George Washington, and US senator.",
        "The Elms, which remained in the Izard family for generations, was established here by Izard's great-grandfather (also named Ralph), who settled in SC in 1682.",
      ]),
    ],
  ),
  lesson(
    "10-18",
    "Passed to a secession signer",
    "Laurel Hill timeline",
    [
      cited("10-18", "Laurel Hill Plantation", "front"),
      span(
        '"170 years" is 1864 minus 1694, the years the marker prints for the plantation passing to Dr. Peter P. Bonneau and John Boone owning this land.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "By 1694",
        title: "Owned, then passed on",
        partLabel: "the house",
        art: art(
          "m1018-house.jpg",
          "Illustration of a plantation house among laurel shrubs. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "boone",
            label: "By 1694",
            x: 32,
            y: 52,
            fact: "John Boone owned this land by 1694.",
          },
          {
            id: "passed",
            label: "1864",
            x: 74,
            y: 42,
            fact: "The plantation that developed here passed in 1864 to Dr. Peter P. Bonneau, signer of the Ordinance of Secession and Confederate Army surgeon.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "1984",
        title: "A later owner's trust",
        partLabel: "the fields",
        art: art(
          "m1018-fields.jpg",
          "Illustration of open plantation fields and a fence. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "died",
            label: "1984",
            x: 32,
            y: 48,
            fact: "John D. Muller, Jr., a later owner, died in 1984.",
          },
          {
            id: "groups",
            label: "The trust",
            x: 74,
            y: 58,
            fact: "He set up a trust specifying that Laurel Hill be made available to benefit religious, charitable, scientific, literary, and educational groups.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1694-1864",
        title: "Years from Boone's ownership to the passing",
        partLabel: "170 years",
        value: 170,
        unit: "years",
        meant:
          "What this meant: 1864 comes 170 years after 1694. That is the stretch from the year John Boone owned this land to the year the plantation passed to Dr. Peter P. Bonneau.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1018-house.jpg",
          "Illustration of a plantation house among laurel shrubs. Not a historical photograph.",
        ),
        nowArt: art(
          "m1018-today.jpg",
          "Illustration of a blank marker post by a field lane. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plantation house among laurel shrubs, for the plantation the marker says passed in 1864. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker post by a field lane. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "boone",
            year: "By 1694",
            label: "John Boone owns this land.",
            why: "The marker says John Boone owned this land by 1694.",
          },
          {
            id: "passed",
            year: "1864",
            label: "The plantation passes to Dr. Peter P. Bonneau.",
            why: "The marker says the plantation that developed here passed in 1864 to Dr. Peter P. Bonneau, signer of the Ordinance of Secession and Confederate Army surgeon.",
          },
          {
            id: "muller",
            year: "1984",
            label: "John D. Muller, Jr. dies and sets up a trust.",
            why: "The marker says John D. Muller, Jr., a later owner, died in 1984 and set up a trust specifying that Laurel Hill be made available to benefit religious, charitable, scientific, literary, and educational groups.",
          },
        ],
        ["muller", "boone", "passed"],
      ),
      takeaway([
        "John Boone owned this land by 1694.",
        "The plantation that developed here passed in 1864 to Dr. Peter P. Bonneau, signer of the Ordinance of Secession and Confederate Army surgeon.",
        "John D. Muller, Jr., a later owner, died in 1984 and set up a trust specifying that Laurel Hill be made available to benefit religious, charitable, scientific, literary, and educational groups.",
      ]),
    ],
  ),
  lesson(
    "10-19",
    "Planter-diplomat and a rice mill",
    "Thomas Pinckney timeline",
    [
      cited("10-19", "Thomas Pinckney 1750-1828", "front and back"),
      span(
        '"25 years" is 1812 minus 1787, the years the marker prints for the War of 1812 and the water mill for beating rice.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "The War of 1812",
        title: "Fairfield, Eldorado, and a national figure",
        partLabel: "the house",
        art: art(
          "m1019-house.jpg",
          "Illustration of two plantation houses beyond a field bank. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "plantations",
            label: "Fairfield and Eldorado",
            x: 32,
            y: 54,
            fact: "Distinguished planter-diplomat Thomas Pinckney owned nearby Fairfield and Eldorado plantations.",
          },
          {
            id: "offices",
            label: "War of 1812",
            x: 74,
            y: 42,
            fact: 'A national figure, he was Governor of South Carolina; Minister to England; Envoy Extraordinary to Spain where he negotiated the "Pinckney Treaty," and major general in the War of 1812.',
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "Around 1787",
        title: "A parish of rice and a water mill",
        partLabel: "the yard",
        art: art(
          "m1019-yard.jpg",
          "Illustration of a waterwheel beside a mill shed. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "parish",
            label: "St. James, Santee",
            x: 32,
            y: 50,
            fact: "One of the earliest settlements in S. C. and refuge for French Huguenots, St. James, Santee, Parish was a major agricultural area containing a number of large-scale rice plantations.",
          },
          {
            id: "mill",
            label: "Around 1787",
            x: 74,
            y: 40,
            fact: "At nearby Peach Tree Plantation, Jonathan Lucas, Sr. introduced a water mill for beating rice around 1787, which gave an impetus to rice culture in this area.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1787-1812",
        title: "Years from the rice mill to the war",
        partLabel: "25 years",
        value: 25,
        unit: "years",
        meant:
          "What this meant: 1812 comes 25 years after 1787. That is the stretch from the year Jonathan Lucas, Sr. introduced a water mill for beating rice to the year the marker prints for the War of 1812.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1019-house.jpg",
          "Illustration of two plantation houses beyond a field bank. Not a historical photograph.",
        ),
        nowArt: art(
          "m1019-today.jpg",
          "Illustration of a blank marker post by an oak. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of two plantation houses beyond a field bank, for Fairfield and Eldorado, which the marker says Thomas Pinckney owned nearby. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker post by an oak. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "mill",
            year: "Around 1787",
            label: "Jonathan Lucas, Sr. introduces a water mill for beating rice.",
            why: "The marker says he introduced a water mill for beating rice at nearby Peach Tree Plantation around 1787.",
          },
          {
            id: "general",
            year: "War of 1812",
            label: "Thomas Pinckney is a major general.",
            why: "The marker says he was a major general in the War of 1812.",
          },
        ],
        ["general", "mill"],
      ),
      takeaway([
        'Distinguished planter-diplomat Thomas Pinckney owned nearby Fairfield and Eldorado plantations. A national figure, he was Governor of South Carolina; Minister to England; Envoy Extraordinary to Spain where he negotiated the "Pinckney Treaty," and major general in the War of 1812.',
        "One of the earliest settlements in S. C. and refuge for French Huguenots, St. James, Santee, Parish was a major agricultural area containing a number of large-scale rice plantations.",
        "At nearby Peach Tree Plantation, Jonathan Lucas, Sr. introduced a water mill for beating rice around 1787, which gave an impetus to rice culture in this area.",
      ]),
    ],
  ),
  lesson(
    "10-20",
    "Washington visited the country home",
    "Snee Farm timeline",
    [
      cited("10-20", "Snee Farm", "front"),
      span(
        '"67 years" is 1824 minus 1757, the years the marker prints for the death and the birth of Charles Pinckney.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1757-1824",
        title: "A country home about 0.7 mi. west",
        partLabel: "the house",
        art: art(
          "m1020-house.jpg",
          "Illustration of a country house down a farm lane. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "home",
            label: "1757-1824",
            x: 32,
            y: 52,
            fact: "The country home of Charles Pinckney (1757-1824), Snee Farm stands about 0.7 mi. west of here.",
          },
          {
            id: "offices",
            label: "Governor four times",
            x: 74,
            y: 42,
            fact: "One of SC's signers of the US Constitution, Pinckney also served in the General Assembly and in Congress. He was elected Governor of SC four times.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "1791",
        title: "A presidential visit, then Spain",
        partLabel: "the fields",
        art: art(
          "m1020-fields.jpg",
          "Illustration of fenced farm fields and a small barn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "visit",
            label: "1791",
            x: 32,
            y: 48,
            fact: "George Washington visited Snee Farm in 1791 during his presidency.",
          },
          {
            id: "spain",
            label: "1801",
            x: 74,
            y: 58,
            fact: "He was appointed minister to Spain in 1801 by Thomas Jefferson.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1757-1824",
        title: "Years from the birth year to the death year",
        partLabel: "67 years",
        value: 67,
        unit: "years",
        meant:
          "What this meant: 1824 comes 67 years after 1757. Those are the years the marker prints for Charles Pinckney, his death year and his birth year.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1020-house.jpg",
          "Illustration of a country house down a farm lane. Not a historical photograph.",
        ),
        nowArt: art(
          "m1020-today.jpg",
          "Illustration of a blank marker post at a country lane. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a country house down a farm lane, for Snee Farm, which the marker says stands about 0.7 mi. west of here. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker post at a country lane. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1757",
            label: "Charles Pinckney is born.",
            why: "The marker prints Charles Pinckney's years as 1757-1824.",
          },
          {
            id: "visit",
            year: "1791",
            label: "George Washington visits Snee Farm.",
            why: "The marker says George Washington visited Snee Farm in 1791 during his presidency.",
          },
          {
            id: "spain",
            year: "1801",
            label: "Thomas Jefferson appoints him minister to Spain.",
            why: "The marker says he was appointed minister to Spain in 1801 by Thomas Jefferson.",
          },
          {
            id: "died",
            year: "1824",
            label: "Charles Pinckney dies.",
            why: "The marker prints Charles Pinckney's years as 1757-1824.",
          },
        ],
        ["spain", "born", "died", "visit"],
      ),
      takeaway([
        "The country home of Charles Pinckney (1757-1824), Snee Farm stands about 0.7 mi. west of here.",
        "One of SC's signers of the US Constitution, Pinckney also served in the General Assembly and in Congress. He was elected Governor of SC four times and was appointed minister to Spain in 1801 by Thomas Jefferson.",
        "George Washington visited Snee Farm in 1791 during his presidency.",
      ]),
    ],
  ),
];
