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

export const charlestonLessonsJ: MarkerLesson[] = [
  lesson(
    "10-49",
    "Longtime activists for women's rights",
    "Pollitzer House timeline",
    [
      cited("10-49", "Pollitzer House", "front and back"),
      span(
        '"28 years" is 1949 minus 1921, the years the marker prints for Anita as national secretary, then chair, of the National Woman\'s Party.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1881-1975",
        title: "Home of the Pollitzer sisters",
        partLabel: "the house",
        art: art(
          "m1049-house.jpg",
          "Illustration of a house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "sisters",
            label: "The sisters",
            x: 32,
            y: 50,
            fact: "This was the home of sisters Carrie (1881-1974), Mabel (1885-1979), and Anita Pollitzer (1894-1975), longtime activists for women's rights.",
          },
          {
            id: "anita",
            label: "1921-1949",
            x: 74,
            y: 40,
            fact: "Anita, an artist and wife of press agent Elie C. Edson, played a pivotal role in the passage and ratification of the 19th Amendment, which allowed women to vote. She was national secretary, then chair of the National Woman's Party (the forerunner of the National Organization for Women) from 1921 to 1949.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1918",
        title: "A college effort and a public library",
        partLabel: "the yard",
        art: art(
          "m1049-yard.jpg",
          "Illustration of a house yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "carrie",
            label: "1918",
            x: 32,
            y: 48,
            fact: "In 1918 Carrie Pollitzer, co-founder and assistant principal of the S.C. Kindergarten Training School, led a successful effort to enroll women in the College of Charleston.",
          },
          {
            id: "mabel",
            label: "1931",
            x: 74,
            y: 56,
            fact: "Mabel, a science teacher at Memminger High School, organized an early school lunch program there. She also served as chair and publicity director of the state National Woman's Party and helped found the first free public library in Charleston County, which opened in 1931.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1921-1949",
        title: "Years as secretary, then chair",
        partLabel: "28 years",
        value: 28,
        unit: "years",
        meant:
          "What this meant: 1949 comes 28 years after 1921. That is the stretch the marker prints for Anita as national secretary, then chair, of the National Woman's Party.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1049-house.jpg",
          "Illustration of a house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1049-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a house, for the home the marker gives to sisters Carrie, Mabel, and Anita Pollitzer. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "enroll",
            year: "1918",
            label: "Carrie leads an effort to enroll women in the College of Charleston.",
            why: "The marker says that in 1918 Carrie Pollitzer, co-founder and assistant principal of the S.C. Kindergarten Training School, led a successful effort to enroll women in the College of Charleston.",
          },
          {
            id: "party",
            year: "1921",
            label: "Anita's years as national secretary, then chair, begin.",
            why: "The marker says she was national secretary, then chair of the National Woman's Party (the forerunner of the National Organization for Women) from 1921 to 1949.",
          },
          {
            id: "library",
            year: "1931",
            label: "The first free public library in Charleston County opens.",
            why: "The marker says Mabel helped found it, and that it opened in 1931. She was a science teacher at Memminger High School, organized an early school lunch program there, and served as chair and publicity director of the state National Woman's Party.",
          },
          {
            id: "chair",
            year: "1949",
            label: "Anita's years as national secretary, then chair, end.",
            why: "The marker dates that service from 1921 to 1949.",
          },
        ],
        ["chair", "enroll", "library", "party"],
      ),
      takeaway([
        "This was the home of sisters Carrie (1881-1974), Mabel (1885-1979), and Anita Pollitzer (1894-1975), longtime activists for women's rights.",
        "Anita, an artist and wife of press agent Elie C. Edson, played a pivotal role in the passage and ratification of the 19th Amendment, which allowed women to vote. She was national secretary, then chair of the National Woman's Party (the forerunner of the National Organization for Women) from 1921 to 1949.",
        "In 1918 Carrie Pollitzer, co-founder and assistant principal of the S.C. Kindergarten Training School, led a successful effort to enroll women in the College of Charleston. Mabel, a science teacher at Memminger High School, organized an early school lunch program there. She also served as chair and publicity director of the state National Woman's Party and helped found the first free public library in Charleston County, which opened in 1931.",
      ]),
    ],
  ),
  lesson(
    "10-50",
    "Climax at Burden's Causeway",
    "Burden's Causeway timeline",
    [cited("10-50", "Federal Expedition on John's Island", "front and back")],
    [
      {
        kind: "scene",
        id: "camp",
        kicker: "July 2-9, 1864",
        title: "A strong position at the bridge",
        partLabel: "the camp",
        art: art(
          "m1050-camp.jpg",
          "Illustration of a camp by a creek bridge. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "expedition",
            label: "July 2-9, 1864",
            x: 32,
            y: 46,
            fact: "The Battle of Burden's Causeway was the climax of a Federal expedition against John's Island, July 2-9, 1864.",
          },
          {
            id: "hatch",
            label: "July 6th",
            x: 74,
            y: 58,
            fact: "5000 Federals under Brig. Gen. John P. Hatch crossed the Stono River and advanced along it. By July 6th they occupied a strong position here, where a bridge on Burden's Causeway crossed Burden's Creek.",
          },
        ],
      },
      {
        kind: "scene",
        id: "island",
        kicker: "July 9, 1864",
        title: "Attacked, then evacuated",
        partLabel: "the island",
        art: art(
          "m1050-island.jpg",
          "Illustration of a marsh causeway under shelling. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "robertson",
            label: "July 7th and 8th",
            x: 32,
            y: 50,
            fact: "Fewer than 2000 Confederates under Brig. Gen. B.H. Robertson opposed the Federals. Brief skirmishing and shelling occurred on July 7th and 8th.",
          },
          {
            id: "withdraw",
            label: "July 9, 1864",
            x: 74,
            y: 42,
            fact: "On July 9, 1864, the Confederates attacked, were repulsed, were reinforced, and attacked again. Hatch, compelled to withdraw, evacuated John's Island late that night.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "July 1864",
        title: "Federals under Hatch",
        partLabel: "5000 Federals",
        value: 5000,
        unit: "Federals",
        meant:
          "What this meant: the marker says 5000 Federals under Brig. Gen. John P. Hatch crossed the Stono River and advanced along it.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1050-camp.jpg",
          "Illustration of a camp by a creek bridge. Not a historical photograph.",
        ),
        nowArt: art(
          "m1050-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a camp by a creek bridge, for the strong position the marker says Federals occupied by July 6th, where a bridge on Burden's Causeway crossed Burden's Creek. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "cross",
            year: "July 2, 1864",
            label: "The Federal expedition against John's Island begins.",
            why: "The marker dates the expedition, whose climax was the Battle of Burden's Causeway, to July 2-9, 1864. 5000 Federals under Brig. Gen. John P. Hatch crossed the Stono River and advanced along it.",
          },
          {
            id: "position",
            year: "July 6, 1864",
            label: "Federals occupy a strong position at the bridge.",
            why: "The marker says that by July 6th they occupied a strong position here, where a bridge on Burden's Causeway crossed Burden's Creek.",
          },
          {
            id: "skirmish",
            year: "July 7-8, 1864",
            label: "Skirmishing and shelling occur.",
            why: "The marker says brief skirmishing and shelling occurred on July 7th and 8th. Fewer than 2000 Confederates under Brig. Gen. B.H. Robertson opposed the Federals.",
          },
          {
            id: "evacuate",
            year: "July 9, 1864",
            label: "Confederates attack, and Hatch evacuates the island that night.",
            why: "The marker says that on July 9, 1864, the Confederates attacked, were repulsed, were reinforced, and attacked again. Hatch, compelled to withdraw, evacuated John's Island late that night.",
          },
        ],
        ["evacuate", "cross", "skirmish", "position"],
      ),
      takeaway([
        "The Battle of Burden's Causeway was the climax of a Federal expedition against John's Island, July 2-9, 1864. 5000 Federals under Brig. Gen. John P. Hatch crossed the Stono River and advanced along it.",
        "By July 6th they occupied a strong position here, where a bridge on Burden's Causeway crossed Burden's Creek. Fewer than 2000 Confederates under Brig. Gen. B.H. Robertson opposed the Federals. Brief skirmishing and shelling occurred on July 7th and 8th.",
        "On July 9, 1864, the Confederates attacked, were repulsed, were reinforced, and attacked again. Hatch, compelled to withdraw, evacuated John's Island late that night.",
      ]),
    ],
  ),
  lesson(
    "10-51",
    "Abandoned when Charleston was evacuated",
    "Battery Haig timeline",
    [
      cited("10-51", "Battery Haig", "front"),
      span(
        '"2 years" is 1865 minus 1863, the years the marker prints for the abandonment of Battery Haig and its construction.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "battery",
        kicker: "1863",
        title: "Built to defend the western approaches",
        partLabel: "the battery",
        art: art(
          "m1051-battery.jpg",
          "Illustration of an earthwork battery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1863",
            x: 32,
            y: 48,
            fact: "This Confederate earthwork, named for the owner on whose plantation it was built, was constructed in 1863.",
          },
          {
            id: "railroad",
            label: "The railroad",
            x: 74,
            y: 40,
            fact: "It and other works on the north bank of the Stono River were intended to help defend Charleston's western approaches along the Charleston & Savannah Railroad.",
          },
        ],
      },
      {
        kind: "scene",
        id: "earth",
        kicker: "February 17, 1865",
        title: "Two cannon, then abandoned",
        partLabel: "the earthwork",
        art: art(
          "m1051-earth.jpg",
          "Illustration of an earthen parapet. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "cannon",
            label: "Late 1864",
            x: 32,
            y: 52,
            fact: "In late 1864 Battery Haig was armed with two 24-pounder rifled cannon.",
          },
          {
            id: "left",
            label: "February 17, 1865",
            x: 74,
            y: 44,
            fact: "It and the rest of the Confederate defenses of Charleston were abandoned when the city was evacuated February 17, 1865.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1863-1865",
        title: "Years from construction to abandonment",
        partLabel: "2 years",
        value: 2,
        unit: "years",
        meant:
          "What this meant: 1865 comes 2 years after 1863. That is the stretch from the year this Confederate earthwork was constructed to the year it was abandoned, when Charleston was evacuated February 17, 1865.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1051-battery.jpg",
          "Illustration of an earthwork battery. Not a historical photograph.",
        ),
        nowArt: art(
          "m1051-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an earthwork battery, for the Confederate earthwork the marker says was constructed in 1863. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1863",
            label: "The earthwork is constructed.",
            why: "The marker says this Confederate earthwork, named for the owner on whose plantation it was built, was constructed in 1863. It and other works on the north bank of the Stono River were intended to help defend Charleston's western approaches along the Charleston & Savannah Railroad.",
          },
          {
            id: "armed",
            year: "Late 1864",
            label: "Battery Haig is armed with two 24-pounder rifled cannon.",
            why: "The marker says that in late 1864 Battery Haig was armed with two 24-pounder rifled cannon.",
          },
          {
            id: "abandoned",
            year: "February 17, 1865",
            label: "The battery is abandoned as Charleston is evacuated.",
            why: "The marker says it and the rest of the Confederate defenses of Charleston were abandoned when the city was evacuated February 17, 1865.",
          },
        ],
        ["abandoned", "built", "armed"],
      ),
      takeaway([
        "This Confederate earthwork, named for the owner on whose plantation it was built, was constructed in 1863.",
        "It and other works on the north bank of the Stono River were intended to help defend Charleston's western approaches along the Charleston & Savannah Railroad. In late 1864 Battery Haig was armed with two 24-pounder rifled cannon.",
        "It and the rest of the Confederate defenses of Charleston were abandoned when the city was evacuated February 17, 1865.",
      ]),
    ],
  ),
  lesson(
    "10-52",
    "A house named Hobcaw Plantation",
    "Maybank Green timeline",
    [cited("10-52", "Maybank Green", "front and back")],
    [
      {
        kind: "scene",
        id: "green",
        kicker: "1697",
        title: "Two hundred acres along Hobcaw Creek",
        partLabel: "the green",
        art: art(
          "m1052-green.jpg",
          "Illustration of creek land and a small house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acres",
            label: "1697",
            x: 32,
            y: 48,
            fact: "In 1697 David Maybank II (1660-1713) acquired 200 acres along Hobcaw Creek from the Lords Proprietors. Maybank, a carpenter, built a house on this site which he named Hobcaw Plantation.",
          },
          {
            id: "passed",
            label: "Susannah and Bond",
            x: 74,
            y: 42,
            fact: "The plantation passed to his daughter Susannah (1700-1746) and her husband Capt. Jacob Bond (1695-1766), planter and member of the Commons House of Assembly. After Bond's death the plantation was owned by his daughter Rebecca Bond Read (1730-1786).",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1819",
        title: "A surgeon, then a visit",
        partLabel: "the houses",
        art: art(
          "m1052-houses.jpg",
          "Illustration of lowcountry houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "read",
            label: "William Read",
            x: 32,
            y: 50,
            fact: "Rebecca and James Read's son Dr. William Read (1754-1845) was a deputy surgeon general in the Continental Army, serving under both George Washington and Nathanael Greene. This was one of Read's several lowcountry plantations; his principal residence was in Charleston.",
          },
          {
            id: "visit",
            label: "1819",
            x: 74,
            y: 40,
            fact: "In 1819 Read's cousin Jacob Bond I'On (1782-1859), planter, army officer, and legislator, hosted President James Monroe and Secretary of State John C. Calhoun at Hobcaw Plantation.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1697",
        title: "Acres along Hobcaw Creek",
        partLabel: "200 acres",
        value: 200,
        unit: "acres",
        meant:
          "What this meant: the marker says that in 1697 David Maybank II acquired 200 acres along Hobcaw Creek from the Lords Proprietors.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1052-green.jpg",
          "Illustration of creek land and a small house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1052-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of creek land and a small house, for the 200 acres the marker says David Maybank II acquired in 1697 and the house he named Hobcaw Plantation. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "acquired",
            year: "1697",
            label: "David Maybank II acquires 200 acres and names Hobcaw Plantation.",
            why: "The marker says that in 1697 David Maybank II (1660-1713) acquired 200 acres along Hobcaw Creek from the Lords Proprietors. Maybank, a carpenter, built a house on this site which he named Hobcaw Plantation.",
          },
          {
            id: "rebecca",
            year: "1766",
            label: "After Bond's death, Rebecca Bond Read owns the plantation.",
            why: "The marker prints Capt. Jacob Bond (1695-1766) and says that after Bond's death the plantation was owned by his daughter Rebecca Bond Read (1730-1786). It had passed to Maybank's daughter Susannah (1700-1746) and her husband Capt. Jacob Bond, planter and member of the Commons House of Assembly.",
          },
          {
            id: "hosted",
            year: "1819",
            label: "Jacob Bond I'On hosts Monroe and Calhoun.",
            why: "The marker says that in 1819 Read's cousin Jacob Bond I'On (1782-1859), planter, army officer, and legislator, hosted President James Monroe and Secretary of State John C. Calhoun at Hobcaw Plantation. Dr. William Read (1754-1845), son of Rebecca and James Read, was a deputy surgeon general in the Continental Army, serving under both George Washington and Nathanael Greene. This was one of Read's several lowcountry plantations; his principal residence was in Charleston.",
          },
        ],
        ["hosted", "acquired", "rebecca"],
      ),
      takeaway([
        "In 1697 David Maybank II (1660-1713) acquired 200 acres along Hobcaw Creek from the Lords Proprietors. Maybank, a carpenter, built a house on this site which he named Hobcaw Plantation.",
        "The plantation passed to his daughter Susannah (1700-1746) and her husband Capt. Jacob Bond (1695-1766), planter and member of the Commons House of Assembly. After Bond's death the plantation was owned by his daughter Rebecca Bond Read (1730-1786).",
        "Rebecca and James Read's son Dr. William Read (1754-1845) was a deputy surgeon general in the Continental Army, serving under both George Washington and Nathanael Greene. This was one of Read's several lowcountry plantations; his principal residence was in Charleston. In 1819 Read's cousin Jacob Bond I'On (1782-1859), planter, army officer, and legislator, hosted President James Monroe and Secretary of State John C. Calhoun at Hobcaw Plantation.",
      ]),
    ],
  ),
];
