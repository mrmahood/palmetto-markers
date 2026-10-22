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

export const greenvilleLessonsG: MarkerLesson[] = [
  lesson(
    "23-31",
    "A five-story hall for the textile exposition",
    "Textile Hall timeline",
    [
      cited("23-31", "Textile Hall", "front and back"),
      span(
        '"75 years" is 1992 minus 1917, the years the marker prints for the demolition of Textile Hall and the year it was built.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "1917",
        title: "Built for the annual exposition",
        partLabel: "the hall",
        art: art(
          "m2331-hall.jpg",
          "Illustration of a five-story exhibition building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1917",
            x: 32,
            y: 48,
            fact: "Textile Hall, built in 1917 to host the annual Southern Textile Exposition, stood on this side until 1992.",
          },
          {
            id: "design",
            label: "Five stories",
            x: 74,
            y: 38,
            fact: "Textile Hall, designed by J.E. Sirrine & Co. at a cost of $130,000, was a five-story Renaissance Revival building; its facade featured a limestone tablet bearing the initials “STE” for “Southern Textile Exposition” and the words “Textile Hall.”",
          },
        ],
      },
      {
        kind: "scene",
        id: "expo",
        kicker: "1915-1962",
        title: "Exposition hall, then a register listing",
        partLabel: "the expositions",
        art: art(
          "m2331-expo.jpg",
          "Illustration of an empty exhibition hall with looms. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "hosted",
            label: "1915 to 1962",
            x: 32,
            y: 54,
            fact: "The first exposition of the Southern Textile Association had been held in Greenville in 1915. It hosted the Southern Textile Exposition from 1917 to 1962 and gave Greenville the title “Textile Center of the South.”",
          },
          {
            id: "listed",
            label: "1980 and 1992",
            x: 74,
            y: 42,
            fact: "When built, Textile Hall was described as “a fitting monument to . . . the proper cooperative spirit.” It also hosted many other meetings and special events, such as the annual Southern Textile Basketball Tournament, with teams representing mills across the South. Listed in the National Register of Historic Places in 1980, it was demolished in 1992.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1917-1992",
        title: "Years from the building to the demolition",
        partLabel: "75 years",
        value: 75,
        unit: "years",
        meant:
          "What this meant: 1992 comes 75 years after 1917. That is the stretch from the year Textile Hall was built to the year it was demolished.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2331-hall.jpg",
          "Illustration of a five-story exhibition building. Not a historical photograph.",
        ),
        nowArt: art(
          "m2331-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a five-story exhibition building, for the hall the marker says was built in 1917. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "first",
            year: "1915",
            label: "The first Southern Textile Association exposition is held in Greenville.",
            why: "The marker says the first exposition of the Southern Textile Association had been held in Greenville in 1915.",
          },
          {
            id: "built",
            year: "1917",
            label: "Textile Hall is built for the annual exposition.",
            why: "The marker says Textile Hall, built in 1917 to host the annual Southern Textile Exposition, stood on this side until 1992. It hosted the Southern Textile Exposition from 1917 to 1962 and gave Greenville the title “Textile Center of the South.”",
          },
          {
            id: "register",
            year: "1980",
            label: "Textile Hall is listed in the National Register of Historic Places.",
            why: "The marker says Textile Hall was listed in the National Register of Historic Places in 1980.",
          },
          {
            id: "demolished",
            year: "1992",
            label: "Textile Hall is demolished.",
            why: "The marker says Textile Hall was demolished in 1992.",
          },
        ],
        ["register", "first", "demolished", "built"],
      ),
      takeaway([
        "Textile Hall, built in 1917 to host the annual Southern Textile Exposition, stood on this side until 1992.",
        "It hosted the Southern Textile Exposition from 1917 to 1962 and gave Greenville the title “Textile Center of the South.”",
        "Listed in the National Register of Historic Places in 1980, it was demolished in 1992.",
      ]),
    ],
  ),
  lesson(
    "23-32",
    "The county's first black public high school",
    "Sterling High School timeline",
    [
      cited("23-32", "Sterling High School", "front and back"),
      span(
        '"33 years" is 1929 minus 1896, the years the marker prints for the purchase by the Greenville Co. School District and the founding of the school.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "academy",
        kicker: "1896",
        title: "Founded as Greenville Academy",
        partLabel: "the academy",
        art: art(
          "m2332-brick.jpg",
          "Illustration of a two-story brick school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1896",
            x: 32,
            y: 46,
            fact: "Sterling High School stood 3/4 mi. southeast of here and served generations of African Americans in Greenville. Founded in 1896 by Rev. D.M. Minus and called Greenville Academy, it was first located in West Greenville.",
          },
          {
            id: "renamed",
            label: "1902",
            x: 74,
            y: 58,
            fact: "It moved into a new two-story brick school nearby in 1902 and was then renamed Sterling Industrial College after Mrs. E.R. Sterling, who had financed Rev. Minus’s education at Claflin University.",
          },
        ],
      },
      {
        kind: "scene",
        id: "public",
        kicker: "1929",
        title: "Bought by the county school district",
        partLabel: "the public high school",
        art: art(
          "m2332-yard.jpg",
          "Illustration of a brick school and an empty yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bought",
            label: "1915 and 1929",
            x: 32,
            y: 50,
            fact: "The school closed briefly but reopened in 1915 as Enoree High School, owned by the Enoree Baptist Assn. The Greenville Co. School District bought the school in 1929, made it the first black public high school in the county, and restored the name Sterling.",
          },
          {
            id: "burned",
            label: "Sept. 1967",
            x: 74,
            y: 40,
            fact: "After it burned in Sept. 1967, classes moved to Greenville Jr. High, renamed Sterling Jr.-Sr. High. It closed after the 1969-70 school year.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1896-1929",
        title: "Years from the founding to the district purchase",
        partLabel: "33 years",
        value: 33,
        unit: "years",
        meant:
          "What this meant: 1929 comes 33 years after 1896. That is the stretch from the year the school was founded to the year the Greenville Co. School District bought it and made it the first black public high school in the county.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2332-brick.jpg",
          "Illustration of a two-story brick school. Not a historical photograph.",
        ),
        nowArt: art(
          "m2332-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-story brick school, for the school the marker says was built nearby in 1902. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1896",
            label: "Rev. D.M. Minus founds Greenville Academy.",
            why: "The marker says it was founded in 1896 by Rev. D.M. Minus and called Greenville Academy, and that it was first located in West Greenville.",
          },
          {
            id: "college",
            year: "1902",
            label: "The school is renamed Sterling Industrial College.",
            why: "The marker says it moved into a new two-story brick school nearby in 1902 and was then renamed Sterling Industrial College after Mrs. E.R. Sterling, who had financed Rev. Minus’s education at Claflin University.",
          },
          {
            id: "district",
            year: "1929",
            label: "The county district makes it the first black public high school.",
            why: "The marker says the Greenville Co. School District bought the school in 1929, made it the first black public high school in the county, and restored the name Sterling.",
          },
          {
            id: "fire",
            year: "Sept. 1967",
            label: "The school burns, and classes move.",
            why: "The marker says that after it burned in Sept. 1967, classes moved to Greenville Jr. High, renamed Sterling Jr.-Sr. High. It closed after the 1969-70 school year.",
          },
        ],
        ["district", "founded", "fire", "college"],
      ),
      takeaway([
        "Founded in 1896 by Rev. D.M. Minus and called Greenville Academy, it was first located in West Greenville.",
        "The Greenville Co. School District bought the school in 1929, made it the first black public high school in the county, and restored the name Sterling.",
        "After it burned in Sept. 1967, classes moved to Greenville Jr. High, renamed Sterling Jr.-Sr. High. It closed after the 1969-70 school year.",
      ]),
    ],
  ),
  lesson(
    "23-33",
    "Tracts acquired from the Cherokees by 1768",
    "Early White Settlement timeline",
    [
      cited("23-33", "Early White Settlement", "front and back"),
      span(
        '"7 years" is 1775 minus 1768, the years the marker prints for Jacob Hite settling nearby and the acquisition of large tracts.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "tracts",
        kicker: "By 1768",
        title: "Large tracts in present-day Greenville County",
        partLabel: "the tracts",
        art: art(
          "m2333-land.jpg",
          "Illustration of wooded rolling land. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acquired",
            label: "By 1768",
            x: 32,
            y: 52,
            fact: "By 1768 Indian traders and land speculators Richard Pearis (d. 1794) and Jacob Hite of Virginia acquired large tracts from the Cherokees in present-day Greenville County.",
          },
          {
            id: "moved",
            label: "1768 to 1775",
            x: 74,
            y: 40,
            fact: "Though royal authorities disputed the validity of these titles, Pearis and Hite moved their families to this area between 1768 and 1775.",
          },
        ],
      },
      {
        kind: "scene",
        id: "family",
        kicker: "1775",
        title: "Jacob Hite settles nearby",
        partLabel: "the Hite family",
        art: art(
          "m2333-cabin.jpg",
          "Illustration of an empty log house in a clearing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "settled",
            label: "1775",
            x: 32,
            y: 46,
            fact: "Jacob Hite settled nearby with his wife Frances Madison Hite and their family in 1775. He continued his trade with the Cherokees.",
          },
          {
            id: "july",
            label: "June and July 1776",
            x: 74,
            y: 58,
            fact: "In June 1776, Cherokees killed his son James. On July 1, 1776, Cherokees killed Jacob Hite and kidnapped his wife and two daughters. Frances Hite’s body was recovered, but the Hite daughters were never found.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1768-1775",
        title: "Years from the tracts to the Hite settlement",
        partLabel: "7 years",
        value: 7,
        unit: "years",
        meant:
          "What this meant: 1775 comes 7 years after 1768. That is the stretch from the year the marker gives for the acquisition of large tracts to the year Jacob Hite settled nearby.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2333-land.jpg",
          "Illustration of wooded rolling land. Not a historical photograph.",
        ),
        nowArt: art(
          "m2333-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of wooded rolling land, for the tracts the marker says were acquired by 1768. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "tracts",
            year: "By 1768",
            label: "Pearis and Hite acquire large tracts from the Cherokees.",
            why: "The marker says that by 1768 Indian traders and land speculators Richard Pearis (d. 1794) and Jacob Hite of Virginia acquired large tracts from the Cherokees in present-day Greenville County.",
          },
          {
            id: "settled",
            year: "1775",
            label: "Jacob Hite settles nearby with his family.",
            why: "The marker says Jacob Hite settled nearby with his wife Frances Madison Hite and their family in 1775. He continued his trade with the Cherokees. Pearis and Hite moved their families to this area between 1768 and 1775.",
          },
          {
            id: "james",
            year: "June 1776",
            label: "Cherokees kill James Hite.",
            why: "The marker says that in June 1776, Cherokees killed his son James.",
          },
          {
            id: "jacob",
            year: "July 1, 1776",
            label: "Cherokees kill Jacob Hite and kidnap his wife and two daughters.",
            why: "The marker says that on July 1, 1776, Cherokees killed Jacob Hite and kidnapped his wife and two daughters. Frances Hite’s body was recovered, but the Hite daughters were never found.",
          },
        ],
        ["james", "tracts", "jacob", "settled"],
      ),
      takeaway([
        "By 1768 Indian traders and land speculators Richard Pearis (d. 1794) and Jacob Hite of Virginia acquired large tracts from the Cherokees in present-day Greenville County.",
        "Though royal authorities disputed the validity of these titles, Pearis and Hite moved their families to this area between 1768 and 1775.",
        "On July 1, 1776, Cherokees killed Jacob Hite and kidnapped his wife and two daughters. Frances Hite’s body was recovered, but the Hite daughters were never found.",
      ]),
    ],
  ),
  lesson(
    "23-34",
    "Owned by the Hopkins family since 1834",
    "Hopkins Farm timeline",
    [
      cited("23-34", "Hopkins Farm", "front and back"),
      span(
        '"105 years" is 1939 minus 1834, the years the marker prints for John Drayton Hopkins taking over the farm and John Hopkins purchasing it.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1834",
        title: "Purchased from William Toney",
        partLabel: "the farmhouse",
        art: art(
          "m2334-house.jpg",
          "Illustration of a Greek Revival farmhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "purchased",
            label: "1834",
            x: 32,
            y: 48,
            fact: "This farm has been owned by the Hopkins family since 1834, when John Hopkins (1793-1837) purchased it from William Toney.",
          },
          {
            id: "lucinda",
            label: "ca. 1840",
            x: 74,
            y: 36,
            fact: "The Greek Revival main house was built ca. 1840, with later additions ca. 1890 and ca. 1925. Hopkins’ widow Lucinda (1800-1876) managed the farm after his death, growing cotton and corn as cash crops, supplemented by subsistence crops and livestock.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "ca. 1850",
        title: "Outbuildings, then a 1939 takeover",
        partLabel: "the farmyard",
        art: art(
          "m2334-yard.jpg",
          "Illustration of a smokehouse, a corn crib, and a small house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "crib",
            label: "ca. 1850",
            x: 32,
            y: 56,
            fact: "John and Lucinda Hopkins are buried in the family cemetery nearby. The farm complex includes a cook’s house, smoke house, and corn crib built ca. 1850 as well as other outbuildings from the 1870s to the present.",
          },
          {
            id: "soil",
            label: "1939",
            x: 74,
            y: 42,
            fact: "John Drayton Hopkins (b. 1913) took over the farm in 1939, making it a model of modern soil conservation techniques such as terracing and crop rotation.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1834-1939",
        title: "Years from the purchase to the takeover",
        partLabel: "105 years",
        value: 105,
        unit: "years",
        meant:
          "What this meant: 1939 comes 105 years after 1834. That is the stretch from the year John Hopkins purchased the farm to the year John Drayton Hopkins took it over.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2334-house.jpg",
          "Illustration of a Greek Revival farmhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m2334-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Greek Revival farmhouse, for the main house the marker says was built ca. 1840. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "purchased",
            year: "1834",
            label: "John Hopkins purchases the farm from William Toney.",
            why: "The marker says this farm has been owned by the Hopkins family since 1834, when John Hopkins (1793-1837) purchased it from William Toney.",
          },
          {
            id: "main",
            year: "ca. 1840",
            label: "The Greek Revival main house is built.",
            why: "The marker says the Greek Revival main house was built ca. 1840, with later additions ca. 1890 and ca. 1925.",
          },
          {
            id: "outbuildings",
            year: "ca. 1850",
            label: "A cook’s house, smoke house, and corn crib are built.",
            why: "The marker says the farm complex includes a cook’s house, smoke house, and corn crib built ca. 1850 as well as other outbuildings from the 1870s to the present.",
          },
          {
            id: "takeover",
            year: "1939",
            label: "John Drayton Hopkins takes over the farm.",
            why: "The marker says John Drayton Hopkins (b. 1913) took over the farm in 1939, making it a model of modern soil conservation techniques such as terracing and crop rotation.",
          },
        ],
        ["main", "takeover", "purchased", "outbuildings"],
      ),
      takeaway([
        "This farm has been owned by the Hopkins family since 1834, when John Hopkins (1793-1837) purchased it from William Toney.",
        "The Greek Revival main house was built ca. 1840, with later additions ca. 1890 and ca. 1925.",
        "John Drayton Hopkins (b. 1913) took over the farm in 1939, making it a model of modern soil conservation techniques such as terracing and crop rotation.",
      ]),
    ],
  ),
];
