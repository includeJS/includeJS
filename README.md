# includeJS

Eva Dee's personal blog and documentation site built with Eleventy (11ty) static site generator. Contains programming notes, tutorials, and personal content covering topics like JavaScript, React, productivity, CSS, Git, VS Code, Bash, and more.

## Installation

Clone then run the following

```bash
npm install
```

## Local development

```bash
npm start
# This runs: npx gulp && concurrently 'npx gulp watch' 'npx eleventy --serve'
# Builds assets with Gulp and starts Eleventy dev server with hot reload
```

## Production Build

```bash
npm run production
# This runs: NODE_ENV=production npx gulp && NODE_ENV=production npx eleventy
# Builds optimized assets and generates static site for deployment
```

## Individual Build Tasks

```bash
npx gulp          # Build fonts and SASS only
npx gulp watch    # Watch SASS and image files for changes
npx eleventy      # Build site only (without assets)
npx eleventy --serve  # Build site and serve with live reload
```

## GitHub Integration with Claude AI

This repository is configured with Claude AI assistance through two GitHub Actions workflows:

### 1. Interactive Claude Assistant (`claude.yml`)
**Purpose**: Get help by tagging `@claude` in GitHub issues and PRs

**How to use**:
- Tag `@claude` in any issue comment, PR comment, or PR review
- Claude will analyze the context and provide relevant assistance
- Examples:
  - `@claude can you help debug this build error?`
  - `@claude please review this component implementation`
  - `@claude how should I implement lazy loading for images?`

**Triggers**:
- Issue comments containing `@claude`
- PR review comments containing `@claude`
- PR reviews containing `@claude`
- New issues with `@claude` in title or body
- When someone is assigned to an issue

### 2. Manual Code Reviews (`claude-code-review.yml`)
**Purpose**: Reviews pull requests when you request it with `/review`

**How to use**:
- Comment `/review` on any pull request to trigger a comprehensive review
- Claude will analyze the entire PR and provide detailed feedback

**What it does**:
- Provides comprehensive code review focusing on:
  - Code quality and best practices
  - Potential bugs or issues
  - Performance considerations
  - Security concerns
  - Test coverage
- Posts detailed review comments

**Triggers**:
- Comments containing `/review` on pull requests
- Comments containing `/review` in PR review threads

### Setup Requirements
1. Add `ANTHROPIC_API_KEY` as a repository secret in GitHub Settings > Secrets and variables > Actions
2. Both workflows use the `anthropics/claude-code-action@beta` action
3. Claude analyzes code using the project structure and conventions documented in `CLAUDE.md`

### Key Features
- **Interactive Help**: Manual assistance when you need it with `@claude`
- **On-Demand Reviews**: Manual code reviews when you request them with `/review`
- **Context Aware**: Uses your `CLAUDE.md` file to understand project structure
- **CI Integration**: Can read and analyze CI results on pull requests
- **Flexible Configuration**: Multiple trigger options and customizable prompts

## Architecture

### Build System
- **Eleventy (.eleventy.js)**: Static site generator with plugins, filters, transforms, and collections
- **Gulp (gulpfile.js)**: Asset pipeline for SASS compilation, image optimization, and font processing
- **Netlify**: Deployment platform with sitemap plugin and redirect configuration

### Key Directories
- `src/`: Source content and templates
  - `notes/`: Markdown blog posts/notes
  - `_includes/`: Nunjucks templates and partials
  - `scss/`: SASS stylesheets
  - `_data/`: Global data files (site config, navigation, helpers)
- `dist/`: Built site output (generated)
- `gulp-tasks/`: Individual Gulp task modules

### Content Management
- **Notes System**: Markdown files with frontmatter
- **Collections**: Automated collections for notes, feeds, and tag lists
- **Tagging**: Tag-based organization with dedicated tag pages
- **Pagination**: Configured for 4 notes per page

## Project Roadmap

### TODO
- Add Django blog
- Add videos
- Add social image share
- Add IndieWeb card

### Project Ideas
- Twitch stream
- Boardgame coop
- Markdown file generator
- Egghead notes
- Julia Evans bragfolio

### Content Series
- Advanced beginner
- Missing semester

### Tags
javascript, react, productivity, css, git, vscode, ux, bash, missing-semester, mongodb, python, django, database, devtools, performance