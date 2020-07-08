<?php
    $name=$_POST["name"];
    $pwd=$_POST["pwd"];

    //连接数据库
    $conn=mysqli_connect("127.0.0.1","root","","h52002",3306);

    //防止中文乱码
    mysqli_query($conn,"SET NAMES utf8");

    //登录
    //SQL语句
    $sql="select name,pwd,vip from man";
    //执行操作
    $result=mysqli_query($conn,$sql);
    while( ($row=mysqli_fetch_row($result))!=null ){
        if($name==$row[0]&&$pwd==$row[1]){
            $vip=$row[2];
            echo($vip);
            echo("<script>location='../index.html?name={$name}&vip={$vip}';</script>");
            return false;
        }       
    } 
    echo("<script>location='../index.html?x=0';</script>"); 
    

    //断开数据库链接
    mysqli_close($conn);


?>