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
  $about->about_aid = $_GET['aboutid'];
  checkId($about->about_aid);
  $query = checkReadAll($about);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($about);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
