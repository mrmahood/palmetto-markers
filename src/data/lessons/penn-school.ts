import type { MarkerLesson } from "./types";

/** Facts for marker 07-15 only. Every sentence is taken from that marker’s
 * inscription or its location line in the South Carolina Historical Marker
 * Program record shipped with this app. The 86-year figure is the difference
 * between the two years the inscription prints: 1948 − 1862. */

const arrival = {
  src: "/images/lessons/penn-arrival.jpg",
  label: "Illustration of a boat and two people arriving on a marshy island.",
};

const school = {
  src: "/images/lessons/penn-school-print.jpg",
  label: "Illustration of a small schoolhouse and a teacher.",
};

const fields = {
  src: "/images/lessons/penn-fields.jpg",
  label: "Illustration of crop rows beside a workshop and school.",
};

const today = {
  src: "/images/lessons/penn-today.jpg",
  label: "Illustration of a historical marker in front of a low building.",
};

export const pennLesson: MarkerLesson = {
  markerId: "07-15",
  title: "A Year at Penn School",
  intro:
    "Move through the years. Tap a person, a boat, a school, or a field. About two minutes. Every fact is from this marker.",
  timelineLabel: "Penn School timeline",
  sources: [
    {
      id: "inscription",
      label:
        "South Carolina Historical Marker 07-15, “Penn School,” front and back inscriptions. South Carolina Department of Archives and History, Historical Marker Program. Sponsored by the Penn Club and the S.C. Department of Parks, Recreation, and Tourism. Erected 1981.",
    },
    {
      id: "place",
      label:
        "Location line for marker 07-15 in the same program record: in front of the Cope Administration Building at Penn Center, Land’s End Road / Martin Luther King, Jr. Drive (S.C. Sec. Rd. 7-45), St. Helena Island, Beaufort County.",
    },
    {
      id: "span",
      label:
        "“86 years” is not a separate historical claim. It is 1948 minus 1862, the two years printed on the marker.",
    },
  ],
  panels: [
    {
      kind: "scene",
      id: "arrival",
      kicker: "1861",
      title: "After the islands were occupied",
      partLabel: "1861 arrival",
      art: arrival,
      hotspots: [
        {
          id: "boat",
          label: "Boat arriving at the Sea Islands",
          x: 34,
          y: 58,
          fact: "In 1861, Union forces occupied the Sea Islands. After that, Laura Towne and Ellen Murray, two northerners, came to help the freed people of this area.",
        },
        {
          id: "teachers",
          label: "Laura Towne and Ellen Murray",
          x: 80,
          y: 50,
          fact: "Towne and Murray established Penn School here in 1862. The marker names them as the founders who came to help freed people.",
        },
      ],
    },
    {
      kind: "scene",
      id: "school",
      kicker: "1862",
      title: "A school opens on St. Helena",
      partLabel: "1862 school",
      art: school,
      hotspots: [
        {
          id: "house",
          label: "The schoolhouse",
          x: 46,
          y: 52,
          fact: "Penn School opened in 1862. The marker calls it one of the first schools for Black people in the South.",
        },
        {
          id: "forten",
          label: "Charlotte Forten",
          x: 71,
          y: 62,
          fact: "Charlotte Forten traveled from Massachusetts to teach. The marker calls her the earliest known Black teacher at the school, and says she came to help her people.",
        },
      ],
    },
    {
      kind: "numbers",
      id: "numbers",
      kicker: "1862–1948",
      title: "How long the school stood",
      partLabel: "years in operation",
      value: 86,
      unit: "years",
      meant: "What this meant: 1948 comes 86 years after 1862. That is the stretch from the opening until the program joined the Beaufort County school system.",
    },
    {
      kind: "scene",
      id: "fields",
      kicker: "1901",
      title: "A new kind of school",
      partLabel: "1901 reorganization",
      art: fields,
      hotspots: [
        {
          id: "rows",
          label: "Agricultural fields",
          x: 30,
          y: 70,
          fact: "In 1901 Penn was reorganized as Penn Normal, Industrial and Agricultural School. The marker says this change used ideas of education found at Tuskegee and Hampton Institutes.",
        },
        {
          id: "workshop",
          label: "The reorganized school",
          x: 76,
          y: 44,
          fact: "After that reorganization, the marker says Penn became an international model.",
        },
      ],
    },
    {
      kind: "compare",
      id: "compare",
      kicker: "Then and now",
      title: "The same ground",
      partLabel: "then and now",
      thenArt: school,
      nowArt: today,
      thenCaption:
        "Illustration of a school on the island, for the Penn School the marker says opened in 1862. Not a historical photograph.",
      nowCaption:
        "Illustration of a marker in front of a building, for the spot the record names: the Cope Administration Building at Penn Center. Not a photograph of the site today.",
    },
    {
      kind: "order",
      id: "task",
      kicker: "Try it",
      title: "Put four events in order",
      partLabel: "put events in order",
      prompt: "Tap the earliest event first. The marker is the answer key.",
      doneLine: "That’s the order on the marker.",
      events: [
        {
          id: "occupy",
          year: "1861",
          label: "Union forces occupy the Sea Islands.",
          why: "The marker starts here. Occupation in 1861 comes before the school.",
        },
        {
          id: "open",
          year: "1862",
          label: "Penn School opens. Charlotte Forten comes from Massachusetts.",
          why: "Towne and Murray established the school in 1862. Forten is the earliest known Black teacher named on the marker.",
        },
        {
          id: "reorg",
          year: "1901",
          label: "It becomes Penn Normal, Industrial and Agricultural School.",
          why: "The marker dates that reorganization to 1901 and says Penn became an international model.",
        },
        {
          id: "county",
          year: "1948",
          label: "The program moves to the Beaufort County school system.",
          why: "The marker says the program was removed to the county system in 1948.",
        },
      ],
      offer: ["reorg", "occupy", "county", "open"],
    },
    {
      kind: "takeaway",
      id: "takeaway",
      kicker: "Takeaway",
      title: "3 things to remember",
      partLabel: "three things to remember",
      lines: [
        "In 1862 Laura Towne and Ellen Murray opened Penn School for freed people on St. Helena Island. Charlotte Forten came from Massachusetts and is the earliest known Black teacher named on the marker.",
        "In 1901 the school was reorganized as Penn Normal, Industrial and Agricultural School, using ideas from Tuskegee and Hampton. The marker says it became an international model.",
        "In 1948 the program moved into the Beaufort County school system. The marker stands at Penn Center, in front of the Cope Administration Building.",
      ],
    },
  ],
};
