// 编写购物车特效。
// 全选-反选-总计，原生JS实现双向事件绑定。
var shopping = document.querySelector('.shopping');
var all = document.querySelector('#all');
var price = [12, 21, 34, 43, 78, 87, 56, 65];
for (var i = 0; i < 8; i++) {
	var i1 = i + 1;
	shopping.children[0].appendChild(document.createElement('tr')).id = 'one' + i1;
	document.querySelector('#one' + i1).appendChild(document.createElement('td'));
	var input = document.createElement('input');
	input.type = 'checkbox';
	input.onchange = () => {
		allSum();
	}
	var id = document.createElement('span');
	id.innerText = i1 + '.';
	var img = document.createElement('img');
	img.src = '#';
	let name = document.createElement('span');
	name.innerText = '商品';
	var price1 = document.createElement('span');
	price1.className = 'p1';
	price1.innerText = ` ￥${price[i]} `;
	let input1 = document.createElement('input');
	input1.type = 'button';
	input1.value = '-';
	input1.onclick = (e) => {
		var num = input1.nextSibling;
		if (num.value >= 2) {
			num.value = parseInt(num.value) - 1;
		} else {
			num.value = 1;
		}
		oneSum(e);
		allSum();
	}
	let input2 = document.createElement('input');
	input2.type = 'number';
	input2.value = '1';
	input2.oninput = (e) => {
		input2.value = Number(input2.value.replace(/[\+\.-]/g, ''));
		input2.value === '0' ? input2.value = 1 : '';
		oneSum(e);
		allSum();
	}
	let input3 = document.createElement('input');
	input3.type = 'button';
	input3.value = '+';
	input3.onclick = (e) => {
		var num = input3.previousSibling;
		num.value = parseInt(num.value) + 1;
		oneSum(e);
		allSum();
	}
	var price2 = document.createElement('span');
	price2.className = 'p2';
	price2.innerText = ` ￥${price[i]} `;
	let del = document.createElement('a');
	del.href = "#";
	del.innerText = '删除';
	del.onclick = () => {
		shopping.children[0].removeChild(del.parentElement.parentElement);
		allSum();
		return false;
	}
	let el = [input, id, img, name, price1, input1, input2, input3, price2, del];
	el.forEach((value, key, arr) => {
		document.querySelector('#one' + i1).children[0].appendChild(value);
	});
}
all.children[0].children[0].onclick = () => {
	var trColl = shopping.children[0].children;
	for (var i = 2; i < trColl.length; i++) {
		trColl[i].children[0].children[0].checked = true;
	}
	allSum();
}
all.children[0].children[1].onclick = () => {
	var trColl = shopping.children[0].children;
	for (var i = 2; i < trColl.length; i++) {
		var check = trColl[i].children[0].children[0].checked;
		trColl[i].children[0].children[0].checked = !check;
	}
	allSum();
}
var oneSum = (e) => {
	var p1 = e.target.parentElement.children[4];
	var num = e.target.parentElement.children[6];
	var p2 = e.target.parentElement.children[8];
	p2.innerText = ` ￥${p1.textContent.slice(2, -1)*num.value} `;
}
var allSum = () => {
	var sum = 0;
	var trColl = shopping.children[0].children;
	for (var i = 2; i < trColl.length; i++) {
		if (trColl[i].children[0].children[0].checked) {
			var p2 = trColl[i].children[0].children[8];
			sum += p2.textContent.slice(2, -1) - 0;
		}
	}
	all.children[0].children[3].innerHTML = `合计 ￥${sum}&nbsp;`;
}
