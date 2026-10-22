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

export const darlingtonLessonsN: MarkerLesson[] = [
  lesson(
    "16-57",
    "The first community center in the county",
    "Mont Clare Community Center timeline",
    [
      cited("16-57", "Mont Clare Community Center", "front and back"),
      span(
        '"27 years" is 1960 minus 1933, the years the marker prints for when the mission met here and when Mont Clare Baptist Church was formally founded.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "logs",
        kicker: "1933",
        title: "Area citizens build a log center",
        partLabel: "the log building",
        art: art(
          "m1657-logs.jpg",
          "Illustration of a cypress-log building on a sandstone foundation. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Built in 1933",
            x: 32,
            y: 48,
            fact: "This community center, the first in Darlington County, was built in 1933 by area citizens.",
          },
          {
            id: "materials",
            label: "Logs and sandstone",
            x: 74,
            y: 58,
            fact: "The land was donated by E.M. Williamson of Mont Clare Plantation, the cypress logs and other lumber were cut at T.C. Coxe’s Skufful Plantation, and the sandstone for the foundation was quarried at Skufful Plantation.",
          },
        ],
      },
      {
        kind: "scene",
        id: "mission",
        kicker: "1913",
        title: "Sunday school, then a Baptist church",
        partLabel: "the mission",
        art: art(
          "m1657-meeting.jpg",
          "Illustration of an empty log meeting room. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Organized in 1913",
            x: 32,
            y: 48,
            fact: "The Mont Clare Mission was a nondenominational Sunday School and worship service organized in 1913 at nearby Mont Clare School.",
          },
          {
            id: "church",
            label: "Until 1960",
            x: 74,
            y: 58,
            fact: "It met here from 1933 until Mont Clare Baptist Church was formally founded in 1960. This center, described as a “lovely log building,” has hosted church, school, and other events.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1933-1960",
        title: "Years from the first meeting here to the church",
        partLabel: "27 years",
        value: 27,
        unit: "years",
        meant:
          "What this meant: 1960 comes 27 years after 1933. That is the stretch from the year the mission began meeting here to the year Mont Clare Baptist Church was formally founded.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1657-logs.jpg",
          "Illustration of a cypress-log building on a sandstone foundation. Not a historical photograph.",
        ),
        nowArt: art(
          "m1657-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cypress-log building, for the community center the marker says was built in 1933. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1913",
            label: "The Mont Clare Mission is organized.",
            why: "The marker says the Mont Clare Mission was a nondenominational Sunday School and worship service organized in 1913 at nearby Mont Clare School.",
          },
          {
            id: "built",
            year: "1933",
            label: "Area citizens build the community center.",
            why: "The marker says this community center, the first in Darlington County, was built in 1933 by area citizens.",
          },
          {
            id: "church",
            year: "1960",
            label: "Mont Clare Baptist Church is formally founded.",
            why: "The marker says the mission met here from 1933 until Mont Clare Baptist Church was formally founded in 1960.",
          },
        ],
        ["church", "organized", "built"],
      ),
      takeaway([
        "This community center, the first in Darlington County, was built in 1933 by area citizens.",
        "The Mont Clare Mission was a nondenominational Sunday School and worship service organized in 1913 at nearby Mont Clare School.",
        "It met here from 1933 until Mont Clare Baptist Church was formally founded in 1960.",
      ]),
    ],
  ),
  lesson(
    "16-58",
    "Rebuilt by 1866 on the same plans",
    "Society Hill Depot timeline",
    [cited("16-58", "Society Hill Depot", "front and back")],
    [
      {
        kind: "scene",
        id: "rail",
        kicker: "1849",
        title: "Chartered, then forty miles of track",
        partLabel: "the railroad",
        art: art(
          "m1658-rail.jpg",
          "Illustration of a steam locomotive on a long rural track. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "charter",
            label: "Chartered in 1849",
            x: 32,
            y: 48,
            fact: "The C & D, chartered in 1849, ran 40 miles between Cheraw and present-day Florence and began service in 1855.",
          },
          {
            id: "design",
            label: "An independent line",
            x: 74,
            y: 58,
            fact: "This depot, built shortly after the Civil War, features a distinctive architectural design favored by the Cheraw & Darlington Railroad during its history as an independent line. The first combined passenger and freight depot in Society Hill was built nearby on West Depot St.",
          },
        ],
      },
      {
        kind: "scene",
        id: "depot",
        kicker: "March 1865",
        title: "Burned, then built again by 1866",
        partLabel: "the depot",
        art: art(
          "m1658-depot.jpg",
          "Illustration of a wooden depot beside the tracks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "burned",
            label: "March 1865",
            x: 32,
            y: 48,
            fact: "Federal troops burned the original depot, a short distance north, in March 1865. This depot, constructed on the same plans, was built there by 1866.",
          },
          {
            id: "moved",
            label: "Moved in 2002",
            x: 74,
            y: 58,
            fact: "The Cheraw & Darlington RR was acquired by the Atlantic Coast Line RR in 1898. This was a freight and passenger depot until the 1940s and a freight depot until 1973. Now owned by the Town of Society Hill, it was moved here in 2002.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "40 miles",
        title: "Miles between Cheraw and present-day Florence",
        partLabel: "40 miles",
        value: 40,
        unit: "miles",
        meant:
          "What this meant: the marker says the C & D ran 40 miles between Cheraw and present-day Florence and began service in 1855.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1658-depot.jpg",
          "Illustration of a wooden depot beside the tracks. Not a historical photograph.",
        ),
        nowArt: art(
          "m1658-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden depot, for the building the marker says was constructed on the same plans and built by 1866. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "charter",
            year: "1849",
            label: "The Cheraw & Darlington Railroad is chartered.",
            why: "The marker says the C & D was chartered in 1849.",
          },
          {
            id: "service",
            year: "1855",
            label: "The railroad begins service.",
            why: "The marker says the C & D ran 40 miles between Cheraw and present-day Florence and began service in 1855.",
          },
          {
            id: "burned",
            year: "March 1865",
            label: "Federal troops burn the original depot.",
            why: "The marker says Federal troops burned the original depot, a short distance north, in March 1865. This depot, constructed on the same plans, was built there by 1866.",
          },
          {
            id: "moved",
            year: "2002",
            label: "The depot is moved here.",
            why: "The marker says it is now owned by the Town of Society Hill and was moved here in 2002.",
          },
        ],
        ["service", "moved", "charter", "burned"],
      ),
      takeaway([
        "The C & D, chartered in 1849, ran 40 miles between Cheraw and present-day Florence and began service in 1855.",
        "Federal troops burned the original depot, a short distance north, in March 1865. This depot, constructed on the same plans, was built there by 1866.",
        "Now owned by the Town of Society Hill, it was moved here in 2002.",
      ]),
    ],
  ),
  lesson(
    "16-59",
    "Twenty-six acres on Swift Creek",
    "Grove Hill Cemetery timeline",
    [cited("16-59", "Grove Hill Cemetery", "front")],
    [
      {
        kind: "scene",
        id: "grounds",
        kicker: "1889",
        title: "Chartered when churchyards ran short",
        partLabel: "the charter",
        art: art(
          "m1659-grounds.jpg",
          "Illustration of a cemetery of blank stones among trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "charter",
            label: "Chartered in 1889",
            x: 32,
            y: 48,
            fact: "Grove Hill Cemetery, the first public cemetery in Darlington, was chartered in 1889.",
          },
          {
            id: "reason",
            label: "Health and space",
            x: 74,
            y: 58,
            fact: "Citizens founded it “on account of the health of our town but also on account of the great scarcity of space in the church cemeteries.”",
          },
        ],
      },
      {
        kind: "scene",
        id: "creek",
        kicker: "1896",
        title: "A larger tract, and a half-acre set aside",
        partLabel: "the burial ground",
        art: art(
          "m1659-creek.jpg",
          "Illustration of a creek beside an open burial ground. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acres",
            label: "26 acres",
            x: 32,
            y: 48,
            fact: "The original 26-acre tract on Swift Creek was later expanded, doubling the burial space.",
          },
          {
            id: "hebrew",
            label: "1896",
            x: 74,
            y: 58,
            fact: "In 1896 a half-acre tract was designated as “Darlington Hebrew Cemetery.”",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "26 acres",
        title: "Acres in the original tract",
        partLabel: "26 acres",
        value: 26,
        unit: "acres",
        meant:
          "What this meant: the marker says the original 26-acre tract on Swift Creek was later expanded, doubling the burial space.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1659-grounds.jpg",
          "Illustration of a cemetery of blank stones among trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m1659-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cemetery of blank stones, for the first public cemetery the marker says was chartered in 1889. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "charter",
            year: "1889",
            label: "Grove Hill Cemetery is chartered.",
            why: "The marker says Grove Hill Cemetery, the first public cemetery in Darlington, was chartered in 1889.",
          },
          {
            id: "hebrew",
            year: "1896",
            label: "A half-acre tract is designated Darlington Hebrew Cemetery.",
            why: "The marker says that in 1896 a half-acre tract was designated as “Darlington Hebrew Cemetery.”",
          },
        ],
        ["hebrew", "charter"],
      ),
      takeaway([
        "Grove Hill Cemetery, the first public cemetery in Darlington, was chartered in 1889.",
        "Citizens founded it “on account of the health of our town but also on account of the great scarcity of space in the church cemeteries.”",
        "The original 26-acre tract on Swift Creek was later expanded, doubling the burial space.",
      ]),
    ],
  ),
  lesson(
    "16-60",
    "A Public Works jail built for $60,000",
    "Darlington County Jail timeline",
    [cited("16-60", "Darlington County Jail", "front and back")],
    [
      {
        kind: "scene",
        id: "jail",
        kicker: "1937",
        title: "Called one of the most modern in the South",
        partLabel: "the building",
        art: art(
          "m1660-jail.jpg",
          "Illustration of a masonry jail building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "cost",
            label: "Built in 1937",
            x: 32,
            y: 48,
            fact: "This building, a New Deal project of Franklin D. Roosevelt’s Public Works Administration (PWA), was built in 1937 at a cost of $60,000.",
          },
          {
            id: "design",
            label: "Alfred D. Gilchrist",
            x: 74,
            y: 58,
            fact: "Called “one of the most modern jails in the South,” it was designed by Rock Hill architect Alfred D. Gilchrist (d. 1944). Its second floor featured separate cell blocks for black and white males and separate cells for black and white females.",
          },
        ],
      },
      {
        kind: "scene",
        id: "floors",
        kicker: "1976",
        title: "Closed, then a commission headquarters",
        partLabel: "the floors and the closing",
        art: art(
          "m1660-cells.jpg",
          "Illustration of an empty jail office and cells. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "floors",
            label: "Office, kitchen, and cells",
            x: 32,
            y: 48,
            fact: "The office, kitchen, and jailer’s quarters were on the first floor; hospital and juvenile cells were on the third floor; and cells for minor offenders were in the basement.",
          },
          {
            id: "later",
            label: "Closed in 1976",
            x: 74,
            y: 58,
            fact: "The jail closed in 1976. Since 1984 it has been the headquarters of the Darlington County Historical Commission. The commission, created in 1965 to maintain a county archives and research repository, also marks area historic sites.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1937",
        title: "What the jail cost",
        partLabel: "60,000 dollars",
        value: 60000,
        unit: "dollars",
        meant:
          "What this meant: the marker says this building was built in 1937 at a cost of $60,000.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1660-jail.jpg",
          "Illustration of a masonry jail building. Not a historical photograph.",
        ),
        nowArt: art(
          "m1660-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a masonry jail, for the building the marker says was built in 1937. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1937",
            label: "The jail is built.",
            why: "The marker says this building, a New Deal project of Franklin D. Roosevelt’s Public Works Administration (PWA), was built in 1937 at a cost of $60,000.",
          },
          {
            id: "commission",
            year: "1965",
            label: "The Darlington County Historical Commission is created.",
            why: "The marker says the commission was created in 1965 to maintain a county archives and research repository, and also marks area historic sites.",
          },
          {
            id: "closed",
            year: "1976",
            label: "The jail closes.",
            why: "The marker says the jail closed in 1976.",
          },
          {
            id: "headquarters",
            year: "1984",
            label: "The building becomes the commission headquarters.",
            why: "The marker says that since 1984 it has been the headquarters of the Darlington County Historical Commission.",
          },
        ],
        ["closed", "built", "headquarters", "commission"],
      ),
      takeaway([
        "This building, a New Deal project of Franklin D. Roosevelt’s Public Works Administration (PWA), was built in 1937 at a cost of $60,000.",
        "The jail closed in 1976. Since 1984 it has been the headquarters of the Darlington County Historical Commission.",
        "The commission, created in 1965 to maintain a county archives and research repository, also marks area historic sites.",
      ]),
    ],
  ),
];
