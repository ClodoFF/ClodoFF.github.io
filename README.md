# cfferreira.com

Personal website of Clodomiro Ferreira (Banco de España).

Built with [Jekyll](https://jekyllrb.com) and the
[al-folio](https://github.com/alshedivat/al-folio) academic theme. Served by
GitHub Pages from the `main` branch (or whichever branch is selected in the
repo's *Settings → Pages*).

## Local development

The simplest path on Windows is Docker:

```bash
docker compose up
# preview at http://localhost:8080
```

If Docker is unavailable, see `INSTALL.md` for native Ruby/Jekyll setup.

## Where things live

- `_config.yml` — site-wide settings (title, URL, scholar config, plugins).
- `_pages/about.md` — homepage bio. Profile photo is `assets/img/prof_pic.jpg`.
- `_data/socials.yml` — handles for LinkedIn, X, Google Scholar, RePEc, ORCID, GitHub.
- `_bibliography/papers.bib` — all publications. Set `category = {research}` or `category = {policy}` to route a paper to the right section of `/publications/`.
- `_teachings/*.md` — one file per past course (front-matter drives the rendering).
- `_news/*.md` — short-form announcements / past talks. Filename must start with `YYYY-MM-DD-`.
- `assets/pdf/` — PDFs (CV, papers, slides) referenced from BibTeX or pages.
- `_sass/_variables.scss` and `_sass/_themes.scss` — colour palette (navy accent currently).

## Migration & DNS

See `MIGRATION.md` for the steps to point `cfferreira.com` from Dreamhost to GitHub Pages.