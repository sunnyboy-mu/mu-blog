---
icon: icon-element-plus
tag:
  - Element-Plus
  - Icon
category:
  - Element-Plus
  - Icon
---

# Element-Plus

## 1、动态渲染 ICON

### 1. 前期准备

1.  安装`@element-plus/icons-vue`

```bash
npm install @element-plus/icons-vue
```

2.  在`main.js / main.ts`中全局注册所有图标

```js
// main.js or main.ts
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
```

### 2. 具体实现

利用`component`组件实现动态渲染

```vue
<template>
  <el-icon>
    <component :is="iconName" />
  </el-icon>
</template>

<script setup>
import { ref } from "vue";
// iconName的值 就是官方提供的icon名
const iconName = ref("Plus");
</script>
```

## 2、ElTable 数据导出为图像

### 1. 实现方案

1.  分别获取`El-Table`的表头和内容的`DOM`元素（这里考虑`El-Table`是可滚动的内容区域）
2.  使用`html2canvas`库将`DOM`元素转化为`Canvas`
3.  创建一个新的`Canvas`将上述两个`Canvas`进行拼接
4.  将最终的`Canvas`转换为图片并下载

### 2. 具体实现

```js
import html2canvas from "html2canvas";

/**
 * ElTable 导出为图片
 * @param {String} selector el-table 的自定义选择器
 * @param {String} fileName 文件名
 */
export function elTableExportToImage(selector, fileName) {
  const tableHeaderDom = document.querySelector(
    `${selector}.el-table .el-table__header`
  );
  const tableBodyDom = document.querySelector(
    `${selector}.el-table .el-table__body`
  );
  let headerCanvas = null;
  let bodyCanvas = null;
  html2canvas(tableHeaderDom)
    .then((canvas) => {
      headerCanvas = canvas;
      return html2canvas(tableBodyDom);
    })
    .then((canvas) => {
      bodyCanvas = canvas;
      const imageCanvas = _mergeCanvases(headerCanvas, bodyCanvas);
      _downloadCanvasAsImage(imageCanvas, fileName);
    });
}

/**
 * 合并两个 Canvas
 * @param {HTMLCanvasElement} canvasOne
 * @param {HTMLCanvasElement} canvasTwo
 * @returns {HTMLCanvasElement} 合并后的 Canvas
 */
function _mergeCanvases(canvasOne, canvasTwo) {
  const mergedCanvas = document.createElement("canvas");
  const ctx = mergedCanvas.getContext("2d");

  // 设置合并后的 Canvas 大小
  mergedCanvas.width = Math.max(canvasOne.width, canvasTwo.width);
  mergedCanvas.height = canvasOne.height + canvasTwo.height;

  // 将第一个 Canvas 内容绘制到合并的 Canvas
  ctx.drawImage(canvasOne, 0, 0);

  // 将第二个 Canvas 内容绘制到合并的 Canvas，紧接着第一个 Canvas
  ctx.drawImage(canvasTwo, 0, canvasOne.height);
  return mergedCanvas;
}

/**
 * 下载 canvas 为图片
 * @param {HTMLCanvasElement} canvas
 * @param {String} fileName 文件名，默认为时间戳
 */
function _downloadCanvasAsImage(canvas, fileName = Date.now()) {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.download = fileName + ".png";
  link.href = image;
  link.click();
  link.remove();
}
```

### 3. 食用文档

1.  安装`html2canvas`库

```bash
npm install html2canvas
```

2.  为`El-Table`自定义一个类名或者 ID 名

3.  将 类/ID 的选择器做为第一个参数传入`elTableExportToImage`函数

```vue
<template>
  <el-button
    type="success"
    @click="elTableExportToImage('#unit-report-table-master', '文件名')"
  >
    导出图像
  </el-button>
  <el-table id="unit-report-table-master" :data="[]"> .... </el-table>
</template>
<script setup>
import { elTableExportToImage } from "xxxx";
</script>
```

## 3、 ElTable 行合并

### 1. 具体实现

```js
/**
 * ElTable 行合并
 * @param {Array} sourceData 表格数据
 * @param {Object} column 当前列
 * @param {Number} rowIndex 当前行索引
 * @param {String[]} props 需要合并的列
 * @return {{rowspan: Number, colspan: Number}}
 */
export function mergeElTableRows(sourceData, column, rowIndex, props) {
  const result = { rowspan: 1, colspan: 1 };
  const prop = column.property;
  sourceData = sourceData || [];
  if (sourceData.length < 2 || !props.includes(prop)) {
    return result;
  }
  const prevRow = sourceData[rowIndex - 1];
  const currentRow = sourceData[rowIndex];

  if (prevRow && prevRow[prop] === currentRow[prop]) {
    result.rowspan = 0;
    return result;
  }

  for (let i = rowIndex + 1; i < sourceData.length; i++) {
    const nextRow = sourceData[i];
    if (nextRow[prop] === currentRow[prop]) {
      result.rowspan++;
    } else {
      break;
    }
  }
  return result;
}
```

### 2. 食用文档

```vue
<template>
  <el-table
    :data="listData"
    :span-method="
      ({ row, column, rowIndex, columnIndex }) =>
        mergeElTableRows(listData, column, rowIndex, ['name', 'age'])
    "
  >
    ...
  </el-table>
</template>
<script setup>
import { mergeElTableRows } from "@/utils/el-table-tools";
</script>
```
