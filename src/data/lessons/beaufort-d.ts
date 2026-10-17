import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Fourth Beaufort pass.
 * Still no lesson: 07-02 and 07-20 are missing; 07-62 is the other plaque
 * for the Beaufort College building already covered by 07-26.
 * No invented order for a one-date plaque: 07-05, 07-06, 07-08, 07-11, 07-13.
 * 07-53 has no dated local sequence.
 */

const INTRO =
  "Move through the years on this marker. Tap the picture. Every fact is from the inscription.";

function cited(id: string, name: string, sides: "front" | "front and back"): LessonSource {
  return {
    id: "inscription",
    label: `South Carolina Historical Marker ${id}, “${name},” ${sides} inscription. South Carolina Department of Archives and History, Historical Marker Program.`,
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
    doneLine: "That’s the order on the marker.",
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

export const beaufortLessonsD: MarkerLesson[] = [
  lesson(
    "07-01",
    "The town of Beaufort",
    "Beaufort timeline",
    [
      cited("07-01", "Beaufort", "front"),
      span("“92 years” is 1803 minus 1711, the year the state incorporated the town and the year it was chartered."),
    ],
    [
      {
        kind: "scene",
        id: "plat",
        kicker: "1710",
        title: "Authorized, then chartered",
        partLabel: "the charter",
        art: art(
          "town-plat.jpg",
          "Illustration of an unlettered town plat beside a marsh. Not a historical map, and not a photograph.",
        ),
        hotspots: [
          {
            id: "auth",
            label: "December 20, 1710",
            x: 32,
            y: 52,
            fact: "The Lords Proprietors authorized the town on December 20, 1710. The marker calls Beaufort the second oldest town in South Carolina.",
          },
          {
            id: "charter",
            label: "January 17, 1711",
            x: 72,
            y: 48,
            fact: "It was chartered on January 17, 1711.",
          },
        ],
      },
      {
        kind: "scene",
        id: "wharf",
        kicker: "1803",
        title: "Laid out, then incorporated",
        partLabel: "the town",
        art: art(
          "town-wharf.jpg",
          "Illustration of a small waterfront town. Not a photograph of Beaufort.",
        ),
        hotspots: [
          {
            id: "laid",
            label: "Before February 16, 1717",
            x: 30,
            y: 48,
            fact: "The marker says the town was laid out prior to February 16, 1717. It does not give the day the survey finished.",
          },
          {
            id: "state",
            label: "December 17, 1803",
            x: 70,
            y: 42,
            fact: "The state incorporated Beaufort on December 17, 1803.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1711–1803",
        title: "Years from the charter to the state act",
        partLabel: "years",
        value: 92,
        unit: "years",
        meant: "What this meant: 1803 comes 92 years after 1711. Those are the years the marker gives for the charter and for incorporation by the state.",
      },
      order(
        [
          {
            id: "auth",
            year: "1710",
            label: "The Lords Proprietors authorize the town.",
            why: "The marker dates that act to December 20, 1710.",
          },
          {
            id: "charter",
            year: "1711",
            label: "The town is chartered.",
            why: "The marker dates the charter to January 17, 1711.",
          },
          {
            id: "laid",
            year: "1717",
            label: "It has been laid out prior to February 16.",
            why: "The marker says it was laid out before that date, not on it.",
          },
          {
            id: "state",
            year: "1803",
            label: "The state incorporates Beaufort.",
            why: "The marker dates incorporation to December 17, 1803.",
          },
        ],
        ["laid", "auth", "state", "charter"],
      ),
      takeaway([
        "The marker calls Beaufort the second oldest town in South Carolina.",
        "The Lords Proprietors authorized it on December 20, 1710. It was chartered on January 17, 1711, and laid out prior to February 16, 1717.",
        "The state incorporated the town on December 17, 1803. That is 92 years after the charter.",
      ]),
    ],
  ),
  lesson(
    "07-12",
    "Zion Chapel of Ease",
    "Zion Chapel timeline",
    [cited("07-12", "Zion Chapel of Ease and Cemetery", "front")],
    [
      {
        kind: "scene",
        id: "chapel",
        kicker: "1786",
        title: "A wooden chapel",
        partLabel: "the chapel",
        art: art(
          "zion-chapel.jpg",
          "Illustration of a wooden chapel and blank stones. Not a photograph of Zion Chapel.",
        ),
        hotspots: [
          {
            id: "parish",
            label: "May 23, 1767",
            x: 28,
            y: 58,
            fact: "It was a chapel of St. Luke’s Parish, established May 23, 1767.",
          },
          {
            id: "built",
            label: "Shortly after 1786",
            x: 62,
            y: 40,
            fact: "The wood chapel was built shortly after 1786 under Captain John Stoney and Isaac Fripp. It was consecrated in 1833.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1868",
        title: "Gone by 1868",
        partLabel: "the cemetery",
        art: art(
          "zion-yard.jpg",
          "Illustration of a cemetery after the chapel is gone. Not a photograph of the site.",
        ),
        hotspots: [
          {
            id: "families",
            label: "Who worshipped here",
            x: 36,
            y: 62,
            fact: "The marker names the Barksdale, Baynard, Chaplin, Davant, Fripp, Kirk, Mathews, Pope, Stoney, and Webb families.",
          },
          {
            id: "gone",
            label: "By 1868",
            x: 68,
            y: 48,
            fact: "By 1868 the chapel was destroyed. The marker does not give the day it burned or fell.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "Chapel, then cemetery",
        partLabel: "then and later",
        thenArt: art("zion-chapel.jpg", "Illustration of the wooden chapel. Not a photograph."),
        nowArt: art("zion-yard.jpg", "Illustration of the ground after the chapel was gone. Not a photograph."),
        thenCaption: "Illustration of a wood chapel, for the building put up shortly after 1786. Not a photograph.",
        nowCaption: "Illustration of the cemetery. The marker says that by 1868 the chapel was destroyed.",
      },
      order(
        [
          {
            id: "parish",
            year: "1767",
            label: "St. Luke’s Parish is established.",
            why: "The marker dates the parish to May 23, 1767, and calls this a chapel of that parish.",
          },
          {
            id: "built",
            year: "1786",
            label: "A wood chapel is built shortly afterward.",
            why: "The marker says it was built shortly after 1786, under Stoney and Fripp.",
          },
          {
            id: "blessed",
            year: "1833",
            label: "The chapel is consecrated.",
            why: "The marker dates the consecration to 1833.",
          },
          {
            id: "gone",
            year: "1868",
            label: "By this year the chapel is destroyed.",
            why: "The marker says it was destroyed by 1868, not that 1868 was the day it fell.",
          },
        ],
        ["gone", "parish", "blessed", "built"],
      ),
      takeaway([
        "Zion was a chapel of St. Luke’s Parish, established May 23, 1767.",
        "The wood building went up shortly after 1786, directed by Captain John Stoney and Isaac Fripp, and was consecrated in 1833.",
        "By 1868 the chapel was destroyed. The marker lists ten families who worshipped here.",
      ]),
    ],
  ),
  lesson(
    "07-17",
    "The Martinangeles",
    "Martinangele timeline",
    [
      cited("07-17", "The Martinangeles", "front"),
      span("“500” is the acreage the marker says the widow bought on Daufuskie Island."),
    ],
    [
      {
        kind: "scene",
        id: "island",
        kicker: "1762",
        title: "Five hundred acres",
        partLabel: "the island",
        art: art(
          "martin-island.jpg",
          "Illustration of a sea island of woods and marsh. Not a photograph of Daufuskie, and not a portrait.",
        ),
        hotspots: [
          {
            id: "marry",
            label: "1743",
            x: 30,
            y: 55,
            fact: "Phillip Martinangele, born in Italy, settled in St. Helena’s Parish. He married Mary Foster in 1743.",
          },
          {
            id: "land",
            label: "By 1762",
            x: 72,
            y: 46,
            fact: "He had died by 1762, when his widow bought 500 acres on Daufuskie Island.",
          },
        ],
      },
      {
        kind: "scene",
        id: "ground",
        kicker: "1781",
        title: "Probably buried here",
        partLabel: "1781",
        art: art(
          "martin-ground.jpg",
          "Illustration of a burial ground with blank stones. Not a portrait, and not a photograph.",
        ),
        hotspots: [
          {
            id: "son",
            label: "December 1781",
            x: 40,
            y: 58,
            fact: "Their son Phillip, a captain in the British Royal Militia, was killed in December 1781, in the closing days of the Revolution, by the Bloody Legion, a partisan band from Hilton Head Island.",
          },
          {
            id: "grave",
            label: "This ground",
            x: 68,
            y: 46,
            fact: "The marker says he is probably buried here with others of his family. It does not say that as a certainty.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "By 1762",
        title: "Acres his widow bought",
        partLabel: "acres",
        value: 500,
        unit: "acres",
        meant: "What this meant: the marker says that by 1762 Phillip had died and his widow bought 500 acres on Daufuskie Island.",
      },
      order(
        [
          {
            id: "marry",
            year: "1743",
            label: "Phillip marries Mary Foster.",
            why: "The marker dates the marriage to 1743, after he settled in St. Helena’s Parish.",
          },
          {
            id: "land",
            year: "1762",
            label: "By this year he has died. His widow buys 500 acres.",
            why: "The marker ties his death and her purchase to 1762.",
          },
          {
            id: "son",
            year: "1781",
            label: "Their son, a Royal Militia captain, is killed.",
            why: "The marker says the Bloody Legion killed him in December 1781.",
          },
        ],
        ["son", "marry", "land"],
      ),
      takeaway([
        "Phillip Martinangele came from Italy, settled in St. Helena’s Parish, and married Mary Foster in 1743.",
        "He had died by 1762, when his widow bought 500 acres on Daufuskie.",
        "Their son Phillip, a British Royal Militia captain, was killed in December 1781 by the Bloody Legion. The marker says he is probably buried here.",
      ]),
    ],
  ),
  lesson(
    "07-21",
    "The Female Benevolent Society",
    "Benevolent Society timeline",
    [cited("07-21", "Beaufort Female Benevolent Society", "front")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1895",
        title: "A house leased for the needy",
        partLabel: "the house",
        art: art(
          "society-house.jpg",
          "Illustration of a wooden house. Not a photograph of the Society house.",
        ),
        hotspots: [
          {
            id: "found",
            label: "1814",
            x: 32,
            y: 55,
            fact: "The Society was founded in 1814 to educate and provide relief for destitute children.",
          },
          {
            id: "built",
            label: "1895",
            x: 68,
            y: 42,
            fact: "It built this house in 1895 and leased it for many years, using the income to help the needy.",
          },
        ],
      },
      {
        kind: "scene",
        id: "rooms",
        kicker: "1910",
        title: "Library, then infirmary",
        partLabel: "the tenants",
        art: art(
          "society-rooms.jpg",
          "Illustration of blank book spines and empty cots. Not a photograph of either tenant.",
        ),
        hotspots: [
          {
            id: "library",
            label: "1910–1917",
            x: 28,
            y: 48,
            fact: "Tenants included the Clover Club, which operated a circulating library here from 1910 to 1917.",
          },
          {
            id: "sick",
            label: "1917–1925",
            x: 74,
            y: 55,
            fact: "An infirmary was a tenant from 1917 to 1925. Funds from the 1982 sale of the house still provide relief for people in need.",
          },
        ],
      },
      order(
        [
          {
            id: "found",
            year: "1814",
            label: "The Society is founded.",
            why: "The marker says it was founded that year to educate and relieve destitute children.",
          },
          {
            id: "built",
            year: "1895",
            label: "The Society builds this house and leases it.",
            why: "The marker says the rent helped the needy.",
          },
          {
            id: "library",
            year: "1910",
            label: "The Clover Club opens a circulating library here.",
            why: "The marker dates that tenant to 1910–1917. An infirmary followed, 1917–1925.",
          },
          {
            id: "sale",
            year: "1982",
            label: "The house is sold. The funds still give relief.",
            why: "The marker says the 1982 sale still provides relief for people in need.",
          },
        ],
        ["library", "found", "sale", "built"],
      ),
      takeaway([
        "The Beaufort Female Benevolent Society was founded in 1814 for destitute children.",
        "It built this house in 1895 and lived on the rent. The Clover Club’s library was here from 1910 to 1917, then an infirmary from 1917 to 1925.",
        "The house was sold in 1982. The marker says those funds still provide relief.",
      ]),
    ],
  ),
  lesson(
    "07-25",
    "St. Luke’s Church",
    "St. Luke’s timeline",
    [cited("07-25", "St. Luke’s Church", "front")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1824",
        title: "Built for an Episcopal congregation",
        partLabel: "1824",
        art: art(
          "stlukes-church.jpg",
          "Illustration of a Georgian and Greek Revival church. Not a photograph of St. Luke’s.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1824",
            x: 55,
            y: 42,
            fact: "This sanctuary was built in 1824 as St. Luke’s Episcopal Church. It housed an active Episcopal congregation until just before the Civil War.",
          },
          {
            id: "style",
            label: "The style",
            x: 28,
            y: 62,
            fact: "The marker says it is listed in the National Register for its architecture, a blend of the Georgian and Greek Revival styles. The marker does not give the year of that listing.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1875",
        title: "Sold to the Methodist trustees",
        partLabel: "1875",
        art: art(
          "stlukes-yard.jpg",
          "Illustration of the same church from the yard. Not a photograph.",
        ),
        hotspots: [
          {
            id: "sold",
            label: "1875",
            x: 58,
            y: 40,
            fact: "It was sold to the trustees of St. Luke’s Methodist Church in 1875 and has served that congregation since.",
          },
        ],
      },
      order(
        [
          {
            id: "built",
            year: "1824",
            label: "The sanctuary is built for St. Luke’s Episcopal Church.",
            why: "The marker dates the building to 1824.",
          },
          {
            id: "war",
            year: "Before the war",
            label: "The Episcopal congregation is active until just before the Civil War.",
            why: "The marker gives no year for that closing.",
          },
          {
            id: "sold",
            year: "1875",
            label: "Trustees of St. Luke’s Methodist Church buy it.",
            why: "The marker says it has served that congregation since 1875.",
          },
        ],
        ["sold", "built", "war"],
      ),
      takeaway([
        "The sanctuary was built in 1824 as St. Luke’s Episcopal Church and stayed Episcopal until just before the Civil War.",
        "In 1875 it was sold to the trustees of St. Luke’s Methodist Church, and it has served that congregation since.",
        "The National Register listing is for the blend of Georgian and Greek Revival. The marker does not date that listing.",
      ]),
    ],
  ),
  lesson(
    "07-30",
    "Secession House",
    "Maxcy-Rhett timeline",
    [cited("07-30", "Maxcy-Rhett House", "front and back")],
    [
      {
        kind: "scene",
        id: "early",
        kicker: "About 1810",
        title: "Built for Milton Maxcy",
        partLabel: "the first house",
        art: art(
          "maxcy-early.jpg",
          "Illustration of an early Lowcountry house. Not a photograph of the Maxcy house, and not a portrait.",
        ),
        hotspots: [
          {
            id: "arrive",
            label: "1804",
            x: 30,
            y: 58,
            fact: "Milton Maxcy came here from Massachusetts in 1804. The marker gives his years as 1782–1817 and does not count them as a lifespan lesson.",
          },
          {
            id: "built",
            label: "Circa 1810",
            x: 62,
            y: 42,
            fact: "The house was built circa 1810 for him. He and his brother Virgil, who founded a school for young men in Beaufort, later taught at Beaufort College.",
          },
        ],
      },
      {
        kind: "scene",
        id: "portico",
        kicker: "1850s",
        title: "A Greek Revival portico",
        partLabel: "the remodel",
        art: art(
          "maxcy-portico.jpg",
          "Illustration of a house with a two-story portico. Not a photograph of Secession House.",
        ),
        hotspots: [
          {
            id: "buy",
            label: "The 1850s",
            x: 48,
            y: 40,
            fact: "In the 1850s Edmund Rhett bought the house and extensively remodeled it in the Greek Revival style, with an elaborate two-story portico. The marker calls him a lawyer, planter, state representative, and state senator, and gives his years as 1808–1863.",
          },
          {
            id: "meet",
            label: "Secession House",
            x: 74,
            y: 58,
            fact: "Long known as “Secession House,” it was the scene of many informal discussions and formal meetings in the 1850s by the Rhetts and their allies advocating secession and Southern independence.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "Before the portico, and after",
        partLabel: "then and later",
        thenArt: art("maxcy-early.jpg", "Illustration of the earlier house. Not a photograph."),
        nowArt: art("maxcy-portico.jpg", "Illustration of the Greek Revival portico. Not a photograph."),
        thenCaption: "Illustration of a house for the one built circa 1810. Not a photograph.",
        nowCaption: "Illustration of a two-story portico, for the Greek Revival remodel the marker dates to the 1850s.",
      },
      order(
        [
          {
            id: "arrive",
            year: "1804",
            label: "Milton Maxcy comes from Massachusetts.",
            why: "The marker dates his arrival to 1804.",
          },
          {
            id: "built",
            year: "c. 1810",
            label: "The house is built for him.",
            why: "The marker says circa 1810, not an exact year.",
          },
          {
            id: "rights",
            year: "1830s",
            label: "The Rhetts argue for state rights and Southern nationalism.",
            why: "The marker dates that stand from the 1830s to the Civil War.",
          },
          {
            id: "buy",
            year: "1850s",
            label: "Edmund Rhett buys the house, remodels it, and meets allies here.",
            why: "The marker places the purchase, the portico, and the secession meetings in the 1850s.",
          },
        ],
        ["buy", "arrive", "rights", "built"],
      ),
      takeaway([
        "The house was built circa 1810 for Milton Maxcy, who had come from Massachusetts in 1804. He and his brother Virgil later taught at Beaufort College.",
        "Edmund Rhett bought it in the 1850s and remodeled it with an elaborate two-story Greek Revival portico.",
        "With his brother Robert Barnwell Rhett, he used the house for meetings that argued for secession. It has long been called “Secession House.”",
      ]),
    ],
  ),
  lesson(
    "07-31",
    "Rose Hill",
    "Rose Hill timeline",
    [
      cited("07-31", "Rose Hill", "front and back"),
      span("“11 years” is 2007 minus 1996, the years the marker gives for the White family’s restoration."),
    ],
    [
      {
        kind: "scene",
        id: "shell",
        kicker: "Before the war",
        title: "A Gothic house, unfinished",
        partLabel: "the shell",
        art: art(
          "rose-shell.jpg",
          "Illustration of an unfinished Gothic house. Not a photograph of Rose Hill.",
        ),
        hotspots: [
          {
            id: "sale",
            label: "1828",
            x: 32,
            y: 55,
            fact: "This portion of Sir John Colleton’s barony was sold by his descendants to Dr. James B. Kirk in 1828. The marker calls Kirk one of the wealthiest cotton planters in antebellum St. Luke’s Parish.",
          },
          {
            id: "gift",
            label: "The 1830s",
            x: 68,
            y: 42,
            fact: "He gave Rose Hill to his daughter Caroline in the 1830s when she married her cousin Dr. John W. Kirk, also a physician and cotton planter. The Kirks began this Gothic Revival house shortly before the Civil War.",
          },
        ],
      },
      {
        kind: "scene",
        id: "done",
        kicker: "1996",
        title: "Finished, burned, restored",
        partLabel: "the restoration",
        art: art(
          "rose-restored.jpg",
          "Illustration of a restored Gothic house. Not a photograph of Rose Hill.",
        ),
        hotspots: [
          {
            id: "sturgeon",
            label: "1946",
            x: 48,
            y: 40,
            fact: "The house stayed unfinished for many years until John Sturgeon III bought it in 1946. Architect Willis Irvin completed much of the interior in 1946–49.",
          },
          {
            id: "fire",
            label: "1983, 1987, 1996",
            x: 74,
            y: 62,
            fact: "It was listed in the National Register in 1983, damaged by a fire in 1987, and restored by the White family in 1996–2007.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1996–2007",
        title: "Years the marker gives the restoration",
        partLabel: "years",
        value: 11,
        unit: "years",
        meant: "What this meant: 2007 comes 11 years after 1996. Those are the years the marker prints for the White family’s restoration, not a count of how long the first house stood.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "Unfinished, then restored",
        partLabel: "then and later",
        thenArt: art("rose-shell.jpg", "Illustration of the unfinished house. Not a photograph."),
        nowArt: art("rose-restored.jpg", "Illustration of the restored house. Not a photograph."),
        thenCaption: "Illustration of an unfinished Gothic house, for the one begun shortly before the Civil War.",
        nowCaption: "Illustration of a restored house, for the work the marker dates to 1996–2007. Not a photograph.",
      },
      order(
        [
          {
            id: "sale",
            year: "1828",
            label: "Dr. James B. Kirk buys this part of the barony.",
            why: "The marker dates that sale to 1828.",
          },
          {
            id: "start",
            year: "Before the war",
            label: "The Kirks begin a Gothic Revival house.",
            why: "The marker says shortly before the Civil War, and that it stayed unfinished for many years.",
          },
          {
            id: "sturgeon",
            year: "1946",
            label: "John Sturgeon III buys it. Irvin works on the interior.",
            why: "The marker dates the purchase to 1946 and the interior work to 1946–49.",
          },
          {
            id: "list",
            year: "1983",
            label: "It is listed, then damaged by fire, then restored.",
            why: "The marker says listed in 1983, a fire in 1987, and a White family restoration in 1996–2007.",
          },
        ],
        ["sturgeon", "sale", "list", "start"],
      ),
      takeaway([
        "Colleton descendants sold this part of the barony to Dr. James B. Kirk in 1828. He gave Rose Hill to his daughter Caroline in the 1830s.",
        "The Gothic Revival house, begun shortly before the Civil War, stayed unfinished until John Sturgeon III bought it in 1946. Willis Irvin did much of the interior in 1946–49.",
        "The National Register listing is 1983. A fire damaged it in 1987. The White family restored it in 1996–2007.",
      ]),
    ],
  ),
  lesson(
    "07-33",
    "St. James Baptist Church",
    "St. James timeline",
    [cited("07-33", "St. James Baptist Church", "front")],
    [
      {
        kind: "scene",
        id: "village",
        kicker: "1862",
        title: "Left from Mitchelville",
        partLabel: "Mitchelville",
        art: art(
          "mitchelville-lane.jpg",
          "Illustration of a freedmen’s village. Not a photograph of Mitchelville.",
        ),
        hotspots: [
          {
            id: "town",
            label: "1862",
            x: 34,
            y: 52,
            fact: "Mitchelville was a freedmen’s village the United States Army established here in 1862. This church is one of the oldest surviving institutions remaining from that town.",
          },
          {
            id: "found",
            label: "1886",
            x: 70,
            y: 46,
            fact: "Former members of First African Baptist Church founded this church in 1886.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brick",
        kicker: "1972",
        title: "The third sanctuary",
        partLabel: "the sanctuary",
        art: art(
          "stjames-stucco.jpg",
          "Illustration of a stucco-covered brick church. Not a measured drawing of St. James.",
        ),
        hotspots: [
          {
            id: "third",
            label: "1972",
            x: 55,
            y: 42,
            fact: "The present brick sanctuary, covered in stucco, is the third to serve this congregation. It was built in 1972 and renovated in 2005. The marker does not describe the first two buildings.",
          },
        ],
      },
      order(
        [
          {
            id: "town",
            year: "1862",
            label: "The Army establishes Mitchelville.",
            why: "The marker dates the freedmen’s village to 1862.",
          },
          {
            id: "found",
            year: "1886",
            label: "Former members of First African Baptist found this church.",
            why: "The marker dates the founding to 1886.",
          },
          {
            id: "third",
            year: "1972",
            label: "The third sanctuary, brick covered in stucco, is built.",
            why: "The marker says this is the third building and dates it to 1972.",
          },
          {
            id: "fix",
            year: "2005",
            label: "That sanctuary is renovated.",
            why: "The marker dates the renovation to 2005.",
          },
        ],
        ["third", "town", "fix", "found"],
      ),
      takeaway([
        "St. James was founded in 1886 by former members of First African Baptist Church.",
        "It is one of the oldest surviving institutions from Mitchelville, the freedmen’s village the U.S. Army established here in 1862.",
        "The present sanctuary is the third. It is brick covered in stucco, built in 1972 and renovated in 2005.",
      ]),
    ],
  ),
  lesson(
    "07-35",
    "The William Simmons House",
    "Simmons House timeline",
    [cited("07-35", "William Simmons House", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1930",
        title: "A Sea Island house",
        partLabel: "the house",
        art: art(
          "simmons-house.jpg",
          "Illustration of a small Sea Island farmhouse. Not a photograph, and not a portrait.",
        ),
        hotspots: [
          {
            id: "land",
            label: "After 1865",
            x: 30,
            y: 58,
            fact: "William Simmons, born a slave, bought the land after 1865. He had served in the U.S. Army, enlisting in the 21st U.S. Colored Infantry as Ira Sherman. The marker gives his years as about 1835–1922.",
          },
          {
            id: "built",
            label: "1930",
            x: 64,
            y: 44,
            fact: "His granddaughter Georgianna Jones Bryan built this house in 1930 for her brother, William “Duey” Simmons. The marker says the construction is typical of Sea Island houses from the end of the Civil War to the mid-20th century.",
          },
        ],
      },
      {
        kind: "scene",
        id: "kept",
        kicker: "2010",
        title: "Kept as a museum",
        partLabel: "the museum",
        art: art(
          "simmons-kept.jpg",
          "Illustration of the same farmhouse, kept. Not a photograph of the Gullah Museum.",
        ),
        hotspots: [
          {
            id: "bridge",
            label: "1956",
            x: 32,
            y: 55,
            fact: "The marker says the house illustrates everyday life and the persistence of Gullah culture in an African-American farm community until after a bridge was built from the mainland in 1956.",
          },
          {
            id: "museum",
            label: "2010–11",
            x: 68,
            y: 42,
            fact: "It was renovated in 2010–11 as the Gullah Museum of Hilton Head Island.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "Farmhouse, then museum",
        partLabel: "then and later",
        thenArt: art("simmons-house.jpg", "Illustration of the 1930 house. Not a photograph."),
        nowArt: art("simmons-kept.jpg", "Illustration of the house kept as a museum. Not a photograph."),
        thenCaption: "Illustration of a Sea Island farmhouse, for the house built in 1930. Not a photograph.",
        nowCaption: "Illustration of that house kept. The marker says it was renovated in 2010–11 as the Gullah Museum.",
      },
      order(
        [
          {
            id: "land",
            year: "After 1865",
            label: "William Simmons buys the land.",
            why: "The marker says after 1865. He had enlisted as Ira Sherman in the 21st U.S. Colored Infantry.",
          },
          {
            id: "built",
            year: "1930",
            label: "Georgianna Jones Bryan builds this house for her brother.",
            why: "The marker dates the house to 1930.",
          },
          {
            id: "bridge",
            year: "1956",
            label: "A bridge from the mainland is built.",
            why: "The marker uses 1956 as the date after which it describes the community.",
          },
          {
            id: "museum",
            year: "2010",
            label: "The house is renovated as the Gullah Museum.",
            why: "The marker dates that work to 2010–11.",
          },
        ],
        ["bridge", "land", "museum", "built"],
      ),
      takeaway([
        "William Simmons, born a slave, served in the U.S. Army as Ira Sherman of the 21st U.S. Colored Infantry and bought this land after 1865.",
        "His granddaughter Georgianna Jones Bryan built the house in 1930 for her brother, William “Duey” Simmons.",
        "The marker ties Gullah life here to the years before a 1956 bridge. The house was renovated in 2010–11 as the Gullah Museum of Hilton Head Island.",
      ]),
    ],
  ),
  lesson(
    "07-36",
    "First Presbyterian Church",
    "First Presbyterian timeline",
    [
      cited("07-36", "First Presbyterian Church", "front and back"),
      span("“16” is the number of charter members the marker prints for 1912."),
    ],
    [
      {
        kind: "scene",
        id: "frame",
        kicker: "1928",
        title: "A church they built themselves",
        partLabel: "the church",
        art: art(
          "presby-frame.jpg",
          "Illustration of a clapboard Colonial Revival church. Not a photograph of First Presbyterian.",
        ),
        hotspots: [
          {
            id: "tries",
            label: "Earlier tries",
            x: 28,
            y: 58,
            fact: "Attempts to establish a Presbyterian church in Beaufort, in the 1740s and the 1880s, were unsuccessful.",
          },
          {
            id: "built",
            label: "1928–29",
            x: 62,
            y: 40,
            fact: "This Colonial Revival church, built in 1928–29, was designed by architect James H. Sams. In 1921, when the congregation acquired the lot, Rev. A.P. Toomer put up a sign with the Old Testament verse “the people had a mind to work.”",
          },
        ],
      },
      {
        kind: "scene",
        id: "arches",
        kicker: "1947",
        title: "Arches at the chancel",
        partLabel: "the chancel",
        art: art(
          "presby-arches.jpg",
          "Illustration of a wooden chancel with arches. Not a photograph of the interior.",
        ),
        hotspots: [
          {
            id: "inside",
            label: "1929–1949",
            x: 48,
            y: 48,
            fact: "Members finished the interior. Rev. F.B. Mayes, minister 1929–1949, was chief carpenter, and Elder J.W. Logan was in charge. The marker also notes simple clapboard siding and clear arched windows.",
          },
          {
            id: "later",
            label: "1947 and 1988",
            x: 72,
            y: 36,
            fact: "The 1947–48 chancel arches were built by the craftsmen who built the U.S. Naval Hospital. In 1988 First Presbyterian gave funds and members to help found Sea Island Presbyterian Church.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1912",
        title: "Charter members",
        partLabel: "members",
        value: 16,
        unit: "charter members",
        meant: "What this meant: the marker says the first permanent congregation was founded in 1912 by 16 charter members, after failed attempts in the 1740s and the 1880s.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Outside and inside",
        title: "Clapboard, then the chancel",
        partLabel: "outside and inside",
        thenArt: art("presby-frame.jpg", "Illustration of the clapboard church. Not a photograph."),
        nowArt: art("presby-arches.jpg", "Illustration of the chancel arches. Not a photograph."),
        thenCaption: "Illustration of the Colonial Revival church built in 1928–29. Not a photograph.",
        nowCaption: "Illustration of chancel arches, for the ones the marker dates to 1947–48. Not a photograph of the room.",
      },
      order(
        [
          {
            id: "found",
            year: "1912",
            label: "Sixteen charter members found the first permanent congregation.",
            why: "The marker says attempts in the 1740s and 1880s failed.",
          },
          {
            id: "lot",
            year: "1921",
            label: "The congregation acquires this lot.",
            why: "The marker says Rev. A.P. Toomer then posted the verse “the people had a mind to work.”",
          },
          {
            id: "built",
            year: "1928",
            label: "James H. Sams’s church is built.",
            why: "The marker dates the Colonial Revival building to 1928–29.",
          },
          {
            id: "arches",
            year: "1947",
            label: "Craftsmen from the Naval Hospital build the chancel arches.",
            why: "The marker dates those arches to 1947–48. In 1988 the church helped found Sea Island Presbyterian.",
          },
        ],
        ["built", "found", "arches", "lot"],
      ),
      takeaway([
        "Presbyterian starts in Beaufort failed in the 1740s and the 1880s. The first permanent congregation was founded in 1912 by 16 charter members.",
        "They acquired this lot in 1921 and built a Colonial Revival church in 1928–29, designed by James H. Sams. Members finished the interior.",
        "The chancel arches of 1947–48 were built by craftsmen who built the U.S. Naval Hospital. In 1988 the church helped found Sea Island Presbyterian.",
      ]),
    ],
  ),
  lesson(
    "07-37",
    "First African Baptist, Hilton Head",
    "Hilton Head church timeline",
    [
      cited("07-37", "First African Baptist Church", "front and back"),
      span("“5” is the number of Beaufort County churches the marker says this one mothered. “About 120” is not an exact count."),
    ],
    [
      {
        kind: "scene",
        id: "village",
        kicker: "1862",
        title: "Organized in Mitchelville",
        partLabel: "1862",
        art: art(
          "mitchelville-lane.jpg",
          "Illustration of a freedmen’s village. Not a photograph of Mitchelville.",
        ),
        hotspots: [
          {
            id: "start",
            label: "August 1862",
            x: 36,
            y: 50,
            fact: "The church was organized in August 1862 in Mitchelville, a freedmen’s village the United States Army established on Hilton Head. The congregation numbered about 120 members. About, not an exact count.",
          },
          {
            id: "pastor",
            label: "The first pastor",
            x: 70,
            y: 46,
            fact: "Rev. Abraham Murchinson, its first pastor, was a former slave. The marker does not give a portrait.",
          },
        ],
      },
      {
        kind: "scene",
        id: "later",
        kicker: "1966",
        title: "A new building, the old name",
        partLabel: "1966",
        art: art(
          "fabh-church.jpg",
          "Illustration of a plain church. Not a plan of the 1966 building.",
        ),
        hotspots: [
          {
            id: "names",
            label: "After the war",
            x: 32,
            y: 58,
            fact: "After the Civil War the church moved to the Chaplin community and was renamed Goodwill Baptist Church. It moved to this site by 1898 and was renamed Cross Roads Baptist Church, then took its original name again.",
          },
          {
            id: "now",
            label: "1966",
            x: 64,
            y: 40,
            fact: "It is the mother church of five Beaufort County churches. The present building was built in 1966. The marker does not describe that building’s shape, so this picture is only an illustration.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "A mother church",
        title: "Beaufort County churches from this one",
        partLabel: "churches",
        value: 5,
        unit: "churches",
        meant: "What this meant: the marker calls it the mother church of five Beaufort County churches. Separately, it says the congregation numbered about 120 when organized in August 1862. That figure is not exact.",
      },
      order(
        [
          {
            id: "start",
            year: "1862",
            label: "The church is organized in Mitchelville.",
            why: "The marker says August 1862, with about 120 members, under Rev. Abraham Murchinson.",
          },
          {
            id: "move",
            year: "After the war",
            label: "It moves to Chaplin and is renamed Goodwill.",
            why: "The marker does not print a year for that move.",
          },
          {
            id: "cross",
            year: "1898",
            label: "By this year it is on this site, renamed Cross Roads.",
            why: "The marker says it later took its original name again.",
          },
          {
            id: "build",
            year: "1966",
            label: "The present building is built.",
            why: "The marker dates that building to 1966 and calls this the mother church of five.",
          },
        ],
        ["cross", "start", "build", "move"],
      ),
      takeaway([
        "The church was organized in August 1862 in Mitchelville. It had about 120 members. Its first pastor, Rev. Abraham Murchinson, was a former slave.",
        "It was later Goodwill Baptist in the Chaplin community, then Cross Roads Baptist on this site by 1898, then First African Baptist again.",
        "It is the mother church of five Beaufort County churches. The present building dates to 1966.",
      ]),
    ],
  ),
  lesson(
    "07-44",
    "Beth Israel",
    "Beth Israel timeline",
    [
      cited("07-44", "Beth Israel Synagogue", "front and back"),
      span("“44 years” is 1949 minus 1905, the year the congregation became Conservative and the year it was founded and chartered."),
    ],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "1905",
        title: "Before the synagogue",
        partLabel: "before the building",
        art: art(
          "beth-hall.jpg",
          "Illustration of a plain town hall. Not a photograph of the Masonic Hall.",
        ),
        hotspots: [
          {
            id: "older",
            label: "Before the Revolution",
            x: 30,
            y: 55,
            fact: "Beaufort’s Jewish community dates before the American Revolution, but grew most rapidly from the 1880s to the 1930s as more families arrived from Eastern Europe.",
          },
          {
            id: "charter",
            label: "1905",
            x: 68,
            y: 42,
            fact: "Beth Israel (House of Israel) Congregation was founded and chartered in 1905. Services were held in private homes and later in the Masonic Hall on Bay Street, with some ceremonial functions at the Beaufort Arsenal on Craven Street.",
          },
        ],
      },
      {
        kind: "scene",
        id: "frame",
        kicker: "1908",
        title: "A frame synagogue",
        partLabel: "the building",
        art: art(
          "beth-frame.jpg",
          "Illustration of a frame building with an empty round window. Not a measured drawing of Beth Israel.",
        ),
        hotspots: [
          {
            id: "open",
            label: "1908",
            x: 52,
            y: 40,
            fact: "Members built this frame synagogue and dedicated it in 1908. Rabbis J.J. Simonhoff of Charleston and George Solomon of Savannah conducted the ceremonies.",
          },
          {
            id: "yard",
            label: "1912 and 1949",
            x: 24,
            y: 64,
            fact: "In 1910 the congregation bought a tract on Bladen Street. The cemetery was established in 1912 and is still in use. Founded as Orthodox, Beth Israel became Conservative in 1949.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1905–1949",
        title: "Years from the charter to the change",
        partLabel: "years",
        value: 44,
        unit: "years",
        meant: "What this meant: 1949 comes 44 years after 1905. Those are the years the marker gives for the charter and for becoming a Conservative congregation.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and later",
        title: "A hall, then a synagogue",
        partLabel: "then and later",
        thenArt: art("beth-hall.jpg", "Illustration of a hall. Not a photograph."),
        nowArt: art("beth-frame.jpg", "Illustration of a frame synagogue. Not a photograph."),
        thenCaption: "Illustration of a plain hall, for worship the marker places in homes and then the Masonic Hall. Not a photograph.",
        nowCaption: "Illustration of a frame building, for the synagogue members dedicated in 1908. Not a measured drawing.",
      },
      order(
        [
          {
            id: "charter",
            year: "1905",
            label: "Beth Israel is founded and chartered.",
            why: "The marker says services had been in homes and later in the Masonic Hall.",
          },
          {
            id: "open",
            year: "1908",
            label: "Members dedicate the frame synagogue.",
            why: "The marker names Rabbis Simonhoff and Solomon at that dedication.",
          },
          {
            id: "cemetery",
            year: "1912",
            label: "The Bladen Street cemetery is established.",
            why: "The marker says the tract was bought in 1910 and the cemetery opened in 1912.",
          },
          {
            id: "change",
            year: "1949",
            label: "The Orthodox congregation becomes Conservative.",
            why: "The marker dates that change to 1949.",
          },
        ],
        ["cemetery", "charter", "change", "open"],
      ),
      takeaway([
        "Beth Israel was founded and chartered in 1905. Beaufort’s Jewish community is older than the Revolution and grew fastest from the 1880s to the 1930s.",
        "Members built a frame synagogue and dedicated it in 1908, with Rabbis J.J. Simonhoff and George Solomon.",
        "The Bladen Street cemetery opened in 1912 and is still in use. An Orthodox congregation at its founding, Beth Israel became Conservative in 1949.",
      ]),
    ],
  ),
];
