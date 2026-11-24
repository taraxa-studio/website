export const site = {
  name: "Taraxa Studio",
  tagline: "A Simple Software",
  url: "https://taraxa.studio",
  description:
    "Taraxa Studio is a software company in Indonesia. We make NovelOS Studio for writers and SealQR for dynamic QR codes, with tools for pixel artists and type designers in progress.",
  /** One line under the tagline on the home page. Speaks as a company. */
  intro: "We build focused tools for creative people.",
  email: "hello@taraxa.studio",
  country: "Indonesia",
  countryCode: "ID",
  founder: {
    name: "Ribhararnus Pracutian",
    github: "https://github.com/oknoorap",
    linkedin: "https://www.linkedin.com/in/oknoorap/",
  },
  github: "https://github.com/taraxa-studio",
} as const;

export type Platform = {
  name: string;
  icon: "windows" | "apple" | "android" | "ios";
  /** Brand colour for the glyph. */
  color: string;
  note?: string;
};

export type Product = {
  name: string;
  slug: string;
  url: string;
  /** Square logo in public/, 192px. */
  logo: string;
  short: string;
  description: string;
  price: { label: string; note: string };
  platforms: readonly Platform[];
  features: readonly { title: string; body: string }[];
};

export const novelos = {
  name: "NovelOS Studio",
  slug: "novelos",
  url: "https://novelos.studio",
  logo: "/images/novelos-logo.webp",
  short: "The operating system for storytellers.",
  description:
    "Plan, write, and publish a novel in one offline-first app. Your manuscript, cast, world, and plot live together on your own device.",
  price: { amount: 45, currency: "USD", label: "$45", note: "One-time purchase. Yours for life." },
  platforms: [
    { name: "Windows", icon: "windows", color: "text-[#0078D4]" },
    { name: "macOS", icon: "apple", color: "text-[#1d1d1f]" },
    { name: "Android", icon: "android", color: "text-[#3DDC84]", note: "installable web app" },
    { name: "iOS", icon: "ios", color: "text-[#1d1d1f]", note: "installable web app" },
  ] as Platform[],
  features: [
    {
      title: "Offline first",
      body: "Works without internet. Every file stays on your device, and one .novelos archive moves a whole project to another one.",
    },
    {
      title: "A calm editor",
      body: "Chapters and sub-chapters with a searchable contents list, typewriter scrolling, and a vanishing mode that hides the last line so you keep drafting instead of editing.",
    },
    {
      title: "Plot you can see",
      body: "Lay scenes out on a canvas, then read them back as a timeline. Move a scene and the order updates with it.",
    },
    {
      title: "A cast that stays in character",
      body: "Dossiers with role, age, era, and pronouns, plus portraits that keep one art direction, all linked into the manuscript so nobody drifts by book three.",
    },
    {
      title: "Genealogy",
      body: "Family trees you build by dragging relations between characters. Bloodlines, marriages, and rivalries stay straight across a whole series.",
    },
    {
      title: "Cartography",
      body: "Draw a map from a written description, name every location, and search them later. Places link to the scenes set there.",
    },
    {
      title: "Lore and chronology",
      body: "Histories, cultures, magic systems, and dates kept in one place and attached to the scenes that use them, instead of six loose documents.",
    },
    {
      title: "AI portraits for your cast",
      body: "Create a character from a few lines, then generate portraits that follow one art direction, so the same face shows up in book three. Optional, on your own key.",
    },
    {
      title: "Optional AI, your own key",
      body: "Revision help that shows the original, the rewrite, and the reason. It runs on your own API key, so you pay the provider and never us. Off by default.",
    },
    {
      title: "Publish in every format",
      body: "Export to DOCX for agents, EPUB for e-readers, print-ready PDF, HTML, Markdown, RTF, and plain text.",
    },
    {
      title: "Goals that tell the truth",
      body: "Word targets and trackers that show your real pace, chapter by chapter.",
    },
  ],
  status: "available",
} as const;

export const sealqr = {
  name: "SealQR",
  slug: "sealqr",
  url: "https://sealqr.codes",
  logo: "/images/sealqr-logo.webp",
  short: "Dynamic QR codes you can change after printing.",
  description:
    "Print a QR code once and change where it goes later. Count scans, and keep your codes working even if you stop paying.",
  price: {
    amount: 0,
    currency: "USD",
    label: "Free to start",
    note: "Pro is $48 a year.",
  },
  pro: { amount: 48, currency: "USD" },
  platforms: [] as Platform[],
  features: [
    {
      title: "Change the link after printing",
      body: "A printed code points to a short link, and you choose where that link goes from your dashboard. Menus, flyers, and packaging stay in use.",
    },
    {
      title: "Codes that don't expire",
      body: "No expiry date on any plan, free included. If a paid plan ends, codes over the free limit keep opening the last link you set.",
    },
    {
      title: "Unlimited scans, no ads",
      body: "People who scan go straight to your link. There is no ad page in between and no scan limit on either plan.",
    },
    {
      title: "12 code types",
      body: "Link, Wi-Fi, contact card, PDF, menu, Google review, Instagram, WhatsApp, email, SMS, phone, and text.",
    },
    {
      title: "A scan test before download",
      body: "Each code is scanned in your browser before you download it, so a setting that breaks scanning shows up before the print run.",
    },
    {
      title: "Links checked for safety",
      body: "Every link is checked against Cloudflare's malware and phishing lists before a code opens it. Anyone can report a suspicious code.",
    },
    {
      title: "Rules by device, country, or language",
      body: "On Pro, one code can send people to different links depending on their phone, where they are, or the language they read.",
    },
    {
      title: "Scan pages, forms, and bookings",
      body: "On Pro, build a page from a template, collect replies with a form and export them as CSV, or share your open times on a booking page.",
    },
    {
      title: "Version history with undo",
      body: "On Pro, every change to a code is kept, so you can put a wrong link back. Custom short links are included.",
    },
    {
      title: "Scan history",
      body: "Count scans for each code. Free keeps the last 90 days, and Pro keeps them all.",
    },
  ],
  status: "available",
} as const;

export const upcoming = [
  {
    name: "PixelOS Studio",
    slug: "pixelos",
    short: "For indie 2D artists and game makers.",
    description: "A pixel art studio built for shipping games, not just drawing sprites.",
    features: [
      "Pixel art editor with layers, palettes, and animation frames",
      "Tilemap editor for levels and scenes",
      "8-bit music and sound effects",
      "FX and HUD asset managers",
    ],
    status: "upcoming",
  },
  {
    name: "TypeOS Studio",
    slug: "typeos",
    short: "For typographers and type foundries.",
    description: "Draw, space, kern, interpolate, and ship a typeface in one app. Every format in, every format out.",
    features: [
      "Bézier drawing with spacing and kerning side by side",
      "Multiple masters and variable fonts with live interpolation",
      "OpenType features written for you: ligatures, alternates, small caps",
      "Open and convert OTF, TTF, WOFF, WOFF2, UFO, and Glyphs files",
      "Color fonts, hinting, and proofing sheets built in",
      "Specimen pages and license files, exported in one click",
    ],
    status: "upcoming",
  },
] as const;

export const nav = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Work", href: "/work/", icon: "work" },
  { label: "About", href: "/about/", icon: "about", invert: true },
  { label: "Contact", href: "/contact/", icon: "contact" },
] as const;
