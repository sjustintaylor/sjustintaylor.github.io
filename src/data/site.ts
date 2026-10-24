// Replace the placeholder prose here; the page layout lives in src/pages/index.astro.
export const site = {
  name: "Justin Taylor",
  title: "Justin Taylor — A personal collection",
  description:
    "The personal website of Justin Taylor. A place for ideas, projects, and things worth noticing.",
  socialPreview: {
    src: "/social-card.png",
    alt: "Justin Taylor — A personal collection",
  },
  imagePanel: {
    show: true,
    src: "/images/blueprint.jpg",
    label: "A cyanotype blueprint of a cathedral",
    monogram: "SJT",
    collectionLabel: "A personal collection",
    caption: {
      text: "A wider",
      emphasis: "perspective.",
    },
    motto: "Ubuntu - I am because we are",
  },
  skills: {
    heading: "What I do",
    legend: "Skills & Interests",
    items: [
      {
        label: "Software",
        text: "Room for a project taking shape, an experiment, or something built just for the fun of it.",
      },
      {
        label: "Design",
        text: "A question worth sitting with. A subject to get lost in. A new way of looking at familiar things.",
      },
      {
        label: "Writing",
        text: "The books, places, and small discoveries making ordinary days a little more interesting.",
      },
    ],
  },
  introduction: {
    label: "A few words to begin",
    text: "A space for making things, following interesting threads, and finding a little perspective along the way. Some ideas begin as a passing observation, others as a question that refuses to settle. This is a place to collect those beginnings, explore where they lead, and leave room for something unexpected. There is no fixed destination, just an ongoing interest in how things work and what might be possible with a little time and attention.",
  },
  pullQuote: {
    show: true,
    text: "Engineering is not quite as important as imagination.",
    attribution: "Satoru Iwata",
    // Optional link to the quote's source.
    sourceUrl: null as string | null,
  },
  colophon: {
    label: "Colophon",
    text: "Thoughtful software, design and everyday life, and ideas across disciplines. The connections between these interests are often as interesting as the subjects themselves. A useful tool can change a familiar routine; a small detail can suggest a different approach to a larger problem. There is space here for unfinished experiments, things learned along the way, and discoveries worth returning to. For now, these words hold a place for the stories and observations still to come.",
  },
  about: {
    heading: "Who I am",
    label: "The person behind the page",
    paragraphs: [
      "Every good introduction starts somewhere. This is a place for a few words about the person behind the page — the work, the interests, and the ideas that keep coming back.",
      "Some things belong neatly in a category. The most interesting things tend to live in between. Consider this a small corner of the internet for both.",
    ],
  },
  graphic: {
    show: true,
    src: "/images/boat.jpg",
    alt: "Watercolour illustration of two sailing boats on teal water beneath a pale blue sky.",
    width: 421,
    height: 501,
    figureLabel: "Fig. 01",
    caption:
      "A study in digital art, made with CC0 art from the creative commons",
  },
  projects: {
    // Set to false to hide the panel without removing its links.
    show: false,
    heading: "What I’m doing now",
    subtitle: "Projects & experiments",
    items: [
      {
        label: "This website",
        href: "https://github.com/sjustintaylor/sjustintaylor.github.io",
        description:
          "An evolving personal collection of ideas, projects, and things worth noticing.",
      },
    ],
  },
  contact: {
    heading: "Keep in touch",
    text: "Good conversations often start with a simple hello. For an interesting idea, a shared curiosity, or a note in passing, the inbox is open.",
    email: "hello@sjustintaylor.me",
    links: [
      { label: "GitHub", href: "https://github.com/sjustintaylor" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/shaun-j-taylor/",
      },
      {
        label: "Bluesky",
        href: "https://bsky.app/profile/sjustintaylor.me",
      },
    ],
  },
  footer: {
    show: true,
    // Leave null to use the site name. The copyright year updates automatically.
    copyrightName: null as string | null,
    note: {
      show: false,
      text: "Made with care. Best read slowly.",
    },
    backToTop: {
      show: true,
      label: "Back to top",
    },
  },
};
