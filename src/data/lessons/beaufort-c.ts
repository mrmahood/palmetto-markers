import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Third Beaufort pass. 07-34 is the fuller Fort Howell plaque; 07-72 already
 * has the shorter one. No portrait of a named person. */

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

export const beaufortLessonsC: MarkerLesson[] = [
  lesson(
    "07-19",
    "Charles Cotesworth Pinckney",
    "Pinckney timeline",
    [cited("07-19", "Charles Cotesworth Pinckney", "front and back")],
    [
      {
        kind: "scene",
        id: "island",
        kicker: "1769",
        title: "The island he inherited",
        partLabel: "the island",
        art: art(
          "pinckney-island.jpg",
          "Illustration of fields and oaks on an island. Not a portrait, and not a historical photograph.",
        ),
        hotspots: [
          {
            id: "life",
            label: "Before the island years",
            x: 32,
            y: 58,
            fact: "Born in South Carolina and educated in England, Pinckney served in the First and Second Provincial Congresses, commanded in the Revolution, served in the General Assembly, and signed the U.S. Constitution. The marker does not date those steps.",
          },
          {
            id: "island",
            label: "1769",
            x: 74,
            y: 46,
            fact: "He inherited this island in 1769 and spent part of his life here. The marker calls him a leader in the state’s educational, political, cultural, and religious affairs.",
          },
        ],
      },
      {
        kind: "scene",
        id: "ship",
        kicker: "1796",
        title: "Ambassador, then the XYZ affair",
        partLabel: "France",
        art: art(
          "pinckney-ship.jpg",
          "Illustration of a ship and a wooded coast. Not a portrait of Pinckney, and not a historical photograph.",
        ),
        hotspots: [
          {
            id: "france",
            label: "1796",
            x: 30,
            y: 55,
            fact: "He was made ambassador to France in 1796. In 1790 he had been a delegate to the state constitutional convention in Columbia.",
          },
          {
            id: "xyz",
            label: "1797",
            x: 74,
            y: 48,
            fact: "President Adams appointed him in 1797 to a committee negotiating maritime problems with France. He became known for refusing a bribe in the XYZ affair.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("pinckney-island.jpg", "Illustration of the island. Not a historical photograph."),
        nowArt: art(
          "pinckney-today.jpg",
          "Illustration of a marker by a marsh road. Not a photograph of Pinckney Island.",
        ),
        thenCaption:
          "Illustration of fields and oaks, for the island the marker says he inherited in 1769. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by the road, for U.S. 278 on Pinckney Island. Not a photograph of the island.",
      },
      order(
        [
          {
            id: "inherit",
            year: "1769",
            label: "He inherits this island.",
            why: "The marker dates the inheritance to 1769.",
          },
          {
            id: "columbia",
            year: "1790",
            label: "He is a delegate to the state convention in Columbia.",
            why: "The marker dates that convention to 1790.",
          },
          {
            id: "france",
            year: "1796",
            label: "He is made ambassador to France.",
            why: "The marker dates the appointment to 1796.",
          },
          {
            id: "xyz",
            year: "1797",
            label: "He refuses a bribe in the XYZ affair.",
            why: "The marker says Adams appointed him in 1797 and that he was known for refusing the bribe.",
          },
        ],
        ["france", "inherit", "xyz", "columbia"],
      ),
      takeaway([
        "Pinckney, born in South Carolina and educated in England, commanded in the Revolution, sat in the Assembly, and signed the U.S. Constitution. This marker does not date those years.",
        "He inherited this island in 1769 and spent part of his life here. In 1790 he was at the state convention in Columbia.",
        "He was ambassador to France in 1796. In 1797 he refused a bribe in the XYZ affair.",
      ]),
    ],
  ),
  lesson(
    "07-29",
    "The Riley schools",
    "Riley schools timeline",
    [
      cited("07-29", "Michael C. Riley Schools", "front and back"),
      span("“16 years” is 1970 minus 1954, the years the marker gives for the school before desegregation."),
    ],
    [
      {
        kind: "scene",
        id: "frame",
        kicker: "1900",
        title: "A frame school, then a name",
        partLabel: "the first building",
        art: art("riley-frame.jpg", "Illustration of a frame school. Not a historical photograph."),
        hotspots: [
          {
            id: "graded",
            label: "About 1900",
            x: 32,
            y: 52,
            fact: "Bluffton Graded School, a small frame building put up about 1900, was the first of two schools on this site for the Black community of southern Beaufort County.",
          },
          {
            id: "name",
            label: "1954",
            x: 74,
            y: 48,
            fact: "In 1954 an elementary and high school followed, named for Michael C. Riley (1873–1966), longtime trustee of Beaufort County School District No. 2.",
          },
        ],
      },
      {
        kind: "scene",
        id: "brick",
        kicker: "1954",
        title: "Grades, then one school",
        partLabel: "after 1954",
        art: art(
          "riley-brick.jpg",
          "Illustration of a later school building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grades",
            label: "1954 to 1970",
            x: 30,
            y: 52,
            fact: "The elementary school taught Bluffton’s Black students in grades 1–8. The high school taught Bluffton’s and Hilton Head’s Black students in grades 9–12.",
          },
          {
            id: "after",
            label: "1970 and 1991",
            x: 74,
            y: 55,
            fact: "After county schools were desegregated in 1970, it was an elementary school for Bluffton’s Black and white students until 1991. A new Michael C. Riley Elementary opened nearby that same year.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1954–1970",
        title: "Years before desegregation",
        partLabel: "years",
        value: 16,
        unit: "years",
        meant: "What this meant: 1970 comes 16 years after 1954. Those are the years the marker gives for this school before the county desegregated.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("riley-frame.jpg", "Illustration of the frame school. Not a historical photograph."),
        nowArt: art(
          "riley-today.jpg",
          "Illustration of a marker on a rural road. Not a photograph of the site.",
        ),
        thenCaption:
          "Illustration of a frame school, for Bluffton Graded School, built about 1900. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on Goethe Road. The marker says a new Riley school opened nearby in 1991. Not a photograph of either building.",
      },
      order(
        [
          {
            id: "frame",
            year: "1900",
            label: "Bluffton Graded School, a frame building, goes up.",
            why: "The marker dates that building to about 1900.",
          },
          {
            id: "named",
            year: "1954",
            label: "An elementary and high school is named for Michael C. Riley.",
            why: "The marker dates the named school to 1954 and gives his years as 1873–1966.",
          },
          {
            id: "open",
            year: "1970",
            label: "County schools are desegregated.",
            why: "The marker says that after 1970 it taught Bluffton’s Black and white elementary students.",
          },
          {
            id: "new",
            year: "1991",
            label: "A new Riley Elementary opens nearby.",
            why: "The marker says the school here lasted as that elementary until 1991, when the new one opened.",
          },
        ],
        ["open", "frame", "new", "named"],
      ),
      takeaway([
        "Two schools for southern Beaufort County’s Black students stood here: a frame graded school from about 1900, then the 1954 school named for trustee Michael C. Riley.",
        "Until 1970 the elementary taught Bluffton grades 1–8, and the high school taught Bluffton and Hilton Head grades 9–12.",
        "After desegregation it was a shared elementary until 1991, when a new Riley school opened nearby.",
      ]),
    ],
  ),
  lesson(
    "07-34",
    "Fort Howell, the pentagon",
    "Fort Howell timeline",
    [
      cited("07-34", "Fort Howell", "front and back"),
      span("“23 feet” is the parapet height printed on this marker. “Up to 27 guns” is a maximum, not a count of guns that were mounted."),
    ],
    [
      {
        kind: "scene",
        id: "fort",
        kicker: "1864",
        title: "An enclosed earthwork",
        partLabel: "the fort",
        art: art(
          "howell-village.jpg",
          "Illustration of an earth fort and distant houses. Not a plan of the fort, and not a historical photograph.",
        ),
        hotspots: [
          {
            id: "shape",
            label: "What the marker measures",
            x: 30,
            y: 55,
            fact: "This marker says the fort was an enclosed pentagonal earthwork with a 23-foot parapet and emplacements for up to 27 guns. The picture is an illustration of an earthwork, not a measured plan.",
          },
          {
            id: "who",
            label: "Who built it",
            x: 76,
            y: 46,
            fact: "From August to November 1864 the 32nd U.S. Colored Infantry and the 144th New York Infantry built it. It was named for Gen. Joshua Blackwood Howell (1806–1864).",
          },
        ],
      },
      {
        kind: "scene",
        id: "walls",
        kicker: "1862",
        title: "The village it covered",
        partLabel: "Mitchelville",
        art: art(
          "howell-walls.jpg",
          "Illustration of a marker and grassy fort walls. Not a photograph of the fort.",
        ),
        hotspots: [
          {
            id: "village",
            label: "Mitchelville",
            x: 55,
            y: 48,
            fact: "The fort defended Hilton Head and Mitchelville, the freedmen’s village just east of here. Gen. Ormsby M. Mitchel established that village in the fall of 1862. It was named for him after his death. The fort never saw action.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The wall",
        title: "Parapet height on the marker",
        partLabel: "feet",
        value: 23,
        unit: "feet",
        meant: "What this meant: the marker says the parapet was 23 feet high. It also says the fort had emplacements for up to 27 guns, which is a capacity, not a count of guns in place.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("howell-village.jpg", "Illustration of the earthwork. Not a historical photograph."),
        nowArt: art("howell-walls.jpg", "Illustration of the walls and a marker. Not a photograph."),
        thenCaption:
          "Illustration of an earth fort, for the work built in 1864. The marker says it was pentagonal. This is not a plan.",
        nowCaption:
          "Illustration of grassy walls and a marker, for Beach City Road near Dillon Road. Not a photograph of the fort.",
      },
      order(
        [
          {
            id: "village",
            year: "1862",
            label: "Mitchel establishes Mitchelville. It is named for him after his death.",
            why: "The marker dates the village to the fall of 1862, just east of the fort.",
          },
          {
            id: "built",
            year: "1864",
            label: "The 32nd U.S. Colored Infantry and the 144th New York build the fort.",
            why: "The marker dates the work to August–November 1864.",
          },
          {
            id: "quiet",
            year: "1864",
            label: "The fort never sees action.",
            why: "The marker says it never saw action, and credits its design and the fact that it still holds together.",
          },
          {
            id: "list",
            year: "2011",
            label: "It is listed in the National Register.",
            why: "The marker dates that listing to 2011.",
          },
        ],
        ["list", "village", "quiet", "built"],
      ),
      takeaway([
        "Mitchelville, just east of here, was established in the fall of 1862 and named for Gen. Ormsby Mitchel after he died.",
        "In 1864 Black and New York troops built this enclosed pentagonal fort, with a 23-foot parapet and room for up to 27 guns, to cover the village.",
        "It never saw action. The marker lists it in the National Register in 2011 for its design and for how intact it is.",
      ]),
    ],
  ),
  lesson(
    "07-38",
    "Fort Fremont",
    "Fort Fremont timeline",
    [
      cited("07-38", "Fort Fremont", "front and back"),
      span("“112” is the company strength the marker prints. “170 acres” and the gun sizes are separate figures on the same plaque."),
    ],
    [
      {
        kind: "scene",
        id: "guns",
        kicker: "1898",
        title: "A fort for a war it missed",
        partLabel: "the battery",
        art: art(
          "fremont-guns.jpg",
          "Illustration of a coastal battery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1898",
            x: 32,
            y: 55,
            fact: "The U.S. Army built these batteries in 1898 because of the Spanish-American War. Fort Fremont, built 1898–99, guarded the coaling station and dry dock of the Port Royal Naval Station on Parris Island.",
          },
          {
            id: "name",
            label: "The name",
            x: 74,
            y: 48,
            fact: "It was named for Maj. Gen. John C. Frémont (1813–1890), explorer, 1856 Republican candidate for president, and a Union general.",
          },
        ],
      },
      {
        kind: "scene",
        id: "ruins",
        kicker: "1911",
        title: "Armed, then sold",
        partLabel: "after the fort",
        art: art(
          "fremont-ruins.jpg",
          "Illustration of a ruined battery in marsh. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "arms",
            label: "What it held",
            x: 30,
            y: 55,
            fact: "Active from 1898 to 1911, it covered 170 acres. A Coast Artillery company of 112 men manned it. The armament was three 10-inch guns, two 4.7-inch guns, and submarine mines. It never saw action.",
          },
          {
            id: "later",
            label: "After 1911",
            x: 72,
            y: 50,
            fact: "Decommissioned in 1911 and sold in 1930. Beaufort County acquired part of it in 2004. It was listed in the National Register in 2010.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The company",
        title: "Men the marker assigns here",
        partLabel: "men",
        value: 112,
        unit: "men",
        meant: "What this meant: the marker says a Coast Artillery company of 112 men manned the fort. It also prints 170 acres, three 10-inch guns, and two 4.7-inch guns.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("fremont-guns.jpg", "Illustration of the 1898 battery. Not a historical photograph."),
        nowArt: art(
          "fremont-today.jpg",
          "Illustration of a marker and a ruined battery. Not a photograph of Bay Point.",
        ),
        thenCaption:
          "Illustration of a battery, for the works built in 1898. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and ruins, for Bay Point on St. Helena. Not a photograph of the site.",
      },
      order(
        [
          {
            id: "built",
            year: "1898",
            label: "The Army builds the batteries during the Spanish-American War.",
            why: "The marker dates the batteries to 1898 and the fort to 1898–99.",
          },
          {
            id: "out",
            year: "1911",
            label: "The fort is decommissioned. It never saw action.",
            why: "The marker says it was active 1898–1911 and never saw action.",
          },
          {
            id: "sold",
            year: "1930",
            label: "The fort is sold.",
            why: "The marker dates the sale to 1930.",
          },
          {
            id: "list",
            year: "2010",
            label: "It is listed in the National Register.",
            why: "The marker says the county acquired part of it in 2004 and that it was listed in 2010.",
          },
        ],
        ["sold", "built", "list", "out"],
      ),
      takeaway([
        "Fort Fremont’s batteries went up in 1898 to cover the naval station on Parris Island. It was named for John C. Frémont.",
        "A company of 112 men, three 10-inch guns, two 4.7-inch guns, and mines held 170 acres. The fort never fired in a war.",
        "It closed in 1911, was sold in 1930, and part of it came to the county in 2004. The National Register listing is 2010.",
      ]),
    ],
  ),
  lesson(
    "07-40",
    "First African Baptist",
    "First African Baptist timeline",
    [
      cited("07-40", "First African Baptist Church", "front and back"),
      span("“More than 900” is the membership the marker prints for 1885. The lesson does not round it to exactly 900."),
    ],
    [
      {
        kind: "scene",
        id: "praise",
        kicker: "1865",
        title: "From a praise house",
        partLabel: "the start",
        art: art(
          "praise-house.jpg",
          "Illustration of a small wooden praise house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "praise",
            label: "Before the church",
            x: 30,
            y: 55,
            fact: "The church grew out of an antebellum praise house for Black members of the Baptist Church of Beaufort. During the Civil War, after Federal occupation, it held a school for freedmen.",
          },
          {
            id: "found",
            label: "1865 and 1867",
            x: 74,
            y: 46,
            fact: "Founded in 1865. The Rev. Arthur Waddell (1821–1895), from Savannah, was the founding pastor. In 1867 he and two Black ministers from Savannah formally organized the church.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gothic",
        kicker: "1885",
        title: "A church they called handsome",
        partLabel: "the building",
        art: art(
          "african-gothic.jpg",
          "Illustration of a wooden church with a steeple. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "build",
            label: "1885",
            x: 32,
            y: 42,
            fact: "In 1885 the congregation, with more than 900 members, built this church. The marker quotes the description “handsome and commodious” and calls the style Carpenter Gothic.",
          },
          {
            id: "smalls",
            label: "Waddell and Smalls",
            x: 74,
            y: 50,
            fact: "Waddell served until he retired in 1894. At his death in 1895 the church was described as “one of the most aristocratic colored churches.” Robert Smalls (1839–1915) was its most prominent member.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1885",
        title: "Members, and more",
        partLabel: "members",
        value: 900,
        unit: "members, and more",
        meant: "What this meant: the marker says that in 1885 the congregation had more than 900 members. It does not give an exact count.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("praise-house.jpg", "Illustration of a praise house. Not a historical photograph."),
        nowArt: art(
          "african-today.jpg",
          "Illustration of a marker and a church. Not a photograph of 601 New Street.",
        ),
        thenCaption:
          "Illustration of a small praise house, for the antebellum meeting the marker describes. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and church, for 601 New Street. Not a photograph of the building.",
      },
      order(
        [
          {
            id: "war",
            year: "War",
            label: "During the occupation, the praise house holds a school for freedmen.",
            why: "The marker places that school in the Civil War, after Federal occupation, and the founding in 1865.",
          },
          {
            id: "found",
            year: "1865",
            label: "The church is founded. Waddell is the founding pastor.",
            why: "The marker dates the founding to 1865 and says Waddell came from Savannah.",
          },
          {
            id: "org",
            year: "1867",
            label: "Waddell and two Savannah ministers formally organize it.",
            why: "The marker dates that organization to 1867.",
          },
          {
            id: "build",
            year: "1885",
            label: "More than 900 members build the Carpenter Gothic church.",
            why: "The marker dates the building to 1885 and uses the words “handsome and commodious.”",
          },
        ],
        ["build", "war", "org", "found"],
      ),
      takeaway([
        "First African Baptist grew from a praise house of the Baptist Church of Beaufort and, during the occupation, a school for freedmen.",
        "Arthur Waddell and two Savannah ministers organized it in 1867. In 1885 more than 900 members built the Carpenter Gothic church.",
        "Waddell retired in 1894 and died in 1895. Robert Smalls was the congregation’s most prominent member.",
      ]),
    ],
  ),
  lesson(
    "07-58",
    "The Baptist Church of Beaufort",
    "Baptist Church of Beaufort timeline",
    [
      cited("07-58", "Baptist Church of Beaufort", "front and back"),
      span("“3,557” and “3,723” are the membership figures printed on the marker for the years before the Civil War."),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1794",
        title: "A meeting house on this site",
        partLabel: "the first house",
        art: art(
          "baptist-greek.jpg",
          "Illustration of a columned church and a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "start",
            label: "1794 to 1804",
            x: 30,
            y: 52,
            fact: "The church descends from Euhaw Baptist on Edisto Island. The first meeting house on this site was built in 1794. Henry Holcombe moved to Beaufort in 1795 and was the first mission pastor. The church was formally constituted in 1804.",
          },
          {
            id: "yard",
            label: "The churchyard",
            x: 74,
            y: 55,
            fact: "The first burial was in 1809. Before the Civil War, 3,557 of 3,723 members were enslaved people.",
          },
        ],
      },
      {
        kind: "scene",
        id: "side",
        kicker: "1844",
        title: "A hospital, then a reading",
        partLabel: "the war",
        art: art(
          "baptist-side.jpg",
          "Illustration of the church from the side. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "fuller",
            label: "1844",
            x: 32,
            y: 52,
            fact: "The present Greek Revival building dates to 1844, built while Richard Fuller was pastor. He served from 1833 to 1847.",
          },
          {
            id: "read",
            label: "December 1862",
            x: 74,
            y: 48,
            fact: "During the war the church was a Union hospital for Black troops. In December 1862 the Rev. Solomon Peck read the preliminary Emancipation Proclamation from the pulpit to escaped slaves and Black soldiers.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Before the war",
        title: "Enslaved members the marker counts",
        partLabel: "enslaved members",
        value: 3557,
        unit: "of 3,723 members",
        meant: "What this meant: the marker says that before the Civil War, 3,557 of 3,723 members were enslaved people.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("baptist-greek.jpg", "Illustration of the church. Not a historical photograph."),
        nowArt: art(
          "baptist-today.jpg",
          "Illustration of a marker and the church. Not a photograph of 600 Charles Street.",
        ),
        thenCaption:
          "Illustration of a columned church, for the 1844 building. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker and church, for 600 Charles Street. Not a photograph of the site.",
      },
      order(
        [
          {
            id: "house",
            year: "1794",
            label: "The first meeting house is built on this site.",
            why: "The marker dates that house to 1794. Holcombe arrived as mission pastor in 1795.",
          },
          {
            id: "free",
            year: "1804",
            label: "The church is formally constituted.",
            why: "The marker dates independence to 1804. The first burial was in 1809.",
          },
          {
            id: "greek",
            year: "1844",
            label: "The Greek Revival building goes up under Richard Fuller.",
            why: "The marker says Fuller served 1833–1847 and the present building dates to 1844.",
          },
          {
            id: "read",
            year: "1862",
            label: "Solomon Peck reads the preliminary proclamation from the pulpit.",
            why: "The marker dates that reading to December 1862, to escaped slaves and Black soldiers. The church was a hospital for Black troops.",
          },
        ],
        ["greek", "house", "read", "free"],
      ),
      takeaway([
        "The Beaufort church descends from Euhaw. A meeting house stood here from 1794, and the church was independent from 1804.",
        "Before the war, 3,557 of 3,723 members were enslaved. The Greek Revival building of 1844 went up while Richard Fuller was pastor.",
        "In the war it was a hospital for Black troops. In December 1862 Solomon Peck read the preliminary Emancipation Proclamation here. After the war, nearly all the Black members left for new churches.",
      ]),
    ],
  ),
  lesson(
    "07-09",
    "Fort Walker",
    "Fort Walker timeline",
    [
      cited("07-09", "Fort Walker", "front"),
      span("“3” is the number of guns the marker says were still serviceable at the end of the bombardment."),
    ],
    [
      {
        kind: "scene",
        id: "fort",
        kicker: "1861",
        title: "Built in a hurry",
        partLabel: "the fort",
        art: art(
          "walker-fort.jpg",
          "Illustration of an earth fort on a bluff. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1861",
            x: 36,
            y: 48,
            fact: "Fort Walker was hastily built in 1861 to protect the South Carolina coast from a Union attack. Col. William C. Heyward commanded it.",
          },
        ],
      },
      {
        kind: "scene",
        id: "after",
        kicker: "1861",
        title: "Three guns left",
        partLabel: "November 7",
        art: art(
          "walker-after.jpg",
          "Illustration of the fort after the bombardment. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "fight",
            label: "November 7, 1861",
            x: 34,
            y: 50,
            fact: "The fort bore the brunt of the Union attack. After 4 1/2 hours, only 3 guns were still serviceable and ammunition was almost gone. Troops under Gen. Thomas F. Drayton withdrew from the island.",
          },
          {
            id: "name",
            label: "A new name",
            x: 72,
            y: 46,
            fact: "Union forces rebuilt the fort and renamed it Fort Welles.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "At the end",
        title: "Guns still able to fire",
        partLabel: "guns",
        value: 3,
        unit: "guns",
        meant: "What this meant: the marker says that after 4 1/2 hours only 3 guns were still serviceable, and ammunition was almost gone.",
      },
      order(
        [
          {
            id: "built",
            year: "1861",
            label: "The fort is hastily built. Heyward commands it.",
            why: "The marker says it was built that year against a Union attack.",
          },
          {
            id: "fight",
            year: "1861",
            label: "On November 7 it takes the brunt for 4 1/2 hours.",
            why: "The marker says only 3 guns were left serviceable.",
          },
          {
            id: "leave",
            year: "1861",
            label: "Drayton’s troops leave the island.",
            why: "The marker says ammunition was almost gone and the troops withdrew.",
          },
          {
            id: "rename",
            year: "After",
            label: "Union forces rebuild it and name it Fort Welles.",
            why: "The marker says the rebuilt fort was renamed Fort Welles. It does not print that year.",
          },
        ],
        ["leave", "built", "rename", "fight"],
      ),
      takeaway([
        "Fort Walker was thrown up in 1861 under Col. William C. Heyward.",
        "On November 7 it took the main Union blow. After 4 1/2 hours, 3 guns still worked and the ammunition was nearly gone. Gen. Thomas F. Drayton’s troops left the island.",
        "The Union rebuilt the work and renamed it Fort Welles.",
      ]),
    ],
  ),
  lesson(
    "07-10",
    "The Beaufort Arsenal",
    "Arsenal timeline",
    [
      cited("07-10", "Beaufort Arsenal", "front"),
      span("“54 years” is 1852 minus 1798, the year the arsenal was erected and the year it was rebuilt."),
    ],
    [
      {
        kind: "scene",
        id: "building",
        kicker: "1798",
        title: "Home of the volunteer artillery",
        partLabel: "the arsenal",
        art: art("arsenal-building.jpg", "Illustration of a brick arsenal. Not a historical photograph."),
        hotspots: [
          {
            id: "built",
            label: "1798 and 1852",
            x: 32,
            y: 52,
            fact: "The arsenal was erected in 1798 and rebuilt in 1852. It was the home of the Beaufort Volunteer Artillery.",
          },
          {
            id: "company",
            label: "The company",
            x: 74,
            y: 55,
            fact: "The artillery was commissioned in 1802. It grew from an earlier company organized in 1776, which the marker says served in the Revolutionary War.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1861",
        title: "At Fort Beauregard",
        partLabel: "1861",
        art: art("arsenal-yard.jpg", "Illustration of the arsenal yard. Not a historical photograph."),
        hotspots: [
          {
            id: "battle",
            label: "November 7, 1861",
            x: 34,
            y: 55,
            fact: "The Beaufort Volunteer Artillery was stationed at Fort Beauregard during the Battle of Port Royal.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1798–1852",
        title: "Years from the first building to the rebuild",
        partLabel: "years",
        value: 54,
        unit: "years",
        meant: "What this meant: 1852 comes 54 years after 1798. Those are the years the marker gives for putting the arsenal up and then rebuilding it.",
      },
      order(
        [
          {
            id: "roots",
            year: "1776",
            label: "An earlier company is organized.",
            why: "The marker says the 1802 artillery grew from a company organized in 1776.",
          },
          {
            id: "up",
            year: "1798",
            label: "The arsenal is erected.",
            why: "The marker dates the first building to 1798.",
          },
          {
            id: "bva",
            year: "1802",
            label: "The Beaufort Volunteer Artillery is commissioned.",
            why: "The marker dates that commission to 1802.",
          },
          {
            id: "rebuild",
            year: "1852",
            label: "The arsenal is rebuilt.",
            why: "The marker dates the rebuilding to 1852. In 1861 the company was at Fort Beauregard.",
          },
        ],
        ["bva", "roots", "rebuild", "up"],
      ),
      takeaway([
        "The arsenal went up in 1798 and was rebuilt in 1852. It housed the Beaufort Volunteer Artillery.",
        "That company was commissioned in 1802 and traced itself to a 1776 company that fought in the Revolution.",
        "On November 7, 1861, the company was at Fort Beauregard for the Battle of Port Royal.",
      ]),
    ],
  ),
  lesson(
    "07-27",
    "Sheldon Union Academy",
    "Sheldon Academy timeline",
    [
      cited("07-27", "Sheldon Union Academy", "front and back"),
      span("“49 years” is 1942 minus 1893. The marker says the school educated children here for almost fifty years."),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1893",
        title: "A school the community ran",
        partLabel: "the opening",
        art: art("academy-school.jpg", "Illustration of a rural school. Not a historical photograph."),
        hotspots: [
          {
            id: "open",
            label: "1893",
            x: 32,
            y: 52,
            fact: "Sheldon Union Academy, later Sheldon School, opened in 1893 and educated the Black children of rural Sheldon for almost fifty years.",
          },
          {
            id: "board",
            label: "The board",
            x: 74,
            y: 58,
            fact: "From 1893 to 1918 the board was S. T. Beaubien, M. W. Brown, P. R. Chisolm, H. L. Jones, S. W. Ladson, F. S. Mitchell, and N. D. Mitchell.",
          },
        ],
      },
      {
        kind: "scene",
        id: "side",
        kicker: "1918",
        title: "Given to the county",
        partLabel: "the public school",
        art: art("academy-side.jpg", "Illustration of the school from the side. Not a historical photograph."),
        hotspots: [
          {
            id: "deed",
            label: "1918",
            x: 32,
            y: 52,
            fact: "It was a private school, founded by community leaders, until 1918. That year the board deeded the property to Beaufort County, which built a new public school here. Sheldon School taught grades 1–7.",
          },
          {
            id: "close",
            label: "1942",
            x: 74,
            y: 48,
            fact: "It closed in 1942 when the county consolidated its rural Black schools.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1893–1942",
        title: "Years from the opening to the closing",
        partLabel: "years",
        value: 49,
        unit: "years",
        meant: "What this meant: 1942 comes 49 years after 1893. The marker sums that stretch as almost fifty years of schooling for Sheldon’s Black children.",
      },
      order(
        [
          {
            id: "open",
            year: "1893",
            label: "Sheldon Union Academy opens as a private school.",
            why: "The marker dates the opening to 1893 and says an independent board governed it until 1918.",
          },
          {
            id: "deed",
            year: "1918",
            label: "The board deeds the site to the county.",
            why: "The marker says the county then built a new public school here.",
          },
          {
            id: "grades",
            year: "After",
            label: "Sheldon School teaches grades 1–7.",
            why: "The marker gives those grades and does not date the first year of each grade.",
          },
          {
            id: "close",
            year: "1942",
            label: "The school closes in a county consolidation.",
            why: "The marker dates the closing to 1942.",
          },
        ],
        ["close", "open", "grades", "deed"],
      ),
      takeaway([
        "Community leaders opened Sheldon Union Academy in 1893 as a private school for rural Sheldon’s Black children.",
        "In 1918 the board turned the property over to the county. The public Sheldon School taught grades 1–7.",
        "It closed in 1942 when the county consolidated rural Black schools. From 1893 to 1942 is 49 years, the marker’s “almost fifty.”",
      ]),
    ],
  ),
  lesson(
    "07-54",
    "Fort Mitchel",
    "Fort Mitchel timeline",
    [cited("07-54", "Fort Mitchel", "front and back")],
    [
      {
        kind: "scene",
        id: "fort",
        kicker: "1862",
        title: "A lunette on Skull Creek",
        partLabel: "the fort",
        art: art(
          "mitchel-lunette.jpg",
          "Illustration of an open-backed earth fort. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1862",
            x: 40,
            y: 52,
            fact: "The U.S. Army built Fort Mitchel in 1862. It was a lunette: open at the rear, two faces meeting at a point, and two flanking sides. It was designed for five or six heavy guns.",
          },
          {
            id: "creek",
            label: "Why it stood here",
            x: 72,
            y: 48,
            fact: "It was placed to control Skull Creek and protect the Navy coaling station at Seabrook Landing, one mile northeast.",
          },
        ],
      },
      {
        kind: "scene",
        id: "creek",
        kicker: "1863",
        title: "A new name, then a quiet fort",
        partLabel: "the name",
        art: art(
          "mitchel-creek.jpg",
          "Illustration of the fort beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "name",
            label: "Two names",
            x: 32,
            y: 52,
            fact: "It was first named for its designer, Capt. Quincy Gillmore. In 1863 it was renamed for Maj. Gen. Ormsby Mitchel, who had briefly commanded on Hilton Head and died of yellow fever in October 1862.",
          },
          {
            id: "leave",
            label: "1864",
            x: 74,
            y: 55,
            fact: "Ironclad ships later in the war made the small battery ineffective. The garrison was sent elsewhere in 1864.",
          },
        ],
      },
      order(
        [
          {
            id: "built",
            year: "1862",
            label: "The Army builds the lunette and names it for Gillmore.",
            why: "The marker dates construction to 1862 and says it was first named for the designer.",
          },
          {
            id: "death",
            year: "1862",
            label: "Ormsby Mitchel dies of yellow fever in October.",
            why: "The marker says he had briefly commanded on the island and died that October.",
          },
          {
            id: "rename",
            year: "1863",
            label: "The fort is renamed for Mitchel.",
            why: "The marker dates the renaming to 1863.",
          },
          {
            id: "leave",
            year: "1864",
            label: "The garrison leaves. Ironclads have made the battery ineffective.",
            why: "The marker dates that redeployment to 1864.",
          },
        ],
        ["rename", "built", "leave", "death"],
      ),
      takeaway([
        "Fort Mitchel was a lunette of 1862, open at the rear, meant for five or six heavy guns on Skull Creek.",
        "It covered the coaling station at Seabrook Landing, a mile northeast. Capt. Quincy Gillmore designed it and first gave it his name.",
        "In 1863 it was renamed for Ormsby Mitchel, who had died of yellow fever in October 1862. The garrison left in 1864.",
      ]),
    ],
  ),
  lesson(
    "07-59",
    "The oyster factory",
    "Oyster factory timeline",
    [
      cited("07-59", "Lady’s Island Oyster Factory", "front and back"),
      span("“Approximately 3,500” is the marker’s figure for Sea Islanders employed after 1893. “25” is the later workforce it prints."),
    ],
    [
      {
        kind: "scene",
        id: "shed",
        kicker: "1883",
        title: "A creek named for a factory",
        partLabel: "the cannery",
        art: art(
          "oyster-shed.jpg",
          "Illustration of a cannery shed and work boats. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "open",
            label: "1883",
            x: 30,
            y: 52,
            fact: "The eastern oyster started Beaufort County’s commercial seafood industry. The first cannery on this site, the one Factory Creek is named for, began in 1883. Oysters were taken from September to May. Tomatoes and okra were canned in summer.",
          },
          {
            id: "jobs",
            label: "After 1893",
            x: 74,
            y: 55,
            fact: "After the hurricane of 1893 the oyster industry became the county’s largest employer, with jobs for approximately 3,500 Sea Islanders.",
          },
        ],
      },
      {
        kind: "scene",
        id: "boats",
        kicker: "1929",
        title: "The largest, then a closing",
        partLabel: "the decline",
        art: art(
          "oyster-boats.jpg",
          "Illustration of skiffs and baskets on a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "world",
            label: "1917 and 1929",
            x: 32,
            y: 58,
            fact: "L. P. Maggione bought the factory in 1917. By 1929 it was the largest producer of cove oysters in the world. In the 1950s it had over 300 employees.",
          },
          {
            id: "end",
            label: "1986",
            x: 74,
            y: 48,
            fact: "Migration to northern states and a die-off in the oyster beds shrank the workforce to 25. The factory closed in 1986.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "After 1893",
        title: "Workers, about",
        partLabel: "workers",
        value: 3500,
        unit: "Sea Islanders, about",
        meant: "What this meant: the marker says that after 1893 the industry gave jobs to approximately 3,500 Sea Islanders. Later it says the workforce shrank to 25.",
      },
      order(
        [
          {
            id: "open",
            year: "1883",
            label: "The first cannery opens. Factory Creek takes its name from it.",
            why: "The marker dates that factory to 1883.",
          },
          {
            id: "jobs",
            year: "1893",
            label: "After the hurricane, oysters are the county’s largest employer.",
            why: "The marker ties that change to the 1893 hurricane and says about 3,500 Sea Islanders had work.",
          },
          {
            id: "world",
            year: "1929",
            label: "It is the world’s largest producer of cove oysters.",
            why: "The marker dates that claim to 1929. L. P. Maggione bought the plant in 1917.",
          },
          {
            id: "close",
            year: "1986",
            label: "The factory closes. The workforce has shrunk to 25.",
            why: "The marker gives both the closing year and the figure 25.",
          },
        ],
        ["world", "open", "close", "jobs"],
      ),
      takeaway([
        "A cannery began here in 1883, and Factory Creek was named for it. Oysters ran from September to May. Summer was for tomatoes and okra.",
        "After the 1893 hurricane the industry was the county’s largest employer, at approximately 3,500 Sea Islanders. By 1929 this plant led the world in cove oysters.",
        "The beds died back and people moved north. The workforce fell to 25, and the factory closed in 1986.",
      ]),
    ],
  ),
  lesson(
    "07-61",
    "Mary Field School",
    "Mary Field timeline",
    [
      cited("07-61", "Mary Field School", "front and back"),
      span("“39 years” is 1969 minus 1930, the years the marker gives for Frances Jones teaching on Daufuskie."),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1872",
        title: "School in the church",
        partLabel: "the church years",
        art: art(
          "mary-church.jpg",
          "Illustration of a small wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "church",
            label: "1872 to 1934",
            x: 32,
            y: 52,
            fact: "After emancipation, education was a priority for African American families on Daufuskie. Adults and children attended school at First Union African Baptist Church from 1872 to 1934.",
          },
        ],
      },
      {
        kind: "scene",
        id: "school",
        kicker: "1934",
        title: "Two rooms, built by the island",
        partLabel: "the school",
        art: art(
          "mary-school.jpg",
          "Illustration of a two-room school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1930 to 1934",
            x: 32,
            y: 52,
            fact: "Church families bought land in 1930 and by 1933 had raised the money. Island workers built the school. The two-room Mary Field School opened in 1934 with grades 1–6.",
          },
          {
            id: "teachers",
            label: "The teachers",
            x: 74,
            y: 48,
            fact: "Frances Jones taught on the island from 1930 to 1969. Pat Conroy taught briefly in 1969–70. His novel The Water is Wide was based on that year. The building was renovated in 2009 for church use and as a community center.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1930–1969",
        title: "Years Frances Jones taught here",
        partLabel: "years",
        value: 39,
        unit: "years",
        meant: "What this meant: 1969 comes 39 years after 1930. Those are the years the marker gives for Frances Jones teaching on Daufuskie.",
      },
      order(
        [
          {
            id: "church",
            year: "1872",
            label: "School meets at First Union African Baptist.",
            why: "The marker dates those classes to 1872–1934.",
          },
          {
            id: "land",
            year: "1930",
            label: "Families buy land and, by 1933, raise the money.",
            why: "The marker dates the purchase to 1930 and the funds to 1933.",
          },
          {
            id: "open",
            year: "1934",
            label: "Island workers finish the two-room school. Grades 1–6 open.",
            why: "The marker dates the opening to 1934.",
          },
          {
            id: "conroy",
            year: "1969",
            label: "Pat Conroy teaches for a year. The novel follows.",
            why: "The marker dates his teaching to 1969–70 and names The Water is Wide.",
          },
        ],
        ["open", "church", "conroy", "land"],
      ),
      takeaway([
        "From 1872 to 1934, Daufuskie families held school at First Union African Baptist, for adults and children.",
        "They bought land in 1930, raised money by 1933, and island workers built the two-room Mary Field School, which opened in 1934 with grades 1–6.",
        "Frances Jones taught here from 1930 to 1969. Pat Conroy’s year, 1969–70, became The Water is Wide. The old school was renovated in 2009.",
      ]),
    ],
  ),
  lesson(
    "07-63",
    "Tidalholm",
    "Tidalholm timeline",
    [cited("07-63", "Tidalholm", "front and back")],
    [
      {
        kind: "scene",
        id: "cupola",
        kicker: "1853",
        title: "A town house with a cupola",
        partLabel: "the house",
        art: art(
          "tidal-cupola.jpg",
          "Illustration of an Italianate house with a cupola. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "About 1853",
            x: 32,
            y: 48,
            fact: "Edgar Fripp (1806–1860) commissioned the house, finished about 1853, as a town home for himself and his wife Eliza (1810–1861). It followed designs by Samuel Sloan, in the Italianate style, with a central cupola. Fripp owned Seaside Plantation on St. Helena and planted sea-island cotton.",
          },
          {
            id: "hospital",
            label: "The war",
            x: 74,
            y: 55,
            fact: "During the Civil War the house was U.S. Hospital No. 7, for officers.",
          },
        ],
      },
      {
        kind: "scene",
        id: "piazza",
        kicker: "1893",
        title: "After the hurricane",
        partLabel: "the later house",
        art: art(
          "tidal-piazza.jpg",
          "Illustration of the house with a second-floor porch. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "storm",
            label: "1893",
            x: 32,
            y: 48,
            fact: "The hurricane of 1893 damaged the house badly. The cupola and gables were built into the roof, and a second-floor piazza in the Beaufort style was added.",
          },
          {
            id: "name",
            label: "The name and the films",
            x: 74,
            y: 42,
            fact: "In the 1920s it was named Tidalholm, which the marker says means home by the river, and it was a seasonal guest house. It was a backdrop for The Great Santini in 1979 and The Big Chill in 1983.",
          },
        ],
      },
      order(
        [
          {
            id: "built",
            year: "1853",
            label: "The Fripp town house is finished, with a cupola.",
            why: "The marker dates completion to about 1853 and names Samuel Sloan’s Italianate designs.",
          },
          {
            id: "hospital",
            year: "War",
            label: "It becomes U.S. Hospital No. 7 for officers.",
            why: "The marker places that use in the Civil War and does not print a more exact year.",
          },
          {
            id: "storm",
            year: "1893",
            label: "The hurricane brings the cupola into the roof.",
            why: "The marker says the 1893 storm led to that change and to the second-floor piazza.",
          },
          {
            id: "name",
            year: "1920s",
            label: "The house is named Tidalholm, home by the river.",
            why: "The marker dates the name to the 1920s and gives that meaning.",
          },
        ],
        ["storm", "built", "name", "hospital"],
      ),
      takeaway([
        "Edgar and Eliza Fripp’s town house was finished about 1853 from Samuel Sloan’s Italianate designs, cupola and all. He planted cotton at Seaside on St. Helena.",
        "In the Civil War it was U.S. Hospital No. 7 for officers. The 1893 hurricane folded the cupola into the roof and a Beaufort-style upper piazza was added.",
        "Named Tidalholm in the 1920s, it later stood in for The Great Santini (1979) and The Big Chill (1983).",
      ]),
    ],
  ),
  lesson(
    "07-66",
    "Blue Channel",
    "Blue Channel timeline",
    [
      cited("07-66", "Blue Channel Corporation", "front and back"),
      span("“39 years” is 1978 minus 1939, from the opening on this site until canning moved to the industrial park."),
    ],
    [
      {
        kind: "scene",
        id: "shed",
        kicker: "1939",
        title: "A cannery for blue crab",
        partLabel: "the factory",
        art: art(
          "blue-cannery.jpg",
          "Illustration of a cannery shed and boats. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "open",
            label: "1939",
            x: 30,
            y: 52,
            fact: "Blue Channel opened a crab cannery here in 1939. Inventor Sterling Harris and food scientist Carl Fellers patented a process that took the blue color out of canned Atlantic blue crab without changing the flavor.",
          },
          {
            id: "move",
            label: "Before Port Royal",
            x: 74,
            y: 55,
            fact: "The company kept its main offices in Beaufort, worked briefly on Lady’s Island, then moved here and expanded.",
          },
        ],
      },
      {
        kind: "scene",
        id: "pots",
        kicker: "1978",
        title: "Caught and picked here",
        partLabel: "the work",
        art: art(
          "blue-pots.jpg",
          "Illustration of crab pots on a dock. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "people",
            label: "Who did the work",
            x: 32,
            y: 58,
            fact: "For years Blue Channel was the nation’s top producer of Atlantic blue crab and one of the largest crab packers in the country. African American men and women of the local Gullah community, who had long crabbed and fished the Sea Islands, caught and picked most of the crabs.",
          },
          {
            id: "end",
            label: "1978 and 1990",
            x: 74,
            y: 48,
            fact: "Canning moved to the Beaufort Industrial Park in 1978. The company closed in 1990.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1939–1978",
        title: "Years of canning on this site",
        partLabel: "years",
        value: 39,
        unit: "years",
        meant: "What this meant: 1978 comes 39 years after 1939. Those are the years the marker gives from the opening here until canning left for the industrial park. The company itself closed in 1990.",
      },
      order(
        [
          {
            id: "patent",
            year: "First",
            label: "Harris and Fellers patent a way to keep the flavor and lose the blue color.",
            why: "The marker names them and the patent, and does not date the patent itself.",
          },
          {
            id: "open",
            year: "1939",
            label: "The cannery opens on this Port Royal site.",
            why: "The marker dates the opening here to 1939, after a brief stop on Lady’s Island.",
          },
          {
            id: "top",
            year: "Then",
            label: "It becomes the country’s top producer of Atlantic blue crab.",
            why: "The marker says that, and that Gullah men and women caught and picked most of the crabs. It does not date the peak year.",
          },
          {
            id: "move",
            year: "1978",
            label: "Canning moves to the industrial park. The company closes in 1990.",
            why: "The marker dates the move to 1978 and the closing to 1990.",
          },
        ],
        ["top", "patent", "move", "open"],
      ),
      takeaway([
        "Sterling Harris and Carl Fellers patented a way to can Atlantic blue crab without the blue color and without changing the taste.",
        "The cannery opened here in 1939. Gullah men and women who already worked the Sea Islands caught and picked most of the crabs, and the company became the nation’s top producer.",
        "Canning left for the industrial park in 1978. Blue Channel closed in 1990.",
      ]),
    ],
  ),
];
