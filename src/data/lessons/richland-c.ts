import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Columbia, third Richland batch. Facts are from that marker only.
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

export const richlandLessonsC: MarkerLesson[] = [
  lesson(
    "40-00",
    "A cavalry regiment and a school on post",
    "102nd Cavalry and Hood Street timeline",
    [cited("40-00", "102nd Cavalry / Hood Street Elementary School", "front and back")],
    [
      {
        kind: "scene",
        id: "troop",
        kicker: "1890",
        title: "From the Essex Troop to the 102nd",
        partLabel: "the cavalry",
        art: art(
          "m4000-troop.jpg",
          "Illustration of cavalry horses and riders and a training camp. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "essex",
            label: "Essex Troop",
            x: 32,
            y: 52,
            fact: "Formed in 1890 as the Essex Troop of Lt. Cavalry, it was mustered into the N.J. National Guard in 1893. After World War I service, it became the 102nd Cav. in 1921.",
          },
          {
            id: "camp",
            label: "Trained here",
            x: 74,
            y: 48,
            fact: "Reorganized in 1940 as 102nd Cav. (Horse-Mechanized), it was mobilized for active duty in World War II and trained here in 1941-42. It saw more than 300 days of combat in France, North Africa, Italy, the Ardennes, the Rhineland, and Central Europe.",
          },
        ],
      },
      {
        kind: "scene",
        id: "school",
        kicker: "Grades 1-6",
        title: "Nine teachers and 245 students",
        partLabel: "the school",
        art: art(
          "m4000-school.jpg",
          "Illustration of a small school, with teachers and children. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "open",
            label: "245 students",
            x: 32,
            y: 52,
            fact: "This school opened under Principal Thomas Silvester with nine civilian teachers and 245 students in Grades 1-6. A newspaper article described it as \"operated without regard to race, creed or color.\"",
          },
          {
            id: "name",
            label: "Hood Street",
            x: 74,
            y: 48,
            fact: "Fort Jackson Elementary School, later renamed Hood Street Elementary School after additional schools opened on post, has served the families of Fort Jackson servicemen and servicewomen for more than 45 years.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "When it opened",
        title: "Students in Grades 1-6",
        partLabel: "245 students",
        value: 245,
        unit: "students",
        meant: "What this meant: the marker says the school opened under Principal Thomas Silvester with nine civilian teachers and 245 students in Grades 1-6.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4000-school.jpg",
          "Illustration of the school. Not a historical photograph.",
        ),
        nowArt: art(
          "m4000-today.jpg",
          "Illustration of a marker by a military-post street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small school, for the school the marker says opened under Principal Thomas Silvester. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a military-post street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "form",
            year: "1890",
            label: "The Essex Troop of Lt. Cavalry is formed.",
            why: "The marker dates the forming to 1890.",
          },
          {
            id: "guard",
            year: "1893",
            label: "The troop is mustered into the N.J. National Guard.",
            why: "The marker dates that muster to 1893.",
          },
          {
            id: "cav",
            year: "1921",
            label: "After World War I service, it becomes the 102nd Cav.",
            why: "The marker dates the new name to 1921, after World War I service.",
          },
          {
            id: "train",
            year: "1941-42",
            label: "The regiment trains here.",
            why: "The marker says it was reorganized in 1940 as 102nd Cav. (Horse-Mechanized), mobilized for World War II, and trained here in 1941-42.",
          },
        ],
        ["train", "form", "cav", "guard"],
      ),
      takeaway([
        "Formed in 1890 as the Essex Troop of Lt. Cavalry, it was mustered into the N.J. National Guard in 1893 and became the 102nd Cav. in 1921 after World War I service.",
        "Reorganized in 1940 as 102nd Cav. (Horse-Mechanized), it trained here in 1941-42 and saw more than 300 days of combat in France, North Africa, Italy, the Ardennes, the Rhineland, and Central Europe.",
        "The school opened under Principal Thomas Silvester with nine civilian teachers and 245 students in Grades 1-6. A newspaper article described it as operated without regard to race, creed or color. Later renamed Hood Street Elementary School, it has served the families of Fort Jackson servicemen and servicewomen for more than 45 years.",
      ]),
    ],
  ),
  lesson(
    "40-01",
    "A parish church and its churchyard",
    "Trinity Episcopal Church timeline",
    [cited("40-01", "Trinity Episcopal Church", "front")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1812",
        title: "An original church, then the present one",
        partLabel: "the church",
        art: art(
          "m4001-church.jpg",
          "Illustration of an early church and an 1840s church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "early",
            label: "1814",
            x: 32,
            y: 52,
            fact: "The parish was organized in 1812. The original church was dedicated in 1814.",
          },
          {
            id: "present",
            label: "1846",
            x: 74,
            y: 48,
            fact: "The present church was dedicated in 1846.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "The churchyard",
        title: "Governors, a poet, and soldiers",
        partLabel: "the churchyard",
        art: art(
          "m4001-yard.jpg",
          "Illustration of a churchyard of plain stones. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "names",
            label: "Buried here",
            x: 32,
            y: 52,
            fact: "In the churchyard lie buried the three Wade Hamptons; Thomas Cooper, educator; Henry Timrod, poet; W. C. Preston, U. S. senator.",
          },
          {
            id: "governors",
            label: "Five governors",
            x: 74,
            y: 48,
            fact: "Five governors of S. C. are buried here: three Mannings, Hampton, and Thompson. Soldiers of the Revolutionary and later American wars are buried here too, including Colonel Peter Horry, Generals Ellison Capers, John S. Preston, and States Rights Gist.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The churchyard",
        title: "Governors of S. C. buried here",
        partLabel: "5 governors",
        value: 5,
        unit: "governors",
        meant: "What this meant: the marker says five governors of S. C. lie in the churchyard: three Mannings, Hampton, and Thompson.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4001-church.jpg",
          "Illustration of the churches. Not a historical photograph.",
        ),
        nowArt: art(
          "m4001-today.jpg",
          "Illustration of a church across from a domed state house, with a marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the churches the marker dates: the original dedicated in 1814 and the present church dedicated in 1846. Not a historical photograph.",
        nowCaption:
          "Illustration of a church across from a domed state house, with a marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "parish",
            year: "1812",
            label: "The parish is organized.",
            why: "The marker dates the parish to 1812.",
          },
          {
            id: "original",
            year: "1814",
            label: "The original church is dedicated.",
            why: "The marker dates that dedication to 1814.",
          },
          {
            id: "present",
            year: "1846",
            label: "The present church is dedicated.",
            why: "The marker dates the present church to 1846.",
          },
        ],
        ["present", "parish", "original"],
      ),
      takeaway([
        "The parish was organized in 1812. The original church was dedicated in 1814, and the present church was dedicated in 1846.",
        "In the churchyard lie the three Wade Hamptons; Thomas Cooper, educator; Henry Timrod, poet; and W. C. Preston, U. S. senator.",
        "Five governors of S. C. are buried here: three Mannings, Hampton, and Thompson. Soldiers of the Revolutionary and later American wars are buried here too, including Colonel Peter Horry and Generals Ellison Capers, John S. Preston, and States Rights Gist.",
      ]),
    ],
  ),
  lesson(
    "40-05",
    "A training school started in a chapel",
    "Winthrop Training School timeline",
    [
      cited("40-05", "Original Site of Winthrop College", "front"),
      span(
        "\"50 years\" is 1936 minus 1886, the year the marker says the building was moved to Rock Hill and the year Winthrop Training School was started here.",
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1886",
        title: "Started in a small brick chapel",
        partLabel: "the training school",
        art: art(
          "m4005-school.jpg",
          "Illustration of a small brick chapel used as a training school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "chapel",
            label: "The chapel",
            x: 32,
            y: 52,
            fact: "Winthrop Training School was started here in a small brick building which had been the chapel of Columbia Theological Seminary.",
          },
          {
            id: "johnson",
            label: "D. B. Johnson",
            x: 74,
            y: 48,
            fact: "In 1886, chiefly through the efforts of D. B. Johnson, first superintendent of Columbia public schools, Winthrop Training School, later Winthrop College, was started here.",
          },
        ],
      },
      {
        kind: "scene",
        id: "move",
        kicker: "1936",
        title: "The building leaves for Rock Hill",
        partLabel: "the move",
        art: art(
          "m4005-move.jpg",
          "Illustration of a small brick building being moved. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "building",
            label: "This building",
            x: 32,
            y: 52,
            fact: "In 1936 this building was moved.",
          },
          {
            id: "rockhill",
            label: "Rock Hill",
            x: 74,
            y: 48,
            fact: "It was moved to the campus of Winthrop College, Rock Hill, S. C.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1886 to 1936",
        title: "Years from the start to the move",
        partLabel: "50 years",
        value: 50,
        unit: "years",
        meant: "What this meant: the marker says Winthrop Training School was started here in 1886, and in 1936 this building was moved to Rock Hill. That span is 50 years.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4005-school.jpg",
          "Illustration of the chapel used as a school. Not a historical photograph.",
        ),
        nowArt: art(
          "m4005-today.jpg",
          "Illustration of a marker by a carriage house in a park. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the small brick building the marker says had been the chapel of Columbia Theological Seminary. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a carriage house in a park. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "chapel",
            year: "Before 1886",
            label: "The small brick building is the chapel of Columbia Theological Seminary.",
            why: "The marker says the school was started in a small brick building which had been the chapel, so that use comes first.",
          },
          {
            id: "start",
            year: "1886",
            label: "Winthrop Training School is started here.",
            why: "The marker dates the start to 1886, chiefly through the efforts of D. B. Johnson.",
          },
          {
            id: "move",
            year: "1936",
            label: "The building is moved to Winthrop College in Rock Hill.",
            why: "The marker dates that move to 1936.",
          },
        ],
        ["move", "chapel", "start"],
      ),
      takeaway([
        "In 1886, chiefly through the efforts of D. B. Johnson, first superintendent of Columbia public schools, Winthrop Training School was started here.",
        "It began in a small brick building which had been the chapel of Columbia Theological Seminary. The school was later Winthrop College.",
        "In 1936 this building was moved to the campus of Winthrop College, Rock Hill, S. C.",
      ]),
    ],
  ),
  lesson(
    "40-06",
    "A seminary in a house by Robert Mills",
    "Columbia Theological Seminary timeline",
    [
      cited("40-06", "Former Site of Columbia Theological Seminary", "front"),
      span(
        "\"94 years\" is 1925 minus 1831, the year the marker says the seminary moved to Decatur, Georgia, and the year it was located here.",
      ),
    ],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "1823",
        title: "A house for Ainsley Hall",
        partLabel: "the central building",
        art: art(
          "m4006-hall.jpg",
          "Illustration of an 1820s columned house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "mills",
            label: "Robert Mills",
            x: 32,
            y: 52,
            fact: "The central building, erected in 1823, was designed by Robert Mills.",
          },
          {
            id: "hall",
            label: "Ainsley Hall",
            x: 74,
            y: 48,
            fact: "It was designed as a home for Ainsley Hall (1783-1823), a Columbia merchant.",
          },
        ],
      },
      {
        kind: "scene",
        id: "seminary",
        kicker: "1828",
        title: "Founded, then located here",
        partLabel: "the seminary",
        art: art(
          "m4006-seminary.jpg",
          "Illustration of that house and a quiet seminary yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "synod",
            label: "1828 and 1831",
            x: 32,
            y: 52,
            fact: "Founded in 1828 by the Presbyterian Synod of South Carolina and Georgia. Located here in 1831. Moved to Decatur, Georgia, in 1925.",
          },
          {
            id: "faculty",
            label: "Faculty",
            x: 74,
            y: 48,
            fact: "Woodrow Wilson's father and uncle were among faculty members.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1831 to 1925",
        title: "Years the seminary was located here",
        partLabel: "94 years",
        value: 94,
        unit: "years",
        meant: "What this meant: the marker says the seminary was located here in 1831 and moved to Decatur, Georgia, in 1925. That span is 94 years.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4006-hall.jpg",
          "Illustration of the central building. Not a historical photograph.",
        ),
        nowArt: art(
          "m4006-today.jpg",
          "Illustration of a marker in front of a columned house. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the central building the marker says was erected in 1823 and designed by Robert Mills. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker in front of a columned house. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "house",
            year: "1823",
            label: "The central building is erected as a home for Ainsley Hall.",
            why: "The marker says the central building was erected in 1823 and designed by Robert Mills as a home for Ainsley Hall.",
          },
          {
            id: "found",
            year: "1828",
            label: "The seminary is founded by the Presbyterian Synod of South Carolina and Georgia.",
            why: "The marker dates the founding to 1828.",
          },
          {
            id: "here",
            year: "1831",
            label: "The seminary is located here.",
            why: "The marker dates the location here to 1831, after the 1828 founding.",
          },
          {
            id: "decatur",
            year: "1925",
            label: "The seminary moves to Decatur, Georgia.",
            why: "The marker dates that move to 1925.",
          },
        ],
        ["decatur", "house", "here", "found"],
      ),
      takeaway([
        "Founded in 1828 by the Presbyterian Synod of South Carolina and Georgia, the seminary was located here in 1831.",
        "It moved to Decatur, Georgia, in 1925. Woodrow Wilson's father and uncle were among faculty members.",
        "The central building, erected in 1823, was designed by Robert Mills as a home for Ainsley Hall (1783-1823), a Columbia merchant.",
      ]),
    ],
  ),
];
