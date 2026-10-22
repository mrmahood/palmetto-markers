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

export const darlingtonLessonsA: MarkerLesson[] = [
  lesson(
    "16-02",
    "Governor and a War of 1812 general",
    "David Rogerson Williams timeline",
    [
      cited("16-02", "David Rogerson Williams", "front"),
      span(
        '"54 years" is 1830 minus 1776, the years the marker prints at the head of the inscription, November 17, 1830 and March 8, 1776.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "dates",
        kicker: "March 8, 1776",
        title: "The dates the marker prints",
        partLabel: "the dates and the offices",
        art: art(
          "m1602-farm.jpg",
          "Illustration of fields and a small workshop. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "dates",
            label: "March 8, 1776",
            x: 32,
            y: 48,
            fact: "The marker opens with March 8, 1776-November 17, 1830.",
          },
          {
            id: "offices",
            label: "Statesman and farmer",
            x: 74,
            y: 58,
            fact: "Statesman, educator, pioneer manufacturer, scientific farmer, State Senator, Congressman.",
          },
        ],
      },
      {
        kind: "scene",
        id: "hall",
        kicker: "1814-1816",
        title: "Governor, general, and Center Hall",
        partLabel: "Center Hall",
        art: art(
          "m1602-hall.jpg",
          "Illustration of a country house and a lane. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "governor",
            label: "Governor 1814-1816",
            x: 32,
            y: 46,
            fact: "Governor 1814-1816. Brigadier General in the War of 1812.",
          },
          {
            id: "hall",
            label: "Center Hall",
            x: 74,
            y: 60,
            fact: 'His residence, "Center Hall," was ½ mile east. His grave is in the family cemetery 2 ½ miles east.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1776-1830",
        title: "Years from the first date to the last",
        partLabel: "54 years",
        value: 54,
        unit: "years",
        meant:
          "What this meant: 1830 comes 54 years after 1776. That is the stretch from March 8, 1776 to November 17, 1830, the two dates the marker prints at the head of the inscription.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1602-hall.jpg",
          "Illustration of a country house and a lane. Not a historical photograph.",
        ),
        nowArt: art(
          "m1602-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          'Illustration of a country house, for the residence the marker calls "Center Hall," ½ mile east. Not a historical photograph.',
        nowCaption:
          "Illustration of a blank roadside marker on a rural road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "open",
            year: "March 8, 1776",
            label: "The dates printed for him begin.",
            why: "The marker opens with March 8, 1776-November 17, 1830.",
          },
          {
            id: "general",
            year: "War of 1812",
            label: "He is a brigadier general in the War of 1812.",
            why: "The marker says he was a brigadier general in the War of 1812.",
          },
          {
            id: "governor",
            year: "1814-1816",
            label: "He is governor.",
            why: "The marker says he was governor 1814-1816.",
          },
          {
            id: "close",
            year: "November 17, 1830",
            label: "The dates printed for him end.",
            why: "The marker prints November 17, 1830 as the second date in March 8, 1776-November 17, 1830. It says his grave is in the family cemetery 2 ½ miles east.",
          },
        ],
        ["governor", "open", "close", "general"],
      ),
      takeaway([
        "March 8, 1776-November 17, 1830. Statesman, educator, pioneer manufacturer, scientific farmer, State Senator, Congressman.",
        "Governor 1814-1816. Brigadier General in the War of 1812.",
        'His residence, "Center Hall," was ½ mile east. His grave is in the family cemetery 2 ½ miles east.',
      ]),
    ],
  ),
  lesson(
    "16-03",
    "First courthouse of old Cheraws District",
    "Long Bluff timeline",
    [
      cited("16-03", "Long Bluff", "front and back"),
      span(
        '"2 years" is 1774 minus 1772, the years the marker prints for the Circuit Court and the first courthouse and jail.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "bluff",
        kicker: "1772",
        title: "Courthouse and jail on the river",
        partLabel: "the first courthouse",
        art: art(
          "m1603-bluff.jpg",
          "Illustration of a river bluff, a courthouse, and a jail. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "site",
            label: "1772",
            x: 32,
            y: 48,
            fact: "Long Bluff, ¾ mile east on Great Pedee River, was the site of the first courthouse and jail for old Cheraws District in 1772.",
          },
          {
            id: "greeneville",
            label: "Greeneville",
            x: 74,
            y: 58,
            fact: "The town was known as Greeneville after the Revolution and remained the seat of justice until the formation of Darlington, Marlboro and Chesterfield Districts. Circuit courts and elections were conducted for a while longer.",
          },
        ],
      },
      {
        kind: "scene",
        id: "court",
        kicker: "November 15, 1774",
        title: "The grand jury answers Parliament",
        partLabel: "the grand jury",
        art: art(
          "m1603-court.jpg",
          "Illustration of an empty courtroom. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "jury",
            label: "November 15, 1774",
            x: 32,
            y: 46,
            fact: "At a Circuit Court held here on November 15, 1774, more than a year before the Declaration of Independence, the Grand Jury of Cheraws District denied the right of Parliament to levy taxes on them.",
          },
          {
            id: "laws",
            label: "Their own representatives",
            x: 74,
            y: 60,
            fact: "They declared themselves ready to defend with their lives and fortunes the right to obey only those laws made by their own elected representatives.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1772-1774",
        title: "Years from the courthouse to the Circuit Court",
        partLabel: "2 years",
        value: 2,
        unit: "years",
        meant:
          "What this meant: 1774 comes 2 years after 1772. That is the stretch from the year of the first courthouse and jail to the year of the Circuit Court.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1603-bluff.jpg",
          "Illustration of a river bluff, a courthouse, and a jail. Not a historical photograph.",
        ),
        nowArt: art(
          "m1603-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a river bluff and a small courthouse, for the site the marker says held the first courthouse and jail for old Cheraws District in 1772. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker near a river. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "site",
            year: "1772",
            label: "The first courthouse and jail stand at Long Bluff.",
            why: "The marker says Long Bluff was the site of the first courthouse and jail for old Cheraws District in 1772.",
          },
          {
            id: "jury",
            year: "November 15, 1774",
            label: "The grand jury denies Parliament's right to tax them.",
            why: "The marker says that at a Circuit Court on November 15, 1774, the Grand Jury of Cheraws District denied the right of Parliament to levy taxes on them.",
          },
          {
            id: "name",
            year: "After the Revolution",
            label: "The town is known as Greeneville.",
            why: "The marker says the town was known as Greeneville after the Revolution and remained the seat of justice until the formation of Darlington, Marlboro and Chesterfield Districts.",
          },
          {
            id: "later",
            year: "For a while longer",
            label: "Circuit courts and elections continue.",
            why: "The marker says circuit courts and elections were conducted for a while longer, after it remained the seat of justice until the formation of Darlington, Marlboro and Chesterfield Districts.",
          },
        ],
        ["name", "later", "site", "jury"],
      ),
      takeaway([
        "Long Bluff, ¾ mile east on Great Pedee River, was the site of the first courthouse and jail for old Cheraws District in 1772.",
        "The town was known as Greeneville after the Revolution and remained the seat of justice until the formation of Darlington, Marlboro and Chesterfield Districts.",
        "At a Circuit Court held here on November 15, 1774, more than a year before the Declaration of Independence, the Grand Jury of Cheraws District denied the right of Parliament to levy taxes on them and declared themselves ready to defend with their lives and fortunes the right to obey only those laws made by their own elected representatives.",
      ]),
    ],
  ),
  lesson(
    "16-04",
    "Minister of three Baptist churches",
    "Evan Pugh timeline",
    [
      cited("16-04", "Evan Pugh", "front"),
      span(
        '"36 years" is 1802 minus 1766, the years the marker prints for his service as a minister.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "field",
        kicker: "1729-1802",
        title: "Buried at Pugh Field",
        partLabel: "Pugh Field",
        art: art(
          "m1604-field.jpg",
          "Illustration of an open field, blank stones, and a cabin. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "buried",
            label: "Pugh Field",
            x: 32,
            y: 52,
            fact: "One half mile east of this site Evan Pugh (1729-1802) is buried at Pugh Field, near his homesite.",
          },
          {
            id: "moved",
            label: "1762",
            x: 74,
            y: 42,
            fact: "He moved to this Pee Dee section in 1762 from Pennsylvania.",
          },
        ],
      },
      {
        kind: "scene",
        id: "church",
        kicker: "1766-1802",
        title: "Minister of three churches",
        partLabel: "the three churches",
        art: art(
          "m1604-church.jpg",
          "Illustration of a plain wooden meeting house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "minister",
            label: "1766-1802",
            x: 32,
            y: 46,
            fact: "He served as a Minister for the Welsh Neck, Cashaway, and Mount Pleasant Churches of the Charleston Baptist Association, 1766-1802.",
          },
          {
            id: "patriot",
            label: "Patriot",
            x: 74,
            y: 58,
            fact: "He was an American Revolutionary patriot.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1766-1802",
        title: "Years printed for his ministry",
        partLabel: "36 years",
        value: 36,
        unit: "years",
        meant:
          "What this meant: 1802 comes 36 years after 1766. That is the stretch the marker prints for his service as a minister of the Welsh Neck, Cashaway, and Mount Pleasant Churches.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1604-church.jpg",
          "Illustration of a plain wooden meeting house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1604-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a meeting house, for the churches the marker says he served as minister, 1766-1802. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by an open field. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "open",
            year: "1729",
            label: "The years printed for Evan Pugh begin.",
            why: "The marker prints Evan Pugh (1729-1802) and says he is buried at Pugh Field, near his homesite.",
          },
          {
            id: "move",
            year: "1762",
            label: "He moves to this Pee Dee section from Pennsylvania.",
            why: "The marker says he moved to this Pee Dee section in 1762 from Pennsylvania.",
          },
          {
            id: "ministry",
            year: "1766",
            label: "His service as a minister begins.",
            why: "The marker says he served as a minister for the Welsh Neck, Cashaway, and Mount Pleasant Churches of the Charleston Baptist Association, 1766-1802.",
          },
          {
            id: "close",
            year: "1802",
            label: "The years printed for his ministry end.",
            why: "The marker prints 1802 as the second year in Evan Pugh (1729-1802) and as the last year of his service, 1766-1802.",
          },
        ],
        ["ministry", "open", "close", "move"],
      ),
      takeaway([
        "One half mile east of this site Evan Pugh (1729-1802) is buried at Pugh Field, near his homesite.",
        "He moved to this Pee Dee section in 1762 from Pennsylvania and served as a Minister for the Welsh Neck, Cashaway, and Mount Pleasant Churches of the Charleston Baptist Association, 1766-1802.",
        "He was an American Revolutionary patriot.",
      ]),
    ],
  ),
  lesson(
    "16-05",
    "Colonel of the Cheraws militia",
    "Lamuel Benton timeline",
    [
      cited("16-05", "Lamuel Benton", "front"),
      span(
        '"6 years" is 1799 minus 1793, the years the marker prints for his service as a member of Congress.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "field",
        kicker: "The Revolution",
        title: "Cheraws militia and a forager",
        partLabel: "the Revolution",
        art: art(
          "m1605-field.jpg",
          "Illustration of open farmland and a distant river. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "colonel",
            label: "Cheraws militia",
            x: 32,
            y: 48,
            fact: "Owner of many acres north of here, Lamuel Benton was prominent in the Revolution as Colonel of the Cheraws militia under Francis Marion.",
          },
          {
            id: "forager",
            label: "Greene's army",
            x: 74,
            y: 58,
            fact: "He was a forager for Greene's Continental Army.",
          },
        ],
      },
      {
        kind: "scene",
        id: "office",
        kicker: "1781-87",
        title: "House, convention, sheriff, Congress",
        partLabel: "the offices",
        art: art(
          "m1605-office.jpg",
          "Illustration of a small public building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "house",
            label: "1781-87 and 1790",
            x: 32,
            y: 46,
            fact: "Member S.C. House of Representatives, 1781-87; Delegate to the S.C. Constitutional Convention of 1790.",
          },
          {
            id: "congress",
            label: "1791 and 1793-1799",
            x: 74,
            y: 60,
            fact: "Sheriff of Cheraws District, 1798 and 1791; Member of Congress, 1793-1799.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1793-1799",
        title: "Years from the start of his Congress term to its end",
        partLabel: "6 years",
        value: 6,
        unit: "years",
        meant:
          "What this meant: 1799 comes 6 years after 1793. That is the stretch the marker prints for his service as a member of Congress, 1793-1799.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1605-field.jpg",
          "Illustration of open farmland and a distant river. Not a historical photograph.",
        ),
        nowArt: art(
          "m1605-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of open farmland, for the many acres the marker says he owned north of here. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker along a rural road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "house",
            year: "1781-87",
            label: "He is a member of the S.C. House of Representatives.",
            why: "The marker says he was a member of the S.C. House of Representatives, 1781-87.",
          },
          {
            id: "convention",
            year: "1790",
            label: "He is a delegate to the S.C. Constitutional Convention.",
            why: "The marker says he was a delegate to the S.C. Constitutional Convention of 1790.",
          },
          {
            id: "sheriff",
            year: "1791",
            label: "He is sheriff of Cheraws District.",
            why: "The marker says Sheriff of Cheraws District, 1798 and 1791. Of those two years, 1791 is the earlier.",
          },
          {
            id: "congress",
            year: "1793-1799",
            label: "He is a member of Congress.",
            why: "The marker says he was a member of Congress, 1793-1799.",
          },
        ],
        ["congress", "convention", "house", "sheriff"],
      ),
      takeaway([
        "Owner of many acres north of here, Lamuel Benton was prominent in the Revolution as Colonel of the Cheraws militia under Francis Marion and as forager for Greene's Continental Army.",
        "Member S.C. House of Representatives, 1781-87; Delegate to the S.C. Constitutional Convention of 1790.",
        "Sheriff of Cheraws District, 1798 and 1791; Member of Congress, 1793-1799.",
      ]),
    ],
  ),
];
