$(() => {
	// 编写购物车特效。
	// 全选-反选-总计，原生JS实现双向事件绑定。
	var price = [12, 21, 34, 43, 78, 87, 56, 65];
	for (var i = 0; i < 8; i++) {
		var i1 = i + 1;
		$('.shopping').append('<tr id="one' + i1 + '"></tr>');
		$('#one' + i1).append('<td></td>');
		var input = $('<input />').on('change', () => {
			allSum();
		}).attr({
			'type': 'checkbox'
		});
		var id = $('<span></span>').text(i1 + '.');
		var img = $('<img />').attr({
			'src': '#'
		});
		var name = $('<span></span>').text('商品');
		var price1 = $('<span class="p1"></span>').text(` ￥${price[i]} `);
		var input1 = $('<input />').on('click', (e) => {
			var num = $(e.target).siblings('[type=number]');
			if (num.val() >= 2) {
				num.val(parseInt(num.val()) - 1);
			} else {
				num.val(1);
			}
			oneSum(e);
			allSum();
		}).attr({
			'type': 'button',
			'value': '-'
		});
		var input2 = $('<input />').on('input', (e) => {
			$(e.target).val(Number($(e.target).val().replace(/[\+\.-]/g, '')));
			$(e.target).val() === '0' ? $(e.target).val(1) : '';
			oneSum(e);
			allSum();
		}).attr({
			'type': 'number',
			'value': '1'
		});
		var input3 = $('<input />').on('click', (e) => {
			var num = $(e.target).siblings('[type=number]');
			num.val(parseInt(num.val()) + 1);
			oneSum(e);
			allSum();
		}).attr({
			'type': 'button',
			'value': '+'
		});
		var price2 = $('<span  class="p2"></span>').text(` ￥${price[i]} `);
		var del = $('<a></a>').on('click', (e) => {
			$(e.target).parent('td').parent('tr').remove();
			allSum();
			return false;
		}).attr({
			'href': '#'
		}).text('删除');
		$('#one' + i1).children('td').append([input, id, img, name, price1, input1, input2, input3, price2,
			del
		]);
	}
	$('#all').find('button:eq(0)').on('click', () => {
		$('#all').nextAll('tr').find('[type=checkbox]').prop({
			'checked': true
		});
		allSum();
	});
	$('#all').find('button:eq(1)').on('click', () => {
		var check = $('#all').nextAll('tr').find('[type=checkbox]');
		check.each((key, value) => {
			$(value).prop({
				'checked': !$(value).prop('checked')
			});
		});
		allSum();
	});
	var oneSum = (e) => {
		var p1 = $(e.target).siblings('.p1');
		var num = $(e.target).parent('td').children('[type=number]');
		var p2 = $(e.target).siblings('.p2');
		p2.text(` ￥${p1.text().slice(2, -1)*num.val()} `);
	}
	var allSum = () => {
		var check = $('#all').nextAll('tr').find('[type=checkbox]');
		var sum = 0;
		check.each((key, value) => {
			if ($(value).prop('checked')) {
				var p2 = $(value).siblings('.p2');
				sum += p2.text().slice(2, -1) - 0;
			}
		});
		$('#all').find('span').html(`合计 ￥${sum}&nbsp;`);
	}
	// 编写轮播图特效。
	// 轮播图动态切换。
	$('.carousel').on('mouseover', () => {
		window.clearInterval(interval);
	}).on('mouseout', () => {
		interval = window.setInterval(func, 2000);
	});
	$('.control-prev').on('click', (e) => {
		$(e.target).css({
			'opacity': '1'
		});
		$('.inner').animate({
			'left': '+=1000px'
		}, 1000, () => {
			if (parseInt($('.inner').css('left')) >= 0) {
				$('.inner').css({
					'left': '-3000px'
				});
			}
			$(e.target).css({
				'opacity': '0.5'
			});
		});
	});
	$('.control-next').on('click', (e) => {
		$(e.target).css({
			'opacity': '1'
		});
		$('.inner').animate({
			'left': '-=1000px'
		}, 1000, () => {
			if (parseInt($('.inner').css('left')) <= -3000) {
				$('.inner').css({
					'left': '0px'
				});
			}
			$(e.target).css({
				'opacity': '0.5'
			});
		});
	});
	$('.indicators').children('img').on('click', (e) => {
		$(e.target).css({
			'opacity': '1'
		});
		var index = '-' + $(e.target).attr('data-item') + '000px';
		$('.inner').animate({
			'left': index
		}, 1000, () => {
			$(e.target).css({
				'opacity': '0.5'
			});
		});
	});
	var divs = [
		['第一张', 'https://static.runoob.com/images/mix/img_fjords_wide.jpg'],
		['第二张', 'https://static.runoob.com/images/mix/img_nature_wide.jpg'],
		['第三张', 'https://static.runoob.com/images/mix/img_mountains_wide.jpg'],
		['第一张', 'https://static.runoob.com/images/mix/img_fjords_wide.jpg']
	];
	for (var i = 0; i < 4; i++) {
		var diva = $('.inner').children('li:eq(' + i + ')');
		diva.text(divs[i][0]).css({
			'background': 'url(' + divs[i][1] + ') #888',
			'background-size': 'cover'
		});
	}
	var interval = window.setInterval(func = () => {
		$('.inner').animate({
			'left': '-=1000px'
		}, 1000, () => {
			if (parseInt($('.inner').css('left')) <= -3000) {
				$('.inner').css({
					'left': '0px'
				});
			}
		});
	}, 2000);
});
