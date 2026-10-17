import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Richland sites. Facts are from that marker only.
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

export const richlandLessonsQ: MarkerLesson[] = [
  lesson(
    "40-83",
    "Named for the fighting Gamecock",
    "Sumter Street timeline",
    [
      cited("40-83", "Sumter Street", "front and back"),
      span(
        '"67 years" is 1832 minus 1765, the years the marker prints for his death and his coming to South Carolina.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "ca. 1765",
        title: "A Virginia native in South Carolina",
        partLabel: "the street",
        art: art(
          "m4083-street.jpg",
          "Illustration of a street and a public building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "came",
            label: "ca. 1765",
            x: 32,
            y: 54,
            fact: "A Virginia native who came to South Carolina ca. 1765, General Thomas Sumter was a leader in civil as well as military affairs.",
          },
          {
            id: "offices",
            label: "Civil offices",
            x: 74,
            y: 46,
            fact: "He served in the First and the Second Provincial Congresses, in the S. C. General Assembly, as U. S. Congressman and U. S. Senator.",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1832",
        title: "His home in Stateburg",
        partLabel: "the home",
        art: art(
          "m4083-houses.jpg",
          "Illustration of a planter's house and fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "died",
            label: "1832",
            x: 32,
            y: 50,
            fact: "South Carolina's last Revolutionary War general, he died in 1832 at his Sumter District home in Stateburg.",
          },
          {
            id: "planter",
            label: "Landowner",
            x: 74,
            y: 58,
            fact: "At his Sumter District home in Stateburg he was a large landowner and planter. His tomb there notes him as a founder of the Republic.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "ca. 1765-1832",
        title: "Years from his coming to his death",
        partLabel: "67 years",
        value: 67,
        unit: "years",
        meant:
          "What this meant: 1832 comes 67 years after 1765. That is the stretch from ca. 1765, the year the marker prints for his coming to South Carolina, to the year he died at Stateburg.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4083-street.jpg",
          "Illustration of a street and a public building. Not a historical photograph.",
        ),
        nowArt: art(
          "m4083-today.jpg",
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a street, for the street the marker names for Thomas Sumter. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "came",
            year: "ca. 1765",
            label: "Thomas Sumter comes to South Carolina.",
            why: "The marker says he was a Virginia native who came to South Carolina ca. 1765.",
          },
          {
            id: "fell",
            year: "May 1780",
            label: "After Charlestown fell, he rallied the up country.",
            why: "The marker says that after Charlestown fell in May 1780, Sumter rallied the up country against the British with major victories at Hanging Rock, Fishdam Ford, and Blackstock's.",
          },
          {
            id: "cited",
            year: "1781",
            label: "Congress cites Sumter.",
            why: "The marker says that in 1781, Congress cited Sumter for his gallant leadership and military conduct and for the conspicuous courage, perseverance, and patriotism of his volunteer militia.",
          },
          {
            id: "died",
            year: "1832",
            label: "He dies at his home in Stateburg.",
            why: "The marker says he died in 1832 at his Sumter District home in Stateburg, where he was a large landowner and planter.",
          },
        ],
        ["cited", "came", "died", "fell"],
      ),
      takeaway([
        'This street is named for Thomas Sumter, the fighting "Gamecock," one of the great Partisan generals of the American Revolution.',
        "After Charlestown fell in May 1780, Sumter rallied the up country against the British with major victories at Hanging Rock, Fishdam Ford, and Blackstock's. In 1781, Congress cited him for his leadership and for the courage of his volunteer militia.",
        "A Virginia native who came to South Carolina ca. 1765, he died in 1832 at his Sumter District home in Stateburg. His tomb there notes him as a founder of the Republic.",
      ]),
    ],
  ),
  lesson(
    "40-86",
    "Classes in the towered building",
    "Columbia Bible College timeline",
    [
      cited("40-86", "Columbia Bible College", "front"),
      span(
        '"37 years" is 1960 minus 1923, the years the marker prints for the move to the present campus and the beginning of classes.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "college",
        kicker: "1923",
        title: "Classes begin on this site",
        partLabel: "the tower",
        art: art(
          "m4086-college.jpg",
          "Illustration of a towered building and students. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "classes",
            label: "1923",
            x: 32,
            y: 48,
            fact: "Columbia Bible School classes began in 1923 in the towered building which once stood on this site.",
          },
          {
            id: "earlier",
            label: "Earlier uses",
            x: 74,
            y: 56,
            fact: "The towered building once stood on this site originally as Columbia Female College, later as the Colonia Hotel.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1960",
        title: "Grew into a college, then moved",
        partLabel: "the yard",
        art: art(
          "m4086-yard.jpg",
          "Illustration of a college yard and a loaded truck. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "president",
            label: "Robert C. McQuilkin",
            x: 32,
            y: 52,
            fact: "Under the leadership of its first president, Robert C. McQuilkin, the school grew into Columbia Bible College.",
          },
          {
            id: "moved",
            label: "1960",
            x: 74,
            y: 44,
            fact: "In 1960, it moved to its present campus NW of Columbia. Its alumni now serve in church-related ministries around the world.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1923-1960",
        title: "Years from the first classes to the move",
        partLabel: "37 years",
        value: 37,
        unit: "years",
        meant:
          "What this meant: 1960 comes 37 years after 1923. That is the stretch from the year classes began in the towered building to the year the college moved to its present campus NW of Columbia.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4086-college.jpg",
          "Illustration of a towered building and students. Not a historical photograph.",
        ),
        nowArt: art(
          "m4086-today.jpg",
          "Illustration of a marker beside a lawn. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a towered building, for the building where the marker says classes began in 1923. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a lawn. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "female",
            year: "Originally",
            label: "The towered building stands as Columbia Female College.",
            why: "The marker says the towered building once stood on this site, originally as Columbia Female College.",
          },
          {
            id: "hotel",
            year: "Later",
            label: "The building is the Colonia Hotel.",
            why: "The marker says the same building was later the Colonia Hotel.",
          },
          {
            id: "classes",
            year: "1923",
            label: "Columbia Bible School classes begin.",
            why: "The marker says Columbia Bible School classes began in 1923 in that towered building.",
          },
          {
            id: "moved",
            year: "1960",
            label: "The college moves to its present campus NW of Columbia.",
            why: "The marker says that in 1960 the school moved to its present campus NW of Columbia.",
          },
        ],
        ["moved", "female", "classes", "hotel"],
      ),
      takeaway([
        "Columbia Bible School classes began in 1923 in the towered building which once stood on this site, originally as Columbia Female College, later as the Colonia Hotel.",
        "Under the leadership of its first president, Robert C. McQuilkin, the school grew into Columbia Bible College.",
        "In 1960, it moved to its present campus NW of Columbia. Its alumni now serve in church-related ministries around the world.",
      ]),
    ],
  ),
  lesson(
    "40-87",
    "Eleven members on a Sabbath",
    "Richland Presbyterian Church timeline",
    [cited("40-87", "Richland Presbyterian Church", "front and back")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "May 1884",
        title: "Dedicated by Dr. Girardeau",
        partLabel: "the church",
        art: art(
          "m4087-church.jpg",
          "Illustration of a wooden church and a small gathering. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "dedicated",
            label: "May 1884",
            x: 32,
            y: 46,
            fact: "This church building was dedicated in May 1884 by Dr. John L. Girardeau.",
          },
          {
            id: "organized",
            label: "November 16, 1883",
            x: 74,
            y: 58,
            fact: "The congregation of 11 members, including 2 elders and 1 deacon, was organized on the Sabbath Day, November 16, 1883 by the Charleston Presbytery.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "August 1922",
        title: "Charter members, then Eastover",
        partLabel: "the yard",
        art: art(
          "m4087-yard.jpg",
          "Illustration of a churchyard gathering. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "names",
            label: "Eleven members",
            x: 32,
            y: 54,
            fact: "The eleven charter members of this church were Thomas and Lula B. Auld, Augusta H. Bates, Joseph and Clair H. Bates, Elise M. Dwight, Peter and Isabel H. Garick, Glenn and Hattie H. Kaminer, and Belton A. Williams.",
          },
          {
            id: "moved",
            label: "1914 and 1922",
            x: 74,
            y: 48,
            fact: "In 1914, the church became a charter member of Congaree Presbytery, moving to Eastover in August 1922.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "November 16, 1883",
        title: "Members when the congregation was organized",
        partLabel: "11 members",
        value: 11,
        unit: "members",
        meant:
          "What this meant: the marker says the congregation of 11 members, including 2 elders and 1 deacon, was organized on the Sabbath Day, November 16, 1883 by the Charleston Presbytery.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4087-church.jpg",
          "Illustration of a wooden church and a small gathering. Not a historical photograph.",
        ),
        nowArt: art(
          "m4087-today.jpg",
          "Illustration of a marker on a rural road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church, for the church building the marker says was dedicated in May 1884. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a rural road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "November 16, 1883",
            label: "The congregation is organized.",
            why: "The marker says the congregation was organized on the Sabbath Day, November 16, 1883, by the Charleston Presbytery.",
          },
          {
            id: "dedicated",
            year: "May 1884",
            label: "Dr. John L. Girardeau dedicates the building.",
            why: "The marker says this church building was dedicated in May 1884 by Dr. John L. Girardeau.",
          },
          {
            id: "presbytery",
            year: "1914",
            label: "The church becomes a charter member of Congaree Presbytery.",
            why: "The marker says that in 1914 the church became a charter member of Congaree Presbytery.",
          },
          {
            id: "moved",
            year: "August 1922",
            label: "The church moves to Eastover.",
            why: "The marker says the church moved to Eastover in August 1922.",
          },
        ],
        ["moved", "organized", "presbytery", "dedicated"],
      ),
      takeaway([
        "This church building was dedicated in May 1884 by Dr. John L. Girardeau. The congregation of 11 members, including 2 elders and 1 deacon, was organized on the Sabbath Day, November 16, 1883 by the Charleston Presbytery.",
        "In 1914, the church became a charter member of Congaree Presbytery, moving to Eastover in August 1922.",
        "The eleven charter members were Thomas and Lula B. Auld, Augusta H. Bates, Joseph and Clair H. Bates, Elise M. Dwight, Peter and Isabel H. Garick, Glenn and Hattie H. Kaminer, and Belton A. Williams.",
      ]),
    ],
  ),
  lesson(
    "40-88",
    "From private homes to a parish",
    "Church of the Good Shepherd timeline",
    [
      cited("40-88", "Church of the Good Shepherd", "front"),
      span(
        '"3 years" is 1886 minus 1883, the years the marker prints for the separate parish and the beginning of services in private homes.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1883",
        title: "Services in nearby private homes",
        partLabel: "the beginning",
        art: art(
          "m4088-church.jpg",
          "Illustration of a house porch and a church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "homes",
            label: "1883",
            x: 32,
            y: 56,
            fact: "Beginning in 1883 with services held in nearby private homes by Trinity Church.",
          },
          {
            id: "barnwell",
            label: "Barnwell Street",
            x: 74,
            y: 44,
            fact: "This Episcopal church then constructed a building on Barnwell Street and was organized into a mission.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1901",
        title: "A parish, then this site",
        partLabel: "the yard",
        art: art(
          "m4088-yard.jpg",
          "Illustration of a church and a standing figure. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "parish",
            label: "1886 and 1901",
            x: 32,
            y: 50,
            fact: "It became a separate parish in 1886. The church moved to this site after the present building was completed in 1901.",
          },
          {
            id: "reader",
            label: "1893-1900",
            x: 74,
            y: 58,
            fact: "Rt. Rev. Albert S. Thomas, 9th Bishop of S. C., was lay reader of Good Shepherd, 1893-1900.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1883-1886",
        title: "Years from the first services to a separate parish",
        partLabel: "3 years",
        value: 3,
        unit: "years",
        meant:
          "What this meant: 1886 comes 3 years after 1883. That is the stretch from the year services began in nearby private homes to the year this church became a separate parish.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4088-church.jpg",
          "Illustration of a house porch and a church. Not a historical photograph.",
        ),
        nowArt: art(
          "m4088-today.jpg",
          "Illustration of a marker on a residential street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house porch and a church, for the private homes and the church building the marker describes. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a residential street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "homes",
            year: "1883",
            label: "Services begin in nearby private homes.",
            why: "The marker says that beginning in 1883, services were held in nearby private homes by Trinity Church.",
          },
          {
            id: "parish",
            year: "1886",
            label: "The church becomes a separate parish.",
            why: "The marker says the church then constructed a building on Barnwell Street, was organized into a mission, and became a separate parish in 1886.",
          },
          {
            id: "reader",
            year: "1893",
            label: "Albert S. Thomas is lay reader.",
            why: "The marker says Rt. Rev. Albert S. Thomas, 9th Bishop of S. C., was lay reader of Good Shepherd, 1893-1900.",
          },
          {
            id: "moved",
            year: "1901",
            label: "The church moves here after the present building is completed.",
            why: "The marker says the church moved to this site after the present building was completed in 1901.",
          },
        ],
        ["moved", "homes", "reader", "parish"],
      ),
      takeaway([
        "Beginning in 1883 with services held in nearby private homes by Trinity Church, this Episcopal church then constructed a building on Barnwell Street and was organized into a mission.",
        "It became a separate parish in 1886. Rt. Rev. Albert S. Thomas, 9th Bishop of S. C., was lay reader of Good Shepherd, 1893-1900.",
        "The church moved to this site after the present building was completed in 1901.",
      ]),
    ],
  ),
];
