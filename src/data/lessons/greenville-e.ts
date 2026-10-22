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

export const greenvilleLessonsE: MarkerLesson[] = [
  lesson(
    "23-23",
    "Trinity's fifth president, then Duke's first",
    "William Preston Few (1867-1940) timeline",
    [
      cited("23-23", "William Preston Few (1867-1940)", "front and back"),
      span(
        "\"14 years\" is 1924 minus 1910, the year Few became the first president of Duke University and the year he became Trinity's fifth president.",
      ),
    ],
    [
      {
        kind: "scene",
        id: "birth",
        kicker: "1867",
        title: "Born near this marker",
        partLabel: "the birthplace",
        art: art(
          "m2323-birth.jpg",
          "Illustration of a quiet house and trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "1867",
            x: 32,
            y: 46,
            fact: "William Preston Few, prominent Southern educator, was born 1.6 mi. NE in 1867.",
          },
          {
            id: "harvard",
            label: "1896",
            x: 74,
            y: 58,
            fact: "Few received his Ph.D. from Harvard in 1896 and joined the faculty of Trinity College, Durham, N.C., that same year.",
          },
        ],
      },
      {
        kind: "scene",
        id: "college",
        kicker: "1910",
        title: "A small Methodist college becomes a university",
        partLabel: "the presidency",
        art: art(
          "m2323-college.jpg",
          "Illustration of a college building and a larger campus hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "trinity",
            label: "Fifth president",
            x: 32,
            y: 44,
            fact: "He became Trinity's fifth president in 1910 and was instrumental in transforming the small Methodist college into a major university by cultivating the financial support of industrialist James Buchanan Duke (1856-1925).",
          },
          {
            id: "endowment",
            label: "1924",
            x: 74,
            y: 60,
            fact: "Few persuaded Duke to establish the Duke Endowment in 1924, a trust which created Duke University and which still supports it and other institutions and charities in the Carolinas, including children's homes, hospitals, Davidson College and Johnson C. Smith University in N.C., and Furman University in S.C. William Preston Few was the first president of Duke University, serving from 1924 until his death.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1910-1924",
        title: "Years from Trinity's presidency to Duke's",
        partLabel: "14 years",
        value: 14,
        unit: "years",
        meant:
          "What this meant: 1924 comes 14 years after 1910. Few became Trinity's fifth president in 1910. He was the first president of Duke University, serving from 1924 until his death.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2323-college.jpg",
          "Illustration of a college building. Not a historical photograph.",
        ),
        nowArt: art(
          "m2323-today.jpg",
          "Illustration of a campus lawn and stone hall. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a college building, for Trinity College, where the marker says Few became the fifth president in 1910. Not a historical photograph.",
        nowCaption:
          "Illustration of a campus lawn and stone hall. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1867",
            label: "William Preston Few is born.",
            why: "The marker says William Preston Few, prominent Southern educator, was born 1.6 mi. NE in 1867.",
          },
          {
            id: "degree",
            year: "1896",
            label: "He receives his Ph.D. and joins the Trinity faculty.",
            why: "The marker says Few received his Ph.D. from Harvard in 1896 and joined the faculty of Trinity College, Durham, N.C., that same year.",
          },
          {
            id: "president",
            year: "1910",
            label: "He becomes Trinity's fifth president.",
            why: "The marker says he became Trinity's fifth president in 1910.",
          },
          {
            id: "duke",
            year: "1924",
            label: "The Duke Endowment is established, and he becomes Duke's first president.",
            why: "The marker says Few persuaded Duke to establish the Duke Endowment in 1924, and that Few was the first president of Duke University, serving from 1924 until his death.",
          },
        ],
        ["duke", "born", "president", "degree"],
      ),
      takeaway([
        "William Preston Few, prominent Southern educator, was born 1.6 mi. NE in 1867. He received his Ph.D. from Harvard in 1896 and joined the faculty of Trinity College, Durham, N.C., that same year.",
        "He became Trinity's fifth president in 1910 and was instrumental in transforming the small Methodist college into a major university by cultivating the financial support of industrialist James Buchanan Duke (1856-1925).",
        "Few persuaded Duke to establish the Duke Endowment in 1924, a trust which created Duke University. William Preston Few was the first president of Duke University, serving from 1924 until his death.",
      ]),
    ],
  ),
  lesson(
    "23-24",
    "Built in 1834 and moved twice",
    "Fountain Fox Beattie House timeline",
    [
      cited("23-24", "Fountain Fox Beattie House", "front and back"),
      span(
        "\"114 years\" is 1948 minus 1834, the year the house was moved to Beattie Place and the year it was built.",
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1834",
        title: "A house for a new bride",
        partLabel: "the 1834 house",
        art: art(
          "m2324-house.jpg",
          "Illustration of an early house with added wings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1834",
            x: 32,
            y: 46,
            fact: "This house, built in 1834, first stood a few blocks south on East North St. It was built by Fountain Fox Beattie (1807 1863), a textile merchant, for his new bride Emily Edgeworth Hamlin.",
          },
          {
            id: "wings",
            label: "1872",
            x: 74,
            y: 58,
            fact: "Their son Hamlin Beattie (1835 1914), who founded the National Bank of Greenville in 1872, added wings and elaborate Italianate ornamentation. The house was listed in the National Register of Historic Places in 1974.",
          },
        ],
      },
      {
        kind: "scene",
        id: "moves",
        kicker: "1946",
        title: "Bought by the city, then moved",
        partLabel: "the two moves",
        art: art(
          "m2324-move.jpg",
          "Illustration of a house set on timbers along an empty street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "family",
            label: "1948",
            x: 32,
            y: 48,
            fact: "The house remained in the Beattie family until 1946, when the city bought the property to widen Church St. When the house was moved to Beattie Place in 1948 it was leased to the women's organizations of Greenville. The Greenville Woman's Club officially opened in 1949.",
          },
          {
            id: "again",
            label: "1983",
            x: 74,
            y: 56,
            fact: "The house was moved a second time in 1983 to make room for downtown expansion. Member clubs maintain the house and gardens.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1834-1948",
        title: "Years from the building to the first move",
        partLabel: "114 years",
        value: 114,
        unit: "years",
        meant:
          "What this meant: 1948 comes 114 years after 1834. The marker says the house was built in 1834 and was moved to Beattie Place in 1948.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2324-house.jpg",
          "Illustration of an early house with added wings. Not a historical photograph.",
        ),
        nowArt: art(
          "m2324-today.jpg",
          "Illustration of a house and gardens. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early house with added wings, for the house the marker says was built in 1834. Not a historical photograph.",
        nowCaption: "Illustration of a house and gardens. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1834",
            label: "The house is built on East North St.",
            why: "The marker says this house, built in 1834, first stood a few blocks south on East North St.",
          },
          {
            id: "bought",
            year: "1946",
            label: "The city buys the property.",
            why: "The marker says the house remained in the Beattie family until 1946, when the city bought the property to widen Church St.",
          },
          {
            id: "moved",
            year: "1948",
            label: "The house is moved to Beattie Place.",
            why: "The marker says the house was moved to Beattie Place in 1948 and leased to the women's organizations of Greenville.",
          },
          {
            id: "second",
            year: "1983",
            label: "The house is moved a second time.",
            why: "The marker says the house was moved a second time in 1983 to make room for downtown expansion.",
          },
        ],
        ["second", "built", "moved", "bought"],
      ),
      takeaway([
        "This house, built in 1834, first stood a few blocks south on East North St. It was built by Fountain Fox Beattie (1807 1863), a textile merchant, for his new bride Emily Edgeworth Hamlin.",
        "Their son Hamlin Beattie (1835 1914), who founded the National Bank of Greenville in 1872, added wings and elaborate Italianate ornamentation. The house was listed in the National Register of Historic Places in 1974.",
        "The house remained in the Beattie family until 1946. It was moved to Beattie Place in 1948, and the Greenville Woman's Club officially opened in 1949. The house was moved a second time in 1983.",
      ]),
    ],
  ),
  lesson(
    "23-25",
    "The last extant covered bridge in S.C.",
    "Campbell's Covered Bridge timeline",
    [cited("23-25", "Campbell's Covered Bridge", "front")],
    [
      {
        kind: "scene",
        id: "bridge",
        kicker: "1909",
        title: "Named for the man who ran the mill",
        partLabel: "the bridge",
        art: art(
          "m2325-bridge.jpg",
          "Illustration of a wooden covered bridge. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1909",
            x: 32,
            y: 48,
            fact: "This bridge, built in 1909, is the last extant covered bridge in S.C. Built by Charles Irwin Willis (1878-1966).",
          },
          {
            id: "named",
            label: "Campbell",
            x: 74,
            y: 58,
            fact: "It was named for Alexander Lafayette Campbell (1836-1920), who owned and operated a grist mill here for many years.",
          },
        ],
      },
      {
        kind: "scene",
        id: "truss",
        kicker: "1909",
        title: "A four-span Howe truss",
        partLabel: "the truss",
        art: art(
          "m2325-truss.jpg",
          "Illustration of diagonal timbers and iron rods inside a covered bridge. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "measure",
            label: "35 by 12 feet",
            x: 32,
            y: 44,
            fact: "Measuring 35 feet long and 12 feet wide.",
          },
          {
            id: "howe",
            label: "Howe truss",
            x: 74,
            y: 60,
            fact: "It is an excellent example of a four-span Howe truss, featuring diagonal timbers and vertical iron rods.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1909",
        title: "Feet in the bridge's length",
        partLabel: "35 feet",
        value: 35,
        unit: "feet",
        meant:
          "What this meant: the marker says the bridge measures 35 feet long and 12 feet wide.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2325-bridge.jpg",
          "Illustration of a wooden covered bridge. Not a historical photograph.",
        ),
        nowArt: art(
          "m2325-today.jpg",
          "Illustration of a covered bridge among trees. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden covered bridge, for the bridge the marker says was built in 1909. Not a historical photograph.",
        nowCaption:
          "Illustration of a covered bridge among trees. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "campbell",
            year: "1836",
            label: "Alexander Lafayette Campbell's years on the marker begin.",
            why: "The marker gives Alexander Lafayette Campbell's years as 1836-1920. He owned and operated a grist mill here for many years, and the bridge was named for him.",
          },
          {
            id: "willis",
            year: "1878",
            label: "Charles Irwin Willis's years on the marker begin.",
            why: "The marker gives Charles Irwin Willis's years as 1878-1966. He built the bridge.",
          },
          {
            id: "built",
            year: "1909",
            label: "The covered bridge is built.",
            why: "The marker says this bridge was built in 1909 and is the last extant covered bridge in S.C.",
          },
          {
            id: "campbellend",
            year: "1920",
            label: "Campbell's years on the marker end.",
            why: "The marker gives Alexander Lafayette Campbell's years as 1836-1920.",
          },
        ],
        ["built", "campbell", "campbellend", "willis"],
      ),
      takeaway([
        "This bridge, built in 1909, is the last extant covered bridge in S.C.",
        "Built by Charles Irwin Willis (1878-1966), it was named for Alexander Lafayette Campbell (1836-1920), who owned and operated a grist mill here for many years.",
        "Measuring 35 feet long and 12 feet wide, it is an excellent example of a four-span Howe truss, featuring diagonal timbers and vertical iron rods.",
      ]),
    ],
  ),
  lesson(
    "23-26",
    "Called the Airlift Capital of the World",
    "Donaldson Air Force Base timeline",
    [cited("23-26", "Donaldson Air Force Base", "front and back")],
    [
      {
        kind: "scene",
        id: "base",
        kicker: "1942",
        title: "Bomber training, then air transport",
        partLabel: "the base",
        art: art(
          "m2326-base.jpg",
          "Illustration of an airfield, hangars, and an unlettered cargo airplane. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1942",
            x: 32,
            y: 46,
            fact: "Greenville Army Air Base opened on this site in 1942 and trained B-25 bomber crews during World War II.",
          },
          {
            id: "airlift",
            label: "1951",
            x: 74,
            y: 58,
            fact: "Emphasizing air transport after 1945 and renamed Donaldson Air Force Base in 1951, it was home to C-124 transports and called “The Airlift Capital of the World” for its role in the Berlin airlift, Korean War, and Cold War. Closed in 1962, it has been an industrial park since 1963.",
          },
        ],
      },
      {
        kind: "scene",
        id: "plane",
        kicker: "1930",
        title: "Eight enemy planes, then an air-show crash",
        partLabel: "the namesake",
        art: art(
          "m2326-plane.jpg",
          "Illustration of a small early airplane on a grass field. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "donaldson",
            label: "1897-1930",
            x: 32,
            y: 44,
            fact: "John Owen Donaldson (1897-1930), for whom the base was named, grew up in Greenville and attended Furman University and Cornell University before joining the British Royal Air Force in World War I.",
          },
          {
            id: "ace",
            label: "Eight planes",
            x: 74,
            y: 60,
            fact: "He became an ace, shooting down eight enemy planes, and was decorated by the United States, Great Britain, and Belgium. Davidson was killed in a plane crash at an air show in 1930.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "World War I",
        title: "Enemy planes he shot down",
        partLabel: "eight planes",
        value: 8,
        unit: "enemy planes",
        meant:
          "What this meant: the marker says he became an ace, shooting down eight enemy planes, and was decorated by the United States, Great Britain, and Belgium.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2326-base.jpg",
          "Illustration of an airfield and hangars. Not a historical photograph.",
        ),
        nowArt: art(
          "m2326-today.jpg",
          "Illustration of low warehouse buildings. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an airfield and hangars, for the base the marker says opened in 1942. Not a historical photograph.",
        nowCaption:
          "Illustration of low warehouse buildings. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "crash",
            year: "1930",
            label: "The marker says Davidson was killed in a plane crash.",
            why: "The marker says Davidson was killed in a plane crash at an air show in 1930. It gives John Owen Donaldson's years as 1897-1930 and says the base was named for him.",
          },
          {
            id: "opened",
            year: "1942",
            label: "Greenville Army Air Base opens on this site.",
            why: "The marker says Greenville Army Air Base opened on this site in 1942 and trained B-25 bomber crews during World War II.",
          },
          {
            id: "renamed",
            year: "1951",
            label: "The base is renamed Donaldson Air Force Base.",
            why: "The marker says that, emphasizing air transport after 1945, it was renamed Donaldson Air Force Base in 1951.",
          },
          {
            id: "closed",
            year: "1962",
            label: "The base closes.",
            why: "The marker says it closed in 1962 and has been an industrial park since 1963.",
          },
        ],
        ["renamed", "crash", "closed", "opened"],
      ),
      takeaway([
        "Greenville Army Air Base opened on this site in 1942 and trained B-25 bomber crews during World War II. Emphasizing air transport after 1945, it was renamed Donaldson Air Force Base in 1951.",
        "It was home to C-124 transports and called “The Airlift Capital of the World” for its role in the Berlin airlift, Korean War, and Cold War. Closed in 1962, it has been an industrial park since 1963.",
        "John Owen Donaldson (1897-1930), for whom the base was named, grew up in Greenville. He became an ace, shooting down eight enemy planes. Davidson was killed in a plane crash at an air show in 1930.",
      ]),
    ],
  ),
];
