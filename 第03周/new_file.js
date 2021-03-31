var input1 = document.createElement('input');
var input2 = document.createElement('input');
var button = document.createElement('button');
button.textContent = '注册';
button.onclick = () => {
	tr = table.appendChild(document.createElement('tr'));
	tr.appendChild(document.createElement('td')).innerText = input1.value;
	tr.appendChild(document.createElement('td')).innerText = input2.value;
	var td = document.createElement('td');
	var a1 = document.createElement('a');
	var a2 = document.createElement('a');
	a1.textContent = '更换';
	a2.textContent = '注销';
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
