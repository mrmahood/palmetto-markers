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

export const greenvilleLessonsJ: MarkerLesson[] = [
  lesson(
    "23-45",
    "Built in 1928-29 for $7,200",
    "Fountain Inn Rosenwald School timeline",
    [cited("23-45", "Fountain Inn Rosenwald School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1928-29",
        title: "A frame seven-room school",
        partLabel: "the first school",
        art: art(
          "m2345-school.jpg",
          "Illustration of a frame schoolhouse with a small porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "first",
            label: "1928-29",
            x: 32,
            y: 52,
            fact: "The first school, a frame seven-room elementary school for grades 1-7, was a Rosenwald school, one of 500 rural schools in S.C. funded in part by the Julius Rosenwald Fund from 1917 to 1932. It was built in 1928-29 at a cost of $7,200.",
          },
          {
            id: "complex",
            label: "1928 to 1942",
            x: 74,
            y: 36,
            fact: "The Fountain Inn Rosenwald School, also known as the Fountain Inn Colored School, was a complex of several buildings built here from 1928 to 1942.",
          },
        ],
      },
      {
        kind: "scene",
        id: "teacherage",
        kicker: "1935",
        title: "A teacherage for the principal",
        partLabel: "the teacherage",
        art: art(
          "m2345-teacherage.jpg",
          "Illustration of a small frame house beside a schoolyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "high",
            label: "1930",
            x: 32,
            y: 48,
            fact: "The Fountain Inn Colored High School, a frame three-room high school for grades 8-11, was built in 1930. The high school closed in 1954, and the elementary school closed in 1960.",
          },
          {
            id: "standing",
            label: "1935",
            x: 74,
            y: 62,
            fact: "A frame teacherage was built in 1935 for principal Gerard A. Anderson, and by 1942 this complex included a library, gymnasium, and three new classrooms. The 1935 teacherage is the only building standing; the rest were demolished in 2000.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1928-29",
        title: "What the first school cost",
        partLabel: "7,200 dollars",
        value: 7200,
        unit: "dollars",
        meant:
          "What this meant: the marker says the first school was built in 1928-29 at a cost of $7,200.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2345-school.jpg",
          "Illustration of a frame schoolhouse with a small porch. Not a historical photograph.",
        ),
        nowArt: art(
          "m2345-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame schoolhouse, for the seven-room elementary school the marker says was built in 1928-29. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1928",
            label: "The first school is built here.",
            why: "The marker says the first school, a frame seven-room elementary school for grades 1-7, was built in 1928-29 at a cost of $7,200. The complex was built here from 1928 to 1942.",
          },
          {
            id: "highschool",
            year: "1930",
            label: "A three-room high school is built.",
            why: "The marker says the Fountain Inn Colored High School, a frame three-room high school for grades 8-11, was built in 1930.",
          },
          {
            id: "home",
            year: "1935",
            label: "A teacherage is built for the principal.",
            why: "The marker says a frame teacherage was built in 1935 for principal Gerard A. Anderson, and by 1942 this complex included a library, gymnasium, and three new classrooms.",
          },
          {
            id: "closed",
            year: "1954",
            label: "The high school closes.",
            why: "The marker says the high school closed in 1954, and the elementary school closed in 1960.",
          },
        ],
        ["closed", "built", "home", "highschool"],
      ),
      takeaway([
        "The Fountain Inn Rosenwald School, also known as the Fountain Inn Colored School, was a complex of several buildings built here from 1928 to 1942.",
        "The first school, a frame seven-room elementary school for grades 1-7, was a Rosenwald school, one of 500 rural schools in S.C. funded in part by the Julius Rosenwald Fund from 1917 to 1932.",
        "The 1935 teacherage is the only building standing; the rest were demolished in 2000.",
      ]),
    ],
  ),
  lesson(
    "23-46",
    "Butler’s Crossroads on the Laurens road",
    "Mauldin timeline",
    [
      cited("23-46", "Mauldin", "front and back"),
      span(
        '"67 years" is 1953 minus 1886, the years the marker prints for the frame passenger and freight depot.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "crossroads",
        kicker: "1853",
        title: "A tract at the crossroads",
        partLabel: "the crossroads",
        art: art(
          "m2346-crossroads.jpg",
          "Illustration of a dirt crossroads and a small frame depot. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "butler",
            label: "1853",
            x: 32,
            y: 54,
            fact: "This area was settled soon after the Revolution, and a community grew up here on the road from Greenville to Laurens. It was later known as Butler’s Crossroads for Willis W. Butler, who acquired a tract including the intersection of the Laurens and Reedy River roads in 1853.",
          },
          {
            id: "depot",
            label: "1886",
            x: 74,
            y: 38,
            fact: "This community became a town after the Greenville & Laurens Railroad completed its line here in 1885 and built a frame passenger and freight depot 1/4 mi. N on Jenkins Street in 1886.",
          },
        ],
      },
      {
        kind: "scene",
        id: "stores",
        kicker: "1890",
        title: "Limits a half-mile from the depot",
        partLabel: "the town limits",
        art: art(
          "m2346-stores.jpg",
          "Illustration of two small general stores on a town street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "charter",
            label: "1890",
            x: 32,
            y: 46,
            fact: "The new town was named for Lt. Gov. William L. Mauldin (1845-1912), president of the Greenville & Laurens Railroad 1881-85, state representative and senator, and lt. governor 1886-1890. Mauldin was first chartered in 1890, with its limits a half-mile radius from the depot.",
          },
          {
            id: "shops",
            label: "1906 and 1931",
            x: 74,
            y: 60,
            fact: "The depot was torn down in 1953. Two historic stores of note are the John S. Hill Store (ca. 1906), 1/4 mi. E on Main Street, and Massey’s General Store (1931), at Main Street and White Drive.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1886-1953",
        title: "Years until the depot came down",
        partLabel: "67 years",
        value: 67,
        unit: "years",
        meant:
          "What this meant: 1953 comes 67 years after 1886. That is the stretch from the year the marker gives for the frame passenger and freight depot to the year it says the depot was torn down.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2346-crossroads.jpg",
          "Illustration of a dirt crossroads and a small frame depot. Not a historical photograph.",
        ),
        nowArt: art(
          "m2346-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame depot at a crossroads, for the passenger and freight depot the marker says was built in 1886. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "tract",
            year: "1853",
            label: "Willis W. Butler acquires the crossroads tract.",
            why: "The marker says the community was later known as Butler’s Crossroads for Willis W. Butler, who acquired a tract including the intersection of the Laurens and Reedy River roads in 1853.",
          },
          {
            id: "line",
            year: "1885",
            label: "The railroad completes its line here.",
            why: "The marker says this community became a town after the Greenville & Laurens Railroad completed its line here in 1885 and built a frame passenger and freight depot 1/4 mi. N on Jenkins Street in 1886.",
          },
          {
            id: "chartered",
            year: "1890",
            label: "Mauldin is chartered.",
            why: "The marker says Mauldin was first chartered in 1890, with its limits a half-mile radius from the depot.",
          },
          {
            id: "down",
            year: "1953",
            label: "The depot is torn down.",
            why: "The marker says the depot was torn down in 1953.",
          },
        ],
        ["chartered", "down", "tract", "line"],
      ),
      takeaway([
        "It was later known as Butler’s Crossroads for Willis W. Butler, who acquired a tract including the intersection of the Laurens and Reedy River roads in 1853.",
        "The new town was named for Lt. Gov. William L. Mauldin (1845-1912), president of the Greenville & Laurens Railroad 1881-85, state representative and senator, and lt. governor 1886-1890.",
        "Mauldin was first chartered in 1890, with its limits a half-mile radius from the depot.",
      ]),
    ],
  ),
  lesson(
    "23-47",
    "Three acres deeded for a church",
    "Mush Creek Baptist Church timeline",
    [cited("23-47", "Mush Creek Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1882",
        title: "Services in a nearby log school",
        partLabel: "the log school",
        art: art(
          "m2347-school.jpg",
          "Illustration of a log school and a small frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1882",
            x: 32,
            y: 50,
            fact: "This church, established in 1882, grew out of services held by itinerant Baptist ministers in a nearby log school, encouraged by Ann Pool Neves (1809-1898) and her husband Alsey A. Neves (1814-1888).",
          },
          {
            id: "deed",
            label: "1884",
            x: 74,
            y: 34,
            fact: "In 1884 Mrs. Neves and her son W.P.Z.F. Neves (1835-1917) deeded three acres for a church. A frame sanctuary was dedicated in 1886, with Rev. J.G. Fowler as pastor.",
          },
        ],
      },
      {
        kind: "scene",
        id: "cemetery",
        kicker: "1820s",
        title: "Burials of the Neves family",
        partLabel: "the cemetery",
        art: art(
          "m2347-cemetery.jpg",
          "Illustration of a brick-veneer church and unmarked stones. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "veneer",
            label: "1967",
            x: 32,
            y: 44,
            fact: "This church was covered in brick veneer in 1967. Mush Creek Baptist Church was renamed Living Grace Baptist Church in 2010.",
          },
          {
            id: "burials",
            label: "1820s",
            x: 74,
            y: 64,
            fact: "The cemetery, with early burials dating to the 1820s, includes several generations of the Neves family, including William Neves (1789-1844) and his wife, Anah Mitchell Neves (1787-1877), the first members of the family to settle in this area.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1884",
        title: "Acres deeded for the church",
        partLabel: "three acres",
        value: 3,
        unit: "acres",
        meant:
          "What this meant: the marker says Mrs. Neves and her son W.P.Z.F. Neves deeded three acres for a church in 1884.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2347-school.jpg",
          "Illustration of a log school and a small frame church. Not a historical photograph.",
        ),
        nowArt: art(
          "m2347-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame church beside a log school, for the sanctuary the marker says was dedicated in 1886. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "begun",
            year: "1882",
            label: "The church is established.",
            why: "The marker says this church, established in 1882, grew out of services held by itinerant Baptist ministers in a nearby log school.",
          },
          {
            id: "acres",
            year: "1884",
            label: "Three acres are deeded for a church.",
            why: "The marker says in 1884 Mrs. Neves and her son W.P.Z.F. Neves deeded three acres for a church.",
          },
          {
            id: "sanctuary",
            year: "1886",
            label: "A frame sanctuary is dedicated.",
            why: "The marker says a frame sanctuary was dedicated in 1886, with Rev. J.G. Fowler as pastor.",
          },
          {
            id: "renamed",
            year: "2010",
            label: "The church is renamed Living Grace Baptist Church.",
            why: "The marker says Mush Creek Baptist Church was renamed Living Grace Baptist Church in 2010.",
          },
        ],
        ["sanctuary", "renamed", "begun", "acres"],
      ),
      takeaway([
        "This church, established in 1882, grew out of services held by itinerant Baptist ministers in a nearby log school, encouraged by Ann Pool Neves (1809-1898) and her husband Alsey A. Neves (1814-1888).",
        "In 1884 Mrs. Neves and her son W.P.Z.F. Neves (1835-1917) deeded three acres for a church.",
        "Mush Creek Baptist Church was renamed Living Grace Baptist Church in 2010.",
      ]),
    ],
  ),
  lesson(
    "23-48",
    "A post office known as Plain",
    "Simpsonville timeline",
    [
      cited("23-48", "Simpsonville", "front and back"),
      span(
        '"81 years" is 1989 minus 1908, the years the marker prints for Simpsonville Cotton Mill.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "stage",
        kicker: "1838",
        title: "The first post office on the stage road",
        partLabel: "the post office",
        art: art(
          "m2348-stage.jpg",
          "Illustration of a stagecoach stop and a small wooden store. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "plain",
            label: "1838",
            x: 32,
            y: 48,
            fact: "This town grew up around a stagecoach stop on the Old Stage Road from Laurens to Greenville. For many years the community was known as “Plain,” the name given to the first post office, opened in 1838 with Jesse T. Cook as postmaster.",
          },
          {
            id: "simpson",
            label: "1836",
            x: 74,
            y: 36,
            fact: "It was later named for Peter Simpson (d. 1847), who had come here from Laurens District in 1836. Silas Gilbert opened a general store here about the same time. Gilbert was postmaster in 1839-44, followed by Simpson in 1844-47.",
          },
        ],
      },
      {
        kind: "scene",
        id: "mill",
        kicker: "1908",
        title: "A brick store and a cotton mill",
        partLabel: "the cotton mill",
        art: art(
          "m2348-mill.jpg",
          "Illustration of a brick cotton mill beside a rail line. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wilson",
            label: "About 1875",
            x: 32,
            y: 56,
            fact: "Sidney J. Wilson (1854-1919) came here from N.C. about 1875 and opened a general store. In 1885-86 the Greenville & Laurens Railroad completed its line from Laurens to Greenville. Wilson had the town surveyed and city lots laid out on Main St., and soon built the first brick store here.",
          },
          {
            id: "cotton",
            label: "1908 to 1989",
            x: 74,
            y: 40,
            fact: "The post office was renamed Simpsonville in 1885, and the city was incorporated in 1901. Simpsonville Cotton Mill, later a branch of Woodside Mills, operated here from 1908 to 1989.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1908-1989",
        title: "Years the cotton mill operated",
        partLabel: "81 years",
        value: 81,
        unit: "years",
        meant:
          "What this meant: 1989 comes 81 years after 1908. That is the stretch from the first year the marker gives for Simpsonville Cotton Mill to the last year it gives.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2348-stage.jpg",
          "Illustration of a stagecoach stop and a small wooden store. Not a historical photograph.",
        ),
        nowArt: art(
          "m2348-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a stagecoach stop, for the Old Stage Road community the marker says was known as Plain. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "came",
            year: "1836",
            label: "Peter Simpson comes from Laurens District.",
            why: "The marker says the town was later named for Peter Simpson (d. 1847), who had come here from Laurens District in 1836.",
          },
          {
            id: "opened",
            year: "1838",
            label: "The first post office opens.",
            why: "The marker says the community was known as “Plain,” the name given to the first post office, opened in 1838 with Jesse T. Cook as postmaster.",
          },
          {
            id: "renamed",
            year: "1885",
            label: "The post office is renamed Simpsonville.",
            why: "The marker says the post office was renamed Simpsonville in 1885, and the city was incorporated in 1901.",
          },
          {
            id: "millopen",
            year: "1908",
            label: "Simpsonville Cotton Mill begins operating.",
            why: "The marker says Simpsonville Cotton Mill, later a branch of Woodside Mills, operated here from 1908 to 1989.",
          },
        ],
        ["millopen", "came", "renamed", "opened"],
      ),
      takeaway([
        "For many years the community was known as “Plain,” the name given to the first post office, opened in 1838 with Jesse T. Cook as postmaster.",
        "It was later named for Peter Simpson (d. 1847), who had come here from Laurens District in 1836.",
        "Simpsonville Cotton Mill, later a branch of Woodside Mills, operated here from 1908 to 1989.",
      ]),
    ],
  ),
];
