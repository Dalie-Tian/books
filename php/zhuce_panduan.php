<?php
    $name=$_REQUEST["name"];

    // 连接数据库
    $conn=mysqli_connect("127.0.0.1","root","","h52002",3306);

    //防止中文乱码
    mysqli_query($conn,"SET NAMES utf8");

    //SQL语句
    $sql="select name from man";

    //执行操作
    $result=mysqli_query($conn,$sql);
    while( ($row=mysqli_fetch_row($result))!=null ){
        if($name==$row[0]){
            echo "1";
            return false;
        }
    }
    echo "0";

    
    //断开数据库链接
    mysqli_close($conn);


?>