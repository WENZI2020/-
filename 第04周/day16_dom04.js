// 二三级下拉菜单联动事件。
var data = [{
	name: '广东省',
	list: [{
		name: '广州市',
		list: ['白云区', '天河区', '越秀区']
	}, {
		name: '深圳市',
		list: ['龙岗区', '南山区', '福田区']
	}, {
		name: '东莞市',
		list: ['长安镇', '常平镇', '虎门镇']
	}]
}, {
	name: '广西省',
	list: [{
		name: '南宁市',
		list: ['青秀区', '兴宁区', '江南区']
	}, {
		name: '柳州市',
		list: ['柳南区', '柳北区', '柳江区']
	}, {
		name: '桂林市',
		list: ['象山区', '雁山区', '秀峰区']
	}]
}, {
	name: '湖北省',
	list: [{
		name: '武汉市',
		list: ['汉口区', '汉阳区', '武昌区']
	}, {
		name: '十堰市',
		list: ['茅箭区', '张湾区', '郧阳区']
	}, {
		name: '襄阳市',
		list: ['襄城区', '樊城区', '襄州区']
	}]
}];
var select1 = document.createElement('select');
var select2 = document.createElement('select');
var select3 = document.createElement('select');
document.body.appendChild(select1);
document.body.appendChild(select2);
document.body.appendChild(select3);
data.forEach((value, key, arr) => {
	var option = document.createElement('option');
	option.innerText = value.name;
	select1.appendChild(option);
});
var select2f = (index) => {
	for (i in select2.children) {
		select2.remove(i);
	}
	data[index].list.forEach((value, key, arr) => {
		var option = document.createElement('option');
		option.innerText = value.name;
		select2.appendChild(option);
	});
}
select2f(0);
var select3f = (index1, index2) => {
	for (i in select3.children) {
		select3.remove(i);
	}
	data[index1].list[index2].list.forEach((value, key, arr) => {
		var option = document.createElement('option');
		option.innerText = value;
		select3.appendChild(option);
	});
}
select3f(0, 0);
select1.onchange = () => {
	select2f(select1.selectedIndex);
	select3f(select1.selectedIndex, 0);
}
select2.onchange = () => {
	select3f(select1.selectedIndex, select2.selectedIndex);
}
