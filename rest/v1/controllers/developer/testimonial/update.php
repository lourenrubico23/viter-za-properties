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
  // check data
  checkPayload($data);
  // get data
  $testimonial->testimonial_aid = $_GET['testimonialid'];
  $testimonial->testimonial_name = $data["testimonial_name"];
  $testimonial->testimonial_occupation = $data["testimonial_occupation"];
  $testimonial->testimonial_feedback = $data["testimonial_feedback"];
  $testimonial->testimonial_datetime = date("Y-m-d H:i:s");


  checkId($testimonial->testimonial_aid);

  // update
  $query = checkUpdate($testimonial);
  returnSuccess($testimonial, "testimonial", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
