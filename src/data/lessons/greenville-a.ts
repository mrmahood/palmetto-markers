import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Greenville sites. Facts are from that marker only.
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

export const greenvilleLessonsA: MarkerLesson[] = [
  lesson(
    "23-01",
    "County courthouse until 1855",
    "The Old Record Building timeline",
    [cited("23-01", "The Old Record Building", "front")],
    [
      {
        kind: "scene",
        id: "building",
        kicker: "1820",
        title: "Erected south of this point",
        partLabel: "the old record building",
        art: art(
          "m2301-building.jpg",
          "Illustration of a classical building with a columned portico. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "erected",
            label: "1820",
            x: 32,
            y: 52,
            fact: '70 feet south of this point was erected, 1820, "the old record building."',
          },
          {
            id: "mills",
            label: "Robert Mills",
            x: 74,
            y: 40,
            fact: "Designed by Robert Mills (1781-1855), famous Charleston architect, designer of the Washington Monument.",
          },
        ],
      },
      {
        kind: "scene",
        id: "portico",
        kicker: "Until 1924",
        title: "Courthouse, then record building",
        partLabel: "courthouse and records",
        art: art(
          "m2301-portico.jpg",
          "Illustration of a columned portico and empty steps. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "courthouse",
            label: "Until 1855",
            x: 32,
            y: 46,
            fact: "This building of classic design was county courthouse until 1855; then record building until removed, 1924.",
          },
          {
            id: "calhoun",
            label: "John C. Calhoun",
            x: 74,
            y: 62,
            fact: "John C. Calhoun spoke from its portico on current issues.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "70 feet",
        title: "Feet south of this point",
        partLabel: "70 feet",
        value: 70,
        unit: "feet",
        meant:
          'What this meant: the marker says that 70 feet south of this point was erected, 1820, "the old record building."',
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2301-building.jpg",
          "Illustration of a classical building with a columned portico. Not a historical photograph.",
        ),
        nowArt: art(
          "m2301-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a classical building with a columned portico, for the old record building the marker says was erected in 1820. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "mills",
            year: "1781",
            label: "Robert Mills (1781-1855) is named as the designer.",
            why: "The marker says the building was designed by Robert Mills (1781-1855), famous Charleston architect, designer of the Washington Monument.",
          },
          {
            id: "erected",
            year: "1820",
            label: "The old record building is erected.",
            why: 'The marker says that 70 feet south of this point was erected, 1820, "the old record building."',
          },
          {
            id: "courthouse",
            year: "1855",
            label: "It is county courthouse until this year.",
            why: "The marker says this building of classic design was county courthouse until 1855.",
          },
          {
            id: "removed",
            year: "1924",
            label: "The record building is removed.",
            why: "The marker says it was then record building until removed, 1924.",
          },
        ],
        ["removed", "mills", "courthouse", "erected"],
      ),
      takeaway([
        '70 feet south of this point was erected, 1820, "the old record building," designed by Robert Mills (1781-1855), famous Charleston architect, designer of the Washington Monument.',
        "This building of classic design was county courthouse until 1855; then record building until removed, 1924.",
        "John C. Calhoun spoke from its portico on current issues.",
      ]),
    ],
  ),
  lesson(
    "23-02",
    "Approved as a cantonment site",
    "Camp Sevier timeline",
    [
      cited("23-02", "Camp Sevier", "front"),
      span(
        '"21 years" is 1798 minus 1777, the years the marker prints for John Sevier as Brig. Gen., U. S. P. A., and as Lieutenant Colonel, N. C. Militia.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "camp",
        kicker: "May 21, 1917",
        title: "Named for John Sevier",
        partLabel: "the name of the camp",
        art: art(
          "m2302-camp.jpg",
          "Illustration of canvas tents and wooden barracks among pines. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sevier",
            label: "1777, 1781, 1798",
            x: 32,
            y: 48,
            fact: "This camp, named in honor of John Sevier, Lieutenant Colonel, N. C. Militia, 1777, Col., 1781, Brig. Gen., U. S. P. A., 1798.",
          },
          {
            id: "approved",
            label: "May 21, 1917",
            x: 74,
            y: 58,
            fact: "This camp was approved as cantonment site May 21, 1917.",
          },
        ],
      },
      {
        kind: "scene",
        id: "field",
        kicker: "1917-1919",
        title: "The 30th, the 81st, and the 20th",
        partLabel: "the divisions",
        art: art(
          "m2302-field.jpg",
          "Illustration of an empty parade ground and low wooden buildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "thirtieth",
            label: "30th Division",
            x: 32,
            y: 44,
            fact: "The 30th Division trained here from August 28, 1917 to May 1, 1918.",
          },
          {
            id: "later",
            label: "81st and 20th",
            x: 74,
            y: 60,
            fact: "The 81st, from May 18, 1918 to July 16, 1918; the 20th, from August 12, 1918 to February 28, 1919.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1777-1798",
        title: "Years from 1777 to 1798",
        partLabel: "21 years",
        value: 21,
        unit: "years",
        meant:
          "What this meant: 1798 comes 21 years after 1777. The marker names John Sevier as Lieutenant Colonel, N. C. Militia, 1777, and as Brig. Gen., U. S. P. A., 1798.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2302-camp.jpg",
          "Illustration of canvas tents and wooden barracks among pines. Not a historical photograph.",
        ),
        nowArt: art(
          "m2302-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of canvas tents and wooden barracks, for the camp the marker says was approved as a cantonment site May 21, 1917. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker among pines. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "approved",
            year: "May 21, 1917",
            label: "The camp is approved as a cantonment site.",
            why: "The marker says this camp was approved as cantonment site May 21, 1917.",
          },
          {
            id: "thirtieth",
            year: "August 28, 1917",
            label: "The 30th Division trains here from this day.",
            why: "The marker says the 30th Division trained here from August 28, 1917 to May 1, 1918.",
          },
          {
            id: "eightyfirst",
            year: "May 18, 1918",
            label: "The 81st trains here from this day.",
            why: "The marker says the 81st, from May 18, 1918 to July 16, 1918.",
          },
          {
            id: "twentieth",
            year: "August 12, 1918",
            label: "The 20th trains here from this day.",
            why: "The marker says the 20th, from August 12, 1918 to February 28, 1919.",
          },
        ],
        ["eightyfirst", "twentieth", "approved", "thirtieth"],
      ),
      takeaway([
        "This camp, named in honor of John Sevier, Lieutenant Colonel, N. C. Militia, 1777, Col., 1781, Brig. Gen., U. S. P. A., 1798, was approved as cantonment site May 21, 1917.",
        "The 30th Division trained here from August 28, 1917 to May 1, 1918.",
        "The 81st, from May 18, 1918 to July 16, 1918; the 20th, from August 12, 1918 to February 28, 1919.",
      ]),
    ],
  ),
  lesson(
    "23-04",
    "Eastern boundary until 1777",
    "Indian Boundary Line timeline",
    [
      cited("23-04", "Indian Boundary Line", "front"),
      span(
        '"18 years" is 1777 minus 1759, the years the marker prints for the treaty of DeWitt\'s Corner and the Cherokee War (1759-61).',
      ),
    ],
    [
      {
        kind: "scene",
        id: "line",
        kicker: "1759-61",
        title: "Between the Cherokee Nation and the Province",
        partLabel: "the eastern boundary",
        art: art(
          "m2304-line.jpg",
          "Illustration of a wooded ridge and a dirt track. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "boundary",
            label: "Eastern boundary",
            x: 32,
            y: 50,
            fact: "This marks the eastern boundary (present Greenville-Spartanburg county line) between the Cherokee Nation and the Province of South Carolina.",
          },
          {
            id: "war",
            label: "1759-61",
            x: 74,
            y: 42,
            fact: "From the end of the Cherokee War (1759-61) until 1777.",
          },
        ],
      },
      {
        kind: "scene",
        id: "river",
        kicker: "1777",
        title: "The treaty of DeWitt's Corner",
        partLabel: "the treaty",
        art: art(
          "m2304-river.jpg",
          "Illustration of a broad river and a wooded bank. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "treaty",
            label: "1777",
            x: 32,
            y: 46,
            fact: "In that year the treaty of DeWitt's Corner extended the western boundary of South Carolina to the Savannah River.",
          },
          {
            id: "river",
            label: "Savannah River",
            x: 74,
            y: 58,
            fact: "The treaty of DeWitt's Corner extended the western boundary of South Carolina to the Savannah River.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1759-1777",
        title: "Years from 1759 to 1777",
        partLabel: "18 years",
        value: 18,
        unit: "years",
        meant:
          "What this meant: 1777 comes 18 years after 1759. The marker names the Cherokee War (1759-61) and says that in 1777 the treaty of DeWitt's Corner extended the western boundary of South Carolina to the Savannah River.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2304-line.jpg",
          "Illustration of a wooded ridge and a dirt track. Not a historical photograph.",
        ),
        nowArt: art(
          "m2304-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooded ridge and a dirt track, for the eastern boundary the marker says ran until 1777. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a wooded road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "war",
            year: "1759-61",
            label: "The Cherokee War (1759-61) ends.",
            why: "The marker says this was the eastern boundary from the end of the Cherokee War (1759-61) until 1777.",
          },
          {
            id: "treaty",
            year: "1777",
            label: "The treaty of DeWitt's Corner.",
            why: "The marker says in that year the treaty of DeWitt's Corner extended the western boundary of South Carolina to the Savannah River.",
          },
          {
            id: "present",
            year: "Present",
            label: "The line is the Greenville-Spartanburg county line.",
            why: "The marker says this eastern boundary is the present Greenville-Spartanburg county line.",
          },
        ],
        ["present", "war", "treaty"],
      ),
      takeaway([
        "This marks the eastern boundary (present Greenville-Spartanburg county line) between the Cherokee Nation and the Province of South Carolina.",
        "From the end of the Cherokee War (1759-61) until 1777.",
        "In that year the treaty of DeWitt's Corner extended the western boundary of South Carolina to the Savannah River.",
      ]),
    ],
  ),
  lesson(
    "23-07",
    "Five signers from Greenville County",
    "Ordinance of Secession timeline",
    [cited("23-07", "Ordinance of Secession", "front")],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "December 20, 1860",
        title: "Dedicated to the five signers",
        partLabel: "the dedication",
        art: art(
          "m2307-hall.jpg",
          "Illustration of an empty columned hall and wooden benches. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "dedicated",
            label: "December 20, 1860",
            x: 32,
            y: 48,
            fact: "Dedicated in reverence and admiration for their courage and integrity to the five signers of the Ordinance of Secession from Greenville County, December 20, 1860.",
          },
          {
            id: "five",
            label: "Five signers",
            x: 74,
            y: 40,
            fact: "The marker names five signers of the Ordinance of Secession from Greenville County.",
          },
        ],
      },
      {
        kind: "scene",
        id: "chairs",
        kicker: "The signers",
        title: "Names and years on the marker",
        partLabel: "the five names",
        art: art(
          "m2307-chairs.jpg",
          "Illustration of five empty wooden chairs in a row. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "campbell",
            label: "Campbell, Duncan, Easley",
            x: 32,
            y: 56,
            fact: "William Hans Campbell, 1823-1901. Perry Emory Duncan, 1800-1867. William King Easley, 1825-1872.",
          },
          {
            id: "furman",
            label: "Furman and Harrison",
            x: 74,
            y: 42,
            fact: "James Clement Furman, 1809-1891. James Perry Harrison, 1813-1871.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "December 20, 1860",
        title: "Signers from Greenville County",
        partLabel: "five signers",
        value: 5,
        unit: "signers",
        meant:
          "What this meant: the marker says it is dedicated to the five signers of the Ordinance of Secession from Greenville County, December 20, 1860.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2307-hall.jpg",
          "Illustration of an empty columned hall and wooden benches. Not a historical photograph.",
        ),
        nowArt: art(
          "m2307-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an empty columned hall, for the dedication the marker makes to five signers on December 20, 1860. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker under oaks. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "duncan",
            year: "1800",
            label: "Perry Emory Duncan, 1800-1867, is named.",
            why: "The marker lists Perry Emory Duncan, 1800-1867, among the five signers of the Ordinance of Secession from Greenville County.",
          },
          {
            id: "furman",
            year: "1809",
            label: "James Clement Furman, 1809-1891, is named.",
            why: "The marker lists James Clement Furman, 1809-1891, among the five signers from Greenville County.",
          },
          {
            id: "harrison",
            year: "1813",
            label: "James Perry Harrison, 1813-1871, is named.",
            why: "The marker lists James Perry Harrison, 1813-1871, among the five signers from Greenville County.",
          },
          {
            id: "secession",
            year: "December 20, 1860",
            label: "The Ordinance of Secession is dated.",
            why: "The marker is dedicated to the five signers of the Ordinance of Secession from Greenville County, December 20, 1860.",
          },
        ],
        ["secession", "furman", "duncan", "harrison"],
      ),
      takeaway([
        "Dedicated in reverence and admiration for their courage and integrity to the five signers of the Ordinance of Secession from Greenville County, December 20, 1860.",
        "William Hans Campbell, 1823-1901. Perry Emory Duncan, 1800-1867. William King Easley, 1825-1872.",
        "James Clement Furman, 1809-1891. James Perry Harrison, 1813-1871.",
      ]),
    ],
  ),
];
