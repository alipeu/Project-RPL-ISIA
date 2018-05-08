<?php
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