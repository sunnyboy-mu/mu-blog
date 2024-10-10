import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    link: "/",
    icon: "icon-shouye",
  },
  // {
  //   text: "开发",
  //   icon: "icon-kaifa",
  //   activeMatch: "/front-end/",
  //   children: [
  //     {
  //       text: "Web前端",
  //       link: "/front-end/css",
  //       icon: "icon-qianduan",
  //       activeMatch: "/front-end/",
  //     },
  //     {
  //       text: "Java后端",
  //       link: "/back-end/java/BigDecimal",
  //       activeMatch: "/back-end/",
  //       icon: "icon-houduankaifa",
  //     },
  //   ],
  // },
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
]);
