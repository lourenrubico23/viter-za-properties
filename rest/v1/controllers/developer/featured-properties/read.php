<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
$featured_properties = new FeaturedProperties($conn);

if (array_key_exists("featured_propertiesid", $_GET)) {
    $featured_properties->featured_properties_aid = $_GET['featured_propertiesid'];
    checkId($featured_properties->featured_properties_aid);
    $query = checkReadById($featured_properties);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($featured_properties);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
