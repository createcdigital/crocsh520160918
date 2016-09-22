<?php

//要创建的两个文件

$TxtFileName    = "crocs卡券编号
.sql";

//以读写方式打写指定文件，如果文件不存则创建

if( ($TxtRes=fopen ($TxtFileName,"w+")) === FALSE){

echo("创建可写文件：".$TxtFileName."失败");

exit();

}

echo ("创建可写文件".$TxtFileName."成功！</br>");

$num = 2016002001;
for($i=0;$i<2000;$i++){
    $StrConents = "INSERT INTO cardlist(card) VALUES ('DPN".$num."');";//要 写进文件的内容
    $num++;
    if(!fwrite ($TxtRes,$StrConents)){ //将信息写入文件
    echo ("尝试向文件".$TxtFileName."写入".$StrConents."失败！</br>");
    fclose($TxtRes);
    exit();
    }
    echo ("尝试向文件".$TxtFileName."写入".$StrConents."成功！</br>");
}

fclose ($TxtRes); //关闭指针
?>