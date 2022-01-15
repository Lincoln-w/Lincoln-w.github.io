# CSS
## flex布局
​
**flex布局**<br/>
        弹性布局

**flex容器**<br/>
``` css
        display:flex | inline-flex
```
flex：将独享作为弹性伸缩盒显示（盒子若在指定宽度排列不满的话，会有宽度留白） 

![avatar](https://img-blog.csdnimg.cn/9f6b3f063d67479a8b9afa163770c7b2.png)

inline-flex：将对象作为内联块级弹性伸缩盒显示（及无留白）

![avatar](https://img-blog.csdnimg.cn/96ba1b2a6b57406ea258a85efb7b605c.png)

flex容器的所有子元素自动成为容器成员,称为flex"项目",<font color='red'> 孙子元素是不会成为flex成员的。 </font>

默认水平方向是主轴，垂直方向是交叉轴。

项目默认沿主轴方向排列，里面的div是“项目”

**flex容器属性**<br/>
**flex-direction:**<br/>
  主轴方向,排列方向

row:从左到右

row-reverse:从右到左

colum:从上到下

colum-reverse:从下到上

**flex-wrap:**<br/>
换行:

nowrap:不换行,默认

wrap:换行,正向方向的换行

wrap-reverse:反向换行

**flex-flow:**<br/>
是flex-direction和flex-wrap属性的简写形式,默认为row nowrap

**justify-content:**<br/>
定义了项目在主轴上的对齐方式

flex-start:主轴开始位置对齐

flex-end:主轴结尾位置对齐

center:居中

space-between:两端对齐,项目之间的间隔都相等

space-around:<font color='red'>每个项目的间隔相等</font>,所以项目之间的间隔比项目与边框的间隔大一倍

![avatar](https://img-blog.csdnimg.cn/d52fc0aae4b24fe0b934520168633f5c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56m55YiA,size_14,color_FFFFFF,t_70,g_se,x_16)

 **Tip:交叉轴**<br/>
交叉轴:对于一个项目来讲的:如:

![avatar](https://img-blog.csdnimg.cn/7fb07cc12c8c40e2bf559533548f6a46.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56m55YiA,size_20,color_FFFFFF,t_70,g_se,x_16)

 **align-items:**<br/>
属性定义交叉轴的对齐方式

flex-start:交叉轴的起点对齐

![avatar](https://img-blog.csdnimg.cn/715514413d49489c9a82e5a32d7d7ab6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56m55YiA,size_20,color_FFFFFF,t_70,g_se,x_16)

 flex-end:交叉轴的末点对齐

![avatar](https://img-blog.csdnimg.cn/7b66b2fadaa041929f3246925a7892bd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56m55YiA,size_20,color_FFFFFF,t_70,g_se,x_16)

center:交叉轴的中点对齐

![avatar](https://img-blog.csdnimg.cn/3b8df04d752b45a18717ead10bab5788.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56m55YiA,size_20,color_FFFFFF,t_70,g_se,x_16)

 baseline:项目的第一行文字的基线对齐

![avatar](https://img-blog.csdnimg.cn/41e37b5559aa46099df601bb0d758e24.png)

 stretch:(默认值)如果项目未设置高度或设为auto,项目将占满整个容器的高度

 **align-content:**<br/>
定义了多个轴线(多行)在交叉轴上的对齐方式,如果项目只有一根轴线(一行),该属性不起作用,所以一般与flex-wrap:warap一起使用

flex-start:交叉轴的起点对齐

![avatar](https://img-blog.csdnimg.cn/3a3f7465f95d48a882647b8b133d2ab2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56m55YiA,size_20,color_FFFFFF,t_70,g_se,x_16)

 flex-end:交叉轴的末点对齐

center:中间对齐

space-between:两端对齐

space-around:每根轴线两侧的间隔都相等,所以轴线之间的间隔比轴线与边框的间隔大一倍

![avatar](https://img-blog.csdnimg.cn/1f8cb60b726e41f98c552b7e52cc96cc.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56m55YiA,size_19,color_FFFFFF,t_70,g_se,x_16)

 stretch:轴线占满整个交叉轴

**其他属性**<br/>
order:定义了项目的排雷顺序,数值越小排列越靠前,默认为0

flex-grow:定义项目的放大比例,默认为0,如果存在剩余空间,也不放大

flex-shrink:定义项目缩小比例,默认为1,如果空间不足,该项目将缩小

flex-basis:定义了在分配多余空间之前,项目占据的主轴空间

flex:是flex-grow,flex-shrink和flex-basis的简写,默认为0 1 auto

  flex:1;//平分默认空间

align-self:允许某个项目与其他项目不一样的对齐方式,可覆盖align-items属性,默认值为auto,表示继承父元素的align-items属性,如果没有父元素,则等同于strech

​