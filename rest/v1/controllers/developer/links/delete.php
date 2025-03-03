<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$links = new Links($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("linksid", $_GET)) {
  // get data
  $links->links_aid = $_GET['linksid'];
  checkId($links->links_aid);

  $query = checkDelete($links);

  returnSuccess($links, "links", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
