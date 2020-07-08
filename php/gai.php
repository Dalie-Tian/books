<?php
    $id=$_REQUEST["id"];


    $conn=mysqli_connect("127.0.0.1","root","","h52002",3306);

    mysqli_query($conn,"SET NAMES utf8");

    $sql="SELECT * FROM books where id='{$id}'";
    

    $result=mysqli_query($conn,$sql);

    $row=mysqli_fetch_assoc($result);
	// while(($row=mysqli_fetch_assoc($result))!=null){
	// 	array_push($arr,$row);
    // }
    $arr=[];
    array_push($arr,$row);
    echo JSON_encode($arr);

    mysqli_close($conn);

?>