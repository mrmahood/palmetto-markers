import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Charleston sites. Facts are from that marker only.
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

export const charlestonLessonsAB: MarkerLesson[] = [
  lesson(
    "10-127",
    "The north end of Ryan’s Mart",
    "The Mart timeline",
    [
      cited("10-127", "Slave Trading Complex", "front and back"),
      span(
        '"7 years" is 1863 minus 1856, the years the marker prints for the north end of a slave trading complex known as The Mart or Ryan’s Mart.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1856-1863",
        title: "Opened by Thomas Ryan",
        partLabel: "the street",
        art: art(
          "m10127-street.jpg",
          "Illustration of brick buildings along an empty street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "north",
            label: "1856-1863",
            x: 32,
            y: 48,
            fact: "From 1856 to 1863, this was the north end of a slave trading complex known as The Mart or Ryan’s Mart. It was opened by Thomas Ryan and extended south to a lot on Chalmers St. that became its main sales room.",
          },
          {
            id: "pen",
            label: "The slave pen",
            x: 74,
            y: 40,
            fact: "Prior to auction, enslaved people were held, prepped, and inspected in a large “slave pen” formed by high brick walls connecting the north and south ends of the Mart. The Mart also included a two-story kitchen house and a small structure later recalled as a “dead-house.”",
          },
        ],
      },
      {
        kind: "scene",
        id: "buildings",
        kicker: "1950",
        title: "The Queen Street building",
        partLabel: "the buildings",
        art: art(
          "m10127-buildings.jpg",
          "Illustration of brick buildings behind high walls. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "jail",
            label: "Ryan’s Jail",
            x: 32,
            y: 46,
            fact: "Enslaved people were also confined and sometimes sold at Ryan’s Jail, a brick four-story double-house here on Queen St.",
          },
          {
            id: "later",
            label: "1950-1951",
            x: 74,
            y: 42,
            fact: "After slavery was abolished, local Black residents lived in the Mart buildings. African American families still resided in the Queen St. building as late as 1950 when the county health department condemned it as uninhabitable. It was torn down by 1951. The Chalmers St. sales room, now the Old Slave Mart Museum, is the last extant Mart building.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1856-1863",
        title: "Years this was the north end",
        partLabel: "7 years",
        value: 7,
        unit: "years",
        meant:
          "What this meant: 1863 comes 7 years after 1856. Those are the years the marker prints for the north end of a slave trading complex known as The Mart or Ryan’s Mart.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10127-street.jpg",
          "Illustration of brick buildings along an empty street. Not a historical photograph.",
        ),
        nowArt: art(
          "m10127-today.jpg",
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of brick buildings along an empty street, for the north end the marker says was a slave trading complex known as The Mart or Ryan’s Mart from 1856 to 1863. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "north",
            year: "1856",
            label: "This is the north end of The Mart or Ryan’s Mart.",
            why: "The marker says that from 1856 to 1863, this was the north end of a slave trading complex known as The Mart or Ryan’s Mart. It was opened by Thomas Ryan and extended south to a lot on Chalmers St. that became its main sales room.",
          },
          {
            id: "through",
            year: "1863",
            label: "The marker’s years for that north end run through 1863.",
            why: "The marker says from 1856 to 1863 this was the north end of the complex known as The Mart or Ryan’s Mart.",
          },
          {
            id: "condemned",
            year: "1950",
            label: "The county health department condemns the Queen St. building.",
            why: "The marker says African American families still resided in the Queen St. building as late as 1950 when the county health department condemned it as uninhabitable.",
          },
          {
            id: "torn",
            year: "1951",
            label: "The Queen St. building is torn down.",
            why: "The marker says the Queen St. building was condemned as uninhabitable in 1950. It was torn down by 1951. The Chalmers St. sales room, now the Old Slave Mart Museum, is the last extant Mart building.",
          },
        ],
        ["torn", "north", "condemned", "through"],
      ),
      takeaway([
        "From 1856 to 1863, this was the north end of a slave trading complex known as The Mart or Ryan’s Mart. It was opened by Thomas Ryan and extended south to a lot on Chalmers St. that became its main sales room.",
        "Prior to auction, enslaved people were held, prepped, and inspected in a large “slave pen” formed by high brick walls connecting the north and south ends of the Mart. The Mart also included a two-story kitchen house and a small structure later recalled as a “dead-house.” Enslaved people were also confined and sometimes sold at Ryan’s Jail, a brick four-story double-house here on Queen St.",
        "After slavery was abolished, local Black residents lived in the Mart buildings. African American families still resided in the Queen St. building as late as 1950 when the county health department condemned it as uninhabitable. It was torn down by 1951. The Chalmers St. sales room, now the Old Slave Mart Museum, is the last extant Mart building.",
      ]),
    ],
  ),
  lesson(
    "10-128",
    "A Black-owned course opened in 1953",
    "Little Rock timeline",
    [
      cited("10-128", "Little Rock Golf Club", "front and back"),
      span(
        '"20 years" is 1973 minus 1953, the years the marker prints for Smalls’s death and the opening of the course.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "course",
        kicker: "1953",
        title: "Built for local African Americans",
        partLabel: "the course",
        art: art(
          "m10128-course.jpg",
          "Illustration of an empty golf course. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1953",
            x: 32,
            y: 50,
            fact: "This was the site of a Black-owned segregation-era golf course for local African Americans. It was opened in 1953 by Richard Smalls, Sr., who caddied at whites-only courses in the Charleston area.",
          },
          {
            id: "holes",
            label: "Six holes",
            x: 74,
            y: 40,
            fact: "Community members helped Smalls build six par-3 and par-4 holes and a two-story clubhouse. Players socialized at the first-floor clubhouse and bar, while the second floor offered overnight rooms to those from out of town.",
          },
        ],
      },
      {
        kind: "scene",
        id: "club",
        kicker: "1958",
        title: "Named Little Rock Golf Club",
        partLabel: "the clubhouse",
        art: art(
          "m10128-club.jpg",
          "Illustration of a two-story clubhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "name",
            label: "The name",
            x: 32,
            y: 48,
            fact: "Smalls named the course “Little Rock Golf Club,” supposedly after the many pebbles he found when preparing the land.",
          },
          {
            id: "suit",
            label: "1958-1973",
            x: 74,
            y: 42,
            fact: "In 1958, golfers at Little Rock’s clubhouse began planning an effort to desegregate the Charleston Municipal Golf Course. They sued the City, and the course admitted African Americans in 1961 under court order. Business at Little Rock declined, but the course stayed open until Smalls’s death in 1973.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1953-1973",
        title: "Years from the opening to Smalls’s death",
        partLabel: "20 years",
        value: 20,
        unit: "years",
        meant:
          "What this meant: 1973 comes 20 years after 1953. Those are the years the marker prints for Smalls’s death and the opening of the course.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10128-course.jpg",
          "Illustration of an empty golf course. Not a historical photograph.",
        ),
        nowArt: art(
          "m10128-today.jpg",
          "Illustration of a blank roadside marker at the edge of a course. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an empty golf course, for the Black-owned course the marker says Richard Smalls, Sr. opened in 1953. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker at the edge of a course. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "1953",
            label: "Richard Smalls, Sr. opens the course.",
            why: "The marker says this was the site of a Black-owned segregation-era golf course for local African Americans, opened in 1953 by Richard Smalls, Sr., who caddied at whites-only courses in the Charleston area.",
          },
          {
            id: "planning",
            year: "1958",
            label: "Golfers begin planning to desegregate the municipal course.",
            why: "The marker says that in 1958, golfers at Little Rock’s clubhouse began planning an effort to desegregate the Charleston Municipal Golf Course.",
          },
          {
            id: "admitted",
            year: "1961",
            label: "The municipal course admits African Americans under court order.",
            why: "The marker says they sued the City, and the course admitted African Americans in 1961 under court order.",
          },
          {
            id: "death",
            year: "1973",
            label: "The course stays open until Smalls’s death.",
            why: "The marker says business at Little Rock declined, but the course stayed open until Smalls’s death in 1973.",
          },
        ],
        ["admitted", "opened", "death", "planning"],
      ),
      takeaway([
        "This was the site of a Black-owned segregation-era golf course for local African Americans. It was opened in 1953 by Richard Smalls, Sr., who caddied at whites-only courses in the Charleston area. Community members helped Smalls build six par-3 and par-4 holes and a two-story clubhouse.",
        "Players socialized at the first-floor clubhouse and bar, while the second floor offered overnight rooms to those from out of town. Smalls named the course “Little Rock Golf Club,” supposedly after the many pebbles he found when preparing the land.",
        "In 1958, golfers at Little Rock’s clubhouse began planning an effort to desegregate the Charleston Municipal Golf Course. They sued the City, and the course admitted African Americans in 1961 under court order. Business at Little Rock declined, but the course stayed open until Smalls’s death in 1973.",
      ]),
    ],
  ),
  lesson(
    "10-129",
    "Laid out for Henry Laurens in 1769",
    "Hampstead Village timeline",
    [
      cited("10-129", "Hampstead Village", "front and back"),
      span(
        '"81 years" is 1850 minus 1769, the years the marker prints for the annexation and the laying out of Hampstead Village.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "village",
        kicker: "1769",
        title: "The center of the village",
        partLabel: "the village",
        art: art(
          "m10129-village.jpg",
          "Illustration of an empty village green and houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "plan",
            label: "1769",
            x: 32,
            y: 46,
            fact: "This site was the center of Hampstead Village, a suburb of Charleston laid out for Henry Laurens in 1769. The village’s approx. 100-acre plan included 140 lots bounded roughly by what became East Bay, South, Meeting, and Cooper Streets.",
          },
          {
            id: "annexed",
            label: "1850",
            x: 74,
            y: 40,
            fact: "Early homes were razed during the American Revolution. Fortifications and barracks were built during the War of 1812. The originally affluent village later developed into a working-class neighborhood, annexed in 1850.",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1897",
        title: "A mall reserved for public use",
        partLabel: "the houses",
        art: art(
          "m10129-houses.jpg",
          "Illustration of houses facing a public green. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "mall",
            label: "The mall",
            x: 32,
            y: 50,
            fact: "The 1769 plan for Hampstead Village reserved a central mall at this site for public use. Originally a 4.5-acre square, in the late 19th and early 20th centuries the mall hosted celebrations, political rallies, music, religious services, and other community events.",
          },
          {
            id: "streets",
            label: "1897 and 1956",
            x: 74,
            y: 42,
            fact: "Though bisected in 1897 by a trolley line through Columbus St. and quartered in 1956 by the extension of America St., the mall’s quadrants remain among the oldest public greens in the City of Charleston.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1769-1850",
        title: "Years from the plan to annexation",
        partLabel: "81 years",
        value: 81,
        unit: "years",
        meant:
          "What this meant: 1850 comes 81 years after 1769. Those are the years the marker prints for the annexation and the laying out of Hampstead Village.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10129-village.jpg",
          "Illustration of an empty village green and houses. Not a historical photograph.",
        ),
        nowArt: art(
          "m10129-today.jpg",
          "Illustration of a blank roadside marker beside a public green. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an empty village green and houses, for Hampstead Village, which the marker says was laid out for Henry Laurens in 1769. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a public green. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "laid",
            year: "1769",
            label: "Hampstead Village is laid out for Henry Laurens.",
            why: "The marker says this site was the center of Hampstead Village, a suburb of Charleston laid out for Henry Laurens in 1769. The 1769 plan reserved a central mall at this site for public use.",
          },
          {
            id: "war",
            year: "1812",
            label: "Fortifications and barracks are built.",
            why: "The marker says fortifications and barracks were built during the War of 1812.",
          },
          {
            id: "annexed",
            year: "1850",
            label: "The village is annexed.",
            why: "The marker says the originally affluent village later developed into a working-class neighborhood, annexed in 1850.",
          },
          {
            id: "trolley",
            year: "1897",
            label: "A trolley line bisects the mall.",
            why: "The marker says the mall was bisected in 1897 by a trolley line through Columbus St.",
          },
          {
            id: "america",
            year: "1956",
            label: "The extension of America St. quarters the mall.",
            why: "The marker says the mall was quartered in 1956 by the extension of America St. The mall’s quadrants remain among the oldest public greens in the City of Charleston.",
          },
        ],
        ["trolley", "laid", "america", "war", "annexed"],
      ),
      takeaway([
        "This site was the center of Hampstead Village, a suburb of Charleston laid out for Henry Laurens in 1769. The village’s approx. 100-acre plan included 140 lots bounded roughly by what became East Bay, South, Meeting, and Cooper Streets.",
        "Early homes were razed during the American Revolution. Fortifications and barracks were built during the War of 1812. The originally affluent village later developed into a working-class neighborhood, annexed in 1850.",
        "The 1769 plan reserved a central mall at this site for public use. Originally a 4.5-acre square, it hosted celebrations, political rallies, music, religious services, and other community events in the late 19th and early 20th centuries. Though bisected in 1897 by a trolley line through Columbus St. and quartered in 1956 by the extension of America St., the mall’s quadrants remain among the oldest public greens in the City of Charleston.",
      ]),
    ],
  ),
  lesson(
    "10-131",
    "Formally organized by 1890",
    "St. Mark’s timeline",
    [
      cited("10-131", "St. Mark’s Union Methodist Episcopal Church", "front and back"),
      span(
        '"5 years" is 1890 minus 1885, the years the marker prints for the formal organization of St. Mark’s and the forming of the RMUE Church in Charleston.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1885",
        title: "Originally part of the RMUE Church",
        partLabel: "the church",
        art: art(
          "m10131-church.jpg",
          "Illustration of a plain wood-frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "formed",
            label: "1885",
            x: 32,
            y: 48,
            fact: "St. Mark’s Church was originally part of the Reformed Methodist Union Episcopal (RMUE) Church. RMUE ministers worked in the Johns Island area soon after the denomination formed in Charleston in 1885.",
          },
          {
            id: "organized",
            label: "By 1890",
            x: 74,
            y: 40,
            fact: "St. Mark’s formally organized by 1890 to serve African American residents of Johns Island and Red Top.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1913",
        title: "A founding member of the UME Church",
        partLabel: "the churchyard",
        art: art(
          "m10131-yard.jpg",
          "Illustration of an empty churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "ume",
            label: "1913",
            x: 32,
            y: 50,
            fact: "In 1913 St. Mark’s became one of the founding members of the Union Methodist Episcopal (UME) Church. Rev. Joseph Ellison, then pastor at St. Mark’s, led efforts to form the denomination as a breakaway of the RMUE Church.",
          },
          {
            id: "block",
            label: "1969",
            x: 74,
            y: 42,
            fact: "In 1969 a concrete block building replaced what may have been the original wood frame church.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1885-1890",
        title: "Years from the denomination to the congregation",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1890 comes 5 years after 1885. Those are the years the marker prints for the formal organization of St. Mark’s and the forming of the RMUE Church in Charleston.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10131-church.jpg",
          "Illustration of a plain wood-frame church. Not a historical photograph.",
        ),
        nowArt: art(
          "m10131-today.jpg",
          "Illustration of a blank roadside marker on a quiet roadside. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plain wood-frame church, for St. Mark’s Church, which the marker says formally organized by 1890. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a quiet roadside. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "formed",
            year: "1885",
            label: "The RMUE Church forms in Charleston.",
            why: "The marker says St. Mark’s Church was originally part of the Reformed Methodist Union Episcopal (RMUE) Church. RMUE ministers worked in the Johns Island area soon after the denomination formed in Charleston in 1885.",
          },
          {
            id: "organized",
            year: "By 1890",
            label: "St. Mark’s formally organizes.",
            why: "The marker says St. Mark’s formally organized by 1890 to serve African American residents of Johns Island and Red Top.",
          },
          {
            id: "ume",
            year: "1913",
            label: "St. Mark’s becomes a founding member of the UME Church.",
            why: "The marker says that in 1913 St. Mark’s became one of the founding members of the Union Methodist Episcopal (UME) Church. Rev. Joseph Ellison, then pastor at St. Mark’s, led efforts to form the denomination as a breakaway of the RMUE Church.",
          },
          {
            id: "block",
            year: "1969",
            label: "A concrete block building replaces what may have been the original wood frame church.",
            why: "The marker says that in 1969 a concrete block building replaced what may have been the original wood frame church.",
          },
        ],
        ["block", "formed", "ume", "organized"],
      ),
      takeaway([
        "St. Mark’s Church was originally part of the Reformed Methodist Union Episcopal (RMUE) Church. RMUE ministers worked in the Johns Island area soon after the denomination formed in Charleston in 1885.",
        "St. Mark’s formally organized by 1890 to serve African American residents of Johns Island and Red Top.",
        "In 1913 St. Mark’s became one of the founding members of the Union Methodist Episcopal (UME) Church. Rev. Joseph Ellison, then pastor at St. Mark’s, led efforts to form the denomination as a breakaway of the RMUE Church. In 1969 a concrete block building replaced what may have been the original wood frame church.",
      ]),
    ],
  ),
];
