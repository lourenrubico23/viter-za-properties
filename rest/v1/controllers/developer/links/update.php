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
  // check data
  checkPayload($data);
  // get data
  $links->links_aid = $_GET['linksid'];
  $links->links_icons = $data["links_icons"];
  $links->links_title = $data["links_title"];
  $links->links_link = $data["links_link"];
  $links->links_datetime = date("Y-m-d H:i:s");
  checkId($links->links_aid);


  // //checks current data to avoid same entries from being updated
  // $user_other_links_fname_old = checkIndex($data, 'user_other_links_fname_old');
  // compareName($links, $user_other_links_fname_old, $links->user_other_links_fname);

  // update
  $query = checkUpdate($links);
  returnSuccess($links, "links", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
