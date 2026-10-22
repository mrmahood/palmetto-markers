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

export const greenvilleLessonsW: MarkerLesson[] = [
  lesson(
    "23-98",
    "Previously Highland Ave.",
    "Hampton-Pinckney Neighborhood timeline",
    [
      cited("23-98", "Hampton-Pinckney Neighborhood", "front and back"),
      span("42 years is 1902 minus 1860 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "houses",
        kicker: "1890s to 1910s",
        title: "Queen Anne and Craftsman",
        partLabel: "the houses",
        art: art(
          "m2398-houses.jpg",
          "Illustration of Queen Anne and Craftsman houses on a residential street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "styles",
            label: "Queen Anne",
            x: 32,
            y: 48,
            fact: "They reflect the influence of several styles of architecture, especially Queen Anne and Craftsman.",
          },
          {
            id: "development",
            label: "1890s",
            x: 74,
            y: 40,
            fact: "Many homes here date to the area’s original development in the 1890s to 1910s. The Hampton-Pinckney neighborhood is one of the oldest intact collections of residential buildings in Greenville.",
          },
        ],
      },
      {
        kind: "scene",
        id: "streets",
        kicker: "1902",
        title: "Two streets, two names",
        partLabel: "the street names",
        art: art(
          "m2398-street.jpg",
          "Illustration of a tree-lined residential street of older wooden houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "mcbee",
            label: "d.1860",
            x: 32,
            y: 46,
            fact: "Pinckney St. was named for and originally spelled the same as William Pinkney McBee (d.1860), who lived where the street was later laid.",
          },
          {
            id: "renamed",
            label: "1902",
            x: 74,
            y: 58,
            fact: "Previously Highland Ave., Hampton Ave. assumed its current name upon the 1902 death of Gov. Wade Hampton III. In the 1970s residents organized to rehabilitate neighborhood homes that had deteriorated as families moved away after WWII. The name “Hampton-Pinckney” was coined amid those efforts.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1860-1902",
        title: "Years from McBee’s death to the new avenue name",
        partLabel: "42 years",
        value: 42,
        unit: "years",
        meant:
          "What this meant: 1902 comes 42 years after 1860. The marker prints 1860 for the death of William Pinkney McBee and 1902 for the death of Gov. Wade Hampton III, when Hampton Ave. assumed its current name.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2398-houses.jpg",
          "Illustration of Queen Anne and Craftsman houses on a residential street. Not a historical photograph.",
        ),
        nowArt: art(
          "m2398-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of Queen Anne and Craftsman houses, for the homes the marker says reflect those styles and date to the area’s original development in the 1890s to 1910s.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "mcbee",
            year: "1860",
            label: "William Pinkney McBee dies.",
            why: "The marker says Pinckney St. was named for and originally spelled the same as William Pinkney McBee (d.1860), who lived where the street was later laid.",
          },
          {
            id: "renamed",
            year: "1902",
            label: "Hampton Ave. assumes its current name.",
            why: "The marker says that, previously Highland Ave., Hampton Ave. assumed its current name upon the 1902 death of Gov. Wade Hampton III.",
          },
          {
            id: "rehab",
            year: "1970s",
            label: "Residents organize to rehabilitate the homes.",
            why: "The marker says that in the 1970s residents organized to rehabilitate neighborhood homes that had deteriorated as families moved away after WWII. The name “Hampton-Pinckney” was coined amid those efforts.",
          },
        ],
        ["rehab", "mcbee", "renamed"],
      ),
      takeaway([
        "The Hampton-Pinckney neighborhood is one of the oldest intact collections of residential buildings in Greenville.",
        "Previously Highland Ave., Hampton Ave. assumed its current name upon the 1902 death of Gov. Wade Hampton III.",
        "In the 1970s residents organized to rehabilitate neighborhood homes that had deteriorated as families moved away after WWII.",
      ]),
    ],
  ),
  lesson(
    "23-99",
    "Known as “Big John” and “Little John”",
    "John Street School timeline",
    [cited("23-99", "John Street School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1921",
        title: "A six-room brick school",
        partLabel: "the primary school",
        art: art(
          "m2399-school.jpg",
          "Illustration of a one-story brick school building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1921",
            x: 32,
            y: 50,
            fact: "In 1921, John Street School for local white children opened at this site.",
          },
          {
            id: "building",
            label: "Six rooms",
            x: 74,
            y: 38,
            fact: "The six-room, one-story brick building fronted John St., later renamed Asbury Ave. It was designed by architects J.E. Sirrine & Co. and built by contractor J.S. Hamby. It was part of a wave of school construction to serve families in Greenville’s growing suburbs.",
          },
        ],
      },
      {
        kind: "scene",
        id: "grammar",
        kicker: "1929",
        title: "An auditorium and eight classrooms",
        partLabel: "the grammar school",
        art: art(
          "m2399-grammar.jpg",
          "Illustration of a long brick school wing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "added",
            label: "1929",
            x: 32,
            y: 44,
            fact: "It was originally a primary school with a grammar school building added in 1929. The grammar school building fronted the corner of John and Hudson Sts. and included an auditorium, eight classrooms, and office space.",
          },
          {
            id: "names",
            label: "Big John",
            x: 74,
            y: 56,
            fact: "It came to be known as “Big John” and the older primary building as “Little John.” The school’s first African American students enrolled in the mid-1960s. It was majority Black by the time of countywide imtegration in 1970. The school closed in 1971. Both buildings were later razed.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1929",
        title: "Classrooms in the grammar school",
        partLabel: "eight classrooms",
        value: 8,
        unit: "classrooms",
        meant:
          "What this meant: the marker says the grammar school building fronted the corner of John and Hudson Sts. and included an auditorium, eight classrooms, and office space.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2399-school.jpg",
          "Illustration of a one-story brick school building. Not a historical photograph.",
        ),
        nowArt: art(
          "m2399-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a one-story brick school, for the six-room building the marker says opened in 1921 and fronted John St.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "opened",
            year: "1921",
            label: "John Street School opens.",
            why: "The marker says that in 1921, John Street School for local white children opened at this site.",
          },
          {
            id: "added",
            year: "1929",
            label: "A grammar school building is added.",
            why: "The marker says it was originally a primary school with a grammar school building added in 1929.",
          },
          {
            id: "majority",
            year: "1970",
            label: "The school is majority Black.",
            why: "The marker says it was majority Black by the time of countywide imtegration in 1970.",
          },
          {
            id: "closed",
            year: "1971",
            label: "The school closes.",
            why: "The marker says the school closed in 1971. Both buildings were later razed.",
          },
        ],
        ["added", "closed", "opened", "majority"],
      ),
      takeaway([
        "In 1921, John Street School for local white children opened at this site.",
        "It came to be known as “Big John” and the older primary building as “Little John.”",
        "The school closed in 1971. Both buildings were later razed.",
      ]),
    ],
  ),
  lesson(
    "23-100",
    "An important institution for Southernside",
    "Oscar Street School timeline",
    [cited("23-100", "Oscar Street School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1930",
        title: "Six rooms for 360 students",
        partLabel: "the school",
        art: art(
          "m23100-school.jpg",
          "Illustration of a one-story brick-veneer school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1930",
            x: 32,
            y: 48,
            fact: "Oscar Street School for African Americans opened at this site in 1930. The one-story, brick-veneer school cost $16,500 and was built by Jones-McKinney Co.",
          },
          {
            id: "capacity",
            label: "360 students",
            x: 74,
            y: 40,
            fact: "It originally had six rooms with a capacity of 360 students. The first principal of Oscar Street School was Abbie J. Chappelle (1899-1942).",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1961",
        title: "An addition in Southernside",
        partLabel: "the neighborhood",
        art: art(
          "m23100-houses.jpg",
          "Illustration of small wooden houses along a neighborhood street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "southernside",
            label: "Southernside",
            x: 32,
            y: 52,
            fact: "Oscar Street School was an important institution for Greenville’s Southernside neighborhood. Many nearby families lived in small wooden houses, few of which remain.",
          },
          {
            id: "addition",
            label: "1961",
            x: 74,
            y: 36,
            fact: "A 1961 addition to the school was funded by the S.C. equalization program, a state effort to preserve segregation by upgrading Black schools. The school closed in 1970 as part of countywide integration. It was demolished a few years later.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1930",
        title: "Students the six rooms could hold",
        partLabel: "360 students",
        value: 360,
        unit: "students",
        meant:
          "What this meant: the marker says it originally had six rooms with a capacity of 360 students.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m23100-school.jpg",
          "Illustration of a one-story brick-veneer school. Not a historical photograph.",
        ),
        nowArt: art(
          "m23100-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a one-story brick-veneer school, for the school the marker says opened at this site in 1930.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "opened",
            year: "1930",
            label: "Oscar Street School opens.",
            why: "The marker says Oscar Street School for African Americans opened at this site in 1930.",
          },
          {
            id: "addition",
            year: "1961",
            label: "An addition is funded by the equalization program.",
            why: "The marker says a 1961 addition to the school was funded by the S.C. equalization program, a state effort to preserve segregation by upgrading Black schools.",
          },
          {
            id: "closed",
            year: "1970",
            label: "The school closes.",
            why: "The marker says the school closed in 1970 as part of countywide integration. It was demolished a few years later.",
          },
        ],
        ["closed", "opened", "addition"],
      ),
      takeaway([
        "Oscar Street School for African Americans opened at this site in 1930.",
        "It originally had six rooms with a capacity of 360 students.",
        "The school closed in 1970 as part of countywide integration.",
      ]),
    ],
  ),
  lesson(
    "23-101",
    "Sometimes called the Nine Mile House",
    "Spring Park Inn timeline",
    [cited("23-101", "Spring Park Inn", "front and back")],
    [
      {
        kind: "scene",
        id: "inn",
        kicker: "c.1820",
        title: "A residence opened as an inn",
        partLabel: "the early house",
        art: art(
          "m23101-inn.jpg",
          "Illustration of an early wooden house beside a dirt road. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "residence",
            label: "c.1820",
            x: 32,
            y: 46,
            fact: "The Spring Park Inn is one of the oldest surviving buildings in Travelers Rest. Its eastern section likely dates to c.1820 and was originally a residence owned by Aquilla Bradley.",
          },
          {
            id: "opened",
            label: "1851",
            x: 74,
            y: 58,
            fact: "In 1851, C.C. Montgomery acquired the house and surrounding 194 acres and opened it as a public inn for travelers on the adjacent Buncombe Road. The house was first expanded during his ownership. It was sometimes called the Nine Mile House for its distance from the city of Greenville.",
          },
        ],
      },
      {
        kind: "scene",
        id: "spring",
        kicker: "1898",
        title: "Named after a nearby spring",
        partLabel: "the later inn",
        art: art(
          "m23101-spring.jpg",
          "Illustration of a wooden inn beside a spring and a rail line. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "anderson",
            label: "1874",
            x: 32,
            y: 42,
            fact: "In 1860, Montgomery’s property included three dwellings for 19 enslaved people, some of whom likely worked at the inn. Robert Anderson acquired the inn in 1874 and also used it as a post office.",
          },
          {
            id: "named",
            label: "1898",
            x: 74,
            y: 56,
            fact: "His daughter Minnie Hillhouse obtained it after his 1898 death. She expanded the house again and named it Spring Park Inn after a nearby spring. It catered to passengers on the “Swamp Rabbit” rail line which first reached Travelers Rest in 1888 and later stopped at the inn.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1851",
        title: "Acres around the house",
        partLabel: "194 acres",
        value: 194,
        unit: "acres",
        meant:
          "What this meant: the marker says that in 1851, C.C. Montgomery acquired the house and surrounding 194 acres and opened it as a public inn for travelers on the adjacent Buncombe Road.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m23101-inn.jpg",
          "Illustration of an early wooden house beside a dirt road. Not a historical photograph.",
        ),
        nowArt: art(
          "m23101-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of an early wooden house beside a dirt road, for the residence the marker says was owned by Aquilla Bradley and later opened as a public inn.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "residence",
            year: "c.1820",
            label: "The eastern section is a residence.",
            why: "The marker says its eastern section likely dates to c.1820 and was originally a residence owned by Aquilla Bradley.",
          },
          {
            id: "opened",
            year: "1851",
            label: "C.C. Montgomery opens a public inn.",
            why: "The marker says that in 1851, C.C. Montgomery acquired the house and surrounding 194 acres and opened it as a public inn for travelers on the adjacent Buncombe Road.",
          },
          {
            id: "anderson",
            year: "1874",
            label: "Robert Anderson acquires the inn.",
            why: "The marker says Robert Anderson acquired the inn in 1874 and also used it as a post office.",
          },
          {
            id: "named",
            year: "1898",
            label: "Minnie Hillhouse names it Spring Park Inn.",
            why: "The marker says his daughter Minnie Hillhouse obtained it after his 1898 death. She expanded the house again and named it Spring Park Inn after a nearby spring.",
          },
        ],
        ["named", "residence", "anderson", "opened"],
      ),
      takeaway([
        "The Spring Park Inn is one of the oldest surviving buildings in Travelers Rest.",
        "It was sometimes called the Nine Mile House for its distance from the city of Greenville.",
        "She expanded the house again and named it Spring Park Inn after a nearby spring.",
      ]),
    ],
  ),
];
