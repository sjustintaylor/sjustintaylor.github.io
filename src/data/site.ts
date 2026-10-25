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
    collectionLabel: "Vita Activa",
    caption: {
      text: "Curiosity powered",
      emphasis: "creativity.",
    },
    motto: "Ubuntu - I am because we are",
  },
  skills: {
    heading: "What I do",
    legend: "Current fields of interest",
    items: [
      {
        label: "Digital Craft",
        text: "My primary professional interest is blah blah blah, slop. Self hosting, ownable, open source - smalltalk shit",
      },
      {
        label: "Product Design",
        text: "One of my focuses for this year is product design for physical goods. It has grown out of a desire for items that don't exist exactly the way I would like. Currently exploring textiles (leather, canvas, and exotics such as soft naoron) and papercraft with an interest in tools that help me focus more and stress less.",
      },
      {
        label: "Writing to learn",
        text: "I write what I need to know, and have been doing so for years. On my horizon for early 2027 is launching a new project focused on neo-pulp fiction publishing.",
      },
    ],
  },
  introduction: {
    label: "A professional problemsolver",
    paragraphs: [
      "A space for making things, following interesting threads, and finding a little perspective along the way. Some ideas begin as a passing observation, others as a question that refuses to settle. This is a place to collect those beginnings, explore where they lead, and leave room for something unexpected. There is no fixed destination, just an ongoing interest in how things work and what might be possible with a little time and attention.",
    ],
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
    paragraphs: [
      "The cyanotype blueprint on the left is Architektura średniowieczna (Medieval Architecture) Pl.07 (1947) by Lech Niemojewski. The graphic in the header is Elementary Freehand Drawing vol.2 Pl.22 (1909); Harald Frithjof Petersen (Norwegian, 1850-1933). The watercolour image on the right column is from Osavõtjapilet by NSV Liidu Kehakultuuri- ja Spordikomitee (väljaandja) - Estonian Sports and Olympic Museum, Estonia. All images are used under a CC0 public domain license. My derivative works are released under a CC-BY-SA license.",
      "The fonts on this site are Labrada for the heading, and Source Sans 3 for the body text. Both are available on Google Fonts under a SIL font license. This site uses a colour scheme composed of green (#055a5b), with persimmon (#e35a00) for the accents. The background colour is paper (#f7f5ef), and the text is rich black (#152a32). A muted dark grey (#526165) is also in use.",
      "The source code for this site was written with an AI agent, under my direction. The graphics were created without AI involvement. The text was written by me without AI assistance. The design was developed by me, without AI assistance, and implemented by an AI agent under my direction.",
    ],
  },
  about: {
    heading: "About me",
    label: "A postcard's worth of auto-biography",
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
    show: true,
    heading: "What I’m doing now",
    subtitle: "Projects & experiments",
    items: [
      {
        label: "Software engineer at Vectorise",
        href: "https://vectoriselabs.com/",
        description: "Helping companies blah blah",
      },
      {
        label: "Blog: The Nomad Aristocrat",
        href: "https://nomadaristocrat.bearblog.dev/",
        description:
          "A collection of my essays that have survived my publishing purge of 2026. This is where I publish essays on productivity, writing, art, history, and so on. Each one represents a topic I couldn't get out of my head in weeks leading up to hitting publish.",
      },
    ],
  },
  contact: {
    heading: "Let's stay in touch",
    text: "A friendly hello, a shared curiosity, or a note in passing - I look forward to hearing from you. The emails go to my personal email, and I read each one",
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
