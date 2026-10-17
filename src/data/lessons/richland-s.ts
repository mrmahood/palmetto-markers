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

export const richlandLessonsS: MarkerLesson[] = [
  lesson(
    "40-93",
    "The Statue of Liberty Division",
    "77th Inf Division timeline",
    [
      cited("40-93", "77th Inf Division", "front"),
      span(
        '"4 years" is 1946 minus 1942, the years the marker prints for the inactivation after occupying Hokkaido and the reactivation here.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "camp",
        kicker: "1942",
        title: "Reactivated, then reviewed",
        partLabel: "the review",
        art: art(
          "m4093-camp.jpg",
          "Illustration of a training camp and soldiers seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "name",
            label: "Statue of Liberty Division",
            x: 32,
            y: 46,
            fact: 'The "Statue of Liberty Division" was reviewed by England\'s Winston Churchill and President Franklin D. Roosevelt after it was reactivated here in 1942.',
          },
          {
            id: "reactivated",
            label: "1942",
            x: 74,
            y: 58,
            fact: "It was reactivated here in 1942.",
          },
        ],
      },
      {
        kind: "scene",
        id: "troops",
        kicker: "1946",
        title: "Pacific campaigns, then Hokkaido",
        partLabel: "the campaigns",
        art: art(
          "m4093-troops.jpg",
          "Illustration of soldiers seen from behind on a shore and on an island slope. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "campaigns",
            label: "Pacific campaigns",
            x: 32,
            y: 52,
            fact: "The 77th fought in World War II Pacific campaigns of Guam, Leyte, Kerama Retto Islands, and Okinawa. War correspondent Ernie Pyle was killed in action with the 77th.",
          },
          {
            id: "inactivated",
            label: "1946",
            x: 74,
            y: 40,
            fact: "It was inactivated after occupying Hokkaido, Japan, in 1946.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1942-1946",
        title: "Years from reactivation to inactivation",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1946 comes 4 years after 1942. That is the stretch from the year the division was reactivated here to the year it was inactivated after occupying Hokkaido, Japan.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4093-camp.jpg",
          "Illustration of a training camp and soldiers seen from behind. Not a historical photograph.",
        ),
        nowArt: art(
          "m4093-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a training camp, for the place the marker says the division was reactivated in 1942. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a pine road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "reactivated",
            year: "1942",
            label: "The division is reactivated here and reviewed by Churchill and Roosevelt.",
            why: 'The marker says the "Statue of Liberty Division" was reviewed by England\'s Winston Churchill and President Franklin D. Roosevelt after it was reactivated here in 1942.',
          },
          {
            id: "campaigns",
            year: "World War II Pacific campaigns",
            label: "It fights at Guam, Leyte, the Kerama Retto Islands, and Okinawa.",
            why: "The marker says the 77th fought in World War II Pacific campaigns of Guam, Leyte, Kerama Retto Islands, and Okinawa. War correspondent Ernie Pyle was killed in action with the 77th. It prints no separate year for those campaigns.",
          },
          {
            id: "inactivated",
            year: "1946",
            label: "It is inactivated after occupying Hokkaido, Japan.",
            why: "The marker says it was inactivated after occupying Hokkaido, Japan, in 1946.",
          },
        ],
        ["inactivated", "reactivated", "campaigns"],
      ),
      takeaway([
        'The "Statue of Liberty Division" was reviewed by England\'s Winston Churchill and President Franklin D. Roosevelt after it was reactivated here in 1942.',
        "The 77th fought in World War II Pacific campaigns of Guam, Leyte, Kerama Retto Islands, and Okinawa. War correspondent Ernie Pyle was killed in action with the 77th.",
        "It was inactivated after occupying Hokkaido, Japan, in 1946.",
      ]),
    ],
  ),
  lesson(
    "40-94",
    "A flying field, then a flight to Brazil",
    "Paul R. Redfern timeline",
    [
      cited("40-94", "Paul R. Redfern", "front"),
      span(
        '"4 years" is 1927 minus 1923, the years the marker prints for the non-stop flight to Brazil and graduating from old Columbia High School.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "field",
        kicker: "1923",
        title: "An airplane and a flying field",
        partLabel: "the flying field",
        art: art(
          "m4094-field.jpg",
          "Illustration of a flying field and an empty airplane. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "1902",
            x: 32,
            y: 48,
            fact: "Born in 1902, Paul Redfern at an early age showed a marked mechanical aptitude and excitement for aviation.",
          },
          {
            id: "company",
            label: "1923",
            x: 74,
            y: 42,
            fact: "Shortly after graduating from old Columbia High School in 1923, he built his own airplane and established the city's first commercial aviation company and flying field on this site.",
          },
        ],
      },
      {
        kind: "scene",
        id: "plane",
        kicker: "August 25, 1927",
        title: "A non-stop flight to Brazil",
        partLabel: "the flight",
        art: art(
          "m4094-plane.jpg",
          "Illustration of a small airplane over water and a distant coast. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "flight",
            label: "August 25, 1927",
            x: 32,
            y: 44,
            fact: "Later, Redfern attempted a non-stop flight to Brazil, leaving from Brunswick, Georgia, August 25, 1927.",
          },
          {
            id: "missing",
            label: "Never heard from",
            x: 74,
            y: 56,
            fact: "He has never been heard from again.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1923-1927",
        title: "Years from graduation to the Brazil flight",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1927 comes 4 years after 1923. That is the stretch from the year he graduated from old Columbia High School to the year he left Brunswick, Georgia, on a non-stop flight to Brazil.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4094-field.jpg",
          "Illustration of a flying field and an empty airplane. Not a historical photograph.",
        ),
        nowArt: art(
          "m4094-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a flying field, for the field the marker says he established on this site shortly after graduating in 1923. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by an open field. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1902",
            label: "Paul Redfern is born.",
            why: "The marker says he was born in 1902 and at an early age showed a marked mechanical aptitude and excitement for aviation.",
          },
          {
            id: "school",
            year: "1923",
            label: "He graduates, then builds an airplane and opens a flying field on this site.",
            why: "The marker says that shortly after graduating from old Columbia High School in 1923, he built his own airplane and established the city's first commercial aviation company and flying field on this site.",
          },
          {
            id: "flight",
            year: "August 25, 1927",
            label: "He leaves Brunswick, Georgia, on a non-stop flight to Brazil.",
            why: "The marker says he attempted a non-stop flight to Brazil, leaving from Brunswick, Georgia, August 25, 1927, and has never been heard from again.",
          },
        ],
        ["flight", "born", "school"],
      ),
      takeaway([
        "Born in 1902, Paul Redfern at an early age showed a marked mechanical aptitude and excitement for aviation.",
        "Shortly after graduating from old Columbia High School in 1923, he built his own airplane and established the city's first commercial aviation company and flying field on this site.",
        "Later, Redfern attempted a non-stop flight to Brazil, leaving from Brunswick, Georgia, August 25, 1927. He has never been heard from again.",
      ]),
    ],
  ),
  lesson(
    "40-96",
    "Final training for D-Day",
    "4th Infantry Division timeline",
    [
      cited("40-96", "4th Infantry Division", "front"),
      span(
        '"27 years" is 1944 minus 1917, the years the marker prints for the D-Day invasion of Normandy and the organization of the division.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "camp",
        kicker: "1917",
        title: "Organized, then trained at Ft. Jackson",
        partLabel: "the camp",
        art: art(
          "m4096-camp.jpg",
          "Illustration of a training camp and soldiers seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1917",
            x: 32,
            y: 50,
            fact: "Organized in 1917, the 4th Infantry Division was stationed in this area at Ft. Jackson during World War II.",
          },
          {
            id: "training",
            label: "Final training",
            x: 74,
            y: 40,
            fact: "It received its final training here for the June 6, 1944 D-Day invasion of Normandy.",
          },
        ],
      },
      {
        kind: "scene",
        id: "troops",
        kicker: "June 6, 1944",
        title: "One of the first on the beaches",
        partLabel: "the beaches",
        art: art(
          "m4096-troops.jpg",
          "Illustration of soldiers seen from behind at a beach and in a winter wood. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "beaches",
            label: "June 6, 1944",
            x: 32,
            y: 54,
            fact: "The division was one of the first on the beaches.",
          },
          {
            id: "campaigns",
            label: "Other campaigns",
            x: 74,
            y: 42,
            fact: "The 4th was also in other campaigns, including the Siegfried Line, Hurtgen Forest, and Battle of the Bulge.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1917-1944",
        title: "Years from organization to D-Day",
        partLabel: "27 years",
        value: 27,
        unit: "years",
        meant:
          "What this meant: 1944 comes 27 years after 1917. That is the stretch from the year the 4th Infantry Division was organized to the year of the June 6 D-Day invasion of Normandy.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4096-camp.jpg",
          "Illustration of a training camp and soldiers seen from behind. Not a historical photograph.",
        ),
        nowArt: art(
          "m4096-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a training camp, for Ft. Jackson, where the marker says the division received its final training. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a pine road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1917",
            label: "The 4th Infantry Division is organized.",
            why: "The marker says it was organized in 1917.",
          },
          {
            id: "jackson",
            year: "during World War II",
            label: "It is stationed at Ft. Jackson and receives final training here.",
            why: "The marker says it was stationed in this area at Ft. Jackson during World War II and received its final training here for the June 6, 1944 D-Day invasion of Normandy.",
          },
          {
            id: "dday",
            year: "June 6, 1944",
            label: "It is one of the first on the beaches in the invasion of Normandy.",
            why: "The marker says the division was one of the first on the beaches in the June 6, 1944 D-Day invasion of Normandy.",
          },
        ],
        ["dday", "organized", "jackson"],
      ),
      takeaway([
        "Organized in 1917, the 4th Infantry Division was stationed in this area at Ft. Jackson during World War II.",
        "It received its final training here for the June 6, 1944 D-Day invasion of Normandy. The division was one of the first on the beaches.",
        "The 4th was also in other campaigns, including the Siegfried Line, Hurtgen Forest, and Battle of the Bulge.",
      ]),
    ],
  ),
  lesson(
    "40-97",
    "From the cornerstone to the last class",
    "Columbia High School timeline",
    [
      cited("40-97", "Site of Columbia High School", "front"),
      span(
        '"60 years" is 1975 minus 1915, the years the marker prints for the final classes and the laying of the cornerstone.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1915",
        title: "Designed, then a cornerstone",
        partLabel: "the school",
        art: art(
          "m4097-school.jpg",
          "Illustration of an arched school and a gathering seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "design",
            label: "The design",
            x: 32,
            y: 44,
            fact: 'Described as "Collegiate Italian Renaissance" in style, this school was designed by J. Carroll Johnson, of Urquhart and Johnson, in Columbia.',
          },
          {
            id: "cornerstone",
            label: "1915",
            x: 74,
            y: 56,
            fact: "The cornerstone was laid in 1915 with Gov. Richard I. Manning as a featured speaker.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "December 1975",
        title: "Final classes, then a move",
        partLabel: "the last classes",
        art: art(
          "m4097-yard.jpg",
          "Illustration of a schoolyard and students seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "classes",
            label: "December 1975",
            x: 32,
            y: 50,
            fact: "Final classes were held here in December 1975, when Columbia High moved into a new building.",
          },
          {
            id: "end",
            label: "The end",
            x: 74,
            y: 38,
            fact: "Thus came the end of an institution of education and culture that meant so much to so many.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1915-1975",
        title: "Years from the cornerstone to the last classes",
        partLabel: "60 years",
        value: 60,
        unit: "years",
        meant:
          "What this meant: 1975 comes 60 years after 1915. That is the stretch from the year the cornerstone was laid to the year final classes were held here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4097-school.jpg",
          "Illustration of an arched school and a gathering seen from behind. Not a historical photograph.",
        ),
        nowArt: art(
          "m4097-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the school the marker says was designed in the Collegiate Italian Renaissance style, with a cornerstone laid in 1915. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a quiet street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "designed",
            year: "Collegiate Italian Renaissance",
            label: "J. Carroll Johnson designs the school.",
            why: 'The marker describes the style as "Collegiate Italian Renaissance" and says the school was designed by J. Carroll Johnson, of Urquhart and Johnson, in Columbia. It does not print a separate year for the design.',
          },
          {
            id: "cornerstone",
            year: "1915",
            label: "The cornerstone is laid, with Gov. Richard I. Manning as a featured speaker.",
            why: "The marker says the cornerstone was laid in 1915 with Gov. Richard I. Manning as a featured speaker.",
          },
          {
            id: "final",
            year: "December 1975",
            label: "Final classes are held here, and Columbia High moves into a new building.",
            why: "The marker says final classes were held here in December 1975, when Columbia High moved into a new building. Thus came the end of an institution of education and culture that meant so much to so many.",
          },
        ],
        ["final", "designed", "cornerstone"],
      ),
      takeaway([
        'Described as "Collegiate Italian Renaissance" in style, this school was designed by J. Carroll Johnson, of Urquhart and Johnson, in Columbia.',
        "The cornerstone was laid in 1915 with Gov. Richard I. Manning as a featured speaker.",
        "Final classes were held here in December 1975, when Columbia High moved into a new building. Thus came the end of an institution of education and culture that meant so much to so many.",
      ]),
    ],
  ),
];
