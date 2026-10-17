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

export const richlandLessonsAJ: MarkerLesson[] = [
  lesson(
    "40-187",
    "A residence for indigent veterans",
    "Soldiers' Home timeline",
    [
      cited("40-187", "S.C. Confederate Soldiers' Home", "front and back"),
      span(
        '"54 years" is 1963 minus 1909, the years the marker prints for the demolition of the building and the opening of the Confederate Infirmary.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "infirmary",
        kicker: "1909",
        title: "The Confederate Infirmary opens",
        partLabel: "the infirmary",
        art: art(
          "m40187-home.jpg",
          "Illustration of a Greek Revival residence and a small hospital. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "Opened in 1909",
            x: 32,
            y: 48,
            fact: "The Confederate Infirmary opened here in 1909. S.C. was the last southern state to create a residence for indigent Civil War veterans. Legislation authorized space for two veterans from each county.",
          },
          {
            id: "renamed",
            label: "Renamed in 1915",
            x: 74,
            y: 42,
            fact: "The United Daughters of the Confederacy played a key role at the facility, which was renamed the Soldiers' Home in 1915.",
          },
        ],
      },
      {
        kind: "scene",
        id: "grounds",
        kicker: "1921",
        title: "Renovation, widows, and closing",
        partLabel: "the home's later years",
        art: art(
          "m40187-yard.jpg",
          "Illustration of the grounds of a Greek Revival residence. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "commission",
            label: "1921",
            x: 32,
            y: 52,
            fact: "The UDC prompted investigations that led to renovation of the Greek Revival building and nearby hospital in 1921. Women's influence at the Soldiers' Home continued and in 1921 the state authorized the UDC to name four women to the Home's nine-person commission.",
          },
          {
            id: "closed",
            label: "Closed in 1957",
            x: 74,
            y: 40,
            fact: "In 1925 the state opened the Home to veterans' widows, and later extended eligibility to sisters, daughters, and nieces. The last veteran living in the Home died in 1944 and it closed in 1957. The state demolished the building in 1963.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1909 to 1963",
        title: "Years from the opening to the demolition",
        partLabel: "54 years",
        value: 54,
        unit: "years",
        meant:
          "What this meant: 1963 comes 54 years after 1909. The marker says the Confederate Infirmary opened here in 1909 and the state demolished the building in 1963.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40187-home.jpg",
          "Illustration of a Greek Revival residence and a small hospital. Not a historical photograph.",
        ),
        nowArt: art(
          "m40187-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Greek Revival residence and a small hospital, for the building the marker says opened as the Confederate Infirmary in 1909. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "1909",
            label: "The Confederate Infirmary opens here.",
            why: "The marker says the Confederate Infirmary opened here in 1909. S.C. was the last southern state to create a residence for indigent Civil War veterans. Legislation authorized space for two veterans from each county.",
          },
          {
            id: "renamed",
            year: "1915",
            label: "The facility is renamed the Soldiers' Home.",
            why: "The marker says the United Daughters of the Confederacy played a key role at the facility, which was renamed the Soldiers' Home in 1915.",
          },
          {
            id: "closed",
            year: "1957",
            label: "The Home closes.",
            why: "The marker says the last veteran living in the Home died in 1944 and it closed in 1957. In 1925 the state opened the Home to veterans' widows, and later extended eligibility to sisters, daughters, and nieces.",
          },
          {
            id: "demolished",
            year: "1963",
            label: "The state demolishes the building.",
            why: "The marker says the state demolished the building in 1963.",
          },
        ],
        ["closed", "opened", "demolished", "renamed"],
      ),
      takeaway([
        "The Confederate Infirmary opened here in 1909. S.C. was the last southern state to create a residence for indigent Civil War veterans. Legislation authorized space for two veterans from each county.",
        "The United Daughters of the Confederacy played a key role at the facility, which was renamed the Soldiers' Home in 1915. The UDC prompted investigations that led to renovation of the Greek Revival building and nearby hospital in 1921. Women's influence at the Soldiers' Home continued and in 1921 the state authorized the UDC to name four women to the Home's nine-person commission.",
        "In 1925 the state opened the Home to veterans' widows, and later extended eligibility to sisters, daughters, and nieces. The last veteran living in the Home died in 1944 and it closed in 1957. The state demolished the building in 1963.",
      ]),
    ],
  ),
  lesson(
    "40-189",
    "A showroom for cars and tractors",
    "DuPre Building timeline",
    [
      cited("40-189", "DuPre Building", "front and back"),
      span(
        '"11 years" is 1928 minus 1917, the years the marker prints for the end and the start of Fordson production by Ford Motor Co.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "showroom",
        kicker: "1919",
        title: "Built as an auto showroom",
        partLabel: "the showroom",
        art: art(
          "m40189-building.jpg",
          "Illustration of an auto showroom with a car and a small tractor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Built in 1919",
            x: 32,
            y: 46,
            fact: "The DuPre Building was built in 1919 and was designed by prominent S.C. architect James B. Urquhart. It served as showroom for DuPre Auto Co., a local distributor of Ford cars and Fordson tractors.",
          },
          {
            id: "fordson",
            label: "Fordson, 1917-1928",
            x: 74,
            y: 56,
            fact: "The first commercially successful small tractor, the Fordson was produced by Ford Motor Co. from 1917-1928. During the first year of sales, DuPre Auto Co. placed over 700 Fordson tractors on S.C. farms, an important advance in pre-harvest mechanization in the state.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1933",
        title: "New occupants, then a listing",
        partLabel: "later occupants",
        art: art(
          "m40189-street.jpg",
          "Illustration of a commercial building along a city street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "left",
            label: "By 1933",
            x: 32,
            y: 48,
            fact: "By 1933 DuPre Auto Co. no longer operated from this location. The property housed engravers, equipment suppliers and manufacturers during the Depression.",
          },
          {
            id: "listed",
            label: "Listed in 1983",
            x: 74,
            y: 40,
            fact: "From 1943-1945, the Associated Press service bureau and Columbia Record newspaper occupied the building. Listed in the National Register of Historic Places in 1983, rehabilitation of the building in 1998 was part of the movement to preserve and redevelop Columbia's Congaree Vista that began in the 1980s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1917 to 1928",
        title: "Years Ford produced the Fordson",
        partLabel: "11 years",
        value: 11,
        unit: "years",
        meant:
          "What this meant: 1928 comes 11 years after 1917. The marker says the Fordson was produced by Ford Motor Co. from 1917-1928.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40189-building.jpg",
          "Illustration of an auto showroom with a car and a small tractor. Not a historical photograph.",
        ),
        nowArt: art(
          "m40189-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an auto showroom with a car and a small tractor, for the showroom the marker says the DuPre Building served after it was built in 1919. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "fordson",
            year: "1917",
            label: "Ford Motor Co. begins producing the Fordson.",
            why: "The marker says the Fordson was produced by Ford Motor Co. from 1917-1928. It calls the Fordson the first commercially successful small tractor.",
          },
          {
            id: "built",
            year: "1919",
            label: "The DuPre Building is built as a showroom.",
            why: "The marker says the DuPre Building was built in 1919 and was designed by prominent S.C. architect James B. Urquhart. It served as showroom for DuPre Auto Co., a local distributor of Ford cars and Fordson tractors.",
          },
          {
            id: "press",
            year: "1943",
            label: "The Associated Press and the Columbia Record occupy the building.",
            why: "The marker says that from 1943-1945, the Associated Press service bureau and Columbia Record newspaper occupied the building. By 1933 DuPre Auto Co. no longer operated from this location.",
          },
          {
            id: "rehab",
            year: "1998",
            label: "The building is rehabilitated.",
            why: "The marker says rehabilitation of the building in 1998 was part of the movement to preserve and redevelop Columbia's Congaree Vista that began in the 1980s. It was listed in the National Register of Historic Places in 1983.",
          },
        ],
        ["rehab", "fordson", "press", "built"],
      ),
      takeaway([
        "The DuPre Building was built in 1919 and was designed by prominent S.C. architect James B. Urquhart. It served as showroom for DuPre Auto Co., a local distributor of Ford cars and Fordson tractors.",
        "The first commercially successful small tractor, the Fordson was produced by Ford Motor Co. from 1917-1928. During the first year of sales, DuPre Auto Co. placed over 700 Fordson tractors on S.C. farms, an important advance in pre-harvest mechanization in the state.",
        "By 1933 DuPre Auto Co. no longer operated from this location. The property housed engravers, equipment suppliers and manufacturers during the Depression. From 1943-1945, the Associated Press service bureau and Columbia Record newspaper occupied the building. Listed in the National Register of Historic Places in 1983, rehabilitation of the building in 1998 was part of the movement to preserve and redevelop Columbia's Congaree Vista that began in the 1980s.",
      ]),
    ],
  ),
  lesson(
    "40-190",
    "From a brush arbor to a brick sanctuary",
    "First Calvary timeline",
    [
      cited("40-190", "First Calvary Baptist Church", "front and back"),
      span(
        '"55 years" is 2005 minus 1950, the years the marker prints for the dedication of the modern brick sanctuary and the completion of the stone sanctuary.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "early",
        kicker: "c. 1870",
        title: "A brush arbor, then a frame home",
        partLabel: "the first home",
        art: art(
          "m40190-church.jpg",
          "Illustration of a brush arbor, a cottage, and a frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "After the Civil War",
            x: 32,
            y: 50,
            fact: "First Calvary Baptist Church descended from African American congregants who left First Baptist Church following the Civil War. These founding members, like many African Americans at the time, sought greater autonomy by breaking from white-controlled churches.",
          },
          {
            id: "frame",
            label: "Frame home, c. 1870",
            x: 74,
            y: 40,
            fact: "The congregation of First Calvary first organized under a brush arbor and later met in the home of Celia Mann, now the Mann-Simons Cottage. The congregation built a permanent home, a frame structure, on Richland St. c. 1870.",
          },
        ],
      },
      {
        kind: "scene",
        id: "sanctuaries",
        kicker: "1950",
        title: "Stone, then brick, on one site",
        partLabel: "the later sanctuaries",
        art: art(
          "m40190-yard.jpg",
          "Illustration of a stone church in a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "stone",
            label: "Completed in 1950",
            x: 32,
            y: 46,
            fact: "They remained at that location until building a new stone sanctuary at Pine and Washington Sts., which was completed in 1950.",
          },
          {
            id: "brick",
            label: "Dedicated in 2005",
            x: 74,
            y: 58,
            fact: "After more than fifty years of useful service that church was replaced by a modern brick sanctuary, built on the same site as the 1950 building, which was dedicated in 2005.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1950 to 2005",
        title: "Years from the stone church to the brick church",
        partLabel: "55 years",
        value: 55,
        unit: "years",
        meant:
          "What this meant: 2005 comes 55 years after 1950. The marker says the stone sanctuary at Pine and Washington Sts. was completed in 1950, and after more than fifty years of useful service that church was replaced by a modern brick sanctuary, built on the same site, which was dedicated in 2005.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40190-church.jpg",
          "Illustration of a brush arbor, a cottage, and a frame church. Not a historical photograph.",
        ),
        nowArt: art(
          "m40190-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brush arbor, a cottage, and a frame church, for the frame structure the marker says the congregation built on Richland St. c. 1870. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "frame",
            year: "c. 1870",
            label: "A frame structure is built on Richland St.",
            why: "The marker says the congregation built a permanent home, a frame structure, on Richland St. c. 1870.",
          },
          {
            id: "stone",
            year: "1950",
            label: "A stone sanctuary is completed at Pine and Washington.",
            why: "The marker says they remained at that location until building a new stone sanctuary at Pine and Washington Sts., which was completed in 1950.",
          },
          {
            id: "brick",
            year: "2005",
            label: "A modern brick sanctuary on the same site is dedicated.",
            why: "The marker says that after more than fifty years of useful service that church was replaced by a modern brick sanctuary, built on the same site as the 1950 building, which was dedicated in 2005.",
          },
        ],
        ["brick", "frame", "stone"],
      ),
      takeaway([
        "First Calvary Baptist Church descended from African American congregants who left First Baptist Church following the Civil War. These founding members, like many African Americans at the time, sought greater autonomy by breaking from white-controlled churches.",
        "The congregation of First Calvary first organized under a brush arbor and later met in the home of Celia Mann, now the Mann-Simons Cottage. The congregation built a permanent home, a frame structure, on Richland St. c. 1870.",
        "They remained at that location until building a new stone sanctuary at Pine and Washington Sts., which was completed in 1950. After more than fifty years of useful service that church was replaced by a modern brick sanctuary, built on the same site as the 1950 building, which was dedicated in 2005.",
      ]),
    ],
  ),
  lesson(
    "40-191",
    "A free cemetery for Hebrew burials",
    "Beth Shalom Cemetery timeline",
    [cited("40-191", "Beth Shalom Cemetery", "front and back")],
    [
      {
        kind: "scene",
        id: "grounds",
        kicker: "1883",
        title: "Founded as a free cemetery",
        partLabel: "the cemetery",
        art: art(
          "m40191-cemetery.jpg",
          "Illustration of a cemetery with blank stones and trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Founded in 1883",
            x: 32,
            y: 48,
            fact: "In 1883 members of Columbia's Jewish community founded the Hebrew Cemetery Society of Columbia as an alternative to the Hebrew Benevolent Society's cemetery, which had been established in 1822.",
          },
          {
            id: "acres",
            label: "A 4-acre tract",
            x: 74,
            y: 42,
            fact: "The organization purchased a 4-acre tract bounded by Indigo (Whaley), Lower (Heyward), Marion, and Sumter streets as a free cemetery for Hebrew burials. In 1896 the Society sold 3 acres to W.B. Smith Whaley for textile mill development.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gate",
        kicker: "1911",
        title: "Oversight passes to the synagogue",
        partLabel: "the gate",
        art: art(
          "m40191-gate.jpg",
          "Illustration of a cemetery gate without lettering. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "deeded",
            label: "Deeded by 1911",
            x: 32,
            y: 52,
            fact: "By 1911 the Society deeded cemetery oversight to the Beth Shalom (House of Peace) synagogue. Early burials included Orthodox Jews from Columbia and elsewhere. This site later became identified as a place specifically for synagogue members.",
          },
          {
            id: "arcadia",
            label: "1995",
            x: 74,
            y: 40,
            fact: "As the Univ. of S.C. expanded in the 1960s it grew around the cemetery. Jewish migration into Forest Acres and fewer available plots here led to the creation of Arcadia Lakes Cemetery in 1995.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1883",
        title: "Acres purchased for the cemetery",
        partLabel: "4 acres",
        value: 4,
        unit: "acres",
        meant:
          "What this meant: the marker says the organization purchased a 4-acre tract bounded by Indigo (Whaley), Lower (Heyward), Marion, and Sumter streets as a free cemetery for Hebrew burials.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40191-cemetery.jpg",
          "Illustration of a cemetery with blank stones and trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m40191-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cemetery with blank stones and trees, for the 4-acre tract the marker says was purchased as a free cemetery for Hebrew burials. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "benevolent",
            year: "1822",
            label: "The Hebrew Benevolent Society's cemetery is established.",
            why: "The marker says the Hebrew Cemetery Society of Columbia was founded as an alternative to the Hebrew Benevolent Society's cemetery, which had been established in 1822.",
          },
          {
            id: "founded",
            year: "1883",
            label: "The Hebrew Cemetery Society of Columbia is founded.",
            why: "The marker says that in 1883 members of Columbia's Jewish community founded the Hebrew Cemetery Society of Columbia. It purchased a 4-acre tract as a free cemetery for Hebrew burials.",
          },
          {
            id: "deeded",
            year: "1911",
            label: "Oversight is deeded to Beth Shalom.",
            why: "The marker says that by 1911 the Society deeded cemetery oversight to the Beth Shalom (House of Peace) synagogue.",
          },
          {
            id: "arcadia",
            year: "1995",
            label: "Arcadia Lakes Cemetery is created.",
            why: "The marker says Jewish migration into Forest Acres and fewer available plots here led to the creation of Arcadia Lakes Cemetery in 1995.",
          },
        ],
        ["deeded", "benevolent", "arcadia", "founded"],
      ),
      takeaway([
        "In 1883 members of Columbia's Jewish community founded the Hebrew Cemetery Society of Columbia as an alternative to the Hebrew Benevolent Society's cemetery, which had been established in 1822.",
        "The organization purchased a 4-acre tract bounded by Indigo (Whaley), Lower (Heyward), Marion, and Sumter streets as a free cemetery for Hebrew burials. In 1896 the Society sold 3 acres to W.B. Smith Whaley for textile mill development.",
        "By 1911 the Society deeded cemetery oversight to the Beth Shalom (House of Peace) synagogue. Early burials included Orthodox Jews from Columbia and elsewhere. This site later became identified as a place specifically for synagogue members. As the Univ. of S.C. expanded in the 1960s it grew around the cemetery. Jewish migration into Forest Acres and fewer available plots here led to the creation of Arcadia Lakes Cemetery in 1995.",
      ]),
    ],
  ),
];
