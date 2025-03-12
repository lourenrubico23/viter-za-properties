<?php
$conn = null;
$conn = checkDbConnection();
$property_status = new PropertyStatus($conn);

if (array_key_exists("property_statusid", $_GET)) {
    // check data
    checkPayload($data);

    $property_status->property_status_aid = $_GET['property_statusid'];
    $property_status->property_status_name = trim($data["property_status_name"]);
    $property_status->property_status_description = trim($data["property_status_description"]);
    $property_status->property_status_datetime = date("Y-m-d H:i:s");
    checkId($property_status->property_status_aid);

    //checks current data to avoid same entries from being updated
    $property_status_name_old = checkIndex($data, 'property_status_name_old');
    compareName($property_status, $property_status_name_old, $property_status->property_status_name);

    $query = checkUpdate($property_status);
    returnSuccess($property_status, "property_status", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
