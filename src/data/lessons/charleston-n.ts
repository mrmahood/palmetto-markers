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

export const charlestonLessonsN: MarkerLesson[] = [
  lesson(
    "10-65",
    "The longest siege of the war",
    "Siege of Charleston timeline",
    [cited("10-65", "The Siege of Charleston, 1780", "front and back")],
    [
      {
        kind: "scene",
        id: "lines",
        kicker: "March 30-31",
        title: "Clinton crosses and advances",
        partLabel: "the American lines",
        art: art(
          "m1065-lines.jpg",
          "Illustration of earthen siege lines. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "cross",
            label: "March 30-31",
            x: 32,
            y: 52,
            fact: "The British capture of Charleston in May 1780 was one of the worst American defeats of the Revolution. On March 30-31 Gen. Henry Clinton's British, Hessian, and Loyalist force crossed the Ashley River north of Charleston.",
          },
          {
            id: "advance",
            label: "April 1",
            x: 74,
            y: 40,
            fact: "On April 1 Clinton advanced against the American lines near this site, held by Gen. Benjamin Lincoln's Continentals and militia. The 42-day siege would be the longest of the war.",
          },
        ],
      },
      {
        kind: "scene",
        id: "harbor",
        kicker: "May 12, 1780",
        title: "Bombardment, then surrender",
        partLabel: "the harbor and the works",
        art: art(
          "m1065-harbor.jpg",
          "Illustration of warships in a harbor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bombard",
            label: "The Cooper River",
            x: 32,
            y: 46,
            fact: "As Gen. Charles Cornwallis closed off Lincoln's escape routes on the Cooper River, Clinton advanced his siege lines and bombarded Charleston.",
          },
          {
            id: "surrender",
            label: "May 12, 1780",
            x: 74,
            y: 58,
            fact: 'On May 12, 1780, in front of the American works near this spot, Lincoln surrendered the city and his force of 6,000 men, after what one British officer called "a gallant defense." The British occupied Charleston for more than 2 1/2 years, evacuating Dec. 14, 1782.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The siege",
        title: "Days of the longest siege of the war",
        partLabel: "42 days",
        value: 42,
        unit: "days",
        meant:
          "What this meant: the marker says the 42-day siege would be the longest of the war.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1065-lines.jpg",
          "Illustration of earthen siege lines. Not a historical photograph.",
        ),
        nowArt: art(
          "m1065-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of earthen siege lines, for the American lines the marker says Clinton advanced against on April 1. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "cross",
            year: "March 30-31",
            label: "Clinton's force crosses the Ashley River.",
            why: "The marker says that on March 30-31 Gen. Henry Clinton's British, Hessian, and Loyalist force crossed the Ashley River north of Charleston. It dates the British capture of Charleston to May 1780.",
          },
          {
            id: "advance",
            year: "April 1",
            label: "Clinton advances against the American lines.",
            why: "The marker says that on April 1 Clinton advanced against the American lines near this site, held by Gen. Benjamin Lincoln's Continentals and militia.",
          },
          {
            id: "surrender",
            year: "May 12, 1780",
            label: "Lincoln surrenders the city and 6,000 men.",
            why: 'The marker says that on May 12, 1780, in front of the American works near this spot, Lincoln surrendered the city and his force of 6,000 men, after what one British officer called "a gallant defense."',
          },
          {
            id: "evacuate",
            year: "Dec. 14, 1782",
            label: "The British evacuate Charleston.",
            why: "The marker says the British occupied Charleston for more than 2 1/2 years, evacuating Dec. 14, 1782.",
          },
        ],
        ["surrender", "cross", "evacuate", "advance"],
      ),
      takeaway([
        "The British capture of Charleston in May 1780 was one of the worst American defeats of the Revolution. On March 30-31 Gen. Henry Clinton's British, Hessian, and Loyalist force crossed the Ashley River north of Charleston.",
        "On April 1 Clinton advanced against the American lines near this site, held by Gen. Benjamin Lincoln's Continentals and militia. The 42-day siege would be the longest of the war.",
        'As Gen. Charles Cornwallis closed off Lincoln\'s escape routes on the Cooper River, Clinton advanced his siege lines and bombarded Charleston. On May 12, 1780, Lincoln surrendered the city and his force of 6,000 men, after what one British officer called "a gallant defense." The British occupied Charleston for more than 2 1/2 years, evacuating Dec. 14, 1782.',
      ]),
    ],
  ),
  lesson(
    "10-66",
    "A separate Episcopal congregation",
    "Calvary Episcopal timeline",
    [
      cited("10-66", "Calvary Episcopal Church", "front and back"),
      span(
        '"91 years" is 1940 minus 1849, the years the marker prints for the purchase of the historic church and lot and the completion and consecration of the church on Beaufain Street.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1847",
        title: "Organized for a congregation of their own",
        partLabel: "the congregation",
        art: art(
          "m1066-church.jpg",
          "Illustration of a stuccoed brick church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1847",
            x: 32,
            y: 50,
            fact: "This church, located on Beaufain Street for 91 years, was organized in 1847 to give free blacks and slaves in antebellum Charleston a separate Episcopal congregation of their own.",
          },
          {
            id: "trapier",
            label: "The Rev. Paul Trapier",
            x: 74,
            y: 38,
            fact: "The Rev. Paul Trapier was its first minister, and the church met in the St. Philip's Episcopal Church parsonage, then in Temperance Hall, before acquiring a lot at the corner of Beaufain and Wilson Streets.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1849",
        title: "Consecrated, then a sanctuary on Line Street",
        partLabel: "the churchyard",
        art: art(
          "m1066-yard.jpg",
          "Illustration of a churchyard of blank gravestones. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "consecrated",
            label: "1849 and 1940",
            x: 32,
            y: 54,
            fact: "A stuccoed brick church on Beaufain Street was completed and consecrated in 1849. In 1940 Charleston Housing Authority bought the historic church and lot to build the Robert Mills Manor housing project.",
          },
          {
            id: "dedicated",
            label: "1942",
            x: 74,
            y: 42,
            fact: 'The congregation bought this lot on Line Street from the city and dedicated this sanctuary in 1942. Three African-American cemeteries have been on this site: one "Colored," one Baptist, and Calvary Episcopal.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1849-1940",
        title: "Years on Beaufain Street",
        partLabel: "91 years",
        value: 91,
        unit: "years",
        meant:
          "What this meant: 1940 comes 91 years after 1849. The marker says this church, located on Beaufain Street for 91 years, was completed and consecrated in 1849, and in 1940 Charleston Housing Authority bought the historic church and lot.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1066-church.jpg",
          "Illustration of a stuccoed brick church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1066-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a stuccoed brick church, for the church the marker says was completed and consecrated on Beaufain Street in 1849. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1847",
            label: "The church is organized.",
            why: "The marker says this church was organized in 1847 to give free blacks and slaves in antebellum Charleston a separate Episcopal congregation of their own.",
          },
          {
            id: "consecrated",
            year: "1849",
            label: "A stuccoed brick church is completed and consecrated.",
            why: "The marker says a stuccoed brick church on Beaufain Street was completed and consecrated in 1849.",
          },
          {
            id: "bought",
            year: "1940",
            label: "Charleston Housing Authority buys the church and lot.",
            why: "The marker says that in 1940 Charleston Housing Authority bought the historic church and lot to build the Robert Mills Manor housing project.",
          },
          {
            id: "dedicated",
            year: "1942",
            label: "The congregation dedicates this sanctuary.",
            why: "The marker says the congregation bought this lot on Line Street from the city and dedicated this sanctuary in 1942.",
          },
        ],
        ["bought", "organized", "dedicated", "consecrated"],
      ),
      takeaway([
        "This church, located on Beaufain Street for 91 years, was organized in 1847 to give free blacks and slaves in antebellum Charleston a separate Episcopal congregation of their own.",
        "The Rev. Paul Trapier was its first minister, and the church met in the St. Philip's Episcopal Church parsonage, then in Temperance Hall, before acquiring a lot at the corner of Beaufain and Wilson Streets. A stuccoed brick church on Beaufain Street was completed and consecrated in 1849.",
        'In 1940 Charleston Housing Authority bought the historic church and lot to build the Robert Mills Manor housing project. The congregation bought this lot on Line Street from the city and dedicated this sanctuary in 1942. Three African-American cemeteries have been on this site: one "Colored," one Baptist, and Calvary Episcopal.',
      ]),
    ],
  ),
  lesson(
    "10-67",
    "The first public high school for African-Americans",
    "Burke High School timeline",
    [cited("10-67", "Burke High School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1910",
        title: "Founded, then opened with 375 students",
        partLabel: "the school",
        art: art(
          "m1067-school.jpg",
          "Illustration of a brick school building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1910 and 1894",
            x: 32,
            y: 48,
            fact: "This school, founded in 1910, was the first public high school for African-Americans in Charleston. It succeeded the Charleston Normal & Industrial School, a private school at Bogard & Kracke Streets, which had been founded in 1894 by Rev. John L. Dart.",
          },
          {
            id: "opened",
            label: "January 1911",
            x: 74,
            y: 38,
            fact: "The new Charleston Colored & Industrial School, built here at President and Fishburne Streets by the City of Charleston, opened in January 1911 with 375 students.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1919",
        title: "A principal, a new name, and a new complex",
        partLabel: "the schoolyard",
        art: art(
          "m1067-yard.jpg",
          "Illustration of a schoolyard and brick school buildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "principal",
            label: "1919 and 1921",
            x: 32,
            y: 54,
            fact: "David Hill became the first African-American principal in 1919. The school was renamed Burke Industrial School in 1921 in memory of J.E. Burke, vice chairman of the public school board.",
          },
          {
            id: "merged",
            label: "1930, 1954, 2005",
            x: 74,
            y: 42,
            fact: "By 1930 Burke, with 1,000 students, had a full elementary and high school curriculum in addition to its vocational curriculum. Burke merged with Avery High School in 1954, was accredited, and was renamed Burke High School, in a new complex on this site. It was rebuilt in 2005.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "January 1911",
        title: "Students when the school opened",
        partLabel: "375 students",
        value: 375,
        unit: "students",
        meant:
          "What this meant: the marker says the new Charleston Colored & Industrial School opened in January 1911 with 375 students.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1067-school.jpg",
          "Illustration of a brick school building. Not a historical photograph.",
        ),
        nowArt: art(
          "m1067-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick school building, for the Charleston Colored & Industrial School the marker says opened in January 1911. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "dart",
            year: "1894",
            label: "Rev. John L. Dart founds a private school.",
            why: "The marker says this school succeeded the Charleston Normal & Industrial School, a private school at Bogard & Kracke Streets, which had been founded in 1894 by Rev. John L. Dart.",
          },
          {
            id: "founded",
            year: "1910",
            label: "This school is founded.",
            why: "The marker says this school, founded in 1910, was the first public high school for African-Americans in Charleston. The new Charleston Colored & Industrial School opened in January 1911 with 375 students.",
          },
          {
            id: "renamed",
            year: "1921",
            label: "It is renamed Burke Industrial School.",
            why: "The marker says David Hill became the first African-American principal in 1919. The school was renamed Burke Industrial School in 1921 in memory of J.E. Burke, vice chairman of the public school board. By 1930 Burke, with 1,000 students, had a full elementary and high school curriculum in addition to its vocational curriculum.",
          },
          {
            id: "merged",
            year: "1954",
            label: "Burke merges with Avery and is renamed Burke High School.",
            why: "The marker says Burke merged with Avery High School in 1954, was accredited, and was renamed Burke High School, in a new complex on this site. It was rebuilt in 2005.",
          },
        ],
        ["merged", "founded", "dart", "renamed"],
      ),
      takeaway([
        "This school, founded in 1910, was the first public high school for African-Americans in Charleston. It succeeded the Charleston Normal & Industrial School, a private school at Bogard & Kracke Streets, which had been founded in 1894 by Rev. John L. Dart.",
        "The new Charleston Colored & Industrial School, built here at President and Fishburne Streets by the City of Charleston, opened in January 1911 with 375 students. David Hill became the first African-American principal in 1919. The school was renamed Burke Industrial School in 1921 in memory of J.E. Burke, vice chairman of the public school board.",
        "By 1930 Burke, with 1,000 students, had a full elementary and high school curriculum in addition to its vocational curriculum. Burke merged with Avery High School in 1954, was accredited, and was renamed Burke High School, in a new complex on this site. It was rebuilt in 2005.",
      ]),
    ],
  ),
  lesson(
    "10-68",
    "A hospital and training school for nurses",
    "Cannon Street Hospital timeline",
    [
      cited("10-68", "Cannon Street Hospital", "front and back"),
      span(
        '"62 years" is 1959 minus 1897, the years the marker prints for the end of Cannon Street Hospital\'s service and its establishment here.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hospital",
        kicker: "1897",
        title: "Established in a three-story brick building",
        partLabel: "the hospital building",
        art: art(
          "m1068-hospital.jpg",
          "Illustration of a three-story brick hospital building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1897",
            x: 32,
            y: 46,
            fact: "Cannon Street Hospital, established here in 1897, served the African-American community of Charleston until 1959. Officially the Hospital and Training School for Nurses, it occupied a three-story brick building constructed ca. 1800.",
          },
          {
            id: "mcclennan",
            label: "1855-1912",
            x: 74,
            y: 36,
            fact: "Dr. Alonzo C. McClennan (1855-1912), then one of only six black physicians in Charleston, was one of its founders and also edited The Hospital Herald 1898-1900.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1956",
        title: "A new hospital, then both buildings gone",
        partLabel: "the street",
        art: art(
          "m1068-street.jpg",
          "Illustration of a brick hospital along an empty street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "campaign",
            label: "1956 and 1959",
            x: 32,
            y: 56,
            fact: "By 1956 Dr. Thomas C. McFall, director of the Cannon Street Hospital, led a campaign to build a new hospital. McClennan-Banks Memorial Hospital, which opened on Courtenay Street in 1959, was named for Dr. McClennan and Anna DeCosta Banks (1869-1930), first head nurse of the Cannon Street Hospital.",
          },
          {
            id: "torn",
            label: "1961, 1976, 2004",
            x: 74,
            y: 40,
            fact: "The old hospital here was torn down in 1961; the new hospital closed at the end of 1976 and was torn down in 2004.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1897-1959",
        title: "Years the hospital served here",
        partLabel: "62 years",
        value: 62,
        unit: "years",
        meant:
          "What this meant: 1959 comes 62 years after 1897. The marker says Cannon Street Hospital was established here in 1897 and served the African-American community of Charleston until 1959.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1068-hospital.jpg",
          "Illustration of a three-story brick hospital building. Not a historical photograph.",
        ),
        nowArt: art(
          "m1068-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a three-story brick hospital, for the building the marker says was constructed ca. 1800 and occupied by Cannon Street Hospital. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "ca. 1800",
            label: "A three-story brick building is constructed.",
            why: "The marker says the hospital occupied a three-story brick building constructed ca. 1800.",
          },
          {
            id: "established",
            year: "1897",
            label: "Cannon Street Hospital is established here.",
            why: "The marker says Cannon Street Hospital was established here in 1897 and served the African-American community of Charleston until 1959.",
          },
          {
            id: "opened",
            year: "1959",
            label: "McClennan-Banks Memorial Hospital opens.",
            why: "The marker says McClennan-Banks Memorial Hospital opened on Courtenay Street in 1959. It was named for Dr. McClennan and Anna DeCosta Banks (1869-1930), first head nurse of the Cannon Street Hospital.",
          },
          {
            id: "demolished",
            year: "2004",
            label: "The new hospital is torn down.",
            why: "The marker says the old hospital here was torn down in 1961; the new hospital closed at the end of 1976 and was torn down in 2004.",
          },
        ],
        ["opened", "built", "demolished", "established"],
      ),
      takeaway([
        "Cannon Street Hospital, established here in 1897, served the African-American community of Charleston until 1959. Officially the Hospital and Training School for Nurses, it occupied a three-story brick building constructed ca. 1800.",
        "Dr. Alonzo C. McClennan (1855-1912), then one of only six black physicians in Charleston, was one of its founders and also edited The Hospital Herald 1898-1900. By 1956 Dr. Thomas C. McFall, director of the Cannon Street Hospital, led a campaign to build a new hospital.",
        "McClennan-Banks Memorial Hospital, which opened on Courtenay Street in 1959, was named for Dr. McClennan and Anna DeCosta Banks (1869-1930), first head nurse of the Cannon Street Hospital. The old hospital here was torn down in 1961; the new hospital closed at the end of 1976 and was torn down in 2004.",
      ]),
    ],
  ),
];
