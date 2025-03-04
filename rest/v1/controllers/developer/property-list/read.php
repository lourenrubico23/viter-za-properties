<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
$list = new PropertyList($conn);

if (array_key_exists("listid", $_GET)) {
    $list->list_aid = $_GET['listid'];
    checkId($list->list_aid);
    $query = checkReadById($list);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($list);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
