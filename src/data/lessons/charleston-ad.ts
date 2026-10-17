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

export const charlestonLessonsAD: MarkerLesson[] = [
  lesson(
    "10-137",
    "The last independent Huguenot church",
    "Huguenot Church timeline",
    [
      cited("10-137", "Huguenot Church", "front and back"),
      span(
        '"49 years" is 1845 minus 1796, the years the marker prints for the fourth church and the fire that burned the c.1701 church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1680",
        title: "A church the refugees organized",
        partLabel: "the early church",
        art: art(
          "m10137-church.jpg",
          "Illustration of a wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "landed",
            label: "1680",
            x: 32,
            y: 46,
            fact: "French Protestants known as Huguenots were among the earliest Europeans to arrive in colonial S.C. They were part of a broader Huguenot diaspora fleeing religious persecution in France. The first large contingent in Charleston landed in 1680.",
          },
          {
            id: "brick",
            label: "1685-1701",
            x: 74,
            y: 58,
            fact: "Hundreds more settled after the Edict of Nantes was revoked in 1685. By 1687, the Charleston refugees had organized a church and likely worshipped at this site. Around 1701 the original wooden church was replaced by a brick one.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1796",
        title: "Burned, then a fourth church",
        partLabel: "the churchyard",
        art: art(
          "m10137-yard.jpg",
          "Illustration of a Gothic Revival church and yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "fire",
            label: "1796",
            x: 32,
            y: 44,
            fact: "By the end of the American Revolution, this was the last remaining independent Huguenot church in S.C. The c.1701 church burned in the 1796 fire and was replaced a few years later.",
          },
          {
            id: "gothic",
            label: "1845",
            x: 74,
            y: 56,
            fact: "Members ceased regular worship in the French language in the 1820s and subsequently began holding services in English. This fourth church dates to 1845. Designed by architect Edward Brickell White, it is one of the earliest and finest examples of Gothic Revival design in Charleston.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1796-1845",
        title: "Years from the fire to the fourth church",
        partLabel: "49 years",
        value: 49,
        unit: "years",
        meant:
          "What this meant: 1845 comes 49 years after 1796. That is the stretch from the year the c.1701 church burned to the year this fourth church dates.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10137-church.jpg",
          "Illustration of a wooden church. Not a historical photograph.",
        ),
        nowArt: art(
          "m10137-today.jpg",
          "Illustration of a blank roadside marker beside a churchyard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church, for the church the marker says the Charleston refugees had organized by 1687. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a churchyard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "landed",
            year: "1680",
            label: "The first large contingent lands in Charleston.",
            why: "The marker says French Protestants known as Huguenots were among the earliest Europeans to arrive in colonial S.C., and that the first large contingent in Charleston landed in 1680. They were part of a broader Huguenot diaspora fleeing religious persecution in France.",
          },
          {
            id: "organized",
            year: "1687",
            label: "The Charleston refugees organize a church.",
            why: "The marker says that by 1687 the Charleston refugees had organized a church and likely worshipped at this site. Hundreds more had settled after the Edict of Nantes was revoked in 1685.",
          },
          {
            id: "burned",
            year: "1796",
            label: "The c.1701 church burns in a fire.",
            why: "The marker says that by the end of the American Revolution this was the last remaining independent Huguenot church in S.C. The c.1701 church burned in the 1796 fire and was replaced a few years later.",
          },
          {
            id: "fourth",
            year: "1845",
            label: "This fourth church dates to 1845.",
            why: "The marker says this fourth church dates to 1845. Designed by architect Edward Brickell White, it is one of the earliest and finest examples of Gothic Revival design in Charleston. Members ceased regular worship in the French language in the 1820s and subsequently began holding services in English.",
          },
        ],
        ["fourth", "landed", "burned", "organized"],
      ),
      takeaway([
        "French Protestants known as Huguenots were among the earliest Europeans to arrive in colonial S.C. The first large contingent in Charleston landed in 1680. Hundreds more settled after the Edict of Nantes was revoked in 1685.",
        "By 1687, the Charleston refugees had organized a church and likely worshipped at this site. Around 1701 the original wooden church was replaced by a brick one. The c.1701 church burned in the 1796 fire and was replaced a few years later.",
        "By the end of the American Revolution, this was the last remaining independent Huguenot church in S.C. Members ceased regular worship in the French language in the 1820s and subsequently began holding services in English. This fourth church dates to 1845. Designed by architect Edward Brickell White, it is one of the earliest and finest examples of Gothic Revival design in Charleston.",
      ]),
    ],
  ),
  lesson(
    "10-139",
    "The first permanent Reform congregation",
    "Beth Elohim timeline",
    [
      cited("10-139", "K.K. Beth Elohim", "front and back"),
      span(
        '"44 years" is 1838 minus 1794, the years the marker prints for the major fire and the synagogue built on this site.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "synagogue",
        kicker: "1749",
        title: "Founded by Spanish and Portuguese Jews",
        partLabel: "the synagogue",
        art: art(
          "m10139-synagogue.jpg",
          "Illustration of an early synagogue. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1749",
            x: 32,
            y: 48,
            fact: "Jews were present in Carolina by the 1690s. Kahal Kadosh Beth Elohim (Holy Congregation House of God) was founded in 1749 by Jews mainly of Spanish and Portuguese descent.",
          },
          {
            id: "built",
            label: "1794",
            x: 74,
            y: 40,
            fact: "Congregants met in various locations until a synagogue was built on this site in 1794. By 1820, Charleston had the largest Jewish population in the U.S.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1841",
        title: "Consecrated after the fire",
        partLabel: "the synagogue yard",
        art: art(
          "m10139-yard.jpg",
          "Illustration of a Greek Revival synagogue across a yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "fire",
            label: "1838",
            x: 32,
            y: 50,
            fact: "It burned in a major 1838 fire. The current Greek Revival building was consecrated in 1841 and is among the oldest extant synagogues in the U.S. The contractor for the 1841 synagogue was Beth Elohim member David Lopez Jr.",
          },
          {
            id: "reform",
            label: "1824",
            x: 74,
            y: 42,
            fact: "In 1824, several dozen members petitioned Beth Elohim leaders for changes to the traditional liturgy. They later left the congregation and founded the Reformed Society of Israelites. The Society lapsed, but by the early 1840s, Beth Elohim had broken tradition, installed an organ, and adopted the Society’s principles, making it the first permanent Reform Jewish congregation in the U.S.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1794-1838",
        title: "Years the 1794 synagogue stood",
        partLabel: "44 years",
        value: 44,
        unit: "years",
        meant:
          "What this meant: 1838 comes 44 years after 1794. That is the stretch from the year a synagogue was built on this site to the year it burned in a major fire.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10139-synagogue.jpg",
          "Illustration of an early synagogue. Not a historical photograph.",
        ),
        nowArt: art(
          "m10139-today.jpg",
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an early synagogue, for the building the marker says was built on this site in 1794. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1749",
            label: "Kahal Kadosh Beth Elohim is founded.",
            why: "The marker says Kahal Kadosh Beth Elohim (Holy Congregation House of God) was founded in 1749 by Jews mainly of Spanish and Portuguese descent. Jews were present in Carolina by the 1690s.",
          },
          {
            id: "built",
            year: "1794",
            label: "A synagogue is built on this site.",
            why: "The marker says congregants met in various locations until a synagogue was built on this site in 1794. By 1820, Charleston had the largest Jewish population in the U.S.",
          },
          {
            id: "burned",
            year: "1838",
            label: "That synagogue burns in a major fire.",
            why: "The marker says it burned in a major 1838 fire.",
          },
          {
            id: "consecrated",
            year: "1841",
            label: "The Greek Revival building is consecrated.",
            why: "The marker says the current Greek Revival building was consecrated in 1841 and is among the oldest extant synagogues in the U.S. The contractor for the 1841 synagogue was Beth Elohim member David Lopez Jr.",
          },
        ],
        ["consecrated", "founded", "burned", "built"],
      ),
      takeaway([
        "Jews were present in Carolina by the 1690s. By 1820, Charleston had the largest Jewish population in the U.S. Kahal Kadosh Beth Elohim (Holy Congregation House of God) was founded in 1749 by Jews mainly of Spanish and Portuguese descent.",
        "Congregants met in various locations until a synagogue was built on this site in 1794. It burned in a major 1838 fire. The current Greek Revival building was consecrated in 1841 and is among the oldest extant synagogues in the U.S. The contractor for the 1841 synagogue was Beth Elohim member David Lopez Jr.",
        "In 1824, several dozen members petitioned Beth Elohim leaders for changes to the traditional liturgy. They later left the congregation and founded the Reformed Society of Israelites. The Society lapsed, but by the early 1840s, Beth Elohim had broken tradition, installed an organ, and adopted the Society’s principles, making it the first permanent Reform Jewish congregation in the U.S.",
      ]),
    ],
  ),
  lesson(
    "10-140",
    "Chartered by local Black farmers",
    "Seashore Farmers' Lodge timeline",
    [
      cited("10-140", "Seashore Farmers' Lodge No. 767", "front and back"),
      span(
        '"34 years" is 1946 minus 1912, the years the marker prints for members taking ownership of the property and the chartering of the lodge.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "lodge",
        kicker: "1912",
        title: "Sol Legare and James Islands",
        partLabel: "the lodge",
        art: art(
          "m10140-lodge.jpg",
          "Illustration of a two-story wooden meeting hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "charter",
            label: "1912",
            x: 32,
            y: 46,
            fact: "In 1912 local Black farmers chartered Lodge No. 767 of the International Liberty Union.",
          },
          {
            id: "communities",
            label: "Sol Legare",
            x: 74,
            y: 58,
            fact: "Known as the Seashore Farmers’ Lodge, it was a fraternal organization that offered a variety of services to members and was an important institution for the African American communities of Sol Legare and James Islands.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "c.1915",
        title: "A two-story meeting hall",
        partLabel: "the hall yard",
        art: art(
          "m10140-yard.jpg",
          "Illustration of the yard of a two-story wooden hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "hall",
            label: "c.1915",
            x: 32,
            y: 48,
            fact: "Members built the two-story meeting hall at this site c.1915. Members took ownership of the property in 1946.",
          },
          {
            id: "services",
            label: "Services",
            x: 74,
            y: 40,
            fact: "The lodge’s services included health and life insurance programs, funerary and financial assistance, agricultural education, and community use of the meeting hall. It is now a museum and cultural center.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1912-1946",
        title: "Years from the charter to ownership",
        partLabel: "34 years",
        value: 34,
        unit: "years",
        meant:
          "What this meant: 1946 comes 34 years after 1912. That is the stretch from the year local Black farmers chartered the lodge to the year members took ownership of the property.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10140-lodge.jpg",
          "Illustration of a two-story wooden meeting hall. Not a historical photograph.",
        ),
        nowArt: art(
          "m10140-today.jpg",
          "Illustration of a blank roadside marker beside a wooden hall. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-story wooden hall, for the meeting hall the marker says members built at this site c.1915. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a wooden hall. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "charter",
            year: "1912",
            label: "Local Black farmers charter the lodge.",
            why: "The marker says that in 1912 local Black farmers chartered Lodge No. 767 of the International Liberty Union. Known as the Seashore Farmers’ Lodge, it was a fraternal organization for the African American communities of Sol Legare and James Islands.",
          },
          {
            id: "hall",
            year: "c.1915",
            label: "Members build the two-story meeting hall.",
            why: "The marker says members built the two-story meeting hall at this site c.1915. The lodge’s services included health and life insurance programs, funerary and financial assistance, agricultural education, and community use of the meeting hall.",
          },
          {
            id: "owned",
            year: "1946",
            label: "Members take ownership of the property.",
            why: "The marker says members took ownership of the property in 1946. It is now a museum and cultural center.",
          },
        ],
        ["owned", "charter", "hall"],
      ),
      takeaway([
        "In 1912 local Black farmers chartered Lodge No. 767 of the International Liberty Union. Known as the Seashore Farmers’ Lodge, it was a fraternal organization that offered a variety of services to members and was an important institution for the African American communities of Sol Legare and James Islands.",
        "Members built the two-story meeting hall at this site c.1915. The lodge’s services included health and life insurance programs, funerary and financial assistance, agricultural education, and community use of the meeting hall.",
        "Members took ownership of the property in 1946. It is now a museum and cultural center.",
      ]),
    ],
  ),
  lesson(
    "10-141",
    "A school for the Red Top community",
    "Tobin-Boyd timeline",
    [cited("10-141", "Tobin-Boyd Elementary School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1961",
        title: "Opened at this site",
        partLabel: "the school",
        art: art(
          "m10141-school.jpg",
          "Illustration of a one-story elementary school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1961",
            x: 32,
            y: 46,
            fact: "Tobin-Boyd Elementary School opened at this site in 1961 to serve Black residents of the Red Top community. It was part of St. Andrew’s School District and named in honor of Maree P. Tobin and Evelyn C. Boyd, two of the district’s longest-serving Black teachers.",
          },
          {
            id: "funded",
            label: "Equalization",
            x: 74,
            y: 58,
            fact: "Its construction was funded by the S.C. equalization program, a state effort to preserve segregation by upgrading Black schools.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1970",
        title: "All-Black until it closed",
        partLabel: "the schoolyard",
        art: art(
          "m10141-yard.jpg",
          "Illustration of an empty schoolyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wallace",
            label: "1953",
            x: 32,
            y: 44,
            fact: "From 1953 to 1961 local children had attended the consolidated Wallace School (8 mi. E), which had replaced the Red Top School south of here on Old Charleston Road.",
          },
          {
            id: "closed",
            label: "1970",
            x: 74,
            y: 56,
            fact: "In its first years Tobin-Boyd enrolled around 200 students. It remained all-Black until closing in 1970 during desegregation. Students from the Red Top area subsequently attended integrated Oakland Elementary in West Ashley.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "First years",
        title: "Students enrolled in the first years",
        partLabel: "around 200 students",
        value: 200,
        unit: "students",
        meant:
          "What this meant: the marker says that in its first years Tobin-Boyd enrolled around 200 students. “Around” stays the marker’s word.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10141-school.jpg",
          "Illustration of a one-story elementary school. Not a historical photograph.",
        ),
        nowArt: art(
          "m10141-today.jpg",
          "Illustration of a blank roadside marker on a quiet road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a one-story school, for Tobin-Boyd Elementary School, which the marker says opened at this site in 1961. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a quiet road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "wallace",
            year: "1953",
            label: "Local children attend the consolidated Wallace School.",
            why: "The marker says that from 1953 to 1961 local children had attended the consolidated Wallace School (8 mi. E), which had replaced the Red Top School south of here on Old Charleston Road.",
          },
          {
            id: "opened",
            year: "1961",
            label: "Tobin-Boyd Elementary School opens at this site.",
            why: "The marker says it opened at this site in 1961 to serve Black residents of the Red Top community. It was part of St. Andrew’s School District and named in honor of Maree P. Tobin and Evelyn C. Boyd, two of the district’s longest-serving Black teachers. Its construction was funded by the S.C. equalization program, a state effort to preserve segregation by upgrading Black schools.",
          },
          {
            id: "closed",
            year: "1970",
            label: "The school closes during desegregation.",
            why: "The marker says that in its first years Tobin-Boyd enrolled around 200 students. It remained all-Black until closing in 1970 during desegregation. Students from the Red Top area subsequently attended integrated Oakland Elementary in West Ashley.",
          },
        ],
        ["closed", "wallace", "opened"],
      ),
      takeaway([
        "Tobin-Boyd Elementary School opened at this site in 1961 to serve Black residents of the Red Top community. It was part of St. Andrew’s School District and named in honor of Maree P. Tobin and Evelyn C. Boyd, two of the district’s longest-serving Black teachers.",
        "Its construction was funded by the S.C. equalization program, a state effort to preserve segregation by upgrading Black schools. From 1953 to 1961 local children had attended the consolidated Wallace School (8 mi. E), which had replaced the Red Top School south of here on Old Charleston Road.",
        "In its first years Tobin-Boyd enrolled around 200 students. It remained all-Black until closing in 1970 during desegregation. Students from the Red Top area subsequently attended integrated Oakland Elementary in West Ashley.",
      ]),
    ],
  ),
];
