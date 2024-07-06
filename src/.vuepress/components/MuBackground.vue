<template>
  <ClientOnly>
    <div
      class="vp-blog-mask"
      :style="{
        background: `url(${currentWallpaper.url}) center/cover no-repeat`,
      }"
    ></div>
    <div class="bing-switch">
      <div class="bing-location">
        <span class="bing-location-icon"></span>{{ currentWallpaper.title }}
      </div>
      <button
        class="bing-switch-prev"
        title="prev image"
        type="button"
        :disabled="bingStorage.index === 0"
        @click="prev"
      ></button>
      <button
        class="bing-switch-next"
        title="next image"
        type="button"
        :disabled="bingStorage.index === bingStorage.data.length - 1"
        @click="next"
      ></button>
    </div>
  </ClientOnly>
</template>
<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { computed, onMounted } from "vue";
import { ClientOnly } from "vuepress/client";
import "vuepress-theme-hope/presets/bing-hero-background.scss";
const bingStorage = useStorage("bing-image", {
  index: 0,
  data: [],
});
const currentWallpaper = computed(() => {
  return bingStorage.value.data[bingStorage.value.index];
});
const prev = () => {
  bingStorage.value.index -= 1;
};
const next = () => {
  bingStorage.value.index += 1;
};
onMounted(() => {
  bingStorage.value.data = [
    {
      url: "https://upyun-oss.mu00.cn/202407061024857.webp",
      title: "拯救姬-少女",
    },
    {
      url: "https://upyun-oss.mu00.cn/202407061040197.png",
      title: "栈桥云海",
    },
    {
      url: "https://upyun-oss.mu00.cn/202407061041063.png",
      title: "阿尔卑斯山田园风景《一》",
    },
    {
      url: "https://upyun-oss.mu00.cn/202407061042393.png",
      title: "阿尔卑斯山田园风景《二》",
    },
    {
      url: "https://upyun-oss.mu00.cn/202407061024029.webp",
      title: "铳枪影业合影",
    },
    {
      url: "https://upyun-oss.mu00.cn/202407061024766.webp",
      title: "神里凌华",
    },
    {
      url: "https://upyun-oss.mu00.cn/202407061024206.webp",
      title: "神里凌华",
    },
  ];
});
</script>
