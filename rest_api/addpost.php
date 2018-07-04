<?php
  include 'connect2db.php';
    $postdata = file_get_contents("php://input");
    $judul = "";
    $deskripsi = "";
    $waktu = "";
	$userid_prv = "";
    
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $judul = $request->judul;
        $deskripsi = $request->deskripsi;
        $waktu = $request->waktu;
		$userid_prv = $request->userid_prv;
        
        //ini buat cek apakah JSON ada isinya atau tidak
        if($request){
            $query_post = mysqli_query($connect,"INSERT INTO post (judul, deskripsi, waktu, userid_prv) VALUES ('$judul', '$deskripsi', '$waktu', '$userid_prv') ");
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
