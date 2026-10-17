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

export const charlestonLessonsG: MarkerLesson[] = [
  lesson(
    "10-32",
    "A Navy rifle range near here",
    "Rifle Range Road timeline",
    [
      cited("10-32", "Rifle Range Road", "front"),
      span(
        '"18 years" is 1937 minus 1919, the years the marker prints for use of the site until 1937 and after 1919.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "road",
        kicker: "World War I",
        title: "Built near here on an old range",
        partLabel: "the road",
        art: art(
          "m1032-road.jpg",
          "Illustration of a coastal road and palmettos. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "navy",
            label: "World War I",
            x: 32,
            y: 48,
            fact: "A U.S. Navy rifle range was built near here during World War I.",
          },
          {
            id: "old",
            label: "The old range",
            x: 74,
            y: 42,
            fact: "It was built on the site of an old S.C. National Guard firing range.",
          },
        ],
      },
      {
        kind: "scene",
        id: "range",
        kicker: "1919-1937",
        title: "Targets, buildings, and later use",
        partLabel: "the rifle range",
        art: art(
          "m1032-range.jpg",
          "Illustration of a rifle range, barracks, and a mess hall. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "included",
            label: "What it included",
            x: 32,
            y: 50,
            fact: "Included were 100 targets, 2 armories, a 600-seat mess hall, 12 barracks and auxiliary buildings.",
          },
          {
            id: "used",
            label: "After 1919",
            x: 74,
            y: 40,
            fact: "After 1919 the 100-acre site leased from George F. Goblet, now Harborgate Shores, was used by the National Guard, Army Reserves, and Citadel cadets until 1937.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1919-1937",
        title: "Years from 1919 to 1937",
        partLabel: "18 years",
        value: 18,
        unit: "years",
        meant:
          "What this meant: 1937 comes 18 years after 1919. Those are the years the marker prints for use of the site until 1937 and after 1919.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1032-road.jpg",
          "Illustration of a coastal road and palmettos. Not a historical photograph.",
        ),
        nowArt: art(
          "m1032-today.jpg",
          "Illustration of a marker by a road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a coastal road, for the place the marker says a U.S. Navy rifle range was built near here during World War I. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "old",
            year: "The old range",
            label: "An old S.C. National Guard firing range is on the site.",
            why: "The marker says the Navy rifle range was built on the site of an old S.C. National Guard firing range.",
          },
          {
            id: "navy",
            year: "World War I",
            label: "A U.S. Navy rifle range is built near here.",
            why: "The marker says a U.S. Navy rifle range was built near here during World War I. Included were 100 targets, 2 armories, a 600-seat mess hall, 12 barracks and auxiliary buildings.",
          },
          {
            id: "used",
            year: "After 1919",
            label: "The National Guard, Army Reserves, and Citadel cadets use the site.",
            why: "The marker says that after 1919 the 100-acre site leased from George F. Goblet, now Harborgate Shores, was used by the National Guard, Army Reserves, and Citadel cadets until 1937.",
          },
          {
            id: "end",
            year: "1937",
            label: "That use of the site ends.",
            why: "The marker says the site was used until 1937.",
          },
        ],
        ["end", "old", "used", "navy"],
      ),
      takeaway([
        "A U.S. Navy rifle range was built near here during World War I on the site of an old S.C. National Guard firing range.",
        "Included were 100 targets, 2 armories, a 600-seat mess hall, 12 barracks and auxiliary buildings.",
        "After 1919 the 100-acre site leased from George F. Goblet, now Harborgate Shores, was used by the National Guard, Army Reserves, and Citadel cadets until 1937.",
      ]),
    ],
  ),
  lesson(
    "10-33",
    "Chartered in 1886, revoked in 1936",
    "Maryville timeline",
    [
      cited("10-33", "Maryville", "front"),
      span(
        '"50 years" is 1936 minus 1886, the years the marker prints for the revocation of the town charter and the chartering of the town.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "town",
        kicker: "1886",
        title: "A town on an older site",
        partLabel: "the town",
        art: art(
          "m1033-town.jpg",
          "Illustration of a small town street of wooden houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "chartered",
            label: "1886",
            x: 32,
            y: 48,
            fact: "The town of Maryville was chartered in 1886.",
          },
          {
            id: "site",
            label: "1670-99",
            x: 74,
            y: 42,
            fact: "It included the site of the original English settlement in S.C. and the plantation owned by the Lords Proprietors 1670-99.",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1880s-1936",
        title: "Lots, a name, and a revoked charter",
        partLabel: "the houses",
        art: art(
          "m1033-houses.jpg",
          "Illustration of wooden houses on small lots. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lots",
            label: "The 1880s",
            x: 32,
            y: 50,
            fact: 'When the old plantation was subdivided into lots and sold to local blacks in the 1880s, they established a town named for educator and community leader Mary Mathews Just (d. 1902).',
          },
          {
            id: "revoked",
            label: "1936",
            x: 74,
            y: 40,
            fact: 'Though Maryville was widely seen as a model of black "self-government," the S.C. General Assembly revoked the town charter in 1936.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1886-1936",
        title: "Years from the charter to its revocation",
        partLabel: "50 years",
        value: 50,
        unit: "years",
        meant:
          "What this meant: 1936 comes 50 years after 1886. Those are the years the marker prints for the revocation of the town charter and the chartering of the town.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1033-town.jpg",
          "Illustration of a small town street of wooden houses. Not a historical photograph.",
        ),
        nowArt: art(
          "m1033-today.jpg",
          "Illustration of a marker by a street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small town street, for the town of Maryville the marker says was chartered in 1886. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "proprietors",
            year: "1670",
            label: "The Lords Proprietors own the plantation.",
            why: "The marker says the town included the site of the original English settlement in S.C. and the plantation owned by the Lords Proprietors 1670-99.",
          },
          {
            id: "chartered",
            year: "1886",
            label: "The town of Maryville is chartered.",
            why: "The marker says the town of Maryville was chartered in 1886. When the old plantation was subdivided into lots and sold to local blacks in the 1880s, they established a town named for educator and community leader Mary Mathews Just.",
          },
          {
            id: "died",
            year: "1902",
            label: "Mary Mathews Just dies.",
            why: "The marker names the town for educator and community leader Mary Mathews Just (d. 1902).",
          },
          {
            id: "revoked",
            year: "1936",
            label: "The S.C. General Assembly revokes the town charter.",
            why: 'The marker says that though Maryville was widely seen as a model of black "self-government," the S.C. General Assembly revoked the town charter in 1936.',
          },
        ],
        ["revoked", "proprietors", "died", "chartered"],
      ),
      takeaway([
        "The town of Maryville, chartered in 1886, included the site of the original English settlement in S.C. and the plantation owned by the Lords Proprietors 1670-99.",
        "When the old plantation was subdivided into lots and sold to local blacks in the 1880s, they established a town named for educator and community leader Mary Mathews Just (d. 1902).",
        'Though Maryville was widely seen as a model of black "self-government," the S.C. General Assembly revoked the town charter in 1936.',
      ]),
    ],
  ),
  lesson(
    "10-34",
    "A village established on the creek",
    "Riversville timeline",
    [
      cited("10-34", "Riversville", "front and back"),
      span(
        '"81 years" is 1910 minus 1829, the years the marker prints for the death and birth of Constant H. Rivers.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "town",
        kicker: "1851",
        title: "Fourteen acres and seven lots",
        partLabel: "the village",
        art: art(
          "m1034-town.jpg",
          "Illustration of a small village of wooden houses on a sandy rise. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1851",
            x: 32,
            y: 48,
            fact: "Riversville, an antebellum village of fourteen acres, with seven lots on Savannah (later Secessionville) Creek, was established here in 1851 by Constant H. Rivers (1829-1910).",
          },
          {
            id: "breezes",
            label: "James Island",
            x: 74,
            y: 42,
            fact: 'He believed that the sandy soils and marsh breezes of James Island would protect inhabitants from the "malarious gases" common to the coast during the summer months.',
          },
        ],
      },
      {
        kind: "scene",
        id: "river",
        kicker: "1861-1863",
        title: "Renamed, then a battle nearby",
        partLabel: "the creek",
        art: art(
          "m1034-river.jpg",
          "Illustration of a tidal creek, marsh, and an earthwork. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "battle",
            label: "June 16, 1862",
            x: 32,
            y: 50,
            fact: "The village, renamed Secessionville by early 1861, gave its name to the battle fought nearby on June 16, 1862, in which Confederates repulsed numerous Federal assaults on an earthwork built across the peninsula and crushed Union hopes for an early occupation of Charleston.",
          },
          {
            id: "battery",
            label: "1862 and 1863",
            x: 74,
            y: 40,
            fact: "A water battery overlooking the marsh to the northeast was one of several earthworks built here in 1862 and 1863.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1829-1910",
        title: "Years from the birth year to the death year",
        partLabel: "81 years",
        value: 81,
        unit: "years",
        meant:
          "What this meant: 1910 comes 81 years after 1829. Those are the years the marker prints for Constant H. Rivers, his death year and his birth year.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1034-town.jpg",
          "Illustration of a small village of wooden houses on a sandy rise. Not a historical photograph.",
        ),
        nowArt: art(
          "m1034-today.jpg",
          "Illustration of a marker by a marsh creek. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small village, for Riversville, which the marker says was established here in 1851. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a marsh creek. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1829",
            label: "Constant H. Rivers is born.",
            why: "The marker prints Constant H. Rivers's years as 1829-1910.",
          },
          {
            id: "established",
            year: "1851",
            label: "Riversville is established here.",
            why: 'The marker says Riversville, an antebellum village of fourteen acres, with seven lots on Savannah (later Secessionville) Creek, was established here in 1851 by Constant H. Rivers. He believed that the sandy soils and marsh breezes of James Island would protect inhabitants from the "malarious gases" common to the coast during the summer months.',
          },
          {
            id: "renamed",
            year: "Early 1861",
            label: "The village is renamed Secessionville.",
            why: "The marker says the village was renamed Secessionville by early 1861 and gave its name to the battle fought nearby.",
          },
          {
            id: "battle",
            year: "June 16, 1862",
            label: "The battle is fought nearby.",
            why: "The marker says the battle was fought nearby on June 16, 1862, in which Confederates repulsed numerous Federal assaults on an earthwork built across the peninsula and crushed Union hopes for an early occupation of Charleston. A water battery overlooking the marsh to the northeast was one of several earthworks built here in 1862 and 1863.",
          },
        ],
        ["battle", "born", "renamed", "established"],
      ),
      takeaway([
        "Riversville, an antebellum village of fourteen acres, with seven lots on Savannah (later Secessionville) Creek, was established here in 1851 by Constant H. Rivers (1829-1910).",
        'He believed that the sandy soils and marsh breezes of James Island would protect inhabitants from the "malarious gases" common to the coast during the summer months. The village was renamed Secessionville by early 1861.',
        "The village gave its name to the battle fought nearby on June 16, 1862, in which Confederates repulsed numerous Federal assaults on an earthwork built across the peninsula and crushed Union hopes for an early occupation of Charleston. A water battery overlooking the marsh to the northeast was one of several earthworks built here in 1862 and 1863.",
      ]),
    ],
  ),
  lesson(
    "10-35",
    "Born here at Summer Place",
    "Archibald Rutledge timeline",
    [cited("10-35", "Archibald Rutledge Birthplace", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1883",
        title: "Born in the house called Summer Place",
        partLabel: "the house",
        art: art(
          "m1035-house.jpg",
          "Illustration of a lowcountry house under oaks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "1883",
            x: 32,
            y: 48,
            fact: 'Archibald Hamilton Rutledge (1883-1973), educator, man of letters, and the first poet laureate of S.C., was born at this site, in a house known to the Rutledge family as "Summer Place."',
          },
          {
            id: "taught",
            label: "33 years",
            x: 74,
            y: 42,
            fact: "Rutledge, who grew up here and at Hampton Plantation, taught English for 33 years at Mercersburg Academy, in Mercersburg, Pa. By the 1920s he was well known for his poems, nature articles, hunting tales, essays, and other writings.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1934-1984",
        title: "Laureate, a memoir, and a death here",
        partLabel: "the yard",
        art: art(
          "m1035-yard.jpg",
          "Illustration of an oak-shaded house yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "laureate",
            label: "1934 and 1937",
            x: 32,
            y: 50,
            fact: "Appointed poet laureate in 1934, Rutledge retired in 1937 to the family home at Hampton Plantation, where he graciously received many visitors (Hampton, 7 mi. N, is now a state historic site).",
          },
          {
            id: "memoir",
            label: "1941, 1973, and 1984",
            x: 74,
            y: 40,
            fact: "He is perhaps best known for Home by the River (1941), his affectionate memoir of Hampton and the people, wildlife, and landscape of the Santee Delta. Rutledge died here in 1973 and was inducted into the S.C. Hall of Fame in 1984.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "Mercersburg",
        title: "Years he taught English",
        partLabel: "33 years",
        value: 33,
        unit: "years",
        meant:
          "What this meant: the marker says Rutledge taught English for 33 years at Mercersburg Academy, in Mercersburg, Pa.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1035-house.jpg",
          "Illustration of a lowcountry house under oaks. Not a historical photograph.",
        ),
        nowArt: art(
          "m1035-today.jpg",
          "Illustration of a marker by a house yard. Not a photograph of the site today.",
        ),
        thenCaption:
          'Illustration of a lowcountry house, for the house the marker says was known to the Rutledge family as "Summer Place," where Archibald Hamilton Rutledge was born. Not a historical photograph.',
        nowCaption:
          "Illustration of a marker by a house yard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1883",
            label: "Rutledge is born at this site.",
            why: 'The marker says Archibald Hamilton Rutledge (1883-1973), educator, man of letters, and the first poet laureate of S.C., was born at this site, in a house known to the Rutledge family as "Summer Place." He grew up here and at Hampton Plantation.',
          },
          {
            id: "laureate",
            year: "1934",
            label: "He is appointed poet laureate.",
            why: "The marker says he was appointed poet laureate in 1934. By the 1920s he was well known for his poems, nature articles, hunting tales, essays, and other writings, and he taught English for 33 years at Mercersburg Academy, in Mercersburg, Pa.",
          },
          {
            id: "retired",
            year: "1937",
            label: "He retires to Hampton Plantation.",
            why: "The marker says Rutledge retired in 1937 to the family home at Hampton Plantation, where he graciously received many visitors (Hampton, 7 mi. N, is now a state historic site).",
          },
          {
            id: "died",
            year: "1973",
            label: "Rutledge dies here.",
            why: "The marker says he is perhaps best known for Home by the River (1941), his affectionate memoir of Hampton and the people, wildlife, and landscape of the Santee Delta. Rutledge died here in 1973 and was inducted into the S.C. Hall of Fame in 1984.",
          },
        ],
        ["died", "born", "retired", "laureate"],
      ),
      takeaway([
        'Archibald Hamilton Rutledge (1883-1973), educator, man of letters, and the first poet laureate of S.C., was born at this site, in a house known to the Rutledge family as "Summer Place."',
        "Rutledge, who grew up here and at Hampton Plantation, taught English for 33 years at Mercersburg Academy, in Mercersburg, Pa. By the 1920s he was well known for his poems, nature articles, hunting tales, essays, and other writings.",
        "Appointed poet laureate in 1934, Rutledge retired in 1937 to the family home at Hampton Plantation, where he graciously received many visitors (Hampton, 7 mi. N, is now a state historic site). He is perhaps best known for Home by the River (1941). Rutledge died here in 1973 and was inducted into the S.C. Hall of Fame in 1984.",
      ]),
    ],
  ),
];
