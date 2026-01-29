---
layout: default
title: Home
---

# Welcome to Door-Juno's Page

안녕하세요! Bioinformatics와 Data Science를 공부하고 있습니다.

## About Me

이곳은 제가 공부한 내용을 정리하고 공유하는 공간입니다.

- [블로그](/blog) - 공부한 내용 정리
- [CV](/cv) - 이력서 및 경력

## Recent Posts

<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>

{% if site.posts.size > 5 %}
[모든 포스트 보기](/blog)
{% endif %}
