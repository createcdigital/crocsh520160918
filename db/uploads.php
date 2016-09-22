<?php

$base64_string = $_POST['formFile'];
$savename = uniqid().'.jpeg';//localResizeIMG压缩后的图片都是jpeg格式
$savepath = '../wbimg/'.$savename;
if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_string, $result)){
    if (file_put_contents($savepath, base64_decode(str_replace($result[1], '', $base64_string)))){
        echo json_encode(array("status"=>1,"content"=>"$savename"));
    }else{
        echo json_encode(array("status"=>0,"content"=>"上传失败"));
    }
}
?>