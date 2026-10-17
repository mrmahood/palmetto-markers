import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia sites. Facts are from that marker only.
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

export const richlandLessonsAI: MarkerLesson[] = [
  lesson(
    "40-183",
    "A walking encyclopedia of S.C. history",
    "Salley House timeline",
    [
      cited("40-183", "A.S. Salley House", "front and back"),
      span(
        '"90 years" is 1961 minus 1871, the years the marker prints for Alexander S. Salley, given as 1871-1961.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1910",
        title: "Lived here from 1910",
        partLabel: "the house",
        art: art(
          "m40183-house.jpg",
          "Illustration of a classical revival house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lived",
            label: "1871-1961",
            x: 32,
            y: 48,
            fact: "Alexander S. Salley (1871-1961), the historian described as \"a walking encyclopedia\" of S.C. history, lived here from 1910 until his death. Salley, born in Orangeburg County, was secretary of the S.C. Historical Society in Charleston 1899-1905 and founding editor of the S.C. Historical & Genealogical Magazine.",
          },
          {
            id: "built",
            label: "Classical Revival, 1910",
            x: 74,
            y: 42,
            fact: "In 1910 he built this Classical Revival house, designed by Wilson, Sompayrac, & Urquhart.",
          },
        ],
      },
      {
        kind: "scene",
        id: "office",
        kicker: "1905-1949",
        title: "Records, an office, and a library",
        partLabel: "the office",
        art: art(
          "m40183-yard.jpg",
          "Illustration of a small house and a breezeway. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "commission",
            label: "1905-1949",
            x: 32,
            y: 52,
            fact: "He was secretary of the Historical Commission of S.C. 1905-1949, preserving and publishing many state historical records. Salley directed the Historical Commission (now the S.C. Department of Archives and History) until his reluctant retirement in 1949.",
          },
          {
            id: "library",
            label: "Small house, 1908",
            x: 74,
            y: 40,
            fact: "Salley later converted a small house he had built nearby in 1908 (now at 1917 College Street) as his office and library. Connected to this house by a breezeway, it housed his extensive collection of S.C. history.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1871-1961",
        title: "Years the marker prints for Salley",
        partLabel: "90 years",
        value: 90,
        unit: "years",
        meant:
          "What this meant: 1961 comes 90 years after 1871. Those are the years the marker prints for Alexander S. Salley, given as 1871-1961.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40183-house.jpg",
          "Illustration of a classical revival house. Not a historical photograph.",
        ),
        nowArt: art(
          "m40183-today.jpg",
          "Illustration of a blank marker near a house. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a classical revival house, for the house the marker says he built in 1910. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker near a house. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1871",
            label: "Alexander S. Salley is born in Orangeburg County.",
            why: "The marker gives Alexander S. Salley as 1871-1961 and says he was born in Orangeburg County.",
          },
          {
            id: "society",
            year: "1899",
            label: "He is secretary of the S.C. Historical Society in Charleston.",
            why: "The marker says he was secretary of the S.C. Historical Society in Charleston 1899-1905 and founding editor of the S.C. Historical & Genealogical Magazine.",
          },
          {
            id: "small",
            year: "1908",
            label: "He builds a small house nearby.",
            why: "The marker says he had built a small house nearby in 1908, later his office and library, now at 1917 College Street.",
          },
          {
            id: "classical",
            year: "1910",
            label: "He builds this Classical Revival house and lives here.",
            why: "The marker says in 1910 he built this Classical Revival house, designed by Wilson, Sompayrac, & Urquhart, and lived here from 1910 until his death.",
          },
        ],
        ["classical", "born", "small", "society"],
      ),
      takeaway([
        "Alexander S. Salley (1871-1961), the historian described as \"a walking encyclopedia\" of S.C. history, lived here from 1910 until his death. Salley, born in Orangeburg County, was secretary of the S.C. Historical Society in Charleston 1899-1905 and founding editor of the S.C. Historical & Genealogical Magazine.",
        "He was secretary of the Historical Commission of S.C. 1905-1949, preserving and publishing many state historical records. Salley directed the Historical Commission (now the S.C. Department of Archives and History) until his reluctant retirement in 1949.",
        "In 1910 he built this Classical Revival house, designed by Wilson, Sompayrac, & Urquhart. Salley later converted a small house he had built nearby in 1908 (now at 1917 College Street) as his office and library. Connected to this house by a breezeway, it housed his extensive collection of S.C. history.",
      ]),
    ],
  ),
  lesson(
    "40-184",
    "A tourist home for black travelers",
    "Cornwell Tourist Home timeline",
    [
      cited("40-184", "Harriett Cornwell Tourist Home", "front and back"),
      span(
        '"43 years" is 2007 minus 1964, the years the marker prints for the National Register listing and the Civil Rights Act.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "Main St.",
        title: "The first owner and his family",
        partLabel: "the house",
        art: art(
          "m40184-house.jpg",
          "Illustration of a frame house with a porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "owner",
            label: "John R. Cornwell",
            x: 32,
            y: 46,
            fact: "This home's first owner was John R. Cornwell, an African American business man and civic leader who owned a successful barber shop on Main St.",
          },
          {
            id: "family",
            label: "Hattie and her daughters",
            x: 74,
            y: 56,
            fact: "After his death, Cornwell's wife Hattie and daughters Geneva Scott and Harriett Cornwell lived here. Harriett also taught at Waverly Elementary School.",
          },
        ],
      },
      {
        kind: "scene",
        id: "lodging",
        kicker: "The 1940s",
        title: "A tourist home until after 1964",
        partLabel: "the tourist home",
        art: art(
          "m40184-yard.jpg",
          "Illustration of a house yard and porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "travelers",
            label: "Until after 1964",
            x: 32,
            y: 50,
            fact: "From the 1940s until after the Civil Rights Act of 1964 they ran the house as a \"tourist home\" for black travelers.",
          },
          {
            id: "listed",
            label: "Listed in 2007",
            x: 74,
            y: 40,
            fact: "During the Jim Crow era, segregation gave African American travelers very few choices for restaurants or lodging. Many chose to stay in a network of private houses located across the South and nation. These tourist homes often relied on word-of-mouth, but many were also listed in guides such as The Negro Travelers' Green Book. This house was listed in the National Register of Historic Places in 2007.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1964-2007",
        title: "Years from the Civil Rights Act to the listing",
        partLabel: "43 years",
        value: 43,
        unit: "years",
        meant:
          "What this meant: 2007 comes 43 years after 1964. Those are the years the marker prints for the listing in the National Register of Historic Places and the Civil Rights Act.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40184-house.jpg",
          "Illustration of a frame house with a porch. Not a historical photograph.",
        ),
        nowArt: art(
          "m40184-today.jpg",
          "Illustration of a blank marker near a house. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame house with a porch, for the house the marker says was run as a tourist home for black travelers. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker near a house. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "ran",
            year: "The 1940s",
            label: "They run the house as a tourist home for black travelers.",
            why: "The marker says from the 1940s until after the Civil Rights Act of 1964 they ran the house as a tourist home for black travelers.",
          },
          {
            id: "act",
            year: "1964",
            label: "They run the tourist home until after the Civil Rights Act.",
            why: "The marker says they ran the house from the 1940s until after the Civil Rights Act of 1964.",
          },
          {
            id: "listed",
            year: "2007",
            label: "The house is listed in the National Register of Historic Places.",
            why: "The marker says this house was listed in the National Register of Historic Places in 2007.",
          },
        ],
        ["listed", "ran", "act"],
      ),
      takeaway([
        "This home's first owner was John R. Cornwell, an African American business man and civic leader who owned a successful barber shop on Main St. After his death, Cornwell's wife Hattie and daughters Geneva Scott and Harriett Cornwell lived here.",
        "From the 1940s until after the Civil Rights Act of 1964 they ran the house as a \"tourist home\" for black travelers. Harriett also taught at Waverly Elementary School.",
        "During the Jim Crow era, segregation gave African American travelers very few choices for restaurants or lodging. Many chose to stay in a network of private houses located across the South and nation. These tourist homes often relied on word-of-mouth, but many were also listed in guides such as The Negro Travelers' Green Book. This house was listed in the National Register of Historic Places in 2007.",
      ]),
    ],
  ),
  lesson(
    "40-185",
    "Ferries on the Congaree River",
    "Congaree ferries timeline",
    [
      cited("40-185", "Congaree River Ferries", "front and back"),
      span(
        '"8 years" is 1757 minus 1749, the years the marker prints for John McCord\'s private ferry and Joseph Joyner\'s private ferry.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "ferry",
        kicker: "By 1749",
        title: "Joyner's ferry, then McCord's",
        partLabel: "the ferry",
        art: art(
          "m40185-ferry.jpg",
          "Illustration of a river ferry. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "joyner",
            label: "By 1749",
            x: 32,
            y: 50,
            fact: "Joseph Joyner owned a private ferry on the Congaree River near this site by 1749.",
          },
          {
            id: "mccord",
            label: "By 1757, public in 1766",
            x: 74,
            y: 42,
            fact: "John McCord's private ferry succeeded Joyner's by 1757, becoming public in 1766 by statute. A route from Charleston to Camden crossed the river at McCord's Ferry. Due to its strategic location, the ferry figured in actions on the south side of the river during the Revolutionary War.",
          },
        ],
      },
      {
        kind: "scene",
        id: "channel",
        kicker: "1845",
        title: "A new channel and a second ferry",
        partLabel: "the river",
        art: art(
          "m40185-river.jpg",
          "Illustration of a river and an oxbow. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bates",
            label: "Chartered in 1845",
            x: 32,
            y: 46,
            fact: "As the river cut a new channel, isolating the oxbow lake now called Bates Old River, a second ferry was chartered in 1845. This ferry was operated by the Bates family from the Civil War until bridges replaced both crossings in the 1920s.",
          },
          {
            id: "highway",
            label: "U.S. Hwy. 601",
            x: 74,
            y: 58,
            fact: "U.S. Hwy. 601 crosses the old river west of the McCord's Ferry site and the Congaree River two miles downriver from the former Bates Ferry site.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1749-1757",
        title: "Years from Joyner's ferry to McCord's",
        partLabel: "8 years",
        value: 8,
        unit: "years",
        meant:
          "What this meant: 1757 comes 8 years after 1749. Those are the years the marker prints for John McCord's private ferry, by 1757, and Joseph Joyner's private ferry, by 1749.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40185-ferry.jpg",
          "Illustration of a river ferry. Not a historical photograph.",
        ),
        nowArt: art(
          "m40185-today.jpg",
          "Illustration of a blank marker near a river. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a river ferry, for the private ferry the marker says Joseph Joyner owned near this site by 1749. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker near a river. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "joyner",
            year: "By 1749",
            label: "Joseph Joyner owns a private ferry near this site.",
            why: "The marker says Joseph Joyner owned a private ferry on the Congaree River near this site by 1749.",
          },
          {
            id: "mccord",
            year: "By 1757",
            label: "John McCord's private ferry succeeds Joyner's.",
            why: "The marker says John McCord's private ferry succeeded Joyner's by 1757.",
          },
          {
            id: "public",
            year: "1766",
            label: "McCord's ferry becomes public by statute.",
            why: "The marker says it became public in 1766 by statute. A route from Charleston to Camden crossed the river at McCord's Ferry.",
          },
          {
            id: "second",
            year: "1845",
            label: "A second ferry is chartered.",
            why: "The marker says a second ferry was chartered in 1845 as the river cut a new channel, isolating the oxbow lake now called Bates Old River.",
          },
        ],
        ["public", "second", "joyner", "mccord"],
      ),
      takeaway([
        "Joseph Joyner owned a private ferry on the Congaree River near this site by 1749. John McCord's private ferry succeeded Joyner's by 1757, becoming public in 1766 by statute.",
        "A route from Charleston to Camden crossed the river at McCord's Ferry. Due to its strategic location, the ferry figured in actions on the south side of the river during the Revolutionary War.",
        "As the river cut a new channel, isolating the oxbow lake now called Bates Old River, a second ferry was chartered in 1845. This ferry was operated by the Bates family from the Civil War until bridges replaced both crossings in the 1920s. U.S. Hwy. 601 crosses the old river west of the McCord's Ferry site and the Congaree River two miles downriver from the former Bates Ferry site.",
      ]),
    ],
  ),
  lesson(
    "40-186",
    "A center for community organization",
    "Zion Baptist timeline",
    [cited("40-186", "Zion Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1865",
        title: "From Gadsden St. to this site",
        partLabel: "the church",
        art: art(
          "m40186-church.jpg",
          "Illustration of a brick church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Organized in 1865",
            x: 32,
            y: 48,
            fact: "Zion Baptist Church first organized in 1865 and met in a humble dwelling on Gadsden St.",
          },
          {
            id: "sanctuary",
            label: "1871 and 1916",
            x: 74,
            y: 40,
            fact: "The congregation moved to this site in 1871. The current sanctuary, the second on this spot, was built in 1916. Zion Baptist has long served as a center for community organization.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1930",
        title: "Missions, a clinic, and a march",
        partLabel: "the church yard",
        art: art(
          "m40186-yard.jpg",
          "Illustration of a church yard and a basement door. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "missions",
            label: "1888 and 1919",
            x: 32,
            y: 54,
            fact: "Both the Women's Baptist Educational and Missionary Convention of S.C. (1888) and the Women's Auxiliary to the Gethsemane Baptist Association (1919) were founded here, as were other important missions.",
          },
          {
            id: "clinic",
            label: "1930 and March 2, 1961",
            x: 74,
            y: 42,
            fact: "In 1930 Dr. Matilda Evans, the first African American woman to have a practice in the state, started a free clinic in the basement of the church. It served 700 patients on its first day. On March 2, 1961 over 200 African American students met at Zion Baptist before beginning their march to the State House to protest racial segregation. The U.S. Supreme Court later overturned the convictions of those students arrested during the march in the case Edwards v. S.C. (1963).",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1930",
        title: "Patients on the clinic's first day",
        partLabel: "700 patients",
        value: 700,
        unit: "patients",
        meant:
          "What this meant: the marker says the free clinic Dr. Matilda Evans started in the basement of the church in 1930 served 700 patients on its first day.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40186-church.jpg",
          "Illustration of a brick church. Not a historical photograph.",
        ),
        nowArt: art(
          "m40186-today.jpg",
          "Illustration of a blank marker near a church. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick church, for the sanctuary the marker says was built in 1916, the second on this spot. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker near a church. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1865",
            label: "The church is organized on Gadsden St.",
            why: "The marker says Zion Baptist Church first organized in 1865 and met in a humble dwelling on Gadsden St.",
          },
          {
            id: "moved",
            year: "1871",
            label: "The congregation moves to this site.",
            why: "The marker says the congregation moved to this site in 1871.",
          },
          {
            id: "sanctuary",
            year: "1916",
            label: "The current sanctuary, the second on this spot, is built.",
            why: "The marker says the current sanctuary, the second on this spot, was built in 1916.",
          },
          {
            id: "march",
            year: "March 2, 1961",
            label: "Students meet here before marching to the State House.",
            why: "The marker says on March 2, 1961 over 200 African American students met at Zion Baptist before beginning their march to the State House to protest racial segregation. The U.S. Supreme Court later overturned the convictions of those students arrested during the march in the case Edwards v. S.C. (1963).",
          },
        ],
        ["sanctuary", "organized", "march", "moved"],
      ),
      takeaway([
        "Zion Baptist Church first organized in 1865 and met in a humble dwelling on Gadsden St. The congregation moved to this site in 1871. The current sanctuary, the second on this spot, was built in 1916.",
        "Zion Baptist has long served as a center for community organization. Both the Women's Baptist Educational and Missionary Convention of S.C. (1888) and the Women's Auxiliary to the Gethsemane Baptist Association (1919) were founded here, as were other important missions.",
        "In 1930 Dr. Matilda Evans, the first African American woman to have a practice in the state, started a free clinic in the basement of the church. It served 700 patients on its first day. On March 2, 1961 over 200 African American students met at Zion Baptist before beginning their march to the State House to protest racial segregation. The U.S. Supreme Court later overturned the convictions of those students arrested during the march in the case Edwards v. S.C. (1963).",
      ]),
    ],
  ),
];
