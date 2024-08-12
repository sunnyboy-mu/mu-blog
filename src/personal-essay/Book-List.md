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
  - title: 每一天梦想练习
    author: 另维
    pic: https://upyun-oss.mu00.cn/202407031403355.jpg
    desc: 每个人都有一份属于自己的意义；只看你有没有幸运碰到；如果碰不到，有没有毅力找到；我们能做的，是不在找到之前任命。
    link: https://book.douban.com/subject/36615020/
  - title: 所有的为时已晚，其实都是恰逢其时
    author: 文德
    pic: https://upyun-oss.mu00.cn/202408052027105.webp
    desc: 想到就去做，因为那就是最好的开始。
  - title: 基层女性
    author: 王慧玲
    pic: https://upyun-oss.mu00.cn/202408122100686.webp
    desc: 爱、金钱与精神世界的建立。
    link: https://book.douban.com/subject/35532047/
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
