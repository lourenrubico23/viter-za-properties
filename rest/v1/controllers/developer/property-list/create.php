<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$list = new PropertyList($conn);

// check data
checkPayload($data);

$list->list_name = checkIndex($data, "list_name");
$list->list_property_type_id = checkIndex($data, "list_property_type_id");
$list->list_price = checkIndex($data, "list_price");
$list->list_location = $data["list_location"];
$list->list_id = $data["list_id"];
$list->list_floor_area = $data["list_floor_area"];
$list->list_lot_area = $data["list_lot_area"];
$list->list_bedrooms = $data["list_bedrooms"];
$list->list_bathrooms = $data["list_bathrooms"];
$list->list_carport = $data["list_carport"];
$list->list_key_features = $data["list_key_features"];
$list->list_best_buy = $data["list_best_buy"];
$list->list_img = $data["list_img"];
$list->list_is_active = 1;
$list->list_created = date("Y-m-d H:i:s");
$list->list_datetime = date("Y-m-d H:i:s");

$list_img_old = $data["list_img_old"];
// check name
isNameExist($list, $list->list_name);

// UPLOAD FILE TO GOOGLE DRIVE  
$list->list_img = checkToUploadGoogleDrive(
    $list->list_img, // FILES
    $list_img_old, // OLD FILES
);

// create
$query = checkCreate($list);


returnSuccess($list, "list", $query);

// Return 404 error if endpoint not available
checkEndpoint();
