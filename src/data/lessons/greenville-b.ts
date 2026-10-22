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

export const greenvilleLessonsB: MarkerLesson[] = [
  lesson(
    "23-08",
    "Middleton's summer home until 1820",
    "Whitehall timeline",
    [
      cited("23-08", "Whitehall", "front"),
      span(
        '"7 years" is 1820 minus 1813, the years the marker prints for the sale to George W. Earle and the land bought from Elias Earle.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1813",
        title: "Built on land bought from Elias Earle",
        partLabel: "the summer home",
        art: art(
          "m2308-house.jpg",
          "Illustration of a summer house among trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bought",
            label: "1813",
            x: 32,
            y: 48,
            fact: "Built by Henry Middleton on land bought from Elias Earle in 1813, Whitehall served as Middleton's summer home until 1820 when it was sold to George W. Earle, whose descendants have occupied it ever since.",
          },
          {
            id: "son",
            label: "Arthur Middleton",
            x: 74,
            y: 40,
            fact: "Henry Middleton was son of Arthur Middleton, Signer of the Declaration of Independence.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sale",
        kicker: "1820",
        title: "Sold to George W. Earle",
        partLabel: "the sale",
        art: art(
          "m2308-yard.jpg",
          "Illustration of a house and a front walk. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sold",
            label: "1820",
            x: 32,
            y: 46,
            fact: "Whitehall served as Middleton's summer home until 1820 when it was sold to George W. Earle, whose descendants have occupied it ever since.",
          },
          {
            id: "governor",
            label: "1810 to 1812",
            x: 74,
            y: 60,
            fact: "He served as Governor of South Carolina from 1810 to 1812.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1813-1820",
        title: "Years from the land purchase to the sale",
        partLabel: "7 years",
        value: 7,
        unit: "years",
        meant:
          "What this meant: 1820 comes 7 years after 1813. That is the stretch from the year the land was bought from Elias Earle to the year Whitehall was sold to George W. Earle.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2308-house.jpg",
          "Illustration of a summer house among trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m2308-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a summer house, for the home the marker says Henry Middleton built on land bought from Elias Earle in 1813. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a house and trees. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "governor",
            year: "1810 to 1812",
            label: "Henry Middleton serves as Governor of South Carolina.",
            why: "The marker says he served as Governor of South Carolina from 1810 to 1812.",
          },
          {
            id: "built",
            year: "1813",
            label: "Whitehall is built on land bought from Elias Earle.",
            why: "The marker says it was built by Henry Middleton on land bought from Elias Earle in 1813.",
          },
          {
            id: "sold",
            year: "1820",
            label: "Whitehall is sold to George W. Earle.",
            why: "The marker says Whitehall served as Middleton's summer home until 1820 when it was sold to George W. Earle, whose descendants have occupied it ever since.",
          },
        ],
        ["sold", "governor", "built"],
      ),
      takeaway([
        "Built by Henry Middleton on land bought from Elias Earle in 1813, Whitehall served as Middleton's summer home until 1820 when it was sold to George W. Earle, whose descendants have occupied it ever since.",
        "Henry Middleton was son of Arthur Middleton, Signer of the Declaration of Independence.",
        "He served as Governor of South Carolina from 1810 to 1812.",
      ]),
    ],
  ),
  lesson(
    "23-09",
    "Seat of hospitality of Elias Earle",
    '"The Poplars" timeline',
    [
      cited("23-09", '"The Poplars"', "front and back"),
      span(
        '"61 years" is 1823 minus 1762, the years the marker prints in June 19, 1762-May 19, 1823.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "estate",
        kicker: "1787",
        title: "Center of a many-acred estate",
        partLabel: "the estate",
        art: art(
          "m2309-house.jpg",
          "Illustration of a house among tall trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "center",
            label: "As early as 1787",
            x: 32,
            y: 46,
            fact: 'This was approximately the center of the many-acred estate and "seat of hospitality" of Elias Earle, pioneer Greenville settler who began acquiring property here as early as 1787.',
          },
          {
            id: "home",
            label: "Rutherford and Buist",
            x: 74,
            y: 58,
            fact: 'His home, "The Poplars," stood at the NE corner of Rutherford and Buist streets.',
          },
        ],
      },
      {
        kind: "scene",
        id: "road",
        kicker: "1797",
        title: "Across the western mountains",
        partLabel: "the wagon road",
        art: art(
          "m2309-road.jpg",
          "Illustration of a wagon road across mountains. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wagon",
            label: "1797",
            x: 32,
            y: 44,
            fact: 'Builder of the "Great Wagon Road" across the western mountains from South Carolina to Tennessee in 1797.',
          },
          {
            id: "family",
            label: "Virginia ancestry",
            x: 74,
            y: 62,
            fact: "Of distinguished Virginia ancestry, his family served South Carolina well.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1762-1823",
        title: "Years in the dates on the marker",
        partLabel: "61 years",
        value: 61,
        unit: "years",
        meant:
          "What this meant: 1823 comes 61 years after 1762. Those are the years in the dates the marker prints, June 19, 1762-May 19, 1823.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2309-house.jpg",
          "Illustration of a house among tall trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m2309-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          'Illustration of a house among tall trees, for the home the marker calls "The Poplars." Not a historical photograph.',
        nowCaption:
          "Illustration of a blank roadside marker at a tree-lined corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "property",
            year: "1787",
            label: "Elias Earle begins acquiring property here.",
            why: "The marker says he began acquiring property here as early as 1787.",
          },
          {
            id: "legislator",
            year: "1794",
            label: "He serves as State Legislator.",
            why: "The marker says Elias Earle served as State Legislator 1794-1798, State Senator 1798-1804, and U. S. Congressman 1805-1807, 1811-1815, and 1817-1821.",
          },
          {
            id: "road",
            year: "1797",
            label: 'He builds the "Great Wagon Road."',
            why: 'The marker calls him builder of the "Great Wagon Road" across the western mountains from South Carolina to Tennessee in 1797.',
          },
          {
            id: "congress",
            year: "1805",
            label: "He serves as U. S. Congressman.",
            why: "The marker says he served as U. S. Congressman 1805-1807, 1811-1815, and 1817-1821.",
          },
        ],
        ["road", "congress", "property", "legislator"],
      ),
      takeaway([
        'This was approximately the center of the many-acred estate and "seat of hospitality" of Elias Earle, pioneer Greenville settler who began acquiring property here as early as 1787.',
        'His home, "The Poplars," stood at the NE corner of Rutherford and Buist streets.',
        "Elias Earle served as State Legislator 1794-1798, State Senator 1798-1804, and U. S. Congressman 1805-1807, 1811-1815, and 1817-1821.",
      ]),
    ],
  ),
  lesson(
    "23-10",
    "From St. James' Mission to the present church",
    "Christ Church (Episcopal) timeline",
    [
      cited("23-10", "Christ Church (Episcopal)", "front"),
      span(
        '"8 years" is 1828 minus 1820, the years the marker prints for the consecration as Christ Church and the start as St. James\' Mission.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "first",
        kicker: "1825",
        title: "The first church on land given here",
        partLabel: "the first church",
        art: art(
          "m2310-church.jpg",
          "Illustration of a small church and yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "mission",
            label: "1820",
            x: 32,
            y: 48,
            fact: "Started in 1820 as St. James' Mission.",
          },
          {
            id: "consecrated",
            label: "1825 and 1828",
            x: 74,
            y: 40,
            fact: "The first church built here in 1825 on land given by Vardry McBee, was consecrated in 1828 by Bishop Nathaniel Bowen as Christ Church.",
          },
        ],
      },
      {
        kind: "scene",
        id: "present",
        kicker: "1854",
        title: "The present church is consecrated",
        partLabel: "the present church",
        art: art(
          "m2310-present.jpg",
          "Illustration of a larger church and yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1852-54",
            x: 32,
            y: 44,
            fact: "The present church was built 1852-54 with Rev. John D. McCollough as architect, using plans drawn by Joel R. Poinsett.",
          },
          {
            id: "davis",
            label: "1854",
            x: 74,
            y: 60,
            fact: "Consecrated in 1854 by Bishop Thomas Davis.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1820-1828",
        title: "Years from the mission to the consecration",
        partLabel: "8 years",
        value: 8,
        unit: "years",
        meant:
          "What this meant: 1828 comes 8 years after 1820. That is the stretch from the year it started as St. James' Mission to the year it was consecrated as Christ Church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2310-church.jpg",
          "Illustration of a small church and yard. Not a historical photograph.",
        ),
        nowArt: art(
          "m2310-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small church, for the first church the marker says was built here in 1825. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a churchyard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "mission",
            year: "1820",
            label: "Started as St. James' Mission.",
            why: "The marker says it started in 1820 as St. James' Mission.",
          },
          {
            id: "first",
            year: "1825",
            label: "The first church is built on land given by Vardry McBee.",
            why: "The marker says the first church was built here in 1825 on land given by Vardry McBee.",
          },
          {
            id: "named",
            year: "1828",
            label: "Consecrated by Bishop Nathaniel Bowen as Christ Church.",
            why: "The marker says it was consecrated in 1828 by Bishop Nathaniel Bowen as Christ Church.",
          },
          {
            id: "present",
            year: "1854",
            label: "The present church is consecrated by Bishop Thomas Davis.",
            why: "The marker says the present church was built 1852-54 with Rev. John D. McCollough as architect, using plans drawn by Joel R. Poinsett, and consecrated in 1854 by Bishop Thomas Davis.",
          },
        ],
        ["named", "present", "mission", "first"],
      ),
      takeaway([
        "Started in 1820 as St. James' Mission.",
        "The first church built here in 1825 on land given by Vardry McBee, was consecrated in 1828 by Bishop Nathaniel Bowen as Christ Church.",
        "The present church was built 1852-54 with Rev. John D. McCollough as architect, using plans drawn by Joel R. Poinsett, and consecrated in 1854 by Bishop Thomas Davis.",
      ]),
    ],
  ),
  lesson(
    "23-11",
    "Brought the poinsettia from Mexico",
    "Joel Roberts Poinsett timeline",
    [
      cited("23-11", "Joel Roberts Poinsett", "front and back"),
      span(
        '"72 years" is 1851 minus 1779, the years the marker prints as 1779-1851.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "summer",
        kicker: "Later life",
        title: "A summer home near here",
        partLabel: "the summer home",
        art: art(
          "m2311-house.jpg",
          "Illustration of a summer house and trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "home",
            label: "Near here",
            x: 32,
            y: 46,
            fact: "Joel R. Poinsett had a summer home near here dividing his time in later life between it and his plantation on the Peedee River.",
          },
          {
            id: "titles",
            label: "Planter, Writer, Botanist",
            x: 74,
            y: 38,
            fact: "Planter, Writer, Botanist. Diplomat, Statesman.",
          },
        ],
      },
      {
        kind: "scene",
        id: "plant",
        kicker: "From Mexico",
        title: "The poinsettia he brought here",
        partLabel: "the poinsettia",
        art: art(
          "m2311-plant.jpg",
          "Illustration of a poinsettia plant. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "flower",
            label: "From Mexico",
            x: 32,
            y: 50,
            fact: "He brought the lovely poinsettia to this country from Mexico.",
          },
          {
            id: "versatile",
            label: "Versatile American",
            x: 74,
            y: 36,
            fact: 'His cultural interests and scientific pursuits with this political career earned him the title "Versatile American."',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1779-1851",
        title: "Years printed as 1779-1851",
        partLabel: "72 years",
        value: 72,
        unit: "years",
        meant:
          "What this meant: 1851 comes 72 years after 1779. Those are the years the marker prints as 1779-1851.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2311-house.jpg",
          "Illustration of a summer house and trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m2311-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a summer house, for the summer home the marker says Joel R. Poinsett had near here. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a quiet lane. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1779",
            label: "Born in Charleston, S. C.",
            why: "The marker prints 1779-1851 and says he was born in Charleston, S. C.",
          },
          {
            id: "mexico",
            year: "1825",
            label: "He is first American Minister to Mexico.",
            why: "The marker says he was first American Minister to Mexico 1825-1829.",
          },
          {
            id: "secretary",
            year: "1837",
            label: "He is Secretary of War.",
            why: "The marker says he was Secretary of War, 1837-1841.",
          },
          {
            id: "died",
            year: "December 12, 1851",
            label: "He dies at Stateburg, S. C.",
            why: "The marker says he died December 12, 1851, at Stateburg, S. C., and was buried there at the Church of the Holy Cross.",
          },
        ],
        ["secretary", "born", "mexico", "died"],
      ),
      takeaway([
        "Born in Charleston, S. C., educated in this country and Great Britain, he travelled widely in Europe and Asia before returning to a distinguished career.",
        "He brought the lovely poinsettia to this country from Mexico.",
        "He died December 12, 1851, at Stateburg, S. C., and was buried there at the Church of the Holy Cross.",
      ]),
    ],
  ),
];
