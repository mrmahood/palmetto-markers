import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Last York County towns and rural plaques.
 * Facts are from that marker only. A year-span is only the difference
 * of two years the marker prints. */

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

export const yorkLessonsH: MarkerLesson[] = [
  lesson(
    "46-78",
    "A horse farm on old cotton fields",
    "Clover Springs Farm timeline",
    [cited("46-78", "Clover Springs Farm", "front and back")],
    [
      {
        kind: "scene",
        id: "track",
        kicker: "1942",
        title: "Three hundred eighty acres",
        partLabel: "the farm",
        art: art("cloverfarm-track.jpg", "Illustration of a half-mile training track and pastures. Not a historical photograph."),
        hotspots: [
          {
            id: "open",
            label: "1942",
            x: 32,
            y: 52,
            fact: "In 1942 Cary C. Boshamer (1895-1973), a local textile entrepreneur, opened Clover Springs Farm here. It had been cotton fields and forest. The 380-acre farm raised and trained thoroughbreds and had a half-mile track, pastures, and stables. Among its horses were Carolina Queen, King Clover, and Our Joy.",
          },
        ],
      },
      {
        kind: "scene",
        id: "stable",
        kicker: "1951",
        title: "Ned Gaines",
        partLabel: "the trainer",
        art: art("cloverfarm-stable.jpg", "Illustration of stables, a handler seen only from behind. Not a historical photograph."),
        hotspots: [
          {
            id: "gaines",
            label: "The trainer",
            x: 36,
            y: 50,
            fact: "The lead trainer was Edison \"Ned\" Gaines (1897-1964), a native of Virginia. He led a team of handlers and was one of the most successful African American trainers of the mid-twentieth century. He entered a horse in the 1951 Kentucky Derby, and the marker says he was the last Black trainer to do so until 1989. One obituary called him a horseman's horseman. The farm closed in the early 1970s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1942",
        title: "Acres in the farm",
        partLabel: "380 acres",
        value: 380,
        unit: "acres",
        meant: "What this meant: the marker says Clover Springs Farm covered 380 acres, with a half-mile track, pastures, and stables.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("cloverfarm-track.jpg", "Illustration of the training farm. Not a historical photograph."),
        nowArt: art("cloverfarm-today.jpg", "Illustration of a marker on open land. Not a photograph of the site today."),
        thenCaption: "Illustration of the farm the marker says opened in 1942 on old cotton fields. Not a historical photograph.",
        nowCaption: "Illustration of a marker. The marker says the farm closed in the early 1970s. Not a photograph.",
      },
      order(
        [
          { id: "open", year: "1942", label: "Clover Springs Farm opens.", why: "The marker dates the opening to 1942." },
          { id: "derby", year: "1951", label: "Ned Gaines enters a horse in the Kentucky Derby.", why: "The marker dates that entry to 1951." },
          { id: "close", year: "Early 1970s", label: "The farm closes.", why: "The marker says the farm closed in the early 1970s." },
        ],
        ["close", "open", "derby"],
      ),
      takeaway([
        "Cary C. Boshamer opened Clover Springs Farm in 1942 on 380 acres that had been cotton fields and forest.",
        "It trained thoroughbreds, including Carolina Queen, King Clover, and Our Joy, on a half-mile track.",
        "Ned Gaines, the lead trainer, entered a horse in the 1951 Kentucky Derby. The farm closed in the early 1970s.",
      ]),
    ],
  ),
  lesson(
    "46-18",
    "Half a mile from the depot",
    "Town of Clover timeline",
    [cited("46-18", "Town of Clover", "front")],
    [
      {
        kind: "scene",
        id: "depot",
        kicker: "1874",
        title: "A post office, then a railroad",
        partLabel: "the depot",
        art: art("clover-depot.jpg", "Illustration of a small railroad depot. Not a historical photograph."),
        hotspots: [
          {
            id: "po",
            label: "1874",
            x: 32,
            y: 50,
            fact: "The Clover post office was established in 1874, with Zimri Carroll as postmaster. Six years later the Chester and Lenoir Railroad finished its line here.",
          },
          {
            id: "town",
            label: "1887",
            x: 74,
            y: 48,
            fact: "In 1887 the General Assembly chartered the town. The limits ran half a mile in every direction from the railroad depot. The first textile mill, organized by Capt. W. Beatty Smith, was chartered in 1890.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("clover-depot.jpg", "Illustration of the depot. Not a historical photograph."),
        nowArt: art("clover-today.jpg", "Illustration of a marker in a town. Not a photograph of the site today."),
        thenCaption: "Illustration of a depot, for the railroad the marker says arrived six years after 1874. Not a historical photograph.",
        nowCaption: "Illustration of a marker. The marker says the 1887 town limits ran half a mile from the depot. Not a photograph.",
      },
      order(
        [
          { id: "po", year: "1874", label: "The post office opens, with Zimri Carroll as postmaster.", why: "The marker dates the post office to 1874." },
          { id: "rail", year: "Six years later", label: "The Chester and Lenoir Railroad is finished.", why: "The marker says the railroad was completed six years after the post office." },
          { id: "town", year: "1887", label: "The town is chartered.", why: "The marker dates the charter to 1887." },
          { id: "mill", year: "1890", label: "The first textile mill is chartered.", why: "The marker dates that mill charter to 1890." },
        ],
        ["mill", "po", "town", "rail"],
      ),
      takeaway([
        "Clover's post office opened in 1874. Zimri Carroll was postmaster.",
        "Six years later the Chester and Lenoir Railroad finished its line here. The town was chartered in 1887, half a mile out from the depot.",
        "Capt. W. Beatty Smith organized the first textile mill, chartered in 1890.",
      ]),
    ],
  ),
  lesson(
    "46-56",
    "A church and a graveyard apart",
    "Allison Creek timeline",
    [cited("46-56", "Allison Creek Presbyterian Church", "front and back")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1854",
        title: "Founded from two older churches",
        partLabel: "the church",
        art: art("allison-church.jpg", "Illustration of a country church. Not a historical photograph."),
        hotspots: [
          {
            id: "found",
            label: "1854",
            x: 34,
            y: 48,
            fact: "Residents of the Clay Hill community on Allison Creek founded this church in 1854. They had belonged to Bethel, organized in 1769, and Ebenezer, organized about 1785. They built this church soon afterward on land given by J. D. Currence. The Rev. J. R. Baird, the first pastor, served until 1866.",
          },
        ],
      },
      {
        kind: "scene",
        id: "stones",
        kicker: "1850s",
        title: "Fourteen engraved stones",
        partLabel: "the graveyard",
        art: art("allison-stones.jpg", "Illustration of a graveyard of field stones, a few carved markers. Not a historical photograph."),
        hotspots: [
          {
            id: "yard",
            label: "The graveyard",
            x: 32,
            y: 55,
            fact: "A graveyard just east of the church cemetery began in the 1850s for both enslaved and free Black members. It was used until about 1896. It holds about 300 graves: 14 with engraved stones, and the rest marked by field stones or unmarked.",
          },
          {
            id: "leave",
            label: "After 1865",
            x: 74,
            y: 46,
            fact: "After 1865, Black members of Allison Creek left to form Union Baptist in 1892, Liberty Hill A.M.E. Zion in 1896, and New Home A.M.E. Zion in 1897.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The graveyard",
        title: "Graves with engraved stones",
        partLabel: "14 stones",
        value: 14,
        unit: "engraved stones",
        meant: "What this meant: the marker says the graveyard holds about 300 graves, 14 of them with engraved stones. The rest are field stones or unmarked. \"About 300\" stays the marker's \"about.\"",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("allison-church.jpg", "Illustration of the 1854 church. Not a historical photograph."),
        nowArt: art("allison-today.jpg", "Illustration of a church, a graveyard, and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of the church the marker says was built soon after 1854. Not a historical photograph.",
        nowCaption: "Illustration of a church and a graveyard. Not a photograph of the site today.",
      },
      order(
        [
          { id: "found", year: "1854", label: "Allison Creek Presbyterian Church is founded.", why: "The marker dates the founding to 1854." },
          { id: "baird", year: "1866", label: "The first pastor's service ends.", why: "The marker says the Rev. J. R. Baird served until 1866." },
          { id: "union", year: "1892", label: "Former members form Union Baptist.", why: "The marker dates Union Baptist to 1892." },
          { id: "newhome", year: "1897", label: "Former members form New Home A.M.E. Zion.", why: "The marker dates New Home to 1897. Liberty Hill A.M.E. Zion was formed in 1896." },
        ],
        ["newhome", "found", "union", "baird"],
      ),
      takeaway([
        "Allison Creek was founded in 1854 by Clay Hill members of Bethel and Ebenezer, on land given by J. D. Currence.",
        "A graveyard just east, begun in the 1850s for enslaved and free Black members, holds about 300 graves. Fourteen have engraved stones.",
        "After 1865 those members formed Union Baptist, Liberty Hill A.M.E. Zion, and New Home A.M.E. Zion.",
      ]),
    ],
  ),
  lesson(
    "46-63",
    "A battle at Stallings' plantation",
    "Stallings' Plantation timeline",
    [cited("46-63", "Battle of Stallings' Plantation", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1768",
        title: "Four hundred seventy acres",
        partLabel: "the plantation",
        art: art("stallings-house.jpg", "Illustration of a colonial farmhouse by a creek. Not a historical photograph."),
        hotspots: [
          {
            id: "land",
            label: "1768",
            x: 34,
            y: 50,
            fact: "In 1768 John Stallings bought 470 acres on Millican's Branch of Fishing Creek. During the Revolution he stayed loyal to the British. People nearby called him Stallions. His wife, Sarah Love Stallings, was a Patriot. The marker says such family divisions were common.",
          },
        ],
      },
      {
        kind: "scene",
        id: "road",
        kicker: "1780",
        title: "Fifty against thirty-five",
        partLabel: "the battle",
        art: art("stallings-road.jpg", "Illustration of riders seen from behind approaching a farm. Not a historical photograph."),
        hotspots: [
          {
            id: "fight",
            label: "Late summer 1780",
            x: 36,
            y: 48,
            fact: "In the late summer of 1780, Patriots and Loyalists fought a brief battle at the plantation. Sarah's brother, Capt. Andrew Love, and Col. Thomas Brandon led 50 Patriot militia against 35 Loyalists camped at the house. The Loyalists were defeated. Sarah Stallings was accidentally killed.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1780",
        title: "Patriot militia in the fight",
        partLabel: "50 militiamen",
        value: 50,
        unit: "militiamen",
        meant: "What this meant: the marker says 50 Patriot militia fought 35 Loyalists at the house. Stallings had bought 470 acres in 1768.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("stallings-house.jpg", "Illustration of the plantation house. Not a historical photograph."),
        nowArt: art("stallings-today.jpg", "Illustration of a marker in open country. Not a photograph of the site today."),
        thenCaption: "Illustration of a farm, for the plantation the marker places on Fishing Creek. Not a historical photograph.",
        nowCaption: "Illustration of a marker. Not a photograph of the site today.",
      },
      order(
        [
          { id: "buy", year: "1768", label: "John Stallings buys 470 acres.", why: "The marker dates that purchase to 1768." },
          { id: "fight", year: "1780", label: "Patriots and Loyalists fight at the house.", why: "The marker places the battle in the late summer of 1780." },
        ],
        ["fight", "buy"],
      ),
      takeaway([
        "John Stallings bought 470 acres here in 1768. He remained a Loyalist. His wife, Sarah Love Stallings, was a Patriot.",
        "In the late summer of 1780, Capt. Andrew Love and Col. Thomas Brandon led 50 Patriot militia against 35 Loyalists at the house.",
        "The Loyalists were defeated. Sarah Stallings was accidentally killed.",
      ]),
    ],
  ),
  lesson(
    "46-48",
    "Bethesda, from a burned church to brick",
    "Bethesda Presbyterian timeline",
    [
      cited("46-48", "Bethesda Presbyterian Church", "front and back"),
      span("\"40 years\" is 1834 minus 1794, the year Robert B. Walker's pastorate ended and the year it began."),
    ],
    [
      {
        kind: "scene",
        id: "frame",
        kicker: "1769",
        title: "A church that gave a community its name",
        partLabel: "the early church",
        art: art("bethesda-frame.jpg", "Illustration of a frame church in the woods. Not a historical photograph."),
        hotspots: [
          {
            id: "early",
            label: "1760",
            x: 30,
            y: 52,
            fact: "Services were held as early as 1760, about a mile east. The church gave its name to a Scots-Irish community here before the Revolution. The Rev. William Richardson formally organized it in 1769.",
          },
          {
            id: "land",
            label: "This site",
            x: 74,
            y: 48,
            fact: "In 1771 John Fondren gave land here for a second frame church. It was built about 1780, after the church a mile east burned. The cemetery dates to 1777.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brick",
        kicker: "1820",
        title: "A forty-year pastorate",
        partLabel: "the brick church",
        art: art("bethesda-brick.jpg", "Illustration of a brick country church. Not a historical photograph."),
        hotspots: [
          {
            id: "walker",
            label: "Robert B. Walker",
            x: 34,
            y: 46,
            fact: "The Rev. Robert B. Walker (1766-1852), the first permanent minister, served from 1794 to 1834. Bethesda hosted many revivals during the Second Great Awakening. This brick church was built in 1820. The church and cemetery were listed in the National Register in 1977.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1794-1834",
        title: "Years Walker was minister",
        partLabel: "40 years",
        value: 40,
        unit: "years",
        meant: "What this meant: 1834 comes 40 years after 1794. That is the stretch the marker gives for Robert B. Walker's pastorate.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("bethesda-frame.jpg", "Illustration of the frame church. Not a historical photograph."),
        nowArt: art("bethesda-today.jpg", "Illustration of a brick church and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of a frame church, for the building the marker says was put up about 1780. Not a historical photograph.",
        nowCaption: "Illustration of a brick church and a marker, for the 1820 building. Not a photograph.",
      },
      order(
        [
          { id: "meet", year: "1760", label: "Services are already being held about a mile east.", why: "The marker says services were held as early as 1760." },
          { id: "org", year: "1769", label: "William Richardson organizes the church.", why: "The marker dates the organization to 1769." },
          { id: "brick", year: "1820", label: "This brick church is built.", why: "The marker dates the brick church to 1820." },
          { id: "nr", year: "1977", label: "The church and cemetery are listed in the National Register.", why: "The marker dates that listing to 1977." },
        ],
        ["nr", "meet", "brick", "org"],
      ),
      takeaway([
        "Bethesda gave its name to a Scots-Irish community. Services began by 1760, and William Richardson organized the church in 1769.",
        "John Fondren gave this land in 1771. A frame church was built about 1780 after the earlier one burned. The cemetery dates to 1777.",
        "Robert B. Walker was minister from 1794 to 1834. The brick church of 1820 was listed in the National Register in 1977.",
      ]),
    ],
  ),
  lesson(
    "46-53",
    "Mother church of eight congregations",
    "Bethel Presbyterian timeline",
    [cited("46-53", "Bethel Presbyterian Church", "front and back")],
    [
      {
        kind: "scene",
        id: "early",
        kicker: "1764",
        title: "Scots-Irish settlers, one congregation",
        partLabel: "the founding",
        art: art("bethel-early.jpg", "Illustration of an early meeting house. Not a historical photograph."),
        hotspots: [
          {
            id: "found",
            label: "1764",
            x: 32,
            y: 50,
            fact: "The Rev. William Richardson founded this church in 1764, organizing Scots-Irish settlers from both South Carolina and North Carolina. It was incorporated in 1786 as the Presbyterian Church of Bethel Congregation. It grew steadily and built its third building here in 1809. Bethel later became the mother church of eight area Presbyterian churches.",
          },
        ],
      },
      {
        kind: "scene",
        id: "church",
        kicker: "1873",
        title: "Large and tasteful",
        partLabel: "the present church",
        art: art("bethel-church.jpg", "Illustration of a substantial country church. Not a historical photograph."),
        hotspots: [
          {
            id: "now",
            label: "1873",
            x: 34,
            y: 46,
            fact: "The present church was called large and tasteful when it was dedicated in 1873. It was listed in the National Register in 1980. The earliest marked grave is from 1774. The cemetery holds veterans of all of America's wars, including several Patriots who fought at Kings Mountain on October 7, 1780.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Later",
        title: "Churches that grew from Bethel",
        partLabel: "8 churches",
        value: 8,
        unit: "churches",
        meant: "What this meant: the marker says Bethel became the mother church of eight area Presbyterian churches.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("bethel-early.jpg", "Illustration of an early meeting house. Not a historical photograph."),
        nowArt: art("bethel-today.jpg", "Illustration of a church and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of an early church, for the congregation founded in 1764. Not a historical photograph.",
        nowCaption: "Illustration of a church and a marker, for the building dedicated in 1873. Not a photograph.",
      },
      order(
        [
          { id: "found", year: "1764", label: "William Richardson founds the church.", why: "The marker dates the founding to 1764." },
          { id: "inc", year: "1786", label: "The congregation is incorporated.", why: "The marker dates the incorporation to 1786." },
          { id: "third", year: "1809", label: "The third building is put up.", why: "The marker dates that building to 1809." },
          { id: "now", year: "1873", label: "The present church is dedicated.", why: "The marker dates the dedication to 1873." },
        ],
        ["now", "found", "third", "inc"],
      ),
      takeaway([
        "William Richardson founded Bethel in 1764 for Scots-Irish settlers from both Carolinas. It was incorporated in 1786.",
        "The third building went up in 1809. Bethel became the mother church of eight area Presbyterian churches.",
        "The present church was dedicated in 1873. The earliest marked grave is from 1774, and the cemetery includes Patriots from Kings Mountain.",
      ]),
    ],
  ),
  lesson(
    "46-71",
    "Liberty Hill School",
    "Liberty Hill School timeline",
    [cited("46-71", "Liberty Hill School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1924",
        title: "A school that cost $3,200",
        partLabel: "the school",
        art: art("liberty-school.jpg", "Illustration of a small two-teacher school. Not a historical photograph."),
        hotspots: [
          {
            id: "built",
            label: "1924-25",
            x: 34,
            y: 50,
            fact: "Liberty Hill School was built in 1924-25 for African American residents of the Catawba area. Local African Americans, the school district, and the Julius Rosenwald Fund paid the $3,200 cost. It is one of twenty Rosenwald schools in York County and among nearly 500 in South Carolina. It follows a two-teacher plan typical of the smaller schools. It eventually enrolled grades 1 through 7.",
          },
        ],
      },
      {
        kind: "scene",
        id: "road",
        kicker: "1955",
        title: "Sent to a new school 7.3 miles north",
        partLabel: "the closing",
        art: art("liberty-road.jpg", "Illustration of a rural road and a distant school. Not a historical photograph."),
        hotspots: [
          {
            id: "close",
            label: "1955",
            x: 36,
            y: 48,
            fact: "The school closed in 1955 and was among the last country schools in York County to be consolidated. Students went to Hillcrest Elementary in Lesslie, 7.3 miles north, built that year with money from the South Carolina equalization program, a statewide effort to preserve segregation by upgrading Black schools.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1924",
        title: "Dollars the building cost",
        partLabel: "3,200 dollars",
        value: 3200,
        unit: "dollars",
        meant: "What this meant: the marker says the school cost $3,200. It was one of twenty Rosenwald schools in the county, and among nearly 500 in the state. \"Nearly\" stays the marker's word.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("liberty-school.jpg", "Illustration of the 1924 school. Not a historical photograph."),
        nowArt: art("liberty-today.jpg", "Illustration of a small school and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of the school the marker says was built in 1924-25. Not a historical photograph.",
        nowCaption: "Illustration of a school and a marker. The marker says it closed in 1955. Not a photograph.",
      },
      order(
        [
          { id: "start", year: "1924", label: "Construction of Liberty Hill School begins.", why: "The marker says it was built in 1924-25." },
          { id: "done", year: "1925", label: "The school is finished.", why: "The marker dates the building to 1924-25." },
          { id: "close", year: "1955", label: "It closes, and students go to Hillcrest Elementary.", why: "The marker dates the closing and the new school to 1955." },
        ],
        ["close", "start", "done"],
      ),
      takeaway([
        "Liberty Hill School was built in 1924-25 for African American children of the Catawba area. It cost $3,200 and followed a two-teacher plan.",
        "It was one of twenty Rosenwald schools in York County and among nearly 500 in South Carolina. It taught grades 1 through 7.",
        "It closed in 1955. Students transferred to Hillcrest Elementary in Lesslie, built that year under the state's equalization program.",
      ]),
    ],
  ),
  lesson(
    "46-24",
    "Hill's Ironworks",
    "Hill's Ironworks timeline",
    [cited("46-24", "William Hill", "front and back")],
    [
      {
        kind: "scene",
        id: "works",
        kicker: "About 1776",
        title: "An ironworks on Allison Creek",
        partLabel: "the first works",
        art: art("iron-works.jpg", "Illustration of a small ironworks beside a creek. Not a historical photograph."),
        hotspots: [
          {
            id: "built",
            label: "About 1776",
            x: 32,
            y: 50,
            fact: "William Hill (1741-1816) served in the Revolution and was present at many battles. About 1776 he built an ironworks near here on Allison Creek with his partner, Isaac Hayne. They made swivel guns, kitchen utensils, cannon, ammunition, and farm tools. British Capt. Christian Huck burned the works in June 1780.",
          },
        ],
      },
      {
        kind: "scene",
        id: "forge",
        kicker: "1795",
        title: "Four gristmills",
        partLabel: "the rebuilt works",
        art: art("iron-forge.jpg", "Illustration of furnaces and mills, workers seen only from behind. Not a historical photograph."),
        hotspots: [
          {
            id: "rebuild",
            label: "By 1795",
            x: 30,
            y: 48,
            fact: "The works were rebuilt in 1787 and 1788, still near here on Allison Creek. By 1795 there were two furnaces, four gristmills, two sawmills, and about fifteen thousand acres. Around 80 enslaved African Americans worked as forgemen, blacksmiths, founders, miners, and in other jobs.",
          },
          {
            id: "nails",
            label: "1802",
            x: 74,
            y: 55,
            fact: "A nail factory with three cutting machines was operating by 1802.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1795",
        title: "Gristmills at the rebuilt works",
        partLabel: "4 gristmills",
        value: 4,
        unit: "gristmills",
        meant: "What this meant: the marker says that by 1795 the works had four gristmills, two furnaces, and two sawmills, on about fifteen thousand acres. Around 80 enslaved people worked there. Those last two figures stay the marker's \"about\" and \"around.\"",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("iron-works.jpg", "Illustration of the ironworks. Not a historical photograph."),
        nowArt: art("iron-today.jpg", "Illustration of a marker by a creek, the works gone. Not a photograph of the site today."),
        thenCaption: "Illustration of an ironworks, for the one the marker says Hill built about 1776. Not a historical photograph.",
        nowCaption: "Illustration of a marker by a creek. Not a photograph of the site today.",
      },
      order(
        [
          { id: "built", year: "About 1776", label: "Hill and Hayne build the ironworks.", why: "The marker says the works were built about 1776." },
          { id: "burn", year: "1780", label: "Christian Huck burns the works.", why: "The marker dates the burning to June 1780." },
          { id: "rebuild", year: "1787", label: "The works are rebuilt.", why: "The marker dates the rebuilding to 1787-1788." },
          { id: "nails", year: "1802", label: "A nail factory is operating.", why: "The marker says the nail factory was operating by 1802." },
        ],
        ["nails", "built", "rebuild", "burn"],
      ),
      takeaway([
        "William Hill and Isaac Hayne built an ironworks on Allison Creek about 1776. They made guns, cannon, ammunition, utensils, and tools.",
        "Capt. Christian Huck burned it in June 1780. It was rebuilt in 1787-88. By 1795 it had two furnaces, four gristmills, and two sawmills.",
        "Around 80 enslaved people worked the place. A nail factory with three cutting machines was running by 1802.",
      ]),
    ],
  ),
  lesson(
    "46-25",
    "A town named for its church",
    "Town of Smyrna timeline",
    [cited("46-25", "Town of Smyrna", "front")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "About 1842",
        title: "A church, then an academy",
        partLabel: "the church",
        art: art("smyrna-church.jpg", "Illustration of a country church. Not a historical photograph."),
        hotspots: [
          {
            id: "church",
            label: "About 1842",
            x: 34,
            y: 48,
            fact: "The town was named for Smyrna Associate Reformed Presbyterian Church, organized about 1842. An academy was here by 1870.",
          },
        ],
      },
      {
        kind: "scene",
        id: "rail",
        kicker: "1888",
        title: "A railroad, then a charter",
        partLabel: "the railroad",
        art: art("smyrna-rail.jpg", "Illustration of a railroad and a small depot. Not a historical photograph."),
        hotspots: [
          {
            id: "rail",
            label: "1888",
            x: 32,
            y: 52,
            fact: "In 1888 the Charleston, Cincinnati, and Chicago Railroad finished its line here. Four years later the post office was established. The town was incorporated in 1895. Its limits ran half a mile in every direction from the depot.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("smyrna-rail.jpg", "Illustration of the railroad town. Not a historical photograph."),
        nowArt: art("smyrna-today.jpg", "Illustration of a marker in a small town. Not a photograph of the site today."),
        thenCaption: "Illustration of a depot, for the railroad the marker dates to 1888. Not a historical photograph.",
        nowCaption: "Illustration of a marker. The marker says the 1895 limits ran half a mile from the depot. Not a photograph.",
      },
      order(
        [
          { id: "church", year: "About 1842", label: "Smyrna Associate Reformed Presbyterian Church is organized.", why: "The marker says the church was organized about 1842." },
          { id: "school", year: "1870", label: "An academy is here.", why: "The marker says an academy was established by 1870." },
          { id: "rail", year: "1888", label: "The railroad is finished.", why: "The marker dates the railroad to 1888." },
          { id: "town", year: "1895", label: "The town is incorporated.", why: "The marker dates the incorporation to 1895. The post office came four years after the railroad." },
        ],
        ["town", "church", "rail", "school"],
      ),
      takeaway([
        "Smyrna was named for its Associate Reformed Presbyterian church, organized about 1842.",
        "An academy was here by 1870. The railroad arrived in 1888, and the post office four years later.",
        "The town was incorporated in 1895, half a mile out from the depot.",
      ]),
    ],
  ),
  lesson(
    "46-22",
    "White's Mill",
    "White's Mill timeline",
    [cited("46-22", "Site of White's Mill", "front")],
    [
      {
        kind: "scene",
        id: "mill",
        kicker: "1766",
        title: "A house and a mill on Fishing Creek",
        partLabel: "the mill",
        art: art("whites-mill.jpg", "Illustration of a mill and a house on a creek. Not a historical photograph."),
        hotspots: [
          {
            id: "grant",
            label: "1766",
            x: 34,
            y: 52,
            fact: "About a mile and a half south of here, on Fishing Creek, were a house and mill named on a 1766 royal land grant to Hugh White.",
          },
        ],
      },
      {
        kind: "scene",
        id: "camp",
        kicker: "1780",
        title: "A British camp",
        partLabel: "September 1780",
        art: art("whites-camp.jpg", "Illustration of a mill with a camp of figures seen from behind. Not a historical photograph."),
        hotspots: [
          {
            id: "camp",
            label: "September 1780",
            x: 36,
            y: 48,
            fact: "British Col. Banastre Tarleton and his Legion camped at White's Mill for several days in September 1780. During that stay Tarleton lay, in the marker's words, dangerously ill of a fever.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("whites-mill.jpg", "Illustration of the mill. Not a historical photograph."),
        nowArt: art("whites-today.jpg", "Illustration of a marker, the mill a mile and a half away. Not a photograph of the site today."),
        thenCaption: "Illustration of a mill, for the one the marker places about a mile and a half south, on Fishing Creek. Not a historical photograph.",
        nowCaption: "Illustration of a marker. The marker says the mill site is about a mile and a half south. Not a photograph.",
      },
      order(
        [
          { id: "grant", year: "1766", label: "A royal grant to Hugh White mentions the house and mill.", why: "The marker dates that grant to 1766." },
          { id: "camp", year: "1780", label: "Tarleton's Legion camps at the mill.", why: "The marker dates that camp to September 1780." },
        ],
        ["camp", "grant"],
      ),
      takeaway([
        "A 1766 royal grant to Hugh White mentions a house and mill on Fishing Creek, about a mile and a half south of this marker.",
        "In September 1780, Col. Banastre Tarleton and his Legion camped there for several days.",
        "The marker says that during the stay Tarleton lay dangerously ill of a fever.",
      ]),
    ],
  ),
];

