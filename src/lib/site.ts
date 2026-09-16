export const site = {
  name: "Taraxa Studio",
  tagline: "A Simple Software",
  url: "https://taraxa.studio",
  description:
    "Taraxa Studio is a small software studio in Indonesia. We make simple, focused apps, starting with NovelOS Studio.",
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

export type Platform = { name: string; icon: "windows" | "apple" | "pwa"; note?: string };

export const novelos = {
  name: "NovelOS Studio",
  slug: "novelos",
  url: "https://novelos.studio",
  short: "The operating system for storytellers.",
  description:
    "Plan, write, and publish a novel in one place. Made for people who write long stories and want their work to stay theirs.",
  price: { amount: 45, currency: "USD", label: "$45", note: "Pay once. Yours for life." },
  platforms: [
    { name: "Windows", icon: "windows" },
    { name: "macOS", icon: "apple" },
    { name: "Android and iOS", icon: "pwa", note: "installable web app" },
  ] as Platform[],
  features: [
    "Plot, scenes, and a timeline in one view",
    "A cast of characters that links into the manuscript",
    "Maps and worldbuilding notes beside the story",
    "A calm, full-screen editor for long sessions",
    "Word goals that show your real pace",
    "Export to eight publication formats",
    "Files stay on your computer, offline",
  ],
  status: "available",
} as const;

export const upcoming = [
  {
    name: "PixelOS Studio",
    slug: "pixelos",
    short: "For indie 2D artists and game makers.",
    description:
      "A pixel art editor with a tilemap editor, 8-bit music, and managers for FX and HUD assets.",
    status: "upcoming",
  },
  {
    name: "TypeOS Studio",
    slug: "typeos",
    short: "For typographers and type foundries.",
    description: "A studio for drawing, spacing, and shipping typefaces.",
    status: "upcoming",
  },
] as const;

export const nav = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Work", href: "/work", icon: "grid" },
  { label: "About", href: "/about", icon: "user" },
  { label: "Contact", href: "/contact", icon: "mail" },
] as const;
