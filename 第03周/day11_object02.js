// 定义一个变量为220
/* 1. 判断该变量是不是正整数
2. 判断该变量是不是NaN
3. 判断该变量是不是安全的正整数 */
var a = 220;
console.log(isNaN(220));
if (Number.isInteger(a) && a > 0) {
	console.log(true);
	console.log(Number.isSafeInteger(a));
} else {
	console.log(false);
}
// new RegExp('^$','img')|/^$/img.test('');exec('');
// 编写一个正则表达式来匹配字符串中是否包含” hi” 或者大写的” HI”
// 编写一个正则表达式来匹配字符串中是否包含” java” 或者” javk”, 或者” javc”
var b = 'HI java!',
	b1 = /hi/i,
	b2 = /jav[akc]/;
console.log(b1.test(b), b2.test(b));
// 把字符串(“138a9820b09090c879798809f9087g90909”)
var c = '138a9820b09090c879798809f9087g90909';
console.log(c.split(/[A-z]/).join(' '));
// 定义一个字符串:
/* 1. 根据字符串中的特殊的符号比如;, -/ \ &% $#@ 来进行切割，打印出切割后的字符串
2. 查找出字符串中匹配单词为hello 或者hi 或者java的单词。
3. 把字符串中的所有符号全部替换成1 + 1 */
var d = 'hello-hi-c#';
console.log(d.split(/[-/\\&%$#@]/).join(' '));
console.log(d.match(/hello|hi|java/g).join(' '));
console.log(d.replace(/[-/\\&%$#@]/g, '1+1'));
/* 通过用户输入的邮箱， 验证是否是正确的邮箱格式。
正确的邮箱格式后缀必须是.com 或者是 .139.cn
前面可以是数字或者是字符但是必须包含 @： 13620092787 @139.com 11289289 @qq.com */
var e = /^\s*\w+@[a-z0-9]+(\.[a-z0-9]+){1,2}\s*$/;
var user = window.prompt('用户输入的邮箱');
window.alert(e.test(user));
