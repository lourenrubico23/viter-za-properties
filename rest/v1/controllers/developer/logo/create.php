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

$isUpdateNavigation = $data['isUpdateNavigation'] ?? '';

if ($isUpdateNavigation == "navigationUpdate") {


    $logo->logo_image = $data["logo_image"];
    $logo->logo_name = $data["logo_name"];
    $logo->logo_position = $data["logo_position"];
    $logo->logo_nav_a = $data["logo_nav_a"];
    $logo->logo_nav_b = $data["logo_nav_b"];
    $logo->logo_nav_c = $data["logo_nav_c"];
    $logo->logo_nav_d = $data["logo_nav_d"];
    $logo->logo_nav_e = $data["logo_nav_e"];
    $logo->logo_nav_f = $data["logo_nav_f"];
    $logo->logo_created = date("Y-m-d H:i:s");
    $logo->logo_datetime = date("Y-m-d H:i:s");

    $logo_image_old = $data["logo_image_old"];


    // UPLOAD FILE TO GOOGLE DRIVE  
    $logo->logo_image = checkToUploadGoogleDrive(
        $logo->logo_image, // FILES
        $logo_image_old, // OLD FILES
    );

    $query = checkCreate($logo);
}
returnSuccess($logo, "logo", $query);
