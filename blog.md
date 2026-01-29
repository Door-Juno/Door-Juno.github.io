---
layout: default
title: Blog
permalink: /blog/
---

# Blog

공부한 내용을 정리한 포스트들입니다.

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {% if post.description %}
        <p>{{ post.description }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>

{% if site.posts.size == 0 %}
아직 작성된 포스트가 없습니다.
{% endif %}
