# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based GitHub Pages site for Door-Juno's personal page. The site is configured with the jekyll-theme-minimal theme and describes the owner as a Bioinformatist & Data Science professional.

## Repository State

The repository is currently in an early initialization state. Previous commits included:
- `_config.yml`: Jekyll configuration with theme and site metadata
- `index.html`: Basic "Hello world" landing page

Both files were subsequently deleted from the working tree.

## Jekyll/GitHub Pages Development

When working with Jekyll sites:

**Local development:**
```bash
# Install dependencies (requires Ruby and Bundler)
bundle install

# Serve site locally
bundle exec jekyll serve
# Site will be available at http://localhost:4000
```

**Build:**
```bash
bundle exec jekyll build
# Output goes to _site/ directory
```

Note: GitHub Pages automatically builds and deploys Jekyll sites from the repository, so local builds are primarily for testing.

## Git Workflow

Main branch: `main`

This repository uses `main` as the primary branch. GitHub Pages is typically configured to deploy from the `main` branch or `gh-pages` branch (check repository settings on GitHub).
