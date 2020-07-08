<?php

    $conn=mysqli_connect("127.0.0.1","root","","h52002",3306);

    mysqli_query($conn,"SET NAMES utf8");

    $sql="SELECT * FROM books ";
    

    $result=mysqli_query($conn,$sql);

    $arr=[];
	while(($row=mysqli_fetch_assoc($result))!=null){
		array_push($arr,$row);
	}
    echo JSON_encode($arr);

    //断开数据库链接
    mysqli_close($conn);

?>