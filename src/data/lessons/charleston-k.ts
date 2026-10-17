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

export const charlestonLessonsK: MarkerLesson[] = [
  lesson(
    "10-53",
    "A rural cemetery named for a plantation",
    "Magnolia Cemetery timeline",
    [
      cited("10-53", "Magnolia Cemetery", "front and back"),
      span(
        '"66 years" is 1850 minus 1784, the years the marker prints for the establishment of the cemetery and the plantation dating back.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "cemetery",
        kicker: "1850",
        title: "Established and named for a plantation",
        partLabel: "the cemetery",
        art: art(
          "m1053-cemetery.jpg",
          "Illustration of a rural cemetery of winding paths, a lake, and oaks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "named",
            label: "1850 and 1784",
            x: 32,
            y: 46,
            fact: "Magnolia Cemetery, established in 1850, was named for Magnolia Umbra Plantation, dating back to 1784. This is a fine example of the \"rural cemetery\" movement, with winding streets and paths, a lake, view of the Cooper River and marsh, and magnolias, live oaks, and other landscaping.",
          },
          {
            id: "house",
            label: "ca. 1800 house",
            x: 74,
            y: 58,
            fact: "The ca. 1800 house built by Col. William Cunnington serves as the cemetery office.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gate",
        kicker: "The plan",
        title: "A plan, gravestones, and burials",
        partLabel: "the gate and monuments",
        art: art(
          "m1053-gate.jpg",
          "Illustration of a cemetery gate and blank monuments. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "plan",
            label: "Jones and the Whites",
            x: 32,
            y: 42,
            fact: "Charleston architect Edward C. Jones designed the cemetery plan, and stonecutters William T., Edwin R., and Robert D. White sculpted many of its fine gravestones and monuments.",
          },
          {
            id: "buried",
            label: "Notable burials",
            x: 74,
            y: 54,
            fact: "Notable persons buried here include William Gregg, Robert Barnwell Rhett, William Gilmore Simms, George A. Trenholm, and Horace L. Hunley and three crews of the Confederate submarine H.L. Hunley.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1784-1850",
        title: "Years from the plantation date to the cemetery",
        partLabel: "66 years",
        value: 66,
        unit: "years",
        meant:
          "What this meant: 1850 comes 66 years after 1784. That is the stretch from the year the marker says Magnolia Umbra Plantation dates back to, to the year Magnolia Cemetery was established.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1053-cemetery.jpg",
          "Illustration of a rural cemetery of winding paths, a lake, and oaks. Not a historical photograph.",
        ),
        nowArt: art(
          "m1053-today.jpg",
          "Illustration of a marker beside a cemetery lane. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a rural cemetery, for the winding paths, lake, marsh, and oaks the marker describes. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a cemetery lane. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "plantation",
            year: "1784",
            label: "Magnolia Umbra Plantation dates back.",
            why: "The marker says the cemetery was named for Magnolia Umbra Plantation, dating back to 1784.",
          },
          {
            id: "cunnington",
            year: "ca. 1800",
            label: "Col. William Cunnington builds the house.",
            why: "The marker says the ca. 1800 house built by Col. William Cunnington serves as the cemetery office.",
          },
          {
            id: "established",
            year: "1850",
            label: "Magnolia Cemetery is established.",
            why: "The marker says Magnolia Cemetery was established in 1850.",
          },
        ],
        ["cunnington", "established", "plantation"],
      ),
      takeaway([
        "Magnolia Cemetery, established in 1850, was named for Magnolia Umbra Plantation, dating back to 1784. The ca. 1800 house built by Col. William Cunnington serves as the cemetery office.",
        "This is a fine example of the \"rural cemetery\" movement, with winding streets and paths, a lake, view of the Cooper River and marsh, and magnolias, live oaks, and other landscaping.",
        "Charleston architect Edward C. Jones designed the cemetery plan, and stonecutters William T., Edwin R., and Robert D. White sculpted many of its fine gravestones and monuments. Notable persons buried here include William Gregg, Robert Barnwell Rhett, William Gilmore Simms, George A. Trenholm, and Horace L. Hunley and three crews of the Confederate submarine H.L. Hunley.",
      ]),
    ],
  ),
  lesson(
    "10-54",
    "A French garden 300 yards north",
    "French Botanical Garden timeline",
    [cited("10-54", "French Botanical Garden", "front")],
    [
      {
        kind: "scene",
        id: "garden",
        kicker: "1786-96",
        title: "Michaux lives here and plants a garden",
        partLabel: "the garden",
        art: art(
          "m1054-garden.jpg",
          "Illustration of a botanical garden of young trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lived",
            label: "1746-1802",
            x: 32,
            y: 48,
            fact: "André Michaux (1746-1802), botanist to Louis XVI of France, lived here 1786-96.",
          },
          {
            id: "north",
            label: "300 yards north",
            x: 74,
            y: 40,
            fact: "He established a botanical garden 300 yards north in order to export native American trees and plants to France.",
          },
        ],
      },
      {
        kind: "scene",
        id: "plants",
        kicker: "1803",
        title: "Plants he imported, then a closing",
        partLabel: "the plants",
        art: art(
          "m1054-plants.jpg",
          "Illustration of camellia, myrtle, mimosa, and other plants. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "imports",
            label: "The imports",
            x: 32,
            y: 52,
            fact: "Michaux was the first to import the camellia, crape myrtle, mimosa, parasol tree, and sweet olive to North America and the gingko and tea plants to this area.",
          },
          {
            id: "closed",
            label: "1803",
            x: 74,
            y: 44,
            fact: "His son closed the garden in 1803.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The garden",
        title: "Yards north of where he lived",
        partLabel: "300 yards",
        value: 300,
        unit: "yards",
        meant:
          "What this meant: the marker says he established a botanical garden 300 yards north in order to export native American trees and plants to France.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1054-garden.jpg",
          "Illustration of a botanical garden of young trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m1054-today.jpg",
          "Illustration of a marker by a wooded roadside. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a garden of young trees, for the botanical garden the marker says Michaux established 300 yards north. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a wooded roadside. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "earlier",
            year: "1746",
            label: "The marker's earlier year for André Michaux.",
            why: "The marker gives André Michaux as (1746-1802), botanist to Louis XVI of France.",
          },
          {
            id: "lived",
            year: "1786",
            label: "Michaux lives here.",
            why: "The marker says he lived here 1786-96.",
          },
          {
            id: "later",
            year: "1802",
            label: "The marker's later year for André Michaux.",
            why: "The marker gives André Michaux as (1746-1802).",
          },
          {
            id: "closed",
            year: "1803",
            label: "His son closes the garden.",
            why: "The marker says his son closed the garden in 1803.",
          },
        ],
        ["closed", "earlier", "later", "lived"],
      ),
      takeaway([
        "André Michaux (1746-1802), botanist to Louis XVI of France, lived here 1786-96.",
        "He established a botanical garden 300 yards north in order to export native American trees and plants to France. Michaux was the first to import the camellia, crape myrtle, mimosa, parasol tree, and sweet olive to North America and the gingko and tea plants to this area.",
        "His son closed the garden in 1803.",
      ]),
    ],
  ),
  lesson(
    "10-55",
    "The plantation that named a village",
    "Point Plantation timeline",
    [cited("10-55", "Point Plantation", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1771",
        title: "A house on the marsh named Point Plantation",
        partLabel: "the house",
        art: art(
          "m1055-house.jpg",
          "Illustration of a house on a marsh behind an oak avenue. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grant",
            label: "1705",
            x: 32,
            y: 50,
            fact: "The McClellan family for which McClellanville was named acquired this land shortly before the American Revolution. A 490-acre tract on Jeremy Creek was originally granted to John Whilden in 1705.",
          },
          {
            id: "named",
            label: "1771",
            x: 74,
            y: 40,
            fact: "In 1771 master carpenter Archibald McClellan, Sr. (1740-1791) bought the tract, built a house on the marsh, and named it Point Plantation. He planted an avenue of live oaks that still stand and expanded the plantation to 1350 acres, primarily raising cattle.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "1860",
        title: "Lots, a village name, and a new house",
        partLabel: "the fields",
        art: art(
          "m1055-fields.jpg",
          "Illustration of cattle in fields beside a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sons",
            label: "The next McClellans",
            x: 32,
            y: 46,
            fact: "Point Plantation passed to Archibald McClellan, Jr. (1764-1846), then to his sons William and Archibald. Archibald J. McClellan (1814-1880) grew cotton and produced lime and salt here after his brother's death.",
          },
          {
            id: "village",
            label: "1860 and 1902",
            x: 74,
            y: 58,
            fact: "By the 1850s he and Richard T. Morrison (1816-1910) leased, then later sold, lots to area planters. The village here was named for the McClellan family by 1860. The old house at Point Plantation burned in 1902 and was replaced by the present house.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The tract",
        title: "Acres after the plantation was expanded",
        partLabel: "1350 acres",
        value: 1350,
        unit: "acres",
        meant:
          "What this meant: the marker says Archibald McClellan, Sr. expanded the plantation to 1350 acres, primarily raising cattle.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1055-house.jpg",
          "Illustration of a house on a marsh behind an oak avenue. Not a historical photograph.",
        ),
        nowArt: art(
          "m1055-today.jpg",
          "Illustration of a marker by a marsh and oaks. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house on a marsh, for the house the marker says Archibald McClellan, Sr. built and named Point Plantation. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a marsh and oaks. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "grant",
            year: "1705",
            label: "John Whilden is granted the tract.",
            why: "The marker says a 490-acre tract on Jeremy Creek was originally granted to John Whilden in 1705.",
          },
          {
            id: "bought",
            year: "1771",
            label: "Archibald McClellan, Sr. buys the tract and names Point Plantation.",
            why: "The marker says in 1771 he bought the tract, built a house on the marsh, and named it Point Plantation.",
          },
          {
            id: "village",
            year: "1860",
            label: "The village is named for the McClellan family.",
            why: "The marker says the village here was named for the McClellan family by 1860.",
          },
          {
            id: "burned",
            year: "1902",
            label: "The old house burns.",
            why: "The marker says the old house at Point Plantation burned in 1902 and was replaced by the present house.",
          },
        ],
        ["village", "grant", "burned", "bought"],
      ),
      takeaway([
        "The McClellan family for which McClellanville was named acquired this land shortly before the American Revolution. A 490-acre tract on Jeremy Creek was originally granted to John Whilden in 1705. In 1771 master carpenter Archibald McClellan, Sr. (1740-1791) bought the tract, built a house on the marsh, and named it Point Plantation. He planted an avenue of live oaks that still stand and expanded the plantation to 1350 acres, primarily raising cattle.",
        "Point Plantation passed to Archibald McClellan, Jr. (1764-1846), then to his sons William and Archibald. Archibald J. McClellan (1814-1880) grew cotton and produced lime and salt here after his brother's death. By the 1850s he and Richard T. Morrison (1816-1910) leased, then later sold, lots to area planters.",
        "The village here was named for the McClellan family by 1860. The old house at Point Plantation burned in 1902 and was replaced by the present house.",
      ]),
    ],
  ),
  lesson(
    "10-56",
    "An earthwork on the New Line",
    "Battery Number 5 timeline",
    [cited("10-56", "Battery Number 5", "front and back")],
    [
      {
        kind: "scene",
        id: "battery",
        kicker: "Summer 1863",
        title: "Built on the southwest of James Island",
        partLabel: "the battery",
        art: art(
          "m1056-battery.jpg",
          "Illustration of a coastal earthwork and plain cannon. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Summer 1863",
            x: 32,
            y: 48,
            fact: "This was one of several Confederate earthworks constructed on the southwest portion of James Island in the summer of 1863. It was a significant part of the \"New Line\" or \"Siege Line\" intended to defend Charleston from Federal attacks up the Stono or Folly Rivers.",
          },
          {
            id: "replaced",
            label: "1861-62 lines",
            x: 74,
            y: 40,
            fact: "This line replaced the 1861-62 lines that ran across James Island from Clark Sound to Wappoo Creek.",
          },
        ],
      },
      {
        kind: "scene",
        id: "earth",
        kicker: "April 1864",
        title: "Manned, then evacuated",
        partLabel: "the earthwork",
        art: art(
          "m1056-earth.jpg",
          "Illustration of a long earthen line and plain cannon. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "manned",
            label: "April 1864",
            x: 32,
            y: 54,
            fact: "In April 1864 Battery Number 5 was manned by Company H of the 2nd S.C. Artillery, commanded by Capt. W.H. Kennady. Its armament at that time was three 24-pounder smoothbore cannon and one 12-pounder smoothbore cannon.",
          },
          {
            id: "left",
            label: "1865 and 1982",
            x: 74,
            y: 42,
            fact: "This battery and the rest of Charleston's defenses were evacuated February 17, 1865. Battery Number 5 was listed in the National Register of Historic Places in 1982.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "April 1864",
        title: "24-pounder cannon at the battery",
        partLabel: "three cannon",
        value: 3,
        unit: "cannon",
        meant:
          "What this meant: the marker says its armament in April 1864 was three 24-pounder smoothbore cannon and one 12-pounder smoothbore cannon.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1056-battery.jpg",
          "Illustration of a coastal earthwork and plain cannon. Not a historical photograph.",
        ),
        nowArt: art(
          "m1056-today.jpg",
          "Illustration of a marker by a low grassy earthwork. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an earthwork, for the Confederate battery the marker says was constructed on James Island in the summer of 1863. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a low grassy earthwork. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "lines",
            year: "1861-62",
            label: "Earlier lines run across James Island.",
            why: "The marker says this line replaced the 1861-62 lines that ran across James Island from Clark Sound to Wappoo Creek.",
          },
          {
            id: "built",
            year: "Summer 1863",
            label: "Battery Number 5 is constructed.",
            why: "The marker says this Confederate earthwork was constructed on the southwest portion of James Island in the summer of 1863, as part of the \"New Line\" or \"Siege Line.\"",
          },
          {
            id: "manned",
            year: "April 1864",
            label: "Company H mans the battery.",
            why: "The marker says in April 1864 Battery Number 5 was manned by Company H of the 2nd S.C. Artillery, commanded by Capt. W.H. Kennady.",
          },
          {
            id: "evacuated",
            year: "February 17, 1865",
            label: "The battery is evacuated.",
            why: "The marker says this battery and the rest of Charleston's defenses were evacuated February 17, 1865.",
          },
        ],
        ["manned", "lines", "evacuated", "built"],
      ),
      takeaway([
        "This was one of several Confederate earthworks constructed on the southwest portion of James Island in the summer of 1863. It was a significant part of the \"New Line\" or \"Siege Line\" intended to defend Charleston from Federal attacks up the Stono or Folly Rivers. This line replaced the 1861-62 lines that ran across James Island from Clark Sound to Wappoo Creek.",
        "In April 1864 Battery Number 5 was manned by Company H of the 2nd S.C. Artillery, commanded by Capt. W.H. Kennady. Its armament at that time was three 24-pounder smoothbore cannon and one 12-pounder smoothbore cannon.",
        "This battery and the rest of Charleston's defenses were evacuated February 17, 1865. Battery Number 5 was listed in the National Register of Historic Places in 1982.",
      ]),
    ],
  ),
];
