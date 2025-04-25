<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/featured-properties/FeaturedProperties.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$featured_properties = new FeaturedProperties($conn);
$response = new Response();
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("featured_propertiesid", $_GET)) {
        // check data
        checkPayload($data);

        $featured_properties->featured_properties_aid = $_GET['featured_propertiesid'];
        $featured_properties->featured_properties_is_active = trim($data["isActive"]);
        $featured_properties->featured_properties_datetime = date("Y-m-d H:i:s");

        checkId($featured_properties->featured_properties_aid);
        $query = checkActive($featured_properties);
        http_response_code(200);
        returnSuccess($featured_properties, "featured_properties", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
