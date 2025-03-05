<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$testimonial = new Testimonial($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$testimonial->testimonial_name = $data["testimonial_name"];
$testimonial->testimonial_occupation = $data["testimonial_occupation"];
$testimonial->testimonial_feedback = $data["testimonial_feedback"];
$testimonial->testimonial_created = date("Y-m-d H:i:s");
$testimonial->testimonial_datetime = date("Y-m-d H:i:s");


$query = checkCreate($testimonial);

returnSuccess($testimonial, "testimonial", $query);
