// 编写购物车特效。
// 全选-反选-总计，原生JS实现双向事件绑定。
var price = [12, 21, 34, 43, 78, 87, 56, 65];
for (var i = 0; i < 8; i++) {
	var i1 = i + 1;
	var tr = document.createElement('tr');
	tr.appendChild(document.createElement('td'));
	document.querySelector('.shopping').appendChild(tr);
	var input=document.createElement('input');
	input.type='checkbox';
	input.onchange=()=>{
		allSum();
	}
	var id=document.createElement('span').innerText=i1+'.';
	var img=document.createElement('img').src='#';
	var name=document.createElement('span').innerText='商品';
	var price1=document.createElement('span').className='p1';
	price1.innerText=` ￥${price[i]} `;
	var input1=document.createElement('input').value='-';
	input1.type='button';
	input1.onclick=()=>{
		
	}
	var input2=document.createElement('input').value='1';
	input2.type='number';
	input2.oninput=()=>{
		
	}
	var input3=document.createElement('input').value='+';
	input3.type='button';
	input3.onclick=()=>{
		
	}
	var price2=document.createElement('span').className='p2';
	price2.innerText=` ￥${price[i]} `;
	var del=document.createElement('a').innerText='删除';
	del.href="#";
	del.onclick=()=>{
		
	}
	tr.children[0].appendChild(input);
	tr.children[0].appendChild(id);
	tr.children[0].appendChild(img);
	tr.children[0].appendChild(name);
	tr.children[0].appendChild(price1);
	tr.children[0].appendChild(input1);
	tr.children[0].appendChild(input2);
	tr.children[0].appendChild(input3);
	tr.children[0].appendChild(price2);
	tr.children[0].appendChild(del);
}
		
		
		
		
		
		
		
		
		
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
