<?php
  include "connect2db.php";
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
    $query_posts = mysqli_query($connect,"SELECT ps.id_post, ps.judul, ps.deskripsi, ps.waktu, ps.userid_prv, p.nama_prv FROM post ps, provider p WHERE ps.userid_prv=p.userid_prv ORDER BY ps.waktu DESC");
    if(mysqli_num_rows($query_posts)){
         while($result=mysqli_fetch_assoc($query_posts)){
            $results_set[]=$result;
         }
         $data = array(
            'message' => "Data Query Success",
            'data' => $results_set,
            'status' => "200"
         );
     }
     else {
         $data = array(
             'message' => "Data Query Failed!",
             'status' => "404"
         );
     }
     
    echo json_encode($data);
?>