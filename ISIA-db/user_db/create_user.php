<?php
    include '../index.php';
    
    $api = file_get_contents("php://input");
    $nim_mhs = "";
    $nama_mhs = "";
    $pass_mhs = "";

    if(isset($api)){
        $json = json_decode($api);
        $nim_mhs = $json->nim_mhs;
        $nama_mhs = $json->nama_mhs;
        $pass_mhs = $json->pass_mhs;
        
        if($json){
            $query_register = mysqli_query($plug,"INSERT INTO mahasiswa (nim_mhs, nama_mhs, pass_mhs) VALUES ('$nim_mhs', '$nama_mhs', '$pass_mhs')");
            
            if($query_register){
                $dialog = array(
                    'message' => "User created!",
                    'status' => "200"
                );
            }
            else{
                 $dialog = array(
                    'message' => "Error!",
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