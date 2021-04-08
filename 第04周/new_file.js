// 1. [0] = get(0);
// 2. length = size();
// 3. each(func);
$(() => {
	/* 获取页面中p标签下标大于2的
	获取div中所有的子标签为span
	获取div中所有后代标签为span
	获取div中最后一个 */
	var el = $('body>div:first');
	console.log(el.find('p:gt(2)'));
	console.log(el.find('div span'));
	console.log(el.find('div>span'));
	console.log(el.find('div:last'));
	/* 页面有三个div，有4个p，2个span：
	1.把div下标等于2的这个元素 修改algin属性 改为right
	2.修改p标签中下标大于2的所有的标签的文本改为 222
	3.获取span标签中的所有的文本 */
	console.log(el.find('div:eq(2)').attr({
		'align': 'right'
	}));
	console.log(el.find('p:gt(2)').text('222'));
	console.log(el.find('span').text());
	// 在页面编写一个按钮， 点击按钮第一次显示div元素， 点击第二次隐藏div元素
	$('body').append('<button id="btn"></button>');
	$('#btn').on('click', () => {
		if (el.css('display') == 'none') {
			el.css({
				'display': 'block'
			});
		} else {
			el.css({
				'display': 'none'
			});
		}
	}).text('显示Div的按钮');
	// 选项卡点选切换。
	$('body').append('<ul id="ul"></ul>');
	for (i = 0; i < 3; i++) {
		var i1 = i + 1;
		$('#ul').append('<li id="li' + i1 + '" data-item="' + i + '"></li> ');
		$('#li' + i1).on('click', (e) => {
			$('#div').children('.divs').replaceWith(data[$(e.target).attr('data-item')]);
		}).css({
			'display': 'inline-block',
			'cursor': 'pointer'
		}).text('选项' + i1);
	}
	$('body').append('<div id="div"></div>');
	var data = [];
	for (i = 0; i < 3; i++) {
		var i1 = i + 1;
		data[i] = $('<div class="divs"></div>');
		data[i].text('容器' + i1);
	}
	$('#div').append(data[0]);
});
