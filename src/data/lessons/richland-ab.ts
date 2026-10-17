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

export const richlandLessonsAB: MarkerLesson[] = [
  lesson(
    "40-143",
    "Built about 1879 by William J. Heidt",
    "Heidt-Russell House timeline",
    [
      cited("40-143", "Heidt-Russell House", "front and back"),
      span(
        '"19 years" is 1976 minus 1957, the years the marker prints for the end of Edwin Roberts Russell’s work as a research chemist at the Savannah River Plant and the start of that work.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "About 1879",
        title: "Greek Revival and Italianate",
        partLabel: "the house",
        art: art(
          "m40143-house.jpg",
          "Illustration of a Greek Revival and Italianate house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "About 1879",
            x: 32,
            y: 48,
            fact: "This house, with Greek Revival and Italianate architectural influences, was built about 1879 by William J. Heidt, builder and contractor who managed Heidlinger’s Steam Bakery.",
          },
          {
            id: "russell",
            label: "Until 1912",
            x: 74,
            y: 40,
            fact: "The Heidts lived here until 1912. Mary E. Russell, whose husband Nathaniel was a postman for the U.S. Post Office, bought the house in 1919.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1913-1996",
        title: "Early years of a research scientist",
        partLabel: "the yard",
        art: art(
          "m40143-yard.jpg",
          "Illustration of a house yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "early",
            label: "Edwin Roberts Russell",
            x: 32,
            y: 52,
            fact: "Edwin Roberts Russell (1913-1996) spent his early years here. A research scientist, he was one of the few blacks directly involved in the Manhattan Project to develop the atomic bomb.",
          },
          {
            id: "chicago",
            label: "1942-45",
            x: 74,
            y: 42,
            fact: "Educated at Benedict College and Howard University, in 1942-45 Russell helped separate plutonium from uranium at the University of Chicago. He returned to Columbia to teach at Allen University, then was a research chemist at the Savannah River Plant form 1957 to 1976.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1957 to 1976",
        title: "Years at the Savannah River Plant",
        partLabel: "19 years",
        value: 19,
        unit: "years",
        meant:
          "What this meant: 1976 comes 19 years after 1957. That is the stretch from the year the marker prints for the start of Edwin Roberts Russell’s work as a research chemist at the Savannah River Plant to the year that work ended.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40143-house.jpg",
          "Illustration of a Greek Revival and Italianate house. Not a historical photograph.",
        ),
        nowArt: art(
          "m40143-today.jpg",
          "Illustration of a marker by a house. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Greek Revival and Italianate house, for the house the marker says was built about 1879 by William J. Heidt. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a house. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "About 1879",
            label: "William J. Heidt builds the house.",
            why: "The marker says this house was built about 1879 by William J. Heidt, builder and contractor who managed Heidlinger’s Steam Bakery.",
          },
          {
            id: "heidts",
            year: "1912",
            label: "The Heidts live here until this year.",
            why: "The marker says the Heidts lived here until 1912.",
          },
          {
            id: "bought",
            year: "1919",
            label: "Mary E. Russell buys the house.",
            why: "The marker says Mary E. Russell, whose husband Nathaniel was a postman for the U.S. Post Office, bought the house in 1919.",
          },
          {
            id: "chicago",
            year: "1942-45",
            label: "Russell helps separate plutonium from uranium.",
            why: "The marker says that in 1942-45 Russell helped separate plutonium from uranium at the University of Chicago. He was educated at Benedict College and Howard University.",
          },
        ],
        ["chicago", "built", "bought", "heidts"],
      ),
      takeaway([
        "This house, with Greek Revival and Italianate architectural influences, was built about 1879 by William J. Heidt, builder and contractor who managed Heidlinger’s Steam Bakery.",
        "The Heidts lived here until 1912. Mary E. Russell, whose husband Nathaniel was a postman for the U.S. Post Office, bought the house in 1919.",
        "Edwin Roberts Russell (1913-1996) spent his early years here. A research scientist, he was one of the few blacks directly involved in the Manhattan Project to develop the atomic bomb. Educated at Benedict College and Howard University, in 1942-45 Russell helped separate plutonium from uranium at the University of Chicago. He returned to Columbia to teach at Allen University, then was a research chemist at the Savannah River Plant form 1957 to 1976.",
      ]),
    ],
  ),
  lesson(
    "40-144",
    "The leading black weekly in S.C.",
    "The Lighthouse & Informer timeline",
    [
      cited("40-144", "The Lighthouse & Informer", "front and back"),
      span(
        '"13 years" is 1954 minus 1941, the years the marker prints for the end and the start of the weekly published here.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "press",
        kicker: "1941 to 1954",
        title: "A weekly published here",
        partLabel: "the press",
        art: art(
          "m40144-press.jpg",
          "Illustration of a printing press and blank newspapers. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "weekly",
            label: "1941 to 1954",
            x: 32,
            y: 46,
            fact: "The Lighthouse & Informer, long the leading black newspaper in S.C., was a weekly published here from 1941 to 1954 by journalist and civil rights advocate John Henry McCray (1910-1997).",
          },
          {
            id: "voice",
            label: "A voice",
            x: 74,
            y: 58,
            fact: "McCray, who founded and paper “so our people can have a voice and some means of getting along together,” published articles covering every aspect of black life and columns and editorials advocating equal rights.",
          },
        ],
      },
      {
        kind: "scene",
        id: "office",
        kicker: "1944",
        title: "The Progressive Democratic Party",
        partLabel: "the office",
        art: art(
          "m40144-office.jpg",
          "Illustration of an empty newspaper office. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "party",
            label: "1944",
            x: 32,
            y: 50,
            fact: "In 1944, after the S.C. General Assembly repealed laws regulating primaries and the S.C. Democratic Party excluded blacks from voting in them, John H. McCray helped found the Progressive Democratic Party, the first black Democratic party in the South.",
          },
          {
            id: "later",
            label: "1987",
            x: 74,
            y: 40,
            fact: "He was an editor for other leading black newspapers in the 1950s and 1960s, then spent many years as an administrator at his alma mater, Talladega College. McCray died in Alabama in 1987.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1941 to 1954",
        title: "Years the weekly was published here",
        partLabel: "13 years",
        value: 13,
        unit: "years",
        meant:
          "What this meant: 1954 comes 13 years after 1941. That is the stretch from the year the weekly was published here to the year the marker prints as the end of that publication.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40144-press.jpg",
          "Illustration of a printing press and blank newspapers. Not a historical photograph.",
        ),
        nowArt: art(
          "m40144-today.jpg",
          "Illustration of a marker on a street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a printing press and blank newspapers, for the weekly the marker says was published here from 1941 to 1954. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "weekly",
            year: "1941",
            label: "The weekly is published here.",
            why: "The marker says The Lighthouse & Informer was a weekly published here from 1941 to 1954 by John Henry McCray (1910-1997).",
          },
          {
            id: "party",
            year: "1944",
            label: "McCray helps found the Progressive Democratic Party.",
            why: "The marker says that in 1944, after the S.C. General Assembly repealed laws regulating primaries and the S.C. Democratic Party excluded blacks from voting in them, John H. McCray helped found the Progressive Democratic Party, the first black Democratic party in the South.",
          },
          {
            id: "ended",
            year: "1954",
            label: "Publication of the weekly here ends.",
            why: "The marker says the weekly was published here from 1941 to 1954.",
          },
          {
            id: "died",
            year: "1987",
            label: "McCray dies in Alabama.",
            why: "The marker says McCray died in Alabama in 1987. He was an editor for other leading black newspapers in the 1950s and 1960s, then spent many years as an administrator at his alma mater, Talladega College.",
          },
        ],
        ["died", "weekly", "ended", "party"],
      ),
      takeaway([
        "The Lighthouse & Informer, long the leading black newspaper in S.C., was a weekly published here from 1941 to 1954 by journalist and civil rights advocate John Henry McCray (1910-1997).",
        "McCray, who founded and paper “so our people can have a voice and some means of getting along together,” published articles covering every aspect of black life and columns and editorials advocating equal rights.",
        "In 1944, after the S.C. General Assembly repealed laws regulating primaries and the S.C. Democratic Party excluded blacks from voting in them, John H. McCray helped found the Progressive Democratic Party, the first black Democratic party in the South. He was an editor for other leading black newspapers in the 1950s and 1960s, then spent many years as an administrator at his alma mater, Talladega College. McCray died in Alabama in 1987.",
      ]),
    ],
  ),
  lesson(
    "40-145",
    "A store managed by George A. Elmore",
    "Waverly Five and Dime timeline",
    [
      cited("40-145", "Waverly Five and Dime", "front and back"),
      span(
        '"2 years" is 1948 minus 1946, the years the marker prints for blacks voting in the next S.C. primary and Elmore being denied a ballot.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "store",
        kicker: "1945-48",
        title: "The store on this site",
        partLabel: "the store",
        art: art(
          "m40145-store.jpg",
          "Illustration of a small variety store. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "site",
            label: "Until about 1957",
            x: 32,
            y: 48,
            fact: "The Waverly Five & Dime, located here until about 1957, was managed 1945-48 by George A. Elmore (1905-1959), the African American plaintiff in a landmark voting rights case soon after World War II.",
          },
          {
            id: "work",
            label: "This store",
            x: 74,
            y: 40,
            fact: "Elmore ran this store and two liquor stores, and also worked as a photographer and cab driver.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1946",
        title: "Denied a ballot",
        partLabel: "the street",
        art: art(
          "m40145-street.jpg",
          "Illustration of a street and a columned courthouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "denied",
            label: "1946",
            x: 32,
            y: 54,
            fact: "In 1946, when he tried to vote in the all-white Democratic primary in Richland County, he was denied a ballot. In 1947 the National Association for the Advancement of Colored People (NAACP) sued to end the all-white primary in S.C.",
          },
          {
            id: "ruled",
            label: "1948",
            x: 74,
            y: 42,
            fact: "Judge J. Waties Waring (1880-1948) ruled in U.S. district court that it was “time for S.C. to rejoin the Union.” Blacks voted in the next S.C. primary, in 1948. As a result of the case, George Elmore endured numerous personal threats and economic reprisals that ruined his business.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1946 to 1948",
        title: "Years from the denied ballot to the vote",
        partLabel: "2 years",
        value: 2,
        unit: "years",
        meant:
          "What this meant: 1948 comes 2 years after 1946. That is the stretch from the year Elmore was denied a ballot to the year blacks voted in the next S.C. primary.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40145-store.jpg",
          "Illustration of a small variety store. Not a historical photograph.",
        ),
        nowArt: art(
          "m40145-today.jpg",
          "Illustration of a marker on a street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small variety store, for the Waverly Five & Dime the marker says was located here until about 1957. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "managed",
            year: "1945",
            label: "George A. Elmore manages the store.",
            why: "The marker says the Waverly Five & Dime was managed 1945-48 by George A. Elmore (1905-1959).",
          },
          {
            id: "denied",
            year: "1946",
            label: "He is denied a ballot in the primary.",
            why: "The marker says that in 1946, when he tried to vote in the all-white Democratic primary in Richland County, he was denied a ballot.",
          },
          {
            id: "sued",
            year: "1947",
            label: "The NAACP sues to end the all-white primary.",
            why: "The marker says that in 1947 the National Association for the Advancement of Colored People (NAACP) sued to end the all-white primary in S.C.",
          },
          {
            id: "voted",
            year: "1948",
            label: "Blacks vote in the next S.C. primary.",
            why: "The marker says Judge J. Waties Waring (1880-1948) ruled that it was “time for S.C. to rejoin the Union,” and that blacks voted in the next S.C. primary, in 1948.",
          },
        ],
        ["sued", "managed", "voted", "denied"],
      ),
      takeaway([
        "The Waverly Five & Dime, located here until about 1957, was managed 1945-48 by George A. Elmore (1905-1959), the African American plaintiff in a landmark voting rights case soon after World War II.",
        "Elmore ran this store and two liquor stores, and also worked as a photographer and cab driver. In 1946, when he tried to vote in the all-white Democratic primary in Richland County, he was denied a ballot.",
        "In 1947 the National Association for the Advancement of Colored People (NAACP) sued to end the all-white primary in S.C. Judge J. Waties Waring (1880-1948) ruled in U.S. district court that it was “time for S.C. to rejoin the Union.” Blacks voted in the next S.C. primary, in 1948. As a result of the case, George Elmore endured numerous personal threats and economic reprisals that ruined his business.",
      ]),
    ],
  ),
  lesson(
    "40-146",
    "Oldest African American Methodist congregation",
    "Wesley Methodist Church timeline",
    [
      cited("40-146", "Wesley Methodist Church", "front and back"),
      span(
        '"41 years" is 1910 minus 1869, the years the marker prints for the Columbia Mission buying this lot and the founding of the congregation.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1869",
        title: "A separate congregation",
        partLabel: "the church",
        art: art(
          "m40146-church.jpg",
          "Illustration of an early chapel and an upstairs meeting room. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1869",
            x: 32,
            y: 48,
            fact: "Wesley Methodist Church is the oldest African American Methodist congregation in Columbia. It was founded in 1869 by Rev. J.C. Emerson and was a separate black congregation instead of forming from an established white church.",
          },
          {
            id: "mission",
            label: "Columbia Mission",
            x: 74,
            y: 40,
            fact: "First called the Columbia Mission, it met upstairs in a Main St. building and later built its own chapel.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "About 1910",
        title: "This lot and a Gothic Revival church",
        partLabel: "the churchyard",
        art: art(
          "m40146-yard.jpg",
          "Illustration of a Gothic Revival church in its yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lot",
            label: "About 1910",
            x: 32,
            y: 50,
            fact: "About 1910 the Columbia Mission bought this lot and was renamed Wesley Methodist Episcopal Church.",
          },
          {
            id: "gothic",
            label: "1910-11",
            x: 74,
            y: 42,
            fact: "This Gothic Revival church, built in 1910-11, was designed by noted Columbia architect Arthur W. Hamby, who designed other churches in Columbia as well as in Winnsboro, Bishopville, and St. Matthews. Its high-style Late Gothic design is relatively unusual for an African-American church of its period, and is notable for its two asymmetrical towers, decorative brickwork, and pointed-arch stained glass windows.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1869 to 1910",
        title: "Years from the founding to this lot",
        partLabel: "41 years",
        value: 41,
        unit: "years",
        meant:
          "What this meant: 1910 comes 41 years after 1869. That is the stretch from the year the congregation was founded to the year the Columbia Mission bought this lot.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40146-church.jpg",
          "Illustration of an early chapel and an upstairs meeting room. Not a historical photograph.",
        ),
        nowArt: art(
          "m40146-today.jpg",
          "Illustration of a marker by a churchyard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early chapel and an upstairs meeting room, for the congregation the marker says was founded in 1869 and first called the Columbia Mission. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a churchyard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1869",
            label: "Rev. J.C. Emerson founds the congregation.",
            why: "The marker says it was founded in 1869 by Rev. J.C. Emerson and was a separate black congregation instead of forming from an established white church.",
          },
          {
            id: "lot",
            year: "About 1910",
            label: "The Columbia Mission buys this lot and is renamed.",
            why: "The marker says that about 1910 the Columbia Mission bought this lot and was renamed Wesley Methodist Episcopal Church.",
          },
          {
            id: "gothic",
            year: "1910-11",
            label: "The Gothic Revival church is built.",
            why: "The marker says this Gothic Revival church, built in 1910-11, was designed by noted Columbia architect Arthur W. Hamby.",
          },
        ],
        ["gothic", "founded", "lot"],
      ),
      takeaway([
        "Wesley Methodist Church is the oldest African American Methodist congregation in Columbia. It was founded in 1869 by Rev. J.C. Emerson and was a separate black congregation instead of forming from an established white church.",
        "First called the Columbia Mission, it met upstairs in a Main St. building and later built its own chapel. About 1910 the Columbia Mission bought this lot and was renamed Wesley Methodist Episcopal Church.",
        "This Gothic Revival church, built in 1910-11, was designed by noted Columbia architect Arthur W. Hamby, who designed other churches in Columbia as well as in Winnsboro, Bishopville, and St. Matthews. Its high-style Late Gothic design is relatively unusual for an African-American church of its period, and is notable for its two asymmetrical towers, decorative brickwork, and pointed-arch stained glass windows.",
      ]),
    ],
  ),
];
