# 楼梯效果

```js
    <script>
        var toolTop = $(".recommend").offset().top;
        var flag = true;
        $(window).scroll(function() {
            if ($(document).scrollTop() >= toolTop) {
                console.log(1111);
                $(".fixedtool").fadeIn();
            } else {
                console.log(4444);
                $(".fixedtool").fadeOut();
            };
        });

        $(window).scroll(function() {
            if ($(document).scrollTop() >= toolTop) {
                console.log(1111);
                $(".fixedtool").fadeIn();
            } else {
                console.log(4444);
                $(".fixedtool").fadeOut();
            };
            // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
            if (flag) {
                $(".floor .w").each(function(i, ele) {
                    if ($(document).scrollTop() >= $(ele).offset().top) {
                        console.log(i);
                        $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                    }
                })
            }
        });




        $(".fixedtool li").click(function() {
            flag = false;
            console.log($(this).index());
            // 当我们每次点击小li 就需要计算出页面要去往的位置 
            // 选出对应索引号的内容区的盒子 计算它的.offset().top
            var current = $(".floor .w").eq($(this).index()).offset().top;
            // 页面动画滚动效果
            $("body, html").stop().animate({
                scrollTop: current
            }, function() {
                flag = true;
            });
            // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
            $(this).addClass("current").siblings().removeClass();
        })
    </script>
```

