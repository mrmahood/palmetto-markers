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

export const richlandLessonsAN: MarkerLesson[] = [
  lesson(
    "40-204",
    "A state-wide teachers' association",
    "Palmetto Education Association timeline",
    [
      cited("40-204", "Palmetto Education Association", "front and back"),
      span(
        '"35 years" is 1953 minus 1918, the years the marker prints for the association being known as the Palmetto State Teachers Association.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "1900",
        title: "Founded, then a house at this site",
        partLabel: "the headquarters",
        art: art(
          "m40204-hall.jpg",
          "Illustration of a plain headquarters house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Founded in 1900",
            x: 32,
            y: 48,
            fact: "Founded in 1900 as the S.C. State Teachers Association, and known from 1918-1953 as the Palmetto State Teachers Association, the Palmetto Education Association (PEA) was a state-wide professional association for African American teachers and public school employees.",
          },
          {
            id: "house",
            label: "A house in 1947",
            x: 74,
            y: 40,
            fact: "In 1947 the PEA purchased a house at this site to serve as their first permanent headquarters. The building was razed in 1957 and a new headquarters was built here.",
          },
        ],
      },
      {
        kind: "scene",
        id: "meeting",
        kicker: "1968",
        title: "Salaries, schools, and a merger",
        partLabel: "the meeting",
        art: art(
          "m40204-meeting.jpg",
          "Illustration of an empty meeting room. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "pressured",
            label: "Equitable salaries",
            x: 32,
            y: 52,
            fact: "The Palmetto Education Association pressured for equitable salaries, working conditions, and professional development for African American teachers. They also worked to improve schools and curricula for African American students.",
          },
          {
            id: "merged",
            label: "Merged in 1968",
            x: 74,
            y: 42,
            fact: "In 1968 the PEA merged with the formerly all-white S.C. Education Association and moved from this location. The building that stands here today was PEA headquarters from 1957-68.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1918-1953",
        title: "Years known by that name",
        partLabel: "35 years",
        value: 35,
        unit: "years",
        meant:
          "What this meant: 1953 comes 35 years after 1918. The marker says the association was known from 1918-1953 as the Palmetto State Teachers Association.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40204-hall.jpg",
          "Illustration of a plain headquarters house. Not a historical photograph.",
        ),
        nowArt: art(
          "m40204-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plain headquarters house, for the house the marker says the PEA purchased at this site in 1947. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1900",
            label: "It is founded as the S.C. State Teachers Association.",
            why: "The marker says it was founded in 1900 as the S.C. State Teachers Association.",
          },
          {
            id: "named",
            year: "1918",
            label: "It is known as the Palmetto State Teachers Association.",
            why: "The marker says it was known from 1918-1953 as the Palmetto State Teachers Association.",
          },
          {
            id: "house",
            year: "1947",
            label: "The PEA purchases a house at this site.",
            why: "The marker says in 1947 the PEA purchased a house at this site to serve as their first permanent headquarters. The building was razed in 1957 and a new headquarters was built here.",
          },
          {
            id: "merged",
            year: "1968",
            label: "The PEA merges and moves from this location.",
            why: "The marker says in 1968 the PEA merged with the formerly all-white S.C. Education Association and moved from this location. The building that stands here today was PEA headquarters from 1957-68.",
          },
        ],
        ["merged", "founded", "house", "named"],
      ),
      takeaway([
        "Founded in 1900 as the S.C. State Teachers Association, and known from 1918-1953 as the Palmetto State Teachers Association, the Palmetto Education Association (PEA) was a state-wide professional association for African American teachers and public school employees.",
        "In 1947 the PEA purchased a house at this site to serve as their first permanent headquarters. The building was razed in 1957 and a new headquarters was built here. The building that stands here today was PEA headquarters from 1957-68.",
        "The Palmetto Education Association pressured for equitable salaries, working conditions, and professional development for African American teachers. They also worked to improve schools and curricula for African American students. In 1968 the PEA merged with the formerly all-white S.C. Education Association and moved from this location.",
      ]),
    ],
  ),
  lesson(
    "40-205",
    "Public housing named Gonzales Gardens",
    "Gonzales Gardens timeline",
    [cited("40-205", "Gonzales Gardens", "front and back")],
    [
      {
        kind: "scene",
        id: "homes",
        kicker: "September 1940",
        title: "Opened and designed",
        partLabel: "the homes",
        art: art(
          "m40205-homes.jpg",
          "Illustration of low apartment buildings around a court. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "Opened in 1940",
            x: 32,
            y: 46,
            fact: "Opened in September 1940, Gonzales Gardens was named for N.G., Ambrose, and William Gonzales, founders of The State newspaper and early public housing advocates.",
          },
          {
            id: "designed",
            label: "18 acres, 24 structures",
            x: 74,
            y: 56,
            fact: "James B. Urquhart designed the 18-acre complex, which included an administrative building and 24 residential structures.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1942",
        title: "More units, then a razing",
        partLabel: "the play yard",
        art: art(
          "m40205-yard.jpg",
          "Illustration of an open play yard and a small preschool. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "units",
            label: "280 housing units",
            x: 32,
            y: 50,
            fact: "Six apartment buildings were added in 1942, bringing the total number of housing units to 280. A preschool and open play areas were part of the original design.",
          },
          {
            id: "authority",
            label: "1934 to 2017",
            x: 74,
            y: 40,
            fact: "The project was overseen by the Columbia Housing Authority, created in 1934, and planning was initiated by the New Deal-era Public Works Administration (PWA). The goal was to provide affordable housing to low-income residents. Gonzales Gardens was originally racially segregated for whites only. Nearby Allen-Benedict Court was designated for African American residents. Both were integrated in the 1970s. Gonzales Gardens was razed in 2017.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1942",
        title: "Housing units after the addition",
        partLabel: "280 housing units",
        value: 280,
        unit: "housing units",
        meant:
          "What this meant: the marker says six apartment buildings were added in 1942, bringing the total number of housing units to 280.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40205-homes.jpg",
          "Illustration of low apartment buildings around a court. Not a historical photograph.",
        ),
        nowArt: art(
          "m40205-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of low apartment buildings around a court, for the complex the marker says opened in September 1940. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "authority",
            year: "1934",
            label: "The Columbia Housing Authority is created.",
            why: "The marker says the project was overseen by the Columbia Housing Authority, created in 1934, and planning was initiated by the New Deal-era Public Works Administration (PWA).",
          },
          {
            id: "opened",
            year: "September 1940",
            label: "Gonzales Gardens opens.",
            why: "The marker says Gonzales Gardens opened in September 1940 and was named for N.G., Ambrose, and William Gonzales.",
          },
          {
            id: "added",
            year: "1942",
            label: "Six apartment buildings are added.",
            why: "The marker says six apartment buildings were added in 1942, bringing the total number of housing units to 280.",
          },
          {
            id: "razed",
            year: "2017",
            label: "Gonzales Gardens is razed.",
            why: "The marker says Gonzales Gardens was razed in 2017. Both it and nearby Allen-Benedict Court were integrated in the 1970s.",
          },
        ],
        ["added", "authority", "razed", "opened"],
      ),
      takeaway([
        "Opened in September 1940, Gonzales Gardens was named for N.G., Ambrose, and William Gonzales, founders of The State newspaper and early public housing advocates. James B. Urquhart designed the 18-acre complex, which included an administrative building and 24 residential structures.",
        "Six apartment buildings were added in 1942, bringing the total number of housing units to 280. A preschool and open play areas were part of the original design.",
        "The project was overseen by the Columbia Housing Authority, created in 1934, and planning was initiated by the New Deal-era Public Works Administration (PWA). The goal was to provide affordable housing to low-income residents. Gonzales Gardens was originally racially segregated for whites only. Nearby Allen-Benedict Court was designated for African American residents. Both were integrated in the 1970s. Gonzales Gardens was razed in 2017.",
      ]),
    ],
  ),
  lesson(
    "40-206",
    "A Greek Revival house built in 1849",
    "McCord House timeline",
    [
      cited("40-206", "McCord House", "front and back"),
      span(
        '"58 years" is 1855 minus 1797, the years the marker prints for David McCord\'s death and birth.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1849",
        title: "Built for David and Louisa McCord",
        partLabel: "the house",
        art: art(
          "m40206-house.jpg",
          "Illustration of a Greek Revival house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Built in 1849",
            x: 32,
            y: 46,
            fact: "This Greek Revival house was built in 1849 for David and Louisa McCord by slaves from her plantation, Lang Syne, in Fort Motte, S.C. Among the enslaved carpenters who built the home were John Spann and Anderson Keitt.",
          },
          {
            id: "mccords",
            label: "David and Louisa",
            x: 74,
            y: 58,
            fact: "David McCord (1797-1855) was a lawyer, editor, planter, banker, and legislator. Louisa McCord (1810-79) was a noted author of essays, poetry, and drama. The house was later owned by the Oxner-Adams family, who were also connected to Lang Syne plantation.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1865",
        title: "A depot, then a headquarters",
        partLabel: "the yard",
        art: art(
          "m40206-yard.jpg",
          "Illustration of a house yard with crates and a wagon. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "depot",
            label: "A food depot",
            x: 32,
            y: 52,
            fact: "During the Civil War the house was a central depot for food intended for patients at the Confederate hospital located on the South Carolina College campus.",
          },
          {
            id: "survived",
            label: "February 1865",
            x: 74,
            y: 40,
            fact: "In 1865, Maj. Gen. O.O. Howard, who later headed the Freedmen’s Bureau and was namesake of Howard University, used the house as his headquarters when the U.S. Army captured the city. Though a large part of the city was burned on the night of Feb. 17-18, 1865, the McCord House survived.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1797-1855",
        title: "Years from the birth year to the death year",
        partLabel: "58 years",
        value: 58,
        unit: "years",
        meant:
          "What this meant: 1855 comes 58 years after 1797. Those are the years the marker prints for David McCord, his death year and his birth year.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40206-house.jpg",
          "Illustration of a Greek Revival house. Not a historical photograph.",
        ),
        nowArt: art(
          "m40206-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Greek Revival house, for the house the marker says was built in 1849. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1797",
            label: "David McCord is born.",
            why: "The marker prints David McCord's years as 1797-1855.",
          },
          {
            id: "built",
            year: "1849",
            label: "The Greek Revival house is built.",
            why: "The marker says this Greek Revival house was built in 1849 for David and Louisa McCord by slaves from her plantation, Lang Syne, in Fort Motte, S.C.",
          },
          {
            id: "death",
            year: "1855",
            label: "David McCord dies.",
            why: "The marker prints David McCord's years as 1797-1855.",
          },
          {
            id: "hq",
            year: "1865",
            label: "The house is a headquarters and survives the fire.",
            why: "The marker says in 1865 Maj. Gen. O.O. Howard used the house as his headquarters when the U.S. Army captured the city, and that the McCord House survived the burning on the night of Feb. 17-18, 1865.",
          },
        ],
        ["hq", "born", "death", "built"],
      ),
      takeaway([
        "This Greek Revival house was built in 1849 for David and Louisa McCord by slaves from her plantation, Lang Syne, in Fort Motte, S.C. Among the enslaved carpenters who built the home were John Spann and Anderson Keitt.",
        "David McCord (1797-1855) was a lawyer, editor, planter, banker, and legislator. Louisa McCord (1810-79) was a noted author of essays, poetry, and drama. The house was later owned by the Oxner-Adams family, who were also connected to Lang Syne plantation.",
        "During the Civil War the house was a central depot for food intended for patients at the Confederate hospital located on the South Carolina College campus. In 1865, Maj. Gen. O.O. Howard, who later headed the Freedmen’s Bureau and was namesake of Howard University, used the house as his headquarters when the U.S. Army captured the city. Though a large part of the city was burned on the night of Feb. 17-18, 1865, the McCord House survived.",
      ]),
    ],
  ),
  lesson(
    "40-207",
    "The house where Benjamin Mack lived",
    "Benjamin Mack House timeline",
    [
      cited("40-207", "Benjamin Mack House", "front and back"),
      span(
        '"54 years" is 1970 minus 1916, the years the marker prints for Benjamin Mack\'s death and birth.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1916-1970",
        title: "Lived here until 1970",
        partLabel: "the house",
        art: art(
          "m40207-house.jpg",
          "Illustration of a modest house with a porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lived",
            label: "Until his death in 1970",
            x: 32,
            y: 48,
            fact: "Educator and civil rights leader Benjamin Mack (1916-1970) lived in this house from the late 1950s until his death in 1970.",
          },
          {
            id: "taught",
            label: "The 1940s",
            x: 74,
            y: 40,
            fact: "Mack was a graduate of Booker T. Washington H.S. and S.C. State Univ. He taught at Lower Richland H.S. in the 1940s, where he was known as “Professor B.J. Mack.” He married Gladys Hendrix of Batesburg, who operated a daycare center here. They raised two children. Mack also served as a Deacon at Ridgewood Baptist Church.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1963 and 1968",
        title: "A march and a campaign",
        partLabel: "the yard",
        art: art(
          "m40207-yard.jpg",
          "Illustration of a house yard and a simple play structure. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sclc",
            label: "The 1960s",
            x: 32,
            y: 54,
            fact: "In the 1960s Mack served as the State Field Secretary for the Southern Christian Leadership Conference (SCLC) in S.C. As part of his work with SCLC he taught courses in African American history for the Citizenship Education Program (CEP). With SCLC and CEP Mack worked with Martin Luther King Jr., Andrew Young, and Septima Clark.",
          },
          {
            id: "plans",
            label: "1963 and 1968",
            x: 74,
            y: 42,
            fact: "He remained committed to SCLC’s mission of non-violent direct action and helped plan both the 1963 March on Washington and 1968 Poor People’s Campaign.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1916-1970",
        title: "Years from the birth year to the death year",
        partLabel: "54 years",
        value: 54,
        unit: "years",
        meant:
          "What this meant: 1970 comes 54 years after 1916. Those are the years the marker prints for Benjamin Mack, his death year and his birth year.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40207-house.jpg",
          "Illustration of a modest house with a porch. Not a historical photograph.",
        ),
        nowArt: art(
          "m40207-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a modest house with a porch, for the house the marker says Benjamin Mack lived in from the late 1950s until his death in 1970. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1916",
            label: "Benjamin Mack is born.",
            why: "The marker prints Benjamin Mack's years as 1916-1970.",
          },
          {
            id: "march",
            year: "1963",
            label: "He helps plan the March on Washington.",
            why: "The marker says he helped plan both the 1963 March on Washington and the 1968 Poor People’s Campaign.",
          },
          {
            id: "campaign",
            year: "1968",
            label: "He helps plan the Poor People’s Campaign.",
            why: "The marker says he helped plan the 1968 Poor People’s Campaign, and that he remained committed to SCLC’s mission of non-violent direct action.",
          },
          {
            id: "death",
            year: "1970",
            label: "Benjamin Mack dies.",
            why: "The marker says he lived in this house from the late 1950s until his death in 1970. It prints his years as 1916-1970.",
          },
        ],
        ["campaign", "born", "death", "march"],
      ),
      takeaway([
        "Educator and civil rights leader Benjamin Mack (1916-1970) lived in this house from the late 1950s until his death in 1970. Mack was a graduate of Booker T. Washington H.S. and S.C. State Univ. He taught at Lower Richland H.S. in the 1940s, where he was known as “Professor B.J. Mack.”",
        "He married Gladys Hendrix of Batesburg, who operated a daycare center here. They raised two children. Mack also served as a Deacon at Ridgewood Baptist Church.",
        "In the 1960s Mack served as the State Field Secretary for the Southern Christian Leadership Conference (SCLC) in S.C. As part of his work with SCLC he taught courses in African American history for the Citizenship Education Program (CEP). With SCLC and CEP Mack worked with Martin Luther King Jr., Andrew Young, and Septima Clark. He remained committed to SCLC’s mission of non-violent direct action and helped plan both the 1963 March on Washington and 1968 Poor People’s Campaign.",
      ]),
    ],
  ),
];
