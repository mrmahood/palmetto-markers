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

export const charlestonLessonsU: MarkerLesson[] = [
  lesson(
    "10-97",
    "Born at 105 Wentworth St.",
    "Septima Clark timeline",
    [cited("10-97", "Septima Clark Birthplace", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "May 3, 1898",
        title: "A house on Wentworth Street",
        partLabel: "the house",
        art: art(
          "m1097-house.jpg",
          "Illustration of a Charleston house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "May 3, 1898",
            x: 32,
            y: 48,
            fact: "Septima Poinsette Clark, who Martin Luther King Jr. called “the Mother of the Movement,” was a nationally influential Civil Rights activist. She was born at 105 Wentworth St. on May 3, 1898 to Peter Poinsette, a former slave, and Victoria Anderson, who was of Haitian descent.",
          },
          {
            id: "taught",
            label: "Avery and Hampton",
            x: 74,
            y: 40,
            fact: "Clark earned her teacher’s certificate from Charleston’s Avery Normal Institute and her master’s from Hampton Institute. She taught for nearly 40 years.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1953",
        title: "Citizenship schools",
        partLabel: "the yard",
        art: art(
          "m1097-yard.jpg",
          "Illustration of a house yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "highlander",
            label: "1953",
            x: 32,
            y: 52,
            fact: "In 1953, Clark visited the Highlander Folk School in TN, which was dedicated to training community organizers and pursuing equality for all. Here she developed the “citizenship school” model, which promoted literacy and political education.",
          },
          {
            id: "schools",
            label: "By 1965",
            x: 74,
            y: 42,
            fact: "By 1965 Clark had helped to organize nearly 900 citizenship schools, including the first one on nearby Johns Island, and had helped to register more than 50,000 Black voters.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "By 1965",
        title: "Citizenship schools she helped organize",
        partLabel: "nearly 900 schools",
        value: 900,
        unit: "schools",
        meant:
          "What this meant: the marker says that by 1965 Clark had helped to organize nearly 900 citizenship schools, including the first one on nearby Johns Island. “Nearly” stays the marker’s word.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1097-house.jpg",
          "Illustration of a Charleston house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1097-today.jpg",
          "Illustration of a blank roadside marker on a residential street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house, for 105 Wentworth St., where the marker says Septima Poinsette Clark was born on May 3, 1898. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a residential street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "May 3, 1898",
            label: "Septima Poinsette Clark is born at 105 Wentworth St.",
            why: "The marker says she was born there on May 3, 1898 to Peter Poinsette, a former slave, and Victoria Anderson, who was of Haitian descent. It says Martin Luther King Jr. called her “the Mother of the Movement.”",
          },
          {
            id: "visit",
            year: "1953",
            label: "She visits the Highlander Folk School in TN.",
            why: "The marker says that in 1953 she visited the Highlander Folk School in TN, which was dedicated to training community organizers and pursuing equality for all. Here she developed the “citizenship school” model, which promoted literacy and political education.",
          },
          {
            id: "schools",
            year: "By 1965",
            label: "She has helped organize citizenship schools and register voters.",
            why: "The marker says that by 1965 she had helped to organize nearly 900 citizenship schools, including the first one on nearby Johns Island, and had helped to register more than 50,000 Black voters.",
          },
        ],
        ["schools", "born", "visit"],
      ),
      takeaway([
        "Septima Poinsette Clark, who Martin Luther King Jr. called “the Mother of the Movement,” was a nationally influential Civil Rights activist. She was born at 105 Wentworth St. on May 3, 1898 to Peter Poinsette, a former slave, and Victoria Anderson, who was of Haitian descent.",
        "Clark earned her teacher’s certificate from Charleston’s Avery Normal Institute and her master’s from Hampton Institute. She taught for nearly 40 years.",
        "In 1953 she visited the Highlander Folk School in TN and developed the “citizenship school” model. By 1965 she had helped to organize nearly 900 citizenship schools, including the first one on nearby Johns Island, and had helped to register more than 50,000 Black voters.",
      ]),
    ],
  ),
  lesson(
    "10-98",
    "First public library for African Americans in Charleston",
    "Dart Hall timeline",
    [
      cited("10-98", "John L. Dart Library", "front and back"),
      span(
        '"71 years" is 1959 minus 1888, the years the marker prints for Susan Dart Butler.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "library",
        kicker: "1927",
        title: "A reading room becomes Dart Hall",
        partLabel: "the library",
        art: art(
          "m1098-library.jpg",
          "Illustration of a small library building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1927",
            x: 32,
            y: 46,
            fact: "Dart Hall, at Kracke and Bogard Sts., was founded in 1927 by Susan Dart Butler (1888-1959) as the first public library for African Americans in Charleston.",
          },
          {
            id: "institute",
            label: "1894",
            x: 74,
            y: 56,
            fact: "She was the daughter of Rev. John L. Dart (1844-1947), who in 1894 established the Charleston Normal and Industrial Institute, later Burke H.S. The library began as a reading room in the printing office of the Institute, relying on Rev. Dart’s personal collection.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1931",
        title: "A branch, then a new building",
        partLabel: "the street",
        art: art(
          "m1098-street.jpg",
          "Illustration of a library on a street corner. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "branch",
            label: "1931",
            x: 32,
            y: 50,
            fact: "In 1931, with support of the Julius Rosenwald Fund, the collection and building expanded, and Dart Hall became a branch of the Charleston Free Library. The Dart family leased the building to the county for $1 a year until the county bought the building in 1952.",
          },
          {
            id: "razed",
            label: "1968",
            x: 74,
            y: 40,
            fact: "Susan Dart Butler continued to serve as librarian until 1957. In 1968 a new library was completed here and the original Dart Hall Library was razed.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1888-1959",
        title: "Years the marker prints for Susan Dart Butler",
        partLabel: "71 years",
        value: 71,
        unit: "years",
        meant:
          "What this meant: 1959 comes 71 years after 1888. That is the stretch the marker prints for Susan Dart Butler (1888-1959).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1098-library.jpg",
          "Illustration of a small library building. Not a historical photograph.",
        ),
        nowArt: art(
          "m1098-today.jpg",
          "Illustration of a blank roadside marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small library, for Dart Hall, which the marker says was founded in 1927 at Kracke and Bogard Sts. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "institute",
            year: "1894",
            label: "Rev. John L. Dart establishes the Charleston Normal and Industrial Institute.",
            why: "The marker says Rev. John L. Dart (1844-1947) established the Institute in 1894, later Burke H.S. The library began as a reading room in the printing office of the Institute, relying on Rev. Dart’s personal collection.",
          },
          {
            id: "founded",
            year: "1927",
            label: "Susan Dart Butler founds Dart Hall.",
            why: "The marker says Dart Hall, at Kracke and Bogard Sts., was founded in 1927 by Susan Dart Butler (1888-1959) as the first public library for African Americans in Charleston. It says she was his daughter.",
          },
          {
            id: "branch",
            year: "1931",
            label: "Dart Hall becomes a branch of the Charleston Free Library.",
            why: "The marker says that in 1931, with support of the Julius Rosenwald Fund, the collection and building expanded, and Dart Hall became a branch. The Dart family leased the building to the county for $1 a year until the county bought the building in 1952.",
          },
          {
            id: "razed",
            year: "1968",
            label: "A new library is completed and the original Dart Hall Library is razed.",
            why: "The marker says Susan Dart Butler continued to serve as librarian until 1957. In 1968 a new library was completed here and the original Dart Hall Library was razed.",
          },
        ],
        ["razed", "institute", "branch", "founded"],
      ),
      takeaway([
        "Dart Hall, at Kracke and Bogard Sts., was founded in 1927 by Susan Dart Butler (1888-1959) as the first public library for African Americans in Charleston. She was the daughter of Rev. John L. Dart (1844-1947).",
        "In 1894 Rev. Dart established the Charleston Normal and Industrial Institute, later Burke H.S. The library began as a reading room in the printing office of the Institute, relying on Rev. Dart’s personal collection. In 1931, with support of the Julius Rosenwald Fund, it expanded and became a branch of the Charleston Free Library.",
        "The Dart family leased the building to the county for $1 a year until the county bought the building in 1952. Susan Dart Butler continued to serve as librarian until 1957. In 1968 a new library was completed here and the original Dart Hall Library was razed.",
      ]),
    ],
  ),
  lesson(
    "10-99",
    "The earliest celebration of Memorial Day",
    "Hampton Park timeline",
    [cited("10-99", "First Memorial Day", "front and back")],
    [
      {
        kind: "scene",
        id: "cemetery",
        kicker: "1864",
        title: "A prison, then a fenced cemetery",
        partLabel: "the cemetery",
        art: art(
          "m1099-cemetery.jpg",
          "Illustration of a fenced cemetery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "prison",
            label: "1864",
            x: 32,
            y: 54,
            fact: "Hampton Park was once home to the Washington Race Course and Jockey Club. In 1864 this site became an outdoor prison for Union soldiers. Before Charleston fell in Feb. 1865, more than 250 prisoners died and were buried in mass graves.",
          },
          {
            id: "fence",
            label: "After the evacuation",
            x: 74,
            y: 40,
            fact: "After Confederate evacuation, black ministers and northern missionaries led an effort to reinter bodies and build a fence around a newly established cemetery. Over the entrance workmen inscribed the words “Martyrs of the Racecourse.”",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "May 1, 1865",
        title: "A parade for the Union war dead",
        partLabel: "the yard",
        art: art(
          "m1099-yard.jpg",
          "Illustration of a cemetery yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "parade",
            label: "May 1, 1865",
            x: 32,
            y: 46,
            fact: "On May 1, 1865 a parade to honor the Union war dead took place here. The event marked the earliest celebration of what became known as “Memorial Day.” The crowd numbered in the thousands, with African American school children from newly formed Freedmen’s Schools leading the parade.",
          },
          {
            id: "followed",
            label: "Who followed",
            x: 74,
            y: 58,
            fact: "They were followed by church leaders, Freedpeople, Unionists, and members of the 54th Mass., 34th, and 104th U.S. Colored Infantries. The dead were later reinterred in Beaufort.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Before Feb. 1865",
        title: "Prisoners who died and were buried in mass graves",
        partLabel: "more than 250 prisoners",
        value: 250,
        unit: "prisoners",
        meant:
          "What this meant: the marker says that before Charleston fell in Feb. 1865, more than 250 prisoners died and were buried in mass graves. “More than” stays the marker’s word.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1099-cemetery.jpg",
          "Illustration of a fenced cemetery. Not a historical photograph.",
        ),
        nowArt: art(
          "m1099-today.jpg",
          "Illustration of a blank roadside marker by a park fence. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a fenced cemetery, for the ground the marker says was the Washington Race Course and, in 1864, an outdoor prison for Union soldiers. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a park fence. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "prison",
            year: "1864",
            label: "This site becomes an outdoor prison for Union soldiers.",
            why: "The marker says Hampton Park was once home to the Washington Race Course and Jockey Club, and that in 1864 this site became an outdoor prison for Union soldiers.",
          },
          {
            id: "graves",
            year: "Before Feb. 1865",
            label: "More than 250 prisoners die and are buried in mass graves.",
            why: "The marker says that before Charleston fell in Feb. 1865, more than 250 prisoners died and were buried in mass graves.",
          },
          {
            id: "fence",
            year: "After the evacuation",
            label: "Bodies are reinterred and a fence is built around a new cemetery.",
            why: "The marker says that after Confederate evacuation, black ministers and northern missionaries led that effort. Over the entrance workmen inscribed the words “Martyrs of the Racecourse.”",
          },
          {
            id: "parade",
            year: "May 1, 1865",
            label: "A parade here honors the Union war dead.",
            why: "The marker says that on May 1, 1865 the parade marked the earliest celebration of what became known as “Memorial Day.” The crowd numbered in the thousands. The dead were later reinterred in Beaufort.",
          },
        ],
        ["parade", "prison", "fence", "graves"],
      ),
      takeaway([
        "Hampton Park was once home to the Washington Race Course and Jockey Club. In 1864 this site became an outdoor prison for Union soldiers. Before Charleston fell in Feb. 1865, more than 250 prisoners died and were buried in mass graves.",
        "After Confederate evacuation, black ministers and northern missionaries led an effort to reinter bodies and build a fence around a newly established cemetery. Over the entrance workmen inscribed the words “Martyrs of the Racecourse.”",
        "On May 1, 1865 a parade to honor the Union war dead took place here. The event marked the earliest celebration of what became known as “Memorial Day.” The dead were later reinterred in Beaufort.",
      ]),
    ],
  ),
  lesson(
    "10-100",
    "Delegates rewrite the S.C. Constitution",
    "Constitution of 1868 timeline",
    [
      cited("10-100", "Constitutional Convention of 1868", "front and back"),
      span(
        '"27 years" is 1895 minus 1868, the years the marker prints for the constitution of 1868 and the new constitution of 1895.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "January 1868",
        title: "The Charleston Club House",
        partLabel: "the hall",
        art: art(
          "m10100-hall.jpg",
          "Illustration of a meeting hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "met",
            label: "January 1868",
            x: 32,
            y: 44,
            fact: "In January 1868 delegates met to rewrite the S.C. Constitution. They convened at the Charleston Club House, which once stood near here.",
          },
          {
            id: "delegates",
            label: "The delegates",
            x: 74,
            y: 56,
            fact: "Before the Civil War the Club House was reserved for Charleston’s planter elite, but a majority of the delegates in 1868 were African American, some of them former slaves. The election of delegates to the convention was the first time that African American men voted in S.C.",
          },
        ],
      },
      {
        kind: "scene",
        id: "meeting",
        kicker: "1868",
        title: "One constitution, then another",
        partLabel: "the meeting",
        art: art(
          "m10100-meeting.jpg",
          "Illustration of an empty meeting hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rights",
            label: "The 1868 Constitution",
            x: 32,
            y: 50,
            fact: "The 1868 Constitution was a remarkable document for its time. The Declaration of Rights made no distinctions based on race. It created the basis for the state’s first public school system, as proposed by Robert Smalls, and guaranteed black male suffrage two years ahead of the 15th Amendment.",
          },
          {
            id: "later",
            label: "1895",
            x: 74,
            y: 38,
            fact: "In 1895, a new constitution would mandate segregated schools, outlaw interracial marriages, and disenfranchise black men.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1868-1895",
        title: "Years from one constitution to the next",
        partLabel: "27 years",
        value: 27,
        unit: "years",
        meant:
          "What this meant: 1895 comes 27 years after 1868. That is the stretch the marker prints for the constitution of 1868 and the new constitution of 1895.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10100-hall.jpg",
          "Illustration of a meeting hall. Not a historical photograph.",
        ),
        nowArt: art(
          "m10100-today.jpg",
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a meeting hall, for the Charleston Club House, where the marker says delegates met in January 1868. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "elite",
            year: "Before the Civil War",
            label: "The Club House is reserved for Charleston’s planter elite.",
            why: "The marker says that before the Civil War the Club House was reserved for Charleston’s planter elite. It says the Club House once stood near here.",
          },
          {
            id: "met",
            year: "January 1868",
            label: "Delegates meet to rewrite the S.C. Constitution.",
            why: "The marker says they convened at the Charleston Club House in January 1868. A majority of the delegates in 1868 were African American, some of them former slaves. The election of delegates was the first time that African American men voted in S.C.",
          },
          {
            id: "rights",
            year: "1868",
            label: "The 1868 Constitution sets out rights, schools, and suffrage.",
            why: "The marker says the Declaration of Rights made no distinctions based on race. It created the basis for the state’s first public school system, as proposed by Robert Smalls, and guaranteed black male suffrage two years ahead of the 15th Amendment.",
          },
          {
            id: "later",
            year: "1895",
            label: "A new constitution mandates segregated schools and disenfranchises black men.",
            why: "The marker says that in 1895 a new constitution would mandate segregated schools, outlaw interracial marriages, and disenfranchise black men.",
          },
        ],
        ["later", "elite", "rights", "met"],
      ),
      takeaway([
        "In January 1868 delegates met at the Charleston Club House, which once stood near here, to rewrite the S.C. Constitution. A majority of the delegates in 1868 were African American, some of them former slaves. The election of delegates was the first time that African American men voted in S.C.",
        "The 1868 Constitution’s Declaration of Rights made no distinctions based on race. It created the basis for the state’s first public school system, as proposed by Robert Smalls, and guaranteed black male suffrage two years ahead of the 15th Amendment.",
        "Before the Civil War the Club House was reserved for Charleston’s planter elite. In 1895, a new constitution would mandate segregated schools, outlaw interracial marriages, and disenfranchise black men.",
      ]),
    ],
  ),
];
