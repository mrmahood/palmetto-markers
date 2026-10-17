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

export const charlestonLessonsL: MarkerLesson[] = [
  lesson(
    "10-57",
    "The campus since 1937",
    "Jenkins Orphanage timeline",
    [
      cited("10-57", "Jenkins Orphanage", "front and back"),
      span(
        '"46 years" is 1937 minus 1891, the years the marker prints for housing in the old Marine Hospital on Franklin Street downtown.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "home",
        kicker: "1891",
        title: "Established in Charleston",
        partLabel: "the orphanage",
        art: art(
          "m1057-home.jpg",
          "Illustration of an orphanage building. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1891",
            x: 32,
            y: 54,
            fact: "Since 1937 this has been the campus of the Jenkins Orphanage, established in Charleston in 1891 by Rev. Daniel Joseph Jenkins (1862-1937). Jenkins, a Baptist minister, founded this orphanage for African American children with aid from the city.",
          },
          {
            id: "hospital",
            label: "1891-1937",
            x: 74,
            y: 42,
            fact: "Housed in the old Marine Hospital on Franklin Street downtown 1891-1937, it also included an institute to teach and train children between the ages of 3 and 20. More than 500 lived there by 1896.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1937",
        title: "The band, then this campus",
        partLabel: "the campus yard",
        art: art(
          "m1057-yard.jpg",
          "Illustration of a campus yard and dormitory wings. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "band",
            label: "The band",
            x: 32,
            y: 48,
            fact: "The Jenkins Orphanage Band played concerts across the U.S. and Europe for more than 30 years to help fund the orphanage. The band, taught by Hatsie Logan and Eugene Mikell, is prominent in the early history of jazz; alumni Cat Anderson, Freddie Green, and Jabbo Smith played for Duke Ellington, Count Basie, and others.",
          },
          {
            id: "moved",
            label: "1937",
            x: 74,
            y: 58,
            fact: "The orphanage moved here in 1937, and its offices and dorms were built by the City of Charleston. Those historic buildings burned in the 1980s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1891-1937",
        title: "Years at the old Marine Hospital",
        partLabel: "46 years",
        value: 46,
        unit: "years",
        meant:
          "What this meant: 1937 comes 46 years after 1891. Those are the years the marker prints for housing in the old Marine Hospital on Franklin Street downtown.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1057-home.jpg",
          "Illustration of an orphanage building. Not a historical photograph.",
        ),
        nowArt: art(
          "m1057-today.jpg",
          "Illustration of a marker beside a campus building. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an orphanage building, for the campus the marker says has been here since 1937. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a campus building. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1891",
            label: "The orphanage is established in Charleston.",
            why: "The marker says it was established in Charleston in 1891 by Rev. Daniel Joseph Jenkins (1862-1937) and housed in the old Marine Hospital on Franklin Street downtown 1891-1937.",
          },
          {
            id: "lived",
            year: "1896",
            label: "More than 500 lived there.",
            why: "The marker says more than 500 lived there by 1896. It also included an institute to teach and train children between the ages of 3 and 20.",
          },
          {
            id: "moved",
            year: "1937",
            label: "The orphanage moves to this campus.",
            why: "The marker says that since 1937 this has been the campus, that the orphanage moved here in 1937, and that its offices and dorms were built by the City of Charleston.",
          },
          {
            id: "burned",
            year: "the 1980s",
            label: "Those historic buildings burn.",
            why: "The marker says those historic buildings burned in the 1980s.",
          },
        ],
        ["burned", "founded", "moved", "lived"],
      ),
      takeaway([
        "Since 1937 this has been the campus of the Jenkins Orphanage, established in Charleston in 1891 by Rev. Daniel Joseph Jenkins (1862-1937). Jenkins, a Baptist minister, founded this orphanage for African American children with aid from the city.",
        "Housed in the old Marine Hospital on Franklin Street downtown 1891-1937, it also included an institute to teach and train children between the ages of 3 and 20. More than 500 lived there by 1896.",
        "The Jenkins Orphanage Band played concerts across the U.S. and Europe for more than 30 years to help fund the orphanage. The orphanage moved here in 1937, and its offices and dorms were built by the City of Charleston. Those historic buildings burned in the 1980s.",
      ]),
    ],
  ),
  lesson(
    "10-58",
    "Built on Legare's Point",
    "Battery Haskell timeline",
    [
      cited("10-58", "Battery Haskell", "front and back"),
      span(
        '"2 years" is 1865 minus 1863, the years the marker prints for the evacuation and the building of the battery.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "battery",
        kicker: "1863",
        title: "All that remains of the fortification",
        partLabel: "the battery",
        art: art(
          "m1058-battery.jpg",
          "Illustration of a two-gun earthwork and magazine. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "remains",
            label: "1863",
            x: 32,
            y: 52,
            fact: "This two-gun Confederate artillery battery and magazine is all that remains of Battery Haskell, a large fortification built on Legare's Point in 1863 to help defend James and Morris Islands.",
          },
          {
            id: "named",
            label: "July 10, 1863",
            x: 74,
            y: 42,
            fact: "This two-gun battery was just behind the left flank of Battery Haskell, named for Capt. Charles T. Haskell, Jr. of the 1st S.C. Infantry, mortally wounded on Morris Island July 10, 1863.",
          },
        ],
      },
      {
        kind: "scene",
        id: "marsh",
        kicker: "1865",
        title: "Guns, then evacuation",
        partLabel: "the marsh",
        art: art(
          "m1058-marsh.jpg",
          "Illustration of a marsh fortification. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "guns",
            label: "Early 1865",
            x: 32,
            y: 48,
            fact: 'Battery Haskell, "a massive open work," was built for twelve guns. In early 1865 its armament was one 8-inch smoothbore cannon, one 32-pounder smoothbore cannon, and two 10-inch mortars.',
          },
          {
            id: "left",
            label: "February 17, 1865",
            x: 74,
            y: 40,
            fact: "It and the rest of Charleston's defenses were evacuated February 17, 1865. Battery Haskell was gradually demolished from the 1920s to the 1960s for farm use and later for residential development.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1863-1865",
        title: "Years from the building to the evacuation",
        partLabel: "2 years",
        value: 2,
        unit: "years",
        meant:
          "What this meant: 1865 comes 2 years after 1863. Those are the years the marker prints for the evacuation and the building of the battery.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1058-battery.jpg",
          "Illustration of a two-gun earthwork and magazine. Not a historical photograph.",
        ),
        nowArt: art(
          "m1058-today.jpg",
          "Illustration of a marker by a marsh earthwork. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an earthwork battery, for the fortification the marker says was built on Legare's Point in 1863. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a marsh earthwork. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1863",
            label: "Battery Haskell is built on Legare's Point.",
            why: "The marker says a large fortification was built on Legare's Point in 1863 to help defend James and Morris Islands, and that it was named for Capt. Charles T. Haskell, Jr. of the 1st S.C. Infantry, mortally wounded on Morris Island July 10, 1863.",
          },
          {
            id: "armed",
            year: "Early 1865",
            label: "Its armament is one 8-inch smoothbore, one 32-pounder, and two 10-inch mortars.",
            why: 'The marker says that in early 1865 its armament was one 8-inch smoothbore cannon, one 32-pounder smoothbore cannon, and two 10-inch mortars. Battery Haskell, "a massive open work," was built for twelve guns.',
          },
          {
            id: "evacuated",
            year: "February 17, 1865",
            label: "It is evacuated with the rest of Charleston's defenses.",
            why: "The marker says it and the rest of Charleston's defenses were evacuated February 17, 1865.",
          },
          {
            id: "demolished",
            year: "1920s to the 1960s",
            label: "Battery Haskell is gradually demolished.",
            why: "The marker says Battery Haskell was gradually demolished from the 1920s to the 1960s for farm use and later for residential development.",
          },
        ],
        ["demolished", "built", "evacuated", "armed"],
      ),
      takeaway([
        "This two-gun Confederate artillery battery and magazine is all that remains of Battery Haskell, a large fortification built on Legare's Point in 1863 to help defend James and Morris Islands.",
        'This two-gun battery was just behind the left flank of Battery Haskell, named for Capt. Charles T. Haskell, Jr. of the 1st S.C. Infantry, mortally wounded on Morris Island July 10, 1863. Battery Haskell, "a massive open work," was built for twelve guns.',
        "In early 1865 its armament was one 8-inch smoothbore cannon, one 32-pounder smoothbore cannon, and two 10-inch mortars. It and the rest of Charleston's defenses were evacuated February 17, 1865. Battery Haskell was gradually demolished from the 1920s to the 1960s for farm use and later for residential development.",
      ]),
    ],
  ),
  lesson(
    "10-59",
    "Earthworks on James Island",
    "Battery Cheves timeline",
    [
      cited("10-59", "Battery Cheves", "front and back"),
      span(
        '"119 years" is 1982 minus 1863, the years the marker prints for the National Register listing and the building of the battery.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "battery",
        kicker: "Summer 1863",
        title: "Named for Capt. Langdon Cheves",
        partLabel: "the battery",
        art: art(
          "m1059-battery.jpg",
          "Illustration of a four-gun earthwork battery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Summer 1863",
            x: 32,
            y: 50,
            fact: "This four-gun Confederate artillery battery was one of several earthworks built on the southeastern shore of James Island in the summer of 1863. Built between Battery Simkins and Battery Haskell.",
          },
          {
            id: "named",
            label: "July 10, 1863",
            x: 74,
            y: 42,
            fact: "This battery was named for Capt. Langdon Cheves, an engineer who designed Battery Wagner on Morris Island and who was killed during the Federal assault there on July 10, 1863.",
          },
        ],
      },
      {
        kind: "scene",
        id: "marsh",
        kicker: "1865",
        title: "An explosion, then the Register",
        partLabel: "the shore",
        art: art(
          "m1059-marsh.jpg",
          "Illustration of shore earthworks and marsh. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "explosion",
            label: "September 15, 1863",
            x: 32,
            y: 48,
            fact: "The battery assisted in the defense of James and Morris Islands, and its armament in 1863 was four 8-inch smoothbore naval guns. A magazine explosion on September 15, 1863 killed five men and wounded two.",
          },
          {
            id: "listed",
            label: "1982",
            x: 74,
            y: 40,
            fact: "Battery Cheves and the rest of Charleston's defenses were evacuated February 17, 1865. The battery was listed in the National Register of Historic Places in 1982.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1863-1982",
        title: "Years from the building to the Register",
        partLabel: "119 years",
        value: 119,
        unit: "years",
        meant:
          "What this meant: 1982 comes 119 years after 1863. Those are the years the marker prints for the National Register listing and the building of the battery.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1059-battery.jpg",
          "Illustration of a four-gun earthwork battery. Not a historical photograph.",
        ),
        nowArt: art(
          "m1059-today.jpg",
          "Illustration of a marker by a shore earthwork. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a four-gun earthwork, for the battery the marker says was built on James Island in the summer of 1863. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker by a shore earthwork. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "Summer 1863",
            label: "The battery is built on James Island and named for Capt. Langdon Cheves.",
            why: "The marker says it was one of several earthworks built on the southeastern shore of James Island in the summer of 1863, between Battery Simkins and Battery Haskell, and was named for Capt. Langdon Cheves, an engineer who designed Battery Wagner on Morris Island and who was killed during the Federal assault there on July 10, 1863.",
          },
          {
            id: "explosion",
            year: "September 15, 1863",
            label: "A magazine explosion kills five men and wounds two.",
            why: "The marker says a magazine explosion on September 15, 1863 killed five men and wounded two. Its armament in 1863 was four 8-inch smoothbore naval guns.",
          },
          {
            id: "evacuated",
            year: "February 17, 1865",
            label: "The battery is evacuated.",
            why: "The marker says Battery Cheves and the rest of Charleston's defenses were evacuated February 17, 1865.",
          },
          {
            id: "listed",
            year: "1982",
            label: "It is listed in the National Register of Historic Places.",
            why: "The marker says the battery was listed in the National Register of Historic Places in 1982.",
          },
        ],
        ["listed", "built", "evacuated", "explosion"],
      ),
      takeaway([
        "This four-gun Confederate artillery battery was one of several earthworks built on the southeastern shore of James Island in the summer of 1863. Built between Battery Simkins and Battery Haskell, this battery was named for Capt. Langdon Cheves, an engineer who designed Battery Wagner on Morris Island and who was killed during the Federal assault there on July 10, 1863.",
        "The battery assisted in the defense of James and Morris Islands, and its armament in 1863 was four 8-inch smoothbore naval guns. A magazine explosion on September 15, 1863 killed five men and wounded two.",
        "Battery Cheves and the rest of Charleston's defenses were evacuated February 17, 1865. The battery was listed in the National Register of Historic Places in 1982.",
      ]),
    ],
  ),
  lesson(
    "10-60",
    "Owned by the Izard family",
    "The Elms timeline",
    [
      cited("10-60", "The Elms", "front and back"),
      span(
        '"62 years" is 1804 minus 1742, the years the marker prints for Ralph Izard III.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1704",
        title: "A tract on Goose Creek",
        partLabel: "the house",
        art: art(
          "m1060-house.jpg",
          "Illustration of a plantation house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "bought",
            label: "1704",
            x: 32,
            y: 52,
            fact: "The Elms, an inland rice plantation on the headwaters of Goose Creek, was owned by the Izard family for more than 150 years. In 1704 Ralph Izard (d. 1711), member of the Commons House of Assembly, bought a 250-acre tract here, expanding it to more than 500 acres.",
          },
          {
            id: "rice",
            label: "Ralph II",
            x: 74,
            y: 42,
            fact: "His son Ralph II (d. 1743) also served in the Assembly and on the Royal Council. The first to plant rice at The Elms, he enlarged it to more than 2,700 acres.",
          },
        ],
      },
      {
        kind: "scene",
        id: "oaks",
        kicker: "1818",
        title: "Elms, live oaks, and the house",
        partLabel: "the avenue",
        art: art(
          "m1060-oaks.jpg",
          "Illustration of an avenue of elms and live oaks. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "third",
            label: "1742-1804",
            x: 32,
            y: 48,
            fact: "Ralph Izard III (1742-1804) lent money to the Patriot cause and later served in the Continental Congress. A state representative after the war, then U.S. Senator, Izard was briefly President Pro Tempore of the Senate.",
          },
          {
            id: "avenue",
            label: "1818 and 1886",
            x: 74,
            y: 40,
            fact: 'An 1818 visitor to The Elms described its "avenue of lofty elms & of loftier live oaks." Its ca. 1718 house, later rebuilt after a fire, was virtually destroyed by the Charleston earthquake of 1886.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1742-1804",
        title: "Years printed for Ralph Izard III",
        partLabel: "62 years",
        value: 62,
        unit: "years",
        meant:
          "What this meant: 1804 comes 62 years after 1742. Those are the years the marker prints for Ralph Izard III.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1060-house.jpg",
          "Illustration of a plantation house. Not a historical photograph.",
        ),
        nowArt: art(
          "m1060-today.jpg",
          "Illustration of a marker among oaks. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a plantation house, for the ca. 1718 house the marker says stood at The Elms. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker among oaks. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "bought",
            year: "1704",
            label: "Ralph Izard buys a 250-acre tract here.",
            why: "The marker says in 1704 Ralph Izard (d. 1711), member of the Commons House of Assembly, bought a 250-acre tract here, expanding it to more than 500 acres. The Elms was owned by the Izard family for more than 150 years.",
          },
          {
            id: "rice",
            year: "1743",
            label: "Ralph II dies.",
            why: "The marker gives his son Ralph II as (d. 1743). The first to plant rice at The Elms, he enlarged it to more than 2,700 acres. The marker gives Ralph Izard III as (1742-1804).",
          },
          {
            id: "visitor",
            year: "1818",
            label: "A visitor describes the avenue of elms and live oaks.",
            why: 'The marker says an 1818 visitor to The Elms described its "avenue of lofty elms & of loftier live oaks."',
          },
          {
            id: "quake",
            year: "1886",
            label: "The Charleston earthquake virtually destroys the house.",
            why: "The marker says its ca. 1718 house, later rebuilt after a fire, was virtually destroyed by the Charleston earthquake of 1886.",
          },
        ],
        ["quake", "bought", "visitor", "rice"],
      ),
      takeaway([
        "The Elms, an inland rice plantation on the headwaters of Goose Creek, was owned by the Izard family for more than 150 years. In 1704 Ralph Izard (d. 1711), member of the Commons House of Assembly, bought a 250-acre tract here, expanding it to more than 500 acres.",
        "His son Ralph II (d. 1743) also served in the Assembly and on the Royal Council. The first to plant rice at The Elms, he enlarged it to more than 2,700 acres. Ralph Izard III (1742-1804) lent money to the Patriot cause and later served in the Continental Congress.",
        'A state representative after the war, then U.S. Senator, Izard was briefly President Pro Tempore of the Senate. An 1818 visitor to The Elms described its "avenue of lofty elms & of loftier live oaks." Its ca. 1718 house, later rebuilt after a fire, was virtually destroyed by the Charleston earthquake of 1886.',
      ]),
    ],
  ),
];
