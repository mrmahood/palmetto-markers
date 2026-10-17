import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia streets and one house. Facts are from that marker only.
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

export const richlandLessonsN: MarkerLesson[] = [
  lesson(
    "40-66",
    "From Walnut Street to Blanding",
    "Blanding Street timeline",
    [
      cited("40-66", "Blanding Street", "front"),
      span(
        '"42 years" is 1839 minus 1797, the years the marker prints for his death and his coming to Columbia.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "By 1869",
        title: "Renamed for Abram Blanding",
        partLabel: "the street",
        art: art(
          "m4066-street.jpg",
          "Illustration of a walnut tree and a town street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "walnut",
            label: "Walnut Street",
            x: 32,
            y: 52,
            fact: "Originally named Walnut Street.",
          },
          {
            id: "renamed",
            label: "By 1869",
            x: 74,
            y: 44,
            fact: "Blanding Street was by 1869 renamed for Abram Blanding, a Massachusetts native.",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1797",
        title: "The academy and a corner house",
        partLabel: "his Columbia years",
        art: art(
          "m4066-houses.jpg",
          "Illustration of an academy and a corner house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "academy",
            label: "1797",
            x: 32,
            y: 50,
            fact: "He came to Columbia in 1797 to take charge of Columbia Male Academy.",
          },
          {
            id: "house",
            label: "The corner house",
            x: 74,
            y: 54,
            fact: "His house was located on the NW corner of Blanding and Marion streets. Blanding died in 1839.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1797-1839",
        title: "Years from his arrival to his death",
        partLabel: "42 years",
        value: 42,
        unit: "years",
        meant:
          "What this meant: 1839 comes 42 years after 1797. That is the stretch from the year he came to Columbia to the year he died.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4066-street.jpg",
          "Illustration of a walnut tree and a town street. Not a historical photograph.",
        ),
        nowArt: art(
          "m4066-today.jpg",
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a town street, for the street the marker says was originally named Walnut Street and by 1869 renamed for Abram Blanding. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "arrived",
            year: "1797",
            label: "He comes to Columbia to take charge of Columbia Male Academy.",
            why: "The marker says Abram Blanding came to Columbia in 1797 to take charge of Columbia Male Academy.",
          },
          {
            id: "bar",
            year: "1802",
            label: "He is admitted to the bar.",
            why: "The marker says Blanding was admitted to the bar in 1802 and served two terms in the legislature.",
          },
          {
            id: "died",
            year: "1839",
            label: "Blanding dies.",
            why: "The marker says Blanding died in 1839. His house was on the NW corner of Blanding and Marion streets.",
          },
          {
            id: "renamed",
            year: "By 1869",
            label: "The street is renamed for him.",
            why: "The marker says Blanding Street was by 1869 renamed for Abram Blanding. It was originally named Walnut Street.",
          },
        ],
        ["died", "arrived", "renamed", "bar"],
      ),
      takeaway([
        "Originally named Walnut Street, Blanding Street was by 1869 renamed for Abram Blanding, a Massachusetts native.",
        "He came to Columbia in 1797 to take charge of Columbia Male Academy, was admitted to the bar in 1802, and served two terms in the legislature.",
        "He built the city's first water works, was a Trustee of South Carolina College, and S. C. Superintendent of Public Works. His house was on the NW corner of Blanding and Marion streets. He died in 1839.",
      ]),
    ],
  ),
  lesson(
    "40-67",
    "The street that cut the campus",
    "College Street timeline",
    [
      cited("40-67", "College Street", "front"),
      span(
        '"15 years" is 1801 minus 1786, the years the marker prints for the establishment of the college and the original Columbia plan.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1786",
        title: "Medium Street in the city plan",
        partLabel: "the original street",
        art: art(
          "m4067-street.jpg",
          "Illustration of a planned street and open ground. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "medium",
            label: "Medium Street",
            x: 32,
            y: 58,
            fact: "This street, originally named Medium Street, was part of the original 1786 Columbia plan.",
          },
          {
            id: "campus",
            label: "The future campus",
            x: 75,
            y: 42,
            fact: "It bisected the area which was to be the campus of South Carolina College.",
          },
        ],
      },
      {
        kind: "scene",
        id: "college",
        kicker: "1801",
        title: "A college, then a university",
        partLabel: "the college",
        art: art(
          "m4067-college.jpg",
          "Illustration of two college buildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1801",
            x: 32,
            y: 48,
            fact: "The college was established in 1801 by an act of the General Assembly.",
          },
          {
            id: "renamed",
            label: "Shortly after 1891",
            x: 74,
            y: 50,
            fact: "It later became the University of South Carolina. Medium Street was renamed College Street shortly after 1891.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1786-1801",
        title: "Years from the plan to the college",
        partLabel: "15 years",
        value: 15,
        unit: "years",
        meant:
          "What this meant: 1801 comes 15 years after 1786. That is the stretch from the original Columbia plan to the year the college was established.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4067-college.jpg",
          "Illustration of two college buildings. Not a historical photograph.",
        ),
        nowArt: art(
          "m4067-today.jpg",
          "Illustration of a marker beside a campus lawn. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of college buildings, for South Carolina College, which the marker says was established in 1801. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a campus lawn. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "plan",
            year: "1786",
            label: "Medium Street is part of the original Columbia plan.",
            why: "The marker says the street, originally named Medium Street, was part of the original 1786 Columbia plan and bisected the area which was to be the campus.",
          },
          {
            id: "established",
            year: "1801",
            label: "South Carolina College is established.",
            why: "The marker says the college was established in 1801 by an act of the General Assembly.",
          },
          {
            id: "renamed",
            year: "Shortly after 1891",
            label: "Medium Street is renamed College Street.",
            why: "The marker says Medium Street was renamed College Street shortly after 1891. The college later became the University of South Carolina.",
          },
        ],
        ["renamed", "plan", "established"],
      ),
      takeaway([
        "This street, originally named Medium Street, was part of the original 1786 Columbia plan.",
        "It bisected the area which was to be the campus of South Carolina College, established in 1801 by an act of the General Assembly.",
        "The college later became the University of South Carolina. Medium Street was renamed College Street shortly after 1891.",
      ]),
    ],
  ),
  lesson(
    "40-68",
    "Northernmost street in the plan",
    "Elmwood Avenue timeline",
    [cited("40-68", "Elmwood Avenue", "front")],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1786",
        title: "Upper Street at the north edge",
        partLabel: "the city plan",
        art: art(
          "m4068-street.jpg",
          "Illustration of a town edge and a grid of lots. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "upper",
            label: "Upper Street",
            x: 32,
            y: 56,
            fact: "This street, originally named Upper Street, was the northernmost street in the original 1786 Columbia plan.",
          },
          {
            id: "lots",
            label: "The lots",
            x: 74,
            y: 60,
            fact: "The plan of the city depicted an area two miles square divided into lots of one-half acre.",
          },
        ],
      },
      {
        kind: "scene",
        id: "trees",
        kicker: "1854",
        title: "Renamed for the cemetery",
        partLabel: "the cemetery",
        art: art(
          "m4068-trees.jpg",
          "Illustration of a cemetery and an elm avenue. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "cemetery",
            label: "1854",
            x: 30,
            y: 62,
            fact: "Elmwood Cemetery was incorporated in 1854.",
          },
          {
            id: "renamed",
            label: "Shortly after 1872",
            x: 74,
            y: 46,
            fact: "Upper Street was renamed Elmwood Avenue shortly after 1872 for adjacent Elmwood Cemetery.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1786",
        title: "Acres reserved for public buildings",
        partLabel: "eight acres",
        value: 8,
        unit: "acres",
        meant:
          "What this meant: the plan of the city reserved eight acres for erecting public buildings.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4068-street.jpg",
          "Illustration of a town edge and a grid of lots. Not a historical photograph.",
        ),
        nowArt: art(
          "m4068-today.jpg",
          "Illustration of a marker on a tree-lined avenue. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a planned town street, for Upper Street, which the marker says was the northernmost street in the original 1786 Columbia plan. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a tree-lined avenue. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "plan",
            year: "1786",
            label: "Upper Street is the northernmost street in the Columbia plan.",
            why: "The marker says this street, originally named Upper Street, was the northernmost street in the original 1786 Columbia plan.",
          },
          {
            id: "cemetery",
            year: "1854",
            label: "Elmwood Cemetery is incorporated.",
            why: "The marker says Elmwood Cemetery was incorporated in 1854.",
          },
          {
            id: "renamed",
            year: "Shortly after 1872",
            label: "Upper Street is renamed Elmwood Avenue.",
            why: "The marker says Upper Street was renamed Elmwood Avenue shortly after 1872 for the adjacent cemetery.",
          },
        ],
        ["renamed", "plan", "cemetery"],
      ),
      takeaway([
        "This street, originally named Upper Street, was the northernmost street in the original 1786 Columbia plan.",
        "The plan depicted an area two miles square divided into lots of one-half acre, and eight acres were reserved for erecting public buildings.",
        "Upper Street was renamed Elmwood Avenue shortly after 1872 for adjacent Elmwood Cemetery, which was incorporated in 1854.",
      ]),
    ],
  ),
  lesson(
    "40-69",
    "A president's boyhood home",
    "Wilson House timeline",
    [
      cited("40-69", "Wilson House", "front"),
      span(
        '"4 years" is 1874 minus 1870, the years the marker prints for the Reverend Wilson as professor at Columbia Theological Seminary.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "By 1872",
        title: "Built as a boyhood home",
        partLabel: "the house",
        art: art(
          "m4069-house.jpg",
          "Illustration of a finished house and a timber frame. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "By 1872",
            x: 32,
            y: 52,
            fact: "Built by 1872, this house was the boyhood home of Woodrow Wilson (1856-1924), twenty-eighth President of the United States (1913-21).",
          },
          {
            id: "parents",
            label: "His parents",
            x: 74,
            y: 46,
            fact: "It was constructed by his parents, the Reverend Joseph Ruggles Wilson and Jessie Woodrow Wilson, when they lived in Columbia.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1870",
        title: "Seminary and First Presbyterian",
        partLabel: "his father's posts",
        art: art(
          "m4069-yard.jpg",
          "Illustration of a seminary building and a church across a yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "seminary",
            label: "1870-1874",
            x: 32,
            y: 50,
            fact: "The Reverend Wilson was a professor at Columbia Theological Seminary from 1870 to 1874.",
          },
          {
            id: "church",
            label: "1871-1873",
            x: 75,
            y: 48,
            fact: "He was minister of Columbia's First Presbyterian Church from 1871 to 1873.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1870-1874",
        title: "Years as a seminary professor",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1874 comes 4 years after 1870. That is the stretch the marker gives for the Reverend Wilson as a professor at Columbia Theological Seminary.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4069-house.jpg",
          "Illustration of a finished house and a timber frame. Not a historical photograph.",
        ),
        nowArt: art(
          "m4069-today.jpg",
          "Illustration of a marker in a house yard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wood house, for the house the marker says was built by 1872 as Woodrow Wilson's boyhood home. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker in a house yard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "professor",
            year: "1870",
            label: "The Reverend Wilson is a professor at Columbia Theological Seminary.",
            why: "The marker says he was a professor at Columbia Theological Seminary from 1870 to 1874.",
          },
          {
            id: "minister",
            year: "1871",
            label: "He is minister of Columbia's First Presbyterian Church.",
            why: "The marker says he was minister of Columbia's First Presbyterian Church from 1871 to 1873.",
          },
          {
            id: "built",
            year: "By 1872",
            label: "This house is built.",
            why: "The marker says the house was built by 1872. It was the boyhood home of Woodrow Wilson and was constructed by his parents when they lived in Columbia.",
          },
          {
            id: "president",
            year: "1913",
            label: "The marker dates his presidency to 1913-21.",
            why: "The marker calls Woodrow Wilson twenty-eighth President of the United States (1913-21). It gives his years as 1856-1924.",
          },
        ],
        ["president", "built", "professor", "minister"],
      ),
      takeaway([
        "Built by 1872, this house was the boyhood home of Woodrow Wilson (1856-1924), twenty-eighth President of the United States (1913-21).",
        "It was constructed by his parents, the Reverend Joseph Ruggles Wilson and Jessie Woodrow Wilson, when they lived in Columbia.",
        "The Reverend Wilson was a professor at Columbia Theological Seminary from 1870 to 1874 and minister of Columbia's First Presbyterian Church from 1871 to 1873.",
      ]),
    ],
  ),
];
