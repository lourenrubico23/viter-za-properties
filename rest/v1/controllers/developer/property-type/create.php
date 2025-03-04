<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$property_type = new PropertyType($conn);
// get should not be present

// check data
checkPayload($data);

$property_type->property_type_name = trim($data["property_type_name"]);
$property_type->property_type_description = trim($data["property_type_description"]);
$property_type->property_type_is_active = 1;
$property_type->property_type_created = date("Y-m-d H:i:s");
$property_type->property_type_datetime = date("Y-m-d H:i:s");

// check name
isNameExist($property_type, $property_type->property_type_name);

// create
$query = checkCreate($property_type);

returnSuccess($property_type, "property_type", $query);
