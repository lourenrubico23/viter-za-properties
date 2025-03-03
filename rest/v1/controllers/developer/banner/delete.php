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
  // get data
  $banner->banner_aid = $_GET['bannerid'];
  $filesToDelete = $data['filesToDelete'];
  checkId($banner->banner_aid);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  $query = checkDelete($banner);



  returnSuccess($banner, "banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
