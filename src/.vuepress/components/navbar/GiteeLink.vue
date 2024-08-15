<template>
  <div class="vp-nav-item vp-action">
    <a
      :href="link"
      target="_blank"
      class="vp-action-link"
      rel="noopener noreferrer"
      aria-label="telegram"
    >
      <svg
        t="1723730677484"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6449"
        style="width: 1.25rem; height: 1.25rem; vertical-align: middle"
      >
        <path
          d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m259.168-568.896h-290.752a25.28 25.28 0 0 0-25.28 25.28l-0.032 63.232c0 13.952 11.296 25.28 25.28 25.28h177.024a25.28 25.28 0 0 1 25.28 25.28v12.64a75.84 75.84 0 0 1-75.84 75.84h-240.224a25.28 25.28 0 0 1-25.28-25.28v-240.192a75.84 75.84 0 0 1 75.84-75.84h353.92a25.28 25.28 0 0 0 25.28-25.28l0.064-63.2a25.312 25.312 0 0 0-25.28-25.312H417.184a189.632 189.632 0 0 0-189.632 189.6v353.952c0 13.952 11.328 25.28 25.28 25.28h372.928a170.656 170.656 0 0 0 170.656-170.656v-145.376a25.28 25.28 0 0 0-25.28-25.28z"
          p-id="6450"
          fill="currentColor"
        ></path>
      </svg>
    </a>
  </div>
</template>
<script setup>
import { ref } from "vue";
const link = ref("https://gitee.com/SunnyBoy_mu");
</script>
