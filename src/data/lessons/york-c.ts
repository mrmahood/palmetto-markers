import type {
  LessonArt,
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Rock Hill continuation. Every fact is from that marker's own inscription.
 * A year-span is only the difference of two years the marker prints.
 * Missing plaques (46-06, 46-57, 46-58) are not here.
 * 46-05 has a single date and is not here. */

const INTRO =
  "Move through the years on this marker. Tap the picture. Every fact is from the inscription.";

function art(file: string, label: string): LessonArt {
  return { src: `/images/lessons/${file}`, label };
}

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

export const yorkLessonsC: MarkerLesson[] = [
  lesson(
    "46-40",
    "The Standard Cotton Mill",
    "Standard Cotton Mill timeline",
    [cited("46-40", "Standard Cotton Mill", "front and back")],
    [
      {
        kind: "scene",
        id: "looms",
        kicker: "1888",
        title: "A mill paid for at home",
        partLabel: "the mill opens",
        art: art(
          "standard-looms.jpg",
          "Illustration of a brick textile mill and rows of looms. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "The second mill",
            x: 32,
            y: 48,
            fact: "The Standard Cotton Mill, built in 1888-89, was the second textile mill in Rock Hill. John R. London promoted it. Contractor A. D. Holler built it with 200 looms. By 1893 it had grown to almost 500 looms and made gingham, shirting, and towels.",
          },
          {
            id: "stock",
            label: "Who paid for it",
            x: 74,
            y: 58,
            fact: "Local citizens financed it entirely, including schoolchildren, who bought stock for 50 cents a week. The marker says the mill was a major factor in Rock Hill's growth for the next 30 years.",
          },
        ],
      },
      {
        kind: "scene",
        id: "village",
        kicker: "1907",
        title: "The village grows with the mill",
        partLabel: "the mill village",
        art: art(
          "standard-village.jpg",
          "Illustration of a mill village of small houses beside a larger mill. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sold",
            label: "A new name",
            x: 30,
            y: 50,
            fact: "In 1898 the mill was sold to a Charlotte firm and renamed Highland Park Manufacturing Company No. 2.",
          },
          {
            id: "later",
            label: "After the mill closed",
            x: 74,
            y: 46,
            fact: "A large expansion in 1907 enlarged this mill village. The mill closed in 1968, was listed in the National Register in 1992, and was renovated in 2005 as housing for seniors.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1888",
        title: "Looms when the mill opened",
        partLabel: "200 looms",
        value: 200,
        unit: "looms",
        meant: "What this meant: the marker says A. D. Holler built the mill with 200 looms. By 1893 it had almost 500, making gingham, shirting, and towels.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "standard-looms.jpg",
          "Illustration of a textile mill, for the building of 1888-89. Not a historical photograph.",
        ),
        nowArt: art(
          "standard-today.jpg",
          "Illustration of a mill building and a marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the mill the marker says was built in 1888-89. Not a historical photograph.",
        nowCaption:
          "Illustration of a mill and a marker, for 369 Standard Street. The marker says the mill was renovated in 2005 as housing for seniors. Not a photograph.",
      },
      order(
        [
          {
            id: "open",
            year: "1888",
            label: "The Standard Cotton Mill is built, Rock Hill's second textile mill.",
            why: "The marker dates the building to 1888-89.",
          },
          {
            id: "rename",
            year: "1898",
            label: "A Charlotte firm buys it and renames it Highland Park No. 2.",
            why: "The marker dates that sale and new name to 1898.",
          },
          {
            id: "expand",
            year: "1907",
            label: "The mill and its village expand.",
            why: "The marker dates that expansion to 1907.",
          },
          {
            id: "close",
            year: "1968",
            label: "The mill closes.",
            why: "The marker dates the closing to 1968.",
          },
        ],
        ["close", "open", "expand", "rename"],
      ),
      takeaway([
        "Standard Cotton Mill, built in 1888-89, was Rock Hill's second textile mill. Local people, including schoolchildren, paid for it.",
        "It opened with 200 looms and had almost 500 by 1893. In 1898 it became Highland Park Manufacturing Company No. 2.",
        "The mill and village expanded in 1907. The mill closed in 1968 and was renovated in 2005 as housing for seniors.",
      ]),
    ],
  ),
  lesson(
    "46-41",
    "Rock Hill High School",
    "Rock Hill High timeline",
    [
      cited("46-41", "Rock Hill High School", "front and back"),
      span("\"64 years\" is 1978 minus 1914, the year the marker says this school was torn down and the year it was built."),
    ],
    [
      {
        kind: "scene",
        id: "built",
        kicker: "1914",
        title: "A high school on this site",
        partLabel: "the 1914 school",
        art: art(
          "rhhs-school.jpg",
          "Illustration of an early brick high school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "graded",
            label: "Before the high school",
            x: 30,
            y: 52,
            fact: "Rock Hill High grew out of Rock Hill Graded School, opened in 1888 for grades 1 through 9. The name Rock Hill High was first used in 1907-08 for a boys' school in the former Presbyterian High School. A property dispute closed that school after a year, and the students went back to the graded school.",
          },
          {
            id: "here",
            label: "The school built here",
            x: 74,
            y: 46,
            fact: "In 1914 a new coeducational Rock Hill High School was built here, for grades 8 through 10. Grade 11 was added in 1917. Grade 12 was added in 1948.",
          },
        ],
      },
      {
        kind: "scene",
        id: "later",
        kicker: "1965",
        title: "A trade, then a new school",
        partLabel: "the later years",
        art: art(
          "rhhs-yard.jpg",
          "Illustration of a schoolyard and a brick school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "courses",
            label: "What they added",
            x: 32,
            y: 55,
            fact: "Additions or new buildings went up from 1923 to 1952. Agriculture and commercial courses were added, and so were music, art, sports, and other activities.",
          },
          {
            id: "move",
            label: "Leaving this site",
            x: 74,
            y: 48,
            fact: "In 1965 Rock Hill High and Sullivan Junior High, on Eden Terrace, traded buildings. A new Rock Hill High was built on Springdale Road in 1977. The 1914 school was torn down in 1978.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1914-1978",
        title: "Years the 1914 building stood",
        partLabel: "years the building stood",
        value: 64,
        unit: "years",
        meant: "What this meant: 1978 comes 64 years after 1914. That is the stretch from the year this school was built to the year the marker says it was torn down.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "rhhs-school.jpg",
          "Illustration of a high school, for the 1914 building. Not a historical photograph.",
        ),
        nowArt: art(
          "rhhs-today.jpg",
          "Illustration of a marker on an open street, the school gone. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the coeducational high school the marker says was built here in 1914. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on East White Street. The marker says the 1914 school was torn down in 1978. Not a photograph.",
      },
      order(
        [
          {
            id: "graded",
            year: "1888",
            label: "Rock Hill Graded School opens, for grades 1 through 9.",
            why: "The marker dates that school to 1888.",
          },
          {
            id: "name",
            year: "1907",
            label: "The name Rock Hill High is used for a boys' school.",
            why: "The marker dates that first use of the name to 1907-08.",
          },
          {
            id: "here",
            year: "1914",
            label: "A new coeducational high school is built here.",
            why: "The marker dates this building to 1914.",
          },
          {
            id: "down",
            year: "1978",
            label: "The 1914 school is torn down.",
            why: "The marker dates the demolition to 1978, after a new school opened on Springdale Road in 1977.",
          },
        ],
        ["down", "graded", "here", "name"],
      ),
      takeaway([
        "The name Rock Hill High was first used in 1907-08. That boys' school closed after a year because of a property dispute.",
        "The coeducational school on this site opened in 1914 for grades 8 through 10. Grade 12 was added in 1948.",
        "In 1965 the high school traded buildings with Sullivan Junior High. The 1914 school was torn down in 1978.",
      ]),
    ],
  ),
  lesson(
    "46-42",
    "A post office and a high-rise",
    "Post office and Citizens' Building timeline",
    [cited("46-42", "U.S. Post Office and Courthouse", "front and back")],
    [
      {
        kind: "scene",
        id: "post",
        kicker: "1932",
        title: "The post office and courthouse",
        partLabel: "the post office",
        art: art(
          "posto-building.jpg",
          "Illustration of a formal public building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "open",
            label: "Opening in 1932",
            x: 34,
            y: 48,
            fact: "The marker says this building was described as handsome in every respect when it opened in 1932. It replaced a 1906 post office and housed a new district court and federal offices. It served as a post office until 1986.",
          },
          {
            id: "gettys",
            label: "Thomas S. Gettys",
            x: 74,
            y: 56,
            fact: "It provided offices for several members of Congress, including Thomas S. Gettys from 1965 to 1975. It was listed in the National Register in 1988 and renamed in honor of Gettys in 1997.",
          },
        ],
      },
      {
        kind: "scene",
        id: "tower",
        kicker: "1926",
        title: "The Citizens' Building",
        partLabel: "the high-rise",
        art: art(
          "citizens-tower.jpg",
          "Illustration of a six-story downtown office building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bank",
            label: "The first high-rise",
            x: 32,
            y: 42,
            fact: "The marker also describes a six-story structure, Rock Hill's first high-rise office building. It was built in 1924-25 and opened in 1926 with Citizens Bank and Trust on the first floor. That bank closed in 1927.",
          },
          {
            id: "radio",
            label: "A bank and a radio station",
            x: 74,
            y: 58,
            fact: "Rock Hill National Bank opened on the first floor in 1941 and stayed until 1976. WRHI Radio, one of South Carolina's earliest stations, signed on from studios on the second floor in 1944 and broadcast from here until 1977. Civil Defense used a roof observation deck during World War II.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1926",
        title: "Stories in the first high-rise",
        partLabel: "six stories",
        value: 6,
        unit: "stories",
        meant: "What this meant: the marker calls the Citizens' Building Rock Hill's first high-rise office building, and it says the building is six stories.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same corner",
        partLabel: "then and now",
        thenArt: art(
          "citizens-tower.jpg",
          "Illustration of a six-story office building, for the Citizens' Building. Not a historical photograph.",
        ),
        nowArt: art(
          "posto-today.jpg",
          "Illustration of a marker at a downtown corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a six-story building, for the Citizens' Building the marker says opened in 1926. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a corner, for East Main and Caldwell Streets. Not a photograph of the corner today.",
      },
      order(
        [
          {
            id: "rise",
            year: "1926",
            label: "The six-story Citizens' Building opens, with a bank on the first floor.",
            why: "The marker dates that opening to 1926.",
          },
          {
            id: "post",
            year: "1932",
            label: "The post office and courthouse building opens.",
            why: "The marker dates that opening to 1932. It replaced a 1906 post office.",
          },
          {
            id: "radio",
            year: "1944",
            label: "WRHI Radio signs on from the second floor.",
            why: "The marker dates the station's start here to 1944.",
          },
          {
            id: "name",
            year: "1997",
            label: "The post office building is renamed for Thomas S. Gettys.",
            why: "The marker dates that renaming to 1997.",
          },
        ],
        ["name", "rise", "radio", "post"],
      ),
      takeaway([
        "The post office and courthouse opened in 1932, replacing a 1906 post office. It was a post office until 1986 and was renamed for Thomas S. Gettys in 1997.",
        "The Citizens' Building, six stories, was Rock Hill's first high-rise. It opened in 1926. Citizens Bank and Trust closed in 1927.",
        "WRHI Radio broadcast from the second floor from 1944 to 1977. Civil Defense used a roof deck during World War II.",
      ]),
    ],
  ),
  lesson(
    "46-39",
    "St. Anne's School",
    "St. Anne's timeline",
    [cited("46-39", "St. Anne's Parochial School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1956",
        title: "A school of their own",
        partLabel: "the school",
        art: art(
          "stanne-school.jpg",
          "Illustration of a mid-century school building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "church",
            label: "The church",
            x: 30,
            y: 50,
            fact: "St. Anne's Church, the first Catholic church in York County, was founded in 1919 by the Rev. William A. Tobin of Columbia. Its first building, on Saluda Street in 1920, closed in 1961.",
          },
          {
            id: "open",
            label: "The school here",
            x: 74,
            y: 55,
            fact: "The first parochial school opened in the church rectory in 1951, with 17 pupils in kindergarten and first grade. A second grade was added in 1952. A new St. Anne's School opened here in 1956.",
          },
        ],
      },
      {
        kind: "scene",
        id: "class",
        kicker: "1954",
        title: "Five students from St. Mary's",
        partLabel: "the five students",
        art: art(
          "stanne-class.jpg",
          "Illustration of a classroom, with children seen only from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "five",
            label: "1954",
            x: 32,
            y: 52,
            fact: "In 1954 St. Anne's became the first school in South Carolina to integrate, when it enrolled 5 students from St. Mary's, the predominantly African American Catholic church in Rock Hill. By 1961, 15 Black students were enrolled. Grades 1 through 8 were in place by 1957.",
          },
          {
            id: "move",
            label: "Leaving this building",
            x: 74,
            y: 46,
            fact: "Worship for St. Anne's Church was held in the school auditorium from 1982 to 1994. In 1998 St. Anne School moved to a new building on Bird Street.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1954",
        title: "Students who integrated the school",
        partLabel: "five students",
        value: 5,
        unit: "students",
        meant: "What this meant: the marker says St. Anne's enrolled 5 students from St. Mary's in 1954, and calls that the first school integration in South Carolina.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "stanne-school.jpg",
          "Illustration of a school, for the 1956 building. Not a historical photograph.",
        ),
        nowArt: art(
          "stanne-today.jpg",
          "Illustration of a marker and a school building. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the school the marker says opened here in 1956. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and a building, for 648 South Jones Avenue. The marker says the school moved to Bird Street in 1998. Not a photograph.",
      },
      order(
        [
          {
            id: "church",
            year: "1919",
            label: "St. Anne's Church is founded, the first Catholic church in the county.",
            why: "The marker dates the founding to 1919.",
          },
          {
            id: "school",
            year: "1951",
            label: "The first parochial school opens in the rectory, with 17 pupils.",
            why: "The marker dates that school to 1951.",
          },
          {
            id: "five",
            year: "1954",
            label: "Five students from St. Mary's enroll.",
            why: "The marker dates that enrollment to 1954 and calls the school the first in South Carolina to integrate.",
          },
          {
            id: "bird",
            year: "1998",
            label: "The school moves to Bird Street.",
            why: "The marker dates that move to 1998.",
          },
        ],
        ["bird", "church", "five", "school"],
      ),
      takeaway([
        "St. Anne's, founded in 1919, was the first Catholic church in York County. Its school began in the rectory in 1951 with 17 pupils.",
        "In 1954 the school enrolled 5 students from St. Mary's. The marker calls it the first school in South Carolina to integrate.",
        "A new school opened on this site in 1956. In 1998 the school moved to Bird Street.",
      ]),
    ],
  ),
  lesson(
    "46-85",
    "The first school in the village",
    "Rock Hill Academy timeline",
    [cited("46-85", "Rock Hill Academy", "front and back")],
    [
      {
        kind: "scene",
        id: "log",
        kicker: "1855",
        title: "A log school in a pine grove",
        partLabel: "the log school",
        art: art(
          "academy-log.jpg",
          "Illustration of a log schoolhouse in a pine grove. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "open",
            label: "The first school",
            x: 32,
            y: 52,
            fact: "Rock Hill Academy, the first school in the village of Rock Hill, opened in 1855 in a log building near this site. It was a private school for white boys, in a pine grove owned by Ann Hutchison White. The first teacher was the Rev. Archibald Whyte. The building was also a Christian meeting house.",
          },
          {
            id: "sixty",
            label: "About sixty students",
            x: 74,
            y: 58,
            fact: "The school was expanded in 1857. Around that time about sixty students attended. It is believed to have closed during the Civil War, and it had reopened by 1870.",
          },
        ],
      },
      {
        kind: "scene",
        id: "girls",
        kicker: "1874",
        title: "Pine Grove Academy",
        partLabel: "the girls school",
        art: art(
          "academy-pine.jpg",
          "Illustration of a frame school among pines. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "girls",
            label: "A school for girls",
            x: 30,
            y: 50,
            fact: "By 1874 the building became a girls' school named Pine Grove Academy, a name long used informally for Rock Hill Academy. The first principal was M. B. Reid. In 1876 the school had forty-eight students.",
          },
          {
            id: "end",
            label: "The tornado",
            x: 74,
            y: 46,
            fact: "The school closed when Rock Hill Graded School opened in 1888, the first public school for local white children. The old building was later a residence. The tornado of 1926 destroyed it.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1876",
        title: "Students the marker counts",
        partLabel: "48 students",
        value: 48,
        unit: "students",
        meant: "What this meant: the marker says Pine Grove Academy had forty-eight students in 1876. Around 1857, Rock Hill Academy had about sixty. That earlier figure is the marker's \"about,\" not an exact count.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "academy-log.jpg",
          "Illustration of a log school, for the 1855 academy. Not a historical photograph.",
        ),
        nowArt: art(
          "academy-today.jpg",
          "Illustration of a marker on a street, the school gone. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the log school the marker says opened in 1855. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker, for Pendleton Street west of North Confederate Avenue. The marker says the tornado of 1926 destroyed the old building. Not a photograph.",
      },
      order(
        [
          {
            id: "open",
            year: "1855",
            label: "Rock Hill Academy opens in a log building.",
            why: "The marker dates the opening to 1855.",
          },
          {
            id: "girls",
            year: "1874",
            label: "The building becomes Pine Grove Academy, a girls' school.",
            why: "The marker dates that change to 1874.",
          },
          {
            id: "close",
            year: "1888",
            label: "The school closes when Rock Hill Graded School opens.",
            why: "The marker dates the closing to the graded school's opening in 1888.",
          },
          {
            id: "storm",
            year: "1926",
            label: "A tornado destroys the old building.",
            why: "The marker dates that destruction to the tornado of 1926.",
          },
        ],
        ["storm", "open", "close", "girls"],
      ),
      takeaway([
        "Rock Hill Academy, opened in 1855, was the first school in the village. It was a private school for white boys, taught first by the Rev. Archibald Whyte.",
        "By 1874 it was Pine Grove Academy, a girls' school, with forty-eight students in 1876.",
        "It closed in 1888 when the graded school opened. The tornado of 1926 destroyed the old building.",
      ]),
    ],
  ),
  lesson(
    "46-80",
    "A. Friedheim and Brother",
    "Jewish merchants timeline",
    [cited("46-80", "Jewish Merchants of Rock Hill", "front and back")],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "By the 1930s",
        title: "Stores along Main Street",
        partLabel: "the stores",
        art: art(
          "friedheim-street.jpg",
          "Illustration of a downtown commercial street of storefronts. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "merchants",
            label: "The merchants",
            x: 32,
            y: 55,
            fact: "Jewish merchants were an important part of Rock Hill's commercial growth in the early 20th century. By the 1930s many Jewish-owned businesses were on East Main Street and on Trade and Caldwell Streets.",
          },
          {
            id: "goods",
            label: "What they sold",
            x: 74,
            y: 48,
            fact: "They sold clothing, shoes, jewelry, and other goods and services. Many of the merchants were immigrants from Europe, or their children.",
          },
        ],
      },
      {
        kind: "scene",
        id: "store",
        kicker: "1898",
        title: "The Friedheim building",
        partLabel: "the Friedheim store",
        art: art(
          "friedheim-brick.jpg",
          "Illustration of a three-story brick store. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "arnold",
            label: "Arnold Friedheim",
            x: 34,
            y: 46,
            fact: "Among the earliest was Arnold Friedheim (1836-1915). Born in Germany, he opened a downtown store in 1866. In 1876 he and his brother Julius founded A. Friedheim and Brother, a general store.",
          },
          {
            id: "building",
            label: "This building",
            x: 72,
            y: 58,
            fact: "In 1898-99 they had this three-story brick building put up at 113-115 East Main Street. Hugh Edward White designed it in the Romanesque Revival style. The store, long one of Rock Hill's best-known businesses, operated until 1964.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1898",
        title: "Stories in the Friedheim building",
        partLabel: "three stories",
        value: 3,
        unit: "stories",
        meant: "What this meant: the marker says the Friedheim brothers had a three-story brick building constructed here in 1898-99. The store inside it stayed open until 1964.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "friedheim-brick.jpg",
          "Illustration of a three-story store, for the 1898 building. Not a historical photograph.",
        ),
        nowArt: art(
          "friedheim-today.jpg",
          "Illustration of a marker in front of a three-story brick building. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the store the marker says was built in 1898-99. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and a brick building, for 113-115 East Main Street. Not a photograph of the building today.",
      },
      order(
        [
          {
            id: "open",
            year: "1866",
            label: "Arnold Friedheim opens a downtown store.",
            why: "The marker dates that store to 1866.",
          },
          {
            id: "bro",
            year: "1876",
            label: "He and Julius found A. Friedheim and Brother.",
            why: "The marker dates the partnership to 1876.",
          },
          {
            id: "built",
            year: "1898",
            label: "This three-story building goes up.",
            why: "The marker dates the building to 1898-99.",
          },
          {
            id: "close",
            year: "1964",
            label: "The store closes.",
            why: "The marker says the store operated until 1964.",
          },
        ],
        ["close", "open", "built", "bro"],
      ),
      takeaway([
        "By the 1930s, Jewish-owned stores on East Main, Trade, and Caldwell sold clothing, shoes, jewelry, and other goods.",
        "Arnold Friedheim, born in Germany, opened a store in 1866. With his brother Julius he founded A. Friedheim and Brother in 1876.",
        "This three-story building, designed by Hugh Edward White, went up in 1898-99. The store operated until 1964.",
      ]),
    ],
  ),
  lesson(
    "46-84",
    "The Carver Theater",
    "Carver Theater timeline",
    [
      cited("46-84", "Carver Theater", "front and back"),
      span("\"24 years\" is 1971 minus 1947, the year the theater closed and the year it opened."),
    ],
    [
      {
        kind: "scene",
        id: "hut",
        kicker: "1947",
        title: "A theater of their own",
        partLabel: "the theater opens",
        art: art(
          "carver-hut.jpg",
          "Illustration of a Quonset-hut theater with a stepped front. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "open",
            label: "Opening in 1947",
            x: 34,
            y: 50,
            fact: "The Carver Theater opened here in 1947, in a metal Quonset hut with a stuccoed brick front and a stepped parapet. It was named for the inventor George Washington Carver. It had a lobby, restrooms, and seats for about 500 people.",
          },
          {
            id: "only",
            label: "Who it was for",
            x: 74,
            y: 58,
            fact: "When it opened, it was the only movie theater in Rock Hill primarily for African Americans. Other theaters either barred Black residents or used segregated seating and entrances. The Carver was white-owned and staffed by African Americans.",
          },
        ],
      },
      {
        kind: "scene",
        id: "seats",
        kicker: "Until 1971",
        title: "More than movies",
        partLabel: "the later years",
        art: art(
          "carver-seats.jpg",
          "Illustration of a theater interior with rows of seats. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "events",
            label: "What happened here",
            x: 32,
            y: 55,
            fact: "Besides movies, the theater hosted stage shows, meetings, fundraisers, and other community events.",
          },
          {
            id: "close",
            label: "The closing",
            x: 74,
            y: 46,
            fact: "Business fell in the 1960s as other local theaters began serving Black patrons on an equal basis. The Carver closed in 1971. The building was later a pool hall, a warehouse, and a garage.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1947-1971",
        title: "Years from opening to closing",
        partLabel: "years open",
        value: 24,
        unit: "years",
        meant: "What this meant: 1971 comes 24 years after 1947. That is the stretch from the opening on the marker to the year the theater closed. The seat count is the marker's \"about 500,\" not an exact number.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "carver-hut.jpg",
          "Illustration of a Quonset theater, for the 1947 building. Not a historical photograph.",
        ),
        nowArt: art(
          "carver-today.jpg",
          "Illustration of a marker in front of a low commercial building. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the Quonset theater the marker says opened in 1947. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and a building, for 411 West Main Street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "open",
            year: "1947",
            label: "The Carver Theater opens.",
            why: "The marker dates the opening to 1947.",
          },
          {
            id: "decline",
            year: "1960s",
            label: "Business declines as other theaters change their rules.",
            why: "The marker places that decline in the 1960s.",
          },
          {
            id: "close",
            year: "1971",
            label: "The theater closes.",
            why: "The marker dates the closing to 1971.",
          },
          {
            id: "later",
            year: "Later",
            label: "The building is used as a pool hall, a warehouse, and a garage.",
            why: "The marker says those uses came after the theater closed.",
          },
        ],
        ["later", "open", "close", "decline"],
      ),
      takeaway([
        "The Carver opened in 1947 in a Quonset hut and was the only Rock Hill movie theater primarily for African Americans.",
        "It showed movies and also hosted shows, meetings, and fundraisers. It had seats for about 500 people.",
        "It closed in 1971, after other theaters began serving Black patrons equally. The building was later a pool hall, a warehouse, and a garage.",
      ]),
    ],
  ),
  lesson(
    "46-38",
    "Rock Hill's first mill",
    "Rock Hill Cotton Factory timeline",
    [cited("46-38", "Rock Hill Cotton Factory", "front and back")],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1881",
        title: "Steam power on White Street",
        partLabel: "the first mill",
        art: art(
          "cotton-mill.jpg",
          "Illustration of a two-story brick mill with a steam stack. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "first",
            label: "The first mill",
            x: 32,
            y: 48,
            fact: "This textile mill, built in 1881, was the first in Rock Hill and the first in South Carolina to use steam power. It was a two-story mill, designed and built by A. D. Holler and modeled on the Camperdown Mill in Greenville.",
          },
          {
            id: "founders",
            label: "Who founded it",
            x: 74,
            y: 58,
            fact: "A. E. Hutchison, J. M. Ivy, W. L. Roddey, and A. H. White founded the Rock Hill Cotton Factory to strengthen the city as a cotton market and to spur more industry.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1881-1907",
        title: "Seven mills",
        partLabel: "seven mills",
        art: art(
          "cotton-street.jpg",
          "Illustration of a mill street with several brick mill buildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "seven",
            label: "The textile corridor",
            x: 30,
            y: 52,
            fact: "This was the first of seven textile mills built here from 1881 to 1907. The marker says Rock Hill became the model of a New South city, its population grew from 800 to more than 6,000, and White Street became its Textile Corridor.",
          },
          {
            id: "later",
            label: "After the closing",
            x: 74,
            y: 46,
            fact: "The mill was sold and renamed several times before it closed in 1967. It was listed in the National Register in 1992 and renovated into offices in 2007.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1881-1907",
        title: "Mills the marker counts",
        partLabel: "seven mills",
        value: 7,
        unit: "mills",
        meant: "What this meant: the marker says this was the first of seven textile mills built here from 1881 to 1907. The population figure, from 800 to more than 6,000, is the marker's own comparison.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "cotton-mill.jpg",
          "Illustration of a two-story mill, for the 1881 factory. Not a historical photograph.",
        ),
        nowArt: art(
          "cotton-today.jpg",
          "Illustration of a mill building and a marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the steam-powered mill the marker says was built in 1881. Not a historical photograph.",
        nowCaption:
          "Illustration of a mill and a marker, for the corner of White and Chatham Streets. The marker says the mill was renovated into offices in 2007. Not a photograph.",
      },
      order(
        [
          {
            id: "built",
            year: "1881",
            label: "This mill is built, the first in Rock Hill.",
            why: "The marker dates the mill to 1881.",
          },
          {
            id: "seven",
            year: "1907",
            label: "The last of the seven mills in that stretch is built.",
            why: "The marker says seven mills were built here from 1881 to 1907.",
          },
          {
            id: "close",
            year: "1967",
            label: "This mill closes.",
            why: "The marker dates the closing to 1967.",
          },
          {
            id: "offices",
            year: "2007",
            label: "The mill is renovated into offices.",
            why: "The marker dates that renovation to 2007.",
          },
        ],
        ["offices", "built", "close", "seven"],
      ),
      takeaway([
        "The Rock Hill Cotton Factory, built in 1881, was the city's first textile mill and the first in South Carolina to use steam power.",
        "It was the first of seven mills built here through 1907. The marker says the city's population grew from 800 to more than 6,000.",
        "The mill closed in 1967. It was renovated into offices in 2007.",
      ]),
    ],
  ),
  lesson(
    "46-82",
    "The Carhartt mansion",
    "Carhartt mansion timeline",
    [
      cited("46-82", "Carhartt Mansion", "front and back"),
      span("\"17 years\" is 1924 minus 1907, the year Carhartt sold the place and the year the marker says he acquired the land."),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1908",
        title: "A house above the river",
        partLabel: "the mansion",
        art: art(
          "carhartt-house.jpg",
          "Illustration of a large house on a river bluff. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "The mansion",
            x: 36,
            y: 46,
            fact: "Near this site are the ruins of the Carhartt Mansion, built in 1908-09 as a home for Hamilton Carhartt (1855-1937), founder of the Detroit overalls company. He first acquired land here in 1907.",
          },
          {
            id: "farm",
            label: "The plantation",
            x: 74,
            y: 60,
            fact: "He developed it into a cotton plantation of about 1,000 acres that also raised horses and cattle. The cotton was made into denim at the company's mill in downtown Rock Hill and at another mill built south of here in 1916-17.",
          },
        ],
      },
      {
        kind: "scene",
        id: "station",
        kicker: "1924",
        title: "Carhartt Station",
        partLabel: "the station",
        art: art(
          "carhartt-station.jpg",
          "Illustration of a mill, a small station, and a village. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "village",
            label: "What grew up here",
            x: 30,
            y: 52,
            fact: "The area became known as Carhartt Station. It included the plantation, a mill, a mill village, a post office, a school, and a Southern Railway passenger station. The mansion sat on a bluff over the Catawba River.",
          },
          {
            id: "sold",
            label: "The sale",
            x: 74,
            y: 46,
            fact: "Carhartt sold the mansion and plantation in 1924. In 1925 a group of mostly local investors organized Red River Cotton Mills and bought the nearby Carhartt mill. The mansion was dismantled in the 1950s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1907-1924",
        title: "Years from the purchase to the sale",
        partLabel: "years he held it",
        value: 17,
        unit: "years",
        meant: "What this meant: 1924 comes 17 years after 1907. That is the stretch from the year the marker says Carhartt acquired the land to the year he sold the mansion and plantation. The acreage is the marker's \"about 1,000.\"",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "carhartt-house.jpg",
          "Illustration of a house on a bluff, for the mansion of 1908-09. Not a historical photograph.",
        ),
        nowArt: art(
          "carhartt-today.jpg",
          "Illustration of ruins and a marker on a river trail. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house on a bluff, for the mansion the marker says was built in 1908-09. Not a historical photograph.",
        nowCaption:
          "Illustration of ruins and a marker, for the river trail near Celriver Road. The marker says the mansion was dismantled in the 1950s and that ruins are near this site. Not a photograph.",
      },
      order(
        [
          {
            id: "land",
            year: "1907",
            label: "Hamilton Carhartt acquires the land.",
            why: "The marker dates that purchase to 1907.",
          },
          {
            id: "house",
            year: "1908",
            label: "The mansion is built.",
            why: "The marker dates the mansion to 1908-09.",
          },
          {
            id: "sell",
            year: "1924",
            label: "He sells the mansion and plantation.",
            why: "The marker dates that sale to 1924.",
          },
          {
            id: "down",
            year: "1950s",
            label: "The mansion is dismantled.",
            why: "The marker places the dismantling in the 1950s.",
          },
        ],
        ["down", "land", "sell", "house"],
      ),
      takeaway([
        "Hamilton Carhartt built a mansion here in 1908-09 on land he acquired in 1907. The plantation was about 1,000 acres.",
        "The cotton went to his denim mills. The area was called Carhartt Station and had a mill, a village, a post office, a school, and a railway stop.",
        "He sold the mansion and plantation in 1924. The mansion was dismantled in the 1950s. The marker says the ruins are near this site.",
      ]),
    ],
  ),
  lesson(
    "46-60",
    "New Mount Olivet and the Freedom Riders",
    "New Mount Olivet timeline",
    [cited("46-60", "New Mount Olivet A.M.E. Zion Church", "front and back")],
    [
      {
        kind: "scene",
        id: "frame",
        kicker: "1873",
        title: "From a brush arbor to a frame church",
        partLabel: "the first church",
        art: art(
          "olivet-frame.jpg",
          "Illustration of a brush arbor and a frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "start",
            label: "How it began",
            x: 30,
            y: 55,
            fact: "This church, organized in 1873, held its first services in private homes and then under a brush arbor on Pond Street, near the railroad tracks. It was first called Mt. Olivet Methodist Zion Church.",
          },
          {
            id: "frame",
            label: "The first permanent church",
            x: 74,
            y: 48,
            fact: "It bought this tract in 1896 and built its first permanent church, a frame building, in 1898. Around 1900 it was renamed Mt. Olivet A.M.E. Zion Church.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brick",
        kicker: "May 1961",
        title: "A meeting for the Freedom Riders",
        partLabel: "the 1961 meeting",
        art: art(
          "olivet-brick.jpg",
          "Illustration of a brick church and a bus, figures seen only from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "brick",
            label: "The brick church",
            x: 32,
            y: 46,
            fact: "The congregation built this brick church from 1923 to 1927, under the Revs. J. D. Virgil and C. L. Flowers. It was renamed New Mount Olivet A.M.E. Zion Church in 1937.",
          },
          {
            id: "ride",
            label: "May 1961",
            x: 74,
            y: 58,
            fact: "In May 1961 an interracial group sponsored by the Congress of Racial Equality launched the first Freedom Rides from Washington to New Orleans. The marker says the first violent opposition in the South happened at the Rock Hill bus station. That night this church held a mass meeting to honor and support the Freedom Riders.",
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
          "olivet-frame.jpg",
          "Illustration of a frame church, for the 1898 building. Not a historical photograph.",
        ),
        nowArt: art(
          "olivet-today.jpg",
          "Illustration of a brick church and a marker on a boulevard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the frame church the marker says was built in 1898. Not a historical photograph.",
        nowCaption:
          "Illustration of a church and a marker, for 527 South Dave Lyle Boulevard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "org",
            year: "1873",
            label: "The church is organized.",
            why: "The marker dates the organization to 1873.",
          },
          {
            id: "frame",
            year: "1898",
            label: "The first permanent church, a frame building, is built.",
            why: "The marker dates that building to 1898, on land bought in 1896.",
          },
          {
            id: "brick",
            year: "1923",
            label: "The brick church is built.",
            why: "The marker dates the brick church to 1923-27.",
          },
          {
            id: "meet",
            year: "1961",
            label: "The church holds a mass meeting for the Freedom Riders.",
            why: "The marker dates that meeting to a night in May 1961.",
          },
        ],
        ["meet", "org", "brick", "frame"],
      ),
      takeaway([
        "New Mount Olivet began in 1873, first in homes and then under a brush arbor. Its first permanent church, a frame building, went up in 1898.",
        "The brick church was built from 1923 to 1927. The congregation took the name New Mount Olivet in 1937.",
        "In May 1961, the night the marker calls the first violent opposition to the Freedom Rides in the South, at the Rock Hill bus station, this church held a mass meeting for the riders.",
      ]),
    ],
  ),
  lesson(
    "46-86",
    "St. Mary Catholic Church",
    "St. Mary timeline",
    [cited("46-86", "St. Mary Catholic Church", "front and back")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1946",
        title: "Five members, then a church",
        partLabel: "the first church",
        art: art(
          "stmary-church.jpg",
          "Illustration of a small church and a recreation hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "form",
            label: "The founding",
            x: 32,
            y: 50,
            fact: "St. Mary Catholic Church formed in 1945. Father Edward Wahl, a white Oratorian, organized it to minister to local African Americans. At its founding the church had five members.",
          },
          {
            id: "built",
            label: "The first buildings",
            x: 74,
            y: 56,
            fact: "The first church was built on this site and dedicated in 1946. A recreation center built at the same time hosted social events, athletic leagues, and other programs for local Black residents.",
          },
        ],
      },
      {
        kind: "scene",
        id: "center",
        kicker: "1951",
        title: "A credit union and a school",
        partLabel: "the later buildings",
        art: art(
          "stmary-center.jpg",
          "Illustration of a church beside a low education building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grow",
            label: "How it grew",
            x: 30,
            y: 48,
            fact: "By the mid-1950s St. Mary had more than sixty members. In 1951 the church established Crawford Federal Credit Union to help local African Americans. The Sisters of Christian Doctrine founded a preschool and kindergarten in 1956.",
          },
          {
            id: "later",
            label: "The later buildings",
            x: 74,
            y: 55,
            fact: "An education center across Crawford Road was dedicated in 1969. A larger church was built next to the original in 2008, for St. Mary's roughly 450 members.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1945",
        title: "Members at the founding",
        partLabel: "five members",
        value: 5,
        unit: "members",
        meant: "What this meant: the marker says St. Mary had five members when it was founded in 1945. By the mid-1950s it had more than sixty, and by 2008 roughly 450. Those later figures are the marker's \"more than\" and \"roughly.\"",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "stmary-church.jpg",
          "Illustration of a small church, for the 1946 building. Not a historical photograph.",
        ),
        nowArt: art(
          "stmary-today.jpg",
          "Illustration of a church and a marker on a street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the first church the marker says was dedicated in 1946. Not a historical photograph.",
        nowCaption:
          "Illustration of a church and a marker, for 902 Crawford Road. The marker says a larger church was built next to the original in 2008. Not a photograph.",
      },
      order(
        [
          {
            id: "form",
            year: "1945",
            label: "St. Mary is formed, with five members.",
            why: "The marker dates the founding to 1945.",
          },
          {
            id: "church",
            year: "1946",
            label: "The first church is dedicated.",
            why: "The marker dates the dedication to 1946.",
          },
          {
            id: "credit",
            year: "1951",
            label: "The church establishes Crawford Federal Credit Union.",
            why: "The marker dates the credit union to 1951.",
          },
          {
            id: "larger",
            year: "2008",
            label: "A larger church is built next to the original.",
            why: "The marker dates that church to 2008.",
          },
        ],
        ["larger", "form", "credit", "church"],
      ),
      takeaway([
        "St. Mary was formed in 1945 by Father Edward Wahl for local African Americans. It began with five members.",
        "The first church and a recreation center were dedicated in 1946. In 1951 the church opened Crawford Federal Credit Union.",
        "A preschool and kindergarten came in 1956. A larger church was built beside the original in 2008.",
      ]),
    ],
  ),
  lesson(
    "46-08",
    "From Antioch Chapel to First Presbyterian",
    "First Presbyterian timeline",
    [cited("46-08", "First Presbyterian Church", "front and back")],
    [
      {
        kind: "scene",
        id: "chapel",
        kicker: "1834",
        title: "A chapel south of town",
        partLabel: "the chapel",
        art: art(
          "antioch-chapel.jpg",
          "Illustration of a small rural chapel. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "begin",
            label: "Antioch Chapel",
            x: 32,
            y: 52,
            fact: "This church began in 1834 as Antioch Chapel of Ebenezer Church, under the Rev. John O. Richards, on land of the Steales and Workmans, 3 miles south of Rock Hill.",
          },
          {
            id: "move",
            label: "The move",
            x: 74,
            y: 48,
            fact: "The mission moved in 1858 to this site, obtained from A. T. Black and later paid for by Mrs. Ann Hutchinson White and J. Spratt White.",
          },
        ],
      },
      {
        kind: "scene",
        id: "church",
        kicker: "1869",
        title: "Forty-six charter members",
        partLabel: "the organization",
        art: art(
          "firstpres-church.jpg",
          "Illustration of a church on a town street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "org",
            label: "November 13, 1869",
            x: 34,
            y: 46,
            fact: "The church was organized on November 13, 1869, with forty-six charter members, led by the Rev. R. E. Cooper. The first ruling elders were J. F. Workman, H. H. Hart, and R. D. L. McLeod.",
          },
          {
            id: "pastors",
            label: "The long pastorate",
            x: 74,
            y: 56,
            fact: "Three pastors were moderators of the General Assembly of the Presbyterian Church in the U.S.: the Revs. W. T. Hall, W. L. Lingle, and Alexander Sprunt. The longest pastorate was that of the Rev. Francis W. Gregg, 1910-1947.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1869",
        title: "Charter members",
        partLabel: "46 members",
        value: 46,
        unit: "members",
        meant: "What this meant: the marker says the church was organized on November 13, 1869, with forty-six charter members.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "antioch-chapel.jpg",
          "Illustration of a rural chapel, for Antioch Chapel. Not a historical photograph.",
        ),
        nowArt: art(
          "firstpres-today.jpg",
          "Illustration of a marker and a church on a town street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a chapel, for Antioch Chapel, which the marker places 3 miles south in 1834. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and a church, for 234 East Main Street, the site the marker says the mission reached in 1858. Not a photograph.",
      },
      order(
        [
          {
            id: "chapel",
            year: "1834",
            label: "Antioch Chapel begins, 3 miles south of Rock Hill.",
            why: "The marker dates the chapel to 1834.",
          },
          {
            id: "move",
            year: "1858",
            label: "The mission moves to this site.",
            why: "The marker dates that move to 1858.",
          },
          {
            id: "org",
            year: "1869",
            label: "The church is organized, with forty-six charter members.",
            why: "The marker dates the organization to November 13, 1869.",
          },
          {
            id: "gregg",
            year: "1910",
            label: "Francis W. Gregg begins the longest pastorate.",
            why: "The marker gives his pastorate as 1910-1947 and calls it the longest.",
          },
        ],
        ["gregg", "chapel", "org", "move"],
      ),
      takeaway([
        "First Presbyterian began in 1834 as Antioch Chapel, 3 miles south of Rock Hill, and moved to this site in 1858.",
        "It was organized on November 13, 1869, with forty-six charter members.",
        "Three of its pastors moderated the General Assembly. Francis W. Gregg served the longest, from 1910 to 1947.",
      ]),
    ],
  ),
];

