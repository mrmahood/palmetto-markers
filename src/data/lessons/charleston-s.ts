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

export const charlestonLessonsS: MarkerLesson[] = [
  lesson(
    "10-87",
    "A park for African Americans until 1964",
    "Harmon Field timeline",
    [
      cited("10-87", "Harmon Field", "front and back"),
      span(
        '"37 years" is 1964 minus 1927, the years the marker prints for the desegregation and the establishment of Harmon Field.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "field",
        kicker: "1927",
        title: "A park from the Harmon Foundation",
        partLabel: "the field",
        art: art(
          "m1087-field.jpg",
          "Illustration of an empty park ballfield. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1927",
            x: 32,
            y: 48,
            fact: "Harmon Field, established in 1927, was one of many parks across the country created with support from the Harmon Foundation, a national philanthropic organization.",
          },
          {
            id: "segregated",
            label: "Until 1964",
            x: 74,
            y: 40,
            fact: "Though dedicated to the “Recreation of All,” state law mandated the racial segregation of public parks and Harmon Field remained a facility for African Americans until it was desegregated in 1964. Among other uses, the park was a venue for games played by amateur and semi-pro baseball teams.",
          },
        ],
      },
      {
        kind: "scene",
        id: "stands",
        kicker: "1953",
        title: "Little League at Harmon Field",
        partLabel: "the stands",
        art: art(
          "m1087-stands.jpg",
          "Illustration of empty wooden baseball stands. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "league",
            label: "1953",
            x: 32,
            y: 52,
            fact: "In 1953 the Cannon St. YMCA established the first African American Little League in S.C. and played games at Harmon Field.",
          },
          {
            id: "forfeit",
            label: "1955",
            x: 74,
            y: 42,
            fact: "In 1955 the Cannon St. YMCA entered a team in the state Little League tournament. Rather than integrate, white teams boycotted and the Cannon St. All-Stars were state champions by forfeit. The All-Stars were invited to the Little League World Series, but not allowed to compete.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1927-1964",
        title: "Years from establishment to desegregation",
        partLabel: "37 years",
        value: 37,
        unit: "years",
        meant:
          "What this meant: 1964 comes 37 years after 1927. Those are the years the marker prints for the desegregation and the establishment of Harmon Field.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1087-field.jpg",
          "Illustration of an empty park ballfield. Not a historical photograph.",
        ),
        nowArt: art(
          "m1087-today.jpg",
          "Illustration of a marker at the edge of a park. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an empty park ballfield, for Harmon Field, which the marker says was established in 1927. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at the edge of a park. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "established",
            year: "1927",
            label: "Harmon Field is established.",
            why: "The marker says Harmon Field was established in 1927 with support from the Harmon Foundation, a national philanthropic organization.",
          },
          {
            id: "league",
            year: "1953",
            label: "The Cannon St. YMCA establishes a Little League.",
            why: "The marker says that in 1953 the Cannon St. YMCA established the first African American Little League in S.C. and played games at Harmon Field.",
          },
          {
            id: "tournament",
            year: "1955",
            label: "The All-Stars are state champions by forfeit.",
            why: "The marker says that in 1955 the Cannon St. YMCA entered a team in the state Little League tournament. Rather than integrate, white teams boycotted and the Cannon St. All-Stars were state champions by forfeit.",
          },
          {
            id: "desegregated",
            year: "1964",
            label: "Harmon Field is desegregated.",
            why: "The marker says Harmon Field remained a facility for African Americans until it was desegregated in 1964.",
          },
        ],
        ["tournament", "established", "desegregated", "league"],
      ),
      takeaway([
        "Harmon Field, established in 1927, was one of many parks across the country created with support from the Harmon Foundation, a national philanthropic organization. Though dedicated to the “Recreation of All,” state law mandated the racial segregation of public parks and Harmon Field remained a facility for African Americans until it was desegregated in 1964.",
        "Among other uses, the park was a venue for games played by amateur and semi-pro baseball teams. In 1953 the Cannon St. YMCA established the first African American Little League in S.C. and played games at Harmon Field.",
        "In 1955 the Cannon St. YMCA entered a team in the state Little League tournament. Rather than integrate, white teams boycotted and the Cannon St. All-Stars were state champions by forfeit. The All-Stars were invited to the Little League World Series, but not allowed to compete.",
      ]),
    ],
  ),
  lesson(
    "10-88",
    "The only large-scale commercial tea site in the U.S.",
    "Charleston Tea Plantation timeline",
    [cited("10-88", "Charleston Tea Plantation", "front and back")],
    [
      {
        kind: "scene",
        id: "fields",
        kicker: "1799-1802",
        title: "Tea at Middleton Barony",
        partLabel: "the fields",
        art: art(
          "m1088-fields.jpg",
          "Illustration of tea rows beside a river. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "michaux",
            label: "1799-1802",
            x: 32,
            y: 46,
            fact: "The first confirmed cultivation of tea in the U.S. occurred when French botanist André Michaux brought to plants to Middleton Barony on the Ashley River between 1799-1802. Large-scale production, however, was not attempted.",
          },
          {
            id: "pinehurst",
            label: "1880",
            x: 74,
            y: 58,
            fact: "Beginning in 1880 the U.S. Congress subsidized renewed cultivation efforts. The Pinehurst Plantation in Summerville was the most successful of these attempts.",
          },
        ],
      },
      {
        kind: "scene",
        id: "barn",
        kicker: "1963",
        title: "Cuttings on Wadmalaw Island",
        partLabel: "the barn",
        art: art(
          "m1088-barn.jpg",
          "Illustration of a barn among tea rows. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acres",
            label: "127 acres",
            x: 32,
            y: 50,
            fact: "In 1963, cuttings from Pinehurst Plantation were transferred to 127 acres on Wadmalaw Island; land that is now the Charleston Tea Plantation.",
          },
          {
            id: "hybrids",
            label: "The hybrids",
            x: 74,
            y: 40,
            fact: "Because the Pinehurst plants had grown wild and cross-pollinated for decades prior to transfer they are now considered “South Carolina hybrids.” Charleston Tea Plantation remains the only site of large-scale commercial tea production in the U.S.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1963",
        title: "Acres the cuttings were transferred to",
        partLabel: "127 acres",
        value: 127,
        unit: "acres",
        meant:
          "What this meant: the marker says that in 1963, cuttings from Pinehurst Plantation were transferred to 127 acres on Wadmalaw Island; land that is now the Charleston Tea Plantation.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1088-fields.jpg",
          "Illustration of tea rows beside a river. Not a historical photograph.",
        ),
        nowArt: art(
          "m1088-today.jpg",
          "Illustration of a marker beside tea fields. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of tea rows beside a river, for the first confirmed cultivation of tea, which the marker dates between 1799-1802. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside tea fields. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "cultivation",
            year: "1799",
            label: "The years printed for the first confirmed cultivation begin.",
            why: "The marker says the first confirmed cultivation of tea in the U.S. occurred when French botanist André Michaux brought to plants to Middleton Barony on the Ashley River between 1799-1802.",
          },
          {
            id: "window",
            year: "1802",
            label: "The years printed for that cultivation end.",
            why: "The marker dates that cultivation between 1799-1802 and says large-scale production, however, was not attempted.",
          },
          {
            id: "subsidy",
            year: "1880",
            label: "Congress subsidizes renewed cultivation.",
            why: "The marker says that beginning in 1880 the U.S. Congress subsidized renewed cultivation efforts. The Pinehurst Plantation in Summerville was the most successful of these attempts.",
          },
          {
            id: "transfer",
            year: "1963",
            label: "Cuttings are transferred to Wadmalaw Island.",
            why: "The marker says that in 1963, cuttings from Pinehurst Plantation were transferred to 127 acres on Wadmalaw Island; land that is now the Charleston Tea Plantation.",
          },
        ],
        ["subsidy", "cultivation", "transfer", "window"],
      ),
      takeaway([
        "The first confirmed cultivation of tea in the U.S. occurred when French botanist André Michaux brought to plants to Middleton Barony on the Ashley River between 1799-1802. Large-scale production, however, was not attempted.",
        "Beginning in 1880 the U.S. Congress subsidized renewed cultivation efforts. The Pinehurst Plantation in Summerville was the most successful of these attempts.",
        "In 1963, cuttings from Pinehurst Plantation were transferred to 127 acres on Wadmalaw Island; land that is now the Charleston Tea Plantation. Because the Pinehurst plants had grown wild and cross-pollinated for decades prior to transfer they are now considered “South Carolina hybrids.” Charleston Tea Plantation remains the only site of large-scale commercial tea production in the U.S.",
      ]),
    ],
  ),
  lesson(
    "10-89",
    "Sisters who never returned to Charleston",
    "Blake-Grimké House timeline",
    [cited("10-89", "Blake-Grimké House", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "Before 1789",
        title: "A Charleston double house",
        partLabel: "the house",
        art: art(
          "m1089-house.jpg",
          "Illustration of a Charleston double house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "blake",
            label: "Before 1789",
            x: 32,
            y: 44,
            fact: "This Charleston double house was built before 1789 by William Blake, a planter and descendant of former Proprietary Governor Joseph Blake.",
          },
          {
            id: "grimke",
            label: "By 1803",
            x: 74,
            y: 56,
            fact: "By 1803 Mary Smith Grimké, descendant of Landgrave Thomas Smith, and Judge John F. Grimké, a planter and state Supreme Court justice, and their 11 children occupied the property. Among them were Sarah (1792-1873) and Angelina (1805-1879) Grimké who became leading advocates for equal rights for African Americans and women.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1836-1838",
        title: "Advocates who never returned",
        partLabel: "the yard",
        art: art(
          "m1089-yard.jpg",
          "Illustration of a walled yard beside a Charleston house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "agents",
            label: "1836-1838",
            x: 32,
            y: 50,
            fact: "From 1836-1838 the sisters, the first female agents of the abolitionist movement, traveled the Northeast as lecturers and organizers.",
          },
          {
            id: "convention",
            label: "1837",
            x: 74,
            y: 38,
            fact: "In 1837 they helped organize the first national convention of white and black women. Also in 1837 Sarah published a full-fledged argument for women’s equal rights. The next year Angelina became the first American woman to address a legislative body, speaking to a committee of the Mass. legislature. Neither sister ever returned to Charleston.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1803",
        title: "Children who occupied the property",
        partLabel: "11 children",
        value: 11,
        unit: "children",
        meant:
          "What this meant: the marker says that by 1803 Mary Smith Grimké, descendant of Landgrave Thomas Smith, and Judge John F. Grimké, a planter and state Supreme Court justice, and their 11 children occupied the property.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1089-house.jpg",
          "Illustration of a Charleston double house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1089-today.jpg",
          "Illustration of a marker in front of a Charleston house. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Charleston double house, for the house the marker says was built before 1789 by William Blake. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker in front of a Charleston house. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "Before 1789",
            label: "The double house is already built.",
            why: "The marker says this Charleston double house was built before 1789 by William Blake, a planter and descendant of former Proprietary Governor Joseph Blake.",
          },
          {
            id: "occupied",
            year: "1803",
            label: "Mary Smith Grimké and Judge John F. Grimké occupy the property.",
            why: "The marker says that by 1803 they and their 11 children occupied the property. Among them were Sarah (1792-1873) and Angelina (1805-1879) Grimké, who became leading advocates for equal rights for African Americans and women.",
          },
          {
            id: "travel",
            year: "1836",
            label: "The sisters travel the Northeast as lecturers.",
            why: "The marker says that from 1836-1838 the sisters, the first female agents of the abolitionist movement, traveled the Northeast as lecturers and organizers.",
          },
          {
            id: "convention",
            year: "1837",
            label: "They help organize a national convention.",
            why: "The marker says that in 1837 they helped organize the first national convention of white and black women. Also in 1837 Sarah published a full-fledged argument for women’s equal rights. The next year Angelina became the first American woman to address a legislative body, speaking to a committee of the Mass. legislature. Neither sister ever returned to Charleston.",
          },
        ],
        ["convention", "built", "travel", "occupied"],
      ),
      takeaway([
        "This Charleston double house was built before 1789 by William Blake, a planter and descendant of former Proprietary Governor Joseph Blake.",
        "By 1803 Mary Smith Grimké, descendant of Landgrave Thomas Smith, and Judge John F. Grimké, a planter and state Supreme Court justice, and their 11 children occupied the property. Among them were Sarah (1792-1873) and Angelina (1805-1879) Grimké who became leading advocates for equal rights for African Americans and women.",
        "From 1836-1838 the sisters, the first female agents of the abolitionist movement, traveled the Northeast as lecturers and organizers. In 1837 they helped organize the first national convention of white and black women. Also in 1837 Sarah published a full-fledged argument for women’s equal rights. The next year Angelina became the first American woman to address a legislative body, speaking to a committee of the Mass. legislature. Neither sister ever returned to Charleston.",
      ]),
    ],
  ),
  lesson(
    "10-90",
    "Three runways in a cotton field",
    "Coastal Patrol Base #8 timeline",
    [cited("10-90", "Coastal Patrol Base #8", "front and back")],
    [
      {
        kind: "scene",
        id: "base",
        kicker: "1941",
        title: "The 8th base constructed",
        partLabel: "the base",
        art: art(
          "m1090-base.jpg",
          "Illustration of a small coastal airfield in a cotton field. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "formed",
            label: "1941",
            x: 32,
            y: 46,
            fact: "The Civil Air Patrol (C.A.P.) was formed in 1941, just prior to U.S. entrance into WWII. C.A.P. air bases were located from Maine to Mexico and the James Island base was the 8th constructed.",
          },
          {
            id: "runways",
            label: "May 1942",
            x: 74,
            y: 58,
            fact: "Its 3 runways were carved from a 108-acre cotton field and operations began in May 1942. This base remained in service until C.A.P. operations were moved to Charleston AFB after the war.",
          },
        ],
      },
      {
        kind: "scene",
        id: "shore",
        kicker: "May 1942",
        title: "Daily patrols, then a crash at sea",
        partLabel: "the shore",
        art: art(
          "m1090-shore.jpg",
          "Illustration of a patrol plane over a shoreline. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "missions",
            label: "To August 1943",
            x: 32,
            y: 42,
            fact: "From May 1942 to August 1943 almost 100 volunteers at Base 8 flew daily patrol missions. Aircrews primarily hunted enemy submarines, protected shipping lanes, and performed search and rescue.",
          },
          {
            id: "crash",
            label: "Feb. 9, 1943",
            x: 74,
            y: 54,
            fact: "South Carolina natives Drew L. King and Clarence L. Rawls died at sea when their plane crashed off Myrtle Beach on Feb. 9, 1943.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "May 1942",
        title: "Acres of the cotton field",
        partLabel: "108 acres",
        value: 108,
        unit: "acres",
        meant:
          "What this meant: the marker says its 3 runways were carved from a 108-acre cotton field and operations began in May 1942.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1090-base.jpg",
          "Illustration of a small coastal airfield in a cotton field. Not a historical photograph.",
        ),
        nowArt: art(
          "m1090-today.jpg",
          "Illustration of a marker near a coastal field. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small coastal airfield in a cotton field, for the base the marker says had 3 runways carved from a 108-acre cotton field. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker near a coastal field. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "formed",
            year: "1941",
            label: "The Civil Air Patrol is formed.",
            why: "The marker says the Civil Air Patrol (C.A.P.) was formed in 1941, just prior to U.S. entrance into WWII. C.A.P. air bases were located from Maine to Mexico and the James Island base was the 8th constructed.",
          },
          {
            id: "operations",
            year: "May 1942",
            label: "Operations begin at the James Island base.",
            why: "The marker says its 3 runways were carved from a 108-acre cotton field and operations began in May 1942.",
          },
          {
            id: "crash",
            year: "Feb. 9, 1943",
            label: "King and Rawls die when their plane crashes.",
            why: "The marker says South Carolina natives Drew L. King and Clarence L. Rawls died at sea when their plane crashed off Myrtle Beach on Feb. 9, 1943.",
          },
          {
            id: "patrols",
            year: "August 1943",
            label: "The printed dates for daily patrols reach August 1943.",
            why: "The marker says that from May 1942 to August 1943 almost 100 volunteers at Base 8 flew daily patrol missions. Aircrews primarily hunted enemy submarines, protected shipping lanes, and performed search and rescue.",
          },
        ],
        ["crash", "formed", "patrols", "operations"],
      ),
      takeaway([
        "The Civil Air Patrol (C.A.P.) was formed in 1941, just prior to U.S. entrance into WWII. C.A.P. air bases were located from Maine to Mexico and the James Island base was the 8th constructed.",
        "Its 3 runways were carved from a 108-acre cotton field and operations began in May 1942. This base remained in service until C.A.P. operations were moved to Charleston AFB after the war.",
        "From May 1942 to August 1943 almost 100 volunteers at Base 8 flew daily patrol missions. Aircrews primarily hunted enemy submarines, protected shipping lanes, and performed search and rescue. South Carolina natives Drew L. King and Clarence L. Rawls died at sea when their plane crashed off Myrtle Beach on Feb. 9, 1943.",
      ]),
    ],
  ),
];
