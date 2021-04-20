<?php
header("Content-type:text/html;charset=utf-8");
$con=mysqli_connect('localhost','root','root','',3306);
if(!$con){
	echo "<script>alert('500:数据库连接失败')</script>";
	exit();
}
mysqli_query($con,'set names utf8');
?>
