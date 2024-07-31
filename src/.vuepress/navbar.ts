import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    link: "/",
    icon: "icon-shouye",
  },
  {
    text: "前端",
    link: "/front-end/css",
    icon: "icon-qianduan",
    activeMatch: "/front-end/",
  },
  {
    text: "后端",
    link: "/back-end/java/BigDecimal",
    activeMatch: "/back-end/",
    icon: "icon-houduankaifa",
  },
  {
    text: "运维",
    link: "/operations/nginx",
    activeMatch: "^/operations/",
    icon: "icon-yunweiguanli",
  },
  {
    text: "编辑器",
    link: "/ide/VsCode",
    activeMatch: "/ide/",
    icon: "icon-bianjiqi",
  },
  {
    text: "随笔",
    activeMatch: "/personal-essay/",
    icon: "icon-boke",
    prefix: "/personal-essay/",
    children: [
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
  },
  {
    text: "关于我",
    activeMatch: "/about/",
    icon: "icon-a-guanyuwodexian",
    prefix: "/about/",
    children: [
      {
        text: "个人简历",
        icon: "icon-yulanjianli",
        link: "curriculum-vitae",
      },
      {
        text: "个人经历",
        icon: "icon-gongzuojingli",
        link: "work-experience",
      },
    ],
  },
  {
    text: "友链",
    icon: "icon-youlian",
    children: [
      {
        text: "Gitee",
        icon: "icon-gitee1",
        link: "https://gitee.com/SunnyBoy_mu",
      },
      {
        text: "Github",
        icon: "icon-github",
        link: "https://github.com/sunnyboy-mu",
      },
      {
        text: "沐沐建站",
        icon: "icon-chuanzhongjianzhan",
        link: "https://web.mu00.cn:1314/",
      },
      {
        text: "NextChat",
        icon: "icon-SVG",
        link: "https://chat.mu00.cn/",
      },
      {
        text: "ChatGPT Web",
        icon: "icon-SVG",
        link: "https://lobe-chat.mu00.cn/",
      },
      {
        text: "Snow Dream",
        icon: "icon-SVG",
        link: "https://chat-api.mu00.cn/",
      },
    ],
  },
]);
