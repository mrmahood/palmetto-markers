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

export const charlestonLessonsF: MarkerLesson[] = [
  lesson(
    "10-27",
    "The first submarine to sink an enemy warship",
    "H. L. Hunley timeline",
    [cited("10-27", "CS H. L. Hunley", "front and back")],
    [
      {
        kind: "scene",
        id: "boat",
        kicker: "February 17, 1864",
        title: "Out Breach Inlet",
        partLabel: "the submarine",
        art: art(
          "m1027-boat.jpg",
          "Illustration of a submarine vessel in an inlet. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "left",
            label: "February 17, 1864",
            x: 32,
            y: 48,
            fact: "The CS H.L. Hunley, the first submarine to sink an enemy warship, left from a point near here on the evening of February 17, 1864, and proceeded out Breach Inlet toward the USS Housatonic, anchored nearby.",
          },
          {
            id: "sank",
            label: "The Housatonic",
            x: 74,
            y: 42,
            fact: "The Hunley rammed a fixed torpedo into the Housatonic's hull below the waterline, sinking it within an hour with a loss of 5 Union sailors. The Hunley itself sank as well about 3.5 mi. offshore with its entire 9-man crew of Confederate volunteers.",
          },
        ],
      },
      {
        kind: "scene",
        id: "harbor",
        kicker: "1863",
        title: "Trial runs in Charleston Harbor",
        partLabel: "the harbor trials",
        art: art(
          "m1027-harbor.jpg",
          "Illustration of a submarine vessel in a harbor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "trials",
            label: "August and October 1863",
            x: 32,
            y: 50,
            fact: "The Hunley, named for Horace L. Hunley (1823-1863), an early promoter of Confederate submarines, had already lost a 5-man crew in August 1863 and an 8-man crew, including Hunley, in October 1863 during trial runs in Charleston Harbor.",
          },
          {
            id: "crew",
            label: "The last crew",
            x: 74,
            y: 40,
            fact: "Its last crew, commanded by Lt. George E. Dixon of the 21st Alabama, included Fred Collins, James A. Wicks, C. Simkins, Arnold Becker, and___Ridgeway of the Navy, C. F. Carlson of Wagner's Co., S.C. Arty., ____ White, and ____ Miller.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "February 17, 1864",
        title: "The crew that sank offshore",
        partLabel: "9 men",
        value: 9,
        unit: "men",
        meant:
          "What this meant: the marker says the Hunley itself sank about 3.5 mi. offshore with its entire 9-man crew of Confederate volunteers.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1027-boat.jpg",
          "Illustration of a submarine vessel in an inlet. Not a historical photograph.",
        ),
        nowArt: art(
          "m1027-today.jpg",
          "Illustration of a marker by an inlet. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a submarine vessel, for the CS H.L. Hunley, which the marker says left from a point near here on the evening of February 17, 1864. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by an inlet. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1823",
            label: "Horace L. Hunley, the submarine's namesake, is born.",
            why: "The marker names the Hunley for Horace L. Hunley (1823-1863), an early promoter of Confederate submarines.",
          },
          {
            id: "august",
            year: "August 1863",
            label: "A 5-man crew is lost on a trial run.",
            why: "The marker says the Hunley had already lost a 5-man crew in August 1863 during trial runs in Charleston Harbor.",
          },
          {
            id: "october",
            year: "October 1863",
            label: "An 8-man crew, including Hunley, is lost.",
            why: "The marker says an 8-man crew, including Hunley, was lost in October 1863 during trial runs in Charleston Harbor.",
          },
          {
            id: "attack",
            year: "February 17, 1864",
            label: "The Hunley leaves near here and sinks the Housatonic.",
            why: "The marker says the Hunley left from a point near here on the evening of February 17, 1864, rammed a fixed torpedo into the USS Housatonic, and sank about 3.5 mi. offshore with its entire 9-man crew.",
          },
        ],
        ["october", "born", "attack", "august"],
      ),
      takeaway([
        "The CS H.L. Hunley, the first submarine to sink an enemy warship, left from a point near here on the evening of February 17, 1864, and proceeded out Breach Inlet toward the USS Housatonic, anchored nearby.",
        "The Hunley rammed a fixed torpedo into the Housatonic's hull below the waterline, sinking it within an hour with a loss of 5 Union sailors. The Hunley itself sank as well about 3.5 mi. offshore with its entire 9-man crew of Confederate volunteers.",
        "Named for Horace L. Hunley (1823-1863), it had already lost a 5-man crew in August 1863 and an 8-man crew, including Hunley, in October 1863 during trial runs in Charleston Harbor.",
      ]),
    ],
  ),
  lesson(
    "10-29",
    "Built around 1700, burned in 1782",
    "Old Wappetaw Church timeline",
    [
      cited("10-29", "Old Wappetaw Church", "front"),
      span(
        '"4 years" is 1786 minus 1782, the years the marker prints for the rebuilding and the burning of the church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "Around 1700",
        title: "A church near here",
        partLabel: "the church",
        art: art(
          "m1029-church.jpg",
          "Illustration of a wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Around 1700",
            x: 32,
            y: 46,
            fact: "Congregationalists from New England built a church near here around 1700.",
          },
          {
            id: "rebuilt",
            label: "1782 and 1786",
            x: 74,
            y: 40,
            fact: "Burned by the British in 1782, it was rebuilt in 1786.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "On the grounds",
        title: "Camps, then an abandoned building",
        partLabel: "the grounds",
        art: art(
          "m1029-yard.jpg",
          "Illustration of tents in a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "camped",
            label: "The American Revolution",
            x: 32,
            y: 52,
            fact: "Troops from both sides camped on the grounds during the American Revolution.",
          },
          {
            id: "left",
            label: "The Civil War",
            x: 74,
            y: 44,
            fact: "The building was abandoned during the Civil War and its members organized Presbyterian churches in Mount Pleasant and McClellanville.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1782-1786",
        title: "Years from the burning to the rebuilding",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1786 comes 4 years after 1782. Those are the years the marker prints for the rebuilding and the burning of the church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1029-church.jpg",
          "Illustration of a wooden church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1029-today.jpg",
          "Illustration of a marker by a churchyard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church, for the church the marker says Congregationalists from New England built near here around 1700. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a churchyard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "Around 1700",
            label: "Congregationalists from New England build a church near here.",
            why: "The marker says they built a church near here around 1700.",
          },
          {
            id: "burned",
            year: "1782",
            label: "The British burn the church.",
            why: "The marker says it was burned by the British in 1782. It also says troops from both sides camped on the grounds during the American Revolution.",
          },
          {
            id: "rebuilt",
            year: "1786",
            label: "The church is rebuilt.",
            why: "The marker says it was rebuilt in 1786.",
          },
          {
            id: "left",
            year: "Civil War",
            label: "The building is abandoned.",
            why: "The marker says the building was abandoned during the Civil War and its members organized Presbyterian churches in Mount Pleasant and McClellanville.",
          },
        ],
        ["left", "built", "rebuilt", "burned"],
      ),
      takeaway([
        "Congregationalists from New England built a church near here around 1700.",
        "Troops from both sides camped on the grounds during the American Revolution. Burned by the British in 1782, it was rebuilt in 1786.",
        "The building was abandoned during the Civil War and its members organized Presbyterian churches in Mount Pleasant and McClellanville.",
      ]),
    ],
  ),
  lesson(
    "10-30",
    "Planter, officer, and legislator",
    "Jacob Bond I'On timeline",
    [
      cited("10-30", "Jacob Bond I'on (1782-1859)", "front and back"),
      span(
        '"77 years" is 1859 minus 1782, the years the marker prints for Jacob Bond I\'On\'s death and birth.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1782-1859",
        title: "Buried in the family cemetery",
        partLabel: "the planter",
        art: art(
          "m1030-house.jpg",
          "Illustration of a lowcountry house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "buried",
            label: "1782-1859",
            x: 32,
            y: 48,
            fact: "Jacob Bond I'On (1782-1859), planter, U.S. Army and militia officer, and state legislator, is buried in the family cemetery 1/2 mi. north.",
          },
          {
            id: "house",
            label: "1810-12",
            x: 74,
            y: 40,
            fact: "I'On, a contemporary of John C. Calhoun at Yale University, represented St. James Santee Parish in the S.C. House 1810-12, then resigned to become a captain in the 2nd U.S. Artillery, serving with distinction during the War of 1812.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1816",
        title: "Senate, Sullivan's Island, and the convention",
        partLabel: "the later offices",
        art: art(
          "m1030-yard.jpg",
          "Illustration of a family cemetery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "senate",
            label: "1816-1831",
            x: 32,
            y: 52,
            fact: 'I\'On, described at his death in 1859 as "a representative of the true Carolina gentleman," was elected to the S.C. Senate in 1816, serving until 1831 and representing first St. James Santee Parish, then Christ Church Parish; he was President of the Senate 1822-28.',
          },
          {
            id: "mayor",
            label: "1823 and 1832-33",
            x: 74,
            y: 42,
            fact: "He was also intendant, or mayor, of Sullivan's Island in 1823 and a delegate to the Nullification Convention of 1832-33.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1782-1859",
        title: "Years from the birth year to the death year",
        partLabel: "77 years",
        value: 77,
        unit: "years",
        meant:
          "What this meant: 1859 comes 77 years after 1782. Those are the years the marker prints for Jacob Bond I'On, his death year and his birth year.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1030-house.jpg",
          "Illustration of a lowcountry house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1030-today.jpg",
          "Illustration of a marker by a road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house, for the planter the marker says is buried in the family cemetery 1/2 mi. north. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1782",
            label: "Jacob Bond I'On is born.",
            why: "The marker prints Jacob Bond I'On's years as 1782-1859.",
          },
          {
            id: "house",
            year: "1810",
            label: "He represents St. James Santee Parish in the S.C. House.",
            why: "The marker says he represented St. James Santee Parish in the S.C. House 1810-12, then resigned to become a captain in the 2nd U.S. Artillery, serving with distinction during the War of 1812.",
          },
          {
            id: "senate",
            year: "1816",
            label: "He is elected to the S.C. Senate.",
            why: "The marker says he was elected to the S.C. Senate in 1816, serving until 1831, and was President of the Senate 1822-28. He was intendant, or mayor, of Sullivan's Island in 1823 and a delegate to the Nullification Convention of 1832-33.",
          },
          {
            id: "death",
            year: "1859",
            label: "He dies.",
            why: 'The marker describes him at his death in 1859 as "a representative of the true Carolina gentleman."',
          },
        ],
        ["senate", "born", "death", "house"],
      ),
      takeaway([
        "Jacob Bond I'On (1782-1859), planter, U.S. Army and militia officer, and state legislator, is buried in the family cemetery 1/2 mi. north. A contemporary of John C. Calhoun at Yale University, he represented St. James Santee Parish in the S.C. House 1810-12, then resigned to become a captain in the 2nd U.S. Artillery, serving with distinction during the War of 1812.",
        'Described at his death in 1859 as "a representative of the true Carolina gentleman," he was elected to the S.C. Senate in 1816, serving until 1831, and was President of the Senate 1822-28.',
        "He was also intendant, or mayor, of Sullivan's Island in 1823 and a delegate to the Nullification Convention of 1832-33.",
      ]),
    ],
  ),
  lesson(
    "10-31",
    "In the family for 130 years",
    "Boone Hall Plantation timeline",
    [cited("10-31", "Boone Hall Plantation", "front")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1681",
        title: "The grant and the present house",
        partLabel: "the plantation",
        art: art(
          "m1031-house.jpg",
          "Illustration of a plantation house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grant",
            label: "1681",
            x: 32,
            y: 46,
            fact: "Boone Hall Plantation, established in 1681 by a grant to Major John Boone, remained in the family for 130 years.",
          },
          {
            id: "stone",
            label: "1936",
            x: 74,
            y: 40,
            fact: "The present main house at Boone Hall was built for Thomas A. Stone in 1936.",
          },
        ],
      },
      {
        kind: "scene",
        id: "oaks",
        kicker: "1817",
        title: "Cotton and the brick buildings",
        partLabel: "what survives",
        art: art(
          "m1031-oaks.jpg",
          "Illustration of plantation grounds and brick cabins. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bought",
            label: "1817",
            x: 32,
            y: 54,
            fact: "The plantation, purchased by the Horlbeck family in 1817, produced primarily Sea Island cotton.",
          },
          {
            id: "cabins",
            label: "Nine slave cabins",
            x: 74,
            y: 42,
            fact: "A cotton gin, smokehouse, and nine slave cabins, all built of brick made here, survive from the antebellum period.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Antebellum",
        title: "Slave cabins the marker counts",
        partLabel: "nine slave cabins",
        value: 9,
        unit: "slave cabins",
        meant:
          "What this meant: the marker says a cotton gin, smokehouse, and nine slave cabins, all built of brick made here, survive from the antebellum period.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1031-house.jpg",
          "Illustration of a plantation house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1031-today.jpg",
          "Illustration of a marker by a gate. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plantation house, for the present main house the marker says was built for Thomas A. Stone in 1936. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a gate. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "grant",
            year: "1681",
            label: "A grant to Major John Boone establishes the plantation.",
            why: "The marker says Boone Hall Plantation was established in 1681 by a grant to Major John Boone and remained in the family for 130 years.",
          },
          {
            id: "bought",
            year: "1817",
            label: "The Horlbeck family purchases the plantation.",
            why: "The marker says the plantation was purchased by the Horlbeck family in 1817 and produced primarily Sea Island cotton.",
          },
          {
            id: "stone",
            year: "1936",
            label: "The present main house is built for Thomas A. Stone.",
            why: "The marker says the present main house at Boone Hall was built for Thomas A. Stone in 1936.",
          },
        ],
        ["stone", "grant", "bought"],
      ),
      takeaway([
        "Boone Hall Plantation, established in 1681 by a grant to Major John Boone, remained in the family for 130 years.",
        "The plantation, purchased by the Horlbeck family in 1817, produced primarily Sea Island cotton.",
        "A cotton gin, smokehouse, and nine slave cabins, all built of brick made here, survive from the antebellum period. The present main house at Boone Hall was built for Thomas A. Stone in 1936.",
      ]),
    ],
  ),
];
