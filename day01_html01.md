# 前端的组成

HTML + CSS + JavaScript

`H5: html5 + css3 + JavaScript + API`

现在先讲的是HTML4.01+CSS2

# HTML

超文本标记语言(Hyper Text Markup Language)

存储在硬盘中的是纯粹的文件，文件内部的内容是一些纯粹的字符，文件的后缀名是html

## 名词解释

超文本：文字，图片，音频，视频等可以在互联网传输的内容。

标记：又叫标签(tag)，由<>开始，到</>结束，尖括号中有指定的单词或字母。是标记语言的特殊产物。标记语言有很多种，熟悉的有HTML，xml。不同的是，xml 的标记可以自己定义，html的标记不能自己定义。

在HTML中，每一个标记都有不同的意义

## 编辑的软件

记事本

Notepad++

sublime

VSCode

Hbuilder

webstorm

## 编码格式

在文本的<meta>标签中，可以设置文本的编码格式，如果文本的编码格式和文档的编码格式不一致，会导致乱码。通常来说，编码格式设置为UTF-8

# HTML基本格式

```html
<!DOCTYPE html><!-- 告诉浏览器，这个文档请以HTML的方式来解析 -->
<html lang="en"><!-- HTML文件的根标签 -->
<head><!-- HTML的头标签，头标签主要负责设置一些内容 -->
    <meta charset="UTF-8"><!-- 设置页面的字符编码 -->
    <title>Document</title><!-- 设置页面的标题名称 -->
</head>
<body><!-- 页面的主体部分 -->
    
</body>
</html>
```

# HTML基本标签

## 浏览器对于HTML标签的解析规则

浏览器对于特定的标签能够有一些样式的渲染

浏览器对于不认识的标签，直接忽略，不进行任何的样式渲染

## 标题标签  header标签

`<h1>-<h6>`，没有h7

有加粗，有放大字体的效果。

```html
<body>
    <h1>中软国际</h1>
    <h2>中软国际</h2>
    <h3>中软国际</h3>
    <h4>中软国际</h4>
    <h5>中软国际</h5>
    <h6>中软国际</h6>
    中软国际<h7>中软国际</h7>
</body>
```

每一个页面只有1个h1标签

## meta标签

~~~html
<meta charset="UTF-8">
	<!-- 关键词 -->
    <meta name="keywords" content="减肥,减肥方法,减肥餐"> 
	<!-- 描述信息，会出现在搜索页面 -->
    <meta name="description" content="鑫瑞减肥网是国内领先的减肥瘦身网站,介绍各种健康的快速减肥方法和减肥食谱,包括瘦脸、瘦腰、瘦腿、减肥产品、减肥药、减肥茶、减肥瑜伽等瘦身减肥大全。" >
    <!-- 自动刷新页面，或者自动跳转页面 -->
    <meta http-equiv="refresh" content="3;url=https://www.baidu.com" >
~~~

## 段落标签

HTML 段落是通过 `<p>` 标签进行定义的。

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

通常来说，只有是文本段落才使用段落标签。

浏览器对于空白字符(空格，换行符等)的处理方式：

如果空白字符两端都有字符，空白字符会缩减成1个

如果空白字符一端有文字，空白字符会全部删除。

## 换行标签

~~~html
<h2>静夜思</h2>
<p>床前明月光，疑是地上霜。举头望明月，低头思故乡</p>
<p>床前明月光，<br>
    疑是地上霜。<br>
    举头望明月，<br><!-- 在段落间使用br来换行 -->
    低头思故乡</p>
~~~

## 超链接标签 `<a>`

### 跨页面跳转

a标签可以实现跨页面跳转，本质上来说，是在当前的HTML文件中打开一个新的HTML文件

~~~html
<a href="http://www.baidu.com">百度</a>
<a href="welcome.html">welcome</a><!--使用相对路径来访问页面-->
~~~

实际在href中填写的url地址应该携带协议名`http://`或`https://`

如果访问的url地址没有协议名，则按照相对路径来访问

### 本页面跳转

a标签可以实现本页面跳转

~~~html
<a href="#d1">第一集</a>
<a href="#d2">第二集</a>
<a href="#d3">第三集</a>
<a href="#d4">第四集</a>
<a href="#d5">第五集</a>
...
<a name="d1"></a>
或者是
<p id=d1></p>
~~~

a标签可以跳转到本页面中指定的name位置或id位置

### 跨页面指定位置跳转

~~~html
<a href="zhuixu.html#d1">第一集</a>
<a href="zhuixu.html#d2">第二集</a>
<a href="zhuixu.html#d3">第三集</a>
<a href="zhuixu.html#d4">第四集</a>
<a href="zhuixu.html#d5">第五集</a>
~~~

### 发起操作

a标签可以发起邮件操作，可以发起QQ操作，可以发起电话操作

~~~html
<a href="mailto:2837462@qq.com">发送邮件给我</a>
<a href="tencent://message/?uin=234234234&Site=&Menu-=yes">QQ:234234234</a>
<a href="tel:18922381761">189</a>
~~~

## 图片标签`<img />`

~~~html
<!--使用网络路径的图片-->
<img src="https://inews.gtimg.com/newsapp_ls/0/12046387311_640330/0" alt="">
<!--使用绝对路径的图片-->
<img src="C:\Users\ETC\Desktop\image\001.jpg" alt="">
<!--使用相对路径的图片-->
<img src="./image/002.jpg" alt="一张美女图片" title="你猜是谁？" height="200" width="100">
~~~

图片标签的属性：

src：source资源路径，可以使用绝对路径，相对路径和网络url路径

alt：alternate 候补者，一段文字，当资源路径不可用时，显示该文字

title：鼠标悬停时显示的文字。这个属性是所有标签都可用的。

width/height：设置图片的宽和高，如果同时设置宽和高，可能导致图片变形。如果只设置一方，另一方会等比例缩放。

## 列表标签

### 无序列表

~~~html
<ul><!-- 无序列表 -->
    <li>女研究生支教途中意外去世，最后一段录音曝光</li>
    <li>回迁房一半面积是公摊，“好经”何以念歪了？</li>
    <li>印度网红：中国APP被禁后月收入少了好几千</li>
    <li>明星大V疯狂带货的筋膜枪，到底值不值得入手？</li>
    <li>5年前割肉的股民再进场，大部分散户恐将被消灭</li>
    <li>赖美云谈遭网暴：情绪崩溃手脚发麻，停工2月不见人</li>
</ul>
~~~

### 有序列表

~~~html
<ol><!-- 有序列表 -->
    <li>女研究生支教途中意外去世，最后一段录音曝光</li>
    <li>回迁房一半面积是公摊，“好经”何以念歪了？</li>
    <li>印度网红：中国APP被禁后月收入少了好几千</li>
    <li>明星大V疯狂带货的筋膜枪，到底值不值得入手？</li>
    <li>5年前割肉的股民再进场，大部分散户恐将被消灭</li>
    <li>赖美云谈遭网暴：情绪崩溃手脚发麻，停工2月不见人</li>
</ol>
~~~

列表标签是一个组标签，不可以单独出现。

通常来说，不会使用到ul>li标签的默认样式

### 定义列表

通常来说，dt标签在一个dl中只有1个。

~~~html
<dl>
    <dt>新闻</dt>
    <dd>女研究生支教途中意外去世，最后一段录音曝光</dd>
    <dd>回迁房一半面积是公摊，“好经”何以念歪了？</dd>
</dl>
~~~

以上标签，具体该使用什么标签，根据内容来决定

# 没有任何样式的标签

div和span

div和span都是在网页制作过程中使用最多的标签，本身没有任何样式的渲染。

所有的标签，我们都称之为盒子。

## 块级标签和内联标签

块级标签：可以设置宽高，独占一行

div,ul,li,p,header标签,dt,dd

内联标签：不可以设置宽高，可以写在文字中间

span,a,b,strong,em,i,font

## 标签中的特殊约定

块元素中，可以有任何元素，内联元素中，原则上不可以有块元素

内联元素中可以有内联元素，但a标签中不可以包含a标签

块元素通常用来进行页面布局，内联元素通常用来进行局部修饰

# 表单

作用：提供给用户进行交互的。

用户用来填写信息交给服务器端。服务器端用来收集用户信息的。

表单由谁来填写？由`用户`来填写

表单的数据提交给谁？提交给`服务器`

一个基础的表单

~~~html
<form action="数据提交的目标" method="提交的方法">
    <!-- 提交的数据 -->
</form>
~~~

数据提交的目标：服务器的IP地址，处理信息的路径

提交的方式：get|post

- get：以地址栏的形式来提交
- post：以文件的形式来提交

## input标签

## 文本框

~~~html
<input type="text" name="username" value="张老三">
~~~

input：输入框，

​        type：输入框的类型

​        name：输入框的名字

​        value：输入框的缺省值

​        name和value是提交给服务器的属性名和属性值

## 密码框

~~~html
密码：<input type="password" name="pwd"> 
~~~

## 单选按钮

~~~html
<div>
    性别：
    <input type="radio" name="sex" checked="checked">男
    <input type="radio" name="sex">女
</div>
~~~

单选按钮本身并不互斥，如果需要他们互斥，必须有相同的name值

如果需要页面加载或刷新时，立即选择男性或女性，可以在相对应的标签中增加`checked="checked"`属性

HTML5规定，如果属性名和值相同，可以省略值。

## 复选框

~~~html
<input type="checkbox" name="hobby" value="吃饭">吃饭
<input type="checkbox" name="hobby" value="睡觉">睡觉
<input type="checkbox" name="hobby" value="打豆豆">打豆豆
~~~

复选框中的name应需要设置为相同的属性值

默认选择可以使用`checked="checked"`

## 下拉菜单

~~~html
户口所在地：
<select name="province">
    <option value="北京">北京</option>
    <option value="上海">上海</option>
    <option value="广州">广州</option>
    <option value="深圳">深圳</option>
    <option value="海口">海口</option>
    <option value="三亚">三亚</option>
    <option value="成都" selected="selected">成都</option>
    <option value="长沙">长沙</option>
    <option value="武汉">武汉</option>
    <option value="大连">大连</option>
    <option value="辽宁">辽宁</option>
    <option value="西安">西安</option>
    <option value="沈阳">沈阳</option>
    <option value="包头">包头</option>
</select>
~~~

select和option也是组标签，设置默认为`selected=“selected”`

## 文本域 - 多行文本框

~~~html
<textarea readonly name="message" cols="30" rows="10" >
    多行文本域
</textarea>
~~~

cols表示列数

rows表示行数

如果文本域中的内容不想让用户修改，可以设置为只读`readonly="readonly"`

## 按钮（普通按钮，重置按钮，提交按钮）

~~~html
<div>
    <input type="button" value="普通按钮">
    <input type="reset" value="重置按钮">
    <input type="submit" value="提交按钮">
</div>
<div>
    <button>普通按钮</button>
    <button type="reset">重置按钮</button>
    <button type="submit">提交按钮</button>
</div>
~~~

## 表单

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <form action="数据提交的目标" method="提交的方法">
        <div>用户名：<input type="text" name="username" value="张老三"></div> 
        <div>密码：<input type="password" name="pwd"></div>
        <div>性别：<input type="radio" name="sex" checked="checked">男<input type="radio" name="sex">女</div> 
        <div>爱好：
            <input type="checkbox" name="hobby" value="吃饭">吃饭
            <input type="checkbox" name="hobby" value="睡觉">睡觉
            <input type="checkbox" name="hobby" value="打豆豆">打豆豆
        </div>
        <div>

            户口所在地：
            <select name="province">
                <option value="北京">北京</option>
                <option value="上海">上海</option>
                <option value="广州">广州</option>
                <option value="深圳">深圳</option>
                <option value="海口">海口</option>
                <option value="三亚">三亚</option>
                <option value="成都" selected="selected">成都</option>
                <option value="长沙">长沙</option>
                <option value="武汉">武汉</option>
                <option value="大连">大连</option>
                <option value="辽宁">辽宁</option>
                <option value="西安">西安</option>
                <option value="沈阳">沈阳</option>
                <option value="包头">包头</option>
            </select>
        </div>
        <div>
            <textarea readonly name="message" cols="30" rows="10" >
                多行文本域
            </textarea>
        </div>
        <div>
            <input type="button" value="普通按钮">
            <input type="reset" value="重置按钮">
            <input type="submit" value="提交按钮">
        </div>
        <div>
            <button>普通按钮</button>
            <button type="reset">重置按钮</button>
            <button type="submit">提交按钮</button>
        </div>
    </form>
</body>
</html>
~~~

# 表格

~~~html
<table border="0" cellpadding="0" cellspacing="0" width="80%" align="center" ><!-- 表明，这个标签是一个表格的标签 -->
    <tr align="center"><!-- table row 一个行 -->
        <td>11</td><!-- table data数据项 -->
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
    </tr>
    <tr><!-- table row 一个行 -->
        <td>21</td><!-- table data数据项 -->
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
    </tr>
    <tr><!-- table row 一个行 -->
        <td>31</td><!-- table data数据项 -->
        <td>32</td>
        <td>33</td>
        <td>34</td>
        <td>35</td>
        <td>36</td>
        <td>37</td>
    </tr>
</table><!-- 表明，这个标签是一个表格的标签 -->
~~~

表格，一般用来展示规整数据

border：表格的边框，默认为0

cellpadding：表格边框到内容的距离，默认为1

cellspacing：表格边框到边框的距离，默认为1

width：设置表格或单元格的宽度

height：设置表格或行的高度

align：文本的对齐方式；如果是在table，则设置整个表格的对齐方式，表格的宽度不为100%

bgcolor：表格的背景颜色

