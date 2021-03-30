// 写二个代码！
/* 一个是冒泡排序，
另外一个比较排序，
然后在火狐和谷歌浏览器上对该两个排序进行断点调试。 */
var arr = [1, 3, 5, 7, 8, 6, 4, 2, 9];
arr.forEach((v, i) => {
	var u = 0;
	while (u < arr.length - (i + 1)) {
		if (arr[u] > arr[u + 1]) {
			[arr[u], arr[u + 1]] = [arr[u + 1], arr[u]];
		}
		u++;
	}
});
console.log(arr.join(' '));
arr.forEach((v, i) => {
	var u = i + 1;
	while (u < arr.length) {
		if (arr[i] < arr[u]) {
			[arr[i], arr[u]] = [arr[u], arr[i]];
		}
		u++;
	}
});
console.log(arr.join(' '));
/* 在一个页面编写6个按钮，
要求点击第一个按钮，
打开一个新的窗口，
跳转到百度，
要求点击第二个按钮开启触发器，
要求点击第三个按钮开启定时器，
点击第四个按钮关闭触发器，
点击第五个按钮关闭定时器，
点击第六个按钮关闭页面。 */
var jump;
var btn1 = document.createElement('button');
btn1.appendChild(document.createTextNode('跳转页按钮'));
document.body.appendChild(btn1).onclick = () => {
	jump = window.open('https://www.baidu.com/');
};
var btn2 = document.createElement('button');
btn2.appendChild(document.createTextNode('关闭跳转页按钮'));
document.body.appendChild(btn2).onclick = () => {
	jump.close();
};
var trigger1, trigger2;
var btn3 = document.createElement('button');
btn3.appendChild(document.createTextNode('触发器按钮'));
document.body.appendChild(btn3).onclick = () => {
	trigger1 = window.setTimeout(() => {
		console.log('触发器1');
	}, 1);
	trigger2 = window.setInterval(() => {
		console.log('触发器2');
	}, 1);
};
var btn4 = document.createElement('button');
btn4.appendChild(document.createTextNode('清除触发器按钮'));
document.body.appendChild(btn4).onclick = () => {
	window.clearTimeout(trigger1);
	window.clearInterval(trigger2);
};
var img = document.querySelectorAll('img')[0];
img.height = '330';
var img1 = 'http://photo.16pic.com/00/17/67/16pic_1767187_b.jpg';
var img2 = 'http://photo.16pic.com/00/37/62/16pic_3762231_b.jpg';
window.setInterval(() => {
	img.src == img1 ? img.src = img2 : img.src = img1; 
}, 1);
