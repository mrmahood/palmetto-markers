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

export const greenvilleLessonsH: MarkerLesson[] = [
  lesson(
    "23-35",
    "A store near the 1767 boundary",
    "Toney's Store timeline",
    [
      cited("23-35", "Toney's Store", "front and back"),
      span(
        '"13 years" is 1829 minus 1816, the years the marker prints for the store William Toney ran here.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "store",
        kicker: "1816-1829",
        title: "William Toney’s store",
        partLabel: "the store",
        art: art(
          "m2335-store.jpg",
          "Illustration of a plain wooden country store. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "ran",
            label: "1816-1829",
            x: 32,
            y: 52,
            fact: "William Toney, prominent in business and civic affairs in early Greenville and Greenville County, ran a store here 1816-1829.",
          },
          {
            id: "boundary",
            label: "1767",
            x: 74,
            y: 38,
            fact: "The store was near the boundary established in 1767 between Cherokee land to the west and new settlement to the east.",
          },
        ],
      },
      {
        kind: "scene",
        id: "field",
        kicker: "1818",
        title: "Toney’s Old Field",
        partLabel: "the muster ground",
        art: art(
          "m2335-field.jpg",
          "Illustration of an open field beside a plain wooden building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "muster",
            label: "1818",
            x: 32,
            y: 58,
            fact: "The field adjacent to Toney’s Store, called “Toney’s Old Field,” was a militia muster ground from 1818 to the Civil War.",
          },
          {
            id: "guards",
            label: "1855-1861",
            x: 74,
            y: 42,
            fact: "The 15th Regiment was organized in 1794 in the lower part of Greenville County. “The Lower Regiment” was redesignated the 3rd Regiment in 1819. “The Butler Guards,” an independent company from Greenville organized in 1855, also mustered here 1855-1861.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1816-1829",
        title: "Years Toney ran the store",
        partLabel: "13 years",
        value: 13,
        unit: "years",
        meant:
          "What this meant: 1829 comes 13 years after 1816. That is the stretch from the first year the marker gives for the store William Toney ran here to the last year it gives.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2335-store.jpg",
          "Illustration of a plain wooden country store. Not a historical photograph.",
        ),
        nowArt: art(
          "m2335-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden store, for the store the marker says William Toney ran here 1816-1829. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "boundary",
            year: "1767",
            label: "A boundary is established near this store site.",
            why: "The marker says the store was near the boundary established in 1767 between Cherokee land to the west and new settlement to the east.",
          },
          {
            id: "ran",
            year: "1816",
            label: "William Toney runs a store here.",
            why: "The marker says William Toney, prominent in business and civic affairs in early Greenville and Greenville County, ran a store here 1816-1829.",
          },
          {
            id: "hopkins",
            year: "1834",
            label: "John Hopkins acquires this property.",
            why: "The marker says John Hopkins (1793-1837) acquired this property in 1834. His family lived in the old store while building their house, completed ca. 1840.",
          },
          {
            id: "guards",
            year: "1855",
            label: "The Butler Guards muster here.",
            why: "The marker says “The Butler Guards,” an independent company from Greenville organized in 1855, also mustered here 1855-1861.",
          },
        ],
        ["hopkins", "guards", "boundary", "ran"],
      ),
      takeaway([
        "William Toney, prominent in business and civic affairs in early Greenville and Greenville County, ran a store here 1816-1829.",
        "The field adjacent to Toney’s Store, called “Toney’s Old Field,” was a militia muster ground from 1818 to the Civil War.",
        "John Hopkins (1793-1837) acquired this property in 1834. His family lived in the old store while building their house, completed ca. 1840.",
      ]),
    ],
  ),
  lesson(
    "23-37",
    "The estate that named the suburb",
    "Sans Souci timeline",
    [
      cited("23-37", "Sans Souci", "front and back"),
      span(
        '"19 years" is 1924 minus 1905, the years the marker prints for the move to Byrd Blvd. and the start of the Sans Souci Country Club.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1876-77",
        title: "An ornate Second Empire house",
        partLabel: "the house",
        art: art(
          "m2337-house.jpg",
          "Illustration of an ornate house with a mansard roof. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1876-77",
            x: 32,
            y: 46,
            fact: "This early twentieth century suburb takes its name from Sans Souci, the nearby house and estate of Gov. Benjamin F. Perry (1805-1886). In 1876-77 he built an ornate Second Empire house N of this location.",
          },
          {
            id: "governor",
            label: "June 1865",
            x: 74,
            y: 34,
            fact: "Perry, a prominent Unionist before the Civil War, was appointed provisional governor of S.C. by President Andrew Johnson in June 1865 and served until December 1865.",
          },
        ],
      },
      {
        kind: "scene",
        id: "club",
        kicker: "1905",
        title: "A school, a club, then a fire",
        partLabel: "the country club",
        art: art(
          "m2337-club.jpg",
          "Illustration of a large house and an empty lawn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "country",
            label: "1905",
            x: 32,
            y: 54,
            fact: "After B.F. Perry’s death in 1886, the house was briefly a girls’ school. His heirs sold the property in 1902 and it became the Sans Souci Country Club in 1905.",
          },
          {
            id: "burned",
            label: "1927",
            x: 74,
            y: 40,
            fact: "The club moved to Byrd Blvd. and became the Greenville Country Club in 1924. The house burned in 1927. Residential and commercial development in this area from 1911 through World War II featured the name Sans Souci.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1905-1924",
        title: "Years from the club to its move",
        partLabel: "19 years",
        value: 19,
        unit: "years",
        meant:
          "What this meant: 1924 comes 19 years after 1905. That is the stretch from the year the property became the Sans Souci Country Club to the year the club moved to Byrd Blvd. and became the Greenville Country Club.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2337-house.jpg",
          "Illustration of an ornate house with a mansard roof. Not a historical photograph.",
        ),
        nowArt: art(
          "m2337-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an ornate house, for the Second Empire house the marker says Perry built in 1876-77. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "governor",
            year: "June 1865",
            label: "Perry is appointed provisional governor of S.C.",
            why: "The marker says Perry, a prominent Unionist before the Civil War, was appointed provisional governor of S.C. by President Andrew Johnson in June 1865 and served until December 1865.",
          },
          {
            id: "built",
            year: "1876-77",
            label: "Perry builds an ornate Second Empire house.",
            why: "The marker says that in 1876-77 he built an ornate Second Empire house N of this location.",
          },
          {
            id: "country",
            year: "1905",
            label: "The property becomes the Sans Souci Country Club.",
            why: "The marker says that after B.F. Perry’s death in 1886, the house was briefly a girls’ school. His heirs sold the property in 1902 and it became the Sans Souci Country Club in 1905.",
          },
          {
            id: "burned",
            year: "1927",
            label: "The house burns.",
            why: "The marker says the house burned in 1927.",
          },
        ],
        ["burned", "built", "country", "governor"],
      ),
      takeaway([
        "This early twentieth century suburb takes its name from Sans Souci, the nearby house and estate of Gov. Benjamin F. Perry (1805-1886).",
        "Perry, a prominent Unionist before the Civil War, was appointed provisional governor of S.C. by President Andrew Johnson in June 1865 and served until December 1865.",
        "The club moved to Byrd Blvd. and became the Greenville Country Club in 1924. The house burned in 1927.",
      ]),
    ],
  ),
  lesson(
    "23-38",
    "Sixty families at the crossroads",
    "Brutontown timeline",
    [cited("23-38", "Brutontown", "front and back")],
    [
      {
        kind: "scene",
        id: "shop",
        kicker: "1874",
        title: "A house and a blacksmith shop",
        partLabel: "the shop",
        art: art(
          "m2338-shop.jpg",
          "Illustration of a small house and a blacksmith shop. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bought",
            label: "1874",
            x: 32,
            y: 50,
            fact: "Brutontown, an historic African-American community, grew up around the intersection of Paris Mountain Rd. and Rutherford Rd. Benjamin Bruton, a mulatto freedman, bought 1.75 acres here in 1874. He built a house and blacksmith shop, labeled “Bruton’s Shop” on Kyzer’s 1882 map of Greenville County.",
          },
          {
            id: "families",
            label: "1880",
            x: 74,
            y: 36,
            fact: "Other blacks, a few of them tradesmen like Bruton but most tenant farmers, soon moved to this area. By 1880 sixty African-American families lived here.",
          },
        ],
      },
      {
        kind: "scene",
        id: "church",
        kicker: "1921",
        title: "Town lots and the first church",
        partLabel: "the church",
        art: art(
          "m2338-church.jpg",
          "Illustration of a modest wooden church and small houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1921",
            x: 32,
            y: 46,
            fact: "The community, on both sides of Rutherford Rd., was known as “Brutontown” by about 1900. In 1921 farm land was subdivided into town lots, 2 blocks deep and 6 blocks wide. Bruton Temple Baptist Church, the first church here, was founded in 1921.",
          },
          {
            id: "burial",
            label: "Before the Civil War",
            x: 74,
            y: 62,
            fact: "By 1930 Brutontown numbered about 300 residents. The three-acre “Society Burial Ground” on Leo Lewis St., dating from before the Civil War, includes many graves of slaves, free blacks, and freedmen.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1880",
        title: "African-American families living here",
        partLabel: "sixty families",
        value: 60,
        unit: "families",
        meant:
          "What this meant: the marker says that by 1880 sixty African-American families lived here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2338-shop.jpg",
          "Illustration of a small house and a blacksmith shop. Not a historical photograph.",
        ),
        nowArt: art(
          "m2338-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house and a blacksmith shop, for the shop the marker says Benjamin Bruton built after he bought 1.75 acres in 1874. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "bought",
            year: "1874",
            label: "Benjamin Bruton buys 1.75 acres and builds a house and blacksmith shop.",
            why: "The marker says Benjamin Bruton, a mulatto freedman, bought 1.75 acres here in 1874. He built a house and blacksmith shop, labeled “Bruton’s Shop” on Kyzer’s 1882 map of Greenville County.",
          },
          {
            id: "families",
            year: "1880",
            label: "Sixty African-American families live here.",
            why: "The marker says other blacks, a few of them tradesmen like Bruton but most tenant farmers, soon moved to this area, and that by 1880 sixty African-American families lived here.",
          },
          {
            id: "founded",
            year: "1921",
            label: "The first church is founded, and farm land is subdivided.",
            why: "The marker says that in 1921 farm land was subdivided into town lots, 2 blocks deep and 6 blocks wide, and that Bruton Temple Baptist Church, the first church here, was founded in 1921.",
          },
          {
            id: "residents",
            year: "1930",
            label: "Brutontown numbers about 300 residents.",
            why: "The marker says that by 1930 Brutontown numbered about 300 residents.",
          },
        ],
        ["residents", "bought", "founded", "families"],
      ),
      takeaway([
        "Brutontown, an historic African-American community, grew up around the intersection of Paris Mountain Rd. and Rutherford Rd.",
        "By 1880 sixty African-American families lived here.",
        "By 1930 Brutontown numbered about 300 residents. The three-acre “Society Burial Ground” on Leo Lewis St., dating from before the Civil War, includes many graves of slaves, free blacks, and freedmen.",
      ]),
    ],
  ),
  lesson(
    "23-39",
    "Named for the tygers by the river",
    "Tigerville timeline",
    [cited("23-39", "Tigerville", "front and back")],
    [
      {
        kind: "scene",
        id: "roads",
        kicker: "About 1800",
        title: "A church where two roads met",
        partLabel: "the crossroads",
        art: art(
          "m2339-church.jpg",
          "Illustration of a small meeting house at a dirt crossroads. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "After the Revolution",
            x: 32,
            y: 44,
            fact: "Tigerville got its name from early settlers who settled here shortly after the Revolution. They called bobcats they saw here “tygers,” and named the nearby Tyger River.",
          },
          {
            id: "founded",
            label: "About 1800",
            x: 74,
            y: 56,
            fact: "The Head of Tyger Baptist Church, later Tyger Baptist Church, was founded about 1800. A community grew up here centered at the intersection of the State Road, built in 1820, and the Tugaloo Path, an Indian trail.",
          },
        ],
      },
      {
        kind: "scene",
        id: "store",
        kicker: "1881",
        title: "A post office in the general store",
        partLabel: "the store",
        art: art(
          "m2339-store.jpg",
          "Illustration of a plain general store and nearby sheds. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "post",
            label: "1881",
            x: 32,
            y: 50,
            fact: "The first post office here opened in Lemuel Jennings’ general store in 1881, with Jennings as postmaster.",
          },
          {
            id: "stands",
            label: "1904",
            x: 74,
            y: 38,
            fact: "Tigerville, described as “charming and romantic” in 1883, boasted several large houses, a cotton gin, a blacksmith shop, and an academy. Jennings’ store, later operated as Wood General Store for almost 90 years, still stands nearby, as does J.H. Roe & Co., built in 1904.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The later store",
        title: "Years as Wood General Store",
        partLabel: "almost 90 years",
        value: 90,
        unit: "years",
        meant:
          "What this meant: the marker says Jennings’ store was later operated as Wood General Store for almost 90 years.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2339-church.jpg",
          "Illustration of a small meeting house at a dirt crossroads. Not a historical photograph.",
        ),
        nowArt: art(
          "m2339-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a meeting house at a crossroads, for the community the marker says grew up where the State Road, built in 1820, met the Tugaloo Path. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "About 1800",
            label: "The Head of Tyger Baptist Church is founded.",
            why: "The marker says the Head of Tyger Baptist Church, later Tyger Baptist Church, was founded about 1800.",
          },
          {
            id: "road",
            year: "1820",
            label: "The State Road is built.",
            why: "The marker says a community grew up here centered at the intersection of the State Road, built in 1820, and the Tugaloo Path, an Indian trail.",
          },
          {
            id: "post",
            year: "1881",
            label: "The first post office opens in Lemuel Jennings’ store.",
            why: "The marker says the first post office here opened in Lemuel Jennings’ general store in 1881, with Jennings as postmaster.",
          },
          {
            id: "roe",
            year: "1904",
            label: "J.H. Roe & Co. is built.",
            why: "The marker says J.H. Roe & Co., built in 1904, still stands nearby, as does Jennings’ store, later operated as Wood General Store for almost 90 years.",
          },
        ],
        ["roe", "road", "post", "founded"],
      ),
      takeaway([
        "Tigerville got its name from early settlers who settled here shortly after the Revolution. They called bobcats they saw here “tygers,” and named the nearby Tyger River.",
        "The Head of Tyger Baptist Church, later Tyger Baptist Church, was founded about 1800.",
        "Jennings’ store, later operated as Wood General Store for almost 90 years, still stands nearby, as does J.H. Roe & Co., built in 1904.",
      ]),
    ],
  ),
];
