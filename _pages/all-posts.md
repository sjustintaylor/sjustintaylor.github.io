---
layout: page
permalink: /all-posts/
title: All Posts
---

<ul class="archive-list">
  {% for post in site.posts %}
    <li>
      <span>{{ post.date | date: "%b %d, %Y" }} - </span>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
