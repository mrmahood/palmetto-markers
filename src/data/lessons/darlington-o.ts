import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Darlington sites. Facts are from that marker only.
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

export const darlingtonLessonsO: MarkerLesson[] = [
  lesson(
    "16-61",
    "Renamed Mechanicsville Baptist Church",
    "Mount Pleasant Baptist Church timeline",
    [
      cited("16-61", "Mount Pleasant Baptist Church", "front and back"),
      span(
        '"27 years" is 1818 minus 1791, the years the marker prints for the move to Mechanicsville and the sanctuary built here.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1791",
        title: "A sanctuary, and Cashaway merges",
        partLabel: "the sanctuary",
        art: art(
          "m1661-sanctuary.jpg",
          "Illustration of a small wooden meeting house beside a school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Organized by 1785",
            x: 32,
            y: 48,
            fact: "Mount Pleasant Baptist Church, organized by 1785, first met in a nearby school.",
          },
          {
            id: "built",
            label: "Sanctuary in 1791",
            x: 74,
            y: 58,
            fact: "It built a sanctuary here in 1791; that year Cashaway Baptist Church merged with it.",
          },
        ],
      },
      {
        kind: "scene",
        id: "cemetery",
        kicker: "ca. 1789",
        title: "Burials continued until 1956",
        partLabel: "the cemetery",
        art: art(
          "m1661-cemetery.jpg",
          "Illustration of unmarked fieldstones under trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "burials",
            label: "Until 1956",
            x: 32,
            y: 48,
            fact: "This cemetery was established ca. 1789, after Mount Pleasant Baptist Church relocated here; burials continued until 1956.",
          },
          {
            id: "leaders",
            label: "Leaders buried here",
            x: 74,
            y: 58,
            fact: "Prominent area leaders buried here include Maj. Robert Lide (1734-1802), an officer under Gen. Francis Marion; Capt. Thomas E. Hart (1796-1842), for whom Hartsville was named, and planter and state representative John Westfield Lide (1794-1858).",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1791-1818",
        title: "Years from the sanctuary here to the move",
        partLabel: "27 years",
        value: 27,
        unit: "years",
        meant:
          "What this meant: 1818 comes 27 years after 1791. That is the stretch from the year it built a sanctuary here to the year the congregation moved about 2 mi. S to Mechanicsville and was renamed Mechanicsville Baptist Church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1661-sanctuary.jpg",
          "Illustration of a small wooden meeting house beside a school. Not a historical photograph.",
        ),
        nowArt: art(
          "m1661-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small wooden meeting house, for the sanctuary the marker says was built here in 1791. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1785",
            label: "The church is organized.",
            why: "The marker says Mount Pleasant Baptist Church, organized by 1785, first met in a nearby school.",
          },
          {
            id: "sanctuary",
            year: "1791",
            label: "A sanctuary is built here.",
            why: "The marker says it built a sanctuary here in 1791; that year Cashaway Baptist Church merged with it.",
          },
          {
            id: "moved",
            year: "1818",
            label: "The congregation moves to Mechanicsville.",
            why: "The marker says in 1818 the congregation moved about 2 mi. S to Mechanicsville, built a new sanctuary there, and was renamed Mechanicsville Baptist Church.",
          },
        ],
        ["moved", "organized", "sanctuary"],
      ),
      takeaway([
        "Mount Pleasant Baptist Church, organized by 1785, first met in a nearby school.",
        "It built a sanctuary here in 1791; that year Cashaway Baptist Church merged with it.",
        "In 1818 the congregation moved about 2 mi. S to Mechanicsville, built a new sanctuary there, and was renamed Mechanicsville Baptist Church.",
      ]),
    ],
  ),
  lesson(
    "16-62",
    "Named Oates when the post office opened",
    "Oates timeline",
    [
      cited("16-62", "Oates", "front and back"),
      span(
        '"25 years" is 1937 minus 1912, the years the marker prints for the railroad spur that ran to Oates.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "store",
        kicker: "1880",
        title: "A store at the crossroads",
        partLabel: "the general store",
        art: art(
          "m1662-store.jpg",
          "Illustration of an empty country store at a crossroads. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "plantation",
            label: "Plantation in 1824",
            x: 32,
            y: 48,
            fact: "Oates's father James (1786-1873) had acquired a plantation here in 1824. William J. Oates, who moved to Florida and served in the Confederate army in a Florida unit, came home to Darlington District after the war.",
          },
          {
            id: "named",
            label: "Named in 1880",
            x: 74,
            y: 58,
            fact: "Oates, a thriving rural community from the 1880s to the 1930s, grew up around a general store built nearby by William J. Oates (1826-1897). This crossroads was named Oates in 1880, when a post office was opened in the general store. Union Academy, founded about the same time, was succeeded by the Oates School in the 1930s.",
          },
        ],
      },
      {
        kind: "scene",
        id: "spur",
        kicker: "1912-1937",
        title: "A spur line and a bank",
        partLabel: "the spur",
        art: art(
          "m1662-spur.jpg",
          "Illustration of a short rural railroad spur. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rail",
            label: "Spur from 1912 to 1937",
            x: 32,
            y: 48,
            fact: "A spur off the Lydia-Lamar line of the Seaboard Air Line RR ran to Oates from 1912 to 1937.",
          },
          {
            id: "bank",
            label: "Bank founded in 1916",
            x: 74,
            y: 58,
            fact: "The Bank of Oates, founded in 1916, closed during the agricultural depression of the mid-to- late 1920s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1912-1937",
        title: "Years the railroad spur ran to Oates",
        partLabel: "25 years",
        value: 25,
        unit: "years",
        meant:
          "What this meant: 1937 comes 25 years after 1912. That is the stretch the marker prints for the spur off the Lydia-Lamar line of the Seaboard Air Line RR that ran to Oates.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1662-store.jpg",
          "Illustration of an empty country store at a crossroads. Not a historical photograph.",
        ),
        nowArt: art(
          "m1662-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a country general store, for the store the marker says the community grew up around. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "plantation",
            year: "1824",
            label: "James acquires a plantation here.",
            why: "The marker says Oates's father James (1786-1873) had acquired a plantation here in 1824.",
          },
          {
            id: "named",
            year: "1880",
            label: "The crossroads is named Oates.",
            why: "The marker says this crossroads was named Oates in 1880, when a post office was opened in the general store.",
          },
          {
            id: "bank",
            year: "1916",
            label: "The Bank of Oates is founded.",
            why: "The marker says the Bank of Oates, founded in 1916, closed during the agricultural depression of the mid-to- late 1920s.",
          },
        ],
        ["bank", "plantation", "named"],
      ),
      takeaway([
        "Oates, a thriving rural community from the 1880s to the 1930s, grew up around a general store built nearby by William J. Oates (1826-1897).",
        "This crossroads was named Oates in 1880, when a post office was opened in the general store.",
        "A spur off the Lydia-Lamar line of the Seaboard Air Line RR ran to Oates from 1912 to 1937.",
      ]),
    ],
  ),
  lesson(
    "16-63",
    "A four-room cottage later enlarged",
    "Henry C. Burn House timeline",
    [cited("16-63", "Henry C. Burn House", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1882",
        title: "He lived here until his death",
        partLabel: "the house",
        art: art(
          "m1663-house.jpg",
          "Illustration of a small cottage with a carpenter shed and a blacksmith shed. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lived",
            label: "From 1882",
            x: 32,
            y: 48,
            fact: "Henry C. Burn (1839-1912), state representative and Darlington County public servant, lived here from 1882 until his death.",
          },
          {
            id: "cottage",
            label: "Four-room cottage",
            x: 74,
            y: 58,
            fact: "This house, built as a four-room cottage, was later enlarged by Burn’s son Frank. Henry C. Burn also operated a carpenter’s shop and a blacksmith shop on the property.",
          },
        ],
      },
      {
        kind: "scene",
        id: "service",
        kicker: "By 1875",
        title: "Academy, then county offices",
        partLabel: "public service",
        art: art(
          "m1663-academy.jpg",
          "Illustration of a plain wooden academy building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "schooling",
            label: "Back by 1875",
            x: 32,
            y: 48,
            fact: "Burn, born in Chesterfield District, was educated at St. David’s Academy in Society Hill, then at Furman University, before joining the Confederate army. He came back to S.C. and farmed briefly in Chesterfield District but returned to Society Hill by 1875.",
          },
          {
            id: "offices",
            label: "House 1890-92",
            x: 74,
            y: 58,
            fact: "Burn represented Darlington District in the S.C. House 1890-92. He was later postmaster of Society Hill 1893-1900, a delegate to the S.C. Constitutional Convention of 1895, and Darlington County Superintendent of Education 1900-08.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The cottage",
        title: "Rooms when the house was built",
        partLabel: "four rooms",
        value: 4,
        unit: "rooms",
        meant:
          "What this meant: the marker says this house was built as a four-room cottage and was later enlarged by Burn’s son Frank.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1663-house.jpg",
          "Illustration of a small cottage with a carpenter shed and a blacksmith shed. Not a historical photograph.",
        ),
        nowArt: art(
          "m1663-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small cottage with work sheds, for the house the marker says was built as a four-room cottage. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "returned",
            year: "1875",
            label: "Burn returns to Society Hill.",
            why: "The marker says he came back to S.C. and farmed briefly in Chesterfield District but returned to Society Hill by 1875.",
          },
          {
            id: "lived",
            year: "1882",
            label: "Burn lives in this house.",
            why: "The marker says Henry C. Burn (1839-1912), state representative and Darlington County public servant, lived here from 1882 until his death.",
          },
          {
            id: "assembly",
            year: "1890",
            label: "He represents Darlington District in the S.C. House.",
            why: "The marker says Burn represented Darlington District in the S.C. House 1890-92.",
          },
        ],
        ["assembly", "returned", "lived"],
      ),
      takeaway([
        "Henry C. Burn (1839-1912), state representative and Darlington County public servant, lived here from 1882 until his death.",
        "Burn represented Darlington District in the S.C. House 1890-92.",
        "This house, built as a four-room cottage, was later enlarged by Burn’s son Frank.",
      ]),
    ],
  ),
  lesson(
    "16-64",
    "From a brush arbor to a brick sanctuary",
    "Mt. Zion Baptist Church timeline",
    [cited("16-64", "Mt. Zion Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "arbor",
        kicker: "1869",
        title: "Founded by 36 members",
        partLabel: "the founding",
        art: art(
          "m1664-arbor.jpg",
          "Illustration of an empty brush arbor of poles and branches. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Founded in 1869",
            x: 32,
            y: 48,
            fact: "This church, founded in 1869, was organized by 36 black members of nearby Black Creek Baptist Church, who received letters of dismissal to form their own congregation.",
          },
          {
            id: "ministers",
            label: "William Hart, then Alfred",
            x: 74,
            y: 58,
            fact: "Rev. William Hart, its first minister, served until his death in 1872. He was succeeded by his son, Rev. Alfred Hart, who served here 1872-79, after representing Darlington County in the S.C. House 1870-72.",
          },
        ],
      },
      {
        kind: "scene",
        id: "frame",
        kicker: "1890",
        title: "A frame building, then brick",
        partLabel: "the sanctuaries",
        art: art(
          "m1664-frame.jpg",
          "Illustration of a plain wooden frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "site",
            label: "Site bought in 1872",
            x: 32,
            y: 48,
            fact: "The church held its first services in a brush arbor on this site, which its trustees bought from James C. McCallman in 1872. After worshipping under a frame shelter for several years, Mt. Zion built its first permanent sanctuary, a frame building, in 1890.",
          },
          {
            id: "brick",
            label: "Brick in 1979",
            x: 74,
            y: 58,
            fact: "The congregation grew enough to build a second frame church in 1908. The present brick sanctuary was dedicated in 1979.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1869",
        title: "Members who organized the church",
        partLabel: "36 members",
        value: 36,
        unit: "members",
        meant:
          "What this meant: the marker says this church, founded in 1869, was organized by 36 black members of nearby Black Creek Baptist Church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1664-arbor.jpg",
          "Illustration of an empty brush arbor of poles and branches. Not a historical photograph.",
        ),
        nowArt: art(
          "m1664-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brush arbor, for the first services the marker says were held on this site. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1869",
            label: "The church is founded.",
            why: "The marker says this church, founded in 1869, was organized by 36 black members of nearby Black Creek Baptist Church, who received letters of dismissal to form their own congregation.",
          },
          {
            id: "frame",
            year: "1890",
            label: "The first permanent sanctuary is built.",
            why: "The marker says that after worshipping under a frame shelter for several years, Mt. Zion built its first permanent sanctuary, a frame building, in 1890.",
          },
          {
            id: "brick",
            year: "1979",
            label: "The brick sanctuary is dedicated.",
            why: "The marker says the present brick sanctuary was dedicated in 1979.",
          },
        ],
        ["brick", "founded", "frame"],
      ),
      takeaway([
        "This church, founded in 1869, was organized by 36 black members of nearby Black Creek Baptist Church, who received letters of dismissal to form their own congregation.",
        "The church held its first services in a brush arbor on this site, which its trustees bought from James C. McCallman in 1872.",
        "The present brick sanctuary was dedicated in 1979.",
      ]),
    ],
  ),
];
