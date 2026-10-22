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

export const darlingtonLessonsT: MarkerLesson[] = [
  lesson(
    "16-81",
    "Founded when the first trustees purchased this site",
    "Mt. Rona Missionary Baptist Church timeline",
    [
      cited("16-81", "Mt. Rona Missionary Baptist Church", "front"),
      span("104 years is 2007 minus 1903 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "site",
        kicker: "c.1903",
        title: "The first trustees purchased this site",
        partLabel: "the founding",
        art: art(
          "m1681-chapel.jpg",
          "Illustration of a small wooden chapel in a pine yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "c.1903",
            x: 32,
            y: 48,
            fact: "Mt. Rona was founded c.1903, when the first trustees purchased this site.",
          },
          {
            id: "families",
            label: "Early families",
            x: 74,
            y: 36,
            fact: "Early members included the Bacote, Leek, Martin, Brock, Mills, and Moses families.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "2007",
        title: "A new sanctuary next to the original chapel",
        partLabel: "the sanctuary",
        art: art(
          "m1681-sanctuary.jpg",
          "Illustration of a newer church beside an older chapel. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "institutions",
            label: "Early institutions",
            x: 32,
            y: 52,
            fact: "Among the earliest church institutions were the Deacons Board, Senior Choir, and Missionary Society.",
          },
          {
            id: "built",
            label: "2007",
            x: 74,
            y: 40,
            fact: "In 2007, a new sanctuary was built next to the original chapel.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "c.1903 to 2007",
        title: "Years from the founding to the new sanctuary",
        partLabel: "104 years",
        value: 104,
        unit: "years",
        meant:
          "What this meant: 2007 comes 104 years after 1903. The marker says Mt. Rona was founded c.1903, when the first trustees purchased this site, and that in 2007 a new sanctuary was built next to the original chapel.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1681-chapel.jpg",
          "Illustration of a small wooden chapel in a pine yard. Not a historical photograph.",
        ),
        nowArt: art(
          "m1681-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a small wooden chapel, for the site the marker says the first trustees purchased when Mt. Rona was founded c.1903.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "founded",
            year: "c.1903",
            label: "The first trustees purchase this site.",
            why: "The marker says Mt. Rona was founded c.1903, when the first trustees purchased this site.",
          },
          {
            id: "sanctuary",
            year: "2007",
            label: "A new sanctuary is built next to the original chapel.",
            why: "The marker says that in 2007, a new sanctuary was built next to the original chapel.",
          },
        ],
        ["sanctuary", "founded"],
      ),
      takeaway([
        "Mt. Rona was founded c.1903, when the first trustees purchased this site.",
        "Among the earliest church institutions were the Deacons Board, Senior Choir, and Missionary Society.",
        "In 2007, a new sanctuary was built next to the original chapel.",
      ]),
    ],
  ),
  lesson(
    "16-82",
    "Organized as Jerusalem Church",
    "Bethel Church timeline",
    [
      cited("16-82", "Bethel Church", "front"),
      span("55 years is 1911 minus 1856 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "jerusalem",
        kicker: "c.1856",
        title: "Organized as Jerusalem Church",
        partLabel: "Jerusalem Church",
        art: art(
          "m1682-jerusalem.jpg",
          "Illustration of a plain wooden meeting house in a clearing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "c.1856",
            x: 32,
            y: 48,
            fact: "Bethel Methodist Church organized c.1856 as Jerusalem Church on land said to have been donated by Hardy M. Parrott (1816-1876).",
          },
          {
            id: "leaders",
            label: "Early leaders",
            x: 74,
            y: 38,
            fact: "Early leaders included the Parrott, House, and DeWitt families.",
          },
        ],
      },
      {
        kind: "scene",
        id: "return",
        kicker: "1911",
        title: "Dedicated the new building as Bethel",
        partLabel: "the return",
        art: art(
          "m1682-return.jpg",
          "Illustration of a wooden church at a country crossroads. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "merged",
            label: "1885",
            x: 32,
            y: 50,
            fact: "In 1885, Bethel merged with Snow Hill Church and moved west of Flinn’s Crossorads under the name New Bethel.",
          },
          {
            id: "returned",
            label: "1911",
            x: 74,
            y: 36,
            fact: "The church returned to this site in 1911 and dedicated the new building as Bethel.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "c.1856 to 1911",
        title: "Years from Jerusalem Church to the return",
        partLabel: "55 years",
        value: 55,
        unit: "years",
        meant:
          "What this meant: 1911 comes 55 years after 1856. The marker says Bethel Methodist Church organized c.1856 as Jerusalem Church and that the church returned to this site in 1911.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1682-jerusalem.jpg",
          "Illustration of a plain wooden meeting house in a clearing. Not a historical photograph.",
        ),
        nowArt: art(
          "m1682-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a plain wooden meeting house, for the church the marker says organized c.1856 as Jerusalem Church.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "organized",
            year: "c.1856",
            label: "The church organizes as Jerusalem Church.",
            why: "The marker says Bethel Methodist Church organized c.1856 as Jerusalem Church on land said to have been donated by Hardy M. Parrott (1816-1876).",
          },
          {
            id: "merged",
            year: "1885",
            label: "Bethel merges with Snow Hill and moves west as New Bethel.",
            why: "The marker says that in 1885, Bethel merged with Snow Hill Church and moved west of Flinn’s Crossorads under the name New Bethel.",
          },
          {
            id: "returned",
            year: "1911",
            label: "The church returns and is dedicated as Bethel.",
            why: "The marker says the church returned to this site in 1911 and dedicated the new building as Bethel.",
          },
        ],
        ["returned", "organized", "merged"],
      ),
      takeaway([
        "Bethel Methodist Church organized c.1856 as Jerusalem Church on land said to have been donated by Hardy M. Parrott (1816-1876).",
        "In 1885, Bethel merged with Snow Hill Church and moved west of Flinn’s Crossorads under the name New Bethel.",
        "The church returned to this site in 1911 and dedicated the new building as Bethel.",
      ]),
    ],
  ),
  lesson(
    "16-83",
    "Hartsville’s leading social center",
    "Arcade Hotel timeline",
    [cited("16-83", "Arcade Hotel", "front and back")],
    [
      {
        kind: "scene",
        id: "hotel",
        kicker: "1913",
        title: "A telephone in each of its 43 rooms",
        partLabel: "the hotel",
        art: art(
          "m1683-hotel.jpg",
          "Illustration of a three-story brick hotel with a blank facade. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1913",
            x: 32,
            y: 46,
            fact: "This building first served as the Arcade Hotel, built in 1913 for $51,000 for J. J. Lawton & Associates. The hotel was designed by Ernest V. Richards and built by contractor J. M. Lawton.",
          },
          {
            id: "rooms",
            label: "43 rooms",
            x: 74,
            y: 34,
            fact: "It offered a European plan with cold and hot water and a telephone in each of its 43 rooms, some of them with private baths and parlors. Other amenities included a barber shop, fine dining, a sample room, and retail space. The hotel’s first manager was William H. McFall.",
          },
        ],
      },
      {
        kind: "scene",
        id: "later",
        kicker: "1976",
        title: "Three major improvements",
        partLabel: "the later years",
        art: art(
          "m1683-later.jpg",
          "Illustration of the same brick hotel used as quiet offices. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "closed",
            label: "1976",
            x: 32,
            y: 50,
            fact: "For a time, the Arcade Hotel was Hartsville’s leading social center. It underwent three major improvements between 1922 and 1988. It closed in 1976 but briefly reopened in 1983.",
          },
          {
            id: "bought",
            label: "1988",
            x: 74,
            y: 38,
            fact: "SPC Cooperative Credit Untion bought the building in 1988 and undertook a $1.9 million renovation project, restoring the first floor largely to its 1913 appearance and converting the two upper floors into office space. Listed in the National Register of Historic Places on December 19, 1986.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "European plan",
        title: "Rooms with a telephone",
        partLabel: "43 rooms",
        value: 43,
        unit: "rooms",
        meant:
          "What this meant: the marker says the hotel offered a European plan with cold and hot water and a telephone in each of its 43 rooms, some of them with private baths and parlors.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1683-hotel.jpg",
          "Illustration of a three-story brick hotel with a blank facade. Not a historical photograph.",
        ),
        nowArt: art(
          "m1683-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a three-story brick hotel, for the building the marker says first served as the Arcade Hotel, built in 1913.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "built",
            year: "1913",
            label: "The Arcade Hotel is built.",
            why: "The marker says this building first served as the Arcade Hotel, built in 1913 for $51,000 for J. J. Lawton & Associates.",
          },
          {
            id: "closed",
            year: "1976",
            label: "The hotel closes.",
            why: "The marker says it closed in 1976 but briefly reopened in 1983.",
          },
          {
            id: "reopened",
            year: "1983",
            label: "The hotel briefly reopens.",
            why: "The marker says it closed in 1976 but briefly reopened in 1983.",
          },
          {
            id: "bought",
            year: "1988",
            label: "SPC Cooperative Credit Untion buys the building.",
            why: "The marker says SPC Cooperative Credit Untion bought the building in 1988 and undertook a $1.9 million renovation project, restoring the first floor largely to its 1913 appearance and converting the two upper floors into office space.",
          },
        ],
        ["reopened", "built", "bought", "closed"],
      ),
      takeaway([
        "This building first served as the Arcade Hotel, built in 1913 for $51,000 for J. J. Lawton & Associates.",
        "It offered a European plan with cold and hot water and a telephone in each of its 43 rooms, some of them with private baths and parlors.",
        "SPC Cooperative Credit Untion bought the building in 1988 and undertook a $1.9 million renovation project, restoring the first floor largely to its 1913 appearance and converting the two upper floors into office space.",
      ]),
    ],
  ),
  lesson(
    "16-84",
    "A 16-room hotel for African Americans",
    "Hough's Hotel timeline",
    [cited("16-84", "Hough's Hotel", "front and back")],
    [
      {
        kind: "scene",
        id: "lodging",
        kicker: "1946",
        title: "Opened at this site in 1946",
        partLabel: "the hotel",
        art: art(
          "m1684-lodging.jpg",
          "Illustration of a two-story hotel with white siding and striped awnings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1946",
            x: 32,
            y: 46,
            fact: "Hough’s Hotel, a two-story, 16-room hotel for African Americans, opened at this site in 1946.",
          },
          {
            id: "travelers",
            label: "Travelers",
            x: 74,
            y: 34,
            fact: "Established at a time when Black lodgers often struggled to find safe and convenient accommodations, the hotel was a valuable resource for travelers passing through Hartsville, many along U.S. Highway 15. It was opened and originally operated by Frank Hough (1888-1954), a former farm laborer who grew up west of Hartsville in a rural section of neighboring Lee County.",
          },
        ],
      },
      {
        kind: "scene",
        id: "store",
        kicker: "Grocery and restaurant",
        title: "A grocery store and restaurant",
        partLabel: "the store",
        art: art(
          "m1684-store.jpg",
          "Illustration of a small grocery and restaurant beside a two-story hotel. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grocery",
            label: "Grocery",
            x: 32,
            y: 52,
            fact: "In addition to lodging, Hough’s Hotel also included a grocery store and restaurant patronized by guests and local residents alike.",
          },
          {
            id: "closed",
            label: "c.1989",
            x: 74,
            y: 38,
            fact: "Upon Frank Hough’s death, his wife Tera, son Theodore (“Doc”), and immediate family members ran the hotel. A well-known local institution, Hough’s Hotel stayed in business several deades for before closing c.1989. The hotel building, which featured white siding and striped awnings, remains but has been significantly altered.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1946",
        title: "Rooms in the hotel",
        partLabel: "16 rooms",
        value: 16,
        unit: "rooms",
        meant:
          "What this meant: the marker says Hough’s Hotel was a two-story, 16-room hotel for African Americans, opened at this site in 1946.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1684-lodging.jpg",
          "Illustration of a two-story hotel with white siding and striped awnings. Not a historical photograph.",
        ),
        nowArt: art(
          "m1684-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a two-story hotel with white siding and striped awnings, for the building the marker says opened at this site in 1946.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "hough",
            year: "1888",
            label: "The years printed for Frank Hough begin.",
            why: "The marker prints Frank Hough (1888-1954), a former farm laborer who grew up west of Hartsville in a rural section of neighboring Lee County.",
          },
          {
            id: "opened",
            year: "1946",
            label: "Hough’s Hotel opens at this site.",
            why: "The marker says Hough’s Hotel, a two-story, 16-room hotel for African Americans, opened at this site in 1946.",
          },
          {
            id: "family",
            year: "1954",
            label: "The years printed for Frank Hough end.",
            why: "The marker prints Frank Hough (1888-1954) and says that upon Frank Hough’s death, his wife Tera, son Theodore (“Doc”), and immediate family members ran the hotel.",
          },
          {
            id: "closed",
            year: "c.1989",
            label: "The hotel closes.",
            why: "The marker says Hough’s Hotel stayed in business several deades for before closing c.1989.",
          },
        ],
        ["family", "hough", "closed", "opened"],
      ),
      takeaway([
        "Hough’s Hotel, a two-story, 16-room hotel for African Americans, opened at this site in 1946.",
        "In addition to lodging, Hough’s Hotel also included a grocery store and restaurant patronized by guests and local residents alike.",
        "A well-known local institution, Hough’s Hotel stayed in business several deades for before closing c.1989.",
      ]),
    ],
  ),
];
