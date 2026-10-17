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

export const charlestonLessonsV: MarkerLesson[] = [
  lesson(
    "10-101",
    "Known locally as the “Porgy House”",
    "Porgy House timeline",
    [cited("10-101", "Porgy House", "front and back")],
    [
      {
        kind: "scene",
        id: "house",
        kicker: "The 1930s",
        title: "A cottage the Heywards owned",
        partLabel: "the cottage",
        art: art(
          "m10101-house.jpg",
          "Illustration of a small cottage. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "cottage",
            label: "7 blocks W",
            x: 32,
            y: 48,
            fact: "In the 1930s author DuBose Heyward and his wife, playwright Dorothy Heyward, owned a cottage 7 blocks W of this location.",
          },
          {
            id: "remains",
            label: "The Porgy House",
            x: 74,
            y: 40,
            fact: "The house where Gershwin stayed was destroyed by a hurricane, but the Heyward home remains and is known locally as the “Porgy House.”",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "Summer 1934",
        title: "A collaboration, then Broadway",
        partLabel: "the yard",
        art: art(
          "m10101-yard.jpg",
          "Illustration of a cottage yard. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "folly",
            label: "Summer 1934",
            x: 32,
            y: 52,
            fact: "During the summer of 1934 American composer and pianist George Gershwin stayed at Folly Beach and collaborated with the Heywards on his folk opera Porgy and Bess (1935), which was based upon DuBose Heyward’s 1925 novel Porgy.",
          },
          {
            id: "broadway",
            label: "1935",
            x: 74,
            y: 42,
            fact: "Both Heyward’s novel and Gershwin’s opera were rare for their time as examples of white writers treating African American subjects as complex figures. During his stay in the Lowcountry Gershwin visited Black churches on James Island and incorporated some of what he saw and heard into his musical production. Porgy and Bess opened on Broadway in 1935 and ran for 124 performances. Today, the opera is perhaps best remembered for the song “Summertime.”",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1935",
        title: "Performances on Broadway",
        partLabel: "124 performances",
        value: 124,
        unit: "performances",
        meant:
          "What this meant: the marker says Porgy and Bess opened on Broadway in 1935 and ran for 124 performances.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10101-house.jpg",
          "Illustration of a small cottage. Not a historical photograph.",
        ),
        nowArt: art(
          "m10101-today.jpg",
          "Illustration of a blank marker on a residential street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small cottage, for the Heyward home the marker says is known locally as the “Porgy House.” Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker on a residential street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "novel",
            year: "1925",
            label: "DuBose Heyward’s novel Porgy.",
            why: "The marker says the folk opera Porgy and Bess (1935) was based upon DuBose Heyward’s 1925 novel Porgy.",
          },
          {
            id: "folly",
            year: "Summer 1934",
            label: "Gershwin stays at Folly Beach and collaborates with the Heywards.",
            why: "The marker says that during the summer of 1934 American composer and pianist George Gershwin stayed at Folly Beach and collaborated with the Heywards on his folk opera Porgy and Bess (1935).",
          },
          {
            id: "broadway",
            year: "1935",
            label: "Porgy and Bess opens on Broadway.",
            why: "The marker says Porgy and Bess opened on Broadway in 1935 and ran for 124 performances.",
          },
        ],
        ["broadway", "novel", "folly"],
      ),
      takeaway([
        "In the 1930s author DuBose Heyward and his wife, playwright Dorothy Heyward, owned a cottage 7 blocks W of this location. The house where Gershwin stayed was destroyed by a hurricane, but the Heyward home remains and is known locally as the “Porgy House.”",
        "During the summer of 1934 American composer and pianist George Gershwin stayed at Folly Beach and collaborated with the Heywards on his folk opera Porgy and Bess (1935), which was based upon DuBose Heyward’s 1925 novel Porgy. Both Heyward’s novel and Gershwin’s opera were rare for their time as examples of white writers treating African American subjects as complex figures.",
        "During his stay in the Lowcountry Gershwin visited Black churches on James Island and incorporated some of what he saw and heard into his musical production. Porgy and Bess opened on Broadway in 1935 and ran for 124 performances. Today, the opera is perhaps best remembered for the song “Summertime.”",
      ]),
    ],
  ),
  lesson(
    "10-102",
    "A dock and warehouse at the fort",
    "Quartermaster Dock timeline",
    [
      cited("10-102", "Sullivans Island Quartermaster Dock", "front"),
      span(
        '"151 years" is 1947 minus 1796, the years the marker prints for the deactivation of the fort and the first building of Fort Sullivan.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "depot",
        kicker: "1796",
        title: "Fort Sullivan, then a new campaign",
        partLabel: "the warehouse",
        art: art(
          "m10102-depot.jpg",
          "Illustration of a waterfront warehouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "1796",
            x: 32,
            y: 46,
            fact: "Fort Sullivan, first built in 1796, was left vacant after the Civil War.",
          },
          {
            id: "campaign",
            label: "1897 and 1902",
            x: 74,
            y: 56,
            fact: "In 1897 a new building campaign began and in 1902 the U.S. Government began expanding the fort to include housing and support facilities.",
          },
        ],
      },
      {
        kind: "scene",
        id: "shore",
        kicker: "c. 1915",
        title: "The dock, the warehouse, and the closing",
        partLabel: "the dock",
        art: art(
          "m10102-shore.jpg",
          "Illustration of a wooden dock along a shore. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "dock",
            label: "c. 1915 and c. 1930",
            x: 32,
            y: 50,
            fact: "The c. 1915 Quartermaster Dock and c. 1930 warehouse here were part of the expansion, which also included an NCO Club and theatre.",
          },
          {
            id: "closed",
            label: "1947",
            x: 74,
            y: 40,
            fact: "The fort was deactivated in 1947 and the property was sold by the War Assets Administration.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1796-1947",
        title: "Years from the first building to deactivation",
        partLabel: "151 years",
        value: 151,
        unit: "years",
        meant:
          "What this meant: 1947 comes 151 years after 1796. Those are the years the marker prints for the deactivation of the fort and the first building of Fort Sullivan.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10102-depot.jpg",
          "Illustration of a waterfront warehouse. Not a historical photograph.",
        ),
        nowArt: art(
          "m10102-today.jpg",
          "Illustration of a blank marker by a marsh shore. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a waterfront warehouse, for the c. 1930 warehouse the marker says was part of the fort’s expansion. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker by a marsh shore. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "built",
            year: "1796",
            label: "Fort Sullivan is first built.",
            why: "The marker says Fort Sullivan was first built in 1796 and was left vacant after the Civil War.",
          },
          {
            id: "campaign",
            year: "1897",
            label: "A new building campaign begins.",
            why: "The marker says that in 1897 a new building campaign began.",
          },
          {
            id: "expand",
            year: "1902",
            label: "The U.S. Government begins expanding the fort.",
            why: "The marker says that in 1902 the U.S. Government began expanding the fort to include housing and support facilities.",
          },
          {
            id: "closed",
            year: "1947",
            label: "The fort is deactivated and the property is sold.",
            why: "The marker says the fort was deactivated in 1947 and the property was sold by the War Assets Administration.",
          },
        ],
        ["closed", "built", "expand", "campaign"],
      ),
      takeaway([
        "Fort Sullivan, first built in 1796, was left vacant after the Civil War.",
        "In 1897 a new building campaign began and in 1902 the U.S. Government began expanding the fort to include housing and support facilities. The c. 1915 Quartermaster Dock and c. 1930 warehouse here were part of the expansion, which also included an NCO Club and theatre.",
        "The fort was deactivated in 1947 and the property was sold by the War Assets Administration.",
      ]),
    ],
  ),
  lesson(
    "10-103",
    "Renamed in honor of Abraham Lincoln",
    "Lincolnville timeline",
    [cited("10-103", "Lincolnville", "front and back")],
    [
      {
        kind: "scene",
        id: "town",
        kicker: "1867",
        title: "Founded along the railroad",
        partLabel: "the town",
        art: art(
          "m10103-town.jpg",
          "Illustration of a small railroad town and a water tank. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "founded",
            label: "1867",
            x: 32,
            y: 46,
            fact: "The Town of Lincolnville was founded in 1867 by seven African American leaders: Daniel Adger, Marc Buffett, Rev. Richard H. Cain, Hector Grant, Rev. Lewis Ruffin Nichols, Rev. M.B. Salters, and Walter Steele.",
          },
          {
            id: "renamed",
            label: "Pump Pond",
            x: 74,
            y: 56,
            fact: "The town was located along the S.C.R.R. and was originally known as Pump Pond because the steam engines would stop here to refill their tanks. It was renamed Lincolnville in honor of Abraham Lincoln. The town was formally incorporated in 1889.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1884",
        title: "Town lots and Rev. R.H. Cain",
        partLabel: "the street of lots",
        art: art(
          "m10103-street.jpg",
          "Illustration of a street of small houses and lots. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "acres",
            label: "500 acres",
            x: 32,
            y: 50,
            fact: "Lincolnville was established as an African American enclave. Rev. R.H. Cain purchased 500 acres, divided it into town lots, and sold to black settlers. By 1884 there were approximately 120 families living here and the town government was composed entirely of African American men.",
          },
          {
            id: "cain",
            label: "1873-5, 1877-9, and 1880",
            x: 74,
            y: 40,
            fact: "In addition to founding the town, Cain also served in the S.C. Senate and the U.S. House (1873-5, 1877-9). He was the first pastor of Emanuel A.M.E. Church after the Civil War and was appointed bishop in 1880.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "The purchase",
        title: "Acres divided into town lots",
        partLabel: "500 acres",
        value: 500,
        unit: "acres",
        meant:
          "What this meant: the marker says Rev. R.H. Cain purchased 500 acres, divided it into town lots, and sold to black settlers.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10103-town.jpg",
          "Illustration of a small railroad town and a water tank. Not a historical photograph.",
        ),
        nowArt: art(
          "m10103-today.jpg",
          "Illustration of a blank marker on a small-town street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small railroad town and a water tank, for the town the marker says was originally known as Pump Pond because steam engines stopped to refill their tanks. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker on a small-town street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "founded",
            year: "1867",
            label: "Seven African American leaders found the town.",
            why: "The marker says the Town of Lincolnville was founded in 1867 by seven African American leaders: Daniel Adger, Marc Buffett, Rev. Richard H. Cain, Hector Grant, Rev. Lewis Ruffin Nichols, Rev. M.B. Salters, and Walter Steele.",
          },
          {
            id: "house",
            year: "1873-5",
            label: "Cain serves in the S.C. Senate and the U.S. House.",
            why: "The marker says that in addition to founding the town, Cain also served in the S.C. Senate and the U.S. House (1873-5, 1877-9).",
          },
          {
            id: "families",
            year: "1884",
            label: "About 120 families are living here.",
            why: "The marker says that by 1884 there were approximately 120 families living here and the town government was composed entirely of African American men.",
          },
          {
            id: "incorporated",
            year: "1889",
            label: "The town is formally incorporated.",
            why: "The marker says the town was formally incorporated in 1889.",
          },
        ],
        ["families", "founded", "incorporated", "house"],
      ),
      takeaway([
        "The Town of Lincolnville was founded in 1867 by seven African American leaders: Daniel Adger, Marc Buffett, Rev. Richard H. Cain, Hector Grant, Rev. Lewis Ruffin Nichols, Rev. M.B. Salters, and Walter Steele. It was renamed Lincolnville in honor of Abraham Lincoln. The town was formally incorporated in 1889.",
        "The town was located along the S.C.R.R. and was originally known as Pump Pond because the steam engines would stop here to refill their tanks. Lincolnville was established as an African American enclave. Rev. R.H. Cain purchased 500 acres, divided it into town lots, and sold to black settlers.",
        "By 1884 there were approximately 120 families living here and the town government was composed entirely of African American men. Cain also served in the S.C. Senate and the U.S. House (1873-5, 1877-9). He was the first pastor of Emanuel A.M.E. Church after the Civil War and was appointed bishop in 1880.",
      ]),
    ],
  ),
  lesson(
    "10-104",
    "The oldest surviving arts association in the Southeast",
    "Carolina Art Association timeline",
    [
      cited("10-104", "Carolina Art Association", "front and back"),
      span(
        '"159 years" is 2016 minus 1857, the years the marker prints for the later expansion of the museum and the establishment of the Carolina Art Association.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "gallery",
        kicker: "1857",
        title: "An association to promote fine arts",
        partLabel: "the association",
        art: art(
          "m10104-gallery.jpg",
          "Illustration of a columned art gallery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "established",
            label: "1857 and 1858",
            x: 32,
            y: 44,
            fact: "In 1857, a group of civic-minded Charlestonians established the Carolina Art Association. The goal of the CAA was to promote fine arts in S.C. The CAA was awarded its official state charter in 1858. The CAA is today the oldest surviving arts association in the Southeast.",
          },
          {
            id: "bequest",
            label: "1888",
            x: 74,
            y: 56,
            fact: "Upon his death in 1888, patron of the arts James S. Gibbes left a bequest that allowed the city and the CAA to build a museum of fine art.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1905",
        title: "The gallery opens, then expands",
        partLabel: "the gallery on the street",
        art: art(
          "m10104-street.jpg",
          "Illustration of an art gallery along a city street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "opened",
            label: "1905",
            x: 32,
            y: 48,
            fact: "Designed by Frank Milburn, the James S. Gibbes Memorial Art Gallery, now the Gibbes Museum of Art, opened in 1905. The Beaux Arts-style building is the oldest purpose-built museum in S.C. and the oldest permanent structure designed for the display of art in the South.",
          },
          {
            id: "expanded",
            label: "1936, 1978, and 2016",
            x: 74,
            y: 40,
            fact: "In 1936, the museum became the first to exhibit the Solomon R. Guggenheim Collection of modern art. It was expanded in 1978 and again in 2016.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1857-2016",
        title: "Years from the association to the later expansion",
        partLabel: "159 years",
        value: 159,
        unit: "years",
        meant:
          "What this meant: 2016 comes 159 years after 1857. Those are the years the marker prints for the later expansion of the museum and the establishment of the Carolina Art Association.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10104-gallery.jpg",
          "Illustration of a columned art gallery. Not a historical photograph.",
        ),
        nowArt: art(
          "m10104-today.jpg",
          "Illustration of a blank marker beside a columned building. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a columned art gallery, for the James S. Gibbes Memorial Art Gallery the marker says opened in 1905. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank marker beside a columned building. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "established",
            year: "1857",
            label: "The Carolina Art Association is established.",
            why: "The marker says that in 1857 a group of civic-minded Charlestonians established the Carolina Art Association. The goal of the CAA was to promote fine arts in S.C.",
          },
          {
            id: "charter",
            year: "1858",
            label: "The CAA is awarded its state charter.",
            why: "The marker says the CAA was awarded its official state charter in 1858 and is today the oldest surviving arts association in the Southeast.",
          },
          {
            id: "bequest",
            year: "1888",
            label: "James S. Gibbes leaves a bequest for a museum.",
            why: "The marker says that upon his death in 1888, patron of the arts James S. Gibbes left a bequest that allowed the city and the CAA to build a museum of fine art.",
          },
          {
            id: "opened",
            year: "1905",
            label: "The James S. Gibbes Memorial Art Gallery opens.",
            why: "The marker says the gallery, designed by Frank Milburn and now the Gibbes Museum of Art, opened in 1905.",
          },
        ],
        ["bequest", "charter", "opened", "established"],
      ),
      takeaway([
        "In 1857, a group of civic-minded Charlestonians established the Carolina Art Association. The goal of the CAA was to promote fine arts in S.C. The CAA was awarded its official state charter in 1858. The CAA is today the oldest surviving arts association in the Southeast.",
        "Upon his death in 1888, patron of the arts James S. Gibbes left a bequest that allowed the city and the CAA to build a museum of fine art. Designed by Frank Milburn, the James S. Gibbes Memorial Art Gallery, now the Gibbes Museum of Art, opened in 1905.",
        "The Beaux Arts-style building is the oldest purpose-built museum in S.C. and the oldest permanent structure designed for the display of art in the South. In 1936, the museum became the first to exhibit the Solomon R. Guggenheim Collection of modern art. It was expanded in 1978 and again in 2016.",
      ]),
    ],
  ),
];
