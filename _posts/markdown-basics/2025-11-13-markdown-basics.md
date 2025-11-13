---
layout: post  # 固定值，指定用Minima的文章模板
title: "博客模板"  # 文章标题，可加引号
date: 2025-11-13
categories: Tech  # 文章分类（多个用空格分隔，例：技术 工具）
tags: Github Markdown  # 文章标签（多个用空格分隔）
excerpt: "文章模板，Markdown语法介绍"
---

# Markdown基础语法全解析

Markdown是一种轻量级标记语言，用简洁的语法代替复杂的排版，非常适合写博客、笔记或文档。以下是最常用的基础语法，学会这些就能满足80%的写作需求。


## 一、标题

用`#`加空格表示标题，`#`数量越多，标题级别越低（支持1-6级）：

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

效果：
# 一级标题
## 二级标题
### 三级标题


## 二、文本格式

- **加粗**：用`**`包裹文本
  `**这是加粗文字**` → **这是加粗文字**

- *斜体*：用`*`包裹文本
  `*这是斜体文字*` → *这是斜体文字*

- ***加粗+斜体***：用`***`包裹文本
  `***这是加粗加斜体***` → ***这是加粗加斜体***

- ~~删除线~~：用`~~`包裹文本
  `~~这是删除线~~` → ~~这是删除线~~


## 三、列表

### 1. 无序列表
用`-`、`+`或`*`加空格表示，可嵌套：

```markdown
- 项目1
  - 子项目1.1
  - 子项目1.2
- 项目2
```

效果：
- 项目1
  - 子项目1.1
  - 子项目1.2
- 项目2

### 2. 有序列表
用`数字.`加空格表示，自动排序：

```markdown
1. 第一步
2. 第二步
3. 第三步
```

效果：
1. 第一步
2. 第二步
3. 第三步


## 四、链接与图片

### 1. 链接
格式：`[显示文本](链接地址 "可选标题")`
示例：
* `[Markdown](https://daringfireball.net/projects/markdown/ "Markdown基础语法")` → [Markdown](https://daringfireball.net/projects/markdown/ "Markdown基础语法")
* `[Obsidian](https://help.obsidian.md/obsidian-flavored-markdown "Obsidian语法")` → [Obsidian](https://help.obsidian.md/obsidian-flavored-markdown "Obsidian语法")

### 2. 图片
格式：`![替代文本](图片路径 "可选标题")`
- 全局本地图片（建议放`assets/images`文件夹）：
  `![示例图片](/assets/images/icon-github.jpg "一张示例图")` ![示例图片](/assets/images/icon-github.jpg "一张示例图")
- 文章本地图片：
  `![示例图片](icon-wechat.jpg "一张示例图")` ![示例图片](icon-wechat.jpg "一张示例图")
- 网络图片：
  `![网络图片](https://picsum.photos/200/150 "网络示例图")` → ![网络图片](https://picsum.photos/200/150 "网络示例图")


## 五、代码块

### 1. 行内代码
用`` ` ``包裹单行代码：
`在Markdown中，`printf("Hello")` 是行内代码` → 在Markdown中，`printf("Hello")` 是行内代码

### 2. 多行代码块
用```包裹，可指定语言（自动高亮）：

```python
# Python示例
def hello():
    print("Hello, Markdown!")
hello()
```


## 六、引用

用`>`加空格表示引用，可嵌套：

```markdown
> 这是一级引用
> > 这是嵌套的二级引用
> 回到一级引用
```

效果：
> 这是一级引用
> > 这是嵌套的二级引用
> 回到一级引用


## 七、表格

用`|`分隔列，`-`分隔表头和内容，`:`表示对齐方式：

```markdown
| 姓名 | 年龄 | 职业 |
| :--- | :---: | ---: |
| 张三 | 25 | 程序员 |
| 李四 | 30 | 设计师 |
```

效果：
| 姓名 | 年龄 | 职业 |
| :--- | :---: | ---: |
| 张三 | 25 | 程序员 |
| 李四 | 30 | 设计师 |


## 八、分割线

用`---`、`***`或`___`表示（单独占一行）：

```markdown
---
```

效果：
---
