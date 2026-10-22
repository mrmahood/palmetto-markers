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

export const darlingtonLessonsR: MarkerLesson[] = [
  lesson(
    "16-73",
    "A brick school built at a cost of $11,150",
    "Rosenwald Consolidated School timeline",
    [cited("16-73", "Rosenwald Consolidated School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1930",
        title: "A combined elementary and high school",
        partLabel: "the brick school",
        art: art(
          "m1673-school.jpg",
          "Illustration of a brick school in a pine yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Built in 1930",
            x: 32,
            y: 48,
            fact: "The Julius Rosenwald Consolidated School, built in 1930, was a combined elementary and high school until 1953 and a high school until 1982. It brought in African-American students from three rural schools in and near Society Hill.",
          },
          {
            id: "cost",
            label: "$11,150",
            x: 74,
            y: 58,
            fact: "A brick school built at a cost of $11,150, it was one of almost 500 in S.C. funded in part by the Julius Rosenwald Foundation 1917-1932. Arthur A. Prince was its first principal.",
          },
        ],
      },
      {
        kind: "scene",
        id: "grades",
        kicker: "1936",
        title: "Grades 1-10, then a frame shop",
        partLabel: "the school years",
        art: art(
          "m1673-workshop.jpg",
          "Illustration of a frame workshop beside a brick school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "shop",
            label: "Shop in 1936",
            x: 32,
            y: 48,
            fact: "The school opened with pupils in grades 1-10; grade 11 was added in 1939 and grade 12 in 1948. A frame industrial education building was built in 1936.",
          },
          {
            id: "closed",
            label: "Closed in 1982",
            x: 74,
            y: 58,
            fact: "The school, accredited after World War II, became Rosenwald High School, though it continued to include elementary pupils until 1954, when a new Rosenwald Elementary School was built in Society Hill. The high school closed in 1982.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1930",
        title: "What the brick school cost",
        partLabel: "11,150 dollars",
        value: 11150,
        unit: "dollars",
        meant:
          "What this meant: the marker says a brick school built at a cost of $11,150, it was one of almost 500 in S.C. funded in part by the Julius Rosenwald Foundation 1917-1932.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1673-school.jpg",
          "Illustration of a brick school in a pine yard. Not a historical photograph.",
        ),
        nowArt: art(
          "m1673-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a brick school, for the school the marker says was built in 1930.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "built",
            year: "1930",
            label: "The Julius Rosenwald Consolidated School is built.",
            why: "The marker says the Julius Rosenwald Consolidated School, built in 1930, was a combined elementary and high school until 1953 and a high school until 1982.",
          },
          {
            id: "shop",
            year: "1936",
            label: "A frame industrial education building is built.",
            why: "The marker says a frame industrial education building was built in 1936.",
          },
          {
            id: "grade",
            year: "1948",
            label: "Grade 12 is added.",
            why: "The marker says the school opened with pupils in grades 1-10; grade 11 was added in 1939 and grade 12 in 1948.",
          },
          {
            id: "closed",
            year: "1982",
            label: "The high school closes.",
            why: "The marker says the high school closed in 1982.",
          },
        ],
        ["grade", "built", "closed", "shop"],
      ),
      takeaway([
        "The Julius Rosenwald Consolidated School, built in 1930, was a combined elementary and high school until 1953 and a high school until 1982.",
        "A brick school built at a cost of $11,150, it was one of almost 500 in S.C. funded in part by the Julius Rosenwald Foundation 1917-1932.",
        "The school opened with pupils in grades 1-10; grade 11 was added in 1939 and grade 12 in 1948.",
      ]),
    ],
  ),
  lesson(
    "16-74",
    "One of the oldest African-American churches in Darlington County",
    "Jerusalem Baptist Church timeline",
    [cited("16-74", "Jerusalem Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "arbor",
        kicker: "Snake Branch",
        title: "First services under a brush arbor",
        partLabel: "the brush arbor",
        art: art(
          "m1674-arbor.jpg",
          "Illustration of a brush arbor beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "After the Civil War",
            x: 32,
            y: 48,
            fact: "This church, organized soon after the Civil War, is one of the oldest African-American churches in Darlington County.",
          },
          {
            id: "log",
            label: "A log building",
            x: 74,
            y: 58,
            fact: "It held its first services a few miles E under a brush arbor on Snake Branch, a creek near E. Carolina Ave. The first permanent church, a log building, was built there.",
          },
        ],
      },
      {
        kind: "scene",
        id: "church",
        kicker: "1898",
        title: "A frame building called a splendid achievement",
        partLabel: "this church site",
        art: art(
          "m1674-church.jpg",
          "Illustration of a frame country church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "site",
            label: "Site in 1898",
            x: 32,
            y: 48,
            fact: "Trustees acquired this site in 1898, built the present church in 1907, and chartered the congregation in 1908.",
          },
          {
            id: "veneer",
            label: "Rededicated in 1939",
            x: 74,
            y: 58,
            fact: "This church, built in 1907 as a frame building, was described as “a splendid achievement” when it was covered in brick veneer and rededicated in 1939. It had a congregation of more than 350 during the Depression. Rev. Henry H. Butler (1887-1948), pastor from 1932 until his death, was also for many years the principal of the Darlington Co. Training School/Butler School and later president of Morris College.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The Depression",
        title: "More than 350 in the congregation",
        partLabel: "more than 350",
        value: 350,
        unit: "people",
        meant:
          "What this meant: the marker says it had a congregation of more than 350 during the Depression.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1674-church.jpg",
          "Illustration of a frame country church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1674-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a frame country church, for the church the marker says was built in 1907 as a frame building.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "site",
            year: "1898",
            label: "Trustees acquire this site.",
            why: "The marker says trustees acquired this site in 1898, built the present church in 1907, and chartered the congregation in 1908.",
          },
          {
            id: "built",
            year: "1907",
            label: "The present church is built.",
            why: "The marker says trustees acquired this site in 1898, built the present church in 1907, and chartered the congregation in 1908.",
          },
          {
            id: "charter",
            year: "1908",
            label: "The congregation is chartered.",
            why: "The marker says trustees acquired this site in 1898, built the present church in 1907, and chartered the congregation in 1908.",
          },
          {
            id: "veneer",
            year: "1939",
            label: "The church is covered in brick veneer and rededicated.",
            why: "The marker says this church, built in 1907 as a frame building, was described as “a splendid achievement” when it was covered in brick veneer and rededicated in 1939.",
          },
        ],
        ["veneer", "site", "charter", "built"],
      ),
      takeaway([
        "This church, organized soon after the Civil War, is one of the oldest African-American churches in Darlington County.",
        "Trustees acquired this site in 1898, built the present church in 1907, and chartered the congregation in 1908.",
        "Rev. Henry H. Butler (1887-1948), pastor from 1932 until his death, was also for many years the principal of the Darlington Co. Training School/Butler School and later president of Morris College.",
      ]),
    ],
  ),
  lesson(
    "16-75",
    "Known as “The Round Owe”",
    "Round O timeline",
    [
      cited("16-75", "Round O", "front"),
      span("72 years is 1974 minus 1902 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "fields",
        kicker: "Round O",
        title: "Thomas Smith’s Round O Plantation",
        partLabel: "the plantation land",
        art: art(
          "m1675-fields.jpg",
          "Illustration of open plantation fields and a distant farmhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "plantation",
            label: "Round O Plantation",
            x: 32,
            y: 48,
            fact: "Much of the land in this vicinity was once part of Thomas Smith’s Round O Plantation.",
          },
          {
            id: "name",
            label: "The Round Owe",
            x: 74,
            y: 58,
            fact: "The name derives from a large Carolina Bay in the area known as “The Round Owe.”",
          },
        ],
      },
      {
        kind: "scene",
        id: "bay",
        kicker: "1974",
        title: "Birthplace of Kay Patterson",
        partLabel: "the Carolina Bay",
        art: art(
          "m1675-bay.jpg",
          "Illustration of an oval wetland among pines. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "birthplace",
            label: "Kay Patterson",
            x: 32,
            y: 48,
            fact: "Round O was birthplace of former S.C. Representative (Dist. 73) and Senator (Dist. 19) Kay Patterson.",
          },
          {
            id: "elected",
            label: "Elected in 1974",
            x: 74,
            y: 58,
            fact: "Round O was birthplace of former S.C. Representative (Dist. 73) and Senator (Dist. 19) Kay Patterson, who was among the first African Americans elected to the S.C. legislature since 1902 when he won election in 1974.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1902-1974",
        title: "Years from 1902 to the 1974 election",
        partLabel: "72 years",
        value: 72,
        unit: "years",
        meant:
          "What this meant: 72 years is 1974 minus 1902 on the marker. The marker says Kay Patterson was among the first African Americans elected to the S.C. legislature since 1902 when he won election in 1974.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1675-bay.jpg",
          "Illustration of an oval wetland among pines. Not a historical photograph.",
        ),
        nowArt: art(
          "m1675-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of an oval wetland among pines, for the large Carolina Bay the marker says was known as “The Round Owe.”",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "since",
            year: "1902",
            label: "The marker’s since-1902 line for the legislature.",
            why: "The marker says Kay Patterson was among the first African Americans elected to the S.C. legislature since 1902.",
          },
          {
            id: "elected",
            year: "1974",
            label: "Kay Patterson wins election.",
            why: "The marker says he won election in 1974.",
          },
        ],
        ["elected", "since"],
      ),
      takeaway([
        "Much of the land in this vicinity was once part of Thomas Smith’s Round O Plantation.",
        "The name derives from a large Carolina Bay in the area known as “The Round Owe.”",
        "Round O was birthplace of former S.C. Representative (Dist. 73) and Senator (Dist. 19) Kay Patterson, who was among the first African Americans elected to the S.C. legislature since 1902 when he won election in 1974.",
      ]),
    ],
  ),
  lesson(
    "16-76",
    "First meetings under a brush arbor",
    "St. John Methodist Church timeline",
    [cited("16-76", "St. John Methodist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "arbor",
        kicker: "1867",
        title: "A one-room frame structure",
        partLabel: "the first sanctuary",
        art: art(
          "m1676-arbor.jpg",
          "Illustration of a brush arbor in a clearing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "meetings",
            label: "A brush arbor",
            x: 32,
            y: 48,
            fact: "The first meetings of what would become St. John Methodist Church took place under a brush arbor.",
          },
          {
            id: "first",
            label: "Completed in 1867",
            x: 74,
            y: 58,
            fact: "The congregation completed their first permanent sanctuary, a one-room frame structure, in 1867.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1907",
        title: "A larger frame church",
        partLabel: "the later sanctuary",
        art: art(
          "m1676-sanctuary.jpg",
          "Illustration of a larger wooden church among pines. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "larger",
            label: "Built in 1907",
            x: 32,
            y: 48,
            fact: "Having outgrown that building, the members built a larger frame church in 1907. After nearly seventy years of service, that building was replaced by the current sanctuary in 1976.",
          },
          {
            id: "graves",
            label: "Over 600 graves",
            x: 74,
            y: 58,
            fact: "The St. John Methodist Church Cemetery contains graves from as early as the 1890s and is still in use. The cemetery contains over 600 graves of church members and other African Americans from Hartsville, Darlington, Lamar, and surrounding areas.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The cemetery",
        title: "Graves in the church cemetery",
        partLabel: "over 600 graves",
        value: 600,
        unit: "graves",
        meant:
          "What this meant: the marker says the cemetery contains over 600 graves of church members and other African Americans from Hartsville, Darlington, Lamar, and surrounding areas.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1676-sanctuary.jpg",
          "Illustration of a larger wooden church among pines. Not a historical photograph.",
        ),
        nowArt: art(
          "m1676-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a wooden church, for the larger frame church the marker says members built in 1907.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "first",
            year: "1867",
            label: "The congregation completes a one-room frame sanctuary.",
            why: "The marker says the congregation completed their first permanent sanctuary, a one-room frame structure, in 1867.",
          },
          {
            id: "larger",
            year: "1907",
            label: "Members build a larger frame church.",
            why: "The marker says that, having outgrown that building, the members built a larger frame church in 1907.",
          },
          {
            id: "current",
            year: "1976",
            label: "The current sanctuary replaces that building.",
            why: "The marker says that after nearly seventy years of service, that building was replaced by the current sanctuary in 1976.",
          },
        ],
        ["current", "first", "larger"],
      ),
      takeaway([
        "The congregation completed their first permanent sanctuary, a one-room frame structure, in 1867.",
        "Having outgrown that building, the members built a larger frame church in 1907. After nearly seventy years of service, that building was replaced by the current sanctuary in 1976.",
        "The cemetery contains over 600 graves of church members and other African Americans from Hartsville, Darlington, Lamar, and surrounding areas.",
      ]),
    ],
  ),
];
