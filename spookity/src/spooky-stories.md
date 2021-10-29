---
pagination:
  data: prismic.house
  size: 1
  alias: house
layout: story-layout
permalink: "stories/{{ house.uid }}/"
---

# {% asText house.data.spooky_story_title %}

Behold, a very spooky tale!

{% asHTML house.data.spooky_story %}

<div class="flex m-auto max-w-xl justify-between items-center">
  <a class="spooky-hover" href="/">Back to trick or treating</a>
  {% react 'TrickOrTreatBag', 'position', 'relative', 'render', 'lazy' %}
</div>