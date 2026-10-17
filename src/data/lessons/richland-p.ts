import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia street names. Facts are from that marker only.
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

export const richlandLessonsP: MarkerLesson[] = [
  lesson(
    "40-79",
    "Named for the nation's first lady",
    "Lady Street timeline",
    [
      cited("40-79", "Lady Street", "front"),
      span(
        '"73 years" is 1859 minus 1786, the years the marker prints for the saving of Mount Vernon and the Columbia plan.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1786",
        title: "An original street in the plan",
        partLabel: "the street",
        art: art(
          "m4079-street.jpg",
          "Illustration of a planned town street and a wooden house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "plan",
            label: "1786 plan",
            x: 32,
            y: 58,
            fact: "One of the original streets in the 1786 Columbia plan.",
          },
          {
            id: "named",
            label: "The first lady",
            x: 74,
            y: 46,
            fact: "Lady Street is thought to have been named for Martha Custis Washington, the new nation's first lady whom South Carolina wished to honor.",
          },
        ],
      },
      {
        kind: "scene",
        id: "vernon",
        kicker: "1859",
        title: "Mount Vernon saved from destruction",
        partLabel: "the president's home",
        art: art(
          "m4079-houses.jpg",
          "Illustration of a columned house and women seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "home",
            label: "Mount Vernon",
            x: 31,
            y: 44,
            fact: "Lady Washington presided over the president's home, Mount Vernon, a national landmark.",
          },
          {
            id: "saved",
            label: "1859",
            x: 75,
            y: 58,
            fact: "Saved from destruction in 1859 by South Carolinian Ann Pamela Cunningham, organizer and first regent of the Mount Vernon Ladies' Association of the Union.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1786-1859",
        title: "Years from the plan to the saving",
        partLabel: "73 years",
        value: 73,
        unit: "years",
        meant:
          "What this meant: 1859 comes 73 years after 1786. That is the stretch from the year of the Columbia plan to the year Mount Vernon was saved from destruction.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4079-street.jpg",
          "Illustration of a planned town street and a wooden house. Not a historical photograph.",
        ),
        nowArt: art(
          "m4079-today.jpg",
          "Illustration of a marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a planned town street, for Lady Street, which the marker says was one of the original streets in the 1786 Columbia plan. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "plan",
            year: "1786",
            label: "Lady Street is one of the original streets in the Columbia plan.",
            why: "The marker says it was one of the original streets in the 1786 Columbia plan.",
          },
          {
            id: "named",
            year: "1786",
            label: "It is thought to have been named for Martha Custis Washington.",
            why: "The marker says Lady Street is thought to have been named for Martha Custis Washington, the new nation's first lady whom South Carolina wished to honor.",
          },
          {
            id: "saved",
            year: "1859",
            label: "Mount Vernon is saved from destruction.",
            why: "The marker says Mount Vernon was saved from destruction in 1859 by South Carolinian Ann Pamela Cunningham, organizer and first regent of the Mount Vernon Ladies' Association of the Union.",
          },
        ],
        ["saved", "plan", "named"],
      ),
      takeaway([
        "One of the original streets in the 1786 Columbia plan, Lady Street is thought to have been named for Martha Custis Washington, the new nation's first lady whom South Carolina wished to honor.",
        "Lady Washington presided over the president's home, Mount Vernon, a national landmark.",
        "Mount Vernon was saved from destruction in 1859 by South Carolinian Ann Pamela Cunningham, organizer and first regent of the Mount Vernon Ladies' Association of the Union.",
      ]),
    ],
  ),
  lesson(
    "40-80",
    "First Winn, later Maxcy Gregg",
    "Gregg Street timeline",
    [
      cited("40-80", "Gregg Street", "front and back"),
      span(
        '"68 years" is 1818 minus 1750, the years the marker prints for the death and the birth of Richard Winn.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "winn",
        kicker: "1750",
        title: "First named for Richard Winn",
        partLabel: "Richard Winn",
        art: art(
          "m4080-street.jpg",
          "Illustration of a traveler on a road and a militia camp. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "Born in Virginia",
            x: 33,
            y: 58,
            fact: "Richard Winn, for whom this street was first named, was born in Virginia in 1750 and came to South Carolina as a young man.",
          },
          {
            id: "general",
            label: "1783",
            x: 73,
            y: 50,
            fact: "He fought throughout the Revolution (including the battles of Hanging Rock, Fish Dam Ford, Blackstock's) and became brigadier general in 1783.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gregg",
        kicker: "ca.1893",
        title: "Renamed for Maxcy Gregg",
        partLabel: "Maxcy Gregg",
        art: art(
          "m4080-houses.jpg",
          "Illustration of a street of houses and a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "renamed",
            label: "ca.1893",
            x: 32,
            y: 52,
            fact: "Maxcy Gregg, native Columbian for whom this street was named ca.1893, was a leader in the States Rights party, a delegate to the Secession Convention, and a distinguished Confederate General.",
          },
          {
            id: "buried",
            label: "1862",
            x: 74,
            y: 46,
            fact: "A colonel in the First Regiment of S. C. Volunteers, Gregg was appointed brigadier general, CSA, in 1861. He died in 1862 from wounds received at the battle of Fredericksburg and is buried in the churchyard of First Presbyterian Church in Columbia.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1750-1818",
        title: "Years from Winn's birth to his death",
        partLabel: "68 years",
        value: 68,
        unit: "years",
        meant:
          "What this meant: 1818 comes 68 years after 1750. That is the stretch from the year Richard Winn was born in Virginia to the year he died in Tennessee.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4080-houses.jpg",
          "Illustration of a street of houses and a churchyard. Not a historical photograph.",
        ),
        nowArt: art(
          "m4080-today.jpg",
          "Illustration of a marker on a residential street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a street of houses, for the street the marker says was named ca.1893 for Maxcy Gregg. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a residential street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1750",
            label: "Richard Winn is born in Virginia.",
            why: "The marker says Richard Winn, for whom this street was first named, was born in Virginia in 1750 and came to South Carolina as a young man.",
          },
          {
            id: "general",
            year: "1783",
            label: "Winn becomes brigadier general.",
            why: "The marker says he fought throughout the Revolution, including the battles of Hanging Rock, Fish Dam Ford, and Blackstock's, and became brigadier general in 1783.",
          },
          {
            id: "died",
            year: "1818",
            label: "Winn dies in Tennessee.",
            why: "The marker says he died in Tennessee in 1818. He was one of Columbia's original commissioners, later lieutenant governor, and also served in the General Assembly and Congress.",
          },
          {
            id: "renamed",
            year: "ca.1893",
            label: "The street is named for Maxcy Gregg.",
            why: "The marker says the street was named ca.1893 for Maxcy Gregg, a native Columbian. He was appointed brigadier general, CSA, in 1861, and died in 1862 from wounds received at the battle of Fredericksburg.",
          },
        ],
        ["renamed", "born", "died", "general"],
      ),
      takeaway([
        "Richard Winn, for whom this street was first named, was born in Virginia in 1750 and came to South Carolina as a young man. He became brigadier general in 1783 and died in Tennessee in 1818.",
        "One of Columbia's original commissioners, he later was lieutenant governor and also served in the General Assembly and Congress. He fought throughout the Revolution, including the battles of Hanging Rock, Fish Dam Ford, and Blackstock's.",
        "Maxcy Gregg, native Columbian for whom this street was named ca.1893, was appointed brigadier general, CSA, in 1861. He died in 1862 from wounds received at the battle of Fredericksburg and is buried in the churchyard of First Presbyterian Church in Columbia.",
      ]),
    ],
  ),
  lesson(
    "40-81",
    "The Taylor family in the capital",
    "Taylor Street timeline",
    [
      cited("40-81", "Taylor Street", "front and back"),
      span(
        '"5 years" is 1791 minus 1786, the years the marker prints for Thomas Taylor escorting President Washington into Columbia and the Columbia plan.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "plan",
        kicker: "1786",
        title: "Plantations chosen for the new city",
        partLabel: "the 1786 plan",
        art: art(
          "m4081-street.jpg",
          "Illustration of a plantation road and militia at a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "street",
            label: "1786 plan",
            x: 32,
            y: 48,
            fact: "Named for the Taylor family, this street is one of the original streets in the 1786 Columbia plan. Their plantations were selected in 1786 as part of the site of the city of Columbia.",
          },
          {
            id: "militia",
            label: "Captain and colonel",
            x: 75,
            y: 56,
            fact: "Thomas Taylor, appointed by the state as one of the commissioners to plan the new town, served in the Revolution as captain and colonel in the militia under brigadier generals Sumter and Henderson. Captured at Fishing Creek, Taylor escaped, and took part in the defeat of Tarleton at Blackstock's.",
          },
        ],
      },
      {
        kind: "scene",
        id: "offices",
        kicker: "1791",
        title: "An escort, then a son in office",
        partLabel: "Thomas and John",
        art: art(
          "m4081-houses.jpg",
          "Illustration of horsemen entering a town and two columned houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "escort",
            label: "1791",
            x: 31,
            y: 54,
            fact: "In 1791 he escorted President Washington into Columbia. Thomas Taylor was a member of the first and second Provincial Congresses, the General Assembly and was a trustee of S. C. College. Taylor died in 1833.",
          },
          {
            id: "john",
            label: "John",
            x: 74,
            y: 44,
            fact: "His son, John, was a planter, lawyer, Governor (1826-28), first intendant of Columbia, and a member of Congress (1807-16). He died in 1832.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1786-1791",
        title: "Years from the plan to the escort",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1791 comes 5 years after 1786. That is the stretch from the year of the Columbia plan to the year Thomas Taylor escorted President Washington into Columbia.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4081-street.jpg",
          "Illustration of a plantation road and militia at a creek. Not a historical photograph.",
        ),
        nowArt: art(
          "m4081-today.jpg",
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plantation road, for the Taylor plantations the marker says were selected in 1786 as part of the site of Columbia. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "plan",
            year: "1786",
            label: "Taylor Street is laid out in the Columbia plan.",
            why: "The marker says this street, named for the Taylor family, is one of the original streets in the 1786 Columbia plan, and that their plantations were selected in 1786 as part of the site of the city.",
          },
          {
            id: "escort",
            year: "1791",
            label: "Thomas Taylor escorts President Washington into Columbia.",
            why: "The marker says that in 1791 he escorted President Washington into Columbia.",
          },
          {
            id: "john",
            year: "1832",
            label: "John dies.",
            why: "The marker says his son, John, a planter, lawyer, Governor (1826-28), first intendant of Columbia, and a member of Congress (1807-16), died in 1832.",
          },
          {
            id: "thomas",
            year: "1833",
            label: "Thomas Taylor dies.",
            why: "The marker says Taylor died in 1833. He had been a member of the first and second Provincial Congresses, the General Assembly, and a trustee of S. C. College.",
          },
        ],
        ["thomas", "plan", "john", "escort"],
      ),
      takeaway([
        "Named for the Taylor family, this street is one of the original streets in the 1786 Columbia plan. Their plantations were selected in 1786 as part of the site of the city of Columbia.",
        "Thomas Taylor, a commissioner to plan the new town, served as captain and colonel under brigadier generals Sumter and Henderson. In 1791 he escorted President Washington into Columbia. He died in 1833.",
        "His son, John, was a planter, lawyer, Governor (1826-28), first intendant of Columbia, and a member of Congress (1807-16). He died in 1832.",
      ]),
    ],
  ),
  lesson(
    "40-82",
    "From Charlestown to brigadier general",
    "Henderson Street timeline",
    [
      cited("40-82", "Henderson Street", "front"),
      span(
        '"1 year" is 1783 minus 1782, the years the marker prints for the end of the post and Henderson being named brigadier general of State Troops.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "fall",
        kicker: "1780",
        title: "At the fall of Charlestown",
        partLabel: "Charlestown",
        art: art(
          "m4082-street.jpg",
          "Illustration of a regiment and a stockade. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "regiment",
            label: "1780",
            x: 32,
            y: 56,
            fact: "This street is named for Brig. Gen. William Henderson, who was in the Third S. C. Regiment at the fall of Charlestown in 1780.",
          },
          {
            id: "captured",
            label: "Captured",
            x: 74,
            y: 50,
            fact: "He was captured, imprisoned, and later exchanged.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brigade",
        kicker: "1781",
        title: "Wounded, then named brigadier general",
        partLabel: "Eutaw Springs",
        art: art(
          "m4082-houses.jpg",
          "Illustration of a wounded officer and a line of troops. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wounded",
            label: "1781",
            x: 33,
            y: 54,
            fact: "In 1781, he was wounded while commanding a brigade at the Battle of Eutaw Springs.",
          },
          {
            id: "named",
            label: "1782",
            x: 73,
            y: 58,
            fact: "When General Sumter resigned in 1782, Henderson was named brigadier general of State Troops, a post he held until 1783.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1782-1783",
        title: "Years from the appointment to the end of the post",
        partLabel: "1 year",
        value: 1,
        unit: "years",
        meant:
          "What this meant: 1783 comes 1 year after 1782. That is the stretch from the year Henderson was named brigadier general of State Troops to the year the marker says he held that post until.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4082-street.jpg",
          "Illustration of a regiment and a stockade. Not a historical photograph.",
        ),
        nowArt: art(
          "m4082-today.jpg",
          "Illustration of a marker under oaks. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a regiment, for Brig. Gen. William Henderson, whom the marker says was in the Third S. C. Regiment at the fall of Charlestown in 1780. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker under oaks. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "congress",
            year: "1775",
            label: "He serves in the Second Provincial Congress.",
            why: "The marker says he served in the Second Provincial Congress (1775-76) and in the S. C. House.",
          },
          {
            id: "fall",
            year: "1780",
            label: "He is in the Third S. C. Regiment at the fall of Charlestown.",
            why: "The marker says he was in the Third S. C. Regiment at the fall of Charlestown in 1780. He was captured, imprisoned, and later exchanged.",
          },
          {
            id: "eutaw",
            year: "1781",
            label: "He is wounded at the Battle of Eutaw Springs.",
            why: "The marker says that in 1781 he was wounded while commanding a brigade at the Battle of Eutaw Springs.",
          },
          {
            id: "brigadier",
            year: "1782",
            label: "He is named brigadier general of State Troops.",
            why: "The marker says that when General Sumter resigned in 1782, Henderson was named brigadier general of State Troops, a post he held until 1783.",
          },
        ],
        ["brigadier", "congress", "eutaw", "fall"],
      ),
      takeaway([
        "This street is named for Brig. Gen. William Henderson, who was in the Third S. C. Regiment at the fall of Charlestown in 1780. He was captured, imprisoned, and later exchanged.",
        "In 1781, he was wounded while commanding a brigade at the Battle of Eutaw Springs.",
        "When General Sumter resigned in 1782, Henderson was named brigadier general of State Troops, a post he held until 1783. He served in the Second Provincial Congress (1775-76) and in the S. C. House. He died in 1788.",
      ]),
    ],
  ),
];
