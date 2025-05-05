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
  // check data
  checkPayload($data);

  $web->web_aid = $_GET['webid'];
  $web->web_title = trim($data["web_title"]);
  $web->web_description = trim($data["web_description"]);
  $web->web_datetime = date("Y-m-d H:i:s");
  checkId($web->web_aid);


  $query = checkUpdate($web);
  returnSuccess($web, "web", $query);
}
// return 404 error if endpoint not available
checkEndpoint();
