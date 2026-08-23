# Astro Zen Blog

<img width="1523" alt="ZEN-HOME" src="https://github.com/user-attachments/assets/3d8c3250-ec82-4cdf-9e84-ce4fd069b040" />

A minimal, responsive, and SEO-friendly blog template built with Astro. Features clean design, dark mode support, and markdown-based content management.

live demo: [Yujian's blog](https://blog.larryxue.dev/)

If you find this project helpful, please consider giving it a star ⭐️.

## Awesome Blogs built on top of this template

> For who want to build their own blog, I strongly recommend you to fork this repo and add your own features. This repo is a simple and clean blog template.

- [Yujian's blog](https://blog.larryxue.dev/)
- [Okaryo's blog](https://blog.okaryo.studio/20241228-migrate-blog-from-gatsby-to-astro/)


[中文Readme](./docs/README_CN.md)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Site Settings](#site-settings)
  - [HomePage Posts Filter](#homepage-posts-filter)
  - [Theme](#theme)
- [Writing Content](#writing-content)
- [Creating New Posts](#creating-new-posts)
- [Build and Deploy](#build-and-deploy)
- [Project Structure](#project-structure)
- [Features Roadmap](#features-roadmap)
- [Contributing](#contributing)
- [License](#license)

## Features

- 📝 Markdown/MDX for content authoring
- 🎨 Clean and minimalist design
- 🏷️ Tag-based organization
- 🌓 Dark mode support
- 🔍 SEO optimized
- 📱 Fully responsive
- 🔗 Social media integration
- 📰 RSS feed & sitemap support
- ⚡ Fast performance
- 🛠️ Google analysis interation
- 🔍 Local search functionality

![lighthouse score](https://github.com/larry-xue/larry-xue/blob/master/assets/lighthouse.gif)

## 💼 Commercial Use

This template is **MIT** — use it for client work, invoice for it, ship it. No strings, no gated "pro" version.

If you're shipping paid projects on it, there are three ways to support the work: a one-time
**$75 commercial sponsorship**, a **$199 ship-assist** if you're stuck, and a **$499/yr agency plan**.

**→ [Commercial use & support](./COMMERCIAL.md)**

## Installation

1. Use the Astro CLI to create a new project:

   ```bash
   npm create astro@latest -- --template larry-xue/astro-zen-blog
   cd ./to_your_project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Configuration

### Site Settings

1. Open `src/config.ts` and customize your site settings:

```typescript
export const siteConfig: SiteConfig = {
  site: "https://example.com/", // your site URL
  title: "Your Blog",
  slogan: "Exploring the World with Code",
  description: "Write a description here",
  social: {
    github: "https://github.com/username",
    linkedin: "https://www.linkedin.com/in/username",
    email: "your@email.com",
    rss: true,
  },
  homepage: {
    maxPosts: 5, // Maximum number of posts to display
    tags: [], // Only display posts with these tags
    excludeTags: [], // Exclude posts with these tags
  },
  googleAnalytics: "G-XXXXXXXXXX", // Google Analytics tracking ID
  search: true, // Enable local search
};
```

### HomePage Posts Filter

If you want more customization in homepage posts. You can customize the posts displayed by writing a custom filter with updating the `filterPublishedPosts` function in `src/utils/posts.ts`.:

### Theme

Update primary and secondary colors in `tailwind.config.js`:

## Writing Content

1. Create new blog posts in the `src/content/blog/` directory
2. Use the following frontmatter template:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
date: YYYY-MM-DD
tags: ["tag1", "tag2"]
image: "cover image URL"
---

Your content here...
```

Of course, you can customize the metadata as needed in `src/content/config.ts`.

## Creating New Posts

To create a new blog post, this template provide an npm scripts to help you create a new post:

```bash
# this will create a new markdown file in src/content/blog/filename.md
npm run new-post \<filename\>
```

You can customize the template of the new post in `scripts/new-post.js`.

## Build and Deploy

1. Build your site:

   ```bash
   npm run build
   ```

2. Deploy options:

   - **Cloudflare Pages**: [Deploy to Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/#deploy-with-cloudflare-pages)

## Project Structure

```
astro-zen-blog/
├── src/
│   ├── content/
│   │   └── blog/    # Blog posts
│   ├── layouts/     # Page layouts
│   ├── components/  # UI components
│   └── config.ts    # Site configuration
├── public/          # Static assets
└── astro.config.mjs # Astro configuration
```

## Features Roadmap

This project is almost complete. If you have any suggestions or feedback, please feel free to open an issue or pull request.

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch
3. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Using it commercially? See [COMMERCIAL.md](./COMMERCIAL.md) — MIT means you owe nothing, but there is a button if you'd rather not.
