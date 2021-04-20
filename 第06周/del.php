<?php
include('./config.php');
$id=$_GET['id'];
$res=@mysqli_query($con, "delete from book where Id='{$id}'");
if (!$res) {
    echo "<script>alert('删除记录失败')</script>";
    exit();
}
if (mysqli_affected_rows($con)!=-1) {
    mysqli_close($con);
    require('./get.php');
} else {
    require('./api.php');
    echo Api::json(400, 'error');
    mysqli_close($con);
}
