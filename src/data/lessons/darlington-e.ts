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

export const darlingtonLessonsE: MarkerLesson[] = [
  lesson(
    "16-19",
    "Where the Camden road met the road to Darlington",
    "Wilson Crossroads timeline",
    [
      cited("16-19", "Wilson Crossroads", "front and back"),
      span(
        '"79 years" is 1869 minus 1790, the years the marker prints for the Reverend John Wilson.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "roads",
        kicker: "1837",
        title: "A grant at the crossing",
        partLabel: "the crossroads",
        art: art(
          "m1619-roads.jpg",
          "Illustration of two country roads crossing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grant",
            label: "1837",
            x: 32,
            y: 48,
            fact: "At this point the Camden-Mars Bluff road intersected the road to Darlington on property granted to the Reverend John Wilson (1790-1869) by the state of South Carolina in 1837.",
          },
          {
            id: "settled",
            label: "Settled here",
            x: 74,
            y: 40,
            fact: "Wilson, a North Carolinian, settled here, and after his death his grandson, Dr. Peter A. Wilson, lived on a portion of the land and practiced medicine.",
          },
        ],
      },
      {
        kind: "scene",
        id: "house",
        kicker: "1869",
        title: "A grandson practices medicine",
        partLabel: "the doctor",
        art: art(
          "m1619-house.jpg",
          "Illustration of a small house and a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "degree",
            label: "1869",
            x: 32,
            y: 46,
            fact: "Peter Wilson (1846-1913) was born in Darlington County and served in the Confederate Army. He graduated from Washington University School of Medicine in Maryland (1869) and upon the death of his grandfather, the Reverend John Wilson, settled near here and practiced medicine.",
          },
          {
            id: "buried",
            label: "About one mile north",
            x: 74,
            y: 58,
            fact: "Dr. Wilson is buried in High Hills Baptist Church Cemetery, about one mile north of here.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1790-1869",
        title: "Years printed for the Reverend John Wilson",
        partLabel: "79 years",
        value: 79,
        unit: "years",
        meant:
          "What this meant: 1869 comes 79 years after 1790. Those are the years the marker prints for the Reverend John Wilson.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1619-roads.jpg",
          "Illustration of two country roads crossing. Not a historical photograph.",
        ),
        nowArt: art(
          "m1619-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of two country roads crossing, for the place the marker says the Camden-Mars Bluff road intersected the road to Darlington. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "grant",
            year: "1837",
            label: "South Carolina grants the property at the crossing.",
            why: "The marker says the state of South Carolina granted the property to the Reverend John Wilson in 1837, where the Camden-Mars Bluff road intersected the road to Darlington. Wilson, a North Carolinian, settled here.",
          },
          {
            id: "born",
            year: "1846",
            label: "Peter Wilson is born in Darlington County.",
            why: "The marker prints Peter Wilson (1846-1913) and says he was born in Darlington County and served in the Confederate Army.",
          },
          {
            id: "degree",
            year: "1869",
            label: "He graduates and settles near here.",
            why: "The marker says he graduated from Washington University School of Medicine in Maryland (1869) and upon the death of his grandfather, the Reverend John Wilson, settled near here and practiced medicine.",
          },
          {
            id: "buried",
            year: "1913",
            label: "The years printed for Peter Wilson end.",
            why: "The marker prints 1913 as the later year for Peter Wilson and says Dr. Wilson is buried in High Hills Baptist Church Cemetery, about one mile north of here.",
          },
        ],
        ["degree", "buried", "grant", "born"],
      ),
      takeaway([
        "At this point the Camden-Mars Bluff road intersected the road to Darlington on property granted to the Reverend John Wilson (1790-1869) by the state of South Carolina in 1837.",
        "Wilson, a North Carolinian, settled here, and after his death his grandson, Dr. Peter A. Wilson, lived on a portion of the land and practiced medicine.",
        "Peter Wilson (1846-1913) was born in Darlington County and served in the Confederate Army. He graduated from Washington University School of Medicine in Maryland (1869) and upon the death of his grandfather, the Reverend John Wilson, settled near here and practiced medicine. Dr. Wilson is buried in High Hills Baptist Church Cemetery, about one mile north of here.",
      ]),
    ],
  ),
  lesson(
    "16-20",
    "Supervisor when the courthouse was built",
    "William Andrew Dowling timeline",
    [
      cited("16-20", "William Andrew Dowling", "front"),
      span(
        '"86 years" is 1859 minus 1773, the years the marker prints for the birth of William Dowling and for Robert Dowling having settled in the Parish of St. David.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "parish",
        kicker: "By 1773",
        title: "A Dowling in St. David's Parish",
        partLabel: "the parish",
        art: art(
          "m1620-parish.jpg",
          "Illustration of a farmhouse in open fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "robert",
            label: "By 1773",
            x: 32,
            y: 50,
            fact: "William Dowling was a descendant of Robert Dowling, who had settled in S.C. in the Parish of St. David by 1773.",
          },
          {
            id: "born",
            label: "1859",
            x: 74,
            y: 38,
            fact: "Born in Darlington County in 1859, William Dowling was a descendant of Robert Dowling.",
          },
        ],
      },
      {
        kind: "scene",
        id: "service",
        kicker: "1899-1900",
        title: "House member, then county supervisor",
        partLabel: "public service",
        art: art(
          "m1620-house.jpg",
          "Illustration of a columned public building and a house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "house",
            label: "1899-1900",
            x: 32,
            y: 44,
            fact: "William served as a member of the South Carolina House of Representatives, 1899-1900, and was Darlington County Supervisor when the 1902-1903 courthouse was built.",
          },
          {
            id: "home",
            label: "One-half mile east",
            x: 74,
            y: 56,
            fact: "Dowling's home stood about one-half mile east of here.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1773-1859",
        title: "Years from Robert Dowling to William's birth",
        partLabel: "86 years",
        value: 86,
        unit: "years",
        meant:
          "What this meant: 1859 comes 86 years after 1773. Those are the years the marker prints for the birth of William Dowling and for Robert Dowling having settled in the Parish of St. David.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1620-house.jpg",
          "Illustration of a columned public building and a house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1620-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a columned public building and a house, for the years the marker says William Dowling served in the House and was county supervisor. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "robert",
            year: "By 1773",
            label: "Robert Dowling has settled in the Parish of St. David.",
            why: "The marker says Robert Dowling had settled in S.C. in the Parish of St. David by 1773. William Dowling was his descendant.",
          },
          {
            id: "born",
            year: "1859",
            label: "William Dowling is born in Darlington County.",
            why: "The marker says William Dowling was born in Darlington County in 1859.",
          },
          {
            id: "house",
            year: "1899-1900",
            label: "He serves in the South Carolina House.",
            why: "The marker says William served as a member of the South Carolina House of Representatives, 1899-1900.",
          },
          {
            id: "courthouse",
            year: "1902-1903",
            label: "He is county supervisor when the courthouse is built.",
            why: "The marker says he was Darlington County Supervisor when the 1902-1903 courthouse was built. Dowling's home stood about one-half mile east of here.",
          },
        ],
        ["courthouse", "born", "robert", "house"],
      ),
      takeaway([
        "Born in Darlington County in 1859, William Dowling was a descendant of Robert Dowling, who had settled in S.C. in the Parish of St. David by 1773.",
        "William served as a member of the South Carolina House of Representatives, 1899-1900, and was Darlington County Supervisor when the 1902-1903 courthouse was built.",
        "Dowling's home stood about one-half mile east of here.",
      ]),
    ],
  ),
  lesson(
    "16-21",
    "Merchant, captain, and postmaster",
    "Zachariah W. Wines timeline",
    [
      cited("16-21", "Zachariah W. Wines", "front"),
      span(
        '"7 years" is 1904 minus 1897, the years the marker prints for his service as Society Hill Postmaster.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "store",
        kicker: "1847",
        title: "Born in Society Hill",
        partLabel: "Society Hill",
        art: art(
          "m1621-store.jpg",
          "Illustration of a wooden shop and a small schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "1847",
            x: 32,
            y: 48,
            fact: "Black merchant and educator Zachariah Wines, born 1847 in Society Hill, represented Darlington County in the S.C. House 1876-78.",
          },
          {
            id: "captain",
            label: "1877",
            x: 74,
            y: 36,
            fact: "He was commissioned Captain in the National Guard by Gov. Wade Hampton in 1877.",
          },
        ],
      },
      {
        kind: "scene",
        id: "school",
        kicker: "1897-1904",
        title: "Teacher, then postmaster",
        partLabel: "the school",
        art: art(
          "m1621-school.jpg",
          "Illustration of a schoolhouse and a small plain building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "postmaster",
            label: "1897-1904",
            x: 32,
            y: 52,
            fact: "He taught at nearby Waddell School and later served as Society Hill Postmaster, 1897-1904.",
          },
          {
            id: "died",
            label: "1920",
            x: 74,
            y: 40,
            fact: "He died in 1920 and is buried about 1/3 mile northeast.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1897-1904",
        title: "Years as Society Hill Postmaster",
        partLabel: "7 years",
        value: 7,
        unit: "years",
        meant:
          "What this meant: 1904 comes 7 years after 1897. Those are the years the marker prints for his service as Society Hill Postmaster.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1621-school.jpg",
          "Illustration of a schoolhouse and a small plain building. Not a historical photograph.",
        ),
        nowArt: art(
          "m1621-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a schoolhouse and a small plain building, for the teaching and the postmaster years the marker gives. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1847",
            label: "Zachariah Wines is born in Society Hill.",
            why: "The marker says Black merchant and educator Zachariah Wines was born in 1847 in Society Hill.",
          },
          {
            id: "house",
            year: "1876-78",
            label: "He represents Darlington County in the S.C. House.",
            why: "The marker says he represented Darlington County in the S.C. House 1876-78 and was commissioned Captain in the National Guard by Gov. Wade Hampton in 1877.",
          },
          {
            id: "postmaster",
            year: "1897-1904",
            label: "He serves as Society Hill Postmaster.",
            why: "The marker says he taught at nearby Waddell School and later served as Society Hill Postmaster, 1897-1904.",
          },
          {
            id: "died",
            year: "1920",
            label: "He dies and is buried northeast of here.",
            why: "The marker says he died in 1920 and is buried about 1/3 mile northeast.",
          },
        ],
        ["postmaster", "died", "born", "house"],
      ),
      takeaway([
        "Black merchant and educator Zachariah Wines, born 1847 in Society Hill, represented Darlington County in the S.C. House 1876-78 and was commissioned Captain in the National Guard by Gov. Wade Hampton in 1877.",
        "He taught at nearby Waddell School and later served as Society Hill Postmaster, 1897-1904.",
        "He died in 1920 and is buried about 1/3 mile northeast.",
      ]),
    ],
  ),
  lesson(
    "16-22",
    "From St. David's Parish to a new courthouse",
    "Darlington County timeline",
    [
      cited("16-22", "Darlington County", "front and back"),
      span(
        '"60 years" is 1964 minus 1904, the years the marker prints for the present structure being completed and for the later year of the courthouse built 1903-1904.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "parish",
        kicker: "1768",
        title: "Parish, district, then county",
        partLabel: "the county",
        art: art(
          "m1622-parish.jpg",
          "Illustration of open country and a plain wooden building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "parish",
            label: "1768",
            x: 32,
            y: 46,
            fact: "This area became part of St. David's Parish in 1768, Cheraws District in 1769, and then Darlington County on March 12, 1785.",
          },
          {
            id: "district",
            label: "1800 and 1868",
            x: 74,
            y: 58,
            fact: "In 1800 Darlington became a circuit court district, and again a county in 1868. Extensive territory was lost in 1888 and 1902 with the creation of new counties.",
          },
        ],
      },
      {
        kind: "scene",
        id: "courthouse",
        kicker: "March 19, 1806",
        title: "Courthouses at this site",
        partLabel: "the courthouse",
        art: art(
          "m1622-courthouse.jpg",
          "Illustration of a columned courthouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "fire",
            label: "March 19, 1806",
            x: 32,
            y: 42,
            fact: "The first courthouse at this site was destroyed by fire March 19, 1806. A later building, thought to have been designed by architect Robert Mills, burned in 1866 and in 1873 was rebuilt.",
          },
          {
            id: "later",
            label: "1903-1904",
            x: 74,
            y: 54,
            fact: "The subsequent courthouse, built 1903-1904, was in use until 1964 when the present structure was completed.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1904-1964",
        title: "Years from that courthouse to the present one",
        partLabel: "60 years",
        value: 60,
        unit: "years",
        meant:
          "What this meant: 1964 comes 60 years after 1904. The marker says the courthouse built 1903-1904 was in use until 1964, when the present structure was completed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1622-courthouse.jpg",
          "Illustration of a columned courthouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m1622-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a columned courthouse, for the courthouses the marker describes at this site. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "parish",
            year: "1768",
            label: "This area becomes part of St. David's Parish.",
            why: "The marker says this area became part of St. David's Parish in 1768.",
          },
          {
            id: "county",
            year: "March 12, 1785",
            label: "It becomes Darlington County.",
            why: "The marker says it became Darlington County on March 12, 1785.",
          },
          {
            id: "fire",
            year: "March 19, 1806",
            label: "The first courthouse at this site burns.",
            why: "The marker says the first courthouse at this site was destroyed by fire March 19, 1806.",
          },
          {
            id: "rebuilt",
            year: "1873",
            label: "The later courthouse is rebuilt.",
            why: "The marker says a later building, thought to have been designed by architect Robert Mills, burned in 1866 and in 1873 was rebuilt.",
          },
        ],
        ["rebuilt", "parish", "fire", "county"],
      ),
      takeaway([
        "This area became part of St. David's Parish in 1768, Cheraws District in 1769, and then Darlington County on March 12, 1785.",
        "In 1800 Darlington became a circuit court district, and again a county in 1868. Extensive territory was lost in 1888 and 1902 with the creation of new counties.",
        "The first courthouse at this site was destroyed by fire March 19, 1806. A later building, thought to have been designed by architect Robert Mills, burned in 1866 and in 1873 was rebuilt. The subsequent courthouse, built 1903-1904, was in use until 1964 when the present structure was completed.",
      ]),
    ],
  ),
];
