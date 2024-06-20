---
icon: icon-ui
tag:
  - UI
  - 组件库
category:
  - UI
  - 组件库

UIVue:
  - name: Element
    desc: 一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库
    url: https://element.eleme.cn/#/zh-CN
    logo: https://raw.githubusercontent.com/ElemeFE/element/dev/examples/assets/images/element-logo-small.svg

  - name: Element Plus
    desc: 基于 Vue 3，面向设计师和开发者的组件库
    url: https://element-plus.org/zh-CN/
    logo: https://element-plus.org/images/element-plus-logo-small.svg

  - name: View Design
    desc: 基于 Vue.js 3 的企业级 UI 组件库和中后台系统解决方案，为数万开发者服务
    url: https://www.iviewui.com/
    logo: https://file.iviewui.com/view-design-logo.png

  - name: Ant Design Vue
    desc: Ant Design 的 Vue 实现，开发和服务于企业级后台产品
    url: https://www.antdv.com/docs/vue/introduce-cn
    logo: https://aliyuncdn.antdv.com/favicon.ico

  - name: layui - vue
    desc: layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库
    url: http://www.layui-vue.com/zh-CN/index
    logo: http://www.layui-vue.com/assets/logo.685dda16.jpg

  - name: primevue
    desc: 全面的可定制、功能丰富的UI组件套件增强您的web应用程序
    url: https://primevue.org/
    logo: https://primevue.org/favicon.ico

  - name: Naive UI
    desc: 一个 Vue 3 组件库，比较完整，主题可调，使用 TypeScript，快有点意思
    url: https://www.naiveui.com/zh-CN/os-theme
    logo: https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg

UIReact:
  - name: Ant Design
    desc: 助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～
    url: https://ant-design.antgroup.com/
    logo: https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg

UIUniApp:
  - name: uView(Vue2.0)
    desc: 全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水
    url: https://www.uviewui.com/
    logo: https://www.uviewui.com/common/logo.png

  - name: uview-plus(Vue3.0)
    desc: 基于uView2.0初步修改，后续会陆续修复vue3兼容性，以及组合式API改造等
    url: https://uview-plus.jiangruyi.com/
    logo: https://uview-plus.jiangruyi.com/common/logo.png

  - name: TuniaoUI
    desc: 基于 uni-app 开发的跨平台 Vue3 组件库
    url: https://vue3.tuniaokj.com/
    logo: https://vue3.tuniaokj.com/images/tuniao-logo.svg

UICrossEnd:
  - name: Vant
    desc: 一个轻量、可定制的移动端组件库，于 2017 年开源
    url: https://vant-ui.github.io/vant/#/zh-CN
    logo: https://fastly.jsdelivr.net/npm/@vant/assets/logo.png

  - name: Arco Design
    desc: 字节跳动出品的企业级设计系统
    url: https://arco.design/
    logo: https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico

UINative:
  - name: Layui
    desc: 原生态 · 开源；极简模块化 Web UI 组件库
    url: https://layui.dev/
    logo: https://layui.dev/favicon.ico
---

# UI 组件库

## 1、Vue

<SiteInfo
  v-for="item in $frontmatter.UIVue"
  :key="item.url"
  v-bind="item"
  :preview="'https://s0.wp.com/mshots/v1/' + item.url"
/>

## 2、React

<SiteInfo
  v-for="item in $frontmatter.UIReact"
  :key="item.url"
  v-bind="item"
  :preview="'https://s0.wp.com/mshots/v1/' + item.url"
/>

## 3、Uni-app

<SiteInfo
  v-for="item in $frontmatter.UIUniApp"
  :key="item.url"
  v-bind="item"
  :preview="'https://s0.wp.com/mshots/v1/' + item.url"
/>

## 4、跨端

<SiteInfo
  v-for="item in $frontmatter.UICrossEnd"
  :key="item.url"
  v-bind="item"
  :preview="'https://s0.wp.com/mshots/v1/' + item.url"
/>

## 5、原生

<SiteInfo
  v-for="item in $frontmatter.UINative"
  :key="item.url"
  v-bind="item"
  :preview="'https://s0.wp.com/mshots/v1/' + item.url"
/>
