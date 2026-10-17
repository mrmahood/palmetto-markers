import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Richland County sites. Facts are from that marker only.
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

export const richlandLessonsAM: MarkerLesson[] = [
  lesson(
    "40-200",
    "A bank building, then a jewelers",
    "Sylan Building timeline",
    [
      cited("40-200", "Sylan Building", "front and back"),
      span(
        '"34 years" is 1905 minus 1871, the years the marker prints for the Sylvan Brothers acquiring the former Central National Bank building and the charter of that bank.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "building",
        kicker: "c. 1871",
        title: "A Mansard roof for a bank",
        partLabel: "the bank building",
        art: art(
          "m40200-building.jpg",
          "Illustration of a mansard-roofed building and a staircase. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "roof",
            label: "Built c. 1871",
            x: 32,
            y: 46,
            fact: "The Sylvan Building, built c. 1871, is attributed to prominent Philadelphia architect Samuel Sloan. Distinguished by its slate Mansard roof, it is today the lone remaining example of French Second Empire architecture on Columbia's Main Street.",
          },
          {
            id: "bank",
            label: "Chartered in 1871",
            x: 74,
            y: 58,
            fact: "It was originally built to house the Central National Bank, which was chartered in 1871. In its original configuration the banking floor was on the basement level, with entrance via a monumental staircase.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1897",
        title: "Jewelers, then a street clock",
        partLabel: "the jewelers and the clock",
        art: art(
          "m40200-street.jpg",
          "Illustration of a street corner and a sidewalk clock. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "brothers",
            label: "Jewelers in 1897",
            x: 32,
            y: 52,
            fact: "The Sylvan Brothers, Gustaf and Johannes, emigrated from Sweden and began operating Sylvan Brothers Jewelers in 1897. In 1905 they acquired the former Central National Bank building and moved their business here.",
          },
          {
            id: "clock",
            label: "Street clock, 1908",
            x: 74,
            y: 40,
            fact: "In 1908 the Sylvan Brothers added the street clock at the corner of Main and Hampton. Likely produced by the Seth Thomas Co., it was one of a set of five. One other is in Columbia. Others are in Boston, New Orleans, and San Francisco.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1871 to 1905",
        title: "Years from the bank charter to the jewelers",
        partLabel: "34 years",
        value: 34,
        unit: "years",
        meant:
          "What this meant: 1905 comes 34 years after 1871. That is the stretch from the year the marker prints for the Central National Bank charter, and the building built c. 1871, to the year the Sylvan Brothers acquired the former bank building.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40200-building.jpg",
          "Illustration of a mansard-roofed building and a staircase. Not a historical photograph.",
        ),
        nowArt: art(
          "m40200-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a mansard-roofed building and a staircase, for the building the marker says was built c. 1871 to house the Central National Bank. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "c. 1871",
            label: "The building is built for the Central National Bank.",
            why: "The marker says the Sylvan Building was built c. 1871 to house the Central National Bank, which was chartered in 1871.",
          },
          {
            id: "jewelers",
            year: "1897",
            label: "Sylvan Brothers Jewelers begins.",
            why: "The marker says Gustaf and Johannes emigrated from Sweden and began operating Sylvan Brothers Jewelers in 1897.",
          },
          {
            id: "acquired",
            year: "1905",
            label: "They acquire the former bank building.",
            why: "The marker says in 1905 they acquired the former Central National Bank building and moved their business here.",
          },
          {
            id: "clock",
            year: "1908",
            label: "They add the street clock at Main and Hampton.",
            why: "The marker says in 1908 the Sylvan Brothers added the street clock at the corner of Main and Hampton.",
          },
        ],
        ["clock", "built", "acquired", "jewelers"],
      ),
      takeaway([
        "The Sylvan Building, built c. 1871, is attributed to prominent Philadelphia architect Samuel Sloan. Distinguished by its slate Mansard roof, it is today the lone remaining example of French Second Empire architecture on Columbia's Main Street.",
        "It was originally built to house the Central National Bank, which was chartered in 1871. In its original configuration the banking floor was on the basement level, with entrance via a monumental staircase.",
        "The Sylvan Brothers, Gustaf and Johannes, emigrated from Sweden and began operating Sylvan Brothers Jewelers in 1897. In 1905 they acquired the former Central National Bank building and moved their business here. In 1908 the Sylvan Brothers added the street clock at the corner of Main and Hampton. Likely produced by the Seth Thomas Co., it was one of a set of five. One other is in Columbia. Others are in Boston, New Orleans, and San Francisco.",
      ]),
    ],
  ),
  lesson(
    "40-201",
    "Five pastors in 130 years",
    "Little Zion timeline",
    [
      cited("40-201", "Little Zion Baptist Church", "front and back"),
      span(
        '"50 years" is 1937 minus 1887, the years the marker prints for the end and the start of Rev. Abraham Chandler\'s pastorate.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "c. 1832",
        title: "A brush arbor, then a frame sanctuary",
        partLabel: "the early congregation",
        art: art(
          "m40201-church.jpg",
          "Illustration of a brush arbor and a frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "dates",
            label: "Dates to c. 1832",
            x: 32,
            y: 48,
            fact: "The congregation at Little Zion dates to c. 1832, when enslaved individuals worshipped in white-controlled churches. After emancipation, these former slaves founded independent congregations like this one.",
          },
          {
            id: "land",
            label: "Land c. 1886",
            x: 74,
            y: 42,
            fact: "A group led by Doctor Entzminger purchased the land where the church now stands c. 1886. In earlier years services were held under a brush arbor. Later, a frame sanctuary was built.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1887-1937",
        title: "Five pastors, then a highway name",
        partLabel: "the pastors",
        art: art(
          "m40201-yard.jpg",
          "Illustration of a church and an open churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "chandler",
            label: "Fifty years, 1887-1937",
            x: 32,
            y: 54,
            fact: "In the past 130 years, Little Zion has had only five pastors. The longest pastorate was Rev. Abraham Chandler, who served for fifty years from 1887-1937.",
          },
          {
            id: "davis",
            label: "Pastor since 1983",
            x: 74,
            y: 40,
            fact: "Under the leadership of Pastor Eddie W. Davis, the newest edifice was built in 1995 and added land was purchased. In 2016, a part of Winnsboro Hwy. was named for him in honor of all his accomplishments and service as pastor since 1983.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1887 to 1937",
        title: "Years in the longest pastorate",
        partLabel: "50 years",
        value: 50,
        unit: "years",
        meant:
          "What this meant: 1937 comes 50 years after 1887. The marker says the longest pastorate was Rev. Abraham Chandler, who served for fifty years from 1887-1937.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40201-church.jpg",
          "Illustration of a brush arbor and a frame church. Not a historical photograph.",
        ),
        nowArt: art(
          "m40201-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brush arbor and a frame church, for the brush arbor and later frame sanctuary the marker describes. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "dates",
            year: "c. 1832",
            label: "The congregation at Little Zion dates to this time.",
            why: "The marker says the congregation at Little Zion dates to c. 1832, when enslaved individuals worshipped in white-controlled churches.",
          },
          {
            id: "land",
            year: "c. 1886",
            label: "Doctor Entzminger's group purchases the land.",
            why: "The marker says a group led by Doctor Entzminger purchased the land where the church now stands c. 1886.",
          },
          {
            id: "chandler",
            year: "1887",
            label: "Rev. Abraham Chandler's pastorate begins.",
            why: "The marker says the longest pastorate was Rev. Abraham Chandler, who served for fifty years from 1887-1937.",
          },
          {
            id: "highway",
            year: "2016",
            label: "A part of Winnsboro Hwy. is named for the pastor.",
            why: "The marker says in 2016 a part of Winnsboro Hwy. was named for Pastor Eddie W. Davis, in honor of his accomplishments and service as pastor since 1983. Under his leadership the newest edifice was built in 1995 and added land was purchased.",
          },
        ],
        ["highway", "land", "dates", "chandler"],
      ),
      takeaway([
        "The congregation at Little Zion dates to c. 1832, when enslaved individuals worshipped in white-controlled churches. After emancipation, these former slaves founded independent congregations like this one.",
        "A group led by Doctor Entzminger purchased the land where the church now stands c. 1886. In earlier years services were held under a brush arbor. Later, a frame sanctuary was built. In the past 130 years, Little Zion has had only five pastors. The longest pastorate was Rev. Abraham Chandler, who served for fifty years from 1887-1937.",
        "Under the leadership of Pastor Eddie W. Davis, the newest edifice was built in 1995 and added land was purchased. In 2016, a part of Winnsboro Hwy. was named for him in honor of all his accomplishments and service as pastor since 1983.",
      ]),
    ],
  ),
  lesson(
    "40-202",
    "Yearned for a community theatre",
    "Town Theatre timeline",
    [
      cited("40-202", "Town Theatre", "front and back"),
      span(
        '"5 years" is 1924 minus 1919, the years the marker prints for the completion of the present building and the founding of Town Theatre.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1919",
        title: "A first home, then a youth program",
        partLabel: "the first home",
        art: art(
          "m40202-street.jpg",
          "Illustration of a residential street and a plain house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Founded in 1919",
            x: 32,
            y: 50,
            fact: "The Town Theatre was founded in 1919 by public-spirited Columbians who yearned for a community theatre. Daniel A. Reed, the first director, was an actor and director stationed at Camp Jackson during WWI. The first home for the theatre was the Sloan House at 1012 Sumter St.",
          },
          {
            id: "junior",
            label: "Junior Stage Society, 1921",
            x: 74,
            y: 40,
            fact: "Town Theatre initiated the Junior Stage Society program in 1921, becoming one of the pioneers of youth theatre in the U.S.",
          },
        ],
      },
      {
        kind: "scene",
        id: "theatre",
        kicker: "1924",
        title: "This building, and this stage",
        partLabel: "the present building",
        art: art(
          "m40202-theatre.jpg",
          "Illustration of a theatre building and an empty stage. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "building",
            label: "Completed in 1924",
            x: 32,
            y: 46,
            fact: "The present building, designed by Arthur W. Hamby, was completed in 1924 and is listed in the National Register of Historic Places. Renovations over the years have added dressing rooms, a fly loft, and scene shop.",
          },
          {
            id: "stage",
            label: "On this stage",
            x: 74,
            y: 58,
            fact: "On this stage Carl Sandburg recited poetry; Academy Award winners Delbert Mann directed and Stanley Donen acted; Martha Graham danced; DuBose Heyward lectured; and famed artist Jasper Johns painted sets. By virtue of its 100 year legacy to the arts, Town Theatre has contributed significantly to the cultural life of the city of Columbia and state of S.C.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1919 to 1924",
        title: "Years from the founding to this building",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1924 comes 5 years after 1919. That is the stretch from the year the marker prints for the founding of Town Theatre to the year the present building was completed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40202-theatre.jpg",
          "Illustration of a theatre building and an empty stage. Not a historical photograph.",
        ),
        nowArt: art(
          "m40202-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a theatre building and an empty stage, for the present building the marker says was completed in 1924. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1919",
            label: "Town Theatre is founded.",
            why: "The marker says Town Theatre was founded in 1919 by public-spirited Columbians who yearned for a community theatre. The first home was the Sloan House at 1012 Sumter St.",
          },
          {
            id: "junior",
            year: "1921",
            label: "The Junior Stage Society program begins.",
            why: "The marker says Town Theatre initiated the Junior Stage Society program in 1921, becoming one of the pioneers of youth theatre in the U.S.",
          },
          {
            id: "building",
            year: "1924",
            label: "The present building is completed.",
            why: "The marker says the present building, designed by Arthur W. Hamby, was completed in 1924 and is listed in the National Register of Historic Places.",
          },
        ],
        ["building", "founded", "junior"],
      ),
      takeaway([
        "The Town Theatre was founded in 1919 by public-spirited Columbians who yearned for a community theatre. Daniel A. Reed, the first director, was an actor and director stationed at Camp Jackson during WWI. The first home for the theatre was the Sloan House at 1012 Sumter St.",
        "The present building, designed by Arthur W. Hamby, was completed in 1924 and is listed in the National Register of Historic Places. Renovations over the years have added dressing rooms, a fly loft, and scene shop.",
        "On this stage Carl Sandburg recited poetry; Academy Award winners Delbert Mann directed and Stanley Donen acted; Martha Graham danced; DuBose Heyward lectured; and famed artist Jasper Johns painted sets. Town Theatre initiated the Junior Stage Society program in 1921, becoming one of the pioneers of youth theatre in the U.S. By virtue of its 100 year legacy to the arts, Town Theatre has contributed significantly to the cultural life of the city of Columbia and state of S.C.",
      ]),
    ],
  ),
  lesson(
    "40-203",
    "A permanent home for the teachers",
    "S.C. Education Association timeline",
    [
      cited("40-203", "S.C. Education Association", "front and back"),
      span(
        '"28 years" is 1968 minus 1940, the years the marker prints for the move from the Gervais St. headquarters and the year that location became home.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "1881",
        title: "Organized, then a headquarters here",
        partLabel: "the headquarters",
        art: art(
          "m40203-hall.jpg",
          "Illustration of plain office buildings on a street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Organized in 1881",
            x: 32,
            y: 48,
            fact: "Formally organized in 1881 as the S.C. Association of Teachers, the S.C. Education Association established its first permanent headquarters here at 1218 Senate St. in 1928.",
          },
          {
            id: "gervais",
            label: "Gervais St., 1940",
            x: 74,
            y: 42,
            fact: "A temporary move to Drayton Hall on the Univ. of S.C. campus facilitated the renovation of a new headquarters building nearby, at 1510 Gervais St. The Gervais St. location remained home to the Association from 1940 until they moved again in 1968.",
          },
        ],
      },
      {
        kind: "scene",
        id: "meeting",
        kicker: "1967",
        title: "The work, then a merger",
        partLabel: "the association",
        art: art(
          "m40203-meeting.jpg",
          "Illustration of an empty meeting room. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "purpose",
            label: "Schools and members",
            x: 32,
            y: 52,
            fact: "The S.C. Education Association remained dedicated to improving the quality of public schools and student curricula, as well as improving salaries and benefits, professional development, and working conditions for its members.",
          },
          {
            id: "merged",
            label: "Integrated in 1967",
            x: 74,
            y: 40,
            fact: "SCEA membership was limited to white teachers until 1967, when SCEA integrated and merged with the Palmetto Education Association. The headquarters was moved to Zimalcrest Dr. in 1968.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1940 to 1968",
        title: "Years at the Gervais St. home",
        partLabel: "28 years",
        value: 28,
        unit: "years",
        meant:
          "What this meant: 1968 comes 28 years after 1940. The marker says the Gervais St. location remained home to the Association from 1940 until they moved again in 1968.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40203-hall.jpg",
          "Illustration of plain office buildings on a street. Not a historical photograph.",
        ),
        nowArt: art(
          "m40203-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of plain office buildings on a street, for the first permanent headquarters the marker says was established here at 1218 Senate St. in 1928. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1881",
            label: "It is organized as the S.C. Association of Teachers.",
            why: "The marker says it was formally organized in 1881 as the S.C. Association of Teachers.",
          },
          {
            id: "senate",
            year: "1928",
            label: "The first permanent headquarters opens on Senate St.",
            why: "The marker says the S.C. Education Association established its first permanent headquarters here at 1218 Senate St. in 1928.",
          },
          {
            id: "gervais",
            year: "1940",
            label: "The Gervais St. location becomes home.",
            why: "The marker says a temporary move to Drayton Hall on the Univ. of S.C. campus facilitated the renovation of a new headquarters at 1510 Gervais St. That location remained home from 1940 until they moved again in 1968.",
          },
          {
            id: "moved",
            year: "1968",
            label: "The headquarters moves to Zimalcrest Dr.",
            why: "The marker says the headquarters was moved to Zimalcrest Dr. in 1968. SCEA membership was limited to white teachers until 1967, when SCEA integrated and merged with the Palmetto Education Association.",
          },
        ],
        ["gervais", "organized", "moved", "senate"],
      ),
      takeaway([
        "Formally organized in 1881 as the S.C. Association of Teachers, the S.C. Education Association established its first permanent headquarters here at 1218 Senate St. in 1928.",
        "A temporary move to Drayton Hall on the Univ. of S.C. campus facilitated the renovation of a new headquarters building nearby, at 1510 Gervais St. The Gervais St. location remained home to the Association from 1940 until they moved again in 1968.",
        "The S.C. Education Association remained dedicated to improving the quality of public schools and student curricula, as well as improving salaries and benefits, professional development, and working conditions for its members. SCEA membership was limited to white teachers until 1967, when SCEA integrated and merged with the Palmetto Education Association. The headquarters was moved to Zimalcrest Dr. in 1968.",
      ]),
    ],
  ),
];
