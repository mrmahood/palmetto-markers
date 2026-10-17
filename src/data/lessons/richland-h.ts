import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Richland markers 40-25, 40-29, 40-33, and 40-34. Facts are from that marker only.
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

export const richlandLessonsH: MarkerLesson[] = [
  lesson(
    "40-25",
    "A general born on this site",
    "Maxcy Gregg timeline",
    [
      cited("40-25", "Birthplace of General Maxcy Gregg", "front"),
      span("\"2 days\" is printed on the marker: he died two days after being wounded on Dec. 13, 1862. It is not a calendar date."),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "Aug. 1, 1815",
        title: "A house on this site",
        partLabel: "the house",
        art: art("m4025-house.jpg", "Illustration of a house on a town lot. Not a historical photograph."),
        hotspots: [
          {
            id: "born",
            label: "Aug. 1, 1815",
            x: 32,
            y: 54,
            fact: "Maxcy Gregg, Confederate general and leader in Southern rights movement, was born Aug. 1, 1815 in a house on this site.",
          },
          {
            id: "committee",
            label: "Dec. 1860",
            x: 74,
            y: 42,
            fact: "Member of committee which framed the Ordinance of Secession, Dec. 1860.",
          },
        ],
      },
      {
        kind: "scene",
        id: "camp",
        kicker: "1861",
        title: "Colonel, then brigadier general",
        partLabel: "his service",
        art: art("m4025-later.jpg", "Illustration of a quiet military camp, figures seen from behind. Not a historical photograph."),
        hotspots: [
          {
            id: "ranks",
            label: "1861",
            x: 32,
            y: 48,
            fact: "Colonel 1st Regiment South Carolina Volunteers; Brigadier General in 1861.",
          },
          {
            id: "wound",
            label: "Dec. 13, 1862",
            x: 74,
            y: 58,
            fact: "Mortally wounded at Fredericksburg Dec. 13, 1862; died two days later.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Dec. 13, 1862",
        title: "Two days later",
        partLabel: "2 days",
        value: 2,
        unit: "days",
        meant: "What this meant: the marker says he died two days after being wounded on Dec. 13, 1862.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4025-house.jpg", "Illustration of the house on a town lot. Not a historical photograph."),
        nowArt: art("m4025-today.jpg", "Illustration of a marker on a street. Not a photograph of the site today."),
        thenCaption: "Illustration of a house on a town lot, for the house the marker says stood on this site. Not a historical photograph.",
        nowCaption: "Illustration of a marker on a street. Not a photograph of the site today.",
      },
      order(
        [
          { id: "birth", year: "Aug. 1, 1815", label: "Maxcy Gregg is born in a house on this site.", why: "The marker dates his birth to Aug. 1, 1815, in a house on this site." },
          { id: "secession", year: "Dec. 1860", label: "He is a member of the committee which framed the Ordinance of Secession.", why: "The marker dates that committee to Dec. 1860." },
          { id: "general", year: "1861", label: "He is brigadier general.", why: "The marker says Brigadier General in 1861. It also names him Colonel, 1st Regiment South Carolina Volunteers." },
          { id: "fredericksburg", year: "Dec. 13, 1862", label: "He is mortally wounded at Fredericksburg and dies two days later.", why: "The marker says he was mortally wounded at Fredericksburg Dec. 13, 1862, and died two days later." },
        ],
        ["fredericksburg", "birth", "general", "secession"],
      ),
      takeaway([
        "Maxcy Gregg, Confederate general and leader in Southern rights movement, was born Aug. 1, 1815 in a house on this site.",
        "Member of committee which framed the Ordinance of Secession, Dec. 1860, Colonel 1st Regiment South Carolina Volunteers; Brigadier General in 1861.",
        "Mortally wounded at Fredericksburg Dec. 13, 1862; died two days later.",
      ]),
    ],
  ),
  lesson(
    "40-29",
    "A court house and a mill",
    "Horrell Hill timeline",
    [
      cited("40-29", "Horrell Hill", "front"),
      span("\"4 years\" is 1798 minus 1794. The marker says the courthouse was built about 1794 and was abandoned when county courts were abolished in 1798."),
    ],
    [
      {
        kind: "scene",
        id: "court",
        kicker: "About 1794",
        title: "The Richland County Court House",
        partLabel: "the courthouse",
        art: art("m4029-court.jpg", "Illustration of a small early courthouse. Not a historical photograph."),
        hotspots: [
          {
            id: "built",
            label: "About 1794",
            x: 32,
            y: 48,
            fact: "300 yards north is the site of the Richland County Court House built about 1794.",
          },
          {
            id: "abandoned",
            label: "1798",
            x: 74,
            y: 58,
            fact: "It was abandoned when county courts were abolished in 1798.",
          },
        ],
      },
      {
        kind: "scene",
        id: "mill",
        kicker: "1781",
        title: "John Marshall's Mill",
        partLabel: "the mill",
        art: art("m4029-mill.jpg", "Illustration of a mill on a creek. Not a historical photograph."),
        hotspots: [
          {
            id: "corn",
            label: "1781",
            x: 32,
            y: 56,
            fact: "Corn was ground in 1781 for Sumter's army at John Marshall's Mill, on Cedar Creek, ¾ mi. east.",
          },
          {
            id: "creek",
            label: "Since the Revolution",
            x: 74,
            y: 44,
            fact: "There has been a mill on this creek since the Revolution.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "About 1794",
        title: "From about 1794 to 1798",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant: "What this meant: 1798 comes 4 years after 1794. The marker says the courthouse was built about 1794 and was abandoned when county courts were abolished in 1798.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4029-court.jpg", "Illustration of the small courthouse. Not a historical photograph."),
        nowArt: art("m4029-today.jpg", "Illustration of a marker at a rural crossroads. Not a photograph of the site today."),
        thenCaption: "Illustration of a small courthouse, for the Richland County Court House the marker says was built about 1794. Not a historical photograph.",
        nowCaption: "Illustration of a marker at a rural crossroads. Not a photograph of the site today.",
      },
      order(
        [
          { id: "ground", year: "1781", label: "Corn is ground for Sumter's army at John Marshall's Mill.", why: "The marker dates that grinding to 1781, at John Marshall's Mill on Cedar Creek, ¾ mi. east." },
          { id: "raised", year: "About 1794", label: "The Richland County Court House is built.", why: "The marker says the courthouse was built about 1794." },
          { id: "closed", year: "1798", label: "The courthouse is abandoned when county courts are abolished.", why: "The marker dates that abolition to 1798." },
        ],
        ["closed", "ground", "raised"],
      ),
      takeaway([
        "300 yards north is the site of the Richland County Court House built about 1794.",
        "It was abandoned when county courts were abolished in 1798.",
        "Corn was ground in 1781 for Sumter's army at John Marshall's Mill, on Cedar Creek, ¾ mi. east. There has been a mill on this creek since the Revolution.",
      ]),
    ],
  ),
  lesson(
    "40-33",
    "A famous girls' school",
    "Barhamville timeline",
    [
      cited("40-33", "South Carolina Female Collegiate Institute", "front"),
      span("\"37 years\" is 1865 minus 1828, the last and first years the marker gives for the school located at Barhamville."),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1828-65",
        title: "Located at Barhamville",
        partLabel: "the school",
        art: art("m4033-school.jpg", "Illustration of a girls' school building. Not a historical photograph."),
        hotspots: [
          {
            id: "place",
            label: "About ½ mi. west",
            x: 32,
            y: 46,
            fact: "At Barhamville, about ½ mi. west of this point, a famous girls' school was located.",
          },
          {
            id: "marks",
            label: "1828-65",
            x: 74,
            y: 58,
            fact: "Founded by Dr. Elias Marks (1790-1886), the school was located 1828-65.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "Students",
        title: "Among the students",
        partLabel: "the students",
        art: art("m4033-yard.jpg", "Illustration of a schoolyard, students seen from behind. Not a historical photograph."),
        hotspots: [
          {
            id: "two",
            label: "Anna Maria and Ann Pamela",
            x: 32,
            y: 52,
            fact: "Among the students were Anna Maria, daughter of John C. Calhoun; Ann Pamela Cuningham, founder of Mt. Vernon Ladies' Association.",
          },
          {
            id: "bulloch",
            label: "Martha Bulloch",
            x: 74,
            y: 44,
            fact: "Among the students was Martha Bulloch, mother of President Theodore Roosevelt.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1828-1865",
        title: "Years the school was located there",
        partLabel: "37 years",
        value: 37,
        unit: "years",
        meant: "What this meant: 1865 comes 37 years after 1828. That is the stretch the marker prints for the famous girls' school located at Barhamville.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4033-school.jpg", "Illustration of the girls' school. Not a historical photograph."),
        nowArt: art("m4033-today.jpg", "Illustration of a marker on a highway. Not a photograph of the site today."),
        thenCaption: "Illustration of a girls' school, for the school the marker says was located at Barhamville. Not a historical photograph.",
        nowCaption: "Illustration of a marker on a highway. Not a photograph of the site today.",
      },
      order(
        [
          { id: "open", year: "1828", label: "The girls' school is located at Barhamville.", why: "The marker says the school, founded by Dr. Elias Marks (1790-1886), was located 1828-65." },
          { id: "close", year: "1865", label: "The years the school was located there end.", why: "The marker prints that location as 1828-65." },
        ],
        ["close", "open"],
      ),
      takeaway([
        "At Barhamville, about ½ mi. west of this point, a famous girls' school, founded by Dr. Elias Marks (1790-1886), was located 1828-65.",
        "Among the students were Anna Maria, daughter of John C. Calhoun, and Ann Pamela Cuningham, founder of Mt. Vernon Ladies' Association.",
        "Among the students was Martha Bulloch, mother of President Theodore Roosevelt.",
      ]),
    ],
  ),
  lesson(
    "40-34",
    "A church and a convent",
    "St. Peter's timeline",
    [
      cited("40-34", "St. Peter's Church and Ursuline Convent", "front"),
      span("\"22 years\" is 1887 minus 1865, the last and first years the marker gives for VALLE CRUCIS."),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1824",
        title: "First church, then the present one",
        partLabel: "the church",
        art: art("m4034-church.jpg", "Illustration of a church and churchyard. Not a historical photograph."),
        hotspots: [
          {
            id: "first",
            label: "1824",
            x: 32,
            y: 46,
            fact: "First church built 1824; present church 1906.",
          },
          {
            id: "niernsee",
            label: "John R. Niernsee",
            x: 74,
            y: 62,
            fact: "In the churchyard is buried John R. Niernsee (1823-85), Major C. S. A.; architect of the State House.",
          },
        ],
      },
      {
        kind: "scene",
        id: "convent",
        kicker: "1858",
        title: "The Ursuline convent",
        partLabel: "the convent",
        art: art("m4034-convent.jpg", "Illustration of a convent building. Not a historical photograph."),
        hotspots: [
          {
            id: "moves",
            label: "VALLE CRUCIS",
            x: 32,
            y: 50,
            fact: "Ursuline convent located SE corner Main and Blanding streets 1858-65; VALLE CRUCIS 1865-87.",
          },
          {
            id: "here",
            label: "1889",
            x: 74,
            y: 42,
            fact: "Hampton-Preston House 1887-90; erected here 1889.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1865-1887",
        title: "Years at VALLE CRUCIS",
        partLabel: "22 years",
        value: 22,
        unit: "years",
        meant: "What this meant: 1887 comes 22 years after 1865. That is the stretch the marker prints for the Ursuline convent at VALLE CRUCIS.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4034-church.jpg", "Illustration of the church. Not a historical photograph."),
        nowArt: art("m4034-today.jpg", "Illustration of a church and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of a church, for the church the marker describes. Not a historical photograph.",
        nowCaption: "Illustration of a church and a marker. Not a photograph of the site today.",
      },
      order(
        [
          { id: "built", year: "1824", label: "The first church is built.", why: "The marker says the first church was built in 1824." },
          { id: "corner", year: "1858", label: "The Ursuline convent is at the SE corner of Main and Blanding streets.", why: "The marker dates that location 1858-65." },
          { id: "valle", year: "1865", label: "The convent is at VALLE CRUCIS.", why: "The marker dates VALLE CRUCIS 1865-87." },
          { id: "erected", year: "1889", label: "The convent is erected here.", why: "The marker says it was erected here in 1889. It also gives the Hampton-Preston House as 1887-90, and the present church as 1906." },
        ],
        ["erected", "built", "valle", "corner"],
      ),
      takeaway([
        "First church built 1824; present church 1906. In the churchyard is buried John R. Niernsee (1823-85), Major C. S. A.; architect of the State House.",
        "Ursuline convent located SE corner Main and Blanding streets 1858-65; VALLE CRUCIS 1865-87.",
        "Hampton-Preston House 1887-90; erected here 1889.",
      ]),
    ],
  ),
];
