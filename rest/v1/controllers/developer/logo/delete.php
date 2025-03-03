<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$logo = new Logo($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("logoid", $_GET)) {
  // get data
  $logo->logo_aid = $_GET['logoid'];
  $filesToDelete = $data['filesToDelete'];
  checkId($logo->logo_aid);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  $query = checkDelete($logo);



  returnSuccess($logo, "logo", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
