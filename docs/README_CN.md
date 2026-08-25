# Astro Zen 博客

<img width="1523" alt="ZEN-HOME" src="https://github.com/user-attachments/assets/3d8c3250-ec82-4cdf-9e84-ce4fd069b040" />

一个使用 Astro 构建的极简、响应式和 SEO 友好的博客模板。具有简洁的设计、暗色模式支持和基于 markdown 的内容管理。

在线演示: [Astro Zen Blog](https://astro-zen-blog.larryxue.dev/)

如果您觉得这个项目有帮助，请考虑给我点个star～ ⭐️。

## 基于这个模板构建的博客

> 如果您想要构建自己的博客，我强烈建议您 fork 这个仓库并添加您自己的功能。

- [Okaryo's blog](https://blog.okaryo.studio/)

## 目录

- [特性](#特性)
- [安装](#安装)
- [配置](#配置)
  - [网站设置](#网站设置)
  - [首页文章过滤](#首页文章过滤)
  - [主题](#主题)
- [编写内容](#编写内容)
- [创建新文章](#创建新文章)
- [构建和部署](#构建和部署)
- [项目结构](#项目结构)
- [功能路线图](#功能路线图)
- [贡献](#贡献)
- [其他 Astro 模板](#其他-astro-模板)
- [许可证](#许可证)

## 特性

- 📝 支持 Markdown/MDX 内容创作
- 🎨 简洁的极简设计
- 🏷️ 基于标签的组织方式
- 🌓 暗色模式支持
- 🔍 SEO 优化
- 📱 完全响应式
- 🔗 社交媒体集成
- 📰 RSS 订阅 & sitemap 支持
- ⚡ 优秀的性能
- 🛠️ Google 分析集成
- 🔍 本地搜索功能

![lighthouse score](https://github.com/larry-xue/larry-xue/blob/master/assets/lighthouse.gif)

## 安装

1. 使用脚手架初始化：

   ```bash
   npm create astro@latest -- --template larry-xue/astro-zen-blog
   cd ./to_your_project
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 启动开发服务器：

   ```bash
   npm run dev
   ```

## 配置

### 网站设置

1. 打开 `src/config.ts` 并自定义您的网站设置：

```typescript
export const siteConfig: SiteConfig = {
  site: "https://example.com/", // 您的网站 URL
  title: "您的博客",
  slogan: "探索世界与自我",
  description: "在这里写描述",
  social: {
    github: "https://github.com/username",
    linkedin: "https://www.linkedin.com/in/username",
    email: "your@email.com",
    rss: true,
  },
  homepage: {
    maxPosts: 5, // 显示的最大文章数量
    tags: [], // 仅显示包含这些标签的文章
    excludeTags: [], // 排除包含这些标签的文章
  },
  googleAnalytics: "G-XXXXXXXXXX", // Google Analytics ID
  search: true, // 启用本地搜索
};
```

### 首页文章过滤

如果您想要对首页文章进行更多自定义，可以通过更新 `src/utils/posts.ts` 中的 `filterPublishedPosts` 函数来自定义显示的文章。

### 主题

在 `tailwind.config.js` 中更新主要和次要颜色：

## 编写内容

1. 在 `src/content/blog/` 目录下创建新的博客文章
2. 使用以下前置元数据模板：

```markdown
---
title: "文章标题"
description: "文章简短描述"
date: YYYY-MM-DD
tags: ["标签1", "标签2"]
image: "封面图片 URL"
---

您的内容写在这里...
```

当然，你可以根据需要在 `src/content/config.ts` 中自定义元数据。

## 创建新文章

为了方便创建新文章，本模板提供了 npm 脚本：

```bash
# 这将创建一个新md文件，并保存至 src/content/blog/文件名.md
npm run new-post \<文件名\>
```

你可以通过修改 scripts/new-post.js 文件来定制新文章的模板。

## 构建和部署

1. 构建您的网站：

   ```bash
   npm run build
   ```

2. 部署选项：

   - **Cloudflare Pages**: [部署到 Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/#deploy-with-cloudflare-pages)

## 项目结构

```
astro-zen-blog/
├── src/
│   ├── content/
│   │   └── blog/    # 博客文章
│   ├── layouts/     # 页面布局
│   ├── components/  # UI 组件
│   └── config.ts    # 网站配置
├── public/          # 静态资源
└── astro.config.mjs # Astro 配置
```

## 功能路线图

这个项目几乎已经完成。如果您有任何建议或反馈，请随时打开一个 issue 或 pull request。

## 贡献

欢迎贡献！您可以：

1. Fork 这个仓库
2. 创建您的功能分支
3. 提交一个拉取请求

## 其他 Astro 模板

- **[Astroloop](https://github.com/lx-themes/astroloop)** —— 面向 AI agent 产品的落地页：带人工闸门的 agent loop 流程图，以及逐工具的权限矩阵。[Demo](https://astroloop.larryxue.dev)
- [Astro Sassify](https://github.com/larry-xue/astro-sassify-template) —— SaaS 落地页，完整设计系统、暗色模式与视图过渡。[Demo](https://astro-sassify.larryxue.dev/)
- [Apple-Style Portfolio](https://github.com/larry-xue/apple-style-portfolio) —— 极简作品集，GSAP 动效与 Three.js 点缀。[Demo](https://apple-style-portfolio.larryxue.dev)
- [Quiet Bar](https://github.com/larry-xue/quiet-bar) —— 酒吧 / 餐厅单页。无 CSS 框架，无 JS 库。[Demo](https://quiet-bar-theme.larryxue.dev)

全部 MIT，均可商用。

## 许可证

该项目基于 MIT 许可证 - 查看 LICENSE 文件了解详情。
