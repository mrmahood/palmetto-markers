import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Fifth Beaufort pass. Same skips as beaufort-d.ts. */

const INTRO =
  "Move through the years on this marker. Tap the picture. Every fact is from the inscription.";

function cited(id: string, name: string, sides: "front" | "front and back"): LessonSource {
  return {
    id: "inscription",
    label: `South Carolina Historical Marker ${id}, “${name},” ${sides} inscription. South Carolina Department of Archives and History, Historical Marker Program.`,
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
    doneLine: "That’s the order on the marker.",
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

export const beaufortLessonsE: MarkerLesson[] = [
  lesson(
    "07-45",
    "St. Peter Catholic Church",
    "St. Peter timeline",
    [
      cited("07-45", "St. Peter Catholic Church", "front and back"),
      span("“166 years” is 2012 minus 1846, the year the church was restored and the year it was built."),
    ],
    [
      {
        kind: "scene",
        id: "greek",
        kicker: "1846",
        title: "The oldest Catholic church in the county",
        partLabel: "1846",
        art: art(
          "stpeter-greek.jpg",
          "Illustration of a Greek Revival church and a brick wall. Not a photograph of St. Peter.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1846",
            x: 55,
            y: 42,
            fact: "Michael O’Connor, a native of Ireland who came to Beaufort in 1822, built this Greek Revival church in 1846 and deeded the church and lot to the bishop. It was dedicated as “St. Peter the Apostle Church.”",
          },
          {
            id: "wall",
            label: "1857",
            x: 22,
            y: 68,
            fact: "The brick wall was built in 1857 by local craftsman Franklin Talbird Jr. During the Civil War the church housed a school for freedmen.",
          },
        ],
      },
      {
        kind: "scene",
        id: "window",
        kicker: "2012",
        title: "A trefoil window, then a restoration",
        partLabel: "the window",
        art: art(
          "stpeter-window.jpg",
          "Illustration of the church with a trefoil window. Not a photograph.",
        ),
        hotspots: [
          {
            id: "window",
            label: "1899",
            x: 52,
            y: 48,
            fact: "The Gothic trefoil window was added in 1899. The first pastor was Rev. J.J. O’Connell, author of Catholicity in the Carolinas and Georgia (1879).",
          },
          {
            id: "later",
            label: "1987 and 2012",
            x: 74,
            y: 36,
            fact: "The parish moved to Lady’s Island in 1987. This church has been used for special events since and was restored in 2012. The churchyard has gravestone art of the 19th and 20th centuries.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1846–2012",
        title: "Years from the building to the restoration",
        partLabel: "years",
        value: 166,
        unit: "years",
        meant: "What this meant: 2012 comes 166 years after 1846. Those are the years the marker gives for building the church and for restoring it.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "1846, then the trefoil window",
        partLabel: "then and later",
        thenArt: art("stpeter-greek.jpg", "Illustration of the 1846 church. Not a photograph."),
        nowArt: art("stpeter-window.jpg", "Illustration of the church with a trefoil window. Not a photograph."),
        thenCaption: "Illustration of a Greek Revival church, for the one built in 1846. Not a photograph.",
        nowCaption: "Illustration of a Gothic trefoil window, added in 1899. The marker says the church was restored in 2012.",
      },
      order(
        [
          {
            id: "built",
            year: "1846",
            label: "O’Connor builds the church and deeds it to the bishop.",
            why: "The marker says he came to Beaufort in 1822 and built the church in 1846.",
          },
          {
            id: "wall",
            year: "1857",
            label: "Franklin Talbird Jr. builds the brick wall.",
            why: "During the Civil War the church housed a school for freedmen.",
          },
          {
            id: "window",
            year: "1899",
            label: "The Gothic trefoil window is added.",
            why: "The marker dates that window to 1899.",
          },
          {
            id: "restore",
            year: "2012",
            label: "The church is restored.",
            why: "The parish moved to Lady’s Island in 1987. The marker dates the restoration to 2012.",
          },
        ],
        ["window", "built", "restore", "wall"],
      ),
      takeaway([
        "St. Peter the Apostle Church, built in 1846 by Michael O’Connor, is the oldest Catholic church in Beaufort County.",
        "Franklin Talbird Jr. built the brick wall in 1857. During the Civil War the church housed a school for freedmen. The trefoil window dates to 1899.",
        "The parish moved to Lady’s Island in 1987. This building was restored in 2012, 166 years after it was built.",
      ]),
    ],
  ),
  lesson(
    "07-47",
    "Gardens Corner",
    "Gardens Corner timeline",
    [
      cited("07-47", "Gardens Corner", "front and back"),
      span("“22 years” is 1970 minus 1948, the years the marker gives for the Gardens Corner Restaurant and Court."),
    ],
    [
      {
        kind: "scene",
        id: "cross",
        kicker: "1795",
        title: "Two roads, then a name",
        partLabel: "the crossroads",
        art: art(
          "gardens-cross.jpg",
          "Illustration of a dirt crossroads, a store, and an inn. Not a photograph of Gardens Corner.",
        ),
        hotspots: [
          {
            id: "roads",
            label: "Before the Revolution",
            x: 40,
            y: 58,
            fact: "The corner was a junction long before the American Revolution. The King’s Highway, now U.S. Highway 17, ran from Charleston to Savannah. Shell Road, now U.S. Highway 21, ran from here to the Port Royal Ferry and on to Beaufort and Port Royal.",
          },
          {
            id: "name",
            label: "By 1795",
            x: 68,
            y: 42,
            fact: "By 1795 the junction was named for Benjamin Garden, whose Fairfield Plantation was nearby.",
          },
        ],
      },
      {
        kind: "scene",
        id: "road",
        kicker: "2007",
        title: "Replaced by an interchange",
        partLabel: "the interchange",
        art: art(
          "gardens-road.jpg",
          "Illustration of a highway interchange with no signs. Not a photograph of the new junction.",
        ),
        hotspots: [
          {
            id: "inn",
            label: "1948–1970",
            x: 34,
            y: 48,
            fact: "Armies camped, marched, and skirmished nearby in the Revolution and again in the Civil War. A store and inn stood here for most of the 19th century. The Gardens Corner Restaurant and Court operated from 1948 to 1970.",
          },
          {
            id: "new",
            label: "2007–2011",
            x: 70,
            y: 55,
            fact: "The historic corner was replaced by a new highway interchange built from 2007 to 2011.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1948–1970",
        title: "Years the marker gives the restaurant",
        partLabel: "years",
        value: 22,
        unit: "years",
        meant: "What this meant: 1970 comes 22 years after 1948. Those are the years the marker prints for the Gardens Corner Restaurant and Court.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "A corner, then a highway",
        partLabel: "then and later",
        thenArt: art("gardens-cross.jpg", "Illustration of the old crossroads. Not a photograph."),
        nowArt: art("gardens-road.jpg", "Illustration of an interchange. Not a photograph."),
        thenCaption: "Illustration of a store and inn at a dirt junction. Not a photograph of Gardens Corner.",
        nowCaption: "Illustration of a highway interchange, for the one built 2007–2011. No road names are drawn on it.",
      },
      order(
        [
          {
            id: "name",
            year: "1795",
            label: "By this year the junction is named for Benjamin Garden.",
            why: "The marker says the roads met here long before the Revolution.",
          },
          {
            id: "inn",
            year: "1800s",
            label: "A store and inn serve travelers for most of the century.",
            why: "The marker also says armies used the ground nearby in both the Revolution and the Civil War.",
          },
          {
            id: "eat",
            year: "1948",
            label: "The Gardens Corner Restaurant and Court opens.",
            why: "The marker dates it to 1948–1970.",
          },
          {
            id: "new",
            year: "2007",
            label: "A new interchange replaces the historic corner.",
            why: "The marker dates that work to 2007–2011.",
          },
        ],
        ["eat", "name", "new", "inn"],
      ),
      takeaway([
        "Gardens Corner joined the King’s Highway and Shell Road long before the Revolution. By 1795 it was named for Benjamin Garden of nearby Fairfield.",
        "Armies used the ground in the Revolution and the Civil War. A store and inn stood here for most of the 19th century, then the Restaurant and Court from 1948 to 1970.",
        "A highway interchange built from 2007 to 2011 replaced the historic corner.",
      ]),
    ],
  ),
  lesson(
    "07-48",
    "Fairfield Plantation",
    "Fairfield timeline",
    [
      cited("07-48", "Fairfield Plantation", "front and back"),
      span("“756” is the acreage the marker prints. It is not a count of years in Benjamin Garden’s life."),
    ],
    [
      {
        kind: "scene",
        id: "fields",
        kicker: "Before the war",
        title: "Seven hundred fifty-six acres",
        partLabel: "the fields",
        art: art(
          "fair-fields.jpg",
          "Illustration of fields, a dirt track, and horses with no riders. Not a photograph of Fairfield.",
        ),
        hotspots: [
          {
            id: "place",
            label: "756 acres",
            x: 36,
            y: 55,
            fact: "Planter Benjamin Garden established this 756-acre plantation before the American Revolution. Gardens Corner was later named for him.",
          },
          {
            id: "horses",
            label: "Horses",
            x: 70,
            y: 48,
            fact: "The marker calls him an avid sportsman, well known in the lowcountry for raising and racing thoroughbred horses. He served in the Lower Granville County Regiment as early as 1756.",
          },
        ],
      },
      {
        kind: "scene",
        id: "track",
        kicker: "1780",
        title: "Colonel, then a parole",
        partLabel: "the war",
        art: art(
          "fair-track.jpg",
          "Illustration of empty paddocks and a dirt track. Not a portrait of Garden.",
        ),
        hotspots: [
          {
            id: "office",
            label: "1775–1776",
            x: 32,
            y: 52,
            fact: "He represented Prince William’s Parish in the 1st and 2nd Provincial Congresses in 1775–76 and in the 1st General Assembly in 1776.",
          },
          {
            id: "rank",
            label: "1778 and 1780",
            x: 68,
            y: 46,
            fact: "He was lieutenant colonel of the Lower Granville County Regiment about 1775–78, then colonel from 1778 to 1780. Captured and paroled when the British took Charleston in 1780, he later gave aid to the Loyalists before the Revolution ended.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The tract",
        title: "Acres the marker gives Fairfield",
        partLabel: "acres",
        value: 756,
        unit: "acres",
        meant: "What this meant: the marker says Garden established this 756-acre plantation before the American Revolution. It does not treat 1736–1789 as a count of years he lived.",
      },
      order(
        [
          {
            id: "militia",
            year: "1756",
            label: "Garden is in the Lower Granville County Regiment.",
            why: "The marker says as early as 1756. The plantation itself is only dated “before the American Revolution.”",
          },
          {
            id: "congress",
            year: "1775",
            label: "He sits in the Provincial Congresses and the 1st General Assembly.",
            why: "The marker dates the congresses to 1775–76 and the assembly to 1776.",
          },
          {
            id: "colonel",
            year: "1778",
            label: "He is colonel of the regiment.",
            why: "The marker says lieutenant colonel about 1775–78, then colonel 1778–80.",
          },
          {
            id: "parole",
            year: "1780",
            label: "He is captured and paroled at Charleston.",
            why: "The marker says he later gave aid to the Loyalists before the Revolution ended.",
          },
        ],
        ["colonel", "militia", "parole", "congress"],
      ),
      takeaway([
        "Benjamin Garden established this 756-acre plantation before the Revolution. Gardens Corner was later named for him.",
        "He was known for raising and racing thoroughbreds, and he was in the Lower Granville County Regiment as early as 1756.",
        "He served in the Provincial Congresses and the 1776 General Assembly, rose to colonel, and was captured and paroled when the British took Charleston in 1780.",
      ]),
    ],
  ),
  lesson(
    "07-49",
    "Wesley Methodist Church",
    "Wesley timeline",
    [cited("07-49", "Wesley Methodist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1833",
        title: "The first Methodist church in Beaufort",
        partLabel: "the meeting house",
        art: art(
          "wesley-house.jpg",
          "Illustration of a plain meeting house. Not a photograph of Wesley.",
        ),
        hotspots: [
          {
            id: "start",
            label: "1833",
            x: 48,
            y: 46,
            fact: "Established in 1833, this was the first Methodist church in Beaufort. It was founded as a mission to slaves and free blacks here and on the neighboring Sea Islands.",
          },
          {
            id: "dedicate",
            label: "1849",
            x: 72,
            y: 58,
            fact: "The congregation had both black and white members, but many more black members before the war. Built first in the meeting-house form, it was dedicated by Bishop William Capers in 1849.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1861",
        title: "A school, then a black minister",
        partLabel: "after 1861",
        art: art(
          "wesley-yard.jpg",
          "Illustration of empty benches by a meeting house. Not a photograph, and not a class.",
        ),
        hotspots: [
          {
            id: "school",
            label: "1861",
            x: 34,
            y: 55,
            fact: "In 1861, after the Federal occupation of Beaufort and the Sea Islands, this church hosted a school for freedmen and continued to serve its black members.",
          },
          {
            id: "minister",
            label: "1873",
            x: 68,
            y: 48,
            fact: "After the war it affiliated with the Methodist Episcopal Church, the Northern Methodist church from 1844 to 1939. Its first black minister was appointed in 1873, during Reconstruction.",
          },
        ],
      },
      order(
        [
          {
            id: "start",
            year: "1833",
            label: "The church is established as a mission.",
            why: "The marker calls it the first Methodist church in Beaufort.",
          },
          {
            id: "dedicate",
            year: "1849",
            label: "Bishop William Capers dedicates the meeting house.",
            why: "The marker says there were many more black members than white before the war.",
          },
          {
            id: "school",
            year: "1861",
            label: "The church hosts a school for freedmen.",
            why: "The marker dates that to the Federal occupation of 1861.",
          },
          {
            id: "minister",
            year: "1873",
            label: "The first black minister is appointed.",
            why: "The marker places that appointment in Reconstruction, after affiliation with the Northern Methodist Episcopal Church.",
          },
        ],
        ["school", "start", "minister", "dedicate"],
      ),
      takeaway([
        "Wesley, established in 1833, was Beaufort’s first Methodist church and a mission to slaves and free blacks.",
        "Bishop William Capers dedicated the meeting house in 1849. In 1861 it hosted a school for freedmen.",
        "After the war it joined the Methodist Episcopal Church. Its first black minister was appointed in 1873.",
      ]),
    ],
  ),
  lesson(
    "07-51",
    "The town of Bluffton",
    "Bluffton timeline",
    [cited("07-51", "Bluffton", "front and back")],
    [
      {
        kind: "scene",
        id: "landing",
        kicker: "1850s",
        title: "A landing on the river",
        partLabel: "the landing",
        art: art(
          "bluffton-landing.jpg",
          "Illustration of a steamboat at a river landing. Not a photograph of Bluffton.",
        ),
        hotspots: [
          {
            id: "names",
            label: "May River, then Kirk’s Bluff",
            x: 28,
            y: 48,
            fact: "The town was first known as May River and later as Kirk’s Bluff, a resort where planters escaped the hot, malarial summers of lowcountry plantations.",
          },
          {
            id: "boat",
            label: "Early 1850s",
            x: 68,
            y: 46,
            fact: "Streets were laid out in the 1830s, much of the early development along Calhoun and Bridge Streets. A steamboat landing completed by the early 1850s increased traffic.",
          },
        ],
      },
      {
        kind: "scene",
        id: "stores",
        kicker: "After the war",
        title: "Stores, then a quieter river",
        partLabel: "the stores",
        art: art(
          "bluffton-stores.jpg",
          "Illustration of a street of wooden stores with no signs. Not a photograph of Bluffton.",
        ),
        hotspots: [
          {
            id: "fire",
            label: "June 4, 1863",
            x: 32,
            y: 50,
            fact: "On June 4, 1863, Union forces set fire to much of the town during a raid and a short battle.",
          },
          {
            id: "later",
            label: "After the war",
            x: 70,
            y: 44,
            fact: "Bluffton then became a local commercial center with a number of general stores. By the mid-20th century new transportation pulled traffic off the river and trade declined. Tourism since the 1990s has brought it back as a resort.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "The river, then the stores",
        partLabel: "then and later",
        thenArt: art("bluffton-landing.jpg", "Illustration of the steamboat landing. Not a photograph."),
        nowArt: art("bluffton-stores.jpg", "Illustration of a store street. Not a photograph."),
        thenCaption: "Illustration of a steamboat landing, for the one completed by the early 1850s. Not a photograph.",
        nowCaption: "Illustration of general stores, for the commercial town the marker describes after the war.",
      },
      order(
        [
          {
            id: "streets",
            year: "1830s",
            label: "The streets are laid out.",
            why: "The marker says much of the early work was along Calhoun and Bridge Streets.",
          },
          {
            id: "boat",
            year: "1850s",
            label: "A steamboat landing is completed.",
            why: "The marker says by the early 1850s, and that it increased traffic.",
          },
          {
            id: "fire",
            year: "1863",
            label: "Union forces burn much of the town.",
            why: "The marker dates the raid and short battle to June 4, 1863.",
          },
          {
            id: "tour",
            year: "1990s",
            label: "Tourism brings the resort back.",
            why: "The marker says trade had declined by the mid-20th century, after traffic left the river.",
          },
        ],
        ["fire", "streets", "tour", "boat"],
      ),
      takeaway([
        "Bluffton was May River, then Kirk’s Bluff, a summer resort for planters. Streets came in the 1830s, and a steamboat landing by the early 1850s.",
        "On June 4, 1863, Union forces burned much of the town in a raid and a short battle.",
        "General stores made it a commercial center after the war. River trade faded by the mid-20th century. Tourism since the 1990s made it a resort again.",
      ]),
    ],
  ),
  lesson(
    "07-52",
    "Berean Church",
    "Berean timeline",
    [
      cited("07-52", "Berean Church", "front and back"),
      span("“34 years” is 1965 minus 1931. The marker says the building was a segregated branch library until 1965, after the library bought it in 1931."),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1892",
        title: "A Gothic church",
        partLabel: "the church",
        art: art(
          "berean-gothic.jpg",
          "Illustration of a small Gothic Revival church. Not a photograph of Berean.",
        ),
        hotspots: [
          {
            id: "found",
            label: "Reconstruction",
            x: 30,
            y: 58,
            fact: "Samuel J. Bampfield, an African American political figure during Reconstruction, founded Berean Presbyterian Church. He served in the S.C. House, was Beaufort’s postmaster, and was clerk of the county court. The marker does not date the founding.",
          },
          {
            id: "built",
            label: "1892",
            x: 60,
            y: 40,
            fact: "In 1892 the congregation bought this lot and built a Gothic Revival church. Solomon P. Hood, later U.S. Minister to Liberia, was the first pastor.",
          },
        ],
      },
      {
        kind: "scene",
        id: "library",
        kicker: "1931",
        title: "A branch library",
        partLabel: "the library",
        art: art(
          "berean-library.jpg",
          "Illustration of blank book spines in a small room. Not a photograph of the branch.",
        ),
        hotspots: [
          {
            id: "lib",
            label: "1931–1965",
            x: 36,
            y: 48,
            fact: "In 1931 the Beaufort Township Library bought the building for a segregated branch library for African Americans. It operated that way until 1965, when this branch closed and the Township Library was desegregated.",
          },
          {
            id: "studio",
            label: "1993",
            x: 72,
            y: 55,
            fact: "The building was later headquarters for the Neighborhood Youth Corps. In 1993 USC Beaufort bought it for an art studio.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1931–1965",
        title: "Years from the purchase to the closing",
        partLabel: "years",
        value: 34,
        unit: "years",
        meant: "What this meant: 1965 comes 34 years after 1931. Those are the years the marker gives for the library’s purchase and for the closing of this segregated branch.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "Church, then library",
        partLabel: "then and later",
        thenArt: art("berean-gothic.jpg", "Illustration of the Gothic church. Not a photograph."),
        nowArt: art("berean-library.jpg", "Illustration of a library room. Not a photograph."),
        thenCaption: "Illustration of a Gothic Revival church, for the one built in 1892. Not a photograph.",
        nowCaption: "Illustration of a reading room, for the branch library the marker dates from 1931 to 1965.",
      },
      order(
        [
          {
            id: "built",
            year: "1892",
            label: "The congregation builds a Gothic Revival church.",
            why: "The marker dates the lot and the building to 1892. It does not date the founding.",
          },
          {
            id: "lib",
            year: "1931",
            label: "The Township Library buys it for a segregated branch.",
            why: "The marker says the branch was for African Americans.",
          },
          {
            id: "close",
            year: "1965",
            label: "The branch closes and the Township Library is desegregated.",
            why: "The marker says the branch had operated until that year.",
          },
          {
            id: "studio",
            year: "1993",
            label: "USC Beaufort buys the building for an art studio.",
            why: "The marker says it had been used by the Neighborhood Youth Corps.",
          },
        ],
        ["close", "built", "studio", "lib"],
      ),
      takeaway([
        "Samuel J. Bampfield founded Berean Presbyterian during Reconstruction. The Gothic Revival church went up in 1892. Solomon P. Hood was the first pastor.",
        "From 1931 to 1965 the building was a segregated branch of the Beaufort Township Library. In 1965 that branch closed and the library was desegregated.",
        "It later housed the Neighborhood Youth Corps. USC Beaufort bought it in 1993 for an art studio.",
      ]),
    ],
  ),
  lesson(
    "07-55",
    "Queen Chapel",
    "Queen Chapel timeline",
    [cited("07-55", "Queen Chapel A.M.E. Church", "front and back")],
    [
      {
        kind: "scene",
        id: "shore",
        kicker: "1865",
        title: "Missionaries at Mitchelville",
        partLabel: "May 1865",
        art: art(
          "queen-shore.jpg",
          "Illustration of a shore and distant cabins. Not a photograph of Hilton Head, and not a portrait.",
        ),
        hotspots: [
          {
            id: "gap",
            label: "Since 1822",
            x: 30,
            y: 52,
            fact: "In May 1865 A.M.E. missionaries Rev. R.H. Cain, Rev. James H.A. Johnson, and James A. Handy arrived on Hilton Head. The marker calls them the first official A.M.E. presence in South Carolina since 1822.",
          },
          {
            id: "sermon",
            label: "Mitchelville",
            x: 70,
            y: 48,
            fact: "They visited the freedmen’s town of Mitchelville, preached a sermon, and left for Charleston.",
          },
        ],
      },
      {
        kind: "scene",
        id: "chapel",
        kicker: "1865",
        title: "Among the early churches",
        partLabel: "the chapel",
        art: art(
          "queen-chapel.jpg",
          "Illustration of a plain wooden chapel. Not a photograph of Queen Chapel.",
        ),
        hotspots: [
          {
            id: "payne",
            label: "1865",
            x: 52,
            y: 42,
            fact: "In 1865 Charleston-born A.M.E. Bishop D.A. Payne returned to South Carolina with missionaries. On Hilton Head they met Rev. James Lynch, who had come in 1863 to work among the freedmen.",
          },
          {
            id: "found",
            label: "An early church",
            x: 24,
            y: 64,
            fact: "The A.M.E. denomination grew rapidly after the Civil War, and Queen Chapel was among the early churches founded. The marker does not print a separate year for the congregation beyond those 1865 visits.",
          },
        ],
      },
      order(
        [
          {
            id: "gap",
            year: "1822",
            label: "Official A.M.E. work in South Carolina lapses after this year.",
            why: "The marker says the 1865 missionaries were the first official presence since 1822.",
          },
          {
            id: "lynch",
            year: "1863",
            label: "Rev. James Lynch comes to work among the freedmen.",
            why: "The marker dates his arrival in South Carolina to 1863.",
          },
          {
            id: "visit",
            year: "1865",
            label: "A.M.E. missionaries return. Queen Chapel is among the early churches.",
            why: "In May 1865 Cain, Johnson, and Handy preached at Mitchelville. In 1865 Bishop D.A. Payne’s missionaries met Lynch. The marker does not say which visit came first, and it does not give Queen Chapel its own founding year.",
          },
        ],
        ["visit", "gap", "lynch"],
      ),
      takeaway([
        "In May 1865, Revs. R.H. Cain and James H.A. Johnson and James A. Handy preached at Mitchelville. The marker calls that the first official A.M.E. presence in South Carolina since 1822.",
        "Bishop D.A. Payne returned the same year with more missionaries and met Rev. James Lynch, who had come in 1863.",
        "Queen Chapel was among the early A.M.E. churches founded after the Civil War. The marker does not print a separate founding year.",
      ]),
    ],
  ),
  lesson(
    "07-57",
    "Cyrus Garvin",
    "Cyrus Garvin timeline",
    [
      cited("07-57", "Cyrus Garvin", "front and back"),
      span("“100” is the acreage the marker says he was farming ten years after 1870, when the figure was 75. “Likely” and “possibly” are the marker’s own words about his early life."),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "About 1870",
        title: "A hall-and-parlor house",
        partLabel: "the house",
        art: art(
          "garvin-house.jpg",
          "Illustration of a small hall-and-parlor house. Not a portrait of Cyrus Garvin, and not a photograph.",
        ),
        hotspots: [
          {
            id: "early",
            label: "What is known",
            x: 30,
            y: 58,
            fact: "Little is known of his early life. The marker says he was likely born into slavery, possibly on a plantation of the Baynard family. In 1868 he was acting as an agent on Ephraim Baynard’s Montpelier plantation.",
          },
          {
            id: "house",
            label: "About 1870",
            x: 64,
            y: 44,
            fact: "He built the house here about 1870. The marker says it is believed to be the oldest extant dwelling built by freedpeople in Bluffton, an extended hall-and-parlor house.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "1880",
        title: "From 75 acres to 100",
        partLabel: "the farm",
        art: art(
          "garvin-fields.jpg",
          "Illustration of a small farm. Not a photograph of the Garvin land.",
        ),
        hotspots: [
          {
            id: "acres",
            label: "1870 and 1880",
            x: 40,
            y: 52,
            fact: "By 1870 he was farming 75 acres, and that number had risen to 100 ten years later. In 1878 he acted as an agent for St. Matthews Baptist Church, helping them acquire land in Bluffton.",
          },
          {
            id: "family",
            label: "1954, 1961, 2001",
            x: 72,
            y: 46,
            fact: "By 1880 he lived here with his wife Ellen, their son Isaac, and Isaac’s wife Janie and son Paul. Janie, who died in 1954, was the last person to inhabit the house. The Garvins owned it until 1961. The Beaufort County Land Trust acquired the land in 2001.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Ten years later",
        title: "Acres he was farming",
        partLabel: "acres",
        value: 100,
        unit: "acres",
        meant: "What this meant: by 1870 he was farming 75 acres. The marker says that number had risen to 100 ten years later.",
      },
      order(
        [
          {
            id: "agent",
            year: "1868",
            label: "He is an agent on Ephraim Baynard’s Montpelier.",
            why: "The marker says little is known before that, and that he was likely born enslaved.",
          },
          {
            id: "farm",
            year: "1870",
            label: "He is farming 75 acres and builds a house about this time.",
            why: "The marker says the house is about 1870 and the 75 acres are “by 1870.”",
          },
          {
            id: "more",
            year: "1880",
            label: "He is farming 100 acres and living here with his family.",
            why: "The marker names Ellen, Isaac, Janie, and Paul. In 1878 he helped St. Matthews Baptist acquire land.",
          },
          {
            id: "trust",
            year: "2001",
            label: "The Land Trust acquires the land.",
            why: "Janie, the last inhabitant, died in 1954. The Garvins owned the property until 1961.",
          },
        ],
        ["more", "agent", "trust", "farm"],
      ),
      takeaway([
        "The marker says little is known of Cyrus Garvin’s early life. He was likely born into slavery, possibly on a Baynard plantation. In 1868 he was an agent at Montpelier.",
        "By 1870 he farmed 75 acres, and 100 a decade later. The house he built about 1870 is believed to be the oldest surviving dwelling built by freedpeople in Bluffton.",
        "Janie Garvin, who died in 1954, was the last to live in it. The family owned it until 1961. The Beaufort County Land Trust acquired the land in 2001.",
      ]),
    ],
  ),
  lesson(
    "07-64",
    "Campbell Chapel",
    "Campbell Chapel timeline",
    [
      cited("07-64", "Campbel Chapel A.M.E.", "front and back"),
      span("“181” is the number of African American members the marker includes in the church’s 216 members in 1861. The heading on the marker omits an l in Campbell; the inscription uses Campbell."),
    ],
    [
      {
        kind: "scene",
        id: "early",
        kicker: "1853",
        title: "Bluffton Methodist Episcopal",
        partLabel: "1853",
        art: art(
          "campbell-early.jpg",
          "Illustration of a wooden church. Not a photograph of the 1853 building.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1853",
            x: 55,
            y: 42,
            fact: "Built in 1853, this was originally Bluffton Methodist Episcopal Church, organized by whites.",
          },
          {
            id: "members",
            label: "1861",
            x: 28,
            y: 62,
            fact: "Its 216 members in 1861 included 181 African Americans, who were likely enslaved to its white congregants. The church caught fire during the Civil War but survived.",
          },
        ],
      },
      {
        kind: "scene",
        id: "later",
        kicker: "1874",
        title: "An A.M.E. church",
        partLabel: "after the war",
        art: art(
          "campbell-later.jpg",
          "Illustration of the wooden church after later changes. Not a photograph.",
        ),
        hotspots: [
          {
            id: "ame",
            label: "1874",
            x: 48,
            y: 40,
            fact: "By 1874, local freedpeople began worshipping here as an African Methodist Episcopal church eventually known as Campbell Chapel.",
          },
          {
            id: "buy",
            label: "The purchase",
            x: 74,
            y: 58,
            fact: "In 1875 it was one of two churches in the A.M.E. Bluffton Mission, which had 190 members. Nine founding trustees bought the building for $500. The marker does not date that purchase. Congregants worshipped here until 2004. The building has been altered several times.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1861",
        title: "African American members that year",
        partLabel: "members",
        value: 181,
        unit: "African American members",
        meant: "What this meant: of the church’s 216 members in 1861, the marker says 181 were African American and were likely enslaved to its white congregants.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "The same church, later altered",
        partLabel: "then and later",
        thenArt: art("campbell-early.jpg", "Illustration of the earlier church. Not a photograph."),
        nowArt: art("campbell-later.jpg", "Illustration of the church after alterations. Not a photograph."),
        thenCaption: "Illustration of a wooden church, for the 1853 Methodist building. Not a photograph.",
        nowCaption: "Illustration of a later wood church. The marker says the building has been altered several times.",
      },
      order(
        [
          {
            id: "built",
            year: "1853",
            label: "The church is built for Bluffton Methodist Episcopal.",
            why: "The marker says whites organized it.",
          },
          {
            id: "members",
            year: "1861",
            label: "216 members include 181 African Americans.",
            why: "The marker says they were likely enslaved to white congregants. A wartime fire did not destroy the church.",
          },
          {
            id: "ame",
            year: "1874",
            label: "Freedpeople begin worshipping here as an A.M.E. church.",
            why: "The marker says it was eventually known as Campbell Chapel.",
          },
          {
            id: "end",
            year: "2004",
            label: "Campbell Chapel worships here until this year.",
            why: "In 1875 the A.M.E. Bluffton Mission had 190 members in two churches. Nine trustees bought this building for $500. The marker does not date the sale.",
          },
        ],
        ["ame", "built", "end", "members"],
      ),
      takeaway([
        "This church was built in 1853 as Bluffton Methodist Episcopal, organized by whites. A fire in the Civil War did not destroy it.",
        "In 1861, 181 of its 216 members were African American, and the marker says they were likely enslaved to white congregants.",
        "By 1874 freedpeople worshipped here as Campbell Chapel. Nine trustees bought the building for $500. The congregation stayed until 2004.",
      ]),
    ],
  ),
  lesson(
    "07-71",
    "Carteret Street Methodist",
    "Carteret Street timeline",
    [cited("07-71", "Carteret Street Methodist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "frame",
        kicker: "1884",
        title: "A union church, then the Methodists",
        partLabel: "the frame church",
        art: art(
          "carteret-frame.jpg",
          "Illustration of a wood-frame church. Not a photograph of the union church.",
        ),
        hotspots: [
          {
            id: "wesley",
            label: "The 1730s",
            x: 30,
            y: 55,
            fact: "Methodism in Beaufort County dates to the 1730s, when denomination founder Rev. John Wesley visited. Antebellum Methodist preachers worked primarily among local enslaved people.",
          },
          {
            id: "org",
            label: "About 1882, then 1884",
            x: 64,
            y: 42,
            fact: "About 1882, white residents formed a union church on this site for several denominations. Local Methodists acquired the property in 1884 and organized Carteret Street Methodist Church. The first assigned pastor was Rev. Henry M. Mood.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brick",
        kicker: "1922",
        title: "A brick church",
        partLabel: "the brick church",
        art: art(
          "carteret-brick.jpg",
          "Illustration of a brick church. Not a photograph of Carteret Street.",
        ),
        hotspots: [
          {
            id: "house",
            label: "1892 and 1921",
            x: 28,
            y: 60,
            fact: "The first parsonage was donated in 1892. Members worshipped in the old wood-frame union church until it was removed in 1921.",
          },
          {
            id: "open",
            label: "December 1922",
            x: 62,
            y: 40,
            fact: "Members obtained nearby lots, had plans drawn for a larger brick church, and built it the next year. It first hosted services in December 1922.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "Wood frame, then brick",
        partLabel: "then and later",
        thenArt: art("carteret-frame.jpg", "Illustration of the frame church. Not a photograph."),
        nowArt: art("carteret-brick.jpg", "Illustration of the brick church. Not a photograph."),
        thenCaption: "Illustration of a wood-frame church, for the union church removed in 1921. Not a photograph.",
        nowCaption: "Illustration of a brick church, for the one that first held services in December 1922.",
      },
      order(
        [
          {
            id: "wesley",
            year: "1730s",
            label: "John Wesley visits Beaufort County.",
            why: "The marker dates Methodism here to that visit.",
          },
          {
            id: "org",
            year: "1884",
            label: "Methodists organize Carteret Street on this site.",
            why: "A union church of several denominations had been formed here about 1882. Mood was the first assigned pastor.",
          },
          {
            id: "down",
            year: "1921",
            label: "The old wood-frame church is removed.",
            why: "The first parsonage had been donated in 1892.",
          },
          {
            id: "open",
            year: "1922",
            label: "The brick church holds its first services.",
            why: "The marker says it was built the year after the frame church came down, and opened in December 1922.",
          },
        ],
        ["down", "wesley", "open", "org"],
      ),
      takeaway([
        "Methodism in Beaufort County dates to a visit by John Wesley in the 1730s. Antebellum preachers worked primarily among enslaved people.",
        "A union church stood here about 1882. Methodists acquired it in 1884 and organized Carteret Street, with Rev. Henry M. Mood as first pastor.",
        "The frame church was removed in 1921. The brick church that replaced it first held services in December 1922.",
      ]),
    ],
  ),
  lesson(
    "07-73",
    "First Zion Baptist",
    "First Zion timeline",
    [
      cited("07-73", "First Zion Baptist Church", "front and back"),
      span("“8” is the number of trustees the marker says secured this site in 1888."),
    ],
    [
      {
        kind: "scene",
        id: "wood",
        kicker: "1888",
        title: "A building already on the lot",
        partLabel: "the wooden church",
        art: art(
          "fzb-wood.jpg",
          "Illustration of a wooden church. Not a photograph of the first building.",
        ),
        hotspots: [
          {
            id: "start",
            label: "Around the Civil War",
            x: 32,
            y: 55,
            fact: "The congregation organized around the time of the Civil War for formerly enslaved African Americans in the Bluffton area. It was first called First African Baptist and later renamed First Zion. Rev. Abraham Murchison, of Savannah, who began preaching along the Sea Islands during the war, founded it.",
          },
          {
            id: "deed",
            label: "1888",
            x: 66,
            y: 42,
            fact: "Eight trustees secured this site in 1888. The deed states that “the First African Baptist Church building” was already on the property. The church was an early member of the Mount Carmel Baptist Association, organized in the late 19th century.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brick",
        kicker: "1959",
        title: "Concrete block, then brick",
        partLabel: "the later church",
        art: art(
          "fzb-brick.jpg",
          "Illustration of a brick-veneer church. Not a photograph of First Zion.",
        ),
        hotspots: [
          {
            id: "block",
            label: "1959",
            x: 48,
            y: 46,
            fact: "A concrete-block building replaced the wooden church in 1959. It was expanded and brick-veneered in the 1960s, later remodeled, and still serves the congregation.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1888",
        title: "Trustees who secured the site",
        partLabel: "trustees",
        value: 8,
        unit: "trustees",
        meant: "What this meant: the marker says eight trustees secured ownership of this site in 1888, when a building called “the First African Baptist Church building” was already there.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "Wood, then brick veneer",
        partLabel: "then and later",
        thenArt: art("fzb-wood.jpg", "Illustration of a wooden church. Not a photograph."),
        nowArt: art("fzb-brick.jpg", "Illustration of a brick-veneer church. Not a photograph."),
        thenCaption: "Illustration of a wooden church, for the building the 1888 deed says was already here.",
        nowCaption: "Illustration of a brick-veneered block church, for the one that replaced the wood building in 1959.",
      },
      order(
        [
          {
            id: "start",
            year: "Civil War",
            label: "The congregation organizes around the time of the war.",
            why: "The marker says “around,” and that Murchison founded it while preaching on the Sea Islands.",
          },
          {
            id: "deed",
            year: "1888",
            label: "Eight trustees secure a site that already has a building.",
            why: "The deed’s phrase is “the First African Baptist Church building.”",
          },
          {
            id: "block",
            year: "1959",
            label: "A concrete-block church replaces the wooden one.",
            why: "The marker dates that replacement to 1959.",
          },
          {
            id: "brick",
            year: "1960s",
            label: "The block church is expanded and brick-veneered.",
            why: "The marker says it was later remodeled and still serves the congregation.",
          },
        ],
        ["block", "start", "brick", "deed"],
      ),
      takeaway([
        "First Zion began around the Civil War as First African Baptist, founded by Rev. Abraham Murchison of Savannah for formerly enslaved people in the Bluffton area.",
        "Eight trustees secured this site in 1888. The deed says the church building was already there.",
        "A concrete-block church replaced the wood one in 1959 and was brick-veneered in the 1960s. It still serves the congregation.",
      ]),
    ],
  ),
  lesson(
    "07-74",
    "A Union encampment",
    "Encampment timeline",
    [cited("07-74", "Union Army Encampment", "front and back")],
    [
      {
        kind: "scene",
        id: "tents",
        kicker: "1862",
        title: "Tents along the Shell Road",
        partLabel: "the camp",
        art: art(
          "camp-tents.jpg",
          "Illustration of tents and a forge on flat ground. Not a photograph, and not a flag.",
        ),
        hotspots: [
          {
            id: "open",
            label: "January 1862",
            x: 32,
            y: 52,
            fact: "In January 1862, U.S. troops camped on the south side of Boundary Street during the occupation of Beaufort. The Army had been consolidating control after its November 1861 victory at Port Royal. This camp was along what was then called the Shell Road.",
          },
          {
            id: "forge",
            label: "Forges",
            x: 74,
            y: 58,
            fact: "A number of forges stood close to Boundary Street. The marker does not count the soldiers.",
          },
        ],
      },
      {
        kind: "scene",
        id: "ground",
        kicker: "1862",
        title: "Drills, then Virginia",
        partLabel: "the parade",
        art: art(
          "camp-ground.jpg",
          "Illustration of an empty parade ground. Not a photograph of Boundary Street.",
        ),
        hotspots: [
          {
            id: "who",
            label: "The regiments",
            x: 34,
            y: 50,
            fact: "Companies from the 1st Massachusetts, 79th New York, and 8th Michigan camped here. Soldiers stayed in tents along what are now Bladen and Congress Streets and drilled on nearby parade grounds.",
          },
          {
            id: "leave",
            label: "By August 1862",
            x: 70,
            y: 46,
            fact: "By August 1862, most of the soldiers encamped here had been transferred to duty in Virginia.",
          },
        ],
      },
      order(
        [
          {
            id: "battle",
            year: "1861",
            label: "The Union wins the Battle of Port Royal.",
            why: "The marker dates that victory to November 1861 and says the occupation of Beaufort followed.",
          },
          {
            id: "open",
            year: "1862",
            label: "In January the camp is set up on the Shell Road.",
            why: "The marker places it on the south side of Boundary Street.",
          },
          {
            id: "leave",
            year: "1862",
            label: "By August most of the soldiers go to Virginia.",
            why: "The marker says most, not all, and names the 1st Massachusetts, 79th New York, and 8th Michigan.",
          },
        ],
        ["leave", "battle", "open"],
      ),
      takeaway([
        "After the November 1861 victory at Port Royal, U.S. troops opened this camp in January 1862 on the south side of Boundary Street, then called the Shell Road.",
        "Companies of the 1st Massachusetts, 79th New York, and 8th Michigan tented along today’s Bladen and Congress Streets, with forges near Boundary and drills on a parade ground.",
        "By August 1862 most of them had been transferred to Virginia. The marker does not count the soldiers.",
      ]),
    ],
  ),
  lesson(
    "07-75",
    "Washington Street Playground",
    "Playground timeline",
    [cited("07-75", "Washington Street Playground", "front and back")],
    [
      {
        kind: "scene",
        id: "yard",
        kicker: "1942",
        title: "The only playground open to them",
        partLabel: "the playground",
        art: art(
          "play-yard.jpg",
          "Illustration of an empty playground. Not a photograph of the site.",
        ),
        hotspots: [
          {
            id: "land",
            label: "1942",
            x: 36,
            y: 55,
            fact: "In 1942 the Beaufort County Negro Recreational Association, a group of local African American leaders, acquired around one acre here for a “Recreational Center for Negro Citizens.” Around one acre, not an exact measure.",
          },
          {
            id: "gear",
            label: "1945–46",
            x: 68,
            y: 48,
            fact: "When it opened it was the only public playground in Beaufort open to African Americans. Equipment was first installed in 1945–46 with support from Beaufort City Council and local civic groups.",
          },
        ],
      },
      {
        kind: "scene",
        id: "park",
        kicker: "1993",
        title: "A park and a community center",
        partLabel: "the park",
        art: art(
          "play-park.jpg",
          "Illustration of a neighborhood park with a plain shelter. Not a photograph.",
        ),
        hotspots: [
          {
            id: "use",
            label: "A gathering place",
            x: 32,
            y: 52,
            fact: "Named for nearby Washington Street, it hosted athletic contests, performances, religious services, and other events for Black residents.",
          },
          {
            id: "merge",
            label: "1959 and 1993",
            x: 66,
            y: 46,
            fact: "In 1959 Youth Center Inc. began a long-term lease. That group and the Association merged in 1993 to form the Beaufort County Community Center. By then the site was known as Washington Street Park.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "Playground, then park",
        partLabel: "then and later",
        thenArt: art("play-yard.jpg", "Illustration of the playground. Not a photograph."),
        nowArt: art("play-park.jpg", "Illustration of the later park. Not a photograph."),
        thenCaption: "Illustration of a playground, for the one opened in the 1940s. Not a photograph.",
        nowCaption: "Illustration of a park shelter, for the site the marker says was known as Washington Street Park by 1993.",
      },
      order(
        [
          {
            id: "land",
            year: "1942",
            label: "The Association acquires the land.",
            why: "The marker says around one acre, for a “Recreational Center for Negro Citizens.”",
          },
          {
            id: "gear",
            year: "1945",
            label: "Playground equipment is first installed.",
            why: "The marker dates that to 1945–46 and says this was the only public playground in Beaufort open to African Americans.",
          },
          {
            id: "lease",
            year: "1959",
            label: "Youth Center Inc. takes a long-term lease.",
            why: "The marker says the ground had become a gathering place for Black residents.",
          },
          {
            id: "merge",
            year: "1993",
            label: "The two groups form the Beaufort County Community Center.",
            why: "The marker says the site was by then called Washington Street Park.",
          },
        ],
        ["lease", "land", "merge", "gear"],
      ),
      takeaway([
        "In 1942 the Beaufort County Negro Recreational Association acquired around one acre for a “Recreational Center for Negro Citizens.”",
        "It was the only public playground in Beaufort open to African Americans. Equipment went in during 1945–46.",
        "Youth Center Inc. leased it in 1959. In 1993 the two groups became the Beaufort County Community Center, and the site was known as Washington Street Park.",
      ]),
    ],
  ),
];
