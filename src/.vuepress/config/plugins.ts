import { PluginsOptions } from "vuepress-theme-hope";

export default {
  blog: {
    // 只有在posts文件夹下的md文件才会被识别为文章
    filter: ({ frontmatter, filePathRelative }) =>
      frontmatter.article ??
      (Boolean(filePathRelative) &&
        !frontmatter.home &&
        filePathRelative.startsWith("posts")),
    // 采用 Frontmatter.description 作为文章摘要
    excerptLength: 0,
  },

  components: {
    components: ["Badge", "VPCard", "SiteInfo", "VPBanner"],
  },

  // slimsearch: true,

  copyCode: true,

  mdEnhance: {
    align: true,
    attrs: true,
    component: true,
    imgLazyload: true,
    imgSize: true,
    mark: true,
    tabs: true,
  },
} as PluginsOptions;
