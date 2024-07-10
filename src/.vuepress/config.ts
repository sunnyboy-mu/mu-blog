import { getDirname, path } from "vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);
import {
  canvasPlugin,
  CanvasPluginType,
} from "./plugins/vuepress-plugin-canvas";
import { gradientCoverPlugin } from "./plugins/vuepress-plugin-gradient-cover";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小沐沐吖",
  description: "纵有狂风平地起, 我亦乘风破万里",
  dest: "dist",

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
  },

  theme,

  plugins: [
    // 背景插件
    canvasPlugin({
      type: CanvasPluginType.Figure,
      ribbonOption: {
        zIndex: 1,
        alpha: 0.8,
        size: 90,
      },
    }),
    // 遮罩插件
    gradientCoverPlugin({
      zIndex: 0,
      alpha: 0.1,
      size: 90,
    }),
  ],

  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ["@layui/layui-vue"],
      },
    },
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
