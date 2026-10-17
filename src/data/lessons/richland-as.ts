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

export const richlandLessonsAS: MarkerLesson[] = [
  lesson(
    "40-225",
    "A truck stop opened in 1940",
    "Columbia Truck Terminal timeline",
    [
      cited("40-225", "Columbia Truck Terminal", "front and back"),
      span(
        '"5 years" is 1955 minus 1950, the years the marker prints for the warehouse later used by Southeastern Freight Lines.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "terminal",
        kicker: "1940",
        title: "Opened as a truck stop",
        partLabel: "the terminal",
        art: art(
          "m40225-terminal.jpg",
          "Illustration of a two-story truck stop. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "Opened in 1940",
            x: 32,
            y: 48,
            fact: "This was the site of the Columbia Truck Terminal, a truck stop opened in 1940 by M.D. Hicklin, W.T. Cassels Sr., and C.L. Fuller Jr. Newspapers said it was the first such establishment in the city.",
          },
          {
            id: "building",
            label: "Station and hall",
            x: 74,
            y: 42,
            fact: "It included a service station and two-story building with sleeping quarters, restaurant, and dance hall. It no longer stands.",
          },
        ],
      },
      {
        kind: "scene",
        id: "trucks",
        kicker: "1934",
        title: "A chartered firm, then SEFL",
        partLabel: "the trucks",
        art: art(
          "m40225-trucks.jpg",
          "Illustration of freight trucks beside a warehouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "chartered",
            label: "Chartered in 1934",
            x: 32,
            y: 52,
            fact: "This is the original site of Southeastern Freight Lines (SEFL), a regional U.S. trucking company. Its roots go back to M.D. Hicklin Motor Trucker Inc., a firm chartered in 1934 that W.T. Cassels Sr. and C.L. Fuller Jr. acquired in 1945 and renamed Southern States Motor Lines.",
          },
          {
            id: "sefl",
            label: "1950 to 1955",
            x: 74,
            y: 40,
            fact: "The Terminal adjoined a warehouse first used by Hicklin’s trucking company and later by Southeastern Freight Lines (SEFL) from 1950 to 1955. The company split in 1950 at which time Cassels founded SEFL and continued to operate at this site. SEFL relocated to West Columbia in 1955.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1950 to 1955",
        title: "Years that warehouse use lasted",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1955 comes 5 years after 1950. The marker says the Terminal adjoined a warehouse later used by Southeastern Freight Lines (SEFL) from 1950 to 1955.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40225-terminal.jpg",
          "Illustration of a two-story truck stop. Not a historical photograph.",
        ),
        nowArt: art(
          "m40225-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-story truck stop, for the Columbia Truck Terminal the marker says opened in 1940. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "chartered",
            year: "1934",
            label: "M.D. Hicklin Motor Trucker Inc. is chartered.",
            why: "The marker says the roots of Southeastern Freight Lines go back to M.D. Hicklin Motor Trucker Inc., a firm chartered in 1934.",
          },
          {
            id: "opened",
            year: "1940",
            label: "The Columbia Truck Terminal opens.",
            why: "The marker says this truck stop was opened in 1940 by M.D. Hicklin, W.T. Cassels Sr., and C.L. Fuller Jr.",
          },
          {
            id: "acquired",
            year: "1945",
            label: "Cassels and Fuller acquire the firm and rename it.",
            why: "The marker says W.T. Cassels Sr. and C.L. Fuller Jr. acquired the firm in 1945 and renamed it Southern States Motor Lines.",
          },
          {
            id: "split",
            year: "1950",
            label: "The company splits and Cassels founds SEFL.",
            why: "The marker says the company split in 1950 at which time Cassels founded SEFL and continued to operate at this site. SEFL relocated to West Columbia in 1955.",
          },
        ],
        ["split", "chartered", "acquired", "opened"],
      ),
      takeaway([
        "This was the site of the Columbia Truck Terminal, a truck stop opened in 1940 by M.D. Hicklin, W.T. Cassels Sr., and C.L. Fuller Jr. It included a service station and two-story building with sleeping quarters, restaurant, and dance hall. Newspapers said it was the first such establishment in the city. It no longer stands.",
        "The Terminal adjoined a warehouse first used by Hicklin’s trucking company and later by Southeastern Freight Lines (SEFL) from 1950 to 1955. This is the original site of Southeastern Freight Lines (SEFL), a regional U.S. trucking company.",
        "Its roots go back to M.D. Hicklin Motor Trucker Inc., a firm chartered in 1934 that W.T. Cassels Sr. and C.L. Fuller Jr. acquired in 1945 and renamed Southern States Motor Lines. The company split in 1950 at which time Cassels founded SEFL and continued to operate at this site. SEFL relocated to West Columbia in 1955.",
      ]),
    ],
  ),
  lesson(
    "40-226",
    "Opened as early as 1908",
    "Bethel School timeline",
    [
      cited("40-226", "Bethel School", "front and back"),
      span(
        '"11 years" is 1967 minus 1956, the years the marker prints for the renaming for Annie Hanberry and the accreditation of Bethel High School.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1908",
        title: "Opened on church land",
        partLabel: "the school",
        art: art(
          "m40226-school.jpg",
          "Illustration of a small rural school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "As early as 1908",
            x: 32,
            y: 46,
            fact: "As early as 1908, Bethel School, also known as Blythewood Colored School, opened on land tradition says belonged to Bethel Baptist Church.",
          },
          {
            id: "rosenwald",
            label: "c.1920",
            x: 74,
            y: 56,
            fact: "In c.1920, the school moved into a two-teacher building built on this site with support from the Julis Rosenwald Fund.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1956",
        title: "New campuses, then a new name",
        partLabel: "the school yard",
        art: art(
          "m40226-yard.jpg",
          "Illustration of a school yard with frame and block buildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rooms",
            label: "Six-room buildings",
            x: 32,
            y: 50,
            fact: "It was later replaced by a six-room frame elementary school and a six-room concrete block building for high school grades. In the 1950s, new elementary and high school campuses and a gymnasium were built through the S.C. equalization program.",
          },
          {
            id: "renamed",
            label: "1956 to 1991",
            x: 74,
            y: 40,
            fact: "Bethel High School was accredited in 1956 and renamed for longtime teacher and principal Annie Hanberry in 1967. After district desegregation in 1970, the two campuses merged and became Bethel-Hanberry Junior High School. It became an elementary school in 1991.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1956 to 1967",
        title: "Years from accreditation to the renaming",
        partLabel: "11 years",
        value: 11,
        unit: "years",
        meant:
          "What this meant: 1967 comes 11 years after 1956. The marker says Bethel High School was accredited in 1956 and renamed for longtime teacher and principal Annie Hanberry in 1967.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40226-school.jpg",
          "Illustration of a small rural school. Not a historical photograph.",
        ),
        nowArt: art(
          "m40226-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small rural school, for Bethel School, which the marker says opened as early as 1908. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "1908",
            label: "Bethel School opens.",
            why: "The marker says that as early as 1908, Bethel School, also known as Blythewood Colored School, opened on land tradition says belonged to Bethel Baptist Church.",
          },
          {
            id: "moved",
            year: "c.1920",
            label: "The school moves into a two-teacher building on this site.",
            why: "The marker says in c.1920 the school moved into a two-teacher building built on this site with support from the Julis Rosenwald Fund.",
          },
          {
            id: "accredited",
            year: "1956",
            label: "Bethel High School is accredited.",
            why: "The marker says Bethel High School was accredited in 1956 and renamed for longtime teacher and principal Annie Hanberry in 1967.",
          },
          {
            id: "merged",
            year: "1970",
            label: "The two campuses merge.",
            why: "The marker says that after district desegregation in 1970, the two campuses merged and became Bethel-Hanberry Junior High School. It became an elementary school in 1991.",
          },
        ],
        ["merged", "opened", "accredited", "moved"],
      ),
      takeaway([
        "As early as 1908, Bethel School, also known as Blythewood Colored School, opened on land tradition says belonged to Bethel Baptist Church. In c.1920, the school moved into a two-teacher building built on this site with support from the Julis Rosenwald Fund.",
        "It was later replaced by a six-room frame elementary school and a six-room concrete block building for high school grades. In the 1950s, new elementary and high school campuses and a gymnasium were built through the S.C. equalization program.",
        "Bethel High School was accredited in 1956 and renamed for longtime teacher and principal Annie Hanberry in 1967. After district desegregation in 1970, the two campuses merged and became Bethel-Hanberry Junior High School. It became an elementary school in 1991.",
      ]),
    ],
  ),
  lesson(
    "40-227",
    "A burial ground on former farmland",
    "Palmetto Cemetery timeline",
    [cited("40-227", "Palmetto Cemetery", "front and back")],
    [
      {
        kind: "scene",
        id: "cemetery",
        kicker: "The 1920s",
        title: "Opened as a burial ground",
        partLabel: "the cemetery",
        art: art(
          "m40227-cemetery.jpg",
          "Illustration of a cemetery on open farmland. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "The 1920s",
            x: 32,
            y: 48,
            fact: "Palmetto Cemetery opened in the 1920s as a community burial ground for local African Americans. Sited on former farmland, the roughly 17-acre graveyard was developed by Black funeral director Willis C. Johnson (1892-1969) and white insurance agent David G. Ellison (1879-1960), who acquired title to the property in 1928.",
          },
          {
            id: "annexed",
            label: "Annexed in 1955",
            x: 74,
            y: 40,
            fact: "At that time the cemetery was located just outside the Town of Eau Claire, which was annexed by the City of Columbia in 1955.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gate",
        kicker: "1979",
        title: "Expanded, then an association",
        partLabel: "the gate",
        art: art(
          "m40227-gate.jpg",
          "Illustration of a cemetery gate and graves. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "graves",
            label: "Around 2,000 graves",
            x: 32,
            y: 54,
            fact: "Palmetto Cemetery was later expanded to the north and today includes around 2,000 graves with a variety of funerary art. By the mid-20th century it was one of the most prominent African American graveyards in Columbia.",
          },
          {
            id: "association",
            label: "Formed in 1979",
            x: 74,
            y: 42,
            fact: "Among those interred here are civil rights activists, educators, business figures, and other Black civic leaders. In 1979 families of those buried here formed the Palmetto Cemetery Assocation to manage the property. Burials continue to take place.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Today",
        title: "Graves in the cemetery",
        partLabel: "2,000 graves",
        value: 2000,
        unit: "graves",
        meant:
          "What this meant: the marker says Palmetto Cemetery was later expanded to the north and today includes around 2,000 graves with a variety of funerary art.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40227-cemetery.jpg",
          "Illustration of a cemetery on open farmland. Not a historical photograph.",
        ),
        nowArt: art(
          "m40227-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cemetery on open farmland, for the burial ground the marker says opened in the 1920s. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "the 1920s",
            label: "Palmetto Cemetery opens.",
            why: "The marker says Palmetto Cemetery opened in the 1920s as a community burial ground for local African Americans.",
          },
          {
            id: "title",
            year: "1928",
            label: "Johnson and Ellison acquire title.",
            why: "The marker says Willis C. Johnson (1892-1969) and David G. Ellison (1879-1960) acquired title to the property in 1928.",
          },
          {
            id: "annexed",
            year: "1955",
            label: "Eau Claire is annexed by the City of Columbia.",
            why: "The marker says that at that time the cemetery was located just outside the Town of Eau Claire, which was annexed by the City of Columbia in 1955.",
          },
          {
            id: "association",
            year: "1979",
            label: "Families form the Palmetto Cemetery Assocation.",
            why: "The marker says in 1979 families of those buried here formed the Palmetto Cemetery Assocation to manage the property.",
          },
        ],
        ["association", "opened", "annexed", "title"],
      ),
      takeaway([
        "Palmetto Cemetery opened in the 1920s as a community burial ground for local African Americans. Sited on former farmland, the roughly 17-acre graveyard was developed by Black funeral director Willis C. Johnson (1892-1969) and white insurance agent David G. Ellison (1879-1960), who acquired title to the property in 1928.",
        "At that time the cemetery was located just outside the Town of Eau Claire, which was annexed by the City of Columbia in 1955. Palmetto Cemetery was later expanded to the north and today includes around 2,000 graves with a variety of funerary art.",
        "By the mid-20th century it was one of the most prominent African American graveyards in Columbia. Among those interred here are civil rights activists, educators, business figures, and other Black civic leaders. In 1979 families of those buried here formed the Palmetto Cemetery Assocation to manage the property. Burials continue to take place.",
      ]),
    ],
  ),
  lesson(
    "40-228",
    "A congregation organized in 1868",
    "Pine Grove A.M.E. Church timeline",
    [cited("40-228", "Pine Grove A.M.E. Church", "front and back")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1868",
        title: "Organized, then a wood frame church",
        partLabel: "the church",
        art: art(
          "m40228-church.jpg",
          "Illustration of a wood-frame church and a brush arbor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Organized in 1868",
            x: 32,
            y: 46,
            fact: "This African Methodist Episcopal (A.M.E.) congregation organized in 1868. Tradition holds that members first met under a brush arbor.",
          },
          {
            id: "frame",
            label: "1875 and 1910",
            x: 74,
            y: 56,
            fact: "Church trustees acquired one acre of land at this site in 1875. Their first house of worship was a wood frame building. The current church was built in 1910, partially of wood salvaged from the original. It was later brick-veneered and expanded.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1938",
        title: "Members, a school, and a district",
        partLabel: "the church yard",
        art: art(
          "m40228-yard.jpg",
          "Illustration of a brick-veneered church and a small school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "members",
            label: "150 members",
            x: 32,
            y: 50,
            fact: "Pine Grove A.M.E. Church served African American residents of Peak and other nearby communities. The congregation had 150 members in 1938.",
          },
          {
            id: "district",
            label: "Until 1995",
            x: 74,
            y: 40,
            fact: "For a number of years the church was also the site of the wood frame Pine Grove Colored School, a public school for local Black children. Pine Grove was part of the A.M.E. Church’s Newberry District until 1995 when it joined the Columbia District.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1938",
        title: "Members in that year",
        partLabel: "150 members",
        value: 150,
        unit: "members",
        meant:
          "What this meant: the marker says the congregation had 150 members in 1938.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40228-church.jpg",
          "Illustration of a wood-frame church and a brush arbor. Not a historical photograph.",
        ),
        nowArt: art(
          "m40228-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wood-frame church and a brush arbor, for the congregation the marker says organized in 1868 and first met under a brush arbor. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1868",
            label: "The congregation is organized.",
            why: "The marker says this African Methodist Episcopal (A.M.E.) congregation organized in 1868. Tradition holds that members first met under a brush arbor.",
          },
          {
            id: "acre",
            year: "1875",
            label: "Trustees acquire one acre at this site.",
            why: "The marker says church trustees acquired one acre of land at this site in 1875. Their first house of worship was a wood frame building.",
          },
          {
            id: "built",
            year: "1910",
            label: "The current church is built.",
            why: "The marker says the current church was built in 1910, partially of wood salvaged from the original. It was later brick-veneered and expanded.",
          },
          {
            id: "district",
            year: "1995",
            label: "It joins the Columbia District.",
            why: "The marker says Pine Grove was part of the A.M.E. Church’s Newberry District until 1995 when it joined the Columbia District.",
          },
        ],
        ["district", "organized", "built", "acre"],
      ),
      takeaway([
        "This African Methodist Episcopal (A.M.E.) congregation organized in 1868. Tradition holds that members first met under a brush arbor. Church trustees acquired one acre of land at this site in 1875. Their first house of worship was a wood frame building.",
        "The current church was built in 1910, partially of wood salvaged from the original. It was later brick-veneered and expanded.",
        "Pine Grove A.M.E. Church served African American residents of Peak and other nearby communities. The congregation had 150 members in 1938. For a number of years the church was also the site of the wood frame Pine Grove Colored School, a public school for local Black children. Pine Grove was part of the A.M.E. Church’s Newberry District until 1995 when it joined the Columbia District.",
      ]),
    ],
  ),
];
