export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  orderedList?: string[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: string;
  heroImage?: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  intro: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  relatedSlugs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bed-bugs",
    title: "Bed Bugs: Signs, Causes and How to Get Rid of Them",
    excerpt:
      "How to spot a bed bug infestation early, what causes one, and the treatment steps that actually get rid of them for good.",
    metaDescription:
      "Learn how to identify bed bugs, what causes an infestation, and the proven steps to get rid of bed bugs for good — plus when to call a professional.",
    category: "Bed Bugs",
    heroImage: "/bedbug.jpeg",
    publishedDate: "2025-02-10",
    updatedDate: "2026-09-01",
    readingTime: "7 min read",
    intro: [
      "Bed bugs (Cimex lectularius) are small, flat, reddish-brown insects that feed on human blood while you sleep. They don't fly and can't jump far, but they spread easily between rooms, beds and buildings by hitching a ride in luggage, furniture and clothing.",
      "An infestation can take hold quietly for weeks before it's noticed, which is why knowing the early warning signs matters as much as knowing how to treat one.",
    ],
    sections: [
      {
        heading: "Signs of a Bed Bug Infestation",
        list: [
          "Clusters or lines of bite marks, often on arms, legs and shoulders, that appear after sleeping",
          "Small rust- or dark-coloured spots on sheets and mattress seams — these are bed bug droppings",
          "A musty, sweetish odour in the room when numbers are high",
          "Tiny pale eggs, shed skins, or the bugs themselves in mattress seams and crevices",
          "Small blood smears on bedding from crushed bugs",
        ],
      },
      {
        heading: "Where Bed Bugs Hide",
        paragraphs: [
          "Bed bugs favour tight seams and cracks close to where people sleep. The most common hiding spots are mattress and box spring seams, bed frame joints, skirting boards, behind loose wallpaper, inside picture frames, and in upholstered furniture.",
        ],
        list: [
          "Mattress and box spring seams",
          "Bed frames and headboards",
          "Skirting boards and carpet edges",
          "Upholstered chairs and sofas",
          "Suitcases and other luggage",
        ],
      },
      {
        heading: "What Causes a Bed Bug Infestation",
        paragraphs: [
          "Bed bugs aren't a sign of a dirty home — they're a sign of contact with an infested item or space. They travel most often in luggage after staying in an infested hotel room, in secondhand furniture or mattresses, and between units in apartment blocks and hotels where they move along pipes and through shared walls.",
        ],
      },
      {
        heading: "How to Get Rid of Bed Bugs",
        paragraphs: [
          "Because bed bugs hide deep in seams and structural gaps, DIY sprays alone rarely reach every bug and every egg. A thorough approach combines preparation with targeted treatment.",
        ],
        orderedList: [
          "Confirm the infestation — identify live bugs, eggs or droppings before treating, since several other insects are mistaken for bed bugs",
          "Declutter the room and vacuum mattresses, bed frames, skirting boards and carpet edges thoroughly",
          "Wash all bedding and clothing on the hottest safe setting, or heat-treat items that can't be washed",
          "Pull the bed away from walls and remove skirts/valances so bugs can't climb up undetected",
          "Have a professional apply targeted chemical or heat treatment to the room, including cracks, seams and voids",
          "Book a follow-up treatment 10–14 days later to catch any eggs that hatched after the first visit",
        ],
      },
      {
        heading: "Preventing Bed Bugs From Coming Back",
        list: [
          "Inspect secondhand furniture and mattresses closely before bringing them indoors",
          "Use a protective, zip-sealed encasement on mattresses and box springs",
          "Vacuum bedrooms regularly, paying attention to seams and skirting boards",
          "Check luggage and clothing after staying away from home, especially after hotel stays",
        ],
      },
      {
        heading: "When to Call a Professional",
        paragraphs: [
          "If bites are appearing daily, if you've found bugs in more than one room, or if a first round of DIY treatment hasn't stopped the problem within a week or two, it's time to bring in a professional. Bed bugs are resilient and a partial treatment can leave enough survivors to rebuild the infestation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I get rid of bed bugs without professional help?",
        answer:
          "For a very small, early-stage infestation confined to one item, thorough cleaning and heat treatment can help. For anything beyond that, professional treatment is far more reliable — bed bugs hide in gaps that household sprays and steam often can't fully reach, and surviving eggs can restart the problem within weeks.",
      },
      {
        question: "Do bed bugs mean my home is dirty?",
        answer:
          "No. Bed bugs are attracted to people, not dirt — they feed on blood, not food waste or clutter. Spotlessly clean homes and five-star hotels get bed bugs too, usually from a guest's luggage or secondhand furniture.",
      },
      {
        question: "How long does professional bed bug treatment take?",
        answer:
          "Most infestations need an initial treatment followed by a check-up and, in many cases, a second treatment 10–14 days later to deal with any eggs that have since hatched. Full resolution typically takes two to four weeks from the first visit.",
      },
    ],
    relatedSlugs: ["how-to-get-rid-of-cockroaches", "how-to-get-rid-of-rodents"],
  },
  {
    slug: "how-to-get-rid-of-cockroaches",
    title: "How to Get Rid of Cockroaches: A Complete Guide",
    excerpt:
      "Why cockroaches move in, the health risks they bring, and a step-by-step plan for getting rid of them — from deep cleaning to professional treatment.",
    metaDescription:
      "Find out how to get rid of cockroaches for good. Learn the signs of an infestation, what attracts cockroaches, and the treatment steps that work.",
    category: "Cockroaches",
    heroImage: "/single-cockroach.jpeg",
    publishedDate: "2025-01-22",
    updatedDate: "2026-09-01",
    readingTime: "8 min read",
    intro: [
      "Cockroaches (order Blattodea) are among the most common household pests in South Africa, and among the most persistent. The two species seen most often in homes and businesses are the German cockroach, which thrives indoors year-round, and the American cockroach, which prefers warm, humid spaces like drains and basements.",
      "Because cockroaches reproduce quickly and hide during the day, a small sighting usually points to a much larger population out of view.",
    ],
    sections: [
      {
        heading: "Signs You Have a Cockroach Infestation",
        list: [
          "Dark, pepper-like droppings along skirting boards, in cupboards and under appliances",
          "A persistent musty, oily odour in kitchens and bathrooms",
          "Egg cases (oothecae) in hidden, warm areas such as behind the fridge or stove",
          "Shed skins from nymphs as they grow",
          "Live roaches seen at night or when a light is switched on in the dark",
        ],
      },
      {
        heading: "Why Cockroaches Are a Health Risk",
        paragraphs: [
          "Cockroaches pick up bacteria from drains, bins and rotting food, then carry it across kitchen surfaces, crockery and food. Their droppings and shed skins are also a recognised trigger for allergies and asthma, particularly in children. A cockroach problem is as much a hygiene issue as a nuisance.",
        ],
      },
      {
        heading: "What Attracts Cockroaches",
        list: [
          "Food residue on counters, stovetops and inside cupboards",
          "Standing water, leaking pipes and condensation",
          "Clutter and cardboard, which provide shelter and egg-laying sites",
          "Warmth from appliances such as fridges, stoves and geysers",
        ],
      },
      {
        heading: "How to Get Rid of Cockroaches Step by Step",
        orderedList: [
          "Identify hotspots — check behind and under appliances, inside cupboards, and around drains for droppings or egg cases",
          "Deep clean kitchens and bathrooms, including behind appliances and inside cupboard joints where crumbs collect",
          "Fix leaks and reduce standing water, since cockroaches can't survive long without a water source",
          "Seal cracks, gaps around pipes, and spaces under doors where roaches travel between units",
          "Apply a professional-grade gel bait or targeted treatment to active areas — this reaches roaches hiding in voids that sprays can't",
          "Schedule a follow-up inspection two to three weeks later to confirm the treatment has broken the breeding cycle",
        ],
      },
      {
        heading: "DIY vs Professional Cockroach Treatment",
        paragraphs: [
          "Store-bought sprays kill roaches on contact but rarely reach the egg cases and nests hidden inside wall voids, behind appliances and under flooring. Professional treatment uses targeted baiting and residual products that roaches carry back to the colony, breaking the infestation at its source rather than just reducing what's visible.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the fastest way to get rid of cockroaches?",
        answer:
          "A combination of a deep clean to remove food and water sources, sealing entry points, and a professional gel bait or targeted treatment works fastest. Sprays alone give quick but short-lived results because they don't reach roaches hiding in voids and egg cases.",
      },
      {
        question: "Are cockroaches dangerous?",
        answer:
          "Cockroaches don't typically bite, but they spread bacteria picked up from drains and waste onto food and surfaces, and their droppings and shed skins can trigger allergies and asthma. They're considered a genuine health risk, not just an unpleasant sighting.",
      },
      {
        question: "How often should I have cockroach treatment done?",
        answer:
          "For an active infestation, an initial treatment plus a follow-up two to three weeks later is standard. For ongoing prevention in restaurants, kitchens or older buildings, a quarterly maintenance treatment is a common precaution.",
      },
    ],
    relatedSlugs: ["cockroach-species", "how-to-get-rid-of-flies"],
  },
  {
    slug: "cockroach-species",
    title: "Cockroach Species Guide: Identifying Common Types in South Africa",
    excerpt:
      "German, American, Oriental and brown-banded cockroaches look and behave differently — here's how to tell them apart and why it changes how they're treated.",
    metaDescription:
      "A guide to the most common cockroach species found in South African homes and businesses, how to identify each one, and why correct identification matters for treatment.",
    category: "Cockroaches",
    heroImage: "/cockroach-species-illustration.jpeg",
    publishedDate: "2025-03-05",
    updatedDate: "2026-09-01",
    readingTime: "6 min read",
    intro: [
      "Not all cockroaches behave the same way, and treating the wrong species the wrong way wastes time and money. The species below are the ones our technicians identify most often during inspections in South African homes and businesses.",
    ],
    sections: [
      {
        heading: "German Cockroach (Blattella germanica)",
        paragraphs: [
          "Small — around 13 to 16mm — light brown to tan, with two dark parallel stripes running down the back. The German cockroach is the most common species found indoors, favouring warm, humid spots in kitchens and bathrooms close to food and water. It also reproduces faster than any other common species, which is why small sightings can turn into large infestations within weeks.",
        ],
      },
      {
        heading: "American Cockroach (Periplaneta americana)",
        paragraphs: [
          "Large — 30 to 40mm — reddish-brown with a pale marking behind the head. Despite the name, it's common across South Africa, especially in warm, humid conditions. It prefers drains, basements, roof voids and sewer connections, and tends to move indoors from outside during wet weather, making it a frequent sight in coastal and subtropical regions.",
        ],
      },
      {
        heading: "Oriental Cockroach (Blatta orientalis)",
        paragraphs: [
          "Dark brown to almost black with a glossy sheen. The Oriental cockroach prefers cool, damp, dark spaces such as basements, crawl spaces and drains, and is a slower mover than the German or American species. Its presence often points to a persistent damp or moisture issue nearby.",
        ],
      },
      {
        heading: "Brown-Banded Cockroach (Supella longipalpa)",
        paragraphs: [
          "Smaller than the German cockroach, with lighter, more widely spaced bands across the body. Unlike most cockroaches, it prefers warmer, drier areas and is often found away from the kitchen — inside electronics, furniture, and upper cupboards.",
        ],
      },
      {
        heading: "Why Correct Identification Matters",
        paragraphs: [
          "Each species favours different hiding spots, moisture levels and food sources, so a treatment plan built for a German cockroach kitchen infestation won't necessarily touch an Oriental cockroach problem in a damp basement. A proper inspection identifies the species first, then targets the specific conditions that are letting it thrive.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which cockroach species is most common in South African homes?",
        answer:
          "The German cockroach is the most frequently found species indoors nationwide, while the American cockroach is especially common in warmer, more humid regions such as KwaZulu-Natal and along the coast.",
      },
      {
        question: "Do all cockroach species need the same treatment?",
        answer:
          "No. Treatment depends on where the species hides and what conditions it needs to survive. A damp-loving Oriental cockroach problem, for example, needs the moisture source addressed alongside treatment, while a German cockroach infestation is usually tackled with targeted baiting in kitchens and bathrooms.",
      },
    ],
    relatedSlugs: ["how-to-get-rid-of-cockroaches"],
  },
  {
    slug: "how-to-get-rid-of-flies",
    title: "How to Get Rid of Flies in Your Home or Business",
    excerpt:
      "Flies breed fast and spread bacteria from waste onto food and surfaces. Here's how to find the source and get rid of them for good.",
    metaDescription:
      "Learn how to get rid of flies, what attracts them to your home or business, and the steps — from source removal to professional fogging — that stop an infestation returning.",
    category: "Flies",
    publishedDate: "2025-04-18",
    updatedDate: "2026-09-01",
    readingTime: "6 min read",
    intro: [
      "Houseflies and their relatives breed in a matter of days, which is why a handful of flies can turn into a persistent problem almost overnight. They're also a genuine hygiene concern — flies move between waste, drains and food surfaces, carrying bacteria with them every time they land.",
    ],
    sections: [
      {
        heading: "Signs of a Fly Problem",
        list: [
          "Flies gathering around bins, drains or food preparation areas",
          "Small, dark eggs or maggots in bins, compost or pet waste",
          "Flies persisting indoors even after obvious food is cleared away",
          "A sudden increase in numbers after warm or wet weather",
        ],
      },
      {
        heading: "What Attracts Flies",
        list: [
          "Exposed food waste and overflowing bins",
          "Pet waste left in gardens or yards",
          "Overripe fruit and vegetables left out",
          "Dirty drains, where organic buildup provides an ideal breeding site",
          "Standing water and poorly sealed compost areas",
        ],
      },
      {
        heading: "How to Get Rid of Flies Step by Step",
        orderedList: [
          "Locate the breeding source — flies are rarely the problem on their own; they're a sign something nearby is breeding them",
          "Remove or seal waste sources, including bins, pet waste and food scraps, and keep lids tightly closed",
          "Clean drains thoroughly, since organic residue inside pipes is one of the most overlooked fly breeding sites",
          "Fit fly screens on windows and doors, and use traps in problem areas as an interim measure",
          "For persistent or large-scale infestations — especially in restaurants, warehouses or food facilities — book a professional ULV fogging treatment to knock down the adult population while the source is addressed",
        ],
      },
      {
        heading: "Preventing Flies From Returning",
        list: [
          "Keep bins sealed and take out waste regularly, especially in warm weather",
          "Clean drains on a routine schedule, not just when flies appear",
          "Store fruit, vegetables and pet food away from open air",
          "Repair torn or missing fly screens promptly",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do I have flies even though my home is clean?",
        answer:
          "Flies are often breeding somewhere out of sight — inside a drain, a bin that looks clean on the outside, or a neighbouring property. A visibly tidy home doesn't rule out a hidden breeding source, which is why persistent fly problems usually need a proper inspection rather than just more cleaning.",
      },
      {
        question: "Can flies actually spread disease?",
        answer:
          "Yes. Flies move between contaminated surfaces like waste and drains and then land on food preparation areas and food itself, transferring bacteria as they go. This makes fly control a genuine hygiene priority in kitchens, restaurants and food storage areas.",
      },
    ],
    relatedSlugs: ["how-to-get-rid-of-cockroaches", "how-to-get-rid-of-ants"],
  },
  {
    slug: "how-to-get-rid-of-ants",
    title: "How to Get Rid of Ants: Causes, Prevention and Treatment",
    excerpt:
      "Spraying the trail you can see rarely solves an ant problem. Here's how colonies actually work, and how to treat the nest instead of just the symptoms.",
    metaDescription:
      "Find out why ants enter your home, how to get rid of an ant infestation at the source, and how to stop them coming back — including when a spray alone won't work.",
    category: "Ants",
    heroImage: "/ants.jpeg",
    publishedDate: "2025-05-09",
    updatedDate: "2026-09-01",
    readingTime: "6 min read",
    intro: [
      "Ants (family Formicidae) are social insects that live in large colonies built around a nest and a queen. The ants seen walking across a kitchen counter are worker ants on a scent trail — treating just that trail removes a handful of workers while the colony that produced them carries on undisturbed.",
    ],
    sections: [
      {
        heading: "Signs of an Ant Infestation",
        list: [
          "Visible trails of ants following the same path day after day",
          "Small mounds of soil near foundations, paving or garden beds",
          "Ants appearing suddenly indoors after rain or a change in weather",
          "Discarded wings near windowsills, which can indicate a nearby nest preparing to expand",
        ],
      },
      {
        heading: "Why Ants Enter Homes",
        paragraphs: [
          "Ants come inside chasing food and moisture, and weather plays a bigger role than most people expect. Heavy rain can flood outdoor nests and push colonies indoors in search of dry shelter, which is why ant activity often spikes during Gauteng's summer storms. In drier regions, ants move in during long dry spells in search of water instead.",
        ],
      },
      {
        heading: "How to Get Rid of Ants Step by Step",
        orderedList: [
          "Trace the trail back as far as possible to locate the nest or entry point, rather than only treating where ants are visible",
          "Clean up food sources and spills promptly, and store food — including pet food — in sealed containers",
          "Seal cracks around windows, doors and foundations where ants are entering",
          "Use bait rather than contact spray where possible — bait is carried back to the colony and queen, which sprays can't reach",
          "For large, persistent, or structural colonies, have a professional apply targeted treatment directly to the nest",
        ],
      },
      {
        heading: "Preventing Ants Long-Term",
        list: [
          "Wipe down counters and sweep floors regularly, especially after cooking",
          "Fix leaking taps and irrigation that keep garden soil consistently damp near the house",
          "Trim vegetation and mulch away from exterior walls, which ants use as cover to approach the house",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do ant sprays only seem to work temporarily?",
        answer:
          "Contact sprays kill the worker ants you can see, but the nest and queen — often hidden underground or inside a wall — are untouched. New workers simply replace the ones that were sprayed, which is why the trail often reappears within days.",
      },
      {
        question: "Are ants dangerous, or just a nuisance?",
        answer:
          "Most common household ants are a nuisance rather than a health hazard, contaminating food rather than spreading disease. Some species can cause structural damage to timber or deliver painful bites or stings, which is when professional treatment becomes a priority rather than a convenience.",
      },
    ],
    relatedSlugs: ["how-to-get-rid-of-flies", "how-to-get-rid-of-rodents"],
  },
  {
    slug: "how-to-get-rid-of-rodents",
    title: "How to Get Rid of Rats and Mice: Signs, Risks and Removal",
    excerpt:
      "Rodents breed quickly, gnaw through wiring, and contaminate food — here's how to spot an infestation early and remove it safely.",
    metaDescription:
      "Learn the signs of a rat or mouse infestation, the health and property risks rodents bring, and the steps to get rid of them safely — including when to call a professional.",
    category: "Rodents",
    heroImage: "/rats.jpeg",
    publishedDate: "2025-06-02",
    updatedDate: "2026-09-01",
    readingTime: "7 min read",
    intro: [
      "Rats and mice (Rattus and Mus species) are nocturnal, fast-breeding rodents that can establish themselves in a roof void, wall cavity or storeroom long before they're seen. By the time scratching is heard at night, an infestation is usually already established.",
    ],
    sections: [
      {
        heading: "Signs of a Rodent Infestation",
        list: [
          "Droppings along skirting boards, in cupboards, or in roof spaces",
          "Gnaw marks on food packaging, skirting, wiring and wood",
          "Scratching or scurrying sounds in ceilings and walls, usually at night",
          "Dark grease marks along skirting boards and frequently used runways",
          "Nests made of shredded paper, fabric or insulation in hidden corners",
        ],
      },
      {
        heading: "Health and Property Risks",
        paragraphs: [
          "Rodents contaminate food and surfaces with droppings and urine, and are known carriers of several diseases transmissible to humans. They're also a genuine property risk — rodents gnaw continuously to keep their teeth from overgrowing, and chewed electrical wiring is a recognised cause of household fires.",
        ],
      },
      {
        heading: "How to Get Rid of Rodents Step by Step",
        orderedList: [
          "Identify entry points and nesting areas — check roof voids, gaps under doors, and where pipes or cables enter the building",
          "Remove easy food and water access, storing food in sealed containers and fixing dripping taps",
          "Seal gaps larger than a pencil's width, since mice can squeeze through surprisingly small openings",
          "Place traps or bait stations strategically along known runways, not just where droppings are seen",
          "Have a professional handle placement, especially where children or pets are present, and follow up to confirm activity has stopped",
        ],
      },
      {
        heading: "Preventing Rodents From Returning",
        list: [
          "Seal entry points permanently once activity has stopped, including around roof eaves and vents",
          "Keep stored food, including pet food and bird seed, in sealed containers off the floor",
          "Trim tree branches and vegetation away from the roofline, which rodents use to access buildings",
          "Schedule periodic inspections in older properties or those bordering open land",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I know if I have rats or mice?",
        answer:
          "Droppings are the quickest clue — rat droppings are larger (around 12–18mm) and more rounded, while mouse droppings are smaller (around 3–6mm) and more pointed at the ends. Gnaw marks and the width of gaps rodents fit through can also indicate which species is present.",
      },
      {
        question: "Is professional rodent control safe for children and pets?",
        answer:
          "Yes, when handled correctly. Professional technicians use enclosed, tamper-resistant bait stations and place traps away from areas pets and children access, which is one of the main reasons professional placement is safer than DIY bait left in the open.",
      },
    ],
    relatedSlugs: ["bed-bugs", "signs-of-termites"],
  },
  {
    slug: "signs-of-termites",
    title: "Signs of Termites and How to Protect Your Property",
    excerpt:
      "Termite damage often goes unnoticed until it's extensive. Here's what to look for, how treatment works, and how to protect your property going forward.",
    metaDescription:
      "Learn the early warning signs of termites, why the damage often goes unnoticed, and how professional termite treatment and prevention protects your property.",
    category: "Termites",
    heroImage: "/termites.jpeg",
    publishedDate: "2025-07-14",
    updatedDate: "2026-09-01",
    readingTime: "7 min read",
    intro: [
      "Termites (infraorder Isoptera) feed on cellulose in wood, and because they work from the inside out, a timber structure can look completely normal on the surface while significant damage builds up underneath. Catching the early signs matters more with termites than almost any other household pest.",
    ],
    sections: [
      {
        heading: "Signs of a Termite Infestation",
        list: [
          "Thin mud tubes running up foundations, walls or support posts — these shelter subterranean termites as they travel between soil and timber",
          "Wood that sounds hollow or papery when tapped",
          "Discarded wings near windowsills and doors, left behind after a swarm",
          "Sagging floors, ceilings, or doors and windows that suddenly stick",
          "Visible tunnelling or crumbling wood when damaged timber is examined closely",
        ],
      },
      {
        heading: "Why Termite Damage Is Often Missed",
        paragraphs: [
          "Termites avoid light and typically feed within wall cavities, roof timbers and flooring where they're never seen directly. Damage can progress for months or years before a visible sign — like a mud tube or a soft patch of skirting — finally appears, which is why regular inspections matter far more than waiting for obvious symptoms.",
        ],
      },
      {
        heading: "How Termite Treatment Works",
        orderedList: [
          "A thorough inspection confirms active termite presence and maps the extent of the damage, including areas not yet visibly affected",
          "Targeted treatment is applied to affected timber and the surrounding soil or structure, directly addressing the active colony",
          "A preventative barrier treatment is applied around the property to stop termites re-entering from the soil",
          "Follow-up monitoring confirms the treatment has held and catches any new activity early",
        ],
      },
      {
        heading: "Protecting Your Property From Termites",
        list: [
          "Reduce direct wood-to-soil contact around the property, including stacked firewood and old timber off-cuts against walls",
          "Fix leaking pipes, gutters and damp areas promptly, since moisture draws termites toward timber",
          "Schedule regular termite inspections, especially for older homes or properties with established gardens",
          "Address even small signs — like a few discarded wings — quickly rather than waiting to see if they recur",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I treat termites myself?",
        answer:
          "Store-bought products can kill termites on contact but rarely reach the full colony or stop re-entry from the soil. Because termite damage is structural and often hidden, professional treatment — which combines colony treatment with a preventative barrier — is the reliable way to resolve an infestation fully.",
      },
      {
        question: "How often should I have a termite inspection?",
        answer:
          "An annual inspection is a sound baseline for most properties, with older homes, homes with established gardens, or those that have had previous termite activity benefiting from more frequent checks.",
      },
    ],
    relatedSlugs: ["how-to-get-rid-of-rodents", "bed-bugs"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
}
