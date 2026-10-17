import { lessonArt as art } from "./plate";
import type { LessonEvent, LessonPanel, LessonSource, MarkerLesson } from "./types";

/** Richland markers 40-56, 40-58, 40-59, and 40-60. Facts are from that marker only.
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

export const richlandLessonsL: MarkerLesson[] = [
  lesson(
    "40-56",
    "The Golden Acorn trained here",
    "87th Inf Division timeline",
    [
      cited("40-56", "87th Inf Division", "front"),
      span(
        '"2 years" is 1944 minus 1942, the years the marker prints for the training at this site and the activation at Camp McCain.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "camp",
        kicker: "1942",
        title: "Activated at Camp McCain",
        partLabel: "the activation",
        art: art(
          "m4056-camp.jpg",
          "Illustration of a tent camp and a marching column. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "activated",
            label: "Camp McCain",
            x: 32,
            y: 52,
            fact: "Activated at Camp McCain, Miss. in 1942.",
          },
          {
            id: "acorn",
            label: "Golden Acorn",
            x: 74,
            y: 46,
            fact: 'The marker calls it the "Golden Acorn" Division.',
          },
        ],
      },
      {
        kind: "scene",
        id: "record",
        kicker: "1944",
        title: "Trained here, then named in those actions",
        partLabel: "the record",
        art: art(
          "m4056-troops.jpg",
          "Illustration of soldiers by a river. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "trained",
            label: "This site",
            x: 32,
            y: 56,
            fact: 'The "Golden Acorn" Division trained at this site in 1944.',
          },
          {
            id: "actions",
            label: "The actions named",
            x: 74,
            y: 58,
            fact: "The division distinguished itself in the Ardennes, the Rhineland, and Central Europe during the Battle of the Bulge, the assault of the Sauer, Moselle, and Rhine rivers, capture of Coblenz, the cracking of the Siegfried Line, and the final assault into Czechoslovakia.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1942-1944",
        title: "Years from activation to training here",
        partLabel: "2 years",
        value: 2,
        unit: "years",
        meant:
          "What this meant: 1944 comes 2 years after 1942. That is the stretch from the year the division was activated at Camp McCain, Miss. to the year it trained at this site.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4056-camp.jpg",
          "Illustration of a tent camp and a marching column. Not a historical photograph.",
        ),
        nowArt: art(
          "m4056-today.jpg",
          "Illustration of a marker beside a pine road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a tent camp and a marching column, for the division the marker says was activated at Camp McCain, Miss. in 1942 and trained at this site in 1944. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a pine road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "activated",
            year: "1942",
            label: "The division is activated at Camp McCain, Miss.",
            why: "The marker says it was activated at Camp McCain, Miss. in 1942.",
          },
          {
            id: "trained",
            year: "1944",
            label: 'The "Golden Acorn" Division trains at this site.',
            why: 'The marker says the "Golden Acorn" Division trained at this site in 1944.',
          },
          {
            id: "actions",
            year: "Battle of the Bulge",
            label: "It is distinguished in the actions the marker names.",
            why: "The marker says the division distinguished itself in the Ardennes, the Rhineland, and Central Europe during the Battle of the Bulge, the assault of the Sauer, Moselle, and Rhine rivers, capture of Coblenz, the cracking of the Siegfried Line, and the final assault into Czechoslovakia.",
          },
        ],
        ["actions", "activated", "trained"],
      ),
      takeaway([
        'Activated at Camp McCain, Miss. in 1942, the "Golden Acorn" Division trained at this site in 1944.',
        "The division distinguished itself in the Ardennes, the Rhineland, and Central Europe during the Battle of the Bulge.",
        "The marker also names the assault of the Sauer, Moselle, and Rhine rivers, capture of Coblenz, the cracking of the Siegfried Line, and the final assault into Czechoslovakia.",
      ]),
    ],
  ),
  lesson(
    "40-58",
    "First pastor at the Congarees",
    "Grave of Joseph Reese timeline",
    [
      cited("40-58", "Grave of Joseph Reese", "front"),
      span(
        '"50 years" is 1795 minus 1745, the years the marker prints for his death and his coming to the Congarees.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "ministry",
        kicker: "1745",
        title: "From Pennsylvania to the Congarees",
        partLabel: "the ministry",
        art: art(
          "m4058-church.jpg",
          "Illustration of a gathering and a wooden meetinghouse. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "came",
            label: "The Congarees",
            x: 32,
            y: 56,
            fact: "Born in Pennsylvania, he came to the Congarees in 1745, and became a Baptist as a result of Philip Mulkey's preaching.",
          },
          {
            id: "pastor",
            label: "First pastor",
            x: 74,
            y: 44,
            fact: "He was ordained by Oliver Hart and Evan Pugh. Reese won Richard Furman to the Baptists and was the first pastor of Congaree Baptist Church.",
          },
        ],
      },
      {
        kind: "scene",
        id: "grave",
        kicker: "1795",
        title: "Buried two miles southwest",
        partLabel: "the grave",
        art: art(
          "m4058-grave.jpg",
          "Illustration of a blank headstone and a rider on a road. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "buried",
            label: "2 mi. SW",
            x: 32,
            y: 46,
            fact: "Joseph Reese died in 1795 and is buried 2 mi. SW of here.",
          },
          {
            id: "patriot",
            label: "The man named",
            x: 73,
            y: 54,
            fact: "The marker calls him a pioneer Baptist minister and Revolutionary patriot.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1745-1795",
        title: "Years from the Congarees to his death",
        partLabel: "50 years",
        value: 50,
        unit: "years",
        meant:
          "What this meant: 1795 comes 50 years after 1745. That is the stretch from the year he came to the Congarees to the year he died.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4058-grave.jpg",
          "Illustration of a blank headstone and a rider on a road. Not a historical photograph.",
        ),
        nowArt: art(
          "m4058-today.jpg",
          "Illustration of a marker beside a rural road. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a blank headstone and a rider on a road, for the grave the marker says is 2 mi. SW of here. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a rural road. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "came",
            year: "1745",
            label: "Reese comes to the Congarees.",
            why: "The marker says he was born in Pennsylvania and came to the Congarees in 1745.",
          },
          {
            id: "ordained",
            year: "Ordained",
            label: "He becomes a Baptist and is ordained.",
            why: "The marker says he became a Baptist as a result of Philip Mulkey's preaching and was ordained by Oliver Hart and Evan Pugh.",
          },
          {
            id: "pastor",
            year: "First pastor",
            label: "He is the first pastor of Congaree Baptist Church.",
            why: "The marker says Reese won Richard Furman to the Baptists and was the first pastor of Congaree Baptist Church.",
          },
          {
            id: "died",
            year: "1795",
            label: "He dies and is buried 2 mi. SW of here.",
            why: "The marker says Joseph Reese died in 1795 and is buried 2 mi. SW of here.",
          },
        ],
        ["died", "came", "pastor", "ordained"],
      ),
      takeaway([
        "Joseph Reese, pioneer Baptist minister and Revolutionary patriot who died in 1795, is buried 2 mi. SW of here.",
        "Born in Pennsylvania, he came to the Congarees in 1745, became a Baptist as a result of Philip Mulkey's preaching, and was ordained by Oliver Hart and Evan Pugh.",
        "Reese won Richard Furman to the Baptists and was the first pastor of Congaree Baptist Church.",
      ]),
    ],
  ),
  lesson(
    "40-59",
    "Main Street's first name",
    "Richardson Street timeline",
    [cited("40-59", "Richardson Street", "front and back")],
    [
      {
        kind: "scene",
        id: "street",
        kicker: "1704",
        title: "Named for Richard Richardson",
        partLabel: "the street",
        art: art(
          "m4059-street.jpg",
          "Illustration of a business street and a log house. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "main",
            label: "Richardson Street",
            x: 32,
            y: 50,
            fact: "Columbia's chief business street, Main, was first named Richardson Street, for Richard Richardson (1704-1780).",
          },
          {
            id: "settled",
            label: "Clarendon County",
            x: 73,
            y: 52,
            fact: "This Virginia native settled in present Clarendon County. Six S. C. Governors are among his descendants.",
          },
        ],
      },
      {
        kind: "scene",
        id: "plan",
        kicker: "1786",
        title: "A two-mile square of named streets",
        partLabel: "the 1786 plan",
        art: art(
          "m4059-houses.jpg",
          "Illustration of a planned town and officers on horseback. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "grid",
            label: "1786",
            x: 32,
            y: 48,
            fact: "The north-south streets, laid out in the two-mile square of the original city of Columbia in 1786, were named (except for Assembly) for generals and officers who fought in the American Revolution. Most of these were native Americans, but one was the Polish Count Pulaski.",
          },
          {
            id: "service",
            label: "1775 and 1778",
            x: 74,
            y: 44,
            fact: 'He served in the "Snow Campaign" of 1775; was commissioned Brigadier General in 1778; was a member of the Commons House of Assembly, the First and Second Provincial Congresses, and the First General Assembly.',
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1704-1780",
        title: "S. C. Governors among his descendants",
        partLabel: "6 governors",
        value: 6,
        unit: "governors",
        meant:
          "What this meant: the marker says six S. C. Governors are among the descendants of Richard Richardson.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4059-street.jpg",
          "Illustration of a business street and a log house. Not a historical photograph.",
        ),
        nowArt: art(
          "m4059-today.jpg",
          "Illustration of a marker on a city corner. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a business street and a log house, for the street the marker says was first named Richardson Street. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker on a city corner. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "dates",
            year: "1704",
            label: "The marker's dates for Richard Richardson begin.",
            why: "The marker names Richard Richardson (1704-1780), a Virginia native who settled in present Clarendon County.",
          },
          {
            id: "snow",
            year: "1775",
            label: 'He serves in the "Snow Campaign."',
            why: 'The marker says he served in the "Snow Campaign" of 1775.',
          },
          {
            id: "general",
            year: "1778",
            label: "He is commissioned Brigadier General.",
            why: "The marker says he was commissioned Brigadier General in 1778.",
          },
          {
            id: "streets",
            year: "1786",
            label: "North-south streets are laid out in the original city of Columbia.",
            why: "The marker says those streets were laid out in the two-mile square of the original city of Columbia in 1786, and were named (except for Assembly) for generals and officers who fought in the American Revolution.",
          },
        ],
        ["streets", "dates", "general", "snow"],
      ),
      takeaway([
        "Columbia's chief business street, Main, was first named Richardson Street, for Richard Richardson (1704-1780). Six S. C. Governors are among his descendants.",
        'This Virginia native settled in present Clarendon County; served in the "Snow Campaign" of 1775; and was commissioned Brigadier General in 1778.',
        "The north-south streets, laid out in the two-mile square of the original city of Columbia in 1786, were named (except for Assembly) for generals and officers who fought in the American Revolution. Most of these were native Americans, but one was the Polish Count Pulaski.",
      ]),
    ],
  ),
  lesson(
    "40-60",
    "The bill that chose the Capital",
    "Gervais Street timeline",
    [
      cited("40-60", "Gervais Street", "front and back"),
      span(
        '"22 years" is 1764 minus 1742, the years the marker prints for his arrival in Charleston and the circa date beside his name.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "arrival",
        kicker: "1764",
        title: "A letter, then a bill for the Capital",
        partLabel: "the arrival",
        art: art(
          "m4060-capital.jpg",
          "Illustration of a harbor arrival and a legislative chamber. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "charleston",
            label: "Charleston",
            x: 32,
            y: 56,
            fact: "Educated in Germany, he emigrated first to England and arrived in Charleston in 1764 with a letter of introduction to Henry Laurens.",
          },
          {
            id: "bill",
            label: "The bill",
            x: 75,
            y: 42,
            fact: "He served in the American Revolution, took part in the defense of Charleston, and was a member of the Continental Congress. S. C. Senate member from Ninety Six, he introduced the bill that resulted in the selection of the site of Columbia as Capital of S. C.",
          },
        ],
      },
      {
        kind: "scene",
        id: "naming",
        kicker: "c.1742",
        title: "East-west streets, and his name",
        partLabel: "the street names",
        art: art(
          "m4060-street.jpg",
          "Illustration of a street of goods and two houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "products",
            label: "Products",
            x: 32,
            y: 54,
            fact: "The streets of Columbia running from east to west (with a few exceptions) were named for products in the State's economy.",
          },
          {
            id: "gervais",
            label: "Gervais",
            x: 76,
            y: 44,
            fact: "They were also named for the two Taylor plantations on which the new Capital was located, and for prominent individuals such as Gervais (c.1742-1798), author of the bill establishing Columbia as Capital.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "c.1742-1764",
        title: "Years from his circa date to Charleston",
        partLabel: "22 years",
        value: 22,
        unit: "years",
        meant:
          "What this meant: 1764 comes 22 years after 1742. That is the stretch from the circa year the marker prints beside John Lewis Gervais to the year he arrived in Charleston.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m4060-capital.jpg",
          "Illustration of a harbor arrival and a legislative chamber. Not a historical photograph.",
        ),
        nowArt: art(
          "m4060-today.jpg",
          "Illustration of a marker beside a city street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a harbor arrival and a legislative chamber, for John Lewis Gervais, who the marker says arrived in Charleston in 1764 and introduced the bill selecting Columbia as Capital. Not a historical photograph.",
        nowCaption:
          "Illustration of a marker beside a city street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "dates",
            year: "c.1742",
            label: "The marker's dates for John Lewis Gervais begin.",
            why: "The marker names John Lewis Gervais (c.1742-1798), who was educated in Germany and emigrated first to England.",
          },
          {
            id: "arrived",
            year: "1764",
            label: "He arrives in Charleston with a letter to Henry Laurens.",
            why: "The marker says he arrived in Charleston in 1764 with a letter of introduction to Henry Laurens.",
          },
          {
            id: "service",
            year: "American Revolution",
            label: "He serves in the American Revolution and the defense of Charleston.",
            why: "The marker says he served in the American Revolution, took part in the defense of Charleston, and was a member of the Continental Congress.",
          },
          {
            id: "bill",
            year: "The bill",
            label: "He introduces the bill that selects the site of Columbia as Capital.",
            why: "The marker says that as an S. C. Senate member from Ninety Six, he introduced the bill that resulted in the selection of the site of Columbia as Capital of S. C.",
          },
        ],
        ["bill", "dates", "service", "arrived"],
      ),
      takeaway([
        "Named for John Lewis Gervais (c.1742-1798), who was educated in Germany, emigrated first to England, and arrived in Charleston in 1764 with a letter of introduction to Henry Laurens.",
        "He served in the American Revolution, took part in the defense of Charleston, was a member of the Continental Congress, and, as an S. C. Senate member from Ninety Six, introduced the bill that selected the site of Columbia as Capital of S. C.",
        "East-west streets were named for products in the State's economy, for the two Taylor plantations on which the new Capital was located, and for prominent individuals such as Gervais, author of the bill establishing Columbia as Capital.",
      ]),
    ],
  ),
];
