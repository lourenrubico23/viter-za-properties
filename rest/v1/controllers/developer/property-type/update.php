<?php
$conn = null;
$conn = checkDbConnection();
$property_type = new PropertyType($conn);

if (array_key_exists("property_typeid", $_GET)) {
    // check data
    checkPayload($data);

    $property_type->property_type_aid = $_GET['property_typeid'];
    $property_type->property_type_name = trim($data["property_type_name"]);
    $property_type->property_type_description = trim($data["property_type_description"]);
    $property_type->property_type_datetime = date("Y-m-d H:i:s");
    checkId($property_type->property_type_aid);

    //checks current data to avoid same entries from being updated
    $property_type_name_old = checkIndex($data, 'property_type_name_old');
    compareName($property_type, $property_type_name_old, $property_type->property_type_name);

    $query = checkUpdate($property_type);
    returnSuccess($property_type, "property_type", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
