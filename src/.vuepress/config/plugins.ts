import { type PluginsOptions } from "vuepress-theme-hope";

export default {
  blog: {
    // 只有在posts文件夹下的md文件才会被识别为文章
    // filter: ({ frontmatter, filePathRelative }) =>
    //   frontmatter.article ??
    //   (Boolean(filePathRelative) &&
    //     !frontmatter.home &&
    //     filePathRelative.startsWith("posts")),
    // 采用 Frontmatter.description 作为文章摘要
    // excerptLength: 0,
  },

  components: {
    components: ["Badge", "VPCard"],
  },

  searchPro: {
    indexContent: true,
  },

  shiki: {
    // 你想要使用的主题
    lineNumbers: false,
    theme: "one-dark-pro",
  },

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  mdEnhance: {
    align: true,
    attrs: true,
    codetabs: true,
    component: true,
    demo: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },
} as PluginsOptions;
