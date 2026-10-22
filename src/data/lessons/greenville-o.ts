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

export const greenvilleLessonsO: MarkerLesson[] = [
  lesson(
    "23-65",
    "From Chick Springs Church to Taylors Church",
    "Taylors First Baptist Church timeline",
    [
      cited("23-65", "Taylors First Baptist Church", "front and back"),
      span(
        '"58 years" is 1922 minus 1864, the years the marker prints for the oldest extant building and the organization as Chick Springs Church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "camp",
        kicker: "August 28, 1864",
        title: "Organized after camp meetings",
        partLabel: "the organization",
        art: art(
          "m2365-camp.jpg",
          "Illustration of a wooden meeting house in a wooded clearing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "August 28, 1864",
            x: 32,
            y: 52,
            fact: "The church organized as Chick Springs Church on August 28, 1864 at the conclusion of a week of camp meetings. The congregation first met near the Chick Springs area.",
          },
          {
            id: "clerk",
            label: "1867-1870",
            x: 74,
            y: 38,
            fact: "Alfred Taylor was the first clerk. Dr. James C. Furman, first president of Furman University, was pastor 1867-1870.",
          },
        ],
      },
      {
        kind: "scene",
        id: "depot",
        kicker: "1885",
        title: "Rebuilt nearer the railway depot",
        partLabel: "the new location",
        art: art(
          "m2365-depot.jpg",
          "Illustration of a railway depot and a wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "railway",
            label: "1873",
            x: 32,
            y: 46,
            fact: "In 1873 the Atlanta & Richmond Air-Line Railway completed its new line, which included a depot on land owned by Alfred Taylor.",
          },
          {
            id: "rebuilt",
            label: "1885",
            x: 74,
            y: 60,
            fact: "In 1884 the congregation voted to move their church to a new location nearer the depot. The original building was deconstructed and rebuilt at the new location in 1885, and the church was renamed Taylors Church. The oldest extant building on the current campus was built in 1922.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1864-1922",
        title: "Years from organization to the oldest building",
        partLabel: "58 years",
        value: 58,
        unit: "years",
        meant:
          "What this meant: 1922 comes 58 years after 1864. That is the stretch from the year the church organized as Chick Springs Church to the year the oldest extant building on the current campus was built.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2365-camp.jpg",
          "Illustration of a wooden meeting house in a wooded clearing. Not a historical photograph.",
        ),
        nowArt: art(
          "m2365-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden meeting house, for the church the marker says organized as Chick Springs Church on August 28, 1864. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "August 28, 1864",
            label: "The church organizes as Chick Springs Church.",
            why: "The marker says the church organized as Chick Springs Church on August 28, 1864 at the conclusion of a week of camp meetings.",
          },
          {
            id: "pastor",
            year: "1867",
            label: "Dr. James C. Furman is pastor.",
            why: "The marker says Dr. James C. Furman, first president of Furman University, was pastor 1867-1870.",
          },
          {
            id: "railway",
            year: "1873",
            label: "A railway depot is completed on Alfred Taylor's land.",
            why: "The marker says that in 1873 the Atlanta & Richmond Air-Line Railway completed its new line, which included a depot on land owned by Alfred Taylor.",
          },
          {
            id: "renamed",
            year: "1885",
            label: "The building is rebuilt and renamed Taylors Church.",
            why: "The marker says the original building was deconstructed and rebuilt at the new location in 1885, and the church was renamed Taylors Church.",
          },
          {
            id: "campus",
            year: "1922",
            label: "The oldest extant building on the campus is built.",
            why: "The marker says the oldest extant building on the current campus was built in 1922.",
          },
        ],
        ["renamed", "organized", "campus", "railway", "pastor"],
      ),
      takeaway([
        "The church organized as Chick Springs Church on August 28, 1864 at the conclusion of a week of camp meetings.",
        "Dr. James C. Furman, first president of Furman University, was pastor 1867-1870.",
        "The original building was deconstructed and rebuilt at the new location in 1885, and the church was renamed Taylors Church.",
      ]),
    ],
  ),
  lesson(
    "23-66",
    "The third public school in Simpsonville",
    "Simpsonville Elementary School timeline",
    [
      cited("23-66", "Simpsonville Elementary School", "front and back"),
      span(
        '"63 years" is 2002 minus 1939, the years the marker prints for the closing of Simpsonville Elementary School and the building of this school.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "brick",
        kicker: "1907",
        title: "A combined elementary and high school",
        partLabel: "the brick school",
        art: art(
          "m2366-brick.jpg",
          "Illustration of a two-story brick school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built1907",
            label: "1907",
            x: 32,
            y: 48,
            fact: "A two-story brick school built here in 1907 was a combined elementary and high school until a separate high school opened here in 1921.",
          },
          {
            id: "diplomas",
            label: "1917",
            x: 74,
            y: 36,
            fact: "In 1917 Simpsonville became the first Greenville County school to offer grade 11 and award high school diplomas. The high school built here in 1920-21 was the first separate high school in Simpsonville.",
          },
        ],
      },
      {
        kind: "scene",
        id: "elementary",
        kicker: "1939",
        title: "Built with local and federal funds",
        partLabel: "the 1939 school",
        art: art(
          "m2366-school.jpg",
          "Illustration of a brick school and a gymnasium. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "pwa",
            label: "1939",
            x: 32,
            y: 44,
            fact: "This school was built in 1939 with local funds and with federal funds from the Public Works Administration and the Works Projects Administration. It was the forth school, and the third public school, in Simpsonville.",
          },
          {
            id: "shared",
            label: "1939-57",
            x: 74,
            y: 60,
            fact: "Grade 12 was added in 1948. Both schools shared the auditorium and gymnasium 1939-57. Simpsonville High School closed in 1957 and was torn down after the new Hillcrest High School opened that fall. Simpsonville Elementary School closed in 2002.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1939-2002",
        title: "Years from the building to its closing",
        partLabel: "63 years",
        value: 63,
        unit: "years",
        meant:
          "What this meant: 2002 comes 63 years after 1939. That is the stretch from the year this school was built to the year Simpsonville Elementary School closed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2366-school.jpg",
          "Illustration of a brick school and a gymnasium. Not a historical photograph.",
        ),
        nowArt: art(
          "m2366-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick school, for the school the marker says was built in 1939 with local funds and federal funds. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "brick",
            year: "1907",
            label: "A two-story brick school is built here.",
            why: "The marker says a two-story brick school built here in 1907 was a combined elementary and high school until a separate high school opened here in 1921.",
          },
          {
            id: "diplomas",
            year: "1917",
            label: "The school offers grade 11 and high school diplomas.",
            why: "The marker says that in 1917 Simpsonville became the first Greenville County school to offer grade 11 and award high school diplomas.",
          },
          {
            id: "separate",
            year: "1921",
            label: "A separate high school opens here.",
            why: "The marker says a separate high school opened here in 1921, and that the high school built here in 1920-21 was the first separate high school in Simpsonville.",
          },
          {
            id: "built",
            year: "1939",
            label: "This school is built with local and federal funds.",
            why: "The marker says this school was built in 1939 with local funds and with federal funds from the Public Works Administration and the Works Projects Administration.",
          },
          {
            id: "hillcrest",
            year: "1957",
            label: "Simpsonville High School closes.",
            why: "The marker says Simpsonville High School closed in 1957 and was torn down after the new Hillcrest High School opened that fall.",
          },
          {
            id: "closed",
            year: "2002",
            label: "Simpsonville Elementary School closes.",
            why: "The marker says Simpsonville Elementary School closed in 2002.",
          },
        ],
        ["built", "closed", "brick", "hillcrest", "diplomas", "separate"],
      ),
      takeaway([
        "This school was built in 1939 with local funds and with federal funds from the Public Works Administration and the Works Projects Administration.",
        "In 1917 Simpsonville became the first Greenville County school to offer grade 11 and award high school diplomas.",
        "Simpsonville High School closed in 1957 and was torn down after the new Hillcrest High School opened that fall.",
      ]),
    ],
  ),
  lesson(
    "23-67",
    "The third building to house the high school",
    "Greenville High School timeline",
    [cited("23-67", "Greenville High School", "front and back")],
    [
      {
        kind: "scene",
        id: "cornerstone",
        kicker: "July 27, 1937",
        title: "A cornerstone, then an opening",
        partLabel: "the building",
        art: art(
          "m2367-school.jpg",
          "Illustration of a three-story brick school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "laid",
            label: "July 27, 1937",
            x: 32,
            y: 52,
            fact: "The cornerstone for this building, the third to house Greenville High School, was laid July 27, 1937 and it was first opened to students in 1938.",
          },
          {
            id: "cost",
            label: "Nearly one million",
            x: 74,
            y: 36,
            fact: "Construction was paid for in part by the Works Progress Administration at a total cost of nearly one million dollars.",
          },
        ],
      },
      {
        kind: "scene",
        id: "stadium",
        kicker: "1936",
        title: "Sirrine Stadium and Classical Moderne",
        partLabel: "the stadium",
        art: art(
          "m2367-stadium.jpg",
          "Illustration of an open football stadium beside a school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "venue",
            label: "1936",
            x: 32,
            y: 48,
            fact: "The WPA also funded construction of nearby Sirrine Stadium, the home venue for Greenville High School football games since 1936.",
          },
          {
            id: "style",
            label: "The 1930s",
            x: 74,
            y: 34,
            fact: "The three-story, yellow brick building was designed by J.E. Sirrine & Co. of Greenville and is built in the Classical Moderne style typical of New Deal architecture. The stylized and simplified interpretation of Neoclassical forms was meant both to inspire confidence in the future and to convey a sense of stability in the midst of the economic uncertainty of the 1930s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Three stories",
        title: "Stories in the yellow brick building",
        partLabel: "three stories",
        value: 3,
        unit: "stories",
        meant:
          "What this meant: the marker says the three-story, yellow brick building was designed by J.E. Sirrine & Co. of Greenville and is built in the Classical Moderne style typical of New Deal architecture.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2367-school.jpg",
          "Illustration of a three-story brick school. Not a historical photograph.",
        ),
        nowArt: art(
          "m2367-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a three-story brick school, for the building the marker says opened to students in 1938. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "stadium",
            year: "1936",
            label: "Sirrine Stadium is the home venue for football.",
            why: "The marker says the WPA also funded construction of nearby Sirrine Stadium, the home venue for Greenville High School football games since 1936.",
          },
          {
            id: "cornerstone",
            year: "July 27, 1937",
            label: "The cornerstone of this building is laid.",
            why: "The marker says the cornerstone for this building, the third to house Greenville High School, was laid July 27, 1937.",
          },
          {
            id: "opened",
            year: "1938",
            label: "The building opens to students.",
            why: "The marker says it was first opened to students in 1938.",
          },
        ],
        ["opened", "stadium", "cornerstone"],
      ),
      takeaway([
        "The cornerstone for this building, the third to house Greenville High School, was laid July 27, 1937 and it was first opened to students in 1938.",
        "Construction was paid for in part by the Works Progress Administration at a total cost of nearly one million dollars.",
        "The three-story, yellow brick building was designed by J.E. Sirrine & Co. of Greenville and is built in the Classical Moderne style typical of New Deal architecture.",
      ]),
    ],
  ),
  lesson(
    "23-68",
    "Furman’s longest serving president",
    "John L. Plyler Home timeline",
    [
      cited("23-68", "John L. Plyler Home", "front and back"),
      span(
        '"25 years" is 1964 minus 1939, the years the marker prints for Plyler’s retirement and the year he became the seventh president of Furman University.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1894",
        title: "Boyhood home and birthplace",
        partLabel: "the house",
        art: art(
          "m2368-house.jpg",
          "Illustration of a wooden house with a porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "birth",
            label: "1894-1966",
            x: 32,
            y: 50,
            fact: "This house was the boyhood home and birthplace of John L. Plyler (1894-1966), a Furman University alumnus and Harvard Law School graduate who served as an attorney, judge, and dean of the Furman University Law School before becoming the seventh president of Furman University in 1939.",
          },
          {
            id: "longest",
            label: "1939-1964",
            x: 74,
            y: 36,
            fact: "Plyler was Furman’s longest serving president, remaining in that post until his retirement in 1964.",
          },
        ],
      },
      {
        kind: "scene",
        id: "campus",
        kicker: "1958",
        title: "A new campus north of Greenville",
        partLabel: "the new campus",
        art: art(
          "m2368-campus.jpg",
          "Illustration of brick college buildings on an open lawn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "freedom",
            label: "1940",
            x: 32,
            y: 42,
            fact: "During Plyler’s tenure as president he supported the first written campus statement on academic freedom, aligning Furman with the Statement on the Principles of Academic Freedom and Tenure of 1940.",
          },
          {
            id: "classes",
            label: "1958",
            x: 74,
            y: 58,
            fact: "Plyler also oversaw the development of a new university campus north of Greenville, where classes began in 1958, and the physical unification of Furman University and the Greenville Woman’s College on that new campus several years later.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1939-1964",
        title: "Years Plyler served as president",
        partLabel: "25 years",
        value: 25,
        unit: "years",
        meant:
          "What this meant: 1964 comes 25 years after 1939. That is the stretch from the year he became the seventh president of Furman University to the year of his retirement.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2368-house.jpg",
          "Illustration of a wooden house with a porch. Not a historical photograph.",
        ),
        nowArt: art(
          "m2368-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden house, for the house the marker says was the boyhood home and birthplace of John L. Plyler. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "birth",
            year: "1894",
            label: "John L. Plyler is born in this house.",
            why: "The marker says this house was the boyhood home and birthplace of John L. Plyler (1894-1966).",
          },
          {
            id: "president",
            year: "1939",
            label: "He becomes the seventh president of Furman University.",
            why: "The marker says he became the seventh president of Furman University in 1939.",
          },
          {
            id: "freedom",
            year: "1940",
            label: "Furman aligns with the 1940 statement on academic freedom.",
            why: "The marker says that during Plyler’s tenure he supported the first written campus statement on academic freedom, aligning Furman with the Statement on the Principles of Academic Freedom and Tenure of 1940.",
          },
          {
            id: "classes",
            year: "1958",
            label: "Classes begin on a new campus north of Greenville.",
            why: "The marker says Plyler oversaw the development of a new university campus north of Greenville, where classes began in 1958.",
          },
          {
            id: "retirement",
            year: "1964",
            label: "Plyler retires as president.",
            why: "The marker says Plyler was Furman’s longest serving president, remaining in that post until his retirement in 1964.",
          },
        ],
        ["classes", "birth", "retirement", "freedom", "president"],
      ),
      takeaway([
        "This house was the boyhood home and birthplace of John L. Plyler (1894-1966), a Furman University alumnus and Harvard Law School graduate who served as an attorney, judge, and dean of the Furman University Law School before becoming the seventh president of Furman University in 1939.",
        "Plyler was Furman’s longest serving president, remaining in that post until his retirement in 1964.",
        "Plyler also oversaw the development of a new university campus north of Greenville, where classes began in 1958, and the physical unification of Furman University and the Greenville Woman’s College on that new campus several years later.",
      ]),
    ],
  ),
];
