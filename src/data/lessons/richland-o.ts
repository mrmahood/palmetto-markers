import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia street names. Facts are from that marker only.
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

export const richlandLessonsO: MarkerLesson[] = [
  lesson(
    "40-71",
    "A public dinner in the new State House",
    "Washington Street timeline",
    [
      cited("40-71", "Washington Street", "front"),
      span(
        '"4 years" is 1791 minus 1787, the years the marker prints for the visit to South Carolina and the Constitutional Convention.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "roles",
        kicker: "1787",
        title: "Commander, president, and convention",
        partLabel: "the name",
        art: art(
          "m4071-command.jpg",
          "Illustration of a field camp and a convention hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "army",
            label: "Continental Army",
            x: 32,
            y: 52,
            fact: "This street is named for George Washington, commander of the Continental Army throughout the Revolution.",
          },
          {
            id: "convention",
            label: "1787",
            x: 74,
            y: 42,
            fact: "He was the first President of the United States and president of the 1787 Constitutional Convention.",
          },
        ],
      },
      {
        kind: "scene",
        id: "visit",
        kicker: "May 22-24, 1791",
        title: "Days in the new capital",
        partLabel: "the visit",
        art: art(
          "m4071-dinner.jpg",
          "Illustration of a town street and a public dinner. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "tour",
            label: "1791",
            x: 31,
            y: 46,
            fact: "Early in his presidency, Washington toured the southern states. He visited South Carolina in 1791.",
          },
          {
            id: "dinner",
            label: "The State House",
            x: 75,
            y: 58,
            fact: "He spent May 22-24 in the new capital city, Columbia, and attended a public dinner in the new State House.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1787-1791",
        title: "Years from the convention to the visit",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1791 comes 4 years after 1787. That is the stretch from the year he was president of the Constitutional Convention to the year he visited South Carolina.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4071-dinner.jpg",
          "Illustration of a town street and a public dinner. Not a historical photograph.",
        ),
        nowArt: art(
          "m4071-today.jpg",
          "Illustration of a marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a public dinner in a state house, for the dinner the marker says he attended in the new State House. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "convention",
            year: "1787",
            label: "He is president of the Constitutional Convention.",
            why: "The marker says he was president of the 1787 Constitutional Convention.",
          },
          {
            id: "visit",
            year: "1791",
            label: "He visits South Carolina.",
            why: "The marker says that early in his presidency he toured the southern states and visited South Carolina in 1791.",
          },
          {
            id: "dinner",
            year: "May 22-24, 1791",
            label: "He spends those days in Columbia and attends a public dinner.",
            why: "The marker says he spent May 22-24 in the new capital city, Columbia, and attended a public dinner in the new State House.",
          },
        ],
        ["dinner", "convention", "visit"],
      ),
      takeaway([
        "This street is named for George Washington, commander of the Continental Army throughout the Revolution, first President of the United States, and president of the 1787 Constitutional Convention.",
        "Early in his presidency, Washington toured the southern states and visited South Carolina in 1791.",
        "He spent May 22-24 in the new capital city, Columbia, and attended a public dinner in the new State House.",
      ]),
    ],
  ),
  lesson(
    "40-74",
    "Probably named for the county",
    "Richland Street timeline",
    [
      cited("40-74", "Richland Street", "front"),
      span(
        '"1 year" is 1786 minus 1785, the years the marker prints for the Columbia plan and the act designating Richland County.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "plan",
        kicker: "1786",
        title: "An original street in the plan",
        partLabel: "the plan",
        art: art(
          "m4074-street.jpg",
          "Illustration of a planned town street and an assembly. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "street",
            label: "1786 plan",
            x: 33,
            y: 50,
            fact: "Richland Street was one of the original streets in the 1786 Columbia plan.",
          },
          {
            id: "county",
            label: "1785",
            x: 73,
            y: 40,
            fact: "It was probably named after Richland County, which had been designated by an act of the General Assembly in 1785.",
          },
        ],
      },
      {
        kind: "scene",
        id: "lots",
        kicker: "November 1786",
        title: "Commissioners' lots and the mansion",
        partLabel: "the lots",
        art: art(
          "m4074-houses.jpg",
          "Illustration of town lots and a mansion. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "commissioners",
            label: "Gillon and Taylor",
            x: 32,
            y: 56,
            fact: "By November 1786, two town commissioners, Alexander Gillon and Thomas Taylor, owned lots on this street.",
          },
          {
            id: "mansion",
            label: "Governor's Mansion",
            x: 74,
            y: 44,
            fact: "The Governor's Mansion is located on Richland Street.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1785-1786",
        title: "Years from the county act to the plan",
        partLabel: "1 year",
        value: 1,
        unit: "years",
        meant:
          "What this meant: 1786 comes 1 year after 1785. That is the stretch from the year an act of the General Assembly designated Richland County to the year of the Columbia plan.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4074-houses.jpg",
          "Illustration of town lots and a mansion. Not a historical photograph.",
        ),
        nowArt: art(
          "m4074-today.jpg",
          "Illustration of a marker on a residential street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a mansion, for the Governor's Mansion the marker says is located on Richland Street. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a residential street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "county",
            year: "1785",
            label: "An act designates Richland County.",
            why: "The marker says Richland County had been designated by an act of the General Assembly in 1785.",
          },
          {
            id: "plan",
            year: "1786",
            label: "Richland Street is one of the original streets in the Columbia plan.",
            why: "The marker calls it one of the original streets in the 1786 Columbia plan.",
          },
          {
            id: "lots",
            year: "November 1786",
            label: "Gillon and Taylor own lots on this street.",
            why: "The marker says that by November 1786, town commissioners Alexander Gillon and Thomas Taylor owned lots on this street.",
          },
        ],
        ["lots", "county", "plan"],
      ),
      takeaway([
        "One of the original streets in the 1786 Columbia plan, Richland Street was probably named after Richland County, designated by an act of the General Assembly in 1785.",
        "By November 1786, two town commissioners, Alexander Gillon and Thomas Taylor, owned lots on this street.",
        "The Governor's Mansion is located on Richland Street.",
      ]),
    ],
  ),
  lesson(
    "40-76",
    "In command when Charleston surrendered",
    "Lincoln Street timeline",
    [
      cited("40-76", "Lincoln Street", "front"),
      span(
        '"2 years" is 1780 minus 1778, the years the marker prints for the surrender of Charleston and Lincoln becoming commander of the Southern Department.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "command",
        kicker: "1778",
        title: "From Saratoga to the Southern Department",
        partLabel: "the command",
        art: art(
          "m4076-command.jpg",
          "Illustration of a campaign field and an army headquarters. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "saratoga",
            label: "Saratoga Campaign",
            x: 30,
            y: 48,
            fact: "This street is named for Gen. Benjamin Lincoln, a division commander in the Saratoga Campaign.",
          },
          {
            id: "southern",
            label: "1778",
            x: 76,
            y: 60,
            fact: "In 1778, he became commander of the Southern Department of the American Army.",
          },
        ],
      },
      {
        kind: "scene",
        id: "later",
        kicker: "1780",
        title: "Surrender, exchange, and Massachusetts",
        partLabel: "the later service",
        art: art(
          "m4076-surrender.jpg",
          "Illustration of a coastal city and a quiet office. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "charleston",
            label: "1780",
            x: 34,
            y: 54,
            fact: "He was in command at Charleston when the city surrendered to the British in 1780. After his exchange, he fought at Yorktown and was present at the British surrender.",
          },
          {
            id: "secretary",
            label: "1781-83",
            x: 72,
            y: 40,
            fact: "He served as Secretary of War (1781-83) and returned to his native Massachusetts, where he died in 1810.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1778-1780",
        title: "Years from southern command to the surrender",
        partLabel: "2 years",
        value: 2,
        unit: "years",
        meant:
          "What this meant: 1780 comes 2 years after 1778. That is the stretch from the year he became commander of the Southern Department to the year Charleston surrendered to the British.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4076-command.jpg",
          "Illustration of a campaign field and an army headquarters. Not a historical photograph.",
        ),
        nowArt: art(
          "m4076-today.jpg",
          "Illustration of a marker beside a road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a campaign field, for the Saratoga Campaign the marker names for Gen. Benjamin Lincoln. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "southern",
            year: "1778",
            label: "He becomes commander of the Southern Department.",
            why: "The marker says that in 1778 he became commander of the Southern Department of the American Army.",
          },
          {
            id: "charleston",
            year: "1780",
            label: "Charleston surrenders while he is in command.",
            why: "The marker says he was in command at Charleston when the city surrendered to the British in 1780.",
          },
          {
            id: "secretary",
            year: "1781-83",
            label: "He serves as Secretary of War.",
            why: "The marker says he served as Secretary of War (1781-83).",
          },
          {
            id: "died",
            year: "1810",
            label: "He dies in his native Massachusetts.",
            why: "The marker says he returned to his native Massachusetts, where he died in 1810.",
          },
        ],
        ["died", "southern", "secretary", "charleston"],
      ),
      takeaway([
        "Gen. Benjamin Lincoln, for whom this street is named, was a division commander in the Saratoga Campaign. In 1778, he became commander of the Southern Department of the American Army.",
        "He was in command at Charleston when the city surrendered to the British in 1780. After his exchange, he fought at Yorktown and was present at the British surrender.",
        "He served as Secretary of War (1781-83) and returned to his native Massachusetts, where he died in 1810.",
      ]),
    ],
  ),
  lesson(
    "40-77",
    "Named for the upper house",
    "Senate Street timeline",
    [
      cited("40-77", "Senate Street", "front"),
      span(
        '"4 years" is 1790 minus 1786, the years the marker prints for the first meeting in Columbia and the creation of the capital.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "capital",
        kicker: "1786",
        title: "A capital, and a street for the upper house",
        partLabel: "the capital",
        art: art(
          "m4077-street.jpg",
          "Illustration of a new capital town and an upper house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "created",
            label: "1786",
            x: 32,
            y: 44,
            fact: "The South Carolina General Assembly created Columbia as the state's capital city in 1786.",
          },
          {
            id: "named",
            label: "The upper house",
            x: 75,
            y: 62,
            fact: "Senate Street was named for the upper house of that legislative body.",
          },
        ],
      },
      {
        kind: "scene",
        id: "meeting",
        kicker: "1790",
        title: "The first meeting in the new State House",
        partLabel: "the meeting",
        art: art(
          "m4077-statehouse.jpg",
          "Illustration of a river ferry and a state house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "ferry",
            label: "Congaree River",
            x: 33,
            y: 58,
            fact: "The General Assembly designated that the town be located on the Congaree River near Friday's Ferry.",
          },
          {
            id: "hoban",
            label: "1790",
            x: 73,
            y: 40,
            fact: "In 1790 it first met in Columbia in the new State House, designed by James Hoban, who later designed the White House.",
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
          "What this meant: 1790 comes 4 years after 1786. That is the stretch from the year the General Assembly created Columbia as the capital to the year it first met in Columbia.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4077-statehouse.jpg",
          "Illustration of a river ferry and a state house. Not a historical photograph.",
        ),
        nowArt: art(
          "m4077-today.jpg",
          "Illustration of a marker near a public building. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a state house, for the new State House where the marker says the General Assembly first met in 1790. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker near a public building. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "created",
            year: "1786",
            label: "The General Assembly creates Columbia as the state's capital city.",
            why: "The marker says the South Carolina General Assembly created Columbia as the state's capital city in 1786, and that Senate Street was named for the upper house of that legislative body.",
          },
          {
            id: "met",
            year: "1790",
            label: "The General Assembly first meets in Columbia in the new State House.",
            why: "The marker says that in 1790 the General Assembly first met in Columbia in the new State House, designed by James Hoban. It also says that assembly designated the town on the Congaree River near Friday's Ferry.",
          },
          {
            id: "whitehouse",
            year: "Later",
            label: "James Hoban designs the White House.",
            why: "The marker says James Hoban, who designed the new State House, later designed the White House.",
          },
        ],
        ["whitehouse", "created", "met"],
      ),
      takeaway([
        "The South Carolina General Assembly created Columbia as the state's capital city in 1786, and Senate Street was named for the upper house of that legislative body.",
        "The General Assembly designated that the town be located on the Congaree River near Friday's Ferry.",
        "In 1790 it first met in Columbia in the new State House, designed by James Hoban, who later designed the White House.",
      ]),
    ],
  ),
];
