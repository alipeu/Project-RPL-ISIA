<?php
  include 'connect2db.php';
    $postdata = file_get_contents("php://input");
    $userid = "";
    $password = "";
    $nama_prv = "";
    
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $userid = $request->userid;
        $password = $request->password;
        $nama_prv = $request->nama_prv;
        
        $passencrypt = md5($password);
        
        //ini buat cek apakah JSON ada isinya atau tidak
        if($request){
            $query_register = mysqli_query($connect,"INSERT INTO provider (userid_prv, password_prv, nama_prv) VALUES ('$userid', '$passencrypt', '$nama_prv') ");
            if($query_register){
                 $data = array(
                     'message' => "Register Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data = array(
                     'message' => "Register Failed!",
                     'status' => "404"
                 ); 
             }
        }
        else{
            $data = array(
                'message' => "No Data!",
                'status' => "503"
            ); 
        }
        echo json_encode($data);
    }
?>
