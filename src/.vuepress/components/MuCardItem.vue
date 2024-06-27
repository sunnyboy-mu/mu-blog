<template>
  <a class="mu-card-item" :target="target" :href="link">
    <div class="front">
      <img :src="pic" />
    </div>
    <div class="back">
      <p class="title">{{ title }}</p>
      <p class="author">{{ author }}(著)</p>
      <p class="desc">
        {{ desc }}
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
const { pic, title, author, desc, link } = defineProps({
  title: String,
  author: String,
  pic: String,
  desc: String,
  link: {
    type: String,
    default: "javascript:void(0);",
  },
});

const target = computed(() => {
  return link === "javascript:void(0);" ? "_self" : "_blank";
});
</script>

<style lang="scss" scoped>
.mu-card-item {
  font-family: "ZWZT";
  /* 相对定位 */
  position: relative;
  --mu-card-item-width: calc(
    calc(100% - var(--mu-card-item-num) * 2 * 15px) / var(--mu-card-item-num)
  );
  width: var(--mu-card-item-width);
  aspect-ratio: 2 / 3;
  margin: 15px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  &::after {
    display: none !important;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  p {
    margin: 0;
  }
  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    backface-visibility: hidden;
    transition: all 1s;
  }
  .back {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    transform: rotateY(180deg);
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
    background: url("/assets/book/paper.png") center center / 100% 100%
      no-repeat;
    .title {
      border: 1px solid rgba(255, 255, 255, 0.5);
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: 12px;
      text-align: center;
      padding: 8px;
      border-radius: 8px;
      box-sizing: border-box;
    }
    .author {
      margin: 5px 0;
      color: #000;
    }
    .desc {
      text-align: left;
      text-indent: 2em;
      color: #333;
      font-size: 12px;
      line-height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
    }
  }
  &:hover {
    .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(0deg);
    }
  }
}
</style>
