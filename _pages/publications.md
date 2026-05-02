---
layout: page
permalink: /publications/
title: research
description: Research papers and policy work.
nav: true
nav_order: 2
---

<!-- Bibsearch -->
{% include bib_search.liquid %}

<div class="publications">

## Research

{% bibliography -f papers -q @*[category=research]* %}

## Policy

{% bibliography -f papers -q @*[category=policy]* %}

</div>