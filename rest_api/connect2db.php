<?php
  if (isset($_SERVER['HTTP_ORIGIN'])) {
      header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
      header('Access-Control-Allow-Credentials: true');
      header('Access-Control-Max-Age: 86400');    // cache for 1 day
  }
  
  // Access-Control headers are received during OPTIONS requests
  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
          header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
          header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
      exit(0);
  }
  
  // local only
  $localhost = "localhost";
  $username = "root";
  $password = "";
  $db_name = "isiadb";
  
  // online
  /* $localhost = "fdb21.atspace.me";
  $username = "2725056_isiadb";
  $password = "RPLs4y4a++";
  $db_name = "2725056_isiadb"; */
  
  //create connection
  $connect = mysqli_connect($localhost, $username, $password, $db_name);
  
  //check connection
  if($connect->connect_error) {
    die("connection failed : ". $connect->connect_error);
  } 
?>
