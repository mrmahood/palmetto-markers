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

export const charlestonLessonsAA: MarkerLesson[] = [
  lesson(
    "10-122",
    "James Island’s first black high school",
    "Meggett School timeline",
    [
      cited("10-122", "W. Gresham Meggett School", "front and back"),
      span(
        '"16 years" is 1969 minus 1953, the years the marker prints for the closing of W.G. Meggett High School and the opening of James Island’s first black high school.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1952-53",
        title: "Opened for grades 1-8",
        partLabel: "the school",
        art: art(
          "m10122-school.jpg",
          "Illustration of a school building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1952-53",
            x: 32,
            y: 46,
            fact: "W. Gresham Meggett School opened in 1952-53 to serve grades 1-8. It was quickly expanded to house James Island’s first black high school, opened in 1953.",
          },
          {
            id: "funded",
            label: "Equalization",
            x: 74,
            y: 40,
            fact: "The school was funded by the S.C. equalization program, an effort to preserve segregation by complying with the legal doctrine of “separate but equal.” Several older black schools were eventually consolidated into Meggett School.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1969",
        title: "A community resource, then two closings",
        partLabel: "the yard",
        art: art(
          "m10122-yard.jpg",
          "Illustration of a schoolyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "principal",
            label: "1916-1989",
            x: 32,
            y: 52,
            fact: "Meggett School was an important educational and community resource for African Americans on James Island. The first principal of the combined elementary and high school was Leroy F. Anderson (1916-1989). The school’s mascot was the Eagles.",
          },
          {
            id: "closed",
            label: "1963 and 1969",
            x: 74,
            y: 42,
            fact: "W.G. Meggett Elementary School closed in 1963. W.G. Meggett High School closed in 1969 during integration and became a vocational campus.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1953-1969",
        title: "Years from the opening to the closing",
        partLabel: "16 years",
        value: 16,
        unit: "years",
        meant:
          "What this meant: 1969 comes 16 years after 1953. Those are the years the marker prints for the closing of W.G. Meggett High School and the opening of James Island’s first black high school.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10122-school.jpg",
          "Illustration of a school building. Not a historical photograph.",
        ),
        nowArt: art(
          "m10122-today.jpg",
          "Illustration of a blank roadside marker beside a schoolyard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a school building, for W. Gresham Meggett School, which the marker says opened in 1952-53 to serve grades 1-8. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a schoolyard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "open",
            year: "1952-53",
            label: "W. Gresham Meggett School opens to serve grades 1-8.",
            why: "The marker says W. Gresham Meggett School opened in 1952-53 to serve grades 1-8.",
          },
          {
            id: "high",
            year: "1953",
            label: "James Island’s first black high school opens.",
            why: "The marker says the school was quickly expanded to house James Island’s first black high school, opened in 1953.",
          },
          {
            id: "elem",
            year: "1963",
            label: "W.G. Meggett Elementary School closes.",
            why: "The marker says W.G. Meggett Elementary School closed in 1963.",
          },
          {
            id: "vocational",
            year: "1969",
            label: "W.G. Meggett High School closes and becomes a vocational campus.",
            why: "The marker says W.G. Meggett High School closed in 1969 during integration and became a vocational campus.",
          },
        ],
        ["vocational", "open", "elem", "high"],
      ),
      takeaway([
        "W. Gresham Meggett School opened in 1952-53 to serve grades 1-8. It was quickly expanded to house James Island’s first black high school, opened in 1953.",
        "The school was funded by the S.C. equalization program, an effort to preserve segregation by complying with the legal doctrine of “separate but equal.” Several older black schools were eventually consolidated into Meggett School.",
        "Meggett School was an important educational and community resource for African Americans on James Island. The first principal of the combined elementary and high school was Leroy F. Anderson (1916-1989). The school’s mascot was the Eagles. W.G. Meggett Elementary School closed in 1963. W.G. Meggett High School closed in 1969 during integration and became a vocational campus.",
      ]),
    ],
  ),
  lesson(
    "10-123",
    "One of ten Anglican churches",
    "St. Andrew’s Parish Church timeline",
    [cited("10-123", "St. Andrew's Parish Church", "front and back")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1706",
        title: "Built, expanded, and restored after a fire",
        partLabel: "the church",
        art: art(
          "m10123-church.jpg",
          "Illustration of a cross-shaped church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "act",
            label: "1706",
            x: 32,
            y: 48,
            fact: "St. Andrew’s Parish Church was one of ten Anglican churches established in S.C. by the Church Act of 1706. The church was built in 1706, expanded in 1723, and restored in 1764 after a fire.",
          },
          {
            id: "rector",
            label: "1851-1891",
            x: 74,
            y: 40,
            fact: "It is the only extant colonial cruciform church in South Carolina. Rev. John Grimké Drayton of Magnolia Plantation led the church from 1851 to 1891 and was its longest-serving rector. Col. William Izard Bull of Ashley Hall directed an extensive restoration in 1855.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1891-1948",
        title: "Damaged, dormant, then open again",
        partLabel: "the churchyard",
        art: art(
          "m10123-yard.jpg",
          "Illustration of a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "ministry",
            label: "Before and after the war",
            x: 32,
            y: 54,
            fact: "The parish engaged in an active ministry to enslaved people before the Civil War and to freed people after it. The church was badly damaged in the Charleston Earthquake of 1886.",
          },
          {
            id: "reopened",
            label: "1948",
            x: 74,
            y: 42,
            fact: "It was dormant from 1891 to 1948, when it reopened to serve the growing population of West Ashley. It was listed in the National Register of Historic Places in 1973, survived Hurricane Hugo in 1989, and was restored in 2004-05. St. Andrew’s continues to have an active congregation.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1706",
        title: "Anglican churches in the Church Act",
        partLabel: "ten churches",
        value: 10,
        unit: "churches",
        meant:
          "What this meant: the marker says St. Andrew’s Parish Church was one of ten Anglican churches established in S.C. by the Church Act of 1706.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10123-church.jpg",
          "Illustration of a cross-shaped church. Not a historical photograph.",
        ),
        nowArt: art(
          "m10123-today.jpg",
          "Illustration of a blank roadside marker on a quiet lane. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cross-shaped church, for the church the marker calls the only extant colonial cruciform church in South Carolina. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a quiet lane. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1706",
            label: "The church is built, one of ten under the Church Act.",
            why: "The marker says St. Andrew’s Parish Church was one of ten Anglican churches established in S.C. by the Church Act of 1706. The church was built in 1706.",
          },
          {
            id: "expanded",
            year: "1723",
            label: "The church is expanded.",
            why: "The marker says the church was expanded in 1723.",
          },
          {
            id: "restored",
            year: "1764",
            label: "The church is restored after a fire.",
            why: "The marker says the church was restored in 1764 after a fire.",
          },
          {
            id: "reopened",
            year: "1948",
            label: "The church reopens after being dormant from 1891.",
            why: "The marker says it was dormant from 1891 to 1948, when it reopened to serve the growing population of West Ashley.",
          },
        ],
        ["reopened", "built", "restored", "expanded"],
      ),
      takeaway([
        "St. Andrew’s Parish Church was one of ten Anglican churches established in S.C. by the Church Act of 1706. The church was built in 1706, expanded in 1723, and restored in 1764 after a fire. It is the only extant colonial cruciform church in South Carolina.",
        "Rev. John Grimké Drayton of Magnolia Plantation led the church from 1851 to 1891 and was its longest-serving rector. Col. William Izard Bull of Ashley Hall directed an extensive restoration in 1855. The parish engaged in an active ministry to enslaved people before the Civil War and to freed people after it.",
        "The church was badly damaged in the Charleston Earthquake of 1886. It was dormant from 1891 to 1948, when it reopened to serve the growing population of West Ashley. It was listed in the National Register of Historic Places in 1973, survived Hurricane Hugo in 1989, and was restored in 2004-05. St. Andrew’s continues to have an active congregation.",
      ]),
    ],
  ),
  lesson(
    "10-125",
    "Oldest-known religious body in North Charleston",
    "St. Peter’s A.M.E. Church timeline",
    [
      cited("10-125", "St. Peter's A.M.E. Church", "front and back"),
      span(
        '"10 years" is 1991 minus 1981, the years the marker prints for the family life center and the new sanctuary.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "c.1867",
        title: "Organized under a tent, then a wood frame church",
        partLabel: "the church",
        art: art(
          "m10125-church.jpg",
          "Illustration of a wood frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "c.1867",
            x: 32,
            y: 46,
            fact: "Organized c.1867 by Rev. Caesar Smalls, St. Peter’s African Methodist Episcopal (A.M.E.) Church is the oldest-known religious body in North Charleston. Tradition holds members first worshipped under a tent at Retreat Plantation, which later became the site of the Charleston Navy Yard.",
          },
          {
            id: "parcel",
            label: "By 1871",
            x: 74,
            y: 40,
            fact: "By 1871, they acquired a one-acre parcel at this site, where they built a wood frame church on the south side of the property.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1981",
        title: "Liberty Hill, then a new sanctuary",
        partLabel: "the churchyard",
        art: art(
          "m10125-yard.jpg",
          "Illustration of a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "liberty",
            label: "Liberty Hill",
            x: 32,
            y: 54,
            fact: "St. Peter’s was an important early institution for Liberty Hill, a community of freed people situated north and west of the church. Brick veneer and stained glass windows were added to the church by the 1950s.",
          },
          {
            id: "sanctuary",
            label: "1981 and 1991",
            x: 74,
            y: 42,
            fact: "An education building was built in 1971 and dedicated in 1973. A new sanctuary was built in 1981 to replace the old church, which closed due to damage. It was repaired and reopened as a family life center in 1991.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1981-1991",
        title: "Years from the new sanctuary to the family life center",
        partLabel: "10 years",
        value: 10,
        unit: "years",
        meant:
          "What this meant: 1991 comes 10 years after 1981. Those are the years the marker prints for the family life center and the new sanctuary.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10125-church.jpg",
          "Illustration of a wood frame church. Not a historical photograph.",
        ),
        nowArt: art(
          "m10125-today.jpg",
          "Illustration of a blank roadside marker on a neighborhood street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wood frame church, for the wood frame church the marker says was built on the south side of a one-acre parcel. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a neighborhood street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "c.1867",
            label: "Rev. Caesar Smalls organizes St. Peter’s A.M.E. Church.",
            why: "The marker says the church was organized c.1867 by Rev. Caesar Smalls, and that it is the oldest-known religious body in North Charleston.",
          },
          {
            id: "parcel",
            year: "By 1871",
            label: "Members acquire a one-acre parcel and build a wood frame church.",
            why: "The marker says that by 1871 they acquired a one-acre parcel at this site, where they built a wood frame church on the south side of the property.",
          },
          {
            id: "sanctuary",
            year: "1981",
            label: "A new sanctuary replaces the old church.",
            why: "The marker says a new sanctuary was built in 1981 to replace the old church, which closed due to damage.",
          },
          {
            id: "center",
            year: "1991",
            label: "The old church reopens as a family life center.",
            why: "The marker says it was repaired and reopened as a family life center in 1991.",
          },
        ],
        ["center", "organized", "sanctuary", "parcel"],
      ),
      takeaway([
        "Organized c.1867 by Rev. Caesar Smalls, St. Peter’s African Methodist Episcopal (A.M.E.) Church is the oldest-known religious body in North Charleston. Tradition holds members first worshipped under a tent at Retreat Plantation, which later became the site of the Charleston Navy Yard.",
        "By 1871, they acquired a one-acre parcel at this site, where they built a wood frame church on the south side of the property. St. Peter’s was an important early institution for Liberty Hill, a community of freed people situated north and west of the church. Brick veneer and stained glass windows were added to the church by the 1950s.",
        "An education building was built in 1971 and dedicated in 1973. A new sanctuary was built in 1981 to replace the old church, which closed due to damage. It was repaired and reopened as a family life center in 1991.",
      ]),
    ],
  ),
  lesson(
    "10-126",
    "The south end of Ryan’s Mart",
    "Slave trading complex timeline",
    [
      cited("10-126", "Slave Trading Complex", "front and back"),
      span(
        '"3 years" is 1859 minus 1856, the years the marker prints for the formal auction space and the opening of the Mart.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1856",
        title: "An alleyway that became an auction space",
        partLabel: "the street",
        art: art(
          "m10126-street.jpg",
          "Illustration of an empty street and alley of buildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1856",
            x: 32,
            y: 48,
            fact: "This was the south end of a large slave trading complex known as The Mart or Ryan’s Mart. It was opened in 1856 by Thomas Ryan after the City banned auctions of enslaved people and other goods from near the Exchange building.",
          },
          {
            id: "alley",
            label: "1859",
            x: 74,
            y: 40,
            fact: "At that time, this Chalmers St. lot was an alleyway that led to the rest of the complex, which extended one-block north to Queen St. In 1859, the Mart’s second owner had the alley covered and converted it into a formal auction space.",
          },
        ],
      },
      {
        kind: "scene",
        id: "buildings",
        kicker: "1863",
        title: "Buildings behind the lot, then a museum",
        partLabel: "the buildings",
        art: art(
          "m10126-buildings.jpg",
          "Illustration of empty buildings along a street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "pen",
            label: "1863",
            x: 32,
            y: 52,
            fact: "Behind this lot was a large “slave pen,” kitchen house, four-story “jail” building, and a small structure later recalled as a “dead-house.” None remain. Bombardment during the Civil War forced the Mart’s abandonment in 1863.",
          },
          {
            id: "museum",
            label: "1938",
            x: 74,
            y: 42,
            fact: "Sales of enslaved people continued at other sites until Confederate forces evacuated Charleston in 1865. The Mart buildings later became tenements, portions of which African Americans occupied for decades. The Old Slave Mart Museum opened here in 1938.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1856-1859",
        title: "Years from the opening to the auction space",
        partLabel: "3 years",
        value: 3,
        unit: "years",
        meant:
          "What this meant: 1859 comes 3 years after 1856. Those are the years the marker prints for the formal auction space and the opening of the Mart.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10126-street.jpg",
          "Illustration of an empty street and alley of buildings. Not a historical photograph.",
        ),
        nowArt: art(
          "m10126-today.jpg",
          "Illustration of a blank roadside marker on an empty street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an empty alley between buildings, for the Chalmers St. lot the marker says was an alleyway that led to the rest of the complex. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on an empty street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "1856",
            label: "Thomas Ryan opens the Mart.",
            why: "The marker says this was the south end of a large slave trading complex known as The Mart or Ryan’s Mart. It was opened in 1856 by Thomas Ryan after the City banned auctions of enslaved people and other goods from near the Exchange building.",
          },
          {
            id: "auction",
            year: "1859",
            label: "The alley is covered and made a formal auction space.",
            why: "The marker says that in 1859 the Mart’s second owner had the alley covered and converted it into a formal auction space.",
          },
          {
            id: "abandoned",
            year: "1863",
            label: "Bombardment forces the Mart’s abandonment.",
            why: "The marker says bombardment during the Civil War forced the Mart’s abandonment in 1863.",
          },
          {
            id: "museum",
            year: "1938",
            label: "The Old Slave Mart Museum opens here.",
            why: "The marker says the Mart buildings later became tenements, portions of which African Americans occupied for decades. The Old Slave Mart Museum opened here in 1938.",
          },
        ],
        ["museum", "opened", "abandoned", "auction"],
      ),
      takeaway([
        "This was the south end of a large slave trading complex known as The Mart or Ryan’s Mart. It was opened in 1856 by Thomas Ryan after the City banned auctions of enslaved people and other goods from near the Exchange building. At that time, this Chalmers St. lot was an alleyway that led to the rest of the complex, which extended one-block north to Queen St. In 1859, the Mart’s second owner had the alley covered and converted it into a formal auction space.",
        "Behind this lot was a large “slave pen,” kitchen house, four-story “jail” building, and a small structure later recalled as a “dead-house.” None remain. Bombardment during the Civil War forced the Mart’s abandonment in 1863.",
        "Sales of enslaved people continued at other sites until Confederate forces evacuated Charleston in 1865. The Mart buildings later became tenements, portions of which African Americans occupied for decades. The Old Slave Mart Museum opened here in 1938.",
      ]),
    ],
  ),
];
