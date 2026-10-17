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

export const charlestonLessonsO: MarkerLesson[] = [
  lesson(
    "10-69",
    "Charleston’s largest public hall",
    "Institute Hall timeline",
    [cited("10-69", "Institute Hall", "front and back")],
    [
      {
        kind: "scene",
        id: "hall",
        kicker: "1854",
        title: "Built for the South Carolina Institute",
        partLabel: "the hall",
        art: art(
          "m1069-hall.jpg",
          "Illustration of an Italianate public hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Built in 1854",
            x: 32,
            y: 48,
            fact: "Institute Hall, built here in 1854, stood until 1861. An Italianate building, it was designed by Jones and Lee for the South Carolina Institute, a progressive organization promoting “art, ingenuity, mechanical skill, and industry.”",
          },
          {
            id: "seats",
            label: "Seated 3,000",
            x: 74,
            y: 40,
            fact: "The Grand Hall, Charleston’s largest public space, seated 3,000 and hosted fairs, exhibits, concerts, balls, and conventions. It hosted the 1860 Democratic convention, which split over the mention of slavery in the platform.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "Dec. 20, 1860",
        title: "Secession signed, then the Great Fire",
        partLabel: "the street",
        art: art(
          "m1069-street.jpg",
          "Illustration of a street outside a public hall at night. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "election",
            label: "Nov. 1860",
            x: 32,
            y: 46,
            fact: "Abraham Lincoln’s election as president in Nov. 1860 was the catalyst for a secession convention in S.C. The convention met in Columbia on Dec. 17, but moved to Charleston the next day.",
          },
          {
            id: "signed",
            label: "Dec. 20, 1860",
            x: 74,
            y: 54,
            fact: "On Dec. 20, 1860, S.C. became the first state to secede from the Union. That night delegates signed the Ordinance of Secession before a huge crowd in the Grand Hall. Institute Hall later burned in the “Great Fire” of Dec. 1861.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The Grand Hall",
        title: "Seats in Charleston’s largest public space",
        partLabel: "3,000 seats",
        value: 3000,
        unit: "seats",
        meant:
          "What this meant: the marker says the Grand Hall, Charleston’s largest public space, seated 3,000.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1069-hall.jpg",
          "Illustration of an Italianate public hall. Not a historical photograph.",
        ),
        nowArt: art(
          "m1069-today.jpg",
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an Italianate public hall, for Institute Hall, which the marker says was built here in 1854. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1854",
            label: "Institute Hall is built here.",
            why: "The marker says Institute Hall was built here in 1854 and stood until 1861. An Italianate building, it was designed by Jones and Lee for the South Carolina Institute.",
          },
          {
            id: "election",
            year: "Nov. 1860",
            label: "Lincoln’s election is the catalyst for a secession convention.",
            why: "The marker says Abraham Lincoln’s election as president in Nov. 1860 was the catalyst for a secession convention in S.C. The convention met in Columbia on Dec. 17, but moved to Charleston the next day.",
          },
          {
            id: "signed",
            year: "Dec. 20, 1860",
            label: "S.C. secedes, and the Ordinance is signed in the Grand Hall.",
            why: "The marker says that on Dec. 20, 1860, S.C. became the first state to secede from the Union. That night delegates signed the Ordinance of Secession before a huge crowd in the Grand Hall.",
          },
          {
            id: "fire",
            year: "Dec. 1861",
            label: "Institute Hall burns in the Great Fire.",
            why: "The marker says Institute Hall stood until 1861 and later burned in the “Great Fire” of Dec. 1861.",
          },
        ],
        ["fire", "built", "signed", "election"],
      ),
      takeaway([
        "Institute Hall, built here in 1854, stood until 1861. An Italianate building, it was designed by Jones and Lee for the South Carolina Institute.",
        "The Grand Hall, Charleston’s largest public space, seated 3,000. It hosted the 1860 Democratic convention, which split over the mention of slavery in the platform.",
        "On Dec. 20, 1860, S.C. became the first state to secede from the Union. That night delegates signed the Ordinance of Secession before a huge crowd in the Grand Hall. Institute Hall later burned in the “Great Fire” of Dec. 1861.",
      ]),
    ],
  ),
  lesson(
    "10-70",
    "A cemetery almost full by 1857",
    "Hampstead Cemetery timeline",
    [
      cited("10-70", "Hampstead Cemetery", "front and back"),
      span(
        '"16 years" is 1857 minus 1841, the years the marker prints for the cemetery being almost full and its establishment.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "cemetery",
        kicker: "1841",
        title: "God’s Acre, later the German Cemetery",
        partLabel: "the cemetery",
        art: art(
          "m1070-cemetery.jpg",
          "Illustration of a cemetery of plain stones. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "Established in 1841",
            x: 32,
            y: 50,
            fact: "A cemetery established here in 1841, also known as “God’s Acre” and later “the German Cemetery,” was maintained by St. Matthews Evangelical Lutheran Church until about 1860.",
          },
          {
            id: "founded",
            label: "Founded in 1840",
            x: 74,
            y: 42,
            fact: "That church, founded in 1840 by the rapidly-growing community of Germans in Charleston, was originally the German Evangelical Church of Charleston. Its founders purchased land here for a cemetery shortly before they built their church at the corner of Anson and Hasell Streets.",
          },
        ],
      },
      {
        kind: "scene",
        id: "gate",
        kicker: "1857",
        title: "Epidemics, then Bethany Cemetery",
        partLabel: "the gate",
        art: art(
          "m1070-gate.jpg",
          "Illustration of a cemetery gate with no lettering. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "plots",
            label: "Half-plots and quarter-plots",
            x: 32,
            y: 48,
            fact: "Hampstead Cemetery, laid out between cemeteries owned by the African Society and the Hebrew Congregation, sold half-plots and quarter-plots to church members and others.",
          },
          {
            id: "full",
            label: "Almost full by 1857",
            x: 74,
            y: 40,
            fact: "Yellow fever epidemics in 1849, 1852, and 1856 killed so many Germans that the cemetery was almost full by 1857, when the church dedicated Bethany Cemetery, a new cemetery in North Charleston, near Magnolia Cemetery. Several graves found here in 1982 were removed to Bethany in 2009.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1841-1857",
        title: "Years until the cemetery was almost full",
        partLabel: "16 years",
        value: 16,
        unit: "years",
        meant:
          "What this meant: 1857 comes 16 years after 1841. That is the stretch from the year the cemetery was established to the year the marker says it was almost full.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1070-cemetery.jpg",
          "Illustration of a cemetery of plain stones. Not a historical photograph.",
        ),
        nowArt: art(
          "m1070-today.jpg",
          "Illustration of a blank roadside marker by a cemetery wall. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cemetery, for the ground the marker says was established here in 1841. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a cemetery wall. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1840",
            label: "The German Evangelical Church of Charleston is founded.",
            why: "The marker says St. Matthews Evangelical Lutheran Church was founded in 1840 by the rapidly-growing community of Germans in Charleston, and was originally the German Evangelical Church of Charleston.",
          },
          {
            id: "established",
            year: "1841",
            label: "The cemetery is established here.",
            why: "The marker says a cemetery was established here in 1841, also known as “God’s Acre” and later “the German Cemetery,” and was maintained by the church until about 1860.",
          },
          {
            id: "full",
            year: "1857",
            label: "The cemetery is almost full, and Bethany Cemetery is dedicated.",
            why: "The marker says yellow fever epidemics in 1849, 1852, and 1856 killed so many Germans that the cemetery was almost full by 1857, when the church dedicated Bethany Cemetery in North Charleston, near Magnolia Cemetery.",
          },
          {
            id: "removed",
            year: "2009",
            label: "Graves found in 1982 are removed to Bethany.",
            why: "The marker says several graves found here in 1982 were removed to Bethany in 2009.",
          },
        ],
        ["full", "founded", "removed", "established"],
      ),
      takeaway([
        "A cemetery established here in 1841, also known as “God’s Acre” and later “the German Cemetery,” was maintained by St. Matthews Evangelical Lutheran Church until about 1860.",
        "That church was founded in 1840. Yellow fever epidemics in 1849, 1852, and 1856 left the cemetery almost full by 1857, when Bethany Cemetery was dedicated near Magnolia Cemetery.",
        "Hampstead Cemetery sold half-plots and quarter-plots. Several graves found here in 1982 were removed to Bethany in 2009.",
      ]),
    ],
  ),
  lesson(
    "10-71",
    "Laid out south of Hampton Park",
    "Hampton Park Terrace timeline",
    [
      cited("10-71", "Hampton Park Terrace", "front and back"),
      span(
        '"10 years" is 1922 minus 1912, the years the marker prints for most of the houses.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "houses",
        kicker: "1912",
        title: "A planned suburb on Huger Street",
        partLabel: "the houses",
        art: art(
          "m1071-houses.jpg",
          "Illustration of early suburban houses and porches. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "laid",
            label: "Laid out in 1912",
            x: 32,
            y: 46,
            fact: "Hampton Park Terrace, an early 20th-century planned suburb, was laid out in 1912 along Huger Street between Rutledge and Hagood Aves.",
          },
          {
            id: "yard",
            label: "Navy Yard, 1901",
            x: 74,
            y: 54,
            fact: "Its success coincided with the economic boom that followed the opening of the Charleston Navy Yard in 1901. It was also aided by its location immediately south of Hampton Park, a large municipal park built on the site of the 1901-02 Charleston and West-Indian Exposition.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1922",
        title: "Houses from 1912 to 1922",
        partLabel: "the street",
        art: art(
          "m1071-street.jpg",
          "Illustration of a tree-lined residential street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "praise",
            label: "What developers praised",
            x: 32,
            y: 44,
            fact: "Developers praised “the open fresh beauty of Hampton Park Terrace” and called it “the ideal home overlooking both river and Park.”",
          },
          {
            id: "styles",
            label: "1912 to 1922",
            x: 74,
            y: 52,
            fact: "Most houses date from 1912 to 1922 and include excellent examples of the American Foursquare, Colonial Revival, Prairie, Craftsman, and Bungalow styles. The Hampton Park Terrace Historic District was listed in the National Register of Historic Places in 1997.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1912-1922",
        title: "Years most of the houses date from",
        partLabel: "10 years",
        value: 10,
        unit: "years",
        meant:
          "What this meant: 1922 comes 10 years after 1912. That is the stretch the marker prints for most of the houses.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1071-houses.jpg",
          "Illustration of early suburban houses and porches. Not a historical photograph.",
        ),
        nowArt: art(
          "m1071-today.jpg",
          "Illustration of a blank roadside marker on a residential sidewalk. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of suburban houses, for the planned suburb the marker says was laid out in 1912. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a residential sidewalk. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "yard",
            year: "1901",
            label: "The Navy Yard opens, and Hampton Park is on the exposition site.",
            why: "The marker says the suburb’s success coincided with the economic boom that followed the opening of the Charleston Navy Yard in 1901. It was also aided by its location immediately south of Hampton Park, built on the site of the 1901-02 Charleston and West-Indian Exposition.",
          },
          {
            id: "laid",
            year: "1912",
            label: "Hampton Park Terrace is laid out.",
            why: "The marker says this early 20th-century planned suburb was laid out in 1912 along Huger Street between Rutledge and Hagood Aves.",
          },
          {
            id: "houses",
            year: "1922",
            label: "Most of the houses date from this year back to 1912.",
            why: "The marker says most houses date from 1912 to 1922 and include American Foursquare, Colonial Revival, Prairie, Craftsman, and Bungalow styles.",
          },
          {
            id: "listed",
            year: "1997",
            label: "The historic district is listed in the National Register.",
            why: "The marker says the Hampton Park Terrace Historic District was listed in the National Register of Historic Places in 1997.",
          },
        ],
        ["listed", "yard", "houses", "laid"],
      ),
      takeaway([
        "Hampton Park Terrace, an early 20th-century planned suburb, was laid out in 1912 along Huger Street between Rutledge and Hagood Aves.",
        "Its success coincided with the economic boom that followed the opening of the Charleston Navy Yard in 1901. It stands immediately south of Hampton Park, a large municipal park built on the site of the 1901-02 Charleston and West-Indian Exposition.",
        "Most houses date from 1912 to 1922. The Hampton Park Terrace Historic District was listed in the National Register of Historic Places in 1997.",
      ]),
    ],
  ),
  lesson(
    "10-72",
    "The oldest Methodist church standing",
    "Old Bethel timeline",
    [
      cited("10-72", "Old Bethel Methodist Church", "front and back"),
      span(
        '"12 years" is 1809 minus 1797, the years the marker prints for the church being completed and built.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1797",
        title: "Built, dedicated, and completed",
        partLabel: "the church",
        art: art(
          "m1072-church.jpg",
          "Illustration of a wooden meeting-house church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Built in 1797",
            x: 32,
            y: 48,
            fact: "This church, built in 1797 in the meeting-house form, was dedicated in 1798 and completed in 1809. It is the oldest Methodist church standing in Charleston.",
          },
          {
            id: "left",
            label: "Left in 1833",
            x: 74,
            y: 40,
            fact: "Originally at the corner of Pitt and Calhoun Streets, Bethel Methodist Church was a congregation of white and black members, both free blacks and slaves. Many blacks left the church in 1833 during a dispute over seating. Though some later returned, many did not.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1852",
        title: "Moved west, then moved here",
        partLabel: "the churchyard",
        art: art(
          "m1072-yard.jpg",
          "Illustration of a churchyard beside a meeting house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "west",
            label: "Moved in 1852",
            x: 32,
            y: 50,
            fact: "In 1852 the congregation moved this building west to face Calhoun Street, to make room for a new brick church, completed the next year.",
          },
          {
            id: "here",
            label: "Moved here in 1882",
            x: 74,
            y: 42,
            fact: "This church, called “Old Bethel,” was used for Sunday school before its black members acquired it in 1876. They kept the name Old Bethel and moved the church to this location in 1882. Old Bethel Methodist Church was listed in the National Register of Historic Places in 1975.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1797-1809",
        title: "Years from the building to its completion",
        partLabel: "12 years",
        value: 12,
        unit: "years",
        meant:
          "What this meant: 1809 comes 12 years after 1797. That is the stretch from the year this church was built to the year the marker says it was completed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1072-church.jpg",
          "Illustration of a wooden meeting-house church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1072-today.jpg",
          "Illustration of a blank roadside marker in front of a wooden church. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden meeting house, for the church the marker says was built in 1797. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker in front of a wooden church. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1797",
            label: "The church is built in the meeting-house form.",
            why: "The marker says this church was built in 1797 in the meeting-house form, dedicated in 1798, and completed in 1809. It is the oldest Methodist church standing in Charleston.",
          },
          {
            id: "left",
            year: "1833",
            label: "Many black members leave during a seating dispute.",
            why: "The marker says Bethel Methodist Church, originally at Pitt and Calhoun Streets, was a congregation of white and black members, both free blacks and slaves. Many blacks left in 1833 during a dispute over seating. Though some later returned, many did not.",
          },
          {
            id: "west",
            year: "1852",
            label: "The building is moved west to face Calhoun Street.",
            why: "The marker says that in 1852 the congregation moved this building west to face Calhoun Street, to make room for a new brick church, completed the next year.",
          },
          {
            id: "here",
            year: "1882",
            label: "Old Bethel is moved to this location.",
            why: "The marker says the church, called “Old Bethel,” was used for Sunday school before its black members acquired it in 1876. They kept the name and moved it here in 1882. It was listed in the National Register of Historic Places in 1975.",
          },
        ],
        ["here", "built", "west", "left"],
      ),
      takeaway([
        "This church, built in 1797 in the meeting-house form, was dedicated in 1798 and completed in 1809. It is the oldest Methodist church standing in Charleston.",
        "Originally at Pitt and Calhoun Streets, it had white and black members. Many blacks left in 1833 during a dispute over seating. In 1852 the building was moved west to face Calhoun Street.",
        "Called “Old Bethel,” it was acquired by its black members in 1876 and moved to this location in 1882. It was listed in the National Register of Historic Places in 1975.",
      ]),
    ],
  ),
];
