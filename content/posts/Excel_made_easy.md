+++
date = '2026-01-11T06:42:24+08:00'
draft = false
title = 'Excel__动态日历制作__'

+++

# Intro

___

闲来无事，上YouTube逛Excel，发现了在Excel里面制作动态日历的视频。

**视频原标题**：[Create a Dynamic Calendar From a List of Events in Excel](https://youtu.be/qkay9xnJf5c?si=VrQtzTh9ljHJ_TK6)

刚看到这个视频，只有一个大胆的想法：既然之前在Excel里面可以做各种神奇的操作，比如批量创建文件夹这种，那么以后我是不是可以把所有的工作都搬到Excel里面？至少这个日历可以当作代办和日程来做。不管那么多了，直接开始上手操作。

本文将列出视频中的主要步骤和要点。

___



# 使用函数搭建基本框架

___

### 基本框架

表格区域第一行，搭建月份和年份。

表格区域第二行，搭建星期。

第三行开始搭建日期，第四行暂时留空，从第三行开始，每两行一组，一共预留6组。

`B3`单元格键入函数：

```Excel
=Sequence(1,7)
```

这样我们就得到了第一行。Sequence函数生成了一个1行7列的序列，第三个参数未设置，那么会生成一行1-7的数字，但从`B5`单元格开始，我们需要输入下面的函数：

```Excel
=Sequence(1,7,H3+1)
```

然后把`B5`单元格的内容粘贴直到`B13`单元格。目前我们就搭建好了一个基本的框架。如下图：

![image-20260111070308715](C:\Users\leole\AppData\Roaming\Typora\typora-user-images\image-20260111070308715.png)

___

### 调整日期

但是我们不是每个月1号一定是星期一，所以我们需要对日期做一些调整。

在右边某个单元格输入，例如`J2`单元格：

```Excel
=1&A1&E1
```

得到：`1January2026`

然后在`B3`单元格里面修改Sequence函数：

```Excel
=Sequence(1,7,J2-WEEKDAY(J2,2)+1)
```

这样就能偏移到正确的单元格了。但是我们发现这样操作后，`B3`单元格变成了**`46020`**，但这不是我们想要的。

全选日期的区域，按`Ctrl + 1`打开设置单元格格式菜单，分类里选择自定义，类型下面的文本框输入d，确定。

我们发现变成了这样：![image-20260111071922017](C:\Users\leole\AppData\Roaming\Typora\typora-user-images\image-20260111071922017.png)

___

### 给月份和年份设置数据验证下拉菜单

我们先自定义两列，一列是月份，一列是年份。

![image-20260111072336431](C:\Users\leole\AppData\Roaming\Typora\typora-user-images\image-20260111072336431.png)

分别选中`A1:D1`和`E1:H1`然后分别合并居中，先给月份设置。单击数据Ribbon，单击**数据验证**，允许下面设置为**序列**，然后来源选择January到December所在的单元格。

年份设置参照月份设置的方法。

___

### 连接事项到日历

首先我们准备一个这样的表格：

![image-20260111073145450](C:\Users\leole\AppData\Roaming\Typora\typora-user-images\image-20260111073145450.png)

我们可以按`Ctrl + T`把这个表格变成一个 Table。

在`B4`单元格我们可以插入以下函数：

```

```

