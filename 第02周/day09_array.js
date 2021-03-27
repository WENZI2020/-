/* 定义一个数组，
记录10个学生姓名，
并且修改下标为3的学生姓名，
然后依次打出所有的学生姓名。 */
var sum = "";
var student1 = {
	name: ['某1', '某2', '某3', '某4', '某5', '某6', '某7', '某8', '某9', '某10']
};
student1.name[3] = '阿4';
for (v in student1.name) {
	sum += student1.name[v] + '\t';
}
console.log(sum);
// join('');unshift('');shift();push('');pop();splice(0,0,'');
/* 定义一个数组，来统计10个学生的分数，
获取数组中学生分数不及格的人数，
获取数组中学生分数大于80的人数。 */
var student2 = {
	score: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
};
var s1 = [],
	s2 = new Array();
for (v in student2.score) {
	var a = student2.score[v];
	a < 60 ? s1.push(a) : (a > 80 ? s2.unshift(a) : '');
}
console.log(s1.length, s2.length);
// 把下标为2-5的学生的分数加10分。
for (v in student2.score) {
	var a = student2.score[v];
	v >= 2 && v <= 5 ? student2.score[v] = a + 10 : '';
}
console.log(student2.score.join(' '));
// concat('['']');sort();reserve();slice(0,0);(last)indexOf('',0);
// 定义一个数组[10,8,12,5,20,30,15]
/* 1.将数组的所有的元素输出在页面。
2.修改下标为2的元素改为35并且将元素的内容输出页面。
3.在页面编写一个按钮,点击该按钮,然后弹出数组中所有的元素的和。
4.在页面编写一个按钮,点击该按钮,然后弹出数组中所有的元素的平均值。
5.在页面编写一个按钮,点击按钮,弹出数组中最大的数。 */
var arr1 = [10, 8, 12, 5, 20, 30, 15];
console.log(arr1.join(' '));
arr1.splice(2, 1, 35);
console.log(arr1.join(' '));
var xSum = 0;
var avgXSum = 0;
var maxXSum = arr1[0];
var el = document.createElement('button');
var te = document.createTextNode('弹窗按钮');
el.appendChild(te);
document.body.appendChild(el).onclick = () => {
	arr1.forEach((v, k, arr) => {
		xSum += v;
		avgXSum += v / arr.length;
		maxXSum < v ? maxXSum = v : '';
	});
	window.alert([xSum, avgXSum, maxXSum]);
}
// 数组为：[1，3，5，7，24，32，25，48]。
/* 输出数组中的偶数，
求数组中奇数的个数和偶数的个数，
求上述数组的平均值。 */
var even = [];
var odd = [];
var evenSum = 0;
var oddSum = 0;
var arr2 = [1, 3, 5, 7, 24, 32, 25, 48];
arr2.forEach((v, k, arr) => {
	v % 2 == 0 ? even.push(v) : odd.push(v);
	v % 2 == 0 ? evenSum += v : oddSum += v;
});
console.log(even.join(' '), even.length, odd.length, evenSum / even.length, oddSum / odd.length);
