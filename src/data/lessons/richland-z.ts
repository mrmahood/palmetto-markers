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

export const richlandLessonsZ: MarkerLesson[] = [
  lesson(
    "40-130",
    "Columbia's premier hotel",
    "Jefferson Hotel timeline",
    [cited("40-130", "Jefferson Hotel", "front and back")],
    [
      {
        kind: "scene",
        id: "hotel",
        kicker: "1912-13",
        title: "Designed and built by John Jefferson Cain",
        partLabel: "the hotel",
        art: art(
          "m40130-hotel.jpg",
          "Illustration of a hotel and its lobby. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "cain",
            label: "John Jefferson Cain",
            x: 32,
            y: 46,
            fact: "The Jefferson Hotel was designed and built by Columbia entrepreneur and contractor John Jefferson Cain (1869-1929).",
          },
          {
            id: "features",
            label: "1912-13",
            x: 74,
            y: 58,
            fact: "The hotel (also sometimes called the Hotel Jefferson) was built in 1912-13 at a cost of $250,000. Notable features included Indiana limestone on the 1st and 6th story exteriors and mahogany, marble, and terra cotta tile throughout the lobby, dining room, and ballroom.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1914",
        title: "At the corner of Main and Laurel",
        partLabel: "the street corner",
        art: art(
          "m40130-street.jpg",
          "Illustration of a hotel at a street corner. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "corner",
            label: "1914 until 1968",
            x: 32,
            y: 50,
            fact: "The Jefferson Hotel stood here at the corner of Main and Laurel Streets from 1914 until 1968. For 55 years the Jefferson was Columbia's premier hotel, hosting conventions as well as more informal meetings among legislators. It was demolished in 1968.",
          },
          {
            id: "reunion",
            label: "1938",
            x: 74,
            y: 40,
            fact: "In 1938, during the 48th reunion of the United Confederate Veterans, former officers and their descendants met here to organize the Order of the Stars and Bars. Now the Military Order of the Stars and Bars, this genealogical society is for descendants of Confederate officers and civil officials.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1912-13",
        title: "What the hotel cost",
        partLabel: "250,000 dollars",
        value: 250000,
        unit: "dollars",
        meant:
          "What this meant: the marker says the hotel was built in 1912-13 at a cost of $250,000.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40130-hotel.jpg",
          "Illustration of a hotel and its lobby. Not a historical photograph.",
        ),
        nowArt: art(
          "m40130-today.jpg",
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a hotel, for the Jefferson Hotel the marker says was built in 1912-13. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1912-13",
            label: "The hotel is built.",
            why: "The marker says the hotel (also sometimes called the Hotel Jefferson) was built in 1912-13 at a cost of $250,000, designed and built by John Jefferson Cain (1869-1929).",
          },
          {
            id: "stood",
            year: "1914",
            label: "It stands at Main and Laurel.",
            why: "The marker says the Jefferson Hotel stood here at the corner of Main and Laurel Streets from 1914 until 1968.",
          },
          {
            id: "organized",
            year: "1938",
            label: "The Order of the Stars and Bars is organized here.",
            why: "The marker says that in 1938, during the 48th reunion of the United Confederate Veterans, former officers and their descendants met here to organize the Order of the Stars and Bars.",
          },
          {
            id: "demolished",
            year: "1968",
            label: "The hotel is demolished.",
            why: "The marker says it was demolished in 1968. For 55 years it was Columbia's premier hotel.",
          },
        ],
        ["demolished", "built", "organized", "stood"],
      ),
      takeaway([
        "The Jefferson Hotel, designed and built by Columbia entrepreneur and contractor John Jefferson Cain (1869-1929), stood here at the corner of Main and Laurel Streets from 1914 until 1968.",
        "The hotel (also sometimes called the Hotel Jefferson) was built in 1912-13 at a cost of $250,000. Notable features included Indiana limestone on the 1st and 6th story exteriors and mahogany, marble, and terra cotta tile throughout the lobby, dining room, and ballroom.",
        "For 55 years the Jefferson was Columbia's premier hotel, hosting conventions as well as more informal meetings among legislators. It was demolished in 1968. In 1938, during the 48th reunion of the United Confederate Veterans, former officers and their descendants met here to organize the Order of the Stars and Bars. Now the Military Order of the Stars and Bars, this genealogical society is for descendants of Confederate officers and civil officials.",
      ]),
    ],
  ),
  lesson(
    "40-131",
    "Rebuilt as the dispensary warehouse",
    "State Dispensary Warehouse timeline",
    [
      cited("40-131", "State Dispensary Warehouse", "front and back"),
      span(
        '"7 years" is 1872 minus 1865, the years the marker prints for the rebuild as a cotton batting factory and warehouse and the burning by Federal troops.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "works",
        kicker: "1863-64",
        title: "A factory, burned twice",
        partLabel: "the works",
        art: art(
          "m40131-works.jpg",
          "Illustration of a cotton factory and cotton bales. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "first",
            label: "1863-64 and 1865",
            x: 32,
            y: 48,
            fact: "This building, built in 1863-64 and burned by Federal troops in 1865, was rebuilt in 1872 as a cotton batting factory and warehouse.",
          },
          {
            id: "walls",
            label: "1897",
            x: 74,
            y: 42,
            fact: "It burned again in 1897, leaving only the outer walls.",
          },
        ],
      },
      {
        kind: "scene",
        id: "warehouse",
        kicker: "1898",
        title: "The State Dispensary Warehouse",
        partLabel: "the warehouse",
        art: art(
          "m40131-warehouse.jpg",
          "Illustration of a two-story warehouse and barrels. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "dispensary",
            label: "1898",
            x: 32,
            y: 52,
            fact: "In 1898 the S.C. State Dispensary, created by Gov. Benjamin R. Tillman to ensure state control over the production and sale of alcohol, rebuilt it as a two-story building to serve as the State Dispensary Warehouse.",
          },
          {
            id: "later",
            label: "1907 and 2004",
            x: 74,
            y: 40,
            fact: "Though the State Dispensary system generated impressive revenue, it also allowed corruption and violence to flourish, and was finally abolished in 1907. Vacant from 1907 until the 1920s, this building served as a warehouse for a succession of businesses for the next fifty years. It was vacant again from the late 1970s until 2004, when it was rehabilitated for a neighborhood grocery store.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1865-1872",
        title: "Years from the fire to the cotton factory",
        partLabel: "7 years",
        value: 7,
        unit: "years",
        meant:
          "What this meant: 1872 comes 7 years after 1865. That is the stretch from the year Federal troops burned the building to the year it was rebuilt as a cotton batting factory and warehouse.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40131-works.jpg",
          "Illustration of a cotton factory and cotton bales. Not a historical photograph.",
        ),
        nowArt: art(
          "m40131-today.jpg",
          "Illustration of a marker by a brick warehouse. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cotton factory, for the building the marker says was rebuilt in 1872 as a cotton batting factory and warehouse. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a brick warehouse. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1863-64",
            label: "The building is built.",
            why: "The marker says this building was built in 1863-64.",
          },
          {
            id: "burned",
            year: "1865",
            label: "Federal troops burn the building.",
            why: "The marker says it was burned by Federal troops in 1865, then rebuilt in 1872 as a cotton batting factory and warehouse.",
          },
          {
            id: "rebuilt",
            year: "1898",
            label: "The State Dispensary rebuilds it as a warehouse.",
            why: "The marker says that in 1898 the S.C. State Dispensary, created by Gov. Benjamin R. Tillman, rebuilt it as a two-story building to serve as the State Dispensary Warehouse. It had burned again in 1897, leaving only the outer walls.",
          },
          {
            id: "grocery",
            year: "2004",
            label: "It is rehabilitated for a neighborhood grocery store.",
            why: "The marker says the dispensary was abolished in 1907, the building was vacant from 1907 until the 1920s and again from the late 1970s until 2004, when it was rehabilitated for a neighborhood grocery store.",
          },
        ],
        ["grocery", "built", "rebuilt", "burned"],
      ),
      takeaway([
        "This building, built in 1863-64 and burned by Federal troops in 1865, was rebuilt in 1872 as a cotton batting factory and warehouse. It burned again in 1897, leaving only the outer walls.",
        "In 1898 the S.C. State Dispensary, created by Gov. Benjamin R. Tillman to ensure state control over the production and sale of alcohol, rebuilt it as a two-story building to serve as the State Dispensary Warehouse.",
        "Though the State Dispensary system generated impressive revenue, it also allowed corruption and violence to flourish, and was finally abolished in 1907. Vacant from 1907 until the 1920s, this building served as a warehouse for a succession of businesses for the next fifty years. It was vacant again from the late 1970s until 2004, when it was rehabilitated for a neighborhood grocery store.",
      ]),
    ],
  ),
  lesson(
    "40-136",
    "A one-room school at Killian",
    "Killian School timeline",
    [
      cited("40-136", "Killian School", "front and back"),
      span(
        '"35 years" is 1948 minus 1913, the years the marker prints for the closing of Killian School and the start of the years with two teachers and an enrollment of 30 to 80 students.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "About 1925",
        title: "One room at the crossroads",
        partLabel: "the school",
        art: art(
          "m40136-school.jpg",
          "Illustration of a one-room schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "building",
            label: "About 1925",
            x: 32,
            y: 46,
            fact: "This one-room primary school, built about 1925, stood about 1 mi. E, at the intersection of Killian and Longtown Roads, until 2001.",
          },
          {
            id: "early",
            label: "1905",
            x: 74,
            y: 56,
            fact: "There was a school at Killian (also called Killian's) as early as 1905.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1913-1948",
        title: "Two teachers and grades 1-7",
        partLabel: "the schoolyard",
        art: art(
          "m40136-yard.jpg",
          "Illustration of a schoolyard beside a one-room school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "enrollment",
            label: "1913 to 1948",
            x: 32,
            y: 50,
            fact: "From 1913 to 1948 Killian School had two teachers and an enrollment of 30 to 80 students in grades 1-7, with an average attendance of 30 to 40 and an eight- to nine-month school year.",
          },
          {
            id: "after",
            label: "1948, 1954, 2001",
            x: 74,
            y: 40,
            fact: "Killian School closed in 1948, and its students and one teacher went to Blythewood Grammar School. In 1954 Richland County sold the school to the citizens of Killian for $100.00 as a community center. The Killian School was deeded to Richland County School District Two in 2000 and moved here in 2001 to be renovated as a museum of 20th century rural education and a conference center.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1913-1948",
        title: "Years with two teachers",
        partLabel: "35 years",
        value: 35,
        unit: "years",
        meant:
          "What this meant: 1948 comes 35 years after 1913. That is the stretch from the year the marker begins the period with two teachers and an enrollment of 30 to 80 students to the year Killian School closed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40136-school.jpg",
          "Illustration of a one-room schoolhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m40136-today.jpg",
          "Illustration of a marker by a small schoolhouse. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a one-room schoolhouse, for the primary school the marker says was built about 1925. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a small schoolhouse. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "early",
            year: "1905",
            label: "A school is at Killian.",
            why: "The marker says there was a school at Killian (also called Killian's) as early as 1905.",
          },
          {
            id: "teachers",
            year: "1913",
            label: "Two teachers serve grades 1-7.",
            why: "The marker says that from 1913 to 1948 Killian School had two teachers and an enrollment of 30 to 80 students in grades 1-7, with an average attendance of 30 to 40 and an eight- to nine-month school year.",
          },
          {
            id: "built",
            year: "About 1925",
            label: "This one-room primary school is built.",
            why: "The marker says this one-room primary school was built about 1925 and stood about 1 mi. E, at the intersection of Killian and Longtown Roads, until 2001.",
          },
          {
            id: "closed",
            year: "1948",
            label: "Killian School closes.",
            why: "The marker says Killian School closed in 1948, and its students and one teacher went to Blythewood Grammar School. In 1954 Richland County sold it to the citizens of Killian for $100.00 as a community center.",
          },
        ],
        ["closed", "early", "built", "teachers"],
      ),
      takeaway([
        "This one-room primary school, built about 1925, stood about 1 mi. E, at the intersection of Killian and Longtown Roads, until 2001. There was a school at Killian (also called Killian's) as early as 1905.",
        "From 1913 to 1948 Killian School had two teachers and an enrollment of 30 to 80 students in grades 1-7, with an average attendance of 30 to 40 and an eight- to nine-month school year.",
        "Killian School closed in 1948, and its students and one teacher went to Blythewood Grammar School. In 1954 Richland County sold the school to the citizens of Killian for $100.00 as a community center. The Killian School was deeded to Richland County School District Two in 2000 and moved here in 2001 to be renovated as a museum of 20th century rural education and a conference center.",
      ]),
    ],
  ),
  lesson(
    "40-137",
    "Renamed Sandfield, then Sandy Level",
    "Sandfield Baptist Church timeline",
    [
      cited("40-137", "Sandfield Baptist Church", "front and back"),
      span(
        '"68 years" is 1938 minus 1870, the years the marker prints for the disbanding of the second Sandfield Baptist Church and its organization.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "Before 1772",
        title: "Twenty-Five Mile Creek Church",
        partLabel: "the meeting house",
        art: art(
          "m40137-church.jpg",
          "Illustration of a plain wooden meeting house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Before 1772",
            x: 32,
            y: 48,
            fact: "Twenty-Five Mile Creek Church, a Primitive Baptist congregation, was organized in this area before 1772.",
          },
          {
            id: "renamed",
            label: "By ca. 1830",
            x: 74,
            y: 42,
            fact: "It was renamed Sandfield Church by ca. 1830 and the mother church for Cedar Creek, Harmony, Jackson Creek, and Sawney's Creek.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1843",
        title: "This site, then a second church",
        partLabel: "the churchyard",
        art: art(
          "m40137-yard.jpg",
          "Illustration of a churchyard and an old church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sandy",
            label: "1840 and 1856",
            x: 32,
            y: 52,
            fact: "After some members left in 1840 to organize a new church this congregation became Sandy Level Baptist Church in 1843. In 1856 Sandy Level Baptist Church built a new church 3 mi. W on Blythewood Rd. The congregation gave this site and the old church to the community provided any organization using it would be Baptist.",
          },
          {
            id: "second",
            label: "Ca. 1870",
            x: 74,
            y: 40,
            fact: "A second Sandfield Baptist Church, organized here ca. 1870, was disbanded ca. 1938. The cemetery here dates to the second church and is now maintained by Sandy Level Baptist Church.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1870-1938",
        title: "Years of the second Sandfield church",
        partLabel: "68 years",
        value: 68,
        unit: "years",
        meant:
          "What this meant: 1938 comes 68 years after 1870. That is the stretch from the year the marker prints for the organization of a second Sandfield Baptist Church, ca. 1870, to the year it was disbanded, ca. 1938.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40137-church.jpg",
          "Illustration of a plain wooden meeting house. Not a historical photograph.",
        ),
        nowArt: art(
          "m40137-today.jpg",
          "Illustration of a marker by a churchyard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plain meeting house, for Twenty-Five Mile Creek Church, which the marker says was organized in this area before 1772. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a churchyard. Not a photograph of the site today.",
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
            id: "renamed",
            year: "By ca. 1830",
            label: "It is renamed Sandfield Church.",
            why: "The marker says it was renamed Sandfield Church by ca. 1830 and the mother church for Cedar Creek, Harmony, Jackson Creek, and Sawney's Creek.",
          },
          {
            id: "sandy",
            year: "1843",
            label: "The congregation becomes Sandy Level Baptist Church.",
            why: "The marker says that after some members left in 1840 to organize a new church, this congregation became Sandy Level Baptist Church in 1843.",
          },
          {
            id: "second",
            year: "Ca. 1870",
            label: "A second Sandfield Baptist Church is organized here.",
            why: "The marker says a second Sandfield Baptist Church was organized here ca. 1870 and was disbanded ca. 1938. In 1856 Sandy Level Baptist Church built a new church 3 mi. W on Blythewood Rd. and gave this site and the old church to the community provided any organization using it would be Baptist.",
          },
        ],
        ["second", "organized", "sandy", "renamed"],
      ),
      takeaway([
        "Twenty-Five Mile Creek Church, a Primitive Baptist congregation, was organized in this area before 1772. It was renamed Sandfield Church by ca. 1830 and the mother church for Cedar Creek, Harmony, Jackson Creek, and Sawney's Creek.",
        "After some members left in 1840 to organize a new church this congregation became Sandy Level Baptist Church in 1843. In 1856 Sandy Level Baptist Church built a new church 3 mi. W on Blythewood Rd. The congregation gave this site and the old church to the community provided any organization using it would be Baptist.",
        "A second Sandfield Baptist Church, organized here ca. 1870, was disbanded ca. 1938. The cemetery here dates to the second church and is now maintained by Sandy Level Baptist Church.",
      ]),
    ],
  ),
];
