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

export const charlestonLessonsZ: MarkerLesson[] = [
  lesson(
    "10-118",
    "A 3-room house on a back lot",
    "Weston-Grimké timeline",
    [cited("10-118", "Weston-Grimké Homesite", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1852",
        title: "Grew up in a small house",
        partLabel: "the house",
        art: art(
          "m10118-house.jpg",
          "Illustration of a small wooden house on a back lot. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grew",
            label: "3 rooms",
            x: 32,
            y: 48,
            fact: "Archibald (1849-1930) and Francis Grimké (1850-1937), early 20th century activists for African American rights, grew up in a small 3-room house on a nearby back lot.",
          },
          {
            id: "lived",
            label: "1852",
            x: 74,
            y: 40,
            fact: "Born on a plantation near Charleston, they lived here with their enslaved mother Nancy Weston (1812-1895) and brother John (b.1852) following the 1852 death of Henry Grimké, their white father and owner, and brother of abolitionists Sarah and Angelina Grimké.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1865",
        title: "Enslaved until 1865",
        partLabel: "the yard",
        art: art(
          "m10118-yard.jpg",
          "Illustration of a small house yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "enslaved",
            label: "Until 1865",
            x: 32,
            y: 52,
            fact: "Francis and Archibald were enslaved until 1865. They briefly attended the nearby Morris Street School before being educated in the North.",
          },
          {
            id: "call",
            label: "1909",
            x: 74,
            y: 42,
            fact: "They became vocal advocates of racial equality and settled in Washington, D.C. Archibald was a lawyer, NAACP leader, and consul to the Dominican Republic. Francis was a Presbyterian minister and one of sixty signers of a 1909 call that led to the NAACP’s founding. Their home no longer stands.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "A back lot",
        title: "Rooms in the house where they grew up",
        partLabel: "3 rooms",
        value: 3,
        unit: "rooms",
        meant:
          "What this meant: the marker says Archibald and Francis Grimké grew up in a small 3-room house on a nearby back lot.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10118-house.jpg",
          "Illustration of a small wooden house on a back lot. Not a historical photograph.",
        ),
        nowArt: art(
          "m10118-today.jpg",
          "Illustration of a blank roadside marker beside a back lot. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small wooden house, for the small 3-room house the marker says they grew up in on a nearby back lot. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a back lot. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "nancy",
            year: "1812",
            label: "The years the marker prints for Nancy Weston begin.",
            why: "The marker prints Nancy Weston (1812-1895) and calls her their enslaved mother.",
          },
          {
            id: "death",
            year: "1852",
            label: "Henry Grimké dies, and they live here.",
            why: "The marker says they lived here with Nancy Weston and brother John (b.1852) following the 1852 death of Henry Grimké, their white father and owner, and brother of abolitionists Sarah and Angelina Grimké.",
          },
          {
            id: "until",
            year: "1865",
            label: "Francis and Archibald are enslaved until this year.",
            why: "The marker says Francis and Archibald were enslaved until 1865. They briefly attended the nearby Morris Street School before being educated in the North.",
          },
          {
            id: "founding",
            year: "1909",
            label: "Francis is one of sixty signers of a call.",
            why: "The marker says Francis was a Presbyterian minister and one of sixty signers of a 1909 call that led to the NAACP’s founding.",
          },
        ],
        ["founding", "nancy", "until", "death"],
      ),
      takeaway([
        "Archibald (1849-1930) and Francis Grimké (1850-1937), early 20th century activists for African American rights, grew up in a small 3-room house on a nearby back lot.",
        "Born on a plantation near Charleston, they lived here with their enslaved mother Nancy Weston (1812-1895) and brother John (b.1852) following the 1852 death of Henry Grimké, their white father and owner, and brother of abolitionists Sarah and Angelina Grimké.",
        "Francis and Archibald were enslaved until 1865. They briefly attended the nearby Morris Street School before being educated in the North. They became vocal advocates of racial equality and settled in Washington, D.C. Archibald was a lawyer, NAACP leader, and consul to the Dominican Republic. Francis was a Presbyterian minister and one of sixty signers of a 1909 call that led to the NAACP’s founding. Their home no longer stands.",
      ]),
    ],
  ),
  lesson(
    "10-119",
    "A 3,000-acre tract",
    "Fenwick Plantation timeline",
    [cited("10-119", "Fenwick Plantation", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1721",
        title: "Purchased, then a brick house",
        partLabel: "the house",
        art: art(
          "m10119-house.jpg",
          "Illustration of a two-story brick plantation house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "purchased",
            label: "1721",
            x: 32,
            y: 46,
            fact: "Fenwick Plantation began as a 3,000-acre tract purchased in 1721 by John Fenwick, an English planter.",
          },
          {
            id: "built",
            label: "By 1730",
            x: 74,
            y: 56,
            fact: "Fenwick had the two-story brick plantation house built by 1730. His son Edward likely had the house expanded in the 1750s, around the same time he opened a successful horse stud farm on the property. The Fenwicks owned the plantation until after the American Revolution.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "After the Revolution",
        title: "Crops, then a headquarters",
        partLabel: "the fields",
        art: art(
          "m10119-fields.jpg",
          "Illustration of rice, indigo, and cotton fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "labor",
            label: "Slave labor",
            x: 32,
            y: 50,
            fact: "The Fenwick main house and other buildings on the property were built using slave labor. Enslaved people living on the property also produced indigo, rice, and Sea Island cotton for plantation owners.",
          },
          {
            id: "headquarters",
            label: "Headquarters",
            x: 74,
            y: 40,
            fact: "After the American Revolution, the property was known as Headquarters Plantation because it was used by British forces as they laid siege to Charleston and occupied the city.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1721",
        title: "Acres John Fenwick purchased",
        partLabel: "3,000 acres",
        value: 3000,
        unit: "acres",
        meant:
          "What this meant: the marker says Fenwick Plantation began as a 3,000-acre tract purchased in 1721 by John Fenwick, an English planter.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10119-house.jpg",
          "Illustration of a two-story brick plantation house. Not a historical photograph.",
        ),
        nowArt: art(
          "m10119-today.jpg",
          "Illustration of a blank roadside marker beside open fields. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-story brick plantation house, for the house the marker says John Fenwick had built by 1730. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside open fields. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "purchased",
            year: "1721",
            label: "John Fenwick purchases the tract.",
            why: "The marker says Fenwick Plantation began as a 3,000-acre tract purchased in 1721 by John Fenwick, an English planter.",
          },
          {
            id: "built",
            year: "1730",
            label: "The two-story brick house is built.",
            why: "The marker says Fenwick had the two-story brick plantation house built by 1730.",
          },
          {
            id: "expanded",
            year: "the 1750s",
            label: "The house is likely expanded, and Edward opens a horse stud farm.",
            why: "The marker says his son Edward likely had the house expanded in the 1750s, around the same time he opened a successful horse stud farm on the property.",
          },
          {
            id: "named",
            year: "After the American Revolution",
            label: "The property is known as Headquarters Plantation.",
            why: "The marker says the Fenwicks owned the plantation until after the American Revolution. After the American Revolution, the property was known as Headquarters Plantation because it was used by British forces as they laid siege to Charleston and occupied the city.",
          },
        ],
        ["named", "purchased", "expanded", "built"],
      ),
      takeaway([
        "Fenwick Plantation began as a 3,000-acre tract purchased in 1721 by John Fenwick, an English planter. Fenwick had the two-story brick plantation house built by 1730.",
        "His son Edward likely had the house expanded in the 1750s, around the same time he opened a successful horse stud farm on the property. The Fenwicks owned the plantation until after the American Revolution.",
        "The Fenwick main house and other buildings on the property were built using slave labor. Enslaved people living on the property also produced indigo, rice, and Sea Island cotton for plantation owners. After the American Revolution, the property was known as Headquarters Plantation because it was used by British forces as they laid siege to Charleston and occupied the city.",
      ]),
    ],
  ),
  lesson(
    "10-120",
    "A chapel of ease at Beech Hill",
    "St. Paul's Parish timeline",
    [
      cited("10-120", "St. Paul's Parish Church", "front and back"),
      span(
        '"30 years" is 1736 minus 1706, the years the marker prints for the chapel erected here and the establishment of St. Paul’s Parish.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1736",
        title: "A brick chapel of ease",
        partLabel: "the chapel",
        art: art(
          "m10120-church.jpg",
          "Illustration of a brick chapel among trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "erected",
            label: "1736",
            x: 32,
            y: 46,
            fact: "This is the second site of St. Paul’s Parish Church, erected here in 1736 as a chapel of ease for the first parish church, built 8 mi. SE on the Stono River.",
          },
          {
            id: "parish",
            label: "Est. 1706",
            x: 74,
            y: 58,
            fact: "Est. 1706, St. Paul’s was one of the ten original Anglican parishes of colonial S.C. The parish built the brick chapel here at “Beech Hill” after the creation of St. John’s, Colleton Parish. It fell to ruin in the 1770s. The foundation remains.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1812",
        title: "A wooden church, then a cemetery",
        partLabel: "the churchyard",
        art: art(
          "m10120-yard.jpg",
          "Illustration of a churchyard and a low brick foundation. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wooden",
            label: "1812",
            x: 32,
            y: 48,
            fact: "A new wooden parish church was built near the old chapel in 1812 and was the first S.C. Episcopal church to be consecrated after the denomination separated from the Church of England.",
          },
          {
            id: "cemetery",
            label: "The cemetery",
            x: 74,
            y: 40,
            fact: "During the Civil War, the church housed a C.S.A. commissary. It was abandoned around the same time, after years of declining membership. The church no longer stands, but the cemetery continues to be used.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1706-1736",
        title: "Years from the parish to this chapel",
        partLabel: "30 years",
        value: 30,
        unit: "years",
        meant:
          "What this meant: 1736 comes 30 years after 1706. Those are the years the marker prints for the establishment of St. Paul’s and for the chapel erected here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10120-church.jpg",
          "Illustration of a brick chapel among trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m10120-today.jpg",
          "Illustration of a blank roadside marker in a churchyard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick chapel, for the chapel of ease the marker says was erected here in 1736. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker in a churchyard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "established",
            year: "1706",
            label: "St. Paul’s Parish is established.",
            why: "The marker says St. Paul’s was est. 1706 and was one of the ten original Anglican parishes of colonial S.C.",
          },
          {
            id: "chapel",
            year: "1736",
            label: "A brick chapel of ease is erected here.",
            why: "The marker says this second site was erected here in 1736 as a chapel of ease for the first parish church, built 8 mi. SE on the Stono River. The parish built the brick chapel here at “Beech Hill” after the creation of St. John’s, Colleton Parish.",
          },
          {
            id: "ruin",
            year: "the 1770s",
            label: "The brick chapel falls to ruin.",
            why: "The marker says it fell to ruin in the 1770s. The foundation remains.",
          },
          {
            id: "wooden",
            year: "1812",
            label: "A new wooden parish church is built near the old chapel.",
            why: "The marker says a new wooden parish church was built near the old chapel in 1812 and was the first S.C. Episcopal church to be consecrated after the denomination separated from the Church of England.",
          },
        ],
        ["wooden", "established", "ruin", "chapel"],
      ),
      takeaway([
        "This is the second site of St. Paul’s Parish Church, erected here in 1736 as a chapel of ease for the first parish church, built 8 mi. SE on the Stono River. Est. 1706, St. Paul’s was one of the ten original Anglican parishes of colonial S.C.",
        "The parish built the brick chapel here at “Beech Hill” after the creation of St. John’s, Colleton Parish. It fell to ruin in the 1770s. The foundation remains.",
        "A new wooden parish church was built near the old chapel in 1812 and was the first S.C. Episcopal church to be consecrated after the denomination separated from the Church of England. During the Civil War, the church housed a C.S.A. commissary. It was abandoned around the same time, after years of declining membership. The church no longer stands, but the cemetery continues to be used.",
      ]),
    ],
  ),
  lesson(
    "10-121",
    "A burial ground for Lincolnville",
    "Bible Sojourn timeline",
    [
      cited("10-121", "Bible Sojourn Society Cemetery", "front and back"),
      span(
        '"124 years" is 2015 minus 1891, the years the marker prints for the establishment of the Bible Sojourn Society Cemetery and its acquisition by the Town of Lincolnville.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "cemetery",
        kicker: "1891",
        title: "Established on Maria S. Eden’s farmland",
        partLabel: "the cemetery",
        art: art(
          "m10121-cemetery.jpg",
          "Illustration of a community cemetery on open ground. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "town",
            label: "1867 and 1889",
            x: 32,
            y: 44,
            fact: "The Town of Lincolnville was founded in 1867 and incorporated in 1889 as a haven for African Americans.",
          },
          {
            id: "established",
            label: "1891",
            x: 74,
            y: 56,
            fact: "In 1891, town leaders established the Bible Sojourn Society Cemetery here on the farmland of Maria S. Eden. The 2.75-acre cemetery served as a community burial ground and was long associated with Ebenezer A.M.E. Church (1/2 mi. N), the town’s first church.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gate",
        kicker: "1989",
        title: "Burials paused, then the town acquired it",
        partLabel: "the gate",
        art: art(
          "m10121-gate.jpg",
          "Illustration of a cemetery gate. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "burials",
            label: "Nearly a century",
            x: 32,
            y: 50,
            fact: "For nearly a century, Lincolnville residents regularly held burials at this cemetery. Among those interred here are many of the town’s founding families, early settlers, and later local leaders.",
          },
          {
            id: "hugo",
            label: "1989 and 2015",
            x: 74,
            y: 40,
            fact: "Burials stopped around the time of Hurricane Hugo (1989) and resumed in the 2010s after the property was restored. In 2015, the cemetery was acquired by the Town of Lincolnville.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1891-2015",
        title: "Years from the cemetery to the town",
        partLabel: "124 years",
        value: 124,
        unit: "years",
        meant:
          "What this meant: 2015 comes 124 years after 1891. Those are the years the marker prints for the establishment of the cemetery and its acquisition by the Town of Lincolnville.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10121-cemetery.jpg",
          "Illustration of a community cemetery on open ground. Not a historical photograph.",
        ),
        nowArt: art(
          "m10121-today.jpg",
          "Illustration of a blank roadside marker beside a cemetery gate. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a community cemetery, for the burial ground the marker says town leaders established here in 1891. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a cemetery gate. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1867",
            label: "The Town of Lincolnville is founded.",
            why: "The marker says the Town of Lincolnville was founded in 1867 and incorporated in 1889 as a haven for African Americans.",
          },
          {
            id: "incorporated",
            year: "1889",
            label: "Lincolnville is incorporated.",
            why: "The marker says the town was incorporated in 1889 as a haven for African Americans.",
          },
          {
            id: "opened",
            year: "1891",
            label: "Town leaders establish the cemetery.",
            why: "The marker says that in 1891, town leaders established the Bible Sojourn Society Cemetery here on the farmland of Maria S. Eden.",
          },
          {
            id: "acquired",
            year: "2015",
            label: "The Town of Lincolnville acquires the cemetery.",
            why: "The marker says burials stopped around the time of Hurricane Hugo (1989) and resumed in the 2010s after the property was restored. In 2015, the cemetery was acquired by the Town of Lincolnville.",
          },
        ],
        ["acquired", "founded", "opened", "incorporated"],
      ),
      takeaway([
        "The Town of Lincolnville was founded in 1867 and incorporated in 1889 as a haven for African Americans. In 1891, town leaders established the Bible Sojourn Society Cemetery here on the farmland of Maria S. Eden.",
        "The 2.75-acre cemetery served as a community burial ground and was long associated with Ebenezer A.M.E. Church (1/2 mi. N), the town’s first church. For nearly a century, Lincolnville residents regularly held burials at this cemetery.",
        "Among those interred here are many of the town’s founding families, early settlers, and later local leaders. Burials stopped around the time of Hurricane Hugo (1989) and resumed in the 2010s after the property was restored. In 2015, the cemetery was acquired by the Town of Lincolnville.",
      ]),
    ],
  ),
];
