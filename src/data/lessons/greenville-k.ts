import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Greenville sites. Facts are from that marker only.
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

export const greenvilleLessonsK: MarkerLesson[] = [
  lesson(
    "23-49",
    "Where the stage road met a Cherokee trail",
    "Old Stage Road timeline",
    [
      cited("23-49", "Old Stage Road", "front and back"),
      span(
        '"62 years" is 1959 minus 1897, the years the marker prints for the Atlantic Coast Line RR taking control of the C&WC and operating it.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "stop",
        kicker: "ca. 1820-ca. 1870",
        title: "Goldsmith’s stagecoach stop",
        partLabel: "the stage stop",
        art: art(
          "m2349-stop.jpg",
          "Illustration of a stagecoach beside a roadside house at a dirt crossroads. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "goldsmith",
            label: "1788-1868",
            x: 32,
            y: 48,
            fact: "The town of Simpsonville grew up around a stagecoach stop nearby operated by Thomas Goldsmith (1788-1868). Goldsmith’s house, on the Old Stage Road from Laurens to Greenville, was near a crossroads where the Old Stage Road met an old Cherokee trail, later known as the Georgia Road.",
          },
          {
            id: "route",
            label: "ca. 1820-ca. 1870",
            x: 74,
            y: 36,
            fact: "The road was the main route through this area ca. 1820-ca. 1870.",
          },
        ],
      },
      {
        kind: "scene",
        id: "railroad",
        kicker: "1885-86",
        title: "Tracks beside the new Main Street",
        partLabel: "the railroad",
        art: art(
          "m2349-rail.jpg",
          "Illustration of railroad tracks beside a small-town street and a plain depot. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "arrived",
            label: "1885-86",
            x: 32,
            y: 52,
            fact: "The railroad arrived in 1885-86 when the Greenville & Laurens Railroad completed its line through the town. Main Street was laid out parallel to the tracks, and the railroad ushered in a period of rapid growth and prosperity.",
          },
          {
            id: "coast",
            label: "1897-1959",
            x: 74,
            y: 40,
            fact: "The G&L RR and its successor the Port Royal & Western Carolina Railway were absorbed by the Charleston & Western Carolina Railway in 1896. The Atlantic Coast Line RR took control of the C&WC in 1897 and operated it until 1959. The first passenger and freight depot here was demolished in the 1970s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1897-1959",
        title: "Years the Coast Line operated it",
        partLabel: "62 years",
        value: 62,
        unit: "years",
        meant:
          "What this meant: 1959 comes 62 years after 1897. That is the stretch from the year the marker says the Atlantic Coast Line RR took control of the C&WC to the year it says that railroad operated it until.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2349-stop.jpg",
          "Illustration of a stagecoach beside a roadside house at a dirt crossroads. Not a historical photograph.",
        ),
        nowArt: art(
          "m2349-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a stagecoach and a roadside house, for the stagecoach stop the marker says Thomas Goldsmith operated. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "main",
            year: "ca. 1820",
            label: "The Old Stage Road is the main route through this area.",
            why: "The marker says the road was the main route through this area ca. 1820-ca. 1870.",
          },
          {
            id: "line",
            year: "1885-86",
            label: "The Greenville & Laurens Railroad completes its line.",
            why: "The marker says the railroad arrived in 1885-86 when the Greenville & Laurens Railroad completed its line through the town.",
          },
          {
            id: "control",
            year: "1897",
            label: "The Atlantic Coast Line RR takes control of the C&WC.",
            why: "The marker says the Atlantic Coast Line RR took control of the C&WC in 1897 and operated it until 1959.",
          },
          {
            id: "until",
            year: "1959",
            label: "The Atlantic Coast Line RR operates the C&WC until this year.",
            why: "The marker says the Atlantic Coast Line RR took control of the C&WC in 1897 and operated it until 1959.",
          },
        ],
        ["until", "main", "control", "line"],
      ),
      takeaway([
        "The town of Simpsonville grew up around a stagecoach stop nearby operated by Thomas Goldsmith (1788-1868).",
        "The road was the main route through this area ca. 1820-ca. 1870.",
        "The Atlantic Coast Line RR took control of the C&WC in 1897 and operated it until 1959.",
      ]),
    ],
  ),
  lesson(
    "23-50",
    "Opened with 8,000 spindles",
    "Simpsonville Cotton Mill timeline",
    [cited("23-50", "Simpsonville Cotton Mill", "front and back")],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1908",
        title: "Woodside’s cotton mill",
        partLabel: "the mill",
        art: art(
          "m2350-mill.jpg",
          "Illustration of a long brick textile mill. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "asked",
            label: "1908",
            x: 32,
            y: 46,
            fact: "This mill, opened in 1908, was built after several leading men of Simpsonville asked Edward F. Woodside of the Pelzer Manufacturing Co. to help them establish a textile mill.",
          },
          {
            id: "spindles",
            label: "8,000 spindles",
            x: 74,
            y: 38,
            fact: "The Simpsonville Cotton Mill, with Woodside as president and his brother John T. as secretary, opened with 8,000 spindles and 200 looms, making several kinds of cotton cloth. By 1911 it boasted 25,000 spindles and 600 looms.",
          },
        ],
      },
      {
        kind: "scene",
        id: "village",
        kicker: "1911",
        title: "Four streets of mill houses",
        partLabel: "the mill village",
        art: art(
          "m2350-village.jpg",
          "Illustration of mill houses, a store, and a baseball field. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "merged",
            label: "1911",
            x: 32,
            y: 50,
            fact: "In 1911 this mill was merged with Fountain Inn Cotton Mill and Woodside Cotton Mill in Greenville to create Woodside Cotton Mills. This branch was Simpsonville’s largest employer until after World War II, with as many as 650 employees in the 1950s and 1960s.",
          },
          {
            id: "gym",
            label: "1947",
            x: 74,
            y: 42,
            fact: "The mill village, with four streets of mill houses, included a company store, recreation building, and baseball field. The Woodside Gym, built in 1947, is now part of the Simpsonville Senior Center.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1908",
        title: "Spindles when the mill opened",
        partLabel: "8,000 spindles",
        value: 8000,
        unit: "spindles",
        meant:
          "What this meant: the marker says the Simpsonville Cotton Mill opened with 8,000 spindles and 200 looms, making several kinds of cotton cloth.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2350-mill.jpg",
          "Illustration of a long brick textile mill. Not a historical photograph.",
        ),
        nowArt: art(
          "m2350-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a long brick mill, for the Simpsonville Cotton Mill the marker says opened in 1908. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "1908",
            label: "The Simpsonville Cotton Mill opens.",
            why: "The marker says this mill opened in 1908, with Woodside as president and his brother John T. as secretary, with 8,000 spindles and 200 looms.",
          },
          {
            id: "merged",
            year: "1911",
            label: "The mill merges into Woodside Cotton Mills.",
            why: "The marker says in 1911 this mill was merged with Fountain Inn Cotton Mill and Woodside Cotton Mill in Greenville to create Woodside Cotton Mills.",
          },
          {
            id: "gym",
            year: "1947",
            label: "The Woodside Gym is built.",
            why: "The marker says the Woodside Gym, built in 1947, is now part of the Simpsonville Senior Center.",
          },
          {
            id: "employees",
            year: "1950s and 1960s",
            label: "The branch has as many as 650 employees.",
            why: "The marker says this branch was Simpsonville’s largest employer until after World War II, with as many as 650 employees in the 1950s and 1960s.",
          },
        ],
        ["gym", "opened", "employees", "merged"],
      ),
      takeaway([
        "This mill, opened in 1908, was built after several leading men of Simpsonville asked Edward F. Woodside of the Pelzer Manufacturing Co. to help them establish a textile mill.",
        "The Simpsonville Cotton Mill, with Woodside as president and his brother John T. as secretary, opened with 8,000 spindles and 200 looms, making several kinds of cotton cloth.",
        "The Woodside Gym, built in 1947, is now part of the Simpsonville Senior Center.",
      ]),
    ],
  ),
  lesson(
    "23-51",
    "Opened in a former sanitorium",
    "City Hospital timeline",
    [cited("23-51", "City Hospital", "front and back")],
    [
      {
        kind: "scene",
        id: "hospital",
        kicker: "January 1912",
        title: "A hospital in a former sanitorium",
        partLabel: "the hospital",
        art: art(
          "m2351-hospital.jpg",
          "Illustration of a large institutional building on a city block. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "block",
            label: "1912",
            x: 32,
            y: 44,
            fact: "City Hospital, founded here in 1912 and later renamed Greenville General Hospital, occupied most of the block bounded by Memminger, Mallard, and Dunbar Sts. and Arlington Ave. by the early 1950s.",
          },
          {
            id: "acquired",
            label: "1911",
            x: 74,
            y: 58,
            fact: "The Ladies Hospital Board and the Greenville Hospital Association, founded in 1896, acquired a building on this site, previously a sanitorium, in 1911. It opened as City Hospital in January 1912.",
          },
        ],
      },
      {
        kind: "scene",
        id: "wings",
        kicker: "1921-1953",
        title: "Wings for more than 600 beds",
        partLabel: "the expansions",
        art: art(
          "m2351-wings.jpg",
          "Illustration of a large hospital of connected wings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sold",
            label: "1917",
            x: 32,
            y: 48,
            fact: "The hospital was sold to the City of Greenville in 1917. Expansions from 1921 to 1953 increased capacity to more than 600 beds.",
          },
          {
            id: "moved",
            label: "1983",
            x: 74,
            y: 36,
            fact: "Renamed Greenville General Hospital in 1935, it became a city-county hospital in 1948 and flagship of the Greenville Hospital System by the 1960s. Most services moved to the new Greenville Memorial Medical Campus on Grove Road by 1983, and the historic buildings here were demolished in 1998.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1921-1953",
        title: "Beds after the expansions",
        partLabel: "600 beds",
        value: 600,
        unit: "beds",
        meant:
          "What this meant: the marker says expansions from 1921 to 1953 increased capacity to more than 600 beds.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2351-hospital.jpg",
          "Illustration of a large institutional building on a city block. Not a historical photograph.",
        ),
        nowArt: art(
          "m2351-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an institutional building, for City Hospital the marker says opened in January 1912. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "association",
            year: "1896",
            label: "The Greenville Hospital Association is founded.",
            why: "The marker says the Ladies Hospital Board and the Greenville Hospital Association, founded in 1896, acquired a building on this site, previously a sanitorium, in 1911.",
          },
          {
            id: "opened",
            year: "January 1912",
            label: "The building opens as City Hospital.",
            why: "The marker says it opened as City Hospital in January 1912. City Hospital was founded here in 1912.",
          },
          {
            id: "renamed",
            year: "1935",
            label: "The hospital is renamed Greenville General Hospital.",
            why: "The marker says it was renamed Greenville General Hospital in 1935, became a city-county hospital in 1948, and was flagship of the Greenville Hospital System by the 1960s.",
          },
          {
            id: "demolished",
            year: "1998",
            label: "The historic buildings here are demolished.",
            why: "The marker says most services moved to the new Greenville Memorial Medical Campus on Grove Road by 1983, and the historic buildings here were demolished in 1998.",
          },
        ],
        ["renamed", "association", "demolished", "opened"],
      ),
      takeaway([
        "The Ladies Hospital Board and the Greenville Hospital Association, founded in 1896, acquired a building on this site, previously a sanitorium, in 1911.",
        "It opened as City Hospital in January 1912.",
        "Most services moved to the new Greenville Memorial Medical Campus on Grove Road by 1983, and the historic buildings here were demolished in 1998.",
      ]),
    ],
  ),
  lesson(
    "23-52",
    "Called the Million Dollar Mill",
    "Dunean Mill timeline",
    [cited("23-52", "Dunean Mill", "front and back")],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1912",
        title: "An all-electric cotton mill",
        partLabel: "the mill",
        art: art(
          "m2352-mill.jpg",
          "Illustration of a large brick textile mill with dark mortar lines. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "smyth",
            label: "1847-1942",
            x: 32,
            y: 42,
            fact: "Dunean Mill, chartered in 1911 and opened in 1912, was one of several textile mills owned by Capt. Ellison Adger Smyth (1847-1942), a national leader in the textile industry for more than 60 years. Dunean was named for the Irish village where Smyth’s Adger ancestors lived.",
          },
          {
            id: "electric",
            label: "50,000 spindles",
            x: 74,
            y: 56,
            fact: "The mill, called “the Million Dollar Mill” while it was being built by J.E. Sirrine & Company, was an all-electric mill with 50,000 spindles and 1,200 looms when it opened, making fine cotton goods. The light gray brick and black mortar of this mill gives it a distinctive look unlike almost any other textile mill of its era.",
          },
        ],
      },
      {
        kind: "scene",
        id: "village",
        kicker: "The mill village",
        title: "A village with 585 houses",
        partLabel: "the mill village",
        art: art(
          "m2352-village.jpg",
          "Illustration of many small mill houses, a school, a church, and a baseball field. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "houses",
            label: "585 houses",
            x: 32,
            y: 50,
            fact: "The Dunean Mill village included 585 houses, an elementary school, three churches, a company store, a community building, a gymnasium, and a baseball field.",
          },
          {
            id: "rayon",
            label: "1935",
            x: 74,
            y: 34,
            fact: "Its Y.W.C.A. was the first in any mill village in S.C. In 1935 the mill switched to rayon and other synthetic fibers. It was for many years a division of J.P. Stevens & Company.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The mill village",
        title: "Houses in the mill village",
        partLabel: "585 houses",
        value: 585,
        unit: "houses",
        meant:
          "What this meant: the marker says the Dunean Mill village included 585 houses, an elementary school, three churches, a company store, a community building, a gymnasium, and a baseball field.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2352-mill.jpg",
          "Illustration of a large brick textile mill with dark mortar lines. Not a historical photograph.",
        ),
        nowArt: art(
          "m2352-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a large brick mill, for Dunean Mill the marker says opened in 1912. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1847",
            label: "Capt. Ellison Adger Smyth is born.",
            why: "The marker prints Capt. Ellison Adger Smyth (1847-1942), a national leader in the textile industry for more than 60 years, and says Dunean Mill was one of several textile mills owned by him.",
          },
          {
            id: "chartered",
            year: "1911",
            label: "Dunean Mill is chartered.",
            why: "The marker says Dunean Mill was chartered in 1911 and opened in 1912.",
          },
          {
            id: "opened",
            year: "1912",
            label: "Dunean Mill opens as an all-electric mill.",
            why: "The marker says the mill was an all-electric mill with 50,000 spindles and 1,200 looms when it opened, making fine cotton goods.",
          },
          {
            id: "rayon",
            year: "1935",
            label: "The mill switches to rayon and other synthetic fibers.",
            why: "The marker says in 1935 the mill switched to rayon and other synthetic fibers. It was for many years a division of J.P. Stevens & Company.",
          },
        ],
        ["opened", "born", "rayon", "chartered"],
      ),
      takeaway([
        "Dunean Mill, chartered in 1911 and opened in 1912, was one of several textile mills owned by Capt. Ellison Adger Smyth (1847-1942), a national leader in the textile industry for more than 60 years.",
        "The mill, called “the Million Dollar Mill” while it was being built by J.E. Sirrine & Company, was an all-electric mill with 50,000 spindles and 1,200 looms when it opened, making fine cotton goods.",
        "The Dunean Mill village included 585 houses, an elementary school, three churches, a company store, a community building, a gymnasium, and a baseball field.",
      ]),
    ],
  ),
];
