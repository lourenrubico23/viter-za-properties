<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$blogs = new Blogs($conn);

if (array_key_exists("blogsid", $_GET)) {
  // check data
  checkPayload($data);

  $blogs->blogs_aid = $_GET['blogsid'];
  $filesToDelete = $data['filesToDelete'];
  checkId($blogs->blogs_aid);
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

  $query = checkDelete($blogs);
  returnSuccess($blogs, "blogs", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
