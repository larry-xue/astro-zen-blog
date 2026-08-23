import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://astro-zen-blog.larryxue.dev/", // your site url
  title: "Astro Zen Blog",
  slogan: "Exploring the World with Code",
  description: "A minimal, responsive and SEO-friendly blog template built with Astro.",
  social: {
    github: "https://github.com/larry-xue/astro-zen-blog", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/someone/", // leave empty if you don't want to show the linkedin
    email: "example@gmail.com", // leave empty if you don't want to show the email
    rss: true, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
