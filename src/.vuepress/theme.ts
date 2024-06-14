import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { footerText, copyrightText } from "./config/footer.js";
import blogConfig from "./config/blog.js";
import encryptConfig from "./config/encrypt.js";
import pluginsConfig from "./config/plugins.js";

export default hopeTheme(
  {
    hostname: "https://mister-hope.github.io",

    author: {
      name: "小沐沐吖",
      url: "https://blog.mu00.cn",
    },

    iconAssets: "fontawesome-with-brands",

    logo: "/logo.png",

    repo: "vuepress-theme-hope/vuepress-theme-hope",

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
