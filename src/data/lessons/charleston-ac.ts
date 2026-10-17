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

export const charlestonLessonsAC: MarkerLesson[] = [
  lesson(
    "10-133",
    "Supply point for the Siege of Charleston",
    "Gibbes Landing timeline",
    [cited("10-133", "Gibbes Landing", "front and back")],
    [
      {
        kind: "scene",
        id: "landing",
        kicker: "Spring 1780",
        title: "Orange Grove at the creek",
        partLabel: "the landing",
        art: art(
          "m10133-landing.jpg",
          "Illustration of a tidal creek, a low bluff, and a wooden landing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grove",
            label: "Orange Grove",
            x: 32,
            y: 48,
            fact: "At the mouth of this tidal creek is the colonial-era site of Gibbes Landing. Located on a low bluff off the Ashley River, it was part of a plantation owned by John Gibbes and known as Orange Grove or The Grove.",
          },
          {
            id: "encamped",
            label: "Spring 1780",
            x: 74,
            y: 40,
            fact: "In spring 1780, British and Hessian soldiers encamped at the plantation after marching south down the Charleston Neck. The landing subsequently became an important supply point for the Siege of Charleston, one of the worst Patriot losses of the American Revolution.",
          },
        ],
      },
      {
        kind: "scene",
        id: "river",
        kicker: "December 1782",
        title: "Ferried from the west bank",
        partLabel: "the river",
        art: art(
          "m10133-river.jpg",
          "Illustration of boats ferrying barrels and timber on a river. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bank",
            label: "West bank",
            x: 32,
            y: 46,
            fact: "From the river’s west bank, British forces ferried artillery, provisions, and trench building materials to Gibbes Landing, the Neck’s closest firm landing to Charleston proper. Sailors and enslaved moved the supplies to other nearby positions.",
          },
          {
            id: "held",
            label: "December 1782",
            x: 74,
            y: 58,
            fact: "British forces besieged the city for six weeks and occupied it until December 1782. Any remnants of the landing were likely lost when this creek was flooded to create temporary Lake Juanita for the 1901-02 Charleston Exposition.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The siege",
        title: "Weeks the city was besieged",
        partLabel: "six weeks",
        value: 6,
        unit: "weeks",
        meant:
          "What this meant: the marker says British forces besieged the city for six weeks and occupied it until December 1782.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10133-landing.jpg",
          "Illustration of a tidal creek, a low bluff, and a wooden landing. Not a historical photograph.",
        ),
        nowArt: art(
          "m10133-today.jpg",
          "Illustration of a marker beside a tidal creek. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a tidal creek, a low bluff, and a wooden landing, for the colonial-era site the marker calls Gibbes Landing. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a tidal creek. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "encamped",
            year: "Spring 1780",
            label: "British and Hessian soldiers encamp at the plantation.",
            why: "The marker says that in spring 1780, British and Hessian soldiers encamped at the plantation after marching south down the Charleston Neck.",
          },
          {
            id: "supply",
            year: "1780",
            label: "The landing becomes a supply point for the siege.",
            why: "The marker says the landing subsequently became an important supply point for the Siege of Charleston. From the river’s west bank, British forces ferried artillery, provisions, and trench building materials to Gibbes Landing.",
          },
          {
            id: "held",
            year: "December 1782",
            label: "British occupation of the city ends.",
            why: "The marker says British forces besieged the city for six weeks and occupied it until December 1782.",
          },
          {
            id: "lake",
            year: "1901-02",
            label: "The creek is flooded for temporary Lake Juanita.",
            why: "The marker says any remnants of the landing were likely lost when this creek was flooded to create temporary Lake Juanita for the 1901-02 Charleston Exposition.",
          },
        ],
        ["supply", "lake", "encamped", "held"],
      ),
      takeaway([
        "At the mouth of this tidal creek is the colonial-era site of Gibbes Landing. Located on a low bluff off the Ashley River, it was part of a plantation owned by John Gibbes and known as Orange Grove or The Grove.",
        "In spring 1780, British and Hessian soldiers encamped at the plantation after marching south down the Charleston Neck. The landing subsequently became an important supply point for the Siege of Charleston, one of the worst Patriot losses of the American Revolution.",
        "From the river’s west bank, British forces ferried artillery, provisions, and trench building materials to Gibbes Landing, the Neck’s closest firm landing to Charleston proper. British forces besieged the city for six weeks and occupied it until December 1782. Any remnants of the landing were likely lost when this creek was flooded to create temporary Lake Juanita for the 1901-02 Charleston Exposition.",
      ]),
    ],
  ),
  lesson(
    "10-134",
    "The parish church built by 1742",
    "St. John's timeline",
    [
      cited("10-134", "St. John's Episcopal Church", "front and back"),
      span(
        '"47 years" is 1864 minus 1817, the years the marker prints for the fire that destroyed the second church and the year that church was built.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1734",
        title: "A parish of the islands",
        partLabel: "the parish",
        art: art(
          "m10134-church.jpg",
          "Illustration of a small parish church in a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "parish",
            label: "1734",
            x: 32,
            y: 44,
            fact: "The parish of St. John’s, Colleton was created by the S.C. legislature in 1734. It included Johns, Edisto, Wadmalaw, Kiawah, and Seabrook Islands and was previously part of St. Paul’s Parish, one of the ten original Church of England parishes of colonial S.C.",
          },
          {
            id: "first",
            label: "By 1742",
            x: 74,
            y: 56,
            fact: "The first parish church was built at this site by 1742. It fell into ruin after the Revolutionary War.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1817",
        title: "The second church, then the third",
        partLabel: "the churchyard",
        art: art(
          "m10134-yard.jpg",
          "Illustration of a wooden church in a fenced yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "second",
            label: "1817 and 1864",
            x: 32,
            y: 48,
            fact: "After the war, St. John’s became an Episcopal church. By the 1830s most St. John’s communicants were enslaved African Americans. The second St. John’s church was built in 1817 and destroyed by fire in 1864 during the Civil War.",
          },
          {
            id: "third",
            label: "1868, 1873, and 1955",
            x: 74,
            y: 40,
            fact: "Members worshipped at Johns Island Presbyterian Church from 1868 until the third church was built in 1873. The current church dates to 1955.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1817-1864",
        title: "Years from the second church to the fire",
        partLabel: "47 years",
        value: 47,
        unit: "years",
        meant:
          "What this meant: 1864 comes 47 years after 1817. That is the stretch from the year the marker says the second St. John’s church was built to the year it was destroyed by fire during the Civil War.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10134-church.jpg",
          "Illustration of a small parish church in a churchyard. Not a historical photograph.",
        ),
        nowArt: art(
          "m10134-today.jpg",
          "Illustration of a marker beside a church. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small parish church in a churchyard, for the first church the marker says was built at this site by 1742. Not a historical photograph.",
        nowCaption: "Illustration of a marker beside a church. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "parish",
            year: "1734",
            label: "The S.C. legislature creates the parish of St. John’s, Colleton.",
            why: "The marker says the parish of St. John’s, Colleton was created by the S.C. legislature in 1734. It included Johns, Edisto, Wadmalaw, Kiawah, and Seabrook Islands.",
          },
          {
            id: "first",
            year: "By 1742",
            label: "The first parish church is built at this site.",
            why: "The marker says the first parish church was built at this site by 1742. It fell into ruin after the Revolutionary War.",
          },
          {
            id: "second",
            year: "1817",
            label: "The second St. John’s church is built.",
            why: "The marker says that after the war, St. John’s became an Episcopal church, and that the second St. John’s church was built in 1817.",
          },
          {
            id: "fire",
            year: "1864",
            label: "Fire destroys the second church.",
            why: "The marker says the second St. John’s church was destroyed by fire in 1864 during the Civil War.",
          },
        ],
        ["second", "parish", "fire", "first"],
      ),
      takeaway([
        "The parish of St. John’s, Colleton was created by the S.C. legislature in 1734. It included Johns, Edisto, Wadmalaw, Kiawah, and Seabrook Islands and was previously part of St. Paul’s Parish, one of the ten original Church of England parishes of colonial S.C.",
        "The first parish church was built at this site by 1742. It fell into ruin after the Revolutionary War. After the war, St. John’s became an Episcopal church. By the 1830s most St. John’s communicants were enslaved African Americans.",
        "The second St. John’s church was built in 1817 and destroyed by fire in 1864 during the Civil War. Members worshipped at Johns Island Presbyterian Church from 1868 until the third church was built in 1873. The current church dates to 1955.",
      ]),
    ],
  ),
  lesson(
    "10-135",
    "A high school for the East Side",
    "C.A. Brown timeline",
    [cited("10-135", "C.A. Brown High School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1962",
        title: "Built for the East Side",
        partLabel: "the school",
        art: art(
          "m10135-school.jpg",
          "Illustration of a long brick school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "1962",
            x: 32,
            y: 46,
            fact: "This campus was built in 1962 as a high school for African American residents of Charleston’s East Side. Initially known as East Side High School, it was named for longtime school board chairman Charles A. Brown soon after opening. The first principal was Nathaniel L. Manigault.",
          },
          {
            id: "rooms",
            label: "57 classrooms",
            x: 74,
            y: 58,
            fact: "The 57-classroom brick facility originally fronted Blake St. and included a cafetorium, gymnasium, and industrial shop. About 1,400 students in grades 8-12 attended the school in its first year.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1970",
        title: "Panthers, then a merger",
        partLabel: "the schoolyard",
        art: art(
          "m10135-yard.jpg",
          "Illustration of a schoolyard beside a brick school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "colors",
            label: "1970",
            x: 32,
            y: 50,
            fact: "C.A. Brown High School’s mascot was the Panthers. The school colors were black and gold. The school remained predominantly Black after countywide integration in 1970.",
          },
          {
            id: "merged",
            label: "1982, 1984, and 1986",
            x: 74,
            y: 40,
            fact: "C.A. Brown’s last senior class graduated in 1982, when it and Charleston High School were merged into Burke High School. Burke briefly held 9th and 10th grade classes at this site. Trident Technical College acquired the C.A. Brown property in 1984 and moved its downtown Palmer Campus here in 1986.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1962",
        title: "Classrooms in the brick facility",
        partLabel: "57 classrooms",
        value: 57,
        unit: "classrooms",
        meant:
          "What this meant: the marker says the 57-classroom brick facility originally fronted Blake St. and included a cafetorium, gymnasium, and industrial shop.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10135-school.jpg",
          "Illustration of a long brick school. Not a historical photograph.",
        ),
        nowArt: art(
          "m10135-today.jpg",
          "Illustration of a marker beside a brick campus. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a long brick school, for the campus the marker says was built in 1962. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a brick campus. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1962",
            label: "The campus opens as a high school for the East Side.",
            why: "The marker says this campus was built in 1962 as a high school for African American residents of Charleston’s East Side. Initially known as East Side High School, it was named for longtime school board chairman Charles A. Brown soon after opening.",
          },
          {
            id: "integration",
            year: "1970",
            label: "The school remains predominantly Black after countywide integration.",
            why: "The marker says the school remained predominantly Black after countywide integration in 1970.",
          },
          {
            id: "seniors",
            year: "1982",
            label: "The last senior class graduates, and the school is merged into Burke.",
            why: "The marker says C.A. Brown’s last senior class graduated in 1982, when it and Charleston High School were merged into Burke High School. Burke briefly held 9th and 10th grade classes at this site.",
          },
          {
            id: "moved",
            year: "1986",
            label: "Trident Technical College moves its Palmer Campus here.",
            why: "The marker says Trident Technical College acquired the C.A. Brown property in 1984 and moved its downtown Palmer Campus here in 1986.",
          },
        ],
        ["seniors", "built", "moved", "integration"],
      ),
      takeaway([
        "This campus was built in 1962 as a high school for African American residents of Charleston’s East Side. Initially known as East Side High School, it was named for longtime school board chairman Charles A. Brown soon after opening. The first principal was Nathaniel L. Manigault.",
        "The 57-classroom brick facility originally fronted Blake St. and included a cafetorium, gymnasium, and industrial shop. About 1,400 students in grades 8-12 attended the school in its first year. The mascot was the Panthers. The school colors were black and gold.",
        "The school remained predominantly Black after countywide integration in 1970. C.A. Brown’s last senior class graduated in 1982, when it and Charleston High School were merged into Burke High School. Burke briefly held 9th and 10th grade classes at this site. Trident Technical College acquired the C.A. Brown property in 1984 and moved its downtown Palmer Campus here in 1986.",
      ]),
    ],
  ),
  lesson(
    "10-136",
    "A church organized in 1888",
    "New Bethel timeline",
    [
      cited("10-136", "New Bethel African Methodist Episcopal Church", "front and back"),
      span(
        '"94 years" is 1982 minus 1888, the years the marker prints for the rebuilding and the organization of the church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1888",
        title: "A brush arbor, then a wood frame church",
        partLabel: "the church",
        art: art(
          "m10136-church.jpg",
          "Illustration of a brush arbor and a wood frame church with a central tower. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1888",
            x: 32,
            y: 48,
            fact: "New Bethel African Methodist Episcopal (AME) Church organized in 1888. Tradition holds that members initially worshipped under a brush arbor.",
          },
          {
            id: "frame",
            label: "Wood frame",
            x: 74,
            y: 42,
            fact: "They then built at this site a two-story wood frame church that included a central tower and pedimented portico. Early members were mostly local farming families.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1930s to 1950s",
        title: "A clinic for Red Top",
        partLabel: "the churchyard",
        art: art(
          "m10136-yard.jpg",
          "Illustration of a rural churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "redtop",
            label: "Red Top",
            x: 32,
            y: 54,
            fact: "In the 20th century, New Bethel AME Church became an important institution for the Red Top section of Charleston County. It was used as a community meeting place.",
          },
          {
            id: "clinic",
            label: "1930s to 1950s",
            x: 74,
            y: 40,
            fact: "It hosted a county health clinic in the 1930s to 1950s, providing prenatal and other care to local Black residents. The church was rebuilt in 1982.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1888-1982",
        title: "Years from organization to rebuilding",
        partLabel: "94 years",
        value: 94,
        unit: "years",
        meant:
          "What this meant: 1982 comes 94 years after 1888. That is the stretch from the year the marker says New Bethel AME Church organized to the year the church was rebuilt.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10136-church.jpg",
          "Illustration of a brush arbor and a wood frame church with a central tower. Not a historical photograph.",
        ),
        nowArt: art(
          "m10136-today.jpg",
          "Illustration of a marker beside a church. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brush arbor and a wood frame church with a central tower, for the church the marker says was organized in 1888. Not a historical photograph.",
        nowCaption: "Illustration of a marker beside a church. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1888",
            label: "New Bethel AME Church is organized.",
            why: "The marker says New Bethel African Methodist Episcopal (AME) Church organized in 1888. Tradition holds that members initially worshipped under a brush arbor. They then built at this site a two-story wood frame church that included a central tower and pedimented portico.",
          },
          {
            id: "clinic",
            year: "1930s to 1950s",
            label: "The church hosts a county health clinic.",
            why: "The marker says that in the 20th century New Bethel AME Church became an important institution for the Red Top section of Charleston County. It was used as a community meeting place and hosted a county health clinic in the 1930s to 1950s, providing prenatal and other care to local Black residents.",
          },
          {
            id: "rebuilt",
            year: "1982",
            label: "The church is rebuilt.",
            why: "The marker says the church was rebuilt in 1982.",
          },
        ],
        ["rebuilt", "organized", "clinic"],
      ),
      takeaway([
        "New Bethel African Methodist Episcopal (AME) Church organized in 1888. Tradition holds that members initially worshipped under a brush arbor. They then built at this site a two-story wood frame church that included a central tower and pedimented portico. Early members were mostly local farming families.",
        "In the 20th century, New Bethel AME Church became an important institution for the Red Top section of Charleston County. It was used as a community meeting place.",
        "It hosted a county health clinic in the 1930s to 1950s, providing prenatal and other care to local Black residents. The church was rebuilt in 1982.",
      ]),
    ],
  ),
];
