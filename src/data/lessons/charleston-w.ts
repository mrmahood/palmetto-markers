import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Charleston sites. Facts are from that marker only.
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

export const charlestonLessonsW: MarkerLesson[] = [
  lesson(
    "10-105",
    "A double house on Colleton Square",
    "Pinckney Mansion timeline",
    [
      cited("10-105", "Pinckney Mansion", "front and back"),
      span(
        '"71 years" is 1793 minus 1722, the years the marker prints for Eliza Lucas.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "c.1746",
        title: "Built on a waterfront lot",
        partLabel: "the house",
        art: art(
          "m10105-house.jpg",
          "Illustration of a colonial double house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "c.1746",
            x: 32,
            y: 46,
            fact: "The Pinckney Mansion was a Colonial double house built c.1746 at this site, then a large waterfront lot known as Colleton Square. It is believed to have been designed by owner Charles Pinckney (c.1699-1758), a planter and Chief Justice of Provincial S.C.",
          },
          {
            id: "eliza",
            label: "Eliza Lucas",
            x: 74,
            y: 58,
            fact: "His wife Eliza Lucas (1722-1793) lived here after helping found colonial S.C.’s indigo industry. Enslaved people and free workers, skilled and unskilled, built the house. Colonial governors leased the property 1753-69.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1861",
        title: "A temple front, then a fire",
        partLabel: "the yard",
        art: art(
          "m10105-yard.jpg",
          "Illustration of a row of outbuildings beside a house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "resident",
            label: "1746-1825",
            x: 32,
            y: 42,
            fact: "Charles Cotesworth Pinckney (1746-1825), a framer of the U.S. Constitution, was among the mansion’s residents. The house was one of the first in the U.S. with a Classical temple front façade. Among the first Palladian villas in Charleston, it helped set a new trend of planters keeping their main dwelling in town instead of at the plantation.",
          },
          {
            id: "burned",
            label: "1861",
            x: 74,
            y: 56,
            fact: "Also at the site was a graden and a long row of outbuildings, including slave quarters and stables. Pinckneys owned the house until it burned in 1861.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1722-1793",
        title: "Years the marker prints for Eliza Lucas",
        partLabel: "71 years",
        value: 71,
        unit: "years",
        meant:
          "What this meant: 1793 comes 71 years after 1722. That is the stretch the marker prints for Eliza Lucas (1722-1793).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10105-house.jpg",
          "Illustration of a colonial double house. Not a historical photograph.",
        ),
        nowArt: art(
          "m10105-today.jpg",
          "Illustration of a blank roadside marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a colonial double house, for the Pinckney Mansion the marker says was built c.1746 at Colleton Square. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "designer",
            year: "c.1699",
            label: "The earlier year the marker prints for Charles Pinckney.",
            why: "The marker says it is believed to have been designed by owner Charles Pinckney (c.1699-1758), a planter and Chief Justice of Provincial S.C.",
          },
          {
            id: "built",
            year: "c.1746",
            label: "The Pinckney Mansion is built at Colleton Square.",
            why: "The marker says the Pinckney Mansion was a Colonial double house built c.1746 at this site, then a large waterfront lot known as Colleton Square.",
          },
          {
            id: "leased",
            year: "1753",
            label: "Colonial governors lease the property.",
            why: "The marker says colonial governors leased the property 1753-69.",
          },
          {
            id: "burned",
            year: "1861",
            label: "The house burns.",
            why: "The marker says Pinckneys owned the house until it burned in 1861.",
          },
        ],
        ["burned", "built", "designer", "leased"],
      ),
      takeaway([
        "The Pinckney Mansion was a Colonial double house built c.1746 at this site, then a large waterfront lot known as Colleton Square. It is believed to have been designed by owner Charles Pinckney (c.1699-1758), a planter and Chief Justice of Provincial S.C.",
        "His wife Eliza Lucas (1722-1793) lived here after helping found colonial S.C.’s indigo industry. Enslaved people and free workers, skilled and unskilled, built the house. Colonial governors leased the property 1753-69.",
        "Charles Cotesworth Pinckney (1746-1825), a framer of the U.S. Constitution, was among the mansion’s residents. The house was one of the first in the U.S. with a Classical temple front façade. Among the first Palladian villas in Charleston, it helped set a new trend of planters keeping their main dwelling in town instead of at the plantation. Also at the site was a graden and a long row of outbuildings, including slave quarters and stables. Pinckneys owned the house until it burned in 1861.",
      ]),
    ],
  ),
  lesson(
    "10-106",
    "Memminger’s home, then a funeral home",
    "Memminger House timeline",
    [
      cited("10-106", "Memminger House", "front and back"),
      span(
        '"85 years" is 1888 minus 1803, the years the marker prints for Christopher Memminger.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1830",
        title: "A home at this site",
        partLabel: "the house",
        art: art(
          "m10106-house.jpg",
          "Illustration of an early Charleston house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lived",
            label: "1830",
            x: 32,
            y: 48,
            fact: "Christopher Memminger (1803-1888) lived in a home at this site as early as 1830. A German immigrant orphaned at age 4, Memminger was adopted by future S.C. Governor Thomas Bennett.",
          },
          {
            id: "treasury",
            label: "1861-1864",
            x: 74,
            y: 40,
            fact: "Memminger served in the S.C. legislature and championed public education before and after the Civil War. He helped draft the Confederate Constitution and was the Confederacy’s Secretary of the Treasury 1861-1864. He returned to Charleston after the war and lived here until his death.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1960",
        title: "A purpose-built funeral home",
        partLabel: "the yard",
        art: art(
          "m10106-yard.jpg",
          "Illustration of a low Colonial Revival building seen from its yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "moved",
            label: "1960",
            x: 32,
            y: 52,
            fact: "John McAlister was one of the city’s first licensed embalmers and began an undertaking business on Meeting St. in the 1880s. In 1960, McAlister Funeral Home moved to this location and replaced the Memminger House with a purpose-built funeral home designed by Charleston architect Augustus Constantine (1898-1976).",
          },
          {
            id: "razed",
            label: "2016",
            x: 74,
            y: 36,
            fact: "Its design offered a modern interpretation of the Colonial Revival style. It was razed in 2016.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1803-1888",
        title: "Years the marker prints for Christopher Memminger",
        partLabel: "85 years",
        value: 85,
        unit: "years",
        meant:
          "What this meant: 1888 comes 85 years after 1803. That is the stretch the marker prints for Christopher Memminger (1803-1888).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10106-house.jpg",
          "Illustration of an early Charleston house. Not a historical photograph.",
        ),
        nowArt: art(
          "m10106-today.jpg",
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early house, for the home the marker says Christopher Memminger lived in at this site as early as 1830. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "home",
            year: "1830",
            label: "Christopher Memminger lives in a home at this site.",
            why: "The marker says Christopher Memminger (1803-1888) lived in a home at this site as early as 1830. A German immigrant orphaned at age 4, Memminger was adopted by future S.C. Governor Thomas Bennett.",
          },
          {
            id: "treasury",
            year: "1861",
            label: "His years as Secretary of the Treasury begin.",
            why: "The marker says he helped draft the Confederate Constitution and was the Confederacy’s Secretary of the Treasury 1861-1864. He returned to Charleston after the war and lived here until his death.",
          },
          {
            id: "funeral",
            year: "1960",
            label: "McAlister Funeral Home replaces the Memminger House.",
            why: "The marker says that in 1960, McAlister Funeral Home moved to this location and replaced the Memminger House with a purpose-built funeral home designed by Charleston architect Augustus Constantine (1898-1976).",
          },
          {
            id: "razed",
            year: "2016",
            label: "The funeral home is razed.",
            why: "The marker says its design offered a modern interpretation of the Colonial Revival style. It was razed in 2016.",
          },
        ],
        ["funeral", "home", "razed", "treasury"],
      ),
      takeaway([
        "Christopher Memminger (1803-1888) lived in a home at this site as early as 1830. A German immigrant orphaned at age 4, Memminger was adopted by future S.C. Governor Thomas Bennett.",
        "Memminger served in the S.C. legislature and championed public education before and after the Civil War. He helped draft the Confederate Constitution and was the Confederacy’s Secretary of the Treasury 1861-1864. He returned to Charleston after the war and lived here until his death.",
        "John McAlister was one of the city’s first licensed embalmers and began an undertaking business on Meeting St. in the 1880s. In 1960, McAlister Funeral Home moved to this location and replaced the Memminger House with a purpose-built funeral home designed by Charleston architect Augustus Constantine (1898-1976). Its design offered a modern interpretation of the Colonial Revival style. It was razed in 2016.",
      ]),
    ],
  ),
  lesson(
    "10-107",
    "A postwar building for more than 30 agencies",
    "Federal Building timeline",
    [cited("10-107", "Federal Building", "front and back")],
    [
      {
        kind: "scene",
        id: "building",
        kicker: "1964-65",
        title: "A seven-story Modernist building",
        partLabel: "the building",
        art: art(
          "m10107-building.jpg",
          "Illustration of a seven-story modernist office building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1964-65",
            x: 32,
            y: 44,
            fact: "Built 1964-65, this was originally a federal office building that housed more than 30 agencies of the U.S. government. It was the first major federal building project completed in postwar S.C.",
          },
          {
            id: "plans",
            label: "1939",
            x: 74,
            y: 58,
            fact: "Plans to locate a federal building here began as early as 1939, but World War II delayed the effort into the 1950s. Designed by Charlestonian John Califf of Lyles, Bissett, Carlisle, and Woolfe, the seven-story Modernist building both praise and criticism upon its completion.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1972",
        title: "Renamed, then left vacant",
        partLabel: "the street",
        art: art(
          "m10107-street.jpg",
          "Illustration of a modernist building down a city street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "renamed",
            label: "1972",
            x: 32,
            y: 40,
            fact: "In 1972, Congress officially renamed the building for Lucius Mendel Rivers (1905-1970). A Berkeley County native and 29-year U.S. Congressman, Rivers secured valuable military projects for the Charleston area and helped ensure the building’s completion, later keeping an office here.",
          },
          {
            id: "hotel",
            label: "2016",
            x: 74,
            y: 54,
            fact: "Federal agencies and legislators occupied the building until 1999, after which it was threatened with demolition. It remained vacant until being reopened as a hotel in 2016.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1964-65",
        title: "Agencies the building housed",
        partLabel: "more than 30 agencies",
        value: 30,
        unit: "agencies",
        meant:
          "What this meant: the marker says this was originally a federal office building that housed more than 30 agencies of the U.S. government. “More than” stays the marker’s word.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10107-building.jpg",
          "Illustration of a seven-story modernist office building. Not a historical photograph.",
        ),
        nowArt: art(
          "m10107-today.jpg",
          "Illustration of a blank roadside marker on a downtown street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a seven-story modernist building, for the federal office building the marker says was built 1964-65. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a downtown street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "plans",
            year: "1939",
            label: "Plans to locate a federal building here begin.",
            why: "The marker says plans to locate a federal building here began as early as 1939, but World War II delayed the effort into the 1950s.",
          },
          {
            id: "built",
            year: "1964",
            label: "The federal office building is built.",
            why: "The marker says it was built 1964-65 and was originally a federal office building that housed more than 30 agencies of the U.S. government. It was the first major federal building project completed in postwar S.C.",
          },
          {
            id: "renamed",
            year: "1972",
            label: "Congress renames the building for Lucius Mendel Rivers.",
            why: "The marker says that in 1972, Congress officially renamed the building for Lucius Mendel Rivers (1905-1970). A Berkeley County native and 29-year U.S. Congressman, Rivers secured valuable military projects for the Charleston area and helped ensure the building’s completion, later keeping an office here.",
          },
          {
            id: "hotel",
            year: "2016",
            label: "The vacant building reopens as a hotel.",
            why: "The marker says federal agencies and legislators occupied the building until 1999, after which it was threatened with demolition. It remained vacant until being reopened as a hotel in 2016.",
          },
        ],
        ["hotel", "plans", "renamed", "built"],
      ),
      takeaway([
        "Built 1964-65, this was originally a federal office building that housed more than 30 agencies of the U.S. government. Plans to locate a federal building here began as early as 1939, but World War II delayed the effort into the 1950s. It was the first major federal building project completed in postwar S.C.",
        "Designed by Charlestonian John Califf of Lyles, Bissett, Carlisle, and Woolfe, the seven-story Modernist building both praise and criticism upon its completion. In 1972, Congress officially renamed the building for Lucius Mendel Rivers (1905-1970).",
        "A Berkeley County native and 29-year U.S. Congressman, Rivers secured valuable military projects for the Charleston area and helped ensure the building’s completion, later keeping an office here. Federal agencies and legislators occupied the building until 1999, after which it was threatened with demolition. It remained vacant until being reopened as a hotel in 2016.",
      ]),
    ],
  ),
  lesson(
    "10-108",
    "From a militia to a charitable society",
    "Hunter's Volunteers timeline",
    [
      cited("10-108", "Hunter's Volunteers", "front and back"),
      span(
        '"14 years" is 1891 minus 1877, the years the marker prints for the disbanding of the unit and the militia est. by 1877.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "camp",
        kicker: "By 1877",
        title: "A militia on James Island",
        partLabel: "the camp",
        art: art(
          "m10108-camp.jpg",
          "Illustration of an empty militia yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "est",
            label: "By 1877",
            x: 32,
            y: 50,
            fact: "This site once beloned to Hunter’s Volunteers, an African American militia est. on James Island by 1877. Part of the S.C. National Guard, the unit kept an enlistment of 30-40 men tasked with helping preserve civil order.",
          },
          {
            id: "disbanded",
            label: "1891",
            x: 74,
            y: 38,
            fact: "Most of them were farmers or laborers. The unit was disbanded in 1891 after trying to stop the arrest of a Black man in Charleston but was reinstated in 1892.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1899",
        title: "A lodge for the society",
        partLabel: "the yard",
        art: art(
          "m10108-yard.jpg",
          "Illustration of a two-story wooden lodge. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bought",
            label: "1899",
            x: 32,
            y: 46,
            fact: "In 1899, Hunter’s Volunteers bought this site from Sarah Grimball and Henry Grimball. Over time, the unit became more of a mutual aid society and social club than a military outfit.",
          },
          {
            id: "society",
            label: "1897",
            x: 74,
            y: 60,
            fact: "In 1897, a year after being disarmed by the state, members chartered the Hunter Volunteer Charitable Society. A two-story wooden building razed in the 1960s served as their lodge and may have originally been an armory.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1877-1891",
        title: "Years from the militia to its disbanding",
        partLabel: "14 years",
        value: 14,
        unit: "years",
        meant:
          "What this meant: 1891 comes 14 years after 1877. Those are the years the marker prints for the disbanding of the unit and the militia est. by 1877.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10108-camp.jpg",
          "Illustration of an empty militia yard. Not a historical photograph.",
        ),
        nowArt: art(
          "m10108-today.jpg",
          "Illustration of a blank roadside marker at a residential corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an empty militia yard, for Hunter’s Volunteers, which the marker says was est. on James Island by 1877. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker at a residential corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "est",
            year: "By 1877",
            label: "Hunter’s Volunteers is established on James Island.",
            why: "The marker says this site once beloned to Hunter’s Volunteers, an African American militia est. on James Island by 1877. Part of the S.C. National Guard, the unit kept an enlistment of 30-40 men tasked with helping preserve civil order. Most of them were farmers or laborers.",
          },
          {
            id: "disbanded",
            year: "1891",
            label: "The unit is disbanded.",
            why: "The marker says the unit was disbanded in 1891 after trying to stop the arrest of a Black man in Charleston but was reinstated in 1892.",
          },
          {
            id: "society",
            year: "1897",
            label: "Members charter the Hunter Volunteer Charitable Society.",
            why: "The marker says that in 1897, a year after being disarmed by the state, members chartered the Hunter Volunteer Charitable Society.",
          },
          {
            id: "bought",
            year: "1899",
            label: "Hunter’s Volunteers buys this site.",
            why: "The marker says that in 1899, Hunter’s Volunteers bought this site from Sarah Grimball and Henry Grimball. A two-story wooden building razed in the 1960s served as their lodge and may have originally been an armory.",
          },
        ],
        ["bought", "est", "society", "disbanded"],
      ),
      takeaway([
        "This site once beloned to Hunter’s Volunteers, an African American militia est. on James Island by 1877. Part of the S.C. National Guard, the unit kept an enlistment of 30-40 men tasked with helping preserve civil order. Most of them were farmers or laborers.",
        "The unit was disbanded in 1891 after trying to stop the arrest of a Black man in Charleston but was reinstated in 1892. In 1899, Hunter’s Volunteers bought this site from Sarah Grimball and Henry Grimball.",
        "Over time, the unit became more of a mutual aid society and social club than a military outfit. In 1897, a year after being disarmed by the state, members chartered the Hunter Volunteer Charitable Society. A two-story wooden building razed in the 1960s served as their lodge and may have originally been an armory.",
      ]),
    ],
  ),
];
