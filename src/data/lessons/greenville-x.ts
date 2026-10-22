import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Greenville sites. Facts are from that marker only.
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

export const greenvilleLessonsX: MarkerLesson[] = [
  lesson(
    "23-102",
    "Specialized in agricultural training",
    "Chapman Grove School timeline",
    [
      cited("23-102", "Chapman Grove School", "front and back"),
      span("33 years is 1954 minus 1921 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1921",
        title: "Est. 1921 in lower Greenville County",
        partLabel: "the school",
        art: art(
          "m23102-school.jpg",
          "Illustration of two plain schoolhouses in a field. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1921",
            x: 32,
            y: 48,
            fact: "This was the site of Chapman Grove School, est. 1921 by J.H. “Prof.” Chapman and other Black residents of lower Greenville County. It served local African American students and others from neighboring counties.",
          },
          {
            id: "grades",
            label: "Grades 1-12",
            x: 74,
            y: 40,
            fact: "The school eventually enrolled grades 1-12 with classes held in separate elementary and high school buildings.",
          },
        ],
      },
      {
        kind: "scene",
        id: "campus",
        kicker: "1930-31",
        title: "A brick teacherage from the Rosenwald Fund",
        partLabel: "the campus",
        art: art(
          "m23102-farm.jpg",
          "Illustration of a brick cottage and farm outbuildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "training",
            label: "Agricultural training",
            x: 32,
            y: 56,
            fact: "Chapman Grove School specialized in agricultural training and provided farming and home demonstration programs for children as well as adults. The campus included a poultry house, cannery, and sweet potato house availabile to local farmers and funded by the Works Progress Administration (WPA).",
          },
          {
            id: "teacherage",
            label: "1930-31",
            x: 74,
            y: 38,
            fact: "In 1930-31 a brick teacherage was built with support from the Rosenwald Fund. Chapman Grove School closed in 1954 as part of the consolidation of county schools.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1921-1954",
        title: "Years from the school to its closing",
        partLabel: "33 years",
        value: 33,
        unit: "years",
        meant:
          "What this meant: 1954 comes 33 years after 1921. That is the stretch from the year Chapman Grove School was established to the year it closed as part of the consolidation of county schools.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m23102-school.jpg",
          "Illustration of two plain schoolhouses in a field. Not a historical photograph.",
        ),
        nowArt: art(
          "m23102-today.jpg",
          "Illustration of a blank roadside post among pines. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of two plain schoolhouses in a field, for the Chapman Grove School the marker says was established in 1921.",
        nowCaption: "Illustration of a blank roadside post among pines.",
      },
      order(
        [
          {
            id: "founded",
            year: "1921",
            label: "Chapman Grove School is established.",
            why: "The marker says this was the site of Chapman Grove School, est. 1921 by J.H. “Prof.” Chapman and other Black residents of lower Greenville County.",
          },
          {
            id: "teacherage",
            year: "1930-31",
            label: "A brick teacherage is built with Rosenwald support.",
            why: "The marker says that in 1930-31 a brick teacherage was built with support from the Rosenwald Fund.",
          },
          {
            id: "closed",
            year: "1954",
            label: "The school closes in a county consolidation.",
            why: "The marker says Chapman Grove School closed in 1954 as part of the consolidation of county schools.",
          },
        ],
        ["closed", "founded", "teacherage"],
      ),
      takeaway([
        "This was the site of Chapman Grove School, est. 1921 by J.H. “Prof.” Chapman and other Black residents of lower Greenville County.",
        "Chapman Grove School specialized in agricultural training and provided farming and home demonstration programs for children as well as adults.",
        "Chapman Grove School closed in 1954 as part of the consolidation of county schools.",
      ]),
    ],
  ),
  lesson(
    "23-103",
    "Founded in 1848 by sixteen members",
    "First Presbyterian Church Greenville timeline",
    [cited("23-103", "First Presbyterian Church Greenville", "front and back")],
    [
      {
        kind: "scene",
        id: "wooden",
        kicker: "1848",
        title: "Sixteen members, then a wooden sanctuary",
        partLabel: "the wooden sanctuary",
        art: art(
          "m23103-wooden.jpg",
          "Illustration of a plain wooden church on a street corner. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1848",
            x: 32,
            y: 46,
            fact: "This church was founded in 1848 by sixteen members.",
          },
          {
            id: "wooden",
            label: "1851",
            x: 74,
            y: 42,
            fact: "On this corner, a wooden sanctuary was built in 1851 on land donated by Vardry McBee.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gothic",
        kicker: "1883",
        title: "A larger, brick Gothic Revival building",
        partLabel: "the brick sanctuary",
        art: art(
          "m23103-gothic.jpg",
          "Illustration of a brick Gothic Revival church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "brick",
            label: "1883",
            x: 32,
            y: 40,
            fact: "In 1883 church growth prompted construction of a larger, brick Gothic Revival building. Later stuccoed, the 1883 sanctuary was largely demolished and rebuilt in 1986-87.",
          },
          {
            id: "wing",
            label: "1929",
            x: 74,
            y: 54,
            fact: "In 1924, Boy Scout Troop 11 was established by the church. By the early 1920s, the congregation exceeded 1,000. A large Sunday School wing was added in 1929.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1848",
        title: "Members at the founding",
        partLabel: "sixteen members",
        value: 16,
        unit: "members",
        meant:
          "What this meant: the marker says this church was founded in 1848 by sixteen members.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m23103-wooden.jpg",
          "Illustration of a plain wooden church on a street corner. Not a historical photograph.",
        ),
        nowArt: art(
          "m23103-today.jpg",
          "Illustration of a blank roadside post on a town corner. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a plain wooden church on a street corner, for the sanctuary the marker says was built in 1851 on land donated by Vardry McBee.",
        nowCaption: "Illustration of a blank roadside post on a town corner.",
      },
      order(
        [
          {
            id: "founded",
            year: "1848",
            label: "The church is founded by sixteen members.",
            why: "The marker says this church was founded in 1848 by sixteen members.",
          },
          {
            id: "wooden",
            year: "1851",
            label: "A wooden sanctuary is built on this corner.",
            why: "The marker says that on this corner, a wooden sanctuary was built in 1851 on land donated by Vardry McBee.",
          },
          {
            id: "brick",
            year: "1883",
            label: "A larger brick Gothic Revival building is constructed.",
            why: "The marker says that in 1883 church growth prompted construction of a larger, brick Gothic Revival building.",
          },
          {
            id: "wing",
            year: "1929",
            label: "A large Sunday School wing is added.",
            why: "The marker says a large Sunday School wing was added in 1929.",
          },
        ],
        ["brick", "founded", "wing", "wooden"],
      ),
      takeaway([
        "This church was founded in 1848 by sixteen members.",
        "In 1893 the church helped organize Chicora College, a women’s institution located in Greenville until 1915.",
        "By the early 1920s, the congregation exceeded 1,000. A large Sunday School wing was added in 1929.",
      ]),
    ],
  ),
  lesson(
    "23-104",
    "The only Black-run hospital in the city",
    "McClaren Medical Shelter timeline",
    [cited("23-104", "McClaren Medical Shelter", "front and back")],
    [
      {
        kind: "scene",
        id: "hospital",
        kicker: "1949",
        title: "A one-story brick building on a raised basement",
        partLabel: "the hospital",
        art: art(
          "m23104-hospital.jpg",
          "Illustration of a one-story brick building on a raised basement. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1949",
            x: 32,
            y: 50,
            fact: "McClaren Medical Shelter, a one-story brick building on a raised basement, was a privately run hospital for African Americans opened in 1949.",
          },
          {
            id: "doctor",
            label: "1931",
            x: 74,
            y: 38,
            fact: "It was established by Abbeville-native Dr. Edward E. McClaren (1902-1985), a 1931 graduate of the Howard University College of Medicine.",
          },
        ],
      },
      {
        kind: "scene",
        id: "grounds",
        kicker: "1954",
        title: "Succeeded the Working Benevolent Society Hospital",
        partLabel: "the later years",
        art: art(
          "m23104-grounds.jpg",
          "Illustration of a small brick hospital on a city lot. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "succeeded",
            label: "1920-1948",
            x: 32,
            y: 46,
            fact: "The Medical Shelter succeeded the Working Benevolent Society Hospital (1920-1948) as the only Black-run hospital in the city of Greenville. Medical Shelter patients received treatment from Black and white doctors and Black nurses.",
          },
          {
            id: "closed",
            label: "1954",
            x: 74,
            y: 58,
            fact: "The hospital closed in 1954, three years after Greenville General Hospital first allowed Black doctors to work in its segregated ward. In 2020 the hospital building was moved 50 ft. N to this site.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Over five years",
        title: "Patients admitted",
        partLabel: "1,072 patients",
        value: 1072,
        unit: "patients",
        meant:
          "What this meant: the marker says that over five years McClaren staff admitted 1,072 patients, delivered 211 babies, and conducted 194 and 582 minor operations.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m23104-hospital.jpg",
          "Illustration of a one-story brick building on a raised basement. Not a historical photograph.",
        ),
        nowArt: art(
          "m23104-today.jpg",
          "Illustration of a blank roadside post on a city street. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a one-story brick building on a raised basement, for the hospital the marker says opened in 1949.",
        nowCaption: "Illustration of a blank roadside post on a city street.",
      },
      order(
        [
          {
            id: "benevolent",
            year: "1920-1948",
            label: "The Working Benevolent Society Hospital is dated to these years.",
            why: "The marker says the Medical Shelter succeeded the Working Benevolent Society Hospital (1920-1948) as the only Black-run hospital in the city of Greenville.",
          },
          {
            id: "opened",
            year: "1949",
            label: "McClaren Medical Shelter opens.",
            why: "The marker says McClaren Medical Shelter was a privately run hospital for African Americans opened in 1949.",
          },
          {
            id: "closed",
            year: "1954",
            label: "The hospital closes.",
            why: "The marker says the hospital closed in 1954, three years after Greenville General Hospital first allowed Black doctors to work in its segregated ward.",
          },
          {
            id: "moved",
            year: "2020",
            label: "The building is moved 50 ft. north.",
            why: "The marker says that in 2020 the hospital building was moved 50 ft. N to this site.",
          },
        ],
        ["moved", "benevolent", "closed", "opened"],
      ),
      takeaway([
        "McClaren Medical Shelter, a one-story brick building on a raised basement, was a privately run hospital for African Americans opened in 1949.",
        "The Medical Shelter succeeded the Working Benevolent Society Hospital (1920-1948) as the only Black-run hospital in the city of Greenville.",
        "Over five years McClaren staff admitted 1,072 patients, delivered 211 babies, and conducted 194 and 582 minor operations.",
      ]),
    ],
  ),
  lesson(
    "23-105",
    "Named for Richland Creek",
    "Richland Cemetery timeline",
    [cited("23-105", "Richland Cemetery", "front and back")],
    [
      {
        kind: "scene",
        id: "creek",
        kicker: "1884",
        title: "A public burial ground for African Americans",
        partLabel: "the burial ground",
        art: art(
          "m23105-creek.jpg",
          "Illustration of a burial ground beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1884",
            x: 32,
            y: 48,
            fact: "Richland Cemetery was established in 1884 by the City of Greenville as a public burial ground for African Americans. It is one of S.C.’s oldest municipal graveyards for African Americans and was the first in Greenville.",
          },
          {
            id: "creek",
            label: "Richland Creek",
            x: 74,
            y: 58,
            fact: "It was named for Richland Creek, a Reedy River tributary that runs to the west. Black residents were previously buried in a segregated lot adjoining Springwood Cemetery.",
          },
        ],
      },
      {
        kind: "scene",
        id: "graves",
        kicker: "The ground",
        title: "More than 2,800 graves, most unmarked",
        partLabel: "the graves",
        art: art(
          "m23105-graves.jpg",
          "Illustration of modest blank grave markers with shells. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acres",
            label: "More than 2,800",
            x: 32,
            y: 52,
            fact: "Richland is roughly 6 acres in size and likely contains more than 2,800 graves, most of them unmarked. Markers are generally modest in scale and ornamentation, reflecting family members’ economic backgrounds.",
          },
          {
            id: "customs",
            label: "Before World War II",
            x: 74,
            y: 40,
            fact: "Some grave decorations show the influence of West African burial customs. Richland is the final resting place for many of Greenville’s most influential African American leaders. Burials mostly pre-date World War II and have become less frequent over time.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The cemetery",
        title: "Graves in the ground",
        partLabel: "2,800 graves",
        value: 2800,
        unit: "graves",
        meant:
          "What this meant: the marker says Richland is roughly 6 acres in size and likely contains more than 2,800 graves, most of them unmarked.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m23105-creek.jpg",
          "Illustration of a burial ground beside a creek. Not a historical photograph.",
        ),
        nowArt: art(
          "m23105-today.jpg",
          "Illustration of a blank roadside post beside trees. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a burial ground beside a creek, for the cemetery the marker says was established in 1884.",
        nowCaption: "Illustration of a blank roadside post beside trees.",
      },
      order(
        [
          {
            id: "established",
            year: "1884",
            label: "The City of Greenville establishes Richland Cemetery.",
            why: "The marker says Richland Cemetery was established in 1884 by the City of Greenville as a public burial ground for African Americans.",
          },
          {
            id: "burials",
            year: "World War II",
            label: "Most burials pre-date World War II.",
            why: "The marker says burials mostly pre-date World War II and have become less frequent over time. It prints no separate calendar year for that war.",
          },
          {
            id: "register",
            year: "2005",
            label: "Richland is listed in the National Register of Historic Places.",
            why: "The marker says Richland was listed in the National Register of Historic Places in 2005.",
          },
        ],
        ["register", "established", "burials"],
      ),
      takeaway([
        "Richland Cemetery was established in 1884 by the City of Greenville as a public burial ground for African Americans.",
        "It is one of S.C.’s oldest municipal graveyards for African Americans and was the first in Greenville.",
        "Richland was listed in the National Register of Historic Places in 2005.",
      ]),
    ],
  ),
];
