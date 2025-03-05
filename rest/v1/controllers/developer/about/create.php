<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$about = new About($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$about->about_img = $data["about_img"];
$about->about_logo_img = $data["about_logo_img"];
$about->about_name = $data["about_name"];
$about->about_paragraph_a = $data["about_paragraph_a"];
$about->about_paragraph_b = $data["about_paragraph_b"];
$about->about_paragraph_c = $data["about_paragraph_c"];
$about->about_created = date("Y-m-d H:i:s");
$about->about_datetime = date("Y-m-d H:i:s");

$about_img_old = $data["about_img_old"];
$about_logo_img_old = $data["about_logo_img_old"];


// UPLOAD FILE TO GOOGLE DRIVE  
$about->about_img = checkToUploadGoogleDrive(
    $about->about_img, // FILES
    $about_img_old, // OLD FILES
);

// UPLOAD FILE TO GOOGLE DRIVE  
$about->about_logo_img = checkToUploadGoogleDrive(
    $about->about_logo_img, // FILES
    $about_logo_img_old, // OLD FILES
);

$query = checkCreate($about);

returnSuccess($about, "about", $query);
