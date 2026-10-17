import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia streets. Facts are from that marker only.
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

export const richlandLessonsM: MarkerLesson[] = [
  lesson(
    "40-61",
    "A Partisan general at two 1781 battles",
    "Pickens Street timeline",
    [
      cited("40-61", "Pickens Street", "front"),
      span(
        '"6 years" is 1791 minus 1785, the years the marker prints for the appointments by Congress to treat with the Indians.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1781",
        title: "Named for Andrew Pickens",
        partLabel: "the street and the battles",
        art: art(
          "m4061-street.jpg",
          "Illustration of a colonial street and a field skirmish. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "Andrew Pickens",
            x: 32,
            y: 50,
            fact: "This street was named for Andrew Pickens (1739-1817), one of three S. C. Partisan Generals in the Revolution.",
          },
          {
            id: "battles",
            label: "Cowpens and Eutaw Springs",
            x: 74,
            y: 44,
            fact: "He fought in the battles of Cowpens and Eutaw Springs, both in 1781.",
          },
        ],
      },
      {
        kind: "scene",
        id: "service",
        kicker: "1785",
        title: "The House, Congress, and a churchyard",
        partLabel: "office and burial",
        art: art(
          "m4061-service.jpg",
          "Illustration of an assembly chamber and a stone church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "years",
            label: "House, Senate, Congress",
            x: 31,
            y: 48,
            fact: "Pickens served fourteen years in the S. C. House of Representatives, four in the S. C. Senate and two in Congress. From 1785 to 1791, he was appointed several times by Congress to treat with the Indians.",
          },
          {
            id: "buried",
            label: "Old Stone Church",
            x: 74,
            y: 58,
            fact: "He is buried at Old Stone Church near Pendleton.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1785-1791",
        title: "Years of appointments to treat with the Indians",
        partLabel: "6 years",
        value: 6,
        unit: "years",
        meant:
          "What this meant: 1791 comes 6 years after 1785. That is the stretch the marker prints for the appointments by Congress to treat with the Indians.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4061-street.jpg",
          "Illustration of a colonial street and a field skirmish. Not a historical photograph.",
        ),
        nowArt: art(
          "m4061-today.jpg",
          "Illustration of a marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a street and a field skirmish, for the street the marker names for Andrew Pickens and the battles of Cowpens and Eutaw Springs in 1781. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1739",
            label: "Andrew Pickens's years on the marker begin.",
            why: "The marker prints Andrew Pickens (1739-1817) and says this street was named for him, one of three S. C. Partisan Generals in the Revolution.",
          },
          {
            id: "battles",
            year: "1781",
            label: "He fights at Cowpens and Eutaw Springs.",
            why: "The marker says he fought in the battles of Cowpens and Eutaw Springs, both in 1781.",
          },
          {
            id: "treat",
            year: "1785",
            label: "Congress appoints him to treat with the Indians.",
            why: "The marker says that from 1785 to 1791 he was appointed several times by Congress to treat with the Indians.",
          },
          {
            id: "close",
            year: "1817",
            label: "The years the marker prints for him end.",
            why: "The marker prints 1817 as the second year in Andrew Pickens (1739-1817). It says he is buried at Old Stone Church near Pendleton.",
          },
        ],
        ["close", "treat", "born", "battles"],
      ),
      takeaway([
        "This street was named for Andrew Pickens (1739-1817), one of three S. C. Partisan Generals in the Revolution.",
        "He fought in the battles of Cowpens and Eutaw Springs, both in 1781, and served fourteen years in the S. C. House of Representatives, four in the S. C. Senate and two in Congress.",
        "From 1785 to 1791, he was appointed several times by Congress to treat with the Indians. He is buried at Old Stone Church near Pendleton.",
      ]),
    ],
  ),
  lesson(
    "40-62",
    "Named for Williams and for Gist",
    "Williams Street timeline",
    [
      cited("40-62", "Williams Street", "front and back"),
      span(
        '"10 years" is 1792 minus 1782, the years the marker prints for the death of Mordecai Gist in Charleston and the engagement on the Combahee River.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "williams",
        kicker: "1781",
        title: "Adjutant general under Gates and Greene",
        partLabel: "Williams and the light corps",
        art: art(
          "m4062-street.jpg",
          "Illustration of a marching light corps and a battle line. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "Otho H. Williams",
            x: 32,
            y: 46,
            fact: "This street was named for Otho H. Williams, Brig. Gen. of the Continental Army during the American Revolution. Williams served as Adjutant General under Southern Army commanders Gates and Greene.",
          },
          {
            id: "retreat",
            label: "The light corps",
            x: 74,
            y: 56,
            fact: "He saw military action in the battles of Camden, Guilford Courthouse, Hobkirk Hill, and Eutaw Springs. He commanded the light corps which protected Greene during a portion of his retreat across N. C. in 1781.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gist",
        kicker: "August 27, 1782",
        title: "Camden and the Combahee River",
        partLabel: "Gist on the back",
        art: art(
          "m4062-river.jpg",
          "Illustration of a field battle and a river fight. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "camden",
            label: "Battle of Camden",
            x: 33,
            y: 52,
            fact: "This street was named for Mordecai Gist, Brigadier General of the Continental Army. During the American Revolution, Gist participated in the Battle of Camden in 1780.",
          },
          {
            id: "combahee",
            label: "Combahee River",
            x: 73,
            y: 42,
            fact: "He commanded a light corps in an engagement on the Combahee River August 27, 1782, in which Colonel John Laurens was killed. After the Revolution, Gist settled in Charleston, where he died in 1792.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1782-1792",
        title: "Years from the Combahee to Gist's death",
        partLabel: "10 years",
        value: 10,
        unit: "years",
        meant:
          "What this meant: 1792 comes 10 years after 1782. That is the stretch from the year of the Combahee River engagement to the year Gist died in Charleston.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4062-street.jpg",
          "Illustration of a marching light corps and a battle line. Not a historical photograph.",
        ),
        nowArt: art(
          "m4062-today.jpg",
          "Illustration of a marker by a sandy road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a light corps and a battle line, for the service the marker gives Otho H. Williams, including the retreat across N. C. in 1781. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a sandy road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "camden",
            year: "1780",
            label: "Gist is in the Battle of Camden.",
            why: "The back inscription says Gist participated in the Battle of Camden in 1780.",
          },
          {
            id: "retreat",
            year: "1781",
            label: "Williams's light corps protects Greene's retreat across N. C.",
            why: "The front inscription says he commanded the light corps which protected Greene during a portion of his retreat across N. C. in 1781.",
          },
          {
            id: "combahee",
            year: "August 27, 1782",
            label: "Gist commands a light corps on the Combahee River.",
            why: "The marker says he commanded a light corps in an engagement on the Combahee River August 27, 1782, in which Colonel John Laurens was killed.",
          },
          {
            id: "died",
            year: "1792",
            label: "Gist dies in Charleston.",
            why: "The marker says that after the Revolution, Gist settled in Charleston, where he died in 1792.",
          },
        ],
        ["died", "camden", "retreat", "combahee"],
      ),
      takeaway([
        "This street was named for Otho H. Williams, Brig. Gen. of the Continental Army during the American Revolution. He served as Adjutant General under Southern Army commanders Gates and Greene.",
        "He saw military action in the battles of Camden, Guilford Courthouse, Hobkirk Hill, and Eutaw Springs, and commanded the light corps which protected Greene during a portion of his retreat across N. C. in 1781.",
        "This street was named for Mordecai Gist, Brigadier General of the Continental Army. He participated in the Battle of Camden in 1780, commanded a light corps on the Combahee River August 27, 1782, in which Colonel John Laurens was killed, settled in Charleston, and died there in 1792.",
      ]),
    ],
  ),
  lesson(
    "40-63",
    "A brigadier general buried at Sheldon",
    "Bull Street timeline",
    [
      cited("40-63", "Bull Street", "front"),
      span(
        '"67 years" is 1800 minus 1733, the years the marker prints for Stephen Bull, given as c. 1733-1800.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "c. 1733",
        title: "Grandson of Lt. Gov. William Bull I",
        partLabel: "the name and the assemblies",
        art: art(
          "m4063-street.jpg",
          "Illustration of a colonial street and an assembly room. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "Stephen Bull",
            x: 32,
            y: 54,
            fact: "This street was named for Brigadier General Stephen Bull (c. 1733-1800), grandson of Lt. Gov. William Bull I.",
          },
          {
            id: "assemblies",
            label: "Three assemblies",
            x: 74,
            y: 42,
            fact: "Stephen was a member of the Commons House of Assembly, the First Provincial Congress, the First General Assembly.",
          },
        ],
      },
      {
        kind: "scene",
        id: "church",
        kicker: "1800",
        title: "Beaufort, Savannah, and Sheldon Church",
        partLabel: "the campaigns and the grave",
        art: art(
          "m4063-church.jpg",
          "Illustration of a coastal skirmish and a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "action",
            label: "Beaufort and Savannah",
            x: 32,
            y: 48,
            fact: "He saw military action in the Battle of Beaufort and the Savannah campaign and later served in the S. C. Senate and House of Representatives.",
          },
          {
            id: "buried",
            label: "Sheldon Church",
            x: 75,
            y: 60,
            fact: "He is buried at Sheldon Church, Beaufort County.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "c. 1733-1800",
        title: "Years the marker prints for Stephen Bull",
        partLabel: "67 years",
        value: 67,
        unit: "years",
        meant:
          "What this meant: 1800 comes 67 years after 1733. Those are the years the marker prints for Stephen Bull, given as c. 1733-1800.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4063-street.jpg",
          "Illustration of a colonial street and an assembly room. Not a historical photograph.",
        ),
        nowArt: art(
          "m4063-today.jpg",
          "Illustration of a marker on a grassy corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a street and an assembly room, for the street the marker names for Brigadier General Stephen Bull and his membership in the Commons House of Assembly, the First Provincial Congress, and the First General Assembly. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a grassy corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "years",
            year: "c. 1733",
            label: "Stephen Bull's years on the marker begin.",
            why: "The marker names the street for Brigadier General Stephen Bull (c. 1733-1800), grandson of Lt. Gov. William Bull I.",
          },
          {
            id: "action",
            year: "The campaigns",
            label: "He sees action at Beaufort and in the Savannah campaign.",
            why: "The marker says he saw military action in the Battle of Beaufort and the Savannah campaign.",
          },
          {
            id: "later",
            year: "Later",
            label: "He serves in the S. C. Senate and House.",
            why: "The marker says he later served in the S. C. Senate and House of Representatives.",
          },
          {
            id: "buried",
            year: "1800",
            label: "The years the marker prints for him end.",
            why: "The marker prints 1800 in c. 1733-1800 and says he is buried at Sheldon Church, Beaufort County.",
          },
        ],
        ["buried", "action", "years", "later"],
      ),
      takeaway([
        "This street was named for Brigadier General Stephen Bull (c. 1733-1800), grandson of Lt. Gov. William Bull I.",
        "He was a member of the Commons House of Assembly, the First Provincial Congress, and the First General Assembly, and he saw military action in the Battle of Beaufort and the Savannah campaign.",
        "He later served in the S. C. Senate and House of Representatives. He is buried at Sheldon Church, Beaufort County.",
      ]),
    ],
  ),
  lesson(
    "40-64",
    "Cherokee War of 1760, died in 1797",
    "Huger Street timeline",
    [
      cited("40-64", "Huger Street", "front"),
      span(
        '"54 years" is 1797 minus 1743, the years the marker prints for the death and the birth of Isaac Huger.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "war",
        kicker: "1760",
        title: "The Cherokee War and the Revolution",
        partLabel: "the fighting",
        art: art(
          "m4064-war.jpg",
          "Illustration of a forest skirmish and a siege. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "cherokee",
            label: "Cherokee War",
            x: 32,
            y: 46,
            fact: "This street was named for Brig. Gen. Isaac Huger, who fought in the Cherokee War of 1760.",
          },
          {
            id: "revolution",
            label: "American Revolution",
            x: 74,
            y: 56,
            fact: "He fought during the American Revolution at Stono, Savannah, Siege of Charlestown, Guilford Court House, Hobkirk Hill.",
          },
        ],
      },
      {
        kind: "scene",
        id: "plantation",
        kicker: "1743",
        title: "Born at Limerick Plantation",
        partLabel: "birth, office, and death",
        art: art(
          "m4064-plantation.jpg",
          "Illustration of a plantation house and an assembly chamber. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "Limerick Plantation",
            x: 31,
            y: 52,
            fact: "Born 1743 at Limerick Plantation in the parish of St. John's Berkeley.",
          },
          {
            id: "died",
            label: "1797",
            x: 73,
            y: 42,
            fact: "Huger was in the Commons House of Assembly and the First Provincial Congress, and later in the S. C. Senate and House of Representatives. He died in 1797.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1743-1797",
        title: "Years from birth to death",
        partLabel: "54 years",
        value: 54,
        unit: "years",
        meant:
          "What this meant: 1797 comes 54 years after 1743. That is the stretch from the year the marker says Isaac Huger was born to the year it says he died.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4064-war.jpg",
          "Illustration of a forest skirmish and a siege. Not a historical photograph.",
        ),
        nowArt: art(
          "m4064-today.jpg",
          "Illustration of a marker by a sandy road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a forest skirmish and a siege, for the Cherokee War of 1760 and the American Revolution fights the marker lists for Isaac Huger. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a sandy road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1743",
            label: "Isaac Huger is born at Limerick Plantation.",
            why: "The marker says he was born in 1743 at Limerick Plantation in the parish of St. John's Berkeley.",
          },
          {
            id: "cherokee",
            year: "1760",
            label: "He fights in the Cherokee War.",
            why: "The marker says he fought in the Cherokee War of 1760.",
          },
          {
            id: "revolution",
            year: "American Revolution",
            label: "He fights at Stono, Savannah, the Siege of Charlestown, Guilford Court House, and Hobkirk Hill.",
            why: "The marker says he fought during the American Revolution at Stono, Savannah, Siege of Charlestown, Guilford Court House, and Hobkirk Hill.",
          },
          {
            id: "died",
            year: "1797",
            label: "He dies.",
            why: "The marker says he died in 1797.",
          },
        ],
        ["died", "revolution", "born", "cherokee"],
      ),
      takeaway([
        "This street was named for Brig. Gen. Isaac Huger, who fought in the Cherokee War of 1760 and during the American Revolution at Stono, Savannah, Siege of Charlestown, Guilford Court House, and Hobkirk Hill.",
        "Born 1743 at Limerick Plantation in the parish of St. John's Berkeley, he was in the Commons House of Assembly and the First Provincial Congress.",
        "He was later in the S. C. Senate and House of Representatives. He died in 1797.",
      ]),
    ],
  ),
];
