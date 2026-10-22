import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Darlington sites. Facts are from that marker only.
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

export const darlingtonLessonsH: MarkerLesson[] = [
  lesson(
    "16-31",
    "Coffee sets and cotton-blossom plate",
    "Eastern Carolina Silver Company timeline",
    [cited("16-31", "Eastern Carolina Silver Company", "front")],
    [
      {
        kind: "scene",
        id: "works",
        kicker: "March 5, 1907",
        title: "Chartered to make silverware",
        partLabel: "the company",
        art: art(
          "m1631-silver.jpg",
          "Illustration of coffee and tea sets on a workbench. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "charter",
            label: "March 5, 1907",
            x: 32,
            y: 48,
            fact: "This silver co., chartered March 5, 1907, manufactured and sold coffee and tea sets, bread trays, bowls, candelabra, and cups.",
          },
          {
            id: "officers",
            label: "The officers",
            x: 74,
            y: 40,
            fact: "J. L. Coker served as pres., W. F. Smith as vice pres., and C. W. Coker as sec. & treas.",
          },
        ],
      },
      {
        kind: "scene",
        id: "motif",
        kicker: "1908",
        title: "Quadruple plate, then dissolution",
        partLabel: "the plate",
        art: art(
          "m1631-plate.jpg",
          "Illustration of silver plate with cotton blossoms. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "plate",
            label: "By 1908",
            x: 32,
            y: 52,
            fact: "By 1908 the company had begun to manufacture classically-designed quadruple plate, some ornamented with cotton blossom motifs.",
          },
          {
            id: "dissolved",
            label: "Nov. 25, 1909",
            x: 74,
            y: 42,
            fact: "The enterprise, located 3 blocks NE, dissolved Nov. 25, 1909.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "3 blocks NE",
        title: "Blocks northeast of the marker",
        partLabel: "3 blocks",
        value: 3,
        unit: "blocks",
        meant:
          "What this meant: the marker says the enterprise, located 3 blocks NE, dissolved Nov. 25, 1909.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1631-silver.jpg",
          "Illustration of coffee and tea sets on a workbench. Not a historical photograph.",
        ),
        nowArt: art(
          "m1631-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of coffee and tea sets, for the ware the marker says the company manufactured and sold. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "charter",
            year: "March 5, 1907",
            label: "The silver company is chartered.",
            why: "The marker says this silver co. was chartered March 5, 1907, and manufactured and sold coffee and tea sets, bread trays, bowls, candelabra, and cups.",
          },
          {
            id: "plate",
            year: "By 1908",
            label: "It begins making quadruple plate.",
            why: "The marker says that by 1908 the company had begun to manufacture classically-designed quadruple plate, some ornamented with cotton blossom motifs.",
          },
          {
            id: "dissolved",
            year: "Nov. 25, 1909",
            label: "The enterprise dissolves.",
            why: "The marker says the enterprise, located 3 blocks NE, dissolved Nov. 25, 1909.",
          },
        ],
        ["plate", "dissolved", "charter"],
      ),
      takeaway([
        "This silver co., chartered March 5, 1907, manufactured and sold coffee and tea sets, bread trays, bowls, candelabra, and cups.",
        "By 1908 the company had begun to manufacture classically-designed quadruple plate, some ornamented with cotton blossom motifs.",
        "The enterprise, located 3 blocks NE, dissolved Nov. 25, 1909.",
      ]),
    ],
  ),
  lesson(
    "16-32",
    "A boarding school that became a college",
    "Welsh Neck High School timeline",
    [cited("16-32", "Welsh Neck High School", "front and back")],
    [
      {
        kind: "scene",
        id: "boarding",
        kicker: "Sept. 17, 1894",
        title: "Opened as a boarding school",
        partLabel: "the school",
        art: art(
          "m1632-school.jpg",
          "Illustration of a boarding-school building and lawn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "Sept. 17, 1894",
            x: 32,
            y: 46,
            fact: "The Welsh Neck Baptist Association initiated this institution as a coeducational boarding school. It opened Sept. 17, 1894, through the generosity of Maj. James Lide Coker, Civil War veteran, local industrialist, and the school's first chairman of the board of trustees.",
          },
          {
            id: "peak",
            label: "267 in 1902",
            x: 74,
            y: 40,
            fact: "Enrollment peaked at 267 in 1902.",
          },
        ],
      },
      {
        kind: "scene",
        id: "campus",
        kicker: "Sept. 30, 1908",
        title: "Coker College for Women",
        partLabel: "the college",
        art: art(
          "m1632-college.jpg",
          "Illustration of a columned college building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "college",
            label: "Sept. 30, 1908",
            x: 32,
            y: 50,
            fact: "When the 1907 public high school act reduced the need for this school, it became a four-year college for women. The trustees of Welsh Neck High School converted their institution into a non-sectarian Baptist college. It opened Sept. 30, 1908, as \"Coker College for Women, founded by James L. Coker.\"",
          },
          {
            id: "later",
            label: "1944, 1969, 1988",
            x: 74,
            y: 42,
            fact: "Baptist control ended in 1944, and in 1969, the college became coeducational. The Governor's school for Science and Mathematics opened on the campus in 1988. Throughout its history, Coker has emphasized liberal arts.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1902",
        title: "Enrollment at its peak",
        partLabel: "267 enrolled",
        value: 267,
        unit: "students",
        meant: "What this meant: the marker says enrollment peaked at 267 in 1902.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1632-school.jpg",
          "Illustration of a boarding-school building and lawn. Not a historical photograph.",
        ),
        nowArt: art(
          "m1632-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a boarding-school building, for the coeducational boarding school the marker says opened Sept. 17, 1894. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "school",
            year: "Sept. 17, 1894",
            label: "The coeducational boarding school opens.",
            why: "The marker says the Welsh Neck Baptist Association initiated this institution as a coeducational boarding school, and that it opened Sept. 17, 1894.",
          },
          {
            id: "peak",
            year: "1902",
            label: "Enrollment peaks at 267.",
            why: "The marker says enrollment peaked at 267 in 1902.",
          },
          {
            id: "college",
            year: "Sept. 30, 1908",
            label: "It opens as Coker College for Women.",
            why: "The marker says it opened Sept. 30, 1908, as \"Coker College for Women, founded by James L. Coker.\"",
          },
          {
            id: "coed",
            year: "1969",
            label: "The college becomes coeducational.",
            why: "The marker says that in 1969, the college became coeducational.",
          },
        ],
        ["college", "school", "coed", "peak"],
      ),
      takeaway([
        "The Welsh Neck Baptist Association initiated this institution as a coeducational boarding school. It opened Sept. 17, 1894, through the generosity of Maj. James Lide Coker, Civil War veteran, local industrialist, and the school's first chairman of the board of trustees.",
        "Enrollment peaked at 267 in 1902. When the 1907 public high school act reduced the need for this school, it became a four-year college for women.",
        "It opened Sept. 30, 1908, as \"Coker College for Women, founded by James L. Coker.\" Baptist control ended in 1944, and in 1969, the college became coeducational.",
      ]),
    ],
  ),
  lesson(
    "16-33",
    "Attorney, farmer, and Methodist layman",
    "Laurie M. Lawson timeline",
    [
      cited("16-33", "Laurie M. Lawson", "front"),
      span(
        '"70 years" is 1943 minus 1873, the years the marker prints in "(1873-1943)."',
      ),
    ],
    [
      {
        kind: "scene",
        id: "birthplace",
        kicker: "1873",
        title: "Birthplace of L. M. Lawson",
        partLabel: "the birthplace",
        art: art(
          "m1633-farm.jpg",
          "Illustration of a farmhouse and open fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "1873-1943",
            x: 32,
            y: 50,
            fact: "Birthplace of L. M. Lawson (1873-1943).",
          },
          {
            id: "roles",
            label: "Attorney, farmer, layman",
            x: 74,
            y: 42,
            fact: "L. M. Lawson (1873-1943), attorney, farmer, Methodist layman.",
          },
        ],
      },
      {
        kind: "scene",
        id: "offices",
        kicker: "1905-10",
        title: "House, Senate, then the society",
        partLabel: "his offices",
        art: art(
          "m1633-fields.jpg",
          "Illustration of cultivated fields and a barn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "house",
            label: "SC House and Senate",
            x: 32,
            y: 48,
            fact: "Served in SC House 1905-10, SC Senate 1911-14.",
          },
          {
            id: "society",
            label: "1938-39",
            x: 74,
            y: 58,
            fact: "Pres. Darlington Agricultural Soc. 1938-39.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1873-1943",
        title: "Years the marker prints beside his name",
        partLabel: "70 years",
        value: 70,
        unit: "years",
        meant:
          "What this meant: 1943 comes 70 years after 1873. Those are the years the marker prints for L. M. Lawson (1873-1943).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1633-farm.jpg",
          "Illustration of a farmhouse and open fields. Not a historical photograph.",
        ),
        nowArt: art(
          "m1633-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a farmhouse and fields, for the birthplace the marker names for L. M. Lawson. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1873",
            label: "This is the birthplace of L. M. Lawson.",
            why: "The marker says this is the birthplace of L. M. Lawson (1873-1943).",
          },
          {
            id: "house",
            year: "1905-10",
            label: "He serves in the SC House.",
            why: "The marker says he served in the SC House 1905-10.",
          },
          {
            id: "senate",
            year: "1911-14",
            label: "He serves in the SC Senate.",
            why: "The marker says he served in the SC Senate 1911-14.",
          },
          {
            id: "society",
            year: "1938-39",
            label: "He is president of the Darlington Agricultural Soc.",
            why: "The marker says he was Pres. Darlington Agricultural Soc. 1938-39.",
          },
        ],
        ["senate", "born", "society", "house"],
      ),
      takeaway([
        "Birthplace of L. M. Lawson (1873-1943), attorney, farmer, Methodist layman.",
        "Served in SC House 1905-10, SC Senate 1911-14.",
        "Pres. Darlington Agricultural Soc. 1938-39.",
      ]),
    ],
  ),
  lesson(
    "16-34",
    "The first church in town",
    "First Baptist Church timeline",
    [
      cited("16-34", "First Baptist Church", "front and back"),
      span(
        '"114 years" is 1964 minus 1850, the years the marker prints for the present sanctuary and the beginning of Hartsville Baptist.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "yard",
        kicker: "July 1849",
        title: "A Sunday school, then a church",
        partLabel: "the beginning",
        art: art(
          "m1634-meeting.jpg",
          "Illustration of a small wooden meeting house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "school",
            label: "July 1849",
            x: 32,
            y: 52,
            fact: "A union Sunday school met on the site as early as July 1849.",
          },
          {
            id: "begun",
            label: "16 November 1850",
            x: 74,
            y: 40,
            fact: "Members of New Providence and Gum Branch Baptist churches under John L. Hart's leadership began Hartsville Baptist, the first church in town, 16 November 1850.",
          },
        ],
      },
      {
        kind: "scene",
        id: "later",
        kicker: "1851",
        title: "A sanctuary, then a new name",
        partLabel: "the congregation",
        art: art(
          "m1634-sanctuary.jpg",
          "Illustration of a brick church sanctuary. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sanctuary",
            label: "1851 and 1853",
            x: 32,
            y: 46,
            fact: "John L. Hart donated land on which the congregation built a sanctuary in 1851. Rev. J. W. Burn served as first pastor for many years. The church joined Welsh Neck Association in 1851, and the SC General Assembly chartered the congregation in 1853.",
          },
          {
            id: "name",
            label: "By 1906",
            x: 74,
            y: 58,
            fact: "By 1906 name changed to First Baptist Church. Dr. E. V. Baldy, pastor in 1909, served as first president of Coker College. New congregations established by this church are: Fourth Street 1906; Eastside (now Emmanuel) 1926; Lakeview 1944; South Hartsville 1951; West Hartsville 1952; and North Hartsville 1959. The congregation completed the present sanctuary 1964.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1850-1964",
        title: "Years from the beginning to the present sanctuary",
        partLabel: "114 years",
        value: 114,
        unit: "years",
        meant:
          "What this meant: 1964 comes 114 years after 1850. That is the stretch from the year Hartsville Baptist began to the year the congregation completed the present sanctuary.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1634-meeting.jpg",
          "Illustration of a small wooden meeting house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1634-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small wooden meeting house, for the church the marker says began 16 November 1850. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "school",
            year: "July 1849",
            label: "A union Sunday school meets on the site.",
            why: "The marker says a union Sunday school met on the site as early as July 1849.",
          },
          {
            id: "begun",
            year: "16 November 1850",
            label: "Hartsville Baptist begins.",
            why: "The marker says members of New Providence and Gum Branch Baptist churches under John L. Hart's leadership began Hartsville Baptist, the first church in town, 16 November 1850.",
          },
          {
            id: "name",
            year: "By 1906",
            label: "The name changes to First Baptist Church.",
            why: "The marker says that by 1906 the name changed to First Baptist Church.",
          },
          {
            id: "present",
            year: "1964",
            label: "The congregation completes the present sanctuary.",
            why: "The marker says the congregation completed the present sanctuary 1964.",
          },
        ],
        ["name", "school", "present", "begun"],
      ),
      takeaway([
        "Members of New Providence and Gum Branch Baptist churches under John L. Hart's leadership began Hartsville Baptist, the first church in town, 16 November 1850.",
        "A union Sunday school met on the site as early as July 1849. John L. Hart donated land on which the congregation built a sanctuary in 1851.",
        "By 1906 name changed to First Baptist Church. The congregation completed the present sanctuary 1964.",
      ]),
    ],
  ),
];
