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
    slug: "pharmacy-packaging",
    name: "Pharmacy Packaging & Supplies",
    tagline: "Bottles, bags, and pharmacy essentials",
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
  {
    sku: "02",
    name: "Ear Plug — Honeywell 3M",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "04",
    name: "Disposable Medical Underwear",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "05",
    name: "Sterile Gauze Swabs",
    category: "Hospital Disposables & Consumables",
    inStock: true,
    // featured on homepage hero
  },
  {
    sku: "06",
    name: "Zip Lock Bio-Specimen Bags",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "07",
    name: "Single-Use Vaginal Speculum",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "08",
    name: "Sterile Cotton Balls",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "09",
    name: "Urine Containers — 60ml / 100ml / 120ml",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "10",
    name: "Philadelphia Collar",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "12",
    name: "Liquiband Optima",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "15",
    name: "Sterile Lubricating Jelly",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "16",
    name: "Precise Skin Marking",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "17",
    name: "Gas Sampling Line",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "21",
    name: "Unsterile Gauze Swabs — 100pcs Packet",
    category: "Hospital Disposables & Consumables",
    inStock: true,
  },
  {
    sku: "01",
    name: "DVD-R Printable — 4.7GB 120 MIN",
    category: "Pharmacy Packaging & Supplies",
    inStock: true,
  },
  {
    sku: "11",
    name: "Disposable Paper Plates",
    category: "Pharmacy Packaging & Supplies",
    inStock: true,
  },
  {
    sku: "14",
    name: "Glossy Paper Bag — Vomiting / Pharmacy / Goods Bag",
    category: "Pharmacy Packaging & Supplies",
    inStock: true,
  },
  {
    sku: "18",
    name: "Amber Bottles — 30ml / 60ml / 120ml / 250ml / 500ml",
    category: "Pharmacy Packaging & Supplies",
    inStock: true,
  },
  {
    sku: "19",
    name: "Transparent Empty Plastic Bottles",
    category: "Pharmacy Packaging & Supplies",
    inStock: true,
  },
  {
    sku: "20",
    name: "Medication Containers — 20gm / 35gm",
    category: "Pharmacy Packaging & Supplies",
    inStock: true,
  },
  {
    sku: "03",
    name: "Anodyne Pain Relief Balm — 20gm",
    category: "Hygiene & Personal Care",
    inStock: true,
  },
  {
    sku: "13",
    name: "Hand Sanitizer — Bottle / Pouch & Dispenser",
    category: "Hygiene & Personal Care",
    inStock: true,
  },
  {
    sku: "22",
    name: "Anodyne Petroleum Jelly",
    category: "Hygiene & Personal Care",
    inStock: true,
  },
  {
    sku: "23",
    name: "Handwash",
    category: "Hygiene & Personal Care",
    inStock: true,
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
