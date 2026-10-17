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

export const charlestonLessonsX: MarkerLesson[] = [
  lesson(
    "10-110",
    "Built in 1956 by the Atlantic Coast Line",
    "Charleston Station timeline",
    [
      cited("10-110", "Charleston Station", "front and back"),
      span(
        '"62 years" is 2018 minus 1956, the years the marker prints for the razing and the building of Charleston Station.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "station",
        kicker: "1956",
        title: "A long, linear station",
        partLabel: "the station",
        art: art(
          "m10110-station.jpg",
          "Illustration of a long, low station. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1956",
            x: 32,
            y: 48,
            fact: "The Charleston Station was built in 1956 by the Atlantic Coast Line (ACL). ACL hoped the new station would attract customers, particularly tourists traveling on its Florida-bound trains.",
          },
          {
            id: "style",
            label: "International style",
            x: 74,
            y: 40,
            fact: "Charleston Station was a two-story building designed in the International style and was emblematic of mid-century modern architecture. It was long and linear, with a low-sloped roof. The most distinctive feature was the green Mo-Sai pre-cast concrete panels used at the entrance and around the windows.",
          },
        ],
      },
      {
        kind: "scene",
        id: "train",
        kicker: "1967",
        title: "Mergers, Amtrak, and separate rooms",
        partLabel: "the trains",
        art: art(
          "m10110-train.jpg",
          "Illustration of a passenger train. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "merged",
            label: "1967 and 1970",
            x: 32,
            y: 50,
            fact: "In 1967, ACL merged with Seaboard Air Line to become the Seaboard Coast Line, which later merged with CSX. In 1970, Congress passed an act to prevent the financial collapse of several U.S. railroads by creating Amtrak, a national railroad corporation.",
          },
          {
            id: "razed",
            label: "Razed in 2018",
            x: 74,
            y: 42,
            fact: "When it opened in 1956, the station was segregated by race, with separate waiting rooms, bathrooms, and drinking fountains. The Charleston Station was razed in 2018.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1956-2018",
        title: "Years from the building to the razing",
        partLabel: "62 years",
        value: 62,
        unit: "years",
        meant:
          "What this meant: 2018 comes 62 years after 1956. The marker says the Charleston Station was built in 1956 and razed in 2018.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10110-station.jpg",
          "Illustration of a long, low station. Not a historical photograph.",
        ),
        nowArt: art(
          "m10110-today.jpg",
          "Illustration of a blank roadside marker beside a quiet lot. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a long, low station, for the Charleston Station the marker says was built in 1956 by the Atlantic Coast Line. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a quiet lot. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1956",
            label: "The Atlantic Coast Line builds Charleston Station.",
            why: "The marker says the Charleston Station was built in 1956 by the Atlantic Coast Line (ACL). ACL hoped the new station would attract customers, particularly tourists traveling on its Florida-bound trains. When it opened in 1956, the station was segregated by race, with separate waiting rooms, bathrooms, and drinking fountains.",
          },
          {
            id: "merged",
            year: "1967",
            label: "ACL merges with Seaboard Air Line.",
            why: "The marker says that in 1967, ACL merged with Seaboard Air Line to become the Seaboard Coast Line, which later merged with CSX.",
          },
          {
            id: "amtrak",
            year: "1970",
            label: "Congress creates Amtrak.",
            why: "The marker says that in 1970, Congress passed an act to prevent the financial collapse of several U.S. railroads by creating Amtrak, a national railroad corporation.",
          },
          {
            id: "razed",
            year: "2018",
            label: "The Charleston Station is razed.",
            why: "The marker says the Charleston Station was razed in 2018.",
          },
        ],
        ["amtrak", "razed", "built", "merged"],
      ),
      takeaway([
        "The Charleston Station was built in 1956 by the Atlantic Coast Line (ACL). ACL hoped the new station would attract customers, particularly tourists traveling on its Florida-bound trains. When it opened in 1956, the station was segregated by race, with separate waiting rooms, bathrooms, and drinking fountains.",
        "Charleston Station was a two-story building designed in the International style and was emblematic of mid-century modern architecture. It was long and linear, with a low-sloped roof. The most distinctive feature was the green Mo-Sai pre-cast concrete panels used at the entrance and around the windows.",
        "In 1967, ACL merged with Seaboard Air Line to become the Seaboard Coast Line, which later merged with CSX. In 1970, Congress passed an act to prevent the financial collapse of several U.S. railroads by creating Amtrak, a national railroad corporation. The Charleston Station was razed in 2018.",
      ]),
    ],
  ),
  lesson(
    "10-111",
    "Charleston’s longest operating theater for African Americans",
    "Lincoln Theatre timeline",
    [
      cited("10-111", "Lincoln Theatre", "front and back"),
      span(
        '"70 years" is 1989 minus 1919, the years the marker prints for the razing and the opening of the Lincoln Theatre.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "theatre",
        kicker: "1919",
        title: "Opened at 601 King St.",
        partLabel: "the theater",
        art: art(
          "m10111-theatre.jpg",
          "Illustration of a theater facade. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1919",
            x: 32,
            y: 46,
            fact: "In 1919, the Lincoln Theatre opened at 601 King St. and became Charleston’s longest operating theater for African Americans. It was run for most of its history by African American manager Damon Ireland Thomas (1875-1955). For a time it was the only theater in the city where black patrons sat without restrictions.",
          },
          {
            id: "closed",
            label: "Closed c.1971",
            x: 74,
            y: 56,
            fact: "The Lincoln hosted movies, vaudeville troupes, public speakers, and local acts. It closed c.1971 and was razed in 1989 after sustaining damage from Hurricane Hugo.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "First decades of the 1900s",
        title: "Little Jerusalem on King Street",
        partLabel: "the street",
        art: art(
          "m10111-street.jpg",
          "Illustration of a commercial street of storefronts. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "shops",
            label: "Little Jerusalem",
            x: 32,
            y: 52,
            fact: "In the first decades of the 1900s, Jewish-owned stores clustered along King St. in an immigrant neighborhood sometimes called “Little Jerusalem.” Businesses here included furniture and dry goods stores, shoe repair shops, Zalkin’s kosher meat market, and Mazo’s deli.",
          },
          {
            id: "banov",
            label: "Samuel L. Banov",
            x: 74,
            y: 40,
            fact: "One early arrival, Russian-born Samuel L. Banov (1870-1933), ran a successful clothing store at 595 King St. and invested in real estate nearby, including 601 King St., which he opened in 1919 as the Lincoln Theatre.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1919-1989",
        title: "Years from the opening to the razing",
        partLabel: "70 years",
        value: 70,
        unit: "years",
        meant:
          "What this meant: 1989 comes 70 years after 1919. The marker says the Lincoln Theatre opened in 1919 and was razed in 1989.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10111-theatre.jpg",
          "Illustration of a theater facade. Not a historical photograph.",
        ),
        nowArt: art(
          "m10111-today.jpg",
          "Illustration of a blank roadside marker on a downtown street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a theater facade, for the Lincoln Theatre the marker says opened at 601 King St. in 1919. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a downtown street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "1919",
            label: "The Lincoln Theatre opens at 601 King St.",
            why: "The marker says that in 1919 the Lincoln Theatre opened at 601 King St. and became Charleston’s longest operating theater for African Americans. It also says Samuel L. Banov (1870-1933) opened 601 King St. in 1919 as the Lincoln Theatre.",
          },
          {
            id: "closed",
            year: "c.1971",
            label: "The Lincoln closes.",
            why: "The marker says the Lincoln hosted movies, vaudeville troupes, public speakers, and local acts. It closed c.1971.",
          },
          {
            id: "razed",
            year: "1989",
            label: "The theater is razed after Hurricane Hugo.",
            why: "The marker says it was razed in 1989 after sustaining damage from Hurricane Hugo.",
          },
        ],
        ["closed", "razed", "opened"],
      ),
      takeaway([
        "In 1919, the Lincoln Theatre opened at 601 King St. and became Charleston’s longest operating theater for African Americans. It was run for most of its history by African American manager Damon Ireland Thomas (1875-1955). For a time it was the only theater in the city where black patrons sat without restrictions.",
        "The Lincoln hosted movies, vaudeville troupes, public speakers, and local acts. It closed c.1971 and was razed in 1989 after sustaining damage from Hurricane Hugo.",
        "In the first decades of the 1900s, Jewish-owned stores clustered along King St. in an immigrant neighborhood sometimes called “Little Jerusalem.” Businesses here included furniture and dry goods stores, shoe repair shops, Zalkin’s kosher meat market, and Mazo’s deli. One early arrival, Russian-born Samuel L. Banov (1870-1933), ran a successful clothing store at 595 King St. and invested in real estate nearby, including 601 King St., which he opened in 1919 as the Lincoln Theatre.",
      ]),
    ],
  ),
  lesson(
    "10-112",
    "The oldest college in S.C.",
    "College of Charleston timeline",
    [
      cited("10-112", "College of Charleston", "front and back"),
      span(
        '"15 years" is 1785 minus 1770, the years the marker prints for the chartering and the founding of the College of Charleston.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "college",
        kicker: "1770",
        title: "Founded, then chartered",
        partLabel: "the college",
        art: art(
          "m10112-college.jpg",
          "Illustration of classical campus buildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1770 and 1785",
            x: 32,
            y: 44,
            fact: "Founded in 1770 and chartered in 1785, the College of Charleston is the oldest college in S.C. and is among the oldest in the U.S.",
          },
          {
            id: "buildings",
            label: "Three listed buildings",
            x: 74,
            y: 56,
            fact: "The Cistern Yard, representing the core of campus, has three buildings listed on the National Register of Historic Places: Randolph Hall (c.1830), Porter’s Lodge (1851), and Towell Library (1856). Randolph Hall is one of the longest-serving academic buildings in the U.S.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1837",
        title: "Municipal, private, then public again",
        partLabel: "the yard",
        art: art(
          "m10112-yard.jpg",
          "Illustration of a college cistern yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "municipal",
            label: "1837 and 1949",
            x: 32,
            y: 48,
            fact: "Initially a private school, in 1837 the College became the first municipal college in the country. It resumed private operations in 1949 to avoid racial integration.",
          },
          {
            id: "public",
            label: "A university in 1992",
            x: 74,
            y: 40,
            fact: "The school was all-male until 1918 and integrated in 1967. It became a public institution again in 1970, overseen by the State of South Carolina. In 1972, the College established its first graduate program and formalized its status as a university in 1992.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1770-1785",
        title: "Years from the founding to the charter",
        partLabel: "15 years",
        value: 15,
        unit: "years",
        meant:
          "What this meant: 1785 comes 15 years after 1770. The marker says the College of Charleston was founded in 1770 and chartered in 1785.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10112-college.jpg",
          "Illustration of classical campus buildings. Not a historical photograph.",
        ),
        nowArt: art(
          "m10112-today.jpg",
          "Illustration of a blank roadside marker at the edge of a campus lawn. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of classical campus buildings, for the College of Charleston the marker says was founded in 1770. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker at the edge of a campus lawn. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1770",
            label: "The College of Charleston is founded.",
            why: "The marker says it was founded in 1770 and chartered in 1785, and that it is the oldest college in S.C. and among the oldest in the U.S.",
          },
          {
            id: "chartered",
            year: "1785",
            label: "The College is chartered.",
            why: "The marker says the College of Charleston was founded in 1770 and chartered in 1785.",
          },
          {
            id: "municipal",
            year: "1837",
            label: "It becomes the first municipal college in the country.",
            why: "The marker says that, initially a private school, in 1837 the College became the first municipal college in the country. It resumed private operations in 1949 to avoid racial integration.",
          },
          {
            id: "university",
            year: "1992",
            label: "It formalizes its status as a university.",
            why: "The marker says the school was all-male until 1918 and integrated in 1967. It became a public institution again in 1970, overseen by the State of South Carolina. In 1972, the College established its first graduate program and formalized its status as a university in 1992.",
          },
        ],
        ["chartered", "university", "founded", "municipal"],
      ),
      takeaway([
        "Founded in 1770 and chartered in 1785, the College of Charleston is the oldest college in S.C. and is among the oldest in the U.S.",
        "The Cistern Yard, representing the core of campus, has three buildings listed on the National Register of Historic Places: Randolph Hall (c.1830), Porter’s Lodge (1851), and Towell Library (1856). Randolph Hall is one of the longest-serving academic buildings in the U.S.",
        "Initially a private school, in 1837 the College became the first municipal college in the country. It resumed private operations in 1949 to avoid racial integration. The school was all-male until 1918 and integrated in 1967. It became a public institution again in 1970, overseen by the State of South Carolina. In 1972, the College established its first graduate program and formalized its status as a university in 1992.",
      ]),
    ],
  ),
  lesson(
    "10-113",
    "Barracks at the Charleston Navy Yard",
    "Marine Barracks timeline",
    [cited("10-113", "Marine Barracks", "front and back")],
    [
      {
        kind: "scene",
        id: "barracks",
        kicker: "1910",
        title: "Built for Marines at the yard",
        partLabel: "the barracks",
        art: art(
          "m10113-barracks.jpg",
          "Illustration of a masonry barracks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "constructed",
            label: "1910",
            x: 32,
            y: 47,
            fact: "Constructed in 1910 and designed by architect Jules Henri de Sibour, this building served as barracks for members of the United States Marine Corps (USMC) stationed at the Charleston Navy Yard, later Naval Base Charleston. The barracks was the most prominent feature of a Marine footprint at the base that reached 58 acres by 1924 and shrank to 23 acres by 1964.",
          },
          {
            id: "style",
            label: "Classical Revival",
            x: 74,
            y: 41,
            fact: "This two-story masonry building sits on a raised basement and exemplifies the Classical Revival style of many early 20th century structures on the base.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "By 1984",
        title: "A parade ground, then office space",
        partLabel: "the yard",
        art: art(
          "m10113-yard.jpg",
          "Illustration of an open grassed yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "drills",
            label: "The grassed yard",
            x: 32,
            y: 54,
            fact: "Marines conducted drills on the open grassed yard to the building’s south, used as a parade ground after a larger yard to the east was developed prior to WWII.",
          },
          {
            id: "vacated",
            label: "By 1984",
            x: 74,
            y: 43,
            fact: "The Marines’ primary duty here was maintaining security for the industrial shipyard. USMC vacated the barracks by 1984. The building was later used for office space.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "By 1924",
        title: "Acres in the Marine footprint",
        partLabel: "58 acres",
        value: 58,
        unit: "acres",
        meant:
          "What this meant: the marker says the Marine footprint at the base reached 58 acres by 1924. It also says that footprint shrank to 23 acres by 1964.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10113-barracks.jpg",
          "Illustration of a masonry barracks. Not a historical photograph.",
        ),
        nowArt: art(
          "m10113-today.jpg",
          "Illustration of a blank roadside marker beside a quiet road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a masonry barracks, for the building the marker says was constructed in 1910. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a quiet road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "constructed",
            year: "1910",
            label: "The barracks is constructed.",
            why: "The marker says it was constructed in 1910 and designed by architect Jules Henri de Sibour, as barracks for members of the United States Marine Corps (USMC) stationed at the Charleston Navy Yard, later Naval Base Charleston.",
          },
          {
            id: "acres",
            year: "By 1924",
            label: "The Marine footprint reaches 58 acres.",
            why: "The marker says the barracks was the most prominent feature of a Marine footprint at the base that reached 58 acres by 1924.",
          },
          {
            id: "shrank",
            year: "By 1964",
            label: "The footprint shrinks to 23 acres.",
            why: "The marker says the Marine footprint shrank to 23 acres by 1964.",
          },
          {
            id: "vacated",
            year: "By 1984",
            label: "The USMC vacates the barracks.",
            why: "The marker says the Marines’ primary duty here was maintaining security for the industrial shipyard. USMC vacated the barracks by 1984. The building was later used for office space.",
          },
        ],
        ["vacated", "acres", "constructed", "shrank"],
      ),
      takeaway([
        "Constructed in 1910 and designed by architect Jules Henri de Sibour, this building served as barracks for members of the United States Marine Corps (USMC) stationed at the Charleston Navy Yard, later Naval Base Charleston.",
        "The barracks was the most prominent feature of a Marine footprint at the base that reached 58 acres by 1924 and shrank to 23 acres by 1964. This two-story masonry building sits on a raised basement and exemplifies the Classical Revival style of many early 20th century structures on the base.",
        "Marines conducted drills on the open grassed yard to the building’s south, used as a parade ground after a larger yard to the east was developed prior to WWII. The Marines’ primary duty here was maintaining security for the industrial shipyard. USMC vacated the barracks by 1984. The building was later used for office space.",
      ]),
    ],
  ),
];
