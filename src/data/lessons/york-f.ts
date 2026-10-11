import type {
  LessonArt,
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** City of York. Facts are from that marker only.
 * A year-span is only the difference of two years the marker prints. */

const INTRO =
  "Move through the years on this marker. Tap the picture. Every fact is from the inscription.";

function art(file: string, label: string): LessonArt {
  return { src: `/images/lessons/${file}`, label };
}

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

export const yorkLessonsF: MarkerLesson[] = [
  lesson(
    "46-20",
    "From Fergus's Cross Roads to York",
    "Town of York timeline",
    [cited("46-20", "Town of Yorkville", "front and back")],
    [
      {
        kind: "scene",
        id: "town",
        kicker: "1826",
        title: "Eight stores and five taverns",
        partLabel: "the early town",
        art: art(
          "yorktown-street.jpg",
          "Illustration of a small piedmont county seat. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "start",
            label: "The county seat",
            x: 30,
            y: 50,
            fact: "This place was Fergus's Cross Roads, then Yorkville. The county seat was established in 1785 on land granted to John Miller in 1767.",
          },
          {
            id: "mills",
            label: "Robert Mills, 1826",
            x: 74,
            y: 48,
            fact: "Robert Mills wrote that in 1826 the town had eight stores, five taverns, a male academy, a female academy, a post office, a printing office, and about eighty houses.",
          },
        ],
      },
      {
        kind: "scene",
        id: "later",
        kicker: "1852",
        title: "A railroad, then a new name",
        partLabel: "the later town",
        art: art(
          "yorktown-rail.jpg",
          "Illustration of a railroad beside a small town. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rail",
            label: "1852",
            x: 32,
            y: 55,
            fact: "The railroad arrived in 1852 and brought prosperity, visible in fine homes, public buildings, and schools.",
          },
          {
            id: "law",
            label: "1871",
            x: 74,
            y: 46,
            fact: "During Reconstruction, turmoil here brought federal troops under Col. Lewis Merrill. Martial law was declared in 1871, and Merrill was stationed at Rose's Hotel nearby. The farm economy suffered. Reconstruction ended in 1876, and recovery came gradually. Textiles arrived in 1896. The town was renamed York in 1915.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1826",
        title: "Stores in the town",
        partLabel: "8 stores",
        value: 8,
        unit: "stores",
        meant: "What this meant: Robert Mills, quoted on the marker, counted eight stores and five taverns in 1826, and about eighty houses. That last count is his \"about.\"",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("yorktown-street.jpg", "Illustration of early Yorkville. Not a historical photograph."),
        nowArt: art("yorktown-today.jpg", "Illustration of a marker on a town street. Not a photograph of the site today."),
        thenCaption: "Illustration of the county seat the marker says was established in 1785. Not a historical photograph.",
        nowCaption: "Illustration of a marker in the town renamed York in 1915. Not a photograph.",
      },
      order(
        [
          { id: "grant", year: "1767", label: "The land is granted to John Miller.", why: "The marker dates that grant to 1767." },
          { id: "seat", year: "1785", label: "The county seat is established.", why: "The marker dates the county seat to 1785." },
          { id: "rail", year: "1852", label: "The railroad arrives.", why: "The marker dates the railroad to 1852." },
          { id: "name", year: "1915", label: "Yorkville is renamed York.", why: "The marker dates the new name to 1915." },
        ],
        ["name", "grant", "rail", "seat"],
      ),
      takeaway([
        "The county seat was established in 1785 on land granted to John Miller in 1767. It was Fergus's Cross Roads, then Yorkville.",
        "In 1826 Robert Mills counted eight stores, five taverns, two academies, and about eighty houses. The railroad came in 1852.",
        "Martial law was declared in 1871. Textiles arrived in 1896, and the town was renamed York in 1915.",
      ]),
    ],
  ),
  lesson(
    "46-64",
    "Four courthouses on one site",
    "York County courthouse timeline",
    [cited("46-64", "York County Courthouses", "front and back")],
    [
      {
        kind: "scene",
        id: "early",
        kicker: "1786",
        title: "Logs, then brick",
        partLabel: "the first courthouses",
        art: art("court-log.jpg", "Illustration of a log courthouse. Not a historical photograph."),
        hotspots: [
          {
            id: "log",
            label: "1786",
            x: 32,
            y: 50,
            fact: "Four York County courthouses have stood on this site. The first was built of squared logs in 1786. In 1799 a small brick building replaced it.",
          },
          {
            id: "mills",
            label: "Robert Mills, 1825",
            x: 74,
            y: 46,
            fact: "Robert Mills designed a third courthouse, completed in 1825, of local granite and red brick, with a large portico and Doric columns. An accidental fire in 1892 badly damaged the second story. The building was remodeled after the fire.",
          },
        ],
      },
      {
        kind: "scene",
        id: "new",
        kicker: "1915",
        title: "The yellow-brick courthouse",
        partLabel: "the 1915 courthouse",
        art: art("court-ionic.jpg", "Illustration of a classical courthouse with a columned portico. Not a historical photograph."),
        hotspots: [
          {
            id: "edwards",
            label: "William Augustus Edwards",
            x: 36,
            y: 42,
            fact: "A Classical courthouse, completed in 1915, replaced the Mills building. William Augustus Edwards designed it. It was one of nine county courthouses he designed in South Carolina: a monumental two-story building of yellow brick, with a colossal Ionic tetrastyle portico.",
          },
          {
            id: "later",
            label: "Later years",
            x: 74,
            y: 58,
            fact: "It was listed in the National Register in 1981 and renovated in 2016.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "This site",
        title: "Courthouses on this ground",
        partLabel: "4 courthouses",
        value: 4,
        unit: "courthouses",
        meant: "What this meant: the marker says four courthouses have stood here, from the log building of 1786 to the 1915 courthouse. Edwards designed nine county courthouses in the state.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("court-log.jpg", "Illustration of the 1786 log courthouse. Not a historical photograph."),
        nowArt: art("court-today.jpg", "Illustration of a columned courthouse and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of a log courthouse, for the first building the marker dates to 1786. Not a historical photograph.",
        nowCaption: "Illustration of a courthouse and a marker, for the 1915 building. Not a photograph.",
      },
      order(
        [
          { id: "log", year: "1786", label: "A courthouse of squared logs is built.", why: "The marker dates the first courthouse to 1786." },
          { id: "brick", year: "1799", label: "A small brick courthouse replaces it.", why: "The marker dates that building to 1799." },
          { id: "mills", year: "1825", label: "Robert Mills's courthouse is completed.", why: "The marker dates that courthouse to 1825." },
          { id: "edwards", year: "1915", label: "The Edwards courthouse is completed.", why: "The marker dates that courthouse to 1915." },
        ],
        ["edwards", "log", "mills", "brick"],
      ),
      takeaway([
        "Four courthouses have stood here: squared logs in 1786, a small brick building in 1799, and Robert Mills's granite-and-brick courthouse in 1825.",
        "An accidental fire in 1892 damaged the second story of the Mills building. It was remodeled, then replaced.",
        "William Augustus Edwards's yellow-brick courthouse was completed in 1915, one of nine he designed in the state.",
      ]),
    ],
  ),
  lesson(
    "46-52",
    "A school on this ground for 133 years",
    "Yorkville Female Institute timeline",
    [
      cited("46-52", "Yorkville Female Institute", "front and back"),
      span("\"133 years\" is 1987 minus 1854, the year the marker says schools here closed and the year they opened."),
    ],
    [
      {
        kind: "scene",
        id: "brick",
        kicker: "1854",
        title: "A three-story brick school",
        partLabel: "the institute",
        art: art("mc-brick.jpg", "Illustration of a three-story brick school. Not a historical photograph."),
        hotspots: [
          {
            id: "open",
            label: "1852-1854",
            x: 32,
            y: 46,
            fact: "Yorkville Female Institute, also called Yorkville Female College, was the first school here. Private schools, then public schools, operated from 1854 to 1987. The institute was founded in 1852, opened in 1854, and built a three-story brick school.",
          },
          {
            id: "war",
            label: "The war years",
            x: 74,
            y: 55,
            fact: "During the Civil War it housed refugees for a few years, and classes met on and off the site. Yorkville High School, a private school for boys and girls, operated here from 1882 to 1888.",
          },
        ],
      },
      {
        kind: "scene",
        id: "public",
        kicker: "1902",
        title: "A public school, then a community center",
        partLabel: "the public school",
        art: art("mc-wing.jpg", "Illustration of a brick school with a later wing. Not a historical photograph."),
        hotspots: [
          {
            id: "graded",
            label: "The graded school",
            x: 30,
            y: 50,
            fact: "Yorkville Graded School, a public school, used the old building from 1889 to 1900. It burned. A new brick school was built in 1902, with an east wing and a theater added in 1922. It became an elementary school after a new high school was built in 1951.",
          },
          {
            id: "name",
            label: "McCelvey",
            x: 74,
            y: 48,
            fact: "In 1973 it was renamed for George C. McCelvey (1888-1973), principal from 1912 to 1948. The school closed in 1987. Since then the McCelvey Center has been used by the community and by the Culture and Heritage Museums of York County.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1854-1987",
        title: "Years schools stood here",
        partLabel: "133 years",
        value: 133,
        unit: "years",
        meant: "What this meant: 1987 comes 133 years after 1854. That is the stretch the marker gives for schools on this ground, from the institute's opening to the closing.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("mc-brick.jpg", "Illustration of the 1854 school. Not a historical photograph."),
        nowArt: art("mc-today.jpg", "Illustration of a brick school and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of a three-story school, for the institute that opened in 1854. Not a historical photograph.",
        nowCaption: "Illustration of a school building and a marker. The marker says the school closed in 1987 and became the McCelvey Center. Not a photograph.",
      },
      order(
        [
          { id: "open", year: "1854", label: "Yorkville Female Institute opens.", why: "The marker dates the opening to 1854. It was founded in 1852." },
          { id: "high", year: "1882", label: "A private high school operates here.", why: "The marker dates Yorkville High School to 1882-1888." },
          { id: "new", year: "1902", label: "A new brick public school is built.", why: "The marker dates that school to 1902, after the graded school burned." },
          { id: "close", year: "1987", label: "The school closes.", why: "The marker dates the closing to 1987." },
        ],
        ["close", "open", "new", "high"],
      ),
      takeaway([
        "Yorkville Female Institute opened in 1854 in a three-story brick school. Schools, private and then public, stayed on this ground until 1987.",
        "The graded school burned. A new brick school of 1902 gained a wing and a theater in 1922, then became an elementary school in 1951.",
        "It was renamed in 1973 for principal George C. McCelvey. After 1987 the building became the McCelvey Center.",
      ]),
    ],
  ),
  lesson(
    "46-73",
    "Sadler's store, then Crawford's",
    "Sadler Store timeline",
    [
      cited("46-73", "Sadler Store", "front and back"),
      span("\"70 years\" is 1997 minus 1927, the year the store closed and the year it was built."),
    ],
    [
      {
        kind: "scene",
        id: "store",
        kicker: "1927",
        title: "A store and a house, built together",
        partLabel: "the store",
        art: art("sadler-store.jpg", "Illustration of a small country store and a one-story house. Not a historical photograph."),
        hotspots: [
          {
            id: "open",
            label: "William Sadler",
            x: 32,
            y: 50,
            fact: "This brick-veneered wood-frame building was built in 1927 as a country store opened by William Sadler (1865-1930). He was an African American businessman who had managed farmland and another store in McConnells before opening this one on the outskirts of York, in a neighborhood that was mostly Black.",
          },
          {
            id: "house",
            label: "The house",
            x: 74,
            y: 55,
            fact: "The one-story house next door was built at the same time and was Sadler's second family home.",
          },
        ],
      },
      {
        kind: "scene",
        id: "counter",
        kicker: "Until 1997",
        title: "A lunch counter and a gathering place",
        partLabel: "Crawford's",
        art: art("sadler-counter.jpg", "Illustration of a store counter, empty of people. Not a historical photograph."),
        hotspots: [
          {
            id: "mamie",
            label: "Mamie Crawford",
            x: 34,
            y: 52,
            fact: "After Sadler died, his daughter Mary \"Mamie\" Sadler Crawford (1899-1992) took over and managed the store until the 1960s. She renamed it Crawford's and added a lunch counter. It was one of York's only Black-owned businesses, and a gathering place for local African Americans and for people traveling between Charlotte and Columbia.",
          },
          {
            id: "mae",
            label: "Until 1997",
            x: 74,
            y: 46,
            fact: "Her daughter, Mae Crawford Williams, kept the store open until 1997. It was listed in the National Register in 2017.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1927-1997",
        title: "Years from the opening to the closing",
        partLabel: "70 years",
        value: 70,
        unit: "years",
        meant: "What this meant: 1997 comes 70 years after 1927. That is the stretch from the year the store was built to the year it closed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("sadler-store.jpg", "Illustration of the 1927 store. Not a historical photograph."),
        nowArt: art("sadler-today.jpg", "Illustration of a store building and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of the store and house the marker says were built in 1927. Not a historical photograph.",
        nowCaption: "Illustration of a store and a marker. Not a photograph of the site today.",
      },
      order(
        [
          { id: "open", year: "1927", label: "William Sadler opens the store.", why: "The marker dates the building to 1927." },
          { id: "death", year: "1930", label: "Sadler dies, and Mamie Crawford takes over.", why: "The marker gives his dates as 1865-1930 and says his daughter took over upon his death." },
          { id: "mamie", year: "1960s", label: "Mamie manages the store until the 1960s.", why: "The marker says she managed it until the 1960s and renamed it Crawford's." },
          { id: "close", year: "1997", label: "Mae Crawford Williams closes the store.", why: "The marker says she kept it open until 1997." },
        ],
        ["close", "open", "mamie", "death"],
      ),
      takeaway([
        "William Sadler, an African American businessman, opened this store in 1927 and built the house next door at the same time.",
        "After he died, his daughter Mamie renamed it Crawford's, added a lunch counter, and ran it until the 1960s.",
        "It was one of York's only Black-owned businesses. Her daughter Mae kept it open until 1997.",
      ]),
    ],
  ),
  lesson(
    "46-66",
    "A funeral home in the family for 100 years",
    "Wright Funeral Home timeline",
    [cited("46-66", "Wright Funeral Home", "front and back")],
    [
      {
        kind: "scene",
        id: "shop",
        kicker: "1914",
        title: "Caskets upstairs",
        partLabel: "the first building",
        art: art("wright-shop.jpg", "Illustration of a two-story wooden building. Not a historical photograph."),
        hotspots: [
          {
            id: "start",
            label: "Isaac Wright",
            x: 32,
            y: 42,
            fact: "Isaac \"Bub\" Wright Jr. was a master craftsman who began making caskets in the early 1900s. In 1914 he opened Wright Funeral Home here. The two-story building was a funeral parlor and chapel, with an embalming room in the rear. The second floor was the casket shop. A pressing club, a dry cleaner, later worked at the rear.",
          },
          {
            id: "fannie",
            label: "Fannie Wright",
            x: 74,
            y: 55,
            fact: "Isaac Wright died in 1918. His widow, Fannie C. Wright, kept the business going.",
          },
        ],
      },
      {
        kind: "scene",
        id: "later",
        kicker: "1985",
        title: "A new building, and a museum",
        partLabel: "the later buildings",
        art: art("wright-brick.jpg", "Illustration of a brick funeral home beside an older building. Not a historical photograph."),
        hotspots: [
          {
            id: "family",
            label: "The family business",
            x: 30,
            y: 50,
            fact: "Wright Funeral Home was among the earliest Black-owned businesses in York and remains family-owned after 100 years. It served the African American community during segregation. The family also ran a grocery, replaced by a modern brick funeral home in 1985.",
          },
          {
            id: "museum",
            label: "1998",
            x: 74,
            y: 48,
            fact: "In 1998 the original funeral-home building became the Alice Wright Smith Historical Museum.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The family",
        title: "Years the marker gives the family business",
        partLabel: "100 years",
        value: 100,
        unit: "years",
        meant: "What this meant: the marker says the funeral home remains family-owned after 100 years. It opened in 1914.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("wright-shop.jpg", "Illustration of the 1914 building. Not a historical photograph."),
        nowArt: art("wright-today.jpg", "Illustration of an older building, a brick funeral home, and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of the two-story building the marker says opened as a funeral home in 1914. Not a historical photograph.",
        nowCaption: "Illustration of two buildings and a marker. The marker says a brick funeral home replaced the grocery in 1985, and the original building became a museum in 1998. Not a photograph.",
      },
      order(
        [
          { id: "caskets", year: "Early 1900s", label: "Isaac Wright begins making caskets.", why: "The marker places that work in the early 1900s." },
          { id: "open", year: "1914", label: "Wright Funeral Home opens here.", why: "The marker dates the funeral home to 1914." },
          { id: "fannie", year: "1918", label: "Isaac dies, and Fannie keeps the business.", why: "The marker dates his death to 1918." },
          { id: "museum", year: "1998", label: "The original building becomes a museum.", why: "The marker dates that change to 1998." },
        ],
        ["museum", "caskets", "fannie", "open"],
      ),
      takeaway([
        "Isaac Wright opened Wright Funeral Home here in 1914. The second floor was his casket shop, and an embalming room was in the rear.",
        "He died in 1918. His widow, Fannie, kept the business, one of the earliest Black-owned businesses in York.",
        "The marker says it is still family-owned after 100 years. The original building became a museum in 1998.",
      ]),
    ],
  ),
  lesson(
    "46-88",
    "Jefferson High School",
    "Jefferson High School timeline",
    [cited("46-88", "Jefferson High School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "About 1924",
        title: "A six-teacher school",
        partLabel: "the school",
        art: art("jefferson-school.jpg", "Illustration of a brick-veneered school. Not a historical photograph."),
        hotspots: [
          {
            id: "built",
            label: "About 1924",
            x: 32,
            y: 48,
            fact: "Jefferson High School was built here about 1924, with support from the Julius Rosenwald Foundation. It served African American students from York and nearby. The brick-veneered wood-frame building followed a six-teacher plan and was also called York County Training School. It taught elementary and high-school students and replaced a graded school established in 1903 on West Jefferson Street.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1970",
        title: "Two campuses, then one middle school",
        partLabel: "the later years",
        art: art("jefferson-yard.jpg", "Illustration of a school campus of three buildings. Not a historical photograph."),
        hotspots: [
          {
            id: "size",
            label: "The late 1940s",
            x: 30,
            y: 52,
            fact: "By the late 1940s the school had three buildings and served around 300 students in grades 1 through 12. Elementary students moved to a school built across the street in 1955. Additions and renovations in 1956, and that new campus, were paid for by the state equalization program.",
          },
          {
            id: "close",
            label: "1970",
            x: 74,
            y: 46,
            fact: "The mascot was a Blue Devil. The high school closed in 1970, when the two campuses became an integrated middle school.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "About 1924",
        title: "Teachers in the plan",
        partLabel: "6 teachers",
        value: 6,
        unit: "teachers",
        meant: "What this meant: the marker says the building followed a six-teacher plan. By the late 1940s it served around 300 students. That student count is the marker's \"around.\"",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("jefferson-school.jpg", "Illustration of the school of about 1924. Not a historical photograph."),
        nowArt: art("jefferson-today.jpg", "Illustration of a school and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of the school the marker says was built about 1924. Not a historical photograph.",
        nowCaption: "Illustration of a school and a marker. The marker says the high school closed in 1970. Not a photograph.",
      },
      order(
        [
          { id: "graded", year: "1903", label: "A graded school is established on West Jefferson Street.", why: "The marker dates that school to 1903." },
          { id: "built", year: "About 1924", label: "Jefferson High School is built here.", why: "The marker dates the building to about 1924." },
          { id: "elem", year: "1955", label: "Elementary students move across the street.", why: "The marker dates that school to 1955." },
          { id: "close", year: "1970", label: "The high school closes.", why: "The marker dates the closing to 1970, when the campuses became an integrated middle school." },
        ],
        ["close", "graded", "elem", "built"],
      ),
      takeaway([
        "Jefferson High School was built about 1924 with Rosenwald support, for African American students from York and nearby. It followed a six-teacher plan.",
        "It replaced a graded school from 1903. By the late 1940s, three buildings served around 300 students in grades 1 through 12.",
        "Elementary students moved across the street in 1955. The high school closed in 1970, and the two campuses became an integrated middle school.",
      ]),
    ],
  ),
  lesson(
    "46-51",
    "Winter quarters for two circuses",
    "York circus timeline",
    [cited("46-51", "Barnett Brothers Circus", "front and back")],
    [
      {
        kind: "scene",
        id: "trucks",
        kicker: "1929",
        title: "A circus that traveled by truck",
        partLabel: "the Barnett circus",
        art: art("circus-trucks.jpg", "Illustration of circus trucks in a winter field. Not a historical photograph."),
        hotspots: [
          {
            id: "barnett",
            label: "1929-1945",
            x: 32,
            y: 52,
            fact: "This site was the winter quarters of the Barnett Brothers Circus, briefly called the Wallace Brothers Circus, from 1929 through 1945. Ray W. Rogers (1889-1946) founded it. It was one of the first circuses to travel by truck instead of by train, which helped it last through the Depression and World War II.",
          },
          {
            id: "tour",
            label: "The year's tour",
            x: 74,
            y: 46,
            fact: "Each March or April the tour began with a performance in York, and the circus came back in November. A highlight of the York Christmas parade was Santa Claus riding an elephant.",
          },
        ],
      },
      {
        kind: "scene",
        id: "tent",
        kicker: "1929",
        title: "The Bennett children",
        partLabel: "the Bennett circus",
        art: art("circus-tent.jpg", "Illustration of a circus tent and a few animals. Not a historical photograph."),
        hotspots: [
          {
            id: "bennett",
            label: "A second circus",
            x: 36,
            y: 48,
            fact: "In 1929 five sons of C. P. and Olive Bennett, who lived nearby, started their own circus. Ray Rogers encouraged them and loaned them his big top and a few animals. All six Bennett sons and two daughters took part, along with other local children. They performed in York, Rock Hill, Clover, and Sharon through 1938.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1929",
        title: "Bennett sons in the show",
        partLabel: "6 sons",
        value: 6,
        unit: "sons",
        meant: "What this meant: the marker says all six Bennett sons and two daughters took part. Five of the sons started the circus in 1929, with a tent and animals borrowed from Ray Rogers.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("circus-tent.jpg", "Illustration of a circus tent. Not a historical photograph."),
        nowArt: art("circus-today.jpg", "Illustration of a marker on an open lot. Not a photograph of the site today."),
        thenCaption: "Illustration of winter quarters, for the circuses the marker places here from 1929. Not a historical photograph.",
        nowCaption: "Illustration of a marker. The marker says the Barnett circus used this site through 1945. Not a photograph.",
      },
      order(
        [
          { id: "start", year: "1929", label: "Both circuses begin, and Barnett winters here.", why: "The marker dates both the Barnett winter quarters and the Bennett circus to 1929." },
          { id: "bennett", year: "1938", label: "The Bennett circus gives its last performances.", why: "The marker says the Bennett circus performed through 1938." },
          { id: "end", year: "1945", label: "Barnett's last winter here ends.", why: "The marker dates the Barnett winter quarters to 1929 through 1945." },
        ],
        ["end", "start", "bennett"],
      ),
      takeaway([
        "The Barnett Brothers Circus, founded by Ray W. Rogers, wintered here from 1929 through 1945. It was one of the first to travel by truck.",
        "Each tour started in York in March or April. Santa Claus rode an elephant in the Christmas parade.",
        "Five Bennett sons started a second circus in 1929 with Rogers's tent and animals. All six sons and two daughters performed through 1938.",
      ]),
    ],
  ),
  lesson(
    "46-29",
    "The first director of the National Gallery",
    "David E. Finley timeline",
    [
      cited("46-29", "David E. Finley Birthplace", "front and back"),
      span("\"18 years\" is 1956 minus 1938, the year Finley's directorship ended and the year it began."),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1890",
        title: "Born in this house",
        partLabel: "the house",
        art: art("finley-house.jpg", "Illustration of a late-1800s house. Not a historical photograph."),
        hotspots: [
          {
            id: "born",
            label: "1890",
            x: 34,
            y: 48,
            fact: "David Edward Finley, Jr. (1890-1977), first director of the National Gallery of Art, was born in this house. He moved to Washington as a child when his father was elected to Congress. He studied at the University of South Carolina and at George Washington University Law School, practiced law, served in World War I, and then worked for Treasury Secretary Andrew W. Mellon.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gallery",
        kicker: "1938",
        title: "A gallery built around one collection",
        partLabel: "the gallery",
        art: art("finley-gallery.jpg", "Illustration of a classical museum building. Not a historical photograph."),
        hotspots: [
          {
            id: "mellon",
            label: "The plan",
            x: 30,
            y: 46,
            fact: "Finley and Mellon worked for years to establish a national art gallery, with Mellon's collection as its nucleus. Mellon died in 1937, just as the project began.",
          },
          {
            id: "director",
            label: "Director",
            x: 74,
            y: 52,
            fact: "Finley directed the construction of the National Gallery of Art and was its director from 1938 to 1956. The marker says he built it into a treasure trove of art. He was also chairman of the National Trust for Historic Preservation from 1950 to 1962.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1938-1956",
        title: "Years as director",
        partLabel: "18 years",
        value: 18,
        unit: "years",
        meant: "What this meant: 1956 comes 18 years after 1938. That is the stretch the marker gives for Finley's years as director of the National Gallery of Art.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("finley-house.jpg", "Illustration of the birthplace. Not a historical photograph."),
        nowArt: art("finley-today.jpg", "Illustration of a house and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of the house where the marker says Finley was born in 1890. Not a historical photograph.",
        nowCaption: "Illustration of a house and a marker. Not a photograph of the site today.",
      },
      order(
        [
          { id: "born", year: "1890", label: "David Edward Finley, Jr. is born in this house.", why: "The marker dates his birth to 1890." },
          { id: "mellon", year: "1937", label: "Andrew Mellon dies as the gallery project begins.", why: "The marker dates Mellon's death to 1937." },
          { id: "director", year: "1938", label: "Finley becomes director of the National Gallery.", why: "The marker dates his directorship to 1938-1956." },
          { id: "end", year: "1956", label: "His directorship ends.", why: "The marker says he was director until 1956." },
        ],
        ["end", "born", "director", "mellon"],
      ),
      takeaway([
        "David Edward Finley, Jr., first director of the National Gallery of Art, was born in this house in 1890.",
        "He and Andrew Mellon planned a national gallery around Mellon's collection. Mellon died in 1937, just as the work began.",
        "Finley directed the building and led the gallery from 1938 to 1956. He chaired the National Trust from 1950 to 1962.",
      ]),
    ],
  ),
  lesson(
    "46-17",
    "King's Mountain Military Academy",
    "King's Mountain Military Academy timeline",
    [cited("46-17", "King's Mountain Military Academy Site", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1855",
        title: "Two Citadel graduates open a school",
        partLabel: "the academy",
        art: art("academy-school.jpg", "Illustration of a 1850s school building. Not a historical photograph."),
        hotspots: [
          {
            id: "found",
            label: "1855",
            x: 32,
            y: 48,
            fact: "Micah Jenkins and Asbury Coward, graduates of The Citadel in Charleston, founded this Yorkville school in 1855. It closed during the Civil War. Coward reopened it in 1866. He later became head of the South Carolina Military Academy.",
          },
          {
            id: "end",
            label: "Shortly before 1909",
            x: 74,
            y: 55,
            fact: "The school closed for good shortly before 1909, when the property was sold to the Episcopal Church Home.",
          },
        ],
      },
      {
        kind: "scene",
        id: "jenkins",
        kicker: "1854",
        title: "Micah Jenkins",
        partLabel: "Micah Jenkins",
        art: art("academy-yard.jpg", "Illustration of a school yard, empty of people. Not a historical photograph."),
        hotspots: [
          {
            id: "life",
            label: "His years",
            x: 34,
            y: 52,
            fact: "Micah Jenkins was born in 1835 on Edisto Island and graduated from The Citadel with first honors in 1854. He left King's Mountain Military School for the Confederate army, became known as a brave leader, fought in many significant battles, and became a brigadier general in 1862. He was killed at the Battle of the Wilderness, in Virginia, in 1864.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("academy-school.jpg", "Illustration of the 1855 school. Not a historical photograph."),
        nowArt: art("academy-today.jpg", "Illustration of a marker where the school stood. Not a photograph of the site today."),
        thenCaption: "Illustration of the school Jenkins and Coward founded in 1855. Not a historical photograph.",
        nowCaption: "Illustration of a marker. The marker says the school closed shortly before 1909. Not a photograph.",
      },
      order(
        [
          { id: "grad", year: "1854", label: "Micah Jenkins graduates from The Citadel.", why: "The marker dates that graduation to 1854." },
          { id: "found", year: "1855", label: "Jenkins and Coward found the academy.", why: "The marker dates the founding to 1855." },
          { id: "reopen", year: "1866", label: "Coward reopens the school.", why: "The marker dates the reopening to 1866, after it closed during the Civil War." },
          { id: "sold", year: "Shortly before 1909", label: "The property is sold to the Episcopal Church Home.", why: "The marker says the school had closed permanently shortly before that 1909 sale." },
        ],
        ["sold", "grad", "reopen", "found"],
      ),
      takeaway([
        "Micah Jenkins and Asbury Coward, both Citadel graduates, founded King's Mountain Military Academy in Yorkville in 1855.",
        "It closed during the Civil War and reopened in 1866 under Coward, who later led the South Carolina Military Academy.",
        "Jenkins, first in the Citadel class of 1854, became a Confederate brigadier general in 1862 and was killed at the Wilderness in 1864. The school closed shortly before 1909.",
      ]),
    ],
  ),
  lesson(
    "46-11",
    "A night in the Bratton house",
    "Bratton house timeline",
    [cited("46-11", "Bratton House Site", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "Before 1830",
        title: "A lawyer's house",
        partLabel: "the house",
        art: art("bratton-house.jpg", "Illustration of an early-1800s house. Not a historical photograph."),
        hotspots: [
          {
            id: "clendinen",
            label: "Robert Clendinen",
            x: 32,
            y: 48,
            fact: "Robert Clendinen, a Yorkville lawyer and a South Carolina senator from York District from 1816 to 1830, bought this land in 1813. He built the house before his death in 1830.",
          },
          {
            id: "bratton",
            label: "Dr. Bratton",
            x: 74,
            y: 55,
            fact: "Dr. James Rufus Bratton, a surgeon in the Confederate army, acquired the house in 1847. It was torn down in 1956.",
          },
        ],
      },
      {
        kind: "scene",
        id: "night",
        kicker: "1865",
        title: "April 27, 1865",
        partLabel: "the night of April 27",
        art: art("bratton-night.jpg", "Illustration of a dark house and a waiting carriage. Not a historical photograph."),
        hotspots: [
          {
            id: "davis",
            label: "Jefferson Davis",
            x: 36,
            y: 50,
            fact: "Jefferson Davis, president of the Confederacy, spent the night of April 27, 1865, in Dr. Bratton's house on this site. In danger of capture by federal troops, he was trying to reach some remnant of the Confederate army in the South or the West, hoping to find protection and continue the war.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("bratton-house.jpg", "Illustration of the house. Not a historical photograph."),
        nowArt: art("bratton-today.jpg", "Illustration of a marker, the house gone. Not a photograph of the site today."),
        thenCaption: "Illustration of the house Clendinen built before 1830. Not a historical photograph.",
        nowCaption: "Illustration of a marker. The marker says the house was torn down in 1956. Not a photograph.",
      },
      order(
        [
          { id: "land", year: "1813", label: "Robert Clendinen buys the land.", why: "The marker dates that purchase to 1813." },
          { id: "house", year: "Before 1830", label: "He builds the house.", why: "The marker says he built it before his death in 1830." },
          { id: "bratton", year: "1847", label: "Dr. James Rufus Bratton acquires the house.", why: "The marker dates that purchase to 1847." },
          { id: "night", year: "1865", label: "Jefferson Davis spends the night here.", why: "The marker dates that night to April 27, 1865." },
        ],
        ["night", "land", "bratton", "house"],
      ),
      takeaway([
        "Robert Clendinen bought this land in 1813 and built the house before he died in 1830. He was a state senator from York District from 1816 to 1830.",
        "Dr. James Rufus Bratton, a Confederate surgeon, acquired the house in 1847.",
        "Jefferson Davis spent the night of April 27, 1865, here while trying to reach a remnant of the Confederate army. The house was torn down in 1956.",
      ]),
    ],
  ),
  lesson(
    "46-03",
    "The oldest Methodist church in the county",
    "Trinity Methodist timeline",
    [cited("46-03", "Trinity M.E. Church, South", "front")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1824",
        title: "Organized by two ministers",
        partLabel: "the church",
        art: art("trinity-church.jpg", "Illustration of a small 1820s church. Not a historical photograph."),
        hotspots: [
          {
            id: "org",
            label: "1824",
            x: 32,
            y: 50,
            fact: "The Revs. William Gassaway and Joseph Holmes organized Trinity in 1824, with Gassaway as pastor. The marker calls it the oldest Methodist Episcopal Church, South, in York County.",
          },
          {
            id: "built",
            label: "1826",
            x: 74,
            y: 48,
            fact: "The first building went up on College Street in 1826.",
          },
        ],
      },
      {
        kind: "scene",
        id: "school",
        kicker: "1829",
        title: "The county's first Sunday school",
        partLabel: "the Sunday school",
        art: art("trinity-class.jpg", "Illustration of a plain church room with benches. Not a historical photograph."),
        hotspots: [
          {
            id: "sunday",
            label: "March 2, 1829",
            x: 40,
            y: 52,
            fact: "James Jefferys organized the first Sunday school in York County at Trinity on March 2, 1829.",
          },
        ],
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("trinity-church.jpg", "Illustration of the 1826 church. Not a historical photograph."),
        nowArt: art("trinity-today.jpg", "Illustration of a church and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of the church the marker says was built on College Street in 1826. Not a historical photograph.",
        nowCaption: "Illustration of a church and a marker. Not a photograph of the site today.",
      },
      order(
        [
          { id: "org", year: "1824", label: "Trinity is organized.", why: "The marker dates the organization to 1824." },
          { id: "built", year: "1826", label: "The first building goes up on College Street.", why: "The marker dates that building to 1826." },
          { id: "sunday", year: "1829", label: "James Jefferys starts the county's first Sunday school.", why: "The marker dates that Sunday school to March 2, 1829." },
        ],
        ["sunday", "org", "built"],
      ),
      takeaway([
        "Trinity was organized in 1824 by the Revs. William Gassaway and Joseph Holmes. It is the oldest Methodist Episcopal Church, South, in York County.",
        "The first building was put up on College Street in 1826.",
        "On March 2, 1829, James Jefferys organized the first Sunday school in York County, at Trinity.",
      ]),
    ],
  ),
];

