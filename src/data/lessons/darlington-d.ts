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

export const darlingtonLessonsD: MarkerLesson[] = [
  lesson(
    "16-15",
    "Withdrawn from the Darlington Baptist Church",
    "Macedonia Church timeline",
    [
      cited("16-15", "Macedonia Church", "front and back"),
      span(
        '"13 years" is 1935 minus 1922, the years the marker prints for the building occupied and the site acquired.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "home",
        kicker: "Feb. 11, 1866",
        title: "Constituted apart from Darlington Baptist",
        partLabel: "the constitution",
        art: art(
          "m1615-home.jpg",
          "Illustration of a small wooden cottage. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "meetings",
            label: "Laura Brown",
            x: 32,
            y: 52,
            fact: "Tradition says first meetings of this Baptist Church were held in the home of Laura Brown.",
          },
          {
            id: "constituted",
            label: "Feb. 11, 1866",
            x: 74,
            y: 40,
            fact: "This Baptist Church was constituted when a group of black members led by Rev. Isaac Brockenton withdrew from the Darlington Baptist Church on Feb. 11, 1866.",
          },
        ],
      },
      {
        kind: "scene",
        id: "corner",
        kicker: "1866-1874",
        title: "A corner church, then this site",
        partLabel: "the houses of worship",
        art: art(
          "m1615-corner.jpg",
          "Illustration of a wooden church on a street corner. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "corner",
            label: "S. Main and Hampton",
            x: 32,
            y: 46,
            fact: "A house of worship was constructed on the N.E. corner of present S. Main and Hampton streets on land purchased during 1866-1874.",
          },
          {
            id: "occupied",
            label: "Feb. 3, 1935",
            x: 74,
            y: 62,
            fact: "The present site was acquired in 1922 and the building occupied Feb. 3, 1935.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1922-1935",
        title: "Years from the new site to the occupied building",
        partLabel: "13 years",
        value: 13,
        unit: "years",
        meant:
          "What this meant: 1935 comes 13 years after 1922. That is the stretch from the year the present site was acquired to the year the building was occupied.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1615-corner.jpg",
          "Illustration of a wooden church on a street corner. Not a historical photograph.",
        ),
        nowArt: art(
          "m1615-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church on a street corner, for the house of worship the marker places on the N.E. corner of present S. Main and Hampton streets. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "constituted",
            year: "Feb. 11, 1866",
            label: "The church is constituted.",
            why: "The marker says this Baptist Church was constituted when a group of black members led by Rev. Isaac Brockenton withdrew from the Darlington Baptist Church on Feb. 11, 1866.",
          },
          {
            id: "pastor",
            year: "1908",
            label: "The first pastor dies.",
            why: "The marker says Brockenton became the first pastor and served until his death in 1908. The first trustees were Evans Bell, Peter Dargan, Lazarus Ervin, Antrum McIver, Samuel McIver, Samuel Orr, and Samuel Parnell.",
          },
          {
            id: "site",
            year: "1922",
            label: "The present site is acquired.",
            why: "The marker says the present site was acquired in 1922.",
          },
          {
            id: "occupied",
            year: "Feb. 3, 1935",
            label: "The building is occupied.",
            why: "The marker says the building was occupied Feb. 3, 1935.",
          },
        ],
        ["occupied", "constituted", "site", "pastor"],
      ),
      takeaway([
        "Tradition says first meetings of this Baptist Church were held in the home of Laura Brown.",
        "This Baptist Church was constituted when a group of black members led by Rev. Isaac Brockenton withdrew from the Darlington Baptist Church on Feb. 11, 1866.",
        "The present site was acquired in 1922 and the building occupied Feb. 3, 1935.",
      ]),
    ],
  ),
  lesson(
    "16-16",
    "Founded by freedmen in 1866",
    "St. James Church timeline",
    [
      cited("16-16", "St. James Church", "front and back"),
      span(
        '"77 years" is 1960 minus 1883, the years the marker prints for the present building and the second house of worship.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1866",
        title: "Founded, with a school in the first building",
        partLabel: "the first building",
        art: art(
          "m1616-school.jpg",
          "Illustration of a plain frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1866",
            x: 32,
            y: 48,
            fact: "In 1866, this United Methodist Church was founded by freedmen with aid from the Methodist Episcopal Church Missionary Society.",
          },
          {
            id: "school",
            label: "April 1866",
            x: 74,
            y: 38,
            fact: "The first minister was Rev. Liverus Ackerman, and the first building, also used as a school for freedmen, was completed by April 1866.",
          },
        ],
      },
      {
        kind: "scene",
        id: "bell",
        kicker: "Pearl Street",
        title: "The first name, and a bell",
        partLabel: "the name and the bell",
        art: art(
          "m1616-bell.jpg",
          "Illustration of a church bell in a wooden belfry. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "Pearl Street",
            x: 32,
            y: 44,
            fact: "This United Methodist Church was originally named Pearl Street Methodist Episcopal Church. The first trustees were Henry Brown, Abner Black, Wesley Dargan, Zeddidiah Dargan, January Felder, Randolph Hart and Rev. B. Frank Whittemore.",
          },
          {
            id: "bell",
            label: "The church bell",
            x: 74,
            y: 60,
            fact: "Tradition says Federal occupation troops supplied the church bell, which they had taken from nearby St. John's Academy.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "About 1883-1960",
        title: "Years from the second house to the present building",
        partLabel: "77 years",
        value: 77,
        unit: "years",
        meant:
          "What this meant: 1960 comes 77 years after 1883. That is the stretch from the year the second house of worship dates from, about 1883, to the year the present building was completed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1616-school.jpg",
          "Illustration of a plain frame church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1616-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plain frame church, for the first building the marker says was also used as a school for freedmen. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a church lawn. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "April 1866",
            label: "The church is founded and the first building is completed.",
            why: "The marker says that in 1866 this United Methodist Church was founded by freedmen with aid from the Methodist Episcopal Church Missionary Society, and that the first building, also used as a school for freedmen, was completed by April 1866.",
          },
          {
            id: "second",
            year: "About 1883",
            label: "The second house of worship dates from about 1883.",
            why: "The marker says the second house of worship dates from about 1883.",
          },
          {
            id: "present",
            year: "1960",
            label: "The present building is completed.",
            why: "The marker says the present building was completed in 1960.",
          },
        ],
        ["present", "founded", "second"],
      ),
      takeaway([
        "In 1866, this United Methodist Church was founded by freedmen with aid from the Methodist Episcopal Church Missionary Society.",
        "The first minister was Rev. Liverus Ackerman, and the first building, also used as a school for freedmen, was completed by April 1866.",
        "The second house of worship dates from about 1883; the present building was completed in 1960.",
      ]),
    ],
  ),
  lesson(
    "16-17",
    "From a 1770 branch meeting house",
    "Lower Fork of Lynches Creek Baptist Church timeline",
    [
      cited("16-17", "Lower Fork of Lynches Creek Baptist Church", "front and back"),
      span(
        '"19 years" is 1789 minus 1770, the years the marker prints for the constitution and the branch meeting house.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "creek",
        kicker: "1770",
        title: "A branch meeting house nearby",
        partLabel: "the meeting house",
        art: art(
          "m1617-creek.jpg",
          "Illustration of a meeting house beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "house",
            label: "1770",
            x: 32,
            y: 50,
            fact: "This church, which probably evolved from a branch meeting house built nearby in 1770 by First Lynches Creek Church, was constituted in 1789.",
          },
          {
            id: "minister",
            label: "1789",
            x: 74,
            y: 36,
            fact: "Joshua Palmer became minister in 1789, the same year the church was constituted. The church held early meetings at Lower Fork of Lynches Creek, Boggy Swamp and Witherinton's Mill.",
          },
        ],
      },
      {
        kind: "scene",
        id: "church",
        kicker: "By 1798",
        title: "Located here, then in the Welsh Neck Association",
        partLabel: "this site",
        art: art(
          "m1617-church.jpg",
          "Illustration of a rural church among pines. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "here",
            label: "By 1798",
            x: 32,
            y: 48,
            fact: "In 1797, David Kelly was deacon and Cornelius Keith was clerk of Lower Fork of Lynches Creek Church. By 1798, the church was located here.",
          },
          {
            id: "welsh",
            label: "1837",
            x: 74,
            y: 62,
            fact: "Originally in the Charleston Association and later the Moriah Association, the church joined the Welsh Neck Association in 1837.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1770-1789",
        title: "Years from the meeting house to the constitution",
        partLabel: "19 years",
        value: 19,
        unit: "years",
        meant:
          "What this meant: 1789 comes 19 years after 1770. That is the stretch from the year a branch meeting house was built nearby to the year this church was constituted.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1617-church.jpg",
          "Illustration of a rural church among pines. Not a historical photograph.",
        ),
        nowArt: art(
          "m1617-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a rural church among pines, for the site the marker says the church was located at by 1798. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker among pines. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "house",
            year: "1770",
            label: "A branch meeting house is built nearby.",
            why: "The marker says this church probably evolved from a branch meeting house built nearby in 1770 by First Lynches Creek Church.",
          },
          {
            id: "constituted",
            year: "1789",
            label: "The church is constituted.",
            why: "The marker says the church was constituted in 1789, and that Joshua Palmer became minister in the same year.",
          },
          {
            id: "gum",
            year: "1844",
            label: "The name is changed to Gum Branch.",
            why: "The marker says the name was changed to Gum Branch in 1844.",
          },
          {
            id: "sanctuary",
            year: "1955",
            label: "The present sanctuary is completed.",
            why: "The marker says the present sanctuary was completed in 1955.",
          },
        ],
        ["sanctuary", "house", "gum", "constituted"],
      ),
      takeaway([
        "This church, which probably evolved from a branch meeting house built nearby in 1770 by First Lynches Creek Church, was constituted in 1789; Joshua Palmer became minister in the same year.",
        "Originally in the Charleston Association and later the Moriah Association, the church joined the Welsh Neck Association in 1837.",
        "The name was changed to Gum Branch in 1844, and the present sanctuary was completed in 1955.",
      ]),
    ],
  ),
  lesson(
    "16-18",
    "County chairman and a candidate for Congress",
    "Edmund H. Deas timeline",
    [cited("16-18", "Edmund H. Deas", "front")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "The 1870s",
        title: "Chairman in Darlington County",
        partLabel: "the move",
        art: art(
          "m1618-house.jpg",
          "Illustration of a frame house behind a fence. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "moved",
            label: "The 1870s",
            x: 32,
            y: 46,
            fact: "After moving to Darlington County in the 1870s, Edmund H. Deas served as county chairman of the Republican Party for a number of years and was a delegate to four national conventions.",
          },
          {
            id: "residence",
            label: "1915",
            x: 74,
            y: 58,
            fact: "This house was his residence at his death in 1915.",
          },
        ],
      },
      {
        kind: "scene",
        id: "office",
        kicker: "1884 and 1890",
        title: "Candidate and deputy collector",
        partLabel: "Congress and the revenue post",
        art: art(
          "m1618-office.jpg",
          "Illustration of a plain brick office building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "congress",
            label: "1884 and 1890",
            x: 32,
            y: 42,
            fact: "A black candidate for Congress in 1884 and 1890.",
          },
          {
            id: "collector",
            label: "1889-94 and 1897-1901",
            x: 74,
            y: 64,
            fact: "Deas was Deputy Collector of Internal Revenue in S. C., 1889-94 and 1897-1901.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Four conventions",
        title: "Delegate to national conventions",
        partLabel: "four national conventions",
        value: 4,
        unit: "national conventions",
        meant:
          "What this meant: the marker says Edmund H. Deas was a delegate to four national conventions.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1618-house.jpg",
          "Illustration of a frame house behind a fence. Not a historical photograph.",
        ),
        nowArt: art(
          "m1618-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame house, for the residence the marker says was his at his death in 1915. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker in front of a house fence. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "moved",
            year: "The 1870s",
            label: "Deas moves to Darlington County.",
            why: "The marker says that after moving to Darlington County in the 1870s, Edmund H. Deas served as county chairman of the Republican Party for a number of years and was a delegate to four national conventions.",
          },
          {
            id: "congress1884",
            year: "1884",
            label: "Deas is a candidate for Congress.",
            why: "The marker says he was a black candidate for Congress in 1884 and 1890.",
          },
          {
            id: "congress1890",
            year: "1890",
            label: "Deas is a candidate for Congress again.",
            why: "The marker says he was a black candidate for Congress in 1884 and 1890.",
          },
          {
            id: "death",
            year: "1915",
            label: "This house is his residence at his death.",
            why: "The marker says this house was his residence at his death in 1915.",
          },
        ],
        ["death", "congress1884", "moved", "congress1890"],
      ),
      takeaway([
        "After moving to Darlington County in the 1870s, Edmund H. Deas served as county chairman of the Republican Party for a number of years and was a delegate to four national conventions.",
        "A black candidate for Congress in 1884 and 1890, Deas was Deputy Collector of Internal Revenue in S. C., 1889-94 and 1897-1901.",
        "This house was his residence at his death in 1915.",
      ]),
    ],
  ),
];
