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

export const darlingtonLessonsM: MarkerLesson[] = [
  lesson(
    "16-53",
    "The first rural fire department in this county",
    "Lydia Rural Fire Dept. timeline",
    [cited("16-53", "Lydia Rural Fire Dept.", "front")],
    [
      {
        kind: "scene",
        id: "store",
        kicker: "1954",
        title: "Organized after three houses burned",
        partLabel: "the organizers",
        art: art(
          "m1653-store.jpg",
          "Illustration of a rural store and gas pumps. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1954",
            x: 32,
            y: 46,
            fact: "The Lydia Rural Fire Department, the first rural fire department in this county, was organized in 1954 after fires destroyed three houses in less than a month.",
          },
          {
            id: "bass",
            label: "E. Gay Bass",
            x: 74,
            y: 40,
            fact: "Its organizers met at the store and gas station owned by E. Gay Bass (1913-1997).",
          },
        ],
      },
      {
        kind: "scene",
        id: "station",
        kicker: "By mid-1955",
        title: "A charter, a station, and two trucks",
        partLabel: "the station",
        art: art(
          "m1653-trucks.jpg",
          "Illustration of a small fire station and two trucks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "charter",
            label: "By mid-1955",
            x: 32,
            y: 50,
            fact: "By mid-1955 the department had received a charter, built a fire station, and bought two trucks.",
          },
          {
            id: "chief",
            label: "23 years",
            x: 74,
            y: 42,
            fact: "Bass, its first fire chief, served 23 years.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "First fire chief",
        title: "Years Bass served as chief",
        partLabel: "23 years",
        value: 23,
        unit: "years",
        meant:
          "What this meant: the marker says Bass, its first fire chief, served 23 years.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1653-store.jpg",
          "Illustration of a rural store and gas pumps. Not a historical photograph.",
        ),
        nowArt: art(
          "m1653-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a rural store and gas pumps, for the store and gas station where the marker says the organizers met. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "early",
            year: "1913",
            label: "The years printed for E. Gay Bass begin.",
            why: "The marker prints E. Gay Bass (1913-1997) and says the organizers met at the store and gas station he owned.",
          },
          {
            id: "organized",
            year: "1954",
            label: "The department is organized after three houses burn.",
            why: "The marker says the Lydia Rural Fire Department, the first rural fire department in this county, was organized in 1954 after fires destroyed three houses in less than a month.",
          },
          {
            id: "charter",
            year: "By mid-1955",
            label: "It receives a charter, a station, and two trucks.",
            why: "The marker says that by mid-1955 the department had received a charter, built a fire station, and bought two trucks.",
          },
          {
            id: "later",
            year: "1997",
            label: "The years printed for E. Gay Bass end.",
            why: "The marker prints 1997 as the later year for E. Gay Bass (1913-1997).",
          },
        ],
        ["charter", "later", "early", "organized"],
      ),
      takeaway([
        "The Lydia Rural Fire Department, the first rural fire department in this county, was organized in 1954 after fires destroyed three houses in less than a month.",
        "Its organizers met at the store and gas station owned by E. Gay Bass (1913-1997).",
        "By mid-1955 the department had received a charter, built a fire station, and bought two trucks. Bass, its first fire chief, served 23 years.",
      ]),
    ],
  ),
  lesson(
    "16-54",
    "The first African American cemetery in Darlington",
    "Darlington Memorial Cemetery timeline",
    [cited("16-54", "Darlington Memorial Cemetery", "front and back")],
    [
      {
        kind: "scene",
        id: "grounds",
        kicker: "1890",
        title: "A five-acre tract for Macedonia Baptist",
        partLabel: "the cemetery",
        art: art(
          "m1654-grounds.jpg",
          "Illustration of a cemetery with unlettered stones. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "laid",
            label: "1890",
            x: 32,
            y: 48,
            fact: "This cemetery, established in 1890, was originally a five-acre tract when it was laid out as the cemetery for the nearby Macedonia Baptist Church. The first African American cemetery in Darlington, it includes about 1,900 graves dating from the late 19th century to the present.",
          },
          {
            id: "churches",
            label: "1946",
            x: 74,
            y: 40,
            fact: "In 1946 Bethel A.M.E. Church and St. James Methodist Church, both nearby, established their own cemeteries here as well.",
          },
        ],
      },
      {
        kind: "scene",
        id: "buried",
        kicker: "Buried here",
        title: "Brockenton, Deas, and Reese",
        partLabel: "the persons",
        art: art(
          "m1654-stones.jpg",
          "Illustration of unlettered graves and simple houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "persons",
            label: "Prominent persons",
            x: 32,
            y: 54,
            fact: "Among the prominent persons buried here are Rev. Isaac Brockenton (1829-1908), the founding pastor of Macedonia Baptist Church; Edmund H. Deas (1855-1915), prominent Darlington County politician; and Lawrence Reese (1864-1915), a self-taught designer and master craftsman who designed and built several houses on West Broad Street.",
          },
          {
            id: "register",
            label: "2005",
            x: 74,
            y: 38,
            fact: "This cemetery was listed in the National Register of Historic Places in 2005.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The cemetery",
        title: "Graves the marker counts",
        partLabel: "about 1,900 graves",
        value: 1900,
        unit: "graves",
        meant:
          'What this meant: the marker says it includes about 1,900 graves dating from the late 19th century to the present. "About" stays the marker\'s word.',
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1654-grounds.jpg",
          "Illustration of a cemetery with unlettered stones. Not a historical photograph.",
        ),
        nowArt: art(
          "m1654-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cemetery with unlettered stones, for the cemetery the marker says was established in 1890. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "laid",
            year: "1890",
            label: "The cemetery is laid out for Macedonia Baptist Church.",
            why: "The marker says this cemetery, established in 1890, was originally a five-acre tract when it was laid out as the cemetery for the nearby Macedonia Baptist Church.",
          },
          {
            id: "pastor",
            year: "1908",
            label: "The years printed for Rev. Isaac Brockenton end.",
            why: "The marker lists Rev. Isaac Brockenton (1829-1908), the founding pastor of Macedonia Baptist Church, among the prominent persons buried here.",
          },
          {
            id: "churches",
            year: "1946",
            label: "Two nearby churches establish cemeteries here.",
            why: "The marker says that in 1946 Bethel A.M.E. Church and St. James Methodist Church, both nearby, established their own cemeteries here as well.",
          },
          {
            id: "register",
            year: "2005",
            label: "The cemetery is listed in the National Register.",
            why: "The marker says this cemetery was listed in the National Register of Historic Places in 2005.",
          },
        ],
        ["churches", "pastor", "register", "laid"],
      ),
      takeaway([
        "This cemetery, established in 1890, was originally a five-acre tract when it was laid out as the cemetery for the nearby Macedonia Baptist Church.",
        "The first African American cemetery in Darlington, it includes about 1,900 graves dating from the late 19th century to the present. In 1946 Bethel A.M.E. Church and St. James Methodist Church, both nearby, established their own cemeteries here as well.",
        "Among the prominent persons buried here are Rev. Isaac Brockenton (1829-1908), the founding pastor of Macedonia Baptist Church; Edmund H. Deas (1855-1915), prominent Darlington County politician; and Lawrence Reese (1864-1915), a self-taught designer and master craftsman who designed and built several houses on West Broad Street. This cemetery was listed in the National Register of Historic Places in 2005.",
      ]),
    ],
  ),
  lesson(
    "16-55",
    "A carriage factory, then a house in Springville",
    "John L. Hart House timeline",
    [
      cited("16-55", "John L. Hart House", "front and back"),
      span(
        '"39 years" is 1864 minus 1825, the years the marker prints for John Lide Hart (1825-1864).',
      ),
    ],
    [
      {
        kind: "scene",
        id: "factory",
        kicker: "1851",
        title: "Carriage factories in Hartsville and Darlington",
        partLabel: "the factories",
        art: art(
          "m1655-carriage.jpg",
          "Illustration of a carriage workshop and harness. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "hartsville",
            label: "1851",
            x: 32,
            y: 46,
            fact: "This house was built ca. 1856 for John Lide Hart (1825-1864), merchant and Confederate officer. Hart, who lived in Hartsville, named for his father Thomas E. Hart, founded a carriage and harness factory there in 1851.",
          },
          {
            id: "shy",
            label: "1853",
            x: 74,
            y: 56,
            fact: "In 1853 he and partner William Shy founded Hart & Shy, a carriage factory in Darlington. Debts forced Hart to sell out and move here to Springville in 1855-56.",
          },
        ],
      },
      {
        kind: "scene",
        id: "service",
        kicker: "1861",
        title: "Sergeant in the Wilds Rifles",
        partLabel: "the officer",
        art: art(
          "m1655-house.jpg",
          "Illustration of a plain mid-century house and yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rifles",
            label: "1861",
            x: 32,
            y: 44,
            fact: "Hart was a member of the Darlington District Agricultural Society and a captain in the antebellum militia. In 1861 he joined the Confederate army as a sergeant in the “Wilds Rifles,” later Co. B, 21st S.C. Infantry.",
          },
          {
            id: "killed",
            label: "May 16, 1864",
            x: 74,
            y: 38,
            fact: "Hart, later promoted to lieutenant, was killed at Drewry’s Bluff, Va., May 16, 1864. This house was listed in the National Register of Historic Places in 1985.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1825-1864",
        title: "Years the marker prints for John Lide Hart",
        partLabel: "39 years",
        value: 39,
        unit: "years",
        meant:
          "What this meant: 1864 comes 39 years after 1825. That is the stretch the marker prints for John Lide Hart (1825-1864).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1655-carriage.jpg",
          "Illustration of a carriage workshop and harness. Not a historical photograph.",
        ),
        nowArt: art(
          "m1655-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a carriage workshop and harness, for the carriage and harness factory the marker says Hart founded in Hartsville in 1851. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "factory",
            year: "1851",
            label: "He founds a carriage and harness factory in Hartsville.",
            why: "The marker says Hart, who lived in Hartsville, named for his father Thomas E. Hart, founded a carriage and harness factory there in 1851.",
          },
          {
            id: "partnership",
            year: "1853",
            label: "He and William Shy found Hart & Shy in Darlington.",
            why: "The marker says that in 1853 he and partner William Shy founded Hart & Shy, a carriage factory in Darlington.",
          },
          {
            id: "move",
            year: "1855-56",
            label: "Debts force him to sell out and move to Springville.",
            why: "The marker says debts forced Hart to sell out and move here to Springville in 1855-56. This house was built ca. 1856 for John Lide Hart (1825-1864), merchant and Confederate officer.",
          },
          {
            id: "killed",
            year: "May 16, 1864",
            label: "He is killed at Drewry’s Bluff.",
            why: "The marker says Hart, later promoted to lieutenant, was killed at Drewry’s Bluff, Va., May 16, 1864.",
          },
        ],
        ["move", "killed", "factory", "partnership"],
      ),
      takeaway([
        "This house was built ca. 1856 for John Lide Hart (1825-1864), merchant and Confederate officer. Hart, who lived in Hartsville, named for his father Thomas E. Hart, founded a carriage and harness factory there in 1851.",
        "In 1853 he and partner William Shy founded Hart & Shy, a carriage factory in Darlington. Debts forced Hart to sell out and move here to Springville in 1855-56.",
        "In 1861 he joined the Confederate army as a sergeant in the “Wilds Rifles,” later Co. B, 21st S.C. Infantry. Hart, later promoted to lieutenant, was killed at Drewry’s Bluff, Va., May 16, 1864.",
      ]),
    ],
  ),
  lesson(
    "16-56",
    "A wraparound rain porch",
    "John Westfield Lide House timeline",
    [
      cited("16-56", "John Westfield Lide House", "front and back"),
      span(
        '"64 years" is 1858 minus 1794, the years the marker prints for John Westfield Lide (1794-1858).',
      ),
    ],
    [
      {
        kind: "scene",
        id: "planter",
        kicker: "1809",
        title: "Third graduating class at S.C. College",
        partLabel: "the planter",
        art: art(
          "m1656-fields.jpg",
          "Illustration of open fields and a distant house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "college",
            label: "1809",
            x: 32,
            y: 42,
            fact: "This Greek Revival house was built ca. 1840 for John Westfield Lide (1794-1858), planter and state representative. Lide, the son of Maj. Robert Lide and Mary Westfield Holloway Lide, was a member of the third graduating class at S.C. College (now the University of S.C) in 1809.",
          },
          {
            id: "assembly",
            label: "1822-25",
            x: 74,
            y: 56,
            fact: "He returned to Darlington District, became a planter, and expanded his holdings in the area. Lide represented Darlington District in the S.C. House of Representatives 1822-25, and was later commissioner of public buildings and commissioner to approve public securities.",
          },
        ],
      },
      {
        kind: "scene",
        id: "porch",
        kicker: "ca. 1840",
        title: "Gothic Revival and Italianate details",
        partLabel: "the house",
        art: art(
          "m1656-porch.jpg",
          "Illustration of a columned house with a wraparound porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "porch",
            label: "Rain porch",
            x: 32,
            y: 48,
            fact: "This house features an unusual wraparound rain porch as well as Gothic Revival and Italianate architectural elements.",
          },
          {
            id: "listed",
            label: "1985",
            x: 74,
            y: 36,
            fact: "It was listed in the National Register of Historic Places in 1985.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1794-1858",
        title: "Years the marker prints for John Westfield Lide",
        partLabel: "64 years",
        value: 64,
        unit: "years",
        meant:
          "What this meant: 1858 comes 64 years after 1794. That is the stretch the marker prints for John Westfield Lide (1794-1858).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1656-fields.jpg",
          "Illustration of open fields and a distant house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1656-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of open fields and a distant house, for the planter the marker says returned to Darlington District and expanded his holdings. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "college",
            year: "1809",
            label: "He is in the third graduating class at S.C. College.",
            why: "The marker says Lide, the son of Maj. Robert Lide and Mary Westfield Holloway Lide, was a member of the third graduating class at S.C. College (now the University of S.C) in 1809.",
          },
          {
            id: "assembly",
            year: "1822-25",
            label: "He represents Darlington District in the S.C. House.",
            why: "The marker says Lide represented Darlington District in the S.C. House of Representatives 1822-25, and was later commissioner of public buildings and commissioner to approve public securities.",
          },
          {
            id: "built",
            year: "ca. 1840",
            label: "The Greek Revival house is built.",
            why: "The marker says this Greek Revival house was built ca. 1840 for John Westfield Lide (1794-1858), planter and state representative.",
          },
          {
            id: "listed",
            year: "1985",
            label: "The house is listed in the National Register.",
            why: "The marker says it was listed in the National Register of Historic Places in 1985.",
          },
        ],
        ["listed", "assembly", "built", "college"],
      ),
      takeaway([
        "This Greek Revival house was built ca. 1840 for John Westfield Lide (1794-1858), planter and state representative. Lide, the son of Maj. Robert Lide and Mary Westfield Holloway Lide, was a member of the third graduating class at S.C. College (now the University of S.C) in 1809.",
        "He returned to Darlington District, became a planter, and expanded his holdings in the area. Lide represented Darlington District in the S.C. House of Representatives 1822-25, and was later commissioner of public buildings and commissioner to approve public securities.",
        "This house features an unusual wraparound rain porch as well as Gothic Revival and Italianate architectural elements. It was listed in the National Register of Historic Places in 1985.",
      ]),
    ],
  ),
];
