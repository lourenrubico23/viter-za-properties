<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$web = new WebTitleandDesc($conn);
// get should not be present

// check data
checkPayload($data);

$web->web_title = trim($data["web_title"]);
$web->web_description = trim($data["web_description"]);
$web->web_created = date("Y-m-d H:i:s");
$web->web_datetime = date("Y-m-d H:i:s");


// create
$query = checkCreate($web);
returnSuccess($web, "web", $query);
