<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$logo = new Logo($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$logo->logo_image = $data["logo_image"];
$logo->logo_name = $data["logo_name"];
$logo->logo_position = $data["logo_position"];
$logo->logo_created = date("Y-m-d H:i:s");
$logo->logo_datetime = date("Y-m-d H:i:s");

$logo_image_old = $data["logo_image_old"];


// UPLOAD FILE TO GOOGLE DRIVE  
$logo->logo_image = checkToUploadGoogleDrive(
    $logo->logo_image, // FILES
    $logo_image_old, // OLD FILES
);

$query = checkCreate($logo);

returnSuccess($logo, "logo", $query);
