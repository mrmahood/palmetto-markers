import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Lower Richland sites. Facts are from that marker only.
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

export const richlandLessonsAG: MarkerLesson[] = [
  lesson(
    "40-169",
    "A turnout named for the family",
    "Hopkins timeline",
    [
      cited("40-169", "Hopkins [Marker #2]", "front and back"),
      span(
        '"6 years" is 1842 minus 1836, the years the marker prints for the completion of the South Carolina RR line from Kingville to Columbia and the naming of Hopkins\' Turnout.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "town",
        kicker: "1764",
        title: "A community around a plantation",
        partLabel: "the plantation community",
        art: art(
          "m40169-town.jpg",
          "Illustration of a plantation house and farm outbuildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "settled",
            label: "John Hopkins",
            x: 32,
            y: 52,
            fact: "This rural community grew up around the plantation of John Hopkins (1739-1775). Hopkins, a native of Virginia, settled here in 1764.",
          },
          {
            id: "congress",
            label: "1775",
            x: 74,
            y: 40,
            fact: "A surveyor and planter, he was later a delegate to the First Provincial Congress of 1775.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1836-1842",
        title: "A turntable named Hopkins' Turnout",
        partLabel: "the rail yard",
        art: art(
          "m40169-yard.jpg",
          "Illustration of a rail turntable and a plain depot. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "turnout",
            label: "1836-1842",
            x: 32,
            y: 48,
            fact: "Between 1836 and 1842, when the South Carolina RR line from Kingville to Columbia was completed, a turntable was named Hopkins' Turnout for the family. The Hopkins' Turnout post office opened in 1849.",
          },
          {
            id: "markets",
            label: "1871",
            x: 74,
            y: 58,
            fact: "After the Civil War many freedmen, freedwomen, and their families settled in the area, some farming land they had purchased during Reconstruction from the S.C. Land Commission. The completion of the Wilmington, Columbia, & Augusta RR in 1871 expanded area markets, until the agricultural depression of the 1920s weakened the local economy.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1836-1842",
        title: "Years in that railroad span",
        partLabel: "6 years",
        value: 6,
        unit: "years",
        meant:
          "What this meant: 1842 comes 6 years after 1836. That is the stretch the marker prints for the completion of the South Carolina RR line from Kingville to Columbia, when a turntable was named Hopkins' Turnout.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40169-town.jpg",
          "Illustration of a plantation house and farm outbuildings. Not a historical photograph.",
        ),
        nowArt: art(
          "m40169-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plantation house and farm outbuildings, for the rural community the marker says grew up around the plantation of John Hopkins. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "settled",
            year: "1764",
            label: "John Hopkins settles here.",
            why: "The marker says Hopkins, a native of Virginia, settled here in 1764. The rural community grew up around his plantation. The marker gives his years as 1739-1775.",
          },
          {
            id: "turnout",
            year: "1842",
            label: "A turntable is named Hopkins' Turnout.",
            why: "The marker says that between 1836 and 1842, when the South Carolina RR line from Kingville to Columbia was completed, a turntable was named Hopkins' Turnout for the family.",
          },
          {
            id: "office",
            year: "1849",
            label: "The Hopkins' Turnout post office opens.",
            why: "The marker says the Hopkins' Turnout post office opened in 1849.",
          },
          {
            id: "markets",
            year: "1871",
            label: "The Wilmington, Columbia, & Augusta RR is completed.",
            why: "The marker says the completion of the Wilmington, Columbia, & Augusta RR in 1871 expanded area markets.",
          },
        ],
        ["markets", "settled", "office", "turnout"],
      ),
      takeaway([
        "This rural community grew up around the plantation of John Hopkins (1739-1775). Hopkins, a native of Virginia, settled here in 1764. A surveyor and planter, he was later a delegate to the First Provincial Congress of 1775.",
        "Between 1836 and 1842, when the South Carolina RR line from Kingville to Columbia was completed, a turntable was named Hopkins' Turnout for the family. The Hopkins' Turnout post office opened in 1849.",
        "After the Civil War many freedmen, freedwomen, and their families settled in the area, some farming land they had purchased during Reconstruction from the S.C. Land Commission. The completion of the Wilmington, Columbia, & Augusta RR in 1871 expanded area markets, until the agricultural depression of the 1920s weakened the local economy.",
      ]),
    ],
  ),
  lesson(
    "40-170",
    "East and over from Columbia",
    "Eastover timeline",
    [
      cited("40-170", "Eastover", "front and back"),
      span(
        '"27 years" is 1907 minus 1880, the years the marker prints for the incorporation of the town and its charter.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "town",
        kicker: "1871",
        title: "A town after the railroad",
        partLabel: "the town and the tracks",
        art: art(
          "m40170-town.jpg",
          "Illustration of a small town and a railroad line. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "East and over",
            x: 32,
            y: 46,
            fact: 'Eastover, so named for being "east and over" from Columbia, was a small rural community of the mid-19th century that grew into a town after the Wilmington, Columbia, & Augusta RR completed its line through this area in 1871.',
          },
          {
            id: "chartered",
            label: "1880 and 1907",
            x: 74,
            y: 58,
            fact: "The town, chartered in 1880, was incorporated in 1907 with its limits designated as one-half mile in each direction from the tracks through the center of town.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1910",
        title: "The only incorporated town outside Columbia",
        partLabel: "the stores and the gin",
        art: art(
          "m40170-street.jpg",
          "Illustration of plain store buildings and a cotton gin. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "boasted",
            label: "By 1910",
            x: 32,
            y: 50,
            fact: "Railroad lines to and through Lower Richland County allowed local markets to expand and farmers and merchants to prosper. By 1910 Eastover, then the only incorporated town in the county outside of Columbia, boasted a post office, a bank, several stores, and a cotton gin.",
          },
          {
            id: "plant",
            label: "1984",
            x: 74,
            y: 40,
            fact: "In 1984 Union Camp, later International Paper, opened a pulp and paper plant near the town.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1880-1907",
        title: "Years from charter to incorporation",
        partLabel: "27 years",
        value: 27,
        unit: "years",
        meant:
          "What this meant: 1907 comes 27 years after 1880. That is the stretch from the year the town was chartered to the year it was incorporated.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40170-town.jpg",
          "Illustration of a small town and a railroad line. Not a historical photograph.",
        ),
        nowArt: art(
          "m40170-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small town and a railroad, for the community the marker says grew into a town after the line was completed in 1871. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "line",
            year: "1871",
            label: "The railroad line is completed through this area.",
            why: "The marker says Eastover grew into a town after the Wilmington, Columbia, & Augusta RR completed its line through this area in 1871. It was so named for being east and over from Columbia.",
          },
          {
            id: "chartered",
            year: "1880",
            label: "The town is chartered.",
            why: "The marker says the town was chartered in 1880.",
          },
          {
            id: "incorporated",
            year: "1907",
            label: "The town is incorporated.",
            why: "The marker says the town was incorporated in 1907 with its limits designated as one-half mile in each direction from the tracks through the center of town.",
          },
          {
            id: "plant",
            year: "1984",
            label: "Union Camp opens a pulp and paper plant near the town.",
            why: "The marker says that in 1984 Union Camp, later International Paper, opened a pulp and paper plant near the town.",
          },
        ],
        ["plant", "line", "incorporated", "chartered"],
      ),
      takeaway([
        'Eastover, so named for being "east and over" from Columbia, was a small rural community of the mid-19th century that grew into a town after the Wilmington, Columbia, & Augusta RR completed its line through this area in 1871.',
        "The town, chartered in 1880, was incorporated in 1907 with its limits designated as one-half mile in each direction from the tracks through the center of town.",
        "Railroad lines to and through Lower Richland County allowed local markets to expand and farmers and merchants to prosper. By 1910 Eastover, then the only incorporated town in the county outside of Columbia, boasted a post office, a bank, several stores, and a cotton gin. In 1984 Union Camp, later International Paper, opened a pulp and paper plant near the town.",
      ]),
    ],
  ),
  lesson(
    "40-172",
    "A two-room school built in 1923",
    "Pine Grove Rosenwald School timeline",
    [cited("40-172", "Pine Grove Rosenwald School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1923",
        title: "Built as a two-room school",
        partLabel: "the schoolhouse",
        art: art(
          "m40172-school.jpg",
          "Illustration of a two-room schoolhouse and a schoolyard pump. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1923",
            x: 32,
            y: 46,
            fact: "This school, built in 1923 at a cost of $2,500, is one of 500 African-American schools in S.C. funded in part by the Julius Rosenwald Foundation from 1917 to 1932.",
          },
          {
            id: "students",
            label: "Grades 1-7",
            x: 74,
            y: 58,
            fact: "It is a two-room school typical of smaller Rosenwald schools. From 1923 to 1950 an average of 40-50 students a year attended this school, in grades 1-7.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1949-50",
        title: "Closed, sold, and listed",
        partLabel: "the schoolyard later",
        art: art(
          "m40172-yard.jpg",
          "Illustration of an empty schoolhouse and an open pavilion. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "closed",
            label: "1949-50",
            x: 32,
            y: 50,
            fact: "This school closed after the 1949-50 school year, when many districts were consolidated.",
          },
          {
            id: "later",
            label: "1968, 2002, 2009",
            x: 74,
            y: 40,
            fact: "It was sold to the Pine Grove Community Development Club in 1968, then to the Richland County Recreation Commission in 2002. Pine Grove Rosenwald School was listed in the National Register of Historic Places in 2009.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1923",
        title: "What the school cost",
        partLabel: "2,500 dollars",
        value: 2500,
        unit: "dollars",
        meant:
          "What this meant: the marker says this school was built in 1923 at a cost of $2,500.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40172-school.jpg",
          "Illustration of a two-room schoolhouse and a schoolyard pump. Not a historical photograph.",
        ),
        nowArt: art(
          "m40172-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-room schoolhouse, for the school the marker says was built in 1923. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1923",
            label: "The school is built.",
            why: "The marker says this school was built in 1923 at a cost of $2,500. It is one of 500 African-American schools in S.C. funded in part by the Julius Rosenwald Foundation from 1917 to 1932, a two-room school typical of smaller Rosenwald schools.",
          },
          {
            id: "closed",
            year: "1949-50",
            label: "The school closes after that school year.",
            why: "The marker says this school closed after the 1949-50 school year, when many districts were consolidated. From 1923 to 1950 an average of 40-50 students a year attended this school, in grades 1-7.",
          },
          {
            id: "club",
            year: "1968",
            label: "It is sold to the Pine Grove Community Development Club.",
            why: "The marker says it was sold to the Pine Grove Community Development Club in 1968, then to the Richland County Recreation Commission in 2002.",
          },
          {
            id: "listed",
            year: "2009",
            label: "It is listed in the National Register of Historic Places.",
            why: "The marker says Pine Grove Rosenwald School was listed in the National Register of Historic Places in 2009.",
          },
        ],
        ["listed", "built", "club", "closed"],
      ),
      takeaway([
        "This school, built in 1923 at a cost of $2,500, is one of 500 African-American schools in S.C. funded in part by the Julius Rosenwald Foundation from 1917 to 1932.",
        "It is a two-room school typical of smaller Rosenwald schools. From 1923 to 1950 an average of 40-50 students a year attended this school, in grades 1-7.",
        "This school closed after the 1949-50 school year, when many districts were consolidated. It was sold to the Pine Grove Community Development Club in 1968, then to the Richland County Recreation Commission in 2002. Pine Grove Rosenwald School was listed in the National Register of Historic Places in 2009.",
      ]),
    ],
  ),
  lesson(
    "40-175",
    "Lived here from 1960 until his death",
    "I. DeQuincy Newman House timeline",
    [
      cited("40-175", "I. DeQuincy Newman House", "front and back"),
      span(
        '"95 years" is 1983 minus 1888, the years the marker prints for Newman becoming the first black member of the S.C. Senate since 1888.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1960",
        title: "The house he lived in",
        partLabel: "the house",
        art: art(
          "m40175-house.jpg",
          "Illustration of a modest house and its porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lived",
            label: "1960 until his death",
            x: 32,
            y: 48,
            fact: "Isaiah DeQuincey Newman (1911-1985), Methodist minister, civil rights leader, and state senator, lived here from 1960 until his death.",
          },
          {
            id: "pastor",
            label: "Colleges and the pastorate",
            x: 74,
            y: 40,
            fact: "Born in Darlington County, he attended Claflin College and was a graduate of Clark College and Gammon Theological Seminary. Newman, a long-time pastor, was also a major figure in the Civil Rights Movement in S.C. for more than forty years, beginning in the 1940s.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1943",
        title: "NAACP work and the Senate",
        partLabel: "the yard of the house",
        art: art(
          "m40175-yard.jpg",
          "Illustration of a house yard and a shade tree. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "branch",
            label: "1943 and 1960-69",
            x: 32,
            y: 54,
            fact: "In 1943 Newman helped found the Orangeburg branch of the National Association for the Advancement of Colored People. State field director of the S.C. NAACP 1960-69, he later advised governors and Congressmen on poverty and on improving housing and medical care in S.C.",
          },
          {
            id: "senate",
            label: "1983",
            x: 74,
            y: 42,
            fact: "In 1983 Newman became the first black member of the S.C. Senate since 1888. He resigned in 1985 because of ill health and died a few months later.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1888-1983",
        title: "Years in that Senate sentence",
        partLabel: "95 years",
        value: 95,
        unit: "years",
        meant:
          "What this meant: 1983 comes 95 years after 1888. Those are the years the marker prints for Newman becoming the first black member of the S.C. Senate since 1888.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40175-house.jpg",
          "Illustration of a modest house and its porch. Not a historical photograph.",
        ),
        nowArt: art(
          "m40175-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a modest house, for the house the marker says Isaiah DeQuincey Newman lived in from 1960 until his death. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "branch",
            year: "1943",
            label: "He helps found the Orangeburg branch of the NAACP.",
            why: "The marker says that in 1943 Newman helped found the Orangeburg branch of the National Association for the Advancement of Colored People.",
          },
          {
            id: "lived",
            year: "1960",
            label: "He lives here and directs the S.C. NAACP.",
            why: "The marker says he lived here from 1960 until his death, and that he was state field director of the S.C. NAACP 1960-69.",
          },
          {
            id: "senate",
            year: "1983",
            label: "He becomes the first black member of the S.C. Senate since 1888.",
            why: "The marker says that in 1983 Newman became the first black member of the S.C. Senate since 1888.",
          },
          {
            id: "resigned",
            year: "1985",
            label: "He resigns because of ill health and dies a few months later.",
            why: "The marker says he resigned in 1985 because of ill health and died a few months later. It gives his years as 1911-1985.",
          },
        ],
        ["resigned", "branch", "senate", "lived"],
      ),
      takeaway([
        "Isaiah DeQuincey Newman (1911-1985), Methodist minister, civil rights leader, and state senator, lived here from 1960 until his death. Born in Darlington County, he attended Claflin College and was a graduate of Clark College and Gammon Theological Seminary.",
        "Newman, a long-time pastor, was also a major figure in the Civil Rights Movement in S.C. for more than forty years, beginning in the 1940s. In 1943 Newman helped found the Orangeburg branch of the National Association for the Advancement of Colored People.",
        "State field director of the S.C. NAACP 1960-69, he later advised governors and Congressmen on poverty and on improving housing and medical care in S.C. In 1983 Newman became the first black member of the S.C. Senate since 1888. He resigned in 1985 because of ill health and died a few months later.",
      ]),
    ],
  ),
];
