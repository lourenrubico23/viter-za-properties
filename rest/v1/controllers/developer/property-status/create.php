<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$property_status = new PropertyStatus($conn);
// get should not be present

// check data
checkPayload($data);

$property_status->property_status_name = trim($data["property_status_name"]);
$property_status->property_status_description = trim($data["property_status_description"]);
$property_status->property_status_is_active = 1;
$property_status->property_status_created = date("Y-m-d H:i:s");
$property_status->property_status_datetime = date("Y-m-d H:i:s");

// check name
isNameExist($property_status, $property_status->property_status_name);

// create
$query = checkCreate($property_status);

returnSuccess($property_status, "property_status", $query);
