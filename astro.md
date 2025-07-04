## Frontmatter

Frontmatter is the main place to store some important information about the blog post (article). Frontmatter lies at the top of the article and is written in YAML format. Read more about frontmatter and its usage in [astro documentation](https://docs.astro.build/en/guides/markdown-content/).

Here is the list of frontmatter property for each post.

| Property           | Description                                                                                                                           | Remark                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **_title_**        | Title of the post. (h1)                                                                                                               | required<sup>\*</sup>                          |
| **_description_**  | Description of the post. Used in post excerpt and site description of the post.                                                       | required<sup>\*</sup>                          |
| **_pubDatetime_**  | Published datetime in ISO 8601 format.                                                                                                | required<sup>\*</sup>                          |
| **_modDatetime_**  | Modified datetime in ISO 8601 format. (only add this property when a blog post is modified)                                           | optional                                       |
| **_author_**       | Author of the post.                                                                                                                   | default = SITE.author                          |
| **_slug_**         | Slug for the post. This field is optional.                                                                                            | default = slugified file name                  |
| **_featured_**     | Whether or not display this post in featured section of home page                                                                     | default = false                                |
| **_draft_**        | Mark this post 'unpublished'.                                                                                                         | default = false                                |
| **_tags_**         | Related keywords for this post. Written in array yaml format.                                                                         | default = others                               |
| **_ogImage_**      | OG image of the post. Useful for social media sharing and SEO. This can be a remote URL or an image path relative to current folder.  | default = `SITE.ogImage` or generated OG image |
| **_canonicalURL_** | Canonical URL (absolute), in case the article already exists on other source.                                                         | default = `Astro.site` + `Astro.url.pathname`  |
| **_hideEditPost_** | Hide editPost button under blog title. This applies only to the current blog post.                                                    | default = false                                |
| **_timezone_**     | Specify a timezone in IANA format for the current blog post. This will override the `SITE.timezone` config for the current blog post. | default = `SITE.timezone`                      |

> Tip! You can get ISO 8601 datetime by running `new Date().toISOString()` in the console. Make sure you remove quotes though.

Only `title`, `description` and `pubDatetime` fields in frontmatter must be specified.

Title and description (excerpt) are important for search engine optimization (SEO) and thus AstroPaper encourages to include these in blog posts.

`slug` is the unique identifier of the url. Thus, `slug` must be unique and different from other posts. The whitespace of `slug` should to be separated with `-` or `_` but `-` is recommended. Slug is automatically generated using the blog post file name. However, you can define your `slug` as a frontmatter in your blog post.

For example, if the blog file name is `adding-new-post.md` and you don't specify the slug in your frontmatter, Astro will automatically create a slug for the blog post using the file name. Thus, the slug will be `adding-new-post`. But if you specify the `slug` in the frontmatter, this will override the default slug. You can read more about this in [Astro Docs](https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs).

If you omit `tags` in a blog post (in other words, if no tag is specified), the default tag `others` will be used as a tag for that post. You can set the default tag in the `/src/content/config.ts` file.

```ts
// src/content/config.ts
export const blogSchema = z.object({
  // ---
  draft: z.boolean().optional(),
  tags: z.array(z.string()).default(["others"]), // replace "others" with whatever you want
  // ---
});
```

### Sample Frontmatter

Here is the sample frontmatter for a post.

```yaml
# src/content/blog/sample-post.md
---
title: The title of the post
author: your name
pubDatetime: 2022-09-21T05:17:19Z
slug: the-title-of-the-post
featured: true
draft: false
tags:
  - some
  - example
  - tags
ogImage: ../../assets/images/example.png # src/assets/images/example.png
# ogImage: "https://example.org/remote-image.png" # remote URL
description: This is the example description of the example post.
canonicalURL: https://example.org/my-article-was-already-posted-here
---
```

## Adding table of contents

By default, a post (article) does not include any table of contents (toc). To include toc, you have to specify it in a specific way.

Write `Table of contents` in h2 format (## in markdown) and place it where you want it to be appeared on the post.

For instance, if you want to place your table of contents just under the intro paragraph (like I usually do), you can do that in the following way.

```md
---
# some frontmatter
---

Here are some recommendations, tips & ticks for creating new posts in AstroPaper blog theme.

## Table of contents

<!-- the rest of the post -->
```

## Headings

There's one thing to note about headings. The AstroPaper blog posts use title (title in the frontmatter) as the main heading of the post. Therefore, the rest of the heading in the post should be using h2 \~ h6.

This rule is not mandatory, but highly recommended for visual, accessibility and SEO purposes.