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

export const richlandLessonsAQ: MarkerLesson[] = [
  lesson(
    "40-217",
    "A first permanent clubhouse",
    "Woman's Club of Columbia timeline",
    [
      cited("40-217", "Woman's Club of Columbia", "front and back"),
      span(
        '"77 years" is 2018 minus 1941, the years the marker prints for the razing of the clubhouse and the building of the first permanent clubhouse.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "club",
        kicker: "1925",
        title: "Founded, then a clubhouse here",
        partLabel: "the clubhouse",
        art: art(
          "m40217-club.jpg",
          "Illustration of a Colonial Revival clubhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "Founded in 1925",
            x: 32,
            y: 48,
            fact: "The Woman's Club of Columbia was founded in 1925 as a civic and social club for local women.",
          },
          {
            id: "built",
            label: "Built in 1941",
            x: 74,
            y: 42,
            fact: "In 1941, their first permanent clubhouse was built here on a lot of land provided by Columbia City Council. The clubhouse was designed by Columbia firm Lafaye, Lafaye and Fair and was constructed in the Colonial Revival style with Neoclassical elements.",
          },
        ],
      },
      {
        kind: "scene",
        id: "parlor",
        kicker: "2000",
        title: "Meetings, war work, then a sale",
        partLabel: "the parlor",
        art: art(
          "m40217-parlor.jpg",
          "Illustration of an empty club parlor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "meetings",
            label: "Meetings and war work",
            x: 32,
            y: 52,
            fact: "Members held meetings there as well as special events and public programs. During World War II, the members of the Woman's Club used the clubhouse as a venue for fundraising and events aimed at generating money and support for the war effort.",
          },
          {
            id: "sold",
            label: "Sold in 2000",
            x: 74,
            y: 40,
            fact: "During and after the war, the Club provided an outlet for women's public engagement and political action. In 2000, the Woman's Club sold the clubhouse property and used the proceeds to create an endowment. The clubhouse was razed in 2018.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1941 to 2018",
        title: "Years from the clubhouse to its razing",
        partLabel: "77 years",
        value: 77,
        unit: "years",
        meant:
          "What this meant: 2018 comes 77 years after 1941. The marker says the first permanent clubhouse was built here in 1941, and the clubhouse was razed in 2018.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40217-club.jpg",
          "Illustration of a Colonial Revival clubhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m40217-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Colonial Revival clubhouse, for the first permanent clubhouse the marker says was built here in 1941. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1925",
            label: "The Woman's Club of Columbia is founded.",
            why: "The marker says the Woman's Club of Columbia was founded in 1925 as a civic and social club for local women.",
          },
          {
            id: "built",
            year: "1941",
            label: "The first permanent clubhouse is built here.",
            why: "The marker says that in 1941 their first permanent clubhouse was built here on a lot of land provided by Columbia City Council.",
          },
          {
            id: "sold",
            year: "2000",
            label: "The clubhouse property is sold.",
            why: "The marker says that in 2000 the Woman's Club sold the clubhouse property and used the proceeds to create an endowment.",
          },
          {
            id: "razed",
            year: "2018",
            label: "The clubhouse is razed.",
            why: "The marker says the clubhouse was razed in 2018.",
          },
        ],
        ["razed", "founded", "sold", "built"],
      ),
      takeaway([
        "The Woman's Club of Columbia was founded in 1925 as a civic and social club for local women. In 1941, their first permanent clubhouse was built here on a lot of land provided by Columbia City Council. The clubhouse was designed by Columbia firm Lafaye, Lafaye and Fair and was constructed in the Colonial Revival style with Neoclassical elements.",
        "Members held meetings there as well as special events and public programs. During World War II, the members of the Woman's Club used the clubhouse as a venue for fundraising and events aimed at generating money and support for the war effort. During and after the war, the Club provided an outlet for women's public engagement and political action.",
        "In 2000, the Woman's Club sold the clubhouse property and used the proceeds to create an endowment. The clubhouse was razed in 2018.",
      ]),
    ],
  ),
  lesson(
    "40-218",
    "An undertaker's original site",
    "Manigault's Funeral Home timeline",
    [cited("40-218", "Manigault's Funeral Home", "front and back")],
    [
      {
        kind: "scene",
        id: "home",
        kicker: "1923",
        title: "Established, then run by the family",
        partLabel: "the funeral home",
        art: art(
          "m40218-home.jpg",
          "Illustration of a funeral home on a city lot. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "Est. 1923",
            x: 32,
            y: 48,
            fact: "This was the original site of Manigault-Gaten-Williams Funeral Home, est. 1923 and later run by the family of co-founder William Marion Manigault (1885-1940).",
          },
          {
            id: "undertaker",
            label: "To Columbia in 1908",
            x: 74,
            y: 42,
            fact: "Born in Kingville, Manigault was a veteran of Troop K, 10th Cavalry (Buffalo Soldiers), who became an undertaker after moving to Columbia in 1908. He ran the business with his wife, Annie Rivers Manigault, and his children, Anna May and Walter, both licensed embalmers.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "c.1930",
        title: "A casket company, then a move",
        partLabel: "the street",
        art: art(
          "m40218-street.jpg",
          "Illustration of a chapel, a showroom, and garages along a street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "casket",
            label: "Opened c.1930",
            x: 32,
            y: 52,
            fact: "In c.1930, the family opened the Congaree Casket Company on this site. It was one of the only such Black-owned firms then in the U.S. The company sold caskets to funeral directors across S.C. and the southeastern U.S.",
          },
          {
            id: "moved",
            label: "Moved in 1959",
            x: 74,
            y: 40,
            fact: "This site also included a 225-seat chapel, a casket showroom, and garages, with additional showrooms in Charleston and Georgetown. In 1959, the business moved to Two Notch Rd. to make way for the expansion of U.S.C.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "On this site",
        title: "Seats in the chapel",
        partLabel: "225 seats",
        value: 225,
        unit: "seats",
        meant:
          "What this meant: the marker says this site included a 225-seat chapel, a casket showroom, and garages, with additional showrooms in Charleston and Georgetown.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40218-home.jpg",
          "Illustration of a funeral home on a city lot. Not a historical photograph.",
        ),
        nowArt: art(
          "m40218-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a funeral home on a city lot, for the original site of Manigault-Gaten-Williams Funeral Home the marker says was est. 1923. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "undertaker",
            year: "1908",
            label: "Manigault becomes an undertaker after moving to Columbia.",
            why: "The marker says Manigault, born in Kingville, became an undertaker after moving to Columbia in 1908. It dates co-founder William Marion Manigault 1885-1940.",
          },
          {
            id: "established",
            year: "1923",
            label: "Manigault-Gaten-Williams Funeral Home is established.",
            why: "The marker says this was the original site of Manigault-Gaten-Williams Funeral Home, est. 1923.",
          },
          {
            id: "casket",
            year: "c.1930",
            label: "The family opens the Congaree Casket Company on this site.",
            why: "The marker says that in c.1930 the family opened the Congaree Casket Company on this site.",
          },
          {
            id: "moved",
            year: "1959",
            label: "The business moves to Two Notch Rd.",
            why: "The marker says that in 1959 the business moved to Two Notch Rd. to make way for the expansion of U.S.C.",
          },
        ],
        ["moved", "undertaker", "casket", "established"],
      ),
      takeaway([
        "This was the original site of Manigault-Gaten-Williams Funeral Home, est. 1923 and later run by the family of co-founder William Marion Manigault (1885-1940). Born in Kingville, Manigault was a veteran of Troop K, 10th Cavalry (Buffalo Soldiers), who became an undertaker after moving to Columbia in 1908.",
        "He ran the business with his wife, Annie Rivers Manigault, and his children, Anna May and Walter, both licensed embalmers. In c.1930, the family opened the Congaree Casket Company on this site. It was one of the only such Black-owned firms then in the U.S.",
        "The company sold caskets to funeral directors across S.C. and the southeastern U.S. This site also included a 225-seat chapel, a casket showroom, and garages, with additional showrooms in Charleston and Georgetown. In 1959, the business moved to Two Notch Rd. to make way for the expansion of U.S.C.",
      ]),
    ],
  ),
  lesson(
    "40-219",
    "From a private house to a brick church",
    "St. Luke's Episcopal Church timeline",
    [
      cited("40-219", "St. Luke's Episcopal Church", "front and back"),
      span(
        '"5 years" is 1963 minus 1958, the years the marker prints for the consecration of the brick church and the move to this site.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1871",
        title: "A private house, then a frame church",
        partLabel: "the early church",
        art: art(
          "m40219-church.jpg",
          "Illustration of a frame church at a street corner. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "house",
            label: "Worship from 1871",
            x: 32,
            y: 48,
            fact: "St. Luke's was the first Episcopal congregation in Columbia established for African Americans. Members began worshipping together in 1871 in a private house. They formally organized in 1873 under the Rev. Benjamin Bosworth Babbit and were a mission of nearby Trinity Episcopal Church (1 mi. W).",
          },
          {
            id: "frame",
            label: "Frame church, 1884",
            x: 74,
            y: 42,
            fact: "They gathered in temporary locations until 1884, when they moved into a frame church at the corner of Lady and Marion Streets.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1963",
        title: "Hampton Street, then this site",
        partLabel: "the churchyard",
        art: art(
          "m40219-yard.jpg",
          "Illustration of a brick church and a chapel in a churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "hampton",
            label: "Consecrated in 1913",
            x: 32,
            y: 52,
            fact: "Congregants later sold the lot on Lady Street and used the proceeds to built a Gothic Revival church on Hampton Street, consecrated in 1913.",
          },
          {
            id: "brick",
            label: "Consecrated in 1963",
            x: 74,
            y: 40,
            fact: "St. Luke's moved to this site in 1958. Members worshipped in the chapel on the N side of the lot until the brick church building was completed and consecrated in 1963. Both were designed by architect James B. Urquhart and built during the tenure of the Rev. William F. O'Neal.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1958 to 1963",
        title: "Years from the move to the brick church",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1963 comes 5 years after 1958. The marker says St. Luke's moved to this site in 1958, and the brick church building was completed and consecrated in 1963.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40219-church.jpg",
          "Illustration of a frame church at a street corner. Not a historical photograph.",
        ),
        nowArt: art(
          "m40219-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a frame church at a street corner, for the frame church the marker says they moved into in 1884 at the corner of Lady and Marion Streets. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "house",
            year: "1871",
            label: "Members begin worshipping together in a private house.",
            why: "The marker says members began worshipping together in 1871 in a private house. They formally organized in 1873 under the Rev. Benjamin Bosworth Babbit.",
          },
          {
            id: "frame",
            year: "1884",
            label: "They move into a frame church at Lady and Marion.",
            why: "The marker says they gathered in temporary locations until 1884, when they moved into a frame church at the corner of Lady and Marion Streets.",
          },
          {
            id: "moved",
            year: "1958",
            label: "St. Luke's moves to this site.",
            why: "The marker says congregants sold the lot on Lady Street and used the proceeds to built a Gothic Revival church on Hampton Street, consecrated in 1913. St. Luke's moved to this site in 1958.",
          },
          {
            id: "brick",
            year: "1963",
            label: "The brick church building is consecrated.",
            why: "The marker says members worshipped in the chapel on the N side of the lot until the brick church building was completed and consecrated in 1963.",
          },
        ],
        ["brick", "house", "moved", "frame"],
      ),
      takeaway([
        "St. Luke's was the first Episcopal congregation in Columbia established for African Americans. Members began worshipping together in 1871 in a private house. They formally organized in 1873 under the Rev. Benjamin Bosworth Babbit and were a mission of nearby Trinity Episcopal Church (1 mi. W).",
        "They gathered in temporary locations until 1884, when they moved into a frame church at the corner of Lady and Marion Streets. Congregants later sold the lot on Lady Street and used the proceeds to built a Gothic Revival church on Hampton Street, consecrated in 1913.",
        "St. Luke's moved to this site in 1958. Members worshipped in the chapel on the N side of the lot until the brick church building was completed and consecrated in 1963. Both were designed by architect James B. Urquhart and built during the tenure of the Rev. William F. O'Neal.",
      ]),
    ],
  ),
  lesson(
    "40-220",
    "A segregated park in the highlands",
    "Lincoln Park timeline",
    [cited("40-220", "Lincoln Park", "front and back")],
    [
      {
        kind: "scene",
        id: "park",
        kicker: "1901",
        title: "Opened by the railway company",
        partLabel: "the park",
        art: art(
          "m40220-park.jpg",
          "Illustration of a park with an auditorium and an outdoor theater. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1901 to 1905",
            x: 32,
            y: 48,
            fact: "From 1901 to 1905, this was a segregated park for African Americans, opened by the Columbia Electric Street Railway Company.",
          },
          {
            id: "highlands",
            label: "The highlands",
            x: 74,
            y: 42,
            fact: 'Development in this part of Columbia, then known as "the highlands," began in the 1890s with the extension of rail service from downtown. Following complaints from white riders traveling to nearby Hyatt Park, the company created Lincoln Park as part of its efforts to segregate the previously integrated rail line to the highlands.',
          },
        ],
      },
      {
        kind: "scene",
        id: "field",
        kicker: "1903",
        title: "An opening, then a new name",
        partLabel: "the grounds",
        art: art(
          "m40220-field.jpg",
          "Illustration of park grounds with walks and open ground. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opening",
            label: "July 1901",
            x: 32,
            y: 52,
            fact: "Black residents from across Columbia visited Lincoln Park for walks, picnics, musical performances, and camp meetings. Approx. 4,000 people attended the park's formal opening in July 1901. It originally had an auditorium and outdoor theater.",
          },
          {
            id: "renamed",
            label: "Renamed in 1905",
            x: 74,
            y: 40,
            fact: 'By 1903, Lincoln Park had been combined with Hyatt Park for the use of whites. In 1905, a Virginia-based firm bought 100 acres of surrounding land to develop the whites-only Park Place neighborhood and formally renamed this "Lake Park."',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "July 1901",
        title: "People at the formal opening",
        partLabel: "4,000 people",
        value: 4000,
        unit: "people",
        meant:
          "What this meant: the marker says approx. 4,000 people attended the park's formal opening in July 1901.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40220-park.jpg",
          "Illustration of a park with an auditorium and an outdoor theater. Not a historical photograph.",
        ),
        nowArt: art(
          "m40220-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a park with an auditorium and an outdoor theater, for the park the marker says originally had an auditorium and outdoor theater. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "highlands",
            year: "the 1890s",
            label: "Rail service from downtown reaches the highlands.",
            why: 'The marker says development in this part of Columbia, then known as "the highlands," began in the 1890s with the extension of rail service from downtown.',
          },
          {
            id: "opening",
            year: "July 1901",
            label: "Lincoln Park has its formal opening.",
            why: "The marker says approx. 4,000 people attended the park's formal opening in July 1901. From 1901 to 1905, this was a segregated park for African Americans, opened by the Columbia Electric Street Railway Company.",
          },
          {
            id: "combined",
            year: "1903",
            label: "Lincoln Park is combined with Hyatt Park for the use of whites.",
            why: "The marker says that by 1903 Lincoln Park had been combined with Hyatt Park for the use of whites.",
          },
          {
            id: "renamed",
            year: "1905",
            label: 'This place is formally renamed "Lake Park."',
            why: 'The marker says that in 1905 a Virginia-based firm bought 100 acres of surrounding land to develop the whites-only Park Place neighborhood and formally renamed this "Lake Park."',
          },
        ],
        ["renamed", "highlands", "combined", "opening"],
      ),
      takeaway([
        'From 1901 to 1905, this was a segregated park for African Americans, opened by the Columbia Electric Street Railway Company. Development in this part of Columbia, then known as "the highlands," began in the 1890s with the extension of rail service from downtown.',
        "Following complaints from white riders traveling to nearby Hyatt Park, the company created Lincoln Park as part of its efforts to segregate the previously integrated rail line to the highlands. Black residents from across Columbia visited Lincoln Park for walks, picnics, musical performances, and camp meetings.",
        'Approx. 4,000 people attended the park\'s formal opening in July 1901. It originally had an auditorium and outdoor theater. By 1903, Lincoln Park had been combined with Hyatt Park for the use of whites. In 1905, a Virginia-based firm bought 100 acres of surrounding land to develop the whites-only Park Place neighborhood and formally renamed this "Lake Park."',
      ]),
    ],
  ),
];
