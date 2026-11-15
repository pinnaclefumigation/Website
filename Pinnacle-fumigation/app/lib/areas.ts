export type Province = "Gauteng" | "KwaZulu-Natal" | "Western Cape";

export interface Region {
  name: string;
  slug: string;
  province: Province;
  /** One-line character sketch of the region, reused across its suburb pages. */
  blurb: string;
  suburbs: string[];
}

export interface Suburb {
  name: string;
  slug: string;
  region: string;
  regionSlug: string;
  province: Province;
  blurb: string;
}

export const PROVINCE_NOTES: Record<
  Province,
  { climate: string; pestFocus: string[] }
> = {
  Gauteng: {
    climate:
      "Gauteng's high-veld summers bring heavy afternoon rain that pushes ants, cockroaches and rodents indoors, while established gardens and roof voids give termites and spiders year-round shelter.",
    pestFocus: ["Cockroaches", "Ants", "Rodents", "Spiders"],
  },
  "KwaZulu-Natal": {
    climate:
      "KwaZulu-Natal's subtropical heat and humidity keep pest pressure high all year — American cockroaches, termites and mosquitoes thrive in the warm, moist conditions along the coast and inland.",
    pestFocus: ["Cockroaches", "Termites", "Ticks", "Rodents"],
  },
  "Western Cape": {
    climate:
      "The Western Cape's wet winters drive rodents and damp-loving pests into roof spaces and old Cape wall cavities, while the long, dry summer brings ants and spiders indoors looking for moisture.",
    pestFocus: ["Rodents", "Ants", "Spiders", "Silverfish"],
  },
};

export const REGIONS: Region[] = [
  // ───────────────────────── GAUTENG ─────────────────────────
  {
    name: "Johannesburg Central & North",
    slug: "johannesburg-central-north",
    province: "Gauteng",
    blurb:
      "leafy, established suburbs and busy commercial nodes across northern Johannesburg",
    suburbs: [
      "Sandton",
      "Randburg",
      "Rosebank",
      "Melville",
      "Parktown",
      "Houghton",
      "Linden",
      "Northcliff",
      "Cresta",
      "Fontainebleau",
      "Craighall",
      "Illovo",
      "Hyde Park",
      "Parkhurst",
      "Greenside",
      "Emmarentia",
      "Auckland Park",
      "Brixton",
      "Melrose",
      "Rivonia",
    ],
  },
  {
    name: "Midrand & Fourways Corridor",
    slug: "midrand-fourways-corridor",
    province: "Gauteng",
    blurb:
      "fast-growing residential estates and office parks along the N1 between Johannesburg and Pretoria",
    suburbs: [
      "Midrand",
      "Fourways",
      "Bryanston",
      "Sunninghill",
      "Woodmead",
      "Kyalami",
      "Lonehill",
      "Douglasdale",
      "Honeydew",
      "Diepsloot",
      "Noordwyk",
      "Vorna Valley",
      "Carlswald",
    ],
  },
  {
    name: "East Rand",
    slug: "east-rand",
    province: "Gauteng",
    blurb:
      "established residential suburbs, industrial parks and retail nodes stretching from Edenvale to Springs",
    suburbs: [
      "Edenvale",
      "Bedfordview",
      "Germiston",
      "Boksburg",
      "Benoni",
      "Springs",
      "Kempton Park",
      "Alberton",
      "Brakpan",
      "Nigel",
      "Kensington",
      "Primrose",
      "Birchleigh",
      "Rynfield",
      "Dawn Park",
      "Comet",
      "Impala Park",
      "Van Riebeeck Park",
      "Sunward Park",
    ],
  },
  {
    name: "West Rand",
    slug: "west-rand",
    province: "Gauteng",
    blurb:
      "mining-belt towns and residential suburbs along the N14 corridor west of Johannesburg",
    suburbs: [
      "Roodepoort",
      "Krugersdorp",
      "Randfontein",
      "Westonaria",
      "Carletonville",
      "Fochville",
      "Florida",
      "Weltevredenpark",
      "Constantia Kloof",
      "Horizon",
      "Wilgeheuwel",
      "Little Falls",
      "Ruimsig",
      "Davidsonville",
      "Kagiso",
    ],
  },
  {
    name: "South Rand & Vaal",
    slug: "south-rand-vaal",
    province: "Gauteng",
    blurb:
      "Johannesburg's southern suburbs and the Vaal Triangle's residential and industrial belt",
    suburbs: [
      "Soweto",
      "Lenasia",
      "Orange Farm",
      "Eldorado Park",
      "Protea Glen",
      "Zola",
      "Diepkloof",
      "Jabulani",
      "Vereeniging",
      "Vanderbijlpark",
      "Meyerton",
      "Sebokeng",
      "Heidelberg",
      "Three Rivers",
      "Evaton",
      "Rust Ter Vaal",
      "Henley on Klip",
    ],
  },
  {
    name: "Pretoria & Centurion",
    slug: "pretoria-centurion",
    province: "Gauteng",
    blurb:
      "the capital's government, university and residential districts spanning Pretoria and Centurion",
    suburbs: [
      "Pretoria Central",
      "Centurion",
      "Hatfield",
      "Menlyn",
      "Brooklyn",
      "Waterkloof",
      "Montana",
      "Wonderboom",
      "Akasia",
      "Silverton",
      "Garsfontein",
      "Faerie Glen",
      "Mamelodi",
      "Atteridgeville",
      "Soshanguve",
      "Pretoria North",
      "Moot",
      "Sunnyside",
      "Lynnwood",
      "Silver Lakes",
      "Midstream",
    ],
  },

  // ───────────────────────── KWAZULU-NATAL ─────────────────────────
  {
    name: "Durban Central & Berea",
    slug: "durban-central-berea",
    province: "KwaZulu-Natal",
    blurb:
      "Durban's inner-city and Berea ridge suburbs, dense with apartments, offices and older housing stock",
    suburbs: [
      "Durban CBD",
      "Berea",
      "Glenwood",
      "Morningside",
      "Musgrave",
      "Umbilo",
      "Point Waterfront",
      "Greyville",
      "Essenwood",
      "Overport",
      "Sydenham",
      "Reservoir Hills",
    ],
  },
  {
    name: "North Durban & Umhlanga",
    slug: "north-durban-umhlanga",
    province: "KwaZulu-Natal",
    blurb:
      "the warm, humid North Coast running from Durban North through Umhlanga to Ballito",
    suburbs: [
      "Durban North",
      "Umhlanga",
      "La Lucia",
      "Mount Edgecombe",
      "Ballito",
      "Umdloti",
      "Zimbali",
      "Phoenix",
      "Tongaat",
      "Verulam",
      "KwaDukuza",
      "Newlands East",
    ],
  },
  {
    name: "Durban South & South Coast",
    slug: "durban-south-south-coast",
    province: "KwaZulu-Natal",
    blurb:
      "industrial and residential suburbs south of Durban, running down the humid South Coast",
    suburbs: [
      "Chatsworth",
      "Amanzimtoti",
      "Umkomaas",
      "Isipingo",
      "Queensburgh",
      "Yellowwood Park",
      "Clairwood",
      "Bluff",
      "Scottburgh",
      "Port Shepstone",
      "Margate",
      "Uvongo",
      "Southbroom",
    ],
  },
  {
    name: "Upper Highway & West",
    slug: "upper-highway-west",
    province: "KwaZulu-Natal",
    blurb:
      "the cooler, leafy Upper Highway suburbs between Durban and the Midlands",
    suburbs: [
      "Westville",
      "Pinetown",
      "Hillcrest",
      "Kloof",
      "New Germany",
      "Waterfall",
      "Gillitts",
      "Assagay",
      "Shongweni",
    ],
  },
  {
    name: "Pietermaritzburg & Midlands",
    slug: "pietermaritzburg-midlands",
    province: "KwaZulu-Natal",
    blurb:
      "the provincial capital and the farming towns of the KZN Midlands",
    suburbs: [
      "Pietermaritzburg",
      "Howick",
      "Hilton",
      "Mooi River",
      "Ashburton",
      "Hayfields",
      "Montrose",
      "Scottsville",
    ],
  },
  {
    name: "Zululand & Northern KZN",
    slug: "zululand-northern-kzn",
    province: "KwaZulu-Natal",
    blurb:
      "the industrial and coastal towns of Zululand and northern KwaZulu-Natal",
    suburbs: ["Richards Bay", "Empangeni", "Newcastle"],
  },

  // ───────────────────────── WESTERN CAPE ─────────────────────────
  {
    name: "Northern Suburbs",
    slug: "northern-suburbs",
    province: "Western Cape",
    blurb:
      "Cape Town's Northern Suburbs, from Parow and Bellville through to Durbanville and Kraaifontein",
    suburbs: [
      "Parow",
      "Ravensmead",
      "Eerste River",
      "Bellville",
      "Goodwood",
      "Kraaifontein",
      "Durbanville",
      "Brackenfell",
      "Kuils River",
      "Belhar",
      "Delft",
      "Bellville South",
      "Elsies River",
      "Welgemoed",
      "Edgemead",
    ],
  },
  {
    name: "Cape Flats",
    slug: "cape-flats",
    province: "Western Cape",
    blurb: "the densely populated residential communities of the Cape Flats",
    suburbs: [
      "Mitchells Plain",
      "Khayelitsha",
      "Athlone",
      "Bonteheuwel",
      "Philippi",
      "Gugulethu",
      "Nyanga",
      "Manenberg",
      "Hanover Park",
      "Lansdowne",
    ],
  },
  {
    name: "City Bowl & Atlantic Seaboard",
    slug: "city-bowl-atlantic-seaboard",
    province: "Western Cape",
    blurb:
      "Cape Town's city centre and the sought-after Atlantic Seaboard suburbs beneath Table Mountain",
    suburbs: [
      "Cape Town CBD",
      "Sea Point",
      "Green Point",
      "Camps Bay",
      "Gardens",
      "Woodstock",
      "Observatory",
      "Tamboerskloof",
      "Vredehoek",
      "Mouille Point",
      "Clifton",
    ],
  },
  {
    name: "Southern Suburbs",
    slug: "southern-suburbs",
    province: "Western Cape",
    blurb:
      "the tree-lined Southern Suburbs along the eastern slopes of Table Mountain",
    suburbs: [
      "Claremont",
      "Rondebosch",
      "Wynberg",
      "Constantia",
      "Tokai",
      "Plumstead",
      "Diep River",
      "Newlands",
      "Mowbray",
      "Pinelands",
      "Kenilworth",
    ],
  },
  {
    name: "South Peninsula",
    slug: "south-peninsula",
    province: "Western Cape",
    blurb:
      "the coastal villages of the deep South Peninsula, from Muizenberg to Simon's Town",
    suburbs: [
      "Muizenberg",
      "Fish Hoek",
      "Simon's Town",
      "Noordhoek",
      "Kalk Bay",
      "Hout Bay",
      "Kommetjie",
      "Scarborough",
    ],
  },
  {
    name: "West Coast & Winelands",
    slug: "west-coast-winelands",
    province: "Western Cape",
    blurb:
      "the West Coast suburbs and the Winelands towns on Cape Town's eastern edge",
    suburbs: [
      "Milnerton",
      "Table View",
      "Bloubergstrand",
      "Century City",
      "Somerset West",
      "Strand",
      "Gordon's Bay",
      "Stellenbosch",
      "Paarl",
      "Wellington",
    ],
  },
  {
    name: "Garden Route",
    slug: "garden-route",
    province: "Western Cape",
    blurb: "the coastal towns of the Garden Route east of the Winelands",
    suburbs: ["George", "Knysna"],
  },
];

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const ALL_SUBURBS: Suburb[] = REGIONS.flatMap((region) =>
  region.suburbs.map((name) => ({
    name,
    slug: slugify(name),
    region: region.name,
    regionSlug: region.slug,
    province: region.province,
    blurb: region.blurb,
  }))
);

// Fail loudly at build time if two suburbs ever resolve to the same slug,
// since that would silently overwrite one of the generated static pages.
const seenSlugs = new Map<string, string>();
for (const suburb of ALL_SUBURBS) {
  const existing = seenSlugs.get(suburb.slug);
  if (existing) {
    throw new Error(
      `Duplicate suburb slug "${suburb.slug}" from "${suburb.name}" and "${existing}". Rename one in app/lib/areas.ts.`
    );
  }
  seenSlugs.set(suburb.slug, suburb.name);
}

export function getSuburbBySlug(slug: string): Suburb | undefined {
  return ALL_SUBURBS.find((s) => s.slug === slug);
}

export function getRegionBySlug(slug: string): Region | undefined {
  return REGIONS.find((r) => r.slug === slug);
}

export function getRegionsByProvince(province: Province): Region[] {
  return REGIONS.filter((r) => r.province === province);
}

/**
 * Picks nearby suburbs from the same region (wrapping around the list),
 * so every suburb page links to a different, genuinely local set of
 * neighbours instead of the same fixed group.
 */
export function getNearbySuburbs(suburb: Suburb, count = 5): Suburb[] {
  const siblings = ALL_SUBURBS.filter(
    (s) => s.regionSlug === suburb.regionSlug && s.slug !== suburb.slug
  );
  const startIndex = siblings.findIndex((s) => s.name > suburb.name);
  const ordered =
    startIndex === -1
      ? siblings
      : [...siblings.slice(startIndex), ...siblings.slice(0, startIndex)];
  return ordered.slice(0, Math.min(count, ordered.length));
}

export const PROVINCES: Province[] = [
  "Gauteng",
  "KwaZulu-Natal",
  "Western Cape",
];
