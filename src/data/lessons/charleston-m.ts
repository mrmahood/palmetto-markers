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

export const charlestonLessonsM: MarkerLesson[] = [
  lesson(
    "10-61",
    "One of six earthworks on James Island",
    "Redoubt Number 3 timeline",
    [
      cited("10-61", "Redoubt Number 3", "front and back"),
      span(
        '"4 years" is 1865 minus 1861, the years the marker prints for the evacuation of this redoubt and the building of Redoubt Number 3.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "earth",
        kicker: "1861-62",
        title: "Built across the center of James Island",
        partLabel: "the redoubt",
        art: art(
          "m1061-earth.jpg",
          "Illustration of a square earthwork. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1861-62",
            x: 32,
            y: 54,
            fact: "Redoubt Number 3, built here in 1861-62, was one of six identical Confederate earthworks built across the center of James Island, known collectively as the East Lines.",
          },
          {
            id: "guns",
            label: "60 yds. square",
            x: 74,
            y: 42,
            fact: "Intended to help defend Charleston from Federal attacks up the Stono River, they were 60 yds. square and built for two guns each.",
          },
        ],
      },
      {
        kind: "scene",
        id: "works",
        kicker: "1863",
        title: "Armed, then made obsolete",
        partLabel: "the East Lines",
        art: art(
          "m1061-works.jpg",
          "Illustration of earthworks stretching toward a sound. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lines",
            label: "November 1863",
            x: 32,
            y: 48,
            fact: "The East Lines stretched south from a tributary of James Island Creek, on Croskey Royall's plantation, to Clark Sound, on the Rev. Stiles Mellichamp's plantation. In November 1863 this redoubt was armed with a single 24-pounder smoothbore cannon.",
          },
          {
            id: "obsolete",
            label: "February 17, 1865",
            x: 74,
            y: 40,
            fact: "By late 1863, stronger earthworks, called the New Lines, were built nearer the Stono River, making these lines obsolete. This redoubt and the rest of Charleston's defenses were evacuated February 17, 1865.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1861-1865",
        title: "Years from the building to the evacuation",
        partLabel: "4 years",
        value: 4,
        unit: "years",
        meant:
          "What this meant: 1865 comes 4 years after 1861. That is the stretch from the year this redoubt was built in 1861-62 to February 17, 1865, when it was evacuated.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1061-earth.jpg",
          "Illustration of a square earthwork. Not a historical photograph.",
        ),
        nowArt: art(
          "m1061-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a square earthwork, for Redoubt Number 3, which the marker says was built here in 1861-62. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1861-62",
            label: "Redoubt Number 3 is built as one of the East Lines.",
            why: "The marker says Redoubt Number 3 was built here in 1861-62, one of six identical Confederate earthworks across the center of James Island, known collectively as the East Lines.",
          },
          {
            id: "armed",
            year: "November 1863",
            label: "This redoubt is armed with a single 24-pounder.",
            why: "The marker says that in November 1863 this redoubt was armed with a single 24-pounder smoothbore cannon.",
          },
          {
            id: "newlines",
            year: "Late 1863",
            label: "The New Lines make the East Lines obsolete.",
            why: "The marker says that by late 1863, stronger earthworks, called the New Lines, were built nearer the Stono River, making these lines obsolete.",
          },
          {
            id: "evacuated",
            year: "February 17, 1865",
            label: "This redoubt and the rest of Charleston's defenses are evacuated.",
            why: "The marker says this redoubt and the rest of Charleston's defenses were evacuated February 17, 1865.",
          },
        ],
        ["evacuated", "built", "newlines", "armed"],
      ),
      takeaway([
        "Redoubt Number 3, built here in 1861-62, was one of six identical Confederate earthworks across the center of James Island, the East Lines. They were 60 yds. square and built for two guns each, to help defend Charleston from Federal attacks up the Stono River.",
        "The East Lines stretched from a tributary of James Island Creek, on Croskey Royall's plantation, to Clark Sound, on the Rev. Stiles Mellichamp's plantation. In November 1863 this redoubt was armed with a single 24-pounder smoothbore cannon.",
        "By late 1863 the New Lines, nearer the Stono River, made these lines obsolete. This redoubt and the rest of Charleston's defenses were evacuated February 17, 1865.",
      ]),
    ],
  ),
  lesson(
    "10-62",
    "A five-sided work on the Stono",
    "Fort Pemberton timeline",
    [
      cited("10-62", "Fort Pemberton", "front and back"),
      span(
        '"3 years" is 1865 minus 1862, the years the marker prints for the evacuation of Fort Pemberton and its building.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "fort",
        kicker: "Spring 1862",
        title: "Built on the James Island side of the Stono",
        partLabel: "the fort",
        art: art(
          "m1062-fort.jpg",
          "Illustration of a five-sided earthwork beside a river. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Spring 1862",
            x: 32,
            y: 52,
            fact: "Fort Pemberton, a large five-sided Confederate earthwork on the James Island side of the Stono River, was built in the spring of 1862 to defend Charleston from a Federal attack via Elliott's Cut and Wappoo Creek.",
          },
          {
            id: "named",
            label: "Twenty-one guns",
            x: 74,
            y: 40,
            fact: "Named for Maj. Gen. John C. Pemberton, commander of the Dept. of S.C. and Ga., it was designed for as many as twenty-one guns but never held more than eight.",
          },
        ],
      },
      {
        kind: "scene",
        id: "marsh",
        kicker: "June 1864",
        title: "Manned, described, then evacuated",
        partLabel: "the armament",
        art: art(
          "m1062-marsh.jpg",
          "Illustration of a marsh creek beside an earthwork. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "manned",
            label: "June 1864",
            x: 32,
            y: 48,
            fact: "In June 1864 it was manned by Co. B, 15th Battalion S.C. Heavy Artillery, commanded by Capt. Guignard Richardson. Its armament at that time was two 32-pounder banded rifled guns and two 32-pounder smoothbore cannon.",
          },
          {
            id: "left",
            label: "February 17, 1865",
            x: 74,
            y: 42,
            fact: "Fort Pemberton was described in 1865 as “a large well-built work, heavily armed.” It and the rest of Charleston defenses were evacuated on February 17, 1865.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1862-1865",
        title: "Years from the building to the evacuation",
        partLabel: "3 years",
        value: 3,
        unit: "years",
        meant:
          "What this meant: 1865 comes 3 years after 1862. That is the stretch from the spring of 1862, when Fort Pemberton was built, to February 17, 1865, when it was evacuated.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1062-fort.jpg",
          "Illustration of a five-sided earthwork beside a river. Not a historical photograph.",
        ),
        nowArt: art(
          "m1062-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a five-sided earthwork, for Fort Pemberton, which the marker says was built in the spring of 1862. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "Spring 1862",
            label: "Fort Pemberton is built on the Stono River.",
            why: "The marker says Fort Pemberton was built in the spring of 1862 to defend Charleston from a Federal attack via Elliott's Cut and Wappoo Creek. It was named for Maj. Gen. John C. Pemberton, commander of the Dept. of S.C. and Ga.",
          },
          {
            id: "manned",
            year: "June 1864",
            label: "Co. B mans the fort.",
            why: "The marker says that in June 1864 it was manned by Co. B, 15th Battalion S.C. Heavy Artillery, commanded by Capt. Guignard Richardson, with two 32-pounder banded rifled guns and two 32-pounder smoothbore cannon.",
          },
          {
            id: "evacuated",
            year: "February 17, 1865",
            label: "Fort Pemberton and the rest of Charleston defenses are evacuated.",
            why: "The marker says Fort Pemberton was described in 1865 as “a large well-built work, heavily armed,” and that it and the rest of Charleston defenses were evacuated on February 17, 1865.",
          },
        ],
        ["evacuated", "built", "manned"],
      ),
      takeaway([
        "Fort Pemberton, a large five-sided Confederate earthwork on the James Island side of the Stono River, was built in the spring of 1862 to defend Charleston from a Federal attack via Elliott's Cut and Wappoo Creek.",
        "Named for Maj. Gen. John C. Pemberton, commander of the Dept. of S.C. and Ga., it was designed for as many as twenty-one guns but never held more than eight.",
        "In June 1864 Co. B, 15th Battalion S.C. Heavy Artillery manned it, with two 32-pounder banded rifled guns and two 32-pounder smoothbore cannon. Described in 1865 as “a large well-built work, heavily armed,” it and the rest of Charleston defenses were evacuated on February 17, 1865.",
      ]),
    ],
  ),
  lesson(
    "10-63",
    "An inland rice plantation",
    "Windsor Hill timeline",
    [cited("10-63", "Windsor Hill Plantation", "front and back")],
    [
      {
        kind: "scene",
        id: "fields",
        kicker: "1701",
        title: "A grant between Goose Creek and the Ashley",
        partLabel: "the grant",
        art: art(
          "m1063-fields.jpg",
          "Illustration of inland rice fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grant",
            label: "1701",
            x: 32,
            y: 50,
            fact: "This inland rice plantation was established in 1701 by a grant of 500 acres to Joseph Child. The original grant was between the headwaters of Goose Creek and the Ashley River, and Child soon acquired an additional 300 acres.",
          },
          {
            id: "inherit",
            label: "1749",
            x: 74,
            y: 42,
            fact: "His son Benjamin added acreage and continued planting rice. In 1749 Benjamin and Hannah Child's daughter Mary inherited Windsor Hill and married rice planter John Ainslie (d. 1774).",
          },
        ],
      },
      {
        kind: "scene",
        id: "house",
        kicker: "About 1750",
        title: "A house, a fire, and a reburial",
        partLabel: "the house",
        art: art(
          "m1063-house.jpg",
          "Illustration of a two-story plantation house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "About 1750",
            x: 32,
            y: 46,
            fact: "John and Mary Ainslie built a two-story house here about 1750. In 1776 their daughter Hannah married William Moultrie, Jr. (1752-1796). The plantation declined by the 1830s, and the house burned in 1857.",
          },
          {
            id: "reburied",
            label: "1977",
            x: 74,
            y: 40,
            fact: "Gen. William Moultrie (1730-1805), victor at the Battle of Sullivan's Island in 1776 and governor 1785-1787 and 1792-94, was first buried here but reburied on Sullivan's Island, at Fort Moultrie, in 1977.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1701",
        title: "Acres in the original grant",
        partLabel: "500 acres",
        value: 500,
        unit: "acres",
        meant:
          "What this meant: the marker says this inland rice plantation was established in 1701 by a grant of 500 acres to Joseph Child.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1063-house.jpg",
          "Illustration of a two-story plantation house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1063-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a two-story house, for the house the marker says John and Mary Ainslie built here about 1750. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "grant",
            year: "1701",
            label: "Joseph Child receives a grant of 500 acres.",
            why: "The marker says this inland rice plantation was established in 1701 by a grant of 500 acres to Joseph Child, between the headwaters of Goose Creek and the Ashley River. He soon acquired an additional 300 acres. His son Benjamin added acreage and continued planting rice.",
          },
          {
            id: "inherit",
            year: "1749",
            label: "Mary Child inherits Windsor Hill and marries John Ainslie.",
            why: "The marker says that in 1749 Benjamin and Hannah Child's daughter Mary inherited Windsor Hill and married rice planter John Ainslie (d. 1774).",
          },
          {
            id: "burned",
            year: "1857",
            label: "The house burns.",
            why: "The marker says John and Mary Ainslie built a two-story house here about 1750, that in 1776 their daughter Hannah married William Moultrie, Jr. (1752-1796), that the plantation declined by the 1830s, and that the house burned in 1857.",
          },
          {
            id: "reburied",
            year: "1977",
            label: "Gen. William Moultrie is reburied at Fort Moultrie.",
            why: "The marker says Gen. William Moultrie (1730-1805), victor at the Battle of Sullivan's Island in 1776 and governor 1785-1787 and 1792-94, was first buried here but reburied on Sullivan's Island, at Fort Moultrie, in 1977.",
          },
        ],
        ["reburied", "grant", "burned", "inherit"],
      ),
      takeaway([
        "This inland rice plantation was established in 1701 by a grant of 500 acres to Joseph Child, between the headwaters of Goose Creek and the Ashley River. He soon acquired an additional 300 acres. His son Benjamin added acreage and continued planting rice.",
        "In 1749 Mary Child inherited Windsor Hill and married John Ainslie (d. 1774). They built a two-story house here about 1750. In 1776 their daughter Hannah married William Moultrie, Jr. (1752-1796). The plantation declined by the 1830s, and the house burned in 1857.",
        "Gen. William Moultrie (1730-1805), victor at the Battle of Sullivan's Island in 1776 and governor 1785-1787 and 1792-94, was first buried here but reburied on Sullivan's Island, at Fort Moultrie, in 1977.",
      ]),
    ],
  ),
  lesson(
    "10-64",
    "Wild's African Brigade camped nearby",
    "African Brigade timeline",
    [
      cited(
        "10-64",
        'Camp of Wild\'s "African Brigade," 1863-1864',
        "front and back",
      ),
    ],
    [
      {
        kind: "scene",
        id: "camp",
        kicker: "November 1863",
        title: "Two regiments camped nearby",
        partLabel: "the camp",
        art: art(
          "m1064-camp.jpg",
          "Illustration of a tent camp and a flagpole. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "occupied",
            label: "April 1863",
            x: 32,
            y: 50,
            fact: "Folly Island was occupied by Union troops April 1863-February 1865.",
          },
          {
            id: "brigade",
            label: "November 1863",
            x: 74,
            y: 42,
            fact: "Gen. Edward A. Wild's “African Brigade” camped nearby from November 1863 to February 1864. The two regiments in Wild's brigade were the 55th Massachusetts, made up largely of free blacks, and the 1st North Carolina, made up of former slaves.",
          },
        ],
      },
      {
        kind: "scene",
        id: "tents",
        kicker: "1863-64",
        title: "A cemetery, then a reburial",
        partLabel: "the burials",
        art: art(
          "m1064-tents.jpg",
          "Illustration of camp tents and a flagpole. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "cemetery",
            label: "1863-64",
            x: 32,
            y: 48,
            fact: "A cemetery was laid out nearby for soldiers in Wild's Brigade who died here in 1863-64. Most graves were removed after the war.",
          },
          {
            id: "honors",
            label: "May 1989",
            x: 74,
            y: 40,
            fact: "In 1987 relic hunters discovered additional graves of U.S. Colored Troops. In 1987-88 archaeologists removed 19 burials and published their findings. These soldiers were reburied with full military honors at Beaufort National Cemetery in May 1989.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1987-88",
        title: "Burials the archaeologists removed",
        partLabel: "19 burials",
        value: 19,
        unit: "burials",
        meant:
          "What this meant: the marker says that in 1987-88 archaeologists removed 19 burials and published their findings.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1064-camp.jpg",
          "Illustration of a tent camp and a flagpole. Not a historical photograph.",
        ),
        nowArt: art(
          "m1064-today.jpg",
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a tent camp, for the camp of Gen. Edward A. Wild's African Brigade, which the marker says camped nearby from November 1863 to February 1864. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker post. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "occupied",
            year: "April 1863",
            label: "Union troops occupy Folly Island.",
            why: "The marker says Folly Island was occupied by Union troops April 1863-February 1865.",
          },
          {
            id: "camped",
            year: "November 1863",
            label: "Wild's African Brigade camps nearby.",
            why: "The marker says Gen. Edward A. Wild's African Brigade camped nearby from November 1863 to February 1864. The two regiments were the 55th Massachusetts, made up largely of free blacks, and the 1st North Carolina, made up of former slaves. A cemetery was laid out nearby for soldiers in Wild's Brigade who died here in 1863-64.",
          },
          {
            id: "discovered",
            year: "1987",
            label: "Relic hunters discover additional graves.",
            why: "The marker says that in 1987 relic hunters discovered additional graves of U.S. Colored Troops. Most graves had been removed after the war. In 1987-88 archaeologists removed 19 burials and published their findings.",
          },
          {
            id: "reburied",
            year: "May 1989",
            label: "The soldiers are reburied at Beaufort National Cemetery.",
            why: "The marker says these soldiers were reburied with full military honors at Beaufort National Cemetery in May 1989.",
          },
        ],
        ["reburied", "occupied", "discovered", "camped"],
      ),
      takeaway([
        "Folly Island was occupied by Union troops April 1863-February 1865. Gen. Edward A. Wild's “African Brigade” camped nearby from November 1863 to February 1864.",
        "The two regiments in Wild's brigade were the 55th Massachusetts, made up largely of free blacks, and the 1st North Carolina, made up of former slaves. A cemetery was laid out nearby for soldiers in Wild's Brigade who died here in 1863-64. Most graves were removed after the war.",
        "In 1987 relic hunters discovered additional graves of U.S. Colored Troops. In 1987-88 archaeologists removed 19 burials and published their findings. These soldiers were reburied with full military honors at Beaufort National Cemetery in May 1989.",
      ]),
    ],
  ),
];
