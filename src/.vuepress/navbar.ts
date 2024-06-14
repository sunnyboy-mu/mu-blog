import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "友链",
    icon: "book",
    children: [
      {
        text: "Gitee",
        icon: "book",
        link: "https://gitee.com/SunnyBoy_mu",
      },
      {
        text: "Github",
        icon: "book",
        link: "https://github.com/sunnyboy-mu",
      },
      {
        text: "沐沐建站",
        icon: "book",
        link: "https://web.mu00.cn:1314/",
      },
      {
        text: "NextChat",
        icon: "book",
        link: "https://chat.mu00.cn/",
      },
      {
        text: "Cloud Studio",
        icon: "book",
        link: "https://ide.cloud.tencent.com/dashboard/workspace",
      },
    ],
  },
]);
