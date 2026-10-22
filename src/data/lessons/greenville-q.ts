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

export const greenvilleLessonsQ: MarkerLesson[] = [
  lesson(
    "23-73",
    "A graded school near this spot",
    "Fork Shoals School timeline",
    [
      cited("23-73", "Fork Shoals School", "front and back"),
      span(
        '"75 years" is 1952 minus 1877, the years the marker prints for Fork Shoals School in operation and the closure of Fork Shoals H.S.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1877",
        title: "A school by the Baptist church",
        partLabel: "the church school",
        art: art(
          "m2373-church.jpg",
          "Illustration of a wooden church beside a small school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "operation",
            label: "1877",
            x: 32,
            y: 52,
            fact: "Originally associated with Fork Shoals Baptist Church, Fork Shoals School was in operation by 1877.",
          },
          {
            id: "private",
            label: "1908",
            x: 74,
            y: 36,
            fact: "A private Fork Shoals H.S. was built on the eastern side of the Reedy River in 1908.",
          },
        ],
      },
      {
        kind: "scene",
        id: "frame",
        kicker: "1916",
        title: "A two-story frame building",
        partLabel: "the frame building",
        art: art(
          "m2373-frame.jpg",
          "Illustration of a two-story frame school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "graded",
            label: "1916",
            x: 32,
            y: 48,
            fact: "A two-story frame building was then built near this spot in 1916, replacing the church school, and housed a graded school. Expansion of this building allowed the H.S. to move here in 1922. By 1922 the H.S. had become an accredited public school.",
          },
          {
            id: "wpa",
            label: "1938",
            x: 74,
            y: 34,
            fact: "In 1938 WPA funds were used to build a new school complex. One of these buildings still stands north of the current school. Further consolidation led to the closure of Fork Shoals H.S. in 1952, after which the buildings were used as an elementary school. Two of three 1930s buildings were razed in 1998 when the current school was built.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1877-1952",
        title: "Years from the school to its closing",
        partLabel: "75 years",
        value: 75,
        unit: "years",
        meant:
          "What this meant: 1952 comes 75 years after 1877. That is the stretch from the year the marker gives for Fork Shoals School in operation to the year it gives for the closure of Fork Shoals H.S.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2373-frame.jpg",
          "Illustration of a two-story frame school. Not a historical photograph.",
        ),
        nowArt: art(
          "m2373-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-story frame school, for the building the marker says was built near this spot in 1916. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "operation",
            year: "1877",
            label: "Fork Shoals School is in operation.",
            why: "The marker says that, originally associated with Fork Shoals Baptist Church, Fork Shoals School was in operation by 1877.",
          },
          {
            id: "private",
            year: "1908",
            label: "A private Fork Shoals H.S. is built east of the Reedy River.",
            why: "The marker says a private Fork Shoals H.S. was built on the eastern side of the Reedy River in 1908.",
          },
          {
            id: "graded",
            year: "1916",
            label: "A two-story frame building replaces the church school.",
            why: "The marker says a two-story frame building was then built near this spot in 1916, replacing the church school, and housed a graded school.",
          },
          {
            id: "wpa",
            year: "1938",
            label: "WPA funds build a new school complex.",
            why: "The marker says that in 1938 WPA funds were used to build a new school complex.",
          },
          {
            id: "closed",
            year: "1952",
            label: "Fork Shoals H.S. closes.",
            why: "The marker says further consolidation led to the closure of Fork Shoals H.S. in 1952, after which the buildings were used as an elementary school.",
          },
        ],
        ["closed", "private", "wpa", "operation", "graded"],
      ),
      takeaway([
        "Originally associated with Fork Shoals Baptist Church, Fork Shoals School was in operation by 1877.",
        "A two-story frame building was then built near this spot in 1916, replacing the church school, and housed a graded school.",
        "Further consolidation led to the closure of Fork Shoals H.S. in 1952, after which the buildings were used as an elementary school.",
      ]),
    ],
  ),
  lesson(
    "23-74",
    "Forty workers and a 1967 strike",
    "Claussen's Bakery timeline",
    [cited("23-74", "Claussen's Bakery", "front and back")],
    [
      {
        kind: "scene",
        id: "bakery",
        kicker: "1930",
        title: "One of two surviving bakeries",
        partLabel: "the bakery",
        art: art(
          "m2374-bakery.jpg",
          "Illustration of a two-story industrial bakery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "building",
            label: "Two bakeries",
            x: 32,
            y: 46,
            fact: "This two-story trapezoidal plan industrial building is one of two surviving Claussen's bakeries in S.C.",
          },
          {
            id: "loaves",
            label: "1930",
            x: 74,
            y: 34,
            fact: "Built in 1930, the bakery initially employed forty workers who produced 45,000 loaves of bread a day.",
          },
        ],
      },
      {
        kind: "scene",
        id: "hall",
        kicker: "1967",
        title: "A strike, then a speech",
        partLabel: "the strike",
        art: art(
          "m2374-hall.jpg",
          "Illustration of a crowd inside a plain auditorium. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "strike",
            label: "February 1967",
            x: 32,
            y: 56,
            fact: "In February 1967 twenty-two African American employees, including organizer and spokesman Horace Butler Sr., who would later serve as the first African American foreman at the bakery, went on strike to protest discrimination in hiring and promotion practices.",
          },
          {
            id: "speech",
            label: "April 30, 1967",
            x: 74,
            y: 38,
            fact: "The Greenville branch of the NAACP, led by Rev. D.C. Francis, called for a boycott of Claussen baked goods in protest. Jesse Jackson, then working as director of SCLC’s Operation Breadbasket, helped bring Rev. Martin Luther King Jr. to Greenville. On April 30, 1967 King spoke to a crowd of 3,500 at Greenville Memorial Auditorium. King preached economic justice and support for the Clausen workers who “had been called boys...then they stood up like men.”",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1930",
        title: "Loaves of bread a day",
        partLabel: "45,000 loaves",
        value: 45000,
        unit: "loaves",
        meant:
          "What this meant: the marker says that, built in 1930, the bakery initially employed forty workers who produced 45,000 loaves of bread a day.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2374-bakery.jpg",
          "Illustration of a two-story industrial bakery. Not a historical photograph.",
        ),
        nowArt: art(
          "m2374-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-story industrial bakery, for the building the marker says was built in 1930. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1930",
            label: "The bakery is built.",
            why: "The marker says this two-story trapezoidal plan industrial building was built in 1930, and that the bakery initially employed forty workers who produced 45,000 loaves of bread a day.",
          },
          {
            id: "strike",
            year: "February 1967",
            label: "Twenty-two employees go on strike.",
            why: "The marker says that in February 1967 twenty-two African American employees, including organizer and spokesman Horace Butler Sr., went on strike to protest discrimination in hiring and promotion practices.",
          },
          {
            id: "boycott",
            year: "1967",
            label: "The NAACP calls for a boycott.",
            why: "The marker says the Greenville branch of the NAACP, led by Rev. D.C. Francis, called for a boycott of Claussen baked goods in protest. Jesse Jackson, then working as director of SCLC’s Operation Breadbasket, helped bring Rev. Martin Luther King Jr. to Greenville.",
          },
          {
            id: "speech",
            year: "April 30, 1967",
            label: "King speaks to a crowd of 3,500.",
            why: "The marker says that on April 30, 1967 King spoke to a crowd of 3,500 at Greenville Memorial Auditorium. King preached economic justice and support for the Clausen workers who “had been called boys...then they stood up like men.”",
          },
        ],
        ["speech", "built", "boycott", "strike"],
      ),
      takeaway([
        "Built in 1930, the bakery initially employed forty workers who produced 45,000 loaves of bread a day.",
        "In February 1967 twenty-two African American employees, including organizer and spokesman Horace Butler Sr., who would later serve as the first African American foreman at the bakery, went on strike to protest discrimination in hiring and promotion practices.",
        "On April 30, 1967 King spoke to a crowd of 3,500 at Greenville Memorial Auditorium.",
      ]),
    ],
  ),
  lesson(
    "23-75",
    "A mill cemetery named for Rose",
    "Rose Hill Cemetery timeline",
    [
      cited("23-75", "Rose Hill Cemetery", "front and back"),
      span(
        '"101 years" is 1977 minus 1876, the years the marker prints for the cemetery established by the Piedmont Manufacturing Co. and the mill’s closure.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1876",
        title: "Piedmont Cemetery",
        partLabel: "the mill cemetery",
        art: art(
          "m2375-cemetery.jpg",
          "Illustration of a textile mill beside a small cemetery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1876",
            x: 32,
            y: 44,
            fact: "Rose Hill Cemetery was established in 1876 by the Piedmont Manufacturing Co., an early textile mill that began production in that same year. Originally known as Piedmont Cemetery, the earliest known burial dates to 1877.",
          },
          {
            id: "served",
            label: "1876-1977",
            x: 74,
            y: 32,
            fact: "The cemetery served as final resting place for mill workers and their families, as well as members of the broader community, from 1876 until the mill’s closure in 1977.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gift",
        kicker: "1922",
        title: "Land given for burials",
        partLabel: "the 1922 gift",
        art: art(
          "m2375-stones.jpg",
          "Illustration of blank headstones on a wooded hill. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acres",
            label: "1922",
            x: 32,
            y: 54,
            fact: "The cemetery expanded in 1922 when G.W. McAbee donated three-and-a-half acres of land for burials. Oral tradition holds that the cemetery was named “Rose Hill” in honor of McAbee’s daughter, Rose May McAbee Norris, who died in 1922 and is buried here.",
          },
          {
            id: "title",
            label: "1995",
            x: 74,
            y: 40,
            fact: "Other notable burials include local newspaper editor and mill supervisor Albert Smith Rowell. In 1995 title transferred to the Rose Hill Cemetery Association, which continues to maintain the cemetery.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1876-1977",
        title: "Years until the mill closed",
        partLabel: "101 years",
        value: 101,
        unit: "years",
        meant:
          "What this meant: 1977 comes 101 years after 1876. That is the stretch from the year the marker gives for the cemetery established by the Piedmont Manufacturing Co. to the year it gives for the mill’s closure.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2375-cemetery.jpg",
          "Illustration of a textile mill beside a small cemetery. Not a historical photograph.",
        ),
        nowArt: art(
          "m2375-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a textile mill beside a cemetery, for the cemetery the marker says the Piedmont Manufacturing Co. established in 1876. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "established",
            year: "1876",
            label: "The Piedmont Manufacturing Co. establishes the cemetery.",
            why: "The marker says Rose Hill Cemetery was established in 1876 by the Piedmont Manufacturing Co., an early textile mill that began production in that same year. It was originally known as Piedmont Cemetery.",
          },
          {
            id: "burial",
            year: "1877",
            label: "The earliest known burial.",
            why: "The marker says the earliest known burial dates to 1877.",
          },
          {
            id: "gift",
            year: "1922",
            label: "G.W. McAbee donates land for burials.",
            why: "The marker says the cemetery expanded in 1922 when G.W. McAbee donated three-and-a-half acres of land for burials. Oral tradition holds that it was named “Rose Hill” in honor of his daughter, Rose May McAbee Norris, who died in 1922 and is buried here.",
          },
          {
            id: "closure",
            year: "1977",
            label: "The mill closes.",
            why: "The marker says the cemetery served as a final resting place from 1876 until the mill’s closure in 1977.",
          },
          {
            id: "transfer",
            year: "1995",
            label: "Title transfers to the cemetery association.",
            why: "The marker says that in 1995 title transferred to the Rose Hill Cemetery Association, which continues to maintain the cemetery.",
          },
        ],
        ["transfer", "burial", "closure", "established", "gift"],
      ),
      takeaway([
        "Rose Hill Cemetery was established in 1876 by the Piedmont Manufacturing Co., an early textile mill that began production in that same year.",
        "The cemetery served as final resting place for mill workers and their families, as well as members of the broader community, from 1876 until the mill’s closure in 1977.",
        "In 1995 title transferred to the Rose Hill Cemetery Association, which continues to maintain the cemetery.",
      ]),
    ],
  ),
  lesson(
    "23-76",
    "A neighborhood south of Allen School",
    "Little Texas timeline",
    [cited("23-76", "Little Texas", "front and back")],
    [
      {
        kind: "scene",
        id: "lots",
        kicker: "1869",
        title: "Lots sold after a foreclosure",
        partLabel: "the first lots",
        art: art(
          "m2376-lots.jpg",
          "Illustration of small wooden houses on narrow lots. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sale",
            label: "1869",
            x: 32,
            y: 50,
            fact: "William E. Earle acquired much of the land now bounded by Beattie Pl., N. Church, Academy, and E. North Sts. at a foreclosure sale in 1869. He subdivided the land and sold the parcels. Much of the land was purchased by African Americans, including Milton Brooks, a 30-year-old laborer who bought the first lot in 1872.",
          },
          {
            id: "growth",
            label: "1876",
            x: 74,
            y: 36,
            fact: "The community grew from about a dozen families in 1876 to become a neighborhood of more than 75 houses by the 1920s. Little Texas developed just south of Allen School.",
          },
        ],
      },
      {
        kind: "scene",
        id: "school",
        kicker: "1936",
        title: "Allen School, then condemned homes",
        partLabel: "Allen School",
        art: art(
          "m2376-school.jpg",
          "Illustration of a wooden school beside modest houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "allen",
            label: "1936",
            x: 32,
            y: 46,
            fact: "Allen School, which had its origins as a Freedmen’s school in the 1860s, was a fixture of the neighborhood until a new Allen School was built on Stone Ave. in 1936. Memorial Auditorium was built adjacent to Little Texas in 1958.",
          },
          {
            id: "condemned",
            label: "1971",
            x: 74,
            y: 34,
            fact: "As the city continued to expand, Little Texas would succumb to the pressures of urban development. In 1971 the city condemned 65 homes in order to use the land for future development, effectively marking the end of Little Texas.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1971",
        title: "Homes the city condemned",
        partLabel: "65 homes",
        value: 65,
        unit: "homes",
        meant:
          "What this meant: the marker says that in 1971 the city condemned 65 homes in order to use the land for future development, effectively marking the end of Little Texas.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2376-lots.jpg",
          "Illustration of small wooden houses on narrow lots. Not a historical photograph.",
        ),
        nowArt: art(
          "m2376-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of small wooden houses on narrow lots, for the neighborhood the marker says grew on land William E. Earle sold. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "freedmen",
            year: "1860s",
            label: "Allen School begins as a Freedmen’s school.",
            why: "The marker says Allen School had its origins as a Freedmen’s school in the 1860s.",
          },
          {
            id: "sale",
            year: "1869",
            label: "William E. Earle buys the land at a foreclosure sale.",
            why: "The marker says William E. Earle acquired much of the land now bounded by Beattie Pl., N. Church, Academy, and E. North Sts. at a foreclosure sale in 1869. He subdivided the land and sold the parcels.",
          },
          {
            id: "brooks",
            year: "1872",
            label: "Milton Brooks buys the first lot.",
            why: "The marker says much of the land was purchased by African Americans, including Milton Brooks, a 30-year-old laborer who bought the first lot in 1872.",
          },
          {
            id: "growth",
            year: "1876",
            label: "About a dozen families live here.",
            why: "The marker says the community grew from about a dozen families in 1876 to become a neighborhood of more than 75 houses by the 1920s.",
          },
          {
            id: "allen",
            year: "1936",
            label: "A new Allen School is built on Stone Ave.",
            why: "The marker says Allen School was a fixture of the neighborhood until a new Allen School was built on Stone Ave. in 1936.",
          },
          {
            id: "condemned",
            year: "1971",
            label: "The city condemns 65 homes.",
            why: "The marker says that in 1971 the city condemned 65 homes in order to use the land for future development, effectively marking the end of Little Texas.",
          },
        ],
        ["condemned", "brooks", "freedmen", "allen", "sale", "growth"],
      ),
      takeaway([
        "William E. Earle acquired much of the land now bounded by Beattie Pl., N. Church, Academy, and E. North Sts. at a foreclosure sale in 1869.",
        "The community grew from about a dozen families in 1876 to become a neighborhood of more than 75 houses by the 1920s.",
        "In 1971 the city condemned 65 homes in order to use the land for future development, effectively marking the end of Little Texas.",
      ]),
    ],
  ),
];
