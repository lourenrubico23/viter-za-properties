<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$banner = new Banner($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$banner->banner_image = $data["banner_image"];
$banner->banner_page = $data["banner_page"];
$banner->banner_title = $data["banner_title"];
$banner->banner_created = date("Y-m-d H:i:s");
$banner->banner_datetime = date("Y-m-d H:i:s");

$banner_image_old = $data["banner_image_old"];


// UPLOAD FILE TO GOOGLE DRIVE  
$banner->banner_image = checkToUploadGoogleDrive(
    $banner->banner_image, // FILES
    $banner_image_old, // OLD FILES
);

$query = checkCreate($banner);

returnSuccess($banner, "banner", $query);
