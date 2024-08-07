<template>
  <ClientOnly>
    <div class="fade-carousel" ref="fadeCarouselRef" :style="{ height }">
      <div class="carousel-container">
        <div class="carousel-arrow carousel-arrow-left" @click="prev"></div>
        <div class="carousel-arrow carousel-arrow-right" @click="next"></div>
        <div
          class="carousel-item"
          v-for="(item, index) in data"
          :key="index"
          :class="{ 'is-active': index === activeIndex }"
        >
          <img class="image" :src="item.image" :alt="item.title" />
          <div class="desc-wrapper" v-if="item.title">
            <div
              class="desc-title"
              :class="{ 'text-center': !item.description }"
            >
              {{ item.title }}
            </div>
            <div class="desc-text" v-if="item.description">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
      <ul class="carousel-indicators">
        <li
          class="carousel-indicator-item"
          v-for="(_, index) in data"
          :key="index"
          :class="{ 'is-active': index === activeIndex }"
          @click="go(index)"
        ></li>
      </ul>
    </div>
  </ClientOnly>
</template>
<script setup>
import { useElementHover, useIntersectionObserver } from "@vueuse/core";
import { onBeforeUnmount, onMounted, ref } from "vue";

const { data, interval, autoplay } = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  height: {
    type: String,
    default: "320px",
  },
  interval: {
    type: Number,
    default: 3000,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
});
const activeIndex = ref(0);
const timer = ref(null);
const fadeCarouselRef = ref(null);

const fadeCarouselIsHovered = useElementHover(fadeCarouselRef);

const fadeCarouselVisible = ref(false);

const { stop } = useIntersectionObserver(
  fadeCarouselRef,
  ([{ isIntersecting }], observerElement) => {
    fadeCarouselVisible.value = isIntersecting;
  }
);

function next() {
  activeIndex.value = (activeIndex.value + 1) % data.length;
}
function prev() {
  activeIndex.value = (activeIndex.value - 1 + data.length) % data.length;
}

function go(index) {
  activeIndex.value = index;
}

function startAutoplay() {
  timer.value = setInterval(() => {
    if (fadeCarouselIsHovered.value || !fadeCarouselVisible.value) {
      return;
    }
    next();
  }, interval);
}

function closeAutoPlay() {
  if (!timer.value) return;
  clearInterval(timer.value);
  timer.value = null;
}

onMounted(() => {
  autoplay && startAutoplay();
});

onBeforeUnmount(() => {
  closeAutoPlay();
  stop();
});
</script>
<style lang="scss" scoped>
.fade-carousel * {
  box-sizing: border-box;
}
.fade-carousel {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .carousel-container {
    width: 100%;
    height: 100%;
    position: relative;
    .carousel-arrow {
      height: 36px;
      width: 36px;
      cursor: pointer;
      position: absolute;
      top: 50%;
      z-index: 10;
      transform: translateY(-50%);
      transition: 0.3s;
      border-radius: 50%;
      background-color: rgba(31, 45, 61, 0.11);
      color: #fff;
      text-align: center;
      font-size: 12px;
      z-index: 100;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-bottom: 0.5rem solid rgba(255, 255, 255, 0.8);
        border-left: 0.5rem solid rgba(255, 255, 255, 0.8);
        border-radius: 0.5rem;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
      &.carousel-arrow-left {
        left: 10px;
        &::after {
          transform: scale(0.25) translate(25%) rotate(45deg);
        }
      }
      &.carousel-arrow-right {
        right: 10px;
        &::after {
          transform: scale(0.25) translate(-25%) rotate(225deg);
        }
      }
    }
    .carousel-item {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0;
      transition: 0.3s;
      &.is-active {
        opacity: 1;
        z-index: 99;
      }
      .image {
        user-select: none;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
      .desc-wrapper {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 0;
        background-color: #0009;
        color: #fff;
        padding: 0 10px;
        font-weight: 500;
        .desc-title {
          padding: 2px 0;
          font-size: 16px;
          line-height: 20px;
          font-family: ZWZT;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &.text-center {
            text-align: center;
          }
        }
        .desc-text {
          font-size: 12px;
          line-height: 16px;
          padding: 2px 0;
          font-family: ZWZT;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .carousel-indicators {
    z-index: 100;
    list-style: none;
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    background-color: #0009;
    padding: 3px 1px;
    border-radius: 5px;
    .carousel-indicator-item {
      display: block;
      list-style: none;
      margin: 0 2px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 0.3;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        opacity: 0.7;
      }
      &.is-active {
        opacity: 0.7;
      }
    }
  }
}
</style>
