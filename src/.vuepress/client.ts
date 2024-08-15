import { defineClientConfig } from "vuepress/client";
import { onMounted } from "vue";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import packageJson from "../../package.json";
import BookItem from "./components/BookItem.vue";
import FadeCarousel from "./components/FadeCarousel.vue";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import GiteeLink from "./components/navbar/GiteeLink.vue";
import PanelLink from "./components/navbar/PanelLink.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("BookItem", BookItem);
    app.component("FadeCarousel", FadeCarousel);
    app.component("GiteeLink", GiteeLink);
    app.component("PanelLink", PanelLink);
  },
  setup: () => {
    setupSnowFall({
      maxSize: 40,
      speed: 3,
    });
    onMounted(() => {
      console.log(
        `
%c ✨小沐沐吖 v${packageJson.version}✨ %c ✨SunnyBoy Blog✨ %c\n
你，对，你，就是你\n
🍻- ( ゜- ゜)つロ 乾杯~🍻\n
---- 最是春风留不住，徒留我孤直。\n
     欲寄彩笺兼尺素，山长水阔知何处？\n`,
        `background: #eb507e; padding:5px; font-size:12px; color: #f9f4dc;`,
        `background: #030307; padding:5px; font-size:12px; color:#fff;`,
        `color: #51c4d3; font-size:12px;`
      );
    });
  },
  rootComponents: [],
});
