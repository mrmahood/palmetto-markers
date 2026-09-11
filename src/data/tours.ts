export type Tour = {
  id: string;
  title: string;
  region: string;
  blurb: string;
  image: string;
  markerIds: string[];
};

export const TOURS: Tour[] = [
  {
    id: "charleston-harbor",
    title: "Charleston Harbor",
    region: "Lowcountry",
    blurb:
      "Palmetto logs, a stolen steamer, and the churches that watched a revolution and a civil war from the same steeples.",
    image: "/images/era-revolution.jpg",
    markerIds: ["10-46", "10-05", "10-11", "10-76", "10-102", "10-06"],
  },
  {
    id: "backcountry",
    title: "Revolutionary Backcountry",
    region: "Upstate",
    blurb:
      "Militia, redcoats, and the partisan war that turned the tide after Charleston fell — from Ninety Six to Camden.",
    image: "/images/era-battlefield.jpg",
    markerIds: ["24-03", "44-07", "46-28", "42-04", "28-01", "12-03"],
  },
  {
    id: "gullah-geechee",
    title: "Gullah Geechee Coast",
    region: "Lowcountry",
    blurb:
      "Penn School, Mitchelville, Emancipation Day, and the Sea Island world that kept a language and a culture through slavery and after.",
    image: "/images/theme-penn.jpg",
    markerIds: ["07-15", "07-23", "07-24", "07-39", "07-35", "07-46"],
  },
  {
    id: "catawba-york",
    title: "Catawba & York County",
    region: "Upstate",
    blurb:
      "The river ford, the mill town, Brattonsville, and the Waxhaws — the piedmont story from Catawba homelands to Fort Mill.",
    image: "/images/theme-native.jpg",
    markerIds: ["46-06", "46-21", "46-45", "46-11", "46-28", "46-76", "29-09"],
  },
  {
    id: "freedom-road",
    title: "Freedom Road",
    region: "Statewide",
    blurb:
      "Schools, massacres, and the long Reconstruction — markers that refuse to look away from who paid for liberty in this state.",
    image: "/images/theme-school.jpg",
    markerIds: ["07-15", "07-23", "10-76", "10-100", "38-27", "02-45"],
  },
  {
    id: "capital",
    title: "Columbia & the Midlands",
    region: "Midlands",
    blurb: "The State House and the city built to sit in the middle of South Carolina on purpose.",
    image: "/images/theme-capitol.jpg",
    markerIds: ["40-122", "40-27", "40-12", "40-188", "40-196", "40-222", "40-37"],
  },
];
