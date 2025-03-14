<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$colors = new Colors($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("colorsid", $_GET)) {
  $colors->colors_aid = $_GET['colorsid'];
  checkId($colors->colors_aid);
  $query = checkReadById($colors);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($colors);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
