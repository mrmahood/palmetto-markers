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

export const richlandLessonsAK: MarkerLesson[] = [
  lesson(
    "40-192",
    "The first temple since the Civil War",
    "Tree of Life timeline",
    [cited("40-192", "Tree of Life Synagogue", "front and back")],
    [
      {
        kind: "scene",
        id: "synagogue",
        kicker: "1896",
        title: "Eighteen families at Sidney Park",
        partLabel: "the synagogue",
        art: art(
          "m40192-synagogue.jpg",
          "Illustration of a synagogue beside a park. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "families",
            label: "18 families, 1896",
            x: 32,
            y: 52,
            fact: "In 1896 members of 18 Jewish families assembled to worship at the Independent Fire Company's station overlooking Sidney Park. Organized as Etz Chayim (Tree of Life), this group's members embraced Judaism's Reform branch or liberal movement.",
          },
          {
            id: "temple",
            label: "1907",
            x: 74,
            y: 40,
            fact: "In 1907, members moved into the first temple built in Columbia since the Civil War. Located at 1320 Lady St., the synagogue was paid for by funds raised by local Jewish citizens.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1952",
        title: "A modern temple in Shandon",
        partLabel: "the yard",
        art: art(
          "m40192-yard.jpg",
          "Illustration of a modern temple and its yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "plans",
            label: "1950 and 1952",
            x: 32,
            y: 48,
            fact: "To meet the needs of their growing congregation, Tree of Life members began making plans for a new synagogue in 1950. Following a design by Columbia firm LBC&W, M.B. Kahn Construction erected a modern temple in 1952.",
          },
          {
            id: "relocated",
            label: "Until 1986",
            x: 74,
            y: 58,
            fact: "The highly-touted, contemporary building was a unique addition to the Shandon neighborhood. The Reform congregation worshipped here until 1986, when members relocated to a new synagogue in Forest Acres.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1896",
        title: "Families who assembled to worship",
        partLabel: "18 families",
        value: 18,
        unit: "families",
        meant:
          "What this meant: the marker says that in 1896 members of 18 Jewish families assembled to worship at the Independent Fire Company's station overlooking Sidney Park.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40192-synagogue.jpg",
          "Illustration of a synagogue beside a park. Not a historical photograph.",
        ),
        nowArt: art(
          "m40192-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a synagogue beside a park, for the temple the marker says members moved into in 1907. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "assembled",
            year: "1896",
            label: "Eighteen families assemble to worship.",
            why: "The marker says that in 1896 members of 18 Jewish families assembled to worship at the Independent Fire Company's station overlooking Sidney Park, organized as Etz Chayim (Tree of Life).",
          },
          {
            id: "moved",
            year: "1907",
            label: "Members move into the first temple since the Civil War.",
            why: "The marker says that in 1907 members moved into the first temple built in Columbia since the Civil War, at 1320 Lady St.",
          },
          {
            id: "erected",
            year: "1952",
            label: "A modern temple is erected.",
            why: "The marker says members began making plans for a new synagogue in 1950, and M.B. Kahn Construction erected a modern temple in 1952 following a design by Columbia firm LBC&W.",
          },
          {
            id: "forest",
            year: "1986",
            label: "The congregation relocates to Forest Acres.",
            why: "The marker says the Reform congregation worshipped here until 1986, when members relocated to a new synagogue in Forest Acres.",
          },
        ],
        ["forest", "assembled", "erected", "moved"],
      ),
      takeaway([
        "In 1896 members of 18 Jewish families assembled to worship at the Independent Fire Company's station overlooking Sidney Park. Organized as Etz Chayim (Tree of Life), this group's members embraced Judaism's Reform branch or liberal movement.",
        "In 1907, members moved into the first temple built in Columbia since the Civil War. Located at 1320 Lady St., the synagogue was paid for by funds raised by local Jewish citizens.",
        "To meet the needs of their growing congregation, Tree of Life members began making plans for a new synagogue in 1950. Following a design by Columbia firm LBC&W, M.B. Kahn Construction erected a modern temple in 1952. The highly-touted, contemporary building was a unique addition to the Shandon neighborhood. The Reform congregation worshipped here until 1986, when members relocated to a new synagogue in Forest Acres.",
      ]),
    ],
  ),
  lesson(
    "40-193",
    "Named the House of Peace",
    "Beth Shalow timeline",
    [
      cited("40-193", "Beth Shalow Synagogue", "front and back"),
      span(
        '"7 years" is 1935 minus 1928, the years the marker prints for the dedication of the new House of Peace and the new temple.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "synagogue",
        kicker: "1905",
        title: "A new synagogue after a division",
        partLabel: "the synagogue",
        art: art(
          "m40193-synagogue.jpg",
          "Illustration of a house corner and a small synagogue. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "divided",
            label: "1905",
            x: 32,
            y: 50,
            fact: "In 1905 disagreements over religious practices divided members of Columbia's Tree of Life Synagogue. Jews embracing Orthodoxy formed a new synagogue, which they named Beth Shalom (House of Peace).",
          },
          {
            id: "sanctuary",
            label: "1907 and 1915",
            x: 74,
            y: 42,
            fact: "Meetings were held in a private home on the corner of Park and Lady Sts. until a sanctuary was completed in 1907. Destroyed by fire in 1915, it was rebuilt eight months later.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "Sept. 8, 1935",
        title: "Dedicated, then Forest Acres",
        partLabel: "the yard",
        art: art(
          "m40193-yard.jpg",
          "Illustration of a synagogue and its front yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "dedicated",
            label: "1928 and 1935",
            x: 32,
            y: 46,
            fact: "Growth of the congregation led to a new temple in 1928. Designed by noted Columbia firm Lafaye & Lafaye and built by M.B. Kahn, a member of the congregation, the new House of Peace was dedicated Sept. 8, 1935.",
          },
          {
            id: "trenholm",
            label: "1955 and 1973",
            x: 74,
            y: 58,
            fact: "In 1955, its members shifted from Orthodoxy to embrace the Conservative movement. For more than three decades the Marion St. landmark met the spiritual, cultural, and social needs of its members. In 1973 the congregation built a new synagogue on Trenholm Rd. in Forest Acres.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1928 to 1935",
        title: "Years from the new temple to the dedication",
        partLabel: "7 years",
        value: 7,
        unit: "years",
        meant:
          "What this meant: 1935 comes 7 years after 1928. The marker says growth of the congregation led to a new temple in 1928 and the new House of Peace was dedicated Sept. 8, 1935.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40193-synagogue.jpg",
          "Illustration of a house corner and a small synagogue. Not a historical photograph.",
        ),
        nowArt: art(
          "m40193-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house corner and a small synagogue, for the sanctuary the marker says was completed in 1907. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "formed",
            year: "1905",
            label: "Orthodox members form Beth Shalom.",
            why: "The marker says that in 1905 disagreements over religious practices divided members of Columbia's Tree of Life Synagogue, and Jews embracing Orthodoxy formed a new synagogue named Beth Shalom (House of Peace).",
          },
          {
            id: "sanctuary",
            year: "1907",
            label: "A sanctuary is completed.",
            why: "The marker says meetings were held in a private home on the corner of Park and Lady Sts. until a sanctuary was completed in 1907.",
          },
          {
            id: "fire",
            year: "1915",
            label: "Fire destroys the sanctuary.",
            why: "The marker says it was destroyed by fire in 1915 and rebuilt eight months later.",
          },
          {
            id: "dedicated",
            year: "Sept. 8, 1935",
            label: "The new House of Peace is dedicated.",
            why: "The marker says growth of the congregation led to a new temple in 1928. Designed by Lafaye & Lafaye and built by M.B. Kahn, a member of the congregation, it was dedicated Sept. 8, 1935.",
          },
        ],
        ["fire", "formed", "dedicated", "sanctuary"],
      ),
      takeaway([
        "In 1905 disagreements over religious practices divided members of Columbia's Tree of Life Synagogue. Jews embracing Orthodoxy formed a new synagogue, which they named Beth Shalom (House of Peace).",
        "Meetings were held in a private home on the corner of Park and Lady Sts. until a sanctuary was completed in 1907. Destroyed by fire in 1915, it was rebuilt eight months later. Growth of the congregation led to a new temple in 1928.",
        "Designed by noted Columbia firm Lafaye & Lafaye and built by M.B. Kahn, a member of the congregation, the new House of Peace was dedicated Sept. 8, 1935. In 1955, its members shifted from Orthodoxy to embrace the Conservative movement. For more than three decades the Marion St. landmark met the spiritual, cultural, and social needs of its members. In 1973 the congregation built a new synagogue on Trenholm Rd. in Forest Acres.",
      ]),
    ],
  ),
  lesson(
    "40-194",
    "From a mission to Woodrow Street",
    "Shandon Presbyterian timeline",
    [
      cited("40-194", "Shandon Presbyterian Church", "front and back"),
      span(
        '"13 years" is 1929 minus 1916, the years the marker prints for the second sanctuary and the first sanctuary.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "Oct. 1913",
        title: "Shandon Mission, then a sanctuary",
        partLabel: "the church",
        art: art(
          "m40194-church.jpg",
          "Illustration of a small chapel and a larger church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "mission",
            label: "Oct. 1913",
            x: 32,
            y: 48,
            fact: "Shandon Presbyterian Church began as Shandon Mission, which first met in Oct. 1913. By 1915, the Church had acquired title to a lot at the S.E. corner of Wheat and Maple Sts. and was incorporated the next year.",
          },
          {
            id: "first",
            label: "Nov. 1916",
            x: 74,
            y: 40,
            fact: "The first sanctuary was completed in Nov. 1916. The Rev. William Sumner Harden was the first minister. By the late 1920s the church had outgrown this building and construction began on a second sanctuary.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "April 1929",
        title: "A second sanctuary, then growth",
        partLabel: "the yard",
        art: art(
          "m40194-yard.jpg",
          "Illustration of a churchyard beside a church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "second",
            label: "April 1929",
            x: 32,
            y: 52,
            fact: "Columbia firm Lafaye and Lafaye designed the second sanctuary, located at the present site on Woodrow St. It was completed in April 1929.",
          },
          {
            id: "outreach",
            label: "The 1950s",
            x: 74,
            y: 42,
            fact: "The church building expanded in the 1950s, 1960s and 1990s, evidence of the growth of the congregation. In the 1950s, led by Rev. Dr. Fred V. Poag, the church actively supported racial desegregation. The congregation is still recognized for its local and global outreach.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1916 to 1929",
        title: "Years from the first sanctuary to the second",
        partLabel: "13 years",
        value: 13,
        unit: "years",
        meant:
          "What this meant: 1929 comes 13 years after 1916. The marker says the first sanctuary was completed in Nov. 1916 and the second sanctuary was completed in April 1929.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40194-church.jpg",
          "Illustration of a small chapel and a larger church. Not a historical photograph.",
        ),
        nowArt: art(
          "m40194-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small chapel and a larger church, for the sanctuaries the marker says were completed in Nov. 1916 and April 1929. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "met",
            year: "Oct. 1913",
            label: "Shandon Mission meets for the first time.",
            why: "The marker says Shandon Presbyterian Church began as Shandon Mission, which first met in Oct. 1913.",
          },
          {
            id: "lot",
            year: "1915",
            label: "The church acquires a lot at Wheat and Maple.",
            why: "The marker says that by 1915 the Church had acquired title to a lot at the S.E. corner of Wheat and Maple Sts. and was incorporated the next year.",
          },
          {
            id: "first",
            year: "Nov. 1916",
            label: "The first sanctuary is completed.",
            why: "The marker says the first sanctuary was completed in Nov. 1916 and the Rev. William Sumner Harden was the first minister.",
          },
          {
            id: "second",
            year: "April 1929",
            label: "The second sanctuary is completed on Woodrow St.",
            why: "The marker says that by the late 1920s the church had outgrown the first building. Lafaye and Lafaye designed the second sanctuary on Woodrow St., completed in April 1929.",
          },
        ],
        ["first", "met", "second", "lot"],
      ),
      takeaway([
        "Shandon Presbyterian Church began as Shandon Mission, which first met in Oct. 1913. By 1915, the Church had acquired title to a lot at the S.E. corner of Wheat and Maple Sts. and was incorporated the next year.",
        "The first sanctuary was completed in Nov. 1916. The Rev. William Sumner Harden was the first minister. By the late 1920s the church had outgrown this building and construction began on a second sanctuary.",
        "Columbia firm Lafaye and Lafaye designed the second sanctuary, located at the present site on Woodrow St. It was completed in April 1929. The church building expanded in the 1950s, 1960s and 1990s, evidence of the growth of the congregation. In the 1950s, led by Rev. Dr. Fred V. Poag, the church actively supported racial desegregation. The congregation is still recognized for its local and global outreach.",
      ]),
    ],
  ),
  lesson(
    "40-195",
    "Built for a savings bank",
    "Canal Dime timeline",
    [
      cited("40-195", "Canal Dime Savings Bank", "front and back"),
      span(
        '"41 years" is 1936 minus 1895, the years the marker prints for Eckerd\'s Pharmacy acquiring the building and the completion of the Canal Dime Savings Bank.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "bank",
        kicker: "1895",
        title: "A Romanesque building for the bank",
        partLabel: "the bank",
        art: art(
          "m40195-bank.jpg",
          "Illustration of a three-story stone building with round arches. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "completed",
            label: "Completed in 1895",
            x: 32,
            y: 46,
            fact: "This three-story building was designed by the noted Columbia architectural firm of W.B. Smith Whaley and Co. Completed in 1895 and featuring a granite façade and red barrel tile roof, the building is a rare example of Romanesque-style architecture in Columbia.",
          },
          {
            id: "pharmacy",
            label: "1936",
            x: 74,
            y: 58,
            fact: "Originally built to house the Canal Dime Savings Bank, the building was acquired by Eckerd's Pharmacy in 1936 and continued to operate as a drugstore until the 1980s.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "March 14, 1960",
        title: "A protest at the luncheonette",
        partLabel: "the street",
        art: art(
          "m40195-street.jpg",
          "Illustration of a stone building along a street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "march",
            label: "March 14, 1960",
            x: 32,
            y: 50,
            fact: "On March 14, 1960, African American college students Simon Bouie and Talmadge Neal led a protest march to the Eckerd's luncheonette. The pair were jailed and convicted for refusing to leave their seats after being denied service due to their race.",
          },
          {
            id: "court",
            label: "1964",
            x: 74,
            y: 40,
            fact: "In Bouie v. Columbia (1964), the U.S. Supreme Court overturned their convictions. The sit-in demonstration was part of broader protest movements against racial segregation in Columbia and the nation.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1895 to 1936",
        title: "Years from the bank to the pharmacy",
        partLabel: "41 years",
        value: 41,
        unit: "years",
        meant:
          "What this meant: 1936 comes 41 years after 1895. The marker says the building was completed in 1895 to house the Canal Dime Savings Bank and was acquired by Eckerd's Pharmacy in 1936.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40195-bank.jpg",
          "Illustration of a three-story stone building with round arches. Not a historical photograph.",
        ),
        nowArt: art(
          "m40195-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a three-story stone building, for the building the marker says was completed in 1895 with a granite façade and red barrel tile roof. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "completed",
            year: "1895",
            label: "The building is completed for the bank.",
            why: "The marker says this three-story building, designed by W.B. Smith Whaley and Co., was completed in 1895 and originally built to house the Canal Dime Savings Bank.",
          },
          {
            id: "pharmacy",
            year: "1936",
            label: "Eckerd's Pharmacy acquires the building.",
            why: "The marker says the building was acquired by Eckerd's Pharmacy in 1936 and continued to operate as a drugstore until the 1980s.",
          },
          {
            id: "protest",
            year: "March 14, 1960",
            label: "Students march to the luncheonette.",
            why: "The marker says that on March 14, 1960, Simon Bouie and Talmadge Neal led a protest march to the Eckerd's luncheonette and were jailed and convicted for refusing to leave their seats after being denied service due to their race.",
          },
          {
            id: "court",
            year: "1964",
            label: "The Supreme Court overturns the convictions.",
            why: "The marker says that in Bouie v. Columbia (1964), the U.S. Supreme Court overturned their convictions.",
          },
        ],
        ["protest", "completed", "court", "pharmacy"],
      ),
      takeaway([
        "This three-story building was designed by the noted Columbia architectural firm of W.B. Smith Whaley and Co. Completed in 1895 and featuring a granite façade and red barrel tile roof, the building is a rare example of Romanesque-style architecture in Columbia.",
        "Originally built to house the Canal Dime Savings Bank, the building was acquired by Eckerd's Pharmacy in 1936 and continued to operate as a drugstore until the 1980s.",
        "On March 14, 1960, African American college students Simon Bouie and Talmadge Neal led a protest march to the Eckerd's luncheonette. The pair were jailed and convicted for refusing to leave their seats after being denied service due to their race. In Bouie v. Columbia (1964), the U.S. Supreme Court overturned their convictions. The sit-in demonstration was part of broader protest movements against racial segregation in Columbia and the nation.",
      ]),
    ],
  ),
];
