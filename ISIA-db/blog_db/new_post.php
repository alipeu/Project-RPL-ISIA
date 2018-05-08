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
            $query = mysqli_query($plug, "INSERT INTO blog (judul_post, waktu_post, id_post) VALUES ('$title','$time',NOW(),'$id')");
            
            if($query){
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