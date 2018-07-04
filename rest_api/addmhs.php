<?php
  include 'connect2db.php';
    $postdata = file_get_contents("php://input");
    $userid = "";
    $password = "";
    $nama_mhs = "";
    $nim = "";
    $mayor = "";
    $semester = "";
    $ipk = "";
    $ukt = "";
    $alamat = "";
    $telepon = "";
    
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $userid = $request->userid;
        $password = $request->password;
        $nama_mhs = $request->nama_mhs;
        $nim = $request->nim;
        $mayor = $request->mayor;
        $semester = $request->semester;
        $ipk = $request->ipk;
        $ukt = $request->ukt;
        $alamat = $request->alamat;
        $telepon = $request->telepon;
        
        $passencrypt = md5($password);
        
        //ini buat cek apakah JSON ada isinya atau tidak
        if($request){
            $query_register = mysqli_query($connect,"INSERT INTO mahasiswa (userid, password, nama_mhs, nim, mayor, semester, ipk, ukt, alamat, telepon) VALUES ('$userid', '$passencrypt', '$nama_mhs', '$nim', '$mayor', '$semester', '$ipk', '$ukt', '$alamat', '$telepon') ");
            if($query_register){
                 $data = array(
                     'message' => "Register Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data = array(
                     'message' => "Register Failed!",
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
