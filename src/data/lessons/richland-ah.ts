import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia sites. Facts are from that marker only.
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

export const richlandLessonsAH: MarkerLesson[] = [
  lesson(
    "40-176",
    "Columbia's first commercial airfield",
    "Redfern Field timeline",
    [
      cited("40-176", "Redfern Field", "front and back"),
      span(
        '"7 years" is 1923 minus 1916, the years the marker prints for the airfield and his first full-scale airplane.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "field",
        kicker: "1923",
        title: "The first commercial airfield",
        partLabel: "the airfield",
        art: art(
          "m40176-field.jpg",
          "Illustration of an open flying field and a wooden hangar. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "Established in 1923",
            x: 32,
            y: 50,
            fact: "This is the site of Redfern Field, established in 1923 as the first commercial airfield in Columbia.",
          },
          {
            id: "student",
            label: "A high-school airplane",
            x: 74,
            y: 42,
            fact: "Paul Rinaldo Redfern (1902-1927?) had shown an early interest in and aptitude for aviation, building his first full-scale airplane in 1916, while still a student at Columbia High School. Though he soon left high school to gain experience working on and flying planes, Redfern returned in 1919 and graduated in 1923.",
          },
        ],
      },
      {
        kind: "scene",
        id: "monoplane",
        kicker: "1927",
        title: "A flight bound for Rio de Janeiro",
        partLabel: "the monoplane",
        art: art(
          "m40176-plane.jpg",
          "Illustration of a blank monoplane on the grass and in the sky. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "passengers",
            label: "Passengers and barnstorming",
            x: 32,
            y: 48,
            fact: "Redfern built his own plane, opened his airfield here, and flew passengers all over S.C. before barnstorming across the Southeast for a few years.",
          },
          {
            id: "rio",
            label: "August 25, 1927",
            x: 74,
            y: 40,
            fact: "In 1927 businessmen in Brunswick, Ga., financed Redfern's attempt to make the first solo flight from North America to South America. On August 25, he took off in the monoplane Port of Brunswick from that city, bound for Rio de Janeiro. Redfern, last seen over Venezuela, was never heard from again.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1916 to 1923",
        title: "Years from the first airplane to the airfield",
        partLabel: "7 years",
        value: 7,
        unit: "years",
        meant:
          "What this meant: 1923 comes 7 years after 1916. The marker says he built his first full-scale airplane in 1916, while still a student at Columbia High School, and that Redfern Field was established in 1923 as the first commercial airfield in Columbia.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40176-field.jpg",
          "Illustration of an open flying field and a wooden hangar. Not a historical photograph.",
        ),
        nowArt: art(
          "m40176-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an open flying field and a wooden hangar, for Redfern Field, which the marker says was established in 1923 as the first commercial airfield in Columbia. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "airplane",
            year: "1916",
            label: "He builds his first full-scale airplane.",
            why: "The marker gives Paul Rinaldo Redfern as 1902-1927? and says he built his first full-scale airplane in 1916, while still a student at Columbia High School.",
          },
          {
            id: "returned",
            year: "1919",
            label: "He returns.",
            why: "The marker says that though he soon left high school to gain experience working on and flying planes, Redfern returned in 1919.",
          },
          {
            id: "established",
            year: "1923",
            label: "Redfern Field is established, and he graduates.",
            why: "The marker says Redfern Field was established in 1923 as the first commercial airfield in Columbia, and that Redfern graduated in 1923.",
          },
          {
            id: "flight",
            year: "1927",
            label: "On August 25 he takes off, bound for Rio de Janeiro.",
            why: "The marker says that in 1927 businessmen in Brunswick, Ga., financed his attempt to make the first solo flight from North America to South America, and that on August 25 he took off in the monoplane Port of Brunswick from that city, bound for Rio de Janeiro. He was last seen over Venezuela and was never heard from again.",
          },
        ],
        ["flight", "airplane", "established", "returned"],
      ),
      takeaway([
        "This is the site of Redfern Field, established in 1923 as the first commercial airfield in Columbia. Paul Rinaldo Redfern (1902-1927?) had shown an early interest in and aptitude for aviation, building his first full-scale airplane in 1916, while still a student at Columbia High School.",
        "Though he soon left high school to gain experience working on and flying planes, Redfern returned in 1919 and graduated in 1923. Redfern built his own plane, opened his airfield here, and flew passengers all over S.C. before barnstorming across the Southeast for a few years.",
        "In 1927 businessmen in Brunswick, Ga., financed Redfern's attempt to make the first solo flight from North America to South America. On August 25, he took off in the monoplane Port of Brunswick from that city, bound for Rio de Janeiro. Redfern, last seen over Venezuela, was never heard from again.",
      ]),
    ],
  ),
  lesson(
    "40-178",
    "Four men form their own congregation",
    "Zion Chapel timeline",
    [cited("40-178", "Zion Chapel Baptist Church No. 1", "front and back")],
    [
      {
        kind: "scene",
        id: "congregation",
        kicker: "ca. 1865",
        title: "Four men and a brush arbor",
        partLabel: "the new congregation",
        art: art(
          "m40178-church.jpg",
          "Illustration of a wooden church and a brush arbor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Organized ca. 1865",
            x: 32,
            y: 52,
            fact: "This African-American church was organized ca. 1865 when four men left Sandy Level Baptist Church, founded before the Revolution with both white and black members, to form their own congregation.",
          },
          {
            id: "arbor",
            label: "Rev. Joe Taylor",
            x: 74,
            y: 44,
            fact: "They elected Rev. Joe Taylor as their first pastor and held early services in a brush arbor nearby.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1907-1922",
        title: "From a log church to brick",
        partLabel: "the churchyard",
        art: art(
          "m40178-yard.jpg",
          "Illustration of a brick-veneer church and a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "frame",
            label: "Log, then frame, then brick",
            x: 32,
            y: 48,
            fact: "The first permanent church here, a log building, was replaced by a frame church 1907-1922, during the pastorate of Rev. T.H. McNeal. It was covered in brick veneer in 1941.",
          },
          {
            id: "renovated",
            label: "1964-1978",
            x: 74,
            y: 40,
            fact: "It was then extensively renovated 1964-1978, during the pastorate of Rev. A.J. Grove, Sr. The historic church cemetery dates to the 1880s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "ca. 1865",
        title: "Men who left to form the church",
        partLabel: "4 men",
        value: 4,
        unit: "men",
        meant:
          "What this meant: the marker says this African-American church was organized ca. 1865 when four men left Sandy Level Baptist Church to form their own congregation.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40178-church.jpg",
          "Illustration of a wooden church and a brush arbor. Not a historical photograph.",
        ),
        nowArt: art(
          "m40178-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church and a brush arbor, for the church the marker says was organized ca. 1865, with early services in a brush arbor nearby. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "ca. 1865",
            label: "Four men form their own congregation.",
            why: "The marker says this African-American church was organized ca. 1865 when four men left Sandy Level Baptist Church, founded before the Revolution with both white and black members, to form their own congregation. They elected Rev. Joe Taylor as their first pastor and held early services in a brush arbor nearby.",
          },
          {
            id: "cemetery",
            year: "The 1880s",
            label: "The historic church cemetery dates from these years.",
            why: "The marker says the historic church cemetery dates to the 1880s.",
          },
          {
            id: "frame",
            year: "1907",
            label: "A frame church replaces the log building.",
            why: "The marker says the first permanent church here, a log building, was replaced by a frame church 1907-1922, during the pastorate of Rev. T.H. McNeal.",
          },
          {
            id: "renovated",
            year: "1964",
            label: "The church is extensively renovated.",
            why: "The marker says it was covered in brick veneer in 1941, then extensively renovated 1964-1978, during the pastorate of Rev. A.J. Grove, Sr.",
          },
        ],
        ["renovated", "organized", "frame", "cemetery"],
      ),
      takeaway([
        "This African-American church was organized ca. 1865 when four men left Sandy Level Baptist Church, founded before the Revolution with both white and black members, to form their own congregation. They elected Rev. Joe Taylor as their first pastor and held early services in a brush arbor nearby.",
        "The first permanent church here, a log building, was replaced by a frame church 1907-1922, during the pastorate of Rev. T.H. McNeal. It was covered in brick veneer in 1941.",
        "It was then extensively renovated 1964-1978, during the pastorate of Rev. A.J. Grove, Sr. The historic church cemetery dates to the 1880s.",
      ]),
    ],
  ),
  lesson(
    "40-179",
    "One hundred acres for the fair",
    "State Fairgrounds timeline",
    [cited("40-179", "State Fairgrounds", "front and back")],
    [
      {
        kind: "scene",
        id: "early",
        kicker: "1856",
        title: "Founded, then suspended",
        partLabel: "the early fair",
        art: art(
          "m40179-fair.jpg",
          "Illustration of livestock pens, tents, and a fair crowd seen from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Founded in 1856",
            x: 32,
            y: 46,
            fact: "The S.C. State Fair was founded in 1856 by the State Agricultural Society. The fair was held at the fairgrounds on Elmwood Ave. near downtown Columbia 1856-1861, then suspended by the Civil War.",
          },
          {
            id: "revived",
            label: "Revived in 1869",
            x: 74,
            y: 40,
            fact: "The State Agricultural & Mechanical Society revived the fair in 1869; it stayed on Elmwood Ave. until 1903.",
          },
        ],
      },
      {
        kind: "scene",
        id: "grounds",
        kicker: "October 1904",
        title: "Held here every fall",
        partLabel: "these grounds",
        art: art(
          "m40179-grounds.jpg",
          "Illustration of open fairgrounds, a wheel, and a plain missile. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acres",
            label: "100 acres",
            x: 32,
            y: 52,
            fact: "The society acquired 100 acres here for its \"thoroughly modern\" fairgrounds. The first State Fair held at this location opened in October 1904. The S.C. State Fair, with exhibits and competitions, attractions and rides, and musical and other acts, has been held here every fall since 1904 except during World War I in 1918. Other events are held year-round.",
          },
          {
            id: "thursday",
            label: "Big Thursday and the rocket",
            x: 74,
            y: 44,
            fact: "A highlight from 1904 to 1959 was \"Big Thursday,\" the football game between the University of S.C. and Clemson University. The \"rocket\" near the North Gate, a U.S. Air Force missile given to the City of Columbia, has been an icon here since 1969.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1903",
        title: "Acres acquired for the fairgrounds",
        partLabel: "100 acres",
        value: 100,
        unit: "acres",
        meant:
          "What this meant: the marker says the society acquired 100 acres here in 1903 for its \"thoroughly modern\" fairgrounds.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40179-fair.jpg",
          "Illustration of livestock pens, tents, and a fair crowd seen from behind. Not a historical photograph.",
        ),
        nowArt: art(
          "m40179-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of livestock pens, tents, and a fair crowd seen from behind, for the S.C. State Fair the marker says was founded in 1856. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1856",
            label: "The S.C. State Fair is founded.",
            why: "The marker says the S.C. State Fair was founded in 1856 by the State Agricultural Society, and was held at the fairgrounds on Elmwood Ave. near downtown Columbia 1856-1861, then suspended by the Civil War.",
          },
          {
            id: "revived",
            year: "1869",
            label: "The fair is revived.",
            why: "The marker says the State Agricultural & Mechanical Society revived the fair in 1869; it stayed on Elmwood Ave. until 1903.",
          },
          {
            id: "opened",
            year: "October 1904",
            label: "The first State Fair at this location opens.",
            why: "The marker says the society acquired 100 acres here in 1903 for its \"thoroughly modern\" fairgrounds, and the first State Fair held at this location opened in October 1904.",
          },
          {
            id: "rocket",
            year: "1969",
            label: "The rocket near the North Gate is an icon.",
            why: "The marker says the fair has been held here every fall since 1904 except during World War I in 1918, that \"Big Thursday\" was a highlight from 1904 to 1959, and that the \"rocket\" near the North Gate has been an icon here since 1969.",
          },
        ],
        ["rocket", "founded", "opened", "revived"],
      ),
      takeaway([
        "The S.C. State Fair was founded in 1856 by the State Agricultural Society. The fair was held at the fairgrounds on Elmwood Ave. near downtown Columbia 1856-1861, then suspended by the Civil War. The State Agricultural & Mechanical Society revived the fair in 1869; it stayed on Elmwood Ave. until 1903.",
        "In 1903 the society acquired 100 acres here for its \"thoroughly modern\" fairgrounds. The first State Fair held at this location opened in October 1904. The S.C. State Fair, with exhibits and competitions, attractions and rides, and musical and other acts, has been held here every fall since 1904 except during World War I in 1918. Other events are held year-round.",
        "A highlight from 1904 to 1959 was \"Big Thursday,\" the football game between the University of S.C. and Clemson University. The \"rocket\" near the North Gate, a U.S. Air Force missile given to the City of Columbia, has been an icon here since 1969.",
      ]),
    ],
  ),
  lesson(
    "40-180",
    "The first black-owned bank in S.C.",
    "Victory Savings Bank timeline",
    [
      cited("40-180", "Victory Savings Bank", "front and back"),
      span(
        '"30 years" is 1985 minus 1955, the years the marker prints for this building.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "charter",
        kicker: "1921",
        title: "Chartered and opened",
        partLabel: "the bank",
        art: art(
          "m40180-bank.jpg",
          "Illustration of a brick bank building with a blank front. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Founded in 1921",
            x: 32,
            y: 48,
            fact: "Victory Savings Bank, founded in 1921, was the first, and for many years the only, black-owned bank in S.C.",
          },
          {
            id: "chartered",
            label: "1107 Washington St.",
            x: 74,
            y: 42,
            fact: "It was chartered by I.S. Joseph as president and I.S. Leevy and C.E. Stephenson as vice presidents, and opened at 1107 Washington St. in the heart of Columbia's black business district.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1955-1985",
        title: "This building, then Sumter Street",
        partLabel: "the street",
        art: art(
          "m40180-street.jpg",
          "Illustration of a business street of blank storefronts. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "building",
            label: "This building, then Sumter St.",
            x: 32,
            y: 50,
            fact: "It was in this building 1955-1985, then moved to Sumter St., where it became S.C. Community Bank in 1999. Dr. Henry D. Monteith, who became president in 1948, led the bank for many years.",
          },
          {
            id: "loans",
            label: "Loans and a 1954 case",
            x: 74,
            y: 40,
            fact: "His sister Modjeska Monteith Simkins, notable civil rights leader, held several positions here. This bank offered loans to blacks after widespread economic reprisals, many related to the Clarendon County school desegregation case Briggs v. Elliott, later included in the landmark Brown v. Board of Education case (1954).",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1955-1985",
        title: "Years in this building",
        partLabel: "30 years",
        value: 30,
        unit: "years",
        meant:
          "What this meant: 1985 comes 30 years after 1955. The marker says the bank was in this building 1955-1985.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40180-bank.jpg",
          "Illustration of a brick bank building with a blank front. Not a historical photograph.",
        ),
        nowArt: art(
          "m40180-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick bank building with a blank front, for Victory Savings Bank, which the marker says was founded in 1921 and opened at 1107 Washington St. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1921",
            label: "Victory Savings Bank is founded and opens.",
            why: "The marker says Victory Savings Bank, founded in 1921, was the first, and for many years the only, black-owned bank in S.C. It was chartered by I.S. Joseph as president and I.S. Leevy and C.E. Stephenson as vice presidents, and opened at 1107 Washington St. in the heart of Columbia's black business district.",
          },
          {
            id: "president",
            year: "1948",
            label: "Dr. Henry D. Monteith becomes president.",
            why: "The marker says Dr. Henry D. Monteith, who became president in 1948, led the bank for many years. His sister Modjeska Monteith Simkins, notable civil rights leader, held several positions here.",
          },
          {
            id: "building",
            year: "1955",
            label: "The bank is in this building.",
            why: "The marker says it was in this building 1955-1985.",
          },
          {
            id: "renamed",
            year: "1999",
            label: "It becomes S.C. Community Bank.",
            why: "The marker says it then moved to Sumter St., where it became S.C. Community Bank in 1999.",
          },
        ],
        ["renamed", "founded", "building", "president"],
      ),
      takeaway([
        "Victory Savings Bank, founded in 1921, was the first, and for many years the only, black-owned bank in S.C. It was chartered by I.S. Joseph as president and I.S. Leevy and C.E. Stephenson as vice presidents, and opened at 1107 Washington St. in the heart of Columbia's black business district.",
        "It was in this building 1955-1985, then moved to Sumter St., where it became S.C. Community Bank in 1999. Dr. Henry D. Monteith, who became president in 1948, led the bank for many years.",
        "His sister Modjeska Monteith Simkins, notable civil rights leader, held several positions here. This bank offered loans to blacks after widespread economic reprisals, many related to the Clarendon County school desegregation case Briggs v. Elliott, later included in the landmark Brown v. Board of Education case (1954).",
      ]),
    ],
  ),
];
