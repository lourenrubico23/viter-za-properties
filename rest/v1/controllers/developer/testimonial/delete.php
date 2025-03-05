<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$testimonial = new testimonial($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("testimonialid", $_GET)) {
  // get data
  $testimonial->testimonial_aid = $_GET['testimonialid'];
  checkId($testimonial->testimonial_aid);

  $query = checkDelete($testimonial);
  returnSuccess($testimonial, "testimonial", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
