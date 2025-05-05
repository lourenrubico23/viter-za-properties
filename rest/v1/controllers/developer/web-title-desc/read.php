<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$web = new WebTitleandDesc($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("webid", $_GET)) {
  $web->web_aid = $_GET['webid'];
  checkId($web->web_aid);
  $query = checkReadById($web);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($web);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
