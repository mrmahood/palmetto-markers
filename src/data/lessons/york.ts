import type {
  LessonArt,
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** York County, first pass. Every fact is from that marker’s own inscription.
 * A year-span is only the difference of two years the marker prints.
 * Fort Mill markers with only one dated event (46-87) are not here.
 * Missing plaques (46-06, 46-28) are not here. The rest of the county follows. */

const INTRO =
  "Move through the years on this marker. Tap the picture. Every fact is from the inscription.";

function art(file: string, label: string): LessonArt {
  return { src: `/images/lessons/${file}`, label };
}

function cited(id: string, name: string, sides: "front" | "front and back"): LessonSource {
  return {
    id: "inscription",
    label: `South Carolina Historical Marker ${id}, “${name},” ${sides} inscription. South Carolina Department of Archives and History, Historical Marker Program.`,
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
    doneLine: "That’s the order on the marker.",
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

export const yorkLessons: MarkerLesson[] = [
  lesson(
    "46-21",
    "How Fort Mill got its name",
    "Fort Mill timeline",
    [cited("46-21", "Fort Mill", "front and back")],
    [
      {
        kind: "scene",
        id: "land",
        kicker: "1787",
        title: "Land, a mill, and a fort",
        partLabel: "the name",
        art: art(
          "fortmill-land.jpg",
          "Illustration of a grist mill and a log fort in piedmont woods. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "tract",
            label: "The 1787 tract",
            x: 30,
            y: 58,
            fact: "Fort Mill was established on land received in 1787 by Thomas Spratt, one of the first settlers in this area. Local tradition says the 4,535-acre tract, in Catawba Indian territory, was given to Spratt by the Catawbas, who were grateful for his help routing the Shawnees from their lands.",
          },
          {
            id: "name",
            label: "Where the name comes from",
            x: 74,
            y: 46,
            fact: "The marker says Fort Mill is said to have taken its name from Webb’s Grist Mill and a Catawba Indian fort near here.",
          },
        ],
      },
      {
        kind: "scene",
        id: "mill",
        kicker: "1887",
        title: "A mill town",
        partLabel: "the mill",
        art: art(
          "fortmill-mill.jpg",
          "Illustration of a brick textile mill and a row of mill houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "company",
            label: "Fort Mill Mfg. Co.",
            x: 32,
            y: 48,
            fact: "Fort Mill Mfg. Co., now Springs Mills, began here in 1887.",
          },
          {
            id: "springs",
            label: "Leroy Springs",
            x: 74,
            y: 62,
            fact: "Area native Leroy Springs later became its president. By the time of his death in 1931, the marker says he was a nationally known textile magnate.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1787",
        title: "Acres in the tract",
        partLabel: "the acreage",
        value: 4535,
        unit: "acres",
        meant: "What this meant: the marker gives Thomas Spratt’s 1787 tract as 4,535 acres, in Catawba Indian territory. It calls that size local tradition.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "fortmill-mill.jpg",
          "Illustration of a textile mill, for the company the marker says began in 1887. Not a historical photograph.",
        ),
        nowArt: art(
          "fortmill-today.jpg",
          "Illustration of a marker at a small-town street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a mill, for Fort Mill Mfg. Co., which the marker says began in 1887. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a street corner, for the spot the record names: Main and White Streets. Not a photograph of the corner today.",
      },
      order(
        [
          {
            id: "spratt",
            year: "1787",
            label: "Thomas Spratt receives the land the town is built on.",
            why: "The marker dates that land to 1787.",
          },
          {
            id: "post",
            year: "1811",
            label: "The post office is established.",
            why: "The back of the marker dates the post office to 1811.",
          },
          {
            id: "named",
            year: "1833",
            label: "The post office is named Fort Mill.",
            why: "The marker says it was named Fort Mill in 1833.",
          },
          {
            id: "mfg",
            year: "1887",
            label: "Fort Mill Mfg. Co. begins.",
            why: "The marker dates the manufacturing company to 1887.",
          },
        ],
        ["mfg", "named", "spratt", "post"],
      ),
      takeaway([
        "Fort Mill stands on land Thomas Spratt received in 1787. Tradition says the Catawbas gave him a 4,535-acre tract.",
        "The name is said to come from Webb’s Grist Mill and a Catawba fort nearby. The post office opened in 1811 and took the name Fort Mill in 1833.",
        "Fort Mill Mfg. Co., now Springs Mills, began in 1887. Leroy Springs later led it and, by his death in 1931, was a nationally known textile magnate.",
      ]),
    ],
  ),
  lesson(
    "46-45",
    "A night at Springfield",
    "Springfield Plantation timeline",
    [
      cited("46-45", "Springfield Plantation", "front and back"),
      span(
        "“59 years” is 1865 minus 1806, the year Jefferson Davis stopped and the year the marker gives for the house (about 1806).",
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "About 1806",
        title: "A house for John Springs III",
        partLabel: "the house",
        art: art(
          "springfield-house.jpg",
          "Illustration of an early plantation house and a lane. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "john",
            label: "John Springs III",
            x: 34,
            y: 50,
            fact: "This house was built about 1806 for planter John Springs III (1782–1853). He served in the S.C. House from 1828 to 1834 and was a partner in banks, railroads, and textile mills before the Civil War.",
          },
          {
            id: "andrew",
            label: "The 1850s remodeling",
            x: 72,
            y: 58,
            fact: "His son Andrew Baxter Springs (1819–1886) enlarged and remodeled the house in the 1850s. Andrew served in the S.C. House from 1852 to 1856 and was a delegate to the Secession Convention.",
          },
        ],
      },
      {
        kind: "scene",
        id: "night",
        kicker: "April 26, 1865",
        title: "Davis spends the night",
        partLabel: "the night",
        art: art(
          "springfield-night.jpg",
          "Illustration of a house at dusk, with riders seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "stop",
            label: "The stop on April 26",
            x: 30,
            y: 55,
            fact: "On April 26, 1865, Confederate President Jefferson Davis and his Cabinet, traveling south from Richmond, stopped here.",
          },
          {
            id: "flowers",
            label: "Why they stayed",
            x: 76,
            y: 48,
            fact: "Davis and part of his party spent the night here at the insistence of young ladies who greeted them with flowers.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1806–1865",
        title: "Years the house had stood",
        partLabel: "years the house stood",
        value: 59,
        unit: "years",
        meant: "What this meant: 1865 comes 59 years after about 1806. That is the stretch from the building year on the marker to the night Davis stopped here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "springfield-house.jpg",
          "Illustration of a plantation house, for the house built about 1806. Not a historical photograph.",
        ),
        nowArt: art(
          "springfield-today.jpg",
          "Illustration of a house and a marker on a highway. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house, for Springfield as the marker says it was built about 1806. Not a historical photograph.",
        nowCaption:
          "Illustration of a house and a marker, for the site on U.S. 21. The marker says Springfield was listed in the National Register in 1985 and has been headquarters of Leroy Springs & Company since 1987. Not a photograph.",
      },
      order(
        [
          {
            id: "built",
            year: "1806",
            label: "The house is built for John Springs III.",
            why: "The marker dates the house to about 1806.",
          },
          {
            id: "remodel",
            year: "1850s",
            label: "Andrew Baxter Springs enlarges and remodels it.",
            why: "The marker places that work in the 1850s.",
          },
          {
            id: "davis",
            year: "1865",
            label: "Jefferson Davis spends the night of April 26 here.",
            why: "The back of the marker dates that stop to April 26, 1865.",
          },
          {
            id: "register",
            year: "1985",
            label: "Springfield is listed in the National Register.",
            why: "The marker gives 1985 for that listing.",
          },
        ],
        ["davis", "register", "built", "remodel"],
      ),
      takeaway([
        "Springfield was built about 1806 for John Springs III. His son Andrew Baxter Springs enlarged it in the 1850s and was a delegate to the Secession Convention.",
        "On April 26, 1865, Jefferson Davis and part of his Cabinet spent the night, after young ladies greeted them with flowers.",
        "The house was listed in the National Register in 1985. Since 1987 it has been headquarters of Leroy Springs & Company.",
      ]),
    ],
  ),
  lesson(
    "46-49",
    "Four sites, three fires",
    "Unity Presbyterian timeline",
    [cited("46-49", "Unity Presbyterian Church", "front and back")],
    [
      {
        kind: "scene",
        id: "log",
        kicker: "1788",
        title: "A church older than the town",
        partLabel: "the log churches",
        art: art(
          "unity-log.jpg",
          "Illustration of a log church and a small graveyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "first",
            label: "The first church",
            x: 30,
            y: 52,
            fact: "Unity was founded in 1788, before the present town of Fort Mill. The first church, a log building, stood about 2 miles northeast in a community called “Little York.” It burned in 1804.",
          },
          {
            id: "second",
            label: "The second church",
            x: 74,
            y: 58,
            fact: "A log church was then built 5 blocks north, and the first church cemetery was laid out there. That church burned in 1838. The congregation moved to a site just east of where it is now.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brick",
        kicker: "1881",
        title: "Brick from local clay",
        partLabel: "the brick church",
        art: art(
          "unity-brick.jpg",
          "Illustration of a brick church with a central bell tower. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "third",
            label: "The third fire",
            x: 28,
            y: 60,
            fact: "The third sanctuary was a frame building. It burned in 1880. A second cemetery, laid out nearby, became a municipal cemetery in the 1920s.",
          },
          {
            id: "tower",
            label: "The 1881 church",
            x: 70,
            y: 42,
            fact: "A Romanesque Revival church was built here in 1881, with a central bell tower and bricks made from local clay. The church and the historic cemeteries nearby were listed in the National Register in 1992. A new sanctuary was built here in 2010.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1788–2010",
        title: "Sites the marker counts",
        partLabel: "four sites",
        value: 4,
        unit: "sites",
        meant: "What this meant: the marker says this church has occupied four sites nearby. Three of the sanctuaries burned, in 1804, 1838, and 1880.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "unity-log.jpg",
          "Illustration of a log church, for the 1788 congregation. Not a historical photograph.",
        ),
        nowArt: art(
          "unity-today.jpg",
          "Illustration of a marker beside a church. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a log church, for the first building the marker places in “Little York.” Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and a church, for 303 Tom Hall Street, where the marker says a new sanctuary was built in 2010. Not a photograph.",
      },
      order(
        [
          {
            id: "found",
            year: "1788",
            label: "The church is founded. Its first home is a log building.",
            why: "The marker dates the founding to 1788.",
          },
          {
            id: "burn1",
            year: "1804",
            label: "The first church burns.",
            why: "The marker dates that fire to 1804.",
          },
          {
            id: "burn2",
            year: "1838",
            label: "The second church burns.",
            why: "The marker dates the second fire to 1838.",
          },
          {
            id: "brick",
            year: "1881",
            label: "A brick church with a bell tower is built on this site.",
            why: "The marker dates the Romanesque Revival church here to 1881, after the frame sanctuary burned in 1880.",
          },
        ],
        ["brick", "found", "burn2", "burn1"],
      ),
      takeaway([
        "Unity Presbyterian Church was founded in 1788, before Fort Mill as a town. It has occupied four sites.",
        "The first church burned in 1804, the second in 1838, and a frame sanctuary in 1880.",
        "The 1881 brick church used local clay and a central bell tower. A new sanctuary was built here in 2010.",
      ]),
    ],
  ),
  lesson(
    "46-68",
    "The George Fish School",
    "George Fish School timeline",
    [cited("46-68", "George Fish School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1926",
        title: "A brick school opens",
        partLabel: "the school opens",
        art: art(
          "fish-school.jpg",
          "Illustration of a 1920s brick school and a schoolyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "open",
            label: "Opening day",
            x: 34,
            y: 48,
            fact: "This was Fort Mill’s longest operating school dedicated to African Americans. The brick school opened in 1926 on a 4-acre parcel acquired in 1925. It cost $12,200, and a portion was paid by the Julius Rosenwald Fund.",
          },
          {
            id: "name",
            label: "Who it was named for",
            x: 74,
            y: 62,
            fact: "The school was named for George Fish (1868–1933), a white mill manager who supported its construction. African American students had previously been taught at the old Fort Mill Academy building, 1 mile southwest.",
          },
        ],
      },
      {
        kind: "scene",
        id: "rooms",
        kicker: "By 1941",
        title: "From classrooms to a high school",
        partLabel: "the classrooms",
        art: art(
          "fish-rooms.jpg",
          "Illustration of a classroom and a school stage. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "plan",
            label: "The six-teacher plan",
            x: 30,
            y: 55,
            fact: "The design followed the Rosenwald Fund’s six-teacher floor plan. It included six classrooms, an auditorium, a stage, and a library.",
          },
          {
            id: "grades",
            label: "The grades",
            x: 74,
            y: 46,
            fact: "By the 1930s the school enrolled grades 1 through 8, then added a ninth grade and, by 1941, a high school. It stayed segregated until 1968, when it integrated and became Fort Mill Jr. High. It was sold in 1986 and later demolished.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1926",
        title: "What the marker says it cost",
        partLabel: "the cost",
        value: 12200,
        unit: "dollars",
        meant: "What this meant: the marker says the brick school cost $12,200. A portion of that was paid by the Julius Rosenwald Fund.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "fish-school.jpg",
          "Illustration of a brick school, for the building that opened in 1926. Not a historical photograph.",
        ),
        nowArt: art(
          "fish-today.jpg",
          "Illustration of a marker on an open lot. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the school the marker says opened in 1926. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on an open lot, for 401 Steele Street. The marker says the school was sold in 1986 and later demolished. Not a photograph.",
      },
      order(
        [
          {
            id: "land",
            year: "1925",
            label: "The 4-acre parcel is acquired.",
            why: "The marker dates the land to 1925.",
          },
          {
            id: "open",
            year: "1926",
            label: "The brick school opens.",
            why: "The marker dates the opening to 1926.",
          },
          {
            id: "high",
            year: "1941",
            label: "It has become a high school.",
            why: "The marker says a high school was in place by 1941.",
          },
          {
            id: "integrate",
            year: "1968",
            label: "It integrates and becomes Fort Mill Jr. High.",
            why: "The marker dates that change to 1968.",
          },
        ],
        ["high", "land", "integrate", "open"],
      ),
      takeaway([
        "George Fish School opened in 1926 as Fort Mill’s longest operating school for African Americans. It cost $12,200, with help from the Julius Rosenwald Fund.",
        "The six-teacher plan had six classrooms, an auditorium, a stage, and a library. By 1941 it included a high school.",
        "It stayed segregated until 1968, then became Fort Mill Jr. High. It was sold in 1986 and later demolished.",
      ]),
    ],
  ),
  lesson(
    "46-89",
    "Fort Mill High School",
    "Fort Mill High School timeline",
    [cited("46-89", "Fort Mill High School", "front and back")],
    [
      {
        kind: "scene",
        id: "wings",
        kicker: "1952",
        title: "A new campus on Banks Street",
        partLabel: "the new campus",
        art: art(
          "fmhs-wings.jpg",
          "Illustration of a 1950s brick school with several wings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "move",
            label: "The move",
            x: 32,
            y: 50,
            fact: "For more than thirty years this was Fort Mill High School. The school moved here in 1952–53, into a brick multi-wing building designed by Columbia architect G. Thomas Harmon. It replaced a school from about 1930 on Tom Hall Street.",
          },
          {
            id: "who",
            label: "Who it served",
            x: 74,
            y: 58,
            fact: "At first it served white residents of the Fort Mill area. The marker says it had more than 300 students in its first year on this site.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gym",
        kicker: "1953",
        title: "The gym that is still here",
        partLabel: "the gym",
        art: art(
          "fmhs-gym.jpg",
          "Illustration of a brick gymnasium beside an empty school field. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "gym",
            label: "The gymnasium",
            x: 30,
            y: 52,
            fact: "A brick gymnasium was built south of the school in 1953–54. The marker says it is the only original building that still stands.",
          },
          {
            id: "students",
            label: "Integration",
            x: 74,
            y: 46,
            fact: "The first three African American students enrolled in 1965–66. The school fully integrated in 1968–69. It stayed a high school until 1986–87, when a new school opened west of town on Munn Road. This site then became Fort Mill Middle School, housed other programs, and was razed in 2014.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1965–66",
        title: "The first African American students",
        partLabel: "three students",
        value: 3,
        unit: "students",
        meant: "What this meant: the marker says the school’s first three African American students enrolled in 1965–66. Full integration came in 1968–69.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "fmhs-wings.jpg",
          "Illustration of a multi-wing school, for the 1952 campus. Not a historical photograph.",
        ),
        nowArt: art(
          "fmhs-today.jpg",
          "Illustration of a brick gym and a marker, with the school gone. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the multi-wing school the marker says opened here in 1952–53. Not a historical photograph.",
        nowCaption:
          "Illustration of a gym and a marker, for Banks and Academy Streets. The marker says the gym still stands and the rest of this site was razed in 2014. Not a photograph.",
      },
      order(
        [
          {
            id: "move",
            year: "1952",
            label: "The high school moves to this site.",
            why: "The marker dates the move to 1952–53.",
          },
          {
            id: "three",
            year: "1965",
            label: "The first three African American students enroll.",
            why: "The marker dates that enrollment to 1965–66.",
          },
          {
            id: "full",
            year: "1968",
            label: "The school fully integrates.",
            why: "The marker dates full integration to 1968–69.",
          },
          {
            id: "razed",
            year: "2014",
            label: "This site is razed.",
            why: "The marker says this site was razed in 2014, after years as a middle school and other programs. It also says the 1953-54 gym is the only original building that still stands.",
          },
        ],
        ["razed", "move", "full", "three"],
      ),
      takeaway([
        "Fort Mill High School stood on this site from 1952–53, in a brick building by G. Thomas Harmon, and at first served white students.",
        "The first three African American students enrolled in 1965–66. The school fully integrated in 1968–69.",
        "It was a high school until 1986–87. The gym from 1953–54 still stands. The rest of the site was razed in 2014.",
      ]),
    ],
  ),
  lesson(
    "46-04",
    "The last cabinet meeting",
    "Jefferson Davis in Fort Mill timeline",
    [cited("46-04", "Jefferson Davis’s Flight South, April 26–27, 1865", "front and back")],
    [
      {
        kind: "scene",
        id: "stop",
        kicker: "April 26, 1865",
        title: "The Cabinet stops in Fort Mill",
        partLabel: "the stop",
        art: art(
          "davis-stop.jpg",
          "Illustration of a homestead and riders seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "party",
            label: "Who stopped",
            x: 32,
            y: 50,
            fact: "Confederate President Jefferson Davis and his Cabinet, traveling south from Richmond with a cavalry escort, stopped at Fort Mill on April 26, 1865.",
          },
          {
            id: "nights",
            label: "Where they slept",
            x: 74,
            y: 56,
            fact: "Davis spent the night at Springfield, the home of Col. Andrew Baxter Springs, about 3.5 miles north. The others stayed here, at the home of Col. William Elliott White.",
          },
        ],
      },
      {
        kind: "scene",
        id: "lawn",
        kicker: "April 27, 1865",
        title: "A meeting on the lawn",
        partLabel: "the lawn",
        art: art(
          "davis-lawn.jpg",
          "Illustration of a morning meeting on a lawn, figures seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "resign",
            label: "The resignation",
            x: 30,
            y: 58,
            fact: "On the morning of April 27, 1865, the Cabinet met on this lawn. They discussed the resignation of Secretary of the Treasury George A. Trenholm and appointed Postmaster General John H. Reagan to succeed him.",
          },
          {
            id: "leave",
            label: "Leaving for Yorkville",
            x: 74,
            y: 46,
            fact: "The group, hoping to join the few Confederates still in the field, left for Yorkville later that day.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "davis-lawn.jpg",
          "Illustration of a lawn meeting, for the Cabinet meeting of April 27, 1865. Not a historical photograph.",
        ),
        nowArt: art(
          "davis-today.jpg",
          "Illustration of a marker beside a road at the edge of town. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the lawn meeting the marker dates to the morning of April 27, 1865. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a road, for North White Street near the west edge of Fort Mill. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "stop",
            year: "Apr 26",
            label: "Davis and the Cabinet stop in Fort Mill.",
            why: "The marker dates the stop to April 26, 1865.",
          },
          {
            id: "night",
            year: "Apr 26",
            label: "Davis sleeps at Springfield. The others stay at the White home.",
            why: "The marker places that night on April 26, after the stop.",
          },
          {
            id: "meet",
            year: "Apr 27",
            label: "The Cabinet meets on the lawn. Reagan succeeds Trenholm.",
            why: "The marker dates the lawn meeting to the morning of April 27.",
          },
          {
            id: "york",
            year: "Apr 27",
            label: "The group leaves for Yorkville.",
            why: "The marker says they left for Yorkville later that same day.",
          },
        ],
        ["york", "stop", "meet", "night"],
      ),
      takeaway([
        "On April 26, 1865, Jefferson Davis and his Cabinet stopped in Fort Mill on the way south from Richmond.",
        "Davis slept at Springfield, about 3.5 miles north. The others stayed at the home of Col. William Elliott White.",
        "The next morning the Cabinet met on this lawn, named John H. Reagan to succeed George A. Trenholm, and left for Yorkville.",
      ]),
    ],
  ),
  lesson(
    "46-76",
    "The Treaty of Nation Ford",
    "Nation Ford timeline",
    [cited("46-76", "Crossroads at Nation Ford", "front and back")],
    [
      {
        kind: "scene",
        id: "ford",
        kicker: "Before contact",
        title: "A ford and a fork in the path",
        partLabel: "the ford",
        art: art(
          "nation-ford.jpg",
          "Illustration of a shallow river ford and a path that splits. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "crossing",
            label: "The ford",
            x: 30,
            y: 62,
            fact: "Nation Ford was a river crossing from before European contact. The Catawba Nation and other groups used it to cross the Catawba River.",
          },
          {
            id: "path",
            label: "The Crossroads",
            x: 74,
            y: 46,
            fact: "It was part of the Great Trading Path from Virginia to Georgia. The path forked near here at a place called “the Crossroads,” east toward Camden and west toward Saluda. An inn, a school, and several houses were eventually built at the Crossroads.",
          },
        ],
      },
      {
        kind: "scene",
        id: "treaty",
        kicker: "1840",
        title: "A treaty at the Crossroads",
        partLabel: "the treaty",
        art: art(
          "nation-treaty.jpg",
          "Illustration of a roadside inn and an outdoor table with a blank paper. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sign",
            label: "The 1840 meeting",
            x: 32,
            y: 48,
            fact: "In 1840, state commissioners and Catawba leaders met at the Crossroads and signed the Treaty of Nation Ford. The tribe agreed to give up the surrounding 144,000 acres for payment and land in North Carolina.",
          },
          {
            id: "fail",
            label: "What happened next",
            x: 74,
            y: 60,
            fact: "The tribe ceded the land, but the state did not keep the agreement after North Carolina refused to accept the Catawbas. Tribe members resettled on a 630-acre reservation 7 miles south, established by South Carolina in 1842.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1840",
        title: "Acres named in the treaty",
        partLabel: "the acres",
        value: 144000,
        unit: "acres",
        meant: "What this meant: the marker says the Catawba Nation agreed to give up 144,000 surrounding acres. North Carolina refused the plan, and South Carolina did not keep the agreement. In 1842 the state set aside a 630-acre reservation 7 miles south.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "nation-ford.jpg",
          "Illustration of a river ford and a forked path. Not a historical photograph.",
        ),
        nowArt: art(
          "nation-today.jpg",
          "Illustration of a marker beside a road and low buildings. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the ford and the forked trading path the marker describes. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a road, for David Hutchison Road at the Rock Hill Commerce Center. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "ford",
            year: "Before 1840",
            label: "The Catawba Nation and others use Nation Ford to cross the river.",
            why: "The marker calls the ford a pre-contact crossing, older than the treaty.",
          },
          {
            id: "sign",
            year: "1840",
            label: "Leaders sign the Treaty of Nation Ford at the Crossroads.",
            why: "The marker dates the treaty to 1840.",
          },
          {
            id: "cdeed",
            year: "1840",
            label: "The tribe cedes 144,000 acres. North Carolina refuses, and the state does not keep the deal.",
            why: "The marker places the cession, the refusal, and the broken agreement in the same account of the 1840 treaty.",
          },
          {
            id: "reserve",
            year: "1842",
            label: "Tribe members resettle on a 630-acre reservation 7 miles south.",
            why: "The marker dates that reservation to 1842.",
          },
        ],
        ["reserve", "ford", "cdeed", "sign"],
      ),
      takeaway([
        "Nation Ford was a Catawba river crossing and a fork in the Great Trading Path, called the Crossroads.",
        "In 1840 Catawba leaders and state commissioners signed the Treaty of Nation Ford. It named 144,000 acres.",
        "North Carolina refused, South Carolina did not keep the agreement, and in 1842 the tribe resettled on 630 acres, 7 miles south.",
      ]),
    ],
  ),
];
