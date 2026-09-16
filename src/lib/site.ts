export const site = {
  name: "Taraxa Studio",
  tagline: "A Simple Software",
  url: "https://taraxa.studio",
  description:
    "Taraxa Studio is a software company in Indonesia. We build focused tools for writers, pixel artists, and type designers, starting with NovelOS Studio.",
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

export const novelos = {
  name: "NovelOS Studio",
  slug: "novelos",
  url: "https://novelos.studio",
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
  { label: "Work", href: "/work", icon: "grid" },
  { label: "About", href: "/about", icon: "user" },
  { label: "Contact", href: "/contact", icon: "mail" },
] as const;
