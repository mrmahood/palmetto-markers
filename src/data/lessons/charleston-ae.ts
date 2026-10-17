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

export const charlestonLessonsAE: MarkerLesson[] = [
  lesson(
    "10-142",
    "A tenement in Liberty Hill",
    "Louie Tenement timeline",
    [
      cited("10-142", "Louie Tenement", "front and back"),
      span(
        '"74 years" is 1950 minus 1876, the years the marker prints for Louis “Louie” Joseph.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "building",
        kicker: "c.1928",
        title: "Developed near this intersection",
        partLabel: "the tenement",
        art: art(
          "m10142-building.jpg",
          "Illustration of wood-frame shotgun houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "hill",
            label: "1871",
            x: 32,
            y: 46,
            fact: "Near this intersection is the site of Louie Tenement, a housing complex that served residents of North Charleston’s Liberty Hill community. Liberty Hill was established in 1871 as a settlement for formerly enslaved African Americans.",
          },
          {
            id: "joseph",
            label: "Louis “Louie” Joseph",
            x: 74,
            y: 38,
            fact: "The tenement near this site was developed c.1928 by Louis “Louie” Joseph (1876-1950), a Syrian immigrant who came to the U.S. from Damascus in 1901. He worked in Charleston as a peddler before moving to Liberty Hill by 1920.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "Early 1970s",
        title: "Houses on roughly one acre",
        partLabel: "the street",
        art: art(
          "m10142-street.jpg",
          "Illustration of a street of small wood-frame houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "houses",
            label: "Around a dozen",
            x: 32,
            y: 52,
            fact: "Louie Tenement included around a dozen wood frame shotgun houses situated on roughly one-acre of land. It became a well-known Liberty Hill enclave and a valuable source of housing for local Black residents during segregation.",
          },
          {
            id: "later",
            label: "1950",
            x: 74,
            y: 40,
            fact: "Louis Joseph also operated a local grocery store. His 1950 death certificate listed his father’s surname as “Masphy.” The complex stood into the early 1970s, when houses began being demolished. None remained by the end of the 1980s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1876-1950",
        title: "Years the marker prints for Louis Joseph",
        partLabel: "74 years",
        value: 74,
        unit: "years",
        meant:
          "What this meant: 1950 comes 74 years after 1876. That is the stretch the marker prints for Louis “Louie” Joseph.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10142-building.jpg",
          "Illustration of wood-frame shotgun houses. Not a historical photograph.",
        ),
        nowArt: art(
          "m10142-today.jpg",
          "Illustration of a blank roadside marker at a street intersection. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of wood-frame shotgun houses, for Louie Tenement, which the marker says was developed c.1928 near this intersection. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker at a street intersection. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "hill",
            year: "1871",
            label: "Liberty Hill is established.",
            why: "The marker says Liberty Hill was established in 1871 as a settlement for formerly enslaved African Americans.",
          },
          {
            id: "arrived",
            year: "1901",
            label: "Louis Joseph comes to the U.S. from Damascus.",
            why: "The marker says he was a Syrian immigrant who came to the U.S. from Damascus in 1901. It prints his years as 1876-1950.",
          },
          {
            id: "moved",
            year: "By 1920",
            label: "He moves to Liberty Hill.",
            why: "The marker says he worked in Charleston as a peddler before moving to Liberty Hill by 1920.",
          },
          {
            id: "developed",
            year: "c.1928",
            label: "He develops Louie Tenement.",
            why: "The marker says the tenement near this site was developed c.1928 by Louis “Louie” Joseph.",
          },
        ],
        ["developed", "hill", "moved", "arrived"],
      ),
      takeaway([
        "Near this intersection is the site of Louie Tenement, a housing complex that served residents of North Charleston’s Liberty Hill community. Liberty Hill was established in 1871 as a settlement for formerly enslaved African Americans.",
        "The tenement near this site was developed c.1928 by Louis “Louie” Joseph (1876-1950), a Syrian immigrant who came to the U.S. from Damascus in 1901. He worked in Charleston as a peddler before moving to Liberty Hill by 1920.",
        "Louie Tenement included around a dozen wood frame shotgun houses situated on roughly one-acre of land. Louis Joseph also operated a local grocery store. His 1950 death certificate listed his father’s surname as “Masphy.” The complex stood into the early 1970s, when houses began being demolished. None remained by the end of the 1980s.",
      ]),
    ],
  ),
  lesson(
    "10-143",
    "An industrial school for Marvyille",
    "Deming School timeline",
    [cited("10-143", "Frederick Deming Jr. Industrial School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1892",
        title: "Opened at this site",
        partLabel: "the school",
        art: art(
          "m10143-school.jpg",
          "Illustration of a wooden school building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1892",
            x: 32,
            y: 44,
            fact: "The Frederick Deming Jr. Industrial School opened at this site in 1892. It was founded to serve African American residents of Marvyille, a Black town chartered in 1886 and later annexed into the City of Charleston.",
          },
          {
            id: "leaders",
            label: "The AMA",
            x: 74,
            y: 36,
            fact: "Early school leaders included Mary Matthews Just, Rev. George Clinton Rowe, and Joseph C. Berry. It was supported by the American Missionary Association (AMA) and named for an AMA benefactor.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1897",
        title: "Burned, closed, then a playground",
        partLabel: "the yard",
        art: art(
          "m10143-yard.jpg",
          "Illustration of a schoolyard and a low wooden building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "burned",
            label: "1897",
            x: 32,
            y: 50,
            fact: "The original Deming School campus included a 2-story classroom and teacherage building, and an annex. Both burned in 1897 and were replaced by a 1-story wooden building. Deming was part of St. Andrew’s School District No. 10.",
          },
          {
            id: "closed",
            label: "1953",
            x: 74,
            y: 40,
            fact: "It closed in 1953 and had around 200 students in grades 1-8 in its last year. Students then attended Wallace Consolidated School (2 mi. W). Deming was razed a few years later, and a playground opened in 1962.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1953",
        title: "Students in the last year",
        partLabel: "around 200 students",
        value: 200,
        unit: "students",
        meant:
          "What this meant: the marker says Deming closed in 1953 and had around 200 students in grades 1-8 in its last year. “Around” stays the marker’s word.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10143-school.jpg",
          "Illustration of a wooden school building. Not a historical photograph.",
        ),
        nowArt: art(
          "m10143-today.jpg",
          "Illustration of a blank roadside marker beside an empty yard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden school, for the Frederick Deming Jr. Industrial School, which the marker says opened at this site in 1892. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside an empty yard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "town",
            year: "1886",
            label: "Marvyille is chartered.",
            why: "The marker says Marvyille was a Black town chartered in 1886 and later annexed into the City of Charleston. The school was founded to serve its African American residents.",
          },
          {
            id: "opened",
            year: "1892",
            label: "The Frederick Deming Jr. Industrial School opens.",
            why: "The marker says the school opened at this site in 1892. Early leaders included Mary Matthews Just, Rev. George Clinton Rowe, and Joseph C. Berry. It was supported by the American Missionary Association (AMA) and named for an AMA benefactor.",
          },
          {
            id: "burned",
            year: "1897",
            label: "The original campus buildings burn.",
            why: "The marker says the original campus included a 2-story classroom and teacherage building, and an annex. Both burned in 1897 and were replaced by a 1-story wooden building. Deming was part of St. Andrew’s School District No. 10.",
          },
          {
            id: "closed",
            year: "1953",
            label: "The school closes.",
            why: "The marker says it closed in 1953 and had around 200 students in grades 1-8 in its last year. Students then attended Wallace Consolidated School (2 mi. W).",
          },
          {
            id: "playground",
            year: "1962",
            label: "A playground opens.",
            why: "The marker says Deming was razed a few years later, and a playground opened in 1962.",
          },
        ],
        ["playground", "opened", "town", "closed", "burned"],
      ),
      takeaway([
        "The Frederick Deming Jr. Industrial School opened at this site in 1892. It was founded to serve African American residents of Marvyille, a Black town chartered in 1886 and later annexed into the City of Charleston.",
        "Early school leaders included Mary Matthews Just, Rev. George Clinton Rowe, and Joseph C. Berry. It was supported by the American Missionary Association (AMA) and named for an AMA benefactor. The original campus, a 2-story classroom and teacherage building and an annex, burned in 1897 and was replaced by a 1-story wooden building. Deming was part of St. Andrew’s School District No. 10.",
        "It closed in 1953 and had around 200 students in grades 1-8 in its last year. Students then attended Wallace Consolidated School (2 mi. W). Deming was razed a few years later, and a playground opened in 1962.",
      ]),
    ],
  ),
  lesson(
    "10-144",
    "Houses for a wartime shortage",
    "Byrnes Downs timeline",
    [cited("10-144", "Byrnes Downs", "front and back")],
    [
      {
        kind: "scene",
        id: "houses",
        kicker: "1944",
        title: "Construction begins on farmland",
        partLabel: "the houses",
        art: art(
          "m10144-houses.jpg",
          "Illustration of modest subdivision houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "began",
            label: "1944",
            x: 32,
            y: 48,
            fact: "Byrnes Downs dates to the 1940s and was one of several West Ashley subdivisions created to relieve WWII-era housing shortages. It was built by Long Construction Co. on farmland bisected by the Atlantic Coast Line R.R., now the West Ashley Greenway. Construction began in 1944 and the first home was sold in 1945.",
          },
          {
            id: "named",
            label: "James F. Byrnes",
            x: 74,
            y: 36,
            fact: "Byrnes Downs was named for prominent S.C. politician James F. Byrnes, a native of Charleston and friend of the Long family. It was first developed by the V-Housing Corporation to house white defense workers. Children attended Albemarle and St. Andrew’s Schools.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1948",
        title: "Oaks on the neighborhood streets",
        partLabel: "the street",
        art: art(
          "m10144-street.jpg",
          "Illustration of a street shaded by oak trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "club",
            label: "1948",
            x: 32,
            y: 54,
            fact: "The Byrnes Downs Garden Club organized in 1948 and soon after planted more than 100 oak trees, many still found on neighborhood streets.",
          },
          {
            id: "homes",
            label: "By the 1950s",
            x: 74,
            y: 40,
            fact: "By the 1950s it included about 370 homes, each based on one of five design models, as well as commercial properties along U.S. 17. The nearly 90-acre neighborhood is bounded roughly by Coburg Rd., Colleton Dr., Campbell Dr., and U.S. 17.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "By the 1950s",
        title: "Homes in the neighborhood",
        partLabel: "about 370 homes",
        value: 370,
        unit: "homes",
        meant:
          "What this meant: the marker says that by the 1950s Byrnes Downs included about 370 homes, each based on one of five design models. “About” stays the marker’s word.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10144-houses.jpg",
          "Illustration of modest subdivision houses. Not a historical photograph.",
        ),
        nowArt: art(
          "m10144-today.jpg",
          "Illustration of a blank roadside marker on a residential street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of modest houses, for Byrnes Downs, where the marker says construction began in 1944 and the first home was sold in 1945. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a residential street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "began",
            year: "1944",
            label: "Construction begins.",
            why: "The marker says construction began in 1944. Byrnes Downs dates to the 1940s and was built by Long Construction Co. on farmland bisected by the Atlantic Coast Line R.R., now the West Ashley Greenway.",
          },
          {
            id: "sold",
            year: "1945",
            label: "The first home is sold.",
            why: "The marker says the first home was sold in 1945. It was first developed by the V-Housing Corporation to house white defense workers.",
          },
          {
            id: "club",
            year: "1948",
            label: "The Byrnes Downs Garden Club organizes.",
            why: "The marker says the garden club organized in 1948 and soon after planted more than 100 oak trees, many still found on neighborhood streets.",
          },
          {
            id: "homes",
            year: "By the 1950s",
            label: "The neighborhood includes about 370 homes.",
            why: "The marker says that by the 1950s it included about 370 homes, each based on one of five design models, as well as commercial properties along U.S. 17.",
          },
        ],
        ["homes", "began", "club", "sold"],
      ),
      takeaway([
        "Byrnes Downs dates to the 1940s and was one of several West Ashley subdivisions created to relieve WWII-era housing shortages. It was built by Long Construction Co. on farmland bisected by the Atlantic Coast Line R.R., now the West Ashley Greenway. Construction began in 1944 and the first home was sold in 1945.",
        "Byrnes Downs was named for prominent S.C. politician James F. Byrnes, a native of Charleston and friend of the Long family. It was first developed by the V-Housing Corporation to house white defense workers. Children attended Albemarle and St. Andrew’s Schools.",
        "The nearly 90-acre neighborhood is bounded roughly by Coburg Rd., Colleton Dr., Campbell Dr., and U.S. 17. By the 1950s it included about 370 homes, each based on one of five design models, as well as commercial properties along U.S. 17. The Byrnes Downs Garden Club organized in 1948 and soon after planted more than 100 oak trees, many still found on neighborhood streets.",
      ]),
    ],
  ),
  lesson(
    "10-145",
    "A wood frame church on Edisto",
    "Edisto Island Baptist Church timeline",
    [cited("10-145", "Edisto Island Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1818",
        title: "Built as Edisto Island Baptist Church",
        partLabel: "the church",
        art: art(
          "m10145-church.jpg",
          "Illustration of a wood-frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1818",
            x: 32,
            y: 42,
            fact: "This wood frame church was built in 1818 as Edisto Island Baptist Church. The church was founded primarily through the efforts of Hephzibah Jenkins Townsend (1780-1847), a white woman who sought to revive Baptist worship on Edisto Island after years of dormancy.",
          },
          {
            id: "worship",
            label: "Antebellum era",
            x: 74,
            y: 56,
            fact: "In the antebellum era most who worshipped here were enslaved African Americans who worked on local plantations.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1860",
        title: "Members, then a reorganization",
        partLabel: "the yard",
        art: art(
          "m10145-yard.jpg",
          "Illustration of a churchyard and a tabby foundation. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "members",
            label: "1860",
            x: 32,
            y: 48,
            fact: "In 1860, Edisto Island Baptist Church had more than 450 Black members and a white minister. The congregation was part of the Charleston Association.",
          },
          {
            id: "later",
            label: "After the Civil War",
            x: 74,
            y: 38,
            fact: "After abolition, local freedpeople reorganized the church under Black leadership. It had more than 1,000 members after the Civil War. The original square-shaped section rests on a tabby foundation and was likely expanded around that time.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "After the Civil War",
        title: "Members after the Civil War",
        partLabel: "more than 1,000 members",
        value: 1000,
        unit: "members",
        meant:
          "What this meant: the marker says the church had more than 1,000 members after the Civil War. “More than” stays the marker’s word.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10145-church.jpg",
          "Illustration of a wood-frame church. Not a historical photograph.",
        ),
        nowArt: art(
          "m10145-today.jpg",
          "Illustration of a blank roadside marker on a quiet road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wood-frame church, for Edisto Island Baptist Church, which the marker says was built in 1818. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a quiet road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1818",
            label: "The wood frame church is built.",
            why: "The marker says this wood frame church was built in 1818 as Edisto Island Baptist Church. It was founded primarily through the efforts of Hephzibah Jenkins Townsend (1780-1847), a white woman who sought to revive Baptist worship on Edisto Island after years of dormancy. In the antebellum era most who worshipped here were enslaved African Americans who worked on local plantations.",
          },
          {
            id: "members",
            year: "1860",
            label: "The church has more than 450 Black members.",
            why: "The marker says that in 1860 Edisto Island Baptist Church had more than 450 Black members and a white minister. The congregation was part of the Charleston Association.",
          },
          {
            id: "later",
            year: "After the Civil War",
            label: "Freedpeople reorganize the church.",
            why: "The marker says that after abolition, local freedpeople reorganized the church under Black leadership. It had more than 1,000 members after the Civil War. The original square-shaped section rests on a tabby foundation and was likely expanded around that time.",
          },
        ],
        ["later", "built", "members"],
      ),
      takeaway([
        "This wood frame church was built in 1818 as Edisto Island Baptist Church. The church was founded primarily through the efforts of Hephzibah Jenkins Townsend (1780-1847), a white woman who sought to revive Baptist worship on Edisto Island after years of dormancy.",
        "In the antebellum era most who worshipped here were enslaved African Americans who worked on local plantations. In 1860, Edisto Island Baptist Church had more than 450 Black members and a white minister. The congregation was part of the Charleston Association.",
        "After abolition, local freedpeople reorganized the church under Black leadership. It had more than 1,000 members after the Civil War. The original square-shaped section rests on a tabby foundation and was likely expanded around that time.",
      ]),
    ],
  ),
];
