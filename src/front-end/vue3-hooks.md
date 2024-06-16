---
icon: icon-webhooks
tag:
  - Vue3
  - Hooks
category:
  - Vue3
  - Hooks
---

# Vue3 - hooks

- 放置文件夹：`composables`或`hooks`(依据个人习惯)

## 1、 网页实时 FPS

```js
/**
 * @file use-fps.js
 * @description 网页实时 FPS
 */
import { ref } from "vue";

/**
 * 网页实时FPS
 * @param {Object} options
 * @param {Number} options.every 间隔多少帧更新一次，默认 10
 * @return {{fps: Number}}
 */
export function useFps(options = { every: 10 }) {
  const fps = ref(0);

  const every = options?.every || 10;

  let lastTime = performance.now();

  let ticks = 0;

  function _updateFps() {
    ticks++;

    const nowTime = performance.now();

    if (ticks >= every) {
      const diff = nowTime - lastTime;
      fps.value = Math.round(1000 / diff);
      ticks = 0;
    }

    lastTime = nowTime;
    requestAnimationFrame(_updateFps);
  }

  requestAnimationFrame(_updateFps);

  return {
    fps,
  };
}
```

## 2、 defer 优化白屏

```js
import { onUnmounted, ref } from "vue";

/**
 * 函数用于在页面中使用，当页面中存在大量组件时，进行逐帧渲染的组件，避免白屏；
 * @param {Number} maxCount 组件最大数量
 * @return {function(Number): boolean}
 */
export function useDefer(maxCount = 100) {
  const frameCount = ref(1);

  let refId;

  function updateFrameCount() {
    refId = requestAnimationFrame(() => {
      frameCount.value++;
      if (frameCount.value >= maxCount) {
        return;
      }
      updateFrameCount();
    });
  }

  updateFrameCount();

  onUnmounted(() => {
    cancelAnimationFrame(refId);
  });

  return function (n) {
    return frameCount.value >= n;
  };
}
```

> 食用文档与说明，请移步[使用 defer 优化白屏时间](/views/front-end/vue.html#_4、使用defer优化白屏时间)
