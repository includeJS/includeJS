---
title: "includeJS Notes"
summary: "A feed of the latest notes."
permalink: "/feed.xml"
---

<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>{{ title }}</title>
	<subtitle>{{ summary }}</subtitle>
	<link href="{{ site.url }}{{ permalink }}" rel="self"/>
	<link href="{{ site.url }}/"/>
	<updated>{{ collections.notes | rssLastUpdatedDate }}</updated>
	<id>{{ site.url }}</id>
	<author>
    <name>{{ site.authorName }}</name>
    <email>{{ site.authorEmail }}</email>
	</author>
	{% for note in collections.notes %}
    {% set absolutePostUrl %}{{ site.url }}{{ note.url | url }}{% endset %}
    <entry>
      <title>{{ note.data.title }}</title>
      <link href="{{ absolutePostUrl }}"/>
      <updated>{{ note.date | rssDate }}</updated>
      <id>{{ absolutePostUrl }}</id>
      <content type="html"><![CDATA[
        {{ note.templateContent | safe }}
      ]]></content>
    </entry>
	{% endfor %}
</feed>
