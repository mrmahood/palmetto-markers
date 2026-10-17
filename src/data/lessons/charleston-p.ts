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

export const charlestonLessonsP: MarkerLesson[] = [
  lesson(
    "10-73",
    "Established by one of the Lords Proprietors",
    "Plainsfield Plantation timeline",
    [
      cited("10-73", "Plainsfield Plantation", "front and back"),
      span(
        '"37 years" is 1700 minus 1663, the years the marker prints for Joseph Blake.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "ca. 1690",
        title: "Plainsfield and Pawletts",
        partLabel: "the plantations",
        art: art(
          "m1073-house.jpg",
          "Illustration of a colonial plantation house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "ca. 1690",
            x: 32,
            y: 50,
            fact: "Plainsfield Plantation, on this site, and Pawletts Plantation, nearby, were established ca. 1690 by Joseph Blake (1663-1700), one of Carolina’s Lords Proprietors and governor of the colony 1694 and 1696-1700.",
          },
          {
            id: "named",
            label: "Somersetshire",
            x: 74,
            y: 42,
            fact: "Blake, who had come to the colony ca. 1685 and was soon a member of the Grand Council, named his plantations for locales in his native Somersetshire, England.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "1694",
        title: "A proprietary share, then the Goose Creek Men",
        partLabel: "the governor and the planters",
        art: art(
          "m1073-fields.jpg",
          "Illustration of plantation fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "share",
            label: "1694",
            x: 32,
            y: 48,
            fact: "Blake was governor when he purchased Sir John Berkeley’s proprietary share in 1694. Blake, a Dissenter who supported religious liberty and citizenship for French Huguenots and other non-English settlers, died in office.",
          },
          {
            id: "goose",
            label: "After his death",
            x: 74,
            y: 56,
            fact: "The “Goose Creek Men,” planters who opposed his and the Proprietors’ policies on settlers and Indian trade, took control of the government after Blake’s death.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1663-1700",
        title: "Years the marker prints for Joseph Blake",
        partLabel: "37 years",
        value: 37,
        unit: "years",
        meant:
          "What this meant: 1700 comes 37 years after 1663. That is the stretch the marker prints for Joseph Blake (1663-1700).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1073-house.jpg",
          "Illustration of a colonial plantation house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1073-today.jpg",
          "Illustration of a marker by open fields. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plantation house, for Plainsfield Plantation, which the marker says was established ca. 1690. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by open fields. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "spanstart",
            year: "1663",
            label: "The years the marker prints for Joseph Blake begin.",
            why: "The marker prints Joseph Blake (1663-1700) and calls him one of Carolina’s Lords Proprietors.",
          },
          {
            id: "arrived",
            year: "ca. 1685",
            label: "Blake comes to the colony.",
            why: "The marker says he had come to the colony ca. 1685 and was soon a member of the Grand Council.",
          },
          {
            id: "planted",
            year: "ca. 1690",
            label: "Plainsfield and Pawletts are established.",
            why: "The marker says both plantations were established ca. 1690 and named for locales in his native Somersetshire, England.",
          },
          {
            id: "share",
            year: "1694",
            label: "He purchases Berkeley’s proprietary share.",
            why: "The marker says he was governor of the colony in 1694 and 1696-1700, and that he was governor when he purchased Sir John Berkeley’s proprietary share in 1694.",
          },
        ],
        ["share", "spanstart", "planted", "arrived"],
      ),
      takeaway([
        "Plainsfield Plantation, on this site, and Pawletts Plantation, nearby, were established ca. 1690 by Joseph Blake (1663-1700), one of Carolina’s Lords Proprietors and governor of the colony 1694 and 1696-1700.",
        "Blake, who had come to the colony ca. 1685 and was soon a member of the Grand Council, named his plantations for locales in his native Somersetshire, England. He was governor when he purchased Sir John Berkeley’s proprietary share in 1694.",
        "Blake, a Dissenter who supported religious liberty and citizenship for French Huguenots and other non-English settlers, died in office. The “Goose Creek Men,” planters who opposed his and the Proprietors’ policies on settlers and Indian trade, took control of the government after Blake’s death.",
      ]),
    ],
  ),
  lesson(
    "10-74",
    "A plantation cemetery older than the Revolution",
    "Cook's Old Field Cemetery timeline",
    [cited("10-74", "Cook's Old Field Cemetery", "front and back")],
    [
      {
        kind: "scene",
        id: "cemetery",
        kicker: "Before the Revolution",
        title: "Hamlin, Hibben, and Leland families",
        partLabel: "the cemetery",
        art: art(
          "m1074-cemetery.jpg",
          "Illustration of an old plantation cemetery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "families",
            label: "The families",
            x: 32,
            y: 54,
            fact: "This plantation cemetery predates the American Revolution. It was established by early members of the Hamlin, Hibben and Leland families.",
          },
          {
            id: "hibben",
            label: "1835 and 2003",
            x: 74,
            y: 42,
            fact: "James Hibben (d. 1835), one of the founders of Mount Pleasant, is buried here. Generations of both white and black families are interred here. In 2003 this cemetery was listed in the National Register of Historic Places.",
          },
        ],
      },
      {
        kind: "scene",
        id: "field",
        kicker: "1696",
        title: "Copahee, then Hamlin Beach",
        partLabel: "the plantation and the lots",
        art: art(
          "m1074-field.jpg",
          "Illustration of coastal farm lots. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "copahee",
            label: "1696",
            x: 32,
            y: 48,
            fact: "Thomas Hamlin established Copahee Plantation here in 1696. Later divided into Copahee and Contentment Cottage, it is now known as Hamlin Farms.",
          },
          {
            id: "lots",
            label: "1881",
            x: 74,
            y: 56,
            fact: "In 1881 African American farmers bought 31 ten-acre lots from the Hamlins and founded the Hamlin Beach community. White and black descendants still live here today.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1881",
        title: "Ten-acre lots bought from the Hamlins",
        partLabel: "31 lots",
        value: 31,
        unit: "lots",
        meant:
          "What this meant: the marker says that in 1881 African American farmers bought 31 ten-acre lots from the Hamlins and founded the Hamlin Beach community.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1074-cemetery.jpg",
          "Illustration of an old plantation cemetery. Not a historical photograph.",
        ),
        nowArt: art(
          "m1074-today.jpg",
          "Illustration of a marker beside a country cemetery. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an old plantation cemetery, for the cemetery the marker says predates the American Revolution. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a country cemetery. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "copahee",
            year: "1696",
            label: "Thomas Hamlin establishes Copahee Plantation.",
            why: "The marker says he established Copahee Plantation here in 1696. It was later divided into Copahee and Contentment Cottage and is now known as Hamlin Farms.",
          },
          {
            id: "hibben",
            year: "1835",
            label: "The marker dates James Hibben’s death.",
            why: "The marker prints James Hibben (d. 1835), one of the founders of Mount Pleasant, and says he is buried here.",
          },
          {
            id: "beach",
            year: "1881",
            label: "African American farmers found Hamlin Beach.",
            why: "The marker says that in 1881 they bought 31 ten-acre lots from the Hamlins and founded the Hamlin Beach community.",
          },
          {
            id: "register",
            year: "2003",
            label: "The cemetery is listed in the National Register.",
            why: "The marker says that in 2003 this cemetery was listed in the National Register of Historic Places.",
          },
        ],
        ["register", "copahee", "beach", "hibben"],
      ),
      takeaway([
        "This plantation cemetery predates the American Revolution. It was established by early members of the Hamlin, Hibben and Leland families. James Hibben (d. 1835), one of the founders of Mount Pleasant, is buried here.",
        "Generations of both white and black families are interred here. In 2003 this cemetery was listed in the National Register of Historic Places.",
        "Thomas Hamlin established Copahee Plantation here in 1696. Later divided into Copahee and Contentment Cottage, it is now known as Hamlin Farms. In 1881 African American farmers bought 31 ten-acre lots from the Hamlins and founded the Hamlin Beach community. White and black descendants still live here today.",
      ]),
    ],
  ),
  lesson(
    "10-75",
    "Inland rice that did not use the tides",
    "Inland rice fields timeline",
    [
      cited("10-75", "Inland Rice Fields, ca. 1701-1865", "front and back"),
      span(
        '"16 years" is 1717 minus 1701, the years the marker prints for the death of Joseph Child and the establishment of Windsor Hill.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "fields",
        kicker: "Early 18th century",
        title: "Embankments and ditches still visible",
        partLabel: "the rice fields",
        art: art(
          "m1075-fields.jpg",
          "Illustration of inland rice fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "layout",
            label: "The layout",
            x: 32,
            y: 52,
            fact: "Embankments and ditches dating from the early 18th century are still visible here and show the elaborate layout of rice fields that were part of Windsor Hill and Woodlands plantations.",
          },
          {
            id: "inland",
            label: "Before the Revolution",
            x: 74,
            y: 40,
            fact: "Before the American Revolution, lowcountry planters grew rice in inland fields that did not use the tides for flood waters.",
          },
        ],
      },
      {
        kind: "scene",
        id: "dikes",
        kicker: "ca. 1701",
        title: "Windsor Hill and Woodlands",
        partLabel: "the two plantations",
        art: art(
          "m1075-dikes.jpg",
          "Illustration of rice-field dikes and ditches. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "windsor",
            label: "1701 and 1800",
            x: 32,
            y: 46,
            fact: "Windsor Hill was established ca. 1701 by Joseph Child (d. 1717), and Woodlands was established ca. 1800 by Thomas Parker (d. 1821).",
          },
          {
            id: "labor",
            label: "The builders",
            x: 74,
            y: 58,
            fact: "The remnants of these rice fields are a tangible reminder of the skill and labor of the enslaved people who constructed them, many of whom had been rice farmers in Africa.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1701-1717",
        title: "Years from Windsor Hill to Child’s death",
        partLabel: "16 years",
        value: 16,
        unit: "years",
        meant:
          "What this meant: 1717 comes 16 years after 1701. Those are the years the marker prints for Joseph Child’s death and for Windsor Hill, which it says was established ca. 1701.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1075-fields.jpg",
          "Illustration of inland rice fields. Not a historical photograph.",
        ),
        nowArt: art(
          "m1075-today.jpg",
          "Illustration of a marker beside rice-field embankments. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of inland rice fields, for the embankments and ditches the marker says date from the early 18th century. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside rice-field embankments. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "windsor",
            year: "ca. 1701",
            label: "Windsor Hill is established.",
            why: "The marker says Windsor Hill was established ca. 1701 by Joseph Child (d. 1717).",
          },
          {
            id: "child",
            year: "1717",
            label: "The marker dates Joseph Child’s death.",
            why: "The marker prints Joseph Child (d. 1717) as the person who established Windsor Hill.",
          },
          {
            id: "woodlands",
            year: "ca. 1800",
            label: "Woodlands is established.",
            why: "The marker says Woodlands was established ca. 1800 by Thomas Parker (d. 1821).",
          },
          {
            id: "parker",
            year: "1821",
            label: "The marker dates Thomas Parker’s death.",
            why: "The marker prints Thomas Parker (d. 1821) as the person who established Woodlands.",
          },
        ],
        ["parker", "windsor", "woodlands", "child"],
      ),
      takeaway([
        "Embankments and ditches dating from the early 18th century are still visible here and show the elaborate layout of rice fields that were part of Windsor Hill and Woodlands plantations.",
        "Before the American Revolution, lowcountry planters grew rice in inland fields that did not use the tides for flood waters.",
        "Windsor Hill was established ca. 1701 by Joseph Child (d. 1717), and Woodlands was established ca. 1800 by Thomas Parker (d. 1821). The remnants of these rice fields are a tangible reminder of the skill and labor of the enslaved people who constructed them, many of whom had been rice farmers in Africa.",
      ]),
    ],
  ),
  lesson(
    "10-76",
    "The transport seized before dawn",
    "The Planter timeline",
    [cited("10-76", "The Seizure of the Planter", "front and back")],
    [
      {
        kind: "scene",
        id: "boat",
        kicker: "May 13, 1862",
        title: "Taken from a wharf just east of here",
        partLabel: "the transport",
        art: art(
          "m1076-boat.jpg",
          "Illustration of a steamboat on a harbor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "seized",
            label: "May 13, 1862",
            x: 32,
            y: 46,
            fact: "Early on May 13, 1862, Robert Smalls, an enslaved harbor pilot aboard the Planter, seized the 149-ft. Confederate transport from a wharf just east of here.",
          },
          {
            id: "crew",
            label: "Before dawn",
            x: 74,
            y: 58,
            fact: "He and six enslaved crewmen took the vessel before dawn, when its captain, pilot, and engineer were ashore.",
          },
        ],
      },
      {
        kind: "scene",
        id: "harbor",
        kicker: "1862",
        title: "Out to the fleet, then a captain’s contract",
        partLabel: "the harbor and afterward",
        art: art(
          "m1076-harbor.jpg",
          "Illustration of a harbor, a fort, and a steamboat. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "channel",
            label: "Fort Sumter",
            x: 32,
            y: 48,
            fact: "Smalls guided the ship through the channel, past Fort Sumter, and out to sea, delivering it to the Federal fleet which was blockading the harbor.",
          },
          {
            id: "after",
            label: "1863",
            x: 74,
            y: 40,
            fact: "Northern and Southern newspapers called this feat “bold” and “daring.” Smalls and his crew, a crewman on another ship, and eight other enslaved persons including Smalls’s wife, Hannah, and three children, won their freedom by it. Smalls (1839-1915) was appointed captain of the U.S.S. Planter by a U.S. Army contract in 1863. A native of Beaufort, he was later a state legislator and then a five-term U.S. Congressman.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "May 13, 1862",
        title: "Length of the Confederate transport",
        partLabel: "149 feet",
        value: 149,
        unit: "feet",
        meant:
          "What this meant: the marker says Robert Smalls seized the 149-ft. Confederate transport, the Planter, early on May 13, 1862.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1076-boat.jpg",
          "Illustration of a steamboat on a harbor. Not a historical photograph.",
        ),
        nowArt: art(
          "m1076-today.jpg",
          "Illustration of a marker on a harbor street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a steamboat, for the 149-ft. Confederate transport the marker says was seized early on May 13, 1862. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a harbor street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "spanstart",
            year: "1839",
            label: "The years the marker prints for Robert Smalls begin.",
            why: "The marker prints Smalls (1839-1915). It calls him an enslaved harbor pilot aboard the Planter and a native of Beaufort.",
          },
          {
            id: "seized",
            year: "May 13, 1862",
            label: "Smalls and six crewmen seize the Planter.",
            why: "The marker says that early on May 13, 1862 they took the 149-ft. transport before dawn, while its captain, pilot, and engineer were ashore, and that Smalls guided it past Fort Sumter to the Federal fleet.",
          },
          {
            id: "captain",
            year: "1863",
            label: "He is appointed captain of the U.S.S. Planter.",
            why: "The marker says he was appointed captain of the U.S.S. Planter by a U.S. Army contract in 1863. It says he was later a state legislator and then a five-term U.S. Congressman.",
          },
          {
            id: "endyear",
            year: "1915",
            label: "The years the marker prints for him end.",
            why: "The marker prints 1915 as the second year in Smalls (1839-1915).",
          },
        ],
        ["captain", "spanstart", "endyear", "seized"],
      ),
      takeaway([
        "Early on May 13, 1862, Robert Smalls, an enslaved harbor pilot aboard the Planter, seized the 149-ft. Confederate transport from a wharf just east of here. He and six enslaved crewmen took the vessel before dawn, when its captain, pilot, and engineer were ashore.",
        "Smalls guided the ship through the channel, past Fort Sumter, and out to sea, delivering it to the Federal fleet which was blockading the harbor. Northern and Southern newspapers called this feat “bold” and “daring.”",
        "Smalls and his crew, a crewman on another ship, and eight other enslaved persons including Smalls’s wife, Hannah, and three children, won their freedom by it. Smalls (1839-1915) was appointed captain of the U.S.S. Planter by a U.S. Army contract in 1863. A native of Beaufort, he was later a state legislator and then a five-term U.S. Congressman.",
      ]),
    ],
  ),
];
