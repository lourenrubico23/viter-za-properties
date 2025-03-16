<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require 'functions.php';
require '../../../models/developer/property-list/PropertyList.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$list = new PropertyList($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    // get data

    // get data
    $list->list_search = $data["searchValue"];

    if ($data["isFilter"]) {
        $list->list_property_status_id = $data["list_property_status_id"];
        $list->list_location = $data["list_location"];
        $list->list_property_type_id = $data["list_property_type_id"];

        // filter by search, property status, location and property type
        if ($list->list_property_type_id != "" && $list->list_location != "" && $list->list_property_status_id != "" && $list->list_search != "") {
            $query = checkfilterBySearchStatusAndLocationAndPropertyType($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by property status, location and property type
        if ($list->list_property_type_id != "" && $list->list_location != "" && $list->list_property_status_id != "") {
            $query = checkFilterByPropertyStatusAndLocationAndPropertyType($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by search, location and property type
        if ($list->list_property_type_id != "" && $list->list_location != "" && $list->list_search != "") {
            $query = checkFilterBySearchLocationAndPropertyType($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by search, property status and property type
        if ($list->list_search != "" && $list->list_property_status_id != "" && $list->list_property_type_id != "") {
            $query = checkFilterBySearchStatusAndPropertyType($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by search, property status and location
        if ($list->list_search != "" && $list->list_property_status_id != "" && $list->list_location != "") {
            $query = checkFilterBySearchStatusAndLocation($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by search and property type
        if ($list->list_search != "" && $list->list_property_type_id != "") {
            $query = checkSearchAndPropertyType($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by search and location
        if ($list->list_search != "" && $list->list_location != "") {
            $query = checkSearchAndLocation($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by property status and property type
        if ($list->list_property_status_id != "" && $list->list_property_type_id != "") {
            $query = checkFilterByPropertyStatusAndPropertyType($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by property status and location
        if ($list->list_property_status_id != "" && $list->list_location != "") {
            $query = checkFilterByPropertyStatusAndLocation($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by location and property type
        if ($list->list_property_type_id != "" && $list->list_location != "") {
            $query = checkFilterByLocationAndPropertyType($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by search and property status
        if ($list->list_search != "" && $list->list_property_status_id != "") {
            $query = checkSearchAndPropertyStatus($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by property status
        if ($list->list_property_status_id != "") {
            $query = checkFilterByPropertyStatus($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by location
        if ($list->list_location != "") {
            $query = checkFilterByLocation($list);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by property type
        if ($list->list_property_type_id != "") {
            $query = checkFilterByPropertyType($list);
            http_response_code(200);
            getQueriedData($query);
        }
    }

    checkKeyword($list->list_search);
    $query = checkSearch($list);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
