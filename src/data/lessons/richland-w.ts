import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Richland markers 40-113, 40-114, 40-115, and 40-117. Facts are from that marker only.
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

export const richlandLessonsW: MarkerLesson[] = [
  lesson(
    "40-113",
    "A two-room school, then Richlex",
    "Richlex School timeline",
    [
      cited("40-113", "Richlex School Site", "front"),
      span(
        '"50 years" is 1968 minus 1918, the years the marker prints for the closing and the building of the school.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1910-1925",
        title: "A philanthropist helps fund a school",
        partLabel: "the school",
        art: art(
          "m40113-school.jpg",
          "Illustration of a two-room schoolhouse and a schoolyard bell. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rosenwald",
            label: "1910-1925",
            x: 32,
            y: 48,
            fact: "Julius Rosenwald, Chicago philanthropist and president of Sears, Roebuck & Co., (1910-1925), helped fund this black school.",
          },
          {
            id: "built",
            label: "Built 1918",
            x: 74,
            y: 42,
            fact: "This black school was built in 1918. The original two-room structure was named in Rosenwald's honor.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "The 1950s",
        title: "Grades 1-12, then a new name",
        partLabel: "the schoolyard",
        art: art(
          "m40113-yard.jpg",
          "Illustration of a schoolyard with benches and a water pump. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grades",
            label: "Grades 1-12",
            x: 32,
            y: 52,
            fact: "The school's curriculum eventually included grades 1-12.",
          },
          {
            id: "richlex",
            label: "The 1950s and 1968",
            x: 74,
            y: 44,
            fact: "It was renamed Richlex in the 1950s, but closed in 1968; Robert Lee Floyd served as principal during this time.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1918-1968",
        title: "Years from the building to the closing",
        partLabel: "50 years",
        value: 50,
        unit: "years",
        meant:
          "What this meant: 1968 comes 50 years after 1918. That is the stretch from the year the school was built to the year it closed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40113-school.jpg",
          "Illustration of a two-room schoolhouse and a schoolyard bell. Not a historical photograph.",
        ),
        nowArt: art(
          "m40113-today.jpg",
          "Illustration of a marker on a rural road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-room schoolhouse, for the black school the marker says was built in 1918. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a rural road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "sears",
            year: "1910",
            label: "Rosenwald is president of Sears, Roebuck & Co.",
            why: "The marker dates his presidency of Sears, Roebuck & Co. to 1910-1925. Julius Rosenwald, a Chicago philanthropist, helped fund this black school.",
          },
          {
            id: "built",
            year: "1918",
            label: "The two-room school is built.",
            why: "The marker says the school was built in 1918. The original two-room structure was named in Rosenwald's honor.",
          },
          {
            id: "renamed",
            year: "The 1950s",
            label: "The school is renamed Richlex.",
            why: "The marker says it was renamed Richlex in the 1950s. Robert Lee Floyd served as principal during this time.",
          },
          {
            id: "closed",
            year: "1968",
            label: "The school closes.",
            why: "The marker says the school closed in 1968.",
          },
        ],
        ["closed", "sears", "renamed", "built"],
      ),
      takeaway([
        "Julius Rosenwald, Chicago philanthropist and president of Sears, Roebuck & Co., (1910-1925), helped fund this black school, built 1918.",
        "The original two-room structure was named in Rosenwald's honor and the school's curriculum eventually included grades 1-12.",
        "It was renamed Richlex in the 1950s, but closed in 1968; Robert Lee Floyd served as principal during this time.",
      ]),
    ],
  ),
  lesson(
    "40-114",
    "Governor at Live Oak",
    "James H. Adams timeline",
    [
      cited("40-114", "James H. Adams", "front"),
      span(
        '"56 years" is 1910 minus 1854, the years the marker prints for the burning of Live Oak and his term as Gov. of S.C.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1854-56",
        title: "A home named Live Oak",
        partLabel: "the house",
        art: art(
          "m40114-house.jpg",
          "Illustration of a house among oak trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "governor",
            label: "1854-56",
            x: 32,
            y: 46,
            fact: "Gov. of S.C. 1854-56.",
          },
          {
            id: "home",
            label: "Live Oak",
            x: 74,
            y: 54,
            fact: "He lived near here in his home named Live Oak.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "ca. 1910",
        title: "Burned, and buried nearby",
        partLabel: "the yard",
        art: art(
          "m40114-yard.jpg",
          "Illustration of a chimney in a yard and a small church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "burned",
            label: "ca. 1910",
            x: 32,
            y: 50,
            fact: "His home named Live Oak burned ca. 1910.",
          },
          {
            id: "buried",
            label: "St. John's Church",
            x: 74,
            y: 42,
            fact: "Adams is buried nearby at St. John's Church.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1854-1910",
        title: "Years from his term to the fire",
        partLabel: "56 years",
        value: 56,
        unit: "years",
        meant:
          "What this meant: 1910 comes 56 years after 1854. That is the stretch from the year his term as Gov. of S.C. began to the year the marker says Live Oak burned.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40114-house.jpg",
          "Illustration of a house among oak trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m40114-today.jpg",
          "Illustration of a marker on a rural road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house among oaks, for the home the marker names Live Oak. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a rural road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "governor",
            year: "1854",
            label: "His term as Gov. of S.C. begins.",
            why: "The marker says he was Gov. of S.C. 1854-56.",
          },
          {
            id: "home",
            year: "1854-56",
            label: "He lives near here at Live Oak.",
            why: "The marker says he lived near here in his home named Live Oak.",
          },
          {
            id: "burned",
            year: "ca. 1910",
            label: "Live Oak burns.",
            why: "The marker says his home named Live Oak burned ca. 1910.",
          },
        ],
        ["burned", "home", "governor"],
      ),
      takeaway([
        "Gov. of S.C. 1854-56, lived near here in his home named Live Oak.",
        "Live Oak burned ca. 1910.",
        "Adams is buried nearby at St. John's Church.",
      ]),
    ],
  ),
  lesson(
    "40-115",
    "A house from the city's first years",
    "Seibels House timeline",
    [
      cited("40-115", "Seibels House", "front and back"),
      span(
        '"10 years" is 1796 minus 1786, the years the marker prints for the date on the basement beam and the founding of the new city.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1786 and 1796",
        title: "Shortly after the city was founded",
        partLabel: "the house",
        art: art(
          "m40115-house.jpg",
          "Illustration of an early house and a separate brick kitchen. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "beam",
            label: "1786 and 1796",
            x: 32,
            y: 46,
            fact: "This house, listed in the National Register of Historic Places and probably built during the last decade of the 18th century, is one of the few remaining houses from this era in Columbia. The date 1796, seen on a hand-hewn basement beam by a local historian about 1935, indicates the house was built shortly after the new city's founding in 1786.",
          },
          {
            id: "taylor",
            label: "Thomas Taylor",
            x: 74,
            y: 56,
            fact: "This house stands on plantation lands of Thomas Taylor, one of Columbia's founding fathers, who is buried two blocks east of here in the old family cemetery. An early separate kitchen built of hand-made brick stands behind the house.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "Prior to 1860",
        title: "In the family until 1984",
        partLabel: "the yard",
        art: art(
          "m40115-yard.jpg",
          "Illustration of a brick kitchen and a well in a yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "seibels",
            label: "Prior to 1860",
            x: 32,
            y: 50,
            fact: "It was purchased prior to 1860 by the Seibels family, pioneers in the insurance field.",
          },
          {
            id: "donated",
            label: "1984",
            x: 74,
            y: 42,
            fact: "It remained in the family until 1984 when Seibels descendant George R. P. Walker donated it to Historic Columbia Foundation.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1786-1796",
        title: "Years from the founding to the beam date",
        partLabel: "10 years",
        value: 10,
        unit: "years",
        meant:
          "What this meant: 1796 comes 10 years after 1786. That is the stretch from the year the new city was founded to the date seen on a hand-hewn basement beam.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40115-house.jpg",
          "Illustration of an early house and a separate brick kitchen. Not a historical photograph.",
        ),
        nowArt: art(
          "m40115-today.jpg",
          "Illustration of a marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early house and a brick kitchen, for the house the marker says was probably built in the last decade of the 18th century. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1786",
            label: "The new city is founded.",
            why: "The marker says the house was built shortly after the new city's founding in 1786. It stands on plantation lands of Thomas Taylor, one of Columbia's founding fathers.",
          },
          {
            id: "beam",
            year: "1796",
            label: "The date 1796 is on a hand-hewn basement beam.",
            why: "The marker says that date, seen by a local historian about 1935, indicates the house was built shortly after 1786. The house was probably built during the last decade of the 18th century.",
          },
          {
            id: "purchased",
            year: "Prior to 1860",
            label: "The Seibels family purchases the house.",
            why: "The marker says it was purchased prior to 1860 by the Seibels family, pioneers in the insurance field.",
          },
          {
            id: "donated",
            year: "1984",
            label: "George R. P. Walker donates the house.",
            why: "The marker says it remained in the family until 1984, when Seibels descendant George R. P. Walker donated it to Historic Columbia Foundation.",
          },
        ],
        ["donated", "founded", "purchased", "beam"],
      ),
      takeaway([
        "This house, listed in the National Register of Historic Places and probably built during the last decade of the 18th century, is one of the few remaining houses from this era in Columbia. The date 1796 on a hand-hewn basement beam, seen about 1935, indicates it was built shortly after the new city's founding in 1786.",
        "It stands on plantation lands of Thomas Taylor, one of Columbia's founding fathers, who is buried two blocks east of here in the old family cemetery. An early separate kitchen built of hand-made brick stands behind the house.",
        "Purchased prior to 1860 by the Seibels family, pioneers in the insurance field, it remained in the family until 1984, when Seibels descendant George R. P. Walker donated it to Historic Columbia Foundation.",
      ]),
    ],
  ),
  lesson(
    "40-117",
    "The Yankee Division trained here",
    "26th Infantry Division timeline",
    [cited("40-117", "26th Inf Division", "front")],
    [
      {
        kind: "scene",
        id: "troops",
        kicker: "January 1941",
        title: "Mobilized, then trained here",
        partLabel: "the troops",
        art: art(
          "m40117-troops.jpg",
          "Illustration of soldiers seen from behind and canvas tents. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "mobilized",
            label: "January 1941",
            x: 32,
            y: 48,
            fact: 'The "Yankee" Division, which saw extensive combat in World War I, was mobilized for active duty in World War II in January 1941.',
          },
          {
            id: "trained",
            label: "1942-43 and 1944",
            x: 74,
            y: 56,
            fact: "It trained here in 1942-43 and again in 1944.",
          },
        ],
      },
      {
        kind: "scene",
        id: "camp",
        kicker: "16 August 1944",
        title: "Left for Europe",
        partLabel: "the camp",
        art: art(
          "m40117-camp.jpg",
          "Illustration of wooden barracks and a drill field. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "left",
            label: "16 August 1944",
            x: 32,
            y: 46,
            fact: "It left 16 August 1944 for Europe.",
          },
          {
            id: "combat",
            label: "210 days",
            x: 74,
            y: 54,
            fact: "As part of 3rd Army the division was credited with 210 days of combat in France, the Ardennes, the Rhineland, and Central Europe, and was particularly distinguished for its role in the Battle of the Bulge.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "With 3rd Army",
        title: "Days of combat",
        partLabel: "210 days",
        value: 210,
        unit: "days",
        meant:
          "What this meant: the marker credits the division, as part of 3rd Army, with 210 days of combat in France, the Ardennes, the Rhineland, and Central Europe.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40117-troops.jpg",
          "Illustration of soldiers seen from behind and canvas tents. Not a historical photograph.",
        ),
        nowArt: art(
          "m40117-today.jpg",
          "Illustration of a marker by a pine field. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of soldiers and tents, for the division the marker says trained here in 1942-43. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a pine field. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "mobilized",
            year: "January 1941",
            label: "The division is mobilized for active duty.",
            why: 'The marker says the "Yankee" Division, which saw extensive combat in World War I, was mobilized for active duty in World War II in January 1941.',
          },
          {
            id: "trained",
            year: "1942-43",
            label: "It trains here.",
            why: "The marker says it trained here in 1942-43.",
          },
          {
            id: "again",
            year: "1944",
            label: "It trains here again.",
            why: "The marker says it trained here again in 1944.",
          },
          {
            id: "left",
            year: "16 August 1944",
            label: "It leaves for Europe.",
            why: "The marker says it left 16 August 1944 for Europe. As part of 3rd Army it was credited with 210 days of combat and was particularly distinguished in the Battle of the Bulge.",
          },
        ],
        ["left", "mobilized", "again", "trained"],
      ),
      takeaway([
        'The "Yankee" Division, which saw extensive combat in World War I, was mobilized for active duty in World War II in January 1941.',
        "It trained here in 1942-43 and again in 1944, leaving 16 August 1944 for Europe.",
        "As part of 3rd Army the division was credited with 210 days of combat in France, the Ardennes, the Rhineland, and Central Europe, and was particularly distinguished for its role in the Battle of the Bulge.",
      ]),
    ],
  ),
];
