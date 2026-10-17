import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** A division, Spring Hill, and two churches. Facts are from that marker only.
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

export const richlandLessonsX: MarkerLesson[] = [
  lesson(
    "40-119",
    "The Dixie Division, created in 1917",
    "31st Inf Division timeline",
    [
      cited("40-119", "31st Inf Division", "front"),
      span(
        '"27 years" is 1944 minus 1917, the years the marker prints for combat in the Philippines and the creation of the division.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "troops",
        kicker: "1917",
        title: "Created, then trained",
        partLabel: "the division",
        art: art(
          "m40119-troops.jpg",
          "Illustration of soldiers seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "created",
            label: "Created in 1917",
            x: 32,
            y: 52,
            fact: 'The "Dixie" Division was created in 1917.',
          },
          {
            id: "philippines",
            label: "Philippines, 1944-45",
            x: 74,
            y: 42,
            fact: "It spent most of World War II as a training division, with some units training at Ft. Jackson, but later saw combat in the Philippines 1944-45.",
          },
        ],
      },
      {
        kind: "scene",
        id: "camp",
        kicker: "1951",
        title: "Mobilized and serving here",
        partLabel: "the camp",
        art: art(
          "m40119-camp.jpg",
          "Illustration of a training camp. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "guard",
            label: "Alabama and Mississippi",
            x: 32,
            y: 48,
            fact: 'The postwar "Dixie" Division was composed of National Guard units from Alabama and Mississippi.',
          },
          {
            id: "mobilized",
            label: "Mobilized in 1951",
            x: 74,
            y: 40,
            fact: "It was mobilized for active service in 1951 and served here as a training division during the Korean War.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1917-1944",
        title: "Years from creation to combat in the Philippines",
        partLabel: "27 years",
        value: 27,
        unit: "years",
        meant:
          'What this meant: 1944 comes 27 years after 1917. That is the stretch from the year the "Dixie" Division was created to 1944, the first year the marker prints for combat in the Philippines.',
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40119-camp.jpg",
          "Illustration of a training camp. Not a historical photograph.",
        ),
        nowArt: art(
          "m40119-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a training camp, for the training at Ft. Jackson and the postwar division the marker says served here. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "created",
            year: "1917",
            label: 'The "Dixie" Division is created.',
            why: 'The marker says the "Dixie" Division was created in 1917.',
          },
          {
            id: "philippines",
            year: "1944-45",
            label: "The division sees combat in the Philippines.",
            why: "The marker says it spent most of World War II as a training division, with some units training at Ft. Jackson, but later saw combat in the Philippines 1944-45.",
          },
          {
            id: "mobilized",
            year: "1951",
            label: "The postwar division is mobilized and serves here.",
            why: 'The marker says the postwar "Dixie" Division, composed of National Guard units from Alabama and Mississippi, was mobilized for active service in 1951 and served here as a training division during the Korean War.',
          },
        ],
        ["mobilized", "created", "philippines"],
      ),
      takeaway([
        'The "Dixie" Division, created in 1917, spent most of World War II as a training division, with some units training at Ft. Jackson.',
        "It later saw combat in the Philippines 1944-45.",
        'The postwar "Dixie" Division, composed of National Guard units from Alabama and Mississippi, was mobilized for active service in 1951 and served here as a training division during the Korean War.',
      ]),
    ],
  ),
  lesson(
    "40-120",
    "Named for the springs by 1791",
    "Spring Hill timeline",
    [
      cited("40-120", "Spring Hill", "front"),
      span(
        '"98 years" is 1889 minus 1791, the years the marker prints for the incorporation of the town and the naming of the community.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hill",
        kicker: "By 1791",
        title: "Springs at the foot of Stone Hill",
        partLabel: "the hill",
        art: art(
          "m40120-hill.jpg",
          "Illustration of a stone hill and springs. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "Named by 1791",
            x: 32,
            y: 50,
            fact: "This community was named by 1791 for the springs at the foot of the Stone Hill.",
          },
          {
            id: "before",
            label: "Before the Civil War",
            x: 74,
            y: 42,
            fact: "It included Eleazer's Tavern, a post office, schools, grist mills, and Spring Hill Baptist Church before the Civil War.",
          },
        ],
      },
      {
        kind: "scene",
        id: "house",
        kicker: "February 1865",
        title: "Homes burned, then a town",
        partLabel: "the homes",
        art: art(
          "m40120-house.jpg",
          "Illustration of houses, one of them burned. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "burned",
            label: "February 1865",
            x: 32,
            y: 54,
            fact: "In February 1865, as the war ended in S.C., Federal troops camped nearby looted and burned several homes.",
          },
          {
            id: "town",
            label: "1873 and 1889",
            x: 74,
            y: 40,
            fact: "Mt. Olivet Lutheran Church was founded in 1873; the town was incorporated in 1889.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1791-1889",
        title: "Years from the name to the town",
        partLabel: "98 years",
        value: 98,
        unit: "years",
        meant:
          "What this meant: 1889 comes 98 years after 1791. That is the stretch from the year the community was named to the year the town was incorporated.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40120-hill.jpg",
          "Illustration of a stone hill and springs. Not a historical photograph.",
        ),
        nowArt: art(
          "m40120-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a stone hill and springs, for the springs the marker says the community was named for by 1791. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "named",
            year: "1791",
            label: "The community is named for the springs.",
            why: "The marker says this community was named by 1791 for the springs at the foot of the Stone Hill.",
          },
          {
            id: "burned",
            year: "February 1865",
            label: "Federal troops loot and burn several homes.",
            why: "The marker says that in February 1865, as the war ended in S.C., Federal troops camped nearby looted and burned several homes.",
          },
          {
            id: "olivet",
            year: "1873",
            label: "Mt. Olivet Lutheran Church is founded.",
            why: "The marker says Mt. Olivet Lutheran Church was founded in 1873.",
          },
          {
            id: "incorporated",
            year: "1889",
            label: "The town is incorporated.",
            why: "The marker says the town was incorporated in 1889.",
          },
        ],
        ["incorporated", "named", "olivet", "burned"],
      ),
      takeaway([
        "This community, named by 1791 for the springs at the foot of the Stone Hill, included Eleazer's Tavern, a post office, schools, grist mills, and Spring Hill Baptist Church before the Civil War.",
        "In February 1865, as the war ended in S.C., Federal troops camped nearby looted and burned several homes.",
        "Mt. Olivet Lutheran Church was founded in 1873; the town was incorporated in 1889.",
      ]),
    ],
  ),
  lesson(
    "40-121",
    "Organized by 1835 in a brush arbor",
    "St. Phillip timeline",
    [
      cited("40-121", "St. Phillip A.M.E. Church", "front"),
      span(
        '"29 years" is 1981 minus 1952, the years the marker prints for the burning of a later sanctuary and the building of that sanctuary.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "arbor",
        kicker: "By 1835",
        title: "A brush arbor north of here",
        partLabel: "the arbor",
        art: art(
          "m40121-yard.jpg",
          "Illustration of a brush arbor and a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Organized by 1835",
            x: 32,
            y: 52,
            fact: "This church, organized by 1835, met first in a brush arbor 1 ½ mi. N.",
          },
          {
            id: "trustees",
            label: "Pastor and trustees",
            x: 74,
            y: 42,
            fact: "Its first pastor was Rev. Anderson Burns, and its original trustees were Joseph and Robert Collins, Barnes Flowers, Saylor Pope, Harkness Smith, and Red Stroy.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1952 and 1981",
        title: "Sanctuaries on this site",
        partLabel: "the sanctuary",
        art: art(
          "m40121-church.jpg",
          "Illustration of a church sanctuary and a burned church frame. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "site",
            label: "A sanctuary here",
            x: 32,
            y: 48,
            fact: "It then constructed a sanctuary on this site shortly thereafter.",
          },
          {
            id: "later",
            label: "1952 and 1981",
            x: 74,
            y: 40,
            fact: "A later sanctuary, built in 1952, burned in 1981; the present sanctuary was dedicated that year.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1952-1981",
        title: "Years from the later sanctuary to the fire",
        partLabel: "29 years",
        value: 29,
        unit: "years",
        meant:
          "What this meant: 1981 comes 29 years after 1952. That is the stretch from the year a later sanctuary was built to the year it burned and the present sanctuary was dedicated.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40121-church.jpg",
          "Illustration of a church sanctuary and a burned church frame. Not a historical photograph.",
        ),
        nowArt: art(
          "m40121-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a church sanctuary, for the sanctuary the marker says was constructed on this site. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1835",
            label: "The church is organized and meets in a brush arbor.",
            why: "The marker says the church was organized by 1835, met first in a brush arbor 1 ½ mi. N., then constructed a sanctuary on this site shortly thereafter. Its first pastor was Rev. Anderson Burns.",
          },
          {
            id: "built",
            year: "1952",
            label: "A later sanctuary is built.",
            why: "The marker says a later sanctuary was built in 1952.",
          },
          {
            id: "dedicated",
            year: "1981",
            label: "That sanctuary burns, and the present one is dedicated.",
            why: "The marker says the later sanctuary burned in 1981 and the present sanctuary was dedicated that year.",
          },
        ],
        ["dedicated", "organized", "built"],
      ),
      takeaway([
        "This church, organized by 1835, met first in a brush arbor 1 ½ mi. N., then constructed a sanctuary on this site shortly thereafter.",
        "Its first pastor was Rev. Anderson Burns, and its original trustees were Joseph and Robert Collins, Barnes Flowers, Saylor Pope, Harkness Smith, and Red Stroy.",
        "A later sanctuary, built in 1952, burned in 1981; the present sanctuary was dedicated that year.",
      ]),
    ],
  ),
  lesson(
    "40-123",
    "Organized in rural Richland District",
    "Bethel Methodist timeline",
    [
      cited("40-123", "Bethel Methodist Church", "front"),
      span(
        '"16 years" is 1964 minus 1948, the years the marker prints for the present church and the first brick sanctuary.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "yard",
        kicker: "1835",
        title: "A cemetery and a forest fire",
        partLabel: "the churchyard",
        art: art(
          "m40123-yard.jpg",
          "Illustration of a cemetery and a forest. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "cemetery",
            label: "As early as 1862",
            x: 32,
            y: 54,
            fact: "This church was organized in 1835 in what was then rural Richland District. The cemetery dates from as early as 1862.",
          },
          {
            id: "fire",
            label: "Forest fire, 1867",
            x: 74,
            y: 42,
            fact: "The first sanctuary here, built soon afterwards, burned in a forest fire in 1867.",
          },
        ],
      },
      {
        kind: "scene",
        id: "church",
        kicker: "1868",
        title: "Rebuilt, then built in brick",
        partLabel: "the sanctuaries",
        art: art(
          "m40123-church.jpg",
          "Illustration of a church and a brick church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "second",
            label: "1868",
            x: 32,
            y: 50,
            fact: "The second sanctuary, built in 1868, was remodeled about 1890.",
          },
          {
            id: "brick",
            label: "1948 and 1964",
            x: 74,
            y: 40,
            fact: "As Forest Acres grew after World War II, the church expanded and built its first brick sanctuary in 1948; the present church was built in 1964.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1948-1964",
        title: "Years from the brick sanctuary to the present church",
        partLabel: "16 years",
        value: 16,
        unit: "years",
        meant:
          "What this meant: 1964 comes 16 years after 1948. That is the stretch from the year the first brick sanctuary was built to the year the present church was built.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40123-church.jpg",
          "Illustration of a church and a brick church. Not a historical photograph.",
        ),
        nowArt: art(
          "m40123-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a church and a brick church, for the sanctuaries the marker describes, including the first brick sanctuary of 1948. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1835",
            label: "The church is organized in rural Richland District.",
            why: "The marker says this church was organized in 1835 in what was then rural Richland District.",
          },
          {
            id: "burned",
            year: "1867",
            label: "The first sanctuary burns in a forest fire.",
            why: "The marker says the first sanctuary here, built soon afterwards, burned in a forest fire in 1867. The cemetery dates from as early as 1862.",
          },
          {
            id: "brick",
            year: "1948",
            label: "The first brick sanctuary is built.",
            why: "The marker says the second sanctuary was built in 1868 and remodeled about 1890. As Forest Acres grew after World War II, the church expanded and built its first brick sanctuary in 1948.",
          },
          {
            id: "present",
            year: "1964",
            label: "The present church is built.",
            why: "The marker says the present church was built in 1964.",
          },
        ],
        ["present", "organized", "brick", "burned"],
      ),
      takeaway([
        "This church was organized in 1835 in what was then rural Richland District. The first sanctuary here, built soon afterwards, burned in a forest fire in 1867; the cemetery dates from as early as 1862.",
        "The second sanctuary, built in 1868, was remodeled about 1890.",
        "As Forest Acres grew after World War II, the church expanded and built its first brick sanctuary in 1948; the present church was built in 1964.",
      ]),
    ],
  ),
];
