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

export const darlingtonLessonsG: MarkerLesson[] = [
  lesson(
    "16-27",
    "Founded Coker College in 1908",
    "James Lide Coker timeline",
    [
      cited("16-27", "James Lide Coker", "front and back"),
      span(
        '"81 years" is 1918 minus 1837, the years the marker prints for James L. Coker.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "fields",
        kicker: "ca. 1858",
        title: "A planter from Society Hill",
        partLabel: "the planter",
        art: art(
          "m1627-fields.jpg",
          "Illustration of plantation fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "arrived",
            label: "ca. 1858",
            x: 32,
            y: 48,
            fact: "James L. Coker (1837-1918) came here from Society Hill ca. 1858 as a planter.",
          },
          {
            id: "major",
            label: "Major in 1864",
            x: 74,
            y: 40,
            fact: "While serving in the Civil War as a captain in Co. E, 6th Regiment SC Volunteers, he was seriously wounded. Promoted to major in 1864, he was a member of the SC House 1865-66.",
          },
        ],
      },
      {
        kind: "scene",
        id: "home",
        kicker: "1908",
        title: "A college, and a home here",
        partLabel: "the home",
        art: art(
          "m1627-home.jpg",
          "Illustration of a large wooden house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "companies",
            label: "Companies from 1865",
            x: 32,
            y: 46,
            fact: "In 1865 he founded J. L. Coker & Co. and was a founder of the Bank of Darlington (1881); Darlington Manufacturing Co. (1881); Hartsville Railroad (1884); Carolina Fiber (1890) and Southern Novelty (1899), both now Sonoco; Hartsville Oil Mill (1900); Hartsville Cotton Mill (1900); Coker's Pedigreed Seed Co. (1902); and the Bank of Hartsville (1903).",
          },
          {
            id: "college",
            label: "1908 and 1922",
            x: 74,
            y: 58,
            fact: "Major Coker's generosity resulted in the founding of Coker College in 1908. His home, which burned in 1922, was located here.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1837-1918",
        title: "Years the marker gives for Coker",
        partLabel: "81 years",
        value: 81,
        unit: "years",
        meant:
          "What this meant: 1918 comes 81 years after 1837. That is the stretch the marker prints for James L. Coker (1837-1918).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1627-home.jpg",
          "Illustration of a large wooden house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1627-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a large wooden house, for the home the marker says burned in 1922 and was located here. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "arrived",
            year: "ca. 1858",
            label: "Coker comes here from Society Hill as a planter.",
            why: "The marker says James L. Coker (1837-1918) came here from Society Hill ca. 1858 as a planter.",
          },
          {
            id: "major",
            year: "1864",
            label: "He is promoted to major.",
            why: "The marker says that while serving in the Civil War as a captain in Co. E, 6th Regiment SC Volunteers, he was seriously wounded. Promoted to major in 1864, he was a member of the SC House 1865-66.",
          },
          {
            id: "company",
            year: "1865",
            label: "He founds J. L. Coker & Co.",
            why: "The marker says that in 1865 he founded J. L. Coker & Co. and was a founder of the Bank of Darlington (1881); Darlington Manufacturing Co. (1881); Hartsville Railroad (1884); Carolina Fiber (1890) and Southern Novelty (1899), both now Sonoco; Hartsville Oil Mill (1900); Hartsville Cotton Mill (1900); Coker's Pedigreed Seed Co. (1902); and the Bank of Hartsville (1903).",
          },
          {
            id: "college",
            year: "1908",
            label: "Coker College is founded.",
            why: "The marker says Major Coker's generosity resulted in the founding of Coker College in 1908. His home, which burned in 1922, was located here.",
          },
        ],
        ["college", "arrived", "company", "major"],
      ),
      takeaway([
        "James L. Coker (1837-1918) came here from Society Hill ca. 1858 as a planter. While serving in the Civil War as a captain in Co. E, 6th Regiment SC Volunteers, he was seriously wounded.",
        "Promoted to major in 1864, he was a member of the SC House 1865-66. In 1865 he founded J. L. Coker & Co. and was a founder of the Bank of Darlington (1881); Darlington Manufacturing Co. (1881); Hartsville Railroad (1884); Carolina Fiber (1890) and Southern Novelty (1899), both now Sonoco; Hartsville Oil Mill (1900); Hartsville Cotton Mill (1900); Coker's Pedigreed Seed Co. (1902); and the Bank of Hartsville (1903).",
        "Major Coker's generosity resulted in the founding of Coker College in 1908. His home, which burned in 1922, was located here.",
      ]),
    ],
  ),
  lesson(
    "16-28",
    "Known world-wide for crop varieties",
    "David Robert Coker timeline",
    [
      cited("16-28", "David Robert Coker", "front"),
      span(
        '"1 year" is 1901 minus 1900, the years the marker prints for his time as intendant (mayor) of Hartsville.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "crops",
        kicker: "1918",
        title: "Pedigreed Seed Company",
        partLabel: "the crops",
        art: art(
          "m1628-crops.jpg",
          "Illustration of a cotton field and a plain barn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "varieties",
            label: "New varieties",
            x: 32,
            y: 52,
            fact: "Known world-wide for developing new varieties and for perfecting superior strains of agricultural crops (including cotton), Coker, for years was pres. Pedigreed Seed Co., chartered 1918.",
          },
          {
            id: "offices",
            label: "Mayor and trustee",
            x: 74,
            y: 40,
            fact: "He was intendant (mayor) of Hartsville 1900-1901; member National Agricultural Advisory Commission; trustee of University SC and Coker College.",
          },
        ],
      },
      {
        kind: "scene",
        id: "home",
        kicker: "1916",
        title: "A 1916 home, now the college",
        partLabel: "the home",
        art: art(
          "m1628-home.jpg",
          "Illustration of a house beside brick buildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "mayor",
            label: "1900-1901",
            x: 32,
            y: 44,
            fact: "He was intendant (mayor) of Hartsville 1900-1901.",
          },
          {
            id: "home",
            label: "1916 home",
            x: 74,
            y: 60,
            fact: "His 1916 home here is now part of Coker College.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1900-1901",
        title: "Years as intendant of Hartsville",
        partLabel: "1 year",
        value: 1,
        unit: "year",
        meant:
          "What this meant: 1901 comes 1 year after 1900. That is the stretch the marker prints for his time as intendant (mayor) of Hartsville.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1628-home.jpg",
          "Illustration of a house beside brick buildings. Not a historical photograph.",
        ),
        nowArt: art(
          "m1628-today.jpg",
          "Illustration of a blank roadside marker beside a field. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house beside brick buildings, for the 1916 home the marker says is now part of Coker College. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a field. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "mayor",
            year: "1900-1901",
            label: "He is intendant (mayor) of Hartsville.",
            why: "The marker says he was intendant (mayor) of Hartsville 1900-1901.",
          },
          {
            id: "home",
            year: "1916",
            label: "His 1916 home is here.",
            why: "The marker says his 1916 home here is now part of Coker College.",
          },
          {
            id: "charter",
            year: "1918",
            label: "Pedigreed Seed Co. is chartered.",
            why: "The marker says: Known world-wide for developing new varieties and for perfecting superior strains of agricultural crops (including cotton), Coker, for years was pres. Pedigreed Seed Co., chartered 1918.",
          },
        ],
        ["charter", "mayor", "home"],
      ),
      takeaway([
        "Known world-wide for developing new varieties and for perfecting superior strains of agricultural crops (including cotton), Coker, for years was pres. Pedigreed Seed Co., chartered 1918.",
        "He was intendant (mayor) of Hartsville 1900-1901; member National Agricultural Advisory Commission; trustee of University SC and Coker College.",
        "His 1916 home here is now part of Coker College.",
      ]),
    ],
  ),
  lesson(
    "16-29",
    "Paper from native pine wood pulp",
    "Carolina Fiber Co. timeline",
    [cited("16-29", "Carolina Fiber Co.", "front and back")],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "March 20, 1890",
        title: "A mill on Black Creek",
        partLabel: "the mill",
        art: art(
          "m1629-mill.jpg",
          "Illustration of a mill beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "formed",
            label: "March 20, 1890",
            x: 32,
            y: 46,
            fact: "One of the first methods for producing paper from native pine wood pulp was developed by J. L. Coker, Jr. As a result, he with Maj. J. L. Coker and C. J. Woodruff formed the Carolina Fiber Company, March 20, 1890, to manufacture and market wood pulp and paper.",
          },
          {
            id: "merged",
            label: "1941",
            x: 74,
            y: 58,
            fact: "Their mill was on nearby Black Creek. In 1941 the entire operation merged with adjacent Sonoco Products Company.",
          },
        ],
      },
      {
        kind: "scene",
        id: "plant",
        kicker: "1899",
        title: "Southern Novelty becomes Sonoco",
        partLabel: "the plant",
        art: art(
          "m1629-plant.jpg",
          "Illustration of a plain industrial plant. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "directors",
            label: "1899 directors",
            x: 32,
            y: 42,
            fact: "This enterprise was chartered as Southern Novelty Company in 1899; first directors were: Maj. J. L. Coker, J. L. Coker Jr., D. R. Coker, J. J. Lawton, and W. F. Smith.",
          },
          {
            id: "sonoco",
            label: "1923",
            x: 74,
            y: 56,
            fact: "The name was changed to Sonoco Products Company in 1923. Today Sonoco is a leading global manufacturer of packaging products for major industries and employs approximately 16,000 people in 22 countries.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Today",
        title: "People Sonoco employs",
        partLabel: "approximately 16,000 people",
        value: 16000,
        unit: "people",
        meant:
          'What this meant: the marker says Sonoco employs approximately 16,000 people in 22 countries. "Approximately" stays the marker\'s word.',
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1629-mill.jpg",
          "Illustration of a mill beside a creek. Not a historical photograph.",
        ),
        nowArt: art(
          "m1629-today.jpg",
          "Illustration of a blank roadside marker near a creek. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a mill beside a creek, for the mill the marker says was on nearby Black Creek. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker near a creek. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "formed",
            year: "March 20, 1890",
            label: "Carolina Fiber Company is formed.",
            why: "The marker says J. L. Coker, Jr. developed one of the first methods for producing paper from native pine wood pulp. He with Maj. J. L. Coker and C. J. Woodruff formed the Carolina Fiber Company, March 20, 1890, to manufacture and market wood pulp and paper. Their mill was on nearby Black Creek.",
          },
          {
            id: "chartered",
            year: "1899",
            label: "Southern Novelty Company is chartered.",
            why: "The marker says this enterprise was chartered as Southern Novelty Company in 1899; first directors were: Maj. J. L. Coker, J. L. Coker Jr., D. R. Coker, J. J. Lawton, and W. F. Smith.",
          },
          {
            id: "renamed",
            year: "1923",
            label: "The name becomes Sonoco Products Company.",
            why: "The marker says the name was changed to Sonoco Products Company in 1923.",
          },
          {
            id: "merged",
            year: "1941",
            label: "Carolina Fiber merges with Sonoco.",
            why: "The marker says that in 1941 the entire operation merged with adjacent Sonoco Products Company. Today Sonoco is a leading global manufacturer of packaging products for major industries and employs approximately 16,000 people in 22 countries.",
          },
        ],
        ["merged", "formed", "renamed", "chartered"],
      ),
      takeaway([
        "One of the first methods for producing paper from native pine wood pulp was developed by J. L. Coker, Jr. As a result, he with Maj. J. L. Coker and C. J. Woodruff formed the Carolina Fiber Company, March 20, 1890, to manufacture and market wood pulp and paper.",
        "Their mill was on nearby Black Creek. In 1941 the entire operation merged with adjacent Sonoco Products Company. This enterprise was chartered as Southern Novelty Company in 1899; first directors were: Maj. J. L. Coker, J. L. Coker Jr., D. R. Coker, J. J. Lawton, and W. F. Smith.",
        "The name was changed to Sonoco Products Company in 1923. Today Sonoco is a leading global manufacturer of packaging products for major industries and employs approximately 16,000 people in 22 countries.",
      ]),
    ],
  ),
  lesson(
    "16-30",
    "Listed dormant in 1931",
    "Trinity Church timeline",
    [cited("16-30", "Trinity Church", "front")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1833",
        title: "An Episcopal church incorporated",
        partLabel: "the church",
        art: art(
          "m1630-church.jpg",
          "Illustration of a small wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "incorporated",
            label: "1833",
            x: 32,
            y: 44,
            fact: "This Episcopal church, located about 800 ft. N., was incorporated 1833.",
          },
          {
            id: "families",
            label: "Early families",
            x: 74,
            y: 58,
            fact: "Early members associated with the church are said to have been from the Dewitt, Edwards, Evans, Hanford, Hawes, McCollough, Williams and Witherspoon families.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1834",
        title: "Consecrated, later listed dormant",
        partLabel: "the churchyard",
        art: art(
          "m1630-yard.jpg",
          "Illustration of a churchyard beside a wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "consecrated",
            label: "1834",
            x: 32,
            y: 40,
            fact: "In 1834 the present structure was consecrated by Bishop Nathaniel Bowen.",
          },
          {
            id: "dormant",
            label: "1931",
            x: 74,
            y: 56,
            fact: "After many years, the church became inactive and was officially listed as dormant 1931. The building is now maintained by private benefactors.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The site",
        title: "Feet north to the church",
        partLabel: "about 800 feet",
        value: 800,
        unit: "feet",
        meant:
          'What this meant: the marker says this Episcopal church is located about 800 ft. N. "About" stays the marker\'s word.',
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1630-church.jpg",
          "Illustration of a small wooden church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1630-today.jpg",
          "Illustration of a blank roadside marker on a rural road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small wooden church, for the Episcopal church the marker says was incorporated in 1833. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a rural road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "incorporated",
            year: "1833",
            label: "The church is incorporated.",
            why: "The marker says this Episcopal church, located about 800 ft. N., was incorporated 1833. Early members associated with the church are said to have been from the Dewitt, Edwards, Evans, Hanford, Hawes, McCollough, Williams and Witherspoon families.",
          },
          {
            id: "consecrated",
            year: "1834",
            label: "Bishop Nathaniel Bowen consecrates the present structure.",
            why: "The marker says that in 1834 the present structure was consecrated by Bishop Nathaniel Bowen.",
          },
          {
            id: "dormant",
            year: "1931",
            label: "The church is officially listed as dormant.",
            why: "The marker says that after many years, the church became inactive and was officially listed as dormant 1931. The building is now maintained by private benefactors.",
          },
        ],
        ["dormant", "incorporated", "consecrated"],
      ),
      takeaway([
        "This Episcopal church, located about 800 ft. N., was incorporated 1833. Early members associated with the church are said to have been from the Dewitt, Edwards, Evans, Hanford, Hawes, McCollough, Williams and Witherspoon families.",
        "In 1834 the present structure was consecrated by Bishop Nathaniel Bowen.",
        "After many years, the church became inactive and was officially listed as dormant 1931. The building is now maintained by private benefactors.",
      ]),
    ],
  ),
];
