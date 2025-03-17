<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$banner = new Banner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateBanner = $data['isUpdateBanner'];

  if ($isUpdateBanner == "homeBannerUpdate") {
    $banner->banner_aid = $_GET['bannerid'];
    $banner->banner_image = $data["banner_image"];
    $banner->banner_page = $data["banner_page"];
    $banner->banner_title = $data["banner_title"];
    $banner->banner_datetime = date("Y-m-d H:i:s");

    $banner_image_old = $data["banner_image_old"];

    checkId($banner->banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $banner->banner_image = checkToUploadGoogleDrive(
      $banner->banner_image, // FILES
      $banner_image_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $banner->banner_image = checkDeleteGoogleDriveApiFiles(
      $banner->banner_image, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );


    // update
    $query = checkUpdate($banner);
    returnSuccess($banner, "banner", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
