import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Greenville sites. Facts are from that marker only.
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

export const greenvilleLessonsF: MarkerLesson[] = [
  lesson(
    "23-27",
    "Twenty-eight years at Green and Jenkins",
    "Working Benevolent Society Hospital timeline",
    [
      cited("23-27", "Working Benevolent Society Hospital", "front and back"),
      span(
        '"28 years" is 1948 minus 1920, the years the marker prints for the closing of the hospital and its founding. The marker also prints "twenty-eight years."',
      ),
    ],
    [
      {
        kind: "scene",
        id: "frame",
        kicker: "1920",
        title: "A two-story frame building",
        partLabel: "the frame hospital",
        art: art(
          "m2327-frame.jpg",
          "Illustration of a two-story frame hospital at a street corner. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1920",
            x: 32,
            y: 48,
            fact: "The Working Benevolent Society Hospital, first known as St. Luke Colored Hospital, was a two-story frame building standing here at the corner of Green Avenue and Jenkins Street. Founded in 1920, it served blacks in Greenville for twenty-eight years.",
          },
          {
            id: "lodge",
            label: "1928 to 1948",
            x: 74,
            y: 40,
            fact: "The Working Benevolent Grand Lodge of S.C., at Broad and Fall Streets in Greenville, operated the hospital from 1928 until it closed in 1948.",
          },
        ],
      },
      {
        kind: "scene",
        id: "wards",
        kicker: "At its opening",
        title: "Three wards and twenty-two beds",
        partLabel: "the wards",
        art: art(
          "m2327-wards.jpg",
          "Illustration of empty hospital wards and beds. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "beds",
            label: "Twenty-two beds",
            x: 32,
            y: 52,
            fact: "The hospital, described at its opening as “one of the most modern institutions in the South for colored people,” had three wards and twenty-two beds in semi-private and private rooms.",
          },
          {
            id: "bright",
            label: "Mrs. M.H. Bright",
            x: 74,
            y: 42,
            fact: "Mrs. M.H. Bright was the first superintendent. A registered nurse and a graduate of the Tuskegee Institute, she had been superintendent of the Institute hospital. Most of the superintendents after her were nurses as well.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1920 to 1948",
        title: "Years from founding to closing",
        partLabel: "twenty-eight years",
        value: 28,
        unit: "years",
        meant:
          "What this meant: 1948 comes 28 years after 1920. The marker says the hospital was founded in 1920, served blacks in Greenville for twenty-eight years, and closed in 1948.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2327-frame.jpg",
          "Illustration of a two-story frame hospital at a street corner. Not a historical photograph.",
        ),
        nowArt: art(
          "m2327-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-story frame hospital at a street corner, for the building the marker says stood at Green Avenue and Jenkins Street. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1920",
            label: "The hospital is founded, first known as St. Luke Colored Hospital.",
            why: "The marker says the Working Benevolent Society Hospital, first known as St. Luke Colored Hospital, was founded in 1920.",
          },
          {
            id: "lodge",
            year: "1928",
            label: "The Working Benevolent Grand Lodge of S.C. operates the hospital.",
            why: "The marker says the Working Benevolent Grand Lodge of S.C., at Broad and Fall Streets in Greenville, operated the hospital from 1928 until it closed in 1948.",
          },
          {
            id: "closed",
            year: "1948",
            label: "The hospital closes.",
            why: "The marker says the lodge operated the hospital from 1928 until it closed in 1948.",
          },
        ],
        ["closed", "founded", "lodge"],
      ),
      takeaway([
        "The Working Benevolent Society Hospital, first known as St. Luke Colored Hospital, was a two-story frame building standing here at the corner of Green Avenue and Jenkins Street. Founded in 1920, it served blacks in Greenville for twenty-eight years.",
        "The Working Benevolent Grand Lodge of S.C., at Broad and Fall Streets in Greenville, operated the hospital from 1928 until it closed in 1948. The hospital, described at its opening as “one of the most modern institutions in the South for colored people,” had three wards and twenty-two beds in semi-private and private rooms.",
        "Mrs. M.H. Bright was the first superintendent. A registered nurse and a graduate of the Tuskegee Institute, she had been superintendent of the Institute hospital. Most of the superintendents after her were nurses as well.",
      ]),
    ],
  ),
  lesson(
    "23-28",
    "A ferry replaced on the Saluda",
    "Cooley's Bridge timeline",
    [cited("23-28", "Cooley's Bridge", "front and back")],
    [
      {
        kind: "scene",
        id: "bridge",
        kicker: "1835-36",
        title: "Built across the Saluda River",
        partLabel: "the original bridge",
        art: art(
          "m2328-bridge.jpg",
          "Illustration of a wooden bridge over a river, with a mill nearby. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "original",
            label: "1835-36",
            x: 32,
            y: 46,
            fact: "The original Cooley’s Bridge, built across the Saluda River in 1835-36 to replace a ferry, stood about 150 yds. above the present bridge over S.C. Hwy. 247.",
          },
          {
            id: "cooley",
            label: "Hiram Cooley",
            x: 74,
            y: 58,
            fact: "It was built for Hiram Cooley (ca. 1796-1864), a cotton planter who owned more than 1600 acres and operated a cotton gin and grist mill nearby. His house, built about 1830, was just NE of the present bridge; it burned in 1983.",
          },
        ],
      },
      {
        kind: "scene",
        id: "truss",
        kicker: "1896-97",
        title: "A steel truss, then concrete",
        partLabel: "later bridges",
        art: art(
          "m2328-truss.jpg",
          "Illustration of a steel through truss bridge over a river. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "possum",
            label: "Possum Kingdom",
            x: 32,
            y: 44,
            fact: "This part of southwestern Greenville County was officially Dunklin Township in the late 19th century but has long been called “Possum Kingdom.” Several bridges over the river here have been washed away by floods and replaced.",
          },
          {
            id: "concrete",
            label: "2000",
            x: 74,
            y: 54,
            fact: "A steel through truss bridge was built on the site of the original Cooley’s Bridge in 1896-97. The present concrete highway bridge was built here in 2000.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "About 150 yds.",
        title: "Yards above the present bridge",
        partLabel: "150 yards",
        value: 150,
        unit: "yards",
        meant:
          "What this meant: the marker says the original bridge stood about 150 yds. above the present bridge over S.C. Hwy. 247.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2328-bridge.jpg",
          "Illustration of a wooden bridge over a river, with a mill nearby. Not a historical photograph.",
        ),
        nowArt: art(
          "m2328-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden bridge over a river, for the original bridge the marker says was built across the Saluda River in 1835-36 to replace a ferry. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "house",
            year: "About 1830",
            label: "Hiram Cooley's house is built just NE of the present bridge.",
            why: "The marker says his house, built about 1830, was just NE of the present bridge; it burned in 1983.",
          },
          {
            id: "bridge",
            year: "1835-36",
            label: "The original bridge is built across the Saluda River to replace a ferry.",
            why: "The marker says the original Cooley’s Bridge was built across the Saluda River in 1835-36 to replace a ferry.",
          },
          {
            id: "truss",
            year: "1896-97",
            label: "A steel through truss bridge is built on the original site.",
            why: "The marker says a steel through truss bridge was built on the site of the original Cooley’s Bridge in 1896-97.",
          },
          {
            id: "concrete",
            year: "2000",
            label: "The present concrete highway bridge is built.",
            why: "The marker says the present concrete highway bridge was built here in 2000.",
          },
        ],
        ["concrete", "house", "truss", "bridge"],
      ),
      takeaway([
        "The original Cooley’s Bridge, built across the Saluda River in 1835-36 to replace a ferry, stood about 150 yds. above the present bridge over S.C. Hwy. 247.",
        "It was built for Hiram Cooley (ca. 1796-1864), a cotton planter who owned more than 1600 acres and operated a cotton gin and grist mill nearby. His house, built about 1830, was just NE of the present bridge; it burned in 1983.",
        "This part of southwestern Greenville County was officially Dunklin Township in the late 19th century but has long been called “Possum Kingdom.” Several bridges over the river here have been washed away by floods and replaced. A steel through truss bridge was built on the site of the original Cooley’s Bridge in 1896-97. The present concrete highway bridge was built here in 2000.",
      ]),
    ],
  ),
  lesson(
    "23-29",
    "Heart pine on a granite foundation",
    "Stone's Mill timeline",
    [
      cited("23-29", "Stone's Mill", "front and back"),
      span(
        '"86 years" is 1899 minus 1813, the years the marker prints for the sale of the mill complex to R.B. Holland and the first grist mill on Big Durbin Creek.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "creek",
        kicker: "About 1813",
        title: "The first mill on Big Durbin Creek",
        partLabel: "the first mill",
        art: art(
          "m2329-creek.jpg",
          "Illustration of an early grist mill beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "first",
            label: "About 1813",
            x: 32,
            y: 48,
            fact: "The first grist mill on Big Durbin Creek was built about 1813 for John Bruce (d. 1818), a veteran of the American Revolution, who also ran a sawmill and woolen mill here.",
          },
          {
            id: "present",
            label: "Before 1860",
            x: 74,
            y: 40,
            fact: "The present mill, built by slave labor before 1860, is made of heart pine, with a granite foundation. It was built for Jesse K. Stone (1825-1899), and the mill was known as Stone's Mill until his death.",
          },
        ],
      },
      {
        kind: "scene",
        id: "jones",
        kicker: "1899",
        title: "Sold, then a gathering place",
        partLabel: "the mill complex",
        art: art(
          "m2329-pine.jpg",
          "Illustration of a pine mill on a stone foundation beside rocky shoals. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sold",
            label: "1899",
            x: 32,
            y: 50,
            fact: "The mill complex was sold to R.B. Holland in 1899, then to the Jones family soon afterward. Walter T. Jones ground corn and wheat, ran a cotton gin, and operated a small grocery store here for many years.",
          },
          {
            id: "shut",
            label: "1950s",
            x: 74,
            y: 42,
            fact: 'The grist mill, along with the shoals, rocks, and a nearby covered bridge, was a "favorite gathering place" in the vicinity until the mill shut down in the 1950s.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1813 to 1899",
        title: "Years from the first mill to the sale",
        partLabel: "86 years",
        value: 86,
        unit: "years",
        meant:
          "What this meant: 1899 comes 86 years after 1813. The marker says the first grist mill on Big Durbin Creek was built about 1813, and the mill complex was sold to R.B. Holland in 1899.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2329-creek.jpg",
          "Illustration of an early grist mill beside a creek. Not a historical photograph.",
        ),
        nowArt: art(
          "m2329-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early grist mill beside a creek, for the first mill the marker says was built on Big Durbin Creek about 1813. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "first",
            year: "About 1813",
            label: "The first grist mill on Big Durbin Creek is built for John Bruce.",
            why: "The marker says the first grist mill on Big Durbin Creek was built about 1813 for John Bruce (d. 1818), who also ran a sawmill and woolen mill here.",
          },
          {
            id: "present",
            year: "Before 1860",
            label: "The present mill is built for Jesse K. Stone.",
            why: "The marker says the present mill, built by slave labor before 1860, is made of heart pine, with a granite foundation. It was built for Jesse K. Stone (1825-1899).",
          },
          {
            id: "sold",
            year: "1899",
            label: "The mill complex is sold to R.B. Holland.",
            why: "The marker says the mill complex was sold to R.B. Holland in 1899, then to the Jones family soon afterward.",
          },
          {
            id: "shut",
            year: "1950s",
            label: "The grist mill shuts down.",
            why: 'The marker says the grist mill, along with the shoals, rocks, and a nearby covered bridge, was a "favorite gathering place" in the vicinity until the mill shut down in the 1950s.',
          },
        ],
        ["shut", "present", "first", "sold"],
      ),
      takeaway([
        "The first grist mill on Big Durbin Creek was built about 1813 for John Bruce (d. 1818), a veteran of the American Revolution, who also ran a sawmill and woolen mill here.",
        "The present mill, built by slave labor before 1860, is made of heart pine, with a granite foundation. It was built for Jesse K. Stone (1825-1899), and the mill was known as Stone's Mill until his death.",
        'The mill complex was sold to R.B. Holland in 1899, then to the Jones family soon afterward. Walter T. Jones ground corn and wheat, ran a cotton gin, and operated a small grocery store here for many years. The grist mill, along with the shoals, rocks, and a nearby covered bridge, was a "favorite gathering place" in the vicinity until the mill shut down in the 1950s.',
      ]),
    ],
  ),
  lesson(
    "23-30",
    "Land east of the 1767 line",
    "Cherokee Boundary (1767) timeline",
    [
      cited("23-30", "Cherokee Boundary (1767)", "front and back"),
      span(
        '"19 years" is 1786 minus 1767, the years the marker prints for when S.C. created its first counties and for the 1767 boundary line.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "line",
        kicker: "1766-67",
        title: "A north-south line past this point",
        partLabel: "the boundary line",
        art: art(
          "m2330-line.jpg",
          "Illustration of a cleared north-south path through piedmont woods. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "negotiate",
            label: "1766-67",
            x: 32,
            y: 46,
            fact: "In 1766-67 S.C. & N.C. negotiated with the Cherokee to establish a boundary between Indian land to the west and new settlement to the east. This north-south line ran past this point to N.C. and on to Va.",
          },
          {
            id: "path",
            label: "In S.C.",
            x: 74,
            y: 58,
            fact: "In S.C. it ran north from near present-day Honea Path, crossed the Reedy River near present-day Princeton, and ended at the S.C.-N.C. line.",
          },
        ],
      },
      {
        kind: "scene",
        id: "counties",
        kicker: "1786",
        title: "A county line, then a shift east",
        partLabel: "the county boundary",
        art: art(
          "m2330-river.jpg",
          "Illustration of a river valley and open fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "ceded",
            label: "1767 line",
            x: 32,
            y: 44,
            fact: "The Cherokee ceded all land east of the 1767 line to the colonies of S.C. and N.C. In 1786, when S.C. created its first counties, the line from the Reedy River to the S.C.-N.C. line south of Tryon, N.C. was the boundary for Greenville County between both Spartanburg and Laurens Counties.",
          },
          {
            id: "shift",
            label: "1793",
            x: 74,
            y: 54,
            fact: "In 1793 the Greenville boundary shifted east to accommodate new settlers south of the Enoree River.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1767 to 1786",
        title: "Years from the line to the first counties",
        partLabel: "19 years",
        value: 19,
        unit: "years",
        meant:
          "What this meant: 1786 comes 19 years after 1767. The marker says the Cherokee ceded all land east of the 1767 line, and that in 1786, when S.C. created its first counties, that line was the boundary for Greenville County.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2330-line.jpg",
          "Illustration of a cleared north-south path through piedmont woods. Not a historical photograph.",
        ),
        nowArt: art(
          "m2330-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cleared north-south path through piedmont woods, for the boundary line the marker says ran past this point. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "negotiate",
            year: "1766-67",
            label: "S.C. and N.C. negotiate a boundary with the Cherokee.",
            why: "The marker says in 1766-67 S.C. & N.C. negotiated with the Cherokee to establish a boundary between Indian land to the west and new settlement to the east.",
          },
          {
            id: "ceded",
            year: "1767",
            label: "The Cherokee cede all land east of the line.",
            why: "The marker says the Cherokee ceded all land east of the 1767 line to the colonies of S.C. and N.C.",
          },
          {
            id: "counties",
            year: "1786",
            label: "The line becomes the boundary for Greenville County.",
            why: "The marker says that in 1786, when S.C. created its first counties, the line from the Reedy River to the S.C.-N.C. line south of Tryon, N.C. was the boundary for Greenville County between both Spartanburg and Laurens Counties.",
          },
          {
            id: "shift",
            year: "1793",
            label: "The Greenville boundary shifts east.",
            why: "The marker says in 1793 the Greenville boundary shifted east to accommodate new settlers south of the Enoree River.",
          },
        ],
        ["shift", "ceded", "negotiate", "counties"],
      ),
      takeaway([
        "In 1766-67 S.C. & N.C. negotiated with the Cherokee to establish a boundary between Indian land to the west and new settlement to the east. This north-south line ran past this point to N.C. and on to Va.",
        "In S.C. it ran north from near present-day Honea Path, crossed the Reedy River near present-day Princeton, and ended at the S.C.-N.C. line. The Cherokee ceded all land east of the 1767 line to the colonies of S.C. and N.C.",
        "In 1786, when S.C. created its first counties, the line from the Reedy River to the S.C.-N.C. line south of Tryon, N.C. was the boundary for Greenville County between both Spartanburg and Laurens Counties. In 1793 the Greenville boundary shifted east to accommodate new settlers south of the Enoree River.",
      ]),
    ],
  ),
];
