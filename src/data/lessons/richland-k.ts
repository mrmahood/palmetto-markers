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

export const richlandLessonsK: MarkerLesson[] = [
  lesson(
    "40-02",
    "A parade ground under occupation",
    "Site of Parade Ground timeline",
    [
      cited("40-02", "Site of Parade Ground", "front"),
      span(
        '"12 years" is 1877 minus 1865, the years the marker prints for the Federal military occupation of South Carolina.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "ground",
        kicker: "1865-1877",
        title: "This square as a parade ground",
        partLabel: "the parade ground",
        art: art(
          "m4002-ground.jpg",
          "Illustration of troops on an open square. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "troops",
            label: "United States troops",
            x: 32,
            y: 56,
            fact: "This square was part of the parade ground used by United States troops.",
          },
          {
            id: "occupation",
            label: "1865-1877",
            x: 74,
            y: 58,
            fact: "During Federal military occupation of South Carolina, 1865-1877.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1865-1877",
        title: "Barracks on this and adjacent squares",
        partLabel: "the barracks",
        art: art(
          "m4002-yard.jpg",
          "Illustration of wooden barracks on adjoining blocks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "here",
            label: "This square",
            x: 32,
            y: 50,
            fact: "The barracks were located on this square.",
          },
          {
            id: "adjacent",
            label: "Adjacent squares",
            x: 74,
            y: 54,
            fact: "The barracks were located on adjacent squares.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1865-1877",
        title: "Years of the occupation the marker prints",
        partLabel: "12 years",
        value: 12,
        unit: "years",
        meant:
          "What this meant: 1877 comes 12 years after 1865. That is the stretch the marker prints for the Federal military occupation of South Carolina, when this square was part of the parade ground used by United States troops.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4002-ground.jpg",
          "Illustration of troops on an open square. Not a historical photograph.",
        ),
        nowArt: art(
          "m4002-today.jpg",
          "Illustration of a blank marker by an open square. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of troops on an open square, for the parade ground the marker says United States troops used during the Federal military occupation of 1865-1877. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker by an open square. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "occupation",
            year: "1865",
            label: "The occupation years the marker prints open.",
            why: "The marker dates the Federal military occupation of South Carolina to 1865-1877.",
          },
          {
            id: "ground",
            year: "1865-1877",
            label: "This square is parade ground, with barracks on this and adjacent squares.",
            why: "The marker says that during that occupation this square was part of the parade ground used by United States troops, and that the barracks were located on this and adjacent squares.",
          },
          {
            id: "ends",
            year: "1877",
            label: "The occupation years the marker prints close.",
            why: "The marker dates the Federal military occupation of South Carolina to 1865-1877.",
          },
        ],
        ["ends", "occupation", "ground"],
      ),
      takeaway([
        "During Federal military occupation of South Carolina, 1865-1877.",
        "This square was part of the parade ground used by United States troops.",
        "The barracks were located on this and adjacent squares.",
      ]),
    ],
  ),
  lesson(
    "40-26",
    "Organized in 1822, chartered in 1834",
    "Entrance to the Columbia Hebrew Benevolent Society timeline",
    [
      cited("40-26", "Entrance to the Columbia Hebrew Benevolent Society", "front"),
      span(
        '"12 years" is 1834 minus 1822, the years the marker prints for the charter and the organization of the society.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "gate",
        kicker: "1822",
        title: "Organized, and still in existence",
        partLabel: "the organization",
        art: art(
          "m4026-gate.jpg",
          "Illustration of a meeting beside an entrance gate. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Organized in 1822",
            x: 32,
            y: 54,
            fact: "The society was organized in 1822.",
          },
          {
            id: "continuous",
            label: "Continuous existence",
            x: 74,
            y: 46,
            fact: "The society has been in continuous existence since its organization in 1822.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1834",
        title: "A charter, and charities for the community",
        partLabel: "the charter and the charities",
        art: art(
          "m4026-yard.jpg",
          "Illustration of a gathering and a basket shared in a yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "chartered",
            label: "Chartered 1834",
            x: 32,
            y: 55,
            fact: "It was chartered 1834.",
          },
          {
            id: "charities",
            label: "The charities",
            x: 74,
            y: 52,
            fact: "Its charities are administered to the needs of the community without regard to creed or race.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1822-1834",
        title: "Years from organization to the charter",
        partLabel: "12 years",
        value: 12,
        unit: "years",
        meant:
          "What this meant: 1834 comes 12 years after 1822. That is the stretch from the year the society was organized to the year it was chartered.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4026-gate.jpg",
          "Illustration of a meeting beside an entrance gate. Not a historical photograph.",
        ),
        nowArt: art(
          "m4026-today.jpg",
          "Illustration of a blank marker by a gate pier. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a meeting beside an entrance gate, for the society the marker says was organized in 1822. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker by a gate pier. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1822",
            label: "The society is organized.",
            why: "The marker says the society has been in continuous existence since its organization in 1822.",
          },
          {
            id: "continuous",
            year: "Since 1822",
            label: "It remains in continuous existence from that organization.",
            why: "The marker says the society has been in continuous existence since its organization in 1822. That continuance starts with the organization. The charter is the later year, 1834.",
          },
          {
            id: "chartered",
            year: "1834",
            label: "It is chartered.",
            why: "The marker says it was chartered in 1834.",
          },
        ],
        ["chartered", "organized", "continuous"],
      ),
      takeaway([
        "The society has been in continuous existence since its organization in 1822.",
        "It was chartered 1834.",
        "Its charities are administered to the needs of the community without regard to creed or race.",
      ]),
    ],
  ),
  lesson(
    "40-54",
    "Colors for the Century Division",
    "100th Inf Division timeline",
    [
      cited("40-54", "100th Inf Division", "front"),
      span(
        '"19 years" is 1961 minus 1942, the years the marker prints for the Berlin crisis and the activation of the division.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "troops",
        kicker: "15 November 1942",
        title: "The colors mark the activation",
        partLabel: "the activation",
        art: art(
          "m4054-troops.jpg",
          "Illustration of an officer receiving a furled color before a formation. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "colors",
            label: "The colors",
            x: 32,
            y: 50,
            fact: "At this site on 15 November 1942, Maj. Gen. W. A. Burress received the 100th Infantry Division colors.",
          },
          {
            id: "century",
            label: "Century Division",
            x: 74,
            y: 54,
            fact: 'Receiving the colors marked the official activation of the "Century Division."',
          },
        ],
      },
      {
        kind: "scene",
        id: "camp",
        kicker: "1961",
        title: "Reorganized, then recalled",
        partLabel: "the Army Reserve",
        art: art(
          "m4054-camp.jpg",
          "Illustration of a tent camp and a column with packs. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "reserve",
            label: "Army Reserve",
            x: 32,
            y: 54,
            fact: "After a distinguished World War II record in southern France and Germany, the 100th was reorganized in the Army Reserve.",
          },
          {
            id: "berlin",
            label: "1961",
            x: 74,
            y: 50,
            fact: "It was the only USAR training division recalled during the 1961 Berlin crisis.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1942-1961",
        title: "Years from activation to the Berlin crisis",
        partLabel: "19 years",
        value: 19,
        unit: "years",
        meant:
          'What this meant: 1961 comes 19 years after 1942. That is the stretch from the year the "Century Division" was activated to the year of the Berlin crisis, when it was the only USAR training division recalled.',
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4054-troops.jpg",
          "Illustration of an officer receiving a furled color before a formation. Not a historical photograph.",
        ),
        nowArt: art(
          "m4054-today.jpg",
          "Illustration of a blank marker by a field and low roofs. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an officer receiving a furled color before a formation, for the 15 November 1942 activation the marker describes. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker by a field and low roofs. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "colors",
            year: "15 November 1942",
            label: "Maj. Gen. W. A. Burress receives the division colors.",
            why: 'The marker says that at this site on 15 November 1942 he received the 100th Infantry Division colors, marking the official activation of the "Century Division."',
          },
          {
            id: "record",
            year: "World War II",
            label: "The division's record is in southern France and Germany.",
            why: "The marker says the 100th had a distinguished World War II record in southern France and Germany.",
          },
          {
            id: "reserve",
            year: "After that record",
            label: "The 100th is reorganized in the Army Reserve.",
            why: "The marker says that after that World War II record, the 100th was reorganized in the Army Reserve.",
          },
          {
            id: "berlin",
            year: "1961",
            label: "It is recalled during the Berlin crisis.",
            why: "The marker says it was the only USAR training division recalled during the 1961 Berlin crisis.",
          },
        ],
        ["berlin", "colors", "reserve", "record"],
      ),
      takeaway([
        'At this site on 15 November 1942, Maj. Gen. W. A. Burress received the 100th Infantry Division colors, marking the official activation of the "Century Division."',
        "After a distinguished World War II record in southern France and Germany, the 100th was reorganized in the Army Reserve.",
        "It was the only USAR training division recalled during the 1961 Berlin crisis.",
      ]),
    ],
  ),
  lesson(
    "40-55",
    "Old Hickory mobilized at Fort Jackson",
    "30th Inf Division timeline",
    [cited("40-55", "30th Inf Division", "front and back")],
    [
      {
        kind: "scene",
        id: "troops",
        kicker: "16 September 1940",
        title: "Mobilized at Fort Jackson",
        partLabel: "the mobilization",
        art: art(
          "m4055-troops.jpg",
          "Illustration of soldiers at a porch and a line forming up. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "guard",
            label: "National Guard",
            x: 32,
            y: 54,
            fact: 'After a brilliant combat record in World War I and 14 years of dedicated National Guard service, the "Old Hickory" Division was mobilized.',
          },
          {
            id: "fort",
            label: "Fort Jackson",
            x: 74,
            y: 52,
            fact: 'The "Old Hickory" Division was mobilized at Fort Jackson, S. C. on 16 September 1940.',
          },
        ],
      },
      {
        kind: "scene",
        id: "camp",
        kicker: "25 Nov. 1945",
        title: "The campaigns, then inactivation",
        partLabel: "the campaigns and the return",
        art: art(
          "m4055-camp.jpg",
          "Illustration of a marching column and soldiers at a fort arch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "campaigns",
            label: "The campaigns",
            x: 32,
            y: 50,
            fact: "During World War II, the 30th Division distinguished itself in combat in the campaigns through Normandy, Northern France, the Ardennes, the Rhineland, and Central Europe.",
          },
          {
            id: "inactivated",
            label: "25 Nov. 1945",
            x: 74,
            y: 48,
            fact: "On 25 Nov. 1945, it was inactivated at Fort Jackson, resuming its National Guard role.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "16 September 1940",
        title: "Years of National Guard service",
        partLabel: "14 years",
        value: 14,
        unit: "years",
        meant:
          'What this meant: the marker counts 14 years of dedicated National Guard service before the "Old Hickory" Division was mobilized at Fort Jackson, S. C. on 16 September 1940.',
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4055-troops.jpg",
          "Illustration of soldiers at a porch and a line forming up. Not a historical photograph.",
        ),
        nowArt: art(
          "m4055-today.jpg",
          "Illustration of a blank marker on a pine road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of soldiers at a porch and a line forming up, for the mobilization the marker dates to 16 September 1940 at Fort Jackson, S. C. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker on a pine road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "earlier",
            year: "World War I",
            label: "A World War I combat record and 14 years of National Guard service.",
            why: 'The marker says that after a brilliant combat record in World War I and 14 years of dedicated National Guard service, the "Old Hickory" Division was mobilized. It does not give a separate year for those 14 years.',
          },
          {
            id: "mobilized",
            year: "16 September 1940",
            label: "Old Hickory is mobilized at Fort Jackson.",
            why: 'The marker says the "Old Hickory" Division was mobilized at Fort Jackson, S. C. on 16 September 1940.',
          },
          {
            id: "campaigns",
            year: "World War II",
            label: "It campaigns through Normandy, Northern France, the Ardennes, the Rhineland, and Central Europe.",
            why: 'The marker says that during World War II the 30th Division distinguished itself in those campaigns. For that record, this "Work Horse of the Western Front" was selected as the outstanding infantry division of the European Theater of Operations and was awarded two Belgian Fourrageres and the French Croix de Guerre with Palm.',
          },
          {
            id: "inactivated",
            year: "25 Nov. 1945",
            label: "It is inactivated at Fort Jackson and resumes its National Guard role.",
            why: "The marker says that on 25 Nov. 1945 it was inactivated at Fort Jackson, resuming its National Guard role.",
          },
        ],
        ["inactivated", "earlier", "campaigns", "mobilized"],
      ),
      takeaway([
        'After a brilliant combat record in World War I and 14 years of dedicated National Guard service, the "Old Hickory" Division was mobilized at Fort Jackson, S. C. on 16 September 1940.',
        "During World War II, the 30th Division distinguished itself in the campaigns through Normandy, Northern France, the Ardennes, the Rhineland, and Central Europe.",
        'For that record, this "Work Horse of the Western Front" was selected as the outstanding infantry division of the European Theater of Operations, awarded two Belgian Fourrageres and the French Croix de Guerre with Palm, and on 25 Nov. 1945 inactivated at Fort Jackson, resuming its National Guard role.',
      ]),
    ],
  ),
];
