<?php
include('./config.php');
$res=mysqli_query($con, "select * from user");
if (!$res) {
    echo "<script>alert('查询记录失败')</script>";
    exit();
}
?>
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
		<h4>用户管理后台 <a href="./add.html">添加信息</a></h4>
		<table>
			<tr>
				<th>头像</th>
				<th>昵称</th>
				<th>姓名</th>
				<th>性别</th>
				<th>年龄</th>
				<th>电话</th>
				<th>班级</th>
				<th>编辑</th>
			</tr>
<?php
while ($row=mysqli_fetch_assoc($res)) {
    ?>
			<tr>
				<td><img src="./img/<?php echo $row['photo']; ?>" /></td>
				<td><?php echo $row['nickname']; ?></td>
				<td><?php echo $row['username']; ?></td>
				<td><?php echo $row['sex']; ?></td>
				<td><?php echo $row['age']; ?></td>
				<td><?php echo $row['tel']; ?></td>
				<td><?php echo $row['class']; ?></td>
				<td>
					<a href="./detail.php?id=<?php echo $row['Id']; ?>">详情</a>
					<a>更换</a>
					<a href="./del.php?id=<?php echo $row['Id']; ?>">删除</a>
				</td>
			</tr>
<?php
}
mysqli_close($con);
?>				
		</table>
		<style>
			* {
				margin: 0;
				padding: 0;
			}
			body {
				background: #f1f1f1;
			}
			h1,h2,h3,h4,h5,h6 {
				text-align: center;
				font-weight: normal;
				font-size: 30px;
				margin-top: 30px;
			}
			body>a {
				float: right;
			
			}
			table {
				margin: 50px auto;
				border-collapse: collapse;
				border: 1px solid #ccc;
				width: 70%;
				text-align: center;
			}
			th,td {
				border: 1px solid #ccc;
				line-height: 30px;
				height: 30px;
			}
			tr {
				background: rgb(223, 216, 217);
			}
			tr:nth-child(odd) {
				background: #fff;
			}
			img {
				height: 30px;
				display: inline;
				margin-top: 5px;
			}
			a {
				text-decoration: none;
				display: inline-block;
			}
		</style>
		<script>
			for (var i = 1; i < document.querySelectorAll('tr').length; i++) {
				var sex = document.querySelectorAll('tr')[i].children[3];
				var clas = document.querySelectorAll('tr')[i].children[6];
				switch (sex.textContent) {
					case '1':
						sex.innerText = '男';
						break;
					case '2':
						sex.innerText = '女';
						break;
					case '3':
						sex.innerText = '其它';
						break;
				}
				switch (clas.textContent) {
					case '1':
						clas.innerText = '中软一班';
						break;
					case '2':
						clas.innerText = '中软二班';
						break;
					case '3':
						clas.innerText = '中软三班';
						break;
					case '4':
						clas.innerText = '中软四班';
						break;
					case '5':
						clas.innerText = '中软五班';
						break;
				}
			}
		</script>
	</body>
</html>
