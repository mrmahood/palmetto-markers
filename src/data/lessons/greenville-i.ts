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

export const greenvilleLessonsI: MarkerLesson[] = [
  lesson(
    "23-40",
    "Built on land given for the children",
    "Pepper School timeline",
    [cited("23-40", "Pepper School", "front")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1914-15",
        title: "Established on donated land",
        partLabel: "the school",
        art: art(
          "m2340-school.jpg",
          "Illustration of a small rural schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1914-15",
            x: 32,
            y: 50,
            fact: "Pepper School, established in 1914-15, was built on land donated “for the children of my community” by William A. Pepper (1829-1914).",
          },
          {
            id: "donor",
            label: "1829-1914",
            x: 74,
            y: 36,
            fact: "Pepper School, established in 1914-15, was built on land donated “for the children of my community” by William A. Pepper (1829-1914).",
          },
        ],
      },
      {
        kind: "scene",
        id: "club",
        kicker: "1964",
        title: "Closed, then kept for the community",
        partLabel: "the club",
        art: art(
          "m2340-club.jpg",
          "Illustration of a plain wooden community hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "closed",
            label: "1952-53",
            x: 32,
            y: 54,
            fact: "The school, with three teachers and about 75-100 students in grades 1-7 for much of its history, closed after the 1952-53 school year.",
          },
          {
            id: "bought",
            label: "1964",
            x: 74,
            y: 40,
            fact: "The Augusta Road Ruritan Club bought the building in 1964, preserved it for the community, and meets there now.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "For much of its history",
        title: "Teachers at the school",
        partLabel: "three teachers",
        value: 3,
        unit: "teachers",
        meant:
          "What this meant: the marker says the school had three teachers and about 75-100 students in grades 1-7 for much of its history.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2340-school.jpg",
          "Illustration of a small rural schoolhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m2340-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small schoolhouse, for the school the marker says was established in 1914-15 on land donated by William A. Pepper. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "established",
            year: "1914-15",
            label: "Pepper School is established on donated land.",
            why: "The marker says Pepper School, established in 1914-15, was built on land donated “for the children of my community” by William A. Pepper (1829-1914).",
          },
          {
            id: "closed",
            year: "1952-53",
            label: "The school closes after the 1952-53 school year.",
            why: "The marker says the school, with three teachers and about 75-100 students in grades 1-7 for much of its history, closed after the 1952-53 school year.",
          },
          {
            id: "bought",
            year: "1964",
            label: "The Augusta Road Ruritan Club buys the building.",
            why: "The marker says the Augusta Road Ruritan Club bought the building in 1964, preserved it for the community, and meets there now.",
          },
        ],
        ["bought", "established", "closed"],
      ),
      takeaway([
        "Pepper School, established in 1914-15, was built on land donated “for the children of my community” by William A. Pepper (1829-1914).",
        "The school, with three teachers and about 75-100 students in grades 1-7 for much of its history, closed after the 1952-53 school year.",
        "The Augusta Road Ruritan Club bought the building in 1964, preserved it for the community, and meets there now.",
      ]),
    ],
  ),
  lesson(
    "23-42",
    "Where the largest lynching trial was held",
    "Greenville County Courthouse timeline",
    [
      cited("23-42", "Greenville County Courthouse", "front and back"),
      span(
        '"32 years" is 1950 minus 1918, the years the marker prints for this building as the fourth Greenville County Courthouse, from 1918 to 1950.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "building",
        kicker: "1916-18",
        title: "The fourth county courthouse",
        partLabel: "the courthouse",
        art: art(
          "m2342-courthouse.jpg",
          "Illustration of a columned Beaux Arts courthouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1916-18",
            x: 32,
            y: 46,
            fact: "This Beaux Arts building, built in 1916-18, was the fourth Greenville County Courthouse, from 1918 to 1950.",
          },
          {
            id: "listed",
            label: "1994",
            x: 74,
            y: 34,
            fact: "It was listed in the National Register of Historic Places in 1994.",
          },
        ],
      },
      {
        kind: "scene",
        id: "trial",
        kicker: "May 12-21, 1947",
        title: "A trial that drew national attention",
        partLabel: "the trial",
        art: art(
          "m2342-trial.jpg",
          "Illustration of an empty courtroom. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "held",
            label: "May 12-21, 1947",
            x: 32,
            y: 52,
            fact: "The largest lynching trial in U.S. history was held here May 12-21, 1947. Willie Earle, a young black man accused of assaulting white cabdriver Thomas W. Brown, had been lynched by a white mob on Bramlett Road in Greenville.",
          },
          {
            id: "acquitted",
            label: "31 defendants",
            x: 74,
            y: 38,
            fact: "The trial of 31 whites, 28 of them cabdrivers, was rare at the time and drew national attention. Though 26 defendants admitted being part of the mob, all defendants were acquitted by an all-white jury. Rebecca West’s “Opera in Greenville,” published in The New Yorker on June 14, 1947, interpreted the trial and its aftermath. Widespread outrage over the lynching and the verdict spurred new federal civil rights policies.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1918-1950",
        title: "Years as the fourth courthouse",
        partLabel: "32 years",
        value: 32,
        unit: "years",
        meant:
          "What this meant: 1950 comes 32 years after 1918. That is the stretch the marker prints as from 1918 to 1950, the years this building was the fourth Greenville County Courthouse.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2342-courthouse.jpg",
          "Illustration of a columned Beaux Arts courthouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m2342-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a columned courthouse, for the Beaux Arts building the marker says was built in 1916-18. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1916-18",
            label: "This Beaux Arts building is built.",
            why: "The marker says this Beaux Arts building, built in 1916-18, was the fourth Greenville County Courthouse, from 1918 to 1950.",
          },
          {
            id: "held",
            year: "May 12-21, 1947",
            label: "The largest lynching trial in U.S. history is held here.",
            why: "The marker says the largest lynching trial in U.S. history was held here May 12-21, 1947. Willie Earle, a young black man accused of assaulting white cabdriver Thomas W. Brown, had been lynched by a white mob on Bramlett Road in Greenville.",
          },
          {
            id: "ended",
            year: "1950",
            label: "Its years as the fourth courthouse reach 1950.",
            why: "The marker says this building was the fourth Greenville County Courthouse, from 1918 to 1950.",
          },
          {
            id: "listed",
            year: "1994",
            label: "It is listed in the National Register of Historic Places.",
            why: "The marker says it was listed in the National Register of Historic Places in 1994.",
          },
        ],
        ["listed", "held", "built", "ended"],
      ),
      takeaway([
        "This Beaux Arts building, built in 1916-18, was the fourth Greenville County Courthouse, from 1918 to 1950.",
        "The largest lynching trial in U.S. history was held here May 12-21, 1947. Willie Earle, a young black man accused of assaulting white cabdriver Thomas W. Brown, had been lynched by a white mob on Bramlett Road in Greenville.",
        "Though 26 defendants admitted being part of the mob, all defendants were acquitted by an all-white jury. Widespread outrage over the lynching and the verdict spurred new federal civil rights policies.",
      ]),
    ],
  ),
  lesson(
    "23-43",
    "The last home of a banned hitter",
    '"Shoeless Joe" Jackson House timeline',
    [cited("23-43", '"Shoeless Joe" Jackson House', "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1940",
        title: "Built as his last home",
        partLabel: "the house",
        art: art(
          "m2343-house.jpg",
          "Illustration of a modest wood-frame house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1940",
            x: 32,
            y: 48,
            fact: "This house, built in 1940, was originally 3 mi. SW at 119 E. Wilburn Ave. It was the last home of Joseph Jefferson Wofford “Shoeless Joe” Jackson (1888-1951), one of the greatest natural hitters in the history of baseball.",
          },
          {
            id: "leagues",
            label: "1908",
            x: 74,
            y: 36,
            fact: "Jackson, born in Pickens Co., moved to Greenville as a boy. He worked at the Brandon Mill, joined the mill baseball team as a teenager, and was a star long before he made the major leagues in 1908.",
          },
        ],
      },
      {
        kind: "scene",
        id: "career",
        kicker: "1911",
        title: "A .408 season, then a ban",
        partLabel: "the career",
        art: art(
          "m2343-field.jpg",
          "Illustration of an empty baseball diamond. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "average",
            label: "1911",
            x: 32,
            y: 56,
            fact: "In 1911, his first full season, Jackson batted .408. He played for the Philadelphia A’s 1908-10, the Cleveland Naps 1910-15, and the Chicago White Sox 1915-20, with a lifetime average of .356.",
          },
          {
            id: "banned",
            label: "1919",
            x: 74,
            y: 40,
            fact: "He helped the White Sox win the 1917 World Series, but he and 7 teammates were banned from baseball for fixing the 1919 Series. This house, where Jackson died in 1951, was moved here in 2006 and opened as a museum in 2008.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1919",
        title: "Teammates banned with him",
        partLabel: "7 teammates",
        value: 7,
        unit: "teammates",
        meant:
          "What this meant: the marker says he and 7 teammates were banned from baseball for fixing the 1919 Series.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2343-house.jpg",
          "Illustration of a modest wood-frame house. Not a historical photograph.",
        ),
        nowArt: art(
          "m2343-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a modest house, for the house the marker says was built in 1940 and was the last home of Joseph Jefferson Wofford “Shoeless Joe” Jackson. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "leagues",
            year: "1908",
            label: "Jackson makes the major leagues.",
            why: "The marker says he worked at the Brandon Mill, joined the mill baseball team as a teenager, and was a star long before he made the major leagues in 1908.",
          },
          {
            id: "banned",
            year: "1919",
            label: "He and 7 teammates are banned for fixing the Series.",
            why: "The marker says he helped the White Sox win the 1917 World Series, but he and 7 teammates were banned from baseball for fixing the 1919 Series.",
          },
          {
            id: "died",
            year: "1951",
            label: "Jackson dies in this house.",
            why: "The marker says this house, where Jackson died in 1951, was moved here in 2006 and opened as a museum in 2008.",
          },
          {
            id: "opened",
            year: "2008",
            label: "The house opens as a museum.",
            why: "The marker says this house, where Jackson died in 1951, was moved here in 2006 and opened as a museum in 2008.",
          },
        ],
        ["opened", "banned", "died", "leagues"],
      ),
      takeaway([
        "This house, built in 1940, was originally 3 mi. SW at 119 E. Wilburn Ave. It was the last home of Joseph Jefferson Wofford “Shoeless Joe” Jackson (1888-1951), one of the greatest natural hitters in the history of baseball.",
        "In 1911, his first full season, Jackson batted .408. He played for the Philadelphia A’s 1908-10, the Cleveland Naps 1910-15, and the Chicago White Sox 1915-20, with a lifetime average of .356.",
        "He helped the White Sox win the 1917 World Series, but he and 7 teammates were banned from baseball for fixing the 1919 Series. This house, where Jackson died in 1951, was moved here in 2006 and opened as a museum in 2008.",
      ]),
    ],
  ),
  lesson(
    "23-44",
    "Two families who each raised eleven",
    "Oakland Plantation timeline",
    [cited("23-44", "Oakland Plantation", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1823",
        title: "Built by a physician and planter",
        partLabel: "the house",
        art: art(
          "m2344-house.jpg",
          "Illustration of a columned plantation house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1823",
            x: 32,
            y: 44,
            fact: "This house was built in 1823 by Dr. Thomas Collins Austin (1790-1883), physician and planter. Austin attended the Medical University of Pennsylvania in Philadelphia, and practiced medicine here for sixty years.",
          },
          {
            id: "office",
            label: "1953",
            x: 74,
            y: 60,
            fact: "His office, just north of the house, was demolished in 1953. Austin and his wife Mary Turner James (1805-1889) raised eleven children here.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sale",
        kicker: "1897",
        title: "Sold with 550 acres",
        partLabel: "the sale",
        art: art(
          "m2344-fields.jpg",
          "Illustration of open fields and a plantation house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sold",
            label: "1897",
            x: 32,
            y: 50,
            fact: "In 1897 the Austin family sold the house and 550 acres to Thomas Martin Vaughan (1865-1939). Vaughan, a farmer, married Ida Tyson Vaughan (1875-1952) the next year. They raised eleven children here, just as the Austins had.",
          },
          {
            id: "ymca",
            label: "2004",
            x: 74,
            y: 36,
            fact: "Their daughter Lucille Jessie Vaughan Rice (1912-2006), the last family member to live here, sold the house to the YMCA of Greenville in 2004.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "His practice",
        title: "Years he practiced medicine here",
        partLabel: "sixty years",
        value: 60,
        unit: "years",
        meant:
          "What this meant: the marker says Austin attended the Medical University of Pennsylvania in Philadelphia, and practiced medicine here for sixty years.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2344-house.jpg",
          "Illustration of a columned plantation house. Not a historical photograph.",
        ),
        nowArt: art(
          "m2344-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plantation house, for the house the marker says was built in 1823 by Dr. Thomas Collins Austin. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1823",
            label: "Dr. Thomas Collins Austin builds this house.",
            why: "The marker says this house was built in 1823 by Dr. Thomas Collins Austin (1790-1883), physician and planter.",
          },
          {
            id: "sold",
            year: "1897",
            label: "The Austin family sells the house and 550 acres.",
            why: "The marker says in 1897 the Austin family sold the house and 550 acres to Thomas Martin Vaughan (1865-1939).",
          },
          {
            id: "office",
            year: "1953",
            label: "His office, just north of the house, is demolished.",
            why: "The marker says his office, just north of the house, was demolished in 1953.",
          },
          {
            id: "ymca",
            year: "2004",
            label: "Lucille Jessie Vaughan Rice sells the house to the YMCA of Greenville.",
            why: "The marker says their daughter Lucille Jessie Vaughan Rice (1912-2006), the last family member to live here, sold the house to the YMCA of Greenville in 2004.",
          },
        ],
        ["office", "ymca", "built", "sold"],
      ),
      takeaway([
        "This house was built in 1823 by Dr. Thomas Collins Austin (1790-1883), physician and planter. Austin attended the Medical University of Pennsylvania in Philadelphia, and practiced medicine here for sixty years.",
        "In 1897 the Austin family sold the house and 550 acres to Thomas Martin Vaughan (1865-1939). Vaughan, a farmer, married Ida Tyson Vaughan (1875-1952) the next year. They raised eleven children here, just as the Austins had.",
        "Their daughter Lucille Jessie Vaughan Rice (1912-2006), the last family member to live here, sold the house to the YMCA of Greenville in 2004.",
      ]),
    ],
  ),
];
