---
icon: icon-gongzuojingli
article: false
date: 2024-07-08
containerClass: work-experience
---

<script setup>
import { ref } from 'vue'
// const LayIcon = (await import('@layui/layui-vue/es/icon/index.js')).default
// const LayTimeline = (await import('@layui/layui-vue/es/timeline/index.js')).default
// const LayTimelineItem = (await import('@layui/layui-vue/es/timelineItem/index.js')).default
// const LayCarousel = (await import('@layui/layui-vue/es/carousel/index.js')).default
// const LayCarouselItem = (await import('@layui/layui-vue/es/carouselItem/index.js')).default

import '@layui/layui-vue/es/index/index.css'
import '@layui/layui-vue/es/timeline/index.css'
import '@layui/layui-vue/es/carousel/index.css'
const carouselOne = ref("1")
const carouselTwo = ref("1")
const carouselThree = ref("1")
const carouselFour = ref("1")
const carouselFive = ref("1")
</script>

# 个人经历

## 1、创途信息

> 公司：`河南创途信息科技有限公司`（原`河南知更鸟信息科技有限公司`）
>
> 职位：`前端开发工程师`
>
> 时间：`2024年2月 ~ 至今`

<lay-timeline>
  <lay-timeline-item>
    <template #title>
      <a href="http://biz.zyjstzjt.com/" target="_blank">业务中台</a>
    </template>
    <div>
      <p>1. 应用设计中心</p>
      <p>2. 流水号管理</p>
      <p>3. 电子签章管理</p>
      <p>4. BPMN流程设计</p>
    </div>
    <lay-carousel v-model="carouselFive" anim="updown" style="display:inline-block;width:100%; height: 300px" :autoplay="true">
      <lay-carousel-item id="1">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102328993.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="2">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102329978.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="3">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102329485.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="4">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102329446.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="5">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102329150.webp" />
        </div>
      </lay-carousel-item>
    </lay-carousel>
    <template #dot>
      <lay-icon type="layui-icon-release"></lay-icon>
    </template>
  </lay-timeline-item>
  <lay-timeline-item>
    <template #title>
      <a href="#" target="_blank">CMS</a>
    </template>
    <lay-carousel v-model="carouselFour" anim="updown" style="display:inline-block;width:100%; height: 300px" :autoplay="true">
      <lay-carousel-item id="1">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102326679.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="2">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102326243.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="3">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102326133.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="4">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102326774.webp" />
        </div>
      </lay-carousel-item>
    </lay-carousel>
    <template #dot>
      <lay-icon type="layui-icon-release"></lay-icon>
    </template>
  </lay-timeline-item>
  <lay-timeline-item>
    <template #title>
      <a href="http://info.zyjstzjt.com/" target="_blank">数据中台</a>
    </template>
    <div>
      <p>1. 数智化管控平台</p>
      <p>2. DataEase</p>
    </div>
    <lay-carousel v-model="carouselThree" anim="updown" style="display:inline-block;width:100%; height: 300px" :autoplay="true">
      <lay-carousel-item id="1">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102313534.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="2">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102314609.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="3">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102314988.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="4">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102314969.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="5">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102314409.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="6">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102314316.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="7">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102315916.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="8">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102315662.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="9">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102315610.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="10">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102315156.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="11">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102315991.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="12">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102315911.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="13">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102315826.webp" />
        </div>
      </lay-carousel-item>
    </lay-carousel>
    <template #dot>
      <lay-icon type="layui-icon-release"></lay-icon>
    </template>
  </lay-timeline-item>
  <lay-timeline-item>
    <template #title>
      <a href="http://iam.zyjstzjt.com/" target="_blank">技术中台</a>
    </template>
    <div>
      <p>1. 统一身份认证中心</p>
      <p>2. 统一门户（一网通办）</p>
      <p>3. 中豫建投开发者中心</p>
    </div>
    <lay-carousel v-model="carouselOne" anim="updown" style="display:inline-block;width:100%; height: 300px" :autoplay="true">
      <lay-carousel-item id="1">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102252925.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="2">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102255653.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="3">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102255109.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="4">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102256351.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="5">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102258042.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="6">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102259064.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="7">
        <div class="carousel-1">
          <img src="https://upyun-oss.mu00.cn/202407102259372.webp" />
        </div>
      </lay-carousel-item>
    </lay-carousel>
    <div>
      <p>4. 统一门户（一网通办）APP</p>
    </div>
    <lay-carousel v-model="carouselTwo" anim="updown" style="display:inline-block;width:50%; height: 640px" :autoplay="true">
      <lay-carousel-item id="1">
        <div class="carousel-2">
          <img src="https://upyun-oss.mu00.cn/202407102305183.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="2">
        <div class="carousel-2">
          <img src="https://upyun-oss.mu00.cn/202407102306921.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="3">
        <div class="carousel-2">
          <img src="https://upyun-oss.mu00.cn/202407102306545.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="4">
        <div class="carousel-2">
          <img src="https://upyun-oss.mu00.cn/202407102306864.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="5">
        <div class="carousel-2">
          <img src="https://upyun-oss.mu00.cn/202407102306822.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="6">
        <div class="carousel-2">
          <img src="https://upyun-oss.mu00.cn/202407102306991.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="7">
        <div class="carousel-2">
          <img src="https://upyun-oss.mu00.cn/202407102307387.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="8">
        <div class="carousel-2">
          <img src="https://upyun-oss.mu00.cn/202407102307338.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="9">
        <div class="carousel-2">
          <img src="https://upyun-oss.mu00.cn/202407102307920.webp" />
        </div>
      </lay-carousel-item>
      <lay-carousel-item id="10">
        <div class="carousel-2">
          <img src="https://upyun-oss.mu00.cn/202407102307736.webp" />
        </div>
      </lay-carousel-item>
    </lay-carousel>
    <template #dot>
      <lay-icon type="layui-icon-release"></lay-icon>
    </template>
  </lay-timeline-item>
</lay-timeline>

## 2、新信澜科技

> 公司：`河南新信澜网络科技有限公司`
>
> 职位：`前端开发工程师`
>
> 时间：`2022年8月 ~ 2024年1月`

<style>
.work-experience .theme-hope-content h2{
  margin-bottom: 20px;
}
.work-experience .theme-hope-content .layui-timeline-axis {
  color: var(--theme-color);
}
.work-experience .layui-timeline-item:before{
  background: var(--theme-color);
}

.work-experience .theme-hope-content:not(.custom) h3.layui-timeline-title{
  margin-top: 0 !important;
  padding-top: 0 !important;
}

.carousel-1{
  height: 300px;
  img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}

.carousel-2{
  height: 640px;
  img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>
