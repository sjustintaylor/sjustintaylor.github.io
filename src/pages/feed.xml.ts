import { getCollection } from "astro:content";
import { getPath } from "@/utils/getPath";
import getSortedPosts from "@/utils/getSortedPosts";
import { SITE } from "@/config";

import { Feed } from "feed";

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);

  const feed = new Feed({
    title: SITE.title,
    description: SITE.desc,
    id: SITE.website,
    link: SITE.website,
    language: "en",
    favicon: `${SITE.website}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      atom: `${SITE.website}/feed.xml`,
    },
    author: {
      name: "Justin Taylor",
    },
  });

  sortedPosts.forEach(({ data, id, filePath, rendered }) => {
    const url = getPath(id, filePath);

    feed.addItem({
      link: url,
      title: data.title,
      description: data.description,
      content: rendered?.html,
      id: url,
      author: [
        {
          name: data.author || "Justin Taylor",
        },
      ],
      date: new Date(data.modDatetime ?? data.pubDatetime),
    });
  });

  return new Response(feed.atom1(), {
    headers: {
      "Content-Type": "application/atom+xml",
    },
  });
}
