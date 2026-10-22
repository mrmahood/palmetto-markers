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

export const greenvilleLessonsL: MarkerLesson[] = [
  lesson(
    "23-53",
    "A second frame sanctuary for about 250",
    "Cedar Grove Baptist Church timeline",
    [
      cited("23-53", "Cedar Grove Baptist Church", "front and back"),
      span(
        '"48 years" is 1986 minus 1938, the years the marker prints for the dedication of the present brick church and the second frame sanctuary.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "arbor",
        kicker: "Shortly after the Civil War",
        title: "First services in a brush arbor",
        partLabel: "the brush arbor",
        art: art(
          "m2353-arbor.jpg",
          "Illustration of a brush arbor and a rough wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "After the Civil War",
            x: 32,
            y: 54,
            fact: "According to tradition, this African-American church was organized by Rev. Tom Jones shortly after the Civil War. It held its first services in a brush arbor, then built its first permanent church here.",
          },
          {
            id: "sanctuary",
            label: "1938",
            x: 74,
            y: 36,
            fact: "The congregation, with a membership of about 250, built a second frame sanctuary in 1938 at a cost of $3,000. It was covered in brick veneer in 1962. The present brick church was dedicated in 1986.",
          },
        ],
      },
      {
        kind: "scene",
        id: "school",
        kicker: "1891-92",
        title: "A school on the present church site",
        partLabel: "the school",
        art: art(
          "m2353-school.jpg",
          "Illustration of a wooden school beside a small church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "association",
            label: "1891-92",
            x: 32,
            y: 48,
            fact: "The Reedy River Baptist Association built a school for the African-American children of Simpsonville and other area communities here in 1891-92, on the present site of the church.",
          },
          {
            id: "rosenwald",
            label: "1923-24",
            x: 74,
            y: 34,
            fact: "In 1923-24 the Simpsonville Rosenwald School, an eight-room elementary and high school, was built nearby. One of about 500 schools in S.C. funded in part by the Julius Rosenwald Foundation 1917-1932, it closed after the 1953-54 school year.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1938-1986",
        title: "Years from the second sanctuary to the present church",
        partLabel: "48 years",
        value: 48,
        unit: "years",
        meant:
          "What this meant: 1986 comes 48 years after 1938. That is the stretch from the year the congregation built a second frame sanctuary to the year the present brick church was dedicated.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2353-arbor.jpg",
          "Illustration of a brush arbor and a rough wooden church. Not a historical photograph.",
        ),
        nowArt: art(
          "m2353-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brush arbor, for the first services the marker says the church held shortly after the Civil War. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "association",
            year: "1891-92",
            label: "The Reedy River Baptist Association builds a school here.",
            why: "The marker says the Reedy River Baptist Association built a school for the African-American children of Simpsonville and other area communities here in 1891-92, on the present site of the church.",
          },
          {
            id: "rosenwald",
            year: "1923-24",
            label: "The Simpsonville Rosenwald School is built nearby.",
            why: "The marker says that in 1923-24 the Simpsonville Rosenwald School, an eight-room elementary and high school, was built nearby, and that it closed after the 1953-54 school year.",
          },
          {
            id: "sanctuary",
            year: "1938",
            label: "The congregation builds a second frame sanctuary.",
            why: "The marker says the congregation, with a membership of about 250, built a second frame sanctuary in 1938 at a cost of $3,000.",
          },
          {
            id: "dedicated",
            year: "1986",
            label: "The present brick church is dedicated.",
            why: "The marker says the present brick church was dedicated in 1986.",
          },
        ],
        ["sanctuary", "association", "dedicated", "rosenwald"],
      ),
      takeaway([
        "According to tradition, this African-American church was organized by Rev. Tom Jones shortly after the Civil War.",
        "The congregation, with a membership of about 250, built a second frame sanctuary in 1938 at a cost of $3,000.",
        "In 1923-24 the Simpsonville Rosenwald School, an eight-room elementary and high school, was built nearby.",
      ]),
    ],
  ),
  lesson(
    "23-54",
    "Four generations on Princess Creek",
    "Suber's Mill timeline",
    [cited("23-54", "Suber's Mill", "front and back")],
    [
      {
        kind: "scene",
        id: "creek",
        kicker: "Shortly after the Civil War",
        title: "A grist mill on Princess Creek",
        partLabel: "the creek mill",
        art: art(
          "m2354-creek.jpg",
          "Illustration of a wooden mill beside a rocky creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "generations",
            label: "Four generations",
            x: 32,
            y: 52,
            fact: "Four generations of the Suber family have owned and operated a water-powered grist mill on Princess Creek, a branch of the Enoree River, since shortly after the Civil War.",
          },
          {
            id: "james",
            label: "1826-1923",
            x: 74,
            y: 36,
            fact: "James A. Suber (1826-1923) ran a sawmill and whiskey still a short distance upstream before serving in the Confederate army, and added a grist mill at that site soon after he returned to Greenville County.",
          },
        ],
      },
      {
        kind: "scene",
        id: "wheel",
        kicker: "1908-1912",
        title: "Walter Hillary Suber builds this mill",
        partLabel: "this mill",
        art: art(
          "m2354-mill.jpg",
          "Illustration of a wooden grist mill with a water wheel. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1908-1912",
            x: 32,
            y: 46,
            fact: "Suber’s Mill is one of the only water-powered mills still grinding corn and selling corn meal in S.C. James Suber’s son Walter Hillary Suber (1860-1952) built this mill between 1908 and 1912; it has been in almost continuous operation since.",
          },
          {
            id: "family",
            label: "1955",
            x: 74,
            y: 58,
            fact: "Though occasionally run by renters, it has been run by the family since 1955, beginning with Walter H. Suber, Jr. (1915-2010).",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Four generations",
        title: "Generations at the grist mill",
        partLabel: "four generations",
        value: 4,
        unit: "generations",
        meant:
          "What this meant: the marker says four generations of the Suber family have owned and operated a water-powered grist mill on Princess Creek, a branch of the Enoree River, since shortly after the Civil War.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2354-mill.jpg",
          "Illustration of a wooden grist mill with a water wheel. Not a historical photograph.",
        ),
        nowArt: art(
          "m2354-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden grist mill, for the mill the marker says Walter Hillary Suber built between 1908 and 1912. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "sawmill",
            year: "Before the Confederate army",
            label: "James A. Suber runs a sawmill and whiskey still upstream.",
            why: "The marker says James A. Suber (1826-1923) ran a sawmill and whiskey still a short distance upstream before serving in the Confederate army.",
          },
          {
            id: "added",
            year: "After the Civil War",
            label: "James A. Suber adds a grist mill after he returns.",
            why: "The marker says James A. Suber (1826-1923) added a grist mill at that site soon after he returned to Greenville County.",
          },
          {
            id: "built",
            year: "1908-1912",
            label: "Walter Hillary Suber builds this mill.",
            why: "The marker says James Suber’s son Walter Hillary Suber (1860-1952) built this mill between 1908 and 1912; it has been in almost continuous operation since.",
          },
          {
            id: "family",
            year: "1955",
            label: "The family runs the mill, beginning with Walter H. Suber, Jr.",
            why: "The marker says that though occasionally run by renters, it has been run by the family since 1955, beginning with Walter H. Suber, Jr. (1915-2010).",
          },
        ],
        ["built", "sawmill", "family", "added"],
      ),
      takeaway([
        "Four generations of the Suber family have owned and operated a water-powered grist mill on Princess Creek, a branch of the Enoree River, since shortly after the Civil War.",
        "Suber’s Mill is one of the only water-powered mills still grinding corn and selling corn meal in S.C.",
        "Though occasionally run by renters, it has been run by the family since 1955, beginning with Walter H. Suber, Jr. (1915-2010).",
      ]),
    ],
  ),
  lesson(
    "23-55",
    "Stood here from 1898 to 2002",
    "Fountain Inn Cotton Mill timeline",
    [
      cited("23-55", "Fountain Inn Cotton Mill", "front and back"),
      span(
        '"104 years" is 2002 minus 1898, the years the marker prints for Fountain Inn Cotton Mill, which stood here from 1898 to 2002.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1898",
        title: "The Graham brothers' cotton mill",
        partLabel: "the cotton mill",
        art: art(
          "m2355-mill.jpg",
          "Illustration of a brick cotton mill with a tall chimney. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "graham",
            label: "1898",
            x: 32,
            y: 46,
            fact: "Fountain Inn Cotton Mill, which stood here from 1898 to 2002, was first owned and operated by brothers A.J., C.E., R.L., and W.J. Graham. Built with 5,000 spindles, it expanded to 10,000 spindles and later to 17,000 spindles, making cotton yarns and cloth.",
          },
          {
            id: "woodside",
            label: "1906",
            x: 74,
            y: 34,
            fact: "In 1906 textile mill entrepreneur John T. Woodside bought the mill from the Grahams. A few years later it was described as “among the best mills in the South.”",
          },
        ],
      },
      {
        kind: "scene",
        id: "village",
        kicker: "1907",
        title: "A mill village of eighty houses",
        partLabel: "the mill village",
        art: art(
          "m2355-village.jpg",
          "Illustration of a mill village of small houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "employees",
            label: "1907",
            x: 32,
            y: 56,
            fact: "This mill had 250 employees in 1907, with a population of 450 in a mill village of eighty houses that included a company store, recreation building, baseball field, and two churches. The two-room school operated until 1924.",
          },
          {
            id: "merged",
            label: "1911",
            x: 74,
            y: 38,
            fact: "In 1911 this mill was merged with mills in Greenville and Simpsonville to create Woodside Cotton Mills. Sold to Dan River Mills in 1956, this mill was closed in 1983 and was demolished in 2002.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1898-2002",
        title: "Years the mill stood here",
        partLabel: "104 years",
        value: 104,
        unit: "years",
        meant:
          "What this meant: 2002 comes 104 years after 1898. That is the stretch the marker gives for Fountain Inn Cotton Mill, which stood here from 1898 to 2002.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2355-mill.jpg",
          "Illustration of a brick cotton mill with a tall chimney. Not a historical photograph.",
        ),
        nowArt: art(
          "m2355-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick cotton mill, for the mill the marker says stood here from 1898 to 2002. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "graham",
            year: "1898",
            label: "The Graham brothers own and operate the mill.",
            why: "The marker says Fountain Inn Cotton Mill, which stood here from 1898 to 2002, was first owned and operated by brothers A.J., C.E., R.L., and W.J. Graham.",
          },
          {
            id: "woodside",
            year: "1906",
            label: "John T. Woodside buys the mill from the Grahams.",
            why: "The marker says that in 1906 textile mill entrepreneur John T. Woodside bought the mill from the Grahams.",
          },
          {
            id: "closed",
            year: "1983",
            label: "The mill is closed.",
            why: "The marker says this mill was sold to Dan River Mills in 1956, was closed in 1983, and was demolished in 2002.",
          },
          {
            id: "demolished",
            year: "2002",
            label: "The mill is demolished.",
            why: "The marker says this mill was demolished in 2002. It had stood here from 1898 to 2002.",
          },
        ],
        ["closed", "graham", "demolished", "woodside"],
      ),
      takeaway([
        "Fountain Inn Cotton Mill, which stood here from 1898 to 2002, was first owned and operated by brothers A.J., C.E., R.L., and W.J. Graham.",
        "This mill had 250 employees in 1907, with a population of 450 in a mill village of eighty houses that included a company store, recreation building, baseball field, and two churches.",
        "Sold to Dan River Mills in 1956, this mill was closed in 1983 and was demolished in 2002.",
      ]),
    ],
  ),
  lesson(
    "23-56",
    "As many as 83 students in grades 1-7",
    "Old Pilgrim Baptist Church timeline",
    [
      cited("23-56", "Old Pilgrim Baptist Church", "front and back"),
      span(
        '"24 years" is 1954 minus 1930, the years the marker prints for Old Pilgrim Rosenwald School, which operated 1930-1954.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "arbor",
        kicker: "1868",
        title: "Founded in a brush arbor",
        partLabel: "the brush arbor",
        art: art(
          "m2356-arbor.jpg",
          "Illustration of a brush arbor and a log church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1868",
            x: 32,
            y: 50,
            fact: "This church was founded in 1868 by black members of nearby Clear Spring Baptist Church who named their new church Pilgrim Baptist Church. Rev. John Abraham, their first pastor, held services in a brush arbor until a log church was built here.",
          },
          {
            id: "frame",
            label: "1907",
            x: 74,
            y: 36,
            fact: "It was renamed Old Pilgrim Baptist Church in 1894. A frame church built here in 1907 was covered in brick veneer in 1962. The present brick church was built in 1983.",
          },
        ],
      },
      {
        kind: "scene",
        id: "school",
        kicker: "1930-1954",
        title: "Old Pilgrim Rosenwald School",
        partLabel: "the Rosenwald school",
        art: art(
          "m2356-school.jpg",
          "Illustration of a small frame schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rosenwald",
            label: "1930",
            x: 32,
            y: 48,
            fact: "Old Pilgrim Rosenwald School, named for the church, was built in 1930. It was one of almost 500 schools in S.C. funded in part by the Julius Rosenwald Foundation from 1917 to 1932.",
          },
          {
            id: "students",
            label: "83 students",
            x: 74,
            y: 40,
            fact: "Built at a cost of $3,800 with local funds raised by Henry Locke and trustees of Old Pilgrim Baptist Church, it operated 1930-1954 with three teachers, teaching as many as 83 elementary school students in grades 1-7.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1930-1954",
        title: "Years the Rosenwald school operated",
        partLabel: "24 years",
        value: 24,
        unit: "years",
        meant:
          "What this meant: 1954 comes 24 years after 1930. That is the stretch the marker gives for Old Pilgrim Rosenwald School, which operated 1930-1954.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2356-school.jpg",
          "Illustration of a small frame schoolhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m2356-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame schoolhouse, for the school the marker says operated 1930-1954. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1868",
            label: "Black members of Clear Spring found Pilgrim Baptist Church.",
            why: "The marker says this church was founded in 1868 by black members of nearby Clear Spring Baptist Church who named their new church Pilgrim Baptist Church.",
          },
          {
            id: "renamed",
            year: "1894",
            label: "The church is renamed Old Pilgrim Baptist Church.",
            why: "The marker says it was renamed Old Pilgrim Baptist Church in 1894.",
          },
          {
            id: "frame",
            year: "1907",
            label: "A frame church is built here.",
            why: "The marker says a frame church built here in 1907 was covered in brick veneer in 1962.",
          },
          {
            id: "present",
            year: "1983",
            label: "The present brick church is built.",
            why: "The marker says the present brick church was built in 1983.",
          },
        ],
        ["frame", "present", "founded", "renamed"],
      ),
      takeaway([
        "This church was founded in 1868 by black members of nearby Clear Spring Baptist Church who named their new church Pilgrim Baptist Church.",
        "It was renamed Old Pilgrim Baptist Church in 1894.",
        "Built at a cost of $3,800 with local funds raised by Henry Locke and trustees of Old Pilgrim Baptist Church, it operated 1930-1954 with three teachers, teaching as many as 83 elementary school students in grades 1-7.",
      ]),
    ],
  ),
];
