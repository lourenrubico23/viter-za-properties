<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$about = new About($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("aboutid", $_GET)) {
  // get data
  $about->about_aid = $_GET['aboutid'];
  $filesToDelete = $data['filesToDelete'];
  checkId($about->about_aid);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  $query = checkDelete($about);



  returnSuccess($about, "about", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
