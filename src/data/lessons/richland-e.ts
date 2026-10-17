import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Columbia markers 40-11 through 40-14. Facts are from that marker only.
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

export const richlandLessonsE: MarkerLesson[] = [
  lesson(
    "40-11",
    "A cemetery of the Hebrew Benevolent Society",
    "Hebrew Benevolent Society cemetery timeline",
    [
      cited("40-11", "Cemetery of the Columbia Hebrew Benevolent Society", "front"),
      span("\"12 years\" is 1834 minus 1822, the year the Benevolent Society was chartered and the year it was organized."),
    ],
    [
      {
        kind: "scene",
        id: "cemetery",
        kicker: "The cemetery",
        title: "Two mayors of Columbia",
        partLabel: "the cemetery",
        art: art(
          "m4011-cemetery.jpg",
          "Illustration of a small urban cemetery, stones without readable names. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "mayors",
            label: "Two mayors",
            x: 26,
            y: 62,
            fact: "In this cemetery are buried many distinguished Jewish citizens, including two mayors of Columbia: Mordecai Hendricks DeLeon (1791-1849) and Henry Lyons (1805-1858).",
          },
          {
            id: "place",
            label: "Gadsden Street",
            x: 80,
            y: 50,
            fact: "The marker says the cemetery is 2 ½ blocks south on Gadsden Street.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gate",
        kicker: "1822",
        title: "Organized, then chartered",
        partLabel: "the society",
        art: art(
          "m4011-gate.jpg",
          "Illustration of a simple cemetery gate. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1822",
            x: 18,
            y: 54,
            fact: "The Benevolent Society was organized in 1822.",
          },
          {
            id: "chartered",
            label: "1834",
            x: 84,
            y: 46,
            fact: "The Benevolent Society was chartered in 1834.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1822-1834",
        title: "Years from organized to chartered",
        partLabel: "12 years",
        value: 12,
        unit: "years",
        meant: "What this meant: 1834 comes 12 years after 1822. That is the stretch from the year the Benevolent Society was organized to the year it was chartered.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4011-cemetery.jpg",
          "Illustration of the cemetery. Not a historical photograph.",
        ),
        nowArt: art(
          "m4011-today.jpg",
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the cemetery the marker places 2 ½ blocks south on Gadsden Street. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "org",
            year: "1822",
            label: "The Benevolent Society is organized.",
            why: "The marker dates that organization to 1822.",
          },
          {
            id: "charter",
            year: "1834",
            label: "The society is chartered.",
            why: "The marker dates the charter to 1834.",
          },
        ],
        ["charter", "org"],
      ),
      takeaway([
        "The cemetery, 2 ½ blocks south on Gadsden Street, holds many distinguished Jewish citizens, including two mayors of Columbia.",
        "The marker names Mordecai Hendricks DeLeon (1791-1849) and Henry Lyons (1805-1858).",
        "The Benevolent Society was organized in 1822 and chartered in 1834.",
      ]),
    ],
  ),
  lesson(
    "40-12",
    "From Arsenal Academy to the Governor's Mansion",
    "Governor's Mansion timeline",
    [
      cited("40-12", "Governor's Mansion", "front"),
      span("\"23 years\" is 1865 minus 1842, the year Arsenal Academy's occupation of the square ended and the year it began."),
    ],
    [
      {
        kind: "scene",
        id: "arsenal",
        kicker: "1842",
        title: "An academy on this square",
        partLabel: "the academy",
        art: art(
          "m4012-arsenal.jpg",
          "Illustration of academy buildings on a square. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "academy",
            label: "1842-1865",
            x: 28,
            y: 52,
            fact: "Arsenal Academy, converted from a state arsenal, occupied this square from 1842 to 1865.",
          },
          {
            id: "burned",
            label: "1865",
            x: 74,
            y: 48,
            fact: "In 1865 Union troops burned all the academy buildings except the officers' quarters.",
          },
        ],
      },
      {
        kind: "scene",
        id: "mansion",
        kicker: "1855",
        title: "The officers' quarters that remained",
        partLabel: "the officers' quarters",
        art: art(
          "m4012-mansion.jpg",
          "Illustration of the officers' quarters as a house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "quarters",
            label: "1855",
            x: 32,
            y: 56,
            fact: "The officers' quarters were erected in 1855. They were the academy buildings Union troops did not burn in 1865.",
          },
          {
            id: "governor",
            label: "1868",
            x: 72,
            y: 52,
            fact: "Since 1868 this building has been the Governor's Mansion.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1842-1865",
        title: "Years the academy occupied the square",
        partLabel: "23 years",
        value: 23,
        unit: "years",
        meant: "What this meant: 1865 comes 23 years after 1842. That is how long the marker says Arsenal Academy occupied this square.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4012-arsenal.jpg",
          "Illustration of the academy buildings. Not a historical photograph.",
        ),
        nowArt: art(
          "m4012-today.jpg",
          "Illustration of a mansion and a marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of academy buildings on a square. The marker says Arsenal Academy occupied this square from 1842 to 1865. Not a historical photograph.",
        nowCaption:
          "Illustration of a mansion and a marker. The marker says this building has been the Governor's Mansion since 1868. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "occupy",
            year: "1842",
            label: "Arsenal Academy occupies this square.",
            why: "The marker says the academy, converted from a state arsenal, occupied this square from 1842.",
          },
          {
            id: "quarters",
            year: "1855",
            label: "The officers' quarters are erected.",
            why: "The marker dates the officers' quarters to 1855.",
          },
          {
            id: "burn",
            year: "1865",
            label: "Union troops burn the academy buildings except those quarters.",
            why: "The marker says that in 1865 Union troops burned all the academy buildings except the officers' quarters.",
          },
          {
            id: "mansion",
            year: "1868",
            label: "This building is the Governor's Mansion.",
            why: "The marker says that since 1868 this building has been the Governor's Mansion.",
          },
        ],
        ["burn", "occupy", "mansion", "quarters"],
      ),
      takeaway([
        "Arsenal Academy, converted from a state arsenal, occupied this square from 1842 to 1865.",
        "In 1865 Union troops burned the academy buildings except the officers' quarters, erected in 1855.",
        "Since 1868 that surviving building has been the Governor's Mansion.",
      ]),
    ],
  ),
  lesson(
    "40-13",
    "The Palmetto Armory, later the Iron Works",
    "Palmetto Iron Works timeline",
    [
      cited("40-13", "Site of Palmetto Iron Works", "front"),
      span("\"4 years\" is 1865 minus 1861, the years the marker gives for the Confederate War, when arms and munitions were manufactured here."),
    ],
    [
      {
        kind: "scene",
        id: "works",
        kicker: "The armory",
        title: "On the southwest corner of this square",
        partLabel: "the armory",
        art: art(
          "m4013-works.jpg",
          "Illustration of a small brick armory. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "name",
            label: "The armory",
            x: 26,
            y: 54,
            fact: "On the SW corner of this square was located the Palmetto Armory, later called Palmetto Iron Works.",
          },
          {
            id: "purpose",
            label: "The first purpose",
            x: 80,
            y: 52,
            fact: "It was originally built for converting flint and steel muskets into percussion guns.",
          },
        ],
      },
      {
        kind: "scene",
        id: "guns",
        kicker: "1861-1865",
        title: "Flint and steel, then percussion",
        partLabel: "the guns",
        art: art(
          "m4013-guns.jpg",
          "Illustration of muskets on workbenches. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "muskets",
            label: "The muskets",
            x: 28,
            y: 58,
            fact: "The works were originally built for converting flint and steel muskets into percussion guns.",
          },
          {
            id: "war",
            label: "1861-1865",
            x: 76,
            y: 60,
            fact: "Arms and munitions were manufactured here during the Confederate War, 1861-1865.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1861-1865",
        title: "Years of that manufacture",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant: "What this meant: 1865 comes 4 years after 1861. That is the span the marker gives for the Confederate War, when arms and munitions were manufactured here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4013-works.jpg",
          "Illustration of the armory. Not a historical photograph.",
        ),
        nowArt: art(
          "m4013-today.jpg",
          "Illustration of a marker in front of a mansion. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small brick armory. The marker places the Palmetto Armory, later called Palmetto Iron Works, on the SW corner of this square. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker in front of a mansion. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "begin",
            year: "1861",
            label: "The Confederate War years for manufacture here begin.",
            why: "The marker says arms and munitions were manufactured here during the Confederate War, 1861-1865.",
          },
          {
            id: "end",
            year: "1865",
            label: "Those war years on the marker end.",
            why: "The marker ends that span at 1865.",
          },
        ],
        ["end", "begin"],
      ),
      takeaway([
        "The Palmetto Armory, later called Palmetto Iron Works, stood on the SW corner of this square.",
        "It was originally built for converting flint and steel muskets into percussion guns.",
        "Arms and munitions were manufactured here during the Confederate War, 1861-1865.",
      ]),
    ],
  ),
  lesson(
    "40-14",
    "From a Sabbath school to Ladson Church",
    "Ladson Presbyterian Church timeline",
    [
      cited("40-14", "Ladson Presbyterian Church", "front"),
      span("\"28 years\" is 1896 minus 1868, the year the chapel was rebuilt and the year it was built here."),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1838",
        title: "A Sabbath school of the First Presbyterian Church",
        partLabel: "the Sabbath school",
        art: art(
          "m4014-school.jpg",
          "Illustration of an early Sabbath school, figures seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "school",
            label: "1838",
            x: 24,
            y: 56,
            fact: "The congregation originated in the Sabbath School for colored people organized by the First Presbyterian Church in 1838.",
          },
          {
            id: "ladson",
            label: "Rev. G. W. Ladson",
            x: 76,
            y: 52,
            fact: "The school was later conducted by the Rev. G. W. Ladson.",
          },
        ],
      },
      {
        kind: "scene",
        id: "chapel",
        kicker: "1868",
        title: "A chapel built here, then rebuilt",
        partLabel: "the chapel",
        art: art(
          "m4014-chapel.jpg",
          "Illustration of a small chapel. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1868",
            x: 30,
            y: 58,
            fact: "A chapel for the Negro members of that church was built here in 1868.",
          },
          {
            id: "later",
            label: "1895 and 1896",
            x: 74,
            y: 40,
            fact: "The title was transferred to Ladson Church trustees in 1895. The chapel was rebuilt in 1896.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1868-1896",
        title: "Years until the chapel was rebuilt",
        partLabel: "28 years",
        value: 28,
        unit: "years",
        meant: "What this meant: 1896 comes 28 years after 1868. That is the stretch from the year the chapel was built here to the year it was rebuilt.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4014-chapel.jpg",
          "Illustration of the chapel. Not a historical photograph.",
        ),
        nowArt: art(
          "m4014-today.jpg",
          "Illustration of a church and a marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small chapel. The marker says a chapel was built here in 1868 and rebuilt in 1896. Not a historical photograph.",
        nowCaption:
          "Illustration of a church and a marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "school",
            year: "1838",
            label: "The Sabbath School for colored people is organized.",
            why: "The marker says the First Presbyterian Church organized that school in 1838.",
          },
          {
            id: "chapel",
            year: "1868",
            label: "A chapel for the Negro members is built here.",
            why: "The marker dates that chapel to 1868.",
          },
          {
            id: "title",
            year: "1895",
            label: "The title is transferred to Ladson Church trustees.",
            why: "The marker dates that transfer to 1895.",
          },
          {
            id: "rebuilt",
            year: "1896",
            label: "The chapel is rebuilt.",
            why: "The marker dates the rebuilding to 1896.",
          },
        ],
        ["rebuilt", "school", "title", "chapel"],
      ),
      takeaway([
        "The congregation originated in a Sabbath School for colored people, organized by the First Presbyterian Church in 1838 and later conducted by the Rev. G. W. Ladson.",
        "A chapel for the Negro members of that church was built here in 1868 and rebuilt in 1896.",
        "The title was transferred to Ladson Church trustees in 1895.",
      ]),
    ],
  ),
];
