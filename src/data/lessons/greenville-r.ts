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

export const greenvilleLessonsR: MarkerLesson[] = [
  lesson(
    "23-77",
    "Greenville’s earliest chartered Jewish organization",
    "Congregation Beth Israel timeline",
    [
      cited("23-77", "Congregation Beth Israel", "front and back"),
      span(
        '"13 years" is 1929 minus 1916, the years the marker prints for the incorporation of Congregation Beth Israel and the first synagogue on Townes Street.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "homes",
        kicker: "Around 1910",
        title: "Orthodox services in homes and halls",
        partLabel: "the first meetings",
        art: art(
          "m2377-homes.jpg",
          "Illustration of modest houses and an empty rented hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "meet",
            label: "Around 1910",
            x: 32,
            y: 52,
            fact: "Around 1910 a group of Jewish families began to meet for Orthodox services in their homes and rented halls around Greenville. Within two years these recent Eastern European immigrants hired Charles Zaglin as their rabbi and kosher butcher.",
          },
          {
            id: "charter",
            label: "1916",
            x: 74,
            y: 36,
            fact: "Congregation Beth Israel was incorporated in 1916 and was Greenville’s earliest chartered Jewish organization.",
          },
        ],
      },
      {
        kind: "scene",
        id: "synagogue",
        kicker: "1929",
        title: "A synagogue on Townes Street",
        partLabel: "the first synagogue",
        art: art(
          "m2377-synagogue.jpg",
          "Illustration of a small synagogue on a quiet street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "townes",
            label: "1929",
            x: 32,
            y: 48,
            fact: "The first synagogue was built on Townes Street in 1929.",
          },
          {
            id: "campus",
            label: "1957",
            x: 74,
            y: 34,
            fact: "In 1957 Beth Israel, which affiliated with the Conservative movement in 1954, began construction of its second synagogue. The campus was built in two stages, with the Davis Social Hall, classrooms, and offices built in the first stage. By 1970 the second stage, including a chapel donated by the Heller family, was completed. Max Heller was a past president of Beth Israel and mayor of Greenville, 1971 to 1979.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1916-1929",
        title: "Years from the charter to the first synagogue",
        partLabel: "13 years",
        value: 13,
        unit: "years",
        meant:
          "What this meant: 1929 comes 13 years after 1916. That is the stretch from the year the marker prints for the incorporation of Congregation Beth Israel to the year it prints for the first synagogue on Townes Street.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2377-synagogue.jpg",
          "Illustration of a small synagogue on a quiet street. Not a historical photograph.",
        ),
        nowArt: art(
          "m2377-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small synagogue on a quiet street, for the first synagogue the marker says was built on Townes Street in 1929. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "meet",
            year: "Around 1910",
            label: "Jewish families begin meeting for Orthodox services.",
            why: "The marker says that around 1910 a group of Jewish families began to meet for Orthodox services in their homes and rented halls around Greenville. Within two years these recent Eastern European immigrants hired Charles Zaglin as their rabbi and kosher butcher.",
          },
          {
            id: "incorporated",
            year: "1916",
            label: "Congregation Beth Israel is incorporated.",
            why: "The marker says Congregation Beth Israel was incorporated in 1916 and was Greenville’s earliest chartered Jewish organization.",
          },
          {
            id: "synagogue",
            year: "1929",
            label: "The first synagogue is built on Townes Street.",
            why: "The marker says the first synagogue was built on Townes Street in 1929.",
          },
          {
            id: "construction",
            year: "1957",
            label: "Construction of the second synagogue begins.",
            why: "The marker says that in 1957 Beth Israel, which affiliated with the Conservative movement in 1954, began construction of its second synagogue. The campus was built in two stages, with the Davis Social Hall, classrooms, and offices built in the first stage.",
          },
          {
            id: "chapel",
            year: "1970",
            label: "The Heller chapel completes the second stage.",
            why: "The marker says that by 1970 the second stage, including a chapel donated by the Heller family, was completed. Max Heller was a past president of Beth Israel and mayor of Greenville, 1971 to 1979.",
          },
        ],
        ["chapel", "meet", "construction", "synagogue", "incorporated"],
      ),
      takeaway([
        "Around 1910 a group of Jewish families began to meet for Orthodox services in their homes and rented halls around Greenville.",
        "Congregation Beth Israel was incorporated in 1916 and was Greenville’s earliest chartered Jewish organization.",
        "The first synagogue was built on Townes Street in 1929.",
      ]),
    ],
  ),
  lesson(
    "23-78",
    "Membership grown to 510",
    "Fork Shoals Baptist Church timeline",
    [cited("23-78", "Fork Shoals Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "meeting",
        kicker: "1789",
        title: "Horse Creek Church of the Bethel Association",
        partLabel: "the early church",
        art: art(
          "m2378-meeting.jpg",
          "Illustration of a small rural wooden meeting house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "horse",
            label: "1789",
            x: 32,
            y: 50,
            fact: "Fork Shoals Baptist Church traces its origins to at least 1789, when Horse Creek Church was organized as a member of the Bethel Association. Local tradition, however, places the date earlier, between 1777-1780.",
          },
          {
            id: "merge",
            label: "1799",
            x: 74,
            y: 36,
            fact: "Fork Shoals first appears in the Bethel Association minutes in 1799, when the Big Branch Enoree and Horse Creek Churches merged with Fork Shoals Baptist Church.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1860",
        title: "Land for the current church",
        partLabel: "the deeded land",
        art: art(
          "m2378-sanctuary.jpg",
          "Illustration of a rural church sanctuary. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "deed",
            label: "1860",
            x: 32,
            y: 54,
            fact: "By 1857 church membership had grown to 510 and in 1860 Fork Shoals was a founding member of the Greenville Baptist Association. Also in that year, Micajah Berry deeded the land on which the current church is built.",
          },
          {
            id: "built",
            label: "1888",
            x: 74,
            y: 34,
            fact: "The first sanctuary on this site was completed in 1888. While the current sanctuary dates to 1961, components of the 1888 structure were retained. Seven area churches began as the result of the ministry of Fork Shoals Baptist Church.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1857",
        title: "Members by 1857",
        partLabel: "510 members",
        value: 510,
        unit: "members",
        meant:
          "What this meant: the marker says that by 1857 church membership had grown to 510.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2378-sanctuary.jpg",
          "Illustration of a rural church sanctuary. Not a historical photograph.",
        ),
        nowArt: art(
          "m2378-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a rural church sanctuary, for the first sanctuary the marker says was completed on this site in 1888. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "horse",
            year: "1789",
            label: "Horse Creek Church is organized.",
            why: "The marker says Fork Shoals Baptist Church traces its origins to at least 1789, when Horse Creek Church was organized as a member of the Bethel Association. Local tradition, however, places the date earlier, between 1777-1780.",
          },
          {
            id: "merge",
            year: "1799",
            label: "Big Branch Enoree and Horse Creek merge with Fork Shoals.",
            why: "The marker says Fork Shoals first appears in the Bethel Association minutes in 1799, when the Big Branch Enoree and Horse Creek Churches merged with Fork Shoals Baptist Church.",
          },
          {
            id: "deed",
            year: "1860",
            label: "Micajah Berry deeds the land for the current church.",
            why: "The marker says that by 1857 church membership had grown to 510 and in 1860 Fork Shoals was a founding member of the Greenville Baptist Association. Also in that year, Micajah Berry deeded the land on which the current church is built.",
          },
          {
            id: "sanctuary",
            year: "1888",
            label: "The first sanctuary on this site is completed.",
            why: "The marker says the first sanctuary on this site was completed in 1888.",
          },
          {
            id: "current",
            year: "1961",
            label: "The current sanctuary dates to this year.",
            why: "The marker says that while the current sanctuary dates to 1961, components of the 1888 structure were retained. Seven area churches began as the result of the ministry of Fork Shoals Baptist Church.",
          },
        ],
        ["current", "merge", "sanctuary", "horse", "deed"],
      ),
      takeaway([
        "Fork Shoals Baptist Church traces its origins to at least 1789, when Horse Creek Church was organized as a member of the Bethel Association.",
        "By 1857 church membership had grown to 510 and in 1860 Fork Shoals was a founding member of the Greenville Baptist Association.",
        "The first sanctuary on this site was completed in 1888. While the current sanctuary dates to 1961, components of the 1888 structure were retained.",
      ]),
    ],
  ),
  lesson(
    "23-79",
    "An 8-week strike against the stretchout",
    "Poinsett Mill timeline",
    [cited("23-79", "Poinsett Mill", "front and back")],
    [
      {
        kind: "scene",
        id: "village",
        kicker: "1893",
        title: "From a desk company to a cotton mill",
        partLabel: "the mill village",
        art: art(
          "m2379-village.jpg",
          "Illustration of a textile mill and rows of small houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "gates",
            label: "1893",
            x: 32,
            y: 48,
            fact: "Originally established as the Gates Desk Company in 1893, the mill was renovated and re-chartered as Carolina Cotton Mills in 1900. Mill ownership built 123 homes to house supervisors and workers, as well as a church and later a school.",
          },
          {
            id: "named",
            label: "1916",
            x: 74,
            y: 36,
            fact: "In 1916 the mill was reorganized as Poinsett Mill, named for S.C. statesman Joel Poinsett, who was an early advocate of southern industry.",
          },
        ],
      },
      {
        kind: "scene",
        id: "mill",
        kicker: "Spring 1929",
        title: "Mill hands protest the stretchout",
        partLabel: "the strike",
        art: art(
          "m2379-mill.jpg",
          "Illustration of a brick textile mill with idle machinery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "strike",
            label: "1929",
            x: 32,
            y: 52,
            fact: "In 1928 Brandon, Woodruff, Renfrew, and Poinsett Mills merged to become Brandon Corporation. In the spring of 1929 mill hands at Poinsett joined workers from Brandon Mill in an 8-week strike to protest what they called “the stretchout,” an attempt by management to increase workloads in the face of declining wages. The strike ended when the mill agreed to minimal reforms.",
          },
          {
            id: "closed",
            label: "1981",
            x: 74,
            y: 34,
            fact: "Abney Mills gained control of Poinsett in 1949 and owned it until the mill closed in 1981. The Reynolds Co., a producer of adhesives and coatings, acquired the former textile mill in 1983.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Mill village",
        title: "Homes for supervisors and workers",
        partLabel: "123 homes",
        value: 123,
        unit: "homes",
        meant:
          "What this meant: the marker says mill ownership built 123 homes to house supervisors and workers, as well as a church and later a school.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2379-village.jpg",
          "Illustration of a textile mill and rows of small houses. Not a historical photograph.",
        ),
        nowArt: art(
          "m2379-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a textile mill and rows of small houses, for the 123 homes the marker says mill ownership built for supervisors and workers. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "gates",
            year: "1893",
            label: "The mill is established as the Gates Desk Company.",
            why: "The marker says the mill was originally established as the Gates Desk Company in 1893.",
          },
          {
            id: "carolina",
            year: "1900",
            label: "The mill is re-chartered as Carolina Cotton Mills.",
            why: "The marker says the mill was renovated and re-chartered as Carolina Cotton Mills in 1900. Mill ownership built 123 homes to house supervisors and workers, as well as a church and later a school.",
          },
          {
            id: "poinsett",
            year: "1916",
            label: "The mill is reorganized as Poinsett Mill.",
            why: "The marker says that in 1916 the mill was reorganized as Poinsett Mill, named for S.C. statesman Joel Poinsett, who was an early advocate of southern industry.",
          },
          {
            id: "brandon",
            year: "1928",
            label: "Four mills merge into Brandon Corporation.",
            why: "The marker says that in 1928 Brandon, Woodruff, Renfrew, and Poinsett Mills merged to become Brandon Corporation.",
          },
          {
            id: "strike",
            year: "Spring 1929",
            label: "Mill hands join an 8-week strike.",
            why: "The marker says that in the spring of 1929 mill hands at Poinsett joined workers from Brandon Mill in an 8-week strike to protest what they called “the stretchout,” an attempt by management to increase workloads in the face of declining wages. The strike ended when the mill agreed to minimal reforms.",
          },
          {
            id: "closed",
            year: "1981",
            label: "The mill closes.",
            why: "The marker says Abney Mills gained control of Poinsett in 1949 and owned it until the mill closed in 1981. The Reynolds Co., a producer of adhesives and coatings, acquired the former textile mill in 1983.",
          },
        ],
        ["strike", "gates", "closed", "poinsett", "brandon", "carolina"],
      ),
      takeaway([
        "Originally established as the Gates Desk Company in 1893, the mill was renovated and re-chartered as Carolina Cotton Mills in 1900.",
        "In the spring of 1929 mill hands at Poinsett joined workers from Brandon Mill in an 8-week strike to protest what they called “the stretchout,” an attempt by management to increase workloads in the face of declining wages.",
        "Abney Mills gained control of Poinsett in 1949 and owned it until the mill closed in 1981.",
      ]),
    ],
  ),
  lesson(
    "23-80",
    "The last class to graduate",
    "Bryson High School timeline",
    [
      cited("23-80", "Bryson High School", "front and back"),
      span(
        '"16 years" is 1970 minus 1954, the years the marker prints for the opening of Bryson H.S. and the last class to graduate.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1954",
        title: "A school in the equalization program",
        partLabel: "the new school",
        art: art(
          "m2380-school.jpg",
          "Illustration of a mid-century brick high school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1954",
            x: 32,
            y: 48,
            fact: "Bryson H.S. opened in 1954, serving African American students in lower Greenville Co. It was one of the many schools constructed in the 1950s as part of the school equalization program in S.C. The school consolidated the populations from five high schools, all that had inadequate facilities.",
          },
          {
            id: "grades",
            label: "1958",
            x: 74,
            y: 36,
            fact: "The new Bryson H.S. featured a gym, auditorium, industrial and agricultural shops, home economics laboratories, and library. First serving grades 7-12, in 1958 they began serving grades 8-12.",
          },
        ],
      },
      {
        kind: "scene",
        id: "campus",
        kicker: "1964",
        title: "Pressure after the Civil Rights Act",
        partLabel: "the principal",
        art: art(
          "m2380-campus.jpg",
          "Illustration of a school campus with workshop sheds. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "principal",
            label: "1964",
            x: 32,
            y: 50,
            fact: "Dr. A.M. Anderson was the first and only principal. More than 1,000 students graduated from Bryson under his watch. The school mascot was the Hurricane and the newspaper was the Hurricane Times. After the Civil Rights Act of 1964 the U.S. government put more pressure on the states to finally implement school desegregation.",
          },
          {
            id: "last",
            label: "1970",
            x: 74,
            y: 34,
            fact: "The class of 1970 was the last to graduate. In 1970 S.C. schools complied. Bryson students moved to the all white Woodmont, Hillcrest and J.L. Mann High Schools.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1954-1970",
        title: "Years from the opening to the last class",
        partLabel: "16 years",
        value: 16,
        unit: "years",
        meant:
          "What this meant: 1970 comes 16 years after 1954. That is the stretch from the year the marker prints for the opening of Bryson H.S. to the year it prints for the last class to graduate.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2380-school.jpg",
          "Illustration of a mid-century brick high school. Not a historical photograph.",
        ),
        nowArt: art(
          "m2380-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a mid-century brick high school, for the school the marker says opened in 1954. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "1954",
            label: "Bryson H.S. opens.",
            why: "The marker says Bryson H.S. opened in 1954, serving African American students in lower Greenville Co. It was one of the many schools constructed in the 1950s as part of the school equalization program in S.C. The school consolidated the populations from five high schools, all that had inadequate facilities.",
          },
          {
            id: "grades",
            year: "1958",
            label: "The school begins serving grades 8-12.",
            why: "The marker says the new Bryson H.S. featured a gym, auditorium, industrial and agricultural shops, home economics laboratories, and library. First serving grades 7-12, in 1958 they began serving grades 8-12.",
          },
          {
            id: "act",
            year: "1964",
            label: "The Civil Rights Act increases pressure to desegregate.",
            why: "The marker says that after the Civil Rights Act of 1964 the U.S. government put more pressure on the states to finally implement school desegregation. Dr. A.M. Anderson was the first and only principal. More than 1,000 students graduated from Bryson under his watch. The school mascot was the Hurricane and the newspaper was the Hurricane Times.",
          },
          {
            id: "last",
            year: "1970",
            label: "The class of 1970 is the last to graduate.",
            why: "The marker says the class of 1970 was the last to graduate. In 1970 S.C. schools complied. Bryson students moved to the all white Woodmont, Hillcrest and J.L. Mann High Schools.",
          },
        ],
        ["last", "opened", "act", "grades"],
      ),
      takeaway([
        "Bryson H.S. opened in 1954, serving African American students in lower Greenville Co.",
        "Dr. A.M. Anderson was the first and only principal. More than 1,000 students graduated from Bryson under his watch.",
        "The class of 1970 was the last to graduate. Bryson students moved to the all white Woodmont, Hillcrest and J.L. Mann High Schools.",
      ]),
    ],
  ),
];
