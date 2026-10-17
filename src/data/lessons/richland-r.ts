import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia sites. Facts are from that marker only.
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

export const richlandLessonsR: MarkerLesson[] = [
  lesson(
    "40-89",
    "The street named for the Swamp Fox",
    "Marion Street timeline",
    [
      cited("40-89", "Marion Street", "front and back"),
      span(
        '"5 years" is 1795 minus 1790, the years the marker prints for the death of Marion and the Constitutional Convention.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1781",
        title: "The street and the Swamp Fox",
        partLabel: "the street",
        art: art(
          "m4089-street.jpg",
          "Illustration of a street and a wetland band. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "The street",
            x: 32,
            y: 50,
            fact: "This street was named for Francis Marion, one of the three S.C. Partisan Generals during the American Revolution.",
          },
          {
            id: "fox",
            label: "Swamp Fox",
            x: 74,
            y: 42,
            fact: "The guerilla tactics against the British by Marion and his Partisan band earned for him the name of \"Swamp Fox.\" Congress voted its thanks for Parker's Ferry and Eutaw Springs, both fought in 1781.",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "About 1732",
        title: "From a South Carolina birth to Belle Isle",
        partLabel: "birth and burial",
        art: art(
          "m4089-houses.jpg",
          "Illustration of a cottage and a plantation house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "About 1732",
            x: 31,
            y: 56,
            fact: "Brigadier General Francis Marion was born in South Carolina about 1732 of French Huguenot descent. He was a member of the First Provincial Congress, served eight years in the S. C. Senate, and was a member of the Constitutional Convention of 1790.",
          },
          {
            id: "buried",
            label: "Feb. 27, 1795",
            x: 73,
            y: 46,
            fact: "He died Feb. 27, 1795, and is buried in Berkeley County at Belle Isle Plantation, home of his brother, Gabriel.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1790-1795",
        title: "Years from the convention to his death",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1795 comes 5 years after 1790. That is the stretch from the year he was a member of the Constitutional Convention to the year of his death.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4089-street.jpg",
          "Illustration of a street and a wetland band. Not a historical photograph.",
        ),
        nowArt: art(
          "m4089-today.jpg",
          "Illustration of a marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a street, for the street the marker says was named for Francis Marion. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "About 1732",
            label: "Francis Marion is born in South Carolina.",
            why: "The marker says Brigadier General Francis Marion was born in South Carolina about 1732 of French Huguenot descent.",
          },
          {
            id: "battles",
            year: "1781",
            label: "Parker's Ferry and Eutaw Springs are fought.",
            why: 'The marker says Congress voted its thanks for those battles, both fought in 1781, and that guerilla tactics against the British earned him the name "Swamp Fox."',
          },
          {
            id: "convention",
            year: "1790",
            label: "He is a member of the Constitutional Convention.",
            why: "The marker says he was a member of the Constitutional Convention of 1790.",
          },
          {
            id: "died",
            year: "Feb. 27, 1795",
            label: "He dies and is buried at Belle Isle Plantation.",
            why: "The marker says he died Feb. 27, 1795, and is buried in Berkeley County at Belle Isle Plantation, home of his brother, Gabriel.",
          },
        ],
        ["died", "born", "convention", "battles"],
      ),
      takeaway([
        "Brigadier General Francis Marion was born in South Carolina about 1732 of French Huguenot descent. He was a member of the First Provincial Congress, served eight years in the S. C. Senate, and was a member of the Constitutional Convention of 1790.",
        'This street was named for Francis Marion, one of the three S.C. Partisan Generals during the American Revolution. Guerilla tactics against the British earned him the name "Swamp Fox."',
        "Congress voted its thanks for Parker's Ferry and Eutaw Springs, both fought in 1781. He died Feb. 27, 1795, and is buried at Belle Isle Plantation, home of his brother, Gabriel.",
      ]),
    ],
  ),
  lesson(
    "40-90",
    "Two thoroughfares through the town",
    "Assembly Street timeline",
    [
      cited("40-90", "Assembly Street", "front"),
      span(
        '"4 years" is 1790 minus 1786, the years the marker prints for the first meeting of the General Assembly in Columbia and the establishment of the capital.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1786",
        title: "Two thoroughfares through the center",
        partLabel: "the thoroughfares",
        art: art(
          "m4090-street.jpg",
          "Illustration of two crossing thoroughfares. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "capital",
            label: "1786",
            x: 33,
            y: 48,
            fact: "In 1786, when Columbia was established as the state capital, the General Assembly decided that two principal thoroughfares should run perpendicular to each other through the center of the town.",
          },
          {
            id: "named",
            label: "Assembly Street",
            x: 75,
            y: 40,
            fact: "One of these, Assembly Street, was named for the General Assembly.",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1790",
        title: "A State House, then the White House",
        partLabel: "the State House",
        art: art(
          "m4090-houses.jpg",
          "Illustration of a state house and a later neoclassical house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "met",
            label: "1790",
            x: 32,
            y: 54,
            fact: "The General Assembly first met in Columbia in 1790 in South Carolina's new State House.",
          },
          {
            id: "hoban",
            label: "James Hoban",
            x: 74,
            y: 44,
            fact: "The State House was a building designed by James Hoban, who later designed the White House.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1786-1790",
        title: "Years from the capital to the first meeting",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1790 comes 4 years after 1786. That is the stretch from the year Columbia was established as the state capital to the year the General Assembly first met in Columbia.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4090-street.jpg",
          "Illustration of two crossing thoroughfares. Not a historical photograph.",
        ),
        nowArt: art(
          "m4090-today.jpg",
          "Illustration of a marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of two crossing thoroughfares, for the streets the marker says were decided in 1786. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "capital",
            year: "1786",
            label: "Columbia is established as the state capital.",
            why: "The marker says that in 1786, when Columbia was established as the state capital, the General Assembly decided that two principal thoroughfares should run perpendicular to each other through the center of the town. Assembly Street was named for the General Assembly.",
          },
          {
            id: "met",
            year: "1790",
            label: "The General Assembly first meets in the new State House.",
            why: "The marker says the General Assembly first met in Columbia in 1790 in South Carolina's new State House, a building designed by James Hoban.",
          },
          {
            id: "whitehouse",
            year: "Later",
            label: "James Hoban designs the White House.",
            why: "The marker says James Hoban, who designed the State House, later designed the White House.",
          },
        ],
        ["whitehouse", "capital", "met"],
      ),
      takeaway([
        "In 1786, when Columbia was established as the state capital, the General Assembly decided that two principal thoroughfares should run perpendicular to each other through the center of the town.",
        "One of these, Assembly Street, was named for the General Assembly.",
        "The General Assembly first met in Columbia in 1790 in South Carolina's new State House, a building designed by James Hoban, who later designed the White House.",
      ]),
    ],
  ),
  lesson(
    "40-91",
    "Command of Ft. Lyttleton",
    "Harden Street timeline",
    [
      cited("40-91", "Harden Street", "front"),
      span(
        '"4 years" is 1785 minus 1781, the years the marker prints for the death of Harden and the captures at Four Holes and Ft. Balfour.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1776",
        title: "Named for a native South Carolinian",
        partLabel: "the street and the fort",
        art: art(
          "m4091-street.jpg",
          "Illustration of a street and a coastal fort. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "William Harden",
            x: 30,
            y: 52,
            fact: "This street was named for William Harden, a native South Carolinian.",
          },
          {
            id: "command",
            label: "1776",
            x: 72,
            y: 42,
            fact: "In 1776 he was given command of Ft. Lyttleton near Beaufort by the Second Provincial Congress of which he was a member.",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1781",
        title: "Captures, then a senator's death",
        partLabel: "the captures",
        art: art(
          "m4091-houses.jpg",
          "Illustration of a fort gate and a parish house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "captures",
            label: "1781",
            x: 34,
            y: 58,
            fact: "In 1781, serving as colonel under Francis Marion, he commanded patriot forces who captured British troops both at Four Holes and Ft. Balfour at Pocotaligo.",
          },
          {
            id: "died",
            label: "1785",
            x: 76,
            y: 40,
            fact: "He died in 1785 while senator from Prince William's Parish, Beaufort District.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1781-1785",
        title: "Years from the captures to his death",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1785 comes 4 years after 1781. That is the stretch from the year he commanded the captures at Four Holes and Ft. Balfour to the year he died.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4091-street.jpg",
          "Illustration of a street and a coastal fort. Not a historical photograph.",
        ),
        nowArt: art(
          "m4091-today.jpg",
          "Illustration of a marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a street and a fort, for Ft. Lyttleton, which the marker says he was given command of in 1776. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "command",
            year: "1776",
            label: "He is given command of Ft. Lyttleton.",
            why: "The marker says that in 1776 the Second Provincial Congress, of which he was a member, gave him command of Ft. Lyttleton near Beaufort.",
          },
          {
            id: "captures",
            year: "1781",
            label: "Patriot forces capture British troops at Four Holes and Ft. Balfour.",
            why: "The marker says that in 1781, serving as colonel under Francis Marion, he commanded patriot forces who captured British troops both at Four Holes and Ft. Balfour at Pocotaligo.",
          },
          {
            id: "died",
            year: "1785",
            label: "He dies while senator from Prince William's Parish.",
            why: "The marker says he died in 1785 while senator from Prince William's Parish, Beaufort District.",
          },
        ],
        ["died", "command", "captures"],
      ),
      takeaway([
        "This street was named for William Harden, a native South Carolinian.",
        "In 1776 he was given command of Ft. Lyttleton near Beaufort by the Second Provincial Congress of which he was a member.",
        "In 1781, serving as colonel under Francis Marion, he commanded patriot forces who captured British troops both at Four Holes and Ft. Balfour at Pocotaligo. He died in 1785 while senator from Prince William's Parish, Beaufort District.",
      ]),
    ],
  ),
  lesson(
    "40-92",
    "Open space before Davis College",
    "Gibbes Green timeline",
    [
      cited("40-92", "Gibbes Green", "front"),
      span(
        '"72 years" is 1910 minus 1838, the years the marker prints for the opening of Davis College and the acquisition of the land by S. C. College.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "green",
        kicker: "By 1838",
        title: "Named for the landowner to the east",
        partLabel: "the green",
        art: art(
          "m4092-green.jpg",
          "Illustration of an open green. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "1837-1903",
            x: 32,
            y: 46,
            fact: "Named for Maj. Wade Hampton Gibbes (1837-1903), a prominent Columbian who owned much of the land to the east.",
          },
          {
            id: "bounds",
            label: "By 1838",
            x: 74,
            y: 60,
            fact: "Gibbes Green consisted of an area of land bounded by Pendleton, Bull, Pickens, and Greene Streets. Acquired by S. C. College by 1838.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1910",
        title: "A park, then the first building",
        partLabel: "the open space",
        art: art(
          "m4092-yard.jpg",
          "Illustration of a ball field and a college building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "open",
            label: "Open space",
            x: 31,
            y: 42,
            fact: "The land was kept for many years as open space, serving as a playground, ball field, and park for several generations of Columbians.",
          },
          {
            id: "davis",
            label: "1910",
            x: 73,
            y: 56,
            fact: "Davis College, which opened in 1910, was the first building in Gibbes Green.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1838-1910",
        title: "Years from the acquisition to Davis College",
        partLabel: "72 years",
        value: 72,
        unit: "years",
        meant:
          "What this meant: 1910 comes 72 years after 1838. That is the stretch from the year the marker gives for S. C. College acquiring the land, by 1838, to the year Davis College opened.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4092-green.jpg",
          "Illustration of an open green. Not a historical photograph.",
        ),
        nowArt: art(
          "m4092-today.jpg",
          "Illustration of a marker by an open lawn. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an open green, for the land the marker says was acquired by S. C. College by 1838 and kept as open space. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by an open lawn. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "acquired",
            year: "By 1838",
            label: "S. C. College acquires the land.",
            why: "The marker says Gibbes Green, bounded by Pendleton, Bull, Pickens, and Greene Streets, was acquired by S. C. College by 1838. It is named for Maj. Wade Hampton Gibbes (1837-1903), who owned much of the land to the east.",
          },
          {
            id: "open",
            year: "For many years",
            label: "The land is kept as a playground, ball field, and park.",
            why: "The marker says the land was kept for many years as open space, serving as a playground, ball field, and park for several generations of Columbians.",
          },
          {
            id: "davis",
            year: "1910",
            label: "Davis College opens, the first building in Gibbes Green.",
            why: "The marker says Davis College, which opened in 1910, was the first building in Gibbes Green.",
          },
        ],
        ["davis", "acquired", "open"],
      ),
      takeaway([
        "Named for Maj. Wade Hampton Gibbes (1837-1903), a prominent Columbian who owned much of the land to the east.",
        "Gibbes Green was bounded by Pendleton, Bull, Pickens, and Greene Streets. Acquired by S. C. College by 1838, the land was kept for many years as a playground, ball field, and park.",
        "Davis College, which opened in 1910, was the first building in Gibbes Green.",
      ]),
    ],
  ),
];
