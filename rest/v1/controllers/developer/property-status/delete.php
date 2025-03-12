<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$property_status = new PropertyStatus($conn);

if (array_key_exists("property_statusid", $_GET)) {
    // check data
    checkPayload($data);
    $property_status->property_status_aid = $_GET['property_statusid'];
    checkId($property_status->property_status_aid);
    // delete 
    isAssociatedCheckMenuAssociation($property_status);
    $query = checkDelete($property_status);

    returnSuccess($property_status, "property_status", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
