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

export const darlingtonLessonsP: MarkerLesson[] = [
  lesson(
    "16-65",
    "Begun on a 220-acre tract nearby",
    "Coker's Pedigreed Seed Company timeline",
    [cited("16-65", "Coker's Pedigreed Seed Company", "front and back")],
    [
      {
        kind: "scene",
        id: "company",
        kicker: "1914",
        title: "Incorporated by David R. Coker",
        partLabel: "the seed company",
        art: art(
          "m1665-fields.jpg",
          "Illustration of experimental crop rows and cotton plants. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "incorporated",
            label: "Incorporated in 1914",
            x: 32,
            y: 48,
            fact: "This company, incorporated in 1914 by David R. Coker (1870-1938), grew out of his pioneering work breeding plants and developing high-quality seeds.",
          },
          {
            id: "crops",
            label: "Cotton, then other crops",
            x: 74,
            y: 58,
            fact: "At first focusing on helping Southern farmers grow superior upland cotton, it later had great success with corn, wheat, oats, soybeans, tobacco, and other crops.",
          },
        ],
      },
      {
        kind: "scene",
        id: "farms",
        kicker: "1964",
        title: "A landmark, then 35 acres kept",
        partLabel: "the experimental farms",
        art: art(
          "m1665-farm.jpg",
          "Illustration of barns beside broad experimental fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "landmark",
            label: "A landmark in 1964",
            x: 32,
            y: 48,
            fact: "The trademark of the company was a red heart with the motto “Blood Will Tell.” Coker Experimental Farms, begun on a 220-acre tract nearby, was designated a National Historic Landmark (NHL) in 1964 and included several thousand acres when it closed in 1988.",
          },
          {
            id: "foundation",
            label: "A foundation in 1998",
            x: 74,
            y: 58,
            fact: "The Coker Farms NHL Foundation was created in 1998 to preserve and interpret 35 acres of the historic farm complex.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "220 acres",
        title: "Acres where the experimental farms began",
        partLabel: "220 acres",
        value: 220,
        unit: "acres",
        meant:
          "What this meant: the marker says Coker Experimental Farms began on a 220-acre tract nearby.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1665-farm.jpg",
          "Illustration of barns beside broad experimental fields. Not a historical photograph.",
        ),
        nowArt: art(
          "m1665-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of barns and fields, for the experimental farms the marker says began on a 220-acre tract nearby. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "incorporated",
            year: "1914",
            label: "David R. Coker incorporates the company.",
            why: "The marker says this company was incorporated in 1914 by David R. Coker (1870-1938).",
          },
          {
            id: "landmark",
            year: "1964",
            label: "Coker Experimental Farms is named a National Historic Landmark.",
            why: "The marker says Coker Experimental Farms was designated a National Historic Landmark (NHL) in 1964.",
          },
          {
            id: "closed",
            year: "1988",
            label: "The farms close, covering several thousand acres.",
            why: "The marker says the farms included several thousand acres when they closed in 1988.",
          },
          {
            id: "foundation",
            year: "1998",
            label: "The Coker Farms NHL Foundation is created.",
            why: "The marker says the Coker Farms NHL Foundation was created in 1998 to preserve and interpret 35 acres of the historic farm complex.",
          },
        ],
        ["closed", "incorporated", "foundation", "landmark"],
      ),
      takeaway([
        "This company, incorporated in 1914 by David R. Coker (1870-1938), grew out of his pioneering work breeding plants and developing high-quality seeds.",
        "At first focusing on helping Southern farmers grow superior upland cotton, it later had great success with corn, wheat, oats, soybeans, tobacco, and other crops.",
        "Coker Experimental Farms, begun on a 220-acre tract nearby, was designated a National Historic Landmark (NHL) in 1964 and included several thousand acres when it closed in 1988.",
      ]),
    ],
  ),
  lesson(
    "16-66",
    "The first African-American church in Lamar",
    "John Wesley Methodist Church timeline",
    [
      cited("16-66", "John Wesley Methodist Church", "front and back"),
      span(
        '"40 years" is 1906 minus 1866, the years the marker prints for when a frame sanctuary was completed here and when that church burned.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "arbor",
        kicker: "About 1865",
        title: "Organized by Rev. John Boston",
        partLabel: "the brush arbor",
        art: art(
          "m1666-arbor.jpg",
          "Illustration of a brush arbor in a pine clearing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Founded about 1865",
            x: 32,
            y: 48,
            fact: "This church, founded about 1865, is the first African-American church in Lamar and was long known as Lamar Colored Methodist Episcopal Church.",
          },
          {
            id: "boston",
            label: "Rev. John Boston",
            x: 74,
            y: 58,
            fact: "It was organized by Rev. John Boston, a former slave who was its first minister, serving here 1865-67. Boston, who also represented Darlington Co. in the S.C. House 1868-70 and 1872-74, is buried in the church cemetery. The old Boston Township was named for him.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "About 1866",
        title: "A frame sanctuary, then a fire",
        partLabel: "the frame sanctuary",
        art: art(
          "m1666-church.jpg",
          "Illustration of a frame church with pointed windows. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "frame",
            label: "Completed about 1866",
            x: 32,
            y: 48,
            fact: "The church held its first services in a brush arbor, but completed a frame sanctuary here about 1866. That church burned in 1906 and was replaced later that year by the present frame sanctuary, a Gothic Revival building.",
          },
          {
            id: "school",
            label: "Lights in 1935",
            x: 74,
            y: 58,
            fact: "In 1916 trustees donated a half-acree for the Lamar Colored School, later Spaulding High School. Electricity replaced gas lights in 1935 and the exterior was covered in brick veneer in the 1950s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1866-1906",
        title: "Years from the first frame sanctuary to the fire",
        partLabel: "40 years",
        value: 40,
        unit: "years",
        meant:
          "What this meant: 1906 comes 40 years after 1866. That is the stretch from the year a frame sanctuary was completed here to the year that church burned.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1666-church.jpg",
          "Illustration of a frame church with pointed windows. Not a historical photograph.",
        ),
        nowArt: art(
          "m1666-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame church, for the sanctuary the marker says was completed here about 1866 and replaced after a fire in 1906. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1865",
            label: "The church is founded in Lamar.",
            why: "The marker says this church, founded about 1865, is the first African-American church in Lamar.",
          },
          {
            id: "frame",
            year: "1866",
            label: "A frame sanctuary is completed here.",
            why: "The marker says the church completed a frame sanctuary here about 1866.",
          },
          {
            id: "burned",
            year: "1906",
            label: "That church burns and is replaced later that year.",
            why: "The marker says that church burned in 1906 and was replaced later that year by the present frame sanctuary, a Gothic Revival building.",
          },
          {
            id: "lights",
            year: "1935",
            label: "Electricity replaces gas lights.",
            why: "The marker says electricity replaced gas lights in 1935.",
          },
        ],
        ["lights", "founded", "burned", "frame"],
      ),
      takeaway([
        "This church, founded about 1865, is the first African-American church in Lamar and was long known as Lamar Colored Methodist Episcopal Church.",
        "It was organized by Rev. John Boston, a former slave who was its first minister, serving here 1865-67.",
        "The church held its first services in a brush arbor, but completed a frame sanctuary here about 1866. That church burned in 1906 and was replaced later that year by the present frame sanctuary, a Gothic Revival building.",
      ]),
    ],
  ),
  lesson(
    "16-67",
    "A comfortable meeting house about 1832",
    "New Providence Baptist Church timeline",
    [
      cited("16-67", "New Providence Baptist Church", "front and back"),
      span(
        '"11 years" is 1913 minus 1902, the years the marker prints for when the New Providence School nearby taught grades 1-8.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "log",
        kicker: "1804",
        title: "From a brush arbor to a log church",
        partLabel: "the log church",
        art: art(
          "m1667-log.jpg",
          "Illustration of a log meeting house beside a brush arbor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "meetings",
            label: "As early as 1804",
            x: 32,
            y: 48,
            fact: "This church, with its origins in meetings held in a brush arbor as early as 1804, was organized into a formal congregation in 1812, with Rev. Charles Williams as its first pastor.",
          },
          {
            id: "meetinghouse",
            label: "About 1832",
            x: 74,
            y: 58,
            fact: "Its first permanent church, a log building about 2 mi. NE, was replaced by a “comfortable meeting house” on that site about 1832.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1891",
        title: "This frame sanctuary, and a school",
        partLabel: "the frame sanctuary",
        art: art(
          "m1667-church.jpg",
          "Illustration of a frame church among oaks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "vote",
            label: "A vote in 1850",
            x: 32,
            y: 48,
            fact: "In 1850, after the congregation voted not to relocate to a site near Hartsville, some members and some from Gum Branch Baptist Church left to found First Baptist Church in Hartsville.",
          },
          {
            id: "site",
            label: "Built in 1891",
            x: 74,
            y: 58,
            fact: "The church acquired this 1.5-acre site in 1890 and built the present frame sanctuary in 1891, with several later renovations. The New Providence School nearby taught grades 1-8 from 1902 to 1913.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1902-1913",
        title: "Years the nearby school taught grades 1-8",
        partLabel: "11 years",
        value: 11,
        unit: "years",
        meant:
          "What this meant: 1913 comes 11 years after 1902. That is the stretch between the two years the marker prints for when the New Providence School nearby taught grades 1-8.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1667-church.jpg",
          "Illustration of a frame church among oaks. Not a historical photograph.",
        ),
        nowArt: art(
          "m1667-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame church, for the present sanctuary the marker says was built in 1891. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "meetings",
            year: "1804",
            label: "Meetings begin in a brush arbor.",
            why: "The marker says the church has its origins in meetings held in a brush arbor as early as 1804.",
          },
          {
            id: "organized",
            year: "1812",
            label: "A formal congregation is organized.",
            why: "The marker says the church was organized into a formal congregation in 1812, with Rev. Charles Williams as its first pastor.",
          },
          {
            id: "meetinghouse",
            year: "1832",
            label: "A comfortable meeting house replaces the log building.",
            why: "The marker says the first permanent church, a log building about 2 mi. NE, was replaced by a “comfortable meeting house” on that site about 1832.",
          },
          {
            id: "sanctuary",
            year: "1891",
            label: "The present frame sanctuary is built.",
            why: "The marker says the church acquired this 1.5-acre site in 1890 and built the present frame sanctuary in 1891.",
          },
        ],
        ["meetinghouse", "sanctuary", "meetings", "organized"],
      ),
      takeaway([
        "This church, with its origins in meetings held in a brush arbor as early as 1804, was organized into a formal congregation in 1812, with Rev. Charles Williams as its first pastor.",
        "Its first permanent church, a log building about 2 mi. NE, was replaced by a “comfortable meeting house” on that site about 1832.",
        "The church acquired this 1.5-acre site in 1890 and built the present frame sanctuary in 1891, with several later renovations.",
      ]),
    ],
  ),
  lesson(
    "16-68",
    "The present brick church in 2000",
    "Flat Creek Baptist Church timeline",
    [
      cited("16-68", "Flat Creek Baptist Church", "front and back"),
      span(
        '"123 years" is 2000 minus 1877, the years the marker prints for when the church was founded and when the congregation built the present brick church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "arbor",
        kicker: "1877",
        title: "Founded, then a frame sanctuary",
        partLabel: "the first services",
        art: art(
          "m1668-arbor.jpg",
          "Illustration of a brush arbor beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Founded in 1877",
            x: 32,
            y: 48,
            fact: "This African-American church was founded in 1877, with Rev. Daniel Jesse as its first pastor. It held its first services in a brush arbor, and acquired a site about 2 mi. SE on Flat Creek Rd. in 1881, building a frame sanctuary there.",
          },
          {
            id: "names",
            label: "Renamed by 1927",
            x: 74,
            y: 58,
            fact: "The church, known through the years as Simmons’ Flat, Summer’s House, the Grove, and Marggie Branch, was renamed Flat Creek Baptist Church by 1927.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brick",
        kicker: "1913",
        title: "Butler’s first pastorate",
        partLabel: "the brick church",
        art: art(
          "m1668-brick.jpg",
          "Illustration of a plain brick church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "butler",
            label: "Pastor in 1913",
            x: 32,
            y: 48,
            fact: "In 1913 Rev. Henry Hannibal Butler (1887-1948), newly ordained, came to Flat Creek Baptist Church as his first pastorate. Butler, principal of Darlington Co. Training School / Butler School in Hartsville (renamed for him in 1939), was later president of the S.C. State Baptist Convention and president of Morris College.",
          },
          {
            id: "moved",
            label: "Brick church in 2000",
            x: 74,
            y: 58,
            fact: "The congregation moved here and built the present brick church in 2000.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1877-2000",
        title: "Years from the founding to the brick church",
        partLabel: "123 years",
        value: 123,
        unit: "years",
        meant:
          "What this meant: 2000 comes 123 years after 1877. That is the stretch from the year the church was founded to the year the congregation built the present brick church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1668-brick.jpg",
          "Illustration of a plain brick church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1668-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick church, for the present building the marker says the congregation built in 2000. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1877",
            label: "The church is founded.",
            why: "The marker says this African-American church was founded in 1877, with Rev. Daniel Jesse as its first pastor.",
          },
          {
            id: "site",
            year: "1881",
            label: "A frame sanctuary is built about 2 miles southeast.",
            why: "The marker says the church acquired a site about 2 mi. SE on Flat Creek Rd. in 1881, building a frame sanctuary there.",
          },
          {
            id: "butler",
            year: "1913",
            label: "Rev. Henry Hannibal Butler comes as pastor.",
            why: "The marker says in 1913 Rev. Henry Hannibal Butler (1887-1948), newly ordained, came to Flat Creek Baptist Church as his first pastorate.",
          },
          {
            id: "brick",
            year: "2000",
            label: "The congregation builds the present brick church.",
            why: "The marker says the congregation moved here and built the present brick church in 2000.",
          },
        ],
        ["butler", "brick", "founded", "site"],
      ),
      takeaway([
        "This African-American church was founded in 1877, with Rev. Daniel Jesse as its first pastor.",
        "In 1913 Rev. Henry Hannibal Butler (1887-1948), newly ordained, came to Flat Creek Baptist Church as his first pastorate.",
        "The congregation moved here and built the present brick church in 2000.",
      ]),
    ],
  ),
];
