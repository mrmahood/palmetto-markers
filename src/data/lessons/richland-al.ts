import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Richland County sites. Facts are from that marker only.
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

export const richlandLessonsAL: MarkerLesson[] = [
  lesson(
    "40-196",
    "Refusing to leave the counter",
    "Sit-in timeline",
    [
      cited("40-196", "Columbia Civil Rights Sit-Ins", "front and back"),
      span(
        '"4 years" is 1964 minus 1960, the years the marker prints for the Civil Rights Act and the sit-in arrests.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "counter",
        kicker: "March 15, 1960",
        title: "Arrested at the Taylor Street Pharmacy",
        partLabel: "the lunch counter",
        art: art(
          "m40196-counter.jpg",
          "Illustration of a lunch counter and stools. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "arrested",
            label: "March 15, 1960",
            x: 32,
            y: 52,
            fact: "On March 15, 1960 five African American students from Benedict College - Charles Barr, David Carter, Richard Counts, Milton Greene, and Johnny Clark - were arrested after refusing to leave the lunch counter at the Taylor Street Pharmacy, which once occupied this building.",
          },
          {
            id: "main",
            label: "Main Street sit-ins",
            x: 74,
            y: 40,
            fact: "Their actions followed similar sit-ins at S.H. Kress and Eckerd's Pharmacy, both located on nearby Main Street.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1964",
        title: "Due process, then the Civil Rights Act",
        partLabel: "the case and the act",
        art: art(
          "m40196-street.jpg",
          "Illustration of a downtown street of storefronts. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "barr",
            label: "Barr v. City of Columbia",
            x: 32,
            y: 46,
            fact: "In Barr v. City of Columbia the U.S. Supreme Court held that lower courts had denied the students due process, as guaranteed by the 14th Amendment. Columbia attorney Matthew J. Perry served as lead counsel and delivered oral arguments to the Court.",
          },
          {
            id: "act",
            label: "Civil Rights Act of 1964",
            x: 74,
            y: 58,
            fact: "The Civil Rights Act of 1964, enacted ten days after the decision in Barr, finally prohibited racial segregation of public accommodations such as hotels and restaurants.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1960-1964",
        title: "Years from the arrests to the Civil Rights Act",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1964 comes 4 years after 1960. That is the stretch from the year of the arrests at the Taylor Street Pharmacy to the year the marker prints for the Civil Rights Act.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40196-counter.jpg",
          "Illustration of a lunch counter and stools. Not a historical photograph.",
        ),
        nowArt: art(
          "m40196-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a lunch counter and stools, for the counter the marker says the students refused to leave at the Taylor Street Pharmacy. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "main",
            year: "Before March 15, 1960",
            label: "Similar sit-ins take place on Main Street.",
            why: "The marker says their actions followed similar sit-ins at S.H. Kress and Eckerd's Pharmacy, both located on nearby Main Street.",
          },
          {
            id: "arrested",
            year: "March 15, 1960",
            label: "Five students are arrested at the Taylor Street Pharmacy.",
            why: "The marker says that on March 15, 1960 five African American students from Benedict College were arrested after refusing to leave the lunch counter at the Taylor Street Pharmacy, which once occupied this building.",
          },
          {
            id: "act",
            year: "1964",
            label: "The Civil Rights Act prohibits segregation of public accommodations.",
            why: "The marker says the Civil Rights Act of 1964, enacted ten days after the decision in Barr, finally prohibited racial segregation of public accommodations such as hotels and restaurants.",
          },
        ],
        ["act", "main", "arrested"],
      ),
      takeaway([
        "On March 15, 1960 five African American students from Benedict College - Charles Barr, David Carter, Richard Counts, Milton Greene, and Johnny Clark - were arrested after refusing to leave the lunch counter at the Taylor Street Pharmacy, which once occupied this building.",
        "Their actions followed similar sit-ins at S.H. Kress and Eckerd's Pharmacy, both located on nearby Main Street. In Barr v. City of Columbia the U.S. Supreme Court held that lower courts had denied the students due process, as guaranteed by the 14th Amendment.",
        "Columbia attorney Matthew J. Perry served as lead counsel and delivered oral arguments to the Court. The Civil Rights Act of 1964, enacted ten days after the decision in Barr, finally prohibited racial segregation of public accommodations such as hotels and restaurants.",
      ]),
    ],
  ),
  lesson(
    "40-197",
    "An independent congregation",
    "New Light Beulah timeline",
    [cited("40-197", "New Light Beulah Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1867",
        title: "Organized when members withdrew",
        partLabel: "the congregation",
        art: art(
          "m40197-church.jpg",
          "Illustration of a wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Organized in 1867",
            x: 32,
            y: 48,
            fact: "New Light Beulah Baptist Church was organized in 1867 when 565 African American members withdrew from Beulah Baptist Church.",
          },
          {
            id: "pastor",
            label: "The first pastor",
            x: 74,
            y: 40,
            fact: "Before the Civil War enslaved people composed the majority of the Beulah congregation. After emancipation they left to form an independent congregation, with Rev. William W. Williams the first pastor.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1871",
        title: "Expelled to a brush arbor",
        partLabel: "the yard",
        art: art(
          "m40197-yard.jpg",
          "Illustration of a brush arbor in a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "expelled",
            label: "Expelled in 1871",
            x: 32,
            y: 54,
            fact: "New Light Beulah shared the sanctuary with the white members, but in 1871 they were forcibly expelled and moved to a brush arbor until a new church was built.",
          },
          {
            id: "conversions",
            label: "1876",
            x: 74,
            y: 42,
            fact: "The congregation persisted and the year 1876 saw a record number of conversions. New Light Beulah has been mother church to many other congregations in its first 150 years.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1867",
        title: "Members who withdrew from Beulah",
        partLabel: "565 members",
        value: 565,
        unit: "members",
        meant:
          "What this meant: the marker says New Light Beulah Baptist Church was organized in 1867 when 565 African American members withdrew from Beulah Baptist Church.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40197-church.jpg",
          "Illustration of a wooden church. Not a historical photograph.",
        ),
        nowArt: art(
          "m40197-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church, for the congregation the marker says was organized in 1867. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1867",
            label: "565 members withdraw and organize New Light Beulah.",
            why: "The marker says New Light Beulah Baptist Church was organized in 1867 when 565 African American members withdrew from Beulah Baptist Church. After emancipation they left to form an independent congregation, with Rev. William W. Williams the first pastor.",
          },
          {
            id: "expelled",
            year: "1871",
            label: "They are expelled and move to a brush arbor.",
            why: "The marker says New Light Beulah shared the sanctuary with the white members, but in 1871 they were forcibly expelled and moved to a brush arbor until a new church was built.",
          },
          {
            id: "conversions",
            year: "1876",
            label: "The year sees a record number of conversions.",
            why: "The marker says the congregation persisted and the year 1876 saw a record number of conversions.",
          },
        ],
        ["conversions", "organized", "expelled"],
      ),
      takeaway([
        "New Light Beulah Baptist Church was organized in 1867 when 565 African American members withdrew from Beulah Baptist Church. Before the Civil War enslaved people composed the majority of the Beulah congregation.",
        "After emancipation they left to form an independent congregation, with Rev. William W. Williams the first pastor. New Light Beulah shared the sanctuary with the white members, but in 1871 they were forcibly expelled and moved to a brush arbor until a new church was built.",
        "The congregation persisted and the year 1876 saw a record number of conversions. New Light Beulah has been mother church to many other congregations in its first 150 years.",
      ]),
    ],
  ),
  lesson(
    "40-198",
    "The first school in Richland Two",
    "Dentsville School timeline",
    [
      cited("40-198", "Dentsville School", "front and back"),
      span(
        '"81 years" is 2007 minus 1926, the years the marker prints for the replacement of the original building and the opening of the school.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1926",
        title: "Opened as a consolidated school",
        partLabel: "the brick school",
        art: art(
          "m40198-school.jpg",
          "Illustration of a brick schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "Opened in 1926",
            x: 32,
            y: 46,
            fact: "Dentsville Consolidated School opened at this site in 1926. The brick building was the first school in the newly created Richland Two school district and served students who had previously attended numerous, smaller schools in the area.",
          },
          {
            id: "dent",
            label: "Named for the Dent family",
            x: 74,
            y: 56,
            fact: "The school was named for the Dent family, who donated the land for the school and also lent their name to the surrounding Dentsville community.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1926-2007",
        title: "The 1926 schoolhouse, then a new building",
        partLabel: "the schoolyard",
        art: art(
          "m40198-yard.jpg",
          "Illustration of a schoolyard beside a brick school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "names",
            label: "1926 to 2007",
            x: 32,
            y: 50,
            fact: "The 1926 schoolhouse served as Dentsville School, 1926-57; Dentsville H.S., 1957-70; Dent Jr. H.S., 1970-78; and Dent Middle School, 1978-2007.",
          },
          {
            id: "admitted",
            label: "1964 and 2007",
            x: 74,
            y: 38,
            fact: "Dentsville School remained racially segregated and for whites only until 1964 when the first two African American students were admitted. The original building was replaced by the current Dent Middle School in 2007.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1926-2007",
        title: "Years from the opening to the replacement",
        partLabel: "81 years",
        value: 81,
        unit: "years",
        meant:
          "What this meant: 2007 comes 81 years after 1926. That is the stretch from the year Dentsville Consolidated School opened to the year the marker prints for the replacement of the original building.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40198-school.jpg",
          "Illustration of a brick schoolhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m40198-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick schoolhouse, for the school the marker says opened at this site in 1926. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "1926",
            label: "Dentsville Consolidated School opens at this site.",
            why: "The marker says Dentsville Consolidated School opened at this site in 1926, and the 1926 schoolhouse served as Dentsville School, 1926-57.",
          },
          {
            id: "high",
            year: "1957",
            label: "The schoolhouse serves as Dentsville H.S.",
            why: "The marker says the 1926 schoolhouse served as Dentsville H.S., 1957-70.",
          },
          {
            id: "admitted",
            year: "1964",
            label: "The first two African American students are admitted.",
            why: "The marker says Dentsville School remained racially segregated and for whites only until 1964 when the first two African American students were admitted.",
          },
          {
            id: "junior",
            year: "1970",
            label: "The schoolhouse serves as Dent Jr. H.S.",
            why: "The marker says the 1926 schoolhouse served as Dent Jr. H.S., 1970-78.",
          },
          {
            id: "middle",
            year: "1978",
            label: "The schoolhouse serves as Dent Middle School.",
            why: "The marker says the 1926 schoolhouse served as Dent Middle School, 1978-2007.",
          },
          {
            id: "replaced",
            year: "2007",
            label: "The original building is replaced.",
            why: "The marker says the original building was replaced by the current Dent Middle School in 2007.",
          },
        ],
        ["middle", "opened", "replaced", "high", "junior", "admitted"],
      ),
      takeaway([
        "Dentsville Consolidated School opened at this site in 1926. The brick building was the first school in the newly created Richland Two school district and served students who had previously attended numerous, smaller schools in the area.",
        "The school was named for the Dent family, who donated the land for the school and also lent their name to the surrounding Dentsville community. The 1926 schoolhouse served as Dentsville School, 1926-57; Dentsville H.S., 1957-70; Dent Jr. H.S., 1970-78; and Dent Middle School, 1978-2007.",
        "Dentsville School remained racially segregated and for whites only until 1964 when the first two African American students were admitted. The original building was replaced by the current Dent Middle School in 2007.",
      ]),
    ],
  ),
  lesson(
    "40-199",
    "Set aside for mill workers",
    "Olympia Cemetery timeline",
    [
      cited("40-199", "Olympia Cemetery", "front and back"),
      span(
        '"40 years" is 1944 minus 1904, the years the marker prints for the deed to the Olympia Cemetery Association and the establishment of the cemetery.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "cemetery",
        kicker: "c. 1904",
        title: "A cemetery for mill families",
        partLabel: "the cemetery",
        art: art(
          "m40199-cemetery.jpg",
          "Illustration of a cemetery of blank headstones. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "Established c. 1904",
            x: 32,
            y: 50,
            fact: "The Olympia Cemetery was established c. 1904 and served the families of mill workers from Capital City, Richland, Granby, and Olympia Mills.",
          },
          {
            id: "plots",
            label: "A plot when someone died",
            x: 74,
            y: 40,
            fact: "The land was set aside by W.B. Smith Whaley & Co. When a death occurred the company would provide a burial plot.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gate",
        kicker: "1944",
        title: "Deeded to the cemetery association",
        partLabel: "the gate",
        art: art(
          "m40199-gate.jpg",
          "Illustration of a cemetery gate and a path. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "deeded",
            label: "Deeded in 1944",
            x: 32,
            y: 46,
            fact: "In 1944, Pacific Mills, which had purchased the Whaley Mills in 1915, deeded ownership to the Olympia Cemetery Association. The Association drew its members from the eight Olympia community churches.",
          },
          {
            id: "graves",
            label: "Marked and unmarked",
            x: 74,
            y: 58,
            fact: "The oldest portion of the cemetery is the SW section, with more recent burials proceeding to the NE. Oral tradition holds that when a child in the community died, mill workers would build a wooden coffin, line it with material from the company store, and carry it to the gravesite. It is believed that, in addition to the many gravesites marked by headstones, there are also many unmarked burials in Olympia Cemetery.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "c. 1904-1944",
        title: "Years from the establishment to the deed",
        partLabel: "40 years",
        value: 40,
        unit: "years",
        meant:
          "What this meant: 1944 comes 40 years after 1904. That is the stretch from the year the marker prints for the establishment of the cemetery, c. 1904, to the year Pacific Mills deeded ownership to the Olympia Cemetery Association.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40199-cemetery.jpg",
          "Illustration of a cemetery of blank headstones. Not a historical photograph.",
        ),
        nowArt: art(
          "m40199-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cemetery, for the cemetery the marker says was established c. 1904. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "established",
            year: "c. 1904",
            label: "The cemetery is established for mill families.",
            why: "The marker says the Olympia Cemetery was established c. 1904 and served the families of mill workers from Capital City, Richland, Granby, and Olympia Mills. The land was set aside by W.B. Smith Whaley & Co.",
          },
          {
            id: "purchased",
            year: "1915",
            label: "Pacific Mills purchases the Whaley Mills.",
            why: "The marker says Pacific Mills had purchased the Whaley Mills in 1915.",
          },
          {
            id: "deeded",
            year: "1944",
            label: "Pacific Mills deeds the cemetery to the association.",
            why: "The marker says that in 1944 Pacific Mills deeded ownership to the Olympia Cemetery Association. The Association drew its members from the eight Olympia community churches.",
          },
        ],
        ["deeded", "established", "purchased"],
      ),
      takeaway([
        "The Olympia Cemetery was established c. 1904 and served the families of mill workers from Capital City, Richland, Granby, and Olympia Mills. The land was set aside by W.B. Smith Whaley & Co. When a death occurred the company would provide a burial plot.",
        "In 1944, Pacific Mills, which had purchased the Whaley Mills in 1915, deeded ownership to the Olympia Cemetery Association. The Association drew its members from the eight Olympia community churches.",
        "The oldest portion of the cemetery is the SW section, with more recent burials proceeding to the NE. Oral tradition holds that when a child in the community died, mill workers would build a wooden coffin, line it with material from the company store, and carry it to the gravesite. It is believed that, in addition to the many gravesites marked by headstones, there are also many unmarked burials in Olympia Cemetery.",
      ]),
    ],
  ),
];
