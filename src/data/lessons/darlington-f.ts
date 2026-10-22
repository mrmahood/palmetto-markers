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

export const darlingtonLessonsF: MarkerLesson[] = [
  lesson(
    "16-23",
    "A carriage factory on a 491-acre plantation",
    "John L. Hart timeline",
    [cited("16-23", "John L. Hart", "front and back")],
    [
      {
        kind: "scene",
        id: "works",
        kicker: "1845",
        title: "Plantation, mills, and a carriage factory",
        partLabel: "the plantation works",
        art: art(
          "m1623-works.jpg",
          "Illustration of a carriage factory, a mill, and houses along a road. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bought",
            label: "Bought in 1845",
            x: 32,
            y: 48,
            fact: "In 1845, John Lide Hart (1825-1864) bought a 491-acre plantation here.",
          },
          {
            id: "built",
            label: "What he built",
            x: 74,
            y: 42,
            fact: "Along what is now Home Avenue, he built a carriage factory, a store, a steam-powered sawmill and grist-mill, and houses for himself and his workers. Hart also donated land for the First Baptist Church, which he helped establish.",
          },
        ],
      },
      {
        kind: "scene",
        id: "house",
        kicker: "1854",
        title: "The last antebellum house on the site",
        partLabel: "the house",
        art: art(
          "m1623-house.jpg",
          "Illustration of a mid-19th-century vernacular house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "left",
            label: "Left his ownership",
            x: 32,
            y: 52,
            fact: "The property here left his ownership in 1854. This example of regional vernacular architecture of the mid-19th century is the last antebellum structure known to remain on the site of John Hart's plantation and carriage factory. Many of Hartsville's leading citizens have owned or lived in the house since it left Hart's ownership in 1854.",
          },
          {
            id: "foundation",
            label: "1981",
            x: 74,
            y: 40,
            fact: "Hart, a Confederate lieutenant, died in action near Petersburg, Virginia. In 1981, the house was acquired by the Hartsville Heritage Foundation.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1845",
        title: "Acres in the plantation",
        partLabel: "491 acres",
        value: 491,
        unit: "acres",
        meant: "What this meant: the marker says that in 1845 John Lide Hart bought a 491-acre plantation here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1623-house.jpg",
          "Illustration of a mid-19th-century vernacular house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1623-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the vernacular house the marker calls the last antebellum structure on John Hart's plantation and carriage factory. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "bought",
            year: "1845",
            label: "John Lide Hart buys a 491-acre plantation here.",
            why: "The marker says that in 1845 John Lide Hart (1825-1864) bought a 491-acre plantation here.",
          },
          {
            id: "left",
            year: "1854",
            label: "The property leaves his ownership.",
            why: "The marker says the property here left his ownership in 1854.",
          },
          {
            id: "died",
            year: "1864",
            label: "Hart dies in action near Petersburg, Virginia.",
            why: "The marker prints John Lide Hart's years as 1825-1864 and says Hart, a Confederate lieutenant, died in action near Petersburg, Virginia.",
          },
          {
            id: "acquired",
            year: "1981",
            label: "The Hartsville Heritage Foundation acquires the house.",
            why: "The marker says that in 1981 the house was acquired by the Hartsville Heritage Foundation.",
          },
        ],
        ["died", "bought", "acquired", "left"],
      ),
      takeaway([
        "In 1845, John Lide Hart (1825-1864) bought a 491-acre plantation here. Along what is now Home Avenue, he built a carriage factory, a store, a steam-powered sawmill and grist-mill, and houses for himself and his workers.",
        "Hart also donated land for the First Baptist Church, which he helped establish. The property here left his ownership in 1854. Hart, a Confederate lieutenant, died in action near Petersburg, Virginia.",
        "This example of regional vernacular architecture of the mid-19th century is the last antebellum structure known to remain on the site. In 1981, the house was acquired by the Hartsville Heritage Foundation.",
      ]),
    ],
  ),
  lesson(
    "16-24",
    "From Gully Meetinghouse to Wesley Chapel",
    "Wesley Chapel timeline",
    [
      cited("16-24", "Wesley Chapel", "front"),
      span(
        '"119 years" is 1908 minus 1789, the years the marker prints for the present sanctuary and the year Wesley Chapel is thought to have been founded.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "camp",
        kicker: "1789",
        title: "Early camp meetings",
        partLabel: "the early church",
        art: art(
          "m1624-camp.jpg",
          "Illustration of camp-meeting tents and a log meetinghouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Thought founded in 1789",
            x: 32,
            y: 46,
            fact: "Said to be Darlington County's oldest Methodist church, Wesley Chapel, thought to be founded in 1789, was the site of early camp meetings.",
          },
          {
            id: "gully",
            label: "Gully Meetinghouse",
            x: 74,
            y: 54,
            fact: "By 1802, the church was known as Gully Meetinghouse and was located about 1 ½ miles N.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1908",
        title: "The present sanctuary",
        partLabel: "the sanctuary",
        art: art(
          "m1624-church.jpg",
          "Illustration of a wooden church sanctuary. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "site",
            label: "Site obtained in 1832",
            x: 32,
            y: 50,
            fact: "The site here was obtained from Jesse & John Clements in 1832.",
          },
          {
            id: "renamed",
            label: "Renamed in 1834",
            x: 74,
            y: 38,
            fact: "The church was renamed Wesley Chapel in 1834, and the present sanctuary was built in 1908.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1789 to 1908",
        title: "Years from that founding to this sanctuary",
        partLabel: "119 years",
        value: 119,
        unit: "years",
        meant: "What this meant: 1908 comes 119 years after 1789. The marker says Wesley Chapel is thought to have been founded in 1789, and the present sanctuary was built in 1908.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1624-church.jpg",
          "Illustration of a wooden church sanctuary. Not a historical photograph.",
        ),
        nowArt: art(
          "m1624-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a church sanctuary, for the building the marker says was built in 1908. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1789",
            label: "Wesley Chapel is thought to be founded.",
            why: "The marker says Wesley Chapel, said to be Darlington County's oldest Methodist church, is thought to have been founded in 1789 and was the site of early camp meetings.",
          },
          {
            id: "gully",
            year: "1802",
            label: "The church is known as Gully Meetinghouse.",
            why: "The marker says that by 1802 the church was known as Gully Meetinghouse and was located about 1 ½ miles N.",
          },
          {
            id: "site",
            year: "1832",
            label: "This site is obtained from Jesse and John Clements.",
            why: "The marker says the site here was obtained from Jesse & John Clements in 1832.",
          },
          {
            id: "built",
            year: "1908",
            label: "The present sanctuary is built.",
            why: "The marker says the present sanctuary was built in 1908.",
          },
        ],
        ["built", "founded", "site", "gully"],
      ),
      takeaway([
        "Said to be Darlington County's oldest Methodist church, Wesley Chapel, thought to be founded in 1789, was the site of early camp meetings.",
        "By 1802, the church was known as Gully Meetinghouse and was located about 1 ½ miles N. The site here was obtained from Jesse & John Clements in 1832.",
        "The church was renamed Wesley Chapel in 1834, and the present sanctuary was built in 1908.",
      ]),
    ],
  ),
  lesson(
    "16-25",
    "Teacher, merchant, and postmaster in Society Hill",
    "Lawrence Faulkner timeline",
    [
      cited("16-25", "Lawrence Faulkner", "front and back"),
      span(
        '"12 years" is 1889 minus 1877, the years the marker prints for the end and the start of Lawrence Faulkner\'s service as Society Hill\'s postmaster.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "store",
        kicker: "1877",
        title: "A store, a dwelling, and the post office",
        partLabel: "the store and dwelling",
        art: art(
          "m1625-store.jpg",
          "Illustration of a small store joined to a dwelling. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "teacher",
            label: "Teacher and merchant",
            x: 32,
            y: 48,
            fact: "Born c. 1840 and a resident of Darlington County by 1871, Lawrence Faulkner was a black school teacher, later merchant.",
          },
          {
            id: "postmaster",
            label: "Postmaster, 1877 to 1889",
            x: 74,
            y: 40,
            fact: "He was Society Hill's postmaster from 1877 to 1889. A trustee of nearby Union Baptist Church, Faulkner died in 1898. His store and dwelling were located on this site.",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "Around 1900",
        title: "A small house beside the Faulkner house",
        partLabel: "the house next door",
        art: art(
          "m1625-houses.jpg",
          "Illustration of a small house beside a larger dwelling. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "farm",
            label: "Around 1900",
            x: 32,
            y: 56,
            fact: "A former slave from Virginia, Brown lived in Society Hill around 1900 and for years was employed by Lawrence Faulkner's widow to work on her farm.",
          },
          {
            id: "tales",
            label: "Folk tales",
            x: 74,
            y: 44,
            fact: "His small house was adjacent to the Faulkner house on this site. A gifted story-teller of black folk tales, Brown's allegories were posthumously recorded by the Smithsonian Institution.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1877 to 1889",
        title: "Years from the start to the end of that service",
        partLabel: "12 years",
        value: 12,
        unit: "years",
        meant: "What this meant: 1889 comes 12 years after 1877. The marker says Lawrence Faulkner was Society Hill's postmaster from 1877 to 1889.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1625-store.jpg",
          "Illustration of a small store joined to a dwelling. Not a historical photograph.",
        ),
        nowArt: art(
          "m1625-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a store and dwelling, for the buildings the marker says stood on this site. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "c. 1840",
            label: "Lawrence Faulkner is born.",
            why: "The marker says he was born c. 1840.",
          },
          {
            id: "postmaster",
            year: "1877",
            label: "He becomes Society Hill's postmaster.",
            why: "The marker says he was Society Hill's postmaster from 1877 to 1889. He was a resident of Darlington County by 1871, a black school teacher, and later a merchant.",
          },
          {
            id: "died",
            year: "1898",
            label: "Faulkner dies.",
            why: "The marker says Faulkner died in 1898. He was a trustee of nearby Union Baptist Church, and his store and dwelling were located on this site.",
          },
          {
            id: "brown",
            year: "Around 1900",
            label: "Brown lives in Society Hill.",
            why: "The marker says Brown, a former slave from Virginia, lived in Society Hill around 1900 and for years was employed by Lawrence Faulkner's widow to work on her farm.",
          },
        ],
        ["died", "born", "brown", "postmaster"],
      ),
      takeaway([
        "Born c. 1840 and a resident of Darlington County by 1871, Lawrence Faulkner was a black school teacher, later merchant, and Society Hill's postmaster from 1877 to 1889.",
        "A trustee of nearby Union Baptist Church, Faulkner died in 1898. His store and dwelling were located on this site.",
        "A former slave from Virginia, Brown lived in Society Hill around 1900 and for years was employed by Lawrence Faulkner's widow. A gifted story-teller of black folk tales, Brown's allegories were posthumously recorded by the Smithsonian Institution.",
      ]),
    ],
  ),
  lesson(
    "16-26",
    "Twelve men paid for the books",
    "Society Hill Library Society timeline",
    [cited("16-26", "Society Hill Library Society", "front and back")],
    [
      {
        kind: "scene",
        id: "books",
        kicker: "June 5, 1822",
        title: "Twenty dollars each for a library",
        partLabel: "the books",
        art: art(
          "m1626-books.jpg",
          "Illustration of an empty table and benches in a plain room. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "paid",
            label: "June 5, 1822",
            x: 32,
            y: 50,
            fact: "On June 5, 1822, twelve men paid $20 each to purchase books for a library. These men were J. J. Evans; David and Elias Gregg; D. R. W., J. K. and T. E. McIver; Thomas Smith; Alexander Sparks; D. R. and J. N. Williams; J. F. Wilson; and J. D. Witherspoon.",
          },
          {
            id: "formed",
            label: "December 7, 1822",
            x: 74,
            y: 42,
            fact: "On December 7, 1822 the men formed the Society Hill Library Society. This society was incorporated Dec. 20, 1823.",
          },
        ],
      },
      {
        kind: "scene",
        id: "building",
        kicker: "About 1932",
        title: "Moved to the St. David's Academy lot",
        partLabel: "the library building",
        art: art(
          "m1626-library.jpg",
          "Illustration of a small wooden library building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "librarian",
            label: "By 1826",
            x: 32,
            y: 46,
            fact: "By 1826 the society was located in a structure about 900 ft. N. on land given by John D. Witherspoon. Elias Gregg is thought to have been the first librarian, serving until 1844.",
          },
          {
            id: "moved",
            label: "Moved about 1932",
            x: 74,
            y: 58,
            fact: "The library building was moved from its original site on Main St. to the St. David's Academy lot here about 1932. It was taken into the county library system in 1971.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "June 5, 1822",
        title: "Men who paid for the books",
        partLabel: "twelve men",
        value: 12,
        unit: "men",
        meant: "What this meant: the marker says that on June 5, 1822, twelve men paid $20 each to purchase books for a library.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1626-library.jpg",
          "Illustration of a small wooden library building. Not a historical photograph.",
        ),
        nowArt: art(
          "m1626-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small library building, for the structure the marker says was moved to the St. David's Academy lot about 1932. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "paid",
            year: "June 5, 1822",
            label: "Twelve men pay $20 each for books.",
            why: "The marker says that on June 5, 1822, twelve men paid $20 each to purchase books for a library.",
          },
          {
            id: "formed",
            year: "December 7, 1822",
            label: "The men form the Society Hill Library Society.",
            why: "The marker says that on December 7, 1822 the men formed the Society Hill Library Society.",
          },
          {
            id: "moved",
            year: "About 1932",
            label: "The library building is moved to this lot.",
            why: "The marker says the library building was moved from its original site on Main St. to the St. David's Academy lot here about 1932.",
          },
          {
            id: "county",
            year: "1971",
            label: "The library joins the county library system.",
            why: "The marker says it was taken into the county library system in 1971.",
          },
        ],
        ["moved", "paid", "county", "formed"],
      ),
      takeaway([
        "On June 5, 1822, twelve men paid $20 each to purchase books for a library. On December 7, 1822 the men formed the Society Hill Library Society.",
        "This society was incorporated Dec. 20, 1823 and by 1826 was located in a structure about 900 ft. N. on land given by John D. Witherspoon. Elias Gregg is thought to have been the first librarian, serving until 1844.",
        "The library building was moved from its original site on Main St. to the St. David's Academy lot here about 1932. It was taken into the county library system in 1971.",
      ]),
    ],
  ),
];
