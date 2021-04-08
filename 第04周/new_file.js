$(() => {
	// 登录 更换 登出。
	$('body').append('<input id="input1" /><br/>');
	$('body').append('<input id="input2" /><hr/>');
	$('body').append('<button id="button"></button>');
	$('#button').on('click', () => {
		$('#table').append('<tr class="tr"></tr>');
		$('.tr:last').append('<td></td><td></td><td></td>');
		$('.tr:last').children('td:eq(0)').text($('#input1').val());
		$('.tr:last').children('td:eq(1)').text($('#input2').val());
		$('.tr:last').children('td:eq(2)').append('<a></a><a></a>');
		$('.tr:last').find('a:first').on('click', (e) => {
			$(e.target).parent('td').siblings('td:eq(0)').text($('#input1').val());
			$(e.target).parent('td').siblings('td:eq(1)').text($('#input2').val());
			return false;
		}).attr({
			'href': '#'
		}).text('更换');
		$('.tr:last').find('a:last').on('click', (e) => {
			$(e.target).parent('td').parent('tr').remove();
			return false;
		}).attr({
			'href': '#'
		}).text('登出');
	}).text('登录');
	$('body').css({
		'text-align': 'center'
	}).append('<table id="table"></table>');
	$('#table').css({
		'margin': '0 auto'
	}).append('<tr class="tr"></tr>');
	var arr = ['姓名', '年龄', '操作'];
	for (var i = 0; i < 3; i++) {
		var i1 = i + 1;
		$('.tr:first').append('<th id="th' + i1 + '"></th>');
		$('#th' + i1).text(arr[i]);
	}
	// 手风琴动态折叠。
	var arr2 = ['选项一', '选项二', '选项三'];
	$('body').append('<ul id="ul"></ul>');
	for (var i = 0; i < 3; i++) {
		var i1 = i + 1;
		$('#ul').append('<li id="li' + i1 + '"></li>');
		$('#li' + i1).css({
			'border': '1px solid #000',
			'cursor': 'pointer'
		}).text(arr2[i]);
		$('#ul').append('<div id="div' + i1 + '"></div>');
		$('#div' + i1).css({
			'display': 'none',
			'height': '200px'
		});
	}
	$('body').append('<hr/>');
	$('#ul').children('li').on('click', (e) => {
		$(e.target).next('div').slideToggle(500).siblings('div').slideUp(500);
	});
});
