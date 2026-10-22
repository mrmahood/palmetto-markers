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

export const darlingtonLessonsL: MarkerLesson[] = [
  lesson(
    "16-48",
    "Persuaded his superiors not to burn the house",
    "Wilds-Edwards House timeline",
    [
      cited("16-48", "Wilds-Edwards House", "front and back"),
      span(
        '"48 years" is 1867 minus 1819, the years the marker prints for Samuel H. Wilds (1819-1867).',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1856-57",
        title: "An Italianate house for Samuel H. Wilds",
        partLabel: "the house",
        art: art(
          "m1648-house.jpg",
          "Illustration of an Italianate house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "design",
            label: "1856-57",
            x: 32,
            y: 48,
            fact: "This Italianate house, designed by J.L. Clickner, was built 1856-57 for planter Samuel H. Wilds (1819-1867).",
          },
          {
            id: "rifles",
            label: "Wilds Rifles",
            x: 74,
            y: 40,
            fact: 'Samuel H. Wilds was a member of the Darlington Agricultural Society, a colonel in the antebellum militia, and a state representative 1856-57 and again in 1864. He organized the "Wilds Rifles" (later Co. B, 21st S.C. Infantry) at the outbreak of the Civil War as its captain and rose to major by war\'s end.',
          },
        ],
      },
      {
        kind: "scene",
        id: "raid",
        kicker: "Early 1865",
        title: "A raid that left the house standing",
        partLabel: "the raid",
        art: art(
          "m1648-raid.jpg",
          "Illustration of an unburned house as riders pass. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "spared",
            label: "Early 1865",
            x: 32,
            y: 52,
            fact: "According to tradition Clickner returned in early 1865 as a Union soldier and persuaded his superiors not to burn the house during a raid in the area.",
          },
          {
            id: "edwards",
            label: "B.W. Edwards, 1870",
            x: 74,
            y: 42,
            fact: "In 1870 attorney B.W. Edwards (1824-1890), later a state senator, acquired the house; it remained in the family until 1999. This house was listed in the National Register of Historic Places in 1988.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1819-1867",
        title: "Years the marker prints for Samuel H. Wilds",
        partLabel: "48 years",
        value: 48,
        unit: "years",
        meant:
          "What this meant: 1867 comes 48 years after 1819. Those are the years the marker prints for Samuel H. Wilds (1819-1867).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1648-house.jpg",
          "Illustration of an Italianate house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1648-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an Italianate house, for the house the marker says J.L. Clickner designed and that was built 1856-57 for Samuel H. Wilds. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1856-57",
            label: "The Italianate house is built for Samuel H. Wilds.",
            why: "The marker says this Italianate house, designed by J.L. Clickner, was built 1856-57 for planter Samuel H. Wilds (1819-1867).",
          },
          {
            id: "term",
            year: "1864",
            label: "Wilds is a state representative again.",
            why: "The marker says Samuel H. Wilds was a member of the Darlington Agricultural Society, a colonel in the antebellum militia, and a state representative 1856-57 and again in 1864.",
          },
          {
            id: "spared",
            year: "Early 1865",
            label: "Clickner persuades his superiors not to burn the house.",
            why: "The marker says that according to tradition Clickner returned in early 1865 as a Union soldier and persuaded his superiors not to burn the house during a raid in the area.",
          },
          {
            id: "edwards",
            year: "1870",
            label: "B.W. Edwards acquires the house.",
            why: "The marker says that in 1870 attorney B.W. Edwards (1824-1890), later a state senator, acquired the house; it remained in the family until 1999.",
          },
        ],
        ["spared", "built", "edwards", "term"],
      ),
      takeaway([
        "This Italianate house, designed by J.L. Clickner, was built 1856-57 for planter Samuel H. Wilds (1819-1867).",
        "According to tradition Clickner returned in early 1865 as a Union soldier and persuaded his superiors not to burn the house during a raid in the area.",
        "In 1870 attorney B.W. Edwards (1824-1890), later a state senator, acquired the house; it remained in the family until 1999.",
      ]),
    ],
  ),
  lesson(
    "16-49",
    "Chartered as a memorial to World War II",
    "Darlington Memorial Center timeline",
    [
      cited("16-49", "Darlington Memorial Center", "front"),
      span(
        '"55 years" is 1908 minus 1853, the years the marker prints for Charles McCullough (1853-1908).',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1889",
        title: "Built by councilman and mayor Charles McCullough",
        partLabel: "the house",
        art: art(
          "m1649-house.jpg",
          "Illustration of a wooden town house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1889",
            x: 32,
            y: 46,
            fact: "This house was built in 1889 by Charles McCullough (1853-1908), who served as town councilman and later as mayor.",
          },
          {
            id: "youth",
            label: "Local youth",
            x: 74,
            y: 58,
            fact: "It was for many years a recreation center for local youth.",
          },
        ],
      },
      {
        kind: "scene",
        id: "memorial",
        kicker: "1946",
        title: "A memorial to Darlington men who died in World War II",
        partLabel: "the memorial",
        art: art(
          "m1649-hall.jpg",
          "Illustration of a recreation hall inside an old house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "charter",
            label: "Chartered in 1946",
            x: 32,
            y: 44,
            fact: "The Darlington Memorial Center, chartered in 1946 as a memorial to Darlington men who died in World War II, was funded primarily by area civic clubs.",
          },
          {
            id: "city",
            label: "City of Darlington, 1950",
            x: 74,
            y: 56,
            fact: "It was acquired by the city of Darlington in 1950.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1853-1908",
        title: "Years the marker prints for Charles McCullough",
        partLabel: "55 years",
        value: 55,
        unit: "years",
        meant:
          "What this meant: 1908 comes 55 years after 1853. Those are the years the marker prints for Charles McCullough (1853-1908).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1649-house.jpg",
          "Illustration of a wooden town house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1649-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden town house, for the house the marker says Charles McCullough built in 1889. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1889",
            label: "Charles McCullough builds this house.",
            why: "The marker says this house was built in 1889 by Charles McCullough (1853-1908), who served as town councilman and later as mayor.",
          },
          {
            id: "charter",
            year: "1946",
            label: "The Darlington Memorial Center is chartered.",
            why: "The marker says the Darlington Memorial Center, chartered in 1946 as a memorial to Darlington men who died in World War II, was funded primarily by area civic clubs.",
          },
          {
            id: "city",
            year: "1950",
            label: "The city of Darlington acquires it.",
            why: "The marker says it was acquired by the city of Darlington in 1950.",
          },
        ],
        ["city", "built", "charter"],
      ),
      takeaway([
        "This house was built in 1889 by Charles McCullough (1853-1908), who served as town councilman and later as mayor.",
        "It was for many years a recreation center for local youth.",
        "The Darlington Memorial Center, chartered in 1946 as a memorial to Darlington men who died in World War II, was funded primarily by area civic clubs. It was acquired by the city of Darlington in 1950.",
      ]),
    ],
  ),
  lesson(
    "16-50",
    "Escaped on Fanning's horse",
    "Andrew Hunter timeline",
    [cited("16-50", "Andrew Hunter", "front and back")],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "American Revolution",
        title: "Meal and corn from a mill on High Hill Creek",
        partLabel: "the mill",
        art: art(
          "m1650-mill.jpg",
          "Illustration of a grist mill on a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "creek",
            label: "High Hill Creek",
            x: 32,
            y: 50,
            fact: "During the American Revolution he ran a grist mill several miles south on High Hill Creek, supplying meal and corn to the Patriots in the Southern Department.",
          },
          {
            id: "buried",
            label: "About 400 ft. south",
            x: 74,
            y: 40,
            fact: "Andrew Hunter (d. 1823), planter, state representative, and county official, is buried in the Hunter family cemetery about 400 ft. south.",
          },
        ],
      },
      {
        kind: "scene",
        id: "escape",
        kicker: "1782",
        title: "Captured while scouting in N.C.",
        partLabel: "the escape",
        art: art(
          "m1650-horse.jpg",
          "Illustration of a horse carrying saddle, holsters, and pistols. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "fanning",
            label: "1782",
            x: 32,
            y: 48,
            fact: "He also served as a scout in the state militia under Gen. Francis Marion. In 1782 Hunter, scouting in N.C., was captured by Col. David Fanning, a prominent Loyalist. He escaped on Fanning’s horse, taking his saddle, holsters, pistols, and papers.",
          },
          {
            id: "house",
            label: "After the war",
            x: 74,
            y: 62,
            fact: "After the war he represented St. David’s Parish (1787-88) and Darlington County (1796-97) in the S.C. House of Representatives and served on commissions for roads, navigation, and a new courthouse and jail.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "About 400 ft. south",
        title: "Feet to the Hunter family cemetery",
        partLabel: "400 feet",
        value: 400,
        unit: "feet",
        meant:
          "What this meant: the marker says Andrew Hunter is buried in the Hunter family cemetery about 400 ft. south.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1650-mill.jpg",
          "Illustration of a grist mill on a creek. Not a historical photograph.",
        ),
        nowArt: art(
          "m1650-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a grist mill on a creek, for the mill the marker says Hunter ran several miles south on High Hill Creek. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "escape",
            year: "1782",
            label: "Hunter escapes on Col. David Fanning's horse.",
            why: "The marker says that in 1782 Hunter, scouting in N.C., was captured by Col. David Fanning, a prominent Loyalist. He escaped on Fanning’s horse, taking his saddle, holsters, pistols, and papers.",
          },
          {
            id: "parish",
            year: "1787-88",
            label: "He represents St. David's Parish in the S.C. House.",
            why: "The marker says that after the war he represented St. David’s Parish (1787-88) in the S.C. House of Representatives.",
          },
          {
            id: "county",
            year: "1796-97",
            label: "He represents Darlington County in the S.C. House.",
            why: "The marker says that after the war he represented St. David’s Parish (1787-88) and Darlington County (1796-97) in the S.C. House of Representatives and served on commissions for roads, navigation, and a new courthouse and jail.",
          },
          {
            id: "died",
            year: "1823",
            label: "Andrew Hunter dies.",
            why: "The marker says Andrew Hunter (d. 1823), planter, state representative, and county official, is buried in the Hunter family cemetery about 400 ft. south.",
          },
        ],
        ["county", "escape", "died", "parish"],
      ),
      takeaway([
        "Andrew Hunter (d. 1823), planter, state representative, and county official, is buried in the Hunter family cemetery about 400 ft. south.",
        "During the American Revolution he ran a grist mill several miles south on High Hill Creek, supplying meal and corn to the Patriots in the Southern Department. He also served as a scout in the state militia under Gen. Francis Marion.",
        "In 1782 Hunter, scouting in N.C., was captured by Col. David Fanning, a prominent Loyalist. He escaped on Fanning’s horse, taking his saddle, holsters, pistols, and papers.",
      ]),
    ],
  ),
  lesson(
    "16-52",
    "Signer of the Ordinance of Secession",
    "Julius A. Dargan House timeline",
    [
      cited("16-52", "Julius A. Dargan House", "front and back"),
      span(
        '"46 years" is 1861 minus 1815, the years the marker prints for Julius A. Dargan (1815-1861).',
      ),
    ],
    [
      {
        kind: "scene",
        id: "revival",
        kicker: "1856",
        title: "A Greek Revival house on Lide's land",
        partLabel: "the house",
        art: art(
          "m1652-house.jpg",
          "Illustration of a Greek Revival house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1856",
            x: 32,
            y: 46,
            fact: "This house was built in 1856 for Julius A. Dargan (1815-1861). Built on land acquired from Jesse H. Lide in 1839, the house is a fine example of the Greek Revival style.",
          },
          {
            id: "secession",
            label: "Ordinance of Secession",
            x: 74,
            y: 40,
            fact: "Dargan briefly taught school and practiced law with his brother G.W. Dargan for many years; he was also a state representative 1850-52, delegate to the Secession Convention, and signer of the Ordinance of Secession.",
          },
        ],
      },
      {
        kind: "scene",
        id: "later",
        kicker: "1861",
        title: "From later owners to a city restoration",
        partLabel: "later owners",
        art: art(
          "m1652-restore.jpg",
          "Illustration of a columned house being restored. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "owners",
            label: "After his death in 1861",
            x: 32,
            y: 52,
            fact: "After Dargan’s death in 1861 the house passed to several owners, most notably A.G. Kollock (1862-1930), editor of the Darlington News, and J.C. Stone (1900-1975), manager of the Darlington Coca-Cola Bottling Company.",
          },
          {
            id: "restored",
            label: "Restored in 2003",
            x: 74,
            y: 42,
            fact: "The house was listed in the National Register of Historic Places in 1988. It was acquired by the City of Darlington in 1999 and restored by the city in 2003.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1815-1861",
        title: "Years the marker prints for Julius A. Dargan",
        partLabel: "46 years",
        value: 46,
        unit: "years",
        meant:
          "What this meant: 1861 comes 46 years after 1815. Those are the years the marker prints for Julius A. Dargan (1815-1861).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1652-house.jpg",
          "Illustration of a Greek Revival house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1652-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Greek Revival house, for the house the marker says was built in 1856 for Julius A. Dargan. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "land",
            year: "1839",
            label: "The land is acquired from Jesse H. Lide.",
            why: "The marker says the house was built on land acquired from Jesse H. Lide in 1839.",
          },
          {
            id: "rep",
            year: "1850-52",
            label: "Dargan is a state representative.",
            why: "The marker says he was also a state representative 1850-52.",
          },
          {
            id: "built",
            year: "1856",
            label: "The Greek Revival house is built for Dargan.",
            why: "The marker says this house was built in 1856 for Julius A. Dargan (1815-1861) and is a fine example of the Greek Revival style.",
          },
          {
            id: "death",
            year: "1861",
            label: "Dargan dies and the house passes to other owners.",
            why: "The marker says that after Dargan’s death in 1861 the house passed to several owners, most notably A.G. Kollock (1862-1930), editor of the Darlington News, and J.C. Stone (1900-1975), manager of the Darlington Coca-Cola Bottling Company.",
          },
        ],
        ["death", "land", "built", "rep"],
      ),
      takeaway([
        "This house was built in 1856 for Julius A. Dargan (1815-1861). Built on land acquired from Jesse H. Lide in 1839, the house is a fine example of the Greek Revival style.",
        "Dargan briefly taught school and practiced law with his brother G.W. Dargan for many years; he was also a state representative 1850-52, delegate to the Secession Convention, and signer of the Ordinance of Secession.",
        "The house was listed in the National Register of Historic Places in 1988. It was acquired by the City of Darlington in 1999 and restored by the city in 2003.",
      ]),
    ],
  ),
];
