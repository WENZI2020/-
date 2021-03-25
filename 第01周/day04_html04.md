# 复习

文本属性：text-开头的属性都可以被继承

背景属性：(背景属性尤为重要)

​	背景颜色：background-color

​	背景图片：background-image

​	背景图片的重复方式：background-repeat

​	背景图片的定位：background-position

​	合写属性：background

​	background-origin: 背景图片的起始显示位置

​    background-clip: 背景图片的切割位置

盒子属性：

​	content(内容)

​	padding(内边距)

​	border(边框)

​	margin(外边距)

display：用于转换盒子的显示状态

​	常用属性有：none，inline，block，inline-block，以后有一种弹性布局，会使用flex

浮动(float)：left right

浮动的元素会脱离文档流，脱离文档流之后会更改盒子的显示状态，类似于inline-block，所有标签都能够浮动。

浮动后的元素不会影响前面的元素，但会盖住后面元素的位置，却不会盖住后面元素的内容。

推荐浮动的方式：需要在一行显示的元素，最好是都浮动。

# 浮动后盒子间距计算

盒子在文档流中垂直方向的margin不叠加，以较大的计算

脱离标准流后，两个盒子之间是没有塌陷现象的。两个盒子的间距应计算两个和子margin值的之和。

# 定位

## 静态定位：position:static

默认定位，不写也是static

## 相对定位：position:relative;

相对定位是相对于盒子本身去进行偏移的，盒子本身不脱离标准流，会占有原来的位置，不会影响其他元素的位置，但可能会覆盖其他元素的显示

~~~html
<style>
    .father{
        border:1px solid;
        background:cyan;
    }
    .father>div{
        border:1px solid blue;
        height: 80px;
        margin:10px;
    }
    .father>.son1{
        background-color: burlywood;
    }
    .father>.son2{
        background-color: gold;
        /* position:static;静态定位方式，没有定位，默认的定位方式 */
        position: relative; /* 相对定位 */
        /* 定位需要偏移的方向和偏移量，两个属性来配合使用 */
        top:30px;/* 元素的上方离元素原来的位置10像素 */
        left:10px;/* 左边离原来的位置10像素的距离 */

    }
    .father>.son3{
        background-color: yellowgreen;
    }
</style>
<div class="father">
    <div class="son1">1. 谁能横刀立马，唯我彭大将军</div>
    <div class="son2">2. 我自横刀向天笑，去留肝胆两昆仑</div>
    <div class="son3">3. 苍天不死，黄天当立</div>
</div>
~~~

如果元素设置relative，但不设置偏移量，则对元素没有任何影响，只会对子元素中含有绝对定位的元素有影响

## 绝对定位：position:absolute;

绝对定位的元素会脱离标准流，元素不占有原来的位置

当不设置偏移量的时候，元素会在原来位置上脱标，下面的元素会直接顶上来。

绝对定位会影响其他元素的位置

~~~html
<style>
    .father{
        border:1px solid;
        background:cyan;
        position:relative;/* 当某一级父元素设置非static定位属性的时候，子元素的绝对定位按照父元素边框来偏移 */
    }
    .father>div{
        border:1px solid blue;
        height: 80px;

    }
    .father>.son1{
        background-color: burlywood;
    }
    .father>.son2{
        background-color: gold;
        position: absolute; /* 绝对定位，是以浏览器边框为边界设置偏移量的 */
        left:0px;
        top:0px;
    }
    .father>.son3{
        background-color: yellowgreen;
    }
</style>
<div class="father">
    <div class="son1">1. 谁能横刀立马，唯我彭大将军</div>
    <div class="son2">2. 我自横刀向天笑，去留肝胆两昆仑</div>
    <div class="son3">3. 苍天不死，黄天当立</div>
</div>
~~~

设有绝对定位元素的祖先元素没有设置定位属性时，元素定位从浏览器边框出发，根据偏移量进行偏移

设有绝对定位元素的祖先元素有设置定位属性时，元素定位从最近设置定位属性的盒子边框出发，进行偏移

> 父元素设置非static定位，子元素设置绝对定位，子元素的定位根据父元素的边框来偏移
>
> 父元素一般设置relative，所有有一句说法叫做：子绝父相(子元素绝对定位，父元素相对定位)

给行内元素设置绝对定位之后，将转换为行内块元素(不推荐这种做法)

## 固定定位：position:fixed;

固定定位会脱离标准流，元素不占有原来的位置

偏移位置从浏览器边框出发

~~~html
<style>
    h1{
        border:1px solid red;
        height:4000px;
        line-height: 100px;
    }
    .content{
        width:1200px;
        margin:0 auto;
    }
    .ad{
        width:200px;
        height: 400px;
        background: pink;
        position:fixed;
        left:0px;
        right:0px;
    }
</style>
<div class="ad">
    一刀999
</div>
<div class="content">
    <h1>内容</h1>
</div>
~~~

# 页面布局遵循的原则

尽量使用标准流

标准流解决不了，使用浮动

浮动解决不了，使用定位

> 大范围的布局使用浮动，小范围的挪移使用定位，绝对定位一般来说不单独使用，必须配合相对定位来使用，子绝父相

# 关系选择器

~~~html
<style>
    .li3+li{color:red;}  /* 相邻选择器：只能选择相邻的下一个 */
    .li3~li{color:red;}  /* 兄弟选择器：只能选择后面的兄弟，不能选择前面的兄弟 */
</style>
<ul>
    <li class="li1">杨广</li>
    <li class="li2">李世民</li>
    <li class="li3">赵匡胤</li>
    <li class="li4">忽必烈</li>
    <li class="li5">朱元璋</li>
    <li class="li6">努尔哈赤</li>
</ul>
~~~

# 伪对象选择器

~~~html
<style>
    .div1{
        color:pink;
        font-size:36px;
    }
    .div1::first-letter{/* 第一个字符的样式 */
        font-size:2em;
    }
    .div1::first-line{/* 第一行的夯实 */
        color:blue;
    }
    .div2{
        width:200px;
        height: 100px;
        border:1px solid;
        margin:0 auto;
    }
    .div2::before{
        /* before必须有一个配合的属性叫content */
        content: "前面的内容 -- ";
        border:1px solid cyan;
        width: 100px;
        height: 100px;
        display:block;
    }
    .clearfix::after{
        content:"";
        display:block;
        clear:both;
    }
</style>
<div class="div1">
    鹊鸲属留鸟。性活泼、大胆，不畏人，好斗，特别是繁殖期，常为争偶而格斗。单独或成对活动。休息时常展翅翘尾，有时将尾往上翘到背上，尾梢几与头接触。清晨常高高的站在树梢或房顶上鸣叫，鸣声婉转多变，悦耳动听。尤其是繁殖期间，雄鸟鸣叫更为激昂多变，其他季节早晚亦善鸣，常边鸣叫边跳跃。 主要以昆虫为食。所吃食物种类常见有金龟甲、瓢甲、锹形甲、步行虫、蝼蛄、蟋蟀、浮尘子、蚂蚁、蝇、蜂、蛹等鞘翅目、鳞翅目、直翅目、膜翅目、双翅目、同翅目、异翅目等昆虫和昆虫幼虫。此外也吃蜘蛛、小螺、蜈蚣等其他小型无脊椎动物，偶尔也吃小蛙等小型脊椎动物和植物果实与种子。 
</div>
<div class="div2">新年快乐</div>
~~~

# 伪类选择器

## 可以针对a标签设置的一些选择器

| 选择符                   | 版本   | 描述                                                         |
| ------------------------ | ------ | ------------------------------------------------------------ |
| [E:link](link.htm)       | CSS1   | 设置超链接a在未被访问前的样式。                              |
| [E:visited](visited.htm) | CSS1   | 设置超链接a在其链接地址已被访问过时的样式。                  |
| [E:hover](hover.htm)     | CSS1/2 | 设置元素在其鼠标悬停时的样式。                               |
| [E:active](active.htm)   | CSS1/2 | 设置元素在被用户激活（在鼠标点击与释放之间发生的事件）时的样式。 |

~~~html
<style>
    a:link{color:cyan;}/* 没有被点过的样式 */
    a:visited{color:#f3a}/* 已经被点过的样式 */
    a:hover{color:orange;}/* 鼠标移动到元素上显示的样式 */
    a:active{color:red;}/* 鼠标点击按下鼠标抬起之前的样式 */
</style>
<a href="https://www.baidu.com">百度</a>
<a href="https://www.xunle.com">迅雷</a>
<a href="https://www.kankan.com">看看</a>
~~~

四个选择器，如果要一起使用，必须按照一定的顺序，顺序是l->v->h->a

现在网络上，link，visited和active这三个选择器不常用，用的比较泛滥的是hover，而且hover不仅仅可以在a中使用，可以在任何标签中使用。

## hover触犯隐藏显示效果

~~~html
<style>
    .div1{
        width:200px;
        height:80px;
        border:1px solid;
    }
    .div1:hover{
        background:red;
    }
    .div1+.div2{
        width:200px;
        height:300px;
        border:1px solid;
        background:blue;
        display:none;
    }
    /* 当我鼠标移动到.div1的时候，.div2的样式改变 */
    .div1:hover+.div2{
        display:block;
    }
</style>
<div class="div1"></div>
<div class="div2">这是一个神奇的国度</div>
~~~

## 表单聚焦选择器

| 选择符               | 版本   | 描述                                                        |
| -------------------- | ------ | ----------------------------------------------------------- |
| [E:focus](focus.htm) | CSS1/2 | 设置元素在成为输入焦点（该元素的onfocus事件发生）时的样式。 |

## child选择器

| 选择符                                           | 版本 | 描述                                        |
| ------------------------------------------------ | ---- | ------------------------------------------- |
| [E:not(s)](not(s).htm)                           | CSS3 | 匹配不含有s选择符的元素E。                  |
| [E:first-child](first-child.htm)                 | CSS2 | 匹配父元素的第一个子元素E。                 |
| [E:last-child](last-child.htm)                   | CSS3 | 匹配父元素的最后一个子元素E。               |
| [E:only-child](only-child.htm)                   | CSS3 | 匹配父元素仅有的一个子元素E。               |
| [E:nth-child(n)](nth-child(n).htm)               | CSS3 | 匹配父元素的第n个子元素E。                  |
| [E:nth-last-child(n)](nth-last-child(n).htm)     | CSS3 | 匹配父元素的倒数第n个子元素E。              |
| [E:first-of-type](first-of-type.htm)             | CSS3 | 匹配同类型中的第一个同级兄弟元素E。         |
| [E:last-of-type](last-of-type.htm)               | CSS3 | 匹配同类型中的最后一个同级兄弟元素E。       |
| [E:only-of-type](only-of-type.htm)               | CSS3 | 匹配同类型中的唯一的一个同级兄弟元素E。     |
| [E:nth-of-type(n)](nth-of-type(n).htm)           | CSS3 | 匹配同类型中的第n个同级兄弟元素E。          |
| [E:nth-last-of-type(n)](nth-last-of-type(n).htm) | CSS3 | 匹配同类型中的倒数第n个同级兄弟元素E。      |
| [E:empty](empty.htm)                             | CSS3 | 匹配没有任何子元素（包括text节点）的元素E。 |

## 其他伪类选择器

| 选择符                     | 版本 | 描述                                                         |
| -------------------------- | ---- | ------------------------------------------------------------ |
| [E:checked](checked.htm)   | CSS3 | 匹配用户界面上处于选中状态的元素E。(用于input type为radio与checkbox时) |
| [E:enabled](enabled.htm)   | CSS3 | 匹配用户界面上处于可用状态的元素E。                          |
| [E:disabled](disabled.htm) | CSS3 | 匹配用户界面上处于禁用状态的元素E。                          |
| [E:target](target.htm)     | CSS3 | 匹配相关URL指向的E元素。                                     |

~~~html
<style>
    .side{
        position:fixed;
        right:0;
        top:300px;
    }
    .side>div{
        width:80px;
        height:80px;
        text-align: center;
    }
    .side>div>a{
        width:80px;
        height:80px;
        line-height: 80px;
        display: block;
        background-color: orange;
        text-decoration: none;
        color:#000;
    }
    .side>div>a:hover{
        background-color: #369;
    }
    #div1:target,#div2:target,#div3:target,#div4:target{
        background-color: yellow;
        display:block;
    }
    #div1,#div2,#div3,#div4{display:none;}
</style>
<div class="side">
    <div><a href="#div1">名词解释</a></div>
    <div><a href="#div2">形态特征</a></div>
    <div><a href="#div3">生活习性</a></div>
    <div><a href="#div4">繁殖方式</a></div>
</div>
<div id="div1">
    <h2>名词解释</h2>
    <p>鹊鸲（学名：Copsychus saularis）为雀形目鹟科鹊鸲属的鸟类，体长约21厘米，嘴形粗健而直，长度约为头长的一半或比一半略长；尾呈凸尾状，尾与翅几乎等长或较翅稍长；两性羽色相异，雄鸟上体大都黑色；翅具白斑；下体前黑后白。但雌鸟则以灰色或褐色替代雄鸟的黑色部分。鹊鸲性格活泼好动，觅食时常摆尾，不分四季晨昏，在高兴时会在树枝或大厦外墙鸣唱，因此在中国内地有“四喜儿”之称。出没于村落和人家附近的园圃，栽培地带或树旁灌丛，也常见于城市庭园中。食物以昆虫为主，兼吃少量草籽和野果。是孟加拉的国鸟。</p>
</div>
<div id="div2">
    <h2>形态特征</h2>
    <p>雄性成鸟：头顶至尾上覆羽黑色，略带蓝色金属光泽；飞羽和大覆羽黑褐色，内侧次级飞羽外翈大部和次级覆羽均为白色，构成明显的白色翼斑，其他覆羽与背部同色；中央两对尾羽全黑，外侧第4对尾羽仅内翈边缘黑色，余部均白，其余尾羽都为白色；从颏到上胸部分及脸侧均与头顶同色；下胸至尾下覆羽纯白。 [3] 
        雌性成鸟：与雄鸟相似，但雌鸟以灰色或褐色替代了雄鸟的黑色部分；飞羽和尾羽的黑色较雄鸟浅淡；下体及尾下覆羽的白色略沾棕色。 [3] 
        虹膜褐色；嘴黑色；跗蹠和趾灰褐色或黑色。 [3] 
        大小量度：体重♂33-47克，♀ 32-50克；体长♂187-227毫米，♀178-214毫米；嘴峰♂15-21毫米，♀ 15-20毫米；翅♂90-105毫米，♀88-99毫米；尾♂87-110毫米，♀80-96毫米；跗蹠♂ 27-34毫米，♀26-32毫米。（注：♂雄性；♀雌性） [3]</p>
</div>
<div id="div3">
    <h2>生活习性</h2>
    <p>鹊鸲属留鸟。性活泼、大胆，不畏人，好斗，特别是繁殖期，常为争偶而格斗。单独或成对活动。休息时常展翅翘尾，有时将尾往上翘到背上，尾梢几与头接触。清晨常高高的站在树梢或房顶上鸣叫，鸣声婉转多变，悦耳动听。尤其是繁殖期间，雄鸟鸣叫更为激昂多变，其他季节早晚亦善鸣，常边鸣叫边跳跃。 [3] 
        主要以昆虫为食。所吃食物种类常见有金龟甲、瓢甲、锹形甲、步行虫、蝼蛄、蟋蟀、浮尘子、蚂蚁、蝇、蜂、蛹等鞘翅目、鳞翅目、直翅目、膜翅目、双翅目、同翅目、异翅目等昆虫和昆虫幼虫。此外也吃蜘蛛、小螺、蜈蚣等其他小型无脊椎动物，偶尔也吃小蛙等小型脊椎动物和植物果实与种子。 [3]</p>
</div>
<div id="div4">
    <h2>繁殖方式</h2>
    <p>鹊鸲在繁殖期4-7月，个别晚的一直到8月，早的在3月末即开始进入繁殖期。此时雄鸟特别好斗，有时为争雌连续争斗达1-2小时之久，甚至时间更长。通常营巢于树洞、墙壁、洞穴以及房屋屋檐缝隙等建筑物洞穴中，有时也在树枝桠处营巢。巢呈浅杯状或碟状，主要由枯草、草根、细枝和苔藓等材料构成，内垫有松针、苔藓和兽毛。巢的大小，巢外径8-13厘米，内径6.2-8厘米，高4.5-4.8厘米，深2.4-3.5厘米，巢距地高3-4.5米，洞口直径7-9厘米。每窝产卵通常4-6枚，多为5枚，偶尔也有少至3枚和多至7枚的。卵淡绿色、绿褐色、黄色或灰色，密被暗茶褐色、棕色或褐色斑点，尤以钝端较密集。卵呈卵圆形，大小为20.4-23毫米×16.1-17.4毫米。孵卵由雌雄亲鸟共同承担，孵化期13±1天。雏鸟晚成性，刚孵出的雏鸟赤裸无羽、眼未睁开，体重仅9.5-12克，体长51-54毫米，翅长15-19毫米，跗蹠11-16毫米，雌雄亲鸟共同育雏。 [3]</p>
</div>
~~~

## 属性选择器

| 选择符                     | 版本 | 描述                                                |
| -------------------------- | ---- | --------------------------------------------------- |
| E[[att\]](att.htm)         | CSS2 | 选择具有att属性的E元素。                            |
| E[[att="val"\]](att2.htm)  | CSS2 | 选择具有att属性且属性值等于val的E元素。             |
| E[[att^="val"\]](att4.htm) | CSS3 | 选择具有att属性且属性值为以val开头的字符串的E元素。 |
| E[[att$="val"\]](att5.htm) | CSS3 | 选择具有att属性且属性值为以val结尾的字符串的E元素。 |
| E[[att*="val"\]](att6.htm) | CSS3 | 选择具有att属性且属性值为包含val的字符串的E元素。   |

~~~html
<style>
    /* a[href]{color:red;}标签中包含href属性的标签会应用样式 */
    /* a[class=baidu]{color:red;}标签中class属性的值为baidu的标签会应用样式 */
    /* a[href^=ftp]{color:red;}标签中href的值以http开头的标签 */
    /* a[href$=docx]{color:red;}标签中href的值以docx结尾的标签 */
    /* a[href*=baidu]{color:red;}标签中href的值包含baidu的标签 */
    [href*=baidu]{color:red;}/* 属性选择器可以单独使用，加上标签则是交集选择器 */
</style>
<a href="https://www.baidu.com" class="baidu">百度</a>
<a href="ftp://192.168.10.10" class="ftp">ftp://192.168.10.10</a>
<a href="nihaoshijie.docx">docx</a>
<a>a</a>
~~~

# 过渡(transition)

元素从一个状态到另一个状态中的一种缓慢展示过程

改变状态通常通过hover或者target这些选择器来实现（所谓的状态，其实就是指元素的样式）

~~~html
<style>
    .div1{
        width: 200px;
        height: 200px;
        border: 1px solid;
        transition-property: all;/* 允许过渡的css属性 */
        transition-duration:2s; /* 过渡的持续时间 */
        transition-timing-function: ease;/* 过渡的速度函数 ease|linear */
        transition-delay: 0s; /* 过渡延迟执行的时间 */
        /* 合写属性 按照以上四个属性的顺序，一一写在transition后面即可, */
        transition:all 2s ease 0s;/* 后面两个可以不写，默认是ease和0s */
    }
    .div1:hover{
        background: red;
        width:400px;
        border:20px solid blue;
        margin:0 0 0 400px;
    }
</style>
<div class="div1"></div>
~~~

<style>
    .div1{
        width: 200px;
        height: 200px;
        border: 1px solid;
        transition-property: all;/* 允许过渡的css属性 */
        transition-duration:2s; /* 过渡的持续时间 */
        transition-timing-function: ease;/* 过渡的速度函数 ease|linear */
        transition-delay: 0s; /* 过渡延迟执行的时间 */
        /* 合写属性 按照以上四个属性的顺序，一一写在transition后面即可, */
        transition:all 2s ease 0s;/* 后面两个可以不写，默认是ease和0s */
    }
    .div1:hover{
        background: red;
        width:400px;
        border:20px solid blue;
        margin:0 0 0 400px;
    }
</style>
<div class="div1"></div>

# 变换(transform)

变换分为四大类：平移，缩放，旋转，斜切

变换最好配合过渡来使用

~~~html
<style>
    .father{
        width: 640px;
        margin:100px auto;
        perspective: 500px;/* 启用透视，必须在变换元素的父元素上开启 */
    }
    .div2{
        width: 640px;
        height: 360px;
        border:1px solid;
        transition:all 1s;

    }
    .div2:hover{
        /* transform: translateY(100px);平移 */
        /* transform: scale(1.5);缩放 */
        transform:rotateZ(3600deg)/* 旋转 */
    }
</style>
<div class="father">
    <div class="div2"><img src="../image/004.jpg" alt=""></div>
</div>
~~~

# 动画(animation)

动画和过渡类似，但有一个区别，过渡必须由事件启动，动画是自动启动

# 关于水平居中的问题

## text-align:center;

针对内联元素和内联块元素来使用，需要在被居中元素的父元素中设置text-align:center;，才能对内部的内联元素进行居中设定

> 注：你可以将内联元素和内联块元素看成是文字来处理

## margin:0 auto;

针对块元素设置居中，不能对内联块来使用

要设置元素居中，首先得给设置居中的元素设置宽度，并且宽度必须小于父级元素的宽度

> 如果要设置垂直局中，需要使用到弹性布局