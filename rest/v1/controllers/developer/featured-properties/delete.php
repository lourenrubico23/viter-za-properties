<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$featured_properties = new FeaturedProperties($conn);

if (array_key_exists("featured_propertiesid", $_GET)) {
  // check data
  checkPayload($data);
  $featured_properties->featured_properties_aid = $_GET['featured_propertiesid'];
  checkId($featured_properties->featured_properties_aid);
  // delete

  $query = checkDelete($featured_properties);
  returnSuccess($featured_properties, "featured_properties", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
