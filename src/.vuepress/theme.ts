import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { footerText, copyrightText } from "./config/footer.js";
import blogConfig from "./config/blog.js";
import encryptConfig from "./config/encrypt.js";
import pluginsConfig from "./config/plugins.js";

export default hopeTheme(
  {
    hostname: "https://blog.mu00.cn",

    author: {
      name: "小沐沐吖",
      url: "https://blog.mu00.cn",
    },

    iconPrefix: "iconfont ",
    iconAssets: "//at.alicdn.com/t/c/font_4571358_xrnf7kncf6m.css",

    logo: "/logo.png",

    editLink: false,

    repo: "sunnyboy-mu",

    docsDir: "src",

    // 导航栏
    navbar,

    // 侧边栏
    sidebar,

    // 页脚
    displayFooter: true,
    footer: footerText,

    // 版权信息
    copyright: copyrightText,

    // 博客配置
    blog: blogConfig,

    // 加密配置
    encrypt: encryptConfig,

    // 插件配置
    plugins: pluginsConfig,
  },
  { custom: true }
);
