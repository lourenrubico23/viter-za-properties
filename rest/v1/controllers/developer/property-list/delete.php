<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$list = new PropertyList($conn);

if (array_key_exists("listid", $_GET)) {
    // check data
    checkPayload($data);

    $list->list_aid = $_GET['listid'];
    $filesToDelete = $data['filesToDelete'];
    checkId($list->list_aid);
    // delete

      // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }
  
    $query = checkDelete($list);
    returnSuccess($list, "list", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
