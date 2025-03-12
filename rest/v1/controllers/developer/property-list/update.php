<?php
$conn = null;
$conn = checkDbConnection();
$list = new PropertyList($conn);
$error = [];
$returnData = [];
if (array_key_exists("listid", $_GET)) {
    // check data
    checkPayload($data);

    $list->list_aid = $_GET['listid'];
    $list->list_name = checkIndex($data, "list_name");
    $list->list_property_type_id = $data["list_property_type_id"];
    $list->list_property_type_name = $data["list_property_type_name"];
    $list->list_property_status_id = $data["list_property_status_id"];
    $list->list_property_status_name = $data["list_property_status_name"];
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
    $list->list_datetime = date("Y-m-d H:i:s");

    $list_img_old = $data["list_img_old"];

    checkId($list->list_aid);

    //checks current data to avoid same entries from being updated
    $list_name_old = checkIndex($data, 'list_name_old');
    compareName($list, $list_name_old, $list->list_name);

    $pendingDeleteFile = $data['pendingDeleteFile'];
    // UPLOAD FILE TO GOOGLDE DRIVE  
    $list->list_img = checkToUploadGoogleDrive(
        $list->list_img, // FILES
        $list_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $list->list_img = checkDeleteGoogleDriveApiFiles(
        $list->list_img, // FILES
        $pendingDeleteFile // TO DELETE FILES
    );

    $query = checkUpdate($list);
    returnSuccess($list, "list", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
