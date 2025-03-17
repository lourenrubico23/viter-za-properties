<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$links = new Links($conn);
// get should not be present

// check data
checkPayload($data);
// get data

// Get the type of create action (logo, navigation, banner)
$isUpdateLinks = $data['isUpdateLinks'] ?? '';

if ($isUpdateLinks == "linksUpdate") {

    $links->links_facebook_link = $data["links_facebook_link"];
    $links->links_facebook_title = $data["links_facebook_title"];
    $links->links_instagram_link = $data["links_instagram_link"];
    $links->links_instagram_title = $data["links_instagram_title"];
    $links->links_message_link = $data["links_message_link"];
    $links->links_message_title = $data["links_message_title"];
    $links->links_contact = $data["links_contact"];
    $links->links_created = date("Y-m-d H:i:s");
    $links->links_datetime = date("Y-m-d H:i:s");

    // //checks newly added data if it already exists
    // isNameExist($links, $links->links_name);

    $query = checkCreate($links);
}

returnSuccess($links, "links", $query);
