<?php
    include '../index.php';
    
    $api = file_get_contents('php://input');
    $username = "";
    $prov_name = "";
    $password = "";
    $oldpass = "";
    
    if(isset($api)){
        $json = json_decode($api);
        $username = $request->username;
        $password = $request->password;
        $provname = $request->provname;
        $oldpass = $request->oldpass;
        
        if($request){
            $query_edit = mysqli_query($mysqli,"UPDATE provider SET username_penyalur='$username', nama_penyalur='$provname', pass_penyalur='$password' WHERE pass_penyalur = '$oldpass'");
            
            if($query_edit){
                $dialog = array(
                    'message' => "Provider edited!",
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