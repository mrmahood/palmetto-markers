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

export const charlestonLessonsAF: MarkerLesson[] = [
  lesson(
    "10-146",
    "The last British soldiers leave Charleston",
    "British Evacuation of Charleston timeline",
    [cited("10-146", "British Evacuation of Charleston", "front and back")],
    [
      {
        kind: "scene",
        id: "harbor",
        kicker: "Dec. 14, 1782",
        title: "Evacuated from this site",
        partLabel: "the harbor",
        art: art(
          "m10146-harbor.jpg",
          "Illustration of an empty harbor wharf. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "leave",
            label: "Dec. 14, 1782",
            x: 32,
            y: 48,
            fact: "On Dec. 14, 1782, the last remaining British soldiers in the Carolinas evacuated Charleston from this site.",
          },
          {
            id: "occupation",
            label: "A 31-month occupation",
            x: 74,
            y: 42,
            fact: "Their departure ended a 31-month occupation of the city and marked the close of the American Revolutionary War in the southern U.S., more than a year after the Patriot victory at Yorktown, Va. Control of the city was peacefully transferred after months of planning and a ceasefire agreement by the American and British armies.",
          },
        ],
      },
      {
        kind: "scene",
        id: "ships",
        kicker: "1783",
        title: "Ships from Gadsden’s Wharf",
        partLabel: "the ships",
        art: art(
          "m10146-ships.jpg",
          "Illustration of sailing ships leaving a harbor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "embarked",
            label: "Around 14,000",
            x: 32,
            y: 46,
            fact: "Around 14,000 British and Hessian soldiers, Loyalists, and enslaved and free Blacks embarked from Gadsden’s Wharf on up to 300 ships destined for the Caribbean, East Florida, Canada, New York, and England.",
          },
          {
            id: "treaty",
            label: "Treaty of Paris",
            x: 74,
            y: 56,
            fact: "Patriot Gen. Nathanael Greene called the evacuation a moment “so very important to all America.” News soon arrived of England’s provisional recognition of U.S. independence, formalized in 1783 by the Treaty of Paris.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Dec. 14, 1782",
        title: "Months the occupation had lasted",
        partLabel: "31 months",
        value: 31,
        unit: "months",
        meant:
          "What this meant: the marker says their departure ended a 31-month occupation of the city and marked the close of the American Revolutionary War in the southern U.S.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10146-harbor.jpg",
          "Illustration of an empty harbor wharf. Not a historical photograph.",
        ),
        nowArt: art(
          "m10146-today.jpg",
          "Illustration of a blank roadside marker by a harbor. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an empty harbor wharf, for the site the marker says the last remaining British soldiers in the Carolinas evacuated Charleston from on Dec. 14, 1782. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a harbor. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "ceasefire",
            year: "Before Dec. 14, 1782",
            label: "The armies plan for months and agree to a ceasefire.",
            why: "The marker says control of the city was peacefully transferred after months of planning and a ceasefire agreement by the American and British armies.",
          },
          {
            id: "evacuate",
            year: "Dec. 14, 1782",
            label: "The last British soldiers evacuate Charleston from this site.",
            why: "The marker says that on Dec. 14, 1782, the last remaining British soldiers in the Carolinas evacuated Charleston from this site. Their departure ended a 31-month occupation of the city. Around 14,000 embarked from Gadsden’s Wharf on up to 300 ships. Patriot Gen. Nathanael Greene called the evacuation a moment “so very important to all America.”",
          },
          {
            id: "news",
            year: "After the evacuation",
            label: "News arrives of England’s provisional recognition.",
            why: "The marker says news soon arrived of England’s provisional recognition of U.S. independence, formalized in 1783 by the Treaty of Paris.",
          },
          {
            id: "treaty",
            year: "1783",
            label: "The Treaty of Paris formalizes that recognition.",
            why: "The marker says England’s provisional recognition of U.S. independence was formalized in 1783 by the Treaty of Paris.",
          },
        ],
        ["treaty", "ceasefire", "news", "evacuate"],
      ),
      takeaway([
        "On Dec. 14, 1782, the last remaining British soldiers in the Carolinas evacuated Charleston from this site. Their departure ended a 31-month occupation of the city and marked the close of the American Revolutionary War in the southern U.S., more than a year after the Patriot victory at Yorktown, Va.",
        "Control of the city was peacefully transferred after months of planning and a ceasefire agreement by the American and British armies. Around 14,000 British and Hessian soldiers, Loyalists, and enslaved and free Blacks embarked from Gadsden’s Wharf on up to 300 ships destined for the Caribbean, East Florida, Canada, New York, and England.",
        "Patriot Gen. Nathanael Greene called the evacuation a moment “so very important to all America.” News soon arrived of England’s provisional recognition of U.S. independence, formalized in 1783 by the Treaty of Paris.",
      ]),
    ],
  ),
  lesson(
    "10-147",
    "One of the earliest Black public schools on James Island",
    "Three Trees School timeline",
    [cited("10-147", "Three Trees School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "By 1888",
        title: "Opened on James Island",
        partLabel: "the school",
        art: art(
          "m10147-school.jpg",
          "Illustration of a small wooden schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "By 1888",
            x: 32,
            y: 48,
            fact: "This was the site of Three Trees School, one of the earliest Black public schools on James Island. Three Trees opened by 1888 and was one of three schools then providing an education to local Black students, along with Society Corner and Cut Bridge schools.",
          },
          {
            id: "rooms",
            label: "By 1913",
            x: 74,
            y: 40,
            fact: "By 1913, Three Trees School was housed in a two-room wooden structure with about 80 students in attendance.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1936",
        title: "A three-room schoolhouse, then a closing",
        partLabel: "the schoolyard",
        art: art(
          "m10147-yard.jpg",
          "Illustration of an empty schoolyard and a wooden schoolhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "pwa",
            label: "1936",
            x: 32,
            y: 52,
            fact: "Three Trees School later met in a former residence repurposed as a lodge hall. In 1936, a three-room wooden schoolhouse was built at this site with funds from the New Deal-era Public Works Administration (PWA).",
          },
          {
            id: "closed",
            label: "1953",
            x: 74,
            y: 42,
            fact: "Three Trees School enrolled more than 150 students when it closed in 1953 and was replaced by W. Gresham Meggett School on Grimball Road. It was torn down shortly thereafter.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "By 1913",
        title: "Students in the two-room school",
        partLabel: "about 80 students",
        value: 80,
        unit: "students",
        meant:
          "What this meant: the marker says that by 1913 Three Trees School was housed in a two-room wooden structure with about 80 students in attendance.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10147-school.jpg",
          "Illustration of a small wooden schoolhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m10147-today.jpg",
          "Illustration of a blank roadside marker on a rural road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small wooden schoolhouse, for Three Trees School, which the marker says opened by 1888 and by 1913 was housed in a two-room wooden structure. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a rural road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "opened",
            year: "By 1888",
            label: "Three Trees opens as one of three schools for local Black students.",
            why: "The marker says Three Trees opened by 1888 and was one of three schools then providing an education to local Black students, along with Society Corner and Cut Bridge schools.",
          },
          {
            id: "rooms",
            year: "By 1913",
            label: "It is housed in a two-room wooden structure.",
            why: "The marker says that by 1913 Three Trees School was housed in a two-room wooden structure with about 80 students in attendance.",
          },
          {
            id: "built",
            year: "1936",
            label: "A three-room wooden schoolhouse is built with PWA funds.",
            why: "The marker says Three Trees School later met in a former residence repurposed as a lodge hall. In 1936, a three-room wooden schoolhouse was built at this site with funds from the New Deal-era Public Works Administration (PWA).",
          },
          {
            id: "closed",
            year: "1953",
            label: "The school closes and is replaced.",
            why: "The marker says Three Trees School enrolled more than 150 students when it closed in 1953 and was replaced by W. Gresham Meggett School on Grimball Road. It was torn down shortly thereafter.",
          },
        ],
        ["built", "opened", "closed", "rooms"],
      ),
      takeaway([
        "This was the site of Three Trees School, one of the earliest Black public schools on James Island. Three Trees opened by 1888 and was one of three schools then providing an education to local Black students, along with Society Corner and Cut Bridge schools.",
        "By 1913, Three Trees School was housed in a two-room wooden structure with about 80 students in attendance. Three Trees School later met in a former residence repurposed as a lodge hall.",
        "In 1936, a three-room wooden schoolhouse was built at this site with funds from the New Deal-era Public Works Administration (PWA). Three Trees School enrolled more than 150 students when it closed in 1953 and was replaced by W. Gresham Meggett School on Grimball Road. It was torn down shortly thereafter.",
      ]),
    ],
  ),
  lesson(
    "10-148",
    "A county hospital that replaced the 1924 sanatorium",
    "Pinehaven Tuberculosis Hospital timeline",
    [
      cited("10-148", "Pinehaven Tuberculosis Hospital", "front and back"),
      span(
        '"63 years" is 2016 minus 1953, the years the marker prints for the demolition and the opening of Pinehaven Tuberculosis Hospital.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "hospital",
        kicker: "1953",
        title: "Opened in a three-story brick building",
        partLabel: "the hospital",
        art: art(
          "m10148-hospital.jpg",
          "Illustration of a three-story brick hospital building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1953",
            x: 32,
            y: 46,
            fact: "Pinehaven Tuberculosis Hospital opened at this site in 1953. The 3-story brick hospital was owned by Charleston County and run by the Charleston County Tuberculosis Association. It was designed by architects Simons & Lapham and replaced Pinehaven Sanatorium, built in 1924 in North Charleston.",
          },
          {
            id: "beds",
            label: "80 beds",
            x: 74,
            y: 40,
            fact: "The hospital had 80 beds in racially segregated wards, plus an auditorium, operating room, offices, and other facilities.",
          },
        ],
      },
      {
        kind: "scene",
        id: "pines",
        kicker: "1965",
        title: "A new wing, a new name, then demolition",
        partLabel: "the pines",
        art: art(
          "m10148-pines.jpg",
          "Illustration of pines and a brick hospital wing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "wing",
            label: "1965 and 1981",
            x: 32,
            y: 50,
            fact: "In 1965 a new wing was built and Pinehaven became a 160-bed general hospital managed by Charleston County. It mainly provided indigent care and emergency services. It was renamed Charleston Memorial Hospital in 1981.",
          },
          {
            id: "closed",
            label: "2008 and 2016",
            x: 74,
            y: 42,
            fact: "It closed in 2008 and became a long-term care facility. Generations of house staff and students from the nearby Medical University of S.C. trained at the hospital over its history. It was demolished in 2016.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1953-2016",
        title: "Years from the opening to the demolition",
        partLabel: "63 years",
        value: 63,
        unit: "years",
        meant:
          "What this meant: 2016 comes 63 years after 1953. That is the stretch from the year the marker says Pinehaven Tuberculosis Hospital opened at this site to the year it was demolished.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10148-hospital.jpg",
          "Illustration of a three-story brick hospital building. Not a historical photograph.",
        ),
        nowArt: art(
          "m10148-today.jpg",
          "Illustration of a blank roadside marker beside pines. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a three-story brick hospital building, for Pinehaven Tuberculosis Hospital, which the marker says opened at this site in 1953. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside pines. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "sanatorium",
            year: "1924",
            label: "Pinehaven Sanatorium is built in North Charleston.",
            why: "The marker says the hospital replaced Pinehaven Sanatorium, built in 1924 in North Charleston.",
          },
          {
            id: "opened",
            year: "1953",
            label: "Pinehaven Tuberculosis Hospital opens at this site.",
            why: "The marker says Pinehaven Tuberculosis Hospital opened at this site in 1953. The 3-story brick hospital was owned by Charleston County and run by the Charleston County Tuberculosis Association. It was designed by architects Simons & Lapham. It had 80 beds in racially segregated wards, plus an auditorium, operating room, offices, and other facilities.",
          },
          {
            id: "wing",
            year: "1965",
            label: "A new wing makes it a 160-bed general hospital.",
            why: "The marker says that in 1965 a new wing was built and Pinehaven became a 160-bed general hospital managed by Charleston County. It mainly provided indigent care and emergency services.",
          },
          {
            id: "renamed",
            year: "1981",
            label: "It is renamed Charleston Memorial Hospital.",
            why: "The marker says it was renamed Charleston Memorial Hospital in 1981.",
          },
          {
            id: "closed",
            year: "2008",
            label: "It closes and becomes a long-term care facility.",
            why: "The marker says it closed in 2008 and became a long-term care facility. Generations of house staff and students from the nearby Medical University of S.C. trained at the hospital over its history.",
          },
          {
            id: "demolished",
            year: "2016",
            label: "The hospital is demolished.",
            why: "The marker says it was demolished in 2016.",
          },
        ],
        ["closed", "sanatorium", "renamed", "demolished", "wing", "opened"],
      ),
      takeaway([
        "Pinehaven Tuberculosis Hospital opened at this site in 1953. The 3-story brick hospital was owned by Charleston County and run by the Charleston County Tuberculosis Association. It was designed by architects Simons & Lapham and replaced Pinehaven Sanatorium, built in 1924 in North Charleston. The hospital had 80 beds in racially segregated wards, plus an auditorium, operating room, offices, and other facilities.",
        "In 1965 a new wing was built and Pinehaven became a 160-bed general hospital managed by Charleston County. It mainly provided indigent care and emergency services. It was renamed Charleston Memorial Hospital in 1981.",
        "It closed in 2008 and became a long-term care facility. Generations of house staff and students from the nearby Medical University of S.C. trained at the hospital over its history. It was demolished in 2016.",
      ]),
    ],
  ),
  lesson(
    "10-149",
    "An equalization school on Wadmalaw Island",
    "Rockville Elementary School timeline",
    [
      cited("10-149", "Rockville Elementary School", "front and back"),
      span(
        '"48 years" is 1974 minus 1926, the years the marker prints for the retirement of Edith L. Frierson and the start of her leadership of the school.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1953-54",
        title: "Built through the equalization program",
        partLabel: "the school",
        art: art(
          "m10149-school.jpg",
          "Illustration of a one-story brick school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1953-54",
            x: 32,
            y: 48,
            fact: "This campus was originally Rockville Elementary School. It replaced an older Rockville School that moved to this site between World Wars I and II from Bethlehem Baptist Church (1 mi. N). It served African American residents of Wadmalaw Island and was built in 1953-54 through the S.C. equalization program, a state effort to defend segregation by improving Black schools.",
          },
          {
            id: "rooms",
            label: "12 rooms",
            x: 74,
            y: 40,
            fact: "The equalization school was designed by Charleston architect Augustus E. Constantine. It enrolled around 400 students in its early years and had 12 rooms.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1974",
        title: "Desegregated, then renamed",
        partLabel: "the schoolyard",
        art: art(
          "m10149-yard.jpg",
          "Illustration of an empty schoolyard beside a low school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "desegregated",
            label: "1970-71",
            x: 32,
            y: 52,
            fact: "It remained predominantly Black after desegregating in 1970-71.",
          },
          {
            id: "renamed",
            label: "Edith L. Frierson",
            x: 74,
            y: 42,
            fact: "In 1974 the school was renamed in honor of longtime principal Edith L. Frierson (1908-1998). A native of Charleston, she led the school from 1926 until retiring in 1974.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1926-1974",
        title: "Years she led the school",
        partLabel: "48 years",
        value: 48,
        unit: "years",
        meant:
          "What this meant: 1974 comes 48 years after 1926. The marker says she led the school from 1926 until retiring in 1974.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10149-school.jpg",
          "Illustration of a one-story brick school. Not a historical photograph.",
        ),
        nowArt: art(
          "m10149-today.jpg",
          "Illustration of a blank roadside marker by a school road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a one-story brick school, for Rockville Elementary School, which the marker says was built in 1953-54 through the S.C. equalization program. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a school road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "first",
            year: "1908",
            label: "The marker’s years for Edith L. Frierson begin.",
            why: "The marker names longtime principal Edith L. Frierson (1908-1998). A native of Charleston, she led the school from 1926 until retiring in 1974.",
          },
          {
            id: "leads",
            year: "1926",
            label: "Edith L. Frierson begins leading the school.",
            why: "The marker says she led the school from 1926 until retiring in 1974.",
          },
          {
            id: "built",
            year: "1953-54",
            label: "Rockville Elementary is built through the equalization program.",
            why: "The marker says this campus was originally Rockville Elementary School. It replaced an older Rockville School that moved to this site between World Wars I and II from Bethlehem Baptist Church (1 mi. N). It served African American residents of Wadmalaw Island and was built in 1953-54 through the S.C. equalization program, a state effort to defend segregation by improving Black schools. It was designed by Charleston architect Augustus E. Constantine, enrolled around 400 students in its early years, and had 12 rooms.",
          },
          {
            id: "desegregated",
            year: "1970-71",
            label: "The school desegregates and remains predominantly Black.",
            why: "The marker says it remained predominantly Black after desegregating in 1970-71.",
          },
          {
            id: "renamed",
            year: "1974",
            label: "The school is renamed for her, and she retires.",
            why: "The marker says that in 1974 the school was renamed in honor of longtime principal Edith L. Frierson (1908-1998). She led the school from 1926 until retiring in 1974.",
          },
          {
            id: "years",
            year: "1998",
            label: "The marker’s years for Edith L. Frierson end.",
            why: "The marker prints Edith L. Frierson (1908-1998).",
          },
        ],
        ["renamed", "first", "years", "built", "leads", "desegregated"],
      ),
      takeaway([
        "This campus was originally Rockville Elementary School. It replaced an older Rockville School that moved to this site between World Wars I and II from Bethlehem Baptist Church (1 mi. N). It served African American residents of Wadmalaw Island and was built in 1953-54 through the S.C. equalization program, a state effort to defend segregation by improving Black schools.",
        "The equalization school was designed by Charleston architect Augustus E. Constantine. It enrolled around 400 students in its early years and had 12 rooms. It remained predominantly Black after desegregating in 1970-71.",
        "In 1974 the school was renamed in honor of longtime principal Edith L. Frierson (1908-1998). A native of Charleston, she led the school from 1926 until retiring in 1974.",
      ]),
    ],
  ),
];
