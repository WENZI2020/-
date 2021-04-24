// 原生JS实现AJAX前后数据交互
var xhr = new XMLHttpRequest();
xhr.setRequestHeader('Content-Type','');
xhr.open('get', './get.php', true);
xhr.send();
xhr.onreadystatechange = () => {
	if (xhr.readyState == 4 && xhr.status == 200) {
		console.log(xhr.responseText);
	}
}
// 常量 不能重定义和重赋值
const A='1';
// 变量 var遍历得单值(被重定义覆盖)，let遍历得多值。
var a='2';
let b='3';
// 插值表达式
console.log(`我是模板内${A}和${a}和${b}字符串`);
// 数组、对象末尾添加同类型数据的函数
var arr1=[],obj1={};
arr1.push([]);
Object.assign(obj1,{});
// 数组、对象名前嵌入...变值(函数放末尾)
var aa=[1,...arr]==[1,...['a']]==[1,'a'];
var bb={is:'1',...obj}=={is:'1',...{name:'a'}}=={is:'1',name:'a'};
// 简写和解构对象、数组、字符串
var {A,a,b}={A,a,b}=={A:A,a:a,b:b}=={A:'1',a:'2',b:'3'};
var [A,a,b]=[A,a,b]==['1','2','3']=='123';
/* 函数的闭包及其自调用。
原生函数this是本身对象，
箭头函数this是外层对象或者window。 */
(cc=()=>{
	return ;
})();
// 原型
var cc=Cla.prototype==obj1.__proto__==obj2.__proto__;
// ES6对比ES5的封装类class的定义和继承
class Cla extends Clas {
	constructor(a1,a3) {
		super(a3);
		this.a1=a1; 
		this.a2='';
	}
	b(){
		return 'b';
	}
	static c(){
		return 'c';
	}
}
// 调用创建封装类class的构造器变量和方法得到实例(对象)
(new Cla('1','3')).b();
// 调用静态封装类class的变量和方法得到实例(对象)
Cla.c();
// 全局对象浏览器的window和Node的global
window.abc=1;
global.abc=1;
// Node的CommonJS的模块包及其依赖包node_modules编程，导出和引入对象
module.exports={A,a,b}=={A:A,a:a,b:b};
require('./es6.js')={A,a,b}=={A:A,a:a,b:b};
