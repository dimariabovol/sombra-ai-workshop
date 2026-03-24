---
title: "Working with Content Collections"
description: "Filtering drafts and sorting posts by publish date for a predictable reading flow."
pubDate: 2026-03-22
---

The list route queries the `blog` collection and applies two simple rules:

1. Exclude posts where `draft: true`.
2. Sort by `pubDate` descending.

Those two rules keep your homepage stable and editorially intentional.

As the blog grows, this approach scales naturally to archive pages, tags, and RSS feeds without changing the author workflow.
