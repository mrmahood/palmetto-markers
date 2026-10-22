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

export const darlingtonLessonsW: MarkerLesson[] = [
  lesson(
    "16-93",
    "Members first met in a renovated gas station",
    "South Hartsville Baptist Church timeline",
    [
      cited("16-93", "South Hartsville Baptist Church", "front and back"),
      span("45 years is 1995 minus 1950 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "station",
        kicker: "1950",
        title: "A mission at a roadside intersection",
        partLabel: "the first meeting place",
        art: art(
          "m1693-station.jpg",
          "Illustration of a renovated filling station used as a meeting place. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "mission",
            label: "1950",
            x: 32,
            y: 52,
            fact: "South Hartsville Baptist Church began in 1950 as a mission of First Baptist Church Hartsville (3 mi. N).",
          },
          {
            id: "station",
            label: "Gas station",
            x: 74,
            y: 40,
            fact: "Members first met in a renovated gas station at the nearby S.C. 151 and U.S. 15 intersection.",
          },
        ],
      },
      {
        kind: "scene",
        id: "buildings",
        kicker: "1954",
        title: "An education building, then a sanctuary",
        partLabel: "the church buildings",
        art: art(
          "m1693-sanctuary.jpg",
          "Illustration of a two-story education building beside a sanctuary. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "education",
            label: "1954",
            x: 32,
            y: 48,
            fact: "A two-story education building was constructed in 1954 and for many years also hosted worship services.",
          },
          {
            id: "sanctuary",
            label: "1995",
            x: 74,
            y: 36,
            fact: "The current sanctuary dates to 1995 and was largely built by church members and other volunteers.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1950 to 1995",
        title: "Years from the mission to the sanctuary",
        partLabel: "45 years",
        value: 45,
        unit: "years",
        meant:
          "What this meant: 1995 comes 45 years after 1950. The marker says the church began in 1950 as a mission, and the current sanctuary dates to 1995.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1693-station.jpg",
          "Illustration of a renovated filling station used as a meeting place. Not a historical photograph.",
        ),
        nowArt: art(
          "m1693-today.jpg",
          "Illustration of a quiet church lawn and sanctuary. Not a historical photograph.",
        ),
        thenCaption:
          "An illustration of a renovated filling station, for the place the marker says members first met.",
        nowCaption:
          "An illustration of a quiet church lawn and sanctuary.",
      },
      order(
        [
          {
            id: "mission",
            year: "1950",
            label: "The church begins as a mission.",
            why: "The marker says South Hartsville Baptist Church began in 1950 as a mission of First Baptist Church Hartsville (3 mi. N).",
          },
          {
            id: "organized",
            year: "1951",
            label: "Members organize as a separate church.",
            why: "The marker says they officially organized as a separate church in 1951.",
          },
          {
            id: "pastor",
            year: "1952",
            label: "They call Rev. Lloyd Brunson.",
            why: "The marker says they called their first settled pastor, Rev. Lloyd Brunson, in 1952.",
          },
          {
            id: "education",
            year: "1954",
            label: "A two-story education building is constructed.",
            why: "The marker says a two-story education building was constructed in 1954 and for many years also hosted worship services.",
          },
          {
            id: "parsonage",
            year: "1955",
            label: "A parsonage is built nearby.",
            why: "The marker says a parsonage was built nearby in 1955 and another education building near the back of the property in the 1960s.",
          },
          {
            id: "sanctuary",
            year: "1995",
            label: "The current sanctuary dates to this year.",
            why: "The marker says the current sanctuary dates to 1995 and was largely built by church members and other volunteers.",
          },
        ],
        ["sanctuary", "organized", "education", "mission", "pastor", "parsonage"],
      ),
      takeaway([
        "South Hartsville Baptist Church began in 1950 as a mission of First Baptist Church Hartsville (3 mi. N).",
        "They officially organized as a separate church in 1951 and called their first settled pastor, Rev. Lloyd Brunson, in 1952.",
        "The current sanctuary dates to 1995 and was largely built by church members and other volunteers.",
      ]),
    ],
  ),
];
