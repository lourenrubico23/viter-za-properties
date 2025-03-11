<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$contact_no = new ContactNo($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("contactnoid", $_GET)) {
  // get data
  $contact_no->contact_no_aid = $_GET['contactnoid'];
  $filesToDelete = $data['filesToDelete'];
  checkId($contact_no->contact_no_aid);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  $query = checkDelete($contact_no);

  returnSuccess($contact_no, "contact_no", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
