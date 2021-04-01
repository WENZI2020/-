/* 登录:
	1. 获取name 和 age输入框的值
2 获取table的对象
3 创建元素节点tr 创建元素节点td
4. 创建文本节点 将name和age的值放进去
5. 把文本节点添加到td元素节点中 将td元素节点添加到tr元素节点中
6. 把tr节点添加到table元素节点中 */
/* 更换:
	1. 获取当前对象的父节点的父节点tr
2. 然后获取tr的子节点
3. 获取name 和age输入框的值
4. 然后修改tr子节点的下标为0的文本值为name的值 下标为1的值为age的值 */
/* 登出:
	1. 获取删除按钮的当前对象， 然后获取当前对象的父节点td 然后在获取父节点tr
2. 获取table节点
3. 调用table节点删除 tr节点 */
var input1 = document.createElement('input');
var input2 = document.createElement('input');
var button = document.createElement('button');
button.textContent = '登录';
button.onclick = () => {
	tr = table.appendChild(document.createElement('tr'));
	tr.appendChild(document.createElement('td')).innerText = input1.value;
	tr.appendChild(document.createElement('td')).innerText = input2.value;
	var td = document.createElement('td');
	var a1 = document.createElement('a');
	var a2 = document.createElement('a');
	a1.textContent = '更换';
	a2.textContent = '登出';
	a1.href = '#';
	a2.href = '#';
	a1.onclick = () => {
		a1.parentNode.parentNode.children[0].innerText = input1.value;
		a1.parentNode.parentNode.children[1].innerText = input2.value;
		return false;
	}
	a2.onclick = () => {
		table.removeChild(a2.parentNode.parentNode);
		return false;
	}
	td.appendChild(a1);
	td.appendChild(a2);
	tr.appendChild(td);
}
var table = document.createElement('table');
var tr = document.createElement('tr');
var arr = ['姓名', '年龄', '操作'];
for (var i = 0; i < 3; i++) {
	tr.appendChild(document.createElement('th')).textContent = arr[i];
}
table.appendChild(tr);
table.style = 'margin:0 auto';
document.body.style = 'text-align:center';
document.body.appendChild(input1);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(input2);
document.body.appendChild(document.createElement('hr'));
document.body.appendChild(button);
document.body.appendChild(table);
