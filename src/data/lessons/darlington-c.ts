import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Darlington County. Facts are from that marker only.
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

export const darlingtonLessonsC: MarkerLesson[] = [
  lesson(
    "16-10",
    "First postmaster when the post office was established in 1838",
    "Thomas E. Hart House timeline",
    [cited("16-10", "Thomas E. Hart House", "front")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "1817",
        title: "The residence Hartsville was named for",
        partLabel: "the house",
        art: art(
          "m1610-house.jpg",
          "Illustration of a wooden farmhouse among fields. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "settled",
            label: "1817",
            x: 32,
            y: 48,
            fact: "This house was the residence of Captain Thomas Edwards Hart, who settled on these lands in 1817, and for whom Hartsville was named.",
          },
          {
            id: "roles",
            label: "Justice and planter",
            x: 74,
            y: 42,
            fact: "He was a Justice of the Peace, Chairman of the Board of Free Schools, planter, and merchant.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1838",
        title: "First postmaster, then a death in 1842",
        partLabel: "the post office",
        art: art(
          "m1610-yard.jpg",
          "Illustration of a plain wooden building beside a dirt lane. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "post",
            label: "1838",
            x: 32,
            y: 52,
            fact: "He was appointed first Postmaster when the Hartsville Post Office was established in 1838.",
          },
          {
            id: "died",
            label: "1842",
            x: 74,
            y: 40,
            fact: "He died in 1842 at the age of 46.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1842",
        title: "His age at death",
        partLabel: "46 years",
        value: 46,
        unit: "years",
        meant: "What this meant: the marker says he died in 1842 at the age of 46.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1610-house.jpg",
          "Illustration of a wooden farmhouse among fields. Not a historical photograph.",
        ),
        nowArt: art(
          "m1610-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden farmhouse, for the residence of Captain Thomas Edwards Hart, who the marker says settled on these lands in 1817. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "settled",
            year: "1817",
            label: "He settles on these lands.",
            why: "The marker says this house was the residence of Captain Thomas Edwards Hart, who settled on these lands in 1817, and for whom Hartsville was named.",
          },
          {
            id: "post",
            year: "1838",
            label: "He is appointed first Postmaster.",
            why: "The marker says he was a Justice of the Peace, Chairman of the Board of Free Schools, planter, merchant, and was appointed first Postmaster when the Hartsville Post Office was established in 1838.",
          },
          {
            id: "died",
            year: "1842",
            label: "He dies at the age of 46.",
            why: "The marker says he died in 1842 at the age of 46.",
          },
        ],
        ["died", "settled", "post"],
      ),
      takeaway([
        "This house was the residence of Captain Thomas Edwards Hart, who settled on these lands in 1817, and for whom Hartsville was named.",
        "He was a Justice of the Peace, Chairman of the Board of Free Schools, planter, merchant, and was appointed first Postmaster when the Hartsville Post Office was established in 1838.",
        "He died in 1842 at the age of 46.",
      ]),
    ],
  ),
  lesson(
    "16-11",
    "An escape that avoided a Charles Town prison",
    "Samuel Bacot timeline",
    [
      cited("16-11", "Samuel Bacot 1745-1795", "front"),
      span(
        '"10 years" is 1780 minus 1770, the years the marker prints for his being taken prisoner and for settling in the back country.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "fields",
        kicker: "About 1770",
        title: "Settled in the back country",
        partLabel: "the settlement",
        art: art(
          "m1611-fields.jpg",
          "Illustration of a log cabin in open fields and pines. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "settled",
            label: "About 1770",
            x: 32,
            y: 50,
            fact: "Early land records indicate that Samuel Bacot settled in the back country of South Carolina about 1770.",
          },
          {
            id: "militia",
            label: "State Militia",
            x: 74,
            y: 40,
            fact: "He served in the State Militia during the Revolution.",
          },
        ],
      },
      {
        kind: "scene",
        id: "woods",
        kicker: "1780",
        title: "Prisoner, then an escape",
        partLabel: "the escape",
        art: art(
          "m1611-woods.jpg",
          "Illustration of an unmarked stone among pine needles. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "prisoner",
            label: "1780",
            x: 32,
            y: 46,
            fact: "He was taken prisoner by the British in 1780, but with his companions made his escape, avoiding confinement in a Charles Town prison.",
          },
          {
            id: "grave",
            label: "One half mile northeast",
            x: 74,
            y: 58,
            fact: "His grave is one half mile northeast.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1770-1780",
        title: "Years from settling to capture",
        partLabel: "10 years",
        value: 10,
        unit: "years",
        meant:
          "What this meant: 1780 comes 10 years after 1770. The marker says he settled about 1770 and was taken prisoner by the British in 1780.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1611-fields.jpg",
          "Illustration of a log cabin in open fields and pines. Not a historical photograph.",
        ),
        nowArt: art(
          "m1611-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a log cabin in open fields, for the back country where the marker says Samuel Bacot settled about 1770. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "settled",
            year: "About 1770",
            label: "Samuel Bacot settles in the back country.",
            why: "The marker says early land records indicate that Samuel Bacot settled in the back country of South Carolina about 1770.",
          },
          {
            id: "prisoner",
            year: "1780",
            label: "He is taken prisoner, then escapes with his companions.",
            why: "The marker says he served in the State Militia during the Revolution, was taken prisoner by the British in 1780, but with his companions made his escape, avoiding confinement in a Charles Town prison.",
          },
        ],
        ["prisoner", "settled"],
      ),
      takeaway([
        "Early land records indicate that Samuel Bacot settled in the back country of South Carolina about 1770.",
        "He served in the State Militia during the Revolution, was taken prisoner by the British in 1780, but with his companions made his escape, avoiding confinement in a Charles Town prison.",
        "His grave is one half mile northeast.",
      ]),
    ],
  ),
  lesson(
    "16-13",
    "A meeting house destroyed by lightning in 1928",
    "Welsh Neck Church timeline",
    [
      cited("16-13", "Welsh Neck Church", "front and back"),
      span(
        '"85 years" is 1928 minus 1843, the years the marker prints for the lightning that destroyed the second meeting house and for its dedication.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "January 1738",
        title: "Constituted by Welsh from Pennsylvania",
        partLabel: "the first church",
        art: art(
          "m1613-church.jpg",
          "Illustration of a wooden meeting house in a clearing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "constituted",
            label: "January 1738",
            x: 32,
            y: 48,
            fact: "This church, the pioneer center of Baptist influence in the area, was constituted January 1738 by Welsh from Pennsylvania and was originally located about two miles northeast of here. The first pastor was Philip James.",
          },
          {
            id: "incorporated",
            label: "March 17, 1785",
            x: 74,
            y: 40,
            fact: 'It was incorporated March 17, 1785, as the "Baptist Church at the Welsh Neck on Pedee River."',
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "About 1799",
        title: "Moved here, then replaced after lightning",
        partLabel: "this spot",
        art: art(
          "m1613-yard.jpg",
          "Illustration of a brick church on an open lawn. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "relocated",
            label: "About 1799",
            x: 32,
            y: 52,
            fact: "Seat of worship of this Baptist church was relocated here about 1799, on land acquired from Capt. William Dewitt.",
          },
          {
            id: "replaced",
            label: "1928 and 1938",
            x: 74,
            y: 42,
            fact: "The second meeting house on this spot, dedicated in 1843, was destroyed by lightning July 5, 1928 and was replaced by the present structure in 1938.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1843-1928",
        title: "Years from dedication to lightning",
        partLabel: "85 years",
        value: 85,
        unit: "years",
        meant:
          "What this meant: 1928 comes 85 years after 1843. Those are the years the marker gives for the lightning that destroyed the second meeting house and for that house being dedicated.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1613-church.jpg",
          "Illustration of a wooden meeting house in a clearing. Not a historical photograph.",
        ),
        nowArt: art(
          "m1613-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden meeting house, for the church the marker says was constituted January 1738. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "constituted",
            year: "1738",
            label: "The church is constituted.",
            why: "The marker says this church, the pioneer center of Baptist influence in the area, was constituted January 1738 by Welsh from Pennsylvania and was originally located about two miles northeast of here. The first pastor was Philip James.",
          },
          {
            id: "incorporated",
            year: "1785",
            label: "The church is incorporated.",
            why: 'The marker says it was incorporated March 17, 1785, as the "Baptist Church at the Welsh Neck on Pedee River."',
          },
          {
            id: "relocated",
            year: "About 1799",
            label: "The seat of worship is relocated here.",
            why: "The marker says the seat of worship of this Baptist church was relocated here about 1799, on land acquired from Capt. William Dewitt.",
          },
          {
            id: "present",
            year: "1938",
            label: "The present structure replaces the meeting house.",
            why: "The marker says the second meeting house on this spot, dedicated in 1843, was destroyed by lightning July 5, 1928 and was replaced by the present structure in 1938.",
          },
        ],
        ["present", "constituted", "relocated", "incorporated"],
      ),
      takeaway([
        "This church, the pioneer center of Baptist influence in the area, was constituted January 1738 by Welsh from Pennsylvania and was originally located about two miles northeast of here. The first pastor was Philip James.",
        'It was incorporated March 17, 1785, as the "Baptist Church at the Welsh Neck on Pedee River." Seat of worship of this Baptist church was relocated here about 1799, on land acquired from Capt. William Dewitt.',
        "The second meeting house on this spot, dedicated in 1843, was destroyed by lightning July 5, 1928 and was replaced by the present structure in 1938.",
      ]),
    ],
  ),
  lesson(
    "16-14",
    "A grave marked by a cannon barrel",
    "Augustin Wilson timeline",
    [cited("16-14", "Augustin Wilson", "front")],
    [
      {
        kind: "scene",
        id: "creek",
        kicker: "1755",
        title: "Born in 1755, an ensign in 1779",
        partLabel: "his service",
        art: art(
          "m1614-creek.jpg",
          "Illustration of a wooded creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "born",
            label: "1755",
            x: 32,
            y: 48,
            fact: "Augustin Wilson, whose grave is about 150 ft. E. and marked by a partially embedded cannon barrel, was born 1755 in Va.",
          },
          {
            id: "ensign",
            label: "1779",
            x: 74,
            y: 42,
            fact: "During the American Revolution, he served with N.C. troops protecting S.C. against Tories and Indians and as an Ensign at the 1779 Battle of Brier Creek, Ga.",
          },
        ],
      },
      {
        kind: "scene",
        id: "barrel",
        kicker: "Before 1820",
        title: "Moved to South Carolina, died in 1848",
        partLabel: "the grave",
        art: art(
          "m1614-barrel.jpg",
          "Illustration of a cannon barrel partly sunk in the ground. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "moved",
            label: "Before 1820",
            x: 32,
            y: 50,
            fact: "He moved to South Carolina before 1820, where he died in 1848.",
          },
          {
            id: "grave",
            label: "About 150 ft. E.",
            x: 74,
            y: 40,
            fact: "His grave is about 150 ft. E. and marked by a partially embedded cannon barrel.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The grave",
        title: "Feet east to the grave",
        partLabel: "150 feet",
        value: 150,
        unit: "feet",
        meant:
          "What this meant: the marker says his grave is about 150 ft. E. and marked by a partially embedded cannon barrel.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m1614-barrel.jpg",
          "Illustration of a cannon barrel partly sunk in the ground. Not a historical photograph.",
        ),
        nowArt: art(
          "m1614-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a cannon barrel partly sunk in the ground, for the grave the marker says is marked that way. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "born",
            year: "1755",
            label: "Augustin Wilson is born in Va.",
            why: "The marker says Augustin Wilson was born 1755 in Va.",
          },
          {
            id: "brier",
            year: "1779",
            label: "He serves as an Ensign at the Battle of Brier Creek.",
            why: "The marker says that during the American Revolution he served with N.C. troops protecting S.C. against Tories and Indians and as an Ensign at the 1779 Battle of Brier Creek, Ga.",
          },
          {
            id: "moved",
            year: "Before 1820",
            label: "He moves to South Carolina.",
            why: "The marker says he moved to South Carolina before 1820.",
          },
          {
            id: "died",
            year: "1848",
            label: "He dies in South Carolina.",
            why: "The marker says he moved to South Carolina before 1820, where he died in 1848.",
          },
        ],
        ["died", "born", "moved", "brier"],
      ),
      takeaway([
        "Augustin Wilson, whose grave is about 150 ft. E. and marked by a partially embedded cannon barrel, was born 1755 in Va.",
        "During the American Revolution, he served with N.C. troops protecting S.C. against Tories and Indians and as an Ensign at the 1779 Battle of Brier Creek, Ga.",
        "He moved to South Carolina before 1820, where he died in 1848.",
      ]),
    ],
  ),
];
