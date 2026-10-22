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

export const darlingtonLessonsQ: MarkerLesson[] = [
  lesson(
    "16-69",
    "Completed and dedicated in 1890",
    "Bethlehem Methodist Church timeline",
    [
      cited("16-69", "Bethlehem Methodist Church", "front and back"),
      span(
        '"7 years" is 1913 minus 1906, the years the marker prints for Bethlehem School as a rural primary school.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "sardis",
        kicker: "1887",
        title: "A mission station on Old Camden Road",
        partLabel: "the mission station",
        art: art(
          "m1669-frame.jpg",
          "Illustration of a small empty frame church beside a country road. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "Organized in 1887",
            x: 32,
            y: 48,
            fact: "This church grew out of Sardis Methodist Church, a mission station organized in 1887 with a small frame church on Old Camden Rd. 3 mi. E.",
          },
          {
            id: "dedicated",
            label: "Dedicated in 1890",
            x: 74,
            y: 58,
            fact: "When that church burned in 1889, its elders accepted a donation of 4 acres here from David Byrd for “New Sardis Methodist Church.” This church, on this site since 1889, was completed and dedicated in 1890 as Bethlehem Methodist Church.",
          },
        ],
      },
      {
        kind: "scene",
        id: "circuit",
        kicker: "1910",
        title: "The main church of the Bethlehem Circuit",
        partLabel: "the circuit",
        art: art(
          "m1669-circuit.jpg",
          "Illustration of a wooden church, a small house, and a school across a road. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "circuit",
            label: "Circuit created in 1910",
            x: 32,
            y: 48,
            fact: "At first on the Clyde circuit, this church, averaging about 250 members in its early years, became the main church of the Bethlehem Circuit when that circuit was created in 1910. A parsonage built that year, on an acre donated by F.W. Howle, served as the circuit parsonage until 1953.",
          },
          {
            id: "school",
            label: "School from 1906 to 1913",
            x: 74,
            y: 58,
            fact: "Bethlehem School, across the road from the church, was a rural primary school from 1906 to 1913.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1906-1913",
        title: "Years Bethlehem School was open",
        partLabel: "7 years",
        value: 7,
        unit: "years",
        meant:
          "What this meant: 1913 comes 7 years after 1906. That is the stretch the marker prints for Bethlehem School as a rural primary school.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1669-frame.jpg",
          "Illustration of a small empty frame church beside a country road. Not a historical photograph.",
        ),
        nowArt: art(
          "m1669-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small frame church, for the mission the marker says was organized in 1887 with a church on Old Camden Rd. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1887",
            label: "Sardis Methodist Church is organized.",
            why: "The marker says this church grew out of Sardis Methodist Church, a mission station organized in 1887 with a small frame church on Old Camden Rd. 3 mi. E.",
          },
          {
            id: "burned",
            year: "1889",
            label: "The frame church burns, and elders accept 4 acres.",
            why: "The marker says that when that church burned in 1889, its elders accepted a donation of 4 acres here from David Byrd for “New Sardis Methodist Church.” This church has been on this site since 1889.",
          },
          {
            id: "dedicated",
            year: "1890",
            label: "The church is dedicated as Bethlehem Methodist Church.",
            why: "The marker says this church was completed and dedicated in 1890 as Bethlehem Methodist Church.",
          },
          {
            id: "circuit",
            year: "1910",
            label: "The Bethlehem Circuit is created.",
            why: "The marker says this church became the main church of the Bethlehem Circuit when that circuit was created in 1910.",
          },
        ],
        ["circuit", "organized", "dedicated", "burned"],
      ),
      takeaway([
        "This church, on this site since 1889, grew out of Sardis Methodist Church, a mission station organized in 1887.",
        "When that church burned in 1889, its elders accepted a donation of 4 acres here from David Byrd. This church was completed and dedicated in 1890 as Bethlehem Methodist Church.",
        "Bethlehem School, across the road from the church, was a rural primary school from 1906 to 1913.",
      ]),
    ],
  ),
  lesson(
    "16-70",
    "Principal at both sites for 37 years",
    "Hartsville Graded School timeline",
    [cited("16-70", "Hartsville Graded School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "About 1900",
        title: "The first public school on this site",
        partLabel: "the graded school",
        art: art(
          "m1670-school.jpg",
          "Illustration of an empty wooden schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "About 1900 to 1921",
            x: 32,
            y: 48,
            fact: "The first public school for the black children of Hartsville and vicinity operated on this site from about 1900 to 1921. It was renamed Darlington County Training School in 1918. A new school was built on 6th St. south of this site in 1921.",
          },
          {
            id: "butler",
            label: "Principal for 37 years",
            x: 74,
            y: 58,
            fact: "Rev. Henry H. Butler (1887-1948) was principal at both sites for a combined 37 years. The 1921 school was renamed Butler School in Butler’s honor in 1939.",
          },
        ],
      },
      {
        kind: "scene",
        id: "pisgah",
        kicker: "1922",
        title: "A Sunday school, then Pride Park",
        partLabel: "the church and the park",
        art: art(
          "m1670-park.jpg",
          "Illustration of an empty wooden church beside an open park. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "church",
            label: "Organized in 1922",
            x: 32,
            y: 48,
            fact: "Mt. Pisgah Presbyterian Church grew out of a Sunday school started on this site by Rev. T.J. James in 1922. The church was organized that same year, and a new church building was erected nearby in 1926. Rev. James also founded Mt. Pisgah Nursery School, which operated in the old graded school here for many years.",
          },
          {
            id: "park",
            label: "Pride Park in 1986",
            x: 74,
            y: 58,
            fact: "Rev. James’s family later donated this property to the city for Pride Park, established in 1986.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "37 years",
        title: "Years as principal at both sites",
        partLabel: "37 years",
        value: 37,
        unit: "years",
        meant:
          "What this meant: the marker says Rev. Henry H. Butler (1887-1948) was principal at both sites for a combined 37 years.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1670-school.jpg",
          "Illustration of an empty wooden schoolhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m1670-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden schoolhouse, for the first public school the marker says operated on this site from about 1900 to 1921. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "About 1900",
            label: "The first public school operates on this site.",
            why: "The marker says the first public school for the black children of Hartsville and vicinity operated on this site from about 1900 to 1921.",
          },
          {
            id: "church",
            year: "1922",
            label: "Mt. Pisgah Presbyterian Church is organized.",
            why: "The marker says a Sunday school was started on this site by Rev. T.J. James in 1922, and the church was organized that same year.",
          },
          {
            id: "honor",
            year: "1939",
            label: "The 1921 school is renamed Butler School.",
            why: "The marker says the 1921 school was renamed Butler School in Butler’s honor in 1939.",
          },
          {
            id: "park",
            year: "1986",
            label: "Pride Park is established.",
            why: "The marker says Rev. James’s family later donated this property to the city for Pride Park, established in 1986.",
          },
        ],
        ["park", "opened", "honor", "church"],
      ),
      takeaway([
        "The first public school for the black children of Hartsville and vicinity operated on this site from about 1900 to 1921. It was renamed Darlington County Training School in 1918.",
        "Rev. Henry H. Butler (1887-1948) was principal at both sites for a combined 37 years. The 1921 school was renamed Butler School in Butler’s honor in 1939.",
        "Rev. James’s family later donated this property to the city for Pride Park, established in 1986.",
      ]),
    ],
  ),
  lesson(
    "16-71",
    "Founded by 20 members in 1869",
    "New Hopewell Baptist Church timeline",
    [cited("16-71", "New Hopewell Baptist Church", "front and back")],
    [
      {
        kind: "scene",
        id: "founding",
        kicker: "1869",
        title: "Twenty members form their own congregation",
        partLabel: "the new congregation",
        art: art(
          "m1671-arbor.jpg",
          "Illustration of an empty brush arbor in a clearing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "members",
            label: "Founded in 1869",
            x: 32,
            y: 48,
            fact: "This church was formally organized soon after the Civil War. It was founded by 20 black members of Antioch Baptist Church, who received letters of dismissal to form their own congregation in 1869.",
          },
          {
            id: "antioch",
            label: "Antioch since 1830",
            x: 74,
            y: 58,
            fact: "Slaves and free blacks had belonged to Antioch Baptist Church since its organization in 1830.",
          },
        ],
      },
      {
        kind: "scene",
        id: "building",
        kicker: "1871",
        title: "From a brush arbor to a sanctuary",
        partLabel: "the buildings",
        art: art(
          "m1671-church.jpg",
          "Illustration of an empty wooden church and a quiet churchyard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acre",
            label: "An acre in 1871",
            x: 32,
            y: 48,
            fact: "This church held its first services in a brush arbor. In 1871 Mrs. Lottie Cosom donated an acre on this site, later expanded to four acres for the church and cemetery.",
          },
          {
            id: "sanctuary",
            label: "Sanctuary in 1962",
            x: 74,
            y: 58,
            fact: "New Hopewell built its first permanent church here in 1886, renovated in 1887 and 1917-18. The present sanctuary was built in 1962.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1869",
        title: "Members who founded the church",
        partLabel: "20 members",
        value: 20,
        unit: "members",
        meant:
          "What this meant: the marker says the church was founded by 20 black members of Antioch Baptist Church, who received letters of dismissal to form their own congregation in 1869.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1671-arbor.jpg",
          "Illustration of an empty brush arbor in a clearing. Not a historical photograph.",
        ),
        nowArt: art(
          "m1671-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brush arbor, for the first services the marker says this church held. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "antioch",
            year: "1830",
            label: "Antioch Baptist Church is organized.",
            why: "The marker says slaves and free blacks had belonged to Antioch Baptist Church since its organization in 1830.",
          },
          {
            id: "founded",
            year: "1869",
            label: "Twenty members form their own congregation.",
            why: "The marker says the church was founded by 20 black members of Antioch Baptist Church, who received letters of dismissal to form their own congregation in 1869.",
          },
          {
            id: "permanent",
            year: "1886",
            label: "The first permanent church is built here.",
            why: "The marker says New Hopewell built its first permanent church here in 1886.",
          },
          {
            id: "sanctuary",
            year: "1962",
            label: "The present sanctuary is built.",
            why: "The marker says the present sanctuary was built in 1962.",
          },
        ],
        ["sanctuary", "antioch", "permanent", "founded"],
      ),
      takeaway([
        "This church was formally organized soon after the Civil War. It was founded by 20 black members of Antioch Baptist Church, who received letters of dismissal to form their own congregation in 1869.",
        "Slaves and free blacks had belonged to Antioch Baptist Church since its organization in 1830.",
        "This church held its first services in a brush arbor. The present sanctuary was built in 1962.",
      ]),
    ],
  ),
  lesson(
    "16-72",
    "A model house when it was dedicated",
    "Swift Creek Baptist Church timeline",
    [
      cited("16-72", "Swift Creek Baptist Church", "front and back"),
      span(
        '"43 years" is 1876 minus 1833, the years the marker prints for the pastorate of Rev. William Beck.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "record",
        kicker: "1789",
        title: "76 members of the Charleston association",
        partLabel: "the earliest record",
        art: art(
          "m1672-creek.jpg",
          "Illustration of a creek and a small empty meeting house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "record",
            label: "Earliest record, 1789",
            x: 32,
            y: 48,
            fact: "The earliest record of this church dates to 1789, when it belonged to the Charleston Baptist Association and had 76 members. It took its name from, and built its first and later churches near, Swift Creek.",
          },
          {
            id: "welsh",
            label: "Welsh Neck in 1831",
            x: 74,
            y: 58,
            fact: "The congregation grew after a revival in 1829 and the church joined the Welsh Neck Baptist Association in 1831. It soon became a central part of this rural community.",
          },
        ],
      },
      {
        kind: "scene",
        id: "frame",
        kicker: "1903",
        title: "A large frame church, then brick",
        partLabel: "the church buildings",
        art: art(
          "m1672-frame.jpg",
          "Illustration of a large empty frame church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "site",
            label: "This site in 1844",
            x: 32,
            y: 48,
            fact: "The congregation acquired this site in 1844, during the long pastorate of Rev. William Beck from 1833 to 1876. The historic cemetery here dates from 1878.",
          },
          {
            id: "brick",
            label: "Brick church in 1950",
            x: 74,
            y: 58,
            fact: "A large frame church built here in 1903, described by the Baptist Courier as “a model house” when it was dedicated, was replaced by the present brick church in 1950, during the pastorate of Rev. E.B. Bagby, Jr.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1833-1876",
        title: "Years of Rev. William Beck’s pastorate",
        partLabel: "43 years",
        value: 43,
        unit: "years",
        meant:
          "What this meant: 1876 comes 43 years after 1833. That is the stretch the marker prints for the long pastorate of Rev. William Beck.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1672-frame.jpg",
          "Illustration of a large empty frame church. Not a historical photograph.",
        ),
        nowArt: art(
          "m1672-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a large frame church, for the building the marker says was built here in 1903 and described as “a model house.” Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "record",
            year: "1789",
            label: "The earliest record places the church in the Charleston association.",
            why: "The marker says the earliest record of this church dates to 1789, when it belonged to the Charleston Baptist Association and had 76 members.",
          },
          {
            id: "beck",
            year: "1833",
            label: "Rev. William Beck’s pastorate begins.",
            why: "The marker says the congregation acquired this site in 1844, during the long pastorate of Rev. William Beck from 1833 to 1876.",
          },
          {
            id: "frame",
            year: "1903",
            label: "A large frame church is built here.",
            why: "The marker says a large frame church built here in 1903 was described by the Baptist Courier as “a model house” when it was dedicated.",
          },
          {
            id: "brick",
            year: "1950",
            label: "The present brick church replaces it.",
            why: "The marker says the frame church was replaced by the present brick church in 1950, during the pastorate of Rev. E.B. Bagby, Jr.",
          },
        ],
        ["brick", "record", "frame", "beck"],
      ),
      takeaway([
        "The earliest record of this church dates to 1789, when it belonged to the Charleston Baptist Association and had 76 members.",
        "The congregation acquired this site in 1844, during the long pastorate of Rev. William Beck from 1833 to 1876.",
        "A large frame church built here in 1903, described by the Baptist Courier as “a model house” when it was dedicated, was replaced by the present brick church in 1950.",
      ]),
    ],
  ),
];
