import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Charleston sites. Facts are from that marker only.
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

export const charlestonLessonsI: MarkerLesson[] = [
  lesson(
    "10-41",
    "The oldest community in North Charleston",
    "Liberty Hill timeline",
    [cited("10-41", "Liberty Hill", "front")],
    [
      {
        kind: "scene",
        id: "town",
        kicker: "1871",
        title: "A community for freedmen",
        partLabel: "the community",
        art: art(
          "m1041-town.jpg",
          "Illustration of a small settlement and a wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1871",
            x: 32,
            y: 52,
            fact: "Liberty Hill, established in 1871, is the oldest community in what is now North Charleston.",
          },
          {
            id: "settlement",
            label: "A settlement for freedmen",
            x: 74,
            y: 40,
            fact: "Paul and Harriet Trescot sold land to Ishmael Grant, Aaron Middleton, and Plenty and William Lecque for a settlement for freedmen.",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1864",
        title: "112 acres, then an acre for a church",
        partLabel: "the land",
        art: art(
          "m1041-houses.jpg",
          "Illustration of open land and wooden houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acres",
            label: "1864",
            x: 32,
            y: 46,
            fact: 'In 1864 Paul and Harriet Trescot, "free persons of color" living in Charleston, owned 112 acres here.',
          },
          {
            id: "church",
            label: "An acre",
            x: 74,
            y: 58,
            fact: 'Ishmael Grant, Aaron Middleton, and Plenty and William Lecque donated an acre of the southeast corner to "the African Church," now St. Peter\'s African Methodist Episcopal Church.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1864",
        title: "Acres the Trescots owned here",
        partLabel: "112 acres",
        value: 112,
        unit: "acres",
        meant:
          "What this meant: the marker says that in 1864 Paul and Harriet Trescot owned 112 acres here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1041-town.jpg",
          "Illustration of a small settlement and a wooden church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1041-today.jpg",
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small settlement, for Liberty Hill, which the marker says was established in 1871. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "owned",
            year: "1864",
            label: "Paul and Harriet Trescot own 112 acres here.",
            why: 'The marker says that in 1864 Paul and Harriet Trescot, "free persons of color" living in Charleston, owned 112 acres here.',
          },
          {
            id: "established",
            year: "1871",
            label: "Liberty Hill is established.",
            why: "The marker says Liberty Hill was established in 1871 and is the oldest community in what is now North Charleston.",
          },
        ],
        ["established", "owned"],
      ),
      takeaway([
        "Liberty Hill, established in 1871, is the oldest community in what is now North Charleston.",
        'In 1864 Paul and Harriet Trescot, "free persons of color" living in Charleston, owned 112 acres here. They sold land to Ishmael Grant, Aaron Middleton, and Plenty and William Lecque for a settlement for freedmen.',
        'These men donated an acre of the southeast corner to "the African Church," now St. Peter\'s African Methodist Episcopal Church.',
      ]),
    ],
  ),
  lesson(
    "10-44",
    "The home of Rev. James B. Middleton",
    "The Parsonage timeline",
    [
      cited("10-44", "The Parsonage", "front and back"),
      span(
        '"79 years" is 1918 minus 1839, the years the marker prints for Rev. James B. Middleton.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "Until 1916",
        title: "The Parsonage at 5 Short Court",
        partLabel: "the parsonage",
        art: art(
          "m1044-house.jpg",
          "Illustration of a wooden house on a narrow court. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "parsonage",
            label: "Until 1916",
            x: 32,
            y: 48,
            fact: '"The Parsonage," the home of Rev. James B. Middleton (1839-1918), stood here at 5 Short Court (now President\'s Place) until 1916.',
          },
          {
            id: "taught",
            label: "Taught to read and write",
            x: 74,
            y: 40,
            fact: "Middleton and his siblings, born slaves, were taught to read and write by their father, Rev. James C. Middleton (1790-1889). After the Civil War the elder Middleton, his son Rev. Abram Middleton (1827-1901), and Rev. James B. Middleton organized and served as pastors of many Methodist churches in the lowcountry.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "By 1872",
        title: "A house at 7 Short Court",
        partLabel: "the other house",
        art: art(
          "m1044-yard.jpg",
          "Illustration of a second wooden house and yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "izard",
            label: "By 1872",
            x: 32,
            y: 54,
            fact: "This house, the home of the Frazer and Izard families, was built at 7 Short Court (now President's Place) by 1872. Anna Eliza Izard (1850-1945), niece of Revs. James B. and Abram Middleton, was a graduate of the Avery Normal Institute and taught school here for many years.",
          },
          {
            id: "book",
            label: "1983",
            x: 74,
            y: 42,
            fact: "Mamie Garvin Fields (1888-1987), a Middleton descendant, described life at 5 & 7 Short Court in Lemon Swamp and Other Places (1983).",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1839-1918",
        title: "Years in the dates for Rev. James B. Middleton",
        partLabel: "79 years",
        value: 79,
        unit: "years",
        meant:
          "What this meant: 1918 comes 79 years after 1839. Those are the years the marker prints for Rev. James B. Middleton.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1044-house.jpg",
          "Illustration of a wooden house on a narrow court. Not a historical photograph.",
        ),
        nowArt: art(
          "m1044-today.jpg",
          "Illustration of a marker on a residential court. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden house, for The Parsonage, which the marker says stood at 5 Short Court until 1916. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a residential court. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "jamesb",
            year: "1839",
            label: "The dates printed for Rev. James B. Middleton begin.",
            why: "The marker prints Rev. James B. Middleton (1839-1918) and calls The Parsonage his home.",
          },
          {
            id: "built",
            year: "1872",
            label: "A house is built at 7 Short Court by this year.",
            why: "The marker says this house, the home of the Frazer and Izard families, was built at 7 Short Court (now President's Place) by 1872.",
          },
          {
            id: "until",
            year: "1916",
            label: "The Parsonage has stood at 5 Short Court until this year.",
            why: "The marker says The Parsonage stood here at 5 Short Court (now President's Place) until 1916.",
          },
          {
            id: "book",
            year: "1983",
            label: "Mamie Garvin Fields describes life at 5 & 7 Short Court.",
            why: "The marker says Mamie Garvin Fields (1888-1987), a Middleton descendant, described life at 5 & 7 Short Court in Lemon Swamp and Other Places (1983).",
          },
        ],
        ["book", "jamesb", "until", "built"],
      ),
      takeaway([
        '"The Parsonage," the home of Rev. James B. Middleton (1839-1918), stood here at 5 Short Court (now President\'s Place) until 1916.',
        "Middleton and his siblings, born slaves, were taught to read and write by their father, Rev. James C. Middleton (1790-1889). After the Civil War the elder Middleton, his son Rev. Abram Middleton (1827-1901), and Rev. James B. Middleton organized and served as pastors of many Methodist churches in the lowcountry.",
        "This house, the home of the Frazer and Izard families, was built at 7 Short Court (now President's Place) by 1872. Anna Eliza Izard (1850-1945), niece of Revs. James B. and Abram Middleton, was a graduate of the Avery Normal Institute and taught school here for many years. Mamie Garvin Fields (1888-1987), a Middleton descendant, described life at 5 & 7 Short Court in Lemon Swamp and Other Places (1983).",
      ]),
    ],
  ),
  lesson(
    "10-47",
    "The first public school for black students",
    "Lincolnville School timeline",
    [
      cited("10-47", "Lincolnville School", "front and back"),
      span(
        '"29 years" is 1953 minus 1924, the years the marker prints for Lincolnville School standing here.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1924-1953",
        title: "A frame school on Broad Street",
        partLabel: "the school",
        art: art(
          "m1047-school.jpg",
          "Illustration of a frame schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "stood",
            label: "1924 to 1953",
            x: 32,
            y: 50,
            fact: "Lincolnville School, the first public school for black students in this community, stood here from 1924 to 1953.",
          },
          {
            id: "rosenwald",
            label: "$6,100",
            x: 74,
            y: 38,
            fact: "Built at a cost of $6,100, it was one of more than 5000 schools in the South funded in part by the Julius Rosenwald Foundation between 1917 and 1932.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1953",
        title: "Brick veneer, then desegregation",
        partLabel: "the schoolyard",
        art: art(
          "m1047-yard.jpg",
          "Illustration of a brick-veneer school and yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "teachers",
            label: "Four teachers",
            x: 32,
            y: 46,
            fact: "Four teachers taught grades 1-7 in a frame school with four classrooms and an auditorium, on a four-acre lot on Broad Street.",
          },
          {
            id: "elementary",
            label: "1953 and 1969",
            x: 74,
            y: 56,
            fact: "In 1953 Lincolnville School was covered with brick veneer and expanded to become Lincolnville Elementary School, with four classrooms, a library, and a cafeteria/auditorium. Students attended grades 1-7 there until Charleston County schools were desegregated in 1969.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1924-1953",
        title: "Years the school stood here",
        partLabel: "29 years",
        value: 29,
        unit: "years",
        meant:
          "What this meant: 1953 comes 29 years after 1924. That is the stretch the marker gives for Lincolnville School standing here, from 1924 to 1953.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1047-school.jpg",
          "Illustration of a frame schoolhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m1047-today.jpg",
          "Illustration of a marker by a street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame school, for Lincolnville School, which the marker says stood here from 1924 to 1953. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "rosenwald",
            year: "1917",
            label: "Rosenwald funding of schools in the South includes this year.",
            why: "The marker says the school was one of more than 5000 schools in the South funded in part by the Julius Rosenwald Foundation between 1917 and 1932.",
          },
          {
            id: "stood",
            year: "1924",
            label: "Lincolnville School stands here from this year.",
            why: "The marker says Lincolnville School, the first public school for black students in this community, stood here from 1924 to 1953.",
          },
          {
            id: "brick",
            year: "1953",
            label: "The school is covered with brick veneer and expanded.",
            why: "The marker says that in 1953 it was covered with brick veneer and expanded to become Lincolnville Elementary School. It also says the school stood here from 1924 to 1953.",
          },
          {
            id: "desegregated",
            year: "1969",
            label: "Charleston County schools are desegregated.",
            why: "The marker says students attended grades 1-7 there until Charleston County schools were desegregated in 1969.",
          },
        ],
        ["desegregated", "stood", "rosenwald", "brick"],
      ),
      takeaway([
        "Lincolnville School, the first public school for black students in this community, stood here from 1924 to 1953. Built at a cost of $6,100, it was one of more than 5000 schools in the South funded in part by the Julius Rosenwald Foundation between 1917 and 1932.",
        "Four teachers taught grades 1-7 in a frame school with four classrooms and an auditorium, on a four-acre lot on Broad Street.",
        "In 1953 Lincolnville School was covered with brick veneer and expanded to become Lincolnville Elementary School, with four classrooms, a library, and a cafeteria/auditorium. Students attended grades 1-7 there until Charleston County schools were desegregated in 1969.",
      ]),
    ],
  ),
  lesson(
    "10-48",
    "The largest slave insurrection in British North America",
    "Stono Rebellion timeline",
    [
      cited("10-48", "The Stono Rebellion", "front and back"),
      span(
        '"126 years" is 1865 minus 1739, the years the marker prints for the slave code remaining in force and the start of the rebellion.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "road",
        kicker: "September 9, 1739",
        title: "A raid, then a march south",
        partLabel: "the road",
        art: art(
          "m1048-road.jpg",
          "Illustration of a road, a creek, and figures seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "raid",
            label: "September 9, 1739",
            x: 32,
            y: 48,
            fact: "The Stono Rebellion, the largest slave insurrection in British North America, began nearby on September 9, 1739. About 20 Africans raided a store near Wallace Creek, a branch of the Stono River. Taking guns and other weapons, they killed two shopkeepers.",
          },
          {
            id: "march",
            label: "Toward Spanish Florida",
            x: 74,
            y: 36,
            fact: 'The rebels marched south toward promised freedom in Spanish Florida, waving flags, beating drums, and shouting "Liberty!"',
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "Late that afternoon",
        title: "The march, then the militia",
        partLabel: "the fields",
        art: art(
          "m1048-fields.jpg",
          "Illustration of fields and figures seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "joined",
            label: "15 miles",
            x: 32,
            y: 54,
            fact: "The rebels were joined by 40 to 60 more during their 15-mile march. They killed at least 20 whites, but spared others.",
          },
          {
            id: "ended",
            label: "Until 1865",
            x: 74,
            y: 42,
            fact: "The rebellion ended late that afternoon when the militia caught the rebels, killing at least 34 of them. Most who escaped were captured and executed; any forced to join the rebels were released. The S.C. assembly soon enacted a harsh slave code, in force until 1865.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1739-1865",
        title: "Years from the rebellion to 1865",
        partLabel: "126 years",
        value: 126,
        unit: "years",
        meant:
          "What this meant: 1865 comes 126 years after 1739. Those are the years the marker prints for the start of the rebellion and for the slave code remaining in force.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1048-road.jpg",
          "Illustration of a road, a creek, and figures seen from behind. Not a historical photograph.",
        ),
        nowArt: art(
          "m1048-today.jpg",
          "Illustration of a marker beside a road and fields. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a road and figures seen from behind, for the march the marker says began on September 9, 1739. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a road and fields. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "raid",
            year: "September 9, 1739",
            label: "About 20 Africans raid a store near Wallace Creek.",
            why: "The marker says the Stono Rebellion began nearby on September 9, 1739. About 20 Africans raided a store near Wallace Creek, a branch of the Stono River, took guns and other weapons, and killed two shopkeepers.",
          },
          {
            id: "march",
            year: "September 9, 1739",
            label: "The rebels march south and are joined by 40 to 60 more.",
            why: 'The marker says they marched south toward promised freedom in Spanish Florida, waving flags, beating drums, and shouting "Liberty!" They were joined by 40 to 60 more during their 15-mile march. They killed at least 20 whites, but spared others.',
          },
          {
            id: "afternoon",
            year: "September 9, 1739",
            label: "The militia catches the rebels late that afternoon.",
            why: "The marker says the rebellion ended late that afternoon when the militia caught the rebels, killing at least 34 of them. Most who escaped were captured and executed; any forced to join the rebels were released.",
          },
          {
            id: "code",
            year: "1865",
            label: "A harsh slave code is in force until this year.",
            why: "The marker says the S.C. assembly soon enacted a harsh slave code, in force until 1865.",
          },
        ],
        ["afternoon", "code", "raid", "march"],
      ),
      takeaway([
        "The Stono Rebellion, the largest slave insurrection in British North America, began nearby on September 9, 1739. About 20 Africans raided a store near Wallace Creek, a branch of the Stono River.",
        'Taking guns and other weapons, they killed two shopkeepers. The rebels marched south toward promised freedom in Spanish Florida, waving flags, beating drums, and shouting "Liberty!" They were joined by 40 to 60 more during their 15-mile march.',
        "They killed at least 20 whites, but spared others. The rebellion ended late that afternoon when the militia caught the rebels, killing at least 34 of them. Most who escaped were captured and executed; any forced to join the rebels were released. The S.C. assembly soon enacted a harsh slave code, in force until 1865.",
      ]),
    ],
  ),
];
