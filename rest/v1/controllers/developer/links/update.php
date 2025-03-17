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
  $isUpdateLinks = $data['isUpdateLinks'];

  if ($isUpdateLinks == "linksUpdate") {

    $links->links_aid = $_GET['linksid'];
    $links->links_facebook_link = $data["links_facebook_link"];
    $links->links_facebook_title = $data["links_facebook_title"];
    $links->links_instagram_link = $data["links_instagram_link"];
    $links->links_instagram_title = $data["links_instagram_title"];
    $links->links_message_link = $data["links_message_link"];
    $links->links_message_title = $data["links_message_title"];
    $links->links_contact = $data["links_contact"];
    $links->links_datetime = date("Y-m-d H:i:s");
    checkId($links->links_aid);


    // //checks current data to avoid same entries from being updated
    // $user_other_links_fname_old = checkIndex($data, 'user_other_links_fname_old');
    // compareName($links, $user_other_links_fname_old, $links->user_other_links_fname);

    // update
    $query = checkUpdate($links);
    returnSuccess($links, "links", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
