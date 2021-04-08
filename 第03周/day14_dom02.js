// 轮播图动态切换。
var btn = document.createElement('button');
btn.innerText = '■';
btn.onclick = () => {
	if (btn.textContent == '▽') {
		btn.innerText = '■';
		interval = window.setInterval(func, 1000);
	} else {
		btn.innerText = '▽';
		window.clearInterval(interval);
	}
}
var div = document.createElement('div');
var div1 = ['第一张', '第二张', '第三张'];
div.innerText = div1[0];
div.style = 'width:100px;height:100px;text-align:center;border:solid;';
document.body.appendChild(btn);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(div);
var i = 0;
var interval = window.setInterval(func = () => {
	i >= div1.length ? i = 0 : '';
	div.innerText = div1[i];
	i += 1;
}, 1000);
// 表单获取验证码。
var input = document.createElement('input');
var btns = document.createElement('button');
btns.innerHTML = '获取验证码';
var is = 30;
btns.onclick = () => {
	var intervals = window.setInterval(() => {
		if (is < 0) {
			btns.innerText = '获取验证码';
			btns.disabled = false;
			window.clearInterval(intervals);
			is = 30;
		} else {
			btns.innerText = `重发送 ${is}s`;
			btns.disabled = true;
			is -= 1;
		}
	}, 1000);
};
document.body.appendChild(input);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(btns);
