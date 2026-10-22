import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Darlington sites. Facts are from that marker only.
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

export const darlingtonLessonsV: MarkerLesson[] = [
  lesson(
    "16-89",
    "Mountain of Oaks",
    "Mount Elon Baptist Church timeline",
    [
      cited("16-89", "Mount Elon Baptist Church", "front and back"),
      span("80 years is 1911 minus 1831 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "oaks",
        kicker: "1831",
        title: "Mountain of Oaks",
        partLabel: "the congregation",
        art: art(
          "m1689-oaks.jpg",
          "Illustration of a wooden meeting house among oak trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1831",
            x: 32,
            y: 48,
            fact: "Mount Elon Baptist Church organized in 1831. The congregation was among the first to join the Welsh Neck Baptist Association, formed in 1832.",
          },
          {
            id: "name",
            label: "Mountain of Oaks",
            x: 74,
            y: 40,
            fact: "The church’s name translates to “Mountain of Oaks” in Hebrew and was taken from nearby Mount Elon Post Office. Congregants shared ministers with other local churches until 1908, when Rev. H.B. Jones was hired as Mount Elon’s first full-time pastor.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gothic",
        kicker: "1855",
        title: "The first African American deacon",
        partLabel: "the deacon and the church",
        art: art(
          "m1689-gothic.jpg",
          "Illustration of a Carpenter Gothic wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "enoch",
            label: "1855",
            x: 32,
            y: 46,
            fact: "In 1855, an enslaved man named Enoch became Mount Elon’s first African American deacon. Female members gained the right to vote in calling new preachers in 1859.",
          },
          {
            id: "built",
            label: "1911",
            x: 74,
            y: 36,
            fact: "In the early 1870s, Mount Elon members organized one of the first Baptist women’s missionary societies in S.C. The current Carpenter Gothic church was built in 1911 and is Mount Elon’s third church building.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1831–1911",
        title: "Years from the organization to the third church",
        partLabel: "80 years",
        value: 80,
        unit: "years",
        meant:
          "What this meant: 80 years is 1911 minus 1831 on the marker. The marker says Mount Elon Baptist Church organized in 1831. The current Carpenter Gothic church was built in 1911 and is Mount Elon’s third church building.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1689-oaks.jpg",
          "Illustration of a wooden meeting house among oak trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m1689-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a wooden meeting house among oak trees, for the church the marker says organized in 1831.",
        nowCaption: "Illustration of a blank roadside marker on the same ground.",
      },
      order(
        [
          {
            id: "organized",
            year: "1831",
            label: "Mount Elon Baptist Church organizes.",
            why: "The marker says Mount Elon Baptist Church organized in 1831.",
          },
          {
            id: "enoch",
            year: "1855",
            label: "Enoch becomes the first African American deacon.",
            why: "The marker says that in 1855, an enslaved man named Enoch became Mount Elon’s first African American deacon.",
          },
          {
            id: "pastor",
            year: "1908",
            label: "Rev. H.B. Jones is hired as the first full-time pastor.",
            why: "The marker says congregants shared ministers with other local churches until 1908, when Rev. H.B. Jones was hired as Mount Elon’s first full-time pastor.",
          },
          {
            id: "built",
            year: "1911",
            label: "The current Carpenter Gothic church is built.",
            why: "The marker says the current Carpenter Gothic church was built in 1911 and is Mount Elon’s third church building.",
          },
        ],
        ["pastor", "organized", "built", "enoch"],
      ),
      takeaway([
        "Mount Elon Baptist Church organized in 1831. The church’s name translates to “Mountain of Oaks” in Hebrew and was taken from nearby Mount Elon Post Office.",
        "In 1855, an enslaved man named Enoch became Mount Elon’s first African American deacon. Female members gained the right to vote in calling new preachers in 1859.",
        "The current Carpenter Gothic church was built in 1911 and is Mount Elon’s third church building.",
      ]),
    ],
  ),
  lesson(
    "16-90",
    "As many as 1,300 members",
    "Bethesda Baptist Church timeline",
    [cited("16-90", "Bethesda Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "organized",
        kicker: "1867",
        title: "Granted dismissal to form their own congregation",
        partLabel: "the new congregation",
        art: art(
          "m1690-frame.jpg",
          "Illustration of a plain frame church beside a cemetery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1867",
            x: 32,
            y: 48,
            fact: "Bethesda Baptist Church organized in 1867 when African American members of Welsh Neck Baptist Church were granted dismissal to form their own congregation. The church’s first minister was Rev. James Hamilton.",
          },
          {
            id: "association",
            label: "Cemetery",
            x: 74,
            y: 40,
            fact: "Bethesda was originally part of the Gethsemane Baptist Association and later joined the Pee Dee Association. The church cemetery is located north of here behind Welsh Neck Cemetery.",
          },
        ],
      },
      {
        kind: "scene",
        id: "members",
        kicker: "1880s",
        title: "As many as 1,300 members",
        partLabel: "the congregation",
        art: art(
          "m1690-yard.jpg",
          "Illustration of a modest brick church in an empty yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "members",
            label: "1,300",
            x: 32,
            y: 46,
            fact: "Bethesda Baptist Church had as many as 1,300 members in the 1880s and was for a time the largest black Baptist congregation in the Pee Dee. Nearby Union Baptist Church was formed by Bethesda members in 1885.",
          },
          {
            id: "burned",
            label: "1971",
            x: 74,
            y: 36,
            fact: "The current church bulding was constructed in 1971 and is the fourth to have served the congregation. The previous three churches burned in 1871, 1934, and 1969.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1880s",
        title: "Members in the 1880s",
        partLabel: "1,300 members",
        value: 1300,
        unit: "members",
        meant:
          "What this meant: the marker says Bethesda Baptist Church had as many as 1,300 members in the 1880s and was for a time the largest black Baptist congregation in the Pee Dee.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1690-frame.jpg",
          "Illustration of a plain frame church beside a cemetery. Not a historical photograph.",
        ),
        nowArt: art(
          "m1690-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a plain frame church beside a cemetery, for the congregation the marker says organized in 1867.",
        nowCaption: "Illustration of a blank roadside marker on the same ground.",
      },
      order(
        [
          {
            id: "organized",
            year: "1867",
            label: "Bethesda Baptist Church organizes.",
            why: "The marker says Bethesda Baptist Church organized in 1867 when African American members of Welsh Neck Baptist Church were granted dismissal to form their own congregation.",
          },
          {
            id: "burned",
            year: "1871",
            label: "A previous church burns.",
            why: "The marker says the previous three churches burned in 1871, 1934, and 1969.",
          },
          {
            id: "union",
            year: "1885",
            label: "Union Baptist Church is formed by Bethesda members.",
            why: "The marker says nearby Union Baptist Church was formed by Bethesda members in 1885.",
          },
          {
            id: "built",
            year: "1971",
            label: "The current church is constructed.",
            why: "The marker says the current church bulding was constructed in 1971 and is the fourth to have served the congregation.",
          },
        ],
        ["union", "built", "organized", "burned"],
      ),
      takeaway([
        "Bethesda Baptist Church organized in 1867 when African American members of Welsh Neck Baptist Church were granted dismissal to form their own congregation.",
        "Bethesda Baptist Church had as many as 1,300 members in the 1880s and was for a time the largest black Baptist congregation in the Pee Dee.",
        "The current church bulding was constructed in 1971 and is the fourth to have served the congregation. The previous three churches burned in 1871, 1934, and 1969.",
      ]),
    ],
  ),
  lesson(
    "16-91",
    "A 4-teacher school",
    "Cherry Grove Baptist Church timeline",
    [cited("16-91", "Cherry Grove Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "founded",
        kicker: "1869",
        title: "Later adopting the name Cherry Grove",
        partLabel: "the congregation",
        art: art(
          "m1691-grove.jpg",
          "Illustration of a small frame church in a grove. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1869",
            x: 32,
            y: 48,
            fact: "Former members of Swift Ceek Baptist Church (3 mi. W) founded this church in 1869, later adopting the name “Cherry Grove.”",
          },
          {
            id: "site",
            label: "1878",
            x: 74,
            y: 40,
            fact: "They obtained this site in 1878 to build their first permanent church, and land 1½ mi. NW for a cemetery in 1889. The church was originally part of the Gethsemane Baptist Association, Upper Division, and later joined the Pee Dee Baptist Association.",
          },
        ],
      },
      {
        kind: "scene",
        id: "school",
        kicker: "1920-21",
        title: "A 4-teacher school",
        partLabel: "the school",
        art: art(
          "m1691-school.jpg",
          "Illustration of a small rural schoolhouse beside a church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "school",
            label: "1920-21",
            x: 32,
            y: 46,
            fact: "For many years, Cherry Grove Baptist Church supported a public school for African Americans. In 1920-21, the Julius Rosenwald Fund helped build a 4-teacher school to the church’s west, one of 14 Rosenwald schools to be built in Darlington Co.",
          },
          {
            id: "closed",
            label: "1956",
            x: 74,
            y: 36,
            fact: "It was part of Swift Creek School District (No. 8) and eventually served grades 1-7. Cherry Grove School closed in 1956 and no longer stands.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1920-21",
        title: "Teachers at the school",
        partLabel: "4 teachers",
        value: 4,
        unit: "teachers",
        meant:
          "What this meant: the marker says in 1920-21, the Julius Rosenwald Fund helped build a 4-teacher school to the church’s west, one of 14 Rosenwald schools to be built in Darlington Co.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1691-school.jpg",
          "Illustration of a small rural schoolhouse beside a church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1691-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a small rural schoolhouse beside a church, for the 4-teacher school the marker says the Julius Rosenwald Fund helped build in 1920-21.",
        nowCaption: "Illustration of a blank roadside marker on the same ground.",
      },
      order(
        [
          {
            id: "founded",
            year: "1869",
            label: "Former members of Swift Ceek Baptist Church found this church.",
            why: "The marker says former members of Swift Ceek Baptist Church (3 mi. W) founded this church in 1869, later adopting the name “Cherry Grove.”",
          },
          {
            id: "site",
            year: "1878",
            label: "They obtain this site for the first permanent church.",
            why: "The marker says they obtained this site in 1878 to build their first permanent church, and land 1½ mi. NW for a cemetery in 1889.",
          },
          {
            id: "school",
            year: "1920-21",
            label: "A 4-teacher school is built west of the church.",
            why: "The marker says in 1920-21, the Julius Rosenwald Fund helped build a 4-teacher school to the church’s west, one of 14 Rosenwald schools to be built in Darlington Co.",
          },
          {
            id: "closed",
            year: "1956",
            label: "Cherry Grove School closes.",
            why: "The marker says Cherry Grove School closed in 1956 and no longer stands.",
          },
        ],
        ["school", "founded", "closed", "site"],
      ),
      takeaway([
        "Former members of Swift Ceek Baptist Church (3 mi. W) founded this church in 1869, later adopting the name “Cherry Grove.”",
        "They obtained this site in 1878 to build their first permanent church, and land 1½ mi. NW for a cemetery in 1889.",
        "In 1920-21, the Julius Rosenwald Fund helped build a 4-teacher school to the church’s west, one of 14 Rosenwald schools to be built in Darlington Co. Cherry Grove School closed in 1956 and no longer stands.",
      ]),
    ],
  ),
  lesson(
    "16-92",
    "Born from a series of tent revivals",
    "Kelleytown Baptist Church timeline",
    [
      cited("16-92", "Kelleytown Baptist Church", "front and back"),
      span("55 years is 1979 minus 1924 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "revivals",
        kicker: "1923",
        title: "Born from a series of tent revivals",
        partLabel: "the tent revivals",
        art: art(
          "m1692-tent.jpg",
          "Illustration of a plain canvas meeting tent in a field. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1923",
            x: 32,
            y: 48,
            fact: "Kelleytown Baptist Church formally organized in 1923. It was born from a series of tent revivals held at this site by Rev. Robert L. Lundy.",
          },
          {
            id: "setaside",
            label: "1843",
            x: 74,
            y: 40,
            fact: "Tradition holds that Jacob Kelley set aside the site in 1843 for a graveyard and meeting house. Members met in nearby Kelleytown School until the first church building was constructed in 1924 using locally harvested timber.",
          },
        ],
      },
      {
        kind: "scene",
        id: "timber",
        kicker: "1924",
        title: "Using locally harvested timber",
        partLabel: "the timber church",
        art: art(
          "m1692-timber.jpg",
          "Illustration of a timber church with a brick wing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wing",
            label: "1953",
            x: 32,
            y: 46,
            fact: "In 1924 the Kelleytown congregation joined the Welsh Neck Baptist Association. An education wing was added to the original church in 1953, at which time the building was brick-veneered.",
          },
          {
            id: "newone",
            label: "1979",
            x: 74,
            y: 36,
            fact: "Another two-story education building was built in 1965. Members continued to worship in the original sanctuary until 1979 when a new one was built to its north. The first building still remains.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1924–1979",
        title: "Years in the original sanctuary",
        partLabel: "55 years",
        value: 55,
        unit: "years",
        meant:
          "What this meant: 55 years is 1979 minus 1924 on the marker. The marker says the first church building was constructed in 1924 using locally harvested timber. Members continued to worship in the original sanctuary until 1979 when a new one was built to its north.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1692-tent.jpg",
          "Illustration of a plain canvas meeting tent in a field. Not a historical photograph.",
        ),
        nowArt: art(
          "m1692-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a plain canvas meeting tent in a field, for the tent revivals the marker says were held at this site.",
        nowCaption: "Illustration of a blank roadside marker on the same ground.",
      },
      order(
        [
          {
            id: "setaside",
            year: "1843",
            label: "Jacob Kelley sets aside the site.",
            why: "The marker says tradition holds that Jacob Kelley set aside the site in 1843 for a graveyard and meeting house.",
          },
          {
            id: "organized",
            year: "1923",
            label: "Kelleytown Baptist Church formally organizes.",
            why: "The marker says Kelleytown Baptist Church formally organized in 1923. It was born from a series of tent revivals held at this site by Rev. Robert L. Lundy.",
          },
          {
            id: "built",
            year: "1924",
            label: "The first church building is constructed.",
            why: "The marker says members met in nearby Kelleytown School until the first church building was constructed in 1924 using locally harvested timber.",
          },
          {
            id: "newone",
            year: "1979",
            label: "A new sanctuary is built to the north.",
            why: "The marker says members continued to worship in the original sanctuary until 1979 when a new one was built to its north. The first building still remains.",
          },
        ],
        ["built", "setaside", "newone", "organized"],
      ),
      takeaway([
        "Kelleytown Baptist Church formally organized in 1923. It was born from a series of tent revivals held at this site by Rev. Robert L. Lundy.",
        "Tradition holds that Jacob Kelley set aside the site in 1843 for a graveyard and meeting house. The first church building was constructed in 1924 using locally harvested timber.",
        "Members continued to worship in the original sanctuary until 1979 when a new one was built to its north. The first building still remains.",
      ]),
    ],
  ),
];
