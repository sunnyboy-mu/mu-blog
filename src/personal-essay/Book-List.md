---
icon: icon-keCheng
tag:
  - 书屋
category:
  - 书屋

bookListBy2024:
  - title: 做自己的心理医生
    author: 筱泓
    pic: /assets/book/zzjdxlys.png
    desc: 每个人都是自己的心理医生；认识自我、激发内心深处的自愈力；让貌似正常心有小恙的人自愈并改变。
---

# 沐沐书屋

## 2024 年

<div class="mu-card">
  <MuCardItem 
    v-for="item in $frontmatter.bookListBy2024"
    :key="item.url"
    v-bind="item"
  />
</div>
