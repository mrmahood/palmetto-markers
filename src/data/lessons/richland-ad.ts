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

export const richlandLessonsAD: MarkerLesson[] = [
  lesson(
    "40-153",
    "A Washington Street commercial building",
    "North Carolina Mutual Building timeline",
    [
      cited("40-153", "North Carolina Mutual Building", "front and back"),
      span(
        '"86 years" is 1995 minus 1909, the years the marker prints for the National Register listing and the building of the North Carolina Mutual Building.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "building",
        kicker: "1909",
        title: "Built by a black-owned life insurance company",
        partLabel: "the building",
        art: art(
          "m40153-building.jpg",
          "Illustration of a commercial building and workmen raising an upper floor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1909",
            x: 32,
            y: 48,
            fact: "The North Carolina Mutual Building was built in 1909 by the N.C. Mutual and Provident Association, a black-owned life insurance company with an office here until the mid-1930s.",
          },
          {
            id: "stories",
            label: "After 1927",
            x: 74,
            y: 40,
            fact: "Built as a two-story commercial building, with a third story added after 1927, it was part of the Washington Street business district, an important part of Columbia's African-American community for most of the 20th century.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1927",
        title: "Stores below, offices above",
        partLabel: "the street",
        art: art(
          "m40153-street.jpg",
          "Illustration of storefronts and upstairs offices. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "tenants",
            label: "The tenants",
            x: 32,
            y: 52,
            fact: "This building had stores on the first floor and offices on the upper floors. First-floor tenants included barbers and beauticians, tailors and dressmakers, and restaurants. Second and third floor tenants included insurance agents, doctors, and lawyers.",
          },
          {
            id: "lodge",
            label: "1927 and 1995",
            x: 74,
            y: 42,
            fact: "The Palmetto Grand Lodge owned the building from 1927 to the early 1940s. The N.C. Mutual Building was listed in the National Register of Historic Places in 1995.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1909-1995",
        title: "Years from the building to the listing",
        partLabel: "86 years",
        value: 86,
        unit: "years",
        meant:
          "What this meant: 1995 comes 86 years after 1909. That is the stretch from the year the North Carolina Mutual Building was built to the year it was listed in the National Register of Historic Places.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40153-building.jpg",
          "Illustration of a commercial building and workmen raising an upper floor. Not a historical photograph.",
        ),
        nowArt: art(
          "m40153-today.jpg",
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a commercial building, for the North Carolina Mutual Building the marker says was built in 1909. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1909",
            label: "The North Carolina Mutual Building is built.",
            why: "The marker says it was built in 1909 by the N.C. Mutual and Provident Association, a black-owned life insurance company.",
          },
          {
            id: "lodge",
            year: "1927",
            label: "The Palmetto Grand Lodge owns the building.",
            why: "The marker says the Palmetto Grand Lodge owned the building from 1927 to the early 1940s. A third story was added after 1927.",
          },
          {
            id: "listed",
            year: "1995",
            label: "It is listed in the National Register.",
            why: "The marker says the N.C. Mutual Building was listed in the National Register of Historic Places in 1995.",
          },
        ],
        ["listed", "built", "lodge"],
      ),
      takeaway([
        "The North Carolina Mutual Building was built in 1909 by the N.C. Mutual and Provident Association, a black-owned life insurance company with an office here until the mid-1930s.",
        "Built as a two-story commercial building, with a third story added after 1927, it was part of the Washington Street business district, an important part of Columbia's African-American community for most of the 20th century.",
        "This building had stores on the first floor and offices on the upper floors. First-floor tenants included barbers and beauticians, tailors and dressmakers, and restaurants. Second and third floor tenants included insurance agents, doctors, and lawyers. The Palmetto Grand Lodge owned the building from 1927 to the early 1940s. The N.C. Mutual Building was listed in the National Register of Historic Places in 1995.",
      ]),
    ],
  ),
  lesson(
    "40-154",
    "A hospital for Columbia's black community",
    "Good Samaritan-Waverly Hospital timeline",
    [cited("40-154", "Good Samaritan-Waverly Hospital", "front and back")],
    [
      {
        kind: "scene",
        id: "hospital",
        kicker: "1938",
        title: "Two older hospitals become one",
        partLabel: "the hospital",
        art: art(
          "m40154-hospital.jpg",
          "Illustration of a hospital and a porch of beds. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "merger",
            label: "1938",
            x: 32,
            y: 46,
            fact: "Good Samaritan-Waverly Hospital, created in 1938 by the merger of two older hospitals, served the black community of Columbia for 35 years.",
          },
          {
            id: "founders",
            label: "1910 and 1924",
            x: 74,
            y: 56,
            fact: "It merged Good Samaritan Hospital, founded in 1910 by Dr. William S. Rhodes and his wife Lillian, and Waverly Hospital, founded in 1924 by Dr. Norman A. Jenkins and his four brothers. The hospitals competed for the same doctors, nurses, and patients for several years.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1952",
        title: "The first in Columbia built for blacks",
        partLabel: "the hospital yard",
        art: art(
          "m40154-yard.jpg",
          "Illustration of a hospital yard and the hospital building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "funds",
            label: "The mid-1930s",
            x: 32,
            y: 50,
            fact: "By the mid-1930s the Duke Endowment and the Rosenwald Fund recommended a merger of the two hospitals to improve the quality of health care for blacks in Columbia and surrounding counties.",
          },
          {
            id: "opened",
            label: "1952 and 1972",
            x: 74,
            y: 40,
            fact: "This building, the first in Columbia built specifically as a hospital for blacks, opened in 1952. After the new integrated Richland Memorial Hospital opened in 1972, Good Samaritan-Waverly Hospital closed the next year.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1938",
        title: "Years it served the black community",
        partLabel: "35 years",
        value: 35,
        unit: "years",
        meant:
          "What this meant: the marker says Good Samaritan-Waverly Hospital, created in 1938 by the merger of two older hospitals, served the black community of Columbia for 35 years.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40154-hospital.jpg",
          "Illustration of a hospital and a porch of beds. Not a historical photograph.",
        ),
        nowArt: art(
          "m40154-today.jpg",
          "Illustration of a marker beside a hospital lawn. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a hospital, for the building the marker says opened in 1952 as the first in Columbia built specifically as a hospital for blacks. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a hospital lawn. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "samaritan",
            year: "1910",
            label: "Good Samaritan Hospital is founded.",
            why: "The marker says Good Samaritan Hospital was founded in 1910 by Dr. William S. Rhodes and his wife Lillian.",
          },
          {
            id: "waverly",
            year: "1924",
            label: "Waverly Hospital is founded.",
            why: "The marker says Waverly Hospital was founded in 1924 by Dr. Norman A. Jenkins and his four brothers.",
          },
          {
            id: "merged",
            year: "1938",
            label: "The two hospitals merge.",
            why: "The marker says Good Samaritan-Waverly Hospital was created in 1938 by the merger of two older hospitals.",
          },
          {
            id: "opened",
            year: "1952",
            label: "This hospital building opens.",
            why: "The marker says this building, the first in Columbia built specifically as a hospital for blacks, opened in 1952.",
          },
        ],
        ["opened", "samaritan", "merged", "waverly"],
      ),
      takeaway([
        "Good Samaritan-Waverly Hospital, created in 1938 by the merger of two older hospitals, served the black community of Columbia for 35 years.",
        "It merged Good Samaritan Hospital, founded in 1910 by Dr. William S. Rhodes and his wife Lillian, and Waverly Hospital, founded in 1924 by Dr. Norman A. Jenkins and his four brothers. The hospitals competed for the same doctors, nurses, and patients for several years.",
        "By the mid-1930s the Duke Endowment and the Rosenwald Fund recommended a merger of the two hospitals to improve the quality of health care for blacks in Columbia and surrounding counties. This building, the first in Columbia built specifically as a hospital for blacks, opened in 1952. After the new integrated Richland Memorial Hospital opened in 1972, Good Samaritan-Waverly Hospital closed the next year.",
      ]),
    ],
  ),
  lesson(
    "40-156",
    "A dry goods store in a cottage",
    "Alston House timeline",
    [
      cited("40-156", "Alston House", "front"),
      span(
        '"16 years" is 1888 minus 1872, the years the marker prints for the purchase of the house and the building of the cottage.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "ca. 1872",
        title: "A Greek Revival cottage and a dry goods store",
        partLabel: "the house",
        art: art(
          "m40156-house.jpg",
          "Illustration of a Greek Revival cottage and dry goods. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "ca. 1872",
            x: 32,
            y: 48,
            fact: "This Greek Revival cottage, built ca. 1872, was the residence and business of Caroline Alston, a black businesswoman who lived and ran a dry goods store here as early as 1873.",
          },
          {
            id: "purchased",
            label: "1888",
            x: 74,
            y: 42,
            fact: "She purchased the house in 1888, becoming one of the few black business owners in Columbia during the period.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1906",
        title: "Known to her customers, then sold",
        partLabel: "the yard",
        art: art(
          "m40156-yard.jpg",
          "Illustration of a cottage yard and a goods wagon. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "customers",
            label: "1906",
            x: 32,
            y: 54,
            fact: 'Alston, known for the "esteem and confidence" of her black and white customers, sold the house in 1906.',
          },
          {
            id: "listed",
            label: "1979",
            x: 74,
            y: 40,
            fact: "It was listed in the National Register of Historic Places in 1979.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "ca. 1872-1888",
        title: "Years from the cottage to the purchase",
        partLabel: "16 years",
        value: 16,
        unit: "years",
        meant:
          "What this meant: 1888 comes 16 years after 1872. That is the stretch from the year the marker prints for the building of this Greek Revival cottage, ca. 1872, to the year Caroline Alston purchased the house.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40156-house.jpg",
          "Illustration of a Greek Revival cottage and dry goods. Not a historical photograph.",
        ),
        nowArt: art(
          "m40156-today.jpg",
          "Illustration of a marker on a residential lane. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Greek Revival cottage, for the house the marker says was built ca. 1872. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a residential lane. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "ca. 1872",
            label: "The Greek Revival cottage is built.",
            why: "The marker says this Greek Revival cottage was built ca. 1872.",
          },
          {
            id: "store",
            year: "1873",
            label: "A dry goods store is run here.",
            why: "The marker says Caroline Alston, a black businesswoman, lived and ran a dry goods store here as early as 1873.",
          },
          {
            id: "purchased",
            year: "1888",
            label: "She purchases the house.",
            why: "The marker says she purchased the house in 1888, becoming one of the few black business owners in Columbia during the period.",
          },
          {
            id: "sold",
            year: "1906",
            label: "She sells the house.",
            why: 'The marker says Alston, known for the "esteem and confidence" of her black and white customers, sold the house in 1906.',
          },
        ],
        ["sold", "built", "purchased", "store"],
      ),
      takeaway([
        "This Greek Revival cottage, built ca. 1872, was the residence and business of Caroline Alston, a black businesswoman who lived and ran a dry goods store here as early as 1873.",
        "She purchased the house in 1888, becoming one of the few black business owners in Columbia during the period.",
        'Alston, known for the "esteem and confidence" of her black and white customers, sold the house in 1906. It was listed in the National Register of Historic Places in 1979.',
      ]),
    ],
  ),
  lesson(
    "40-157",
    "Columbia's first residential suburb",
    "Waverly timeline",
    [
      cited("40-157", "Waverly", "front and back"),
      span(
        '"58 years" is 1913 minus 1855, the years the marker prints for the annexation of Waverly and the purchase of the parcel by Robert Latta.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "houses",
        kicker: "1855",
        title: "A 60-acre parcel becomes a suburb",
        partLabel: "the houses",
        art: art(
          "m40157-houses.jpg",
          "Illustration of houses and an open parcel. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "parcel",
            label: "1855",
            x: 32,
            y: 46,
            fact: "Waverly has been one of Columbia's most significant black communities since the 1930s. The city's first residential suburb, it grew out of a 60-acre parcel bought by Robert Latta in 1855.",
          },
          {
            id: "lots",
            label: "1863",
            x: 74,
            y: 56,
            fact: "Latta's widow and children sold the first lots here in 1863. Shortly after the Civil War banker and textile manufacturer Lysander D. Childs bought several blocks here for development. Waverly grew for the next 50 years as railroad and streetcar lines encouraged growth.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1913",
        title: "Annexed, then almost entirely black",
        partLabel: "the street",
        art: art(
          "m40157-street.jpg",
          "Illustration of a streetcar and a railroad on a residential street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "annexed",
            label: "1913",
            x: 32,
            y: 48,
            fact: "The City of Columbia annexed Waverly in 1913. Two black colleges, Benedict College and Allen University, drew many African Americans to this area as whites moved to other city suburbs.",
          },
          {
            id: "district",
            label: "The 1930s and 1989",
            x: 74,
            y: 40,
            fact: "By the 1930s this community was almost entirely black. The Waverly Historic District, bounded by Gervais, Harden, and Taylor Streets and Millwood Avenue, was listed in the National Register of Historic Places in 1989.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1855-1913",
        title: "Years from the parcel to annexation",
        partLabel: "58 years",
        value: 58,
        unit: "years",
        meant:
          "What this meant: 1913 comes 58 years after 1855. That is the stretch from the year Robert Latta bought the 60-acre parcel to the year the City of Columbia annexed Waverly.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m40157-houses.jpg",
          "Illustration of houses and an open parcel. Not a historical photograph.",
        ),
        nowArt: art(
          "m40157-today.jpg",
          "Illustration of a marker on a residential street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of houses, for the residential suburb the marker says grew out of a 60-acre parcel bought in 1855. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a residential street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "bought",
            year: "1855",
            label: "Robert Latta buys the 60-acre parcel.",
            why: "The marker says Waverly grew out of a 60-acre parcel bought by Robert Latta in 1855.",
          },
          {
            id: "lots",
            year: "1863",
            label: "The first lots are sold.",
            why: "The marker says Latta's widow and children sold the first lots here in 1863.",
          },
          {
            id: "annexed",
            year: "1913",
            label: "Columbia annexes Waverly.",
            why: "The marker says the City of Columbia annexed Waverly in 1913.",
          },
          {
            id: "listed",
            year: "1989",
            label: "The historic district is listed.",
            why: "The marker says the Waverly Historic District, bounded by Gervais, Harden, and Taylor Streets and Millwood Avenue, was listed in the National Register of Historic Places in 1989.",
          },
        ],
        ["annexed", "bought", "listed", "lots"],
      ),
      takeaway([
        "Waverly has been one of Columbia's most significant black communities since the 1930s. The city's first residential suburb, it grew out of a 60-acre parcel bought by Robert Latta in 1855. Latta's widow and children sold the first lots here in 1863.",
        "Shortly after the Civil War banker and textile manufacturer Lysander D. Childs bought several blocks here for development. Waverly grew for the next 50 years as railroad and streetcar lines encouraged growth. The City of Columbia annexed Waverly in 1913.",
        "Two black colleges, Benedict College and Allen University, drew many African Americans to this area as whites moved to other city suburbs. By the 1930s this community was almost entirely black. The Waverly Historic District, bounded by Gervais, Harden, and Taylor Streets and Millwood Avenue, was listed in the National Register of Historic Places in 1989.",
      ]),
    ],
  ),
];
