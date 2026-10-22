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

export const greenvilleLessonsU: MarkerLesson[] = [
  lesson(
    "23-89",
    "A fifth sanctuary with an octagonal tower",
    "Gap Creek Baptist Church timeline",
    [
      cited("23-89", "Gap Creek Baptist Church", "front and back"),
      span(
        '"80 years" is 2008 minus 1928, the years the marker prints for the fifth sanctuary built in 1928 and the current sanctuary completed in 2008.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "log",
        kicker: "1840",
        title: "Meetings in a log building",
        partLabel: "the log building",
        art: art(
          "m2389-log.jpg",
          "Illustration of a log meeting house beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1840",
            x: 32,
            y: 50,
            fact: "Gap Creek Baptist Church was established in 1840 and meetings were held in a log building that stood nearby to Gap Creek.",
          },
          {
            id: "enoree",
            label: "1850",
            x: 74,
            y: 34,
            fact: "In 1850 the church was a founding member of the Enoree River Association. A second church was built c.1859 on land donated by Champion Osborn. This church would remain in use until it burned in 1868 and was promptly replaced by a new building.",
          },
        ],
      },
      {
        kind: "scene",
        id: "tower",
        kicker: "1928",
        title: "The fifth sanctuary",
        partLabel: "the fifth sanctuary",
        art: art(
          "m2389-tower.jpg",
          "Illustration of a frame church with an octagonal-roofed bell tower. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "north",
            label: "1887",
            x: 32,
            y: 46,
            fact: "In 1887 Gap Creek became a founding member of the North Greenville Association, of which it is still a member.",
          },
          {
            id: "fifth",
            label: "1928",
            x: 74,
            y: 32,
            fact: "The frame building with octagonal-roofed bell tower became the fifth sanctuary to serve the congregation when it was built in 1928. The stained glass windows were imported from France. It served the community until 2008, when the current sanctuary was completed.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1928-2008",
        title: "Years from the fifth sanctuary to the current one",
        partLabel: "80 years",
        value: 80,
        unit: "years",
        meant:
          "What this meant: 2008 comes 80 years after 1928. That is the stretch from the year the marker prints for the fifth sanctuary to the year the current sanctuary was completed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2389-tower.jpg",
          "Illustration of a frame church with an octagonal-roofed bell tower. Not a historical photograph.",
        ),
        nowArt: art(
          "m2389-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame church with an octagonal-roofed bell tower, for the fifth sanctuary the marker says was built in 1928. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "established",
            year: "1840",
            label: "Gap Creek Baptist Church is established.",
            why: "The marker says Gap Creek Baptist Church was established in 1840 and meetings were held in a log building that stood nearby to Gap Creek.",
          },
          {
            id: "enoree",
            year: "1850",
            label: "The church helps found the Enoree River Association.",
            why: "The marker says that in 1850 the church was a founding member of the Enoree River Association.",
          },
          {
            id: "second",
            year: "c.1859",
            label: "A second church is built on land given by Champion Osborn.",
            why: "The marker says a second church was built c.1859 on land donated by Champion Osborn.",
          },
          {
            id: "burned",
            year: "1868",
            label: "The second church burns and is replaced.",
            why: "The marker says this church would remain in use until it burned in 1868 and was promptly replaced by a new building.",
          },
          {
            id: "north",
            year: "1887",
            label: "Gap Creek helps found the North Greenville Association.",
            why: "The marker says that in 1887 Gap Creek became a founding member of the North Greenville Association, of which it is still a member.",
          },
          {
            id: "fifth",
            year: "1928",
            label: "The fifth sanctuary is built.",
            why: "The marker says the frame building with octagonal-roofed bell tower became the fifth sanctuary to serve the congregation when it was built in 1928. The stained glass windows were imported from France.",
          },
          {
            id: "current",
            year: "2008",
            label: "The current sanctuary is completed.",
            why: "The marker says the 1928 building served the community until 2008, when the current sanctuary was completed.",
          },
        ],
        ["fifth", "established", "current", "second", "north", "enoree", "burned"],
      ),
      takeaway([
        "Gap Creek Baptist Church was established in 1840 and meetings were held in a log building that stood nearby to Gap Creek.",
        "In 1850 the church was a founding member of the Enoree River Association, and in 1887 it became a founding member of the North Greenville Association, of which it is still a member.",
        "The frame building with octagonal-roofed bell tower became the fifth sanctuary when it was built in 1928, and it served the community until 2008, when the current sanctuary was completed.",
      ]),
    ],
  ),
  lesson(
    "23-90",
    "Fifteen veterans and a granite lodge",
    "Post 3 American Legion timeline",
    [cited("23-90", "Post 3 American Legion", "front and back")],
    [
      {
        kind: "scene",
        id: "post",
        kicker: "1919",
        title: "Fifteen veterans start Post 3",
        partLabel: "the post",
        art: art(
          "m2390-hall.jpg",
          "Illustration of an empty meeting hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1919",
            x: 32,
            y: 52,
            fact: "In 1919, fifteen World War I veterans from Greenville established Post 3 of The American Legion.",
          },
          {
            id: "auxiliary",
            label: "1920",
            x: 74,
            y: 34,
            fact: "The Women's Auxiliary was est. 1920. Members helped raise funds for the lodge's construction and used it for events and meetings.",
          },
        ],
      },
      {
        kind: "scene",
        id: "lodge",
        kicker: "1933-34",
        title: "The first dedicated lodge",
        partLabel: "the granite lodge",
        art: art(
          "m2390-lodge.jpg",
          "Illustration of a granite lodge. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1933-34",
            x: 32,
            y: 48,
            fact: "This was the Post's first dedicated lodge. It was built 1933-34 on municipal land using locally quarried granite. Labor was provided by the Reconstruction Finance Corporation. Costs were paid through membership dues and fundraisers.",
          },
          {
            id: "dedicated",
            label: "June 18, 1934",
            x: 74,
            y: 32,
            fact: "Post members began meeting here in Oct. 1933, and the lodge was dedicated June 18, 1934. In 1960, Post 3 was renamed in honor of James F. Daniel, Jr. (c.1899-1959), the first Post Commander at this location and later National Executive Chairman for The American Legion. Among the Post's civic projects in the mid-century Greenville area were the Goodfellows Club and Greenville County Fair.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1919",
        title: "Veterans who established the post",
        partLabel: "15 veterans",
        value: 15,
        unit: "veterans",
        meant:
          "What this meant: the marker says that in 1919, fifteen World War I veterans from Greenville established Post 3 of The American Legion.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2390-lodge.jpg",
          "Illustration of a granite lodge. Not a historical photograph.",
        ),
        nowArt: art(
          "m2390-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a granite lodge, for the Post's first dedicated lodge the marker says was built 1933-34. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1919",
            label: "Fifteen World War I veterans establish Post 3.",
            why: "The marker says that in 1919, fifteen World War I veterans from Greenville established Post 3 of The American Legion.",
          },
          {
            id: "auxiliary",
            year: "1920",
            label: "The Women's Auxiliary is established.",
            why: "The marker says the Women's Auxiliary was est. 1920. Members helped raise funds for the lodge's construction and used it for events and meetings.",
          },
          {
            id: "meeting",
            year: "Oct. 1933",
            label: "Post members begin meeting in the lodge.",
            why: "The marker says Post members began meeting here in Oct. 1933.",
          },
          {
            id: "dedicated",
            year: "June 18, 1934",
            label: "The lodge is dedicated.",
            why: "The marker says the lodge was dedicated June 18, 1934. It was the Post's first dedicated lodge, built 1933-34 on municipal land using locally quarried granite. Labor was provided by the Reconstruction Finance Corporation. Costs were paid through membership dues and fundraisers.",
          },
          {
            id: "renamed",
            year: "1960",
            label: "Post 3 is renamed for James F. Daniel, Jr.",
            why: "The marker says that in 1960, Post 3 was renamed in honor of James F. Daniel, Jr. (c.1899-1959), the first Post Commander at this location and later National Executive Chairman for The American Legion. Among the Post's civic projects in the mid-century Greenville area were the Goodfellows Club and Greenville County Fair.",
          },
        ],
        ["dedicated", "founded", "renamed", "meeting", "auxiliary"],
      ),
      takeaway([
        "In 1919, fifteen World War I veterans from Greenville established Post 3 of The American Legion.",
        "The Post's first dedicated lodge was built 1933-34 on municipal land using locally quarried granite, and it was dedicated June 18, 1934.",
        "In 1960, Post 3 was renamed in honor of James F. Daniel, Jr. (c.1899-1959), the first Post Commander at this location and later National Executive Chairman for The American Legion.",
      ]),
    ],
  ),
  lesson(
    "23-91",
    "A single grave in a rose garden",
    "Springwood Cemetery timeline",
    [cited("23-91", "Springwood Cemetery", "front and back")],
    [
      {
        kind: "scene",
        id: "garden",
        kicker: "1812",
        title: "A private burial ground",
        partLabel: "the rose garden",
        art: art(
          "m2391-garden.jpg",
          "Illustration of a rose garden with one grave. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "begun",
            label: "1812",
            x: 32,
            y: 54,
            fact: "Begun in 1812 as a single grave in a family rose garden, this was a private burial ground. Its founder was Chancellor Waddy Thompson, Sr.",
          },
          {
            id: "public",
            label: "1829",
            x: 74,
            y: 36,
            fact: "It was deeded to the City of Greenville and opened to the public in 1829.",
          },
        ],
      },
      {
        kind: "scene",
        id: "grounds",
        kicker: "1876",
        title: "A landscape laid out in 1876",
        partLabel: "the laid-out grounds",
        art: art(
          "m2391-grounds.jpg",
          "Illustration of a formally laid-out cemetery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "name",
            label: "1870s",
            x: 32,
            y: 46,
            fact: "The name “Springwood Cemetery” came into use in the 1870s and likely refers to a nearby natural spring. The landscape was formally laid out in 1876 and designed by architect Gottfried Norrman.",
          },
          {
            id: "listed",
            label: "2005",
            x: 74,
            y: 32,
            fact: "Springwood Cemetery is one of the oldest municipal graveyards in the state. More than 10,000 people are buried here, a quarter of them in unmarked graves. Occupants range from prominent Upstate leaders to Greenvillians of more modest stations, a diversity reflected in the variety of ornamentation used to mark the cemetery's gravesites. Springwood was listed in the National Register of Historic Places in 2005.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "More than 10,000",
        title: "People buried here",
        partLabel: "more than 10,000",
        value: 10000,
        unit: "people",
        meant:
          "What this meant: the marker says more than 10,000 people are buried here, a quarter of them in unmarked graves.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2391-grounds.jpg",
          "Illustration of a formally laid-out cemetery. Not a historical photograph.",
        ),
        nowArt: art(
          "m2391-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a formally laid-out cemetery, for the landscape the marker says was designed by architect Gottfried Norrman in 1876. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "begun",
            year: "1812",
            label: "A single grave is begun in a family rose garden.",
            why: "The marker says it was begun in 1812 as a single grave in a family rose garden, and that this was a private burial ground. Its founder was Chancellor Waddy Thompson, Sr.",
          },
          {
            id: "public",
            year: "1829",
            label: "The burial ground is deeded to the city and opened to the public.",
            why: "The marker says it was deeded to the City of Greenville and opened to the public in 1829.",
          },
          {
            id: "name",
            year: "1870s",
            label: "The name Springwood Cemetery comes into use.",
            why: "The marker says the name “Springwood Cemetery” came into use in the 1870s and likely refers to a nearby natural spring.",
          },
          {
            id: "layout",
            year: "1876",
            label: "Gottfried Norrman lays out the landscape.",
            why: "The marker says the landscape was formally laid out in 1876 and designed by architect Gottfried Norrman.",
          },
          {
            id: "listed",
            year: "2005",
            label: "Springwood is listed in the National Register.",
            why: "The marker says Springwood was listed in the National Register of Historic Places in 2005. It is one of the oldest municipal graveyards in the state. More than 10,000 people are buried here, a quarter of them in unmarked graves.",
          },
        ],
        ["layout", "begun", "listed", "name", "public"],
      ),
      takeaway([
        "Begun in 1812 as a single grave in a family rose garden, this was a private burial ground before being deeded to the City of Greenville and opened to the public in 1829.",
        "The name “Springwood Cemetery” came into use in the 1870s and likely refers to a nearby natural spring. The landscape was formally laid out in 1876 and designed by architect Gottfried Norrman.",
        "More than 10,000 people are buried here, a quarter of them in unmarked graves, and Springwood was listed in the National Register of Historic Places in 2005.",
      ]),
    ],
  ),
  lesson(
    "23-92",
    "A log cabin that became Greek Revival",
    "John H. Goodwin House timeline",
    [cited("23-92", "John H. Goodwin House", "front and back")],
    [
      {
        kind: "scene",
        id: "cabin",
        kicker: "c.1793",
        title: "A two-room log cabin",
        partLabel: "the log cabin",
        art: art(
          "m2392-cabin.jpg",
          "Illustration of a two-room log cabin. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "c.1793",
            x: 32,
            y: 50,
            fact: "Among the oldest surviving buildings in Greenville County, the John H. Goodwin House originated as a 2-room log cabin built c.1793 by Robert Cooke.",
          },
          {
            id: "dogtrot",
            label: "Dogtrot",
            x: 74,
            y: 34,
            fact: "It is significant for its evolution into a 2-story dogtrot and, finally, the vernacular Greek Revival form it assumed c.1842, when John H. Goodwin bought the house and 600 ac. of land. Goodwin family descendants owned the home until 2005.",
          },
        ],
      },
      {
        kind: "scene",
        id: "house",
        kicker: "1860",
        title: "A plantation house, then a stage stop",
        partLabel: "the plantation house",
        art: art(
          "m2392-house.jpg",
          "Illustration of a vernacular Greek Revival house and a small store. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "enslaved",
            label: "1860",
            x: 32,
            y: 46,
            fact: "Before the Civil War, the house was the center of a plantation where, in 1860, thirty enslaved people lived in four dwellings. It also likely housed the Orleans/Lima post office during Goodwin's long tenure as postmaster.",
          },
          {
            id: "stage",
            label: "After the war",
            x: 74,
            y: 32,
            fact: "After the war, the home was a popular stage stop and inn for travelers between Greenville and Asheville. Near the road is a relocated store building, likely constructed c.1870.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "c.1842",
        title: "Acres bought with the house",
        partLabel: "600 acres",
        value: 600,
        unit: "acres",
        meant:
          "What this meant: the marker says that c.1842, when the house assumed its vernacular Greek Revival form, John H. Goodwin bought the house and 600 ac. of land.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2392-house.jpg",
          "Illustration of a vernacular Greek Revival house and a small store. Not a historical photograph.",
        ),
        nowArt: art(
          "m2392-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a vernacular Greek Revival house, for the form the marker says the house assumed c.1842. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "c.1793",
            label: "Robert Cooke builds a two-room log cabin.",
            why: "The marker says the John H. Goodwin House originated as a 2-room log cabin built c.1793 by Robert Cooke. It is among the oldest surviving buildings in Greenville County.",
          },
          {
            id: "greek",
            year: "c.1842",
            label: "John H. Goodwin buys the house and 600 acres.",
            why: "The marker says the house is significant for its evolution into a 2-story dogtrot and, finally, the vernacular Greek Revival form it assumed c.1842, when John H. Goodwin bought the house and 600 ac. of land.",
          },
          {
            id: "enslaved",
            year: "1860",
            label: "Thirty enslaved people live in four dwellings.",
            why: "The marker says that before the Civil War, the house was the center of a plantation where, in 1860, thirty enslaved people lived in four dwellings.",
          },
          {
            id: "stage",
            year: "After the war",
            label: "The home is a stage stop and inn.",
            why: "The marker says that after the war, the home was a popular stage stop and inn for travelers between Greenville and Asheville.",
          },
          {
            id: "store",
            year: "c.1870",
            label: "A store building is constructed.",
            why: "The marker says that near the road is a relocated store building, likely constructed c.1870.",
          },
          {
            id: "owned",
            year: "2005",
            label: "Goodwin family descendants' ownership ends.",
            why: "The marker says Goodwin family descendants owned the home until 2005.",
          },
        ],
        ["owned", "built", "store", "greek", "enslaved", "stage"],
      ),
      takeaway([
        "The John H. Goodwin House originated as a 2-room log cabin built c.1793 by Robert Cooke, then evolved into a 2-story dogtrot and a vernacular Greek Revival form c.1842.",
        "Before the Civil War, the house was the center of a plantation where, in 1860, thirty enslaved people lived in four dwellings.",
        "Goodwin family descendants owned the home until 2005.",
      ]),
    ],
  ),
];
