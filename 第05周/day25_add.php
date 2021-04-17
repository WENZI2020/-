<?php
include('./config.php');
$username=$_POST['username'];
$nickname=$_POST['nickname'];
$age=$_POST['age'];
$tel=$_POST['tel'];
$sex=$_POST['sex'];
$class=$_POST['class'];
$files=$_FILES['photo'];
if($files['error']==0){
	$photo=$files['name'];
	move_uploaded_file($files['tmp_name'],'./img/'.$photo);
}
$res=mysqli_query($con,"insert into user (username,nickname,age,tel,sex,class,photo) values ('{$username}','{$nickname}','{$age}','{$tel}','{$sex}','{$class}','{$photo}')");
if(!$res){
	echo "<script>alert('添加记录失败')</script>";
	exit();
}else{
	header('Location:./list.php');
}
mysqli_close($con);
?>