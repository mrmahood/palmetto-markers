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

export const charlestonLessonsR: MarkerLesson[] = [
  lesson(
    "10-83",
    "Named for the nearby union station",
    "Union Heights timeline",
    [
      cited("10-83", "Union Heights", "front and back"),
      span(
        '"24 years" is 1943 minus 1919, the years the marker prints for the subdivision of Howard Heights into residential lots and the subdivision of Union Heights into lots.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "houses",
        kicker: "1919",
        title: "Lots named for the union station",
        partLabel: "the houses",
        art: art(
          "m1083-houses.jpg",
          "Illustration of neighborhood houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "Three railroads",
            x: 32,
            y: 50,
            fact: "This community, subdivided into lots in 1919, was named for the nearby union station of three railroads.",
          },
          {
            id: "belmont",
            label: "Belmont Plantation",
            x: 74,
            y: 42,
            fact: "It had been part of Belmont Plantation from the colonial period to the mid-19th century and became an African-American community after the Civil War.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1935",
        title: "Houses, churches, and shops",
        partLabel: "the street",
        art: art(
          "m1083-street.jpg",
          "Illustration of a neighborhood street of houses and shops. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "navy",
            label: "From 1935",
            x: 32,
            y: 48,
            fact: "Union Heights, a thriving neighborhood of houses, churches, and shops, grew with the dramatic expansion of the Charleston Navy Yard from 1935 through World War II and into the 1960s.",
          },
          {
            id: "howard",
            label: "1943",
            x: 74,
            y: 58,
            fact: "This community, subdivided into residential lots for African Americans in 1943, was named for Howard University. It had been part of Windsor Plantation in the early 19th century, then was part of the phosphate operations of the Virginia-Carolina Chemical Co. The Charleston Housing Authority developed this area with federal funding during World War II. Though smaller than Union Heights, Howard Heights flourished from 1943 into the 1960s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1919-1943",
        title: "Years between the two subdivisions",
        partLabel: "24 years",
        value: 24,
        unit: "years",
        meant:
          "What this meant: 1943 comes 24 years after 1919. Those are the years the marker prints for Howard Heights being subdivided into residential lots and for Union Heights being subdivided into lots.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1083-houses.jpg",
          "Illustration of neighborhood houses. Not a historical photograph.",
        ),
        nowArt: art(
          "m1083-today.jpg",
          "Illustration of a marker on a residential street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of neighborhood houses, for Union Heights, which the marker says was a thriving neighborhood of houses, churches, and shops. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a residential street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "community",
            year: "After the Civil War",
            label: "It becomes an African-American community.",
            why: "The marker says it had been part of Belmont Plantation from the colonial period to the mid-19th century and became an African-American community after the Civil War.",
          },
          {
            id: "lots",
            year: "1919",
            label: "Union Heights is subdivided into lots.",
            why: "The marker says this community was subdivided into lots in 1919 and was named for the nearby union station of three railroads.",
          },
          {
            id: "navy",
            year: "1935",
            label: "The neighborhood grows with the Navy Yard.",
            why: "The marker says Union Heights grew with the dramatic expansion of the Charleston Navy Yard from 1935 through World War II and into the 1960s.",
          },
          {
            id: "howard",
            year: "1943",
            label: "Howard Heights is subdivided into residential lots.",
            why: "The marker says this community was subdivided into residential lots for African Americans in 1943, was named for Howard University, and that Howard Heights flourished from 1943 into the 1960s.",
          },
        ],
        ["navy", "community", "howard", "lots"],
      ),
      takeaway([
        "This community, subdivided into lots in 1919, was named for the nearby union station of three railroads. It had been part of Belmont Plantation from the colonial period to the mid-19th century and became an African-American community after the Civil War.",
        "Union Heights, a thriving neighborhood of houses, churches, and shops, grew with the dramatic expansion of the Charleston Navy Yard from 1935 through World War II and into the 1960s.",
        "This community, subdivided into residential lots for African Americans in 1943, was named for Howard University. It had been part of Windsor Plantation in the early 19th century, then was part of the phosphate operations of the Virginia-Carolina Chemical Co. The Charleston Housing Authority developed this area with federal funding during World War II. Though smaller than Union Heights, Howard Heights flourished from 1943 into the 1960s.",
      ]),
    ],
  ),
  lesson(
    "10-84",
    "The first permanent English settlement",
    "Charles Towne timeline",
    [cited("10-84", "Charles Towne", "front and back")],
    [
      {
        kind: "scene",
        id: "palisade",
        kicker: "1670",
        title: "A palisaded fort and a few houses",
        partLabel: "the palisade",
        art: art(
          "m1084-palisade.jpg",
          "Illustration of a palisaded fort and a few houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "settled",
            label: "1670",
            x: 32,
            y: 50,
            fact: "The first permanent English settlement in what is now S.C. was established here in 1670. Named for King Charles II, the town was built on Albemarle Point, on the W bank of the Ashley River.",
          },
          {
            id: "fort",
            label: "1670-71",
            x: 74,
            y: 42,
            fact: "It began in 1670-71 with a palisaded fort and a few houses.",
          },
        ],
      },
      {
        kind: "scene",
        id: "harbor",
        kicker: "1680",
        title: "Across the Ashley to Oyster Point",
        partLabel: "the harbor",
        art: art(
          "m1084-harbor.jpg",
          "Illustration of a river harbor and the far bank. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "moved",
            label: "1680",
            x: 32,
            y: 46,
            fact: "As it grew, additional lots were laid out across the Ashley River on Oyster Point. In 1680 the proprietors of the colony moved the capital to that site, in present-day downtown Charleston.",
          },
          {
            id: "park",
            label: "1700",
            x: 74,
            y: 58,
            fact: "By 1700 this site was known as “Old Town Plantation,” and it was used for farming for almost 300 years. The last owners, Dr. and Mrs. Joseph I. Waring, renovated the overseer’s house as their home and created 80 acres of landscaped gardens. In 1969 they sold more than 650 acres to the state of S.C., which developed a park here for the S.C. Tricentennial of 1970. The site became a state park in 1971.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The gardens",
        title: "Acres of landscaped gardens",
        partLabel: "80 acres",
        value: 80,
        unit: "acres",
        meant:
          "What this meant: the marker says the last owners, Dr. and Mrs. Joseph I. Waring, created 80 acres of landscaped gardens.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1084-palisade.jpg",
          "Illustration of a palisaded fort and a few houses. Not a historical photograph.",
        ),
        nowArt: art(
          "m1084-today.jpg",
          "Illustration of a marker by a riverbank. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a palisaded fort, for the settlement the marker says began in 1670-71 with a palisaded fort and a few houses. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a riverbank. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "settled",
            year: "1670",
            label: "The first permanent English settlement is established here.",
            why: "The marker says it was established here in 1670, named for King Charles II, on Albemarle Point, on the W bank of the Ashley River. It began in 1670-71 with a palisaded fort and a few houses.",
          },
          {
            id: "moved",
            year: "1680",
            label: "The proprietors move the capital to Oyster Point.",
            why: "The marker says that in 1680 the proprietors of the colony moved the capital to that site, in present-day downtown Charleston, after additional lots were laid out across the Ashley River on Oyster Point.",
          },
          {
            id: "oldtown",
            year: "1700",
            label: "The site is known as Old Town Plantation.",
            why: "The marker says that by 1700 this site was known as “Old Town Plantation,” and it was used for farming for almost 300 years.",
          },
          {
            id: "park",
            year: "1971",
            label: "The site becomes a state park.",
            why: "The marker says the site became a state park in 1971. In 1969 Dr. and Mrs. Joseph I. Waring sold more than 650 acres to the state of S.C., which developed a park here for the S.C. Tricentennial of 1970.",
          },
        ],
        ["park", "settled", "oldtown", "moved"],
      ),
      takeaway([
        "The first permanent English settlement in what is now S.C. was established here in 1670. Named for King Charles II, the town was built on Albemarle Point, on the W bank of the Ashley River. It began in 1670-71 with a palisaded fort and a few houses.",
        "As it grew, additional lots were laid out across the Ashley River on Oyster Point. In 1680 the proprietors of the colony moved the capital to that site, in present-day downtown Charleston.",
        "By 1700 this site was known as “Old Town Plantation,” and it was used for farming for almost 300 years. The last owners, Dr. and Mrs. Joseph I. Waring, renovated the overseer’s house as their home and created 80 acres of landscaped gardens. In 1969 they sold more than 650 acres to the state of S.C., which developed a park here for the S.C. Tricentennial of 1970. The site became a state park in 1971.",
      ]),
    ],
  ),
  lesson(
    "10-85",
    "Where Briggs v. Elliott was heard",
    "U.S. Courthouse and Post Office timeline",
    [
      cited("10-85", "U.S. Courthouse and Post Office", "front and back"),
      span(
        '"88 years" is 1968 minus 1880, the years the marker prints for J. Waties Waring.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "courthouse",
        kicker: "1896",
        title: "A Renaissance Revival building",
        partLabel: "the courthouse",
        art: art(
          "m1085-courthouse.jpg",
          "Illustration of a Renaissance Revival courthouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1896",
            x: 32,
            y: 48,
            fact: "This Renaissance Revival building, opened in 1896, is notable for its association with U.S. District Judge J. Waties Waring (1880-1968).",
          },
          {
            id: "served",
            label: "1942 to 1952",
            x: 74,
            y: 40,
            fact: "Waring, a Charleston native who served here 1942 to 1952, issued some of the most important civil rights rulings of the era.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "May 28-29, 1951",
        title: "Briggs v. Elliott was heard here",
        partLabel: "the street",
        art: art(
          "m1085-street.jpg",
          "Illustration of a courthouse along a city street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "hearing",
            label: "May 28-29, 1951",
            x: 32,
            y: 46,
            fact: "Briggs v. Elliott, the first suit to challenge public school segregation in the U.S., was heard here before three judges on May 28-29, 1951. Thurgood Marshall and other NAACP Legal Defense Fund lawyers represented Harry and Eliza Briggs and 19 other courageous parents from Clarendon County.",
          },
          {
            id: "brown",
            label: "1954",
            x: 74,
            y: 58,
            fact: "In a bold and vigorous dissent opposing the prevailing doctrine of separate but equal, Waring declared that segregation “must go and must go now. Segregation is per se inequality.” The U.S. Supreme Court followed his analysis as a central part of its groundbreaking decision in Brown v. Board of Education (1954).",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1880-1968",
        title: "Years the marker prints for Judge Waring",
        partLabel: "88 years",
        value: 88,
        unit: "years",
        meant:
          "What this meant: 1968 comes 88 years after 1880. That is the stretch the marker prints for U.S. District Judge J. Waties Waring (1880-1968).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1085-courthouse.jpg",
          "Illustration of a Renaissance Revival courthouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m1085-today.jpg",
          "Illustration of a marker on a city sidewalk. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Renaissance Revival courthouse, for the building the marker says opened in 1896. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a city sidewalk. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "1896",
            label: "The Renaissance Revival building opens.",
            why: "The marker says this Renaissance Revival building opened in 1896.",
          },
          {
            id: "served",
            year: "1942",
            label: "The marker dates Waring’s service here from 1942.",
            why: "The marker says Waring, a Charleston native, served here 1942 to 1952 and issued some of the most important civil rights rulings of the era.",
          },
          {
            id: "briggs",
            year: "May 28-29, 1951",
            label: "Briggs v. Elliott is heard here.",
            why: "The marker says Briggs v. Elliott, the first suit to challenge public school segregation in the U.S., was heard here before three judges on May 28-29, 1951.",
          },
          {
            id: "brown",
            year: "1954",
            label: "Brown v. Board of Education is decided.",
            why: "The marker says the U.S. Supreme Court followed his analysis as a central part of its groundbreaking decision in Brown v. Board of Education (1954).",
          },
        ],
        ["briggs", "opened", "brown", "served"],
      ),
      takeaway([
        "This Renaissance Revival building, opened in 1896, is notable for its association with U.S. District Judge J. Waties Waring (1880-1968). Waring, a Charleston native who served here 1942 to 1952, issued some of the most important civil rights rulings of the era.",
        "Briggs v. Elliott, the first suit to challenge public school segregation in the U.S., was heard here before three judges on May 28-29, 1951. Thurgood Marshall and other NAACP Legal Defense Fund lawyers represented Harry and Eliza Briggs and 19 other courageous parents from Clarendon County.",
        "In a bold and vigorous dissent opposing the prevailing doctrine of separate but equal, Waring declared that segregation “must go and must go now. Segregation is per se inequality.” The U.S. Supreme Court followed his analysis as a central part of its groundbreaking decision in Brown v. Board of Education (1954).",
      ]),
    ],
  ),
  lesson(
    "10-86",
    "Founded at the dawn of emancipation",
    "Plymouth Church timeline",
    [
      cited("10-86", "Plymouth Church", "front and back"),
      span(
        '"5 years" is 1872 minus 1867, the years the marker prints for the completion of this church building and the founding of Plymouth Church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1867",
        title: "Founded by former members of the Circular Church",
        partLabel: "the church",
        art: art(
          "m1086-church.jpg",
          "Illustration of a Gothic Revival church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1867",
            x: 32,
            y: 50,
            fact: "In 1867 over 100 African Americans, most former members of the Circular Church, founded Plymouth Church, among the oldest black Congregational Churches in the South. Plymouth is an example of the independent black churches formed at the dawn of emancipation.",
          },
          {
            id: "building",
            label: "1872",
            x: 74,
            y: 40,
            fact: "Early pastor Francis L. Cardozo was also involved in the operation of Avery Normal Institute, a school for black students. This Gothic Revival church building was completed in 1872.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1886",
        title: "A parsonage for church leaders",
        partLabel: "the yard",
        art: art(
          "m1086-yard.jpg",
          "Illustration of a church parsonage and yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "parsonage",
            label: "1886",
            x: 32,
            y: 48,
            fact: "Plymouth parsonage, built in 1886, was home to church leaders. Pastors who lived here were active in anti-lynching and equal rights campaigns.",
          },
          {
            id: "visitors",
            label: "1925 and 1948",
            x: 74,
            y: 58,
            fact: "Plymouth also hosted a number of prominent black figures. W.E.B. Du Bois, a founding NAACP member, visited in 1925, and Paul Robeson, a singer and activist, stayed here while campaigning for presidential candidate Henry Wallace in 1948. In 1957 the congregation moved to a new location one mile north on Spring Street.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1867-1872",
        title: "Years from the founding to the building",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1872 comes 5 years after 1867. Those are the years the marker prints for the completion of this Gothic Revival church building and for the founding of Plymouth Church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1086-church.jpg",
          "Illustration of a Gothic Revival church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1086-today.jpg",
          "Illustration of a marker by a church street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Gothic Revival church, for the church building the marker says was completed in 1872. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a church street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1867",
            label: "Plymouth Church is founded.",
            why: "The marker says that in 1867 over 100 African Americans, most former members of the Circular Church, founded Plymouth Church.",
          },
          {
            id: "dubois",
            year: "1925",
            label: "W.E.B. Du Bois visits.",
            why: "The marker says W.E.B. Du Bois, a founding NAACP member, visited in 1925.",
          },
          {
            id: "robeson",
            year: "1948",
            label: "Paul Robeson stays while campaigning.",
            why: "The marker says Paul Robeson, a singer and activist, stayed here while campaigning for presidential candidate Henry Wallace in 1948.",
          },
          {
            id: "moved",
            year: "1957",
            label: "The congregation moves one mile north.",
            why: "The marker says that in 1957 the congregation moved to a new location one mile north on Spring Street.",
          },
        ],
        ["robeson", "founded", "moved", "dubois"],
      ),
      takeaway([
        "In 1867 over 100 African Americans, most former members of the Circular Church, founded Plymouth Church, among the oldest black Congregational Churches in the South. Plymouth is an example of the independent black churches formed at the dawn of emancipation.",
        "Early pastor Francis L. Cardozo was also involved in the operation of Avery Normal Institute, a school for black students. This Gothic Revival church building was completed in 1872. Plymouth parsonage, built in 1886, was home to church leaders. Pastors who lived here were active in anti-lynching and equal rights campaigns.",
        "Plymouth also hosted a number of prominent black figures. W.E.B. Du Bois, a founding NAACP member, visited in 1925, and Paul Robeson, a singer and activist, stayed here while campaigning for presidential candidate Henry Wallace in 1948. In 1957 the congregation moved to a new location one mile north on Spring Street.",
      ]),
    ],
  ),
];
