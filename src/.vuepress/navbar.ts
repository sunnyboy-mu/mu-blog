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
    text: "书签",
    link: "/bookmark/",
    activeMatch: "/bookmark/",
    icon: "icon-shuqian",
  },
  {
    text: "应用",
    link: "/application/",
    activeMatch: "/application/",
    icon: "icon-yingyong",
  },
  {
    text: "友链",
    link: "/link/",
    activeMatch: "/link/",
    icon: "icon-youlian",
  },
]);
