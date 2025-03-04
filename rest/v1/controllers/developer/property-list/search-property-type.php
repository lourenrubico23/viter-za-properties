<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require 'functions.php';
require '../../../models/developer/property-list/PropertyList.php';
// get payload

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$list = new PropertyList($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  //checkApiKey();
  // check data
  checkPayload($data);
  $list->list_search = $data["searchValue"];

  $query = checkSearchPropertyType($list);
  http_response_code(200);
  getQueriedData($query);
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
