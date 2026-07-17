---
layout: page
permalink: /life/
title: life
kicker: Off Hours
description: Bread, yarn, trails, and whatever is on repeat this week.
nav: true
nav_order: 5
---

<!-- Photos are listed (with optional captions) in _data/life_gallery.yml.
     Image files live in assets/img/life/. -->

{% assign pics = site.data.life_gallery %}

<div class="life-section">
  <h2 class="life-heading">In pictures</h2>
  {% if pics and pics.size > 0 %}
    <div class="life-grid">
      {% for pic in pics %}
        {% assign base = pic.image | split: '.' | first | prepend: '/assets/img/life/' %}
        <figure class="life-item">
          <picture>
            <source
              srcset="{{ base | append: '-480.webp' | relative_url }} 480w, {{ base | append: '-800.webp' | relative_url }} 800w"
              sizes="(max-width: 680px) 50vw, 33vw"
              type="image/webp">
            <img src="{{ pic.image | prepend: '/assets/img/life/' | relative_url }}" alt="{{ pic.caption | default: 'off hours photo' }}" loading="lazy">
          </picture>
          {% if pic.caption %}
            <figcaption>{{ pic.caption }}</figcaption>
          {% endif %}
        </figure>
      {% endfor %}
    </div>
  {% else %}
    <p class="life-placeholder">Photos of bakes, knits, and trails coming soon.</p>
  {% endif %}
</div>

<div class="life-section">
  <h2 class="life-heading">On repeat</h2>
  <p>What keeps me moving on runs and rides:</p>

  <div class="life-music">
    <iframe
      src="https://open.spotify.com/embed/playlist/2TmciuohOrReueTj7E1xJ5"
      title="Running playlist on Spotify"
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
    </iframe>
  </div>
</div>
