import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** York County, second file of the first pass. Same rules as york.ts. */

const INTRO =
  "Move through the years on this marker. Tap the picture. Every fact is from the inscription.";

function cited(id: string, name: string, sides: "front" | "front and back"): LessonSource {
  return {
    id: "inscription",
    label: `South Carolina Historical Marker ${id}, “${name},” ${sides} inscription. South Carolina Department of Archives and History, Historical Marker Program.`,
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
    doneLine: "That’s the order on the marker.",
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

export const yorkLessonsB: MarkerLesson[] = [
  lesson(
    "46-14",
    "From a village to a city",
    "Rock Hill timeline",
    [cited("46-14", "Village of Rock Hill", "front and back")],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1851",
        title: "Main Street is laid out",
        partLabel: "Main Street",
        art: art(
          "rockhill-street.jpg",
          "Illustration of a dirt main street and a few wooden buildings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "laid",
            label: "Who laid out the street",
            x: 32,
            y: 58,
            fact: "Main Street was laid out in 1851 on Alexander Templeton Black’s land by Squire John Roddey. The post office was established in 1852.",
          },
          {
            id: "hotel",
            label: "Gordon’s Hotel",
            x: 74,
            y: 46,
            fact: "The village was incorporated in 1870, one mile square. Its center was Gordon’s Hotel, which stood just west of here. John R. Allen was the first intendant.",
          },
        ],
      },
      {
        kind: "scene",
        id: "city",
        kicker: "1892",
        title: "Two miles square",
        partLabel: "the city",
        art: art(
          "rockhill-square.jpg",
          "Illustration of a brick downtown corner and a church steeple. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "act",
            label: "The city charter",
            x: 30,
            y: 52,
            fact: "Rock Hill was incorporated as a city on December 24, 1892, with an area of two miles square. The center was a point in the middle of Main Street, opposite the Methodist Church. This marker stands near that point.",
          },
          {
            id: "mayor",
            label: "The first mayor",
            x: 74,
            y: 48,
            fact: "The first mayor was Dr. John William Fewell. The first aldermen were E. R. Avery, W. N. Irby, W. S. Morgan, E. E. Poag, J. J. Waters, and W. H. Wylie.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1892",
        title: "Miles square in the city charter",
        partLabel: "two miles square",
        value: 2,
        unit: "miles square",
        meant: "What this meant: in 1892 the city covered two miles square. In 1870 the village had been one mile square, centered on Gordon’s Hotel.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "rockhill-street.jpg",
          "Illustration of a new main street, for the 1851 layout. Not a historical photograph.",
        ),
        nowArt: art(
          "rockhill-today.jpg",
          "Illustration of a marker at a downtown corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of Main Street as a new village street, for the layout the marker dates to 1851. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a downtown corner, for East Main and Hampton, near the point the marker calls the center of the 1892 city. Not a photograph.",
      },
      order(
        [
          {
            id: "street",
            year: "1851",
            label: "Squire John Roddey lays out Main Street.",
            why: "The marker dates the street to 1851.",
          },
          {
            id: "post",
            year: "1852",
            label: "The post office is established.",
            why: "The marker dates the post office to 1852.",
          },
          {
            id: "village",
            year: "1870",
            label: "The village is incorporated, one mile square.",
            why: "The marker dates village incorporation to 1870.",
          },
          {
            id: "city",
            year: "1892",
            label: "The city is incorporated, two miles square.",
            why: "The marker dates the city charter to December 24, 1892.",
          },
        ],
        ["city", "street", "village", "post"],
      ),
      takeaway([
        "Main Street was laid out in 1851 on Alexander Templeton Black’s land. The post office came in 1852.",
        "The village of 1870 was one mile square, centered on Gordon’s Hotel. John R. Allen was the first intendant.",
        "On December 24, 1892, Rock Hill became a city of two miles square. This marker stands near that center. Dr. John William Fewell was the first mayor.",
      ]),
    ],
  ),
  lesson(
    "46-37",
    "The Friendship Nine",
    "McCrory’s sit-in timeline",
    [cited("46-37", "McCrory’s Civil Rights Sit-Ins", "front and back")],
    [
      {
        kind: "scene",
        id: "counter",
        kicker: "February 12, 1960",
        title: "They refused to leave",
        partLabel: "the sit-in",
        art: art(
          "mccrory-counter.jpg",
          "Illustration of a lunch counter, with people seen only from behind. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "store",
            label: "McCrory’s",
            x: 28,
            y: 48,
            fact: "This building, built in 1901, was McCrory’s Five & Dime from 1937 to 1997.",
          },
          {
            id: "sit",
            label: "The sit-in",
            x: 70,
            y: 58,
            fact: "On February 12, 1960, Black students from Friendship Junior College were denied service at the lunch counter and refused to leave. Their sit-in was one of the first of many against segregated public places in downtown Rock Hill. The protests lasted more than a year.",
          },
        ],
      },
      {
        kind: "scene",
        id: "jail",
        kicker: "January 31, 1961",
        title: "Jail, no bail",
        partLabel: "jail no bail",
        art: art(
          "mccrory-jail.jpg",
          "Illustration of a courthouse door and a lunch counter stool. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "nine",
            label: "Nine who would not pay",
            x: 32,
            y: 52,
            fact: "Many protesters were arrested, convicted, and fined. On January 31, 1961, ten students from Friendship Junior College were arrested when they refused to leave McCrory’s. Nine would not pay their fines.",
          },
          {
            id: "model",
            label: "A new strategy",
            x: 74,
            y: 46,
            fact: "They became the first Civil Rights sit-in protesters in the nation to serve jail time. This “Jail No Bail” strategy by the Friendship Nine was soon the model for the Freedom Rides of 1961.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1961",
        title: "Students who served the time",
        partLabel: "nine students",
        value: 9,
        unit: "students",
        meant: "What this meant: the marker says ten students were arrested on January 31, 1961. Nine would not pay their fines, and they were the first sit-in protesters in the nation to serve jail time for it.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "mccrory-counter.jpg",
          "Illustration of a lunch counter, for the 1960 sit-in. Not a historical photograph.",
        ),
        nowArt: art(
          "mccrory-today.jpg",
          "Illustration of a marker in front of an old Main Street store. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the lunch counter where the marker says students sat down on February 12, 1960. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and a storefront, for 137 East Main Street. Not a photograph of the building today.",
      },
      order(
        [
          {
            id: "built",
            year: "1901",
            label: "This building is built.",
            why: "The marker dates the building to 1901.",
          },
          {
            id: "open",
            year: "1937",
            label: "McCrory’s Five & Dime opens here.",
            why: "The marker says McCrory’s occupied it from 1937 to 1997.",
          },
          {
            id: "sit",
            year: "1960",
            label: "Students sit in at the lunch counter on February 12.",
            why: "The marker dates that sit-in to February 12, 1960.",
          },
          {
            id: "jail",
            year: "1961",
            label: "On January 31, nine students choose jail instead of a fine.",
            why: "The marker dates the Friendship Nine’s arrest to January 31, 1961.",
          },
        ],
        ["jail", "built", "sit", "open"],
      ),
      takeaway([
        "On February 12, 1960, Black students from Friendship Junior College sat in at McCrory’s lunch counter after they were denied service.",
        "On January 31, 1961, ten students were arrested. Nine would not pay their fines.",
        "The Friendship Nine were the first sit-in protesters in the nation to serve jail time. “Jail No Bail” became the model for the Freedom Rides of 1961.",
      ]),
    ],
  ),
  lesson(
    "46-27",
    "Fifty years of Emmett Scott",
    "Emmett Scott School timeline",
    [
      cited("46-27", "Emmett Scott School", "front and back"),
      span(
        "“50 years” is the marker’s own phrase, “fifty-year existence.” It is also 1970 minus 1920, the closing year and the founding year printed on the marker.",
      ),
    ],
    [
      {
        kind: "scene",
        id: "frame",
        kicker: "1920",
        title: "The first public school",
        partLabel: "the first school",
        art: art(
          "emmett-frame.jpg",
          "Illustration of a two-story frame school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "found",
            label: "Founded in 1920",
            x: 34,
            y: 48,
            fact: "This school, founded in 1920, was the first public school for Black students in Rock Hill. It was named for Emmett J. Scott (1873–1957), an educator who was then secretary of Howard University.",
          },
          {
            id: "grades",
            label: "Twelve grades",
            x: 74,
            y: 58,
            fact: "Emmett Scott included all twelve grades until 1956, and was a junior high and high school from 1956 until South Carolina schools were desegregated in 1970. The original two-story frame school, built in 1920, was demolished in 1952.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1920–1970",
        title: "Seven principals",
        partLabel: "the principals",
        art: art(
          "emmett-yard.jpg",
          "Illustration of a schoolyard and a school door. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "seven",
            label: "The seven principals",
            x: 30,
            y: 55,
            fact: "Seven principals served during the school’s fifty years: Frank H. Neal, 1920–1924; L. B. Moore, 1924–1938; Ralph W. McGirt, 1938–1959; W. H. Witherspoon, 1959–1967; George Land, 1967; Richard Boulware, 1968; and Samuel Foster, 1969–1970.",
          },
          {
            id: "after",
            label: "After the school",
            x: 74,
            y: 46,
            fact: "The City of Rock Hill owns this property. It has been a neighborhood recreation center since the school closed in 1970.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1920–1970",
        title: "Years the marker gives the school",
        partLabel: "fifty years",
        value: 50,
        unit: "years",
        meant: "What this meant: the marker calls it a fifty-year existence. 1970 comes 50 years after 1920, from the founding to the year the school closed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "emmett-frame.jpg",
          "Illustration of a frame school, for the 1920 building. Not a historical photograph.",
        ),
        nowArt: art(
          "emmett-today.jpg",
          "Illustration of a marker and a low public building on a neighborhood street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the two-story frame school the marker says was built in 1920 and demolished in 1952. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and a public building, for the Emmett Scott Recreation Center at 801 Crawford Road. The marker says the city has used the property that way since 1970. Not a photograph.",
      },
      order(
        [
          {
            id: "found",
            year: "1920",
            label: "The school is founded, the first public school for Black students in Rock Hill.",
            why: "The marker dates the founding to 1920.",
          },
          {
            id: "down",
            year: "1952",
            label: "The original frame school is demolished.",
            why: "The marker dates that demolition to 1952.",
          },
          {
            id: "junior",
            year: "1956",
            label: "It is no longer all twelve grades. It is a junior high and high school.",
            why: "The marker dates that change to 1956.",
          },
          {
            id: "close",
            year: "1970",
            label: "The school closes when South Carolina schools are desegregated.",
            why: "The marker dates desegregation and the closing to 1970.",
          },
        ],
        ["close", "found", "junior", "down"],
      ),
      takeaway([
        "Emmett Scott School, founded in 1920, was Rock Hill’s first public school for Black students. It was named for Emmett J. Scott of Howard University.",
        "It taught all twelve grades until 1956, then junior high and high school until 1970. Seven principals served those fifty years.",
        "The original frame building was demolished in 1952. Since the school closed in 1970, the city has used the property as a recreation center.",
      ]),
    ],
  ),
  lesson(
    "46-23",
    "From buggies to Anderson cars",
    "Rock Hill Buggy Company timeline",
    [cited("46-23", "Rock Hill Buggy Company", "front and back")],
    [
      {
        kind: "scene",
        id: "shop",
        kicker: "1892",
        title: "Four shops, one factory",
        partLabel: "the buggy factory",
        art: art(
          "buggy-shop.jpg",
          "Illustration of a buggy factory and a wooden buggy. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "found",
            label: "Holler and Anderson",
            x: 30,
            y: 55,
            fact: "In 1886 A. D. Holler, who had long owned a wagon and buggy shop in Rock Hill, founded Holler and Anderson Buggy Company with his son-in-law John Gary Anderson (1861–1937).",
          },
          {
            id: "factory",
            label: "The 1892 factory",
            x: 74,
            y: 46,
            fact: "Anderson built a factory here in 1892, with separate blacksmith, woodwork, trim, and paint shops. Renamed the Rock Hill Buggy Company, it was known for its materials and craft. By 1900 it was an industry leader and sold 6,000 buggies a year.",
          },
        ],
      },
      {
        kind: "scene",
        id: "car",
        kicker: "1916",
        title: "The Anderson automobile",
        partLabel: "the automobiles",
        art: art(
          "buggy-car.jpg",
          "Illustration of an early open touring car beside a factory. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "six",
            label: "The first cars",
            x: 32,
            y: 58,
            fact: "The firm became Anderson Motor Company and began building automobiles in 1916. Its first cars were the Anderson Six, a 6-passenger touring car, and the Roadster, a 3-passenger convertible.",
          },
          {
            id: "peak",
            label: "The peak and the end",
            x: 74,
            y: 46,
            fact: "By 1923 there were 8 brightly colored luxury cars, including what the marker calls the first floor dimmer switch. At the 1923 peak the factory made 35 cars a day. It built the last Anderson in 1924, closed in 1926, and fewer than a dozen Anderson automobiles still survive.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1900",
        title: "Buggies sold in a year",
        partLabel: "buggies a year",
        value: 6000,
        unit: "buggies a year",
        meant: "What this meant: the marker says that by 1900 the Rock Hill Buggy Company was an industry leader and sold 6,000 buggies a year.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "buggy-shop.jpg",
          "Illustration of a buggy factory, for the 1892 plant. Not a historical photograph.",
        ),
        nowArt: art(
          "buggy-today.jpg",
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the factory the marker says Anderson built here in 1892. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a corner, for West White and North Wilson Streets. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "found",
            year: "1886",
            label: "Holler and Anderson Buggy Company is founded.",
            why: "The marker dates the company to 1886.",
          },
          {
            id: "factory",
            year: "1892",
            label: "Anderson builds the factory on this site.",
            why: "The marker dates the factory to 1892.",
          },
          {
            id: "cars",
            year: "1916",
            label: "Anderson Motor Company starts building automobiles.",
            why: "The marker dates the first cars to 1916.",
          },
          {
            id: "last",
            year: "1924",
            label: "The last Anderson car is built. The factory closes in 1926.",
            why: "The marker dates the last car to 1924 and the closing to 1926.",
          },
        ],
        ["last", "found", "cars", "factory"],
      ),
      takeaway([
        "A. D. Holler and John Gary Anderson started a buggy company in 1886. The factory on this site, from 1892, had blacksmith, woodwork, trim, and paint shops.",
        "By 1900 it sold 6,000 buggies a year. In 1916 the firm began building Anderson cars.",
        "The peak was 35 cars a day in 1923. The last Anderson was built in 1924, the factory closed in 1926, and fewer than a dozen of the cars still survive.",
      ]),
    ],
  ),
  lesson(
    "46-65",
    "Elias Hill and the road to Liberia",
    "Elias Hill timeline",
    [cited("46-65", "Elias Hill Homeplace", "front and back")],
    [
      {
        kind: "scene",
        id: "creek",
        kicker: "1869",
        title: "Forty acres on Allison Creek",
        partLabel: "the homeplace",
        art: art(
          "elias-creek.jpg",
          "Illustration of a small house beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "Elias Hill",
            x: 32,
            y: 55,
            fact: "Elias Hill (1819–1872) was born enslaved at Hill’s Ironworks on Allison Creek. He and his parents were emancipated before 1860. The marker says he was physically paralyzed at an early age, was well educated, and became a Baptist minister, a schoolteacher, and a Union League leader.",
          },
          {
            id: "land",
            label: "The 40 acres",
            x: 74,
            y: 48,
            fact: "In 1869 he bought 40 acres from J. M. Ross on Allison Creek, a quarter mile east of here.",
          },
        ],
      },
      {
        kind: "scene",
        id: "ship",
        kicker: "1871",
        title: "Clay Hill leaves for Liberia",
        partLabel: "the emigration",
        art: art(
          "elias-ship.jpg",
          "Illustration of a ship, with people on deck seen only from behind. Not a picture of a particular ship.",
        ),
        hotspots: [
          {
            id: "klan",
            label: "Why they left",
            x: 28,
            y: 46,
            fact: "During Reconstruction, from 1865 to 1877, the Ku Klux Klan persecuted Rev. Hill and other freedmen in York County.",
          },
          {
            id: "leave",
            label: "October 1871",
            x: 72,
            y: 58,
            fact: "In October 1871, 166 free Black people from Clay Hill emigrated to Liberia, led by Elias Hill, Solomon Hill, June Moore, and Madison, Harriet, and George Simril. They arrived in December and began new lives at Arthington as planters and political leaders.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1871",
        title: "People who left Clay Hill",
        partLabel: "166 people",
        value: 166,
        unit: "people",
        meant: "What this meant: the marker says 166 free Black people from Clay Hill emigrated to Liberia in October 1871, led by Elias Hill and the others it names.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "elias-creek.jpg",
          "Illustration of a creek house, for the 1869 homeplace. Not a historical photograph.",
        ),
        nowArt: art(
          "elias-today.jpg",
          "Illustration of a marker on a rural creek road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house by a creek, for the 40 acres the marker says Elias Hill bought in 1869. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a rural road, for 5780 Allison Creek Road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1819",
            label: "Elias Hill is born enslaved at Hill’s Ironworks.",
            why: "The marker gives his birth year as 1819.",
          },
          {
            id: "free",
            year: "Before 1860",
            label: "He and his parents are emancipated.",
            why: "The marker says they were emancipated prior to 1860.",
          },
          {
            id: "buy",
            year: "1869",
            label: "He buys 40 acres on Allison Creek.",
            why: "The marker dates that purchase to 1869.",
          },
          {
            id: "leave",
            year: "1871",
            label: "166 people from Clay Hill leave for Liberia.",
            why: "The marker dates that emigration to October 1871.",
          },
        ],
        ["leave", "born", "buy", "free"],
      ),
      takeaway([
        "Elias Hill was born enslaved in 1819 at Hill’s Ironworks, emancipated with his parents before 1860, and became a minister, teacher, and Union League leader.",
        "In 1869 he bought 40 acres on Allison Creek. The marker says the Ku Klux Klan persecuted him and other freedmen in York County during Reconstruction.",
        "In October 1871 he helped lead 166 people from Clay Hill to Liberia. They reached Arthington that December.",
      ]),
    ],
  ),
  lesson(
    "46-10",
    "Five generations at the White Home",
    "White Home timeline",
    [cited("46-10", "White Home", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "About 1839",
        title: "A plantation house",
        partLabel: "the house",
        art: art(
          "white-house.jpg",
          "Illustration of a piedmont plantation house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Who built it",
            x: 34,
            y: 50,
            fact: "About 1839, this former plantation house was built by George Pendleton White (1801–1849) and his wife, Ann Hutchison White (1805–1880). It has sheltered five generations of the family.",
          },
          {
            id: "war",
            label: "The war years",
            x: 74,
            y: 58,
            fact: "During the war of 1861–1865, needy Confederate soldiers were cared for here. The house has a Prophet’s Chamber, reserved for visiting ministers. The east wing was built about 1878.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sons",
        kicker: "The sons",
        title: "Two sons of this house",
        partLabel: "the sons",
        art: art(
          "white-wing.jpg",
          "Illustration of a house wing and a small plain bedroom. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "james",
            label: "James Spratt White",
            x: 30,
            y: 48,
            fact: "The Rev. James Spratt White (1841–1891) was moderator of the Presbyterian Synod of South Carolina and founder of the Rock Hill Public Library and the Rock Hill public schools.",
          },
          {
            id: "andrew",
            label: "Andrew Hutchison White",
            x: 74,
            y: 56,
            fact: "Andrew Hutchison White (1843–1903) was intendant of Rock Hill, grand master of the Grand Lodge of Ancient Free Masons of South Carolina, and president of the State Agricultural and Mechanical Society.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Since 1839",
        title: "Generations the marker counts",
        partLabel: "five generations",
        value: 5,
        unit: "generations",
        meant: "What this meant: the marker says the house has sheltered five generations of this Rock Hill family since it was built about 1839.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "white-house.jpg",
          "Illustration of a plantation house, for the house built about 1839. Not a historical photograph.",
        ),
        nowArt: art(
          "white-today.jpg",
          "Illustration of a house and a marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the house the marker says George and Ann White built about 1839. Not a historical photograph.",
        nowCaption:
          "Illustration of a house and a marker, for the corner of East White Street and Elizabeth Lane. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1839",
            label: "George and Ann White build the house.",
            why: "The marker dates the house to about 1839.",
          },
          {
            id: "james",
            year: "1841",
            label: "James Spratt White, later a founder of Rock Hill’s public schools, is born.",
            why: "The marker gives his years as 1841–1891 and calls him a son of this house.",
          },
          {
            id: "war",
            year: "1861",
            label: "Needy Confederate soldiers are cared for here.",
            why: "The marker places that care in the war of 1861–1865.",
          },
          {
            id: "wing",
            year: "1878",
            label: "The east wing is built.",
            why: "The marker dates the east wing to about 1878.",
          },
        ],
        ["wing", "built", "war", "james"],
      ),
      takeaway([
        "George Pendleton White and Ann Hutchison White built this house about 1839. Five generations of the family have lived here.",
        "During 1861–1865 the house cared for needy Confederate soldiers. A Prophet’s Chamber was reserved for visiting ministers, and the east wing went up about 1878.",
        "James Spratt White founded Rock Hill’s public library and public schools. Andrew Hutchison White was intendant of Rock Hill.",
      ]),
    ],
  ),
  lesson(
    "46-61",
    "Huck’s Defeat",
    "Brattonsville timeline",
    [cited("46-61", "William Bratton Plantation", "front and back")],
    [
      {
        kind: "scene",
        id: "log",
        kicker: "1766",
        title: "Two log houses on Fishing Creek",
        partLabel: "the log houses",
        art: art(
          "huck-log.jpg",
          "Illustration of a single-pen log house at a country crossroads. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bratton",
            label: "The Bratton house",
            x: 32,
            y: 52,
            fact: "In 1766 William Bratton and his wife Martha Robertson bought 200 acres on the South Fork of Fishing Creek and built a single-pen log house where several colonial roads met. It was the first house in what became Brattonsville. Bratton was a civil leader and an officer in the patriot militia.",
          },
          {
            id: "williamson",
            label: "The Williamson house",
            x: 74,
            y: 58,
            fact: "James Williamson also settled on Fishing Creek in 1766 and built a log house 400 yards southeast of here.",
          },
        ],
      },
      {
        kind: "scene",
        id: "battle",
        kicker: "July 12, 1780",
        title: "The fight at Williamson’s",
        partLabel: "the battle",
        art: art(
          "huck-battle.jpg",
          "Illustration of a log house, smoke, and militia seen as silhouettes. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "camp",
            label: "Huck’s camp",
            x: 30,
            y: 55,
            fact: "On July 12, 1780, 120 British and loyalist troops led by Capt. Christian Huck camped at the Williamson house.",
          },
          {
            id: "defeat",
            label: "The defeat",
            x: 74,
            y: 46,
            fact: "They were attacked and defeated by 140 local patriot militiamen led by Col. William Bratton and other officers. The fight is the Battle of Williamson’s Plantation, or Huck’s Defeat.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "July 12, 1780",
        title: "Patriot militia the marker counts",
        partLabel: "140 militiamen",
        value: 140,
        unit: "militiamen",
        meant: "What this meant: the marker says 140 local patriot militiamen defeated 120 British and loyalist troops at the Williamson house.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "huck-log.jpg",
          "Illustration of a log house, for the 1766 Bratton home. Not a historical photograph.",
        ),
        nowArt: art(
          "huck-today.jpg",
          "Illustration of a marker beside a log house on a rural road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of the single-pen log house the marker says the Brattons built in 1766. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and a log house, for 1444 Brattonsville Road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "buy",
            year: "1766",
            label: "William and Martha Bratton buy 200 acres and build a log house.",
            why: "The marker dates that purchase and house to 1766.",
          },
          {
            id: "williamson",
            year: "1766",
            label: "James Williamson builds a log house 400 yards southeast.",
            why: "The marker also dates Williamson’s house to 1766, on the same creek.",
          },
          {
            id: "camp",
            year: "1780",
            label: "On July 12, Huck’s 120 troops camp at the Williamson house.",
            why: "The marker dates that camp to July 12, 1780.",
          },
          {
            id: "fight",
            year: "1780",
            label: "140 patriot militia defeat them. The fight is called Huck’s Defeat.",
            why: "The marker places the attack on that same day.",
          },
        ],
        ["fight", "buy", "camp", "williamson"],
      ),
      takeaway([
        "In 1766 the Brattons built the first house of Brattonsville, a single-pen log house on 200 acres. James Williamson built another log house 400 yards southeast.",
        "On July 12, 1780, Capt. Christian Huck camped 120 British and loyalist troops at Williamson’s.",
        "Col. William Bratton and other officers led 140 local militia to defeat them. The battle is Huck’s Defeat.",
      ]),
    ],
  ),
];
