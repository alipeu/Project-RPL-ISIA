<?php
  // Always include this line in php file
  include "connect2db.php";
  $postdata = file_get_contents("php://input");
  $userid = "";
  $password = "";
  
  // Getting data from POST with JSON format
  if(isset($postdata)) {
    $request = json_decode($postdata);
    $userid = $request->userid;
    $password = $request->password;
  }
  
  $pass_encrypt = md5($password);
  
  // Check if the users already registered
  $query_login = mysqli_query($connect, "SELECT userid_prv, nama_prv FROM provider WHERE userid_prv='$userid' AND password_prv='$pass_encrypt'");
  if(mysqli_num_rows($query_login)) {
    $row = mysqli_fetch_assoc($query_login);
    $data = array(
        'message' => "Login Success",
        'data' => $row,
        'status' => "200"
    );
  }
  else {
      $data = array(
          'message' => "Login Failed, Email or Password Wrong",
          'status' => "404"
      );
  }
  echo json_encode($data);
?>
