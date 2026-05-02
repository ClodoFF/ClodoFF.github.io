# Instructions — editing and publishing cfferreira.com

This file is the day-to-day reference for updating the site once the initial
migration from Google Sites is done. It is **not** a substitute for
`MIGRATION.md` (which is a one-shot checklist for the cutover) or `README.md`
(which is a quick orientation for someone new to the repo).

## What lives where

The repository root is `c:\Users\q31264\Documents\Proyectos\ClodoFF.github.io\`
(on PdI). Edit only the files listed below. Anything not listed is either
auto-generated, vendored, or theme internals you should leave alone.

### Files you should edit

| What you want to change | File / folder | Notes |
|---|---|---|
| Bio, profile blurb on home page | `_pages/about.md` | Markdown body + YAML front-matter at the top. The address block on the right of the photo is in the front-matter under `profile.more_info`. |
| Headshot photo | `assets/img/prof_pic.jpg` | Just overwrite the file. JPG ~600 px+ wide is fine. |
| Papers (research + policy) | `_bibliography/papers.bib` | One BibTeX entry per paper. Set `category = {research}` or `category = {policy}` so it routes to the right section of `/publications/`. Set `selected = {true}` for the 2–4 papers you want featured on the home page. |
| Social links / handles | `_data/socials.yml` | See the comment block at the top of that file: only the keys hard-coded in `jekyll-socials` are valid (e.g. `email`, `scholar_userid`, `x_username`, `linkedin_username`, `github_username`, `orcid_id`, `inspirehep_id`, `cv_pdf`, `rss_icon`). Empty values (`key:` with nothing after) crash the build — comment the key out instead. RePEc and other unsupported services use a `custom_social`–style block with `logo`, `title`, `url`. |
| News, talks, announcements | `_news/YYYY-MM-DD-slug.md` | One file per item. Filename **must** start with `YYYY-MM-DD-` for Jekyll to date it. The body is one short paragraph; YAML front-matter sets `inline: true` and `related_posts: false`. |
| Past courses | `_teachings/<slug>.md` | One file per course. Use `layout: course`. Front-matter holds title, year, term, location, and an optional weekly schedule. See al-folio's docs for the full schema. |
| CV link or rendered CV | `_pages/cv.md` | Currently links externally to Google Drive. To switch to a styled PDF-backed CV with download button: upload the PDF to `assets/pdf/cv.pdf`, then change the front-matter to `layout: cv`, `cv_pdf: /assets/pdf/cv.pdf`, `cv_format: rendercv`. |
| Site-wide settings (title, URL, scholar config, plugin toggles) | `_config.yml` | Editing this requires a Jekyll restart (see below). |
| Accent colour, fonts | `_sass/_variables.scss`, `_sass/_themes.scss` | Current palette: navy `#1f3864` (light) / steel-blue `#7895cb` (dark). |
| Navigation labels and order | front-matter of the relevant `_pages/*.md` | `title:` is the displayed label. `nav_order:` is the position. `nav: false` hides a page from the navbar. |

### Files and folders to never touch

- `_site/` — Jekyll's build output, regenerated on every save.
- `vendor/` — installed gems, replaced by `bundle install`.
- `.jekyll-cache/` — incremental-build cache.
- `_layouts/`, `_includes/`, `_plugins/`, `_scripts/` — al-folio theme internals. Editing them is possible but means you've forked the theme; updates from upstream become hard. Avoid unless you have a reason.

## Local preview workflow on PdI

The Jekyll dev server reads files directly from your local repo and re-renders
on every save. Anyone else only sees the live site at `cfferreira.com`, never
your local preview.

### One-time per shell

PowerShell installer-PATH refresh (only needed if Ruby/ImageMagick aren't on
this terminal's PATH yet):
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

### Start the server

```powershell
cd c:\Users\q31264\Documents\Proyectos\ClodoFF.github.io
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

First build: 60–120 s. Open **http://127.0.0.1:4000/**. Leave the terminal
running while you work; Ctrl-C stops the server.

### Edit-save-refresh loop

Most file edits trigger an automatic rebuild — save, wait 1–2 s, refresh the
browser.

**Two exceptions** that need a manual Jekyll restart (Ctrl-C, re-run `bundle
exec jekyll serve`):
- Any edit to `_config.yml`.
- Any edit to a file inside `_data/` (e.g. `_data/socials.yml`).

### Known cosmetic build warnings (non-blocking, locale-related)

These appear because Windows uses a Spanish system locale; they're harmless
locally and disappear on the Linux GitHub Actions build:
- `Terser Exception: SyntaxError: Error de sintaxis` — JS gets served
  unminified instead of minified. Functionally identical.
- `imagemagick: enabled: false` was set in `_config.yml` to avoid the
  responsive-image plugin crashing on non-UTF-8 stderr. Production build
  re-enables it via `_config_prod.yml` overrides (or just because the Linux
  locale is UTF-8).

## Publishing workflow — local edits → live site

The live site at `cfferreira.com` is rebuilt automatically by GitHub Actions on
every push to `main`. You never run a manual deploy.

### Daily / typical content update

```bash
cd c:\Users\q31264\Documents\Proyectos\ClodoFF.github.io
# preview locally first (see above)
git add -A
git commit -m "Short description of the change"
git push
```

Wait ~2 minutes. The Actions tab on GitHub
(https://github.com/ClodoFF/ClodoFF.github.io/actions) shows the build status.
When the green check appears, the change is live.

### Bigger changes — work on a branch

For anything larger than a typo (theme tweaks, restructuring, multiple
papers), do it on a branch and merge once you're happy:

```bash
git checkout -b some-feature      # create a working branch
# edit, preview locally, commit
git push -u origin some-feature   # push branch to GitHub (does NOT deploy)
# open a PR on GitHub if you want a paper trail, or merge directly
git checkout main
git merge some-feature
git push                          # this push to main triggers the deploy
```

### Editing from another machine

The repo is the source of truth. Any machine with git can:

```bash
git clone https://github.com/ClodoFF/ClodoFF.github.io.git
cd ClodoFF.github.io
git pull --rebase                 # always before starting work
# edit
git push
```

Local preview (`bundle exec jekyll serve`) requires Ruby + ImageMagick + the
`bundle install` step — only worth setting up on machines where you do
design/layout work. For pure content edits (Markdown, BibTeX, YAML), skip it
and rely on GitHub Actions to validate the build.

### Reverting a bad push

```bash
git revert HEAD          # makes a new commit that undoes the last one
git push
```

GitHub Actions will rebuild and the live site goes back to the previous state.
Don't `git reset --hard` and force-push to `main`; that rewrites history that
other clones already have.

## When something breaks

- **Build fails on GitHub Actions but worked locally** — usually a YAML/BibTeX
  syntax error you missed. Open the Actions log; the error line is usually
  near the bottom.
- **Local build crashes on a plugin** — paste the error here (or check the
  full traceback by re-running with `bundle exec jekyll serve --trace`). The
  most common culprits on Windows: locale-related plugins (jekyll-imagemagick,
  jekyll-minifier/terser), and `_data/socials.yml` keys that aren't in
  jekyll-socials' built-in dictionary.
- **`bundle install` fails on `nokogiri` or `eventmachine`** — the MSYS2 dev
  toolchain isn't fully installed. Re-run `ridk install` and pick option 3.
- **Site looks fine locally but missing on the live site** — you forgot to
  push, or you pushed a branch other than `main`. Only `main` deploys.
