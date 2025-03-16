---
layout: page
permalink: /all-posts/
title: Posts
---

<ul class="archive-list">
  {% for post in site.posts %}
  <li>
    <div>{{ post.date | date: "%b %d, %Y" }} - </div>
    <div><a href="{{ post.url }}">{{ post.title }}</a></div>
  </li>
  {% endfor %}
</ul>
