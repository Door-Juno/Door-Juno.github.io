# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an academic/research website built with the al-folio Jekyll theme. The site serves as a personal homepage, blog, and CV for Junho Mun, a Bioinformatics and Data Science student at Kyungpook National University.

## Site Structure

- `_config.yml`: Main Jekyll configuration (site metadata, theme settings, plugins)
- `_data/`: Data files for CV, socials, and other structured content
  - `cv.yml`: Structured CV data (education, experience, projects, skills)
  - `socials.yml`: Social media links and contact information
- `_pages/`: Main site pages (about, blog, publications, projects, etc.)
- `_posts/`: Blog posts in Markdown (YYYY-MM-DD-title.md format)
- `_news/`: Short news announcements
- `_projects/`: Project descriptions and portfolios
- `_bibliography/`: BibTeX files for publications
- `assets/`: Static assets (images, PDFs, CSS, JS)
- `_layouts/` and `_includes/`: Jekyll templates and components

## Development Commands

**Local development:**
```bash
# Install dependencies (requires Ruby and Bundler)
bundle install

# Serve site locally with live reload
bundle exec jekyll serve --livereload
# Site available at http://localhost:4000
```

**Build:**
```bash
bundle exec jekyll build
# Output goes to _site/ directory
```

**Docker (alternative):**
```bash
docker-compose up
```

## Content Management

### Adding Blog Posts

Create a new file in `_posts/` with format: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
description: Brief description
tags: tag1 tag2
categories: category-name
---

Your content here...
```

### Adding Projects

Create a new file in `_projects/` with:

```markdown
---
layout: page
title: Project Title
description: Brief description
img: /assets/img/project-image.jpg  # optional
importance: 1  # for ordering
category: research  # or work, fun, etc.
---

Project details...
```

### Adding News Items

Create a new file in `_news/` for short announcements:

```markdown
---
layout: post
date: YYYY-MM-DD
inline: true
---

Short news announcement...
```

### Updating CV

Edit `_data/cv.yml` to update education, experience, skills, etc. The CV page at `/cv/` is automatically generated from this data.

## Important Configuration

- **Site URL**: `https://door-juno.github.io` (configured in `_config.yml`)
- **Base URL**: Empty (user site, not project site)
- **Theme**: al-folio (customized)
- **Language**: English (with some Korean content)

## Deployment

GitHub Pages automatically builds and deploys the site from the `main` branch. Changes pushed to `main` will be live within a few minutes.

## Custom Modifications

- Personal information configured in `_config.yml`, `_data/cv.yml`, and `_data/socials.yml`
- About page at `_pages/about.md` contains bio and research interests
- Site focuses on bioinformatics, computational biology, and data science

## Dependencies

Key Jekyll plugins (defined in `_config.yml` and `Gemfile`):
- `jekyll-scholar`: For bibliography/publications
- `jekyll-paginate-v2`: For blog pagination
- `jekyll-imagemagick`: For responsive images
- `jekyll-jupyter-notebook`: For notebook integration
- Many others (see `_config.yml` plugins section)

## Tips

- Preview changes locally before pushing to avoid build errors
- al-folio has extensive customization options - see `CUSTOMIZE.md` for details
- Use front matter in Markdown files to control layout and metadata
- Images should be optimized and placed in `assets/img/`
