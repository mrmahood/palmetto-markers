import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Columbia corners, sixth Richland batch. Facts are from that marker only.
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

export const richlandLessonsF: MarkerLesson[] = [
  lesson(
    "40-16",
    "The house this street was named for",
    "Blanding House timeline",
    [
      cited("40-16", "Site of Blanding House", "front"),
      span("\"9 years\" is 1828 minus 1819, the years the marker prints for the Board of Public Works."),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "This square",
        title: "Colonel Abram Blanding's home",
        partLabel: "the house",
        art: art("m4016-house.jpg", "Illustration of an early house on a square. Not a historical photograph."),
        hotspots: [
          {
            id: "home",
            label: "The house",
            x: 32,
            y: 54,
            fact: "In this square stood the home of Colonel Abram Blanding (1776-1839), for whom this street was named.",
          },
          {
            id: "principal",
            label: "1798",
            x: 74,
            y: 40,
            fact: "He was the first principal of the Columbia Male Academy in 1798, a noted lawyer and philanthropist.",
          },
        ],
      },
      {
        kind: "scene",
        id: "water",
        kicker: "1820",
        title: "The city's first water works",
        partLabel: "the water works",
        art: art("m4016-water.jpg", "Illustration of wooden pipes and a small pump house. Not a historical photograph."),
        hotspots: [
          {
            id: "pipes",
            label: "1820",
            x: 30,
            y: 62,
            fact: "He financed and built the city's first water works in 1820.",
          },
          {
            id: "board",
            label: "1819-28",
            x: 72,
            y: 50,
            fact: "He ably served the state on the Board of Public Works from 1819 to 1828.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1819-1828",
        title: "Years on the Board of Public Works",
        partLabel: "9 years",
        value: 9,
        unit: "years",
        meant: "What this meant: 1828 comes 9 years after 1819. That is the stretch the marker prints for his service on the Board of Public Works.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4016-house.jpg", "Illustration of the house on the square. Not a historical photograph."),
        nowArt: art("m4016-today.jpg", "Illustration of a marker at a street corner. Not a photograph of the site today."),
        thenCaption: "Illustration of a house on a square, for the home the marker says stood here. Not a historical photograph.",
        nowCaption: "Illustration of a marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          { id: "principal", year: "1798", label: "Blanding is the first principal of the Columbia Male Academy.", why: "The marker dates that role to 1798." },
          { id: "board", year: "1819", label: "His service on the Board of Public Works begins.", why: "The marker dates that service 1819-28." },
          { id: "water", year: "1820", label: "He finances and builds the city's first water works.", why: "The marker dates the water works to 1820." },
          { id: "boardend", year: "1828", label: "The years printed for the Board of Public Works end.", why: "The marker prints that service as 1819-28." },
        ],
        ["water", "principal", "boardend", "board"],
      ),
      takeaway([
        "In this square stood the home of Colonel Abram Blanding (1776-1839). This street was named for him.",
        "He was the first principal of the Columbia Male Academy in 1798, a noted lawyer and philanthropist.",
        "He served the state on the Board of Public Works from 1819 to 1828 and financed and built the city's first water works in 1820.",
      ]),
    ],
  ),
  lesson(
    "40-17",
    "The church Union troops mistook",
    "First Baptist Church timeline",
    [
      cited("40-17", "First Baptist Church", "front"),
      span("\"6 years\" is 1865 minus 1859, the year Union troops burned the original church and the year the present church was built."),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1859",
        title: "The present church",
        partLabel: "the church",
        art: art("m4017-church.jpg", "Illustration of an 1859 church. Not a historical photograph."),
        hotspots: [
          {
            id: "present",
            label: "1859",
            x: 30,
            y: 56,
            fact: "The congregation was organized in 1809. The present church was built in 1859.",
          },
          {
            id: "original",
            label: "February 17, 1865",
            x: 74,
            y: 40,
            fact: "The original church, built in 1811 on the Sumter Street corner, was burned February 17, 1865, by Union troops who mistook it for the present church.",
          },
        ],
      },
      {
        kind: "scene",
        id: "convention",
        kicker: "December 17, 1860",
        title: "A meeting, then an adjournment",
        partLabel: "the meeting",
        art: art("m4017-convention.jpg", "Illustration of a meeting hall, people seen from behind. Not a historical photograph."),
        hotspots: [
          {
            id: "met",
            label: "December 17, 1860",
            x: 28,
            y: 62,
            fact: "The Secession Convention met in the present church on December 17, 1860.",
          },
          {
            id: "adjourned",
            label: "To Charleston",
            x: 74,
            y: 58,
            fact: "Because of reported smallpox in Columbia, the convention adjourned to Charleston.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1859-1865",
        title: "Years from the present church to the fire",
        partLabel: "6 years",
        value: 6,
        unit: "years",
        meant: "What this meant: 1865 comes 6 years after 1859. That is the stretch from the year the present church was built to the year Union troops burned the original church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4017-church.jpg", "Illustration of the 1859 church. Not a historical photograph."),
        nowArt: art("m4017-today.jpg", "Illustration of a church and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of the church the marker says was built in 1859. Not a historical photograph.",
        nowCaption: "Illustration of a church and a marker. Not a photograph of the site today.",
      },
      order(
        [
          { id: "organized", year: "1809", label: "The congregation is organized.", why: "The marker dates the congregation to 1809." },
          { id: "built", year: "1811", label: "The original church is built on the Sumter Street corner.", why: "The marker dates that church to 1811." },
          { id: "convention", year: "December 17, 1860", label: "The Secession Convention meets in the present church.", why: "The marker dates that meeting to December 17, 1860. The present church was built in 1859." },
          { id: "burned", year: "February 17, 1865", label: "Union troops burn the original church.", why: "The marker says they burned it that day because they mistook it for the present church." },
        ],
        ["burned", "organized", "convention", "built"],
      ),
      takeaway([
        "The congregation was organized in 1809. The original church, built in 1811 on the Sumter Street corner, was burned February 17, 1865, by Union troops.",
        "They mistook it for the present church, built in 1859, where the Secession Convention had met on December 17, 1860.",
        "Because of reported smallpox in Columbia, the convention adjourned to Charleston.",
      ]),
    ],
  ),
  lesson(
    "40-18",
    "A physician's house, burned",
    "Gibbes House timeline",
    [
      cited("40-18", "Site of Gibbes House", "front"),
      span("\"4 years\" is 1865 minus 1861, the years the marker prints for Surgeon General of South Carolina."),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "This corner",
        title: "Dr. Robert W. Gibbes",
        partLabel: "the house",
        art: art("m4018-house.jpg", "Illustration of a scholar's house and a library. Not a historical photograph."),
        hotspots: [
          {
            id: "home",
            label: "Dr. Gibbes",
            x: 28,
            y: 50,
            fact: "On this corner stood the home of Dr. Robert W. Gibbes (1809-66), a distinguished physician, scientist, historian, editor, and antiquarian. He was Surgeon General of South Carolina from 1861 to 1865.",
          },
          {
            id: "library",
            label: "The collections",
            x: 74,
            y: 42,
            fact: "The house held his notable library, art treasures, and scientific collections.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fire",
        kicker: "February 17, 1865",
        title: "Burned by Union troops",
        partLabel: "the fire",
        art: art("m4018-fire.jpg", "Illustration of a ruined house and smoke. Not a historical photograph."),
        hotspots: [
          {
            id: "ruins",
            label: "The house",
            x: 28,
            y: 58,
            fact: "Union troops burned the house on February 17, 1865.",
          },
          {
            id: "smoke",
            label: "What was lost",
            x: 70,
            y: 30,
            fact: "The notable library, art treasures, and scientific collections were in the house that burned.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1861-1865",
        title: "Years as Surgeon General",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant: "What this meant: 1865 comes 4 years after 1861. That is the stretch the marker prints for his service as Surgeon General of South Carolina.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4018-house.jpg", "Illustration of the house. Not a historical photograph."),
        nowArt: art("m4018-today.jpg", "Illustration of a marker at an empty corner. Not a photograph of the site today."),
        thenCaption: "Illustration of the house the marker says stood on this corner. Not a historical photograph.",
        nowCaption: "Illustration of a marker at an empty corner. Not a photograph of the site today.",
      },
      order(
        [
          { id: "surgeon", year: "1861", label: "Gibbes is Surgeon General of South Carolina.", why: "The marker dates that office 1861-65." },
          { id: "burned", year: "February 17, 1865", label: "Union troops burn the house and its collections.", why: "The marker dates that fire to February 17, 1865." },
        ],
        ["burned", "surgeon"],
      ),
      takeaway([
        "On this corner stood the home of Dr. Robert W. Gibbes (1809-66), a physician, scientist, historian, editor, and antiquarian.",
        "He was Surgeon General of South Carolina from 1861 to 1865.",
        "Union troops burned the house on February 17, 1865, with his notable library, art treasures, and scientific collections.",
      ]),
    ],
  ),
  lesson(
    "40-20",
    "An academy, then the first high school",
    "Columbia Female Academy timeline",
    [
      cited("40-20", "Site of Columbia Female Academy", "front"),
      span("\"32 years\" is 1915 minus 1883, the last year the first Columbia High School was in use and the year the property was leased."),
    ],
    [
      {
        kind: "scene",
        id: "academy",
        kicker: "About 1820",
        title: "The Columbia Female Academy",
        partLabel: "the academy",
        art: art("m4020-academy.jpg", "Illustration of an academy, students seen from behind. Not a historical photograph."),
        hotspots: [
          {
            id: "authorized",
            label: "1792",
            x: 30,
            y: 46,
            fact: "The legislature authorized the Columbia Female Academy in 1792.",
          },
          {
            id: "here",
            label: "About 1820",
            x: 76,
            y: 64,
            fact: "The academy was located here from about 1820 to 1883.",
          },
        ],
      },
      {
        kind: "scene",
        id: "school",
        kicker: "1883",
        title: "The first Columbia High School",
        partLabel: "the high school",
        art: art("m4020-school.jpg", "Illustration of the building as a high school, students seen from behind. Not a historical photograph."),
        hotspots: [
          {
            id: "lease",
            label: "1883",
            x: 28,
            y: 52,
            fact: "In 1883 this property was leased to the Columbia Public School Commissioners, two of whom still represent the Academy Board.",
          },
          {
            id: "high",
            label: "Until 1915",
            x: 74,
            y: 58,
            fact: "The remodeled academy became the first Columbia High School, in use until 1915.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1883-1915",
        title: "Years as the first Columbia High School",
        partLabel: "32 years",
        value: 32,
        unit: "years",
        meant: "What this meant: 1915 comes 32 years after 1883. That is the stretch from the year the property was leased, when the remodeled academy became the first Columbia High School, to the year that school was in use until. The marker's \"about 1820\" stays about.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4020-academy.jpg", "Illustration of the academy. Not a historical photograph."),
        nowArt: art("m4020-today.jpg", "Illustration of a marker at a street corner. Not a photograph of the site today."),
        thenCaption: "Illustration of the academy the marker says was located here from about 1820. Not a historical photograph.",
        nowCaption: "Illustration of a marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          { id: "authorized", year: "1792", label: "The legislature authorizes the Columbia Female Academy.", why: "The marker dates that authorization to 1792." },
          { id: "located", year: "About 1820", label: "The academy is located here.", why: "The marker says it was located here from about 1820. That \"about\" stays about." },
          { id: "lease", year: "1883", label: "The property is leased, and the remodeled academy becomes the first Columbia High School.", why: "The marker dates that lease to 1883." },
          { id: "until", year: "1915", label: "The first Columbia High School is in use until this year.", why: "The marker says the high school was in use until 1915." },
        ],
        ["lease", "authorized", "until", "located"],
      ),
      takeaway([
        "The legislature authorized the Columbia Female Academy in 1792. It was located here from about 1820 to 1883.",
        "In 1883 the property was leased to the Columbia Public School Commissioners, two of whom still represent the Academy Board.",
        "The remodeled academy became the first Columbia High School and was in use until 1915.",
      ]),
    ],
  ),
];
