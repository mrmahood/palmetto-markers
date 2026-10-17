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

export const charlestonLessonsY: MarkerLesson[] = [
  lesson(
    "10-114",
    "The core of a hospital district",
    "Naval Hospital District timeline",
    [cited("10-114", "Naval Hospital District", "front and back")],
    [
      {
        kind: "scene",
        id: "hospital",
        kicker: "1940-42",
        title: "A multi-wing complex",
        partLabel: "the hospital",
        art: art(
          "m10114-hospital.jpg",
          "Illustration of a multi-wing hospital building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "complex",
            label: "1940-42",
            x: 32,
            y: 46,
            fact: "Constructed 1940-42, this multi-wing complex was the core of a hospital district established to serve the Charleston Navy Yard (1901).",
          },
          {
            id: "dispensary",
            label: "1908",
            x: 74,
            y: 40,
            fact: "Navy personnel, shipyard workers, and their families first received on-site medical care in tents until a dispensary opened in 1908. U.S. entry into WWI prompted construction of the base’s first hospital, a series of one-story wooden structures where injured soldiers and others received treatment.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "By 1945",
        title: "Wards, housing, and a move",
        partLabel: "the district",
        art: art(
          "m10114-yard.jpg",
          "Illustration of hospital buildings around a yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acres",
            label: "By 1945",
            x: 32,
            y: 52,
            fact: "The larger, more modern 1942 hospital was built to serve the shipyard’s growing workforce. By 1945, the district spanned more than 30 acres and included the hospital with treatment wards and administrative and subsistence buildings, housing for nurses and medical officers, and other facilities.",
          },
          {
            id: "moved",
            label: "1973",
            x: 74,
            y: 42,
            fact: "Many buildings were designed in Spanish Colonial Revival style. In 1973, the hospital moved to a new site on Spruill Ave.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "By 1945",
        title: "Acres the district spanned",
        partLabel: "more than 30 acres",
        value: 30,
        unit: "acres",
        meant:
          "What this meant: the marker says that by 1945, the district spanned more than 30 acres and included the hospital with treatment wards and administrative and subsistence buildings, housing for nurses and medical officers, and other facilities. “More than” stays the marker’s word.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10114-hospital.jpg",
          "Illustration of a multi-wing hospital building. Not a historical photograph.",
        ),
        nowArt: art(
          "m10114-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a multi-wing hospital, for the complex the marker says was constructed 1940-42. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "yard",
            year: "1901",
            label: "The Charleston Navy Yard, which this district was established to serve.",
            why: "The marker says this multi-wing complex was the core of a hospital district established to serve the Charleston Navy Yard (1901).",
          },
          {
            id: "dispensary",
            year: "1908",
            label: "A dispensary opens after care in tents.",
            why: "The marker says navy personnel, shipyard workers, and their families first received on-site medical care in tents until a dispensary opened in 1908.",
          },
          {
            id: "built",
            year: "1940-42",
            label: "The multi-wing complex is constructed.",
            why: "The marker says this multi-wing complex was constructed 1940-42. It also says the larger, more modern 1942 hospital was built to serve the shipyard’s growing workforce.",
          },
          {
            id: "moved",
            year: "1973",
            label: "The hospital moves to a new site on Spruill Ave.",
            why: "The marker says that in 1973, the hospital moved to a new site on Spruill Ave.",
          },
        ],
        ["moved", "dispensary", "yard", "built"],
      ),
      takeaway([
        "Constructed 1940-42, this multi-wing complex was the core of a hospital district established to serve the Charleston Navy Yard (1901). Navy personnel, shipyard workers, and their families first received on-site medical care in tents until a dispensary opened in 1908.",
        "U.S. entry into WWI prompted construction of the base’s first hospital, a series of one-story wooden structures where injured soldiers and others received treatment. The larger, more modern 1942 hospital was built to serve the shipyard’s growing workforce.",
        "By 1945, the district spanned more than 30 acres and included the hospital with treatment wards and administrative and subsistence buildings, housing for nurses and medical officers, and other facilities. Many buildings were designed in Spanish Colonial Revival style. In 1973, the hospital moved to a new site on Spruill Ave.",
      ]),
    ],
  ),
  lesson(
    "10-115",
    "Quarters on the former navy yard",
    "Navy Yard Officers' Quarters timeline",
    [cited("10-115", "Navy Yard Officers' Quarters", "front and back")],
    [
      {
        kind: "scene",
        id: "quarters",
        kicker: "2007",
        title: "Listed as a historic district",
        partLabel: "the quarters",
        art: art(
          "m10115-quarters.jpg",
          "Illustration of residences, garages, and smaller quarters. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "listed",
            label: "2007",
            x: 32,
            y: 44,
            fact: "In 2007, nearly 70 acres of the former Charleston Navy Yard (1901) were listed in the National Register of Historic Places as the Navy Yard Officers’ Quarters Historic District.",
          },
          {
            id: "park",
            label: "Chicora Park",
            x: 74,
            y: 56,
            fact: "This area of what was later named Naval Base Charleston is located on a portion of the Olmstead Brothers-designed Chicora Park and includes residences, garages, servant quarters, and recreation facilities built over the first half of the 20th c.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1905",
        title: "Styles and a brick office building",
        partLabel: "the yard",
        art: art(
          "m10115-yard.jpg",
          "Illustration of a brick two-story building and frame houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "styles",
            label: "The styles",
            x: 32,
            y: 48,
            fact: "The prominent siting and grand architecture of many residences here reflected officers’ positions in the base’s military and social hierarchy. Common styles included Neoclassical and Revival (1900s-10s), “Panama Houses” (1930s), and simpler frame homes (1940s).",
          },
          {
            id: "offices",
            label: "1905",
            x: 74,
            y: 40,
            fact: "Built in 1905, the brick, two-story Italian Renaissance Revival building 250 ft. NE housed offices for the Commandant, his staff, and the Captain of the Yard.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1905",
        title: "Feet northeast to the office building",
        partLabel: "250 feet",
        value: 250,
        unit: "feet",
        meant:
          "What this meant: the marker says that, built in 1905, the brick, two-story Italian Renaissance Revival building 250 ft. NE housed offices for the Commandant, his staff, and the Captain of the Yard.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10115-quarters.jpg",
          "Illustration of residences, garages, and smaller quarters. Not a historical photograph.",
        ),
        nowArt: art(
          "m10115-today.jpg",
          "Illustration of a blank roadside marker on a residential street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of residences, for the quarters the marker says were listed in the National Register of Historic Places in 2007. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a residential street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "yard",
            year: "1901",
            label: "The Charleston Navy Yard dates from this year.",
            why: "The marker calls this the former Charleston Navy Yard (1901).",
          },
          {
            id: "offices",
            year: "1905",
            label: "The brick office building is built.",
            why: "The marker says the brick, two-story Italian Renaissance Revival building, built in 1905, housed offices for the Commandant, his staff, and the Captain of the Yard.",
          },
          {
            id: "panama",
            year: "1930s",
            label: "“Panama Houses” are among the common styles.",
            why: "The marker says common styles included Neoclassical and Revival (1900s-10s), “Panama Houses” (1930s), and simpler frame homes (1940s).",
          },
          {
            id: "listed",
            year: "2007",
            label: "Nearly 70 acres are listed in the National Register.",
            why: "The marker says that in 2007, nearly 70 acres of the former Charleston Navy Yard were listed in the National Register of Historic Places as the Navy Yard Officers’ Quarters Historic District.",
          },
        ],
        ["panama", "listed", "yard", "offices"],
      ),
      takeaway([
        "In 2007, nearly 70 acres of the former Charleston Navy Yard (1901) were listed in the National Register of Historic Places as the Navy Yard Officers’ Quarters Historic District.",
        "This area of what was later named Naval Base Charleston is located on a portion of the Olmstead Brothers-designed Chicora Park and includes residences, garages, servant quarters, and recreation facilities built over the first half of the 20th c. The prominent siting and grand architecture of many residences here reflected officers’ positions in the base’s military and social hierarchy.",
        "Common styles included Neoclassical and Revival (1900s-10s), “Panama Houses” (1930s), and simpler frame homes (1940s). Built in 1905, the brick, two-story Italian Renaissance Revival building 250 ft. NE housed offices for the Commandant, his staff, and the Captain of the Yard.",
      ]),
    ],
  ),
  lesson(
    "10-116",
    "A house, then a preservation society",
    "Stevens-Lather House timeline",
    [
      cited("10-116", "Stevens-Lather House", "front and back"),
      span(
        '"11 years" is 1931 minus 1920, the years the marker prints for the nation’s first historic district and the forming of the Society for the Preservation of Old Dwellings.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "c.1843",
        title: "Stevens, then Col. Richard Lathers",
        partLabel: "the house",
        art: art(
          "m10116-house.jpg",
          "Illustration of a Second Empire house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "c.1843",
            x: 32,
            y: 48,
            fact: "Built c.1843, this was home to the family of Samuel and Mary Stevens. In 1870, Col. Richard Lathers bought the home and had architect John Henry Devereux make major alterations in the Second Empire Style.",
          },
          {
            id: "sold",
            label: "1874",
            x: 74,
            y: 40,
            fact: "Lathers was a pro-slavery Unionist who worked in N.Y. before the Civil War. Hoping to promote sectional reconciliation, he hosted joint gatherings of prominent white southerners and northerners here before selling the house in 1874.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "April 21, 1920",
        title: "The Society for the Preservation of Old Dwellings",
        partLabel: "the yard",
        art: art(
          "m10116-yard.jpg",
          "Illustration of a house yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "society",
            label: "April 21, 1920",
            x: 32,
            y: 54,
            fact: "On April 21, 1920, a group of citizens gathered here under the leadership of Susan Pringle Frost and formed the Society for the Preservation of Old Dwellings, the first locally based historic preservation group in the U.S.",
          },
          {
            id: "renamed",
            label: "1931 and 1956",
            x: 74,
            y: 42,
            fact: "The society was instrumental to the creation of the nation’s first historic district in 1931. In 1956, the group was renamed the Preservation Society of Charleston to reflect a widening mission.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1920-1931",
        title: "Years from the society to the historic district",
        partLabel: "11 years",
        value: 11,
        unit: "years",
        meant:
          "What this meant: 1931 comes 11 years after 1920. That is the stretch from the year the Society for the Preservation of Old Dwellings was formed to the year the marker says it was instrumental to the creation of the nation’s first historic district.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10116-house.jpg",
          "Illustration of a Second Empire house. Not a historical photograph.",
        ),
        nowArt: art(
          "m10116-today.jpg",
          "Illustration of a blank roadside marker on a residential street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Second Empire house, for the home the marker says was built c.1843. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a residential street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "c.1843",
            label: "The house is built, home to Samuel and Mary Stevens.",
            why: "The marker says it was built c.1843 and was home to the family of Samuel and Mary Stevens.",
          },
          {
            id: "bought",
            year: "1870",
            label: "Col. Richard Lathers buys the home.",
            why: "The marker says that in 1870, Col. Richard Lathers bought the home and had architect John Henry Devereux make major alterations in the Second Empire Style.",
          },
          {
            id: "society",
            year: "April 21, 1920",
            label: "Citizens form the Society for the Preservation of Old Dwellings.",
            why: "The marker says that on April 21, 1920, a group of citizens gathered here under the leadership of Susan Pringle Frost and formed that society, the first locally based historic preservation group in the U.S.",
          },
          {
            id: "district",
            year: "1931",
            label: "The society is instrumental to the nation’s first historic district.",
            why: "The marker says the society was instrumental to the creation of the nation’s first historic district in 1931.",
          },
        ],
        ["district", "built", "society", "bought"],
      ),
      takeaway([
        "Built c.1843, this was home to the family of Samuel and Mary Stevens. In 1870, Col. Richard Lathers bought the home and had architect John Henry Devereux make major alterations in the Second Empire Style.",
        "Lathers was a pro-slavery Unionist who worked in N.Y. before the Civil War. Hoping to promote sectional reconciliation, he hosted joint gatherings of prominent white southerners and northerners here before selling the house in 1874.",
        "On April 21, 1920, a group of citizens gathered here under the leadership of Susan Pringle Frost and formed the Society for the Preservation of Old Dwellings, the first locally based historic preservation group in the U.S. The society was instrumental to the creation of the nation’s first historic district in 1931. In 1956, the group was renamed the Preservation Society of Charleston to reflect a widening mission.",
      ]),
    ],
  ),
  lesson(
    "10-117",
    "The first of nine federal labs",
    "U.S. Vegetable Laboratory timeline",
    [cited("10-117", "U.S. Vegetable Laboratory", "front and back")],
    [
      {
        kind: "scene",
        id: "lab",
        kicker: "1936",
        title: "Built under the Bankhead-Jones Act",
        partLabel: "the laboratory",
        art: art(
          "m10117-lab.jpg",
          "Illustration of an agricultural laboratory building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1936",
            x: 32,
            y: 46,
            fact: "The U.S. Southeastern Regional Vegetable Breeding Laboratory was built here in 1936, the first of nine federal agriculture labs formed under the 1935 Bankhead-Jones Act.",
          },
          {
            id: "varieties",
            label: "New Deal-era",
            x: 74,
            y: 54,
            fact: "In a New Deal-era effort to aid U.S. farmers, lab scientists worked to develop new produce varieties that were pest-resistant, higher-yielding, and hardy enough to grow in the warm, humid climate of the southern U.S.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "Later",
        title: "A 3-acre site and a 451-acre tract",
        partLabel: "the fields",
        art: art(
          "m10117-fields.jpg",
          "Illustration of vegetable fields and low farm buildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "tract",
            label: "451 acres",
            x: 32,
            y: 50,
            fact: "Later known as the U.S. Vegetable Laboratory, this facility included many buildings on this 3-acre site and a 451-acre tract across the highway.",
          },
          {
            id: "crops",
            label: "The crops",
            x: 74,
            y: 40,
            fact: "Experimenting with plants obtained as far away as India, Iran, Mexico, Turkey, and South America, scientists here bred new strains of crops like watermelon, snap peas, tomatoes, and cabbage, distributing seeds to farmers around the region.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The tract",
        title: "Acres across the highway",
        partLabel: "451 acres",
        value: 451,
        unit: "acres",
        meant:
          "What this meant: the marker says this facility included many buildings on this 3-acre site and a 451-acre tract across the highway.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10117-lab.jpg",
          "Illustration of an agricultural laboratory building. Not a historical photograph.",
        ),
        nowArt: art(
          "m10117-today.jpg",
          "Illustration of a blank roadside marker beside open fields. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an agricultural laboratory, for the U.S. Southeastern Regional Vegetable Breeding Laboratory the marker says was built here in 1936. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside open fields. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "act",
            year: "1935",
            label: "Federal agriculture labs are formed under the Bankhead-Jones Act.",
            why: "The marker says this laboratory was the first of nine federal agriculture labs formed under the 1935 Bankhead-Jones Act.",
          },
          {
            id: "built",
            year: "1936",
            label: "The U.S. Southeastern Regional Vegetable Breeding Laboratory is built here.",
            why: "The marker says that laboratory was built here in 1936.",
          },
          {
            id: "later",
            year: "Later",
            label: "It is known as the U.S. Vegetable Laboratory.",
            why: "The marker says it was later known as the U.S. Vegetable Laboratory, with many buildings on this 3-acre site and a 451-acre tract across the highway.",
          },
        ],
        ["later", "act", "built"],
      ),
      takeaway([
        "The U.S. Southeastern Regional Vegetable Breeding Laboratory was built here in 1936, the first of nine federal agriculture labs formed under the 1935 Bankhead-Jones Act.",
        "In a New Deal-era effort to aid U.S. farmers, lab scientists worked to develop new produce varieties that were pest-resistant, higher-yielding, and hardy enough to grow in the warm, humid climate of the southern U.S.",
        "Later known as the U.S. Vegetable Laboratory, this facility included many buildings on this 3-acre site and a 451-acre tract across the highway. Experimenting with plants obtained as far away as India, Iran, Mexico, Turkey, and South America, scientists here bred new strains of crops like watermelon, snap peas, tomatoes, and cabbage, distributing seeds to farmers around the region.",
      ]),
    ],
  ),
];
