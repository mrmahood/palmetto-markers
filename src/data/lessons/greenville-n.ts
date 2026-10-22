import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Greenville sites. Facts are from that marker only.
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

export const greenvilleLessonsN: MarkerLesson[] = [
  lesson(
    "23-61",
    "The original 800 seat auditorium",
    "Fountain Inn High School timeline",
    [cited("23-61", "Fountain Inn High School", "front and back")],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1939",
        title: "Built as the town high school",
        partLabel: "the high school",
        art: art(
          "m2361-school.jpg",
          "Illustration of a Classical Moderne school building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1939",
            x: 32,
            y: 48,
            fact: "Fountain Inn High School was built in 1939 and was the town high school until 1957. Construction of the school was funded in part by a grant from the Public Works Administration (PWA). The firm of Beacham and LeGrand of Greenville designed the building, which exemplifies the Classical Moderne style. Also referred to as PWA Moderne, this style blended Neoclassical and Art Deco forms, and was intended to celebrate “modern” life while also conveying a sense of permanency and stability to the community.",
          },
          {
            id: "elementary",
            label: "Until 1997",
            x: 74,
            y: 36,
            fact: "It remained in use as Fountain Inn Elementary School until 1997.",
          },
        ],
      },
      {
        kind: "scene",
        id: "hall",
        kicker: "1999",
        title: "The auditorium becomes a performing arts center",
        partLabel: "the auditorium",
        art: art(
          "m2361-hall.jpg",
          "Illustration of an empty school auditorium. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "arts",
            label: "800 seats",
            x: 32,
            y: 58,
            fact: "The City of Fountain Inn purchased the property in 1999 and at that time the original 800 seat auditorium became the Fountain Inn Center for the Performing Arts.",
          },
          {
            id: "listed",
            label: "2009",
            x: 74,
            y: 34,
            fact: "The school was listed in the National Register of Historic Places in 2009 for its architectural significance.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1999",
        title: "Seats in the original auditorium",
        partLabel: "800 seats",
        value: 800,
        unit: "seats",
        meant:
          "What this meant: the marker says the original 800 seat auditorium became the Fountain Inn Center for the Performing Arts when the City of Fountain Inn purchased the property in 1999.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2361-school.jpg",
          "Illustration of a Classical Moderne school building. Not a historical photograph.",
        ),
        nowArt: art(
          "m2361-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a Classical Moderne school, for the school the marker says was built in 1939. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1939",
            label: "Fountain Inn High School is built.",
            why: "The marker says Fountain Inn High School was built in 1939. Construction was funded in part by a grant from the Public Works Administration (PWA). The firm of Beacham and LeGrand of Greenville designed the building, which exemplifies the Classical Moderne style.",
          },
          {
            id: "town",
            year: "1957",
            label: "It is the town high school until this year.",
            why: "The marker says it was the town high school until 1957.",
          },
          {
            id: "elementary",
            year: "1997",
            label: "It remains in use as Fountain Inn Elementary School until this year.",
            why: "The marker says it remained in use as Fountain Inn Elementary School until 1997.",
          },
          {
            id: "arts",
            year: "1999",
            label: "The city purchases the property, and the auditorium becomes a performing arts center.",
            why: "The marker says the City of Fountain Inn purchased the property in 1999 and at that time the original 800 seat auditorium became the Fountain Inn Center for the Performing Arts.",
          },
          {
            id: "listed",
            year: "2009",
            label: "The school is listed in the National Register of Historic Places.",
            why: "The marker says the school was listed in the National Register of Historic Places in 2009 for its architectural significance.",
          },
        ],
        ["listed", "town", "arts", "built", "elementary"],
      ),
      takeaway([
        "Fountain Inn High School was built in 1939 and was the town high school until 1957. It remained in use as Fountain Inn Elementary School until 1997.",
        "The City of Fountain Inn purchased the property in 1999 and at that time the original 800 seat auditorium became the Fountain Inn Center for the Performing Arts. The school was listed in the National Register of Historic Places in 2009 for its architectural significance.",
        "Construction of the school was funded in part by a grant from the Public Works Administration (PWA). The firm of Beacham and LeGrand of Greenville designed the building, which exemplifies the Classical Moderne style. Also referred to as PWA Moderne, this style blended Neoclassical and Art Deco forms, and was intended to celebrate “modern” life while also conveying a sense of permanency and stability to the community.",
      ]),
    ],
  ),
  lesson(
    "23-62",
    "Earlier burials transferred, then expanded in 1924",
    "Fountain Inn Cemetery timeline",
    [
      cited("23-62", "Fountain Inn Cemetery", "front and back"),
      span(
        '"34 years" is 1924 minus 1890, the years the marker prints for the adjoining parcel D.R. Martin sold and for the cemetery established c. 1890.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "grounds",
        kicker: "c. 1890",
        title: "A new cemetery on land deeded to the town",
        partLabel: "the cemetery",
        art: art(
          "m2362-grounds.jpg",
          "Illustration of a cemetery path and blank monuments. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "c. 1890",
            x: 32,
            y: 52,
            fact: "Fountain Inn Cemetery was established c. 1890. Most of the land was deeded to the town by Lafayette Martin, and his son, D.R. Martin, sold an adjoining parcel in 1924 to expand the cemetery.",
          },
          {
            id: "earlier",
            label: "Earlier graveyard",
            x: 74,
            y: 34,
            fact: "An earlier graveyard had been located adjacent to First Baptist Church, but as the town expanded the decision was made to establish a new cemetery at this spot and transfer the previous burials to this location.",
          },
        ],
      },
      {
        kind: "scene",
        id: "stones",
        kicker: "Mid-20th century",
        title: "Monuments, obelisks, and granite headstones",
        partLabel: "the grave markers",
        art: art(
          "m2362-stones.jpg",
          "Illustration of obelisks and plain granite headstones. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "granite",
            label: "Grave markers",
            x: 32,
            y: 46,
            fact: "The various grave markers found here illustrate how burial practices evolved through time. The monuments and obelisks offer witness to Victorian sentimentality while the more uniform granite headstones that became popular by the mid-20th century show that the cemetery has remained in use over multiple generations.",
          },
          {
            id: "resting",
            label: "Many residents",
            x: 74,
            y: 38,
            fact: "Through those years it has served as the final resting place for many Fountain Inn residents.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "c. 1890-1924",
        title: "Years from the cemetery to the expansion",
        partLabel: "34 years",
        value: 34,
        unit: "years",
        meant:
          "What this meant: 1924 comes 34 years after 1890. That is the stretch from the year the marker prints for the cemetery, c. 1890, to the year D.R. Martin sold an adjoining parcel to expand it.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2362-grounds.jpg",
          "Illustration of a cemetery path and blank monuments. Not a historical photograph.",
        ),
        nowArt: art(
          "m2362-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cemetery, for the cemetery the marker says was established c. 1890. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "earlier",
            year: "Before c. 1890",
            label: "An earlier graveyard stands adjacent to First Baptist Church.",
            why: "The marker says an earlier graveyard had been located adjacent to First Baptist Church, and that the previous burials were transferred when a new cemetery was established at this spot.",
          },
          {
            id: "established",
            year: "c. 1890",
            label: "The cemetery is established, on land mostly deeded by Lafayette Martin.",
            why: "The marker says Fountain Inn Cemetery was established c. 1890 and that most of the land was deeded to the town by Lafayette Martin.",
          },
          {
            id: "parcel",
            year: "1924",
            label: "D.R. Martin sells an adjoining parcel to expand the cemetery.",
            why: "The marker says his son, D.R. Martin, sold an adjoining parcel in 1924 to expand the cemetery.",
          },
          {
            id: "granite",
            year: "Mid-20th century",
            label: "Uniform granite headstones have become popular.",
            why: "The marker says the more uniform granite headstones that became popular by the mid-20th century show that the cemetery has remained in use over multiple generations.",
          },
        ],
        ["granite", "established", "parcel", "earlier"],
      ),
      takeaway([
        "Fountain Inn Cemetery was established c. 1890. Most of the land was deeded to the town by Lafayette Martin, and his son, D.R. Martin, sold an adjoining parcel in 1924 to expand the cemetery.",
        "An earlier graveyard had been located adjacent to First Baptist Church, but as the town expanded the decision was made to establish a new cemetery at this spot and transfer the previous burials to this location.",
        "The various grave markers found here illustrate how burial practices evolved through time. The monuments and obelisks offer witness to Victorian sentimentality while the more uniform granite headstones that became popular by the mid-20th century show that the cemetery has remained in use over multiple generations. Through those years it has served as the final resting place for many Fountain Inn residents.",
      ]),
    ],
  ),
  lesson(
    "23-63",
    "Opened in 1928 on land donated by Dunean Mill",
    "Dunean School timeline",
    [
      cited("23-63", "Dunean School", "front"),
      span(
        '"52 years" is 1980 minus 1928, the years the marker prints for the closing of Dunean Elementary School and the opening of Dunean School.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "school",
        kicker: "1928",
        title: "Opened with J.H. Anderson as principal",
        partLabel: "the opening",
        art: art(
          "m2363-school.jpg",
          "Illustration of a school at a street corner. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1928",
            x: 32,
            y: 50,
            fact: "Dunean School, later Dunean Elementary, opened in 1928 with J.H. Anderson as its first principal.",
          },
          {
            id: "land",
            label: "Donated land",
            x: 74,
            y: 36,
            fact: "Located at the corner of Smith and Blake Streets, on land donated by Dunean Mill, the school served students from the surrounding Dunean Mill village.",
          },
        ],
      },
      {
        kind: "scene",
        id: "village",
        kicker: "Before 1928",
        title: "A consolidated school, then a closing",
        partLabel: "before and after",
        art: art(
          "m2363-village.jpg",
          "Illustration of a mill village and a plain school. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "mills",
            label: "Before it opened",
            x: 32,
            y: 54,
            fact: "Before Dunean School opened students from both the Mills and Dunean Mill villages had attended the consolidated Mills-Dunean School.",
          },
          {
            id: "closed",
            label: "1980",
            x: 74,
            y: 38,
            fact: "Dunean Elementary School closed in 1980 and was torn down shortly thereafter.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1928-1980",
        title: "Years from the opening to the closing",
        partLabel: "52 years",
        value: 52,
        unit: "years",
        meant:
          "What this meant: 1980 comes 52 years after 1928. That is the stretch from the year the marker says Dunean School opened to the year it says Dunean Elementary School closed.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2363-school.jpg",
          "Illustration of a school at a street corner. Not a historical photograph.",
        ),
        nowArt: art(
          "m2363-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a school at a street corner, for the school the marker says opened in 1928 at the corner of Smith and Blake Streets. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "mills",
            year: "Before 1928",
            label: "Students from both mill villages attend the consolidated Mills-Dunean School.",
            why: "The marker says that before Dunean School opened, students from both the Mills and Dunean Mill villages had attended the consolidated Mills-Dunean School.",
          },
          {
            id: "opened",
            year: "1928",
            label: "Dunean School opens with J.H. Anderson as its first principal.",
            why: "The marker says Dunean School, later Dunean Elementary, opened in 1928 with J.H. Anderson as its first principal, at the corner of Smith and Blake Streets, on land donated by Dunean Mill.",
          },
          {
            id: "closed",
            year: "1980",
            label: "Dunean Elementary School closes and is torn down shortly thereafter.",
            why: "The marker says Dunean Elementary School closed in 1980 and was torn down shortly thereafter.",
          },
        ],
        ["closed", "mills", "opened"],
      ),
      takeaway([
        "Dunean School, later Dunean Elementary, opened in 1928 with J.H. Anderson as its first principal.",
        "Located at the corner of Smith and Blake Streets, on land donated by Dunean Mill, the school served students from the surrounding Dunean Mill village. Before Dunean School opened students from both the Mills and Dunean Mill villages had attended the consolidated Mills-Dunean School.",
        "Dunean Elementary School closed in 1980 and was torn down shortly thereafter.",
      ]),
    ],
  ),
  lesson(
    "23-64",
    "The largest finishing plant in the South",
    "Union Bleachery timeline",
    [cited("23-64", "Union Bleachery", "front and back")],
    [
      {
        kind: "scene",
        id: "plant",
        kicker: "1903",
        title: "A finishing plant licensed for the Sandfordizing Process",
        partLabel: "the finishing plant",
        art: art(
          "m2364-plant.jpg",
          "Illustration of a brick textile finishing plant. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "began",
            label: "1903",
            x: 32,
            y: 48,
            fact: "The Union Bleaching and Finishing Company began operations in 1903 with an initial capacity of 500,000 yards of cloth per week. It was the second custom finishing company in S.C. and was one of four original plants worldwide licensed to use the Sandfordizing Process, which reduced shrinkage of cotton cloth.",
          },
          {
            id: "rechartered",
            label: "1922",
            x: 74,
            y: 34,
            fact: "In 1922 it was rechartered as Union Bleachery and by that time had a capacity of 2 million yards per week, making it the largest finishing plant in the South.",
          },
        ],
      },
      {
        kind: "scene",
        id: "village",
        kicker: "1906",
        title: "A mill village, a gymnasium, and a golf course",
        partLabel: "the mill village",
        art: art(
          "m2364-village.jpg",
          "Illustration of mill houses, a community building, and a golf green. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "president",
            label: "1906",
            x: 32,
            y: 52,
            fact: "John White Arrington, who became company president in 1906, was key to the growth of both the plant and the surrounding mill village. The first homes were built along Arrington and Stephenson Avenues and in 1923 mill owners added a community building with a gymnasium.",
          },
          {
            id: "burned",
            label: "2003",
            x: 74,
            y: 36,
            fact: "Employees played in the Textile Baseball League and the mill also maintained a nine-hole golf course. The mill, which was then operating as U.S. Finishing, burned in 2003.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1903",
        title: "Yards of cloth per week at the start",
        partLabel: "500,000 yards",
        value: 500000,
        unit: "yards a week",
        meant:
          "What this meant: the marker says the Union Bleaching and Finishing Company began operations in 1903 with an initial capacity of 500,000 yards of cloth per week. By the time it was rechartered as Union Bleachery in 1922, it had a capacity of 2 million yards per week.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m2364-plant.jpg",
          "Illustration of a brick textile finishing plant. Not a historical photograph.",
        ),
        nowArt: art(
          "m2364-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a brick textile finishing plant, for the plant the marker says began operations in 1903. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "began",
            year: "1903",
            label: "The Union Bleaching and Finishing Company begins operations.",
            why: "The marker says the Union Bleaching and Finishing Company began operations in 1903 with an initial capacity of 500,000 yards of cloth per week. It was the second custom finishing company in S.C. and one of four original plants worldwide licensed to use the Sandfordizing Process.",
          },
          {
            id: "president",
            year: "1906",
            label: "John White Arrington becomes company president.",
            why: "The marker says John White Arrington, who became company president in 1906, was key to the growth of both the plant and the surrounding mill village.",
          },
          {
            id: "rechartered",
            year: "1922",
            label: "It is rechartered as Union Bleachery.",
            why: "The marker says that in 1922 it was rechartered as Union Bleachery and by that time had a capacity of 2 million yards per week, making it the largest finishing plant in the South.",
          },
          {
            id: "gym",
            year: "1923",
            label: "Mill owners add a community building with a gymnasium.",
            why: "The marker says the first homes were built along Arrington and Stephenson Avenues and in 1923 mill owners added a community building with a gymnasium.",
          },
          {
            id: "burned",
            year: "2003",
            label: "The mill, then operating as U.S. Finishing, burns.",
            why: "The marker says the mill, which was then operating as U.S. Finishing, burned in 2003. Employees played in the Textile Baseball League and the mill also maintained a nine-hole golf course.",
          },
        ],
        ["burned", "began", "gym", "president", "rechartered"],
      ),
      takeaway([
        "The Union Bleaching and Finishing Company began operations in 1903 with an initial capacity of 500,000 yards of cloth per week. It was the second custom finishing company in S.C. and was one of four original plants worldwide licensed to use the Sandfordizing Process, which reduced shrinkage of cotton cloth.",
        "In 1922 it was rechartered as Union Bleachery and by that time had a capacity of 2 million yards per week, making it the largest finishing plant in the South. John White Arrington, who became company president in 1906, was key to the growth of both the plant and the surrounding mill village.",
        "The first homes were built along Arrington and Stephenson Avenues and in 1923 mill owners added a community building with a gymnasium. Employees played in the Textile Baseball League and the mill also maintained a nine-hole golf course. The mill, which was then operating as U.S. Finishing, burned in 2003.",
      ]),
    ],
  ),
];
