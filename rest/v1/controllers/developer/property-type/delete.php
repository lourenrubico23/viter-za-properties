<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$property_type = new PropertyType($conn);

if (array_key_exists("property_typeid", $_GET)) {
    // check data
    checkPayload($data);
    $property_type->property_type_aid = $_GET['property_typeid'];
    checkId($property_type->property_type_aid);
    // delete 
    // isUserOtherAssociated($property_type);
    $query = checkDelete($property_type);

    returnSuccess($property_type, "property_type", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
