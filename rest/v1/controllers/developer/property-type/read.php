<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
$property_type = new PropertyType($conn);

if (array_key_exists("property_typeid", $_GET)) {
    $property_type->property_type_aid = $_GET['property_typeid'];
    checkId($property_type->property_type_aid);
    $query = checkReadById($property_type);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($property_type);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
