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
  $contact_no->contact_no_aid = $_GET['contactnoid'];
  checkId($contact_no->contact_no_aid);
  $query = checkReadAll($contact_no);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($contact_no);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
