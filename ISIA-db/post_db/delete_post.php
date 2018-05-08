<?php
    include '../index.php';
    
    $api = file_get_contents("php://input");
    $id = "";

    if(isset($api)){
        $json = json_decode($api);
        $id = $json->id_post;
        
        if($json){
            $query_post = mysqli_query($plug, "DELETE FROM post WHERE id_post = '$id_user' ");
            
            if($query_post){
                $dialog = array(
                    'message' => "Post deleted!",
                    'status' => "200"
                );
            }
            else{
                $dialog = array(
                    'message' => "Delete failed!",
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