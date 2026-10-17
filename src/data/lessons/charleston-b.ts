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

export const charlestonLessonsB: MarkerLesson[] = [
  lesson(
    "10-04 [should be 10-43]",
    "One of the oldest houses in Charleston",
    "William Rhett House timeline",
    [
      cited("10-04 [should be 10-43]", "William Rhett House", "front and back"),
      span(
        '"134 years" is 1941 minus 1807, the years the marker prints for the Kittredge purchase and Christopher Fitzsimons buying the house.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "ca. 1712",
        title: "Built for William Rhett",
        partLabel: "the house",
        art: art(
          "m1043-house.jpg",
          "Illustration of an early house and a sailing ship. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Built ca. 1712",
            x: 32,
            y: 48,
            fact: "This house, built ca. 1712, is believed to be one of the oldest houses in Charleston. It was built for William Rhett (1666-1723).",
          },
          {
            id: "rhett",
            label: "William Rhett",
            x: 74,
            y: 40,
            fact: "William Rhett (1666-1723) was a merchant, sea captain, militia officer, and speaker of the Commons House of Assembly famous for capturing the pirate Steed Bonnet.",
          },
        ],
      },
      {
        kind: "scene",
        id: "piazza",
        kicker: "1807",
        title: "Piazzas, then a restoration",
        partLabel: "the piazzas",
        art: art(
          "m1043-piazza.jpg",
          "Illustration of a house and its side piazzas. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "fitzsimons",
            label: "Bought in 1807",
            x: 32,
            y: 52,
            fact: "In 1807 Christopher Fitzsimons (d. 1825), a merchant and planter, bought the house, renovating and enlarging it and adding its piazzas.",
          },
          {
            id: "kittredge",
            label: "Bought in 1941",
            x: 74,
            y: 42,
            fact: "With the relative decline of “Rhettsbury” in the early 20th century the house was a boarding house during the 1920s and 30s. Its restoration by Mr. and Mrs. Benjamin R. Kittredge, Jr., who bought it in 1941, was one of the first in this part of Charleston.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1807-1941",
        title: "Years between the two purchases",
        partLabel: "134 years",
        value: 134,
        unit: "years",
        meant:
          "What this meant: 1941 comes 134 years after 1807. That is the stretch from the year Christopher Fitzsimons bought the house to the year Mr. and Mrs. Benjamin R. Kittredge, Jr., bought it.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1043-house.jpg",
          "Illustration of an early house and a sailing ship. Not a historical photograph.",
        ),
        nowArt: art(
          "m1043-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early house and a sailing ship, for the house the marker says was built ca. 1712 for William Rhett. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1666",
            label: "William Rhett is born.",
            why: "The marker prints William Rhett (1666-1723), a merchant, sea captain, militia officer, and speaker of the Commons House of Assembly famous for capturing the pirate Steed Bonnet.",
          },
          {
            id: "built",
            year: "ca. 1712",
            label: "The house is built for William Rhett.",
            why: "The marker says this house, built ca. 1712, is believed to be one of the oldest houses in Charleston. It was built for William Rhett.",
          },
          {
            id: "bought",
            year: "1807",
            label: "Christopher Fitzsimons buys the house and adds its piazzas.",
            why: "The marker says in 1807 Christopher Fitzsimons (d. 1825), a merchant and planter, bought the house, renovating and enlarging it and adding its piazzas.",
          },
          {
            id: "restored",
            year: "1941",
            label: "Mr. and Mrs. Benjamin R. Kittredge, Jr., buy the house.",
            why: "The marker says its restoration by Mr. and Mrs. Benjamin R. Kittredge, Jr., who bought it in 1941, was one of the first in this part of Charleston.",
          },
        ],
        ["restored", "born", "bought", "built"],
      ),
      takeaway([
        "This house, built ca. 1712, is believed to be one of the oldest houses in Charleston. It was built for William Rhett (1666-1723), a merchant, sea captain, militia officer, and speaker of the Commons House of Assembly famous for capturing the pirate Steed Bonnet.",
        "In 1807 Christopher Fitzsimons (d. 1825), a merchant and planter, bought the house, renovating and enlarging it and adding its piazzas. The asymmetrical plan of the house includes a central hall with two large rooms on the western side and two slightly smaller rooms on the eastern side.",
        "With the relative decline of “Rhettsbury” in the early 20th century the house was a boarding house during the 1920s and 30s. Its restoration by Mr. and Mrs. Benjamin R. Kittredge, Jr., who bought it in 1941, was one of the first in this part of Charleston.",
      ]),
    ],
  ),
  lesson(
    "10-05",
    "Two signers of the U. S. Constitution",
    "St. Michael's Church timeline",
    [
      cited("10-05", "St. Michael's Church", "front"),
      span(
        '"63 years" is 1825 minus 1762, the years the marker prints for their years of public service.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1746-1825",
        title: "Charles Cotesworth Pinckney",
        partLabel: "the churchyard",
        art: art(
          "m1005-church.jpg",
          "Illustration of a church and a churchyard wall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "buried",
            label: "Two signers",
            x: 32,
            y: 48,
            fact: "Here in the churchyard of St. Michael's lie buried two Signers of the U. S. Constitution.",
          },
          {
            id: "pinckney",
            label: "Charles Cotesworth Pinckney",
            x: 74,
            y: 40,
            fact: "Charles Cotesworth Pinckney (1746-1825). Lawyer and Legislator. Major General, U. S. Army. Minister to France. Presidential candidate.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1739-1800",
        title: "John Rutledge",
        partLabel: "the yard",
        art: art(
          "m1005-yard.jpg",
          "Illustration of two unmarked gravestones in a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rutledge",
            label: "John Rutledge",
            x: 32,
            y: 52,
            fact: "John Rutledge (1739-1800). Lawyer and Statesman. Governor of South Carolina. Chief Justice of the U. S.",
          },
          {
            id: "service",
            label: "1762-1825",
            x: 74,
            y: 42,
            fact: "Their years of public service, 1762-1825, saw both State and Nation well on the road to greatness.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1762-1825",
        title: "Years of public service",
        partLabel: "63 years",
        value: 63,
        unit: "years",
        meant:
          "What this meant: 1825 comes 63 years after 1762. The marker says their years of public service, 1762-1825, saw both State and Nation well on the road to greatness.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1005-church.jpg",
          "Illustration of a church and a churchyard wall. Not a historical photograph.",
        ),
        nowArt: art(
          "m1005-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a church and a churchyard wall, for the churchyard of St. Michael's where the marker says two Signers of the U. S. Constitution lie buried. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "rutledge-born",
            year: "1739",
            label: "John Rutledge is born.",
            why: "The marker prints John Rutledge (1739-1800), lawyer and statesman, Governor of South Carolina, and Chief Justice of the U. S.",
          },
          {
            id: "pinckney-born",
            year: "1746",
            label: "Charles Cotesworth Pinckney is born.",
            why: "The marker prints Charles Cotesworth Pinckney (1746-1825), lawyer and legislator, major general, U. S. Army, minister to France, and presidential candidate.",
          },
          {
            id: "service",
            year: "1762",
            label: "Their years of public service begin.",
            why: "The marker says their years of public service, 1762-1825, saw both State and Nation well on the road to greatness.",
          },
          {
            id: "rutledge-died",
            year: "1800",
            label: "John Rutledge dies.",
            why: "The marker prints John Rutledge (1739-1800).",
          },
        ],
        ["rutledge-died", "rutledge-born", "service", "pinckney-born"],
      ),
      takeaway([
        "Here in the churchyard of St. Michael's lie buried two Signers of the U. S. Constitution.",
        "Charles Cotesworth Pinckney (1746-1825): Lawyer and Legislator, Major General, U. S. Army, Minister to France, Presidential candidate.",
        "John Rutledge (1739-1800): Lawyer and Statesman, Governor of South Carolina, Chief Justice of the U. S. Their years of public service, 1762-1825, saw both State and Nation well on the road to greatness.",
      ]),
    ],
  ),
  lesson(
    "10-06",
    "Buried in the churchyard of St. Philip's",
    "St. Philip's Church timeline",
    [
      cited("10-06", "St. Philip's Church", "front"),
      span(
        '"67 years" is 1824 minus 1757, the years the marker prints for Charles Pinckney\'s death and birth.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1757-1824",
        title: "Charles Pinckney",
        partLabel: "the churchyard",
        art: art(
          "m1006-church.jpg",
          "Illustration of a church and a live oak. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "buried",
            label: "Buried here",
            x: 32,
            y: 48,
            fact: "Here in the churchyard of St. Philip's are buried Charles Pinckney (1757-1824) and Edward Rutledge (1749-1800).",
          },
          {
            id: "pinckney",
            label: "Charles Pinckney",
            x: 74,
            y: 40,
            fact: 'Charles Pinckney (1757-1824), signer of the United States Constitution and author of the famous "Pinckney Draught." Governor of South Carolina. U. S. Senator and Congressman. Minister to Spain.',
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1749-1800",
        title: "Edward Rutledge",
        partLabel: "the yard",
        art: art(
          "m1006-yard.jpg",
          "Illustration of two unmarked gravestones in a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "signer",
            label: "Edward Rutledge",
            x: 32,
            y: 52,
            fact: "Edward Rutledge (1749-1800), Signer of the Declaration of Independence. Delegate to First and Second Continental Congresses.",
          },
          {
            id: "offices",
            label: "Legislator and governor",
            x: 74,
            y: 42,
            fact: "Edward Rutledge (1749-1800): S. C. Legislator & Senator. Governor of South Carolina.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1757-1824",
        title: "Years from the birth year to the death year",
        partLabel: "67 years",
        value: 67,
        unit: "years",
        meant:
          "What this meant: 1824 comes 67 years after 1757. Those are the years the marker prints for Charles Pinckney, his death year and his birth year.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1006-church.jpg",
          "Illustration of a church and a live oak. Not a historical photograph.",
        ),
        nowArt: art(
          "m1006-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a church and a live oak, for the churchyard of St. Philip's where the marker says Charles Pinckney and Edward Rutledge are buried. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "edward-born",
            year: "1749",
            label: "Edward Rutledge is born.",
            why: "The marker prints Edward Rutledge (1749-1800), signer of the Declaration of Independence, delegate to the First and Second Continental Congresses, S. C. legislator and senator, and Governor of South Carolina.",
          },
          {
            id: "charles-born",
            year: "1757",
            label: "Charles Pinckney is born.",
            why: 'The marker prints Charles Pinckney (1757-1824), signer of the United States Constitution and author of the famous "Pinckney Draught."',
          },
          {
            id: "edward-died",
            year: "1800",
            label: "Edward Rutledge dies.",
            why: "The marker prints Edward Rutledge (1749-1800).",
          },
          {
            id: "charles-died",
            year: "1824",
            label: "Charles Pinckney dies.",
            why: "The marker prints Charles Pinckney (1757-1824).",
          },
        ],
        ["charles-died", "edward-born", "charles-born", "edward-died"],
      ),
      takeaway([
        "Here in the churchyard of St. Philip's are buried Charles Pinckney (1757-1824) and Edward Rutledge (1749-1800).",
        'Charles Pinckney was a signer of the United States Constitution and author of the famous "Pinckney Draught." Governor of South Carolina. U. S. Senator and Congressman. Minister to Spain.',
        "Edward Rutledge was a Signer of the Declaration of Independence, a delegate to the First and Second Continental Congresses, an S. C. Legislator & Senator, and Governor of South Carolina.",
      ]),
    ],
  ),
  lesson(
    "10-07",
    "The original walls still stand",
    "Christ Church timeline",
    [
      cited("10-07", "Christ Church", "front"),
      span(
        '"9 years" is 1874 minus 1865, the years the marker prints for the church being restored and consecrated and the interior being destroyed by Union Troops.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1706",
        title: "A parish, a wooden church, then brick",
        partLabel: "the churches",
        art: art(
          "m1007-church.jpg",
          "Illustration of a wooden church and a brick church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wood",
            label: "1706 and 1707",
            x: 32,
            y: 48,
            fact: "The Church Act of 1706 created Christ Church Parish. The first church, a wooden structure built in 1707, accidentally burned in 1725.",
          },
          {
            id: "brick",
            label: "Erected in 1726",
            x: 74,
            y: 40,
            fact: "A brick church was erected in 1726.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1782",
        title: "Burned, then restored",
        partLabel: "the standing walls",
        art: art(
          "m1007-yard.jpg",
          "Illustration of standing brick walls and a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "burned",
            label: "1782 and 1865",
            x: 32,
            y: 52,
            fact: "Although the British burned it in 1782 and the interior was destroyed by Union Troops in 1865, the original walls still stand.",
          },
          {
            id: "restored",
            label: "Restored in 1874",
            x: 74,
            y: 42,
            fact: "In 1874, the church was restored and consecrated.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1865-1874",
        title: "Years from the ruined interior to the restoration",
        partLabel: "9 years",
        value: 9,
        unit: "years",
        meant:
          "What this meant: 1874 comes 9 years after 1865. That is the stretch from the year Union Troops destroyed the interior to the year the church was restored and consecrated.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1007-church.jpg",
          "Illustration of a wooden church and a brick church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1007-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church and a brick church, for the churches the marker says were built in 1707 and erected in 1726. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "act",
            year: "1706",
            label: "The Church Act creates Christ Church Parish.",
            why: "The marker says the Church Act of 1706 created Christ Church Parish.",
          },
          {
            id: "wood",
            year: "1707",
            label: "The first church, a wooden structure, is built.",
            why: "The marker says the first church, a wooden structure built in 1707, accidentally burned in 1725.",
          },
          {
            id: "brick",
            year: "1726",
            label: "A brick church is erected.",
            why: "The marker says a brick church was erected in 1726, and although the British burned it in 1782 and the interior was destroyed by Union Troops in 1865, the original walls still stand.",
          },
          {
            id: "restored",
            year: "1874",
            label: "The church is restored and consecrated.",
            why: "The marker says in 1874 the church was restored and consecrated.",
          },
        ],
        ["restored", "act", "brick", "wood"],
      ),
      takeaway([
        "The Church Act of 1706 created Christ Church Parish. The first church, a wooden structure built in 1707, accidentally burned in 1725.",
        "A brick church was erected in 1726, and although the British burned it in 1782 and the interior was destroyed by Union Troops in 1865, the original walls still stand.",
        "In 1874, the church was restored and consecrated.",
      ]),
    ],
  ),
];
