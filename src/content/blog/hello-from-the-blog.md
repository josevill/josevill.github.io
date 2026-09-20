---
title: "Why this site looks like a Markdown file"
description: "The idea behind joseviloria.com: a pseudo online CV and blog that leans into a terminal / editor aesthetic instead of another generic portfolio template."
pubDate: 2026-07-16
tags: ["meta", "astro"]
---

I wanted a personal site that felt like something I would actually open: a Markdown file in a dark editor, not a card grid with stock gradients.

So this site is built as a **pseudo online CV** plus a small blog. The resume reads as syntax-highlighted Markdown (visible `#` headings, `**bold**` markers, Catppuccin Mocha colours). The blog shares the same chrome, but post bodies are real Markdown — readable prose without the visible markers.

## What you will find here

- A single-page resume: interests, about, experience, education, and skills
- Notes on cloud work, partner integrations, architecture, and the odd homelab rabbit hole
- An RSS feed if you prefer to subscribe instead of bookmarking

## Stack

Astro for static pages, Content Collections for posts, WebTUI + Catppuccin for the look, GitHub Pages for deploy. Drafts stay out of production builds so I can write in public without shipping unfinished thoughts.

If you are hiring, debugging a weird Atlas + AWS combo, or just want to say hi — the email on the resume still works.
