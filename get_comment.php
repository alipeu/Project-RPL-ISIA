<?php
  include 'db_connect.php';
  $commentdata = file_get_contents("php://input");
  $userid = '';
  $request = json_decode($commentdata);
  $userid = $request->userid;
    $query_comment = mysqli_query($connect,"SELECT c.isi_comment, u.userid, FROM post p, user u, comment c WHERE u.userid=c.userid && p.id_post=c.id_post ORDER BY c.waktu_comment ASC");
    if(mysqli_num_rows($query_comment)){
         while($result=mysqli_fetch_assoc($query_comment)){
            $results_set[]=$result;
         }
         $data = array(
            'message' => "Data Query Success",
            'data' => $results_set,
            'status' => "200"
         );
     }
     else {
         $data =array(
             'message' => "Data Query Failed!",
             'status' => "404"
         );
     }
     
    echo json_encode($data);
?>