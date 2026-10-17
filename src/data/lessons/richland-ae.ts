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

export const richlandLessonsAE: MarkerLesson[] = [
  lesson(
    "40-159",
    "A brick church the members built",
    "Sidney Park timeline",
    [
      cited("40-159", "Sidney Park C.M.E. Church", "front and back"),
      span(
        '"4 years" is 1893 minus 1889, the years the marker prints for the Gothic Revival brick church and the first frame sanctuary.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "frame",
        kicker: "1886",
        title: "Founded, then a frame sanctuary",
        partLabel: "the first church",
        art: art(
          "m40159-church.jpg",
          "Illustration of a lumber pile and a frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Founded in 1886",
            x: 32,
            y: 48,
            fact: "Sidney Park C.M.E. Church was founded in 1886 and has been at this site since 1889. It grew out of a dispute among members of Bethel A.M.E. Church, who left that congregation and applied to join the Colored Methodist Episcopal (now Christian Methodist Episcopal) Church. The congregation acquired this site in 1886.",
          },
          {
            id: "frame",
            label: "Frame sanctuary, 1889",
            x: 74,
            y: 42,
            fact: "The congregation acquired this site in 1886 and built its first sanctuary, a frame building, in 1889. That church burned by 1892.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brick",
        kicker: "1893",
        title: "Brick, materials, and labor",
        partLabel: "the brick church",
        art: art(
          "m40159-yard.jpg",
          "Illustration of building materials and a brick church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Built in 1893",
            x: 32,
            y: 54,
            fact: "This Gothic Revival brick church, built in 1893, was constructed by members who provided materials and labor.",
          },
          {
            id: "listed",
            label: "Listed in 1996",
            x: 74,
            y: 40,
            fact: "In the 1930s many members joined the National Association for the Advancement of Colored People (NAACP), and the church later hosted many meetings during the Civil Rights Movement. Sidney Park was listed in the National Register of Historic Places in 1996.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1889 to 1893",
        title: "Years from the frame church to the brick church",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1893 comes 4 years after 1889. The marker says the first sanctuary, a frame building, was built in 1889, and this Gothic Revival brick church was built in 1893.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40159-church.jpg",
          "Illustration of a lumber pile and a frame church. Not a historical photograph.",
        ),
        nowArt: art(
          "m40159-today.jpg",
          "Illustration of a blank marker near a church. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a lumber pile and a frame church, for the first sanctuary the marker says was built in 1889. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker near a church. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1886",
            label: "The church is founded and acquires this site.",
            why: "The marker says Sidney Park C.M.E. Church was founded in 1886 and the congregation acquired this site in 1886.",
          },
          {
            id: "frame",
            year: "1889",
            label: "The first sanctuary, a frame building, is built.",
            why: "The marker says it has been at this site since 1889 and built its first sanctuary, a frame building, in 1889.",
          },
          {
            id: "burned",
            year: "1892",
            label: "That church burns.",
            why: "The marker says that church burned by 1892.",
          },
          {
            id: "brick",
            year: "1893",
            label: "Members build the Gothic Revival brick church.",
            why: "The marker says this Gothic Revival brick church, built in 1893, was constructed by members who provided materials and labor.",
          },
        ],
        ["burned", "brick", "founded", "frame"],
      ),
      takeaway([
        "Sidney Park C.M.E. Church was founded in 1886 and has been at this site since 1889. It grew out of a dispute among members of Bethel A.M.E. Church, who left that congregation and applied to join the Colored Methodist Episcopal (now Christian Methodist Episcopal) Church.",
        "The congregation acquired this site in 1886 and built its first sanctuary, a frame building, in 1889. That church burned by 1892. This Gothic Revival brick church, built in 1893, was constructed by members who provided materials and labor.",
        "In the 1930s many members joined the National Association for the Advancement of Colored People (NAACP), and the church later hosted many meetings during the Civil Rights Movement. Sidney Park was listed in the National Register of Historic Places in 1996.",
      ]),
    ],
  ),
  lesson(
    "40-160",
    "A photographer's house on Wayne Street",
    "Roberts House timeline",
    [cited("40-160", "Richard Samuel Roberts House", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1920",
        title: "Bought for $3,000",
        partLabel: "the house",
        art: art(
          "m40160-house.jpg",
          "Illustration of a house and a front gate. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lived",
            label: "Lived here from 1920",
            x: 32,
            y: 46,
            fact: "Richard Samuel Roberts (1880-1936), a photographer who documented individuals, families, and institutions in Columbia's black community and across S.C., lived here from 1920 until his death.",
          },
          {
            id: "bought",
            label: "Bought for $3,000",
            x: 74,
            y: 56,
            fact: "Roberts, a self-taught photographer, moved his family from Florida to Columbia and bought this house at 1717 Wayne Street for $3,000. Roberts and his wife Wilhelmina Williams Roberts (1881-1977) raised their children here.",
          },
        ],
      },
      {
        kind: "scene",
        id: "studio",
        kicker: "1922",
        title: "An outbuilding, then Washington Street",
        partLabel: "the studio",
        art: art(
          "m40160-yard.jpg",
          "Illustration of an outbuilding and a house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "outbuilding",
            label: "Outbuilding studio",
            x: 32,
            y: 50,
            fact: "Roberts, who was a full-time custodian at the main Columbia post office, first used an outbuilding here for his photography studio.",
          },
          {
            id: "downtown",
            label: "1922 to 1936",
            x: 74,
            y: 40,
            fact: "From 1922 to 1936 his studio was downtown at 1119 Washington Street. Roberts often advertised in the Palmetto Leader, the leading black newspaper in S.C. Some of Roberts' best photographs were published in 1986 in A True Likeness: The Black South of Richard Samuel Roberts.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1920",
        title: "What he paid for the house",
        partLabel: "3,000 dollars",
        value: 3000,
        unit: "dollars",
        meant:
          "What this meant: the marker says Roberts bought this house at 1717 Wayne Street for $3,000.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40160-house.jpg",
          "Illustration of a house and a front gate. Not a historical photograph.",
        ),
        nowArt: art(
          "m40160-today.jpg",
          "Illustration of a blank marker near a house. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house and a front gate, for the house the marker says Roberts bought at 1717 Wayne Street. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker near a house. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "bought",
            year: "1920",
            label: "Roberts buys the house and lives here.",
            why: "The marker says he lived here from 1920 until his death and bought this house at 1717 Wayne Street for $3,000.",
          },
          {
            id: "downtown",
            year: "1922",
            label: "His studio is downtown on Washington Street.",
            why: "The marker says from 1922 to 1936 his studio was downtown at 1119 Washington Street. He first used an outbuilding here for his photography studio.",
          },
          {
            id: "ends",
            year: "1936",
            label: "The downtown studio years end.",
            why: "The marker says from 1922 to 1936 his studio was downtown at 1119 Washington Street. It gives Richard Samuel Roberts as 1880-1936 and says he lived here from 1920 until his death.",
          },
          {
            id: "book",
            year: "1986",
            label: "A book of his photographs is published.",
            why: "The marker says some of Roberts' best photographs were published in 1986 in A True Likeness: The Black South of Richard Samuel Roberts.",
          },
        ],
        ["book", "bought", "ends", "downtown"],
      ),
      takeaway([
        "Richard Samuel Roberts (1880-1936), a photographer who documented individuals, families, and institutions in Columbia's black community and across S.C., lived here from 1920 until his death. Roberts, a self-taught photographer, moved his family from Florida to Columbia and bought this house at 1717 Wayne Street for $3,000.",
        "Roberts and his wife Wilhelmina Williams Roberts (1881-1977) raised their children here. Roberts, who was a full-time custodian at the main Columbia post office, first used an outbuilding here for his photography studio.",
        "From 1922 to 1936 his studio was downtown at 1119 Washington Street. Roberts often advertised in the Palmetto Leader, the leading black newspaper in S.C. Some of Roberts' best photographs were published in 1986 in A True Likeness: The Black South of Richard Samuel Roberts.",
      ]),
    ],
  ),
  lesson(
    "40-161",
    "The house Cap J. Carroll built",
    "Frederick House timeline",
    [
      cited("40-161", "Nathaniel J. Frederick House", "front and back"),
      span(
        '"9 years" is 1913 minus 1904, the years the marker prints for his admission to the S.C. bar and the start of the years he lived here.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1903",
        title: "Built in 1903, home from 1904",
        partLabel: "the house",
        art: art(
          "m40161-house.jpg",
          "Illustration of a house and a front walk. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Built in 1903",
            x: 32,
            y: 44,
            fact: "This house was built in 1903 by Cap J. Carroll, a prominent businessman and city official whose daughter Corrine married Frederick in 1904.",
          },
          {
            id: "lived",
            label: "Lived here from 1904",
            x: 74,
            y: 56,
            fact: "Nathaniel J. Frederick (1877-1938), educator, lawyer, newspaper editor, and civil rights activist, lived here from 1904 until his death.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1913",
        title: "Bar, school, and newspaper",
        partLabel: "the yard",
        art: art(
          "m40161-yard.jpg",
          "Illustration of a side yard and a house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bar",
            label: "Admitted in 1913",
            x: 32,
            y: 52,
            fact: "Frederick, who was educated at Claflin College and the University of Wisconsin, was admitted to the S.C. bar in 1913. Frederick argued more cases before the Supreme Court of S.C. than any black lawyer of his day. He won national attention for defending clients accused of murdering a sheriff in State v. Lowman (1926), but his clients were later lynched.",
          },
          {
            id: "editor",
            label: "Howard School and the Leader",
            x: 74,
            y: 40,
            fact: "Frederick was principal of the Howard School 1902-18 and president of the State Negro Teachers Association. He edited the Palmetto Leader, the major black newspaper in S.C., 1925-38.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1904 to 1913",
        title: "Years from this house to the bar",
        partLabel: "9 years",
        value: 9,
        unit: "years",
        meant:
          "What this meant: 1913 comes 9 years after 1904. The marker says he lived here from 1904 and was admitted to the S.C. bar in 1913.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40161-house.jpg",
          "Illustration of a house and a front walk. Not a historical photograph.",
        ),
        nowArt: art(
          "m40161-today.jpg",
          "Illustration of a blank marker near a house. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house and a front walk, for the house the marker says was built in 1903. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker near a house. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1903",
            label: "Cap J. Carroll builds this house.",
            why: "The marker says this house was built in 1903 by Cap J. Carroll, a prominent businessman and city official.",
          },
          {
            id: "home",
            year: "1904",
            label: "Frederick marries Corrine and lives here.",
            why: "The marker says Corrine married Frederick in 1904 and that he lived here from 1904 until his death.",
          },
          {
            id: "bar",
            year: "1913",
            label: "He is admitted to the S.C. bar.",
            why: "The marker says Frederick, who was educated at Claflin College and the University of Wisconsin, was admitted to the S.C. bar in 1913.",
          },
          {
            id: "lowman",
            year: "1926",
            label: "He defends clients in State v. Lowman.",
            why: "The marker says he won national attention for defending clients accused of murdering a sheriff in State v. Lowman (1926), but his clients were later lynched.",
          },
        ],
        ["lowman", "built", "bar", "home"],
      ),
      takeaway([
        "Nathaniel J. Frederick (1877-1938), educator, lawyer, newspaper editor, and civil rights activist, lived here from 1904 until his death. This house was built in 1903 by Cap J. Carroll, a prominent businessman and city official whose daughter Corrine married Frederick in 1904.",
        "Frederick, who was educated at Claflin College and the University of Wisconsin, was admitted to the S.C. bar in 1913. Frederick argued more cases before the Supreme Court of S.C. than any black lawyer of his day. He won national attention for defending clients accused of murdering a sheriff in State v. Lowman (1926), but his clients were later lynched.",
        "Frederick was principal of the Howard School 1902-18 and president of the State Negro Teachers Association. He edited the Palmetto Leader, the major black newspaper in S.C., 1925-38.",
      ]),
    ],
  ),
  lesson(
    "40-162",
    "From a brush arbor to a sanctuary",
    "Bethel Baptist timeline",
    [
      cited("40-162", "Bethel Baptist Church", "front"),
      span(
        '"8 years" is 1892 minus 1884, the years the marker prints for the frame sanctuary and the founding of the church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "arbor",
        kicker: "1884",
        title: "A brush arbor, then a frame church",
        partLabel: "the first meeting place",
        art: art(
          "m40162-church.jpg",
          "Illustration of a brush arbor and a frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Founded in 1884",
            x: 32,
            y: 50,
            fact: "Bethel Baptist Church was founded in 1884 by black members of nearby Sandy Level Baptist Church seeking to organize a separate congregation. They met at first in a brush arbor.",
          },
          {
            id: "frame",
            label: "Frame sanctuary, 1892",
            x: 74,
            y: 42,
            fact: "They met at first in a brush arbor, then built a frame sanctuary here in 1892.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1952",
        title: "Granite veneer and a school behind",
        partLabel: "the yard behind the church",
        art: art(
          "m40162-yard.jpg",
          "Illustration of a church and a schoolhouse behind it. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "veneer",
            label: "Granite veneer, 1952",
            x: 32,
            y: 46,
            fact: "It was covered in granite veneer in 1952. The present sanctuary was built in 2003.",
          },
          {
            id: "school",
            label: "Bethel School",
            x: 74,
            y: 38,
            fact: "The church also sponsored the Bethel School, which stood behind the church.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1884 to 1892",
        title: "Years from founding to the frame sanctuary",
        partLabel: "8 years",
        value: 8,
        unit: "years",
        meant:
          "What this meant: 1892 comes 8 years after 1884. The marker says the church was founded in 1884 and a frame sanctuary was built here in 1892.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40162-church.jpg",
          "Illustration of a brush arbor and a frame church. Not a historical photograph.",
        ),
        nowArt: art(
          "m40162-today.jpg",
          "Illustration of a blank marker near a church. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brush arbor and a frame church, for the congregation the marker says was founded in 1884. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker near a church. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1884",
            label: "Black members of Sandy Level found the church.",
            why: "The marker says Bethel Baptist Church was founded in 1884 by black members of nearby Sandy Level Baptist Church seeking to organize a separate congregation. They met at first in a brush arbor.",
          },
          {
            id: "frame",
            year: "1892",
            label: "A frame sanctuary is built here.",
            why: "The marker says they then built a frame sanctuary here in 1892.",
          },
          {
            id: "granite",
            year: "1952",
            label: "The church is covered in granite veneer.",
            why: "The marker says it was covered in granite veneer in 1952.",
          },
          {
            id: "present",
            year: "2003",
            label: "The present sanctuary is built.",
            why: "The marker says the present sanctuary was built in 2003.",
          },
        ],
        ["granite", "present", "founded", "frame"],
      ),
      takeaway([
        "Bethel Baptist Church was founded in 1884 by black members of nearby Sandy Level Baptist Church seeking to organize a separate congregation. They met at first in a brush arbor.",
        "They built a frame sanctuary here in 1892. It was covered in granite veneer in 1952. The present sanctuary was built in 2003.",
        "The church also sponsored the Bethel School, which stood behind the church.",
      ]),
    ],
  ),
];
