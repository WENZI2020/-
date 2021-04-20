<?php
include('./config.php');
$id=$_GET['id'];
$res=@mysqli_query($con,"select * from user where Id='{$id}'");
if (!$res) {
    echo "<script>alert('查询记录失败')</script>";
    exit();
}
?>
<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title></title>
	</head>
	<body>
<?php
while ($row=mysqli_fetch_assoc($res)) {
    ?>
		<form method="post" action="add.php" enctype="multipart/form-data">
			<input type="hidden" name="id" value="<?php echo $row['Id']; ?>">
			姓名：<input type="text" name="username" value="<?php echo $row['username']; ?>">
			昵称：<input type="text" name="nickname" value="<?php echo $row['nickname']; ?>">
			年龄：<input type="text" name="age" value="<?php echo $row['age']; ?>">
			电话：<input type="text" name="tel" value="<?php echo $row['tel']; ?>">
			性别：<input type="radio" name="sex" value="1" <?php if($row['sex']==1){echo 'checked';} ?>>男
			<input type="radio" name="sex" value="2" <?php if($row['sex']==2){echo 'checked';} ?>>女
			<input type="radio" name="sex" value="3" <?php if($row['sex']==3){echo 'checked';} ?>>其它
			<br>班级：<select name="class">
				<option value="1" <?php if($row['class']==1){echo 'selected';} ?>>中软一班</option>
				<option value="2" <?php if($row['class']==2){echo 'selected';} ?>>中软二班</option>
				<option value="3" <?php if($row['class']==3){echo 'selected';} ?>>中软三班</option>
				<option value="4" <?php if($row['class']==4){echo 'selected';} ?>>中软四班</option>
				<option value="5" <?php if($row['class']==5){echo 'selected';} ?>>中软五班</option>
			</select>
			<input type="hidden" name="image" value="<?php echo $row['photo']; ?>">
			头像：<input type="file" name="photo"><img src="./img/<?php echo $row['photo']; ?>" width="100%" />
			<input type="submit" value="编辑信息">
		</form>
<?php
}
mysqli_close($con);
?>
		<link rel="stylesheet" href="./css/form.css">
	</body>
</html>