<?php
include_once('./config.php');
$username=trim(preg_replace('/<[^<>]+>/', '', $_POST['username']));
$content=trim(preg_replace('/<[^<>]+>/', '', $_POST['content']));
$time=time();
$res=@mysqli_query($con, "insert into comment (username,content,date) values ('{$username}','{$content}','{$time}')");
if (!$res) {
    echo "<script>alert('添加记录失败')</script>";
    exit();
}
if (mysqli_affected_rows($con)!=-1) {
    include('./get.php');
} else {
    echo Api::json(400, 'error');
    mysqli_close($con);
}
