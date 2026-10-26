// Replace the placeholder prose here; the page layout lives in src/pages/index.astro.
export const site = {
  name: "Justin Taylor",
  title: "Justin Taylor — Vita Activa",
  description:
    "Justin Taylor's place on the internet",
  socialPreview: {
    src: "/social-card.jpg",
    alt: "Justin Taylor — Vita Activa, in white lettering over a blue cyanotype architectural drawing.",
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
        label: "Software development",
        text: "My professional interest is in software engineering, especially for distributed computing, applications at scale, and high reliability systems. Beyond my work, I'm interested in software that empowers users - self-hostable, open source and easily modifiable, accessible, and the art of simplicity (many small things done well)",
      },
      {
        label: "Product Design",
        text: "Outside of work, I've been learning about product design for physical goods. It has grown out of a desire for items that don't exist exactly the way I would like. Currently exploring wood, textiles (leather, canvas, and exotics such as soft naoron) and papercraft with an interest in tools that help me focus more and stress less.",
      },
      {
        label: "Writing to learn",
        text: "I've been writing essays to help myself learn new topics, and to build a more reliable memory. I also write fiction, and have been digging deep on that this year. On my horizon for early 2027 is launching a new neo-pulp fiction publishing project to showcase mine and others fiction writing.",
      },
    ],
  },
  introduction: {
    label: "A professional problemsolver",
    paragraphs: [
      "I've been describing my role at work as 'spec ops developer'. I am comfortable jumping into a new project without much time to get up to speed, and producing results rapidly. I was operating in a firefighter capacity for projects that had gone off the rails at a previous role. The ultimate achievement for me at work is to be the guy who 'gets things done, no matter what'.",
      "To achieve all this, and stay sane, I leverage several tools - pen and paper being the most valuable to me. Paper is a non-linear space, and allows me to map out a problem rapidly, so I can get to work. My wetware talents are enhanced with the use of AI coding agents. I have a streamlined set of agentic tools and skills that I can deploy to help me understand and solve problems in thorny codebases.",
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
      "The cyanotype blueprint on the left is Architektura średniowieczna (Medieval Architecture) Pl.07 (1947) by Lech Niemojewski. The graphic in the header is Elementary Freehand Drawing vol.2 Pl.22 (1909); Harald Frithjof Petersen (Norwegian, 1850-1933). The watercolour image on the right column is Osavõtjapilet by NSV Liidu Kehakultuuri- ja Spordikomitee (väljaandja) - Estonian Sports and Olympic Museum, Estonia. All images are used under a CC0 public domain license. My derivative works are released under a CC-BY-SA license.",
      "The fonts on this site are Labrada for the heading, and Source Sans 3 for the body text. Both are available on Google Fonts under the OFL font license. This site uses a colour scheme composed of green (#055a5b), with persimmon (#e35a00) for the accents. The background colour is paper (#f7f5ef), and the text is rich black (#152a32). A muted dark grey (#526165) is also in use.",
      "The source code for this site was written with an AI agent, under my direction. The graphics were created without AI involvement. The text was written by me without AI assistance. The design was developed by me, without AI assistance, and implemented by an AI agent under my direction.",
    ],
  },
  about: {
    heading: "About me",
    label: "A postcard's worth of auto-biography",
    paragraphs: [
      "Things about me in no particular order: I like tea (more than coffee, but I drink both), I spend too much on notebooks and  books in general (buying books and reading them are two different hobbies, as I've learned), and I'm teaching myself to draw.",
      "I moved to Melbourne in July 2026 to pursue a more creative life. So far it's going well - I'm drawing again, learning to sew, and I'm designing my own notebooks.",
      "I own a typewriter (an Olivetti Lettera 32), and I use it to write letters to my friends. It's my considered opinion that the internet is now toxic to exist in, and I'm spending more time in libraries reading books.",
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
    heading: "What I'm working on now",
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
      text: "Thank you for noticing this. Your noticing has been noted and reported to the authorities",
    },
    backToTop: {
      show: true,
      label: "Back to top",
    },
  },
};
