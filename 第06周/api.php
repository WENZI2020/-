<?php
class Api
{
    public static function json($code, $msg, $data=array())
    {
        return json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }
}
