<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$testimonial = new Testimonial($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("testimonialid", $_GET)) {
  $testimonial->testimonial_aid = $_GET['testimonialid'];
  checkId($testimonial->testimonial_aid);
  $query = checkReadAll($testimonial);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($testimonial);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
