import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Darlington sites. Facts are from that marker only.
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

export const darlingtonLessonsK: MarkerLesson[] = [
  lesson(
    "16-43",
    "A man of rare true worth",
    'Henry "Dad" Brown timeline',
    [cited("16-43", 'Henry "Dad" Brown', "front and back")],
    [
      {
        kind: "scene",
        id: "grave",
        kicker: "75' N",
        title: "Buried with his wife Laura",
        partLabel: "the grave",
        art: art(
          "m1643-grave.jpg",
          "Illustration of two unmarked graves under trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "buried",
            label: "75' N",
            x: 32,
            y: 52,
            fact: 'Henry "Dad" Brown (1830-1907), a black veteran of the Mexican, Civil, and Spanish-American Wars, is buried 75\' N with his wife Laura.',
          },
          {
            id: "camden",
            label: "Near Camden",
            x: 74,
            y: 40,
            fact: "Variously said to have been born free or born as a slave who purchased his and Laura's freedom, he was born near Camden.",
          },
        ],
      },
      {
        kind: "scene",
        id: "service",
        kicker: "May 1861",
        title: "A drummer in the Darlington Grays",
        partLabel: "the drummer",
        art: art(
          "m1643-drums.jpg",
          "Illustration of a drum, drumsticks, and brickmason tools. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grays",
            label: "May 1861",
            x: 32,
            y: 46,
            fact: 'Brown, a brickmason, joined the Confederate army in May 1861 as a drummer in the "Darlington Grays," Co. F, 8th S.C. Infantry.',
          },
          {
            id: "sticks",
            label: "July 1861",
            x: 74,
            y: 58,
            fact: 'Brown enlisted as a drummer in Co. H, 21st S.C. Infantry in July 1861 and served for the rest of the war. He "captured" a pair of Union drumsticks in battle.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "75' N",
        title: "Feet north to the grave",
        partLabel: "75 feet",
        value: 75,
        unit: "feet",
        meant:
          'What this meant: the marker says Henry "Dad" Brown is buried 75\' N with his wife Laura.',
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1643-grave.jpg",
          "Illustration of two unmarked graves under trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m1643-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          'Illustration of two unmarked graves, for the place the marker says Henry "Dad" Brown is buried 75\' N with his wife Laura.',
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "born",
            year: "1830",
            label: 'Henry "Dad" Brown is born near Camden.',
            why: 'The marker prints Henry "Dad" Brown (1830-1907) and says he was born near Camden.',
          },
          {
            id: "grays",
            year: "May 1861",
            label: 'He joins the "Darlington Grays" as a drummer.',
            why: 'The marker says Brown, a brickmason, joined the Confederate army in May 1861 as a drummer in the "Darlington Grays," Co. F, 8th S.C. Infantry.',
          },
          {
            id: "guards",
            year: "1878",
            label: 'He is a member of the "Darlington Guards."',
            why: 'The marker says he was also a member of the "Darlington Guards" 1878-1907.',
          },
          {
            id: "death",
            year: "1907",
            label: "Darlington citizens erect the monument nearby.",
            why: 'The marker says that, described as "a man of rare true worth" at his death in 1907, Brown was honored shortly afterwards by Darlington citizens who erected the monument nearby.',
          },
        ],
        ["guards", "death", "born", "grays"],
      ),
      takeaway([
        'Henry "Dad" Brown (1830-1907), a black veteran of the Mexican, Civil, and Spanish-American Wars, is buried 75\' N with his wife Laura.',
        'Brown, a brickmason, joined the Confederate army in May 1861 as a drummer in the "Darlington Grays," Co. F, 8th S.C. Infantry.',
        'Described as "a man of rare true worth" at his death in 1907, Brown was honored shortly afterwards by Darlington citizens who erected the monument nearby.',
      ]),
    ],
  ),
  lesson(
    "16-44",
    "A founding member of the Pee Dee Presbytery",
    "Fair Hope Presbyterian Church timeline",
    [
      cited("16-44", "Fair Hope Presbyterian Church", "front"),
      span("97 years is 1969 minus 1872 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1872",
        title: "Organized by Harmony Presbytery",
        partLabel: "the sanctuary",
        art: art(
          "m1644-sanctuary.jpg",
          "Illustration of a small wooden church on open land. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1872",
            x: 32,
            y: 48,
            fact: "This church was organized in 1872 by Harmony Presbytery with Capt. Joseph Commander (1800-1883) as its first elder.",
          },
          {
            id: "moved",
            label: "About 1909",
            x: 74,
            y: 40,
            fact: "This sanctuary, built on land donated by Commander, was moved here and remodeled about 1909.",
          },
        ],
      },
      {
        kind: "scene",
        id: "pews",
        kicker: "1889",
        title: "Withdrew to become an independent church",
        partLabel: "the congregation",
        art: art(
          "m1644-pews.jpg",
          "Illustration of empty wooden pews in a plain church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "presbytery",
            label: "1889",
            x: 32,
            y: 50,
            fact: "Fair Hope was a founding member of the Pee Dee Presbytery in 1889.",
          },
          {
            id: "withdrew",
            label: "1969",
            x: 74,
            y: 42,
            fact: "Fair Hope withdrew in 1969 to become an independent church.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1872-1969",
        title: "Years from the organization to independence",
        partLabel: "97 years",
        value: 97,
        unit: "years",
        meant:
          "What this meant: 1969 comes 97 years after 1872. That is the stretch from the year the church was organized to the year it withdrew to become an independent church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1644-sanctuary.jpg",
          "Illustration of a small wooden church on open land. Not a historical photograph.",
        ),
        nowArt: art(
          "m1644-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a small wooden church, for the sanctuary the marker says was built on land donated by Commander and moved here and remodeled about 1909.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "organized",
            year: "1872",
            label: "Harmony Presbytery organizes the church.",
            why: "The marker says this church was organized in 1872 by Harmony Presbytery with Capt. Joseph Commander (1800-1883) as its first elder.",
          },
          {
            id: "presbytery",
            year: "1889",
            label: "Fair Hope is a founding member of the Pee Dee Presbytery.",
            why: "The marker says Fair Hope, a founding member of the Pee Dee Presbytery in 1889, withdrew in 1969 to become an independent church.",
          },
          {
            id: "moved",
            year: "About 1909",
            label: "The sanctuary is moved here and remodeled.",
            why: "The marker says this sanctuary, built on land donated by Commander, was moved here and remodeled about 1909.",
          },
          {
            id: "withdrew",
            year: "1969",
            label: "The church withdraws to become independent.",
            why: "The marker says Fair Hope, a founding member of the Pee Dee Presbytery in 1889, withdrew in 1969 to become an independent church.",
          },
        ],
        ["moved", "organized", "withdrew", "presbytery"],
      ),
      takeaway([
        "This church was organized in 1872 by Harmony Presbytery with Capt. Joseph Commander (1800-1883) as its first elder.",
        "This sanctuary, built on land donated by Commander, was moved here and remodeled about 1909.",
        "Fair Hope, a founding member of the Pee Dee Presbytery in 1889, withdrew in 1969 to become an independent church.",
      ]),
    ],
  ),
  lesson(
    "16-45",
    "A self-taught master craftsman and designer",
    "Lawrence Reese timeline",
    [cited("16-45", "Lawrence Reese", "front and back")],
    [
      {
        kind: "scene",
        id: "houses",
        kicker: "By 1887",
        title: "Residences on West Broad Street",
        partLabel: "the houses",
        art: art(
          "m1645-houses.jpg",
          "Illustration of Victorian wooden houses along a street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "merchant",
            label: "By 1887",
            x: 32,
            y: 46,
            fact: "West Broad Street features several late-19th to early-20th century residences designed and built by Lawrence Reese (1865-1915), a native of Marlboro County who came to Darlington as a merchant by 1887.",
          },
          {
            id: "favorite",
            label: "ca. 1900",
            x: 74,
            y: 56,
            fact: "The Belk Funeral Home, at 229 West Broad, was built ca. 1900 as a residence for Abraham Hyman and was Reese's own favorite of the several houses he designed here.",
          },
        ],
      },
      {
        kind: "scene",
        id: "station",
        kicker: "1911",
        title: "A station on Russell Street",
        partLabel: "the station",
        art: art(
          "m1645-station.jpg",
          "Illustration of a small wooden railway station beside tracks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "houses",
            label: "14 houses",
            x: 32,
            y: 48,
            fact: "The West Broad Street Historic District, listed in the National Register of Historic Places in 1988, features 14 houses designed and built by Lawrence Reese between ca. 1890 and ca. 1910, most of them with elaborate Eastlake, Queen Anne, and other Victorian era architectural elements.",
          },
          {
            id: "station",
            label: "1911",
            x: 74,
            y: 40,
            fact: "Reese also designed and built the South Carolina Western Railway Station on Russell Street, built in 1911 and also listed in the National Register in 1988.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "ca. 1890-ca. 1910",
        title: "Houses Reese designed and built",
        partLabel: "14 houses",
        value: 14,
        unit: "houses",
        meant:
          "What this meant: the marker says the West Broad Street Historic District features 14 houses designed and built by Lawrence Reese between ca. 1890 and ca. 1910.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1645-houses.jpg",
          "Illustration of Victorian wooden houses along a street. Not a historical photograph.",
        ),
        nowArt: art(
          "m1645-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of Victorian wooden houses, for the residences the marker says Lawrence Reese designed and built on West Broad Street.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "merchant",
            year: "By 1887",
            label: "Lawrence Reese comes to Darlington as a merchant.",
            why: "The marker says Lawrence Reese (1865-1915), a native of Marlboro County, came to Darlington as a merchant by 1887.",
          },
          {
            id: "favorite",
            year: "ca. 1900",
            label: "A residence for Abraham Hyman is built.",
            why: "The marker says the Belk Funeral Home, at 229 West Broad, was built ca. 1900 as a residence for Abraham Hyman and was Reese's own favorite of the several houses he designed here.",
          },
          {
            id: "station",
            year: "1911",
            label: "Reese builds the railway station on Russell Street.",
            why: "The marker says Reese also designed and built the South Carolina Western Railway Station on Russell Street, built in 1911 and also listed in the National Register in 1988.",
          },
          {
            id: "listed",
            year: "1988",
            label: "The historic district is listed in the National Register.",
            why: "The marker says the West Broad Street Historic District was listed in the National Register of Historic Places in 1988.",
          },
        ],
        ["station", "merchant", "listed", "favorite"],
      ),
      takeaway([
        "Reese, who had no formal training in architecture, was a self-taught master craftsman and designer.",
        "The West Broad Street Historic District, listed in the National Register of Historic Places in 1988, features 14 houses designed and built by Lawrence Reese between ca. 1890 and ca. 1910, most of them with elaborate Eastlake, Queen Anne, and other Victorian era architectural elements.",
        "Reese also designed and built the South Carolina Western Railway Station on Russell Street, built in 1911 and also listed in the National Register in 1988.",
      ]),
    ],
  ),
  lesson(
    "16-46",
    "The first Methodist congregation in the area",
    "Damascus Methodist Church timeline",
    [
      cited("16-46", "Damascus Methodist Church", "front"),
      span("84 years is 1901 minus 1817 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "meeting",
        kicker: "As early as 1817",
        title: "Wright's Meeting House, Black Creek",
        partLabel: "the meeting house",
        art: art(
          "m1646-meeting.jpg",
          "Illustration of a plain wooden meeting house beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "As early as 1817",
            x: 32,
            y: 48,
            fact: 'The church organized as early as 1817 and known as "Wright\'s Meeting House, Black Creek" was the first Methodist congregation in the area.',
          },
          {
            id: "exhorter",
            label: "1826",
            x: 74,
            y: 56,
            fact: 'James D. Wright, an elder who was appointed "Exhorter" in 1826, preached here until his death in 1862.',
          },
        ],
      },
      {
        kind: "scene",
        id: "empty",
        kicker: "1893",
        title: "Declined, then disbanded",
        partLabel: "the later years",
        art: art(
          "m1646-empty.jpg",
          "Illustration of an empty weathered meeting house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "declined",
            label: "1893",
            x: 32,
            y: 46,
            fact: "Damascus Methodist Church declined after 1893, when Wesley Methodist Church was founded in Hartsville.",
          },
          {
            id: "disbanded",
            label: "By 1901",
            x: 74,
            y: 40,
            fact: "It disbanded by 1901.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1817-1901",
        title: "Years from the organization to the disbanding",
        partLabel: "84 years",
        value: 84,
        unit: "years",
        meant:
          "What this meant: 1901 comes 84 years after 1817. Those are the years the marker prints for the church organized as early as 1817 and disbanded by 1901.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1646-meeting.jpg",
          "Illustration of a plain wooden meeting house beside a creek. Not a historical photograph.",
        ),
        nowArt: art(
          "m1646-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a plain wooden meeting house beside a creek, for the church the marker says was known as Wright's Meeting House, Black Creek.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "organized",
            year: "As early as 1817",
            label: "The church is organized as Wright's Meeting House.",
            why: 'The marker says the church organized as early as 1817 and known as "Wright\'s Meeting House, Black Creek" was the first Methodist congregation in the area.',
          },
          {
            id: "exhorter",
            year: "1826",
            label: 'James D. Wright is appointed "Exhorter."',
            why: 'The marker says James D. Wright, an elder who was appointed "Exhorter" in 1826, preached here until his death in 1862.',
          },
          {
            id: "declined",
            year: "1893",
            label: "The church declines after Wesley is founded in Hartsville.",
            why: "The marker says Damascus Methodist Church declined after 1893, when Wesley Methodist Church was founded in Hartsville.",
          },
          {
            id: "disbanded",
            year: "By 1901",
            label: "Damascus Methodist Church disbands.",
            why: "The marker says it disbanded by 1901.",
          },
        ],
        ["declined", "organized", "disbanded", "exhorter"],
      ),
      takeaway([
        'The church organized as early as 1817 and known as "Wright\'s Meeting House, Black Creek" was the first Methodist congregation in the area.',
        'James D. Wright, an elder who was appointed "Exhorter" in 1826, preached here until his death in 1862.',
        "Damascus Methodist Church declined after 1893, when Wesley Methodist Church was founded in Hartsville; it disbanded by 1901.",
      ]),
    ],
  ),
];
