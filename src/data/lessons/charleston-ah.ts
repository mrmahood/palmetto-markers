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

export const charlestonLessonsAH: MarkerLesson[] = [
  lesson(
    "10-155",
    "An 88-year lease for this site",
    "Payne R.M.U.E. Church timeline",
    [cited("10-155", "Payne Reformed Methodist Union Episcopal Church", "front and back")],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "The 1870s",
        title: "Organized as Payne Chapel",
        partLabel: "the church",
        art: art(
          "m10155-church.jpg",
          "Illustration of a small church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "The 1870s",
            x: 32,
            y: 48,
            fact: "Payne Reformed Methodist Union Episcopal (R.M.U.E.) Church organized in the 1870s. The church was originally called Payne Chapel and affiliated with the African Methodist Episcopal (A.M.E.) denomination.",
          },
          {
            id: "pastor",
            label: "Rev. Prince “Pappy” White",
            x: 74,
            y: 40,
            fact: "Tradition holds that early members, including first pastor Rev. Prince “Pappy” White, were previously enslaved on the Seabrook family plantation.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1879",
        title: "A lease, then ownership",
        partLabel: "the yard",
        art: art(
          "m10155-yard.jpg",
          "Illustration of the ground beside a small church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "lease",
            label: "88-year lease",
            x: 32,
            y: 52,
            fact: "In 1879 the church entered into an 88-year lease for this site from F.P. Seabrook. In 1885 Payne was among the first members of the newly formed R.M.U.E. Church, an A.M.E. offshoot.",
          },
          {
            id: "owned",
            label: "1947",
            x: 74,
            y: 42,
            fact: "Congregants took ownership of the site in 1947. The original sanctuary was renovated in the 1960s.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1879",
        title: "Years in the lease",
        partLabel: "88 years",
        value: 88,
        unit: "years",
        meant:
          "What this meant: in 1879 the church entered into an 88-year lease for this site from F.P. Seabrook.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10155-church.jpg",
          "Illustration of a small church. Not a historical photograph.",
        ),
        nowArt: art(
          "m10155-today.jpg",
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small church, for the church the marker says was organized in the 1870s and originally called Payne Chapel. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "The 1870s",
            label: "The church is organized.",
            why: "The marker says Payne Reformed Methodist Union Episcopal (R.M.U.E.) Church organized in the 1870s. It was originally called Payne Chapel and affiliated with the African Methodist Episcopal (A.M.E.) denomination. Tradition holds that early members, including first pastor Rev. Prince “Pappy” White, were previously enslaved on the Seabrook family plantation.",
          },
          {
            id: "lease",
            year: "1879",
            label: "The church leases this site from F.P. Seabrook.",
            why: "The marker says that in 1879 the church entered into an 88-year lease for this site from F.P. Seabrook.",
          },
          {
            id: "rmue",
            year: "1885",
            label: "Payne joins the newly formed R.M.U.E. Church.",
            why: "The marker says that in 1885 Payne was among the first members of the newly formed R.M.U.E. Church, an A.M.E. offshoot.",
          },
          {
            id: "owned",
            year: "1947",
            label: "Congregants take ownership of the site.",
            why: "The marker says congregants took ownership of the site in 1947. The original sanctuary was renovated in the 1960s.",
          },
        ],
        ["owned", "organized", "rmue", "lease"],
      ),
      takeaway([
        "Payne Reformed Methodist Union Episcopal (R.M.U.E.) Church organized in the 1870s. The church was originally called Payne Chapel and affiliated with the African Methodist Episcopal (A.M.E.) denomination.",
        "Tradition holds that early members, including first pastor Rev. Prince “Pappy” White, were previously enslaved on the Seabrook family plantation. In 1879 the church entered into an 88-year lease for this site from F.P. Seabrook.",
        "In 1885 Payne was among the first members of the newly formed R.M.U.E. Church, an A.M.E. offshoot. Congregants took ownership of the site in 1947. The original sanctuary was renovated in the 1960s.",
      ]),
    ],
  ),
  lesson(
    "10-156",
    "Remnants of a British fortification",
    "British fortifications timeline",
    [cited("10-156", "British Fortifications", "front and back")],
    [
      {
        kind: "scene",
        id: "earth",
        kicker: "1775",
        title: "A fortification on this site",
        partLabel: "the earthwork",
        art: art(
          "m10156-earth.jpg",
          "Illustration of an earthen fortification. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "remnants",
            label: "After 1775",
            x: 32,
            y: 50,
            fact: "On this site are remnants of a British fortification dating to the American Revolution. After departing in 1775, the British unsuccessfully tried to retake Charleston in 1776 and 1779.",
          },
          {
            id: "landing",
            label: "Feb. 11-12, 1780",
            x: 74,
            y: 40,
            fact: "On Feb. 11-12, 1780, Adm. Marriott Arbuthnot and Gen. Henry Clinton landed British and Hessian soldiers on nearby Seabrook Island to lead a third attempt. By March they had assumed control of James Island.",
          },
        ],
      },
      {
        kind: "scene",
        id: "works",
        kicker: "The 1779 campaign",
        title: "Redoubts by Wappoo Creek",
        partLabel: "the works",
        art: art(
          "m10156-works.jpg",
          "Illustration of redoubts along a creek. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "headquarters",
            label: "Wappoo Creek",
            x: 32,
            y: 46,
            fact: "British forces set up headquarters near a bridge over Wappoo Creek. They also constructed several redoubts and re-fortified others built during the 1779 campaign.",
          },
          {
            id: "redoubt",
            label: "May 12",
            x: 74,
            y: 58,
            fact: "On the nearby creek bank are the remnants of one redoubt used to defend transport ships moving between the Stono and Ashley Rivers. After a six-week siege, the British reclaimed Charleston on May 12, beginning a 31-month occupation.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "May 12",
        title: "Months of the occupation",
        partLabel: "31 months",
        value: 31,
        unit: "months",
        meant:
          "What this meant: after a six-week siege, the British reclaimed Charleston on May 12, beginning a 31-month occupation.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10156-earth.jpg",
          "Illustration of an earthen fortification. Not a historical photograph.",
        ),
        nowArt: art(
          "m10156-today.jpg",
          "Illustration of a blank roadside marker near a creek bank. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of an earthen fortification, for the remnants of a British fortification the marker says date to the American Revolution. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker near a creek bank. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "departed",
            year: "1775",
            label: "The British depart.",
            why: "The marker says that after departing in 1775, the British unsuccessfully tried to retake Charleston in 1776 and 1779. On this site are remnants of a British fortification dating to the American Revolution.",
          },
          {
            id: "tries",
            year: "1776 and 1779",
            label: "They try to retake Charleston.",
            why: "The marker says the British unsuccessfully tried to retake Charleston in 1776 and 1779.",
          },
          {
            id: "landed",
            year: "Feb. 11-12, 1780",
            label: "Arbuthnot and Clinton land on Seabrook Island.",
            why: "The marker says that on Feb. 11-12, 1780, Adm. Marriott Arbuthnot and Gen. Henry Clinton landed British and Hessian soldiers on nearby Seabrook Island to lead a third attempt. By March they had assumed control of James Island. British forces set up headquarters near a bridge over Wappoo Creek. They also constructed several redoubts and re-fortified others built during the 1779 campaign.",
          },
          {
            id: "reclaimed",
            year: "May 12",
            label: "The British reclaim Charleston.",
            why: "The marker says that after a six-week siege, the British reclaimed Charleston on May 12, beginning a 31-month occupation. On the nearby creek bank are the remnants of one redoubt used to defend transport ships moving between the Stono and Ashley Rivers.",
          },
        ],
        ["reclaimed", "departed", "landed", "tries"],
      ),
      takeaway([
        "On this site are remnants of a British fortification dating to the American Revolution. After departing in 1775, the British unsuccessfully tried to retake Charleston in 1776 and 1779.",
        "On Feb. 11-12, 1780, Adm. Marriott Arbuthnot and Gen. Henry Clinton landed British and Hessian soldiers on nearby Seabrook Island to lead a third attempt. By March they had assumed control of James Island. British forces set up headquarters near a bridge over Wappoo Creek.",
        "They constructed several redoubts and re-fortified others built during the 1779 campaign. On the nearby creek bank are the remnants of one redoubt used to defend transport ships moving between the Stono and Ashley Rivers. After a six-week siege, the British reclaimed Charleston on May 12, beginning a 31-month occupation.",
      ]),
    ],
  ),
  lesson(
    "10-157",
    "Four surviving indigo vats",
    "Fenwick indigo vats timeline",
    [
      cited("10-157", "Fenwick Indigo Vats", "front and back"),
      span(
        '"28 years" is 1775 minus 1747, the years the marker prints for the ownership of Edward Fenwick.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "vats",
        kicker: "18th century",
        title: "Four indigo vats",
        partLabel: "the vats",
        art: art(
          "m10157-vats.jpg",
          "Illustration of indigo vats. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "four",
            label: "Four vats",
            x: 32,
            y: 54,
            fact: "On this site are the rare surviving remnants of four 18th century indigo vats. Indigo is a blue dye derived from several varieties of the Indigofera plant genus.",
          },
          {
            id: "crop",
            label: "The 1740s",
            x: 74,
            y: 40,
            fact: "Commercially viable in S.C. starting in the 1740s, it was one of the colony’s most valuable cash crops along with rice. It was produced on Lowcountry plantations, usually by large groups of enslaved people who seeded, harvested, and processed the plants into dye.",
          },
        ],
      },
      {
        kind: "scene",
        id: "fields",
        kicker: "1747-1775",
        title: "Part of Fenwick Plantation",
        partLabel: "the fields",
        art: art(
          "m10157-fields.jpg",
          "Illustration of an indigo field. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "fenwick",
            label: "Edward Fenwick",
            x: 32,
            y: 46,
            fact: "The vats at this site were part of Fenwick Plantation and likely built during the ownership (1747-1775) of Edward Fenwick.",
          },
          {
            id: "process",
            label: "Steeper and battery vats",
            x: 74,
            y: 58,
            fact: "They include two steeper vats used to ferment and agitate plants, as well as two battery vats where the resulting liquid was beaten, treated with lime, and drained to leave a mud that could be shaped into bricks and dried. Indigo production in S.C. largely ended after the American Revolution.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1747-1775",
        title: "Years of Fenwick’s ownership",
        partLabel: "28 years",
        value: 28,
        unit: "years",
        meant:
          "What this meant: 1775 comes 28 years after 1747. That is the stretch the marker prints for the ownership (1747-1775) of Edward Fenwick, when the vats were likely built.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10157-vats.jpg",
          "Illustration of indigo vats. Not a historical photograph.",
        ),
        nowArt: art(
          "m10157-today.jpg",
          "Illustration of a blank roadside marker at the edge of a field. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of indigo vats, for the rare surviving remnants of four 18th century indigo vats the marker says are on this site. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker at the edge of a field. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "viable",
            year: "The 1740s",
            label: "Indigo is commercially viable in S.C.",
            why: "The marker says indigo was commercially viable in S.C. starting in the 1740s, and was one of the colony’s most valuable cash crops along with rice. It was produced on Lowcountry plantations, usually by large groups of enslaved people who seeded, harvested, and processed the plants into dye.",
          },
          {
            id: "ownership",
            year: "1747",
            label: "Edward Fenwick’s ownership begins.",
            why: "The marker says the vats at this site were part of Fenwick Plantation and likely built during the ownership (1747-1775) of Edward Fenwick. They include two steeper vats and two battery vats.",
          },
          {
            id: "ends",
            year: "1775",
            label: "Edward Fenwick’s ownership ends.",
            why: "The marker prints the ownership of Edward Fenwick as (1747-1775).",
          },
          {
            id: "ended",
            year: "After the American Revolution",
            label: "Indigo production in S.C. largely ends.",
            why: "The marker says indigo production in S.C. largely ended after the American Revolution.",
          },
        ],
        ["ended", "viable", "ends", "ownership"],
      ),
      takeaway([
        "On this site are the rare surviving remnants of four 18th century indigo vats. Indigo is a blue dye derived from several varieties of the Indigofera plant genus.",
        "Commercially viable in S.C. starting in the 1740s, it was one of the colony’s most valuable cash crops along with rice. It was produced on Lowcountry plantations, usually by large groups of enslaved people who seeded, harvested, and processed the plants into dye.",
        "The vats at this site were part of Fenwick Plantation and likely built during the ownership (1747-1775) of Edward Fenwick. They include two steeper vats used to ferment and agitate plants, as well as two battery vats where the resulting liquid was beaten, treated with lime, and drained to leave a mud that could be shaped into bricks and dried. Indigo production in S.C. largely ended after the American Revolution.",
      ]),
    ],
  ),
  lesson(
    "10-158",
    "Began in 1720 as a chapel of ease",
    "Saint James Church timeline",
    [
      cited("10-158", "Saint James Episcopal Church", "front and back"),
      span(
        '"240 years" is 1960 minus 1720, the years the marker prints for the sixth and current church and the beginning of Saint James Church.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1720",
        title: "A chapel of ease",
        partLabel: "the church",
        art: art(
          "m10158-church.jpg",
          "Illustration of a small church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "began",
            label: "1720",
            x: 32,
            y: 46,
            fact: "Saint James Church began in 1720 as a chapel of ease serving the James Island section of St. Andrews Anglican Parish. Rev. William Guy led meetings in a local house until a formal place of worship was built around 1722.",
          },
          {
            id: "destroyed",
            label: "1730",
            x: 74,
            y: 56,
            fact: "It was destroyed in 1730 and replaced by a second church that stood until around the time of the American Revolution. The adjacent cemetery dates to at least 1769.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1785",
        title: "From the Church of England to a sixth church",
        partLabel: "the yard",
        art: art(
          "m10158-yard.jpg",
          "Illustration of a churchyard cemetery. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "episcopal",
            label: "1785",
            x: 32,
            y: 44,
            fact: "Saint James became part of the Protestant Episcopal Church in S.C. after its 1785 reorganization from the Church of England. In the 1830s the church was attended by around 17 free white families and a number of enslaved African Americans.",
          },
          {
            id: "sixth",
            label: "1960",
            x: 74,
            y: 58,
            fact: "After long post-Civil War stagnation, Saint James grew significantly in the mid-20th century. The sixth and current church was built in 1960.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1720-1960",
        title: "Years from the chapel of ease to the sixth church",
        partLabel: "240 years",
        value: 240,
        unit: "years",
        meant:
          "What this meant: 1960 comes 240 years after 1720. That is the stretch from the year Saint James Church began as a chapel of ease to the year the sixth and current church was built.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10158-church.jpg",
          "Illustration of a small church. Not a historical photograph.",
        ),
        nowArt: art(
          "m10158-today.jpg",
          "Illustration of a blank roadside marker by a churchyard wall. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small church, for Saint James Church, which the marker says began in 1720 as a chapel of ease. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker by a churchyard wall. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "began",
            year: "1720",
            label: "Saint James begins as a chapel of ease.",
            why: "The marker says Saint James Church began in 1720 as a chapel of ease serving the James Island section of St. Andrews Anglican Parish. Rev. William Guy led meetings in a local house until a formal place of worship was built around 1722.",
          },
          {
            id: "destroyed",
            year: "1730",
            label: "The church is destroyed and replaced.",
            why: "The marker says it was destroyed in 1730 and replaced by a second church that stood until around the time of the American Revolution. The adjacent cemetery dates to at least 1769.",
          },
          {
            id: "episcopal",
            year: "1785",
            label: "It becomes part of the Protestant Episcopal Church.",
            why: "The marker says Saint James became part of the Protestant Episcopal Church in S.C. after its 1785 reorganization from the Church of England. In the 1830s the church was attended by around 17 free white families and a number of enslaved African Americans.",
          },
          {
            id: "sixth",
            year: "1960",
            label: "The sixth and current church is built.",
            why: "The marker says that after long post-Civil War stagnation, Saint James grew significantly in the mid-20th century. The sixth and current church was built in 1960.",
          },
        ],
        ["sixth", "began", "episcopal", "destroyed"],
      ),
      takeaway([
        "Saint James Church began in 1720 as a chapel of ease serving the James Island section of St. Andrews Anglican Parish. Rev. William Guy led meetings in a local house until a formal place of worship was built around 1722.",
        "It was destroyed in 1730 and replaced by a second church that stood until around the time of the American Revolution. The adjacent cemetery dates to at least 1769. Saint James became part of the Protestant Episcopal Church in S.C. after its 1785 reorganization from the Church of England.",
        "In the 1830s the church was attended by around 17 free white families and a number of enslaved African Americans. After long post-Civil War stagnation, Saint James grew significantly in the mid-20th century. The sixth and current church was built in 1960.",
      ]),
    ],
  ),
];
