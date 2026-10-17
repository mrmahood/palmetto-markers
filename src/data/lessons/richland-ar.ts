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

export const richlandLessonsAR: MarkerLesson[] = [
  lesson(
    "40-221",
    "The second public housing project",
    "Allen Benedict Court timeline",
    [cited("40-221", "Allen Benedict Court", "front and back")],
    [
      {
        kind: "scene",
        id: "court",
        kicker: "1940",
        title: "Opened as segregated public housing",
        partLabel: "the court",
        art: art(
          "m40221-court.jpg",
          "Illustration of brick apartment buildings around a court. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "Opened in 1940",
            x: 32,
            y: 48,
            fact: "In 1940, a segregated public housing complex for African Americans opened at this site. Named after nearby Allen University and Benedict College, Allen Benedict Court was the second public housing project in Columbia built under the Housing Act of 1937.",
          },
          {
            id: "built",
            label: "A 17-acre site",
            x: 74,
            y: 40,
            fact: "It was constructed by the Columbia Housing Authority with funds provided by the United States Housing Authority. The 17-acre site was previously occupied by small wooden houses.",
          },
        ],
      },
      {
        kind: "scene",
        id: "homes",
        kicker: "2021",
        title: "Brick buildings, then a razing",
        partLabel: "the homes",
        art: art(
          "m40221-homes.jpg",
          "Illustration of brick housing, a playground, and a play court. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "units",
            label: "244 units",
            x: 32,
            y: 50,
            fact: "For years, Allen Benedict Court was an important resource for local African American families who often faced discrimination in the housing and lending markets. Residents lived in 26 brick buildings with 244 units and amenities like athletic courts, a playground, social area, a splash pool, and a public library branch.",
          },
          {
            id: "razed",
            label: "Razed in 2021",
            x: 74,
            y: 42,
            fact: 'Local Black press called the complex a "distinct asset" to the surrounding neighborhood upon its opening. Allen Benedict Court was razed in 2021.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "244 units",
        title: "Units in the brick buildings",
        partLabel: "244 units",
        value: 244,
        unit: "units",
        meant:
          "What this meant: the marker says residents lived in 26 brick buildings with 244 units.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40221-court.jpg",
          "Illustration of brick apartment buildings around a court. Not a historical photograph.",
        ),
        nowArt: art(
          "m40221-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of brick apartment buildings around a court, for the public housing complex the marker says opened at this site in 1940. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "act",
            year: "1937",
            label: "The Housing Act this project is built under.",
            why: "The marker says Allen Benedict Court was the second public housing project in Columbia built under the Housing Act of 1937.",
          },
          {
            id: "opened",
            year: "1940",
            label: "A segregated public housing complex opens at this site.",
            why: "The marker says in 1940 a segregated public housing complex for African Americans opened at this site.",
          },
          {
            id: "razed",
            year: "2021",
            label: "Allen Benedict Court is razed.",
            why: "The marker says Allen Benedict Court was razed in 2021.",
          },
        ],
        ["razed", "act", "opened"],
      ),
      takeaway([
        "In 1940, a segregated public housing complex for African Americans opened at this site. Named after nearby Allen University and Benedict College, Allen Benedict Court was the second public housing project in Columbia built under the Housing Act of 1937.",
        "It was constructed by the Columbia Housing Authority with funds provided by the United States Housing Authority. The 17-acre site was previously occupied by small wooden houses. For years, Allen Benedict Court was an important resource for local African American families who often faced discrimination in the housing and lending markets.",
        'Residents lived in 26 brick buildings with 244 units and amenities like athletic courts, a playground, social area, a splash pool, and a public library branch. Local Black press called the complex a "distinct asset" to the surrounding neighborhood upon its opening. Allen Benedict Court was razed in 2021.',
      ]),
    ],
  ),
  lesson(
    "40-222",
    "The only fully integrated public university in the South",
    "U.S.C. during Reconstruction timeline",
    [
      cited("40-222", "U.S.C. During Reconstruction", "front and back"),
      span(
        '"4 years" is 1877 minus 1873, the years the marker prints for U.S.C. as the only fully integrated public university in the South.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "campus",
        kicker: "1869",
        title: "Enslaved labor, then two trustees",
        partLabel: "the campus",
        art: art(
          "m40222-campus.jpg",
          "Illustration of a university campus of columned buildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "early",
            label: "The early days",
            x: 32,
            y: 50,
            fact: "People of African descent have been integral to the history of U.S.C. In the early days of the university enslaved people lived and worked on campus.",
          },
          {
            id: "trustees",
            label: "1869",
            x: 74,
            y: 42,
            fact: 'After the Civil War a new state constitution required that public schools, colleges, and universities be free and open to all "without regard to race." In 1869, the S.C. legislature appointed two African Americans, Benjamin Boseman and Francis Cardozo, to the board of trustees.',
          },
        ],
      },
      {
        kind: "scene",
        id: "hall",
        kicker: "1873",
        title: "Admitted and hired, then closed",
        partLabel: "the hall",
        art: art(
          "m40222-hall.jpg",
          "Illustration of an empty university hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "admitted",
            label: "1873",
            x: 32,
            y: 48,
            fact: "In 1873, Henry E. Hayne was the first African American student admitted to U.S.C. In the same year the school hired Richard T. Greener as its first African American faculty member. In the years 1873-77 U.S.C. was the only fully integrated public university in the South.",
          },
          {
            id: "closed",
            label: "1877-80 and 1963",
            x: 74,
            y: 40,
            fact: "After Reconstruction the state legislature closed U.S.C. 1877-80. It reopened as an all-white institution. Not until 1963 did U.S.C. again admit Black students.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1873-77",
        title: "Years as the only fully integrated public university",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1877 comes 4 years after 1873. Those are the years the marker prints for U.S.C. as the only fully integrated public university in the South.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40222-campus.jpg",
          "Illustration of a university campus of columned buildings. Not a historical photograph.",
        ),
        nowArt: art(
          "m40222-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a university campus, for U.S.C., which the marker says was the only fully integrated public university in the South in the years 1873-77. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "trustees",
            year: "1869",
            label: "Two African Americans are appointed to the board of trustees.",
            why: "The marker says in 1869 the S.C. legislature appointed two African Americans, Benjamin Boseman and Francis Cardozo, to the board of trustees.",
          },
          {
            id: "admitted",
            year: "1873",
            label: "Henry E. Hayne is admitted and Richard T. Greener is hired.",
            why: "The marker says in 1873 Henry E. Hayne was the first African American student admitted to U.S.C., and in the same year the school hired Richard T. Greener as its first African American faculty member.",
          },
          {
            id: "closed",
            year: "1877",
            label: "The legislature closes U.S.C.",
            why: "The marker says after Reconstruction the state legislature closed U.S.C. 1877-80. It reopened as an all-white institution. In the years 1873-77 U.S.C. was the only fully integrated public university in the South.",
          },
          {
            id: "again",
            year: "1963",
            label: "U.S.C. again admits Black students.",
            why: "The marker says not until 1963 did U.S.C. again admit Black students.",
          },
        ],
        ["again", "trustees", "closed", "admitted"],
      ),
      takeaway([
        'People of African descent have been integral to the history of U.S.C. In the early days of the university enslaved people lived and worked on campus. After the Civil War a new state constitution required that public schools, colleges, and universities be free and open to all "without regard to race."',
        "In 1869, the S.C. legislature appointed two African Americans, Benjamin Boseman and Francis Cardozo, to the board of trustees. In 1873, Henry E. Hayne was the first African American student admitted to U.S.C. In the same year the school hired Richard T. Greener as its first African American faculty member.",
        "In the years 1873-77 U.S.C. was the only fully integrated public university in the South. After Reconstruction the state legislature closed U.S.C. 1877-80. It reopened as an all-white institution. Not until 1963 did U.S.C. again admit Black students.",
      ]),
    ],
  ),
  lesson(
    "40-223",
    "Grew up in a house at this site",
    "Hettie Anderson homesite timeline",
    [
      cited("40-223", "Hettie Anderson Homesite", "front and back"),
      span(
        '"65 years" is 1938 minus 1873, the years the marker prints for Anderson\'s death and her birth around 1873.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "Around 1873",
        title: "Born in Columbia, grew up here",
        partLabel: "the house",
        art: art(
          "m40223-house.jpg",
          "Illustration of a wooden house on a street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "Around 1873",
            x: 32,
            y: 48,
            fact: 'Harriette "Hettie" Eugenia Anderson, acclaimed African American art model of the Gilded Age, grew up in a house at this site. Anderson was born in Columbia around 1873 to Caroline (Lee) Scott and Benajmin Dickerson.',
          },
          {
            id: "street",
            label: "Wayne Street",
            x: 74,
            y: 42,
            fact: "Her mother's family were local free people of color before the Civil War. Anderson and her family lived on the west side of Wayne Street on property owned by Scott and later by Anderson.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "The 1890s",
        title: "Modeling in N.Y., then a burial",
        partLabel: "the yard",
        art: art(
          "m40223-yard.jpg",
          "Illustration of a house yard and a wooden fence. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "modeling",
            label: "The 1890s",
            x: 32,
            y: 50,
            fact: 'In the 1890s, Anderson moved to N.Y. and began modeling for prominent artists. She was fair-complexioned and listed in some records as white. She was said to have a "heroic" appearance and often posed as classically inspired figures.',
          },
          {
            id: "died",
            label: "1938",
            x: 74,
            y: 40,
            fact: "Notable works for which she posed include Central Park's William T. Sherman Monument and the Saint-Gaudens double eagle gold coin. Anderson died in 1938 and is buried at nearby Elmwood Cemetery.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Around 1873 to 1938",
        title: "Years from the birth year to the death year",
        partLabel: "65 years",
        value: 65,
        unit: "years",
        meant:
          "What this meant: 1938 comes 65 years after 1873. Those are the years the marker prints for Anderson, her death year and her birth around 1873.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40223-house.jpg",
          "Illustration of a wooden house on a street. Not a historical photograph.",
        ),
        nowArt: art(
          "m40223-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden house, for the house at this site where the marker says Harriette \"Hettie\" Eugenia Anderson grew up. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "Around 1873",
            label: "Anderson is born in Columbia.",
            why: "The marker says Anderson was born in Columbia around 1873 to Caroline (Lee) Scott and Benajmin Dickerson.",
          },
          {
            id: "moved",
            year: "The 1890s",
            label: "Anderson moves to N.Y. and begins modeling.",
            why: "The marker says in the 1890s Anderson moved to N.Y. and began modeling for prominent artists.",
          },
          {
            id: "died",
            year: "1938",
            label: "Anderson dies.",
            why: "The marker says Anderson died in 1938 and is buried at nearby Elmwood Cemetery.",
          },
        ],
        ["died", "born", "moved"],
      ),
      takeaway([
        'Harriette "Hettie" Eugenia Anderson, acclaimed African American art model of the Gilded Age, grew up in a house at this site. Anderson was born in Columbia around 1873 to Caroline (Lee) Scott and Benajmin Dickerson.',
        'Her mother\'s family were local free people of color before the Civil War. Anderson and her family lived on the west side of Wayne Street on property owned by Scott and later by Anderson. In the 1890s, Anderson moved to N.Y. and began modeling for prominent artists.',
        'She was fair-complexioned and listed in some records as white. She was said to have a "heroic" appearance and often posed as classically inspired figures. Notable works for which she posed include Central Park\'s William T. Sherman Monument and the Saint-Gaudens double eagle gold coin. Anderson died in 1938 and is buried at nearby Elmwood Cemetery.',
      ]),
    ],
  ),
  lesson(
    "40-224",
    "A church for the Arthurtown community",
    "Brown Chapel timeline",
    [
      cited("40-224", "Brown Chapel A.M.E. Church", "front and back"),
      span(
        '"44 years" is 1958 minus 1914, the years the marker prints for the brick building that replaced the larger church and for that larger church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "Around 1895",
        title: "A brush arbor, then a first house of worship",
        partLabel: "the church",
        art: art(
          "m40224-church.jpg",
          "Illustration of a wooden church and a brush arbor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "By the 1880s",
            x: 32,
            y: 46,
            fact: "Tradition holds that early members of Brown Chapel African Methodist Episcopal (A.M.E.) Church worshipped under a brush arbor. The church formally organized by the 1880s. Brown Chapel was initially part of the A.M.E. Church's Columbia District and later joined the Lancaster District.",
          },
          {
            id: "first",
            label: "Around 1895",
            x: 74,
            y: 54,
            fact: "Congregants built their first house of worship at this site around 1895 on land previously owned by the Tolliver family. Brown Chapel A.M.E. was founded to serve African American residents of the Arthurtown community.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1914",
        title: "A larger church, then later buildings",
        partLabel: "the churchyard",
        art: art(
          "m40224-yard.jpg",
          "Illustration of a brick church in a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "larger",
            label: "1914 and 1958",
            x: 32,
            y: 48,
            fact: "Members built a larger church at this site in 1914. It was replaced in 1958 by a brick building that still stands. In 1959 Brown Chapel acquired nearby Arthurtown Elementary School and used it as an education building and daycare center. It no longer stands.",
          },
          {
            id: "current",
            label: "1981 and 2005",
            x: 74,
            y: 40,
            fact: "The current education building dates to 1981 and the church to 2005.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1914-1958",
        title: "Years from the larger church to the brick building",
        partLabel: "44 years",
        value: 44,
        unit: "years",
        meant:
          "What this meant: 1958 comes 44 years after 1914. Those are the years the marker prints for the larger church and the brick building that replaced it.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40224-church.jpg",
          "Illustration of a wooden church and a brush arbor. Not a historical photograph.",
        ),
        nowArt: art(
          "m40224-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church and a brush arbor, for the first house of worship the marker says congregants built at this site around 1895. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "first",
            year: "Around 1895",
            label: "Congregants build their first house of worship at this site.",
            why: "The marker says congregants built their first house of worship at this site around 1895 on land previously owned by the Tolliver family. The church formally organized by the 1880s.",
          },
          {
            id: "larger",
            year: "1914",
            label: "Members build a larger church at this site.",
            why: "The marker says members built a larger church at this site in 1914.",
          },
          {
            id: "brick",
            year: "1958",
            label: "A brick building replaces that church.",
            why: "The marker says it was replaced in 1958 by a brick building that still stands. In 1959 Brown Chapel acquired nearby Arthurtown Elementary School and used it as an education building and daycare center. It no longer stands.",
          },
          {
            id: "current",
            year: "2005",
            label: "The current church dates to this year.",
            why: "The marker says the current education building dates to 1981 and the church to 2005.",
          },
        ],
        ["current", "first", "brick", "larger"],
      ),
      takeaway([
        "Tradition holds that early members of Brown Chapel African Methodist Episcopal (A.M.E.) Church worshipped under a brush arbor. The church formally organized by the 1880s. Congregants built their first house of worship at this site around 1895 on land previously owned by the Tolliver family.",
        "Brown Chapel was initially part of the A.M.E. Church's Columbia District and later joined the Lancaster District. Brown Chapel A.M.E. was founded to serve African American residents of the Arthurtown community. Members built a larger church at this site in 1914. It was replaced in 1958 by a brick building that still stands.",
        "In 1959 Brown Chapel acquired nearby Arthurtown Elementary School and used it as an education building and daycare center. It no longer stands. The current education building dates to 1981 and the church to 2005.",
      ]),
    ],
  ),
];
