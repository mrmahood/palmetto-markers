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

export const darlingtonLessonsI: MarkerLesson[] = [
  lesson(
    "16-35",
    "Second public school for Hartsville's black community",
    "Butler School timeline",
    [
      cited("16-35", "Butler School", "front"),
      span(
        '"37 years" is 1946 minus 1909, the years the marker prints for Rev. Henry H. Butler as principal.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "site",
        kicker: "1921",
        title: "On this site since 1921",
        partLabel: "the school",
        art: art(
          "m1635-school.jpg",
          "Illustration of a public school building and yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "located",
            label: "Since 1921",
            x: 32,
            y: 48,
            fact: "Butler School, located on this site since 1921, was the second public school to serve Hartsville's black community and operated for over sixty years.",
          },
          {
            id: "renamed",
            label: "Until 1939",
            x: 74,
            y: 40,
            fact: "Known as the Darlington Co. Training School until 1939, it was renamed for Rev. Henry H. Butler, its principal 1909-1946.",
          },
        ],
      },
      {
        kind: "scene",
        id: "buildings",
        kicker: "1961",
        title: "The first building burned",
        partLabel: "the buildings",
        art: art(
          "m1635-buildings.jpg",
          "Illustration of a school wing and a burned foundation. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "burned",
            label: "1961",
            x: 32,
            y: 52,
            fact: "The first building on this site burned in 1961; extant buildings date from 1936 to the mid-1960s.",
          },
          {
            id: "closed",
            label: "1982",
            x: 74,
            y: 42,
            fact: "Butler School was a junior high and high school when it closed in 1982.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1909-1946",
        title: "Years as principal",
        partLabel: "37 years",
        value: 37,
        unit: "years",
        meant:
          "What this meant: 1946 comes 37 years after 1909. Those are the years the marker prints for Rev. Henry H. Butler as principal.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1635-school.jpg",
          "Illustration of a public school building and yard. Not a historical photograph.",
        ),
        nowArt: art(
          "m1635-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a public school building, for the school the marker says has been on this site since 1921. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "principal",
            year: "1909",
            label: "Rev. Henry H. Butler is principal.",
            why: "The marker says the school was renamed for Rev. Henry H. Butler, its principal 1909-1946.",
          },
          {
            id: "located",
            year: "1921",
            label: "Butler School is on this site.",
            why: "The marker says Butler School, located on this site since 1921, was the second public school to serve Hartsville's black community.",
          },
          {
            id: "renamed",
            year: "1939",
            label: "The training school is renamed.",
            why: "The marker says it was known as the Darlington Co. Training School until 1939, and was renamed for Rev. Henry H. Butler.",
          },
          {
            id: "closed",
            year: "1982",
            label: "The school closes.",
            why: "The marker says Butler School was a junior high and high school when it closed in 1982.",
          },
        ],
        ["closed", "principal", "renamed", "located"],
      ),
      takeaway([
        "Butler School, located on this site since 1921, was the second public school to serve Hartsville's black community and operated for over sixty years.",
        "Known as the Darlington Co. Training School until 1939, it was renamed for Rev. Henry H. Butler, its principal 1909-1946.",
        "Butler School was a junior high and high school when it closed in 1982.",
      ]),
    ],
  ),
  lesson(
    "16-36",
    "Organized with 17 charter members",
    "Society Hill Presbyterian Church timeline",
    [cited("16-36", "Society Hill Presbyterian Church", "front and back")],
    [
      {
        kind: "scene",
        id: "organized",
        kicker: "August 12, 1891",
        title: "A commission organizes the church",
        partLabel: "the organization",
        art: art(
          "m1636-church.jpg",
          "Illustration of a small wooden church and an oak. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "members",
            label: "17 charter members",
            x: 32,
            y: 46,
            fact: "Was organized August 12, 1891 with 17 charter members, by a commission of the Pee Dee Presbytery under Revs. J. G. Law, J. G. Richards, and W. B. Corbett.",
          },
          {
            id: "officers",
            label: "Church officers",
            x: 74,
            y: 40,
            fact: "Elders H. A. Womack and J. S. McCall and deacon L .M. Crosswell were appointed church officers.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1892-93",
        title: "Sanctuary, manse, and minister",
        partLabel: "the sanctuary",
        art: art(
          "m1636-sanctuary.jpg",
          "Illustration of a wooden sanctuary beside a manse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1892-93",
            x: 32,
            y: 50,
            fact: "Services were held in the school until the sanctuary was built 1892-93; a manse was built 1922.",
          },
          {
            id: "marion",
            label: "1892-1902",
            x: 74,
            y: 42,
            fact: "Rev. J. P. Marion, the first full-time minister, served 1892-1902.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "August 12, 1891",
        title: "Charter members",
        partLabel: "17 members",
        value: 17,
        unit: "members",
        meant:
          "What this meant: the marker says the church was organized August 12, 1891 with 17 charter members.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1636-church.jpg",
          "Illustration of a small wooden church and an oak. Not a historical photograph.",
        ),
        nowArt: art(
          "m1636-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small wooden church, for the congregation the marker says was organized August 12, 1891. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "August 12, 1891",
            label: "The church is organized.",
            why: "The marker says it was organized August 12, 1891 with 17 charter members, by a commission of the Pee Dee Presbytery.",
          },
          {
            id: "sanctuary",
            year: "1892-93",
            label: "The sanctuary is built.",
            why: "The marker says services were held in the school until the sanctuary was built 1892-93.",
          },
          {
            id: "manse",
            year: "1922",
            label: "A manse is built.",
            why: "The marker says a manse was built 1922.",
          },
          {
            id: "listed",
            year: "1974",
            label: "The historic district is listed.",
            why: "The marker says Society Hill Presbyterian Church is in the Welsh Neck-Long Bluff-Society Hill Historic District, listed in the National Register of Historic Places in 1974.",
          },
        ],
        ["listed", "sanctuary", "organized", "manse"],
      ),
      takeaway([
        "Was organized August 12, 1891 with 17 charter members, by a commission of the Pee Dee Presbytery under Revs. J. G. Law, J. G. Richards, and W. B. Corbett.",
        "For several years in the early twentieth century the church also sponsored seminary students preaching at as many as six mission stations in the Pee Dee region without financial aid from the Presbytery.",
        "Society Hill Presbyterian Church is in the Welsh Neck-Long Bluff-Society Hill Historic District, listed in the National Register of Historic Places in 1974.",
      ]),
    ],
  ),
  lesson(
    "16-37",
    "The track too tough to tame",
    "Darlington Raceway timeline",
    [cited("16-37", "Darlington Raceway", "front and back")],
    [
      {
        kind: "scene",
        id: "track",
        kicker: "1950",
        title: "The first superspeedway",
        partLabel: "the raceway",
        art: art(
          "m1637-track.jpg",
          "Illustration of an empty paved oval racetrack. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1950",
            x: 32,
            y: 46,
            fact: "Darlington Raceway, the first superspeedway in NASCAR history, was constructed in 1950 by Harold Brasington, a local race promoter.",
          },
          {
            id: "asphalt",
            label: "A 500-mile race",
            x: 74,
            y: 40,
            fact: "Harold Brasington saw an asphalt-paved track as an advance over the standard dirt tracks and wanted a 500-mile stock car race to rival the Indianapolis 500.",
          },
        ],
      },
      {
        kind: "scene",
        id: "race",
        kicker: "September 4, 1950",
        title: "The first Southern 500",
        partLabel: "the Southern 500",
        art: art(
          "m1637-race.jpg",
          "Illustration of stock cars on a paved oval. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "southern",
            label: "September 4, 1950",
            x: 32,
            y: 50,
            fact: "On September 4, 1950 the new mile-and-a quarter raceway hosted the first Southern 500, a 400-lap race in which 75 cars raced at top speeds of 80 m.p.h.",
          },
          {
            id: "museum",
            label: "1965",
            x: 74,
            y: 42,
            fact: "The Plymouth which Johnny Mantz drove to win the first race is one of several historic cars on display with other racing memorabilia at the NMPA Stock Car Hall of Fame/Joe Weatherly Museum, which opened here in 1965 to honor the pioneers of NASCAR.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "September 4, 1950",
        title: "Cars in the first Southern 500",
        partLabel: "75 cars",
        value: 75,
        unit: "cars",
        meant:
          "What this meant: the marker says that on September 4, 1950, 75 cars raced at top speeds of 80 m.p.h. in the first Southern 500.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1637-track.jpg",
          "Illustration of an empty paved oval racetrack. Not a historical photograph.",
        ),
        nowArt: art(
          "m1637-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an empty paved oval, for the raceway the marker says was constructed in 1950. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1950",
            label: "Harold Brasington constructs the raceway.",
            why: "The marker says Darlington Raceway, the first superspeedway in NASCAR history, was constructed in 1950 by Harold Brasington.",
          },
          {
            id: "southern",
            year: "September 4, 1950",
            label: "The first Southern 500 is held.",
            why: "The marker says that on September 4, 1950 the new mile-and-a quarter raceway hosted the first Southern 500.",
          },
          {
            id: "museum",
            year: "1965",
            label: "The museum opens here.",
            why: "The marker says the NMPA Stock Car Hall of Fame/Joe Weatherly Museum opened here in 1965 to honor the pioneers of NASCAR.",
          },
        ],
        ["southern", "museum", "built"],
      ),
      takeaway([
        "Darlington Raceway, the first superspeedway in NASCAR history, was constructed in 1950 by Harold Brasington, a local race promoter who saw an asphalt-paved track as an advance over the standard dirt tracks and wanted a 500-mile stock car race to rival the Indianapolis 500.",
        'The egg-shaped track at Darlington quickly gained a reputation as "the track too tough to tame" and the Southern 500 became one of racing\'s most important events.',
        "The Plymouth which Johnny Mantz drove to win the first race is one of several historic cars on display with other racing memorabilia at the NMPA Stock Car Hall of Fame/Joe Weatherly Museum, which opened here in 1965 to honor the pioneers of NASCAR.",
      ]),
    ],
  ),
  lesson(
    "16-38",
    "A bell offered to cast cannon",
    "First Baptist Church timeline",
    [cited("16-38", "First Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "founded",
        kicker: "1831",
        title: "Darlington Baptist Church of Christ",
        partLabel: "the congregation",
        art: art(
          "m1638-church.jpg",
          "Illustration of a small wooden meeting house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1831",
            x: 32,
            y: 48,
            fact: "Established in 1831 as Darlington Baptist Church of Christ, with Rev. W.Q. Beattie as its first minister; joined the Welsh Neck Association in 1832.",
          },
          {
            id: "sanctuary",
            label: "1830 and 1859",
            x: 74,
            y: 40,
            fact: "The first sanctuary, built in 1830 just before the church was formally organized, was replaced in 1859 by a second building.",
          },
        ],
      },
      {
        kind: "scene",
        id: "bell",
        kicker: "During the Civil War",
        title: "The bell, then a brick sanctuary",
        partLabel: "the bell",
        art: art(
          "m1638-bell.jpg",
          "Illustration of a church bell beside a brick sanctuary. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "offered",
            label: "During the Civil War",
            x: 32,
            y: 52,
            fact: "During the Civil War the church offered its bell to be melted down to cast cannon for the Confederacy.",
          },
          {
            id: "renamed",
            label: "1912",
            x: 74,
            y: 42,
            fact: "This church, which has licensed or ordained 14 clergymen since 1831, was renamed First Baptist Church of Darlington in 1912; the present brick sanctuary was dedicated that December.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Since 1831",
        title: "Clergymen licensed or ordained",
        partLabel: "14 clergymen",
        value: 14,
        unit: "clergymen",
        meant:
          "What this meant: the marker says this church has licensed or ordained 14 clergymen since 1831.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1638-church.jpg",
          "Illustration of a small wooden meeting house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1638-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small wooden meeting house, for the church the marker says was established in 1831. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "sanctuary",
            year: "1830",
            label: "The first sanctuary is built.",
            why: "The marker says the first sanctuary was built in 1830 just before the church was formally organized.",
          },
          {
            id: "established",
            year: "1831",
            label: "The church is established.",
            why: "The marker says it was established in 1831 as Darlington Baptist Church of Christ, with Rev. W.Q. Beattie as its first minister.",
          },
          {
            id: "replaced",
            year: "1859",
            label: "A second building replaces the first sanctuary.",
            why: "The marker says the first sanctuary was replaced in 1859 by a second building.",
          },
          {
            id: "renamed",
            year: "1912",
            label: "The church is renamed and the brick sanctuary is dedicated.",
            why: "The marker says it was renamed First Baptist Church of Darlington in 1912; the present brick sanctuary was dedicated that December.",
          },
        ],
        ["renamed", "sanctuary", "replaced", "established"],
      ),
      takeaway([
        "Established in 1831 as Darlington Baptist Church of Christ, with Rev. W.Q. Beattie as its first minister; joined the Welsh Neck Association in 1832.",
        "During the Civil War the church offered its bell to be melted down to cast cannon for the Confederacy.",
        "The Hardin Building was built in 1924; the Jones Building in 1956, the Illy McFall Memorial Building in 1975, and the E.S. Howle Fellowship Hall in 1983. Additional renovations were completed in 1997.",
      ]),
    ],
  ),
];
