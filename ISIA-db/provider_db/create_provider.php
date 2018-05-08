<?php
    include '../index.php';
    
    $api = file_get_contents('php://input');
    $username = "";
    $prov_name = "";
    $password = "";
    
    if(isset($api)){
        $json = json_decode($api);
        $username = $request->username;
        $password = $request->password;
        $provname = $request->provname;
        
        if($request){
            $query_register = mysqli_query($mysqli,"INSERT INTO provider (username_penyalur, nama_penyalur, pass_penyalur) VALUES ($username, $provname, $password)");
            
            if($query_register){
                $dialog = array(
                    'message' => "Provider created!",
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