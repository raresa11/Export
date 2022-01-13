<?php
session_start();
include 'vendor/autoload.php';

// setting config untuk layanan akses ke google drive
$client = new Google_Client();
$client->setAuthConfig("oauth-credential.json");
$client->addScope("https://www.googleapis.com/auth/drive");
$service = new Google_Service_Drive($client);

// mengecek keberadaan token session
if (empty($_SESSION['upload_token'])){
    // jika token belum ada, maka lakukan login via oauth
    $authUrl = $client->createAuthUrl();
    header("Location:".$authUrl);
 
} else {
    // jika token sudah ada, maka munculkan form upload file
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css"/>
<link rel="stylesheet" href="./upload.css"/>
</head>
<style>
.content1 {
  max-width: 500px;
  margin: auto;
  margin-top: 150px;
  background: white;
  padding: 10px;
}

.content2 {
  max-width: auto;
  margin: auto;
  background: white;
  padding: 10px;
}
</style>
<body>

<div class="content1">
    <div class="row">
    <h1>Upload - Export Data Hari Ini</h1>
</div>
<div class="content2">
    <div class="row">
    <form method="post" enctype="multipart/form-data" action="upload.php">
    <div class="form-group">
        Pilih File:
        <div class="text-center">
            <input type="file" name="fileToUpload" id="fileToUpload">
        </div><br>

        <div class="text-right">
        <input type="submit" value="Upload File" name="submit" <?php ?> onclick="return confirm('Apa anda yakin data nya benar ?');">
        <input type="submit" value="Refresh">
        </div>
    </br>

<?php

    echo "Hari ini tanggal: " . date("d/m/Y");
    // echo " Tanggal: " . date("d/m/Y") . "";
?>
    </form>
<br>
<br>
<?php
    // jika form upload disubmit
    if (isset($_POST['submit'])){
        // menggunakan token untuk mengakses google drive  
        $client->setAccessToken($_SESSION['upload_token']);
        // membaca token respon dari google drive
        $client->getAccessToken();
 
        // instansiasi obyek file yg akan diupload ke Google Drive
        $file = new Google_Service_Drive_DriveFile(array(
            //Set the Parent Folder
            'parents' => array('17oaf0__vVDAuXsBtaPPousQ__Em7VVdE') // this is the folder id
        ));
        // set nama file di Google Drive disesuaikan dg nama file aslinya
        $file->setName($_FILES["fileToUpload"]["name"]);
        // proses upload file ke Google Drive dg multipart
        $result = $service->files->create($file, array(
            'data' => file_get_contents($_FILES["fileToUpload"]["tmp_name"]),
            'mimeType' => 'application/octet-stream',
            'uploadType' => 'multipart'));
 
        // menampilkan nama file yang sudah diupload ke google drive
        echo "Berhasil Upload File: ".$result->name."<br>";
        echo "Silahkan foto dan tutup tab ini"."<br>";
        echo "Terima kasih";
    }
 
}
 
// proses membaca token pasca login
if (isset($_GET['code'])) {
  $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
  // simpan token ke session
  $_SESSION['upload_token'] = $token;
}
 
?>

</body>
</html>