# shanghong.dev

My personal website: **[shanghong.dev](https://shanghong.dev)** — research, projects, CV, blog (*field notes*), and life off hours.

Built with [Jekyll](https://jekyllrb.com/) on the [al-folio](https://github.com/alshedivat/al-folio) theme, heavily customized. Deployed via GitHub Pages.

---

## Quick reference

| I want to... | Do this |
|---|---|
| Preview locally | `docker compose up` → http://localhost:8080 |
| Write a blog post | Add `_posts/YYYY-MM-DD-title.md`, push to `main` |
| Add photos to /life/ | Drop `.jpg` in `assets/img/life/`, list it in `_data/life_gallery.yml` |
| Update my CV | Replace `assets/pdf/shang_hong_sim_cv.pdf` (+ `.docx`), edit `_pages/cv.md` |
| Add a publication | Add a BibTeX entry to `_bibliography/papers.bib` |
| Add a project | Add a file to `_projects/` (see existing ones for the format) |
| Edit my bio | `_pages/about.md` |
| Deploy | Push to `main` — live in ~2 minutes |

## Local development

```bash
docker compose up          # first run pulls the image, then builds
# open http://localhost:8080
```

- Content and style edits **hot-reload** in a few seconds.
- Changes to `_config.yml` need a restart: `docker compose restart`.
- `docker-compose.override.yml` (git-ignored) exists because this repo is used
  via git worktrees; the stock entrypoint runs git commands that fail there.

## Writing a post

Create `_posts/2026-08-01-my-title.md`:

```markdown
---
layout: post
title: my title
date: 2026-08-01 10:00:00-0700
description: one-line summary shown in the blog list
tags: post-training rag
---

Markdown body. Code blocks, math ($$ ... $$), and images all work.
```

Optional front matter: `featured: true` (pins as a card), `thumbnail: assets/img/...`,
`giscus_comments: true`. Future-dated posts stay hidden until their date.

## The /life/ gallery

Photos live in `assets/img/life/`. The grid, order, and captions are controlled by
`_data/life_gallery.yml` — reorder entries to reorder the grid, leave `caption:` blank
for no caption, delete an entry to hide a photo.

Convert iPhone HEIC photos before adding:

```bash
sips -s format jpeg -s formatOptions 80 --resampleHeightWidthMax 1600 IMG_1234.HEIC --out assets/img/life/my-photo.jpg
```

## How deployment works

Pushing to `main` triggers `.github/workflows/deploy.yml`: it builds the site
(installing ImageMagick so responsive `.webp` image variants get generated — do not
remove that step), purges unused CSS, and publishes to the `gh-pages` branch, which
GitHub Pages serves at shanghong.dev.

**Domain setup:** registrar is Porkbun, but DNS lives on **Cloudflare** (records must be
"DNS only" / grey cloud — proxying breaks GitHub Pages SSL). `CNAME` file in the repo
root keeps the custom domain across deploys.

## Design notes

The custom look lives in `_sass/_editorial.scss` (imported from `assets/css/main.scss`):
Newsreader serif display type, small-caps kickers, hairline rules, timeline, chips,
badges, and scroll fade-ins (`assets/js/reveal.js`). Accent colors are set in
`_sass/_themes.scss` (magenta in light mode, cyan in dark mode).

Theme docs, if ever needed: the original theme README is kept locally at
[`AL_FOLIO_README.md`](AL_FOLIO_README.md); the upstream repo is
[alshedivat/al-folio](https://github.com/alshedivat/al-folio) (its FAQ/CUSTOMIZE
guides were removed from this repo to keep it clean).
