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

export const greenvilleLessonsV: MarkerLesson[] = [
  lesson(
    "23-93",
    "The largest of eight Craftsman-style cedar-shake bungalows",
    "Southern Bleachery Mill Village timeline",
    [cited("23-93", "Southern Bleachery Mill Village", "front and back")],
    [
      {
        kind: "scene",
        id: "houses",
        kicker: "1923-24",
        title: "More than fifty houses",
        partLabel: "the mill houses",
        art: art(
          "m2393-houses.jpg",
          "Illustration of wooden mill houses along a village street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1923-24",
            x: 32,
            y: 52,
            fact: "This is one of more than fifty houses built in 1923-24 for employees of Southern Bleachery, a textile processing plant opened at the east end of Mill St. in 1924.",
          },
          {
            id: "designed",
            label: "Sirrine",
            x: 74,
            y: 40,
            fact: "The mill village and plant were designed by J.E. Sirrine & Co. and built by Gallivan Building Co.",
          },
        ],
      },
      {
        kind: "scene",
        id: "hill",
        kicker: "Boss Hill",
        title: "Housing for the plant’s overseers",
        partLabel: "Boss Hill",
        art: art(
          "m2393-bungalows.jpg",
          "Illustration of cedar-shake bungalows and garages on a low hill. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grounds",
            label: "For workers",
            x: 32,
            y: 48,
            fact: "The village and nearby area included churches, stores, schools, a golf course, and tennis courts used by workers.",
          },
          {
            id: "bungalows",
            label: "Eight bungalows",
            x: 74,
            y: 36,
            fact: "Housing for the plant’s overseers was located here on what became known as “Boss Hill.” The house on this corner was home to mill superintendents and was the largest of eight Craftsman-style cedar-shake bungalows and garages built on the hill.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "On the hill",
        title: "Craftsman-style bungalows",
        partLabel: "eight bungalows",
        value: 8,
        unit: "bungalows",
        meant:
          "What this meant: the marker says the house on this corner was the largest of eight Craftsman-style cedar-shake bungalows and garages built on the hill.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2393-bungalows.jpg",
          "Illustration of cedar-shake bungalows and garages on a low hill. Not a historical photograph.",
        ),
        nowArt: art(
          "m2393-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of cedar-shake bungalows on a low hill, for the overseers’ houses the marker says stood on Boss Hill.",
        nowCaption:
          "Illustration of a blank roadside marker on the same ground.",
      },
      order(
        [
          {
            id: "built",
            year: "1923-24",
            label: "More than fifty houses are built for employees.",
            why: "The marker says this is one of more than fifty houses built in 1923-24 for employees of Southern Bleachery.",
          },
          {
            id: "opened",
            year: "1924",
            label: "Southern Bleachery opens at the east end of Mill St.",
            why: "The marker says Southern Bleachery, a textile processing plant, opened at the east end of Mill St. in 1924.",
          },
          {
            id: "closed",
            year: "1965",
            label: "Southern Bleachery closes.",
            why: "The marker says houses in the village were company-owned until 1965, when Southern Bleachery closed after several decades as the largest employer in Taylors.",
          },
        ],
        ["opened", "closed", "built"],
      ),
      takeaway([
        "This is one of more than fifty houses built in 1923-24 for employees of Southern Bleachery, a textile processing plant opened at the east end of Mill St. in 1924.",
        "The house on this corner was home to mill superintendents and was the largest of eight Craftsman-style cedar-shake bungalows and garages built on the hill.",
        "Houses in the village were company-owned until 1965, when Southern Bleachery closed after several decades as the largest employer in Taylors.",
      ]),
    ],
  ),
  lesson(
    "23-94",
    "Fourteen charter members",
    "Fountain Inn Presbyterian Church timeline",
    [cited("23-94", "Fountain Inn Presbyterian Church", "front and back")],
    [
      {
        kind: "scene",
        id: "frame",
        kicker: "1889",
        title: "A frame church here",
        partLabel: "the frame church",
        art: art(
          "m2394-frame.jpg",
          "Illustration of a small wooden frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1889",
            x: 32,
            y: 50,
            fact: "Fourteen charter members organized Fountain Inn Prebsyterian Church in 1889. They met in homes and other temporary sites until 1891, when members built a frame church here and Rev. Robert Henderlite became the first minister.",
          },
          {
            id: "earlier",
            label: "Earlier preachers",
            x: 74,
            y: 38,
            fact: "Preachers from Fairview and New Harmony churches previously served this area. Fountain Inn Presbyterian Church was originally part of Enoree Presbytery.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brick",
        kicker: "1910",
        title: "A three-story bell tower",
        partLabel: "the brick church",
        art: art(
          "m2394-tower.jpg",
          "Illustration of a brick church with a tall bell tower. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "tower",
            label: "1910",
            x: 32,
            y: 42,
            fact: "In 1910, a larger brick-veneered church with three-story bell tower was built to accommodate a growing congregation.",
          },
          {
            id: "renovated",
            label: "1969",
            x: 74,
            y: 56,
            fact: "An education building was constructed in 1958 and later expanded. In 1969, the church underwent extensive renovations that increased its capacity, removed the original bell tower, and added a columned portico to the east entrance.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1889",
        title: "Charter members",
        partLabel: "fourteen members",
        value: 14,
        unit: "members",
        meant:
          "What this meant: the marker says fourteen charter members organized Fountain Inn Prebsyterian Church in 1889.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2394-tower.jpg",
          "Illustration of a brick church with a tall bell tower. Not a historical photograph.",
        ),
        nowArt: art(
          "m2394-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a brick church with a tall bell tower, for the church the marker says was built in 1910 with a three-story bell tower.",
        nowCaption:
          "Illustration of a blank roadside marker on the same ground.",
      },
      order(
        [
          {
            id: "organized",
            year: "1889",
            label: "Fourteen charter members organize the church.",
            why: "The marker says fourteen charter members organized Fountain Inn Prebsyterian Church in 1889.",
          },
          {
            id: "frame",
            year: "1891",
            label: "Members build a frame church, and Rev. Robert Henderlite is the first minister.",
            why: "The marker says they met in homes and other temporary sites until 1891, when members built a frame church here and Rev. Robert Henderlite became the first minister.",
          },
          {
            id: "tower",
            year: "1910",
            label: "A larger brick-veneered church is built.",
            why: "The marker says that in 1910, a larger brick-veneered church with three-story bell tower was built to accommodate a growing congregation.",
          },
          {
            id: "renovated",
            year: "1969",
            label: "Renovations remove the original bell tower.",
            why: "The marker says that in 1969, the church underwent extensive renovations that increased its capacity, removed the original bell tower, and added a columned portico to the east entrance.",
          },
        ],
        ["tower", "organized", "renovated", "frame"],
      ),
      takeaway([
        "Fourteen charter members organized Fountain Inn Prebsyterian Church in 1889.",
        "In 1910, a larger brick-veneered church with three-story bell tower was built to accommodate a growing congregation.",
        "In 1969, the church underwent extensive renovations that increased its capacity, removed the original bell tower, and added a columned portico to the east entrance.",
      ]),
    ],
  ),
  lesson(
    "23-96",
    "Named the church for Rev. Stephen Mattoon",
    "Mattoon Presbyterian Church timeline",
    [cited("23-96", "Mattoon Presbyterian Church", "front and back")],
    [
      {
        kind: "scene",
        id: "founded",
        kicker: "1878",
        title: "Organized by Black members",
        partLabel: "the congregation",
        art: art(
          "m2396-meeting.jpg",
          "Illustration of a plain meeting room with empty benches. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1878",
            x: 32,
            y: 48,
            fact: "Mattoon Presbyterian Church was organized in 1878 by Black members of Washington Street (First) Presbyterian Church.",
          },
          {
            id: "named",
            label: "Rev. Stephen Mattoon",
            x: 74,
            y: 36,
            fact: "They affiliated with the Northern Assembly of Presbyterians and named the church for Rev. Stephen Mattoon, president of Biddle University for freedmen in Charlotte, N.C. Biddle graduate Rev. Benjamin Franklin McDowell served as Mattoon Church’s pastor from 1879 to 1906.",
          },
        ],
      },
      {
        kind: "scene",
        id: "building",
        kicker: "c.1887",
        title: "A first permanent place of worship",
        partLabel: "the brick church",
        art: art(
          "m2396-church.jpg",
          "Illustration of a two-story brick church with a central steeple. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "c.1887",
            x: 32,
            y: 44,
            fact: "The two-story brick building at this site was constructed in c.1887 and was Mattoon’s first permanent place of worship. It is one of the oldest historically Black church buildings in Greenville and originally had a central steeple.",
          },
          {
            id: "school",
            label: "Parochial school",
            x: 74,
            y: 58,
            fact: "The congregation included approx. 50 communicant members around 1900. Mattoon Church also maintained a parochial school that served Black families around the community, including non-members. The school closed in c.1930.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Around 1900",
        title: "Communicant members",
        partLabel: "about 50 members",
        value: 50,
        unit: "members",
        meant:
          "What this meant: the marker says the congregation included approx. 50 communicant members around 1900.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2396-church.jpg",
          "Illustration of a two-story brick church with a central steeple. Not a historical photograph.",
        ),
        nowArt: art(
          "m2396-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a two-story brick church with a central steeple, for the building the marker says was constructed in c.1887.",
        nowCaption:
          "Illustration of a blank roadside marker on the same ground.",
      },
      order(
        [
          {
            id: "organized",
            year: "1878",
            label: "Black members organize Mattoon Presbyterian Church.",
            why: "The marker says Mattoon Presbyterian Church was organized in 1878 by Black members of Washington Street (First) Presbyterian Church.",
          },
          {
            id: "pastor",
            year: "1879",
            label: "Rev. Benjamin Franklin McDowell becomes pastor.",
            why: "The marker says Biddle graduate Rev. Benjamin Franklin McDowell served as Mattoon Church’s pastor from 1879 to 1906.",
          },
          {
            id: "built",
            year: "c.1887",
            label: "A two-story brick building is constructed.",
            why: "The marker says the two-story brick building at this site was constructed in c.1887 and was Mattoon’s first permanent place of worship.",
          },
          {
            id: "school",
            year: "c.1930",
            label: "The parochial school closes.",
            why: "The marker says Mattoon Church maintained a parochial school that served Black families around the community, including non-members, and the school closed in c.1930.",
          },
        ],
        ["built", "organized", "school", "pastor"],
      ),
      takeaway([
        "Mattoon Presbyterian Church was organized in 1878 by Black members of Washington Street (First) Presbyterian Church.",
        "They affiliated with the Northern Assembly of Presbyterians and named the church for Rev. Stephen Mattoon, president of Biddle University for freedmen in Charlotte, N.C.",
        "The two-story brick building at this site was constructed in c.1887 and was Mattoon’s first permanent place of worship.",
      ]),
    ],
  ),
  lesson(
    "23-97",
    "One of the town’s earliest hotels",
    "Prospect Hill timeline",
    [cited("23-97", "Prospect Hill", "front and back")],
    [
      {
        kind: "scene",
        id: "mansion",
        kicker: "1788",
        title: "A two-story wooden mansion",
        partLabel: "the mansion",
        art: art(
          "m2397-mansion.jpg",
          "Illustration of a two-story wooden mansion above a tree-lined road. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "1788",
            x: 32,
            y: 46,
            fact: "This site was named Prospect Hill by Lemuel J. Alston, an early Greenville resident who acquired the property in 1788. He subsequently had a two-story wooden mansion built near this point.",
          },
          {
            id: "road",
            label: "Sycamore road",
            x: 74,
            y: 62,
            fact: "The elevated seat overlooked a sycamore-lined road that led east to the town center.",
          },
        ],
      },
      {
        kind: "scene",
        id: "homestead",
        kicker: "1836",
        title: "The family homestead of Vardry McBee",
        partLabel: "the homestead",
        art: art(
          "m2397-homestead.jpg",
          "Illustration of a wooden mansion with small outbuildings on a hill. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sold",
            label: "1815",
            x: 32,
            y: 40,
            fact: "In 1815, Alston sold Prospect Hill and approx. 11,000 ac. covering much of downtown Greenville to Vardry McBee. The mansion served as one of the town’s earliest hotels until McBee took up residence in 1836.",
          },
          {
            id: "mcbee",
            label: "1864",
            x: 74,
            y: 54,
            fact: "In 1836, this became the family homestead of Vardry McBee, described by some as “the father of Greenville.” The homestead here included the mansion and several slave houses. None remain. McBee died in 1864.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1815",
        title: "Acres sold with Prospect Hill",
        partLabel: "about 11,000 acres",
        value: 11000,
        unit: "acres",
        meant:
          "What this meant: the marker says that in 1815, Alston sold Prospect Hill and approx. 11,000 ac. covering much of downtown Greenville to Vardry McBee.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2397-mansion.jpg",
          "Illustration of a two-story wooden mansion above a tree-lined road. Not a historical photograph.",
        ),
        nowArt: art(
          "m2397-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a two-story wooden mansion above a tree-lined road, for the mansion the marker says Lemuel J. Alston had built near this point.",
        nowCaption:
          "Illustration of a blank roadside marker on the same ground.",
      },
      order(
        [
          {
            id: "named",
            year: "1788",
            label: "Lemuel J. Alston names the site Prospect Hill.",
            why: "The marker says this site was named Prospect Hill by Lemuel J. Alston, an early Greenville resident who acquired the property in 1788.",
          },
          {
            id: "sold",
            year: "1815",
            label: "Alston sells Prospect Hill to Vardry McBee.",
            why: "The marker says that in 1815, Alston sold Prospect Hill and approx. 11,000 ac. covering much of downtown Greenville to Vardry McBee.",
          },
          {
            id: "homestead",
            year: "1836",
            label: "McBee takes up residence at the homestead.",
            why: "The marker says the mansion served as one of the town’s earliest hotels until McBee took up residence in 1836, when this became the family homestead of Vardry McBee.",
          },
          {
            id: "died",
            year: "1864",
            label: "Vardry McBee dies.",
            why: "The marker says McBee died in 1864. The homestead here included the mansion and several slave houses. None remain.",
          },
        ],
        ["homestead", "named", "died", "sold"],
      ),
      takeaway([
        "This site was named Prospect Hill by Lemuel J. Alston, an early Greenville resident who acquired the property in 1788.",
        "In 1815, Alston sold Prospect Hill and approx. 11,000 ac. covering much of downtown Greenville to Vardry McBee.",
        "The homestead here included the mansion and several slave houses. None remain. McBee died in 1864.",
      ]),
    ],
  ),
];

