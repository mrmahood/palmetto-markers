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

export const richlandLessonsAF: MarkerLesson[] = [
  lesson(
    "40-165",
    "First memorial garden by a state garden club in the U.S.",
    "Memorial Garden timeline",
    [
      cited("40-165", "South Carolina Memorial Garden", "front and back"),
      span(
        '"13 years" is 1957 minus 1944, the years the marker prints for the dedication at its completion and the establishment of the garden.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "garden",
        kicker: "1944",
        title: "Established by the Garden Club",
        partLabel: "the garden",
        art: art(
          "m40165-garden.jpg",
          "Illustration of a planted garden and a landscape path. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1944",
            x: 32,
            y: 48,
            fact: "This garden was established in 1944 by the Garden Club of South Carolina. It was the first memorial garden in the U.S. created by a state garden club in honor and in memory of those who served in World War II.",
          },
          {
            id: "design",
            label: "The donated design",
            x: 74,
            y: 40,
            fact: "Sarah P. Boylston donated part of her own garden for it, and noted landscape architect Loutrel W. Briggs (1893-1977) donated his landscape design.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1946",
        title: "Opened, then dedicated",
        partLabel: "the yard",
        art: art(
          "m40165-yard.jpg",
          "Illustration of an open lawn and flower beds. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1946 and 1957",
            x: 32,
            y: 52,
            fact: "It opened in 1946 and was dedicated at its completion in 1957. This garden was described in a 1946 award citation from the National Council of State Garden Clubs as “expressed in terms of beauty, a place apart.”",
          },
          {
            id: "club",
            label: "Founded in 1930",
            x: 74,
            y: 42,
            fact: "The Garden Club of South Carolina, founded in 1930, was incorporated in 1945. It and its member clubs and leaders promote education, beautification, and environmental awareness. It has long hosted events on Memorial Day and other occasions.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1944 to 1957",
        title: "Years from establishment to dedication",
        partLabel: "13 years",
        value: 13,
        unit: "years",
        meant:
          "What this meant: 1957 comes 13 years after 1944. That is the stretch from the year the garden was established to the year it was dedicated at its completion.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40165-garden.jpg",
          "Illustration of a planted garden and a landscape path. Not a historical photograph.",
        ),
        nowArt: art(
          "m40165-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a planted garden, for the garden the marker says was established in 1944. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1930",
            label: "The Garden Club of South Carolina is founded.",
            why: "The marker says the Garden Club of South Carolina was founded in 1930.",
          },
          {
            id: "established",
            year: "1944",
            label: "This garden is established.",
            why: "The marker says this garden was established in 1944 by the Garden Club of South Carolina. It was the first memorial garden in the U.S. created by a state garden club in honor and in memory of those who served in World War II.",
          },
          {
            id: "opened",
            year: "1946",
            label: "The garden opens.",
            why: "The marker says it opened in 1946. A 1946 award citation from the National Council of State Garden Clubs described it as “expressed in terms of beauty, a place apart.”",
          },
          {
            id: "dedicated",
            year: "1957",
            label: "It is dedicated at its completion.",
            why: "The marker says it was dedicated at its completion in 1957.",
          },
        ],
        ["opened", "founded", "dedicated", "established"],
      ),
      takeaway([
        "This garden was established in 1944 by the Garden Club of South Carolina. It was the first memorial garden in the U.S. created by a state garden club in honor and in memory of those who served in World War II.",
        "Sarah P. Boylston donated part of her own garden for it, and noted landscape architect Loutrel W. Briggs (1893-1977) donated his landscape design. It opened in 1946 and was dedicated at its completion in 1957.",
        "It has long hosted events on Memorial Day and other occasions. The Garden Club of South Carolina, founded in 1930, was incorporated in 1945. It and its member clubs and leaders promote education, beautification, and environmental awareness.",
      ]),
    ],
  ),
  lesson(
    "40-166",
    "A station on the line to Columbia",
    "Kingville timeline",
    [cited("40-166", "Kingville", "front and back")],
    [
      {
        kind: "scene",
        id: "town",
        kicker: "1840",
        title: "A station on the line to Columbia",
        partLabel: "the town",
        art: art(
          "m40166-town.jpg",
          "Illustration of shops and a hotel along a dirt street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "station",
            label: "1840",
            x: 32,
            y: 46,
            fact: "Kingville, a rural community, was established in 1840 as a station on the Louisville, Cincinnati, and Charleston Railroad, on the line from Charleston to Columbia.",
          },
          {
            id: "boasted",
            label: "By 1860",
            x: 74,
            y: 40,
            fact: "By 1860 it boasted a hotel, post office, shops, offices, and several residences. Kingville is thought to be named for its status as “king” of the railroad line between Charleston and Columbia and between Columbia and Camden.",
          },
        ],
      },
      {
        kind: "scene",
        id: "rail",
        kicker: "1848",
        title: "Extended to Camden, then burned",
        partLabel: "the railroad",
        art: art(
          "m40166-rail.jpg",
          "Illustration of a depot and torn-up track. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "camden",
            label: "1848",
            x: 32,
            y: 50,
            fact: "In 1848 the S.C. Railroad extended its line northeast from here to Camden, making Kingville a significant railroad town.",
          },
          {
            id: "burned",
            label: "February 1865",
            x: 74,
            y: 42,
            fact: "In February 1865 Gen. William T. Sherman's Federals burned the depot, hotel, and sheds and destroyed 3,000 ft. of track. The railroad line was rebuilt in the 1880s and a sawmill was built about 1900, but the area declined by the mid-20th century.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "February 1865",
        title: "Track the Federals destroyed",
        partLabel: "3,000 feet",
        value: 3000,
        unit: "feet",
        meant:
          "What this meant: the marker says Gen. William T. Sherman's Federals destroyed 3,000 ft. of track in February 1865.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40166-town.jpg",
          "Illustration of shops and a hotel along a dirt street. Not a historical photograph.",
        ),
        nowArt: art(
          "m40166-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of shops and a hotel, for the community the marker says was established in 1840 as a station. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "established",
            year: "1840",
            label: "Kingville is established as a railroad station.",
            why: "The marker says Kingville, a rural community, was established in 1840 as a station on the Louisville, Cincinnati, and Charleston Railroad, on the line from Charleston to Columbia.",
          },
          {
            id: "camden",
            year: "1848",
            label: "The line is extended to Camden.",
            why: "The marker says in 1848 the S.C. Railroad extended its line northeast from here to Camden, making Kingville a significant railroad town.",
          },
          {
            id: "burned",
            year: "February 1865",
            label: "The depot, hotel, and sheds are burned.",
            why: "The marker says in February 1865 Gen. William T. Sherman's Federals burned the depot, hotel, and sheds and destroyed 3,000 ft. of track.",
          },
          {
            id: "sawmill",
            year: "about 1900",
            label: "A sawmill is built.",
            why: "The marker says a sawmill was built about 1900.",
          },
        ],
        ["sawmill", "established", "burned", "camden"],
      ),
      takeaway([
        "Kingville, a rural community, was established in 1840 as a station on the Louisville, Cincinnati, and Charleston Railroad, on the line from Charleston to Columbia. In 1848 the S.C. Railroad extended its line northeast from here to Camden, making Kingville a significant railroad town.",
        "By 1860 it boasted a hotel, post office, shops, offices, and several residences. Kingville is thought to be named for its status as “king” of the railroad line between Charleston and Columbia and between Columbia and Camden.",
        "In February 1865 Gen. William T. Sherman's Federals burned the depot, hotel, and sheds and destroyed 3,000 ft. of track. The railroad line was rebuilt in the 1880s and a sawmill was built about 1900, but the area declined by the mid-20th century.",
      ]),
    ],
  ),
  lesson(
    "40-167",
    "Named after the Minerva Academy",
    "Minervaville timeline",
    [
      cited("40-167", "Minervaville", "front"),
      span(
        '"32 years" is 1834 minus 1802, the years the marker prints for the closing of the Minerva Academy and its founding.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "town",
        kicker: "1802",
        title: "Between Cabin Branch and Cedar Creek",
        partLabel: "the community",
        art: art(
          "m40167-town.jpg",
          "Illustration of an academy building and a small settlement. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "academy",
            label: "Founded in 1802",
            x: 32,
            y: 46,
            fact: "Minervaville, between Cabin Branch and Cedar Creek, was an early 19th-century community. Named after the Minerva Academy, founded in 1802 with William J. Bingham as its headmaster.",
          },
          {
            id: "atlas",
            label: "1825",
            x: 74,
            y: 40,
            fact: "Minervaville appears on Robert Mills's Atlas of S.C. (1825).",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1831-1835",
        title: "A station, then a decline",
        partLabel: "the settlement",
        art: art(
          "m40167-houses.jpg",
          "Illustration of frame houses and a small railroad station. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "post",
            label: "1831-1835",
            x: 32,
            y: 50,
            fact: "It was later a station on the S.C. Railroad, with a post office 1831-1835.",
          },
          {
            id: "closed",
            label: "Closed in 1834",
            x: 74,
            y: 42,
            fact: "The area declined after the Minerva Academy closed in 1834.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1802 to 1834",
        title: "Years from founding to closing",
        partLabel: "32 years",
        value: 32,
        unit: "years",
        meant:
          "What this meant: 1834 comes 32 years after 1802. That is the stretch from the year the Minerva Academy was founded to the year it closed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40167-town.jpg",
          "Illustration of an academy building and a small settlement. Not a historical photograph.",
        ),
        nowArt: art(
          "m40167-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an academy and a small settlement, for the early 19th-century community the marker places between Cabin Branch and Cedar Creek. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1802",
            label: "The Minerva Academy is founded.",
            why: "The marker says Minervaville was named after the Minerva Academy, founded in 1802 with William J. Bingham as its headmaster.",
          },
          {
            id: "atlas",
            year: "1825",
            label: "Minervaville appears on Mills's atlas.",
            why: "The marker says Minervaville appears on Robert Mills's Atlas of S.C. (1825).",
          },
          {
            id: "post",
            year: "1831",
            label: "The station has a post office.",
            why: "The marker says it was later a station on the S.C. Railroad, with a post office 1831-1835.",
          },
          {
            id: "closed",
            year: "1834",
            label: "The Minerva Academy closes.",
            why: "The marker says the area declined after the Minerva Academy closed in 1834.",
          },
        ],
        ["closed", "atlas", "founded", "post"],
      ),
      takeaway([
        "Minervaville, between Cabin Branch and Cedar Creek, was an early 19th-century community. Named after the Minerva Academy, founded in 1802 with William J. Bingham as its headmaster.",
        "Minervaville appears on Robert Mills's Atlas of S.C. (1825). It was later a station on the S.C. Railroad, with a post office 1831-1835.",
        "The area declined after the Minerva Academy closed in 1834.",
      ]),
    ],
  ),
  lesson(
    "40-168",
    "Bought from the Land Commission",
    "Harriet Barber House timeline",
    [
      cited("40-168", "Harriet Barber House", "front and back"),
      span(
        '"7 years" is 1879 minus 1872, the years the marker prints for Harriet receiving title to this land and the purchase of the tract.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "ca. 1880",
        title: "A one-story frame house",
        partLabel: "the house",
        art: art(
          "m40168-house.jpg",
          "Illustration of a one-story frame house and farmland. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "ca. 1880",
            x: 32,
            y: 48,
            fact: "This one-story frame house was built ca. 1880. This house was listed in the National Register of Historic Places in 1986.",
          },
          {
            id: "inherited",
            label: "Inherited in 1899",
            x: 74,
            y: 40,
            fact: "The Barbers' son Rev. John B. Barber (1872-1957) inherited the property in 1899. He was a schoolteacher and pastor of St. Mark and New Light Beulah Baptist churches.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1872",
        title: "42 1/2 acres from the Land Commission",
        partLabel: "the land",
        art: art(
          "m40168-yard.jpg",
          "Illustration of a farmyard and cultivated fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bought",
            label: "1872",
            x: 32,
            y: 50,
            fact: "In 1872 Samuel Barber (d. 1891) and his wife Harriet (d. 1899), both former slaves, bought 42 1/2 acres here from the S.C. Land Commission, established in 1869 to give freedmen and freedwomen the opportunity to own land.",
          },
          {
            id: "title",
            label: "Title in 1879",
            x: 74,
            y: 42,
            fact: "Samuel Barber's wife Harriet (d. 1899) received title to this land in 1879. Barber, a well-digger as a slave, was a farmer and minister after the Civil War. The Barber family has owned a major portion of this tract since Samuel and Harriet Barber purchased it in 1872.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1872 to 1879",
        title: "Years from the purchase to the title",
        partLabel: "7 years",
        value: 7,
        unit: "years",
        meant:
          "What this meant: 1879 comes 7 years after 1872. That is the stretch from the year Samuel and Harriet Barber bought 42 1/2 acres here to the year Harriet received title to this land.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40168-house.jpg",
          "Illustration of a one-story frame house and farmland. Not a historical photograph.",
        ),
        nowArt: art(
          "m40168-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a one-story frame house, for the house the marker says was built ca. 1880. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "commission",
            year: "1869",
            label: "The S.C. Land Commission is established.",
            why: "The marker says the S.C. Land Commission was established in 1869 to give freedmen and freedwomen the opportunity to own land.",
          },
          {
            id: "bought",
            year: "1872",
            label: "Samuel and Harriet Barber buy 42 1/2 acres.",
            why: "The marker says in 1872 Samuel Barber (d. 1891) and his wife Harriet (d. 1899), both former slaves, bought 42 1/2 acres here from the S.C. Land Commission.",
          },
          {
            id: "title",
            year: "1879",
            label: "Harriet receives title to this land.",
            why: "The marker says Samuel Barber's wife Harriet (d. 1899) received title to this land in 1879.",
          },
          {
            id: "built",
            year: "ca. 1880",
            label: "The one-story frame house is built.",
            why: "The marker says this one-story frame house was built ca. 1880.",
          },
        ],
        ["built", "commission", "title", "bought"],
      ),
      takeaway([
        "In 1872 Samuel Barber (d. 1891) and his wife Harriet (d. 1899), both former slaves, bought 42 1/2 acres here from the S.C. Land Commission, established in 1869 to give freedmen and freedwomen the opportunity to own land.",
        "Barber, a well-digger as a slave, was a farmer and minister after the Civil War. Samuel Barber's wife Harriet (d. 1899) received title to this land in 1879. This one-story frame house was built ca. 1880. The Barber family has owned a major portion of this tract since Samuel and Harriet Barber purchased it in 1872.",
        "The Barbers' son Rev. John B. Barber (1872-1957) inherited the property in 1899. He was a schoolteacher and pastor of St. Mark and New Light Beulah Baptist churches. This house was listed in the National Register of Historic Places in 1986.",
      ]),
    ],
  ),
];
