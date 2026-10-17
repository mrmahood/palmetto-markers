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

export const charlestonLessonsC: MarkerLesson[] = [
  lesson(
    "10-08",
    "The first Trinity Church on this site",
    "Trinity Methodist Church timeline",
    [
      cited("10-08", "Trinity Methodist Church Original Site", "front and back"),
      span(
        '"134 years" is 1926 minus 1792, the years the marker prints for the move to the present location and the erection of the first Trinity Church building.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1792",
        title: "Erected on this site",
        partLabel: "the church",
        art: art(
          "m1008-church.jpg",
          "Illustration of a plain church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "erected",
            label: "1792",
            x: 32,
            y: 48,
            fact: "The first Trinity Church building was erected on this site in 1792.",
          },
          {
            id: "conference",
            label: "By 1813",
            x: 74,
            y: 42,
            fact: "By 1813, Trinity had joined the S. C. Conference.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1791-1926",
        title: "Founded after a schism, then moved",
        partLabel: "the grounds",
        art: art(
          "m1008-yard.jpg",
          "Illustration of the grounds beside a plain church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "hammet",
            label: "1791",
            x: 32,
            y: 52,
            fact: 'An Irishman from Belfast who was ordained by John Wesley, William Hammet was a missionary sent to America by the British Conference. He came to Charleston in 1791 from Jamaica and founded Trinity Methodist Church after a schism occurred within Cumberland Church between his followers and those of Bishop Francis Asbury. Hammet called his church the "Primitive Methodist Church" and was pastor of Trinity until his death in 1803.',
          },
          {
            id: "moved",
            label: "1874 and 1926",
            x: 74,
            y: 40,
            fact: "In 1874 it merged with Cumberland Church, the oldest Methodist church in Charleston, founded in 1786. In 1926, Trinity moved to its present location at 273 Meeting Street where the church and cemetery records are now located.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1792-1926",
        title: "Years from the building to the move",
        partLabel: "134 years",
        value: 134,
        unit: "years",
        meant:
          "What this meant: 1926 comes 134 years after 1792. Those are the years the marker prints for the move to the present location and the erection of the first Trinity Church building.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1008-church.jpg",
          "Illustration of a plain church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1008-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plain church, for the first Trinity Church building the marker says was erected on this site in 1792. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "cumberland",
            year: "1786",
            label: "Cumberland Church is founded.",
            why: "The marker calls Cumberland Church the oldest Methodist church in Charleston, founded in 1786.",
          },
          {
            id: "hammet",
            year: "1791",
            label: "William Hammet comes to Charleston and founds Trinity Methodist Church.",
            why: 'The marker says he came to Charleston in 1791 from Jamaica and founded Trinity Methodist Church after a schism occurred within Cumberland Church between his followers and those of Bishop Francis Asbury. Hammet called his church the "Primitive Methodist Church" and was pastor of Trinity until his death in 1803.',
          },
          {
            id: "erected",
            year: "1792",
            label: "The first Trinity Church building is erected on this site.",
            why: "The marker says the first Trinity Church building was erected on this site in 1792. By 1813, Trinity had joined the S. C. Conference.",
          },
          {
            id: "moved",
            year: "1926",
            label: "Trinity moves to 273 Meeting Street.",
            why: "The marker says that in 1874 it merged with Cumberland Church, and that in 1926 Trinity moved to its present location at 273 Meeting Street where the church and cemetery records are now located.",
          },
        ],
        ["moved", "cumberland", "erected", "hammet"],
      ),
      takeaway([
        "The first Trinity Church building was erected on this site in 1792. By 1813, Trinity had joined the S. C. Conference, and in 1874 it merged with Cumberland Church, the oldest Methodist church in Charleston, founded in 1786.",
        "In 1926, Trinity moved to its present location at 273 Meeting Street where the church and cemetery records are now located.",
        'An Irishman from Belfast who was ordained by John Wesley, William Hammet was a missionary sent to America by the British Conference. He came to Charleston in 1791 from Jamaica and founded Trinity Methodist Church after a schism occurred within Cumberland Church between his followers and those of Bishop Francis Asbury. Hammet called his church the "Primitive Methodist Church" and was pastor of Trinity until his death in 1803.',
      ]),
    ],
  ),
  lesson(
    "10-11",
    "Cornwallis's first major command",
    "Lord Cornwallis timeline",
    [
      cited("10-11", "Lord Cornwallis", "front and back"),
      span(
        '"5 years" is 1781 minus 1776, the years the marker prints for the surrender at Yorktown and the brigade headquarters near this site.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "camp",
        kicker: "June 19, 1776",
        title: "A brigade headquarters near this site",
        partLabel: "the headquarters",
        art: art(
          "m1011-camp.jpg",
          "Illustration of a military camp on a coastal island. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "headquarters",
            label: "June 19, 1776",
            x: 32,
            y: 48,
            fact: "Major General Charles Cornwallis established a brigade headquarters not far from this site on or around June 19, 1776. This was Cornwallis's first major command in America.",
          },
          {
            id: "clinton",
            label: "Sullivan's Island",
            x: 74,
            y: 42,
            fact: "His brigade was part of a British army under the command of Sir Henry Clinton, which had occupied this island as a staging point for attacking the palmetto log fort on Sullivan's Island.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "June 28, 1776",
        title: "Stopped at Breach Inlet",
        partLabel: "the camp yard",
        art: art(
          "m1011-yard.jpg",
          "Illustration of a camp yard beside an inlet. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "inlet",
            label: "June 28, 1776",
            x: 32,
            y: 52,
            fact: "Cornwallis's troops were prevented from crossing Breach Inlet on June 28, 1776, by the fire of S. C. Rangers on the opposite shore. The British were defeated and sailed for New York.",
          },
          {
            id: "later",
            label: "1780 and 1781",
            x: 74,
            y: 40,
            fact: "Cornwallis returned in 1780 as second in command of the army that captured Charles Town. Left in command of the South, he finally surrendered at Yorktown on October 19, 1781.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1776-1781",
        title: "Years from the headquarters to Yorktown",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1781 comes 5 years after 1776. Those are the years the marker prints for the surrender at Yorktown and the brigade headquarters near this site.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1011-camp.jpg",
          "Illustration of a military camp on a coastal island. Not a historical photograph.",
        ),
        nowArt: art(
          "m1011-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a military camp, for the brigade headquarters the marker says Cornwallis established not far from this site on or around June 19, 1776. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "headquarters",
            year: "June 19, 1776",
            label: "Cornwallis establishes a brigade headquarters not far from this site.",
            why: "The marker says Major General Charles Cornwallis established a brigade headquarters not far from this site on or around June 19, 1776. This was Cornwallis's first major command in America. His brigade was part of a British army under the command of Sir Henry Clinton, which had occupied this island as a staging point for attacking the palmetto log fort on Sullivan's Island.",
          },
          {
            id: "inlet",
            year: "June 28, 1776",
            label: "His troops are prevented from crossing Breach Inlet.",
            why: "The marker says Cornwallis's troops were prevented from crossing Breach Inlet on June 28, 1776, by the fire of S. C. Rangers on the opposite shore. The British were defeated and sailed for New York.",
          },
          {
            id: "returned",
            year: "1780",
            label: "Cornwallis returns with the army that captured Charles Town.",
            why: "The marker says Cornwallis returned in 1780 as second in command of the army that captured Charles Town.",
          },
          {
            id: "yorktown",
            year: "October 19, 1781",
            label: "He surrenders at Yorktown.",
            why: "The marker says that, left in command of the South, he finally surrendered at Yorktown on October 19, 1781.",
          },
        ],
        ["yorktown", "headquarters", "returned", "inlet"],
      ),
      takeaway([
        "Major General Charles Cornwallis established a brigade headquarters not far from this site on or around June 19, 1776. This was Cornwallis's first major command in America.",
        "His brigade was part of a British army under the command of Sir Henry Clinton, which had occupied this island as a staging point for attacking the palmetto log fort on Sullivan's Island. Cornwallis's troops were prevented from crossing Breach Inlet on June 28, 1776, by the fire of S. C. Rangers on the opposite shore. The British were defeated and sailed for New York.",
        "Cornwallis returned in 1780 as second in command of the army that captured Charles Town. Left in command of the South, he finally surrendered at Yorktown on October 19, 1781.",
      ]),
    ],
  ),
  lesson(
    "10-12",
    "Residence of the first governor",
    "John Rutledge Home timeline",
    [
      cited("10-12", "John Rutledge Home", "front"),
      span(
        '"61 years" is 1800 minus 1739, the years the marker prints for John Rutledge\'s death and birth.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1739-1800",
        title: "The residence of John Rutledge",
        partLabel: "the house",
        art: art(
          "m1012-house.jpg",
          "Illustration of an old Charleston house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "residence",
            label: "1739-1800",
            x: 32,
            y: 48,
            fact: "This house, built before the American Revolution, was the residence of John Rutledge (1739-1800), first Governor of the State of South Carolina.",
          },
          {
            id: "state",
            label: "1776-78 and 1779-82",
            x: 74,
            y: 42,
            fact: "He was President of South Carolina, 1776-78, and Governor, 1779-82.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1853",
        title: "Ornamental iron added",
        partLabel: "the ironwork yard",
        art: art(
          "m1012-yard.jpg",
          "Illustration of a house yard with ornamental iron. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "offices",
            label: "1787 and 1795",
            x: 32,
            y: 52,
            fact: "He was signer of the U. S. Constitution, 1787, Chief Justice of South Carolina 1791-95, and Chief Justice of the United States, 1795.",
          },
          {
            id: "iron",
            label: "1853",
            x: 74,
            y: 40,
            fact: "The house was altered in 1853 by P. H. Hammarskold, who added the ornamental iron.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1739-1800",
        title: "Years the marker gives John Rutledge",
        partLabel: "61 years",
        value: 61,
        unit: "years",
        meant:
          "What this meant: 1800 comes 61 years after 1739. Those are the years the marker prints for John Rutledge, his death year and his birth year.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1012-house.jpg",
          "Illustration of an old Charleston house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1012-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Charleston house, for the house the marker says was built before the American Revolution and was the residence of John Rutledge (1739-1800). Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "birth",
            year: "1739",
            label: "John Rutledge is born.",
            why: "The marker gives his years as (1739-1800) and calls this house, built before the American Revolution, the residence of John Rutledge, first Governor of the State of South Carolina.",
          },
          {
            id: "president",
            year: "1776",
            label: "He is President of South Carolina.",
            why: "The marker says he was President of South Carolina, 1776-78, and Governor, 1779-82.",
          },
          {
            id: "signer",
            year: "1787",
            label: "He signs the U. S. Constitution.",
            why: "The marker says he was signer of the U. S. Constitution, 1787, Chief Justice of South Carolina 1791-95, and Chief Justice of the United States, 1795.",
          },
          {
            id: "iron",
            year: "1853",
            label: "P. H. Hammarskold alters the house.",
            why: "The marker says the house was altered in 1853 by P. H. Hammarskold, who added the ornamental iron.",
          },
        ],
        ["iron", "birth", "signer", "president"],
      ),
      takeaway([
        "This house, built before the American Revolution, was the residence of John Rutledge (1739-1800), first Governor of the State of South Carolina.",
        "He was President of South Carolina, 1776-78, and Governor, 1779-82, signer of the U. S. Constitution, 1787, Chief Justice of South Carolina 1791-95, and Chief Justice of the United States, 1795.",
        "The house was altered in 1853 by P. H. Hammarskold, who added the ornamental iron.",
      ]),
    ],
  ),
  lesson(
    "10-14",
    "Seven generations on the Ashley",
    "Drayton Hall timeline",
    [
      cited("10-14", "Drayton Hall", "front and back"),
      span(
        '"64 years" is 1779 minus 1715, the years the marker prints for John Drayton (c. 1715-1779), who acquired this land.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "1738",
        title: "Acquired as a planting seat",
        partLabel: "the hall",
        art: art(
          "m1014-hall.jpg",
          "Illustration of a Georgian plantation house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acquired",
            label: "1738",
            x: 32,
            y: 48,
            fact: "Seat of the Drayton family for seven generations, this land was acquired in 1738 by John Drayton (c. 1715-1779) as the center of his extensive indigo and rice planting ventures.",
          },
          {
            id: "architecture",
            label: "The house",
            x: 74,
            y: 42,
            fact: "One of the finest examples of Georgian Palladian architecture in America, this is the only surviving colonial plantation house on the Ashley River.",
          },
        ],
      },
      {
        kind: "scene",
        id: "oaks",
        kicker: "1742-1822",
        title: "Members of the family",
        partLabel: "the grounds",
        art: art(
          "m1014-oaks.jpg",
          "Illustration of a tree-lined lane and a plantation house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "william",
            label: "1742 and 1743",
            x: 32,
            y: 52,
            fact: "This distinguished South Carolina family included among its members William Henry Drayton (1742-1779), Revolutionary War Patriot, Chief Justice of South Carolina, member of Continental Congress; Dr. Charles Drayton (1743-1820), Lieutenant Governor 1785-1787.",
          },
          {
            id: "governor",
            label: "1767-1822",
            x: 74,
            y: 40,
            fact: "The marker names John Drayton (1767-1822), Governor of South Carolina 1800-1802, 1808-1812.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "c. 1715-1779",
        title: "Years the marker gives John Drayton",
        partLabel: "64 years",
        value: 64,
        unit: "years",
        meant:
          "What this meant: 1779 comes 64 years after 1715. Those are the years the marker prints for John Drayton (c. 1715-1779), who acquired this land.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1014-hall.jpg",
          "Illustration of a Georgian plantation house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1014-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Georgian plantation house, for the house the marker calls one of the finest examples of Georgian Palladian architecture in America and the only surviving colonial plantation house on the Ashley River. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "acquired",
            year: "1738",
            label: "John Drayton acquires this land.",
            why: "The marker says this land was acquired in 1738 by John Drayton (c. 1715-1779) as the center of his extensive indigo and rice planting ventures. It was the seat of the Drayton family for seven generations.",
          },
          {
            id: "william",
            year: "1742",
            label: "The years given for William Henry Drayton begin.",
            why: "The marker includes William Henry Drayton (1742-1779), Revolutionary War Patriot, Chief Justice of South Carolina, member of Continental Congress, and Dr. Charles Drayton (1743-1820).",
          },
          {
            id: "charles",
            year: "1785",
            label: "Dr. Charles Drayton is Lieutenant Governor.",
            why: "The marker says Dr. Charles Drayton (1743-1820) was Lieutenant Governor 1785-1787.",
          },
          {
            id: "governor",
            year: "1800",
            label: "John Drayton is Governor of South Carolina.",
            why: "The marker includes John Drayton (1767-1822), Governor of South Carolina 1800-1802, 1808-1812.",
          },
        ],
        ["governor", "acquired", "charles", "william"],
      ),
      takeaway([
        "Seat of the Drayton family for seven generations, this land was acquired in 1738 by John Drayton (c. 1715-1779) as the center of his extensive indigo and rice planting ventures.",
        "One of the finest examples of Georgian Palladian architecture in America, this is the only surviving colonial plantation house on the Ashley River.",
        "This distinguished South Carolina family included among its members William Henry Drayton (1742-1779), Revolutionary War Patriot, Chief Justice of South Carolina, member of Continental Congress; Dr. Charles Drayton (1743-1820), Lieutenant Governor 1785-1787; and John Drayton (1767-1822), Governor of South Carolina 1800-1802, 1808-1812.",
      ]),
    ],
  ),
];
