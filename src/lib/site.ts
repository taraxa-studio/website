export const site = {
  name: "Taraxa Studio",
  tagline: "A Simple Software",
  url: "https://taraxa.studio",
  description:
    "Taraxa Studio is a small software studio in Indonesia. We make simple, focused apps, starting with NovelOS Studio.",
  email: "hello@taraxa.studio",
  country: "Indonesia",
  founder: {
    name: "Ribhararnus Pracutian",
    github: "https://github.com/oknoorap",
    linkedin: "https://www.linkedin.com/in/oknoorap/",
  },
  github: "https://github.com/taraxa-studio",
  products: [
    {
      name: "NovelOS Studio",
      slug: "novelos",
      url: "https://novelos.studio",
      short: "The operating system for storytellers.",
      description:
        "Plan, write, and export a novel in one desktop app. Plot, scenes, cast, and a calm editor, all in one place. For Windows and macOS.",
      status: "available",
    },
    {
      name: "PixelOS Studio",
      slug: "pixelos",
      url: null,
      short: "For people who draw.",
      description: "In progress.",
      status: "upcoming",
    },
    {
      name: "TypeOS Studio",
      slug: "typeos",
      url: null,
      short: "For people who type.",
      description: "In progress.",
      status: "upcoming",
    },
  ],
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
