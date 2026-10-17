import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Charleston sites. Facts are from that marker only.
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

export const charlestonLessonsE: MarkerLesson[] = [
  lesson(
    "10-22",
    "Services for German inhabitants",
    "St. John's Church timeline",
    [
      cited("10-22", "St. John's Church", "front and back"),
      span(
        '"59 years" is 1874 minus 1815, the years the marker prints for Dr. John Bachman serving as minister of St. John\'s.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1734",
        title: "Services, then two houses of worship",
        partLabel: "the church",
        art: art(
          "m1022-church.jpg",
          "Illustration of a church and an earlier house of worship. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "services",
            label: "1734 and 1742",
            x: 32,
            y: 54,
            fact: "This church grew from services held for German inhabitants in Charleston by Rev. Johann Martin Boltzius in 1734 and Rev. Henry Melchior Muhlenberg in 1742.",
          },
          {
            id: "buildings",
            label: "1759 and 1818",
            x: 74,
            y: 42,
            fact: "The cornerstone of the first house of worship was laid in 1759; the second and present church building was dedicated in 1818.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1815-1874",
        title: "Bachman, minister and author",
        partLabel: "the churchyard",
        art: art(
          "m1022-yard.jpg",
          "Illustration of a churchyard beside a church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "ministry",
            label: "1815-1874",
            x: 32,
            y: 48,
            fact: "Dr. John Bachman, noted clergyman, naturalist, and author, served as minister of St. John's 1815-1874. During this time, he helped his ornithologist and artist friend John James Audubon in producing Birds of America and the work entitled Viviparous Quadrupeds of North America. He died in 1874 and is buried in the church.",
          },
          {
            id: "institutions",
            label: "1824, 1830, 1856",
            x: 74,
            y: 58,
            fact: "Bachman was influential in establishing the SC Lutheran Synod (1824), the Lutheran Theological Southern Seminary (1830), and Newberry College (1856).",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1815-1874",
        title: "Years Bachman served as minister",
        partLabel: "59 years",
        value: 59,
        unit: "years",
        meant:
          "What this meant: 1874 comes 59 years after 1815. Those are the years the marker prints for Dr. John Bachman serving as minister of St. John's.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1022-church.jpg",
          "Illustration of a church and an earlier house of worship. Not a historical photograph.",
        ),
        nowArt: art(
          "m1022-today.jpg",
          "Illustration of a marker beside a church. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a church, for the second and present church building the marker says was dedicated in 1818. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a church. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "boltzius",
            year: "1734",
            label: "Rev. Johann Martin Boltzius holds services.",
            why: "The marker says the church grew from services held for German inhabitants in Charleston by Rev. Johann Martin Boltzius in 1734 and Rev. Henry Melchior Muhlenberg in 1742.",
          },
          {
            id: "cornerstone",
            year: "1759",
            label: "The cornerstone of the first house of worship is laid.",
            why: "The marker says the cornerstone of the first house of worship was laid in 1759.",
          },
          {
            id: "dedicated",
            year: "1818",
            label: "The second and present church building is dedicated.",
            why: "The marker says the second and present church building was dedicated in 1818.",
          },
          {
            id: "died",
            year: "1874",
            label: "Bachman dies and is buried in the church.",
            why: "The marker says he died in 1874 and is buried in the church. It also dates his service as minister of St. John's to 1815-1874.",
          },
        ],
        ["dedicated", "died", "boltzius", "cornerstone"],
      ),
      takeaway([
        "This church grew from services held for German inhabitants in Charleston by Rev. Johann Martin Boltzius in 1734 and Rev. Henry Melchior Muhlenberg in 1742.",
        "The cornerstone of the first house of worship was laid in 1759; the second and present church building was dedicated in 1818.",
        "Dr. John Bachman, noted clergyman, naturalist, and author, served as minister of St. John's 1815-1874. During this time, he helped his ornithologist and artist friend John James Audubon in producing Birds of America and the work entitled Viviparous Quadrupeds of North America. Bachman was influential in establishing the SC Lutheran Synod (1824), the Lutheran Theological Southern Seminary (1830), and Newberry College (1856). He died in 1874 and is buried in the church.",
      ]),
    ],
  ),
  lesson(
    "10-24",
    "Relief from summer fevers",
    "McClellanville timeline",
    [
      cited("10-24", "McClellanville", "front and back"),
      span(
        '"120 years" is 1947 minus 1827, the years the marker prints for two lighthouses in the Wildlife Refuge serving as beacons to coastal shipping.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "town",
        kicker: "Late 1850s",
        title: "Lots sold beside Jeremy Creek",
        partLabel: "the village",
        art: art(
          "m1024-town.jpg",
          "Illustration of a village beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lots",
            label: "Late 1850s",
            x: 32,
            y: 52,
            fact: "McClellanville began in the late 1850s and early 1860s when local plantation owners A. J. McClellan and R. T. Morrison sold lots in the vicinity of Jeremy Creek to planters of the Santee Delta, who sought relief from summer fevers.",
          },
          {
            id: "store",
            label: "After the Civil War",
            x: 74,
            y: 44,
            fact: "The first store opened soon after the Civil War, and the village became the social and economic center for a wide area that produced timber, rice, cotton, naval stores, and seafoods.",
          },
        ],
      },
      {
        kind: "scene",
        id: "harbor",
        kicker: "1926",
        title: "A shrimp fleet and two beacons",
        partLabel: "the harbor",
        art: art(
          "m1024-harbor.jpg",
          "Illustration of shrimp boats and distant lighthouses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "incorporated",
            label: "1926",
            x: 32,
            y: 48,
            fact: "Incorporated in 1926 and encircled by the Francis Marion National Forest and Cape Romain National Wildlife Refuge, McClellanville is best known for its shrimp fleet and seafood industries.",
          },
          {
            id: "lights",
            label: "1827 to 1947",
            x: 74,
            y: 40,
            fact: "Except for a period during the Civil War, two lighthouses in the Wildlife Refuge served as beacons to coastal shipping from 1827 to 1947.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1827-1947",
        title: "Years printed for the two lighthouses",
        partLabel: "120 years",
        value: 120,
        unit: "years",
        meant:
          "What this meant: 1947 comes 120 years after 1827. Those are the years the marker prints for two lighthouses in the Wildlife Refuge serving as beacons to coastal shipping, except for a period during the Civil War.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1024-town.jpg",
          "Illustration of a village beside a creek. Not a historical photograph.",
        ),
        nowArt: art(
          "m1024-today.jpg",
          "Illustration of a marker by a coastal road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a village, for the lots the marker says were sold in the vicinity of Jeremy Creek in the late 1850s and early 1860s. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a coastal road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "lights",
            year: "1827",
            label: "Two lighthouses begin as beacons to coastal shipping.",
            why: "The marker says that, except for a period during the Civil War, two lighthouses in the Wildlife Refuge served as beacons to coastal shipping from 1827 to 1947.",
          },
          {
            id: "lots",
            year: "Late 1850s",
            label: "McClellan and Morrison sell lots near Jeremy Creek.",
            why: "The marker says McClellanville began in the late 1850s and early 1860s when A. J. McClellan and R. T. Morrison sold lots in the vicinity of Jeremy Creek to planters of the Santee Delta, who sought relief from summer fevers.",
          },
          {
            id: "store",
            year: "Soon after the Civil War",
            label: "The first store opens.",
            why: "The marker says the first store opened soon after the Civil War, and the village became the social and economic center for a wide area that produced timber, rice, cotton, naval stores, and seafoods.",
          },
          {
            id: "incorporated",
            year: "1926",
            label: "McClellanville is incorporated.",
            why: "The marker says it was incorporated in 1926 and is encircled by the Francis Marion National Forest and Cape Romain National Wildlife Refuge, and is best known for its shrimp fleet and seafood industries.",
          },
        ],
        ["store", "lights", "incorporated", "lots"],
      ),
      takeaway([
        "McClellanville began in the late 1850s and early 1860s when local plantation owners A. J. McClellan and R. T. Morrison sold lots in the vicinity of Jeremy Creek to planters of the Santee Delta, who sought relief from summer fevers.",
        "The first store opened soon after the Civil War, and the village became the social and economic center for a wide area that produced timber, rice, cotton, naval stores, and seafoods.",
        "Incorporated in 1926 and encircled by the Francis Marion National Forest and Cape Romain National Wildlife Refuge, McClellanville is best known for its shrimp fleet and seafood industries. Except for a period during the Civil War, two lighthouses in the Wildlife Refuge served as beacons to coastal shipping from 1827 to 1947.",
      ]),
    ],
  ),
  lesson(
    "10-25",
    "A mission church in 1870",
    "Mount Pleasant Presbyterian timeline",
    [
      cited("10-25", "Mount Pleasant Presbyterian Church", "front"),
      span(
        '"155 years" is 1854 minus 1699, the years the marker prints for the erection of this church and the founding of Old Wappetaw Church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "About 1699",
        title: "Old Wappetaw, then this church",
        partLabel: "the church",
        art: art(
          "m1025-church.jpg",
          "Illustration of a church under oaks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wappetaw",
            label: "About 1699",
            x: 32,
            y: 50,
            fact: "Originally a Congregational Church affiliated with Old Wappetaw Church, founded about 1699.",
          },
          {
            id: "erected",
            label: "About 1854",
            x: 74,
            y: 42,
            fact: "Erected about 1854.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1870",
        title: "Hospital, school, then a new name",
        partLabel: "the churchyard",
        art: art(
          "m1025-yard.jpg",
          "Illustration of a churchyard and the side of a church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "uses",
            label: "Civil War",
            x: 32,
            y: 48,
            fact: "Served as a Confederate hospital during the Civil War, then briefly housed the Laing School for freedmen during Reconstruction.",
          },
          {
            id: "renamed",
            label: "1870",
            x: 74,
            y: 56,
            fact: "Was accepted into Charleston Presbytery as a mission church and renamed Mount Pleasant Presbyterian Church in 1870.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1699-1854",
        title: "Years from Old Wappetaw to this church",
        partLabel: "155 years",
        value: 155,
        unit: "years",
        meant:
          "What this meant: 1854 comes 155 years after 1699. Those are the years the marker prints, each with the word about, for the erection of this church and the founding of Old Wappetaw Church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1025-church.jpg",
          "Illustration of a church under oaks. Not a historical photograph.",
        ),
        nowArt: art(
          "m1025-today.jpg",
          "Illustration of a marker in a churchyard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a church, for the building the marker says was erected about 1854. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker in a churchyard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "wappetaw",
            year: "About 1699",
            label: "Old Wappetaw Church is founded.",
            why: "The marker says this church was originally a Congregational Church affiliated with Old Wappetaw Church, founded about 1699.",
          },
          {
            id: "erected",
            year: "About 1854",
            label: "This church is erected.",
            why: "The marker says it was erected about 1854.",
          },
          {
            id: "hospital",
            year: "Civil War",
            label: "It serves as a Confederate hospital.",
            why: "The marker says it served as a Confederate hospital during the Civil War, then briefly housed the Laing School for freedmen during Reconstruction.",
          },
          {
            id: "renamed",
            year: "1870",
            label: "It is renamed Mount Pleasant Presbyterian Church.",
            why: "The marker says it was accepted into Charleston Presbytery as a mission church and renamed Mount Pleasant Presbyterian Church in 1870.",
          },
        ],
        ["hospital", "renamed", "wappetaw", "erected"],
      ),
      takeaway([
        "Erected about 1854 and originally a Congregational Church affiliated with Old Wappetaw Church, founded about 1699.",
        "Served as a Confederate hospital during the Civil War, then briefly housed the Laing School for freedmen during Reconstruction.",
        "Was accepted into Charleston Presbytery as a mission church and renamed Mount Pleasant Presbyterian Church in 1870.",
      ]),
    ],
  ),
  lesson(
    "10-26",
    "Fourth church of the parish",
    "St. James Santee timeline",
    [
      cited("10-26", "St. James Santee Parish Church", "front and back"),
      span(
        '"31 years" is 1789 minus 1758, the years the marker prints for the Rev. Samuel Fenner Warren serving as parish rector.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1768",
        title: "Wambaw Church on the King's Highway",
        partLabel: "the church",
        art: art(
          "m1026-church.jpg",
          "Illustration of a parish church beside a rural road. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "parish",
            label: "1706",
            x: 32,
            y: 52,
            fact: "The parish, founded in 1706 at the request of French Huguenot settlers, was the second oldest in the colony.",
          },
          {
            id: "erected",
            label: "1768",
            x: 74,
            y: 40,
            fact: "Erected in 1768, this edifice, officially known as Wambaw Church, was situated on the King's Highway. It is the fourth church to serve St. James Santee Parish.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1758",
        title: "A rector, then a landmark",
        partLabel: "the churchyard",
        art: art(
          "m1026-yard.jpg",
          "Illustration of a rural churchyard along a road. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "warren",
            label: "1758-1789",
            x: 32,
            y: 48,
            fact: "The Rev. Samuel Fenner Warren served as parish rector from 1758 until his death in 1789. Thomas Lynch, Paul Mazyck, John Drake, Jonah Collins, Jacob Motte, Jr., Daniel Horry, and Elias Horry were appointed commissioners to build the church.",
          },
          {
            id: "landmark",
            label: "1973",
            x: 74,
            y: 56,
            fact: "The sanctuary combines elements of the Georgian and Classical architectural styles and reflects a late-18th century trend toward a more sophisticated design for parish churches. It was designated a National Historic Landmark in 1973.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1758-1789",
        title: "Years Warren served as rector",
        partLabel: "31 years",
        value: 31,
        unit: "years",
        meant:
          "What this meant: 1789 comes 31 years after 1758. Those are the years the marker prints for the Rev. Samuel Fenner Warren serving as parish rector, until his death.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1026-church.jpg",
          "Illustration of a parish church beside a rural road. Not a historical photograph.",
        ),
        nowArt: art(
          "m1026-today.jpg",
          "Illustration of a marker on a rural road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a parish church, for the edifice the marker says was erected in 1768 and officially known as Wambaw Church. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a rural road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "parish",
            year: "1706",
            label: "St. James Santee Parish is founded.",
            why: "The marker says the parish was founded in 1706 at the request of French Huguenot settlers and was the second oldest in the colony.",
          },
          {
            id: "warren",
            year: "1758",
            label: "The Rev. Samuel Fenner Warren becomes parish rector.",
            why: "The marker says he served as parish rector from 1758 until his death in 1789.",
          },
          {
            id: "erected",
            year: "1768",
            label: "Wambaw Church is erected on the King's Highway.",
            why: "The marker says this edifice, officially known as Wambaw Church, was erected in 1768 on the King's Highway and is the fourth church to serve St. James Santee Parish.",
          },
          {
            id: "landmark",
            year: "1973",
            label: "The church is designated a National Historic Landmark.",
            why: "The marker says it was designated a National Historic Landmark in 1973.",
          },
        ],
        ["erected", "parish", "landmark", "warren"],
      ),
      takeaway([
        "Erected in 1768, this edifice, officially known as Wambaw Church, was situated on the King's Highway. It is the fourth church to serve St. James Santee Parish.",
        "The parish, founded in 1706 at the request of French Huguenot settlers, was the second oldest in the colony. The Rev. Samuel Fenner Warren served as parish rector from 1758 until his death in 1789.",
        "Thomas Lynch, Paul Mazyck, John Drake, Jonah Collins, Jacob Motte, Jr., Daniel Horry, and Elias Horry were appointed commissioners to build the church. The sanctuary combines elements of the Georgian and Classical architectural styles and reflects a late-18th century trend toward a more sophisticated design for parish churches. It was designated a National Historic Landmark in 1973.",
      ]),
    ],
  ),
];
