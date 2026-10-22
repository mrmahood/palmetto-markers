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

export const greenvilleLessonsM: MarkerLesson[] = [
  lesson(
    "23-57",
    "Claimed the largest mill under one roof",
    "Woodside Mill timeline",
    [cited("23-57", "Woodside Mill", "front and back")],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1902",
        title: "The Woodside brothers’ cotton mill",
        partLabel: "the cotton mill",
        art: art(
          "m2357-mill.jpg",
          "Illustration of a long brick cotton mill. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "brothers",
            label: "The brothers",
            x: 32,
            y: 46,
            fact: "Woodside Cotton Mill was the first and largest textile mill owned by brothers John T. (1864-1946), J. David (1871-1945), and Edward F. Woodside (1875-1943). The Woodside brothers also owned mills in Fountain Inn and Simpsonville, as well as Easley and Liberty in Pickens County.",
          },
          {
            id: "expanded",
            label: "1912",
            x: 74,
            y: 62,
            fact: "Built in 1902 with 11,000 spindles and 300 looms, it expanded in 1912 to 112,000 spindles and was claimed to be “the largest cotton mill under one roof” in America.",
          },
        ],
      },
      {
        kind: "scene",
        id: "village",
        kicker: "1929",
        title: "A village of 442 houses",
        partLabel: "the mill village",
        art: art(
          "m2357-village.jpg",
          "Illustration of small houses on a curving oak-lined street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "houses",
            label: "1929",
            x: 32,
            y: 58,
            fact: "By 1929 the 220-acre mill village housed more than 2,400 workers and their families in 442 houses. It featured gently-curving oak-lined streets, a company store, two schools, a Baptist church (1910) and Methodist church (1921), a baseball field, and a YMCA building.",
          },
          {
            id: "school",
            label: "1924",
            x: 74,
            y: 40,
            fact: "The mill sold 10 acres for Parker High School, built in 1924 to serve several area mill villages. Woodside Mill and its village were listed in the National Register of Historic Places in 1987.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1912",
        title: "Spindles after the expansion",
        partLabel: "112,000 spindles",
        value: 112000,
        unit: "spindles",
        meant:
          "What this meant: the marker says it expanded in 1912 to 112,000 spindles and was claimed to be “the largest cotton mill under one roof” in America.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2357-mill.jpg",
          "Illustration of a long brick cotton mill. Not a historical photograph.",
        ),
        nowArt: art(
          "m2357-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a long brick cotton mill, for the mill the marker says was built in 1902 and expanded in 1912. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1902",
            label: "Woodside Cotton Mill is built.",
            why: "The marker says it was built in 1902 with 11,000 spindles and 300 looms.",
          },
          {
            id: "expanded",
            year: "1912",
            label: "The mill expands to 112,000 spindles.",
            why: "The marker says it expanded in 1912 to 112,000 spindles and was claimed to be “the largest cotton mill under one roof” in America.",
          },
          {
            id: "village",
            year: "1929",
            label: "The mill village houses more than 2,400 workers.",
            why: "The marker says that by 1929 the 220-acre mill village housed more than 2,400 workers and their families in 442 houses.",
          },
          {
            id: "listed",
            year: "1987",
            label: "The mill and its village are listed in the National Register.",
            why: "The marker says Woodside Mill and its village were listed in the National Register of Historic Places in 1987.",
          },
        ],
        ["listed", "built", "village", "expanded"],
      ),
      takeaway([
        "Woodside Cotton Mill was the first and largest textile mill owned by brothers John T. (1864-1946), J. David (1871-1945), and Edward F. Woodside (1875-1943).",
        "Built in 1902 with 11,000 spindles and 300 looms, it expanded in 1912 to 112,000 spindles and was claimed to be “the largest cotton mill under one roof” in America.",
        "By 1929 the 220-acre mill village housed more than 2,400 workers and their families in 442 houses.",
      ]),
    ],
  ),
  lesson(
    "23-58",
    "The oldest black Baptist congregation downtown",
    "Springfield Baptist Church timeline",
    [
      cited("23-58", "Springfield Baptist Church", "front and back"),
      span(
        '"104 years" is 1976 minus 1872, the years the marker prints for the present church and the first church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "founded",
        kicker: "1867",
        title: "Founded from a combined congregation",
        partLabel: "the congregation",
        art: art(
          "m2358-church.jpg",
          "Illustration of a plain nineteenth-century church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1867",
            x: 32,
            y: 44,
            fact: "This is the oldest black Baptist congregation in downtown Greenville. It was founded in 1867 by members of Greenville Baptist Church (now First Baptist Church), which had been a combined congregation of whites and blacks before the Civil War.",
          },
          {
            id: "poole",
            label: "Father Poole",
            x: 74,
            y: 60,
            fact: "Rev. Gabriel Poole, known as “Father Poole,” was its first pastor. The new church worshipped in First Baptist Church until it built its own church here in 1872.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gothic",
        kicker: "1872",
        title: "Frame, then Gothic Revival, then a fire",
        partLabel: "the church buildings",
        art: art(
          "m2358-gothic.jpg",
          "Illustration of a brick church with pointed windows. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "frame",
            label: "1871-1872",
            x: 32,
            y: 52,
            fact: "The congregation purchased this site from the estate of Vardry McBee in 1871 and completed its first church, a frame building later covered in brick veneer, in 1872. That church was replaced by a brick Gothic Revival church in 1959.",
          },
          {
            id: "burned",
            label: "1972",
            x: 74,
            y: 38,
            fact: "Springfield Baptist Church hosted many significant meetings during the Civil Rights Movement. The 1959 church burned in 1972 and was replaced by the present church in 1976.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1872-1976",
        title: "Years from the first church to the present one",
        partLabel: "104 years",
        value: 104,
        unit: "years",
        meant:
          "What this meant: 1976 comes 104 years after 1872. That is the stretch from the year the congregation completed its first church to the year the present church replaced the one that burned.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2358-gothic.jpg",
          "Illustration of a brick church with pointed windows. Not a historical photograph.",
        ),
        nowArt: art(
          "m2358-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick church with pointed windows, for the Gothic Revival church the marker says replaced the first church in 1959. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1867",
            label: "Members of Greenville Baptist Church found the congregation.",
            why: "The marker says it was founded in 1867 by members of Greenville Baptist Church (now First Baptist Church), which had been a combined congregation of whites and blacks before the Civil War.",
          },
          {
            id: "frame",
            year: "1872",
            label: "The congregation completes its first church.",
            why: "The marker says the congregation purchased this site from the estate of Vardry McBee in 1871 and completed its first church, a frame building later covered in brick veneer, in 1872.",
          },
          {
            id: "gothic",
            year: "1959",
            label: "A brick Gothic Revival church replaces that church.",
            why: "The marker says that church was replaced by a brick Gothic Revival church in 1959.",
          },
          {
            id: "present",
            year: "1976",
            label: "The present church replaces the one that burned.",
            why: "The marker says the 1959 church burned in 1972 and was replaced by the present church in 1976.",
          },
        ],
        ["present", "founded", "gothic", "frame"],
      ),
      takeaway([
        "This is the oldest black Baptist congregation in downtown Greenville.",
        "It was founded in 1867 by members of Greenville Baptist Church (now First Baptist Church), which had been a combined congregation of whites and blacks before the Civil War.",
        "The 1959 church burned in 1972 and was replaced by the present church in 1976.",
      ]),
    ],
  ),
  lesson(
    "23-59",
    "An octagonal chapel for factory workers",
    "McBee Chapel timeline",
    [cited("23-59", "McBee Chapel", "front and back")],
    [
      {
        kind: "scene",
        id: "chapel",
        kicker: "1841",
        title: "A chapel workers had to attend",
        partLabel: "the octagonal chapel",
        art: art(
          "m2359-chapel.jpg",
          "Illustration of a small octagonal chapel. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "form",
            label: "Octagonal",
            x: 32,
            y: 42,
            fact: "This church is notable for its unusual octagonal form. It was built by John Adams for workers at the nearby McBee’s Factory, a complex owned by Vardry McBee (1775-1864), the industrialist often called “the father of Greenville.”",
          },
          {
            id: "organized",
            label: "1841",
            x: 74,
            y: 64,
            fact: "Workers were required to attend services here, in a chapel McBee organized in 1841 for them and their families.",
          },
        ],
      },
      {
        kind: "scene",
        id: "benches",
        kicker: "About 150",
        title: "More seats in a smaller space",
        partLabel: "the seating",
        art: art(
          "m2359-benches.jpg",
          "Illustration of empty benches inside an octagonal chapel. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "riders",
            label: "Circuit riders",
            x: 32,
            y: 56,
            fact: "McBee hired Adams, a mechanic and carpenter, to build his factories and other buildings. This church, first served by Methodist circuit riders, was one of several which McBee built or gave land or money to build.",
          },
          {
            id: "listed",
            label: "1972",
            x: 74,
            y: 36,
            fact: "With a capacity of about 150, its octagonal form seated more worshippers in a smaller space. The church was listed in the National Register of Historic Places in 1972.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "About 150",
        title: "Capacity of the octagonal chapel",
        partLabel: "about 150",
        value: 150,
        unit: "worshippers",
        meant:
          "What this meant: the marker says that with a capacity of about 150, its octagonal form seated more worshippers in a smaller space. “About” stays the marker’s word.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2359-chapel.jpg",
          "Illustration of a small octagonal chapel. Not a historical photograph.",
        ),
        nowArt: art(
          "m2359-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small octagonal chapel, for the church the marker says John Adams built for workers at McBee’s Factory. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "mcbee",
            year: "1775",
            label: "The marker’s years for Vardry McBee begin.",
            why: "The marker prints Vardry McBee (1775-1864), the industrialist often called “the father of Greenville,” as the owner of McBee’s Factory.",
          },
          {
            id: "organized",
            year: "1841",
            label: "McBee organizes the chapel for workers and their families.",
            why: "The marker says workers were required to attend services here, in a chapel McBee organized in 1841 for them and their families.",
          },
          {
            id: "end",
            year: "1864",
            label: "The marker’s years for Vardry McBee end.",
            why: "The marker prints Vardry McBee’s years as 1775-1864.",
          },
          {
            id: "listed",
            year: "1972",
            label: "The church is listed in the National Register of Historic Places.",
            why: "The marker says the church was listed in the National Register of Historic Places in 1972.",
          },
        ],
        ["listed", "mcbee", "end", "organized"],
      ),
      takeaway([
        "This church is notable for its unusual octagonal form.",
        "Workers were required to attend services here, in a chapel McBee organized in 1841 for them and their families.",
        "With a capacity of about 150, its octagonal form seated more worshippers in a smaller space.",
      ]),
    ],
  ),
  lesson(
    "23-60",
    "Books in a furniture-store window",
    "Simpsonville Library timeline",
    [cited("23-60", "Simpsonville Library", "front and back")],
    [
      {
        kind: "scene",
        id: "window",
        kicker: "ca. 1915",
        title: "Miss Nannie Cox’s window of books",
        partLabel: "the first library",
        art: art(
          "m2360-window.jpg",
          "Illustration of blank books in a furniture-store window. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "cox",
            label: "ca. 1915",
            x: 32,
            y: 48,
            fact: "The first town library started ca. 1915 when Miss Nannie Cox, a literature teacher, placed books in the window of R.D. Jones’s furniture store on South Main Street.",
          },
          {
            id: "hall",
            label: "City Hall",
            x: 74,
            y: 34,
            fact: "A more formal library was later on the second floor of the Simpsonville City Hall on East Curtis Street.",
          },
        ],
      },
      {
        kind: "scene",
        id: "branch",
        kicker: "1940",
        title: "The first separate library in town",
        partLabel: "the branch building",
        art: art(
          "m2360-library.jpg",
          "Illustration of a small Classical Revival library. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wpa",
            label: "1940",
            x: 32,
            y: 46,
            fact: "This Classical Revival building, constructed in 1940, was the Simpsonville Branch of the Greenville County Library until 1997. This building, the first separate library in the town, was built by the Work Projects Administration at a cost of $7,400, with significant local donations as well.",
          },
          {
            id: "closed",
            label: "1997",
            x: 74,
            y: 62,
            fact: "It features two reading rooms, one often serving as a community center. The library was renovated and expanded in 1968. It closed in 1997 with the opening of the Hendricks Branch of the Greenville County Library on Northeast Main Street.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1940",
        title: "Cost of the separate library",
        partLabel: "$7,400",
        value: 7400,
        unit: "dollars",
        meant:
          "What this meant: the marker says this building, the first separate library in the town, was built by the Work Projects Administration at a cost of $7,400, with significant local donations as well.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2360-library.jpg",
          "Illustration of a small Classical Revival library. Not a historical photograph.",
        ),
        nowArt: art(
          "m2360-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small Classical Revival library, for the building the marker says was constructed in 1940. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "cox",
            year: "ca. 1915",
            label: "Miss Nannie Cox places books in a furniture-store window.",
            why: "The marker says the first town library started ca. 1915 when Miss Nannie Cox, a literature teacher, placed books in the window of R.D. Jones’s furniture store on South Main Street.",
          },
          {
            id: "built",
            year: "1940",
            label: "The Work Projects Administration builds the library.",
            why: "The marker says this Classical Revival building, constructed in 1940, was the first separate library in the town, built by the Work Projects Administration at a cost of $7,400.",
          },
          {
            id: "expanded",
            year: "1968",
            label: "The library is renovated and expanded.",
            why: "The marker says the library was renovated and expanded in 1968.",
          },
          {
            id: "closed",
            year: "1997",
            label: "The library closes when the Hendricks Branch opens.",
            why: "The marker says it closed in 1997 with the opening of the Hendricks Branch of the Greenville County Library on Northeast Main Street.",
          },
        ],
        ["expanded", "cox", "closed", "built"],
      ),
      takeaway([
        "The first town library started ca. 1915 when Miss Nannie Cox, a literature teacher, placed books in the window of R.D. Jones’s furniture store on South Main Street.",
        "This building, the first separate library in the town, was built by the Work Projects Administration at a cost of $7,400, with significant local donations as well.",
        "It closed in 1997 with the opening of the Hendricks Branch of the Greenville County Library on Northeast Main Street.",
      ]),
    ],
  ),
];
