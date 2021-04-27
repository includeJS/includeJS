---
permalink: /tags/
layout: "layouts/page.html"
metaDesc: "Explore the notes with tags"
title: "Tags"
---

<ul class='l-note-tags'>
{% for tag in collections.tagList | filterTagList %}
  {% set tagUrl %}/tags/{{ tag | slug }}/{% endset %}
  <li><a href="{{ tagUrl | url }}" class="note-tag">{{ tag }}</a></li>
{% endfor %}
</ul>
