import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Richland County sites. Facts are from that marker only.
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

export const richlandLessonsAA: MarkerLesson[] = [
  lesson(
    "40-138",
    "A frame sanctuary built in 1856",
    "Sandy Level timeline",
    [
      cited("40-138", "Sandy Level Baptist Church", "front and back"),
      span(
        '"94 years" is 1950 minus 1856, the years the marker prints for the rear addition and the frame sanctuary.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1856",
        title: "A frame sanctuary and a rear addition",
        partLabel: "the sanctuary",
        art: art(
          "m40138-church.jpg",
          "Illustration of a frame church with a portico and a rear wing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Built in 1856",
            x: 32,
            y: 48,
            fact: "This frame sanctuary, built in 1856 during the pastorate of Rev. A.K. Durham, was described at its dedication as being the result of “the liberal contributions and unfaltering zeal of this community.” Notable features include its large inset portico and interior gallery.",
          },
          {
            id: "addition",
            label: "Rear addition, 1950",
            x: 74,
            y: 42,
            fact: "The rear addition was built in 1950 to house the Sunday School and baptistry.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "Before 1772",
        title: "Organized, renamed, then moved here",
        partLabel: "the churchyard",
        art: art(
          "m40138-yard.jpg",
          "Illustration of a churchyard and a distant meetinghouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Before 1772",
            x: 32,
            y: 50,
            fact: "Twenty-Five Mile Creek Church, a Primitive Baptist congregation, was organized in this area before 1772. The mother church for several area Baptist churches, it was renamed Sandfield ca. 1830 and stood about 3 mi. E.",
          },
          {
            id: "moved",
            label: "Moved in 1856",
            x: 74,
            y: 44,
            fact: "Sandfield Baptist Church was renamed Sandy Level Baptist Church in 1843 and the congregation moved to this site in 1856.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1856-1950",
        title: "Years from the sanctuary to the rear addition",
        partLabel: "94 years",
        value: 94,
        unit: "years",
        meant:
          "What this meant: 1950 comes 94 years after 1856. That is the stretch from the year the frame sanctuary was built to the year the marker prints for the rear addition.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40138-church.jpg",
          "Illustration of a frame church with a portico and a rear wing. Not a historical photograph.",
        ),
        nowArt: art(
          "m40138-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame church, for the sanctuary the marker says was built in 1856. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "Before 1772",
            label: "Twenty-Five Mile Creek Church is organized.",
            why: "The marker says Twenty-Five Mile Creek Church, a Primitive Baptist congregation, was organized in this area before 1772.",
          },
          {
            id: "sandfield",
            year: "ca. 1830",
            label: "It is renamed Sandfield.",
            why: "The marker says it was the mother church for several area Baptist churches, was renamed Sandfield ca. 1830, and stood about 3 mi. E.",
          },
          {
            id: "renamed",
            year: "1843",
            label: "It is renamed Sandy Level Baptist Church.",
            why: "The marker says Sandfield Baptist Church was renamed Sandy Level Baptist Church in 1843.",
          },
          {
            id: "built",
            year: "1856",
            label: "The congregation moves here and the frame sanctuary is built.",
            why: "The marker says the congregation moved to this site in 1856, and this frame sanctuary was built in 1856 during the pastorate of Rev. A.K. Durham.",
          },
        ],
        ["built", "renamed", "organized", "sandfield"],
      ),
      takeaway([
        "Twenty-Five Mile Creek Church, a Primitive Baptist congregation, was organized in this area before 1772. The mother church for several area Baptist churches, it was renamed Sandfield ca. 1830 and stood about 3 mi. E.",
        "Sandfield Baptist Church was renamed Sandy Level Baptist Church in 1843 and the congregation moved to this site in 1856. This frame sanctuary, built in 1856 during the pastorate of Rev. A.K. Durham, was described at its dedication as being the result of “the liberal contributions and unfaltering zeal of this community.”",
        "Notable features include its large inset portico and interior gallery. The rear addition was built in 1950 to house the Sunday School and baptistry.",
      ]),
    ],
  ),
  lesson(
    "40-140",
    "One of two African-American theatres",
    "Carver Theatre timeline",
    [
      cited("40-140", "Carver Theatre", "front"),
      span(
        '"30 years" is 1971 minus 1941, the years the marker prints for the closing and the building of the theatre.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "theatre",
        kicker: "About 1941",
        title: "Built in the segregation era",
        partLabel: "the theatre",
        art: art(
          "m40140-theatre.jpg",
          "Illustration of a neighborhood theatre and its stage. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "About 1941",
            x: 32,
            y: 46,
            fact: "Carver Theatre, built about 1941, was one of Columbia's two exclusively African-American theatres during the segregation era of the mid-20th century.",
          },
          {
            id: "owners",
            label: "Operators and owners",
            x: 74,
            y: 40,
            fact: "It was run by black operators but owned by the white-owned Dixie Amusement Company for most of its history.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1971",
        title: "Talent shows, a closing, a listing",
        partLabel: "the street",
        art: art(
          "m40140-street.jpg",
          "Illustration of a theatre on a city street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "shows",
            label: "Amateur Hour",
            x: 32,
            y: 52,
            fact: "Carver Theatre also hosted weekly talent shows based on the popular “Amateur Hour” in Harlem.",
          },
          {
            id: "closed",
            label: "Closed in 1971",
            x: 74,
            y: 44,
            fact: "The theatre, which closed in 1971, was listed in the National Register of Historic Places in 2003.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1941-1971",
        title: "Years from the building to the closing",
        partLabel: "30 years",
        value: 30,
        unit: "years",
        meant:
          "What this meant: 1971 comes 30 years after 1941. That is the stretch from the year the marker prints for Carver Theatre, built about 1941, to the year it closed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40140-theatre.jpg",
          "Illustration of a neighborhood theatre and its stage. Not a historical photograph.",
        ),
        nowArt: art(
          "m40140-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a neighborhood theatre, for Carver Theatre, which the marker says was built about 1941. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "About 1941",
            label: "Carver Theatre is built.",
            why: "The marker says Carver Theatre was built about 1941 and was one of Columbia's two exclusively African-American theatres during the segregation era of the mid-20th century.",
          },
          {
            id: "closed",
            year: "1971",
            label: "The theatre closes.",
            why: "The marker says the theatre closed in 1971.",
          },
          {
            id: "listed",
            year: "2003",
            label: "It is listed in the National Register of Historic Places.",
            why: "The marker says the theatre, which closed in 1971, was listed in the National Register of Historic Places in 2003.",
          },
        ],
        ["listed", "built", "closed"],
      ),
      takeaway([
        "Carver Theatre, built about 1941, was one of Columbia's two exclusively African-American theatres during the segregation era of the mid-20th century.",
        "It was run by black operators but owned by the white-owned Dixie Amusement Company for most of its history. Carver Theatre also hosted weekly talent shows based on the popular “Amateur Hour” in Harlem.",
        "The theatre, which closed in 1971, was listed in the National Register of Historic Places in 2003.",
      ]),
    ],
  ),
  lesson(
    "40-141",
    "Lived in a house on this site",
    "Matthew J. Perry timeline",
    [cited("40-141", "Matthew J. Perry House", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1921",
        title: "A youth's house, torn down in 1997",
        partLabel: "the house",
        art: art(
          "m40141-house.jpg",
          "Illustration of a modest frame house and its front porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "youth",
            label: "Born in 1921",
            x: 32,
            y: 48,
            fact: "Matthew J. Perry, Jr. (b. 1921), lawyer, civil rights pioneer, and jurist, lived in a house on this site as a youth; the house was torn down in 1997.",
          },
          {
            id: "college",
            label: "College in 1948",
            x: 74,
            y: 42,
            fact: "He served in the U.S. Army during World War II, then graduated from S.C. State College (now S.C. State University) in 1948. After graduating in the first class of the S.C. State Law School in 1951 Perry practiced law in Spartanburg, specializing in civil rights cases.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1961",
        title: "Chief counsel, then a district judge",
        partLabel: "the yard",
        art: art(
          "m40141-yard.jpg",
          "Illustration of a house yard, a shade tree, and a walk. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "counsel",
            label: "Returned in 1961",
            x: 32,
            y: 50,
            fact: "Perry returned to Columbia in 1961 as chief counsel of the S.C. State Conference of the National Association for the Advancement of Colored People (NAACP). For fifteen years he tried numerous pivotal civil rights cases before the U.S. Supreme Court.",
          },
          {
            id: "judge",
            label: "Judge in 1979",
            x: 74,
            y: 40,
            fact: "In 1976 Perry was appointed to the U.S. Military Court of Appeals, and in 1979 he became the first black U.S. district court judge in S.C.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Fifteen years",
        title: "Years of cases before the Supreme Court",
        partLabel: "15 years",
        value: 15,
        unit: "years",
        meant:
          "What this meant: the marker says that for fifteen years he tried numerous pivotal civil rights cases before the U.S. Supreme Court.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40141-house.jpg",
          "Illustration of a modest frame house and its front porch. Not a historical photograph.",
        ),
        nowArt: art(
          "m40141-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame house, for the house the marker says he lived in on this site as a youth. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1921",
            label: "Matthew J. Perry, Jr. is born.",
            why: "The marker says Matthew J. Perry, Jr. (b. 1921), lawyer, civil rights pioneer, and jurist, lived in a house on this site as a youth.",
          },
          {
            id: "college",
            year: "1948",
            label: "He graduates from S.C. State College.",
            why: "The marker says he served in the U.S. Army during World War II, then graduated from S.C. State College (now S.C. State University) in 1948.",
          },
          {
            id: "counsel",
            year: "1961",
            label: "He returns to Columbia as chief counsel.",
            why: "The marker says Perry returned to Columbia in 1961 as chief counsel of the S.C. State Conference of the National Association for the Advancement of Colored People (NAACP).",
          },
          {
            id: "judge",
            year: "1979",
            label: "He becomes the first black U.S. district court judge in S.C.",
            why: "The marker says that in 1976 he was appointed to the U.S. Military Court of Appeals, and in 1979 he became the first black U.S. district court judge in S.C.",
          },
        ],
        ["judge", "born", "college", "counsel"],
      ),
      takeaway([
        "Matthew J. Perry, Jr. (b. 1921), lawyer, civil rights pioneer, and jurist, lived in a house on this site as a youth; the house was torn down in 1997.",
        "He served in the U.S. Army during World War II, then graduated from S.C. State College (now S.C. State University) in 1948. After graduating in the first class of the S.C. State Law School in 1951 Perry practiced law in Spartanburg, specializing in civil rights cases.",
        "Perry returned to Columbia in 1961 as chief counsel of the S.C. State Conference of the National Association for the Advancement of Colored People (NAACP). For fifteen years he tried numerous pivotal civil rights cases before the U.S. Supreme Court. In 1976 Perry was appointed to the U.S. Military Court of Appeals, and in 1979 he became the first black U.S. district court judge in S.C.",
      ]),
    ],
  ),
  lesson(
    "40-142",
    "The site of James Miles Hinton's home",
    "James M. Hinton timeline",
    [cited("40-142", "James M. Hinton House", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1939",
        title: "He moves to Columbia and leads the branch",
        partLabel: "the house",
        art: art(
          "m40142-house.jpg",
          "Illustration of a wood house and a side porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "home",
            label: "1891-1970",
            x: 32,
            y: 48,
            fact: "This is the site of the home of James Miles Hinton (1891-1970), businessman, civil rights pioneer, and minister.",
          },
          {
            id: "moved",
            label: "Moved in 1939",
            x: 74,
            y: 42,
            fact: "Hinton moved to Columbia in 1939 and was elected president of the Columbia branch of the National Association for the Advancement of Colored People (NAACP) that year.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1941",
        title: "State conference, threats, and a pastorate",
        partLabel: "the yard",
        art: art(
          "m40142-yard.jpg",
          "Illustration of a yard, a garden gate, and the corner of a house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "state",
            label: "1941 through 1958",
            x: 32,
            y: 50,
            fact: "He was president of the S.C. State Conference of the NAACP from 1941 through 1958, as it grew from 13 chapters to 80 chapters. Hinton helped overthrow the all-white Democratic primary in S.C. and helped plan strategy for Briggs v. Elliott, the S.C. case of those that led to Brown v. the Board of Education and school desegregation.",
          },
          {
            id: "threats",
            label: "1949 and 1956",
            x: 74,
            y: 40,
            fact: "He was often threatened, was kidnapped from Augusta in 1949, and had shots fired at his house here in 1956. Hinton was later pastor of Second Calvary Baptist Church in Columbia, and died in Augusta in 1970.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1941-1958",
        title: "Chapters in the state conference",
        partLabel: "80 chapters",
        value: 80,
        unit: "chapters",
        meant:
          "What this meant: the marker says he was president of the S.C. State Conference of the NAACP from 1941 through 1958, as it grew from 13 chapters to 80 chapters.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40142-house.jpg",
          "Illustration of a wood house and a side porch. Not a historical photograph.",
        ),
        nowArt: art(
          "m40142-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wood house, for the site the marker calls the home of James Miles Hinton. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "moved",
            year: "1939",
            label: "He moves to Columbia and is elected branch president.",
            why: "The marker says Hinton moved to Columbia in 1939 and was elected president of the Columbia branch of the NAACP that year.",
          },
          {
            id: "state",
            year: "1941",
            label: "He becomes president of the S.C. State Conference.",
            why: "The marker says he was president of the S.C. State Conference of the NAACP from 1941 through 1958, as it grew from 13 chapters to 80 chapters.",
          },
          {
            id: "kidnapped",
            year: "1949",
            label: "He is kidnapped from Augusta.",
            why: "The marker says he was often threatened, was kidnapped from Augusta in 1949, and had shots fired at his house here in 1956.",
          },
          {
            id: "died",
            year: "1970",
            label: "He dies in Augusta.",
            why: "The marker says Hinton was later pastor of Second Calvary Baptist Church in Columbia, and died in Augusta in 1970.",
          },
        ],
        ["died", "kidnapped", "moved", "state"],
      ),
      takeaway([
        "This is the site of the home of James Miles Hinton (1891-1970), businessman, civil rights pioneer, and minister. Hinton moved to Columbia in 1939 and was elected president of the Columbia branch of the National Association for the Advancement of Colored People (NAACP) that year.",
        "He was president of the S.C. State Conference of the NAACP from 1941 through 1958, as it grew from 13 chapters to 80 chapters. Hinton helped overthrow the all-white Democratic primary in S.C. and helped plan strategy for Briggs v. Elliott, the S.C. case of those that led to Brown v. the Board of Education and school desegregation.",
        "He was often threatened, was kidnapped from Augusta in 1949, and had shots fired at his house here in 1956. Hinton was later pastor of Second Calvary Baptist Church in Columbia, and died in Augusta in 1970.",
      ]),
    ],
  ),
];
