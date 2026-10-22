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

export const darlingtonLessonsB: MarkerLesson[] = [
  lesson(
    "16-06",
    "Chancellor of the S.C. Court of Equity",
    "George W. Dargan timeline",
    [
      cited("16-06", "George W. Dargan 1802-1859", "front"),
      span(
        '"12 years" is 1859 minus 1847, the years the marker prints for his service as Chancellor of the S.C. Court of Equity.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "home",
        kicker: "Near this site",
        title: "Home of an ante-bellum leader",
        partLabel: "the home",
        art: art(
          "m1606-home.jpg",
          "Illustration of a columned mansion among trees. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "home",
            label: "Near this site",
            x: 32,
            y: 48,
            fact: "Near this site stood the home of George W. Dargan, ante-bellum leader of this area.",
          },
          {
            id: "convention",
            label: "1852",
            x: 74,
            y: 40,
            fact: "He was a trustee of the S.C. College and a member of the Southern Rights Convention of 1852.",
          },
        ],
      },
      {
        kind: "scene",
        id: "service",
        kicker: "1842-1859",
        title: "Senator, then chancellor",
        partLabel: "public service",
        art: art(
          "m1606-court.jpg",
          "Illustration of a columned courthouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "offices",
            label: "1842-1859",
            x: 32,
            y: 46,
            fact: "He served as State Senator, 1842-1847 and Chancellor of the S.C. Court of Equity, 1847-1859.",
          },
          {
            id: "burned",
            label: "May 14, 1898",
            x: 74,
            y: 58,
            fact: "The mansion burned down on May 14, 1898.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1847-1859",
        title: "Years as chancellor",
        partLabel: "12 years",
        value: 12,
        unit: "years",
        meant:
          "What this meant: 1859 comes 12 years after 1847. That is the stretch the marker prints for his service as Chancellor of the S.C. Court of Equity.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1606-home.jpg",
          "Illustration of a columned mansion among trees. Not a historical photograph.",
        ),
        nowArt: art(
          "m1606-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a columned mansion, for the home the marker says stood near this site. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "senator",
            year: "1842",
            label: "He serves as State Senator.",
            why: "The marker says he served as State Senator, 1842-1847.",
          },
          {
            id: "chancellor",
            year: "1847",
            label: "He serves as Chancellor of the S.C. Court of Equity.",
            why: "The marker says he served as Chancellor of the S.C. Court of Equity, 1847-1859.",
          },
          {
            id: "convention",
            year: "1852",
            label: "He is a member of the Southern Rights Convention.",
            why: "The marker says he was a trustee of the S.C. College and a member of the Southern Rights Convention of 1852.",
          },
          {
            id: "burned",
            year: "May 14, 1898",
            label: "The mansion burns down.",
            why: "The marker says the mansion burned down on May 14, 1898.",
          },
        ],
        ["burned", "senator", "convention", "chancellor"],
      ),
      takeaway([
        "Near this site stood the home of George W. Dargan, ante-bellum leader of this area, who served as State Senator, 1842-1847 and Chancellor of the S.C. Court of Equity, 1847-1859.",
        "He was a trustee of the S.C. College and a member of the Southern Rights Convention of 1852.",
        "The mansion burned down on May 14, 1898.",
      ]),
    ],
  ),
  lesson(
    "16-07",
    "Mutual improvement in agriculture",
    "Darlington District Agricultural Society timeline",
    [
      cited("16-07", "Darlington District Agricultural Society", "front and back"),
      span(
        '"27 years" is 1846 minus 1819, the years the marker prints for the purchase of the spring and the organization of the society.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "spring",
        kicker: "July 17, 1819",
        title: "A spring bought for a spa",
        partLabel: "the spring",
        art: art(
          "m1607-spring.jpg",
          "Illustration of a wooded spring and a small bathhouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "purchase",
            label: "July 17, 1819",
            x: 32,
            y: 52,
            fact: "On July 17, 1819, this spring and the surrounding lands were purchased from Henry King by the Darlington Mineral Springs Company, intent upon developing the site as a beneficial spa.",
          },
          {
            id: "abandoned",
            label: "Soon after",
            x: 74,
            y: 38,
            fact: "The enterprise was abandoned soon after the death of the chief promoter.",
          },
        ],
      },
      {
        kind: "scene",
        id: "society",
        kicker: "May 5, 1846",
        title: "Organized for the planting interest",
        partLabel: "the society",
        art: art(
          "m1607-fields.jpg",
          "Illustration of planted fields beside a spring. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "May 5, 1846",
            x: 32,
            y: 44,
            fact: 'On May 5, 1846, a society was organized for "mutual improvement in agriculture and to promote the planting interest of the country."',
          },
          {
            id: "meetings",
            label: "At this spring",
            x: 74,
            y: 60,
            fact: "Most of the annual meetings since that time have been held at this spring. The first officers were W. E. James, Rev. J. M. Timmons, Isaac W. Wilson, Robert Rogers, and Rev. Robert Campbell.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1819-1846",
        title: "Years from the purchase to the society",
        partLabel: "27 years",
        value: 27,
        unit: "years",
        meant:
          "What this meant: 1846 comes 27 years after 1819. That is the stretch from the year the spring was purchased to the year the society was organized.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1607-spring.jpg",
          "Illustration of a wooded spring and a small bathhouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m1607-today.jpg",
          "Illustration of a blank roadside marker beside a spring. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooded spring and a small bathhouse, for the spring the marker says was purchased on July 17, 1819. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a spring. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "purchase",
            year: "July 17, 1819",
            label: "The spring and surrounding lands are purchased.",
            why: "The marker says that on July 17, 1819, this spring and the surrounding lands were purchased from Henry King by the Darlington Mineral Springs Company.",
          },
          {
            id: "organized",
            year: "May 5, 1846",
            label: "A society is organized for agriculture.",
            why: 'The marker says that on May 5, 1846, a society was organized for "mutual improvement in agriculture and to promote the planting interest of the country."',
          },
          {
            id: "meetings",
            year: "Since that time",
            label: "Most annual meetings are held at this spring.",
            why: "The marker says most of the annual meetings since that time have been held at this spring.",
          },
        ],
        ["meetings", "purchase", "organized"],
      ),
      takeaway([
        "On July 17, 1819, this spring and the surrounding lands were purchased from Henry King by the Darlington Mineral Springs Company, intent upon developing the site as a beneficial spa.",
        "The enterprise was abandoned soon after the death of the chief promoter.",
        'On May 5, 1846, a society was organized for "mutual improvement in agriculture and to promote the planting interest of the country."',
      ]),
    ],
  ),
  lesson(
    "16-08",
    "Union headquarters on March 2-3, 1865",
    "Jacob Kelley House timeline",
    [
      cited("16-08", "Jacob Kelley House", "front"),
      span(
        '"94 years" is 1874 minus 1780, the years the marker prints for Jacob Kelley.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1780-1874",
        title: "Home of Jacob Kelley",
        partLabel: "the house",
        art: art(
          "m1608-house.jpg",
          "Illustration of a plain rural house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "kelley",
            label: "1780-1874",
            x: 32,
            y: 50,
            fact: "This house, home of Jacob Kelley (1780-1874), was used as a Union headquarters on March 2-3, 1865.",
          },
          {
            id: "headquarters",
            label: "March 2-3, 1865",
            x: 74,
            y: 40,
            fact: "Major-General John E. Smith, Commander of the Third Division, Fifteenth Army Corps, used the house as a Union headquarters on March 2-3, 1865.",
          },
        ],
      },
      {
        kind: "scene",
        id: "mills",
        kicker: "The encampment",
        title: "Mills run for the Third Division",
        partLabel: "the mills",
        art: art(
          "m1608-mills.jpg",
          "Illustration of mill buildings and empty tents. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "mills",
            label: "Kelley Town",
            x: 32,
            y: 46,
            fact: "During the encampment by Federal forces, the mills near Kelley Town were run for the benefit of the Third Division.",
          },
          {
            id: "foraging",
            label: "Foraging parties",
            x: 74,
            y: 58,
            fact: "During the encampment by Federal forces, foraging parties roamed the area.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1780-1874",
        title: "Years the marker prints for Jacob Kelley",
        partLabel: "94 years",
        value: 94,
        unit: "years",
        meant:
          "What this meant: 1874 comes 94 years after 1780. That is the stretch the marker prints for Jacob Kelley (1780-1874).",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1608-house.jpg",
          "Illustration of a plain rural house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1608-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plain rural house, for the home of Jacob Kelley the marker says was used as a Union headquarters on March 2-3, 1865. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "early",
            year: "1780",
            label: "The earlier year the marker prints for Jacob Kelley.",
            why: "The marker says this house was the home of Jacob Kelley (1780-1874).",
          },
          {
            id: "headquarters",
            year: "March 2-3, 1865",
            label: "The house is used as a Union headquarters.",
            why: "The marker says the house was used as a Union headquarters on March 2-3, 1865 by Major-General John E. Smith, Commander of the Third Division, Fifteenth Army Corps.",
          },
          {
            id: "later",
            year: "1874",
            label: "The later year the marker prints for Jacob Kelley.",
            why: "The marker prints 1874 as the later year for Jacob Kelley (1780-1874).",
          },
        ],
        ["headquarters", "later", "early"],
      ),
      takeaway([
        "This house, home of Jacob Kelley (1780-1874), was used as a Union headquarters on March 2-3, 1865 by Major-General John E. Smith, Commander of the Third Division, Fifteenth Army Corps.",
        "During the encampment by Federal forces, the mills near Kelley Town were run for the benefit of the Third Division.",
        "Foraging parties roamed the area.",
      ]),
    ],
  ),
  lesson(
    "16-09",
    "First public academy in St. David's Parish",
    "St. David's Academy timeline",
    [
      cited("16-09", "St. David's Academy", "front"),
      span(
        '"9 years" is 1786 minus 1777, the years the marker prints for the organization of the St. David\'s Society and the building of the academy.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "academy",
        kicker: "1777-1786",
        title: "Built in the parish in 1786",
        partLabel: "the first academy",
        art: art(
          "m1609-academy.jpg",
          "Illustration of a small wooden academy in pines. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "society",
            label: "1777 and 1778",
            x: 32,
            y: 46,
            fact: "The St. David's Society, organized in 1777 and chartered in 1778, built the first public academy in St. David's Parish.",
          },
          {
            id: "built",
            label: "1786",
            x: 74,
            y: 56,
            fact: "The society built the first public academy in St. David's Parish ¾ mile northeast in 1786. Alexander McIntosh, George Hicks, Abel Kolb, William Pegues, and Thomas Evans were early officers.",
          },
        ],
      },
      {
        kind: "scene",
        id: "site",
        kicker: "About 1840",
        title: "Removed, then a building in 1957",
        partLabel: "this site",
        art: art(
          "m1609-building.jpg",
          "Illustration of a plain brick school building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "removed",
            label: "About 1840",
            x: 32,
            y: 48,
            fact: "The academy was removed to this site about 1840.",
          },
          {
            id: "erected",
            label: "1957",
            x: 74,
            y: 40,
            fact: "The present building was erected in 1957.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1777-1786",
        title: "Years from the society to the academy",
        partLabel: "9 years",
        value: 9,
        unit: "years",
        meant:
          "What this meant: 1786 comes 9 years after 1777. That is the stretch from the year the St. David's Society was organized to the year it built the first public academy in St. David's Parish.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1609-academy.jpg",
          "Illustration of a small wooden academy in pines. Not a historical photograph.",
        ),
        nowArt: art(
          "m1609-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small wooden academy, for the first public academy the marker says was built in St. David's Parish in 1786. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1777",
            label: "The St. David's Society is organized, then chartered.",
            why: "The marker says the St. David's Society was organized in 1777 and chartered in 1778.",
          },
          {
            id: "built",
            year: "1786",
            label: "The first public academy in St. David's Parish is built.",
            why: "The marker says the society built the first public academy in St. David's Parish ¾ mile northeast in 1786.",
          },
          {
            id: "removed",
            year: "About 1840",
            label: "The academy is removed to this site.",
            why: "The marker says the academy was removed to this site about 1840.",
          },
          {
            id: "erected",
            year: "1957",
            label: "The present building is erected.",
            why: "The marker says the present building was erected in 1957.",
          },
        ],
        ["removed", "organized", "erected", "built"],
      ),
      takeaway([
        "The St. David's Society, organized in 1777 and chartered in 1778, built the first public academy in St. David's Parish ¾ mile northeast in 1786.",
        "Alexander McIntosh, George Hicks, Abel Kolb, William Pegues, and Thomas Evans were early officers.",
        "The academy was removed to this site about 1840 and the present building was erected in 1957.",
      ]),
    ],
  ),
];
