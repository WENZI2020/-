<?php
include_once('./config.php');
$res=@mysqli_query($con, "select * from book");
if (!$res) {
    echo "<script>alert('查询记录失败')</script>";
    exit();
}
$data=[];
while ($row=mysqli_fetch_assoc($res)) {
    $data[]=$row;
}
if (mysqli_num_rows($res)>0) {
    echo Api::json(200, 'success', $data);
} else {
    echo Api::json(400, 'error');
}
mysqli_close($con);
