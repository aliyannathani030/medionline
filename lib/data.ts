export type Category = {
  slug: string;
  name: string;
  tagline: string;
  index: string;
  featured?: boolean;
};

export type Product = {
  sku: string;
  name: string;
  category: string;
  price?: number; // left blank until client finalizes pricing
  inStock: boolean;
  image: string;
  bulk?: boolean; // in stock in bulk quantity
  slug?: string; // products with a slug get their own SEO page
  details?: ProductDetails;
};

export type ProductDetails = {
  seoTitle: string;
  seoDescription: string;
  intro: string;
  features: string[];
  specs: { label: string; value: string }[];
  uses: string[];
};

export const categories: Category[] = [
  {
    slug: "hospital-disposables",
    name: "Hospital Disposables & Consumables",
    tagline: "Sterile & single-use essentials for clinical use",
    index: "01 — MOST ORDERED",
    featured: true,
  },
  {
    slug: "surgical-procedure-packs",
    name: "Surgical & Procedure Packs",
    tagline: "Sterile single-use kits for common procedures",
    index: "02",
  },
  {
    slug: "hygiene-personal-care",
    name: "Hygiene & Personal Care",
    tagline: "Everyday wellness and hygiene products",
    index: "03",
  },
];

export const products: Product[] = [
  // Hospital Disposables & Consumables
  {
    sku: "01",
    name: "Ear Plugs — Noise Reduction",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/ear-plugs.jpg",
    slug: "ear-plugs-noise-reduction",
    details: {
      "seoTitle": "Foam Ear Plugs — Noise Reduction (NRR 29 dB) | medionline",
      "seoDescription": "Soft foam ear plugs, NRR 29 dB, 1 pair per pack, for radiology departments and other noisy areas. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "Soft foam ear plugs that reduce noise comfortably. Each pack holds one pair, and they are commonly used in radiology departments where scanners are loud.",
      "features": [
        "Soft foam for a comfortable fit",
        "Noise Reduction Rating (NRR) of 29 dB, as printed on the pack",
        "One pair in each pack"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Foam ear plugs"
        },
        {
          "label": "Noise reduction",
          "value": "NRR 29 dB"
        },
        {
          "label": "Pack",
          "value": "1 pair per pack"
        }
      ],
      "uses": [
        "Radiology departments",
        "Noisy work areas",
        "Travel and sleep"
      ]
    },
  },
  {
    sku: "02",
    name: "PE Gloves — Disposable",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/pe-gloves.jpg",
    bulk: true,
    slug: "disposable-pe-gloves",
    details: {
      seoTitle: "Disposable Embossed PE Gloves (100 pcs) — Bulk Supply | medionline",
      seoDescription:
        "Disposable embossed polyethylene (PE) gloves, 100 pieces per pack, available in bulk quantity from medionline, Karachi. Ask us for bulk pricing.",
      intro:
        "Single-use embossed polyethylene gloves packed 100 pieces to a pack. A practical, low-cost glove for hygiene, cleaning and general non-sterile tasks where gloves are changed often. We hold this item in bulk quantity, so larger orders can be supplied.",
      features: [
        "Embossed PE film for a better grip than smooth film",
        "Disposable, single-use — change as often as needed",
        "100 gloves in every pack",
        "Available in bulk quantity for hospitals, clinics, kitchens and cleaning teams",
      ],
      specs: [
        { label: "Material", value: "Embossed polyethylene (PE)" },
        { label: "Pack size", value: "100 pieces per pack" },
        { label: "Use", value: "Disposable, single use" },
        { label: "Supply", value: "Bulk quantity available" },
      ],
      uses: [
        "Hospital and clinic housekeeping",
        "Food handling and kitchens",
        "Cleaning and hygiene tasks",
        "Labs and general non-sterile work",
      ],
    },
  },
  {
    sku: "03",
    name: "Urine Containers — 60ml / 100ml / 120ml",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/urine-containers.jpg",
    slug: "urine-containers-sample",
    details: {
      "seoTitle": "Urine Sample Containers 60ml / 100ml / 120ml | medionline",
      "seoDescription": "Graduated urine sample containers with screw caps in 60 ml, 100 ml and 120 ml, sterile single packing. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "Clear urine sample containers with a screw cap and printed volume markings. Supplied in sterile single packing, in three sizes.",
      "features": [
        "Sterile, single packing",
        "Clear body with printed volume markings",
        "Screw cap for a secure seal",
        "Sizes: 60 ml, 100 ml and 120 ml"
      ],
      "specs": [
        {
          "label": "Sizes",
          "value": "60 ml, 100 ml, 120 ml"
        },
        {
          "label": "Packing",
          "value": "Sterile, single packing"
        },
        {
          "label": "Closure",
          "value": "Screw cap"
        }
      ],
      "uses": [
        "Urine sample collection",
        "Laboratories and collection centres",
        "Clinics and hospitals"
      ]
    },
  },
  {
    sku: "04",
    name: "Sterile Tubular Bandage",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/sterile-tubular-bandage.jpg",
    slug: "sterile-tubular-bandage",
    details: {
      "seoTitle": "Sterile Tubular Bandage 20cm x 1.5m | medionline",
      "seoDescription": "Sterile tubular bandage, soft, breathable and flexible, 20cm x 1.5m, one piece per pack, single use. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A soft, breathable and flexible tubular bandage supplied sterile, one piece in each peel-open pack.",
      "features": [
        "Soft, breathable and flexible",
        "Sterile (EO), single use only",
        "One piece per pack"
      ],
      "specs": [
        {
          "label": "Size",
          "value": "20cm x 1.5m"
        },
        {
          "label": "Pack",
          "value": "1 piece"
        },
        {
          "label": "Sterilisation",
          "value": "EO, single use only"
        }
      ],
      "uses": [
        "Holding dressings in place",
        "Covering limbs and joints",
        "Hospitals and clinics"
      ]
    },
  },
  {
    sku: "05",
    name: "Gas Sampling Line — 4m",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/gas-sampling-line.jpg",
    slug: "gas-sampling-line-4m",
    details: {
      "seoTitle": "Gas Sampling Line 4m (Single Piece) | medionline",
      "seoDescription": "Gas sampling line, 4 metre, single piece packing, single use. For patient gas monitoring. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A 4 metre gas sampling line, packed one piece per pack. It carries gas samples from the patient circuit to a gas monitor.",
      "features": [
        "4 metre length (type 4M)",
        "Single piece packing",
        "Single use"
      ],
      "specs": [
        {
          "label": "Length",
          "value": "4 m"
        },
        {
          "label": "Quantity",
          "value": "1 piece per pack"
        },
        {
          "label": "Condition",
          "value": "Non-sterile, single use"
        }
      ],
      "uses": [
        "Patient gas monitoring",
        "Operating theatres",
        "ICUs"
      ]
    },
  },
  {
    sku: "06",
    name: "Sterile Gauze Swabs — Pack of 25",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/gauze-swab.jpg",
    bulk: true,
    slug: "sterile-gauze-swabs",
    details: {
      seoTitle: "Sterile Gauze Swabs 8-Ply (Pack of 25) — Bulk | medionline",
      seoDescription:
        "Sterile absorbent gauze swabs, 8-ply, 25 pieces per pack, EO sterilised and single use. Available in bulk quantity from medionline, Karachi.",
      intro:
        "Sterile, absorbent 8-ply gauze swabs supplied 25 pieces per pack. Each pack is sealed and sterilised with ethylene oxide (EO), with a colour indicator that changes after sterilisation. We hold this item in bulk quantity for hospitals, clinics and pharmacies.",
      features: [
        "Sterile and single use — sterile unless the package is damaged or opened",
        "Soft, absorbent 8-ply gauze",
        "25 swabs per sealed pack",
        "Sterilisation indicator: pink before, brown after sterilisation",
      ],
      specs: [
        { label: "Type", value: "Sterile absorbent gauze swab" },
        { label: "Ply", value: "8-ply" },
        { label: "Pack size", value: "25 pieces per pack" },
        { label: "Sterilisation", value: "Ethylene oxide (EO), single use" },
        { label: "Supply", value: "Bulk quantity available" },
      ],
      uses: [
        "Wound cleaning and dressing",
        "Surgical and procedure rooms",
        "Clinics, hospitals and pharmacies",
        "First-aid kits",
      ],
    },
  },
  {
    sku: "07",
    name: "Sterile Cotton Balls",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/cotton-ball.jpg",
    slug: "sterile-cotton-balls",
    details: {
      "seoTitle": "Sterile Cotton Balls (0.5 g, Single Pack) | medionline",
      "seoDescription": "Sterile cotton balls, 0.5 gram each, individually packed and sterilised by EO gas. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "Sterile cotton balls, one 0.5 gram ball in each peel-open pack. Sterilised by EO gas, with a colour indicator that changes after sterilisation.",
      "features": [
        "Sterile by EO gas",
        "0.5 gram ball, one per pack",
        "Peel-open pack",
        "Single use"
      ],
      "specs": [
        {
          "label": "Weight",
          "value": "0.5 gram per ball"
        },
        {
          "label": "Pack",
          "value": "1 ball per pack"
        },
        {
          "label": "Sterilisation",
          "value": "EO gas, single use"
        }
      ],
      "uses": [
        "Skin cleaning and preparation",
        "Wound care",
        "Clinics and hospitals"
      ]
    },
  },
  {
    sku: "08",
    name: "Elastic Crepe Bandage",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/crepe-bandage.jpg",
    slug: "elastic-crepe-bandage",
    details: {
      "seoTitle": "Elastic Crepe Bandage 10cm x 4 yds | medionline",
      "seoDescription": "Elastic crepe bandage, cotton with 15% spandex, 10cm x 4 yds, supplied with clips. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "An elastic crepe bandage made of cotton with 15% spandex, supplied with two fastening clips.",
      "features": [
        "Cotton with 15% spandex",
        "Elastic, for firm even support",
        "Supplied with clips"
      ],
      "specs": [
        {
          "label": "Material",
          "value": "Cotton with 15% spandex"
        },
        {
          "label": "Size",
          "value": "10cm x 4 yds"
        },
        {
          "label": "Fastening",
          "value": "Clips included"
        }
      ],
      "uses": [
        "Support and compression",
        "Securing dressings",
        "Sprains and strains"
      ]
    },
  },
  {
    sku: "09",
    name: "Conformable Bandage — Burn Care",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/conformable-bandage.jpg",
    slug: "conformable-bandage-burn-care",
    details: {
      "seoTitle": "Conformable Bandage 10cm x 4.5m for Burn Areas | medionline",
      "seoDescription": "Conformable elastic bandage, 10cm x 4.5m, used to hold dressings on burn areas and other wounds. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A soft conformable bandage that follows the shape of the body, used to hold dressings in place, including over burn areas.",
      "features": [
        "Conforms to the shape of the body",
        "Holds dressings in place",
        "Size 10cm x 4.5m"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Conformable bandage"
        },
        {
          "label": "Size",
          "value": "10cm x 4.5m"
        }
      ],
      "uses": [
        "Burn care dressings",
        "Wound dressing retention",
        "Hospitals and clinics"
      ]
    },
  },
  {
    sku: "10",
    name: "Maternity / Abdominal Pad — 10 x 30",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/maternity-pad.jpg",
    slug: "maternity-abdominal-pad",
    details: {
      "seoTitle": "Maternity / Abdominal Pad 10 x 30 cm | medionline",
      "seoDescription": "Absorbent maternity and abdominal pad, 10 x 30 cm, for postnatal care and as an abdominal sponge. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A soft, absorbent pad measuring 10 x 30 cm, used for postnatal care and as an abdominal pad in hospitals and clinics.",
      "features": [
        "Soft and absorbent",
        "Size 10 x 30 cm",
        "Suitable for hospitals and clinics"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Maternity / abdominal pad"
        },
        {
          "label": "Size",
          "value": "10 x 30 cm"
        }
      ],
      "uses": [
        "Postnatal care",
        "Abdominal dressings",
        "Hospitals and clinics"
      ]
    },
  },
  {
    sku: "11",
    name: "Surgical Skin Marker",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/skin-marker.jpg",
    slug: "surgical-skin-marker",
    details: {
      "seoTitle": "Surgical Skin Marker — Dual Tip, Single Use | medionline",
      "seoDescription": "Surgical skin marker with fine tip and bullet tip, individually packed with a printed ruler, single use. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A dual-tip skin marker for marking the skin before procedures. One end has a fine tip for precise lines and the other a bullet tip for general marking. Each marker comes in its own pack with a printed ruler.",
      "features": [
        "Fine tip for precise marking",
        "Bullet tip for general marking",
        "Printed ruler on the pack",
        "Individually packed, sterile as marked on the pack"
      ],
      "specs": [
        {
          "label": "Tips",
          "value": "Fine tip and bullet tip"
        },
        {
          "label": "Packing",
          "value": "Individually packed"
        },
        {
          "label": "Use",
          "value": "Single use, medical purpose"
        }
      ],
      "uses": [
        "Marking the skin before surgery",
        "Procedure rooms",
        "Hospitals and clinics"
      ]
    },
  },
  {
    sku: "12",
    name: "Disposable Underwear",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/disposable-underwear.jpg",
    bulk: true,
    slug: "disposable-underwear",
    details: {
      seoTitle: "Disposable Underwear for Hospitals & Clinics — Bulk | medionline",
      seoDescription:
        "Single-use disposable underwear for hospital, clinic and maternity use, individually packed. Available in bulk quantity from medionline, Karachi.",
      intro:
        "Lightweight single-use underwear for patients in hospitals, clinics and maternity wards. Each piece is individually packed, so it stays clean until it is used. We hold this item in bulk quantity for institutions that need regular supply.",
      features: [
        "Single use — no washing, no cross-contamination between patients",
        "Light, soft and breathable",
        "Individually packed",
        "Sizes include 4XL — ask us for other sizes",
      ],
      specs: [
        { label: "Type", value: "Disposable underwear" },
        { label: "Packing", value: "Individually packed" },
        { label: "Sizes", value: "Includes 4XL (ask for other sizes)" },
        { label: "Supply", value: "Bulk quantity available" },
      ],
      uses: [
        "Hospital and clinic patient care",
        "Maternity and post-natal care",
        "Before and after procedures",
        "Elderly care and rehabilitation",
      ],
    },
  },
  {
    sku: "13",
    name: "Philadelphia Tracheotomy Collar",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/tracheotomy-collar.jpg",
    slug: "philadelphia-tracheotomy-collar",
    details: {
      "seoTitle": "Philadelphia Tracheotomy Collar | medionline",
      "seoDescription": "Philadelphia-style neck collar with a front opening for tracheostomy, supplied in a box. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A Philadelphia-style neck collar with an opening at the front for tracheostomy access. Supplied in a box.",
      "features": [
        "Opening at the front for tracheostomy access",
        "Designed for comfort and support",
        "Supplied in a box"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Philadelphia tracheotomy collar"
        },
        {
          "label": "Packing",
          "value": "Boxed"
        }
      ],
      "uses": [
        "Neck support and immobilisation",
        "Patients with a tracheostomy",
        "Hospitals and home care"
      ]
    },
  },

  // Surgical & Procedure Packs
  {
    sku: "14",
    name: "Umbilical Cord Clamp",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/umbilical-cord-clamp.jpg",
    slug: "umbilical-cord-clamp",
    details: {
      "seoTitle": "Sterile Umbilical Cord Clamp (Single Use) | medionline",
      "seoDescription": "Sterile single-use umbilical cord clamp, individually packed, for maternity and labour rooms. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A sterile, single-use clamp for clamping the umbilical cord of a newborn, packed individually.",
      "features": [
        "Sterile and single use",
        "Individually packed",
        "Simple, secure clamping"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Umbilical cord clamp"
        },
        {
          "label": "Condition",
          "value": "Sterile, single use"
        }
      ],
      "uses": [
        "Newborn care after delivery",
        "Labour rooms",
        "Maternity hospitals"
      ]
    },
  },
  {
    sku: "15",
    name: "CVP Insertion Pack",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/cvp-insertion-pack.jpg",
    slug: "cvp-insertion-pack",
    details: {
      "seoTitle": "CVP Insertion Pack (Sterile, Single Use) | medionline",
      "seoDescription": "Sterile single-use CVP insertion pack, prepared with drape, instruments and gauze for central line insertion. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A sterile single-use pack prepared for central venous pressure (CVP) line insertion, so the items needed for the procedure come together in one pack.",
      "features": [
        "Sterile and single use",
        "Procedure items together in one pack",
        "Photo shows drape, instruments and gauze"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "CVP insertion pack"
        },
        {
          "label": "Condition",
          "value": "Sterile, single use"
        },
        {
          "label": "Contents",
          "value": "As printed on the pack — ask us for the full list"
        }
      ],
      "uses": [
        "ICUs",
        "Operating theatres",
        "Hospitals"
      ]
    },
  },
  {
    sku: "16",
    name: "Zip Lock Bio-Specimen Bags",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/ziplock-specimen-bag.jpg",
    slug: "zip-lock-bio-specimen-bags",
    details: {
      "seoTitle": "Zip Lock Bio-Specimen Bags — Printed, Multiple Sizes | medionline",
      "seoDescription": "Transparent zip-lock specimen bags, printed, available in multiple sizes, for lab and hospital use. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "Transparent zip-lock bags for carrying specimens. They can be supplied printed, such as with the warning label shown, and come in multiple sizes.",
      "features": [
        "Transparent bag with a zip-lock closure",
        "Printing available",
        "Available in multiple sizes"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Zip-lock specimen bag"
        },
        {
          "label": "Printing",
          "value": "Printed bags available"
        },
        {
          "label": "Sizes",
          "value": "Multiple sizes"
        }
      ],
      "uses": [
        "Specimen transport",
        "Laboratories and collection centres",
        "Hospitals"
      ]
    },
  },
  {
    sku: "17",
    name: "Mouth Care Pack",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/mouth-care-pack.jpg",
    slug: "mouth-care-pack",
    details: {
      "seoTitle": "Mouth Care Pack (Sterile, Single Use) | medionline",
      "seoDescription": "Sterile single-use mouth care pack for oral hygiene of patients, supplied with tray and instruments. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A sterile single-use pack for mouth care, used for oral hygiene of patients who cannot brush for themselves.",
      "features": [
        "Sterile and single use",
        "Items together in one pack",
        "Photo shows a tray and forceps"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Mouth care pack"
        },
        {
          "label": "Condition",
          "value": "Sterile, single use"
        },
        {
          "label": "Contents",
          "value": "As printed on the pack — ask us for the full list"
        }
      ],
      "uses": [
        "Oral care for bedridden patients",
        "ICUs",
        "Hospitals"
      ]
    },
  },
  {
    sku: "18",
    name: "Spinal-Epidural Pack",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/spinal-epidural-pack.jpg",
    slug: "spinal-epidural-pack",
    details: {
      "seoTitle": "Spinal-Epidural Pack (Sterile, Single Use) | medionline",
      "seoDescription": "Sterile single-use spinal-epidural pack prepared with drape, gauze and instruments. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A sterile single-use pack prepared for spinal and epidural procedures, with the items needed together in one pack.",
      "features": [
        "Sterile and single use",
        "Procedure items together in one pack",
        "Photo shows drape, gauze and instruments"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Spinal-epidural pack"
        },
        {
          "label": "Condition",
          "value": "Sterile, single use"
        },
        {
          "label": "Contents",
          "value": "As printed on the pack — ask us for the full list"
        }
      ],
      "uses": [
        "Operating theatres",
        "Anaesthesia procedures",
        "Hospitals"
      ]
    },
  },
  {
    sku: "19",
    name: "Caudal Block Pack",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/caudal-block-pack.jpg",
    slug: "caudal-block-pack",
    details: {
      "seoTitle": "Caudal Block Pack (Sterile, Single Use) | medionline",
      "seoDescription": "Sterile single-use caudal block pack prepared with drape, gauze and instruments. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A sterile single-use pack prepared for caudal block procedures, with the items needed together in one pack.",
      "features": [
        "Sterile and single use",
        "Procedure items together in one pack",
        "Photo shows drape, gauze and instruments"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Caudal block pack"
        },
        {
          "label": "Condition",
          "value": "Sterile, single use"
        },
        {
          "label": "Contents",
          "value": "As printed on the pack — ask us for the full list"
        }
      ],
      "uses": [
        "Operating theatres",
        "Anaesthesia procedures",
        "Hospitals"
      ]
    },
  },
  {
    sku: "20",
    name: "Catheterization Pack",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/catheterization-pack.jpg",
    slug: "catheterization-pack",
    details: {
      "seoTitle": "Catheterization Pack (Sterile, Single Use) | medionline",
      "seoDescription": "Sterile single-use catheterization pack with drape, tray, gauze and instruments. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A sterile single-use pack prepared for catheterization, with the items needed together in one pack.",
      "features": [
        "Sterile and single use",
        "Procedure items together in one pack",
        "Photo shows drape, tray, forceps and a syringe"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Catheterization pack"
        },
        {
          "label": "Condition",
          "value": "Sterile, single use"
        },
        {
          "label": "Contents",
          "value": "As printed on the pack — ask us for the full list"
        }
      ],
      "uses": [
        "Wards and ICUs",
        "Operating theatres",
        "Hospitals and clinics"
      ]
    },
  },

  // Hygiene & Personal Care
  {
    sku: "21",
    name: "Hand Sanitizer — Wall Dispenser & Refill Pouch",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/hand-sanitizer-dispenser.jpg",
    slug: "hand-sanitizer-wall-dispenser",
    details: {
      "seoTitle": "Hand Sanitizer Wall Dispenser & Refill Pouch | medionline",
      "seoDescription": "Wall-mounted hand sanitizer dispenser with refill pouch of alcohol-based sanitizer gel. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A wall-mounted dispenser with a refill pouch of alcohol-based hand sanitizer gel, for places where many people need to clean their hands.",
      "features": [
        "Wall-mounted dispenser",
        "Refill pouch, so the dispenser can be reused",
        "Alcohol-based sanitizer gel"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Hand sanitizer gel (alcohol-based)"
        },
        {
          "label": "Format",
          "value": "Wall dispenser with refill pouch"
        },
        {
          "label": "Sizes",
          "value": "Ask us for available sizes"
        }
      ],
      "uses": [
        "Hospitals and clinics",
        "Offices and shops",
        "Entrances and corridors"
      ]
    },
  },
  {
    sku: "22",
    name: "Hand Sanitizer Gel — Pump Bottle",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/hand-sanitizer-bottle.jpg",
    slug: "hand-sanitizer-gel-pump-bottle",
    details: {
      "seoTitle": "Hand Sanitizer Gel — Pump Bottle | medionline",
      "seoDescription": "Alcohol-based hand sanitizer gel in a pump bottle, also available in refill pouches. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "Alcohol-based hand sanitizer gel in a pump bottle for easy one-hand dispensing. Also available in refill pouches.",
      "features": [
        "Alcohol-based sanitizer gel",
        "Pump bottle for easy dispensing",
        "Also available in pouches"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Hand sanitizer gel (alcohol-based)"
        },
        {
          "label": "Format",
          "value": "Pump bottle (pouches also available)"
        },
        {
          "label": "Sizes",
          "value": "Ask us for available sizes"
        }
      ],
      "uses": [
        "Clinics and hospitals",
        "Offices",
        "Home use"
      ]
    },
  },
  {
    sku: "23",
    name: "Anodyne Instant Pain Relief Balm",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/anodyne-balm-adult.jpg",
    slug: "anodyne-instant-pain-relief-balm",
    details: {
      "seoTitle": "Anodyne Instant Pain Relief Balm 30g | medionline",
      "seoDescription": "Anodyne Instant Pain Relief Balm, 30 g, for external use only, for muscle and joint pain. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A pain relief balm in a 30 g jar and carton, for muscle and joint pain. For external use only. Read the label and use as directed.",
      "features": [
        "Labelled for pain relief, muscle relaxation and anti-inflammatory use",
        "30 g jar in a carton",
        "For external use only"
      ],
      "specs": [
        {
          "label": "Net weight",
          "value": "30 g"
        },
        {
          "label": "Use",
          "value": "External use only"
        },
        {
          "label": "Format",
          "value": "Jar in carton"
        }
      ],
      "uses": [
        "Muscle pain",
        "Joint pain",
        "Everyday aches"
      ]
    },
  },
  {
    sku: "24",
    name: "Anodyne Pain Relief Balm — Peads",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/anodyne-balm-peads.jpg",
    slug: "anodyne-pain-relief-balm-peads",
    details: {
      "seoTitle": "Anodyne Pain Relief Balm — Peads 20g | medionline",
      "seoDescription": "Anodyne Pain Relief Balm, Peads variant, 20 g jar in carton, for external use. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "The Peads variant of the Anodyne pain relief balm, in a 20 g jar and carton. For external use only. Read the label and use as directed.",
      "features": [
        "Labelled for pain relief, muscle relaxation and anti-inflammatory use",
        "20 g jar in a carton",
        "For external use only"
      ],
      "specs": [
        {
          "label": "Net weight",
          "value": "20 g"
        },
        {
          "label": "Variant",
          "value": "Peads"
        },
        {
          "label": "Use",
          "value": "External use only"
        }
      ],
      "uses": [
        "Muscle pain",
        "Joint pain",
        "Everyday aches"
      ]
    },
  },
  {
    sku: "25",
    name: "Anodyne Petroleum Jelly — 50gm",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/anodyne-petroleum-jelly.jpg",
    slug: "anodyne-petroleum-jelly",
    details: {
      "seoTitle": "Anodyne Petroleum Jelly 50g | medionline",
      "seoDescription": "Anodyne petroleum jelly with natural glycerine for soft smooth skin. Available in 25 g and 50 g. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "White petroleum jelly with natural glycerine, an emollient for soft, smooth skin. Available in 25 g and 50 g jars.",
      "features": [
        "Made with white petroleum jelly and natural glycerine",
        "Emollient for chapped skin, lips and minor burns",
        "Also helps prevent nappy rash",
        "Available in 25 g and 50 g"
      ],
      "specs": [
        {
          "label": "Ingredients",
          "value": "White petroleum jelly, natural glycerine"
        },
        {
          "label": "Sizes",
          "value": "25 g and 50 g"
        },
        {
          "label": "Use",
          "value": "Topical application"
        }
      ],
      "uses": [
        "Chapped skin and lips",
        "Nappy rash prevention",
        "Feet and toes"
      ]
    },
  },
  {
    sku: "26",
    name: "Lubricating Jelly",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/lubricating-jelly.jpg",
    slug: "sterile-lubricating-jelly",
    details: {
      "seoTitle": "Sterile Lubricating Jelly (5 g Sachets, Box of 100) | medionline",
      "seoDescription": "Sterile, water-soluble, non-greasy lubricating jelly in 5 g single-use sachets, 100 per box. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A sterile, water-soluble lubricating jelly in 5 g single-use sachets, packed 100 to a box. Non-greasy and compatible with latex.",
      "features": [
        "Sterile (EO) and water soluble",
        "Non-greasy and latex compatible",
        "5 g single-use sachets",
        "100 sachets per box"
      ],
      "specs": [
        {
          "label": "Net weight",
          "value": "5 g per sachet"
        },
        {
          "label": "Pack",
          "value": "100 sachets per box"
        },
        {
          "label": "Condition",
          "value": "Sterile (EO), single use only"
        }
      ],
      "uses": [
        "General lubrication in clinical use",
        "Examination rooms",
        "Hospitals and clinics"
      ]
    },
  },
  {
    sku: "27",
    name: "Ultrasound / ECG Gel",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/ultrasound-ecg-gel.jpg",
    slug: "ultrasound-ecg-gel",
    details: {
      "seoTitle": "Ultrasound / ECG Gel — 260ml, 5L, 6L | medionline",
      "seoDescription": "Water-soluble, salt-free ultrasound and ECG gel in 260 ml, 5 litre and 6 litre packs. External use only. Ask medionline, Karachi for the price on WhatsApp.",
      "intro": "A water-soluble coupling gel for ultrasound scanning and ECG. Salt free, non-irritating, non-corrosive, odourless and non-abrasive. Available in a small bottle and large cans.",
      "features": [
        "Water soluble and salt free",
        "Non-irritating, non-corrosive, odourless",
        "Coupling medium between the skin and the probe",
        "Sizes: 260 ml, 5 litre and 6 litre, transparent or blue"
      ],
      "specs": [
        {
          "label": "Type",
          "value": "Ultrasound / ECG gel"
        },
        {
          "label": "Sizes",
          "value": "260 ml, 5 L, 6 L"
        },
        {
          "label": "Colour",
          "value": "Transparent or blue"
        },
        {
          "label": "Use",
          "value": "External use only"
        }
      ],
      "uses": [
        "Ultrasound scanning",
        "ECG",
        "Hospitals and clinics"
      ]
    },
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Are your products genuine and DRAP registered?",
    a: "Yes — every product is sourced directly from licensed distributors and DRAP-registered suppliers. We don't stock grey-market or unverified stock.",
  },
  {
    q: "How fast is delivery in Karachi?",
    a: "Most orders placed before 4 PM are dispatched the same day and delivered within 24 hours across Karachi. Other cities take 2–4 working days.",
  },
  {
    q: "Do I need a prescription to order medicines?",
    a: "For prescription-only medicines, yes — you can upload a photo of your Rx at checkout. Over-the-counter items and devices don't require one.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash and online transfer via bank only.",
  },
  {
    q: "Can clinics or pharmacies order in bulk?",
    a: "Yes — head to the 'For Clinics' section or contact us directly for wholesale pricing and recurring supply arrangements.",
  },
  {
    q: "What's your return policy?",
    a: "Unopened, unexpired items can be returned within 7 days. For safety reasons, opened medicines and disposables can't be returned unless defective.",
  },
];
