<?php
    include '../index.php';

    $api = file_get_contents("php://input");
    $title = "";
    $content = "";
    $id = "";

    if(isset($api)){
        $json = json_decode($api);
        $title = $json->judul_post;
        $time = $json->waktu_post;
        $content = $json->isi_post;
        $id = $json->id;
        
        if($json){
            $query_post = mysqli_query($plug, "UPDATE post SET judul_post, waktu_posts, isi_post VALUES judul_post='$title', waktu_posts=NOW(), isi_post='$content' WHERE id='$id'");
            
            if($query_post){
                $dialog = array(
                    'message' => "Post edited!",
                    'status' => "200"
                );
            }
            else{
                $dialog = array(
                    'message' => "Edit failed",
                    'status' => "404"
                );
            }
        }
        else{
            $dialog = array(
                'message' => "Empty",
                'status' => "503"
            );
        }
        echo json_encode($dialog);
    }
?>