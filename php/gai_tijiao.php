<?php
    $id=$_REQUEST["id"];
    $name=$_REQUEST["name"];
    $zuozhe=$_REQUEST["zuozhe"];
    $price=$_REQUEST["price"];
    $count=$_REQUEST["count"];
    $jianjie=$_REQUEST["jianjie"];
    $content=$_REQUEST["content"];
    $vip=$_REQUEST["vip"];

    $conn=mysqli_connect("127.0.0.1","root","","h52002",3306);

    mysqli_query($conn,"SET NAMES utf8");

    $sql="UPDATE books SET name='{$name}',price={$price},count={$count},zuozhe='{$zuozhe}',jianjie='{$jianjie}',content='{$content}',vip={$vip} WHERE id={$id} ";
    
    $result=mysqli_query($conn,$sql);

    echo $result;
    if($result){
        echo "<script>location='../jump.html?result=2';</script>";
    }else{
        echo "<script>location='../jump.html?result=3';</script>";
    }

    //断开数据库链接
    mysqli_close($conn);
?>