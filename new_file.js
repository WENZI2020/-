/* 创建一个base.js的文件，
要求通过该js文件在引入的html页面中生成一个button按钮，
并且让该按钮可以点击，
点击的时候会在控制台输出。 */
$('body').append('<button>按钮</button>').bind('click', function() {
	console.log('.');
});
// 首先声明三个变量：姓名、性别、年龄。
var name = '某',
	sex = '保密',
	age = 1;
var print = `姓名：${name} 性别：${sex} 年龄：${age}`;
console.log(print);
// 数据类型的转换。
var defined, n = null;
var str = "";
var bool = Boolean(str);
var num = Number(bool);
str = num.toString();
console.log(defined, n, bool, num, str);
console.log(typeof(defined), typeof(n), typeof(bool), typeof(num), typeof(str));
/* 珠穆朗玛峰高8848米，
受到气压影响普通飞机每小时飞行高度为200米，
超音速飞机每小时飞行高度为350米，
战斗机每小时飞行高度为500米，
求普通飞机、超音速飞机、战斗机分别花费多少小时能够超过峰高？ */
const height = 8848;
var s1 = height / 200;
var s2 = height / 350;
var s3 = height / 500;
console.log(s1, s2, s3);
// 位运算符的算式：& | ^ ~。
var a = 101,
	b = 100;
console.log(a & b, a | b, a ^ b);
var data = 5;
var code = 27;
console.log(data ^ code, data ^ code ^ code);
/* 根据用户输入的年份，
打印出平年或闰年。 */
var year = parseInt(prompt('根据年份查询平闰', 2021));
if (year == 0) {
	confirm('错误，请填写非0');
} else if (year % 4 == 0 && year % 100 != 0 | year % 400 == 0) {
	confirm('闰年');
} else {
	confirm('平年');
}
/* 根据用户输入的月份，
打印出季节 (1-3 春 3-6 夏 7-9 秋 10-12 冬 1-12 提示输入正确的月份)。 */
var month = parseInt(prompt('根据月份查询季节', 3));
if (month == 1 || month == 2 || month == 3) {
	confirm('春季');
} else if (month == 4 || month == 5 || month == 6) {
	confirm('夏季');
} else if (month == 7 || month == 8 || month == 9) {
	confirm('秋季');
} else if (month == 10 || month == 11 || month == 12) {
	confirm('冬季');
} else {
	confirm('错误，请填写1-12');
}
/* 判断用户输入的 1-7 弹出对应的星期一-星期日，
如果输出的不是1-7则提示输出1-7。 */
var week = parseInt(prompt('根据数字查询星期', 3));
switch (week) {
	case 1:
		confirm('星期一');
		break;
	case 2:
		confirm('星期二');
		break;
	case 3:
		confirm('星期三');
		break;
	case 4:
		confirm('星期四');
		break;
	case 5:
		confirm('星期五');
		break;
	case 6:
		confirm('星期六');
		break;
	case 7:
		confirm('星期日');
		break;
	default:
		confirm('错误，请填写1-7');
		break;
}
// 求1-10的和，所有的平均数和
var sum = 0;
for (var i = 1; i <= 10; i++) {
	sum += i;
}
console.log(sum, sum / 10);
// 求1-100中所有的偶数和，所有的奇数和
var oddSum = 0,
	evenSum = 0;
for (var i = 1; i <= 100; i++) {
	if (i % 2 == 0) {
		evenSum += i;
	} else {
		oddSum += i;
	}
}
console.log(evenSum, oddSum);
// 打印九九乘法表
var tableSum = "";
for (var i = 1; i <= 9; i++) {
	for (var u = 1; u <= i; u++) {
		tableSum += `${u}X${i}=${u*i}\t`;
	}
	tableSum += '\n';
}
console.log(tableSum);
// 使内外嵌套循环
var starSum = "";
for (var i = 1; i <= 4; i++) {
	for (var u = 1; u <= 4; u++) {
		starSum += '*\t';
	}
	starSum += '\n';
}
console.log(starSum);
// 求1-100的和、所有的平均数和、所有的偶数和、所有的奇数和、被4整除的数和
var xSum = 0,
	avgXSum = 0,
	oddXSum = 0,
	evenXSum = 0,
	even4Sum = 0,
	i = 0;
do {
	xSum += i;
	avgXSum += i / 100;
	if (i % 2 == 0) {
		evenXSum += i;
	}
	if (i % 2 != 0) {
		oddXSum += i;
	}
	if (i % 4 == 0) {
		even4Sum += i;
	}
	i++;
} while (i <= 100);
console.log(xSum, avgXSum, evenXSum, oddXSum, even4Sum);
/* 编写一个函数，
该函数打印久久乘法表，
然后再调用该函数。 */
(() => {
	var tableSum = "";
	for (var i = 1; i <= 9; i++) {
		for (var u = 1; u <= i; u++) {
			tableSum += `${u}X${i}=${u*i}\t`;
		}
		tableSum += '\n';
	}
	console.log(tableSum);
})();
/* 班上有5位同学，
要求编写一个函数记录每个同学的姓名和分数。 */
var student = (name, score) => {
	return `姓名：${name} 分数：${score}`;
}
console.log(student('某1', '100'));
console.log(student('某2', '100'));
console.log(student('某3', '100'));
console.log(student('某4', '100'));
console.log(student('某5', '100'));
