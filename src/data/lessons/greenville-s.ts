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

export const greenvilleLessonsS: MarkerLesson[] = [
  lesson(
    "23-81",
    "More than 100 recorded interments",
    "Garrison Cemetery timeline",
    [cited("23-81", "Garrison Cemetery", "front and back")],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1780s",
        title: "A grist mill on the Saluda",
        partLabel: "the mill",
        art: art(
          "m2381-mill.jpg",
          "Illustration of a grist mill beside a rocky river. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "family",
            label: "1780s",
            x: 32,
            y: 48,
            fact: "Garrison Cemetery is named for the Garrison family, who were among the first European settlers in the area that became Piedmont, SC. The patriarch of the family, David Garrison, settled here in the 1780s.",
          },
          {
            id: "shoals",
            label: "Garrison Shoals",
            x: 74,
            y: 36,
            fact: "David Garrison operated a grist mill on the Saluda River along what became known as Garrison Shoals. A marker for Garrison is located here, though the actual site of his burial is unknown.",
          },
        ],
      },
      {
        kind: "scene",
        id: "burials",
        kicker: "1853",
        title: "The first known burial",
        partLabel: "the burials",
        art: art(
          "m2381-cemetery.jpg",
          "Illustration of a tree-shaded burial ground. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "first",
            label: "1853",
            x: 32,
            y: 52,
            fact: "The first known burial occurred in 1853, when Barksdale Dunham Garrison, a veteran of the War of 1812 who achieved the rank of Brig. Gen., was buried here.",
          },
          {
            id: "veterans",
            label: "More than 100",
            x: 74,
            y: 34,
            fact: "In addition, there are veterans from every major American War from the Civil War to Vietnam. In total, more than 100 interments have been recorded here.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Recorded here",
        title: "Interments the marker gives",
        partLabel: "more than 100",
        value: 100,
        unit: "interments",
        meant:
          "What this meant: the marker says that in total, more than 100 interments have been recorded here.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2381-cemetery.jpg",
          "Illustration of a tree-shaded burial ground. Not a historical photograph.",
        ),
        nowArt: art(
          "m2381-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a tree-shaded burial ground, for the cemetery the marker says has recorded more than 100 interments. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "settled",
            year: "1780s",
            label: "David Garrison settles here and operates a grist mill.",
            why: "The marker says the patriarch, David Garrison, settled here in the 1780s and operated a grist mill on the Saluda River along what became known as Garrison Shoals.",
          },
          {
            id: "war",
            year: "War of 1812",
            label: "Barksdale Dunham Garrison is a veteran of the War of 1812.",
            why: "The marker says Barksdale Dunham Garrison was a veteran of the War of 1812 who achieved the rank of Brig. Gen.",
          },
          {
            id: "burial",
            year: "1853",
            label: "The first known burial is Barksdale Dunham Garrison.",
            why: "The marker says the first known burial occurred in 1853, when Barksdale Dunham Garrison was buried here.",
          },
          {
            id: "later",
            year: "Civil War to Vietnam",
            label: "Veterans of later wars are buried here.",
            why: "The marker says there are veterans from every major American War from the Civil War to Vietnam, and that more than 100 interments have been recorded here.",
          },
        ],
        ["burial", "settled", "later", "war"],
      ),
      takeaway([
        "Garrison Cemetery is named for the Garrison family, who were among the first European settlers in the area that became Piedmont, SC. David Garrison settled here in the 1780s and operated a grist mill on the Saluda River along Garrison Shoals.",
        "A marker for Garrison is located here, though the actual site of his burial is unknown. The first known burial occurred in 1853, when Barksdale Dunham Garrison, a veteran of the War of 1812 who achieved the rank of Brig. Gen., was buried here.",
        "There are veterans from every major American War from the Civil War to Vietnam. In total, more than 100 interments have been recorded here.",
      ]),
    ],
  ),
  lesson(
    "23-82",
    "The finest home of any man in northern South Carolina",
    "Wilkins House timeline",
    [cited("23-82", "Wilkins House", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1878",
        title: "Italianate, with Gothic and Moorish elements",
        partLabel: "the house",
        art: art(
          "m2382-house.jpg",
          "Illustration of an ornate house with pointed and horseshoe arches. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1878",
            x: 32,
            y: 46,
            fact: "The Wilkins House was built in 1878 by Greenville builder Jacob Cagle for William Wilkins and his wife Harriett Cleveland Wilkins. The home, which originally fronted Augusta St., was designed in the Italianate style, but also incorporated Gothic and Moorish elements.",
          },
          {
            id: "article",
            label: "1898",
            x: 74,
            y: 34,
            fact: "The interior finishes, including complex millwork and Lincrusta wall coverings, matched the high style of the exterior. An 1898 article declared it “the finest home of any man in northern South Carolina.”",
          },
        ],
      },
      {
        kind: "scene",
        id: "move",
        kicker: "2014",
        title: "A 750-ton building moved",
        partLabel: "the move",
        art: art(
          "m2382-move.jpg",
          "Illustration of a large house raised on timber beams. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "family",
            label: "1895 and 1933",
            x: 32,
            y: 50,
            fact: "William Wilkins died in 1895 but Harriett lived here until her death in 1930. In 1933 the house was leased by the Wilkins family to R.D. Jones, who used it as both a residence and funeral home.",
          },
          {
            id: "moved",
            label: "2014",
            x: 74,
            y: 36,
            fact: "When the home was threatened with demolition in 2014 a public fundraising campaign, along with the efforts of a new owner, combined to raise enough money to move the 750-ton building to its current site. At the time, it was believed to be the heaviest building ever moved in S.C.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "2014",
        title: "Weight of the building that was moved",
        partLabel: "750 tons",
        value: 750,
        unit: "tons",
        meant:
          "What this meant: the marker says the 750-ton building was moved to its current site. At the time, it was believed to be the heaviest building ever moved in S.C.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2382-house.jpg",
          "Illustration of an ornate house with pointed and horseshoe arches. Not a historical photograph.",
        ),
        nowArt: art(
          "m2382-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an ornate house, for the home the marker says was built in 1878 and originally fronted Augusta St. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1878",
            label: "Jacob Cagle builds the house for the Wilkins family.",
            why: "The marker says the Wilkins House was built in 1878 by Greenville builder Jacob Cagle for William Wilkins and his wife Harriett Cleveland Wilkins.",
          },
          {
            id: "william",
            year: "1895",
            label: "William Wilkins dies.",
            why: "The marker says William Wilkins died in 1895 but Harriett lived here until her death in 1930.",
          },
          {
            id: "article",
            year: "1898",
            label: "An article calls it the finest home of any man in northern South Carolina.",
            why: "The marker says an 1898 article declared it “the finest home of any man in northern South Carolina.”",
          },
          {
            id: "harriett",
            year: "1930",
            label: "Harriett Cleveland Wilkins dies.",
            why: "The marker says Harriett lived here until her death in 1930.",
          },
          {
            id: "leased",
            year: "1933",
            label: "The family leases the house to R.D. Jones.",
            why: "The marker says that in 1933 the house was leased by the Wilkins family to R.D. Jones, who used it as both a residence and funeral home.",
          },
          {
            id: "moved",
            year: "2014",
            label: "The 750-ton building is moved.",
            why: "The marker says that when the home was threatened with demolition in 2014, a public fundraising campaign and a new owner raised enough money to move the 750-ton building to its current site.",
          },
        ],
        ["moved", "article", "built", "leased", "william", "harriett"],
      ),
      takeaway([
        "The Wilkins House was built in 1878 by Greenville builder Jacob Cagle for William Wilkins and his wife Harriett Cleveland Wilkins. It originally fronted Augusta St. and was Italianate, with Gothic and Moorish elements.",
        "An 1898 article declared it “the finest home of any man in northern South Carolina.” William Wilkins died in 1895, but Harriett lived here until 1930. In 1933 the house was leased to R.D. Jones as both a residence and funeral home.",
        "Threatened with demolition in 2014, the 750-ton building was moved to its current site after a public fundraising campaign and the efforts of a new owner. It was believed to be the heaviest building ever moved in S.C.",
      ]),
    ],
  ),
  lesson(
    "23-83",
    "The second transcontinental highway",
    "National Highway timeline",
    [cited("23-83", "National Highway", "front and back")],
    [
      {
        kind: "scene",
        id: "road",
        kicker: "1916",
        title: "From Washington to San Diego",
        partLabel: "the highway",
        art: art(
          "m2383-highway.jpg",
          "Illustration of an early highway through rolling hills. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "formed",
            label: "1916",
            x: 32,
            y: 48,
            fact: "The Bankhead National Hwy. Association was formed in 1916 with the goal of creating a transcontinental highway that would run from Washington, D.C. to San Diego, CA. When completed in 1920, it became the second transcontinental highway in the U.S.",
          },
          {
            id: "route",
            label: "Upstate towns",
            x: 74,
            y: 36,
            fact: "The National Hwy., also known as the Bankhead Hwy., connected towns across the S.C. Upstate. It crossed into S.C. near Blacksburg and passed through Gaffney, Spartanburg, Greer, Greenville, and Anderson.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1920",
        title: "Following what is now Poinsett St.",
        partLabel: "the later routes",
        art: art(
          "m2383-street.jpg",
          "Illustration of a narrow town street and a wider road beyond. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bankhead",
            label: "1842-1920",
            x: 32,
            y: 46,
            fact: "John Hollis Bankhead (1842-1920), a U.S. Senator from Alabama and advocate of the Good Roads Movement, sponsored the Federal Road Aid Act of 1916, which authorized $75 million for road improvement and was the first federal highway funding law.",
          },
          {
            id: "replaced",
            label: "Later routes",
            x: 74,
            y: 34,
            fact: "The National Hwy. passed through Greer, following what is now Poinsett St. Later, the Super Hwy. (now Wade Hampton Blvd.) and Interstate 85 would replace the National Hwy. as the main route from Charlotte to Atlanta.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1916",
        title: "Authorized for road improvement",
        partLabel: "75 million dollars",
        value: 75,
        unit: "million dollars",
        meant:
          "What this meant: the marker says the Federal Road Aid Act of 1916 authorized $75 million for road improvement and was the first federal highway funding law.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2383-highway.jpg",
          "Illustration of an early highway through rolling hills. Not a historical photograph.",
        ),
        nowArt: art(
          "m2383-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early highway, for the National Hwy. the marker says was completed in 1920. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "formed",
            year: "1916",
            label: "The association is formed, and Bankhead sponsors the road act.",
            why: "The marker says the Bankhead National Hwy. Association was formed in 1916 to create a transcontinental highway from Washington, D.C. to San Diego, CA, and that John Hollis Bankhead (1842-1920) sponsored the Federal Road Aid Act of 1916, which authorized $75 million for road improvement and was the first federal highway funding law.",
          },
          {
            id: "completed",
            year: "1920",
            label: "The highway is completed.",
            why: "The marker says that when completed in 1920, it became the second transcontinental highway in the U.S. It crossed into S.C. near Blacksburg and passed through Gaffney, Spartanburg, Greer, Greenville, and Anderson.",
          },
          {
            id: "replaced",
            year: "Later",
            label: "The Super Hwy. and Interstate 85 replace it.",
            why: "The marker says the National Hwy. passed through Greer on what is now Poinsett St., and that later the Super Hwy. (now Wade Hampton Blvd.) and Interstate 85 replaced it as the main route from Charlotte to Atlanta.",
          },
        ],
        ["replaced", "completed", "formed"],
      ),
      takeaway([
        "The Bankhead National Hwy. Association was formed in 1916 to create a transcontinental highway from Washington, D.C. to San Diego, CA. When completed in 1920, it became the second transcontinental highway in the U.S.",
        "The National Hwy., also known as the Bankhead Hwy., crossed into S.C. near Blacksburg and passed through Gaffney, Spartanburg, Greer, Greenville, and Anderson. In Greer it followed what is now Poinsett St.",
        "John Hollis Bankhead (1842-1920), a U.S. Senator from Alabama and advocate of the Good Roads Movement, sponsored the Federal Road Aid Act of 1916, which authorized $75 million for road improvement. Later the Super Hwy. (now Wade Hampton Blvd.) and Interstate 85 replaced the National Hwy. as the main route from Charlotte to Atlanta.",
      ]),
    ],
  ),
  lesson(
    "23-84",
    "A spring that appears as standing water",
    "Standing Spring Baptist Church timeline",
    [
      cited("23-84", "Standing Spring Baptist Church", "front and back"),
      span(
        '"152 years" is 1970 minus 1818, the years the marker prints for the dedication of the current sanctuary and the organization of Standing Springs Baptist Church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "spring",
        kicker: "1818",
        title: "An arm of Fork Shoals Baptist Church",
        partLabel: "the first meetings",
        art: art(
          "m2384-spring.jpg",
          "Illustration of a spring beside a small wooden meeting house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1818",
            x: 32,
            y: 48,
            fact: "Standing Springs Baptist Church was organized in 1818 as an arm of Fork Shoals Baptist Church. There were ten charter members and Rev. Nathan Berry was the first pastor.",
          },
          {
            id: "house",
            label: "c. 1836",
            x: 74,
            y: 36,
            fact: "Early meetings were held in the home of James Cox and the first meeting house was constructed c. 1836 on land donated by Mr. Cox. The congregation derives its name from a nearby spring that originates underground and appears as standing water. Like many Baptist churches, the congregation here included enslaved people before the Civil War.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuary",
        kicker: "1917",
        title: "A second sanctuary, then the current one",
        partLabel: "the sanctuaries",
        art: art(
          "m2384-sanctuary.jpg",
          "Illustration of a brick church sanctuary. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "second",
            label: "1917",
            x: 32,
            y: 46,
            fact: "A second sanctuary was built in 1917 and expanded in 1959.",
          },
          {
            id: "current",
            label: "1970",
            x: 74,
            y: 34,
            fact: "The current sanctuary was dedicated in 1970.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1818-1970",
        title: "Years from the organization to the current sanctuary",
        partLabel: "152 years",
        value: 152,
        unit: "years",
        meant:
          "What this meant: 1970 comes 152 years after 1818. That is the stretch from the year the marker says Standing Springs Baptist Church was organized to the year it says the current sanctuary was dedicated.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2384-spring.jpg",
          "Illustration of a spring beside a small wooden meeting house. Not a historical photograph.",
        ),
        nowArt: art(
          "m2384-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a spring beside a small meeting house, for the first meeting house the marker says was constructed c. 1836. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1818",
            label: "The church is organized with ten charter members.",
            why: "The marker says Standing Springs Baptist Church was organized in 1818 as an arm of Fork Shoals Baptist Church. There were ten charter members and Rev. Nathan Berry was the first pastor.",
          },
          {
            id: "meeting",
            year: "c. 1836",
            label: "The first meeting house is built on land from James Cox.",
            why: "The marker says early meetings were held in the home of James Cox and the first meeting house was constructed c. 1836 on land donated by Mr. Cox.",
          },
          {
            id: "second",
            year: "1917",
            label: "A second sanctuary is built.",
            why: "The marker says a second sanctuary was built in 1917.",
          },
          {
            id: "expanded",
            year: "1959",
            label: "The second sanctuary is expanded.",
            why: "The marker says the second sanctuary was expanded in 1959.",
          },
          {
            id: "dedicated",
            year: "1970",
            label: "The current sanctuary is dedicated.",
            why: "The marker says the current sanctuary was dedicated in 1970.",
          },
        ],
        ["dedicated", "organized", "expanded", "meeting", "second"],
      ),
      takeaway([
        "Standing Springs Baptist Church was organized in 1818 as an arm of Fork Shoals Baptist Church. There were ten charter members and Rev. Nathan Berry was the first pastor.",
        "Early meetings were held in the home of James Cox, and the first meeting house was constructed c. 1836 on land he donated. The name comes from a nearby spring that originates underground and appears as standing water.",
        "Like many Baptist churches, the congregation included enslaved people before the Civil War. A second sanctuary was built in 1917 and expanded in 1959. The current sanctuary was dedicated in 1970.",
      ]),
    ],
  ),
];
