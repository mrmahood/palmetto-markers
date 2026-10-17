import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia sites. Facts are from that marker only.
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

export const richlandLessonsAC: MarkerLesson[] = [
  lesson(
    "40-147",
    "Founded to educate freedmen",
    "Benedict College timeline",
    [
      cited("40-147", "Benedict College", "front and back"),
      span(
        '"60 years" is 1930 minus 1870, the years the marker prints for the first black president and the founding of the school.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "campus",
        kicker: "1870",
        title: "Originally Benedict Institute",
        partLabel: "the institute",
        art: art(
          "m40147-campus.jpg",
          "Illustration of a college hall and a lawn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1870",
            x: 32,
            y: 50,
            fact: "Benedict College, founded in 1870 by the American Baptist Home Mission Society to educate freedmen and their descendants, was originally called Benedict Institute.",
          },
          {
            id: "named",
            label: "The bequest",
            x: 74,
            y: 40,
            fact: "It was named for Stephen and Bathsheba Benedict of Rhode Island, whose bequest created the school. Mrs. Benedict donated money to buy land in Columbia for it.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1894",
        title: "Chartered as a college",
        partLabel: "the college",
        art: art(
          "m40147-yard.jpg",
          "Illustration of a college yard and a classroom wing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "chartered",
            label: "1894",
            x: 32,
            y: 54,
            fact: "The institute was chartered as Benedict College in 1894. Its early presidents were all white Baptist ministers from the North.",
          },
          {
            id: "president",
            label: "1930",
            x: 74,
            y: 42,
            fact: "By the time Dr. J.J. Starks became Benedict College's first black president in 1930, its curriculum included primary and secondary courses, college-level liberal arts courses, and courses in theology, nursing, and teaching. This curriculum was streamlined in the 1930s to emphasize the liberal arts and theology. Benedict College was also a significant center for civil rights activities in Columbia from the 1930s through the 1960s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1870-1930",
        title: "Years from the founding to the first black president",
        partLabel: "60 years",
        value: 60,
        unit: "years",
        meant:
          "What this meant: 1930 comes 60 years after 1870. That is the stretch from the year the marker prints for the founding of the school to the year Dr. J.J. Starks became the first black president.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40147-campus.jpg",
          "Illustration of a college hall and a lawn. Not a historical photograph.",
        ),
        nowArt: art(
          "m40147-today.jpg",
          "Illustration of a blank roadside marker by a campus lawn. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a college hall and a lawn, for the school the marker says was founded in 1870 as Benedict Institute. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a campus lawn. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1870",
            label: "Benedict Institute is founded.",
            why: "The marker says Benedict College was founded in 1870 by the American Baptist Home Mission Society to educate freedmen and their descendants, and was originally called Benedict Institute.",
          },
          {
            id: "chartered",
            year: "1894",
            label: "The institute is chartered as Benedict College.",
            why: "The marker says the institute was chartered as Benedict College in 1894. Its early presidents were all white Baptist ministers from the North.",
          },
          {
            id: "president",
            year: "1930",
            label: "Dr. J.J. Starks becomes the first black president.",
            why: "The marker says that by 1930 Dr. J.J. Starks had become Benedict College's first black president. The curriculum then included primary and secondary courses, college-level liberal arts courses, and courses in theology, nursing, and teaching.",
          },
        ],
        ["president", "founded", "chartered"],
      ),
      takeaway([
        "Benedict College, founded in 1870 by the American Baptist Home Mission Society to educate freedmen and their descendants, was originally called Benedict Institute. It was named for Stephen and Bathsheba Benedict of Rhode Island, whose bequest created the school. Mrs. Benedict donated money to buy land in Columbia for it.",
        "The institute was chartered as Benedict College in 1894. Its early presidents were all white Baptist ministers from the North.",
        "By the time Dr. J.J. Starks became Benedict College's first black president in 1930, its curriculum included primary and secondary courses, college-level liberal arts courses, and courses in theology, nursing, and teaching. This curriculum was streamlined in the 1930s to emphasize the liberal arts and theology. Benedict College was also a significant center for civil rights activities in Columbia from the 1930s through the 1960s.",
      ]),
    ],
  ),
  lesson(
    "40-148",
    "Sixty years in this house",
    "Modjeska Simkins House timeline",
    [
      cited("40-148", "Modjeska Simkins House", "front and back"),
      span(
        '"16 years" is 1957 minus 1941, the years the marker prints for the end and the start of her service as secretary of the conference.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1899-1992",
        title: "Her home for sixty years",
        partLabel: "the house",
        art: art(
          "m40148-house.jpg",
          "Illustration of a wood-frame house and a shade tree. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "home",
            label: "Sixty years",
            x: 32,
            y: 48,
            fact: "This house was for sixty years the home of Modjeska Monteith Simkins (1899-1992), social reformer and civil rights activist. A Columbia native, she was educated at Benedict College, then taught high school.",
          },
          {
            id: "health",
            label: "1931-1942",
            x: 74,
            y: 40,
            fact: "Director of Negro Work for the S.C. Anti-tuberculosis Association 1931-1942, Simkins was the first black in S.C. to hold a full-time, statewide, public health position.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1941-1957",
        title: "Meetings in the house",
        partLabel: "the yard",
        art: art(
          "m40148-yard.jpg",
          "Illustration of a house side yard and a porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "secretary",
            label: "1941-1957",
            x: 32,
            y: 52,
            fact: "Simkins was a founder of the S.C. Conference of the National Association for the Advancement of Colored People (NAACP). As the secretary of the conference 1941-1957, Simkins hosted many meetings and planning sessions here, for cases such as Brown v. Board of Education.",
          },
          {
            id: "transfer",
            label: "1997 and 2007",
            x: 74,
            y: 42,
            fact: "In 1997 the house was acquired by the Collaborative for Community Trust; it was transferred to the Historic Columbia Foundation in 2007.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1941-1957",
        title: "Years as secretary of the conference",
        partLabel: "16 years",
        value: 16,
        unit: "years",
        meant:
          "What this meant: 1957 comes 16 years after 1941. That is the stretch from the year the marker prints for the start of her service as secretary of the conference to the year that service ends. As secretary she hosted meetings and planning sessions in this house.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40148-house.jpg",
          "Illustration of a wood-frame house and a shade tree. Not a historical photograph.",
        ),
        nowArt: art(
          "m40148-today.jpg",
          "Illustration of a blank roadside marker on a house street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wood-frame house and a shade tree, for the house the marker says was her home for sixty years. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a house street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "health",
            year: "1931",
            label: "She becomes Director of Negro Work.",
            why: "The marker dates that work for the S.C. Anti-tuberculosis Association as 1931-1942 and says she was the first black in S.C. to hold a full-time, statewide, public health position.",
          },
          {
            id: "secretary",
            year: "1941",
            label: "She serves as secretary and hosts meetings here.",
            why: "The marker dates her service as secretary of the S.C. Conference of the NAACP as 1941-1957 and says she hosted many meetings and planning sessions here, for cases such as Brown v. Board of Education.",
          },
          {
            id: "acquired",
            year: "1997",
            label: "The Collaborative for Community Trust acquires the house.",
            why: "The marker says the house was acquired by the Collaborative for Community Trust in 1997.",
          },
          {
            id: "transferred",
            year: "2007",
            label: "The house is transferred to the Historic Columbia Foundation.",
            why: "The marker says the house was transferred to the Historic Columbia Foundation in 2007.",
          },
        ],
        ["acquired", "health", "transferred", "secretary"],
      ),
      takeaway([
        "This house was for sixty years the home of Modjeska Monteith Simkins (1899-1992), social reformer and civil rights activist. A Columbia native, she was educated at Benedict College, then taught high school.",
        "Director of Negro Work for the S.C. Anti-tuberculosis Association 1931-1942, Simkins was the first black in S.C. to hold a full-time, statewide, public health position.",
        "Simkins was a founder of the S.C. Conference of the National Association for the Advancement of Colored People (NAACP). As the secretary of the conference 1941-1957, she hosted many meetings and planning sessions here, for cases such as Brown v. Board of Education. In 1997 the house was acquired by the Collaborative for Community Trust; it was transferred to the Historic Columbia Foundation in 2007.",
      ]),
    ],
  ),
  lesson(
    "40-151",
    "A school until the fire",
    "Israelite Sunday School timeline",
    [
      cited("40-151", "Israelite Sunday School", "front and back"),
      span(
        '"19 years" is 1865 minus 1846, the years the marker prints for the burning of the frame building and the year the society built it on this site.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1843",
        title: "The first Jewish religious school",
        partLabel: "the school",
        art: art(
          "m40151-school.jpg",
          "Illustration of a small schoolhouse and a nearby frame building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1843",
            x: 32,
            y: 50,
            fact: 'The Israelite Sunday School, the first Jewish religious school in Columbia, met in a building on this site until 1865. It had been founded in 1843 to give Jewish children of the city "an intimate ... and full exposition of our faith."',
          },
          {
            id: "students",
            label: "20-30 students",
            x: 74,
            y: 40,
            fact: "Supported by the Columbia Hebrew Benevolent Society, the school had 20-30 students when it was organized in a nearby building, in space donated by a member of the society.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1846",
        title: "A frame building, then a fire",
        partLabel: "the yard",
        art: art(
          "m40151-yard.jpg",
          "Illustration of a two-story frame building and an open yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1846",
            x: 32,
            y: 52,
            fact: "In 1846 the Columbia Hebrew Benevolent Society built a frame building on this site for the Israelite Sunday School, which met on the first floor. The society also organized the first formal congregation in Columbia, which they named Shearith Israel (Remnant of Israel), with its synagogue on the second floor.",
          },
          {
            id: "burned",
            label: "February 1865",
            x: 74,
            y: 44,
            fact: "The building burned when Gen. William T. Sherman's Federals captured the city in February 1865.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1846-1865",
        title: "Years from the frame building to the fire",
        partLabel: "19 years",
        value: 19,
        unit: "years",
        meant:
          "What this meant: 1865 comes 19 years after 1846. That is the stretch from the year the marker prints for the frame building on this site to the year it burned.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40151-school.jpg",
          "Illustration of a small schoolhouse and a nearby frame building. Not a historical photograph.",
        ),
        nowArt: art(
          "m40151-today.jpg",
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small schoolhouse and a nearby frame building, for the Israelite Sunday School the marker says was founded in 1843. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1843",
            label: "The Israelite Sunday School is founded.",
            why: 'The marker says it was founded in 1843 to give Jewish children of the city "an intimate ... and full exposition of our faith." It was the first Jewish religious school in Columbia.',
          },
          {
            id: "built",
            year: "1846",
            label: "A frame building is built on this site.",
            why: "The marker says that in 1846 the Columbia Hebrew Benevolent Society built a frame building on this site. The school met on the first floor, and the synagogue of Shearith Israel (Remnant of Israel) was on the second floor.",
          },
          {
            id: "burned",
            year: "February 1865",
            label: "The building burns when Federals capture the city.",
            why: "The marker says the building burned when Gen. William T. Sherman's Federals captured the city in February 1865. The school had met in a building on this site until 1865.",
          },
        ],
        ["built", "burned", "founded"],
      ),
      takeaway([
        'The Israelite Sunday School, the first Jewish religious school in Columbia, met in a building on this site until 1865. It had been founded in 1843 to give Jewish children of the city "an intimate ... and full exposition of our faith."',
        "Supported by the Columbia Hebrew Benevolent Society, the school had 20-30 students when it was organized in a nearby building, in space donated by a member of the society. In 1846 the society built a frame building on this site for the school, which met on the first floor.",
        "The society also organized the first formal congregation in Columbia, which they named Shearith Israel (Remnant of Israel), with its synagogue on the second floor. The building burned when Gen. William T. Sherman's Federals captured the city in February 1865.",
      ]),
    ],
  ),
  lesson(
    "40-152",
    "From Payne Institute to this site",
    "Allen University timeline",
    [
      cited("40-152", "Allen University", "front and back"),
      span(
        '"7 years" is 1888 minus 1881, the years the marker prints for the first university building on this site and the opening in Columbia.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "campus",
        kicker: "1870",
        title: "Moved from Cokesbury",
        partLabel: "the campus",
        art: art(
          "m40152-campus.jpg",
          "Illustration of a university hall and a campus green. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "payne",
            label: "1870 and 1880",
            x: 32,
            y: 48,
            fact: "Allen University, chartered in 1880, was founded by the African Methodist Episcopal (A.M.E.) Church. It had its origin in Payne Institute, founded in 1870 in Cokesbury, in Greenwood County. In 1880 the S.C. Conference of the A.M.E. Church voted to move Payne Institute to Columbia.",
          },
          {
            id: "opened",
            label: "1881 and 1888",
            x: 74,
            y: 40,
            fact: "It opened in Columbia in 1881 and was renamed in honor of Bishop Richard Allen (1760-1831), founder of the A.M.E. Church. The first university building on this site was in use by 1888.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "Before 1900",
        title: "Ministers, arts, and a law school",
        partLabel: "the yard",
        art: art(
          "m40152-yard.jpg",
          "Illustration of a campus side yard and a brick wing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "courses",
            label: "Before 1900",
            x: 32,
            y: 54,
            fact: "Allen University, founded to educate ministers for the A.M.E. Church, also had primary and secondary courses, and college-level liberal arts courses. It also offered courses in the arts and had one of the few black law schools in the South before 1900.",
          },
          {
            id: "later",
            label: "The 1920s and 1930s",
            x: 74,
            y: 42,
            fact: "Its primary and secondary programs ended in the 1920s and 1930s. Allen was also a significant center for civil rights activities in Columbia from the 1930s through the 1960s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1881-1888",
        title: "Years from the opening to the first building here",
        partLabel: "7 years",
        value: 7,
        unit: "years",
        meant:
          "What this meant: 1888 comes 7 years after 1881. That is the stretch from the year the marker prints for the opening in Columbia to the year the first university building on this site was in use.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40152-campus.jpg",
          "Illustration of a university hall and a campus green. Not a historical photograph.",
        ),
        nowArt: art(
          "m40152-today.jpg",
          "Illustration of a blank roadside marker by a campus edge. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a university hall and a campus green, for Allen University, which the marker says opened in Columbia in 1881. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a campus edge. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "payne",
            year: "1870",
            label: "Payne Institute is founded in Cokesbury.",
            why: "The marker says Allen University had its origin in Payne Institute, founded in 1870 in Cokesbury, in Greenwood County.",
          },
          {
            id: "chartered",
            year: "1880",
            label: "Allen University is chartered, and the conference votes to move the institute.",
            why: "The marker says Allen University was chartered in 1880 and that in 1880 the S.C. Conference of the A.M.E. Church voted to move Payne Institute to Columbia. The university was founded by the A.M.E. Church.",
          },
          {
            id: "opened",
            year: "1881",
            label: "It opens in Columbia and is renamed.",
            why: "The marker says it opened in Columbia in 1881 and was renamed in honor of Bishop Richard Allen (1760-1831), founder of the A.M.E. Church.",
          },
          {
            id: "building",
            year: "1888",
            label: "The first university building on this site is in use.",
            why: "The marker says the first university building on this site was in use by 1888.",
          },
        ],
        ["opened", "payne", "building", "chartered"],
      ),
      takeaway([
        "Allen University, chartered in 1880, was founded by the African Methodist Episcopal (A.M.E.) Church. It had its origin in Payne Institute, founded in 1870 in Cokesbury, in Greenwood County. In 1880 the S.C. Conference of the A.M.E. Church voted to move Payne Institute to Columbia.",
        "It opened in Columbia in 1881 and was renamed in honor of Bishop Richard Allen (1760-1831), founder of the A.M.E. Church. The first university building on this site was in use by 1888.",
        "Founded to educate ministers for the A.M.E. Church, it also had primary and secondary courses, college-level liberal arts courses, and courses in the arts, and one of the few black law schools in the South before 1900. Its primary and secondary programs ended in the 1920s and 1930s. Allen was also a significant center for civil rights activities in Columbia from the 1930s through the 1960s.",
      ]),
    ],
  ),
];
