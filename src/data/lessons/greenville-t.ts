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

export const greenvilleLessonsT: MarkerLesson[] = [
  lesson(
    "23-85",
    "Meetings under a brush arbor",
    "Berea First Baptist Church timeline",
    [
      cited("23-85", "Berea First Baptist Church", "front and back"),
      span(
        '"133 years" is 1976 minus 1843, the years the marker prints for the official founding of Berea Baptist Church and the current church building.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "arbor",
        kicker: "Dec. 1843",
        title: "Earliest meetings under a brush arbor",
        partLabel: "the brush arbor",
        art: art(
          "m2385-arbor.jpg",
          "Illustration of a brush arbor in a yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Dec. 1843",
            x: 32,
            y: 50,
            fact: "Berea Baptist Church was officially founded in Dec. 1843, but local tradition holds that the earliest meetings were held under a brush arbor in the yard of Isham J. Ward.",
          },
          {
            id: "name",
            label: "The name Berea",
            x: 74,
            y: 36,
            fact: "The name “Berea” derives from Acts 17: 10-11, which was said to have been part of the first sermon, delivered by Rev. Samuel Gibson. The church would later lend its name to the surrounding area.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1862",
        title: "Three separate terms as pastor",
        partLabel: "the pastor",
        art: art(
          "m2385-sanctuary.jpg",
          "Illustration of a church sanctuary. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "pastor",
            label: "1862",
            x: 32,
            y: 48,
            fact: "Dr. James C. Furman, first president of Furman University, became pastor in 1862 and would serve three separate terms as pastor from then until his death in 1891. A second sanctuary was built in 1892.",
          },
          {
            id: "renamed",
            label: "1965",
            x: 74,
            y: 34,
            fact: "In 1965 the name of the church was changed to Berea First Baptist Church to differentiate it from other Baptist congregations. The current church building dates to 1976.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1843-1976",
        title: "Years from the founding to the current building",
        partLabel: "133 years",
        value: 133,
        unit: "years",
        meant:
          "What this meant: 1976 comes 133 years after 1843. That is the stretch from the year the marker gives for the official founding of Berea Baptist Church to the year it gives for the current church building.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2385-arbor.jpg",
          "Illustration of a brush arbor in a yard. Not a historical photograph.",
        ),
        nowArt: art(
          "m2385-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brush arbor in a yard, for the earliest meetings the marker says local tradition places in the yard of Isham J. Ward. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "Dec. 1843",
            label: "Berea Baptist Church is officially founded.",
            why: "The marker says Berea Baptist Church was officially founded in Dec. 1843, but local tradition holds that the earliest meetings were held under a brush arbor in the yard of Isham J. Ward.",
          },
          {
            id: "pastor",
            year: "1862",
            label: "Dr. James C. Furman becomes pastor.",
            why: "The marker says Dr. James C. Furman, first president of Furman University, became pastor in 1862 and would serve three separate terms as pastor from then until his death in 1891.",
          },
          {
            id: "death",
            year: "1891",
            label: "Furman dies after serving as pastor.",
            why: "The marker says he would serve three separate terms as pastor from then until his death in 1891.",
          },
          {
            id: "sanctuary",
            year: "1892",
            label: "A second sanctuary is built.",
            why: "The marker says a second sanctuary was built in 1892.",
          },
          {
            id: "renamed",
            year: "1965",
            label: "The name is changed to Berea First Baptist Church.",
            why: "The marker says that in 1965 the name of the church was changed to Berea First Baptist Church to differentiate it from other Baptist congregations.",
          },
          {
            id: "building",
            year: "1976",
            label: "The current church building dates to this year.",
            why: "The marker says the current church building dates to 1976.",
          },
        ],
        ["renamed", "founded", "building", "death", "pastor", "sanctuary"],
      ),
      takeaway([
        "Berea Baptist Church was officially founded in Dec. 1843, but local tradition holds that the earliest meetings were held under a brush arbor in the yard of Isham J. Ward.",
        "Dr. James C. Furman, first president of Furman University, became pastor in 1862 and would serve three separate terms as pastor from then until his death in 1891.",
        "In 1965 the name of the church was changed to Berea First Baptist Church to differentiate it from other Baptist congregations. The current church building dates to 1976.",
      ]),
    ],
  ),
  lesson(
    "23-86",
    "An auditorium on the second floor",
    "Berea School timeline",
    [
      cited("23-86", "Berea School", "front and back"),
      span(
        '"101 years" is 2017 minus 1916, the years the marker prints for the first Berea School opening at this location and the campus being razed.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1916",
        title: "An auditorium on the second floor",
        partLabel: "the first school",
        art: art(
          "m2386-school.jpg",
          "Illustration of a two-story school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1916",
            x: 32,
            y: 46,
            fact: "The first Berea School built at this location opened in 1916. It was a two-story building with an auditorium on the second floor.",
          },
          {
            id: "basketball",
            label: "1924",
            x: 74,
            y: 34,
            fact: "In 1924 a basketball team was formed and in 1930 a new auditorium and gymnasium were added.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brick",
        kicker: "1939",
        title: "A brick building funded by the WPA",
        partLabel: "the brick building",
        art: art(
          "m2386-brick.jpg",
          "Illustration of a brick school beside a cannery and a potato house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wpa",
            label: "1939",
            x: 32,
            y: 52,
            fact: "In 1939 the original school was replaced by a new brick building funded by the Work Projects Administration (WPA). The WPA also funded a cannery and potato house, both meant to serve the community. The school housed students from elementary to high school.",
          },
          {
            id: "razed",
            label: "2017",
            x: 74,
            y: 38,
            fact: "In 1961 the high school students were moved to a new campus, leaving grades 1-6 at this location. In 1970 sixth-grade students were transferred as part of the county’s plans for racial integration. Kindergarten was added in 1973. It continued to operate as an elementary school until a new Berea Elementary was opened in 1998. Berea was among the last remaining WPA-funded school campuses in Greenville Co. when it was razed in 2017.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1916-2017",
        title: "Years from the opening to the razing",
        partLabel: "101 years",
        value: 101,
        unit: "years",
        meant:
          "What this meant: 2017 comes 101 years after 1916. That is the stretch from the year the marker gives for the first Berea School opening at this location to the year it gives for the campus being razed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2386-school.jpg",
          "Illustration of a two-story school. Not a historical photograph.",
        ),
        nowArt: art(
          "m2386-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-story school, for the first Berea School the marker says opened at this location in 1916. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "1916",
            label: "The first Berea School at this location opens.",
            why: "The marker says the first Berea School built at this location opened in 1916. It was a two-story building with an auditorium on the second floor.",
          },
          {
            id: "basketball",
            year: "1924",
            label: "A basketball team is formed.",
            why: "The marker says that in 1924 a basketball team was formed.",
          },
          {
            id: "gym",
            year: "1930",
            label: "A new auditorium and gymnasium are added.",
            why: "The marker says that in 1930 a new auditorium and gymnasium were added.",
          },
          {
            id: "brick",
            year: "1939",
            label: "A WPA brick building replaces the original school.",
            why: "The marker says that in 1939 the original school was replaced by a new brick building funded by the Work Projects Administration (WPA).",
          },
          {
            id: "moved",
            year: "1961",
            label: "High school students move to a new campus.",
            why: "The marker says that in 1961 the high school students were moved to a new campus, leaving grades 1-6 at this location.",
          },
          {
            id: "sixth",
            year: "1970",
            label: "Sixth-grade students are transferred.",
            why: "The marker says that in 1970 sixth-grade students were transferred as part of the county’s plans for racial integration.",
          },
          {
            id: "kindergarten",
            year: "1973",
            label: "Kindergarten is added.",
            why: "The marker says kindergarten was added in 1973.",
          },
          {
            id: "elementary",
            year: "1998",
            label: "A new Berea Elementary opens.",
            why: "The marker says it continued to operate as an elementary school until a new Berea Elementary was opened in 1998.",
          },
          {
            id: "razed",
            year: "2017",
            label: "The campus is razed.",
            why: "The marker says Berea was among the last remaining WPA-funded school campuses in Greenville Co. when it was razed in 2017.",
          },
        ],
        [
          "brick",
          "opened",
          "razed",
          "basketball",
          "elementary",
          "gym",
          "sixth",
          "moved",
          "kindergarten",
        ],
      ),
      takeaway([
        "The first Berea School built at this location opened in 1916. It was a two-story building with an auditorium on the second floor.",
        "In 1939 the original school was replaced by a new brick building funded by the Work Projects Administration (WPA). The WPA also funded a cannery and potato house, both meant to serve the community.",
        "Berea was among the last remaining WPA-funded school campuses in Greenville Co. when it was razed in 2017.",
      ]),
    ],
  ),
  lesson(
    "23-87",
    "Colonel of the Spartan Regiment",
    "Col. John and Jane Thomas timeline",
    [
      cited("23-87", "Col. John and Jane Thomas", "front and back"),
      span(
        '"32 years" is 1811 minus 1779, the years the marker prints for John’s capture and his death.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "farm",
        kicker: "c.1755",
        title: "From Chester County to the upstate",
        partLabel: "the farm",
        art: art(
          "m2387-farm.jpg",
          "Illustration of an upstate farmhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "emigrated",
            label: "c.1755",
            x: 32,
            y: 48,
            fact: "John Jane Black Thomas emigrated to S.C. c.1755 from Chester Co., PA. John was a local magistrate and militia captain. As the Revolutionary War began, he was elected Colonel of the Spartan Regiment.",
          },
          {
            id: "captured",
            label: "1779",
            x: 74,
            y: 36,
            fact: "Captured in 1779, he was held in Ninety Six and Charleston up to the end of the war. Returning to the upstate, John farmed here till death, October 2, 1811.",
          },
        ],
      },
      {
        kind: "scene",
        id: "cache",
        kicker: "Cedar Spring",
        title: "A cache of weapons on their place",
        partLabel: "the weapons cache",
        art: art(
          "m2387-cache.jpg",
          "Illustration of muskets stored in a barn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "ambush",
            label: "Cedar Spring",
            x: 32,
            y: 54,
            fact: "Jane Black Thomas was also a staunch whig. Learning of British plans to attack patriots at Cedar Spring, she rushed the intelligence to American forces. As a result, the patriots were able to spring an ambush.",
          },
          {
            id: "buried",
            label: "Buried here",
            x: 74,
            y: 38,
            fact: "She boldly defended a cache of weapons stored on their place. Both John and Jane Thomas are buried here, in sight of their home, later owned by S.C. Chief Justice John Belton O’Neall.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1779-1811",
        title: "Years from the capture to his death",
        partLabel: "32 years",
        value: 32,
        unit: "years",
        meant:
          "What this meant: 1811 comes 32 years after 1779. That is the stretch from the year the marker gives for John’s capture to the year it gives for his death.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2387-farm.jpg",
          "Illustration of an upstate farmhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m2387-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an upstate farmhouse, for the place the marker says John farmed until his death. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "emigrated",
            year: "c.1755",
            label: "John Jane Black Thomas emigrates to S.C.",
            why: "The marker says John Jane Black Thomas emigrated to S.C. c.1755 from Chester Co., PA. John was a local magistrate and militia captain.",
          },
          {
            id: "colonel",
            year: "As the war began",
            label: "John is elected Colonel of the Spartan Regiment.",
            why: "The marker says that as the Revolutionary War began, he was elected Colonel of the Spartan Regiment.",
          },
          {
            id: "captured",
            year: "1779",
            label: "John is captured and held in Ninety Six and Charleston.",
            why: "The marker says that, captured in 1779, he was held in Ninety Six and Charleston up to the end of the war.",
          },
          {
            id: "death",
            year: "October 2, 1811",
            label: "John dies after farming here.",
            why: "The marker says that, returning to the upstate, John farmed here till death, October 2, 1811.",
          },
        ],
        ["captured", "emigrated", "death", "colonel"],
      ),
      takeaway([
        "John Jane Black Thomas emigrated to S.C. c.1755 from Chester Co., PA. John was a local magistrate and militia captain.",
        "Captured in 1779, he was held in Ninety Six and Charleston up to the end of the war.",
        "Jane Black Thomas was also a staunch whig. Learning of British plans to attack patriots at Cedar Spring, she rushed the intelligence to American forces.",
      ]),
    ],
  ),
  lesson(
    "23-88",
    "Two smoke stacks and 238 mill houses",
    "Poe Mill timeline",
    [cited("23-88", "Poe Mill", "front and back")],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1896",
        title: "Two smoke stacks and mill houses",
        partLabel: "the mill village",
        art: art(
          "m2388-mill.jpg",
          "Illustration of a mill with two smoke stacks and mill houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1896",
            x: 32,
            y: 46,
            fact: "Francis Winslow Poe (1853-1926) established the Poe Mill in 1896. The mill was built adjacent to the main line of the Southern R.R. and the White Oak branch of the Reedy River. The mill and the surrounding village were designed by Joseph E. Sirrine, who was then in the employ of Lockwood, Greene & Co.",
          },
          {
            id: "houses",
            label: "238 houses",
            x: 74,
            y: 34,
            fact: "Sirrine’s unique design included two smoke stacks and also 238 mill houses. Construction was handled by local contractor Jacob O. Cagle. Production began in March 1896.",
          },
        ],
      },
      {
        kind: "scene",
        id: "looms",
        kicker: "1902",
        title: "Steam power, spindles, and looms",
        partLabel: "the mill floor",
        art: art(
          "m2388-looms.jpg",
          "Illustration of looms and spinning frames inside a mill. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "spindles",
            label: "10,000 spindles",
            x: 32,
            y: 52,
            fact: "The mill was steam-powered and opened with 10,000 spindles and 300 looms. Within a decade, equipment had increased to more than 70,000 spindles and 1,700 looms. They employed 800 workers.",
          },
          {
            id: "closed",
            label: "1977",
            x: 74,
            y: 36,
            fact: "A graded school was built in 1902 and the village supported both Baptist and Methodist Churches. During WWII the mill produced duck cloth that was used for tents and women replaced men on the factory floor. The mill closed in 1977 and was destroyed by fire in 2003.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1896",
        title: "Mill houses in the design",
        partLabel: "238 houses",
        value: 238,
        unit: "houses",
        meant:
          "What this meant: the marker says Sirrine’s unique design included two smoke stacks and also 238 mill houses.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2388-mill.jpg",
          "Illustration of a mill with two smoke stacks and mill houses. Not a historical photograph.",
        ),
        nowArt: art(
          "m2388-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a mill with two smoke stacks and mill houses, for the Poe Mill the marker says Francis Winslow Poe established in 1896. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "production",
            year: "March 1896",
            label: "Production begins at the Poe Mill.",
            why: "The marker says Francis Winslow Poe (1853-1926) established the Poe Mill in 1896, and that production began in March 1896.",
          },
          {
            id: "school",
            year: "1902",
            label: "A graded school is built.",
            why: "The marker says a graded school was built in 1902 and the village supported both Baptist and Methodist Churches.",
          },
          {
            id: "duck",
            year: "During WWII",
            label: "The mill produces duck cloth for tents.",
            why: "The marker says that during WWII the mill produced duck cloth that was used for tents and women replaced men on the factory floor.",
          },
          {
            id: "closed",
            year: "1977",
            label: "The mill closes.",
            why: "The marker says the mill closed in 1977.",
          },
          {
            id: "fire",
            year: "2003",
            label: "The mill is destroyed by fire.",
            why: "The marker says the mill was destroyed by fire in 2003.",
          },
        ],
        ["closed", "production", "fire", "duck", "school"],
      ),
      takeaway([
        "Francis Winslow Poe (1853-1926) established the Poe Mill in 1896.",
        "Sirrine’s unique design included two smoke stacks and also 238 mill houses.",
        "The mill closed in 1977 and was destroyed by fire in 2003.",
      ]),
    ],
  ),
];
