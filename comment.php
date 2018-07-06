<?php
  include 'connect2db.php';
    $commentdata = file_get_contents("php://input");
    $userid = "";
    $isi_comment = "";
    $id_post = "";
    $id_comment = "";
    $waktu_comment = "";
    
    if (isset($commentdata)) {
        $request = json_decode($commentdata);
        $userid = $request->userid;
        
        //ini buat cek apakah JSON ada isinya atau tidak
        if($request){
            $query_post = mysqli_query($connect,"INSERT INTO post (userid, isi_comment, id_post, id_comment, waktu_comment) VALUES ('$userid', '$isi_comment', '$id_post', '$id_comment', '$waktu_comment') ");
            if($query_post){
                 $data = array(
                     'message' => "Post Created!",
                     'status' => "200"
                 );
             }
             else {
                 $data = array(
                     'message' => "Failed to Create Post!",
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