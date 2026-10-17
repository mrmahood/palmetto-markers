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

export const charlestonLessonsAG: MarkerLesson[] = [
  lesson(
    "10-150",
    "A wood frame jail in Lincolnville",
    "Lincolnville Jail timeline",
    [
      cited("10-150", "Lincolnville Jail", "front and back"),
      span(
        '"60 years" is 1960 minus 1900, the years the marker prints for the jail remaining in use and the year it is believed to have been built.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "jail",
        kicker: "Around 1900",
        title: "A small wood frame building",
        partLabel: "the jail",
        art: art(
          "m10150-jail.jpg",
          "Illustration of a small wood frame jail. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "built",
            label: "Around 1900",
            x: 32,
            y: 52,
            fact: "On this site stands a small, wood frame building that for decades served as Lincolnville Jail. The jail is believed to have been built around 1900 and is one of the oldest institutional buildings remaining in Lincolnville, which formally incorporated in 1889.",
          },
          {
            id: "marshals",
            label: "Town marshals",
            x: 74,
            y: 40,
            fact: "The jail was maintained by Town marshals who also oversaw local law enforcement and were employed in Lincolnville as early as the 1890s. More serious crimes were referred to the sheriff’s office.",
          },
        ],
      },
      {
        kind: "scene",
        id: "street",
        kicker: "1933",
        title: "Closed, renovated, and a station in front",
        partLabel: "the street",
        art: art(
          "m10150-street.jpg",
          "Illustration of a jail on a small-town street, with a station in front. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "closed",
            label: "1933",
            x: 32,
            y: 46,
            fact: "The Town intendant (mayor) served as chief magistrate and presided over a court for lesser charges. The county health department closed the jail in 1933 due to unsafe conditions. It reopened later that year after being renovated and masonry-veneered by local builder Austin Hardee.",
          },
          {
            id: "station",
            label: "Around 1970",
            x: 74,
            y: 58,
            fact: "The 4-cell jail remained in use until around 1960 and later fell into disrepair. The Town of Lincolnville built a fire and police station in front of the jail building around 1970.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1900-1960",
        title: "Years from the building to the end of use",
        partLabel: "60 years",
        value: 60,
        unit: "years",
        meant:
          "What this meant: 1960 comes 60 years after 1900. That is the stretch the marker prints for the year the jail is believed to have been built, around 1900, and around 1960, when the 4-cell jail remained in use until.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10150-jail.jpg",
          "Illustration of a small wood frame jail. Not a historical photograph.",
        ),
        nowArt: art(
          "m10150-today.jpg",
          "Illustration of a blank roadside marker on a small-town street. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a small wood frame jail, for the building the marker says served for decades as Lincolnville Jail and is believed to have been built around 1900. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a small-town street. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "incorporated",
            year: "1889",
            label: "Lincolnville formally incorporates.",
            why: "The marker says Lincolnville formally incorporated in 1889. The jail is one of the oldest institutional buildings remaining there.",
          },
          {
            id: "built",
            year: "Around 1900",
            label: "The jail is believed to have been built.",
            why: "The marker says the jail is believed to have been built around 1900. On this site stands a small, wood frame building that for decades served as Lincolnville Jail.",
          },
          {
            id: "closed",
            year: "1933",
            label: "The county health department closes the jail.",
            why: "The marker says the county health department closed the jail in 1933 due to unsafe conditions. It reopened later that year after being renovated and masonry-veneered by local builder Austin Hardee.",
          },
          {
            id: "station",
            year: "Around 1970",
            label: "The Town builds a fire and police station in front of the jail.",
            why: "The marker says the Town of Lincolnville built a fire and police station in front of the jail building around 1970. The 4-cell jail remained in use until around 1960 and later fell into disrepair.",
          },
        ],
        ["station", "incorporated", "closed", "built"],
      ),
      takeaway([
        "On this site stands a small, wood frame building that for decades served as Lincolnville Jail. The jail is believed to have been built around 1900 and is one of the oldest institutional buildings remaining in Lincolnville, which formally incorporated in 1889.",
        "The jail was maintained by Town marshals who also oversaw local law enforcement and were employed in Lincolnville as early as the 1890s. More serious crimes were referred to the sheriff’s office. The Town intendant (mayor) served as chief magistrate and presided over a court for lesser charges.",
        "The county health department closed the jail in 1933 due to unsafe conditions. It reopened later that year after being renovated and masonry-veneered by local builder Austin Hardee. The 4-cell jail remained in use until around 1960 and later fell into disrepair. The Town of Lincolnville built a fire and police station in front of the jail building around 1970.",
      ]),
    ],
  ),
  lesson(
    "10-151",
    "From a brush arbor on Taylor’s Hill",
    "Mt. Zion timeline",
    [
      cited("10-151", "Mt. Zion Baptist Church", "front and back"),
      span(
        '"5 years" is 1892 minus 1887, the years the marker prints for the trustees taking ownership and the acquisition of one acre at this site.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1880s",
        title: "A brush arbor, then one acre",
        partLabel: "the church",
        art: art(
          "m10151-church.jpg",
          "Illustration of a wooden church and a brush arbor. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "organized",
            label: "The 1880s",
            x: 32,
            y: 48,
            fact: "Mt. Zion Baptist Church organized in the 1880s. Tradition holds they first met under a brush arbor on land owned by local farmer Adonis Dezelle.",
          },
          {
            id: "acre",
            label: "1887",
            x: 74,
            y: 40,
            fact: "In 1887, Dezelle and Rev. Anthony Alston, pastor of First Baptist church of Summerville, acquired one acre of land at this site for what was then called the Baptist Church of Taylor’s Hill. Members built their first permanent house of worship here soon after.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1892",
        title: "The name Mt. Zion, and a burial ground",
        partLabel: "the churchyard",
        art: art(
          "m10151-yard.jpg",
          "Illustration of a churchyard with plain unmarked stones. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "name",
            label: "1892",
            x: 32,
            y: 46,
            fact: "Church trustees took ownership of the property in 1892, by which time the congregation had adopted the name Mt. Zion Baptist Church. Several church buildings have stood on the site, the most recent of which dates to the 1960s and has been renovated several times.",
          },
          {
            id: "ground",
            label: "The burial ground",
            x: 74,
            y: 58,
            fact: "Adjacent to the building is a community burial ground established by church founders and known as Mt. Zion or Dunmeyer Hill Cemetery.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1887-1892",
        title: "Years from the acre to the trustees",
        partLabel: "5 years",
        value: 5,
        unit: "years",
        meant:
          "What this meant: 1892 comes 5 years after 1887. That is the stretch the marker prints from the year Dezelle and Rev. Anthony Alston acquired one acre at this site to the year church trustees took ownership of the property.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10151-church.jpg",
          "Illustration of a wooden church and a brush arbor. Not a historical photograph.",
        ),
        nowArt: art(
          "m10151-today.jpg",
          "Illustration of a blank roadside marker beside a churchyard. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church and a brush arbor, for the congregation the marker says organized in the 1880s and first met under a brush arbor. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside a churchyard. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "organized",
            year: "1880s",
            label: "The church organizes and first meets under a brush arbor.",
            why: "The marker says Mt. Zion Baptist Church organized in the 1880s. Tradition holds they first met under a brush arbor on land owned by local farmer Adonis Dezelle.",
          },
          {
            id: "acre",
            year: "1887",
            label: "Dezelle and Rev. Anthony Alston acquire one acre here.",
            why: "The marker says that in 1887, Dezelle and Rev. Anthony Alston, pastor of First Baptist church of Summerville, acquired one acre of land at this site for what was then called the Baptist Church of Taylor’s Hill. Members built their first permanent house of worship here soon after.",
          },
          {
            id: "name",
            year: "1892",
            label: "Trustees take ownership, and the name is Mt. Zion.",
            why: "The marker says church trustees took ownership of the property in 1892, by which time the congregation had adopted the name Mt. Zion Baptist Church.",
          },
          {
            id: "recent",
            year: "1960s",
            label: "The most recent church building on the site dates to this time.",
            why: "The marker says several church buildings have stood on the site, the most recent of which dates to the 1960s and has been renovated several times.",
          },
        ],
        ["name", "organized", "recent", "acre"],
      ),
      takeaway([
        "Mt. Zion Baptist Church organized in the 1880s. Tradition holds they first met under a brush arbor on land owned by local farmer Adonis Dezelle.",
        "In 1887, Dezelle and Rev. Anthony Alston, pastor of First Baptist church of Summerville, acquired one acre of land at this site for what was then called the Baptist Church of Taylor’s Hill. Members built their first permanent house of worship here soon after.",
        "Church trustees took ownership of the property in 1892, by which time the congregation had adopted the name Mt. Zion Baptist Church. Several church buildings have stood on the site, the most recent of which dates to the 1960s and has been renovated several times. Adjacent to the building is a community burial ground established by church founders and known as Mt. Zion or Dunmeyer Hill Cemetery.",
      ]),
    ],
  ),
  lesson(
    "10-152",
    "The oldest congregation in Lincolnville",
    "Ebenezer timeline",
    [
      cited("10-152", "Ebenezer A.M.E. Church", "front"),
      span(
        '"121 years" is 1995 minus 1874, the years the marker prints for the education wing and the trustees taking ownership of this site.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "church",
        kicker: "1874",
        title: "Trustees take this site",
        partLabel: "the church",
        art: art(
          "m10152-church.jpg",
          "Illustration of a wooden church. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "site",
            label: "1874",
            x: 32,
            y: 50,
            fact: "Ebenezer African Methodist Episcopal (A.M.E.) is the oldest church congregation in the Town of Lincolnville. In 1874 trustees led by town founder Rev. Richard H. Cain took ownership of this site.",
          },
          {
            id: "built",
            label: "1878",
            x: 74,
            y: 40,
            fact: "Tradition holds the current church was built in 1878. Ebenezer later joined the A.M.E. Church’s Charleston District.",
          },
        ],
      },
      {
        kind: "scene",
        id: "yard",
        kicker: "1903",
        title: "Renovated, veneered, and a wing",
        partLabel: "the churchyard",
        art: art(
          "m10152-yard.jpg",
          "Illustration of a brick-veneered church with a side wing. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "renovated",
            label: "1903",
            x: 32,
            y: 46,
            fact: "The church was renovated in 1903 and brick-veneered around 1960.",
          },
          {
            id: "wing",
            label: "1995",
            x: 74,
            y: 56,
            fact: "An education wing was added in 1995.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1874-1995",
        title: "Years from the site to the education wing",
        partLabel: "121 years",
        value: 121,
        unit: "years",
        meant:
          "What this meant: 1995 comes 121 years after 1874. That is the stretch the marker prints from the year trustees led by Rev. Richard H. Cain took ownership of this site to the year an education wing was added.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10152-church.jpg",
          "Illustration of a wooden church. Not a historical photograph.",
        ),
        nowArt: art(
          "m10152-today.jpg",
          "Illustration of a blank roadside marker on a church lawn. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a wooden church, for Ebenezer, which the marker says is the oldest church congregation in the Town of Lincolnville. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker on a church lawn. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "site",
            year: "1874",
            label: "Trustees led by Rev. Richard H. Cain take ownership of this site.",
            why: "The marker says that in 1874 trustees led by town founder Rev. Richard H. Cain took ownership of this site. Ebenezer A.M.E. is the oldest church congregation in the Town of Lincolnville.",
          },
          {
            id: "built",
            year: "1878",
            label: "Tradition holds the current church is built.",
            why: "The marker says tradition holds the current church was built in 1878. Ebenezer later joined the A.M.E. Church’s Charleston District.",
          },
          {
            id: "renovated",
            year: "1903",
            label: "The church is renovated.",
            why: "The marker says the church was renovated in 1903 and brick-veneered around 1960.",
          },
          {
            id: "wing",
            year: "1995",
            label: "An education wing is added.",
            why: "The marker says an education wing was added in 1995.",
          },
        ],
        ["renovated", "wing", "site", "built"],
      ),
      takeaway([
        "Ebenezer African Methodist Episcopal (A.M.E.) is the oldest church congregation in the Town of Lincolnville. In 1874 trustees led by town founder Rev. Richard H. Cain took ownership of this site.",
        "Tradition holds the current church was built in 1878. Ebenezer later joined the A.M.E. Church’s Charleston District.",
        "The church was renovated in 1903 and brick-veneered around 1960. An education wing was added in 1995.",
      ]),
    ],
  ),
  lesson(
    "10-154",
    "Fiddlers Green beside the marsh",
    "Gadsden Green timeline",
    [
      cited("10-154", "Gadsden Green", "front and back"),
      span(
        '"16 years" is 1970 minus 1954, the years the marker prints for the City filling Gadsden Creek and 100 acres of saltmarsh.',
      ),
    ],
    [
      {
        kind: "scene",
        id: "green",
        kicker: "Around 1852",
        title: "A tract beside the marsh",
        partLabel: "the green",
        art: art(
          "m10154-green.jpg",
          "Illustration of a saltmarsh creek and small houses. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "began",
            label: "Around 1852",
            x: 32,
            y: 54,
            fact: "The neighborhood of Gadsden Green, also called Fiddlers Green or Back da Green, began around 1852. In that year, landowner and prolific slave trader Thomas N. Gadsden subdivided a tract currently bounded by Cannon St., President St., and Gadsden Creek. The marsh at that time extended several blocks further inland along Line St.",
          },
          {
            id: "community",
            label: "By 1900",
            x: 74,
            y: 42,
            fact: "By 1900 the area was a racially diverse but mostly Black community with 1- and 2-story homes, small grocery stores, a shipyard, wharf, and sawmill.",
          },
        ],
      },
      {
        kind: "scene",
        id: "houses",
        kicker: "1938",
        title: "Tornadoes, housing, and a filled creek",
        partLabel: "the houses",
        art: art(
          "m10154-houses.jpg",
          "Illustration of modest houses along a street. Not a historical photograph.",
        ),
        hotspots: [
          {
            id: "tornadoes",
            label: "1938",
            x: 32,
            y: 48,
            fact: "In 1938 the neighborhood was damaged by tornadoes. Over the protest of local residents, the City of Charleston subsequently demolished much of the neighborhood to build Gadsden Green Homes, a segregated public housing complex opened in 1942 and expanded in 1968.",
          },
          {
            id: "creek",
            label: "1954-1970",
            x: 74,
            y: 58,
            fact: "From 1954 to 1970, the City filled Gadsden Creek and 100 acres of saltmarsh with municipal waste and soil for a City dump and urban development, in what had been a popular fishing and swimming spot.",
          },
        ],
      },
      {
        kind: "numbers",
        id: "numbers",
        kicker: "1954-1970",
        title: "Years of filling the creek and marsh",
        partLabel: "16 years",
        value: 16,
        unit: "years",
        meant:
          "What this meant: 1970 comes 16 years after 1954. That is the stretch the marker prints for the City filling Gadsden Creek and 100 acres of saltmarsh with municipal waste and soil.",
      },
      {
        kind: "compare",
        id: "compare",
        kicker: "Then and now",
        title: "The same ground",
        partLabel: "then and now",
        thenArt: art(
          "m10154-green.jpg",
          "Illustration of a saltmarsh creek and small houses. Not a historical photograph.",
        ),
        nowArt: art(
          "m10154-today.jpg",
          "Illustration of a blank roadside marker beside marsh grass. Not a photograph of the site today.",
        ),
        thenCaption:
          "Illustration of a saltmarsh creek and small houses, for the neighborhood the marker says began around 1852. Not a historical photograph.",
        nowCaption:
          "Illustration of a blank roadside marker beside marsh grass. Not a photograph of the site today.",
      },
      order(
        [
          {
            id: "began",
            year: "Around 1852",
            label: "The neighborhood of Gadsden Green begins.",
            why: "The marker says the neighborhood of Gadsden Green, also called Fiddlers Green or Back da Green, began around 1852. In that year, landowner and prolific slave trader Thomas N. Gadsden subdivided a tract currently bounded by Cannon St., President St., and Gadsden Creek.",
          },
          {
            id: "community",
            year: "By 1900",
            label: "The area is a mostly Black community of homes, stores, and mills.",
            why: "The marker says that by 1900 the area was a racially diverse but mostly Black community with 1- and 2-story homes, small grocery stores, a shipyard, wharf, and sawmill.",
          },
          {
            id: "tornadoes",
            year: "1938",
            label: "Tornadoes damage the neighborhood.",
            why: "The marker says that in 1938 the neighborhood was damaged by tornadoes.",
          },
          {
            id: "homes",
            year: "1942",
            label: "Gadsden Green Homes opens.",
            why: "The marker says that over the protest of local residents, the City of Charleston subsequently demolished much of the neighborhood to build Gadsden Green Homes, a segregated public housing complex opened in 1942.",
          },
        ],
        ["tornadoes", "began", "homes", "community"],
      ),
      takeaway([
        "The neighborhood of Gadsden Green, also called Fiddlers Green or Back da Green, began around 1852. In that year, landowner and prolific slave trader Thomas N. Gadsden subdivided a tract currently bounded by Cannon St., President St., and Gadsden Creek. The marsh at that time extended several blocks further inland along Line St.",
        "By 1900 the area was a racially diverse but mostly Black community with 1- and 2-story homes, small grocery stores, a shipyard, wharf, and sawmill.",
        "In 1938 the neighborhood was damaged by tornadoes. Over the protest of local residents, the City of Charleston subsequently demolished much of the neighborhood to build Gadsden Green Homes, a segregated public housing complex opened in 1942 and expanded in 1968. From 1954 to 1970, the City filled Gadsden Creek and 100 acres of saltmarsh with municipal waste and soil for a City dump and urban development, in what had been a popular fishing and swimming spot.",
      ]),
    ],
  ),
];
