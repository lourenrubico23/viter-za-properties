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
  // check data
  checkPayload($data);
  // get data
  $logo->logo_aid = $_GET['logoid'];
  $logo->logo_image = $data["logo_image"];
  $logo->logo_name = $data["logo_name"];
  $logo->logo_position = $data["logo_position"];
  $logo->logo_datetime = date("Y-m-d H:i:s");

  $logo_image_old = $data["logo_image_old"];

  checkId($logo->logo_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $logo->logo_image = checkToUploadGoogleDrive(
    $logo->logo_image, // FILES
    $logo_image_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $logo->logo_image = checkDeleteGoogleDriveApiFiles(
    $logo->logo_image, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );


  // update
  $query = checkUpdate($logo);
  returnSuccess($logo, "logo", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
