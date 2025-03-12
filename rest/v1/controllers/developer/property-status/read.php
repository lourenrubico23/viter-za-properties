<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
$property_status = new PropertyStatus($conn);

if (array_key_exists("property_statusid", $_GET)) {
    $property_status->property_status_aid = $_GET['property_statusid'];
    checkId($property_status->property_status_aid);
    $query = checkReadById($property_status);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($property_status);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
