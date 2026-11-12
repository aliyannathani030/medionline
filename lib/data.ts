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
  },
  {
    sku: "04",
    name: "Sterile Tubular Bandage",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/sterile-tubular-bandage.jpg",
  },
  {
    sku: "05",
    name: "Gas Sampling Line — 4m",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/gas-sampling-line.jpg",
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
  },
  {
    sku: "08",
    name: "Elastic Crepe Bandage",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/crepe-bandage.jpg",
  },
  {
    sku: "09",
    name: "Conformable Bandage — Burn Care",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/conformable-bandage.jpg",
  },
  {
    sku: "10",
    name: "Maternity / Abdominal Pad — 10 x 30",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/maternity-pad.jpg",
  },
  {
    sku: "11",
    name: "Surgical Skin Marker",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    image: "/products/skin-marker.jpg",
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
  },

  // Surgical & Procedure Packs
  {
    sku: "14",
    name: "Umbilical Cord Clamp",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/umbilical-cord-clamp.jpg",
  },
  {
    sku: "15",
    name: "CVP Insertion Pack",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/cvp-insertion-pack.jpg",
  },
  {
    sku: "16",
    name: "Zip Lock Bio-Specimen Bags",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/ziplock-specimen-bag.jpg",
  },
  {
    sku: "17",
    name: "Mouth Care Pack",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/mouth-care-pack.jpg",
  },
  {
    sku: "18",
    name: "Spinal-Epidural Pack",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/spinal-epidural-pack.jpg",
  },
  {
    sku: "19",
    name: "Caudal Block Pack",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/caudal-block-pack.jpg",
  },
  {
    sku: "20",
    name: "Catheterization Pack",
    category: "Surgical & Procedure Packs",
    inStock: true,
    image: "/products/catheterization-pack.jpg",
  },

  // Hygiene & Personal Care
  {
    sku: "21",
    name: "Hand Sanitizer — Wall Dispenser & Refill Pouch",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/hand-sanitizer-dispenser.jpg",
  },
  {
    sku: "22",
    name: "Hand Sanitizer Gel — Pump Bottle",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/hand-sanitizer-bottle.jpg",
  },
  {
    sku: "23",
    name: "Anodyne Instant Pain Relief Balm",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/anodyne-balm-adult.jpg",
  },
  {
    sku: "24",
    name: "Anodyne Pain Relief Balm — Peads",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/anodyne-balm-peads.jpg",
  },
  {
    sku: "25",
    name: "Anodyne Petroleum Jelly — 50gm",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/anodyne-petroleum-jelly.jpg",
  },
  {
    sku: "26",
    name: "Lubricating Jelly",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/lubricating-jelly.jpg",
  },
  {
    sku: "27",
    name: "Ultrasound / ECG Gel",
    category: "Hygiene & Personal Care",
    inStock: true,
    image: "/products/ultrasound-ecg-gel.jpg",
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
    a: "Cash on Delivery is available across Karachi, along with major debit/credit cards and bank transfer for other cities.",
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
