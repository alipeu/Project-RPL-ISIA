<?php
    include '../index.php';
    
    $api = file_get_contents('php://input');
    $nim_mhs = "";
    $nama_mhs = "";
    $pass_mhs = "";
    
    if(isset($api)){
        $json = json_decode($api);
        $nim_mhs = $request->nim_mhs;
        $nama_mhs = $request->nama_mhs;
        $pass_mhs = $request->pass_mhs;
        
        if($request){
            $query_edit = mysqli_query($mysqli,"UPDATE mahasiswa SET nama_mhs='$nama_mhs', pass_mhs='$pass_mhs' WHERE nim_mhs = '$nim_mhs'");
            
            if($query_edit){
                $dialog = array(
                    'message' => "User edited!",
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