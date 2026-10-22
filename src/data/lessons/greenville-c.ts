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

export const greenvilleLessonsC: MarkerLesson[] = [
  lesson(
    "23-12",
    "Earliest settlers buried east of this point",
    "Old Greenville Graveyard timeline",
    [cited("23-12", "Old Greenville Graveyard", "front and back")],
    [
      {
        kind: "scene",
        id: "settlers",
        kicker: "1762-1823",
        title: "Earle settlers buried east of here",
        partLabel: "the settlers",
        art: art(
          "m2312-settlers.jpg",
          "Illustration of a small burial ground and smooth stones. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "elias",
            label: "Elias Earle",
            x: 32,
            y: 48,
            fact: "About 150 feet east of this point are buried some of Greenville's earliest settlers, including Elias Earle (1762-1823), State Representative and Senator and United States Congressman.",
          },
          {
            id: "clerk",
            label: "Clerk of Court",
            x: 74,
            y: 60,
            fact: "George Washington Earle (1777-1821), wealthy planter and early Greenville Clerk of Court, and their immediate families are buried about 150 feet east of this point.",
          },
        ],
      },
      {
        kind: "scene",
        id: "descendants",
        kicker: "1847",
        title: "An infant son and an unmarked grave",
        partLabel: "the descendants",
        art: art(
          "m2312-unmarked.jpg",
          "Illustration of an unmarked grave mound and a blank stone. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "yancey",
            label: "George Earle Yancey",
            x: 32,
            y: 44,
            fact: 'Among the Earle descendants buried about 150 feet east of this point is George Earle Yancey, infant son of William Lowndes Yancey, known as the "father of secession," and Sarah Caroline Earle Yancey.',
          },
          {
            id: "drayton",
            label: "1847",
            x: 74,
            y: 62,
            fact: "In an unmarked grave is buried Elias Drayton Earle, South Carolina Superintendent of Public Works, 1847.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "About 150 feet",
        title: "East of this point",
        partLabel: "150 feet",
        value: 150,
        unit: "feet",
        meant:
          "What this meant: the marker says that about 150 feet east of this point are buried some of Greenville's earliest settlers.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2312-settlers.jpg",
          "Illustration of a small burial ground and smooth stones. Not a historical photograph.",
        ),
        nowArt: art(
          "m2312-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small burial ground, for the earliest settlers the marker says are buried about 150 feet east of this point. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a tree-lined road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "elias",
            year: "1762",
            label: "Elias Earle (1762-1823) is named among the settlers buried here.",
            why: "The marker says some of Greenville's earliest settlers are buried about 150 feet east of this point, including Elias Earle (1762-1823), State Representative and Senator and United States Congressman.",
          },
          {
            id: "george",
            year: "1777",
            label: "George Washington Earle (1777-1821) is named among them.",
            why: "The marker names George Washington Earle (1777-1821), wealthy planter and early Greenville Clerk of Court, and their immediate families.",
          },
          {
            id: "works",
            year: "1847",
            label: "Elias Drayton Earle is named as Superintendent of Public Works.",
            why: "The marker says in an unmarked grave is buried Elias Drayton Earle, South Carolina Superintendent of Public Works, 1847.",
          },
        ],
        ["works", "elias", "george"],
      ),
      takeaway([
        "About 150 feet east of this point are buried some of Greenville's earliest settlers, including Elias Earle (1762-1823), State Representative and Senator and United States Congressman; George Washington Earle (1777-1821), wealthy planter and early Greenville Clerk of Court; and their immediate families.",
        'Among the Earle descendants buried about 150 feet east of this point is George Earle Yancey, infant son of William Lowndes Yancey, known as the "father of secession," and Sarah Caroline Earle Yancey.',
        "In an unmarked grave is buried Elias Drayton Earle, South Carolina Superintendent of Public Works, 1847.",
      ]),
    ],
  ),
  lesson(
    "23-14",
    "Occupied this site for over a century",
    "Furman University timeline",
    [
      cited("23-14", "Furman University", "front"),
      span(
        '"106 years" is 1958 minus 1852, the years the marker prints for occupying this site.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "academy",
        kicker: "1825",
        title: "Opened at Edgefield, then moved",
        partLabel: "the academy",
        art: art(
          "m2314-academy.jpg",
          "Illustration of a small brick academy and oaks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "edgefield",
            label: "Edgefield, 1826",
            x: 32,
            y: 46,
            fact: "Established in 1825 by the S. C. Baptist Convention, the Furman Academy and Theological Institution opened at Edgefield, 1826.",
          },
          {
            id: "fairfield",
            label: "Sumter, then Fairfield",
            x: 74,
            y: 58,
            fact: "The Furman Academy and Theological Institution moved to Sumter District, 1829-34, and to Fairfield, 1837-50.",
          },
        ],
      },
      {
        kind: "scene",
        id: "campus",
        kicker: "1851",
        title: "Opened in Greenville on this site",
        partLabel: "this site",
        art: art(
          "m2314-campus.jpg",
          "Illustration of brick college halls around a lawn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "site",
            label: "1852-1958",
            x: 32,
            y: 42,
            fact: "Chartered in 1850 as Furman University, it opened in Greenville, 1851, and for over a century, 1852-1958, occupied this site purchased from Vardry McBee.",
          },
          {
            id: "north",
            label: "Summer of 1958",
            x: 74,
            y: 64,
            fact: "In the summer of 1958, Furman moved to a new campus six miles north of town.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1852-1958",
        title: "Years occupying this site",
        partLabel: "106 years",
        value: 106,
        unit: "years",
        meant:
          "What this meant: 1958 comes 106 years after 1852. That is the stretch the marker prints as 1852-1958, the years Furman occupied this site, which it calls over a century.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2314-campus.jpg",
          "Illustration of brick college halls around a lawn. Not a historical photograph.",
        ),
        nowArt: art(
          "m2314-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of brick college halls, for the site the marker says Furman occupied from 1852 to 1958. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker at the edge of a lawn. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "established",
            year: "1825",
            label: "The S. C. Baptist Convention establishes the academy.",
            why: "The marker says it was established in 1825 by the S. C. Baptist Convention.",
          },
          {
            id: "edgefield",
            year: "1826",
            label: "The Furman Academy and Theological Institution opens at Edgefield.",
            why: "The marker says the Furman Academy and Theological Institution opened at Edgefield, 1826, moved to Sumter District, 1829-34, and to Fairfield, 1837-50.",
          },
          {
            id: "greenville",
            year: "1851",
            label: "It opens in Greenville.",
            why: "The marker says it was chartered in 1850 as Furman University, opened in Greenville, 1851, and for over a century, 1852-1958, occupied this site purchased from Vardry McBee.",
          },
          {
            id: "moved",
            year: "1958",
            label: "Furman moves to a new campus six miles north of town.",
            why: "The marker says in the summer of 1958, Furman moved to a new campus six miles north of town.",
          },
        ],
        ["greenville", "established", "moved", "edgefield"],
      ),
      takeaway([
        "Established in 1825 by the S. C. Baptist Convention, the Furman Academy and Theological Institution opened at Edgefield, 1826, moved to Sumter District, 1829-34, and to Fairfield, 1837-50.",
        "Chartered in 1850 as Furman University, it opened in Greenville, 1851, and for over a century, 1852-1958, occupied this site purchased from Vardry McBee.",
        "In the summer of 1958, Furman moved to a new campus six miles north of town.",
      ]),
    ],
  ),
  lesson(
    "23-15",
    "Opened as Greenville Baptist Female College",
    "Greenville Woman's College timeline",
    [cited("23-15", "Greenville Woman's College", "front")],
    [
      {
        kind: "scene",
        id: "college",
        kicker: "February 1856",
        title: "Opened on a donated site",
        partLabel: "the college",
        art: art(
          "m2315-college.jpg",
          "Illustration of a brick college with a columned porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "February 1856",
            x: 32,
            y: 46,
            fact: "Established in 1854 by the S. C. Baptist Convention, this institution opened as Greenville Baptist Female College in February 1856.",
          },
          {
            id: "donated",
            label: "Vardry McBee",
            x: 74,
            y: 60,
            fact: "It opened on this site originally donated by Vardry McBee to the Greenville Academies.",
          },
        ],
      },
      {
        kind: "scene",
        id: "merged",
        kicker: "1914",
        title: "Renamed, then merged with Furman",
        partLabel: "the later years",
        art: art(
          "m2315-wing.jpg",
          "Illustration of a brick college and a long side wing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "renamed",
            label: "1914",
            x: 32,
            y: 44,
            fact: "Its name was changed to Greenville Woman's College in 1914.",
          },
          {
            id: "furman",
            label: "1938 and 1961",
            x: 74,
            y: 62,
            fact: "It was coordinated with Furman University in 1933, merged with Furman in 1938, and moved in 1961 to the consolidated campus six miles north of town.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1961",
        title: "Miles north of town",
        partLabel: "six miles",
        value: 6,
        unit: "miles",
        meant:
          "What this meant: the marker says it moved in 1961 to the consolidated campus six miles north of town.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2315-college.jpg",
          "Illustration of a brick college with a columned porch. Not a historical photograph.",
        ),
        nowArt: art(
          "m2315-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick college, for the institution the marker says opened as Greenville Baptist Female College in February 1856. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a brick walk. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "February 1856",
            label: "It opens as Greenville Baptist Female College.",
            why: "The marker says this institution opened as Greenville Baptist Female College in February 1856, on this site originally donated by Vardry McBee to the Greenville Academies.",
          },
          {
            id: "renamed",
            year: "1914",
            label: "Its name is changed to Greenville Woman's College.",
            why: "The marker says its name was changed to Greenville Woman's College in 1914.",
          },
          {
            id: "merged",
            year: "1938",
            label: "It merges with Furman.",
            why: "The marker says it was coordinated with Furman University in 1933 and merged with Furman in 1938.",
          },
          {
            id: "moved",
            year: "1961",
            label: "It moves to the consolidated campus six miles north of town.",
            why: "The marker says it moved in 1961 to the consolidated campus six miles north of town.",
          },
        ],
        ["moved", "opened", "merged", "renamed"],
      ),
      takeaway([
        "Established in 1854 by the S. C. Baptist Convention, this institution opened as Greenville Baptist Female College in February 1856, on this site originally donated by Vardry McBee to the Greenville Academies.",
        "Its name was changed to Greenville Woman's College in 1914.",
        "It was coordinated with Furman University in 1933, merged with Furman in 1938, and moved in 1961 to the consolidated campus six miles north of town.",
      ]),
    ],
  ),
  lesson(
    "23-16",
    "Named the Grove, then Lebanon",
    "Lebanon Church timeline",
    [
      cited("23-16", "Lebanon Church", "front"),
      span(
        '"10 years" is 1800 minus 1790, the years the marker prints for visits by Bishop Francis Asbury.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "grove",
        kicker: "1790",
        title: "The Grove, visited in 1790 and 1800",
        partLabel: "the Grove",
        art: art(
          "m2316-grove.jpg",
          "Illustration of a wooden meeting house in a pine grove. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grove",
            label: "Named the Grove",
            x: 32,
            y: 48,
            fact: "This United Methodist church was originally located about 1 ¼ miles east and named the Grove.",
          },
          {
            id: "asbury",
            label: "1790 and 1800",
            x: 74,
            y: 58,
            fact: "It was visited by Bishop Francis Asbury in 1790 and 1800.",
          },
        ],
      },
      {
        kind: "scene",
        id: "lebanon",
        kicker: "1850's",
        title: "A house of worship named Lebanon",
        partLabel: "the church",
        art: art(
          "m2316-steeple.jpg",
          "Illustration of a church with a steeple, portico, and side annex. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "relocated",
            label: "1832",
            x: 32,
            y: 46,
            fact: "Relocated about ¼ mile SW of here after the land was obtained in 1832. Present house of worship was erected in 1850's and name changed to Lebanon.",
          },
          {
            id: "annex",
            label: "1951 and 1955",
            x: 74,
            y: 64,
            fact: "Sunday School annex completed in 1951 and steeple and portico in 1955.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1790-1800",
        title: "Years between the two visits",
        partLabel: "10 years",
        value: 10,
        unit: "years",
        meant:
          "What this meant: 1800 comes 10 years after 1790. Those are the years the marker gives for visits by Bishop Francis Asbury.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2316-grove.jpg",
          "Illustration of a wooden meeting house in a pine grove. Not a historical photograph.",
        ),
        nowArt: art(
          "m2316-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden meeting house, for the church the marker says was named the Grove. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a churchyard lane. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "visit",
            year: "1790",
            label: "Bishop Francis Asbury visits the church named the Grove.",
            why: "The marker says this United Methodist church was originally located about 1 ¼ miles east and named the Grove, and that it was visited by Bishop Francis Asbury in 1790 and 1800.",
          },
          {
            id: "again",
            year: "1800",
            label: "Bishop Francis Asbury visits again.",
            why: "The marker says it was visited by Bishop Francis Asbury in 1790 and 1800.",
          },
          {
            id: "land",
            year: "1832",
            label: "The land is obtained and the church is relocated.",
            why: "The marker says it was relocated about ¼ mile SW of here after the land was obtained in 1832.",
          },
          {
            id: "name",
            year: "1850's",
            label: "The present house of worship is erected and named Lebanon.",
            why: "The marker says the present house of worship was erected in 1850's and the name changed to Lebanon.",
          },
        ],
        ["name", "visit", "land", "again"],
      ),
      takeaway([
        "This United Methodist church was originally located about 1 ¼ miles east and named the Grove. It was visited by Bishop Francis Asbury in 1790 and 1800.",
        "Relocated about ¼ mile SW of here after the land was obtained in 1832. Present house of worship was erected in 1850's and name changed to Lebanon.",
        "Sunday School annex completed in 1951 and steeple and portico in 1955.",
      ]),
    ],
  ),
];
