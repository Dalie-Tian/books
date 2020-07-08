<?php
    $name=$_REQUEST["name"];
    $pwd=$_REQUEST["pwd"];
    $email=$_REQUEST["email"];
    $vip=$_REQUEST["vip"];

    //连接数据库
    $conn=mysqli_connect("127.0.0.1","root","","h52002",3306);

    //防止中文乱码
    mysqli_query($conn,"SET NAMES utf8");

    $sql="insert into man value(0,'{$name}','{$pwd}',{$vip},'{$email}')";

    $result=mysqli_query($conn,$sql);

    if($result){
        echo "<script>location='../jump.html?result=6';</script>";
    }else{
        echo "<script>location='../jump.html?result=7';</script>";
    }


    //断开数据库链接
    mysqli_close($conn);


?>