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

export const charlestonLessonsQ: MarkerLesson[] = [
  lesson(
    "10-77",
    "Strikers sang “I’ll Overcome Someday”",
    "Cigar Factory timeline",
    [cited("10-77", "Cigar Factory", "front and back")],
    [
      {
        kind: "scene",
        id: "factory",
        kicker: "ca. 1882",
        title: "A textile mill, then a cigar plant",
        partLabel: "the five-story building",
        art: art(
          "m1077-factory.jpg",
          "Illustration of a five-story factory. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "ca. 1882",
            x: 32,
            y: 50,
            fact: "This five-story commercial building, built ca. 1882 as a textile mill, was known as the Charleston Manufacturing Company, then Charleston Cotton Mills, in its early years.",
          },
          {
            id: "tobacco",
            label: "1903 and 1912",
            x: 74,
            y: 42,
            fact: "Leased to the American Tobacco Company in 1903, the plant was sold to that company in 1912. Popularly called “the Cigar Factory,” it produced cigars such as Cremo and Roi-Tan until it closed in 1973. The Cigar Factory was listed in the National Register of Historic Places in 1980.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "October 1945",
        title: "A walkout over wages and discrimination",
        partLabel: "the strike",
        art: art(
          "m1077-street.jpg",
          "Illustration of workers walking toward a factory, seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "workers",
            label: "1,400 workers",
            x: 32,
            y: 48,
            fact: "By the end of World War II the factory employed 1,400 workers, 900 of them black women. In October 1945, 1,200 workers walked out over discrimination and low wages.",
          },
          {
            id: "hymn",
            label: "March 1946",
            x: 74,
            y: 56,
            fact: "Strikers sang the gospel hymn “I’ll Overcome Someday.” Later revised as “We Shall Overcome,” it would become the anthem of the Civil Rights Movement. The strike ended in March 1946 with a settlement giving workers raises and promising better treatment.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "By the end of World War II",
        title: "Workers the factory employed",
        partLabel: "1,400 workers",
        value: 1400,
        unit: "workers",
        meant:
          "What this meant: the marker says that by the end of World War II the factory employed 1,400 workers, 900 of them black women.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1077-factory.jpg",
          "Illustration of a five-story factory. Not a historical photograph.",
        ),
        nowArt: art(
          "m1077-today.jpg",
          "Illustration of a marker on a sidewalk. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a five-story factory, for the commercial building the marker says was built ca. 1882 as a textile mill. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a sidewalk. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "ca. 1882",
            label: "The building is built as a textile mill.",
            why: "The marker says this five-story commercial building was built ca. 1882 as a textile mill and was known as the Charleston Manufacturing Company, then Charleston Cotton Mills.",
          },
          {
            id: "leased",
            year: "1903",
            label: "The plant is leased to the American Tobacco Company.",
            why: "The marker says it was leased to the American Tobacco Company in 1903 and sold to that company in 1912.",
          },
          {
            id: "walkout",
            year: "October 1945",
            label: "1,200 workers walk out.",
            why: "The marker says that in October 1945, 1,200 workers walked out over discrimination and low wages.",
          },
          {
            id: "settled",
            year: "March 1946",
            label: "The strike ends with a settlement.",
            why: "The marker says the strike ended in March 1946 with a settlement giving workers raises and promising better treatment.",
          },
        ],
        ["walkout", "built", "settled", "leased"],
      ),
      takeaway([
        "This five-story commercial building, built ca. 1882 as a textile mill, was known as the Charleston Manufacturing Company, then Charleston Cotton Mills, in its early years.",
        "Leased to the American Tobacco Company in 1903, the plant was sold to that company in 1912. Popularly called “the Cigar Factory,” it produced cigars such as Cremo and Roi-Tan until it closed in 1973. The Cigar Factory was listed in the National Register of Historic Places in 1980.",
        "By the end of World War II the factory employed 1,400 workers, 900 of them black women. In October 1945, 1,200 workers walked out over discrimination and low wages. Strikers sang the gospel hymn “I’ll Overcome Someday.” Later revised as “We Shall Overcome,” it would become the anthem of the Civil Rights Movement. The strike ended in March 1946 with a settlement giving workers raises and promising better treatment.",
      ]),
    ],
  ),
  lesson(
    "10-78",
    "Eleven black students entered four schools",
    "James Simons Elementary timeline",
    [cited("10-78", "James Simons Elementary School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1919",
        title: "The fifth public elementary school",
        partLabel: "the school",
        art: art(
          "m1078-school.jpg",
          "Illustration of a brick elementary school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1919",
            x: 32,
            y: 48,
            fact: "This school, built in 1919 and designed by local architects Benson & Barbot, was the fifth public elementary school in the city.",
          },
          {
            id: "opened",
            label: "1919-1920",
            x: 74,
            y: 42,
            fact: "It opened for the 1919-1920 school year with an enrollment of 600.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "September 3, 1963",
        title: "A petition, a lawsuit, then eleven students",
        partLabel: "the desegregation case",
        art: art(
          "m1078-yard.jpg",
          "Illustration of a schoolyard, with children seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "petition",
            label: "1955 and 1960",
            x: 32,
            y: 52,
            fact: "In 1955 the Charleston Branch of the National Association for the Advancement of Colored People (NAACP) petitioned the Charleston school board to desegregate all public city schools, including this one. In 1960 nine parents, with support from the NAACP, applied for their children’s transfer to four white schools, including James Simons Elementary School.",
          },
          {
            id: "entered",
            label: "September 3, 1963",
            x: 74,
            y: 44,
            fact: "Denied by the board and on appeal, they sued in federal court in 1962 and won their case the next year. On September 3, 1963, eleven black students entered this school and Memminger Elementary School and Charleston and Rivers High Schools.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "September 3, 1963",
        title: "Black students who entered the schools",
        partLabel: "11 students",
        value: 11,
        unit: "students",
        meant:
          "What this meant: the marker says that on September 3, 1963, eleven black students entered this school and Memminger Elementary School and Charleston and Rivers High Schools.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1078-school.jpg",
          "Illustration of a brick elementary school. Not a historical photograph.",
        ),
        nowArt: art(
          "m1078-today.jpg",
          "Illustration of a marker by a schoolyard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick elementary school, for the school the marker says was built in 1919. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a schoolyard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1919",
            label: "The school is built.",
            why: "The marker says this school was built in 1919, designed by local architects Benson & Barbot, and opened for the 1919-1920 school year with an enrollment of 600.",
          },
          {
            id: "petition",
            year: "1955",
            label: "The NAACP petitions to desegregate the city schools.",
            why: "The marker says that in 1955 the Charleston Branch of the NAACP petitioned the Charleston school board to desegregate all public city schools, including this one.",
          },
          {
            id: "applied",
            year: "1960",
            label: "Nine parents apply for transfers.",
            why: "The marker says that in 1960 nine parents, with support from the NAACP, applied for their children’s transfer to four white schools, including James Simons Elementary School.",
          },
          {
            id: "entered",
            year: "September 3, 1963",
            label: "Eleven black students enter four schools.",
            why: "The marker says they sued in federal court in 1962 and won their case the next year. On September 3, 1963, eleven black students entered this school and Memminger Elementary School and Charleston and Rivers High Schools.",
          },
        ],
        ["entered", "built", "applied", "petition"],
      ),
      takeaway([
        "This school, built in 1919 and designed by local architects Benson & Barbot, was the fifth public elementary school in the city. It opened for the 1919-1920 school year with an enrollment of 600.",
        "In 1955 the Charleston Branch of the National Association for the Advancement of Colored People (NAACP) petitioned the Charleston school board to desegregate all public city schools, including this one. In 1960 nine parents, with support from the NAACP, applied for their children’s transfer to four white schools, including James Simons Elementary School.",
        "Denied by the board and on appeal, they sued in federal court in 1962 and won their case the next year. On September 3, 1963, eleven black students entered this school and Memminger Elementary School and Charleston and Rivers High Schools.",
      ]),
    ],
  ),
  lesson(
    "10-81",
    "A store and the first Citizenship School",
    "Progressive Club timeline",
    [
      cited("10-81", "The Progressive Club", "front and back"),
      span(
        '"9 years" is 1957 minus 1948, the years the marker prints for the first Citizenship School and the founding of the Progressive Club.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "club",
        kicker: "1962-63",
        title: "A store and community center",
        partLabel: "the club building",
        art: art(
          "m1081-club.jpg",
          "Illustration of a small community store. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1962-63",
            x: 32,
            y: 50,
            fact: "The Progressive Club, built in 1962-63, was a store and community center for Johns Island and other Sea Islands until it was badly damaged by Hurricane Hugo in 1989.",
          },
          {
            id: "founded",
            label: "1948",
            x: 74,
            y: 40,
            fact: "The club had been founded in 1948 by civil rights activist Esau Jenkins (1910-1972), who worked to improve educational, political, economic, and other opportunities for blacks on the island and in the lowcountry.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1957",
        title: "The first Citizenship School",
        partLabel: "the citizenship school",
        art: art(
          "m1081-yard.jpg",
          "Illustration of a yard gathering, seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "school",
            label: "1957",
            x: 32,
            y: 54,
            fact: "Jenkins, Septima Clark (1898-1987), and Bernice Robinson (1914-1994) founded the first Citizenship School in 1957 to encourage literacy and voter registration.",
          },
          {
            id: "register",
            label: "2007",
            x: 74,
            y: 46,
            fact: "Its success led to many similar schools across the South, called “the base on which the whole civil rights movement was built.” The Progressive Club was listed in the National Register of Historic Places in 2007.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1948-1957",
        title: "Years from the founding to the Citizenship School",
        partLabel: "9 years",
        value: 9,
        unit: "years",
        meant:
          "What this meant: 1957 comes 9 years after 1948. Those are the years the marker prints for the first Citizenship School and the founding of the Progressive Club.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1081-club.jpg",
          "Illustration of a small community store. Not a historical photograph.",
        ),
        nowArt: art(
          "m1081-today.jpg",
          "Illustration of a marker beside a low community building. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small community store, for the Progressive Club the marker says was built in 1962-63. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a low community building. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1948",
            label: "Esau Jenkins founds the Progressive Club.",
            why: "The marker says the club had been founded in 1948 by civil rights activist Esau Jenkins (1910-1972).",
          },
          {
            id: "school",
            year: "1957",
            label: "The first Citizenship School is founded.",
            why: "The marker says Jenkins, Septima Clark (1898-1987), and Bernice Robinson (1914-1994) founded the first Citizenship School in 1957 to encourage literacy and voter registration.",
          },
          {
            id: "built",
            year: "1962-63",
            label: "The club building is put up.",
            why: "The marker says the Progressive Club, built in 1962-63, was a store and community center for Johns Island and other Sea Islands.",
          },
          {
            id: "hugo",
            year: "1989",
            label: "Hurricane Hugo badly damages the club.",
            why: "The marker says the club was a store and community center until it was badly damaged by Hurricane Hugo in 1989.",
          },
        ],
        ["hugo", "founded", "built", "school"],
      ),
      takeaway([
        "The Progressive Club, built in 1962-63, was a store and community center for Johns Island and other Sea Islands until it was badly damaged by Hurricane Hugo in 1989.",
        "The club had been founded in 1948 by civil rights activist Esau Jenkins (1910-1972), who worked to improve educational, political, economic, and other opportunities for blacks on the island and in the lowcountry.",
        "Jenkins, Septima Clark (1898-1987), and Bernice Robinson (1914-1994) founded the first Citizenship School in 1957 to encourage literacy and voter registration. Its success led to many similar schools across the South, called “the base on which the whole civil rights movement was built.” The Progressive Club was listed in the National Register of Historic Places in 2007.",
      ]),
    ],
  ),
  lesson(
    "10-82",
    "He hoped to “vindicate the cause of the downtrodden”",
    "Jonathan Jasper Wright timeline",
    [
      cited("10-82", "Jonathan Jasper Wright Law Office", "front and back"),
      span(
        '"8 years" is 1885 minus 1877, the years the marker prints for his death and the start of his law practice here.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "office",
        kicker: "1877",
        title: "A law office after he left the bench",
        partLabel: "the law office",
        art: art(
          "m1082-office.jpg",
          "Illustration of a small law office. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "practice",
            label: "1877-1885",
            x: 32,
            y: 52,
            fact: "Jonathan Jasper Wright (1840-1885), the first African American in the U.S. to sit as a justice on a state supreme court, practiced law here from 1877 until his death in 1885.",
          },
          {
            id: "arrived",
            label: "1865",
            x: 74,
            y: 40,
            fact: "Wright, a native of Pa., was educated at Lancasterian Academy in Ithaca, N.Y. He came to S.C. in 1865 as a teacher for the American Missionary Association and also worked as an attorney for the Freedmen’s Bureau.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1870",
        title: "Convention, senate, and the supreme court",
        partLabel: "the court and the convention",
        art: art(
          "m1082-street.jpg",
          "Illustration of a brick street of offices. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "convention",
            label: "1868",
            x: 32,
            y: 48,
            fact: "Wright wrote that he hoped to “vindicate the cause of the downtrodden.” He was a delegate to the S.C. constitutional convention of 1868 and a state senator 1868-70.",
          },
          {
            id: "court",
            label: "1870 and 1877",
            x: 74,
            y: 58,
            fact: "Wright, elected to the S.C. Supreme Court in 1870, resigned in 1877 due to political pressure. After he left the bench he practiced law, helped Claflin College found its Law Department, and became its Chair in Law. He died of tuberculosis in 1885.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1877-1885",
        title: "Years the marker prints for the law practice here",
        partLabel: "8 years",
        value: 8,
        unit: "years",
        meant:
          "What this meant: 1885 comes 8 years after 1877. Those are the years the marker prints for his death and for his law practice here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1082-office.jpg",
          "Illustration of a small law office. Not a historical photograph.",
        ),
        nowArt: art(
          "m1082-today.jpg",
          "Illustration of a marker on a sidewalk. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small law office, for the office where the marker says Jonathan Jasper Wright practiced law from 1877. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a sidewalk. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "arrived",
            year: "1865",
            label: "Wright comes to S.C. as a teacher.",
            why: "The marker says he came to S.C. in 1865 as a teacher for the American Missionary Association and also worked as an attorney for the Freedmen’s Bureau.",
          },
          {
            id: "convention",
            year: "1868",
            label: "He is a delegate to the constitutional convention.",
            why: "The marker says he was a delegate to the S.C. constitutional convention of 1868 and a state senator 1868-70.",
          },
          {
            id: "court",
            year: "1870",
            label: "He is elected to the S.C. Supreme Court.",
            why: "The marker says Wright was elected to the S.C. Supreme Court in 1870 and resigned in 1877 due to political pressure.",
          },
          {
            id: "office",
            year: "1877",
            label: "He resigns and practices law here.",
            why: "The marker says he resigned in 1877 and practiced law here from 1877 until his death in 1885. After he left the bench he practiced law, helped Claflin College found its Law Department, and became its Chair in Law.",
          },
        ],
        ["court", "arrived", "office", "convention"],
      ),
      takeaway([
        "Jonathan Jasper Wright (1840-1885), the first African American in the U.S. to sit as a justice on a state supreme court, practiced law here from 1877 until his death in 1885. Wright, a native of Pa., was educated at Lancasterian Academy in Ithaca, N.Y.",
        "He came to S.C. in 1865 as a teacher for the American Missionary Association and also worked as an attorney for the Freedmen’s Bureau. Wright wrote that he hoped to “vindicate the cause of the downtrodden.” He was a delegate to the S.C. constitutional convention of 1868 and a state senator 1868-70.",
        "Wright, elected to the S.C. Supreme Court in 1870, resigned in 1877 due to political pressure. After he left the bench he practiced law, helped Claflin College found its Law Department, and became its Chair in Law. He died of tuberculosis in 1885.",
      ]),
    ],
  ),
];
