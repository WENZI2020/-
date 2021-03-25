# 回顾复习

什么是标签：标签由`<tagName>`开始，到`</tagName>`结束。

xml的标签基本都是自定义的

html的标签，基本都是规定好的。（可以使用自定义标签）浏览器对于规定好的标签，有特殊的解释方式(渲染方式)

`<!doctype html>`告诉浏览器，以下的文档应该以HTML 5的方式来解析

`<html></html>`根标签

`<head></head>`头标签，主要负责设置页面的一些信息

​	`<title></title>`页面标题标签

`<body></body>`主体标签，需要在页面中显示的内容，放在body标签中。

​	`<h1>-<h6>`:标题标签

​	`<p>`段落标签

​	`<br />`,`<hr />`

​	`<img />`,`<a href=""></a>`

​	`<ul>,<li>,<ol>,<dl>,<dt>,<dd>`

表单：`<form action="提交的目标地址" method="get|post"></form>`

输入框：`<input type="输入框的类型" name="输入框的名字" value="输入框的默认值" />`

表格：`<table></table>`

块元素和内联元素：

块元素：div，p之类的能够自动换行的

内联元素：span,a之类的能够写在文字中间的，不会自动换行的。

# css

## 为什么会有css

早期的web页面只有一些简单的段落标签，列表标签，标题标签等，然而，在当前的情况下，并不需要这么多的功能。随着社会的进步，网络的发展，人们对于互联网的要求也越来越高，就迫切需要HTML增加新的元素，完成特定的功能。

就出现了`<font>`,`<i>`,`<s>`,`<b>`等标签，导致HTML页面非常冗余，并且功能划分不明确

~~~html
<!--早期的HTML页面对于文字的设置-->
<font size="26" color="red"><i><b>李白</b></i></font>
~~~

后来开发者觉得HTML应该只负责负面的内容，有其他的东西负责页面内容的样式渲染，w3c组织就开始发布了css

## css的地位

现在整体的互联网前端页面共有三层

> HTML 超文本标记语言	 从语义的角度描述网页的结构
>
> CSS 	层叠样式表			 从审美的角度负责页面的样式
>
> JS		JavaScript				从交互的角度描述页面的行为	

CSS 又叫层叠样式表，现在最新的css版本是css3，我们首先学习的是css2.1，css3是在css2.1的基础上增加了很多的内容而已。

只用CSS2.1能不能够完成页面布局工作呢？可以，完全足够。css3对于css2.1来说，仅仅是可以更快的达到所想要完成的目标。

## css的书写位置

### 内部样式表

写在`<style></style>`标签中，style标签可以写在HTML页面的任何位置，因为HTML页面的加载顺序是逐行加载，如果要使用到已写的样式，那些使用的标签必须在该style标签的下面。

内部样式表推荐写在head中

~~~html
<style>
    /* 内部样式表 */
    h1{
        color:red;
    }
</style>  
<h1>李白乘舟将欲行</h1>
~~~

### 外部样式表

创建一个单独的以css为后缀名的文件，里面按照css的书写规则，编写css样式。

在HTML页面中，通过`<link rel="stylesheet" href="demo01.css">`标签关联该css样式文件

~~~css
/* 外部样式表 */
h1{
    color:red;
}
~~~

~~~html
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="demo01.css">
</head>
<body>
    <h1>李白乘舟将欲行</h1>
</body>
~~~

link标签的书写位置遵循style标签的原则,

### 行内样式

在标签中的style属性里填写css属性

~~~html
<h2 style="color:blue;">孤帆远隐碧空净</h2>
~~~

行内样式的权重最高，内部样式和外部样式的权重取决于link标签和style标签的书写位置，谁在下面，谁的权重高

ps：css整体的权重采取就近原则

## css的基础选择器

### 标签选择器

所有的标签名都是标签选择器的名字，使用标签选择器后，整个页面的所有该标签都应用上所写的样式

~~~css
标签名{
    
}
~~~

### ID选择器

在标签上增加ID属性，id选择器的名字为ID属性的值，在值前面添加#表示为ID选择器。

原则上每一个页面的ID名不能重复。

实际上在CSS中，相同名称的ID名都用应用统一的样式。

~~~html
<style>
    #box1{
        color:red;
    }
</style>
<h1 id="box1">孙悟空</h1>
~~~

### class选择器

在标签上增加class属性，class选择器的名字为class属性的值，在值前面添加.表示为class选择器

~~~html
<style>
    .box2{
        color:pink;
    }
</style>
<h2 class="box2">猪悟净</h2>
~~~

>  在css的设置中，ID和class本质上没有区别，ID不能重复的原则不是因为css，而是因为js的需要，js要求每一个页面的id值不能重复
>
> getElementById("id名")方法只能获取到一个对象，所以要求页面上的id值具有唯一性

## 三种基本选择器，到底该怎么使用？

在页面布局的时候，通常来说使用class选择器，尽量避免使用id选择器，在项目比较大的时候，class和Element选择器配合使用。

什么时候给标签增加ID值？只有在JS需要的时候或使用label的时候，才给标签增加ID值

## 通配符选择器

通配符选择器使用"*"来表示，可以指代所有的元素

~~~css
*{padding:0;margin:0;}
~~~

## 高级选择器（复合选择器）

概念：两个或两个以上的基础选择器通过不同的方式连接在一起。

作用：缩小选择器的使用范围

### 交集选择器(即有...又有...)

特点：多个选择器同时使用，中间没有任何东西间隔。如果包含元素选择器，元素选择器必须是第一个

~~~css
.box.class3{color:brown;font-size:24px;}
~~~

你的标签中记得有box这个class名，又得有class3这个class名，才能应用上这个样式

~~~html
<style>
    #p1{color:red;}/* id选择器 */
    .c1{color:pink;}/* class选择器 */
    .c1#p1{color:blue;}/* 中间没有任何间隔，把两个或多个选择器写在一起的情况，叫做交集选择器 */
    p.c1#p1{color:green}/* 在交集选择器中，标签选择器只能放在第一个位置 */
</style>
<p id="p1">飞流直下三千尺</p>
<p class="c1">疑是银河落九天</p>
<p>桃花潭水深千尺</p>
<p id="p1" class="c1">不及汪伦送我情</p>
~~~

### 并集选择器

特点：多个选择器，使用逗号分隔开，所有选择器使用同一个样式

多个选择器使用同一样式时，节省代码的写法

通常不会这么写，大多数是在reset.css的时候需要这么去写。在框架编写的时候，经常会用到这种写法

如：bootstrap，YUI，EASYui

~~~html
<style>
    /* .c1{color:red;}
    .c2{color:red;}
    .c3{color:red;}
    .c4{color:red;} */
    /* 多个选择器应用同一种样式的时候，可以使用并集选择器，将多个选择器使用逗号分隔 */
    .c1,.c2,.c3,.c4{color:green;}
</style>
<p class="c1">鹅鹅鹅</p>
<p class="c2">曲项向天歌</p>
<p class="c3">白毛浮绿水</p>
<p class="c4">红掌拨清波</p>
~~~

### 后代选择器

特点：涉及到父子标签时，父元素的选择器在前，子元素的选择器在后，中间以空格分开。

~~~html
<style>
    .general1 .gen03{color:red;}/* 指代某一个标签后面的gen03标签 */
    .general2 .gen05{color:pink;}/* 后代选择器，目的是精确选择到某一个标签 */
</style>
<div class="general1">
    <ul>
        <li class="gen01">赵云</li>
        <li class="gen02">孙尚香</li>
        <li class="gen03">典韦</li>
        <li class="gen04">吕布</li>
        <li class="gen05">孙坚</li>
        <li class="gen06">黄汉升</li>
        <li class="gen07">太史子义</li>
        <li class="gen08">周公瑾</li>
    </ul>
</div>
<div class="general2">
    <ul>
        <li class="gen01">白起</li>
        <li class="gen02">韩信</li>
        <li class="gen03">廉颇</li>
        <li class="gen04">项羽</li>
        <li class="gen05">王伯当</li>
        <li class="gen06">张清</li>
        <li class="gen07">李逵</li>
        <li class="gen08">林冲</li>
    </ul>
</div>
~~~
中间不管隔多少层，中间是否有其他元素，都能被渲染上
~~~html
<div>
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <p class="class1">床前明月光</p>
                                                <p class="class2">疑是地上霜</p>
                                                <p class="class3">举头望明月</p>
                                                <p class="class4">低头思故乡</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
~~~

## 练习题：根据以下CSS样式写出对应的HTML结构

~~~css
/*1*/
div.div1 ul.box li,div.div1 p{
    color:red;
}
/*2*/
div.box p.p1,div.box div.div1 p,p{
    color:pink;
}
~~~

## 基本选择器的优先级

!important > id选择器 > class选择器 > Element选择器

权重最高的选择器为!important

## 复合选择器的优先级

复合选择器权重的计算方式：每一种选择器都有一个数值来计算
        标签选择器的权重计算数值为 0,0,1
        class选择器的权重计算数值为 0,1,0
        id选择器的权重计算数值为 1,0,0

~~~html
<style>
    #i1{color:darkblue}/* 1,0,0 */
    .c1{color:yellow;}/* 0,1,0 */
    li{color:red;}/* 权重是：0,0,1 */
</style>
~~~

行内样式不参与权重计算，因为行内样式的权重最好，唯有!important;比行内的权重高

## CSS的继承性和层叠性

继承性：后代元素可以继承父元素的某一些样式

> `哪些属性能够被继承？`
>
> color，text-开头的，line-开头的，font-开头的
>
> 关于盒子的、定位的、布局的属性都不能被继承

层叠性：就是CSS处理样式冲突的能力。具体标签使用哪一个样式，需要进行权重计算，才能得到。

简单来说，层叠性就是覆盖，权重低的样式被权重高的样式所覆盖。

# css常用属性

| 字体属性                        |                                                              |
| ------------------------------- | ------------------------------------------------------------ |
| font-size                       | 设置字号大小，常用单位是px，页面默认字号16px，谷歌浏览器最小字号为12像素 |
| font-family: "普惠中文","宋体"; | 可以设置多个字体，第一字体如果用户没有，可以渲染第二字体     |
| font-style                      | 倾斜  italic                                                 |
| font-weight                     | 加粗  bold                                                   |
| font                            | 合写属性：可以省略倾斜和加粗，必须要有字号和字体两个属性，并且字号在字体前面。如：font:35px "楷书"; |

### 四种颜色的取值方式

~~~css
color:darkgreen;/* 使用英文单词取值 */
color:#db855a;/* 按照16进制取值方法取值，前两位代表红色，中间两位代表绿色，最后面两位代表蓝色 ，最大取值为ff ff=255 */
color:rgb(45,61,71)/* 使用rgb取值，三个数字，每一个代表一个颜色，最大值255 */
color:rgba(255,0,0,.5); /* 最后一个数值为透明度 */
~~~

| 文本属性        |                                                              |
| --------------- | ------------------------------------------------------------ |
| text-align      | 对齐方式：left\|center\|right                                |
| text-indent     | 首行缩进。em是一个可变的单位，1em 等 当前元素的字号大小      |
| line-height     | 用于设置多行文字的行高效果；当只有一行文字的时候，height和line-height相等，则可以设置该行文字为垂直居中 |
| text-decoration | 文本装饰：underline下划线\|overline上划线\|line-through删除线\|none不设置线条 |
| word-spacing    | 设置单词与单词之间的间距                                     |
| letter-spacing  | 设置文本的字间距                                             |
| vertical-align  | 不是设置文字垂直局中的，只能设置在img标签中，设置图片与文字的基线对齐方式。取值：top\|bottom\|middle\|baseline |

| 背景属性              |                                                              |
| --------------------- | ------------------------------------------------------------ |
| background-color      | 设置盒子的背景颜色，背景颜色在最底层                         |
| background-image      | url(图片路径)，设置盒子的背景图片，默认图片在x和y轴进行平铺  |
| background-repeat     | 图片的平铺方式 no-repeat\|repeat-x\|repeat-y\|repeat\|round  |
| bakcgounrd-position   | 图片的定位(x,y)，如果都没有取值，则为0，如果只有1个值，y值为50% |
| background            | 合写属性：background:azure url(./baby_2.jpg) no-repeat 50% 50% |
| bakcground-size       | 设置背景图片大小，如果设置长度，需要设置两个值               |
| background-attachment | 背景图是否跟着元素滚动 fixed\|scorll                         |

background属性可以单独只写颜色，也可以单独只写背景图片

# 盒子模型

每一个div，或者说每一个标签都是一个盒子

盒子模型包含5个属性：width(宽),height(高),border(边框),padding(内边距),mragin(外边距)

基础的盒子模型主要研究的是盒子的宽高计算

## 设置盒子内容(content)的宽度

~~~html
<style>
    .div1{
        /* css中每一行结尾都必须有分号 */
        width:600px;
        height:400px;
        
    }    
</style>
<div class="div1">一个div就是一个盒子</div>
~~~

 将div设置成`600px`高，400px宽，表示div内容(content)的宽高为`600×400` 

## 设置盒子边框(border)的宽度

设置盒子的边框

盒子包含`border-width`,`border-style`,`border-color`三个属性

单独写border-width或border-color，是不会有边框的，必须写border-style才会显示边框。

如果**只写**`border-style`，border-width和border-color将会取默认值，3像素和black

~~~html
<style>
    .div1{
        width:300px;
        height:200px;
        border-width:5px;/* 边框线的宽度 */
        border-style: solid;/* 边框的线型 */
        border-color: blue;
    }    
</style>
<div class="div1">一个div就是一个盒子</div>
~~~

盒子包含`border-top`,`border-right`,`border-bottom`,`border-left`四个方向

只需要设置border-style即可显示边框，默认color为黑色，默认width为3像素

~~~html
<style>
    .div1{
        width:300px;
        height:200px;
        /* 每一个方向都可以给不同的颜色，宽度，样式 */
        border-top-style: solid;
        border-left-style: dashed;
        border-right-style: double;
        border-bottom-style: dotted;
    }    
</style>
<div class="div1">一个div就是一个盒子</div>
~~~

border合写属性：border:1px solid black;

~~~html
<style>
    .div1{
        width:300px;
        height:200px;
        /* 合写属性 */
        /* border:7px double pink; */
        border-top: 7px solid pink;
        border-right: 11px double pink;
        border-bottom: 5px dashed pink;
        border-left: 9px dotted pink;
    }    
</style>
<div class="div1">一个div就是一个盒子</div>
~~~

快速简单写法 border:solid;

## padding

盒子的内边距：边框到内容的距离

如果设置了内边距，盒子的实际宽高将被改变

盒子的距离设定不能有负数

## margin

用于设置盒子边框到另一个盒子边框的距离

如果在标准文档流中上面的盒子设置margin-bottom:20px;下面盒子设置margin-top:20px;两个盒子上下距离20像素

如果浮动之后左边盒子设置margin-right:20px;右边盒子margin-left:20px;两个盒子左右距离40px

margin的设置不会对盒子本身的大小有改变

