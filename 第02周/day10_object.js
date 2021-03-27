// 函数的递归用法 return 1 终止
var func = (num) => {
	if (num == 1) {
		return 1;
	}
	return func(num - 1) * num;
}
console.log(func(10));
// 1. 比较排序： 选择排序(先前再后)
var a = [5, 1, 3, 2, 4, 9, 6, 8, 7];
for (var i = 0; i < a.length - 1; i++) {
	for (var u = i + 1; u < a.length; u++) {
		if (a[i] > a[u]) {
			var temp = a[i];
			a[i] = a[u];
			a[u] = temp;
		}
	}
}
console.log(a.join(' '));
// 2. 比较排序： 冒泡排序(先后再前)
var b = [5, 1, 3, 2, 4, 9, 6, 8, 7];
for (var i = 0; i < b.length - 1; i++) {
	for (var u = 0; u < b.length - (i + 1); u++) {
		if (b[u] > b[u + 1]) {
			var temp = b[u];
			b[u] = b[u + 1];
			b[u + 1] = temp;
		}
	}
}
console.log(b.join(' '));
// 数组Array
// new Array('值')|['值']
// 对象Object
// new Object(键:'值'|f) | {键:'值'|f}
/* 创建一个对象通过三种方式，
给对象设置属性name, age, sex, tel的值，
然后修改name和sex然后输出在控制台。 */
var ObjName = function(name, sex, age, tel) {
	this.name = name;
	this.sex = sex;
	this.age = age;
	this.tel = tel;
}
var objs = new ObjName('某', '保密', 18, '020-0');
objs['name'] = '阿';
objs.sex = '未知';
for (i in objs) {
	console.log(objs[i]);
}
// 定义两个数组(全是数组)
var arr1 = [1.5, 2.5, 3.5],
	arr2 = [4.5, 5.5, 6.5];
var max1 = arr1[0],
	max2 = arr2[0];
var avg1 = 0,
	avg2 = 0;
/* 1. 求出两个数组的最大值，
然后把这两个最大值一起通过Math类进行比较求出两个最大值之间的最大值。 */
arr1.forEach((v, k, arr) => {
	if (max1 < v) {
		max1 = v;
	}
	avg1 += v / arr.length;
});
arr2.forEach((v, k, arr) => {
	if (max2 < v) {
		max2 = v;
	}
	avg2 += v / arr.length;
});
console.log(Math.max(max1, max2));
/* 2. 请求两个数组的平均值， 
然后通过Math类对两个数组的平均值进行四舍五入， 
还有向上舍入和向下舍入。 */
var avg = [avg1, avg2];
avg.forEach((v, k, arr) => {
	console.log(Math.round(v), Math.ceil(v), Math.floor(v));
});
/* 3. 通过Math类生成随机数添加到两个数组中。 */
arr1.push(Math.random());
arr2.push(Math.random());
console.log(arr1.join(' '), arr2.join(' '));
/* 创建一个时间类，
获取当前时间的在一个月中的天数，
在一周内的星期数，
获取当前时间的年份，
获取当前时间的毫秒数，
然后获取当前时间按照中国的年份/月/日输出 时分秒。 */
var date = new Date();
console.log(date.getDate(), date.getDay(), date.getFullYear(), date.getMilliseconds());
console.log(date.toLocaleString());
// 答案：30
var a;
var b = a - 0;
if (b == b) {
	console.log(b * 2 + "2" - 0 + 4);
} else {
	console.log(!b * 2 + "2" - 0 + 8);
}
