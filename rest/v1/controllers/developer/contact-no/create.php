<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$contact_no = new ContactNo($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$contact_no->contact_no_contact = $data["contact_no_contact"];
$contact_no->contact_no_created = date("Y-m-d H:i:s");
$contact_no->contact_no_datetime = date("Y-m-d H:i:s");

// //checks newly added data if it already exists
// isNameExist($contact_no, $contact_no->contact_no_name);

$query = checkCreate($contact_no);

returnSuccess($contact_no, "contact_no", $query);
