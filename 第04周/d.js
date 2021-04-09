// 编写购物车特效。
// 全选-反选-总计，原生JS实现双向事件绑定。
var price = [12, 21, 34, 43, 78, 87, 56, 65];
for (var i = 0; i < 8; i++) {
	var i1 = i + 1;
	document.querySelector('.shopping').children[0].appendChild(document.createElement('tr')).id='one'+i1;
	document.querySelector('#one'+i1).appendChild(document.createElement('td'));
	var input=document.createElement('input');
	input.type='checkbox';
	input.onchange=()=>{
		allSum();
	}
	var id=document.createElement('span');
	id.innerText=i1+'.';
	var img=document.createElement('img');
	img.src='#';
	let name=document.createElement('span');
	name.innerText='商品';
	var price1=document.createElement('span');
	price1.className='p1';
	price1.innerText=` ￥${price[i]} `;
	let input1=document.createElement('input');
	input1.type='button';
	input1.value='-';
	input1.onclick=()=>{
		var num = input1.nextSibling;
		if (num.value >= 2) {
			num.value = parseInt(num.value) - 1;
		} else {
			num.value = 1;
		}
		oneSum(e);
		allSum();
	}
	let input2=document.createElement('input');
	input2.type='number';
	input2.value='1';
	input2.oninput=()=>{
		input2.value = Number(input2.value.replace(/[\+\.-]/g, ''));
		input2.value === '0' ? input2.value = 1 : '';
		oneSum(e);
		allSum();
	}
	let input3=document.createElement('input');
	input3.type='button';
	input3.value='+';
	input3.onclick=()=>{
		var num = input3.previousSibling;
		num.value = parseInt(num.value) + 1;
		oneSum(e);
		allSum();
	}
	var price2=document.createElement('span');
	price2.className='p2';
	price2.innerText=` ￥${price[i]} `;
	let del=document.createElement('a');
	del.href="#";
	del.innerText='删除';
	del.onclick=()=>{
		document.querySelector('.shopping').children[0].removeChild(del.parentElement.parentElement);
		allSum();
		return false;
	}
	let el=[input, id, img, name, price1, input1, input2, input3, price2, del];
	el.forEach((value,key,arr)=>{
		document.querySelector('#one'+i1).children[0].appendChild(value);
	});
}
document.querySelector('#all').children[0].children[0].onclick=()=>{
	for( v of document.querySelector('.shopping').children[0].children){
		v.children[0].checked=true;
	}
}
document.querySelector('#all').children[0].children[1].onclick=()=>{
	
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
