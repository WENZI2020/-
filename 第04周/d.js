$(() => {
	// 编写购物车特效。
	// 全选-反选-总计，原生JS实现双向事件绑定。
	var ul = document.createElement('ul');
	var li = document.createElement('li');
	li.className = 'all';
	var input = document.createElement('input');
	var span = document.createElement('span');
	input.type = 'checkbox';
	span.innerText = '合计：￥0';
	li.appendChild(input);
	li.appendChild(span);
	ul.appendChild(li);
	var price = [12, 21, 34, 43, 78, 87, 56, 65];
	for (var i = 0; i < 8; i++) {
		var li = document.createElement('li');
		li.className = 'one';
		var input = document.createElement('input');
		var img = document.createElement('img');
		var span = document.createElement('span');
		input.type = 'checkbox';
		img.src = '#';
		span.innerText = `商品：￥${price[i]} `;
		let input1 = document.createElement('input');
		let input2 = document.createElement('input');
		let input3 = document.createElement('input');
		input1.type = 'button';
		input2.type = 'number';
		input3.type = 'button';
		input1.value = '-';
		input2.value = '1';
		input3.value = '+';
		input1.onclick = () => {
			var num = input1.parentElement.children[4];
			if (num.value >= 2) {
				num.value = parseInt(num.value) - 1;
			} else {
				num.value = 1;
			}
		}
		input2.oninput = () => {
			input2.value = Number(input2.value.replace(/[\+\.-]/g, ''));
			input2.value === '0' ? input2.value = 1 : '';
		}
		input3.onclick = () => {
			var num = input3.parentElement.children[4];
			num.value = parseInt(num.value) + 1;
		}
		li.appendChild(input);
		li.appendChild(img);
		li.appendChild(span);
		li.appendChild(input1);
		li.appendChild(input2);
		li.appendChild(input3);
		ul.appendChild(li);
	}
	document.body.appendChild(ul);
	var all = document.querySelector('.all');
	var one = document.querySelectorAll('.one');
	all.onchange = () => {
		var sum = 0;
		Array.from(one).forEach((v, i, arr) => {
			v.children[0].checked = all.children[0].checked;
			if (v.children[0].checked) {
				var a = v.children[2].textContent;
				sum += a.slice(a.indexOf('￥') + 1, -1) * v.children[4].value;
			}
		});
		var b = all.children[1].textContent;
		all.children[1].innerText = b.replace(/￥.+/, `￥${sum}`);
	}
	for (ones in one) {
		one[ones].onchange = () => {
			var sum = 0;
			all.children[0].checked = false;
			Array.from(one).forEach((v, i, arr) => {
				if (v.children[0].checked) {
					var a = v.children[2].textContent;
					sum += a.slice(a.indexOf('￥') + 1, -1) * v.children[4].value;
				}
			});
			var b = all.children[1].textContent;
			all.children[1].innerText = b.replace(/￥.+/, `￥${sum}`);
		}
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
