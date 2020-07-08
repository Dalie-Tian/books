<?php
    $name=$_REQUEST["name"];
    $zuozhe=$_REQUEST["zuozhe"];
    $price=$_REQUEST["price"];
    $count=$_REQUEST["count"];
    $jianjie=$_REQUEST["jianjie"];
    $content=$_REQUEST["content"];
    $vip=$_REQUEST["vip"];
    
    $conn=mysqli_connect("127.0.0.1","root","","h52002",3306);

    mysqli_query($conn,"SET NAMES utf8");

    $sql="insert into books values(0,'{$name}',{$price},{$count},'{$zuozhe}','{$jianjie}','{$content}',{$vip}) ";

    $result=mysqli_query($conn,$sql);
    if($result){
        echo "<script>location='../jump.html?result=1';</script>";
    }else{
        echo "<script>location='../jump.html?result=0';</script>";
    }

    //断开数据库链接
    mysqli_close($conn);
?>