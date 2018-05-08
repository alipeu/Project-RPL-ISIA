<?php
    include '../index.php';
    
    $api = file_get_contents("php://input");
    $title = "";
    $time = "";
    $content = "";
    $id = "";

    if(isset($api)){
        $json = json_decode($api);
        $title = $json->judul_post;
        $time = $json->waktu_post;
        $content = $json->isi_post;
        $id = $json->id_post;
        
        if($json){
            $query_post = mysqli_query($plug, "INSERT INTO post (judul_post, waktu_posts, isi_post) VALUES ('$title',NOW(),'$content')");
            
            if($query_post){
                $dialog = array(
                    'message' => "Posting succeed!",
                    'status' => "200"
                );
            }
            else{
                $dialog = array(
                    'message' => "Posting failed!",
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