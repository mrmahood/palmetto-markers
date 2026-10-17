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

export const charlestonLessonsT: MarkerLesson[] = [
  lesson(
    "10-92",
    "A records building without combustible materials",
    "Fireproof Building timeline",
    [
      cited("10-92", "Fireproof Building", "front and back"),
      span(
        '"151 years" is 1973 minus 1822, the years the marker prints for the National Historic Landmark and the construction of the Fireproof Building.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "building",
        kicker: "1822-26",
        title: "Designed by Robert Mills",
        partLabel: "the building",
        art: art(
          "m1092-building.jpg",
          "Illustration of a stone public building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "designed",
            label: "1822-26",
            x: 32,
            y: 48,
            fact: "Constructed 1822-26, the County Records Building, known as the Fireproof Building, was designed by Charleston-born architect Robert Mills.",
          },
          {
            id: "materials",
            label: "In place of wood",
            x: 74,
            y: 40,
            fact: "Mills eliminated combustible materials from the design. Stone steps, flagstone flooring, and brownstone sills were used in place of wood. The brick vaulting on the interior carried the weight of the upper floors and eliminated the need for joists. The roof was clad in copper and all window sashes and frames were iron.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1943",
        title: "Greek Revival porticos, then a landmark",
        partLabel: "the porticos",
        art: art(
          "m1092-street.jpg",
          "Illustration of matching porticos on a public building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "porticos",
            label: "Greek Revival",
            x: 32,
            y: 46,
            fact: "Massive brownstone columns with roughcast stucco adorn the matching porticos on the north and south elevations. These porticos place this building within the Greek Revival style and it was the first public building in the city designed in that form.",
          },
          {
            id: "listed",
            label: "1943, 1969, and 1973",
            x: 74,
            y: 58,
            fact: "Home to the S.C. Historical Society since 1943, the Fireproof Building was listed in the National Register of Historic Places in 1969 and was declared a National Historic Landmark in 1973.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1822-1973",
        title: "Years from construction to the landmark",
        partLabel: "151 years",
        value: 151,
        unit: "years",
        meant:
          "What this meant: 1973 comes 151 years after 1822. That is the stretch from the first year the marker prints for construction, 1822-26, to the year it was declared a National Historic Landmark.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1092-building.jpg",
          "Illustration of a stone public building. Not a historical photograph.",
        ),
        nowArt: art(
          "m1092-today.jpg",
          "Illustration of a marker beside a stone public building. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a stone public building, for the County Records Building the marker says was constructed 1822-26. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a stone public building. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1822-26",
            label: "The County Records Building is constructed.",
            why: "The marker says it was constructed 1822-26, known as the Fireproof Building, and designed by Charleston-born architect Robert Mills.",
          },
          {
            id: "society",
            year: "1943",
            label: "It is home to the S.C. Historical Society.",
            why: "The marker says it has been home to the S.C. Historical Society since 1943.",
          },
          {
            id: "register",
            year: "1969",
            label: "It is listed in the National Register.",
            why: "The marker says the Fireproof Building was listed in the National Register of Historic Places in 1969.",
          },
          {
            id: "landmark",
            year: "1973",
            label: "It is declared a National Historic Landmark.",
            why: "The marker says it was declared a National Historic Landmark in 1973.",
          },
        ],
        ["society", "landmark", "built", "register"],
      ),
      takeaway([
        "Constructed 1822-26, the County Records Building, known as the Fireproof Building, was designed by Charleston-born architect Robert Mills. Mills eliminated combustible materials from the design.",
        "Stone steps, flagstone flooring, and brownstone sills were used in place of wood. The brick vaulting on the interior carried the weight of the upper floors and eliminated the need for joists. The roof was clad in copper and all window sashes and frames were iron.",
        "Massive brownstone columns with roughcast stucco adorn the matching porticos on the north and south elevations. These porticos place this building within the Greek Revival style and it was the first public building in the city designed in that form. Home to the S.C. Historical Society since 1943, the Fireproof Building was listed in the National Register of Historic Places in 1969 and was declared a National Historic Landmark in 1973.",
      ]),
    ],
  ),
  lesson(
    "10-94",
    "Reported as the first successful artesian supply",
    "Charleston Public Water System timeline",
    [cited("10-94", "Charleston Public Water System", "front and back")],
    [
      {
        kind: "scene",
        id: "works",
        kicker: "1879",
        title: "A well drilled near this site",
        partLabel: "the well",
        art: art(
          "m1094-works.jpg",
          "Illustration of a waterworks and a drilling derrick. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "council",
            label: "1823",
            x: 32,
            y: 44,
            fact: "In 1823, after learning of London’s success with artesian wells, City Council agreed that deep artesian wells would be feasible for the city and its growing population.",
          },
          {
            id: "yield",
            label: "1879",
            x: 74,
            y: 56,
            fact: "Several pilot projects followed and in 1879 a 1,970-feet deep well was drilled near this site. With an impressive 700,000 gallons per day yield, it is reported to be the first successful artesian supply in the region.",
          },
        ],
      },
      {
        kind: "scene",
        id: "pipe",
        kicker: "1903",
        title: "A franchise, then the city plant",
        partLabel: "the pipe and the reservoir",
        art: art(
          "m1094-pipe.jpg",
          "Illustration of a water main and a dammed creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "franchise",
            label: "1903",
            x: 32,
            y: 50,
            fact: "The artesian supply was Charleston’s primary water source until 1903 when a franchise was granted to the Charleston Light and Water Co. to take over the city system and construct a new plant and reservoir by damming Goose Creek.",
          },
          {
            id: "acquired",
            label: "1917",
            x: 74,
            y: 40,
            fact: "In 1917, the city acquired the plant and properties, forming the Commissioners of Public Works, now Charleston Water System, to manage and operate the city water system.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1879",
        title: "Gallons per day from the well",
        partLabel: "700,000 gallons per day",
        value: 700000,
        unit: "gallons per day",
        meant:
          "What this meant: the marker says the well drilled near this site in 1879 had an impressive 700,000 gallons per day yield, and it is reported to be the first successful artesian supply in the region.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1094-works.jpg",
          "Illustration of a waterworks and a drilling derrick. Not a historical photograph.",
        ),
        nowArt: art(
          "m1094-today.jpg",
          "Illustration of a marker beside a waterworks. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a waterworks and a drilling derrick, for the well the marker says was drilled near this site in 1879. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a waterworks. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "council",
            year: "1823",
            label: "City Council agrees deep artesian wells would be feasible.",
            why: "The marker says that in 1823, after learning of London’s success with artesian wells, City Council agreed that deep artesian wells would be feasible for the city and its growing population.",
          },
          {
            id: "well",
            year: "1879",
            label: "A deep well is drilled near this site.",
            why: "The marker says several pilot projects followed and in 1879 a 1,970-feet deep well was drilled near this site, with a yield of 700,000 gallons per day.",
          },
          {
            id: "franchise",
            year: "1903",
            label: "A franchise goes to the Charleston Light and Water Co.",
            why: "The marker says the artesian supply was Charleston’s primary water source until 1903, when a franchise was granted to the Charleston Light and Water Co. to take over the city system and construct a new plant and reservoir by damming Goose Creek.",
          },
          {
            id: "city",
            year: "1917",
            label: "The city acquires the plant and properties.",
            why: "The marker says that in 1917 the city acquired the plant and properties, forming the Commissioners of Public Works, now Charleston Water System.",
          },
        ],
        ["franchise", "council", "city", "well"],
      ),
      takeaway([
        "In 1823, after learning of London’s success with artesian wells, City Council agreed that deep artesian wells would be feasible for the city and its growing population.",
        "Several pilot projects followed and in 1879 a 1,970-feet deep well was drilled near this site. With an impressive 700,000 gallons per day yield, it is reported to be the first successful artesian supply in the region.",
        "The artesian supply was Charleston’s primary water source until 1903 when a franchise was granted to the Charleston Light and Water Co. to take over the city system and construct a new plant and reservoir by damming Goose Creek. In 1917, the city acquired the plant and properties, forming the Commissioners of Public Works, now Charleston Water System, to manage and operate the city water system.",
      ]),
    ],
  ),
  lesson(
    "10-95",
    "Founded by the Abolition Society of Pennsylvania",
    "Laing School timeline",
    [cited("10-95", "Laing School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1866",
        title: "Founded in Mt. Pleasant, dedicated here",
        partLabel: "the school",
        art: art(
          "m1095-school.jpg",
          "Illustration of a school building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1866",
            x: 32,
            y: 46,
            fact: "The original Laing School was founded in Mt. Pleasant by the Abolition Society of Pennsylvania in 1866.",
          },
          {
            id: "dedicated",
            label: "1953",
            x: 74,
            y: 40,
            fact: "In 1953, Laing H.S., the last segregated school in Mt. Pleasant to graduate African American students from the 12th grade, was dedicated at this site in the Six Mile Community. From its inception, Laing students have made significant contributions to the state, nation, and world.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1970",
        title: "Ten principals, then the closing",
        partLabel: "the schoolyard",
        art: art(
          "m1095-yard.jpg",
          "Illustration of an empty schoolyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "closed",
            label: "1970",
            x: 32,
            y: 52,
            fact: "Laing H.S. closed in 1970 when Charleston Co. schools desegregated.",
          },
          {
            id: "principals",
            label: "Ten principals",
            x: 74,
            y: 58,
            fact: "Ten principals served Laing School, 1866-1970: Cornelia Hancock, 1866-76; Abby D. Munro, 1876-1913; Marie A. O’Neill, 1913-19; Charlotte Powell, 1919-43; James Graves, 1943-45; John Collins, 1945-48; William Swinton, 1948-56; William Rouse, 1956-61; Fletcher Linton, 1961-70; and Miriam M. Brown, 1953-69.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1866-1970",
        title: "Principals who served Laing School",
        partLabel: "ten principals",
        value: 10,
        unit: "principals",
        meant:
          "What this meant: the marker says ten principals served Laing School, 1866-1970.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1095-school.jpg",
          "Illustration of a school building. Not a historical photograph.",
        ),
        nowArt: art(
          "m1095-today.jpg",
          "Illustration of a marker beside a school. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a school building, for Laing H.S., which the marker says was dedicated at this site in the Six Mile Community in 1953. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a school. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1866",
            label: "The original Laing School is founded.",
            why: "The marker says it was founded in Mt. Pleasant by the Abolition Society of Pennsylvania in 1866.",
          },
          {
            id: "munro",
            year: "1876",
            label: "Abby D. Munro’s years as principal begin.",
            why: "The marker lists Abby D. Munro, 1876-1913, among the ten principals who served Laing School, 1866-1970.",
          },
          {
            id: "dedicated",
            year: "1953",
            label: "Laing H.S. is dedicated at this site.",
            why: "The marker says that in 1953 Laing H.S., the last segregated school in Mt. Pleasant to graduate African American students from the 12th grade, was dedicated at this site in the Six Mile Community.",
          },
          {
            id: "closed",
            year: "1970",
            label: "Laing H.S. closes.",
            why: "The marker says Laing H.S. closed in 1970 when Charleston Co. schools desegregated.",
          },
        ],
        ["dedicated", "founded", "closed", "munro"],
      ),
      takeaway([
        "The original Laing School was founded in Mt. Pleasant by the Abolition Society of Pennsylvania in 1866. In 1953, Laing H.S., the last segregated school in Mt. Pleasant to graduate African American students from the 12th grade, was dedicated at this site in the Six Mile Community.",
        "From its inception, Laing students have made significant contributions to the state, nation, and world. Laing H.S. closed in 1970 when Charleston Co. schools desegregated.",
        "Ten principals served Laing School, 1866-1970: Cornelia Hancock, 1866-76; Abby D. Munro, 1876-1913; Marie A. O’Neill, 1913-19; Charlotte Powell, 1919-43; James Graves, 1943-45; John Collins, 1945-48; William Swinton, 1948-56; William Rouse, 1956-61; Fletcher Linton, 1961-70; and Miriam M. Brown, 1953-69.",
      ]),
    ],
  ),
  lesson(
    "10-96",
    "Twenty acres farmed on his own account",
    "Simeon Pinckney Homestead timeline",
    [cited("10-96", "Simeon Pinckney Homestead", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1874",
        title: "A house on twenty acres",
        partLabel: "the house",
        art: art(
          "m1096-house.jpg",
          "Illustration of a small farmhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "enlisted",
            label: "1863",
            x: 32,
            y: 46,
            fact: "Simeon Pinckney, who was born a slave in Manning, S.C., enlisted in the 3rd S.C. Inf. (Colored) in 1863, and also served in the 21st U.S. Colored Infantry during the Civil War.",
          },
          {
            id: "purchased",
            label: "1874",
            x: 74,
            y: 56,
            fact: "Later, Pinckney settled on James Island with wife Isabella, stepson Daniel, and sons Alex and Samuel. In 1874 he purchased twenty acres of land for $350. Here he built a house and farmed the land on his own account.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "2016",
        title: "Kept in the family, then a park",
        partLabel: "the yard",
        art: art(
          "m1096-yard.jpg",
          "Illustration of a farmyard and open acres. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "died",
            label: "Nov. 1921",
            x: 32,
            y: 48,
            fact: "Simeon Pinckney died in Nov. 1921 and is buried in the Fort Johnson area.",
          },
          {
            id: "park",
            label: "2016",
            x: 74,
            y: 40,
            fact: "Remarkably, Pinckney was not only able to purchase land during Reconstruction, but the family was also able to retain ownership of at least a portion of the tract for nearly 150 years. The Town of James Island purchased 7 acres of the Pinckney homestead for use as a public park in 2016.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1874",
        title: "Acres he purchased",
        partLabel: "twenty acres",
        value: 20,
        unit: "acres",
        meant:
          "What this meant: the marker says that in 1874 he purchased twenty acres of land for $350. Here he built a house and farmed the land on his own account.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1096-house.jpg",
          "Illustration of a small farmhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m1096-today.jpg",
          "Illustration of a marker at the edge of open land. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small farmhouse, for the house the marker says he built after purchasing twenty acres in 1874. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at the edge of open land. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "enlisted",
            year: "1863",
            label: "Simeon Pinckney enlists.",
            why: "The marker says he enlisted in the 3rd S.C. Inf. (Colored) in 1863, and also served in the 21st U.S. Colored Infantry during the Civil War.",
          },
          {
            id: "purchased",
            year: "1874",
            label: "He purchases twenty acres on James Island.",
            why: "The marker says that in 1874 he purchased twenty acres of land for $350, built a house, and farmed the land on his own account.",
          },
          {
            id: "died",
            year: "Nov. 1921",
            label: "Simeon Pinckney dies.",
            why: "The marker says he died in Nov. 1921 and is buried in the Fort Johnson area.",
          },
          {
            id: "park",
            year: "2016",
            label: "The town buys 7 acres for a public park.",
            why: "The marker says the Town of James Island purchased 7 acres of the Pinckney homestead for use as a public park in 2016.",
          },
        ],
        ["died", "enlisted", "park", "purchased"],
      ),
      takeaway([
        "Simeon Pinckney, who was born a slave in Manning, S.C., enlisted in the 3rd S.C. Inf. (Colored) in 1863, and also served in the 21st U.S. Colored Infantry during the Civil War.",
        "Later, Pinckney settled on James Island with wife Isabella, stepson Daniel, and sons Alex and Samuel. In 1874 he purchased twenty acres of land for $350. Here he built a house and farmed the land on his own account.",
        "Simeon Pinckney died in Nov. 1921 and is buried in the Fort Johnson area. Remarkably, Pinckney was not only able to purchase land during Reconstruction, but the family was also able to retain ownership of at least a portion of the tract for nearly 150 years. The Town of James Island purchased 7 acres of the Pinckney homestead for use as a public park in 2016.",
      ]),
    ],
  ),
];
