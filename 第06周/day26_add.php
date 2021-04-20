<?php
include('./config.php');
$bookname=trim(preg_replace('/<[^<>]+>/', '', $_POST['bookname']));
$author=trim(preg_replace('/<[^<>]+>/', '', $_POST['author']));
$publisher=trim(preg_replace('/<[^<>]+>/', '', $_POST['publisher']));
if (isset($_POST['id'])) {
    $res=@mysqli_query($con, "update book set bookname='{$bookname}',author='{$author}',publisher='{$publisher}' where Id='{$_POST['id']}'");
} else {
    $res=@mysqli_query($con, "insert into book (bookname,author,publisher) values ('{$bookname}','{$author}','{$publisher}')");
}
if (!$res) {
    echo "<script>alert('操作记录失败')</script>";
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
