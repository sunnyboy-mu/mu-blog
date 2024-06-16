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
    text: "书签",
    link: "/bookmark/development",
    activeMatch: "/bookmark/",
    icon: "icon-shuqian",
  },
  {
    text: "随笔",
    link: "/personal-essay/Book-List",
    activeMatch: "/personal-essay/",
    icon: "icon-boke",
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
        text: "Cloud Studio",
        icon: "icon-webhooks",
        link: "https://ide.cloud.tencent.com/dashboard/workspace",
      },
    ],
  },
]);
