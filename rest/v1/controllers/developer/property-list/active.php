<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/property-list/PropertyList.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$list = new PropertyList($conn);
$response = new Response();
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("listid", $_GET)) {
        // check data
        checkPayload($data);

        $list->list_aid = $_GET['listid'];
        $list->list_is_active = trim($data["isActive"]);
        $list->list_datetime = date("Y-m-d H:i:s");

        checkId($list->list_aid);
        $query = checkActive($list);
        http_response_code(200);
        returnSuccess($list, "list", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
