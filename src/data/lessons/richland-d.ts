import { lessonArt as art } from "./plate";
import type {
  LessonEvent,
  LessonPanel,
  LessonSource,
  MarkerLesson,
} from "./types";

/** Columbia houses, a school, a church, and the fairgrounds. Facts are from that marker only.
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

export const richlandLessonsD: MarkerLesson[] = [
  lesson(
    "40-07",
    "From Ainsley Hall to Chicora",
    "Hampton-Preston House timeline",
    [
      cited("40-07", "Hampton-Preston House", "front"),
      span("\"15 years\" is 1930 minus 1915, the last and first years the marker gives for Chicora College for Women, printed as 1915-30."),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "About 1818",
        title: "Built, purchased, inherited",
        partLabel: "the house",
        art: art("m4007-house.jpg", "Illustration of an early columned house. Not a historical photograph."),
        hotspots: [
          {
            id: "hall",
            label: "About 1818",
            x: 32,
            y: 52,
            fact: "Built about 1818 by Ainsley Hall.",
          },
          {
            id: "hampton",
            label: "1823 and 1863",
            x: 72,
            y: 48,
            fact: "Purchased 1823 by Wade Hampton, I. Inherited by his daughter, Mrs. John S. Preston, 1863.",
          },
        ],
      },
      {
        kind: "scene",
        id: "garden",
        kicker: "The gardens",
        title: "Sculpture, then other uses",
        partLabel: "the garden",
        art: art("m4007-garden.jpg", "Illustration of a formal garden and a sculpture. Not a historical photograph."),
        hotspots: [
          {
            id: "powers",
            label: "Hiram Powers",
            x: 32,
            y: 52,
            fact: "The gardens, developed during Hampton-Preston ownership, were adorned with work of Hiram Powers, sculptor.",
          },
          {
            id: "later",
            label: "Later uses",
            x: 76,
            y: 46,
            fact: "Headquarters of Union Gen. J. A. Logan, 1865; residence of Gov. F. J. Moses 1872-74; Ursuline Convent 1887-90; College for Women 1890-1915; Chicora College for Women 1915-30.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1915-30",
        title: "Years as Chicora College",
        partLabel: "15 years",
        value: 15,
        unit: "years",
        meant: "What this meant: 1930 comes 15 years after 1915. That is the stretch the marker gives for Chicora College for Women, printed as 1915-30.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4007-house.jpg", "Illustration of the early house. Not a historical photograph."),
        nowArt: art("m4007-today.jpg", "Illustration of a house and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of the house the marker says was built about 1818. Not a historical photograph.",
        nowCaption: "Illustration of the house and a marker. Not a photograph of the site today.",
      },
      order(
        [
          { id: "built", year: "About 1818", label: "Ainsley Hall builds the house.", why: "The marker says it was built about 1818 by Ainsley Hall." },
          { id: "buy", year: "1823", label: "Wade Hampton, I, purchases the house.", why: "The marker dates that purchase to 1823." },
          { id: "inherit", year: "1863", label: "Mrs. John S. Preston inherits it.", why: "The marker says his daughter, Mrs. John S. Preston, inherited it in 1863." },
          { id: "logan", year: "1865", label: "Union Gen. J. A. Logan uses it as headquarters.", why: "The marker dates that headquarters to 1865." },
        ],
        ["logan", "built", "inherit", "buy"],
      ),
      takeaway([
        "Built about 1818 by Ainsley Hall, the house was purchased in 1823 by Wade Hampton, I, and inherited in 1863 by his daughter, Mrs. John S. Preston.",
        "In 1865 it was headquarters of Union Gen. J. A. Logan. It was the residence of Gov. F. J. Moses 1872-74, the Ursuline Convent 1887-90, the College for Women 1890-1915, and Chicora College for Women 1915-30.",
        "The gardens, developed during Hampton-Preston ownership, were adorned with work of Hiram Powers, sculptor.",
      ]),
    ],
  ),
  lesson(
    "40-08",
    "A private academy on given land",
    "Columbia Male Academy timeline",
    [
      cited("40-08", "Site of Columbia Male Academy", "front"),
      span("\"15 years\" is 1880 minus 1865, the last and first years the marker gives for Hugh S. Thompson as principal of the male academy."),
    ],
    [
      {
        kind: "scene",
        id: "academy",
        kicker: "1827",
        title: "Trustees, then a site here",
        partLabel: "the academy",
        art: art("m4008-academy.jpg", "Illustration of a small early schoolhouse. Not a historical photograph."),
        hotspots: [
          {
            id: "here",
            label: "1827",
            x: 32,
            y: 52,
            fact: "School located here 1827.",
          },
          {
            id: "trustees",
            label: "John Taylor",
            x: 74,
            y: 48,
            fact: "The land was given by Gov. John Taylor. Trustees appointed by legislature 1792 were incorporated 1795 and served as trustees for male and female academies.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "Until 1883",
        title: "Private academy, then public",
        partLabel: "the schoolyard",
        art: art("m4008-yard.jpg", "Illustration of a schoolyard. Not a historical photograph."),
        hotspots: [
          {
            id: "private",
            label: "Until 1883",
            x: 30,
            y: 58,
            fact: "Though publicly endowed, the school was conducted as a private academy until 1883 when it was merged with public school system.",
          },
          {
            id: "thompson",
            label: "Hugh S. Thompson",
            x: 74,
            y: 48,
            fact: "Hugh S. Thompson, Governor of S. C. 1882-86, was principal of male academy 1865-80.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1865-80",
        title: "Years Thompson was principal",
        partLabel: "15 years",
        value: 15,
        unit: "years",
        meant: "What this meant: 1880 comes 15 years after 1865. That is the stretch the marker gives for Hugh S. Thompson as principal of the male academy. His years as Governor of S. C. stay 1882-86.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4008-academy.jpg", "Illustration of the early schoolhouse. Not a historical photograph."),
        nowArt: art("m4008-today.jpg", "Illustration of a marker at a street corner. Not a photograph of the site today."),
        thenCaption: "Illustration of the school the marker says was located here in 1827. Not a historical photograph.",
        nowCaption: "Illustration of a marker at a street corner. Not a photograph of the site today.",
      },
      order(
        [
          { id: "appoint", year: "1792", label: "The legislature appoints trustees.", why: "The marker dates that appointment to 1792." },
          { id: "inc", year: "1795", label: "The trustees are incorporated.", why: "The marker dates the incorporation to 1795. They served as trustees for the male and female academies." },
          { id: "locate", year: "1827", label: "The school is located here.", why: "The marker says the school was located here in 1827 on land given by Gov. John Taylor." },
          { id: "merge", year: "1883", label: "The academy merges with the public school system.", why: "The marker says it was a private academy until 1883, when it was merged with the public school system. It had been publicly endowed." },
        ],
        ["merge", "appoint", "locate", "inc"],
      ),
      takeaway([
        "Trustees appointed by the legislature in 1792 were incorporated in 1795 and served for the male and female academies.",
        "The school was located here in 1827 on land given by Gov. John Taylor. Though publicly endowed, it was a private academy until 1883, when it merged with the public school system.",
        "Hugh S. Thompson, Governor of S. C. 1882-86, was principal of the male academy 1865-80.",
      ]),
    ],
  ),
  lesson(
    "40-09",
    "Burned in 1865, rebuilt in 1870",
    "Ebenezer Lutheran timeline",
    [
      cited("40-09", "Ebenezer Lutheran Church", "front"),
      span("\"5 years\" is 1870 minus 1865, the year the marker says the church was rebuilt and the year Union troops burned it."),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1830",
        title: "First Lutheran congregation",
        partLabel: "the 1830 church",
        art: art("m4009-church.jpg", "Illustration of an early church. Not a historical photograph."),
        hotspots: [
          {
            id: "dedicated",
            label: "1830",
            x: 32,
            y: 52,
            fact: "Church dedicated in this square in 1830.",
          },
          {
            id: "first",
            label: "The congregation",
            x: 64,
            y: 60,
            fact: "First Lutheran congregation in Columbia.",
          },
        ],
      },
      {
        kind: "scene",
        id: "ruins",
        kicker: "1865",
        title: "Burned, then rebuilt",
        partLabel: "after the fire",
        art: art("m4009-burn.jpg", "Illustration of a church in ruins beside a rebuilt church. Not a historical photograph."),
        hotspots: [
          {
            id: "fire",
            label: "1865",
            x: 32,
            y: 54,
            fact: "The church was burned by Union troops in 1865.",
          },
          {
            id: "rebuilt",
            label: "1870 and 1931",
            x: 76,
            y: 46,
            fact: "It was rebuilt 1870, partly through aid of northern Lutherans, and used for Sunday School after present church was completed in 1931.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1865 to 1870",
        title: "Years until the church was rebuilt",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant: "What this meant: 1870 comes 5 years after 1865. That is the stretch from the year Union troops burned the church to the year it was rebuilt.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4009-church.jpg", "Illustration of the 1830 church. Not a historical photograph."),
        nowArt: art("m4009-today.jpg", "Illustration of a later church and a marker. Not a photograph of the site today."),
        thenCaption: "Illustration of the church the marker says was dedicated in this square in 1830. Not a historical photograph.",
        nowCaption: "Illustration of a later church and a marker. Not a photograph of the site today.",
      },
      order(
        [
          { id: "dedicate", year: "1830", label: "The church is dedicated in this square.", why: "The marker dates the dedication to 1830. It was the first Lutheran congregation in Columbia." },
          { id: "burned", year: "1865", label: "Union troops burn the church.", why: "The marker says Union troops burned it in 1865." },
          { id: "rebuild", year: "1870", label: "The church is rebuilt.", why: "The marker dates the rebuilding to 1870, partly through aid of northern Lutherans." },
          { id: "sunday", year: "1931", label: "The present church is completed.", why: "The marker says the rebuilt church was used for Sunday School after the present church was completed in 1931." },
        ],
        ["sunday", "dedicate", "rebuild", "burned"],
      ),
      takeaway([
        "This was the first Lutheran congregation in Columbia. The church was dedicated in this square in 1830.",
        "Union troops burned it in 1865. It was rebuilt in 1870, partly through aid of northern Lutherans.",
        "After the present church was completed in 1931, the rebuilt church was used for Sunday School.",
      ]),
    ],
  ),
  lesson(
    "40-10",
    "Fairs, barracks, then fairs",
    "State Fairgrounds timeline",
    [
      cited("40-10", "State Fairgrounds", "front"),
      span("\"34 years\" is 1903 minus 1869, the last and first years the marker gives for the later run of state fairs."),
    ],
    [
      {
        kind: "scene",
        id: "fair",
        kicker: "1856-61",
        title: "State fairs on this tract",
        partLabel: "the fairgrounds",
        art: art("m4010-fair.jpg", "Illustration of fairgrounds and halls. Not a historical photograph."),
        hotspots: [
          {
            id: "early",
            label: "1856-61",
            x: 32,
            y: 52,
            fact: "This square is part of the tract where state fairs were held 1856-61.",
          },
          {
            id: "later",
            label: "1869-1903",
            x: 66,
            y: 60,
            fact: "State fairs were held 1869-1903.",
          },
        ],
      },
      {
        kind: "scene",
        id: "barracks",
        kicker: "1861-65",
        title: "Barracks, hospital, and a bureau",
        partLabel: "the wartime buildings",
        art: art("m4010-barracks.jpg", "Illustration of barracks and a quiet office. Not a historical photograph."),
        hotspots: [
          {
            id: "used",
            label: "1861-65",
            x: 32,
            y: 52,
            fact: "The buildings were used 1861-65 for Confederate barracks and hospital, and were burned by Union troops in 1865.",
          },
          {
            id: "bureau",
            label: "LeConte and Woodrow",
            x: 74,
            y: 50,
            fact: "They were used as well for the nitre and mining bureau in charge of Joseph LeConte and James Woodrow.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1869-1903",
        title: "Years of the later fairs",
        partLabel: "34 years",
        value: 34,
        unit: "years",
        meant: "What this meant: 1903 comes 34 years after 1869. That is the stretch the marker gives for the later state fairs on this tract, printed as 1869-1903. The earlier fairs stay 1856-61.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art("m4010-fair.jpg", "Illustration of the fairgrounds. Not a historical photograph."),
        nowArt: art("m4010-today.jpg", "Illustration of a marker by a school street. Not a photograph of the site today."),
        thenCaption: "Illustration of the fairgrounds the marker places on this tract from 1856 to 1861. Not a historical photograph.",
        nowCaption: "Illustration of a marker by a street. Not a photograph of the site today.",
      },
      order(
        [
          { id: "fairs", year: "1856", label: "State fairs are held on this tract.", why: "The marker says state fairs were held here from 1856 to 1861. This square is part of that tract." },
          { id: "war", year: "1861", label: "The buildings become barracks, a hospital, and a bureau.", why: "The marker says the buildings were used from 1861 to 1865 for Confederate barracks and hospital, and for the nitre and mining bureau in charge of Joseph LeConte and James Woodrow." },
          { id: "burned", year: "1865", label: "Union troops burn the buildings.", why: "The marker says Union troops burned the buildings in 1865." },
          { id: "again", year: "1869", label: "State fairs are held 1869-1903.", why: "The marker says state fairs were held 1869-1903, after the fairs of 1856-61." },
        ],
        ["again", "fairs", "burned", "war"],
      ),
      takeaway([
        "This square is part of the tract where state fairs were held 1856-61 and 1869-1903.",
        "The buildings were used 1861-65 for Confederate barracks and hospital, and for the nitre and mining bureau in charge of Joseph LeConte and James Woodrow.",
        "Union troops burned the buildings in 1865.",
      ]),
    ],
  ),
];
