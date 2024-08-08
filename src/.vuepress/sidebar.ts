import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/front-end/": [
    {
      text: "CSS小知识",
      icon: "icon-css",
      link: "css",
    },
    {
      text: "JS小知识",
      icon: "icon-file_file_javascript",
      link: "JavaScript",
    },
    {
      text: "JS工具库",
      icon: "icon-icon_gongju",
      link: "js-utils",
    },
    {
      text: "Vue",
      icon: "icon-Vue",
      link: "vue",
    },
    {
      text: "Vue-Hooks",
      icon: "icon-webhooks",
      link: "vue3-hooks",
    },
    {
      text: "Vite",
      icon: "icon-vitejs",
      link: "vite",
    },
    {
      text: "微信小程序",
      icon: "icon-xiaochengxu1",
      link: "miniprogram",
    },
    {
      text: "Uni-app",
      icon: "icon-uniapp1",
      link: "uni-app",
    },
    {
      text: "Element-ui",
      icon: "icon-ElementUI",
      link: "element-ui",
    },
    {
      text: "Element-Plus",
      icon: "icon-element-plus",
      link: "element-plus",
    },
    {
      text: "Node",
      icon: "icon-Nodejs1",
      link: "node",
    },
    {
      text: "UI组件库",
      icon: "icon-ui",
      link: "ui-com-lib",
    },
    {
      text: "插件",
      icon: "icon-chajiancanshushuju",
      link: "plugins",
    },
    {
      text: "生态",
      icon: "icon-shengtaigongxiang",
      link: "ecology",
    },
  ],
  "/back-end/": [
    {
      text: "Java",
      icon: "icon-java",
      collapsible: true,
      prefix: "java/",
      children: [
        {
          text: "BigDecimal",
          icon: "icon-a--javamathBigDecimal",
          link: "BigDecimal",
        },
        {
          text: "SpringBoot",
          icon: "icon-SPRINGBOOT",
          link: "springboot",
        },
      ],
    },
  ],
  "/operations/": [
    {
      text: "Nginx",
      icon: "icon-nginx",
      link: "nginx",
    },
    {
      text: "Git",
      icon: "icon-git",
      link: "git",
    },
    {
      text: "ZSH",
      icon: "icon-cmd",
      link: "zsh",
    },
  ],
  "/ide/": [
    {
      text: "VsCode",
      icon: "icon-vscode",
      link: "VsCode",
    },
  ],
  "/personal-essay/": [
    {
      text: "沐沐书屋",
      icon: "icon-keCheng",
      link: "Book-List",
    },
    {
      text: "百宝箱",
      link: "Treasure-Box",
      icon: "icon-yingyong",
    },
  ],
});
