<?php
    if(isset($_SERVER['HTTP_ORIGIN'])){
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Max-Age: 86400");
    }

    if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
        if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])){
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        }
        if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])){
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        }
    }

    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'isia-db';

    $plug = mysqli_connect($host,$user,$pass,$db);

    if($plug->connect_errno){
        echo 'Connection failed.<br>'.$plug->connect_error;
    }
    else{
        echo 'Your app is successfully connected to the database';
    }
?>