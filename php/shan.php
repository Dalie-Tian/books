<?php
    $id=$_REQUEST["id"];

    echo $id;
    $conn=mysqli_connect("127.0.0.1","root","","h52002",3306);

    mysqli_query($conn,"SET NAMES utf8");

    $sql="DELETE FROM books WHERE id={$id}";
    
    $result=mysqli_query($conn,$sql);

    echo $result;
    if($result){
        echo "<script>location='../jump.html?result=4';</script>";
    }else{
        echo "<script>location='../jump.html?result=5';</script>";
    }

    //断开数据库链接
    mysqli_close($conn);
?>