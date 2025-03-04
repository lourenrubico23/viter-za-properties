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
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key   
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    checkPayload($data);
    // get data
    $property_type->property_type_search = $data["searchValue"];    // get data 
    // if search only
    checkKeyword($property_type->property_type_search);
    $query = checkSearch($property_type);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
