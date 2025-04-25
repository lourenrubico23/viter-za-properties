<?php
$conn = null;
$conn = checkDbConnection();
$featured_properties = new FeaturedProperties($conn);
$error = [];
$returnData = [];
if (array_key_exists("featured_propertiesid", $_GET)) {
    // check data
    checkPayload($data);

    $featured_properties->featured_properties_aid = $_GET['featured_propertiesid'];
    $featured_properties->featured_properties_property_id = checkIndex($data, "featured_properties_property_id");
    $featured_properties->featured_properties_property_name = $data["featured_properties_property_name"];
    $featured_properties->featured_properties_datetime = date("Y-m-d H:i:s");

    checkId($featured_properties->featured_properties_aid);

    $query = checkUpdate($featured_properties);
    returnSuccess($featured_properties, "featured_properties", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
