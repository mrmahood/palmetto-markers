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

export const greenvilleLessonsP: MarkerLesson[] = [
  lesson(
    "23-69",
    "Named in memory of a county in Ireland",
    "Monaghan Mill timeline",
    [cited("23-69", "Monaghan Mill", "front and back")],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1900",
        title: "A mill on the Reedy River",
        partLabel: "the mill",
        art: art(
          "m2369-mill.jpg",
          "Illustration of a brick mill beside a river. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1900",
            x: 32,
            y: 52,
            fact: "Lewis Wardlaw Parker (1865-1916) and Thomas Fleming Parker (1860-1926) established Monaghan Mill in 1900 and named it in memory of their grandfather’s native county in Ireland.",
          },
          {
            id: "opened",
            label: "1901",
            x: 74,
            y: 40,
            fact: "Located along the Reedy River, the mill was designed by the firm of Lockwood, Greene & Co. When it opened in 1901 it contained 25,000 spindles.",
          },
        ],
      },
      {
        kind: "scene",
        id: "village",
        kicker: "1904",
        title: "A village and a Y.M.C.A.",
        partLabel: "the mill village",
        art: art(
          "m2369-village.jpg",
          "Illustration of a mill village and a plain community hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "workers",
            label: "700 workers",
            x: 32,
            y: 48,
            fact: "By the end of the decade it had expanded to 60,000 spindles and employed 700 workers, many of whom lived in the nearby mill village.",
          },
          {
            id: "ymca",
            label: "1904",
            x: 74,
            y: 36,
            fact: "In 1904 Thomas Parker built a Young Men’s Christian Association (Y.M.C.A.) at Monaghan. L.P. Hollis (1883-1978), a long-time director of the Monaghan Y.M.C.A., introduced basketball at Monaghan and founded the Southern Textile Basketball Tournament, hosted annually in Greenville from 1921-1996.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "By the end of the decade",
        title: "Workers at the mill",
        partLabel: "700 workers",
        value: 700,
        unit: "workers",
        meant:
          "What this meant: the marker says that by the end of the decade the mill had expanded to 60,000 spindles and employed 700 workers, many of whom lived in the nearby mill village.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2369-mill.jpg",
          "Illustration of a brick mill beside a river. Not a historical photograph.",
        ),
        nowArt: art(
          "m2369-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick mill beside a river, for the mill the marker says was located along the Reedy River and opened in 1901. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "established",
            year: "1900",
            label: "The Parkers establish Monaghan Mill.",
            why: "The marker says Lewis Wardlaw Parker (1865-1916) and Thomas Fleming Parker (1860-1926) established Monaghan Mill in 1900 and named it in memory of their grandfather’s native county in Ireland.",
          },
          {
            id: "opened",
            year: "1901",
            label: "The mill opens with 25,000 spindles.",
            why: "The marker says that when it opened in 1901 it contained 25,000 spindles.",
          },
          {
            id: "ymca",
            year: "1904",
            label: "Thomas Parker builds a Y.M.C.A.",
            why: "The marker says that in 1904 Thomas Parker built a Young Men’s Christian Association (Y.M.C.A.) at Monaghan.",
          },
          {
            id: "closed",
            year: "2001",
            label: "Monaghan Mill closes.",
            why: "The marker says that after operating for 100 years, Monaghan Mill closed in 2001. It was listed in the National Register of Historic Places in 2005.",
          },
        ],
        ["ymca", "closed", "established", "opened"],
      ),
      takeaway([
        "Lewis Wardlaw Parker (1865-1916) and Thomas Fleming Parker (1860-1926) established Monaghan Mill in 1900 and named it in memory of their grandfather’s native county in Ireland.",
        "When it opened in 1901 it contained 25,000 spindles.",
        "After operating for 100 years, Monaghan Mill closed in 2001. It was listed in the National Register of Historic Places in 2005.",
      ]),
    ],
  ),
  lesson(
    "23-70",
    "A family cemetery from the 1840s",
    "Simpsonville Municipal Cemetery timeline",
    [cited("23-70", "Simpsonville Municipal Cemetery", "front and back")],
    [
      {
        kind: "scene",
        id: "cemetery",
        kicker: "1840s",
        title: "Donated to the church in 1890",
        partLabel: "the family cemetery",
        art: art(
          "m2370-cemetery.jpg",
          "Illustration of a cemetery inside a fieldstone wall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1840s",
            x: 32,
            y: 50,
            fact: "Established in the 1840s as a family cemetery, the two and one-half acre parcel was donated to Simpsonville First Baptist Church by J.H. Todd in 1890.",
          },
          {
            id: "wall",
            label: "Field stone",
            x: 74,
            y: 42,
            fact: "The stone wall that surrounds the cemetery was constructed from native field stone collected from the surrounding countryside. The distinctive arches that mark the entry gates were added in the early 2000s.",
          },
        ],
      },
      {
        kind: "scene",
        id: "graves",
        kicker: "At the center",
        title: "Founding families and veterans",
        partLabel: "the earliest graves",
        art: art(
          "m2370-graves.jpg",
          "Illustration of unmarked headstones at the center of a cemetery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "families",
            label: "Founding families",
            x: 32,
            y: 46,
            fact: "The cemetery serves as the final resting place for many of the founding families in Simpsonville, as well as veterans from many of the nation’s wars.",
          },
          {
            id: "stones",
            label: "Earliest graves",
            x: 74,
            y: 58,
            fact: "The earliest grave sites are located at the center of the cemetery and include Capt. Banister Stone (1777-1844), his wife Elizabeth Kilgore Stone (1788-1855), and his mother Anne Moon Stone Lynch (1754-1842). Stone was a member of the S.C. Assembly for 16 years.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "S.C. Assembly",
        title: "Years Stone served in the Assembly",
        partLabel: "16 years",
        value: 16,
        unit: "years",
        meant:
          "What this meant: the marker says Stone was a member of the S.C. Assembly for 16 years.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2370-cemetery.jpg",
          "Illustration of a cemetery inside a fieldstone wall. Not a historical photograph.",
        ),
        nowArt: art(
          "m2370-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a fieldstone wall around a cemetery, for the wall the marker says was constructed from native field stone. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "established",
            year: "1840s",
            label: "The cemetery is established as a family cemetery.",
            why: "The marker says it was established in the 1840s as a family cemetery.",
          },
          {
            id: "donated",
            year: "1890",
            label: "J.H. Todd donates the parcel to the church.",
            why: "The marker says the two and one-half acre parcel was donated to Simpsonville First Baptist Church by J.H. Todd in 1890.",
          },
          {
            id: "deeded",
            year: "1929",
            label: "The church deeds the property to the town.",
            why: "The marker says the church deeded the property to the Town of Simpsonville in 1929.",
          },
          {
            id: "arches",
            year: "Early 2000s",
            label: "Arches are added at the entry gates.",
            why: "The marker says the distinctive arches that mark the entry gates were added in the early 2000s.",
          },
        ],
        ["deeded", "established", "arches", "donated"],
      ),
      takeaway([
        "Established in the 1840s as a family cemetery, the two and one-half acre parcel was donated to Simpsonville First Baptist Church by J.H. Todd in 1890.",
        "The church deeded the property to the Town of Simpsonville in 1929.",
        "The earliest grave sites are located at the center of the cemetery and include Capt. Banister Stone (1777-1844), his wife Elizabeth Kilgore Stone (1788-1855), and his mother Anne Moon Stone Lynch (1754-1842).",
      ]),
    ],
  ),
  lesson(
    "23-71",
    "The third sanctuary on the site",
    "Simpsonville Methodist Church timeline",
    [cited("23-71", "Simpsonville Methodist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "forum",
        kicker: "April 1916",
        title: "Organized at the Woodside Mill",
        partLabel: "the Forum",
        art: art(
          "m2371-forum.jpg",
          "Illustration of a plain wooden community hall in a mill village. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "April 1916",
            x: 32,
            y: 48,
            fact: "Simpsonville UMC was organized in April 1916 as Simpsonville Methodist Episcopal Church, South. The first pastor was J.L. Singleton.",
          },
          {
            id: "forum",
            label: "The Forum",
            x: 74,
            y: 38,
            fact: "The congregation originally met in the Forum, the community building of the Woodside Mill.",
          },
        ],
      },
      {
        kind: "scene",
        id: "church",
        kicker: "1917",
        title: "A church at Main and Crisp",
        partLabel: "the sanctuary",
        art: art(
          "m2371-church.jpg",
          "Illustration of a small wooden church at a street corner. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1917",
            x: 32,
            y: 52,
            fact: "In 1917, members pledged to build their own sanctuary and by the end of that year had built a church at the corner of S.E. Main and Crisp Streets on property donated by H.H. Griffin.",
          },
          {
            id: "third",
            label: "1986",
            x: 74,
            y: 40,
            fact: "A recreational building and Sunday School were added in 1943 and a new parsonage, replacing the original built in 1926, was added in 1959. In 1965 a four-phase project began to expand the campus and build a new sanctuary. This project included educational buildings and a modern A-frame church, completed in 1986. The new sanctuary, the third on the site, replaced both the 1917 building and a 250-seat sanctuary built in 1967.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1967",
        title: "Seats in the 1967 sanctuary",
        partLabel: "250 seats",
        value: 250,
        unit: "seats",
        meant:
          "What this meant: the marker says the new sanctuary, the third on the site, replaced both the 1917 building and a 250-seat sanctuary built in 1967.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2371-church.jpg",
          "Illustration of a small wooden church at a street corner. Not a historical photograph.",
        ),
        nowArt: art(
          "m2371-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small wooden church, for the church the marker says was built in 1917 at the corner of S.E. Main and Crisp Streets. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "April 1916",
            label: "Simpsonville UMC is organized.",
            why: "The marker says Simpsonville UMC was organized in April 1916 as Simpsonville Methodist Episcopal Church, South.",
          },
          {
            id: "built",
            year: "1917",
            label: "Members build a church at Main and Crisp.",
            why: "The marker says that in 1917, members pledged to build their own sanctuary and by the end of that year had built a church at the corner of S.E. Main and Crisp Streets on property donated by H.H. Griffin.",
          },
          {
            id: "seats",
            year: "1967",
            label: "A 250-seat sanctuary is built.",
            why: "The marker says the new sanctuary, the third on the site, replaced both the 1917 building and a 250-seat sanctuary built in 1967.",
          },
          {
            id: "completed",
            year: "1986",
            label: "A modern A-frame church is completed.",
            why: "The marker says a four-phase project included educational buildings and a modern A-frame church, completed in 1986. The new sanctuary, the third on the site, replaced both the 1917 building and a 250-seat sanctuary built in 1967.",
          },
        ],
        ["seats", "organized", "completed", "built"],
      ),
      takeaway([
        "Simpsonville UMC was organized in April 1916 as Simpsonville Methodist Episcopal Church, South.",
        "The congregation originally met in the Forum, the community building of the Woodside Mill.",
        "The new sanctuary, the third on the site, replaced both the 1917 building and a 250-seat sanctuary built in 1967.",
      ]),
    ],
  ),
  lesson(
    "23-72",
    "Organized in Maria Turpin’s home",
    "Buncombe Street Methodist Church timeline",
    [
      cited("23-72", "Buncombe Street Methodist Church", "front and back"),
      span(
        '"39 years" is 1873 minus 1834, the years the marker prints for the dedication of the current sanctuary and the organization of the Greenville Methodist Church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "circuit",
        kicker: "1800",
        title: "Asbury rides the upcountry",
        partLabel: "the circuit rider",
        art: art(
          "m2372-circuit.jpg",
          "Illustration of a horseback rider on a wooded dirt road. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "asbury",
            label: "1800",
            x: 32,
            y: 46,
            fact: "As early as 1800 Bishop Francis Asbury, founder of American Methodism, rode circuit in the S.C. upcountry, spreading the message of Methodism.",
          },
          {
            id: "deeded",
            label: "1832",
            x: 74,
            y: 58,
            fact: "In 1832 Vardry McBee deeded land to the trustees of the Methodist Episcopal Church. The Greenville Methodist Church, mother church of Buncombe Street Methodist, was organized in 1834 in the home of Maria Turpin. A frame building was built on Coffee Street in 1836. The congregation has operated a Sunday School since 1836.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1873",
        title: "A Greek Revival sanctuary",
        partLabel: "the sanctuary",
        art: art(
          "m2372-church.jpg",
          "Illustration of a Greek Revival church with a columned portico. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "dedicated",
            label: "1873",
            x: 32,
            y: 44,
            fact: "The current sanctuary, the second to house the congregation, was dedicated in 1873. Built in the Greek Revival style, it has undergone renovations but retains its form.",
          },
          {
            id: "expanded",
            label: "1927",
            x: 74,
            y: 60,
            fact: "Troop 9, Boy Scouts of America has met here since 1929. As the church expanded an education building was added in 1927 and a new children’s building was dedicated in 1962.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1834-1873",
        title: "Years from the organization to this sanctuary",
        partLabel: "39 years",
        value: 39,
        unit: "years",
        meant:
          "What this meant: 1873 comes 39 years after 1834. That is the stretch from the year the Greenville Methodist Church was organized to the year the current sanctuary was dedicated.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2372-church.jpg",
          "Illustration of a Greek Revival church with a columned portico. Not a historical photograph.",
        ),
        nowArt: art(
          "m2372-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a columned church, for the sanctuary the marker says was dedicated in 1873 in the Greek Revival style. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "asbury",
            year: "1800",
            label: "Bishop Francis Asbury rides circuit in the upcountry.",
            why: "The marker says that as early as 1800 Bishop Francis Asbury, founder of American Methodism, rode circuit in the S.C. upcountry, spreading the message of Methodism.",
          },
          {
            id: "deeded",
            year: "1832",
            label: "Vardry McBee deeds land to the trustees.",
            why: "The marker says that in 1832 Vardry McBee deeded land to the trustees of the Methodist Episcopal Church.",
          },
          {
            id: "organized",
            year: "1834",
            label: "The Greenville Methodist Church is organized.",
            why: "The marker says the Greenville Methodist Church, mother church of Buncombe Street Methodist, was organized in 1834 in the home of Maria Turpin.",
          },
          {
            id: "dedicated",
            year: "1873",
            label: "The current sanctuary is dedicated.",
            why: "The marker says the current sanctuary, the second to house the congregation, was dedicated in 1873.",
          },
        ],
        ["organized", "asbury", "dedicated", "deeded"],
      ),
      takeaway([
        "As early as 1800 Bishop Francis Asbury, founder of American Methodism, rode circuit in the S.C. upcountry, spreading the message of Methodism.",
        "The Greenville Methodist Church, mother church of Buncombe Street Methodist, was organized in 1834 in the home of Maria Turpin.",
        "The current sanctuary, the second to house the congregation, was dedicated in 1873.",
      ]),
    ],
  ),
];
