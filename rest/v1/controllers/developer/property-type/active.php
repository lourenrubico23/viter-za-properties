<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/property-type/PropertyType.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$property_type = new PropertyType($conn);
$response = new Response();
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("property_typeid", $_GET)) {
        // check data
        checkPayload($data);

        $property_type->property_type_aid = $_GET['property_typeid'];
        $property_type->property_type_is_active = trim($data["isActive"]);
        $property_type->property_type_datetime = date("Y-m-d H:i:s");

        checkId($property_type->property_type_aid);
        $query = checkActive($property_type);
        http_response_code(200);
        returnSuccess($property_type, "property_type", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
