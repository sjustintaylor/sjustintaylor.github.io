export const SITE = {
  website: "https://sjustintaylor.me/", // replace this with your deployed domain
  author: "Justin Taylor",
  profile: "https://sjustintaylor.me/",
  desc: "Hang on, let me write that down",
  title: "Justin Taylor",
  ogImage: "",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 12,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showAbout: false,
  showNewsletter: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/sjustintaylor/sjustintaylor.github.io/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Australia/Brisbane", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
