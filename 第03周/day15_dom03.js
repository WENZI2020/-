// 全选-反选-总计，原生JS实现双向事件绑定。
var ul = document.createElement('ul');
for (var i = 0; i <= 9; i++) {
	var li = document.createElement('li');
	li.className = 'one';
	var span = document.createElement('span');
	var input1 = document.createElement('input');
	var input2 = document.createElement('input');
	span.innerText = `单价${i}￥：`;
	input1.type = 'checkbox';
	input2.type = 'number';
	input2.min = '0';
	input2.value = '0';
	li.appendChild(span);
	li.appendChild(input1);
	li.appendChild(input2);
	ul.appendChild(li);
}
document.body.appendChild(ul);
var all = document.querySelector('.one');
var one = document.querySelectorAll('.one');
all.children[0].innerText = '总计￥：';
all.onchange = () => {
	var sum = 0;
	Array.from(one).forEach((value, key, arr) => {
		value.children[1].checked = all.children[1].checked;
		if (all != value && value.children[1].checked) {
			sum += Number(value.children[2].value);
		}
	});
	all.children[2].value = sum;
}
for (var i = 1; i < one.length; i++) {
	one[i].onchange = () => {
		var sum = 0;
		all.children[1].checked = false;
		Array.from(one).forEach((value, key, arr) => {
			if (all != value && value.children[1].checked) {
				sum += Number(value.children[2].value);
			}
		});
		all.children[2].value = sum;
	}
}
