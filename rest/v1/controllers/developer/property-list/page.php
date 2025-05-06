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
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $list->list_start = $_GET['start'];
        $list->list_total = 6;

        checkLimitId($list->list_start, $list->list_total);
        $query = checkReadLimit($list);
        $total_result = checkReadAll($list);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $list->list_total,
            $list->list_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
