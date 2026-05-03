---
layout: page
permalink: /research-and-policy/
title: research and policy
description: Published, working, and policy work. Section structure mirrors the previous Google Sites page.
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<div class="publications">

## Published & Accepted

{% bibliography -f papers -q @*[category=published]* %}

## Working Papers

{% bibliography -f papers -q @*[category=working]* %}

## Frozen Stuff

{% bibliography -f papers -q @*[category=frozen]* %}

## Discussions

{% bibliography -f papers -q @*[category=discussion]* %}

## Contributions to Policy

{% bibliography -f papers -q @*[category=policy]* %}

</div>