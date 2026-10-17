import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Columbia sites. Facts are from that marker only.
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

export const richlandLessonsAT: MarkerLesson[] = [
  lesson(
    "40-231",
    "A tuberculosis hospital opened in 1915",
    "South Carolina Sanatorium timeline",
    [
      cited("40-231", "South Carolina Sanatorium", "front and back"),
      span(
        '"68 years" is 1983 minus 1915, the years the marker prints for the closing of the hospital and the opening of the tuberculosis hospital.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hospital",
        kicker: "1915",
        title: "Opened by the state Board of Health",
        partLabel: "the hospital",
        art: art(
          "m40231-hospital.jpg",
          "Illustration of wooden hospital buildings with screened porches. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1915",
            x: 32,
            y: 48,
            fact: "At this site in 1915 the state Board of Health opened a tuberculosis hospital known as the South Carolina Sanatorium.",
          },
          {
            id: "wooden",
            label: "Wooden buildings",
            x: 74,
            y: 40,
            fact: "It sat on higher ground and consisted of several wooden buildings including staff housing, offices, and screened-in patient quarters meant to allow for healthful air circulation.",
          },
        ],
      },
      {
        kind: "scene",
        id: "grounds",
        kicker: "1920-1983",
        title: "A campus, a division, and a closing",
        partLabel: "the campus grounds",
        art: art(
          "m40231-grounds.jpg",
          "Illustration of hospital grounds and a farm. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "campus",
            label: "1920",
            x: 32,
            y: 52,
            fact: "The 200-acre campus was part of the state-owned State Park property. The campus also included an active farm. Initially a white hospital, in 1920 the Sanatorium added an African American division called Palmetto Sanatorium.",
          },
          {
            id: "closed",
            label: "1938 and 1983",
            x: 74,
            y: 42,
            fact: "By 1938 the campus served more than 500 patients and had 19 buildings, including a multistory brick hospital for white patients. Starting in the 1940s, advancements in antibiotics gradually reduced U.S, tuberculosis rates. This campus was repurposed over time for other medical services, and the hospital closed in 1983.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1915-1983",
        title: "Years from opening to closing",
        partLabel: "68 years",
        value: 68,
        unit: "years",
        meant:
          "What this meant: 1983 comes 68 years after 1915. That is the stretch from the year the state Board of Health opened the tuberculosis hospital to the year the hospital closed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40231-hospital.jpg",
          "Illustration of wooden hospital buildings with screened porches. Not a historical photograph.",
        ),
        nowArt: art(
          "m40231-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of wooden hospital buildings with screened porches, for the tuberculosis hospital the marker says opened at this site in 1915. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "1915",
            label: "The state Board of Health opens the South Carolina Sanatorium.",
            why: "The marker says that at this site in 1915 the state Board of Health opened a tuberculosis hospital known as the South Carolina Sanatorium. The 200-acre campus was part of the state-owned State Park property. It sat on higher ground and consisted of several wooden buildings including staff housing, offices, and screened-in patient quarters meant to allow for healthful air circulation. The campus also included an active farm.",
          },
          {
            id: "palmetto",
            year: "1920",
            label: "An African American division called Palmetto Sanatorium is added.",
            why: "The marker says it was initially a white hospital, and that in 1920 the Sanatorium added an African American division called Palmetto Sanatorium.",
          },
          {
            id: "served",
            year: "1938",
            label: "The campus serves more than 500 patients.",
            why: "The marker says that by 1938 the campus served more than 500 patients and had 19 buildings, including a multistory brick hospital for white patients.",
          },
          {
            id: "closed",
            year: "1983",
            label: "The hospital closes.",
            why: "The marker says that starting in the 1940s, advancements in antibiotics gradually reduced U.S, tuberculosis rates. This campus was repurposed over time for other medical services, and the hospital closed in 1983.",
          },
        ],
        ["closed", "opened", "served", "palmetto"],
      ),
      takeaway([
        "At this site in 1915 the state Board of Health opened a tuberculosis hospital known as the South Carolina Sanatorium. The 200-acre campus was part of the state-owned State Park property.",
        "It sat on higher ground and consisted of several wooden buildings including staff housing, offices, and screened-in patient quarters meant to allow for healthful air circulation. The campus also included an active farm. Initially a white hospital, in 1920 the Sanatorium added an African American division called Palmetto Sanatorium.",
        "By 1938 the campus served more than 500 patients and had 19 buildings, including a multistory brick hospital for white patients. Starting in the 1940s, advancements in antibiotics gradually reduced U.S, tuberculosis rates. This campus was repurposed over time for other medical services, and the hospital closed in 1983.",
      ]),
    ],
  ),
  lesson(
    "40-233",
    "A turning point for the swamp",
    "Congaree Action Now timeline",
    [cited("40-233", "Congaree Action Now", "front and back")],
    [
      {
        kind: "scene",
        id: "office",
        kicker: "Sept. 20, 1975",
        title: "A conference at the Carolina Inn",
        partLabel: "the conference",
        art: art(
          "m40233-office.jpg",
          "Illustration of an empty inn meeting room. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "gathered",
            label: "Sept. 20, 1975",
            x: 32,
            y: 46,
            fact: "On Sept. 20, 1975, more than 700 people gathered here for Congaree Action Now, a major turning point in the campaign to conserve the Congaree River Swamp southeast of Columbia.",
          },
          {
            id: "inn",
            label: "Carolina Inn",
            x: 74,
            y: 58,
            fact: "The conference held here at the later-removed Carolina Inn culminated efforts by the Congaree Swamp National Preserve Association to galvanize public support for the forest, then being logged. Speakers included prominent conservationists, scientists, and activists.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1950s-1976",
        title: "From a recommendation to a monument",
        partLabel: "the campaign",
        art: art(
          "m40233-street.jpg",
          "Illustration of a street in front of an inn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "swamp",
            label: "1950s and 1963",
            x: 32,
            y: 50,
            fact: "Described as the “Redwoods of the East,” the swamp contained the largest intact old-growth bottomland forest in the U.S. Work towards its protection began in the 1950s. In 1963, the National Park Service recommended it be made a national monument.",
          },
          {
            id: "monument",
            label: "Oct. 18, 1976",
            x: 74,
            y: 40,
            fact: "The rally helped spur action by lawmakers, and President Gerald Ford approved creation of the 15,000-acre Congaree Swamp National Monument on Oct. 18, 1976.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Oct. 18, 1976",
        title: "Acres in the national monument",
        partLabel: "15,000 acres",
        value: 15000,
        unit: "acres",
        meant:
          "What this meant: the marker says President Gerald Ford approved creation of the 15,000-acre Congaree Swamp National Monument on Oct. 18, 1976.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40233-office.jpg",
          "Illustration of an empty inn meeting room. Not a historical photograph.",
        ),
        nowArt: art(
          "m40233-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an empty inn meeting room, for the conference the marker says was held at the later-removed Carolina Inn. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "began",
            year: "1950s",
            label: "Work towards protection of the swamp begins.",
            why: "The marker says work towards its protection began in the 1950s. Described as the “Redwoods of the East,” the swamp contained the largest intact old-growth bottomland forest in the U.S.",
          },
          {
            id: "recommended",
            year: "1963",
            label: "The National Park Service recommends a national monument.",
            why: "The marker says that in 1963, the National Park Service recommended it be made a national monument.",
          },
          {
            id: "gathered",
            year: "Sept. 20, 1975",
            label: "More than 700 people gather for Congaree Action Now.",
            why: "The marker says that on Sept. 20, 1975, more than 700 people gathered here for Congaree Action Now, a major turning point in the campaign to conserve the Congaree River Swamp southeast of Columbia. The conference held here at the later-removed Carolina Inn culminated efforts by the Congaree Swamp National Preserve Association to galvanize public support for the forest, then being logged. Speakers included prominent conservationists, scientists, and activists.",
          },
          {
            id: "approved",
            year: "Oct. 18, 1976",
            label: "President Gerald Ford approves the national monument.",
            why: "The marker says the rally helped spur action by lawmakers, and President Gerald Ford approved creation of the 15,000-acre Congaree Swamp National Monument on Oct. 18, 1976.",
          },
        ],
        ["gathered", "began", "approved", "recommended"],
      ),
      takeaway([
        "On Sept. 20, 1975, more than 700 people gathered here for Congaree Action Now, a major turning point in the campaign to conserve the Congaree River Swamp southeast of Columbia.",
        "Described as the “Redwoods of the East,” the swamp contained the largest intact old-growth bottomland forest in the U.S. Work towards its protection began in the 1950s. In 1963, the National Park Service recommended it be made a national monument.",
        "The conference held here at the later-removed Carolina Inn culminated efforts by the Congaree Swamp National Preserve Association to galvanize public support for the forest, then being logged. Speakers included prominent conservationists, scientists, and activists. The rally helped spur action by lawmakers, and President Gerald Ford approved creation of the 15,000-acre Congaree Swamp National Monument on Oct. 18, 1976.",
      ]),
    ],
  ),
  lesson(
    "40-234",
    "Worshipped first in a yard",
    "Ridgewood Baptist Church timeline",
    [
      cited("40-234", "Ridgewood Baptist Church", "front and back"),
      span(
        '"39 years" is 1964 minus 1925, the years the marker prints for the brick building that replaced the first church and the organization of the church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1927",
        title: "A house of worship on this site",
        partLabel: "the church",
        art: art(
          "m40234-church.jpg",
          "Illustration of a brick church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1927",
            x: 32,
            y: 46,
            fact: "They acquired this site in 1927. Also known as Ridgewood Tabernacle Baptist Church, the congregation built their first house of worship soon after with help from other neighborhood residents.",
          },
          {
            id: "brick",
            label: "1964",
            x: 74,
            y: 56,
            fact: "The first church was torn down and replaced in 1964 by a brick building that still stands. Congregants later built a family life center and began a number of community programs.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1925",
        title: "Worship in a family yard",
        partLabel: "the yard",
        art: art(
          "m40234-yard.jpg",
          "Illustration of a house yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1925",
            x: 32,
            y: 50,
            fact: "Ridgewood Baptist Church organized in 1925. Members initially worshipped in the yard of Robert and Lillie Knightner’s family home on Monticello Road. Baptisms were initially conducted in a branch of Crane Creek to the east.",
          },
          {
            id: "dennis",
            label: "1955",
            x: 74,
            y: 40,
            fact: "Ridgewood’s founding minister was Rev. Zachariah E. Dennis, who served the congregation until his 1955 death. During that time the church became an important institution for African American residents of the Ridgewood neighborhood.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1925-1964",
        title: "Years from organization to the brick building",
        partLabel: "39 years",
        value: 39,
        unit: "years",
        meant:
          "What this meant: 1964 comes 39 years after 1925. That is the stretch from the year the church organized to the year the first church was torn down and replaced by a brick building.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40234-church.jpg",
          "Illustration of a brick church. Not a historical photograph.",
        ),
        nowArt: art(
          "m40234-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick church, for the brick building the marker says replaced the first church in 1964 and still stands. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1925",
            label: "Ridgewood Baptist Church organizes.",
            why: "The marker says Ridgewood Baptist Church organized in 1925. Members initially worshipped in the yard of Robert and Lillie Knightner’s family home on Monticello Road. Baptisms were initially conducted in a branch of Crane Creek to the east.",
          },
          {
            id: "acquired",
            year: "1927",
            label: "The congregation acquires this site.",
            why: "The marker says they acquired this site in 1927. Also known as Ridgewood Tabernacle Baptist Church, the congregation built their first house of worship soon after with help from other neighborhood residents.",
          },
          {
            id: "dennis",
            year: "1955",
            label: "Founding minister Rev. Zachariah E. Dennis dies.",
            why: "The marker says Ridgewood’s founding minister was Rev. Zachariah E. Dennis, who served the congregation until his 1955 death. During that time the church became an important institution for African American residents of the Ridgewood neighborhood.",
          },
          {
            id: "brick",
            year: "1964",
            label: "A brick building replaces the first church.",
            why: "The marker says the first church was torn down and replaced in 1964 by a brick building that still stands. Congregants later built a family life center and began a number of community programs.",
          },
        ],
        ["brick", "organized", "dennis", "acquired"],
      ),
      takeaway([
        "Ridgewood Baptist Church organized in 1925. Members initially worshipped in the yard of Robert and Lillie Knightner’s family home on Monticello Road. They acquired this site in 1927.",
        "Also known as Ridgewood Tabernacle Baptist Church, the congregation built their first house of worship soon after with help from other neighborhood residents. Baptisms were initially conducted in a branch of Crane Creek to the east.",
        "Ridgewood’s founding minister was Rev. Zachariah E. Dennis, who served the congregation until his 1955 death. During that time the church became an important institution for African American residents of the Ridgewood neighborhood. The first church was torn down and replaced in 1964 by a brick building that still stands. Congregants later built a family life center and began a number of community programs.",
      ]),
    ],
  ),
];
