<?php


$target_dir = "./";
$target_file = $target_dir . basename($_FILES["documents"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["documents"]["tmp_name"]);

    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["documents"]["tmp_name"], $target_file)) {
            echo "The file ". basename( $_FILES["documents"]["name"]). " has been uploaded.";
    } else {
        echo json_encode(["message" => "Sorry, there was an error uploading your file."]);
    }
}
