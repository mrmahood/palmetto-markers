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

export const richlandLessonsAO: MarkerLesson[] = [
  lesson(
    "40-208",
    "An Italianate home built for the Mintons",
    "Minton home timeline",
    [
      cited("40-208", "Minton Family Home", "front and back"),
      span(
        '"5 years" is 1877 minus 1872, the years the marker prints for leaving Columbia and the building of this home.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "c. 1872",
        title: "Built for the Mintons",
        partLabel: "the house",
        art: art(
          "m40208-house.jpg",
          "Illustration of an Italianate house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Built c. 1872",
            x: 32,
            y: 48,
            fact: "This Italianate-style home was built c. 1872 for Theophilus and Virginia McKee Minton. The Mintons were prominent African American residents of Columbia during the era of Reconstruction.",
          },
          {
            id: "family",
            label: "Married in 1870",
            x: 74,
            y: 40,
            fact: "They were married in 1870. Their son, Henry McKee Minton (1871-1946), was born the next year. Theophilus Minton graduated from the Univ. of S.C. Law School in 1876.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1877",
        title: "Until they left Columbia",
        partLabel: "the years they lived here",
        art: art(
          "m40208-yard.jpg",
          "Illustration of a house yard at a street corner. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "left",
            label: "Left in 1877",
            x: 32,
            y: 52,
            fact: "The Mintons lived in this home, which was originally located near the corner of Marion and Gervais, until they left Columbia in 1877.",
          },
          {
            id: "fraternity",
            label: "May 15, 1904",
            x: 74,
            y: 42,
            fact: "Henry Minton later pursued a career in pharmacy and medicine. On May 15, 1904, Dr. Minton and a distinguished group of physicians in Philadelphia, PA founded Sigma Pi Phi Fraternity, the oldest African American Greek-letter organization in the nation.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "c. 1872 to 1877",
        title: "Years from the house to leaving Columbia",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1877 comes 5 years after 1872. The marker says this Italianate-style home was built c. 1872 and the Mintons lived in it until they left Columbia in 1877.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40208-house.jpg",
          "Illustration of an Italianate house. Not a historical photograph.",
        ),
        nowArt: art(
          "m40208-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an Italianate house, for the home the marker says was built c. 1872 for Theophilus and Virginia McKee Minton. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "married",
            year: "1870",
            label: "Theophilus and Virginia McKee Minton are married.",
            why: "The marker says they were married in 1870. Their son, Henry McKee Minton (1871-1946), was born the next year.",
          },
          {
            id: "built",
            year: "c. 1872",
            label: "This Italianate-style home is built for them.",
            why: "The marker says this Italianate-style home was built c. 1872 for Theophilus and Virginia McKee Minton.",
          },
          {
            id: "left",
            year: "1877",
            label: "The Mintons leave Columbia.",
            why: "The marker says the Mintons lived in this home, which was originally located near the corner of Marion and Gervais, until they left Columbia in 1877.",
          },
          {
            id: "fraternity",
            year: "May 15, 1904",
            label: "Sigma Pi Phi Fraternity is founded.",
            why: "The marker says on May 15, 1904, Dr. Minton and a distinguished group of physicians in Philadelphia, PA founded Sigma Pi Phi Fraternity, the oldest African American Greek-letter organization in the nation.",
          },
        ],
        ["fraternity", "built", "left", "married"],
      ),
      takeaway([
        "This Italianate-style home was built c. 1872 for Theophilus and Virginia McKee Minton. The Mintons were prominent African American residents of Columbia during the era of Reconstruction. They were married in 1870. Their son, Henry McKee Minton (1871-1946), was born the next year.",
        "Theophilus Minton graduated from the Univ. of S.C. Law School in 1876. The Mintons lived in this home, which was originally located near the corner of Marion and Gervais, until they left Columbia in 1877.",
        "Henry Minton later pursued a career in pharmacy and medicine. On May 15, 1904, Dr. Minton and a distinguished group of physicians in Philadelphia, PA founded Sigma Pi Phi Fraternity, the oldest African American Greek-letter organization in the nation.",
      ]),
    ],
  ),
  lesson(
    "40-209",
    "A mission for the children of Arsenal Hill",
    "St. Timothy's timeline",
    [
      cited("40-209", "St. Timothy's Episcopal Church", "front and back"),
      span(
        '"22 years" is 1914 minus 1892, the years the marker prints for the present sanctuary and the year the church dates to.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1892",
        title: "A mission, then a chapel",
        partLabel: "the mission",
        art: art(
          "m40209-church.jpg",
          "Illustration of a granite Gothic church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "dates",
            label: "Dates to 1892",
            x: 32,
            y: 46,
            fact: "St. Timothy's Episcopal Church dates to 1892 and is the third oldest Episcopal parish in Columbia. It began as a mission to provide Sunday School for the children of Arsenal Hill.",
          },
          {
            id: "moved",
            label: "1893 and 1895",
            x: 74,
            y: 40,
            fact: "As the congregation grew the church moved, first to a house on Lincoln St. in 1893 and then to a chapel on Calhoun St., which was completed in 1895. In 1912 the church was admitted into union with the diocese of S.C.",
          },
        ],
      },
      {
        kind: "scene",
        id: "garden",
        kicker: "1914",
        title: "Granite, glass, and two gardens",
        partLabel: "the sanctuary and gardens",
        art: art(
          "m40209-yard.jpg",
          "Illustration of a church garden. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sanctuary",
            label: "Completed in 1914",
            x: 32,
            y: 50,
            fact: "After the first chapel burned, the congregation began construction of the present sanctuary, completed in 1914. The Gothic Revival church is built of granite and includes 15 stained glass windows constructed by Mayer Studios in Germany.",
          },
          {
            id: "gardens",
            label: "1963 and 2006",
            x: 74,
            y: 42,
            fact: "The church's Wicks organ was installed in 1963. St. Timothy's also has two gardens, including Beckham Garden, which was designated an official Affiliate Quiet Garden in 2006.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1892 to 1914",
        title: "Years from the date of the church to this sanctuary",
        partLabel: "22 years",
        value: 22,
        unit: "years",
        meant:
          "What this meant: 1914 comes 22 years after 1892. The marker says St. Timothy's Episcopal Church dates to 1892, and the present sanctuary was completed in 1914.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40209-church.jpg",
          "Illustration of a granite Gothic church. Not a historical photograph.",
        ),
        nowArt: art(
          "m40209-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a granite Gothic church, for the Gothic Revival church the marker says is built of granite. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "dates",
            year: "1892",
            label: "St. Timothy's dates to 1892, begun as a mission.",
            why: "The marker says St. Timothy's Episcopal Church dates to 1892 and began as a mission to provide Sunday School for the children of Arsenal Hill. It is the third oldest Episcopal parish in Columbia.",
          },
          {
            id: "chapel",
            year: "1895",
            label: "A chapel on Calhoun St. is completed.",
            why: "The marker says the church moved, first to a house on Lincoln St. in 1893 and then to a chapel on Calhoun St., which was completed in 1895.",
          },
          {
            id: "union",
            year: "1912",
            label: "The church is admitted into union with the diocese.",
            why: "The marker says in 1912 the church was admitted into union with the diocese of S.C.",
          },
          {
            id: "sanctuary",
            year: "1914",
            label: "The present sanctuary is completed.",
            why: "The marker says after the first chapel burned, the congregation began construction of the present sanctuary, completed in 1914.",
          },
        ],
        ["sanctuary", "dates", "union", "chapel"],
      ),
      takeaway([
        "St. Timothy's Episcopal Church dates to 1892 and is the third oldest Episcopal parish in Columbia. It began as a mission to provide Sunday School for the children of Arsenal Hill.",
        "As the congregation grew the church moved, first to a house on Lincoln St. in 1893 and then to a chapel on Calhoun St., which was completed in 1895. In 1912 the church was admitted into union with the diocese of S.C. After the first chapel burned, the congregation began construction of the present sanctuary, completed in 1914.",
        "The Gothic Revival church is built of granite and includes 15 stained glass windows constructed by Mayer Studios in Germany. The church's Wicks organ was installed in 1963. St. Timothy's also has two gardens, including Beckham Garden, which was designated an official Affiliate Quiet Garden in 2006.",
      ]),
    ],
  ),
  lesson(
    "40-211",
    "The office of Dr. Cyril O. Spann",
    "Spann office timeline",
    [
      cited("40-211", "Cyril O. Spann Medical Office", "front and back"),
      span(
        '"16 years" is 1979 minus 1963, the years the marker prints for the end and the start of this office.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "office",
        kicker: "1963",
        title: "His office from 1963 to 1979",
        partLabel: "the office",
        art: art(
          "m40211-office.jpg",
          "Illustration of an office building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "office",
            label: "1963 to 1979",
            x: 32,
            y: 48,
            fact: "From 1963 to 1979, this was the office of Dr. Cyril O. Spann (1916-1979), one of the first fully trained African American surgeons in S.C. Born in Chester, Spann fought in World War II and attended nearby Benedict College.",
          },
          {
            id: "built",
            label: "Site acquired in 1962",
            x: 74,
            y: 40,
            fact: "After graduating from Meharry Medical College, he traveled to different S.C. towns to perform surgery and train other black doctors. He built this office after acquiring the site in 1962.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1957",
        title: "The hospital and a civil rights leader",
        partLabel: "the street and the hospital",
        art: art(
          "m40211-street.jpg",
          "Illustration of a street and an office. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "rights",
            label: "Civil rights leader",
            x: 32,
            y: 54,
            fact: "A local civil rights leader, Spann helped desegregate public accommodations and once performed life-saving surgery on a student stabbed during a sit-in.",
          },
          {
            id: "hospital",
            label: "As early as 1957",
            x: 74,
            y: 42,
            fact: "While Spann saw patients at this office, he conducted surgery at Good Samaritan-Waverly Hospital, where he worked as early as 1957 and later served as chief of staff. After Spann's death, other black doctors continued practicing at his office into the 1990s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1963 to 1979",
        title: "Years this was his office",
        partLabel: "16 years",
        value: 16,
        unit: "years",
        meant:
          "What this meant: 1979 comes 16 years after 1963. The marker says from 1963 to 1979 this was the office of Dr. Cyril O. Spann.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40211-office.jpg",
          "Illustration of an office building. Not a historical photograph.",
        ),
        nowArt: art(
          "m40211-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an office building, for the office the marker says was Dr. Cyril O. Spann's from 1963 to 1979. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "hospital",
            year: "1957",
            label: "He works at Good Samaritan-Waverly Hospital.",
            why: "The marker says he conducted surgery at Good Samaritan-Waverly Hospital, where he worked as early as 1957 and later served as chief of staff.",
          },
          {
            id: "site",
            year: "1962",
            label: "He acquires the site.",
            why: "The marker says he built this office after acquiring the site in 1962.",
          },
          {
            id: "opens",
            year: "1963",
            label: "This becomes his office.",
            why: "The marker says from 1963 to 1979 this was the office of Dr. Cyril O. Spann (1916-1979).",
          },
          {
            id: "end",
            year: "1979",
            label: "The years of this office end.",
            why: "The marker says from 1963 to 1979 this was his office. After Spann's death, other black doctors continued practicing at his office into the 1990s.",
          },
        ],
        ["opens", "end", "site", "hospital"],
      ),
      takeaway([
        "From 1963 to 1979, this was the office of Dr. Cyril O. Spann (1916-1979), one of the first fully trained African American surgeons in S.C. Born in Chester, Spann fought in World War II and attended nearby Benedict College.",
        "After graduating from Meharry Medical College, he traveled to different S.C. towns to perform surgery and train other black doctors. He built this office after acquiring the site in 1962. A local civil rights leader, Spann helped desegregate public accommodations and once performed life-saving surgery on a student stabbed during a sit-in.",
        "While Spann saw patients at this office, he conducted surgery at Good Samaritan-Waverly Hospital, where he worked as early as 1957 and later served as chief of staff. After Spann's death, other black doctors continued practicing at his office into the 1990s.",
      ]),
    ],
  ),
  lesson(
    "40-212",
    "A block of houses on Henderson Street",
    "Henderson Street timeline",
    [
      cited("40-212", "1900 Block of Henderson Street", "front and back"),
      span(
        '"49 years" is 1954 minus 1905, the years the marker prints for the closing and the opening of the barber shop on Main St.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "By the 1940s",
        title: "Houses associated with African Americans",
        partLabel: "the block",
        art: art(
          "m40212-street.jpg",
          "Illustration of a dense row of houses along a street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "block",
            label: "Through the mid-1900s",
            x: 32,
            y: 50,
            fact: "This block features a dense collection of late 19th and early 20th c. houses historically associated with and home to African Americans. Residing here through the mid-1900s were many middle- and working-class African Americans, including barbers, teachers, nurses, carpenters, cooks, porters, maids, a butcher, a pastor, and a blacksmith.",
          },
          {
            id: "owned",
            label: "By the 1940s",
            x: 74,
            y: 40,
            fact: "By the 1940s, several properties here were owned by barber William J. Sumter.",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1909",
        title: "The Sumter house",
        partLabel: "the Sumter house",
        art: art(
          "m40212-houses.jpg",
          "Illustration of several houses close together. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "home",
            label: "1905-1954",
            x: 32,
            y: 48,
            fact: "The house at 1931 Henderson St. was the home of William J. Sumter (1881-1967), an African American entrepreneur who owned and operated a well-known barber shop on Main St. from 1905-1954, said to have the oldest in Columbia when it closed.",
          },
          {
            id: "bought",
            label: "Purchased in 1909",
            x: 74,
            y: 42,
            fact: "Sumter purchased this house in 1909 from African American carpenter John W. Bailey. Sumter and his wife Daisy A. Robinson, lived here with their children. He later owned 1921 and 1925 Henderson St., which he rented to tenants.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1905-1954",
        title: "Years the barber shop on Main St. ran",
        partLabel: "49 years",
        value: 49,
        unit: "years",
        meant:
          "What this meant: 1954 comes 49 years after 1905. The marker says William J. Sumter owned and operated a well-known barber shop on Main St. from 1905-1954.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40212-street.jpg",
          "Illustration of a dense row of houses along a street. Not a historical photograph.",
        ),
        nowArt: art(
          "m40212-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a dense row of houses along a street, for the block the marker says features a dense collection of late 19th and early 20th c. houses. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "shop",
            year: "1905",
            label: "His barber shop on Main St. is open.",
            why: "The marker says William J. Sumter (1881-1967) owned and operated a well-known barber shop on Main St. from 1905-1954, said to have the oldest in Columbia when it closed.",
          },
          {
            id: "bought",
            year: "1909",
            label: "He purchases the house from John W. Bailey.",
            why: "The marker says Sumter purchased this house in 1909 from African American carpenter John W. Bailey. Sumter and his wife Daisy A. Robinson, lived here with their children.",
          },
          {
            id: "owned",
            year: "By the 1940s",
            label: "He owns several properties on this block.",
            why: "The marker says by the 1940s, several properties here were owned by barber William J. Sumter.",
          },
          {
            id: "closed",
            year: "1954",
            label: "The barber shop closes.",
            why: "The marker says the barber shop on Main St. ran from 1905-1954 and was said to have the oldest in Columbia when it closed.",
          },
        ],
        ["bought", "closed", "shop", "owned"],
      ),
      takeaway([
        "This block features a dense collection of late 19th and early 20th c. houses historically associated with and home to African Americans. Residing here through the mid-1900s were many middle- and working-class African Americans, including barbers, teachers, nurses, carpenters, cooks, porters, maids, a butcher, a pastor, and a blacksmith.",
        "By the 1940s, several properties here were owned by barber William J. Sumter. The house at 1931 Henderson St. was the home of William J. Sumter (1881-1967), an African American entrepreneur who owned and operated a well-known barber shop on Main St. from 1905-1954, said to have the oldest in Columbia when it closed.",
        "Sumter purchased this house in 1909 from African American carpenter John W. Bailey. Sumter and his wife Daisy A. Robinson, lived here with their children. He later owned 1921 and 1925 Henderson St., which he rented to tenants.",
      ]),
    ],
  ),
];
