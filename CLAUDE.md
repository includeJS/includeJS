# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **includeJS**, a personal blog and documentation site built with Eleventy (11ty) static site generator. The site belongs to Eva Dee and contains programming notes, tutorials, and personal content covering topics like JavaScript, React, productivity, CSS, Git, VS Code, Bash, and more.

## Development Commands

### Start Development Server
```bash
npm start
# This runs: npx gulp && concurrently 'npx gulp watch' 'npx eleventy --serve'
# Builds assets with Gulp and starts Eleventy dev server with hot reload
```

### Production Build
```bash
npm run production
# This runs: NODE_ENV=production npx gulp && NODE_ENV=production npx eleventy
# Builds optimized assets and generates static site for deployment
```

### Individual Build Tasks
```bash
npx gulp          # Build fonts and SASS only
npx gulp watch    # Watch SASS and image files for changes
npx eleventy      # Build site only (without assets)
npx eleventy --serve  # Build site and serve with live reload
```

## Architecture Overview

### Build System
- **Eleventy (.eleventy.js)**: Static site generator configuration with plugins, filters, transforms, and collections
- **Gulp (gulpfile.js)**: Asset pipeline for SASS compilation, image optimization, and font processing
- **Netlify**: Deployment platform with sitemap plugin and redirect configuration

### Key Directories
- `src/`: Source content and templates
  - `notes/`: Markdown blog posts/notes
  - `_includes/`: Nunjucks templates and partials
  - `scss/`: SASS stylesheets
  - `_data/`: Global data files (site config, navigation, helpers)
  - `filters/`: Custom Eleventy filters for dates and markdown
  - `transforms/`: HTML processing transforms
- `dist/`: Built site output (generated)
- `gulp-tasks/`: Individual Gulp task modules
- `next-includejs/`: Next.js version (appears to be alternate implementation)

### Content Management
- **Notes System**: Markdown files in `src/notes/` with frontmatter
- **Collections**: Automated collections for notes, feeds, and tag lists
- **Tagging**: Tag-based organization with dedicated tag pages
- **Pagination**: Configured for 4 notes per page (site.notesPerPage)

### Asset Pipeline
- **SASS**: Compiled to CSS with source maps in development, minified in production
- **Images**: Optimized and processed through Gulp
- **Fonts**: Managed through Gulp font task
- **Critical CSS**: Inline styles for above-the-fold content

### Content Processing
- **Parse Transform**: Adds lazy loading to images, generates figure captions from image titles, creates permalink anchors for headings
- **HTML Minification**: Minifies HTML in production builds
- **Syntax Highlighting**: Code syntax highlighting via @11ty/eleventy-plugin-syntaxhighlight
- **SEO**: SEO metadata and RSS feeds

### Data Flow
1. Markdown content in `src/notes/` → processed by Eleventy
2. SASS files in `src/scss/` → compiled by Gulp → output to `dist/css/`
3. Templates in `src/_includes/` → used by Eleventy for layout
4. Site data in `src/_data/site.js` → available globally in templates
5. Final output in `dist/` → deployed to Netlify

### Key Features
- Reading time calculation for posts
- Random sibling content suggestions
- Responsive image handling with lazy loading
- Automatic heading permalinks
- Tag-based content organization
- RSS feed generation
- SEO optimization

## Notes for Development

- The site uses Nunjucks templating engine for HTML, data, and markdown templates
- Content is organized by tags: javascript, react, productivity, css, git, vscode, bash, etc.
- Images are automatically processed with lazy loading and caption support
- The build system is optimized for both development (with source maps) and production (with minification)
- Netlify handles deployment with automatic sitemap generation and URL redirects