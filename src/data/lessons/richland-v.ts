import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia churches and schools. Facts are from that marker only.
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

export const richlandLessonsV: MarkerLesson[] = [
  lesson(
    "40-109",
    "From Corpus Evangelicum to this site",
    "Bethlehem Church timeline",
    [
      cited("40-109", "Bethlehem Church [First Marker]", "front"),
      span(
        '"109 years" is 1897 minus 1788, the years the marker prints for the congregation located here and the signing of the Corpus Evangelicum articles.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1788",
        title: "An early supervising body",
        partLabel: "the church",
        art: art(
          "m40109-church.jpg",
          "Illustration of a wooden church and a gathering of congregants. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "unknown",
            label: "Organization date",
            x: 32,
            y: 52,
            fact: "The organization date of this Lutheran church is unknown.",
          },
          {
            id: "corpus",
            label: "1788",
            x: 74,
            y: 42,
            fact: 'In 1788, however, Bethlehem and fourteen other churches signed the articles of the "Corpus Evangelicum," an early church supervising body.',
          },
        ],
      },
      {
        kind: "scene",
        id: "grounds",
        kicker: "1815 to 1897",
        title: "A building north, then this site",
        partLabel: "the moves",
        art: art(
          "m40109-yard.jpg",
          "Illustration of a rural church and a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "north",
            label: "By 1815",
            x: 32,
            y: 48,
            fact: "By 1815, Bethlehem's first known building had been built about ca. 5 mi. N. of here.",
          },
          {
            id: "later",
            label: "1847 and 1897",
            x: 74,
            y: 56,
            fact: "The church moved near Hollinshead Creek, it is said, in 1847, and by 1897 the congregation was located here.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1788-1897",
        title: "Years from the articles to this site",
        partLabel: "109 years",
        value: 109,
        unit: "years",
        meant:
          "What this meant: 1897 comes 109 years after 1788. That is the stretch from the year Bethlehem signed the articles of the Corpus Evangelicum to the year the congregation was located here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40109-church.jpg",
          "Illustration of a wooden church and a gathering of congregants. Not a historical photograph.",
        ),
        nowArt: art(
          "m40109-today.jpg",
          "Illustration of a blank marker at a rural roadside. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church, for the Lutheran congregation the marker says signed the Corpus Evangelicum articles in 1788. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker at a rural roadside. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "articles",
            year: "1788",
            label: "Bethlehem and fourteen other churches sign the articles.",
            why: 'The marker dates that signing to 1788. The articles are of the "Corpus Evangelicum," an early church supervising body. The organization date of this Lutheran church is unknown.',
          },
          {
            id: "building",
            year: "1815",
            label: "The first known building stands about ca. 5 mi. N. of here.",
            why: "The marker says that by 1815 Bethlehem's first known building had been built about ca. 5 mi. N. of here.",
          },
          {
            id: "creek",
            year: "1847",
            label: "The church moves near Hollinshead Creek.",
            why: "The marker says the church moved near Hollinshead Creek, it is said, in 1847.",
          },
          {
            id: "here",
            year: "1897",
            label: "The congregation is located here.",
            why: "The marker says that by 1897 the congregation was located here.",
          },
        ],
        ["here", "articles", "creek", "building"],
      ),
      takeaway([
        'The organization date of this Lutheran church is unknown. In 1788, however, Bethlehem and fourteen other churches signed the articles of the "Corpus Evangelicum," an early church supervising body.',
        "By 1815, Bethlehem's first known building had been built about ca. 5 mi. N. of here.",
        "The church moved near Hollinshead Creek, it is said, in 1847, and by 1897 the congregation was located here.",
      ]),
    ],
  ),
  lesson(
    "40-110",
    "Ellisor Church, then a move south",
    "Early Bethlehem site timeline",
    [
      cited("40-110", "Bethlehem Church [Second Marker]", "front"),
      span(
        '"30 years" is 1847 minus 1817, the years the marker prints for the sale of this site and the purchase from George Metz.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1817",
        title: "A tract and a first building",
        partLabel: "the first building",
        art: art(
          "m40110-church.jpg",
          "Illustration of a small church on open land. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "tract",
            label: "George Metz",
            x: 32,
            y: 50,
            fact: "Bethlehem Lutheran Church erected its first known building about 350 feet north of here on a 17-acre tract purchased from George Metz in 1817.",
          },
          {
            id: "ellisor",
            label: "Ellisor Church",
            x: 74,
            y: 42,
            fact: "According to tradition, the church was first called Ellisor Church after people of this name living nearby.",
          },
        ],
      },
      {
        kind: "scene",
        id: "grounds",
        kicker: "1847",
        title: "Sold, then moved south",
        partLabel: "the move",
        art: art(
          "m40110-yard.jpg",
          "Illustration of a church grounds and a road toward a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sold",
            label: "Alexander Daily",
            x: 32,
            y: 48,
            fact: "In 1847, Bethlehem sold this site to Alexander Daily.",
          },
          {
            id: "south",
            label: "Hollinshead Creek",
            x: 74,
            y: 56,
            fact: "In 1847 the church moved near Hollinshead Creek, about 3 miles south of here.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1817-1847",
        title: "Years from the purchase to the sale",
        partLabel: "30 years",
        value: 30,
        unit: "years",
        meant:
          "What this meant: 1847 comes 30 years after 1817. That is the stretch from the year the tract was purchased from George Metz to the year Bethlehem sold this site.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40110-church.jpg",
          "Illustration of a small church on open land. Not a historical photograph.",
        ),
        nowArt: art(
          "m40110-today.jpg",
          "Illustration of a blank marker by open fields. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a church on open land, for the first known building the marker says stood about 350 feet north of here. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker by open fields. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "metz",
            year: "1817",
            label: "A 17-acre tract is purchased from George Metz.",
            why: "The marker says the first known building was erected about 350 feet north of here on a 17-acre tract purchased from George Metz in 1817.",
          },
          {
            id: "daily",
            year: "1847",
            label: "Bethlehem sells this site to Alexander Daily.",
            why: "The marker says that in 1847 Bethlehem sold this site to Alexander Daily.",
          },
          {
            id: "move",
            year: "1847",
            label: "The church moves near Hollinshead Creek.",
            why: "The marker says that in 1847 the church moved near Hollinshead Creek, about 3 miles south of here. The sentence states the sale, then the move.",
          },
        ],
        ["move", "metz", "daily"],
      ),
      takeaway([
        "Bethlehem Lutheran Church erected its first known building about 350 feet north of here on a 17-acre tract purchased from George Metz in 1817.",
        "According to tradition, the church was first called Ellisor Church after people of this name living nearby.",
        "In 1847, Bethlehem sold this site to Alexander Daily and moved near Hollinshead Creek, about 3 miles south of here.",
      ]),
    ],
  ),
  lesson(
    "40-111",
    "Howard School moves in 1924",
    "Howard School timeline",
    [
      cited("40-111", "Howard School Site", "front"),
      span(
        '"55 years" is 1924 minus 1869, the years the marker prints for the move here and the location at the NW corner of Hampton & Lincoln streets.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "After the Civil War",
        title: "A public school at a street corner",
        partLabel: "the corner school",
        art: art(
          "m40111-school.jpg",
          "Illustration of a frame school at a street corner. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "After the Civil War",
            x: 32,
            y: 50,
            fact: "Established after the Civil War, this was a public school for blacks.",
          },
          {
            id: "corner",
            label: "By 1869",
            x: 74,
            y: 42,
            fact: "It was located at the NW corner of Hampton & Lincoln streets by 1869 and was partially supported by the Freedmen's Bureau.",
          },
        ],
      },
      {
        kind: "scene",
        id: "grounds",
        kicker: "1924",
        title: "Named for Howard, then moved here",
        partLabel: "the later site",
        art: art(
          "m40111-yard.jpg",
          "Illustration of a school and its yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "Oliver O. Howard",
            x: 32,
            y: 48,
            fact: "It is said the school was named for Oliver O. Howard, commissioner of Refugees, Freedmen, and Abandoned Lands during Reconstruction.",
          },
          {
            id: "moved",
            label: "1924",
            x: 74,
            y: 56,
            fact: "Moved here in 1924, Howard School was for many years the only public school for blacks in Columbia.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1869-1924",
        title: "Years from that corner to this site",
        partLabel: "55 years",
        value: 55,
        unit: "years",
        meant:
          "What this meant: 1924 comes 55 years after 1869. That is the stretch from the year the school was located at the NW corner of Hampton & Lincoln streets to the year it moved here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40111-school.jpg",
          "Illustration of a frame school at a street corner. Not a historical photograph.",
        ),
        nowArt: art(
          "m40111-today.jpg",
          "Illustration of a blank marker at a city corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a school at a street corner, for the public school the marker says was located at the NW corner of Hampton & Lincoln streets by 1869. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker at a city corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "After the Civil War",
            label: "The public school for blacks is established.",
            why: "The marker says this public school for blacks was established after the Civil War.",
          },
          {
            id: "lincoln",
            year: "1869",
            label: "It is located at Hampton & Lincoln streets.",
            why: "The marker says it was located at the NW corner of Hampton & Lincoln streets by 1869 and was partially supported by the Freedmen's Bureau.",
          },
          {
            id: "here",
            year: "1924",
            label: "Howard School moves here.",
            why: "The marker says Howard School was moved here in 1924 and was for many years the only public school for blacks in Columbia.",
          },
        ],
        ["here", "founded", "lincoln"],
      ),
      takeaway([
        "Established after the Civil War, this public school for blacks was located at the NW corner of Hampton & Lincoln streets by 1869 and was partially supported by the Freedmen's Bureau.",
        "It is said the school was named for Oliver O. Howard, commissioner of Refugees, Freedmen, and Abandoned Lands during Reconstruction.",
        "Moved here in 1924, Howard School was for many years the only public school for blacks in Columbia.",
      ]),
    ],
  ),
  lesson(
    "40-112",
    "A frame building for 800 pupils",
    "Early Howard School timeline",
    [cited("40-112", "Early Howard School Site", "front")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "By 1869",
        title: "A two-story frame building",
        partLabel: "the frame school",
        art: art(
          "m40112-school.jpg",
          "Illustration of a two-story frame school and a crowd of pupils. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "After the Civil War",
            x: 32,
            y: 50,
            fact: "On this site stood Howard School, a public school for blacks established after the Civil War.",
          },
          {
            id: "pupils",
            label: "800 pupils",
            x: 74,
            y: 42,
            fact: "By 1869 there was a two-story frame building large enough for 800 pupils.",
          },
        ],
      },
      {
        kind: "scene",
        id: "grounds",
        kicker: "1924",
        title: "Named for Howard, then moved",
        partLabel: "the schoolyard",
        art: art(
          "m40112-yard.jpg",
          "Illustration of a two-story school and an open yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "Oliver O. Howard",
            x: 32,
            y: 48,
            fact: "Partially funded by the Freedmen's Bureau, the school reportedly was named for Oliver O. Howard, first commissioner, Bureau of Refugees, Freedmen, and Abandoned Lands.",
          },
          {
            id: "moved",
            label: "1924",
            x: 74,
            y: 56,
            fact: "For years the only public school for blacks in Columbia, Howard was moved 5 blocks NW, 1924.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "By 1869",
        title: "Pupils the building could hold",
        partLabel: "800 pupils",
        value: 800,
        unit: "pupils",
        meant:
          "What this meant: the marker says that by 1869 there was a two-story frame building large enough for 800 pupils.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40112-school.jpg",
          "Illustration of a two-story frame school and a crowd of pupils. Not a historical photograph.",
        ),
        nowArt: art(
          "m40112-today.jpg",
          "Illustration of a blank marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-story frame school, for the building the marker says was large enough for 800 pupils by 1869. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "After the Civil War",
            label: "Howard School is established on this site.",
            why: "The marker says that on this site stood Howard School, a public school for blacks established after the Civil War.",
          },
          {
            id: "frame",
            year: "1869",
            label: "A two-story frame building holds 800 pupils.",
            why: "The marker says that by 1869 there was a two-story frame building large enough for 800 pupils.",
          },
          {
            id: "northwest",
            year: "1924",
            label: "Howard is moved 5 blocks NW.",
            why: "The marker says Howard was moved 5 blocks NW in 1924. It also says that for years it was the only public school for blacks in Columbia.",
          },
        ],
        ["frame", "northwest", "founded"],
      ),
      takeaway([
        "On this site stood Howard School, a public school for blacks established after the Civil War. By 1869 there was a two-story frame building large enough for 800 pupils.",
        "Partially funded by the Freedmen's Bureau, the school reportedly was named for Oliver O. Howard, first commissioner, Bureau of Refugees, Freedmen, and Abandoned Lands.",
        "For years the only public school for blacks in Columbia, Howard was moved 5 blocks NW, 1924.",
      ]),
    ],
  ),
];
