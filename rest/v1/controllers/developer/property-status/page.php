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
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $property_status->property_status_start = $_GET['start'];
        $property_status->property_status_total = 10;

        checkLimitId($property_status->property_status_start, $property_status->property_status_total);
        $query = checkReadLimit($property_status);
        $total_result = checkReadAll($property_status);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $property_status->property_status_total,
            $property_status->property_status_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
