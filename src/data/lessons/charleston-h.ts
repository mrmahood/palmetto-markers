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

export const charlestonLessonsH: MarkerLesson[] = [
  lesson(
    "10-36",
    "The first church on the Stono",
    "St. Paul's Stono timeline",
    [
      cited("10-36", "St. Paul's Stono", "front and back"),
      span(
        '"28 years" is 1736 minus 1708, the years the marker prints for the new parish church and the first parish church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1706",
        title: "Created by the Church Act",
        partLabel: "the parish",
        art: art(
          "m1036-church.jpg",
          "Illustration of a parish church on a river bluff. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "act",
            label: "Church Act",
            x: 32,
            y: 46,
            fact: "St. Paul's Parish, one of the ten original parishes of colonial S.C., was created by the Church Act of 1706.",
          },
          {
            id: "built",
            label: "1708",
            x: 74,
            y: 58,
            fact: "The first parish church was built in 1708 on a bluff overlooking the Stono River.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1715",
        title: "Ruins and the Seabrook graves",
        partLabel: "the churchyard",
        art: art(
          "m1036-yard.jpg",
          "Illustration of foundation ruins and a few graves. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "yamasee",
            label: "Yamasee War",
            x: 32,
            y: 44,
            fact: "The parsonage and outbuildings were destroyed during the Yamasee War of 1715. Foundation ruins and a few graves are all that remain of the first St. Paul's, Stono.",
          },
          {
            id: "seabrook",
            label: "Robert Seabrook",
            x: 74,
            y: 60,
            fact: "Robert Seabrook (1652-1710), buried here, served as high sheriff of Colleton County in 1698; as a captain of militia in 1706; and as a member of the Commons House of Assembly 1706-09, serving as Speaker in 1706. His wife Sarah (d. 1715) and their son Benjamin (d. 1717) are also buried here.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1708-1736",
        title: "Years between the two churches",
        partLabel: "28 years",
        value: 28,
        unit: "years",
        meant:
          "What this meant: 1736 comes 28 years after 1708. That is the stretch from the year the first parish church was built to the year a new parish church for St. Paul's was built 8 mi. NW.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1036-church.jpg",
          "Illustration of a parish church on a river bluff. Not a historical photograph.",
        ),
        nowArt: art(
          "m1036-today.jpg",
          "Illustration of a marker beside churchyard ruins. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a parish church on a bluff, for the first church the marker says was built in 1708. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside foundation ruins and graves. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "parish",
            year: "1706",
            label: "St. Paul's Parish is created by the Church Act.",
            why: "The marker says it was one of the ten original parishes of colonial S.C., created by the Church Act of 1706.",
          },
          {
            id: "first",
            year: "1708",
            label: "The first parish church is built on a bluff.",
            why: "The marker says it was built in 1708 on a bluff overlooking the Stono River.",
          },
          {
            id: "war",
            year: "1715",
            label: "The parsonage and outbuildings are destroyed.",
            why: "The marker says they were destroyed during the Yamasee War of 1715.",
          },
          {
            id: "newchurch",
            year: "1736",
            label: "A new parish church is built 8 mi. NW.",
            why: "The marker says that after St. John's Colleton Parish was created in 1734, a new parish church for St. Paul's was built 8 mi. NW in 1736.",
          },
        ],
        ["newchurch", "first", "parish", "war"],
      ),
      takeaway([
        "St. Paul's Parish, one of the ten original parishes of colonial S.C., was created by the Church Act of 1706. The first parish church was built in 1708 on a bluff overlooking the Stono River.",
        "The parsonage and outbuildings were destroyed during the Yamasee War of 1715. After St. John's Colleton Parish was created in 1734, a new parish church for St. Paul's was built 8 mi. NW in 1736.",
        "Foundation ruins and a few graves are all that remain of the first St. Paul's, Stono. Robert Seabrook (1652-1710), buried here, served as high sheriff of Colleton County in 1698; as a captain of militia in 1706; and as a member of the Commons House of Assembly 1706-09, serving as Speaker in 1706. His wife Sarah (d. 1715) and their son Benjamin (d. 1717) are also buried here.",
      ]),
    ],
  ),
  lesson(
    "10-37",
    "Located here from 1868 to 1953",
    "Laing School timeline",
    [
      cited("10-37", "Laing School", "front and back"),
      span(
        '"85 years" is 1953 minus 1868, the years the marker prints for Laing School located here.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1866",
        title: "Founded by Cornelia Hancock",
        partLabel: "the founding",
        art: art(
          "m1037-school.jpg",
          "Illustration of a wooden schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1866",
            x: 32,
            y: 46,
            fact: "Laing School, located here from 1868 to 1953, was founded in 1866 by Cornelia Hancock, a Quaker who had served as a nurse with the Union Army during the Civil War.",
          },
          {
            id: "named",
            label: "Henry M. Laing",
            x: 74,
            y: 58,
            fact: "First housed in Mount Pleasant Presbyterian Church, Laing Industrial School was named for Henry M. Laing of the Friends' Association for the Aid and Elevation of Freedmen. Early instruction at Laing, with its motto, “Try To Excel,” combined academics with instruction in industrial, farming, and homemaking skills.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1886",
        title: "The earthquake, then later schools",
        partLabel: "the schoolyard",
        art: art(
          "m1037-yard.jpg",
          "Illustration of an empty schoolyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "quake",
            label: "1886",
            x: 32,
            y: 44,
            fact: "The 1868 school, destroyed by the Charleston earthquake of 1886, was replaced by a school which stood here until 1954.",
          },
          {
            id: "later",
            label: "1945 to 1974",
            x: 74,
            y: 60,
            fact: "A new Laing Elementary opened at King & Greenwich Streets in 1945; the high school remained here until a new Laing High opened on U.S. Hwy. 17 North in 1953. Laing High closed in 1970 with the desegregation of county schools. That building later housed Laing Middle School when it opened in 1974.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1868-1953",
        title: "Years the school was located here",
        partLabel: "85 years",
        value: 85,
        unit: "years",
        meant:
          "What this meant: 1953 comes 85 years after 1868. That is the stretch the marker prints for Laing School located here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1037-school.jpg",
          "Illustration of a wooden schoolhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m1037-today.jpg",
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden schoolhouse, for Laing School, which the marker says was located here from 1868 to 1953. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1866",
            label: "Cornelia Hancock founds Laing School.",
            why: "The marker says she was a Quaker who had served as a nurse with the Union Army during the Civil War. The school was located here from 1868 to 1953.",
          },
          {
            id: "quake",
            year: "1886",
            label: "The Charleston earthquake destroys the 1868 school.",
            why: "The marker says the 1868 school was destroyed by the Charleston earthquake of 1886 and replaced by a school which stood here until 1954.",
          },
          {
            id: "high",
            year: "1953",
            label: "A new Laing High opens on U.S. Hwy. 17 North.",
            why: "The marker says the high school remained here until then. A new Laing Elementary had opened at King & Greenwich Streets in 1945.",
          },
          {
            id: "closed",
            year: "1970",
            label: "Laing High closes.",
            why: "The marker says Laing High closed in 1970 with the desegregation of county schools. That building later housed Laing Middle School when it opened in 1974.",
          },
        ],
        ["high", "founded", "closed", "quake"],
      ),
      takeaway([
        "Laing School, located here from 1868 to 1953, was founded in 1866 by Cornelia Hancock, a Quaker who had served as a nurse with the Union Army during the Civil War. First housed in Mount Pleasant Presbyterian Church, Laing Industrial School was named for Henry M. Laing of the Friends' Association for the Aid and Elevation of Freedmen.",
        "The 1868 school, destroyed by the Charleston earthquake of 1886, was replaced by a school which stood here until 1954. Early instruction at Laing, with its motto, “Try To Excel,” combined academics with instruction in industrial, farming, and homemaking skills.",
        "A new Laing Elementary opened at King & Greenwich Streets in 1945; the high school remained here until a new Laing High opened on U.S. Hwy. 17 North in 1953. Laing High closed in 1970 with the desegregation of county schools. That building later housed Laing Middle School when it opened in 1974.",
      ]),
    ],
  ),
  lesson(
    "10-38",
    "At this site since 1890",
    "Friendship A.M.E. timeline",
    [
      cited("10-38", "Friendship A.M.E. Church", "front and back"),
      span(
        '"5 years" is 1895 minus 1890, the years the marker prints for the third sanctuary and the new church under Rev. F.E. Rivers.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1877",
        title: "From Hibben St. to this site",
        partLabel: "the first sanctuary",
        art: art(
          "m1038-church.jpg",
          "Illustration of a wooden frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "hibben",
            label: "1877",
            x: 32,
            y: 46,
            fact: "The first sanctuary serving this congregation was located on Hibben St. and built on a lot leased from the town of Mount Pleasant in 1877.",
          },
          {
            id: "rivers",
            label: "1890",
            x: 74,
            y: 58,
            fact: "This church, founded during Reconstruction, has been at this site since 1890. After moving here and building a new church under the pastorate of Rev. F.E. Rivers in 1890, the congregation grew so quickly that it built its third sanctuary, a large frame church, by 1895.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1911",
        title: "A storm, then a brick veneer",
        partLabel: "the churchyard",
        art: art(
          "m1038-yard.jpg",
          "Illustration of a churchyard beside a frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "storm",
            label: "1911",
            x: 32,
            y: 44,
            fact: "A 1911 storm during the pastorate of Rev. Frank Woodbury nearly destroyed the sanctuary, which was essentially rebuilt.",
          },
          {
            id: "brick",
            label: "1961",
            x: 74,
            y: 60,
            fact: "Later renovations, including the application of a brick veneer in 1961 during the pastorate of Rev. J.A. Sabb, Jr., gave the church its present appearance. Friendship A.M.E. Church also hosted the graduation exercises of nearby Laing School for many years until the school closed in 1953.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1890-1895",
        title: "Years from the new church to the third sanctuary",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1895 comes 5 years after 1890. That is the stretch from the new church under the pastorate of Rev. F.E. Rivers to the third sanctuary, a large frame church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1038-church.jpg",
          "Illustration of a wooden frame church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1038-today.jpg",
          "Illustration of a marker by a brick church. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden frame church, for the new church the marker says was built here in 1890 under the pastorate of Rev. F.E. Rivers. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a brick church, for the present appearance the marker gives after the brick veneer of 1961. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "lease",
            year: "1877",
            label: "The first sanctuary is built on Hibben St.",
            why: "The marker says it was built on a lot leased from the town of Mount Pleasant in 1877.",
          },
          {
            id: "site",
            year: "1890",
            label: "The congregation builds a new church at this site.",
            why: "The marker says the church, founded during Reconstruction, has been at this site since 1890, under the pastorate of Rev. F.E. Rivers.",
          },
          {
            id: "frame",
            year: "1895",
            label: "A third sanctuary, a large frame church, is built.",
            why: "The marker says the congregation grew so quickly that it built that sanctuary by 1895.",
          },
          {
            id: "veneer",
            year: "1961",
            label: "A brick veneer gives the church its present appearance.",
            why: "The marker dates the brick veneer to 1961, during the pastorate of Rev. J.A. Sabb, Jr. A 1911 storm during the pastorate of Rev. Frank Woodbury had nearly destroyed the sanctuary, which was essentially rebuilt.",
          },
        ],
        ["frame", "lease", "veneer", "site"],
      ),
      takeaway([
        "This church, founded during Reconstruction, has been at this site since 1890. The first sanctuary serving this congregation was located on Hibben St. and built on a lot leased from the town of Mount Pleasant in 1877.",
        "After moving here and building a new church under the pastorate of Rev. F.E. Rivers in 1890, the congregation grew so quickly that it built its third sanctuary, a large frame church, by 1895.",
        "A 1911 storm during the pastorate of Rev. Frank Woodbury nearly destroyed the sanctuary, which was essentially rebuilt. Later renovations, including the application of a brick veneer in 1961 during the pastorate of Rev. J.A. Sabb, Jr., gave the church its present appearance. Friendship A.M.E. Church also hosted the graduation exercises of nearby Laing School for many years until the school closed in 1953.",
      ]),
    ],
  ),
  lesson(
    "10-39",
    "Built to defend Mount Pleasant",
    "Confederate Lines timeline",
    [
      cited("10-39", "Confederate Lines", "front"),
      span(
        '"4 years" is 1865 minus 1861, the years the marker prints for the Federal occupation and the fortifications.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "works",
        kicker: "1861",
        title: "Earthworks to defend the town",
        partLabel: "the earthworks",
        art: art(
          "m1039-works.jpg",
          "Illustration of earthen fortifications. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1861",
            x: 32,
            y: 46,
            fact: "The earthworks nearby are remains of the 1861 fortifications built to defend Mount Pleasant.",
          },
          {
            id: "extent",
            label: "2.5 miles",
            x: 74,
            y: 58,
            fact: "They extended east 2.5 miles from Butler's Creek at Boone Hall Plantation to Fort Palmetto on Hamlin Sound.",
          },
        ],
      },
      {
        kind: "scene",
        id: "line",
        kicker: "1865",
        title: "Batteries, then the occupation",
        partLabel: "the line",
        art: art(
          "m1039-line.jpg",
          "Illustration of a long line of earthworks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "batteries",
            label: "The batteries",
            x: 32,
            y: 44,
            fact: "Supporting this line were Battery Gary and those at Hobcaw Point, Hog Island, Hibben Street, and Venning's and Kinloch's Landings.",
          },
          {
            id: "occupied",
            label: "18 February 1865",
            x: 74,
            y: 60,
            fact: "Federal troops occupied the town 18 February 1865.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1861-1865",
        title: "Years from the fortifications to the occupation",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1865 comes 4 years after 1861. That is the stretch from the year the fortifications were built to the year Federal troops occupied the town.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1039-works.jpg",
          "Illustration of earthen fortifications. Not a historical photograph.",
        ),
        nowArt: art(
          "m1039-today.jpg",
          "Illustration of a marker beside grassy earthworks. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of earthen fortifications, for the 1861 earthworks the marker says were built to defend Mount Pleasant. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside grassy earthworks. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "fort",
            year: "1861",
            label: "Fortifications are built to defend Mount Pleasant.",
            why: "The marker says the earthworks nearby are remains of those 1861 fortifications. They extended east 2.5 miles from Butler's Creek at Boone Hall Plantation to Fort Palmetto on Hamlin Sound.",
          },
          {
            id: "occupy",
            year: "18 February 1865",
            label: "Federal troops occupy the town.",
            why: "The marker dates that occupation to 18 February 1865.",
          },
        ],
        ["occupy", "fort"],
      ),
      takeaway([
        "The earthworks nearby are remains of the 1861 fortifications built to defend Mount Pleasant.",
        "They extended east 2.5 miles from Butler's Creek at Boone Hall Plantation to Fort Palmetto on Hamlin Sound. Supporting this line were Battery Gary and those at Hobcaw Point, Hog Island, Hibben Street, and Venning's and Kinloch's Landings.",
        "Federal troops occupied the town 18 February 1865.",
      ]),
    ],
  ),
];
