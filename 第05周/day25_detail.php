<?php
include('./config.php');
$id=$_GET['id'];
$res=mysqli_query($con,"select * from user where Id='{$id}'");
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
<?php
while ($row=mysqli_fetch_assoc($res)) {
    ?>
    <tr>
		<th>学号</th>
		<td><?php echo $row['Id']; ?></td>
	</tr>
    <tr>
		<th>头像</th>
		<td><img src="./img/<?php echo $row['photo']; ?>" /></td>
	</tr>
    <tr>
		<th>昵称</th>
		<td><?php echo $row['nickname']; ?></td>
	</tr>
    <tr>
		<th>姓名</th>
		<td><?php echo $row['username']; ?></td>
	</tr>
    <tr>
		<th>性别</th>
		<td><?php echo $row['sex']; ?></td>
	</tr>
    <tr>
		<th>年龄</th>
		<td><?php echo $row['age']; ?></td>
	</tr>
    <tr>
		<th>电话</th>
		<td><?php echo $row['tel']; ?></td>
	</tr>
    <tr>
		<th>班级</th>
		<td><?php echo $row['class']; ?></td>
	</tr>
    <tr>
		<th>编辑</th>
		<td><a href="./list.php">返回</a></td>
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
	  	margin: 20px auto;
	  	border-collapse: collapse;
	  	border: 1px solid #ccc;
	  	width: 50%;
	  	text-align: center;
	  }
	  th,td {
	  	border: 1px solid #ccc;
	  	line-height: 30px;
	  	height: 30px;
	  	padding: 5px 0;
	  }
	  tr:nth-child(odd) {
	  	background: #fff;
	  }
	  img {
	  	height: 200px;
	  }
	  a {
	  	text-decoration: none;
	  	display: inline-block;
	  }
  </style>
  <script>
	  var sex = document.querySelectorAll('tr')[4].children[1];
	  var clas = document.querySelectorAll('tr')[7].children[1];
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
  </script>
</body>
</html>