---
icon: icon-keCheng
tag:
  - 书屋
category:
  - 书屋

bookListBy2024:
  - title: 做自己的心理医生
    author: 筱泓
    pic: https://upyun-oss.mu00.cn/202406291653868.png
    desc: 每个人都是自己的心理医生；认识自我、激发内心深处的自愈力；让貌似正常心有小恙的人自愈并改变。
  - title: 笔记的方法
    author: 刘少楠
    pic: https://upyun-oss.mu00.cn/202406291653009.png
    desc: 让你的笔记记得好、找得到、用得上
    link: https://book.douban.com/subject/36615020/
---

# 沐沐书屋

## 2024 年

<div class="mu-card">
  <BookItem 
    v-for="item in $frontmatter.bookListBy2024"
    :key="item.url"
    v-bind="item"
  />
</div>
