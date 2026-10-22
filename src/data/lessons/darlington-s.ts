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

export const darlingtonLessonsS: MarkerLesson[] = [
  lesson(
    "16-77",
    "An early 20th-century passenger depot",
    "Hartsville Passenger Depot timeline",
    [
      cited("16-77", "Hartsville Passenger Depot", "front"),
      span("32 years is 1940 minus 1908 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "depot",
        kicker: "1908",
        title: "Built by the Atlantic Coast Line",
        partLabel: "the passenger depot",
        art: art(
          "m1677-depot.jpg",
          "Illustration of a wooden passenger depot beside railroad tracks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1908",
            x: 32,
            y: 52,
            fact: "This passenger depot was built by the Atlantic Coast Line (ACL) Railroad in 1908 and is an example of an early 20th-century passenger depot.",
          },
          {
            id: "service",
            label: "1940",
            x: 74,
            y: 40,
            fact: "It serviced the town until 1940 when the ACL discontinued passenger service to Hartsville.",
          },
        ],
      },
      {
        kind: "scene",
        id: "office",
        kicker: "1948",
        title: "Office of the Chairman of the ACL Board",
        partLabel: "the remodeled office",
        art: art(
          "m1677-office.jpg",
          "Illustration of an empty office inside a remodeled depot. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "remodeled",
            label: "1948",
            x: 32,
            y: 48,
            fact: "The depot was remodeled in 1948 to house the office of the Chairman of the ACL Board.",
          },
          {
            id: "wiggins",
            label: "July 1980",
            x: 74,
            y: 36,
            fact: "Former ACL Chairman A.L.M. Wiggins continued to occupy the office until his death in July 1980.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1908 to 1940",
        title: "Years from the building to the end of passenger service",
        partLabel: "32 years",
        value: 32,
        unit: "years",
        meant:
          "What this meant: 32 years is 1940 minus 1908 on the marker. The depot was built in 1908 and serviced the town until 1940, when the ACL discontinued passenger service to Hartsville.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1677-depot.jpg",
          "Illustration of a wooden passenger depot beside railroad tracks. Not a historical photograph.",
        ),
        nowArt: art(
          "m1677-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a wooden passenger depot beside the tracks, for the depot the marker says was built by the Atlantic Coast Line Railroad in 1908.",
        nowCaption: "Illustration of a blank roadside marker on quiet ground.",
      },
      order(
        [
          {
            id: "built",
            year: "1908",
            label: "The Atlantic Coast Line builds the passenger depot.",
            why: "The marker says this passenger depot was built by the Atlantic Coast Line (ACL) Railroad in 1908 and is an example of an early 20th-century passenger depot.",
          },
          {
            id: "service",
            year: "1940",
            label: "The ACL discontinues passenger service to Hartsville.",
            why: "The marker says it serviced the town until 1940 when the ACL discontinued passenger service to Hartsville.",
          },
          {
            id: "remodeled",
            year: "1948",
            label: "The depot is remodeled for the Chairman’s office.",
            why: "The marker says the depot was remodeled in 1948 to house the office of the Chairman of the ACL Board.",
          },
          {
            id: "wiggins",
            year: "1980",
            label: "A.L.M. Wiggins occupies the office until his death.",
            why: "The marker says former ACL Chairman A.L.M. Wiggins continued to occupy the office until his death in July 1980.",
          },
        ],
        ["remodeled", "built", "wiggins", "service"],
      ),
      takeaway([
        "This passenger depot was built by the Atlantic Coast Line (ACL) Railroad in 1908 and is an example of an early 20th-century passenger depot.",
        "It serviced the town until 1940 when the ACL discontinued passenger service to Hartsville.",
        "The depot was remodeled in 1948 to house the office of the Chairman of the ACL Board. Former ACL Chairman A.L.M. Wiggins continued to occupy the office until his death in July 1980.",
      ]),
    ],
  ),
  lesson(
    "16-78",
    "Founded by two mutual aid associations",
    "Harstville Colored Cemetery timeline",
    [cited("16-78", "Harstville Colored Cemetery", "front")],
    [
      {
        kind: "scene",
        id: "acre",
        kicker: "1904",
        title: "The first acre was acquired in 1904",
        partLabel: "the first acre",
        art: art(
          "m1678-acre.jpg",
          "Illustration of a small burial ground among pines. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Two associations",
            x: 32,
            y: 50,
            fact: "The cemetery was founded by two mutual aid associations representing Hartsville’s African American Community.",
          },
          {
            id: "first",
            label: "1904",
            x: 74,
            y: 42,
            fact: "The first acre was acquired in 1904 by the Hartsville Colored Cem. Association.",
          },
        ],
      },
      {
        kind: "scene",
        id: "graves",
        kicker: "1931",
        title: "A second acre was acquired in 1931",
        partLabel: "the second acre",
        art: art(
          "m1678-graves.jpg",
          "Illustration of unmarked headstones in a burial ground. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "second",
            label: "1931",
            x: 32,
            y: 46,
            fact: "A second acre was acquired in 1931 by the Mutual Cem. Association.",
          },
          {
            id: "burials",
            label: "Veterans",
            x: 74,
            y: 58,
            fact: "The burials chronicle former slaves and local residents including professionals and veterans who served from the Spanish American War to the Vietnam War.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Two associations",
        title: "Mutual aid associations that founded the cemetery",
        partLabel: "two associations",
        value: 2,
        unit: "associations",
        meant:
          "What this meant: the marker says the cemetery was founded by two mutual aid associations representing Hartsville’s African American Community.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1678-acre.jpg",
          "Illustration of a small burial ground among pines. Not a historical photograph.",
        ),
        nowArt: art(
          "m1678-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a small burial ground among pines, for the cemetery the marker says was founded by two mutual aid associations.",
        nowCaption: "Illustration of a blank roadside marker on quiet ground.",
      },
      order(
        [
          {
            id: "first",
            year: "1904",
            label: "The Hartsville Colored Cem. Association acquires the first acre.",
            why: "The marker says the first acre was acquired in 1904 by the Hartsville Colored Cem. Association.",
          },
          {
            id: "second",
            year: "1931",
            label: "The Mutual Cem. Association acquires a second acre.",
            why: "The marker says a second acre was acquired in 1931 by the Mutual Cem. Association.",
          },
        ],
        ["second", "first"],
      ),
      takeaway([
        "The cemetery was founded by two mutual aid associations representing Hartsville’s African American Community.",
        "The first acre was acquired in 1904 by the Hartsville Colored Cem. Association. A second acre was acquired in 1931 by the Mutual Cem. Association.",
        "The burials chronicle former slaves and local residents including professionals and veterans who served from the Spanish American War to the Vietnam War.",
      ]),
    ],
  ),
  lesson(
    "16-79",
    "A capital stock of $250,000",
    "Hartsville Cotton Mill timeline",
    [cited("16-79", "Hartsville Cotton Mill", "front")],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1900",
        title: "Chartered on 100 acres",
        partLabel: "the mill",
        art: art(
          "m1679-mill.jpg",
          "Illustration of a brick cotton mill beside small houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "charter",
            label: "1900",
            x: 32,
            y: 48,
            fact: "The mill was chartered in 1900 with a capital stock of $250,000 on 100 acres purchased from J.L. Coker.",
          },
          {
            id: "opened",
            label: "1903",
            x: 74,
            y: 40,
            fact: "The mill opened in 1903 with 10,000 spindles and 350 Draper looms.",
          },
        ],
      },
      {
        kind: "scene",
        id: "village",
        kicker: "Mill village",
        title: "Churches, shops, and a Y.M.C.A.",
        partLabel: "the mill village",
        art: art(
          "m1679-village.jpg",
          "Illustration of a mill village with a plain hall and small shops. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "village",
            label: "Village",
            x: 32,
            y: 46,
            fact: "A mill village with churches, shops, and a Y.M.C.A. was built by the mill.",
          },
          {
            id: "closed",
            label: "1984",
            x: 74,
            y: 58,
            fact: "In 1962 ownership transferred to Pacolet Industries, Inc. The mill closed in 1984. Currently the site is home to the Governor’s School for Science & Mathematics.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1903",
        title: "Spindles when the mill opened",
        partLabel: "10,000 spindles",
        value: 10000,
        unit: "spindles",
        meant:
          "What this meant: the marker says the mill opened in 1903 with 10,000 spindles and 350 Draper looms.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1679-mill.jpg",
          "Illustration of a brick cotton mill beside small houses. Not a historical photograph.",
        ),
        nowArt: art(
          "m1679-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a brick cotton mill, for the mill the marker says was chartered in 1900 and opened in 1903.",
        nowCaption: "Illustration of a blank roadside marker on quiet ground.",
      },
      order(
        [
          {
            id: "charter",
            year: "1900",
            label: "The mill is chartered.",
            why: "The marker says the mill was chartered in 1900 with a capital stock of $250,000 on 100 acres purchased from J.L. Coker.",
          },
          {
            id: "opened",
            year: "1903",
            label: "The mill opens with 10,000 spindles and 350 looms.",
            why: "The marker says the mill opened in 1903 with 10,000 spindles and 350 Draper looms.",
          },
          {
            id: "transferred",
            year: "1962",
            label: "Ownership transfers to Pacolet Industries, Inc.",
            why: "The marker says that in 1962 ownership transferred to Pacolet Industries, Inc.",
          },
          {
            id: "closed",
            year: "1984",
            label: "The mill closes.",
            why: "The marker says the mill closed in 1984.",
          },
        ],
        ["closed", "charter", "transferred", "opened"],
      ),
      takeaway([
        "The mill was chartered in 1900 with a capital stock of $250,000 on 100 acres purchased from J.L. Coker.",
        "The mill opened in 1903 with 10,000 spindles and 350 Draper looms.",
        "In 1962 ownership transferred to Pacolet Industries, Inc. The mill closed in 1984. Currently the site is home to the Governor’s School for Science & Mathematics.",
      ]),
    ],
  ),
  lesson(
    "16-80",
    "Began as a missionary parish",
    "St. Joseph's Catholic Church timeline",
    [cited("16-80", "St. Joseph's Catholic Church", "front")],
    [
      {
        kind: "scene",
        id: "parish",
        kicker: "1945",
        title: "A school and convent in addition to the church",
        partLabel: "the parish",
        art: art(
          "m1680-church.jpg",
          "Illustration of a small church beside a schoolhouse and convent. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1945",
            x: 32,
            y: 50,
            fact: "St. Joseph’s began as a missionary parish to serve Hartsville’s African American community. Established in 1945, the parish operated a school and convent in addition to the church.",
          },
          {
            id: "enrollees",
            label: "1953",
            x: 74,
            y: 38,
            fact: "By 1953 the school, which served African American students, included grades K-7 and had 90 enrollees.",
          },
        ],
      },
      {
        kind: "scene",
        id: "closing",
        kicker: "1967",
        title: "The school and convent closed",
        partLabel: "the school and convent",
        art: art(
          "m1680-school.jpg",
          "Illustration of a quiet schoolhouse beside a small church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "closed",
            label: "1967",
            x: 32,
            y: 48,
            fact: "In 1967 the school and convent closed.",
          },
          {
            id: "merged",
            label: "1980",
            x: 74,
            y: 42,
            fact: "In 1980 the church merged with St. Mary the Virgin Mother.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "By 1953",
        title: "Enrollees in the school",
        partLabel: "90 enrollees",
        value: 90,
        unit: "enrollees",
        meant:
          "What this meant: the marker says that by 1953 the school, which served African American students, included grades K-7 and had 90 enrollees.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1680-church.jpg",
          "Illustration of a small church beside a schoolhouse and convent. Not a historical photograph.",
        ),
        nowArt: art(
          "m1680-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a small church beside a schoolhouse, for the parish the marker says was established in 1945 and operated a school and convent in addition to the church.",
        nowCaption: "Illustration of a blank roadside marker on quiet ground.",
      },
      order(
        [
          {
            id: "established",
            year: "1945",
            label: "The parish is established.",
            why: "The marker says St. Joseph’s began as a missionary parish to serve Hartsville’s African American community and was established in 1945.",
          },
          {
            id: "enrollees",
            year: "1953",
            label: "The school has 90 enrollees in grades K-7.",
            why: "The marker says that by 1953 the school, which served African American students, included grades K-7 and had 90 enrollees.",
          },
          {
            id: "closed",
            year: "1967",
            label: "The school and convent close.",
            why: "The marker says that in 1967 the school and convent closed.",
          },
          {
            id: "merged",
            year: "1980",
            label: "The church merges with St. Mary the Virgin Mother.",
            why: "The marker says that in 1980 the church merged with St. Mary the Virgin Mother.",
          },
        ],
        ["merged", "established", "closed", "enrollees"],
      ),
      takeaway([
        "St. Joseph’s began as a missionary parish to serve Hartsville’s African American community.",
        "By 1953 the school, which served African American students, included grades K-7 and had 90 enrollees.",
        "In 1967 the school and convent closed. In 1980 the church merged with St. Mary the Virgin Mother.",
      ]),
    ],
  ),
];
