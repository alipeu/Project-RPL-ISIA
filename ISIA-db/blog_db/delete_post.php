<?php
    include '../index.php';
    
    $api = file_get_contents("php://input");
    $id = "";

    if(isset($api)){
        $json = json_decode($api);
        $id = $json->id_post;
        
        if($json){
            $query = mysqli_query($plug, "DELETE FROM blog WHERE id_post = '$id_user' ");
            
            if($query){
                $dialog = array(
                    'message' => "Post has been deleted!",
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