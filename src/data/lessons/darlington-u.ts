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

export const darlingtonLessonsU: MarkerLesson[] = [
  lesson(
    "16-85",
    "A multi-purpose athletic field for African Americans",
    "Primus Park timeline",
    [cited("16-85", "Primus Park", "front and back")],
    [
      {
        kind: "scene",
        id: "field",
        kicker: "1962",
        title: "Formally dedicated in 1962",
        partLabel: "the athletic field",
        art: art(
          "m1685-field.jpg",
          "Illustration of an empty athletic field and a dirt diamond. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "dedicated",
            label: "1962",
            x: 32,
            y: 48,
            fact: "Primus Park was formally dedicated in 1962 as a multi-purpose athletic field for African Americans.",
          },
          {
            id: "primus",
            label: "Butler High School",
            x: 74,
            y: 40,
            fact: "Efforts to construct the park were led by its namesake, Rev. William D. Primus (1888-1965). It was built primarily to serve nearby Butler High School, where Primus had been a teacher and baseball coach.",
          },
        ],
      },
      {
        kind: "scene",
        id: "storm",
        kicker: "1989",
        title: "Destroyed by Hurricane Hugo",
        partLabel: "the park after the storm",
        art: art(
          "m1685-storm.jpg",
          "Illustration of a storm-fallen pine across an empty ballfield. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "teams",
            label: "Butler Tigers",
            x: 32,
            y: 52,
            fact: "Primus Park was an important site of public recreation for Hartsville’s Black community. In addition to serving as home field for the Butler Tigers, it also hosted the Coastal Athletic League’s Hartsville Blues baseball team and the Hartsville Steelers football team.",
          },
          {
            id: "hugo",
            label: "1989",
            x: 74,
            y: 36,
            fact: "The park continued to be used after Butler closed in 1982. It was destroyed by Hurricane Hugo in 1989.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Later",
        title: "Dollars raised for the field",
        partLabel: "more than 10,000 dollars",
        value: 10000,
        unit: "dollars",
        meant:
          "What this meant: the marker says the Butler Booster Club later raised more than $10,000 to add facilities to the field.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1685-field.jpg",
          "Illustration of an empty athletic field and a dirt diamond. Not a historical photograph.",
        ),
        nowArt: art(
          "m1685-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of an empty athletic field, for the park the marker says was formally dedicated in 1962 as a multi-purpose athletic field for African Americans.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "dedicated",
            year: "1962",
            label: "Primus Park is formally dedicated.",
            why: "The marker says Primus Park was formally dedicated in 1962 as a multi-purpose athletic field for African Americans.",
          },
          {
            id: "closed",
            year: "1982",
            label: "Butler closes, and the park stays in use.",
            why: "The marker says the park continued to be used after Butler closed in 1982.",
          },
          {
            id: "hugo",
            year: "1989",
            label: "Hurricane Hugo destroys the park.",
            why: "The marker says it was destroyed by Hurricane Hugo in 1989.",
          },
        ],
        ["hugo", "dedicated", "closed"],
      ),
      takeaway([
        "Primus Park was formally dedicated in 1962 as a multi-purpose athletic field for African Americans.",
        "The Butler Booster Club later raised more than $10,000 to add facilities to the field.",
        "The park continued to be used after Butler closed in 1982. It was destroyed by Hurricane Hugo in 1989.",
      ]),
    ],
  ),
  lesson(
    "16-86",
    "They built their first church here in 1895",
    "Round O Baptist Church timeline",
    [
      cited("16-86", "Round O Baptist Church", "front and back"),
      span("8 years is 1903 minus 1895 on the marker."),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "c.1883",
        title: "Withdrew from nearby Flat Creek Baptist Church",
        partLabel: "the first church",
        art: art(
          "m1686-church.jpg",
          "Illustration of a small plain wooden church in pines. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "formed",
            label: "c.1883",
            x: 32,
            y: 46,
            fact: "In c.1883, freed African Americans and their descendants living on Round O Plantation withdrew from nearby Flat Creek Baptist Church and formed Round O Baptist Church.",
          },
          {
            id: "built",
            label: "1895",
            x: 74,
            y: 58,
            fact: "They built their first church here in 1895, when Rev. Isaiah Walter Williams (c.1873-1932) was pastor. Major James Jonathan Lucas, the owner of Round O Plantation, provided the land for the church.",
          },
        ],
      },
      {
        kind: "scene",
        id: "tower",
        kicker: "1903",
        title: "A white, wooden structure with a central tower",
        partLabel: "the second church",
        art: art(
          "m1686-tower.jpg",
          "Illustration of a wooden church with a plain central tower. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "school",
            label: "A public school",
            x: 32,
            y: 42,
            fact: "Soon after moving to this site, Round O Baptist Church organized a public school for Black children, which later moved across the road.",
          },
          {
            id: "burned",
            label: "1903",
            x: 74,
            y: 54,
            fact: "The first church burned in 1903 and was replaced with a white, wooden structure with a central tower. That second church was removed in c.1967 to construct the building on the south side of the site. The current church was built adjacent in 1999.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1895-1903",
        title: "Years from the first church to the fire",
        partLabel: "8 years",
        value: 8,
        unit: "years",
        meant:
          "What this meant: 1903 comes 8 years after 1895. That is the stretch from the year they built their first church here to the year the first church burned.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1686-church.jpg",
          "Illustration of a small plain wooden church in pines. Not a historical photograph.",
        ),
        nowArt: art(
          "m1686-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a plain wooden church, for the first church the marker says was built here in 1895.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "formed",
            year: "c.1883",
            label: "Members form Round O Baptist Church.",
            why: "The marker says that in c.1883, freed African Americans and their descendants living on Round O Plantation withdrew from nearby Flat Creek Baptist Church and formed Round O Baptist Church.",
          },
          {
            id: "built",
            year: "1895",
            label: "They build their first church here.",
            why: "The marker says they built their first church here in 1895, when Rev. Isaiah Walter Williams (c.1873-1932) was pastor.",
          },
          {
            id: "burned",
            year: "1903",
            label: "The first church burns.",
            why: "The marker says the first church burned in 1903 and was replaced with a white, wooden structure with a central tower.",
          },
          {
            id: "current",
            year: "1999",
            label: "The current church is built adjacent.",
            why: "The marker says that second church was removed in c.1967 to construct the building on the south side of the site. The current church was built adjacent in 1999.",
          },
        ],
        ["burned", "formed", "current", "built"],
      ),
      takeaway([
        "In c.1883, freed African Americans and their descendants living on Round O Plantation withdrew from nearby Flat Creek Baptist Church and formed Round O Baptist Church.",
        "They built their first church here in 1895, when Rev. Isaiah Walter Williams (c.1873-1932) was pastor.",
        "The current church was built adjacent in 1999.",
      ]),
    ],
  ),
  lesson(
    "16-87",
    "A two-story residence built c.1823",
    "White Plains timeline",
    [cited("16-87", "White Plains", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "c.1823",
        title: "One of the most substantial homes",
        partLabel: "the residence",
        art: art(
          "m1687-house.jpg",
          "Illustration of a two-story square house among trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "c.1823",
            x: 32,
            y: 44,
            fact: "North of this road is White Plains, a two-story residence built c.1823 for Isaiah DuBose. It was one of the most substantial homes in the antebellum Springville community and the only remaining W of Black Creek.",
          },
          {
            id: "acquired",
            label: "1839",
            x: 74,
            y: 56,
            fact: "Thomas P. Lide (1810-1882) acquired the house and 1,700-ac. tract in 1839. Lide had the home renovated extensively, with its square shape and much of its character being set by the 1850s.",
          },
        ],
      },
      {
        kind: "scene",
        id: "cotton",
        kicker: "1860",
        title: "The center of a cotton plantation",
        partLabel: "the plantation",
        art: art(
          "m1687-cotton.jpg",
          "Illustration of cotton rows and small wooden dwellings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "owned",
            label: "1860",
            x: 32,
            y: 50,
            fact: "The house was the center of a cotton plantation worked by enslaved people, sixty-five of whom Lide owned in 1860, when seventeen slave dwellings were on the property.",
          },
          {
            id: "sold",
            label: "1937",
            x: 74,
            y: 38,
            fact: "While living at White Plains, Lide served as an S.C. representative and senator and was a leader in the Darlington Agricultural Society. White Plains remained in the Lide family until being sold in 1937.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1860",
        title: "Enslaved people Lide owned",
        partLabel: "sixty-five people",
        value: 65,
        unit: "enslaved people",
        meant:
          "What this meant: the marker says the house was the center of a cotton plantation worked by enslaved people, sixty-five of whom Lide owned in 1860, when seventeen slave dwellings were on the property.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1687-house.jpg",
          "Illustration of a two-story square house among trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m1687-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a two-story square house, for the residence the marker says was built c.1823 for Isaiah DuBose.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "built",
            year: "c.1823",
            label: "White Plains is built for Isaiah DuBose.",
            why: "The marker says White Plains, a two-story residence, was built c.1823 for Isaiah DuBose.",
          },
          {
            id: "acquired",
            year: "1839",
            label: "Thomas P. Lide acquires the house and tract.",
            why: "The marker says Thomas P. Lide (1810-1882) acquired the house and 1,700-ac. tract in 1839.",
          },
          {
            id: "owned",
            year: "1860",
            label: "Lide owns sixty-five enslaved people.",
            why: "The marker says sixty-five enslaved people were owned by Lide in 1860, when seventeen slave dwellings were on the property.",
          },
          {
            id: "sold",
            year: "1937",
            label: "White Plains is sold out of the Lide family.",
            why: "The marker says White Plains remained in the Lide family until being sold in 1937.",
          },
        ],
        ["owned", "built", "sold", "acquired"],
      ),
      takeaway([
        "North of this road is White Plains, a two-story residence built c.1823 for Isaiah DuBose.",
        "Thomas P. Lide (1810-1882) acquired the house and 1,700-ac. tract in 1839.",
        "White Plains remained in the Lide family until being sold in 1937.",
      ]),
    ],
  ),
  lesson(
    "16-88",
    "Organized in 1869 by Rev. Dnaiel Jesse",
    "Pleasant Grove Church timeline",
    [cited("16-88", "Pleasant Grove Church", "front")],
    [
      {
        kind: "scene",
        id: "arbor",
        kicker: "1869",
        title: "Members first met under a brush arbor",
        partLabel: "the brush arbor",
        art: art(
          "m1688-arbor.jpg",
          "Illustration of a brush arbor in a pine clearing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "1869",
            x: 32,
            y: 46,
            fact: "This church was organized in 1869 by Rev. Dnaiel Jesse.",
          },
          {
            id: "acre",
            label: "1872",
            x: 74,
            y: 58,
            fact: "Members first met under a brush arbor before building a small wooden church at this site by 1872, when they acquired one acre where the church already stood.",
          },
        ],
      },
      {
        kind: "scene",
        id: "church",
        kicker: "1910",
        title: "The present structure was built in 1910",
        partLabel: "the present church",
        art: art(
          "m1688-church.jpg",
          "Illustration of a small wooden church in a clearing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "present",
            label: "1910",
            x: 32,
            y: 42,
            fact: "The present structure was built in 1910 and has been renovated several times.",
          },
          {
            id: "ham",
            label: "49 years",
            x: 74,
            y: 54,
            fact: "Dr. Frank Ham was the longest-serving of six pastors the church had in its first 150 years, serving 49 years.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Dr. Frank Ham",
        title: "Years Ham served as pastor",
        partLabel: "49 years",
        value: 49,
        unit: "years",
        meant:
          "What this meant: the marker says Dr. Frank Ham was the longest-serving of six pastors the church had in its first 150 years, serving 49 years.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1688-arbor.jpg",
          "Illustration of a brush arbor in a pine clearing. Not a historical photograph.",
        ),
        nowArt: art(
          "m1688-today.jpg",
          "Illustration of a blank roadside marker. Not a historical photograph.",
        ),
        thenCaption:
          "Illustration of a brush arbor in a clearing, for the shelter the marker says members first met under.",
        nowCaption: "Illustration of a blank roadside marker.",
      },
      order(
        [
          {
            id: "organized",
            year: "1869",
            label: "Rev. Dnaiel Jesse organizes the church.",
            why: "The marker says this church was organized in 1869 by Rev. Dnaiel Jesse.",
          },
          {
            id: "acre",
            year: "1872",
            label: "Members acquire one acre where the church stood.",
            why: "The marker says members built a small wooden church at this site by 1872, when they acquired one acre where the church already stood.",
          },
          {
            id: "present",
            year: "1910",
            label: "The present structure is built.",
            why: "The marker says the present structure was built in 1910 and has been renovated several times.",
          },
        ],
        ["present", "organized", "acre"],
      ),
      takeaway([
        "This church was organized in 1869 by Rev. Dnaiel Jesse.",
        "Members first met under a brush arbor before building a small wooden church at this site by 1872, when they acquired one acre where the church already stood.",
        "The present structure was built in 1910 and has been renovated several times.",
      ]),
    ],
  ),
];
