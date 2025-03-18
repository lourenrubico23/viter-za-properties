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
$contact_no->contact_no_email = $data["contact_no_email"];
$contact_no->contact_no_qr_code = $data["contact_no_qr_code"];
$contact_no->contact_no_copyright = $data["contact_no_copyright"];
$contact_no->contact_no_created = date("Y-m-d H:i:s");
$contact_no->contact_no_datetime = date("Y-m-d H:i:s");

$contact_no_qr_code_old = $data["contact_no_qr_code_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$contact_no->contact_no_qr_code = checkToUploadGoogleDrive(
    $contact_no->contact_no_qr_code, // FILES
    $contact_no_qr_code_old, // OLD FILES
);

$query = checkCreate($contact_no);

returnSuccess($contact_no, "contact_no", $query);
