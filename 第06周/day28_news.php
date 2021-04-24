<?php
header("Content-type:text/html;charset=utf-8");
$con=@mysqli_connect('127.0.0.1', 'root', 'root', 'gdmecmallsys', 3306);
if (!$con) {
    echo "<script>alert('500:数据库连接失败')</script>";
    exit();
}
mysqli_query($con, 'set names utf8');
$res=@mysqli_query($con, "select * from news");
if (!$res) {
    echo "<script>alert('查询记录失败')</script>";
    exit();
}
$data=[];
while ($row=mysqli_fetch_assoc($res)) {
    $data[]=$row;
}
class Api
{
    public static function json($status, $msg, $data=array())
    {
        return json_encode(array('status'=>$status,'msg'=>$msg,'data'=>$data));
    }
}
if (mysqli_num_rows($res)>0) {
    echo Api::json(200, 'success', $data);
} else {
    echo Api::json(400, 'error');
}
mysqli_close($con);
