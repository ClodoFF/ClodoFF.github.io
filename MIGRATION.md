# Migration checklist — Google Sites → GitHub Pages

Status as of the initial scaffolding commit. Tick boxes as you go.

## 1. Verify the site builds locally

```bash
docker compose up
# open http://localhost:8080
```

You should see the al-folio layout with a navy accent. Things that will look
wrong until you fill them in: profile photo (still Einstein), social icons (no
real handles yet), Publications page (empty), Teaching page (empty list),
CV page (placeholder Drive link).

- [ ] Site builds without errors and `localhost:8080` renders.

## 2. Drop in personal assets

| File | Where to put it |
|------|------------------|
| Headshot photo (jpg, ideally 600+ px wide) | `assets/img/prof_pic.jpg` (overwrite Einstein's) |
| CV PDF | `assets/pdf/cv.pdf` |
| Paper PDFs and slides | `assets/pdf/<your-name>.pdf` |
| Paper preview thumbnails (optional) | `assets/img/publication_preview/<name>.png` |

After dropping in `cv.pdf`, edit `_pages/cv.md` per the comment block at the
bottom of that file to enable the styled CV layout.

- [ ] `assets/img/prof_pic.jpg` replaced.
- [ ] `assets/pdf/cv.pdf` uploaded; `_pages/cv.md` switched to `layout: cv`.

## 3. Fill in real social handles

Edit `_data/socials.yml`. Replace every `# TODO:` line. Most relevant for you:

- `scholar_userid` — open your Google Scholar profile, copy the `user=...` value from the URL.
- `ideas_repec` — your RePEc author handle (e.g. `pfe123`).
- `orcid_id` — `0000-XXXX-XXXX-XXXX`.
- `linkedin_username` — the part after `linkedin.com/in/`.
- `twitter_username` — your X handle without `@`.

- [ ] `_data/socials.yml` placeholders all filled.

## 4. Fill in publications

Replace the example block in `_bibliography/papers.bib` with your real entries.

Easiest sources:

1. **Google Scholar** — Profile → "Export → BibTeX" (will export everything; you can prune).
2. **RePEc/IDEAS** — each paper page has a "BibTeX" download.
3. **Existing CV** — if your CV is already in LaTeX, the bibliography is right there.

For each entry:

- Add `category = {research}` or `category = {policy}` so it routes to the right section.
- Add `selected = {true}` for the 2–4 papers you want featured on the home page.
- Optionally add `pdf = {filename.pdf}` (relative to `assets/pdf/`), `slides`, `code`, `abstract`.

- [ ] At least the 2–3 most recent papers in `papers.bib`, with `selected={true}`.
- [ ] Categories set on every entry.

## 5. Fill in past teaching

Create one Markdown file per course in `_teachings/`. Use this minimal template:

```markdown
---
layout: course
title: Macroeconomics II (PhD)
description: Doctoral macro, second part — heterogeneous agents and housing.
instructor: Clodomiro Ferreira
year: 2022
term: Spring
location: Universidad XYZ
course_id: macro-2-phd
---

## Topics
- Topic 1
- Topic 2

## Materials
Slides, problem sets, notes if available.
```

Files where the grid renders: `_pages/teaching.md` includes `courses.liquid`
which pulls everything from the `_teachings` collection.

- [ ] One `_teachings/<course>.md` file per past course.

## 6. Push to GitHub

```bash
git add -A
git commit -m "Migrate site to al-folio"
git push -u origin al-folio
```

Open a PR against `main`, review the diff, merge.

- [ ] Branch `al-folio` pushed and merged into `main`.

## 7. Configure GitHub Pages (web UI)

- Repo → **Settings → Pages**.
- Source: *Deploy from a branch* → `main` / root, **OR** *GitHub Actions* (al-folio ships a workflow under `.github/workflows/` that builds with Jekyll and publishes; recommended).
- Custom domain: `www.cfferreira.com` → Save. GitHub will check DNS — at this point it will fail, that's OK, it's checking before you've changed Dreamhost.

- [ ] Pages enabled and serving from `main`.
- [ ] Custom domain `www.cfferreira.com` entered (DNS check will fail for now).

## 8. Change DNS at Dreamhost

In Dreamhost panel → *Manage Domains → DNS for cfferreira.com*.

**Remove** the existing Google Sites records (CNAME pointing to
`ghs.googlehosted.com` or A records pointing to Google).

**Add** the GitHub Pages records:

- Apex (`@` or `cfferreira.com`) — four A records:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- `www` — CNAME to `clodoff.github.io.` (note the trailing dot).

Optionally also add the AAAA records for IPv6 (see GitHub docs:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

DNS propagation typically takes minutes but can take up to 24 h.

- [ ] Old Google Sites records deleted.
- [ ] New A records and CNAME added.

## 9. Enforce HTTPS

Once DNS resolves, GitHub will automatically issue a Let's Encrypt cert.

- Repo → Settings → Pages → tick **Enforce HTTPS** (greyed out until cert is ready, ~10–60 min).

- [ ] HTTPS enforced.

## 10. Decommission Google Sites

After the new site is fully working at `https://www.cfferreira.com`:

- Take a final screenshot/PDF of the Google Sites pages as a backup.
- Unpublish or archive the Google Sites site.

- [ ] Old Google Sites taken down.

## Optional polish later

- `enable_google_analytics: true` + paste a GA ID in `_config.yml` if you want traffic stats.
- Set `og_image` and enable `serve_og_meta: true` for nicer link previews on social media.
- Add a favicon image to `/assets/img/favicon.ico` (otherwise the emoji 🏛️ is used).
- Add Mermaid / TikZ / etc. only if you actually post technical blog content.
