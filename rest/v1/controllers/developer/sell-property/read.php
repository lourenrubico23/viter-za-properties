<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$sell = new SellProperty($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("sellid", $_GET)) {
  $sell->sell_aid = $_GET['sellid'];
  checkId($sell->sell_aid);
  $query = checkReadById($sell);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($sell);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
