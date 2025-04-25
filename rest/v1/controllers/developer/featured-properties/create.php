<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$featured_properties = new FeaturedProperties($conn);

// check data
checkPayload($data);

$featured_properties->featured_properties_property_id = checkIndex($data, "featured_properties_property_id");
$featured_properties->featured_properties_property_name = checkIndex($data, "featured_properties_property_name");
$featured_properties->featured_properties_is_active = 1;
$featured_properties->featured_properties_created = date("Y-m-d H:i:s");
$featured_properties->featured_properties_datetime = date("Y-m-d H:i:s");

// create
$query = checkCreate($featured_properties);


returnSuccess($featured_properties, "featured_properties", $query);

// Return 404 error if endpoint not available
checkEndpoint();
