import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia streets named for officers. Facts are from that marker only.
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

export const richlandLessonsU: MarkerLesson[] = [
  lesson(
    "40-104",
    "A street named for Judge Pendleton",
    "Pendleton Street timeline",
    [
      cited("40-104", "Pendleton Street", "front"),
      span(
        '"13 years" is 1789 minus 1776, the years the marker prints for the naming of Pendleton County and his election as assistant state judge.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1776",
        title: "A commissioner and a judge",
        partLabel: "the street and the court",
        art: art(
          "m40104-street.jpg",
          "Illustration of an early town street and a courthouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "The street",
            x: 32,
            y: 54,
            fact: "This street is named for Judge Henry Pendleton, one of the Town of Columbia's original commissioners.",
          },
          {
            id: "judge",
            label: "1776 and 1780",
            x: 74,
            y: 42,
            fact: "He was elected assistant state judge by the Provincial Congress in 1776 and to the South Carolina House of Representatives in 1780.",
          },
        ],
      },
      {
        kind: "scene",
        id: "circuit",
        kicker: "1782",
        title: "Captured while riding the circuit",
        partLabel: "the circuit and the county",
        art: art(
          "m40104-circuit.jpg",
          "Illustration of a saddled horse and a small courthouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "captured",
            label: "1782",
            x: 32,
            y: 50,
            fact: "In 1782 Judge Pendleton was captured by the British while riding the circuit.",
          },
          {
            id: "county",
            label: "1785, 1788, 1789",
            x: 74,
            y: 40,
            fact: "One of the authors of the 1785 County Court Act, he died in Charleston in 1788. Pendleton County was named to honor him in 1789.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1776-1789",
        title: "Years from the judgeship to the county name",
        partLabel: "13 years",
        value: 13,
        unit: "years",
        meant:
          "What this meant: 1789 comes 13 years after 1776. That is the stretch from the year he was elected assistant state judge to the year Pendleton County was named to honor him.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40104-street.jpg",
          "Illustration of an early town street and a courthouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m40104-today.jpg",
          "Illustration of a blank marker post on a street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early town street and a courthouse, for the street the marker names for Judge Henry Pendleton. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker post on a street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "judge",
            year: "1776",
            label: "The Provincial Congress elects him assistant state judge.",
            why: "The marker says he was elected assistant state judge by the Provincial Congress in 1776.",
          },
          {
            id: "house",
            year: "1780",
            label: "He is elected to the South Carolina House of Representatives.",
            why: "The marker dates that election to 1780.",
          },
          {
            id: "captured",
            year: "1782",
            label: "He is captured by the British while riding the circuit.",
            why: "The marker says Judge Pendleton was captured by the British in 1782 while riding the circuit.",
          },
          {
            id: "county",
            year: "1789",
            label: "Pendleton County is named to honor him.",
            why: "The marker says Pendleton County was named to honor him in 1789. He was one of the authors of the 1785 County Court Act and died in Charleston in 1788.",
          },
        ],
        ["county", "judge", "captured", "house"],
      ),
      takeaway([
        "This street is named for Judge Henry Pendleton, one of the Town of Columbia's original commissioners.",
        "He was elected assistant state judge by the Provincial Congress in 1776 and to the South Carolina House of Representatives in 1780. In 1782 Judge Pendleton was captured by the British while riding the circuit.",
        "One of the authors of the 1785 County Court Act, he died in Charleston in 1788. Pendleton County was named to honor him in 1789.",
      ]),
    ],
  ),
  lesson(
    "40-105",
    "Held on the schooner Pack-Horse",
    "Barnwell Street timeline",
    [
      cited("40-105", "Barnwell Street", "front"),
      span(
        '"22 years" is 1800 minus 1778, the years the marker prints for his death and his terms in the S. C. Senate.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1775-76",
        title: "Congress, the Assembly, and the militia",
        partLabel: "the street and the assembly",
        art: art(
          "m40105-street.jpg",
          "Illustration of an early town street and an assembly hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "The street",
            x: 32,
            y: 52,
            fact: "This street is named for General John Barnwell, St. Helena's Parish.",
          },
          {
            id: "congress",
            label: "1775-76 and 1779-81",
            x: 74,
            y: 44,
            fact: "He was elected to the Provincial Congress of 1775-76 and to the 1776 General Assembly. A captain in the First Provincial Regiment, he was major, colonel, and brigadier general in the militia, 1779-81.",
          },
        ],
      },
      {
        kind: "scene",
        id: "schooner",
        kicker: "1780",
        title: "Captured, then the S. C. Senate",
        partLabel: "the schooner and the senate",
        art: art(
          "m40105-schooner.jpg",
          "Illustration of a schooner and a plain statehouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "captured",
            label: "1780",
            x: 32,
            y: 48,
            fact: "Barnwell was captured in Charlestown in 1780 and later imprisoned on the schooner Pack-Horse.",
          },
          {
            id: "senate",
            label: "1778-1800",
            x: 74,
            y: 42,
            fact: "From 1778 until his death in 1800, he served several terms in the S. C. Senate.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1778-1800",
        title: "Years of Senate service until his death",
        partLabel: "22 years",
        value: 22,
        unit: "years",
        meant:
          "What this meant: 1800 comes 22 years after 1778. That is the stretch from the year he began several terms in the S. C. Senate to the year of his death.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40105-street.jpg",
          "Illustration of an early town street and an assembly hall. Not a historical photograph.",
        ),
        nowArt: art(
          "m40105-today.jpg",
          "Illustration of a blank marker post on an avenue. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early town street and an assembly hall, for the street the marker names for General John Barnwell. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker post on an avenue. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "congress",
            year: "1775",
            label: "He is elected to the Provincial Congress.",
            why: "The marker says he was elected to the Provincial Congress of 1775-76.",
          },
          {
            id: "senate",
            year: "1778",
            label: "He begins several terms in the S. C. Senate.",
            why: "The marker says that from 1778 until his death in 1800, he served several terms in the S. C. Senate.",
          },
          {
            id: "captured",
            year: "1780",
            label: "He is captured in Charlestown.",
            why: "The marker says Barnwell was captured in Charlestown in 1780 and later imprisoned on the schooner Pack-Horse.",
          },
          {
            id: "death",
            year: "1800",
            label: "He dies.",
            why: "The marker dates his death to 1800, the end of those Senate terms.",
          },
        ],
        ["death", "congress", "captured", "senate"],
      ),
      takeaway([
        "This street is named for General John Barnwell, St. Helena's Parish. He was elected to the Provincial Congress of 1775-76 and to the 1776 General Assembly.",
        "A captain in the First Provincial Regiment, he was major, colonel, and brigadier general in the militia, 1779-81.",
        "Barnwell was captured in Charlestown in 1780 and later imprisoned on the schooner Pack-Horse. From 1778 until his death in 1800, he served several terms in the S. C. Senate.",
      ]),
    ],
  ),
  lesson(
    "40-106",
    "From the Cherokee expedition to a churchyard",
    "Gadsden Street timeline",
    [
      cited("40-106", "Gadsden Street", "front"),
      span(
        '"46 years" is 1805 minus 1759, the years the marker prints for his death and the Cherokee expedition.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1759",
        title: "A Charlestonian and an expedition",
        partLabel: "the street and the camp",
        art: art(
          "m40106-street.jpg",
          "Illustration of an early town street and a forest camp. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "The street",
            x: 32,
            y: 54,
            fact: "This street was named for Charlestonian Christopher Gadsden.",
          },
          {
            id: "expedition",
            label: "1759",
            x: 74,
            y: 42,
            fact: "He was a member of the 1759 Cherokee expedition, the Commons House of Assembly, and the two Continental and Provincial congresses. He also served in several General Assemblies.",
          },
        ],
      },
      {
        kind: "scene",
        id: "churchyard",
        kicker: "1805",
        title: "A brigadier general, then a burial",
        partLabel: "the camp and the churchyard",
        art: art(
          "m40106-churchyard.jpg",
          "Illustration of a horse in a field and a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "offices",
            label: "The Revolution",
            x: 32,
            y: 50,
            fact: "During the Revolution he became a brigadier general and later served S. C. both as Vice-President and Lieut. Governor.",
          },
          {
            id: "died",
            label: "1805",
            x: 74,
            y: 44,
            fact: "He died in 1805 and is buried in St. Philip's churchyard in Charleston.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1759-1805",
        title: "Years from the expedition to his death",
        partLabel: "46 years",
        value: 46,
        unit: "years",
        meant:
          "What this meant: 1805 comes 46 years after 1759. That is the stretch from the year of the Cherokee expedition to the year he died.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40106-street.jpg",
          "Illustration of an early town street and a forest camp. Not a historical photograph.",
        ),
        nowArt: art(
          "m40106-today.jpg",
          "Illustration of a blank marker post by an oak. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early town street and a forest camp, for the street the marker names for Christopher Gadsden. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker post by an oak. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "expedition",
            year: "1759",
            label: "He is a member of the Cherokee expedition.",
            why: "The marker names him as a member of the 1759 Cherokee expedition.",
          },
          {
            id: "general",
            year: "During the Revolution",
            label: "He becomes a brigadier general.",
            why: "The marker says that during the Revolution he became a brigadier general.",
          },
          {
            id: "offices",
            year: "Later",
            label: "He serves as Vice-President and Lieut. Governor.",
            why: "The marker says he later served S. C. both as Vice-President and Lieut. Governor.",
          },
          {
            id: "died",
            year: "1805",
            label: "He dies and is buried in St. Philip's churchyard.",
            why: "The marker says he died in 1805 and is buried in St. Philip's churchyard in Charleston.",
          },
        ],
        ["died", "expedition", "offices", "general"],
      ),
      takeaway([
        "This street was named for Charlestonian Christopher Gadsden, member of the 1759 Cherokee expedition, the Commons House of Assembly, and the two Continental and Provincial congresses.",
        "He also served in several General Assemblies. During the Revolution he became a brigadier general and later served S. C. both as Vice-President and Lieut. Governor.",
        "He died in 1805 and is buried in St. Philip's churchyard in Charleston.",
      ]),
    ],
  ),
  lesson(
    "40-107",
    "Mortally wounded at Savannah",
    "Pulaski Street timeline",
    [
      cited("40-107", "Pulaski Street", "front"),
      span(
        '"2 years" is 1779 minus 1777, the years the marker prints for his mortal wound at Savannah and his coming to America.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1777",
        title: "A count and a Troop of Horse",
        partLabel: "the street and the horses",
        art: art(
          "m40107-street.jpg",
          "Illustration of an early town street and a line of horses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "The street",
            x: 32,
            y: 52,
            fact: "This street was named for Casimir Pulaski, a Polish count who came to America in 1777 to aid the Patriot cause.",
          },
          {
            id: "general",
            label: "1777",
            x: 74,
            y: 44,
            fact: "In 1777, Pulaski was appointed brigadier general by the Continental Congress and was placed in command of a Troop of Horse.",
          },
        ],
      },
      {
        kind: "scene",
        id: "siege",
        kicker: "1779",
        title: "Charlestown, then Savannah",
        partLabel: "the palisade and the siege",
        art: art(
          "m40107-siege.jpg",
          "Illustration of a harbor palisade and earthen siege works. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "charlestown",
            label: "May 1779",
            x: 32,
            y: 48,
            fact: "He participated in the defense of Charlestown against Prevost's raid in May of 1779.",
          },
          {
            id: "savannah",
            label: "October 9, 1779",
            x: 74,
            y: 42,
            fact: "He participated in the siege of Savannah, where he was mortally wounded on October 9, 1779.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1777-1779",
        title: "Years from his arrival to the mortal wound",
        partLabel: "2 years",
        value: 2,
        unit: "years",
        meant:
          "What this meant: 1779 comes 2 years after 1777. That is the stretch from the year he came to America to the year he was mortally wounded.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40107-street.jpg",
          "Illustration of an early town street and a line of horses. Not a historical photograph.",
        ),
        nowArt: art(
          "m40107-today.jpg",
          "Illustration of a blank marker post on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early town street and a line of horses, for the street the marker names for Casimir Pulaski. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker post on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "arrived",
            year: "1777",
            label: "He comes to America to aid the Patriot cause.",
            why: "The marker says this Polish count came to America in 1777 to aid the Patriot cause.",
          },
          {
            id: "general",
            year: "1777",
            label: "He is appointed brigadier general and given a Troop of Horse.",
            why: "The marker says that in 1777 the Continental Congress appointed him brigadier general and placed him in command of a Troop of Horse.",
          },
          {
            id: "charlestown",
            year: "May 1779",
            label: "He joins the defense of Charlestown.",
            why: "The marker says he participated in the defense of Charlestown against Prevost's raid in May of 1779.",
          },
          {
            id: "savannah",
            year: "October 9, 1779",
            label: "He is mortally wounded at the siege of Savannah.",
            why: "The marker says he was mortally wounded in the siege of Savannah on October 9, 1779.",
          },
        ],
        ["savannah", "arrived", "charlestown", "general"],
      ),
      takeaway([
        "This street was named for Casimir Pulaski, a Polish count who came to America in 1777 to aid the Patriot cause.",
        "In 1777, Pulaski was appointed brigadier general by the Continental Congress and was placed in command of a Troop of Horse.",
        "He participated in the defense of Charlestown against Prevost's raid in May of 1779 and in the siege of Savannah where he was mortally wounded on October 9, 1779.",
      ]),
    ],
  ),
];
