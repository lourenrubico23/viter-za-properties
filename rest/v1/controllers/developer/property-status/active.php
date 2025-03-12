<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/property-status/PropertyStatus.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$property_status = new PropertyStatus($conn);
$response = new Response();
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("property_statusid", $_GET)) {
        // check data
        checkPayload($data);

        $property_status->property_status_aid = $_GET['property_statusid'];
        $property_status->property_status_is_active = trim($data["isActive"]);
        $property_status->property_status_datetime = date("Y-m-d H:i:s");

        checkId($property_status->property_status_aid);
        $query = checkActive($property_status);
        http_response_code(200);
        returnSuccess($property_status, "property_status", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
