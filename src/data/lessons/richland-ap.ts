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

export const richlandLessonsAP: MarkerLesson[] = [
  lesson(
    "40-213",
    "An expanded unit on Harden and Lady",
    "Columbia Hospital timeline",
    [
      cited("40-213", 'Columbia Hospital "Negro Unit"', "front and back"),
      span(
        '"30 years" is 1965 minus 1935, the years the marker prints for the closing and the opening of the segregated School of Nursing.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hospital",
        kicker: "1943",
        title: "A four-story unit at the corner",
        partLabel: "the hospital building",
        art: art(
          "m40213-hospital.jpg",
          "Illustration of a four-story hospital building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wing",
            label: "1934",
            x: 32,
            y: 48,
            fact: "Columbia Hospital, est. 1892, opened a segregated wing for African Americans in 1934 at its Hampton St. location.",
          },
          {
            id: "unit",
            label: "1943",
            x: 74,
            y: 40,
            fact: 'In 1943, it built an expanded "Negro Unit" at the NW corner of Harden and Lady Sts. This 4-story facility was designed by architects Lafaye, Lafaye, & Fair and cost $333,000. In 1972, Columbia Hospital was replaced by Richland Memorial Hospital.',
          },
        ],
      },
      {
        kind: "scene",
        id: "ward",
        kicker: "1935",
        title: "Beds for patients, and a nursing school",
        partLabel: "the ward",
        art: art(
          "m40213-ward.jpg",
          "Illustration of an empty hospital ward. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "patients",
            label: "165 patients",
            x: 32,
            y: 54,
            fact: "When opened, it was equipped for 165 patients plus 30 infants.",
          },
          {
            id: "school",
            label: "1935 to 1965",
            x: 74,
            y: 42,
            fact: "In 1935, Columbia Hospital opened a segregated School of Nursing for African Americans. A first class of ten graduated in 1938. In 1941, a 3-story dormitory for African American nurses was built at the corner of Laurens and Washington Sts. It included classrooms, an auditorium, and a library. By the time the school closed in 1965, more than 400 nurses had graduated. The school was accredited by the state of S.C.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1935-1965",
        title: "Years the nursing school is open",
        partLabel: "30 years",
        value: 30,
        unit: "years",
        meant:
          "What this meant: 1965 comes 30 years after 1935. That is the stretch the marker prints for the closing and the opening of the segregated School of Nursing.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40213-hospital.jpg",
          "Illustration of a four-story hospital building. Not a historical photograph.",
        ),
        nowArt: art(
          "m40213-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a four-story hospital building, for the expanded unit the marker says was built in 1943 at the NW corner of Harden and Lady Sts. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "wing",
            year: "1934",
            label: "A segregated wing opens on Hampton Street.",
            why: "The marker says Columbia Hospital, est. 1892, opened a segregated wing for African Americans in 1934 at its Hampton St. location.",
          },
          {
            id: "school",
            year: "1935",
            label: "A segregated School of Nursing opens.",
            why: "The marker says that in 1935, Columbia Hospital opened a segregated School of Nursing for African Americans. A first class of ten graduated in 1938.",
          },
          {
            id: "unit",
            year: "1943",
            label: "An expanded Negro Unit is built.",
            why: 'The marker says that in 1943 it built an expanded "Negro Unit" at the NW corner of Harden and Lady Sts. This 4-story facility was designed by architects Lafaye, Lafaye, & Fair and cost $333,000.',
          },
          {
            id: "closed",
            year: "1965",
            label: "The School of Nursing closes.",
            why: "The marker says that by the time the school closed in 1965, more than 400 nurses had graduated. The school was accredited by the state of S.C.",
          },
        ],
        ["unit", "wing", "closed", "school"],
      ),
      takeaway([
        'Columbia Hospital, est. 1892, opened a segregated wing for African Americans in 1934 at its Hampton St. location. In 1943, it built an expanded "Negro Unit" at the NW corner of Harden and Lady Sts.',
        "This 4-story facility was designed by architects Lafaye, Lafaye, & Fair and cost $333,000. When opened, it was equipped for 165 patients plus 30 infants. In 1972, Columbia Hospital was replaced by Richland Memorial Hospital.",
        "In 1935, Columbia Hospital opened a segregated School of Nursing for African Americans. A first class of ten graduated in 1938. In 1941, a 3-story dormitory for African American nurses was built at the corner of Laurens and Washington Sts. By the time the school closed in 1965, more than 400 nurses had graduated.",
      ]),
    ],
  ),
  lesson(
    "40-214",
    "A march to the State House",
    "Edwards v. S.C. timeline",
    [cited("40-214", "Edwards v. S.C.", "front and back")],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "March 2, 1961",
        title: "Six blocks from Zion Baptist Church",
        partLabel: "the march",
        art: art(
          "m40214-street.jpg",
          "Illustration of marchers seen from behind on a city street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "march",
            label: "March 2, 1961",
            x: 32,
            y: 46,
            fact: "On March 2, 1961, over 200 African American college and high school students marched 6 blocks from Zion Baptist Church to the S.C. State House in an NAACP-organized protest of racial segregation.",
          },
          {
            id: "arrested",
            label: "190 arrested",
            x: 74,
            y: 58,
            fact: "Led by Benedict College theology student David Carter, protesters walked the capitol grounds, carried signs, and, when ordered to disperse, sang patriotic and religious songs. Despite the orderly nature of the protest, 190 people were arrested for disturbing the peace.",
          },
        ],
      },
      {
        kind: "scene",
        id: "court",
        kicker: "1963",
        title: "An 8-1 ruling in the Supreme Court",
        partLabel: "the courtroom",
        art: art(
          "m40214-court.jpg",
          "Illustration of an empty courtroom. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "appealed",
            label: "187 students",
            x: 32,
            y: 50,
            fact: "Defended by NAACP lawyers, including local attorneys Matthew Perry and Lincoln C. Jenkins Jr., 187 students appealed their convictions to the U.S. Supreme Court.",
          },
          {
            id: "ruling",
            label: "1963",
            x: 74,
            y: 38,
            fact: 'In 1963, the Court ruled 8-1 that the arrests violated the 1st and 14th Amendments. The decision, styled Edwards v. South Carolina after lead plaintiff James Edwards Jr., was a landmark ruling cited to defend activists across the U.S., declaring states may not "make criminal the peaceful expression of unpopular views."',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "March 2, 1961",
        title: "People arrested for disturbing the peace",
        partLabel: "190 people",
        value: 190,
        unit: "people",
        meant:
          "What this meant: the marker says that despite the orderly nature of the protest, 190 people were arrested for disturbing the peace.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40214-street.jpg",
          "Illustration of marchers seen from behind on a city street. Not a historical photograph.",
        ),
        nowArt: art(
          "m40214-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of marchers seen from behind on a city street, for the march the marker says went 6 blocks from Zion Baptist Church to the S.C. State House on March 2, 1961. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "march",
            year: "March 2, 1961",
            label: "Students march from Zion Baptist Church to the State House.",
            why: "The marker says that on March 2, 1961, over 200 African American college and high school students marched 6 blocks from Zion Baptist Church to the S.C. State House in an NAACP-organized protest of racial segregation.",
          },
          {
            id: "grounds",
            year: "March 2, 1961",
            label: "Protesters walk the capitol grounds and sing.",
            why: "The marker says they were led by Benedict College theology student David Carter, walked the capitol grounds, carried signs, and, when ordered to disperse, sang patriotic and religious songs.",
          },
          {
            id: "arrested",
            year: "March 2, 1961",
            label: "190 people are arrested for disturbing the peace.",
            why: "The marker says that despite the orderly nature of the protest, 190 people were arrested for disturbing the peace.",
          },
          {
            id: "ruling",
            year: "1963",
            label: "The U.S. Supreme Court rules 8-1.",
            why: 'The marker says 187 students appealed their convictions to the U.S. Supreme Court. In 1963, the Court ruled 8-1 that the arrests violated the 1st and 14th Amendments. The decision, styled Edwards v. South Carolina after lead plaintiff James Edwards Jr., was a landmark ruling cited to defend activists across the U.S., declaring states may not "make criminal the peaceful expression of unpopular views."',
          },
        ],
        ["ruling", "grounds", "march", "arrested"],
      ),
      takeaway([
        "On March 2, 1961, over 200 African American college and high school students marched 6 blocks from Zion Baptist Church to the S.C. State House in an NAACP-organized protest of racial segregation.",
        "Led by Benedict College theology student David Carter, protesters walked the capitol grounds, carried signs, and, when ordered to disperse, sang patriotic and religious songs. Despite the orderly nature of the protest, 190 people were arrested for disturbing the peace.",
        'Defended by NAACP lawyers, including local attorneys Matthew Perry and Lincoln C. Jenkins Jr., 187 students appealed their convictions to the U.S. Supreme Court. In 1963, the Court ruled 8-1 that the arrests violated the 1st and 14th Amendments. The decision was styled Edwards v. South Carolina after lead plaintiff James Edwards Jr.',
      ]),
    ],
  ),
  lesson(
    "40-215",
    "A school in a mill duplex",
    "Olympia Mill School timeline",
    [
      cited("40-215", "Olympia Mill School", "front and back"),
      span(
        '"8 years" is 1909 minus 1901, the years the marker prints for the move into a new brick building and the opening of the school.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "Oct. 1901",
        title: "Opened in a one-room building",
        partLabel: "the schoolhouse",
        art: art(
          "m40215-school.jpg",
          "Illustration of a frame schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opens",
            label: "Oct. 1901",
            x: 32,
            y: 46,
            fact: 'Organized by first teacher and principal Mary "Mamie" Boozer (1874-1947) at the behest of company leaders and county school officials, the school opened in Oct. 1901 in a one-room building with about thirty white pupils, whose families came to the mill seeking personal opportunity.',
          },
          {
            id: "frame",
            label: "1902",
            x: 74,
            y: 58,
            fact: "Enrollment at the Olympia school grew quickly, and in 1902 classes moved to this larger frame building. When converted to a school, the house's interior partition walls were removed to form three large classrooms.",
          },
        ],
      },
      {
        kind: "scene",
        id: "mill",
        kicker: "1900-01",
        title: "Homes built for mill workers",
        partLabel: "the mill",
        art: art(
          "m40215-mill.jpg",
          "Illustration of a cotton mill. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "homes",
            label: "1900-01",
            x: 32,
            y: 50,
            fact: "One of approx. 300 homes built 1900-01 for workers at nearby Olympia Cotton Mill, this 6-room duplex later housed the Olympia Mill School.",
          },
          {
            id: "brick",
            label: "1909",
            x: 74,
            y: 40,
            fact: "By 1909, around 240 students attended Olympia each day with 8 teachers. For a time, it was the largest school in Richland County. In fall 1909, the school moved into a new 2-story brick building in an adjacent lot just SE.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1901-1909",
        title: "Years from the opening to the brick school",
        partLabel: "8 years",
        value: 8,
        unit: "years",
        meant:
          "What this meant: 1909 comes 8 years after 1901. That is the stretch the marker prints for the move into a new brick building and the opening of the school.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40215-school.jpg",
          "Illustration of a frame schoolhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m40215-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame schoolhouse, for the larger frame building the marker says classes moved to in 1902. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "homes",
            year: "1900",
            label: "Homes are built for workers at the mill.",
            why: "The marker says this was one of approx. 300 homes built 1900-01 for workers at nearby Olympia Cotton Mill. This 6-room duplex later housed the Olympia Mill School.",
          },
          {
            id: "opens",
            year: "Oct. 1901",
            label: "The school opens in a one-room building.",
            why: 'The marker says the school, organized by first teacher and principal Mary "Mamie" Boozer (1874-1947) at the behest of company leaders and county school officials, opened in Oct. 1901 in a one-room building with about thirty white pupils.',
          },
          {
            id: "frame",
            year: "1902",
            label: "Classes move to this larger frame building.",
            why: "The marker says enrollment grew quickly, and in 1902 classes moved to this larger frame building. When converted to a school, the house's interior partition walls were removed to form three large classrooms.",
          },
          {
            id: "brick",
            year: "Fall 1909",
            label: "The school moves into a new brick building.",
            why: "The marker says that by 1909, around 240 students attended Olympia each day with 8 teachers, and for a time it was the largest school in Richland County. In fall 1909, the school moved into a new 2-story brick building in an adjacent lot just SE.",
          },
        ],
        ["brick", "homes", "frame", "opens"],
      ),
      takeaway([
        'One of approx. 300 homes built 1900-01 for workers at nearby Olympia Cotton Mill, this 6-room duplex later housed the Olympia Mill School. Organized by first teacher and principal Mary "Mamie" Boozer (1874-1947), the school opened in Oct. 1901 in a one-room building with about thirty white pupils.',
        "Enrollment at the Olympia school grew quickly, and in 1902 classes moved to this larger frame building. When converted to a school, the house's interior partition walls were removed to form three large classrooms.",
        "By 1909, around 240 students attended Olympia each day with 8 teachers. For a time, it was the largest school in Richland County. In fall 1909, the school moved into a new 2-story brick building in an adjacent lot just SE.",
      ]),
    ],
  ),
  lesson(
    "40-216",
    "A building for the state library",
    "South Carolina State Library timeline",
    [
      cited("40-216", "South Carolina State Library", "front and back"),
      span(
        '"5 years" is 1970 minus 1965, the years the marker prints for the dedication of this building and its authorization by the S.C. General Assembly.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "library",
        kicker: "Feb. 18, 1970",
        title: "Dedicated on this site",
        partLabel: "the library building",
        art: art(
          "m40216-library.jpg",
          "Illustration of a library building with two lion statues. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "dedicated",
            label: "Feb. 18, 1970",
            x: 32,
            y: 44,
            fact: "Authorized by the S.C. General Assembly in 1965 and constructed 1967-1969, this building was dedicated as the South Carolina State Library on Feb. 18, 1970. It was designed by architects Geiger, Califf, and Player.",
          },
          {
            id: "lions",
            label: "c.1895",
            x: 74,
            y: 60,
            fact: "The lion statues that flank the north entrance of the Library were created c.1895 by sculptor Alfonso Pelzer and previously stood in Camden, S.C.",
          },
        ],
      },
      {
        kind: "scene",
        id: "reading",
        kicker: "1929",
        title: "Scattered holdings in one building",
        partLabel: "the reading room",
        art: art(
          "m40216-reading.jpg",
          "Illustration of an empty library reading room. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "volumes",
            label: "500,000 volumes",
            x: 32,
            y: 48,
            fact: "Funding for the $1.7 million building came primarily from the federal Library Services and Construction Act (1964). The 5-story, 60,000-sq. ft. building was built to house 500,000 volumes.",
          },
          {
            id: "board",
            label: "1929",
            x: 74,
            y: 38,
            fact: "When finished, this building centralized the previously scattered holdings of the State Library Board, created in 1929 to help county and city governments establish and maintain local library systems. The Board reorganized in 1969 as the S.C. State Library and occupied this building.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1965-1970",
        title: "Years from authorization to dedication",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1970 comes 5 years after 1965. That is the stretch the marker prints for the dedication of this building and its authorization by the S.C. General Assembly.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40216-library.jpg",
          "Illustration of a library building with two lion statues. Not a historical photograph.",
        ),
        nowArt: art(
          "m40216-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a library building with two lion statues, for the building the marker says was dedicated as the South Carolina State Library on Feb. 18, 1970. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "board",
            year: "1929",
            label: "The State Library Board is created.",
            why: "The marker says the State Library Board was created in 1929 to help county and city governments establish and maintain local library systems.",
          },
          {
            id: "act",
            year: "1964",
            label: "The Library Services and Construction Act funds the building.",
            why: "The marker says funding for the $1.7 million building came primarily from the federal Library Services and Construction Act (1964).",
          },
          {
            id: "authorized",
            year: "1965",
            label: "The General Assembly authorizes this building.",
            why: "The marker says the building was authorized by the S.C. General Assembly in 1965 and constructed 1967-1969. It was designed by architects Geiger, Califf, and Player.",
          },
          {
            id: "dedicated",
            year: "Feb. 18, 1970",
            label: "The building is dedicated as the state library.",
            why: "The marker says this building was dedicated as the South Carolina State Library on Feb. 18, 1970. The Board reorganized in 1969 as the S.C. State Library and occupied this building.",
          },
        ],
        ["dedicated", "board", "authorized", "act"],
      ),
      takeaway([
        "Authorized by the S.C. General Assembly in 1965 and constructed 1967-1969, this building was dedicated as the South Carolina State Library on Feb. 18, 1970. It was designed by architects Geiger, Califf, and Player.",
        "Funding for the $1.7 million building came primarily from the federal Library Services and Construction Act (1964). The 5-story, 60,000-sq. ft. building was built to house 500,000 volumes.",
        "When finished, this building centralized the previously scattered holdings of the State Library Board, created in 1929. The Board reorganized in 1969 as the S.C. State Library and occupied this building. The lion statues that flank the north entrance were created c.1895 by sculptor Alfonso Pelzer and previously stood in Camden, S.C.",
      ]),
    ],
  ),
];
