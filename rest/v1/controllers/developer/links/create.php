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
$links->links_icons = $data["links_icons"];
$links->links_title = $data["links_title"];
$links->links_link = $data["links_link"];
$links->links_created = date("Y-m-d H:i:s");
$links->links_datetime = date("Y-m-d H:i:s");

// //checks newly added data if it already exists
// isNameExist($links, $links->links_name);

$query = checkCreate($links);

returnSuccess($links, "links", $query);
