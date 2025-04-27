<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require 'functions.php';
require '../../../models/developer/featured-properties/FeaturedProperties.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$featured_properties = new FeaturedProperties($conn);
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $featured_properties->featured_properties_start = $_GET['start'];
        $featured_properties->featured_properties_total = 6;

        checkLimitId($featured_properties->featured_properties_start, $featured_properties->featured_properties_total);
        $query = checkReadLimit($featured_properties);
        $total_result = checkReadAll($featured_properties);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $featured_properties->featured_properties_total,
            $featured_properties->featured_properties_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
