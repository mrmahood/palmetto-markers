import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Fort Jackson, a home site, city hall, and a nightclub. Facts are from that marker only.
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

export const richlandLessonsT: MarkerLesson[] = [
  lesson(
    "40-98",
    "The 8th at Ft. Jackson",
    "8th Infantry Division timeline",
    [cited("40-98", "8th Infantry Division", "front")],
    [
      {
        kind: "scene",
        id: "troops",
        kicker: "1918",
        title: "Activated, then inspected",
        partLabel: "the division",
        art: art(
          "m4098-troops.jpg",
          "Illustration of infantry columns seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "activated",
            label: "1918",
            x: 32,
            y: 52,
            fact: "Activated in 1918.",
          },
          {
            id: "inspected",
            label: "World War II",
            x: 74,
            y: 40,
            fact: "Inspected by Gen. Dwight D. Eisenhower and Lt. Gen. George S. Patton during World War II, the 8th landed in France 28 days after D-Day (the invasion of Normandy) and participated in three other campaigns during the war.",
          },
        ],
      },
      {
        kind: "scene",
        id: "camp",
        kicker: "1940",
        title: "This area at Ft. Jackson",
        partLabel: "the camp",
        art: art(
          "m4098-camp.jpg",
          "Illustration of an army camp of tents and barracks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "reactivated",
            label: "1940",
            x: 32,
            y: 48,
            fact: "The division occupied this area at Ft. Jackson after being reactivated in 1940.",
          },
          {
            id: "later",
            label: "1950-54",
            x: 74,
            y: 58,
            fact: "They were also here 1950-54.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "D-Day",
        title: "Days after the invasion of Normandy",
        partLabel: "28 days",
        value: 28,
        unit: "days",
        meant:
          "What this meant: the marker says the 8th landed in France 28 days after D-Day (the invasion of Normandy).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4098-camp.jpg",
          "Illustration of an army camp of tents and barracks. Not a historical photograph.",
        ),
        nowArt: art(
          "m4098-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an army camp, for the area at Ft. Jackson the marker says the division occupied after being reactivated in 1940. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "activated",
            year: "1918",
            label: "The division is activated.",
            why: "The marker says the 8th was activated in 1918.",
          },
          {
            id: "reactivated",
            year: "1940",
            label: "It is reactivated and occupies this area at Ft. Jackson.",
            why: "The marker says the division occupied this area at Ft. Jackson after being reactivated in 1940.",
          },
          {
            id: "later",
            year: "1950-54",
            label: "The division is here again.",
            why: "The marker says they were also here 1950-54.",
          },
        ],
        ["later", "activated", "reactivated"],
      ),
      takeaway([
        "Activated in 1918 and inspected by Gen. Dwight D. Eisenhower and Lt. Gen. George S. Patton during World War II.",
        "The 8th landed in France 28 days after D-Day (the invasion of Normandy) and participated in three other campaigns during the war.",
        "The division occupied this area at Ft. Jackson after being reactivated in 1940; they were also here 1950-54.",
      ]),
    ],
  ),
  lesson(
    "40-99",
    "From postmaster to Shiloh",
    "Gladden Home Site timeline",
    [
      cited("40-99", "Gladden Home Site", "front"),
      span(
        '"15 years" is 1862 minus 1847, the years the marker prints for Gladden assuming command of the Palmetto Regiment and his death at the Battle of Shiloh.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1841-45",
        title: "Postmaster on this home site",
        partLabel: "the house",
        art: art(
          "m4099-house.jpg",
          "Illustration of a mid-nineteenth-century house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lived",
            label: "Before the Civil War",
            x: 32,
            y: 50,
            fact: "States-rights advocate Adley Hogan Gladden, who lived here before the Civil War, served Columbia as postmaster 1841-45.",
          },
          {
            id: "offices",
            label: "1851-52",
            x: 74,
            y: 40,
            fact: "He was later bursar of S. C. College, captain of the Governor's Guard, and intendant of Columbia 1851-52.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1847",
        title: "The Palmetto Regiment and Shiloh",
        partLabel: "the yard",
        art: art(
          "m4099-yard.jpg",
          "Illustration of a house yard and a gate. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "regiment",
            label: "1847",
            x: 32,
            y: 48,
            fact: "In 1847 he assumed command of the Palmetto Regiment during the Mexican War and later rose to the rank of brigadier general during the Civil War.",
          },
          {
            id: "shiloh",
            label: "1862",
            x: 74,
            y: 56,
            fact: "Gladden was killed in Tennessee at the Battle of Shiloh, 1862.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1847-1862",
        title: "Years from command to Shiloh",
        partLabel: "15 years",
        value: 15,
        unit: "years",
        meant:
          "What this meant: 1862 comes 15 years after 1847. That is the stretch from the year he assumed command of the Palmetto Regiment to the year he was killed at the Battle of Shiloh.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4099-house.jpg",
          "Illustration of a mid-nineteenth-century house. Not a historical photograph.",
        ),
        nowArt: art(
          "m4099-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house, for the home the marker says Adley Hogan Gladden lived in before the Civil War. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "postmaster",
            year: "1841",
            label: "He serves Columbia as postmaster.",
            why: "The marker says he served Columbia as postmaster 1841-45.",
          },
          {
            id: "regiment",
            year: "1847",
            label: "He assumes command of the Palmetto Regiment.",
            why: "The marker says in 1847 he assumed command of the Palmetto Regiment during the Mexican War and later rose to the rank of brigadier general during the Civil War.",
          },
          {
            id: "intendant",
            year: "1851",
            label: "He is intendant of Columbia.",
            why: "The marker says he was intendant of Columbia 1851-52.",
          },
          {
            id: "shiloh",
            year: "1862",
            label: "He is killed at the Battle of Shiloh.",
            why: "The marker says Gladden was killed in Tennessee at the Battle of Shiloh, 1862.",
          },
        ],
        ["shiloh", "postmaster", "intendant", "regiment"],
      ),
      takeaway([
        "States-rights advocate Adley Hogan Gladden, who lived here before the Civil War, served Columbia as postmaster 1841-45.",
        "He was later bursar of S. C. College, captain of the Governor's Guard, and intendant of Columbia 1851-52. In 1847 he assumed command of the Palmetto Regiment during the Mexican War and later rose to the rank of brigadier general during the Civil War.",
        "Gladden was killed in Tennessee at the Battle of Shiloh, 1862.",
      ]),
    ],
  ),
  lesson(
    "40-100",
    "A courthouse becomes city hall",
    "City Hall timeline",
    [
      cited("40-100", "City Hall", "front"),
      span(
        '"63 years" is 1937 minus 1874, the years the marker prints for the completion of the building and the year it became Columbia\'s city hall.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "1874",
        title: "Renaissance revival in granite",
        partLabel: "the hall",
        art: art(
          "m40100-hall.jpg",
          "Illustration of a granite civic building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "completed",
            label: "1874",
            x: 32,
            y: 46,
            fact: "Completed in 1874, this superb example of renaissance revival architecture was built of local and Fairfield County granite.",
          },
          {
            id: "mullett",
            label: "Alfred B. Mullett",
            x: 74,
            y: 38,
            fact: "The building was designed by Alfred B. Mullett, supervising architect of the U. S. Treasury Dept. and designer of such buildings as the Old Executive Office Building in Washington.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1937",
        title: "From courthouse to city hall",
        partLabel: "the street",
        art: art(
          "m40100-street.jpg",
          "Illustration of a city street and a stone building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "courthouse",
            label: "U. S. courthouse",
            x: 32,
            y: 50,
            fact: "Originally built as a U. S. courthouse and post office.",
          },
          {
            id: "cityhall",
            label: "1937",
            x: 74,
            y: 42,
            fact: "This building has been Columbia's city hall since 1937.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1874-1937",
        title: "Years from completion to city hall",
        partLabel: "63 years",
        value: 63,
        unit: "years",
        meant:
          "What this meant: 1937 comes 63 years after 1874. That is the stretch from the year the building was completed to the year it became Columbia's city hall.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40100-hall.jpg",
          "Illustration of a granite civic building. Not a historical photograph.",
        ),
        nowArt: art(
          "m40100-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a granite building, for the renaissance revival hall the marker says was completed in 1874. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "designed",
            year: "1874",
            label: "Alfred B. Mullett designs the building.",
            why: "The marker says the building was designed by Alfred B. Mullett, supervising architect of the U. S. Treasury Dept., and completed in 1874.",
          },
          {
            id: "completed",
            year: "1874",
            label: "It is completed as a U. S. courthouse and post office.",
            why: "The marker says it was completed in 1874, built of local and Fairfield County granite, and originally built as a U. S. courthouse and post office.",
          },
          {
            id: "cityhall",
            year: "1937",
            label: "It becomes Columbia's city hall.",
            why: "The marker says this building has been Columbia's city hall since 1937.",
          },
        ],
        ["cityhall", "designed", "completed"],
      ),
      takeaway([
        "Completed in 1874, this superb example of renaissance revival architecture was built of local and Fairfield County granite.",
        "The building was designed by Alfred B. Mullett, supervising architect of the U. S. Treasury Dept. and designer of such buildings as the Old Executive Office Building in Washington.",
        "Originally built as a U. S. courthouse and post office, this building has been Columbia's city hall since 1937.",
      ]),
    ],
  ),
  lesson(
    "40-101",
    "From synagogue to the Big Apple",
    "The Big Apple timeline",
    [
      cited("40-101", "The Big Apple", "front"),
      span(
        '"3 years" is 1910 minus 1907, the years the marker prints for the original building of the House of Peace Synagogue.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "1907-1910",
        title: "The House of Peace Synagogue",
        partLabel: "the hall",
        art: art(
          "m40101-hall.jpg",
          "Illustration of an early brick hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1907-1910",
            x: 32,
            y: 48,
            fact: "Originally built 1907-1910 as the House of Peace Synagogue.",
          },
          {
            id: "south",
            label: "100 yards south",
            x: 74,
            y: 40,
            fact: "The building was located 100 yards south.",
          },
        ],
      },
      {
        kind: "scene",
        id: "dance",
        kicker: "1936",
        title: "A nightclub and a hit song",
        partLabel: "the dance",
        art: art(
          "m40101-dance.jpg",
          "Illustration of dancers and musicians seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sold",
            label: "1936",
            x: 32,
            y: 52,
            fact: "This building was sold in 1936 and shortly thereafter became a black nightclub known as the Big Apple. A dance by this name originated here and soon swept the country.",
          },
          {
            id: "song",
            label: "September 1937",
            x: 74,
            y: 38,
            fact: 'The dance inspired the song, "The Big Apple," which was recorded by Tommy Dorsey\'s orchestra. "The Big Apple" became a best-selling hit in September of 1937.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1907-1910",
        title: "Years spent building the synagogue",
        partLabel: "3 years",
        value: 3,
        unit: "years",
        meant:
          "What this meant: 1910 comes 3 years after 1907. That is the stretch the marker prints for building the House of Peace Synagogue.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40101-hall.jpg",
          "Illustration of an early brick hall. Not a historical photograph.",
        ),
        nowArt: art(
          "m40101-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick hall, for the building the marker says was originally built 1907-1910 as the House of Peace Synagogue. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "synagogue",
            year: "1907-1910",
            label: "The House of Peace Synagogue is built.",
            why: "The marker says the building was originally built 1907-1910 as the House of Peace Synagogue and located 100 yards south.",
          },
          {
            id: "sold",
            year: "1936",
            label: "The building is sold and becomes the Big Apple.",
            why: "The marker says it was sold in 1936 and shortly thereafter became a black nightclub known as the Big Apple. A dance by this name originated here and soon swept the country.",
          },
          {
            id: "hit",
            year: "September 1937",
            label: 'The song "The Big Apple" is a best-selling hit.',
            why: 'The marker says the song, recorded by Tommy Dorsey\'s orchestra, became a best-selling hit in September of 1937.',
          },
        ],
        ["hit", "synagogue", "sold"],
      ),
      takeaway([
        "Originally built 1907-1910 as the House of Peace Synagogue and located 100 yards south.",
        "This building was sold in 1936 and shortly thereafter became a black nightclub known as the Big Apple. A dance by this name originated here and soon swept the country.",
        'The dance inspired the song, "The Big Apple," which was recorded by Tommy Dorsey\'s orchestra. "The Big Apple" became a best-selling hit in September of 1937.',
      ]),
    ],
  ),
];
