// 轮播图动态切换。
var btn = document.createElement('button');
btn.textContent = '■';
btn.onclick = () => {
	if (btn.innerText == '▽') {
		btn.textContent = '■';
		interval = window.setInterval(func, 1000);
	} else {
		btn.textContent = '▽';
		window.clearInterval(interval);
	}
}
var div = document.createElement('div');
var div1 = ['第1张', '第2张', '第3张'];
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
btns.textContent = '获取验证码';
var is = 30;
btns.onclick = () => {
	var intervals = window.setInterval(() => {
		if (is < 0) {
			btns.textContent = '获取验证码';
			btns.disabled = false;
			window.clearInterval(intervals);
			is = 30;
		} else {
			btns.innerHTML = `重发送 ${is}s`;
			btns.disabled = true;
			is -= 1;
		}
	}, 1000);
};
document.body.appendChild(input);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(btns);
