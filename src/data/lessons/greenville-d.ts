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

export const greenvilleLessonsD: MarkerLesson[] = [
  lesson(
    "23-18",
    "A pioneer in behavioral psychology",
    "John Broadus Watson timeline",
    [
      cited("23-18", "John Broadus Watson", "front"),
      span(
        '"80 years" is 1958 minus 1878, the years the marker prints for his death and his birth.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "birth",
        kicker: "1878",
        title: "Born about half a mile southwest",
        partLabel: "his birthplace",
        art: art(
          "m2318-birth.jpg",
          "Illustration of open fields and a distant farmhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "1878",
            x: 32,
            y: 54,
            fact: "Born in 1878 about ½ mile SW.",
          },
          {
            id: "pioneer",
            label: "Behavioral psychology",
            x: 74,
            y: 40,
            fact: "Watson was a pioneer in behavioral psychology.",
          },
        ],
      },
      {
        kind: "scene",
        id: "work",
        kicker: "For 12 years",
        title: "The laboratory at Johns Hopkins",
        partLabel: "the laboratory",
        art: art(
          "m2318-lab.jpg",
          "Illustration of a university laboratory building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "study",
            label: "Furman and Chicago",
            x: 32,
            y: 46,
            fact: "He graduated from Furman University, earned his Ph. D. from the University of Chicago, and served as president of the American Psychological Association.",
          },
          {
            id: "hopkins",
            label: "12 years",
            x: 74,
            y: 60,
            fact: "He was professor and director of the psychological laboratory at Johns Hopkins University for 12 years. Scientist, author, editor, teacher, he died in 1958.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1878-1958",
        title: "Years from his birth to his death",
        partLabel: "80 years",
        value: 80,
        unit: "years",
        meant:
          "What this meant: 1958 comes 80 years after 1878. That is the stretch from the year the marker says he was born to the year it says he died.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2318-birth.jpg",
          "Illustration of open fields and a distant farmhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m2318-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of open fields, for the place the marker says he was born in 1878 about ½ mile SW. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1878",
            label: "Watson is born about ½ mile southwest.",
            why: "The marker says he was born in 1878 about ½ mile SW, and that he was a pioneer in behavioral psychology.",
          },
          {
            id: "hopkins",
            year: "For 12 years",
            label: "He directs the psychological laboratory at Johns Hopkins.",
            why: "The marker says he graduated from Furman University, earned his Ph. D. from the University of Chicago, served as president of the American Psychological Association, and was professor and director of the psychological laboratory at Johns Hopkins University for 12 years.",
          },
          {
            id: "died",
            year: "1958",
            label: "Watson dies.",
            why: "The marker says he was a scientist, author, editor, and teacher, and that he died in 1958.",
          },
        ],
        ["died", "born", "hopkins"],
      ),
      takeaway([
        "Born in 1878 about ½ mile SW, Watson was a pioneer in behavioral psychology.",
        "He graduated from Furman University, earned his Ph. D. from the University of Chicago, served as president of the American Psychological Association, and professor and director of the psychological laboratory at Johns Hopkins University for 12 years.",
        "Scientist, author, editor, teacher, he died in 1958.",
      ]),
    ],
  ),
  lesson(
    "23-19",
    "Founded on land ceded in 1777",
    "Fairview Church timeline",
    [cited("23-19", "Fairview Church", "front and back")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1786",
        title: "Settlers found a Presbyterian church",
        partLabel: "the church",
        art: art(
          "m2319-church.jpg",
          "Illustration of a log meeting house in a clearing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "ceded",
            label: "1777",
            x: 32,
            y: 48,
            fact: "The church stands on land ceded by the Cherokee Indians in the treaty of Dewitt's Corner, 1777.",
          },
          {
            id: "founded",
            label: "1786",
            x: 74,
            y: 40,
            fact: "Settlers from the Nazareth area of Spartanburg County founded this Presbyterian church in 1786.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1858",
        title: "This building and the cemetery",
        partLabel: "the cemetery",
        art: art(
          "m2319-yard.jpg",
          "Illustration of a brick church beside blank gravestones. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "building",
            label: "1858 building",
            x: 32,
            y: 44,
            fact: "It is said that three buildings, two of logs and one of brick, preceded this 1858 building. The Sunday School annex was built in 1949 and the office-historical building in 1986.",
          },
          {
            id: "graves",
            label: "Oldest graves",
            x: 74,
            y: 62,
            fact: "The oldest graves in this cemetery are those of Margaret Alexander, d.1791, and Elizabeth Alexander, d. 1797. Soldiers of the American Revolution, War of 1812, Civil War, and World Wars I and II are buried here. A special marker denotes the area where blacks were interred.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Before 1858",
        title: "Buildings that preceded this one",
        partLabel: "three buildings",
        value: 3,
        unit: "buildings",
        meant:
          "What this meant: the marker says that three buildings, two of logs and one of brick, preceded this 1858 building.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2319-church.jpg",
          "Illustration of a log meeting house in a clearing. Not a historical photograph.",
        ),
        nowArt: art(
          "m2319-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a log meeting house, for the Presbyterian church the marker says settlers founded in 1786. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a churchyard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "ceded",
            year: "1777",
            label: "The land is ceded in the treaty of Dewitt's Corner.",
            why: "The marker says the church was founded on land ceded by the Cherokee Indians in the treaty of Dewitt's Corner, 1777.",
          },
          {
            id: "founded",
            year: "1786",
            label: "Settlers from the Nazareth area found the church.",
            why: "The marker says settlers from the Nazareth area of Spartanburg County founded this Presbyterian church in 1786.",
          },
          {
            id: "building",
            year: "1858",
            label: "This building follows three earlier ones.",
            why: "The marker says it is said that three buildings, two of logs and one of brick, preceded this 1858 building.",
          },
          {
            id: "annex",
            year: "1949",
            label: "The Sunday School annex is built.",
            why: "The marker says the Sunday School annex was built in 1949 and the office-historical building in 1986.",
          },
        ],
        ["building", "ceded", "annex", "founded"],
      ),
      takeaway([
        "Settlers from the Nazareth area of Spartanburg County founded this Presbyterian church in 1786 on land ceded by the Cherokee Indians in the treaty of Dewitt's Corner, 1777.",
        "It is said that three buildings, two of logs and one of brick, preceded this 1858 building. The Sunday School annex was built in 1949 and the office-historical building in 1986.",
        "The oldest graves in this cemetery are those of Margaret Alexander, d.1791, and Elizabeth Alexander, d. 1797. Soldiers of the American Revolution, War of 1812, Civil War, and World Wars I and II are buried here. A special marker denotes the area where blacks were interred.",
      ]),
    ],
  ),
  lesson(
    "23-20",
    "A subscription for a Baptist meetinghouse",
    "Site of First Baptist Church timeline",
    [cited("23-20", "Site of First Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "meeting",
        kicker: "1825",
        title: "A meetinghouse on a given lot",
        partLabel: "the meetinghouse",
        art: art(
          "m2320-meeting.jpg",
          "Illustration of a plain wooden meetinghouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "subscription",
            label: "1825",
            x: 32,
            y: 50,
            fact: "In 1825, Wm. Bullein Johnson opened a subscription for a Baptist meetinghouse, which was soon built here.",
          },
          {
            id: "lot",
            label: "The lot",
            x: 74,
            y: 42,
            fact: "The 120 foot-square lot, which extended well into present McBee Ave., was given by Vardry McBee.",
          },
        ],
      },
      {
        kind: "scene",
        id: "seminary",
        kicker: "1859",
        title: "Classrooms in the old church building",
        partLabel: "the seminary",
        art: art(
          "m2320-seminary.jpg",
          "Illustration of an old church used as classrooms. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "moved",
            label: "1857 and 1974",
            x: 32,
            y: 46,
            fact: "After its organization in 1831, First Baptist Church occupied the building here until it moved to West McBee Ave. in 1857. The church moved to its present location on Cleveland Street in 1974.",
          },
          {
            id: "faculty",
            label: "1859 to 1877",
            x: 74,
            y: 58,
            fact: "When Southern Baptist Theological Seminary was organized in 1859, the old Baptist church building once located here was divided into two classrooms and library for the school's use. First faculty was James Petigru Boyce, John A. Broadus, Basil Manly, Jr., and William Williams. Crawford H. Toy and William H. Whitsitt joined before the seminary moved to Louisville, Ky. in 1877.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The lot",
        title: "The foot-square lot given for the meetinghouse",
        partLabel: "120 foot-square",
        value: 120,
        unit: "foot-square",
        meant:
          "What this meant: the marker says the 120 foot-square lot, which extended well into present McBee Ave., was given by Vardry McBee.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2320-meeting.jpg",
          "Illustration of a plain wooden meetinghouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m2320-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a meetinghouse, for the Baptist meetinghouse the marker says was soon built here after a subscription opened in 1825. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "subscription",
            year: "1825",
            label: "Wm. Bullein Johnson opens a subscription for a meetinghouse.",
            why: "The marker says that in 1825, Wm. Bullein Johnson opened a subscription for a Baptist meetinghouse, which was soon built here. The 120 foot-square lot, which extended well into present McBee Ave., was given by Vardry McBee.",
          },
          {
            id: "organized",
            year: "1831",
            label: "First Baptist Church is organized and occupies the building.",
            why: "The marker says that after its organization in 1831, First Baptist Church occupied the building here.",
          },
          {
            id: "moved",
            year: "1857",
            label: "The church moves to West McBee Ave.",
            why: "The marker says the church occupied the building here until it moved to West McBee Ave. in 1857. It moved to its present location on Cleveland Street in 1974.",
          },
          {
            id: "seminary",
            year: "1859",
            label: "The seminary uses the old church building.",
            why: "The marker says that when Southern Baptist Theological Seminary was organized in 1859, the old Baptist church building once located here was divided into two classrooms and library. Crawford H. Toy and William H. Whitsitt joined before the seminary moved to Louisville, Ky. in 1877.",
          },
        ],
        ["seminary", "subscription", "moved", "organized"],
      ),
      takeaway([
        "In 1825, Wm. Bullein Johnson opened a subscription for a Baptist meetinghouse, which was soon built here. The 120 foot-square lot, which extended well into present McBee Ave., was given by Vardry McBee.",
        "After its organization in 1831, First Baptist Church occupied the building here until it moved to West McBee Ave. in 1857. The church moved to its present location on Cleveland Street in 1974.",
        "When Southern Baptist Theological Seminary was organized in 1859, the old Baptist church building once located here was divided into two classrooms and library for the school's use. First faculty was James Petigru Boyce, John A. Broadus, Basil Manly, Jr., and William Williams. Crawford H. Toy and William H. Whitsitt joined before the seminary moved to Louisville, Ky. in 1877.",
      ]),
    ],
  ),
  lesson(
    "23-21 [should be 23-22]",
    "A house near the old Indian boundary",
    "Tullyton timeline",
    [
      cited("23-21 [should be 23-22]", "Tullyton", "front"),
      span(
        '"31 years" is 1890 minus 1859, the years the marker prints for when C. B. Stewart lived here.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "About 1840",
        title: "Built by T. C. Bolling",
        partLabel: "the house",
        art: art(
          "m2322-house.jpg",
          "Illustration of a frame house beside a wooded boundary. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "About 1840",
            x: 32,
            y: 48,
            fact: "This house was built by T. C. Bolling c. 1840.",
          },
          {
            id: "boundary",
            label: "Old Indian boundary",
            x: 74,
            y: 42,
            fact: "The house was built near the old Indian boundary.",
          },
        ],
      },
      {
        kind: "scene",
        id: "lane",
        kicker: "1859-1890",
        title: "A Fairview minister lives here",
        partLabel: "the minister's years",
        art: art(
          "m2322-lane.jpg",
          "Illustration of a house lane and a distant church roof. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "minister",
            label: "C. B. Stewart",
            x: 32,
            y: 52,
            fact: "C. B. Stewart minister of nearby Fairview Presbyterian Church lived here.",
          },
          {
            id: "years",
            label: "1859-1890",
            x: 74,
            y: 60,
            fact: "He lived here 1859-1890.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1859-1890",
        title: "Years from the start to the end of his residence",
        partLabel: "31 years",
        value: 31,
        unit: "years",
        meant:
          "What this meant: 1890 comes 31 years after 1859. Those are the years the marker gives for when C. B. Stewart lived here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2322-house.jpg",
          "Illustration of a frame house beside a wooded boundary. Not a historical photograph.",
        ),
        nowArt: art(
          "m2322-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame house, for the house the marker says T. C. Bolling built c. 1840 near the old Indian boundary. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "c. 1840",
            label: "T. C. Bolling builds the house near the old Indian boundary.",
            why: "The marker says this house was built by T. C. Bolling c. 1840 near the old Indian boundary.",
          },
          {
            id: "arrived",
            year: "1859",
            label: "C. B. Stewart begins the years he lived here.",
            why: "The marker says C. B. Stewart minister of nearby Fairview Presbyterian Church lived here 1859-1890.",
          },
          {
            id: "end",
            year: "1890",
            label: "The years Stewart lived here end.",
            why: "The marker says C. B. Stewart lived here 1859-1890.",
          },
        ],
        ["end", "built", "arrived"],
      ),
      takeaway([
        "This house was built by T. C. Bolling c. 1840 near the old Indian boundary.",
        "C. B. Stewart minister of nearby Fairview Presbyterian Church",
        "lived here 1859-1890.",
      ]),
    ],
  ),
];
