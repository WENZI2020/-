<?php
include('./config.php');
$id=$_GET['id'];
$photo=mysqli_fetch_assoc(mysqli_query($con,"select photo from user where Id='{$id}'"))['photo'];
$res=mysqli_query($con,"delete from user where Id='{$id}'");
if(!$res){
	echo "<script>alert('删除记录失败')</script>";
	exit();
}else{
	if(strlen($photo)>0){
		unlink('./img/'.$photo);
	}
	header('Location:./list.php');
}
mysqli_close($con);
?>