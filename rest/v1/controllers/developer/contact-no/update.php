<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$contact_no = new ContactNo($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("contactnoid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $contact_no->contact_no_aid = $_GET['contactnoid'];
  $contact_no->contact_no_contact = $data["contact_no_contact"];
  $contact_no->contact_no_email = $data["contact_no_email"];
  $contact_no->contact_no_qr_code = $data["contact_no_qr_code"];
  $contact_no->contact_no_datetime = date("Y-m-d H:i:s");
  checkId($contact_no->contact_no_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];
  $contact_no_qr_code_old = $data["contact_no_qr_code_old"];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $contact_no->contact_no_qr_code = checkToUploadGoogleDrive(
    $contact_no->contact_no_qr_code, // FILES
    $contact_no_qr_code_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $contact_no->contact_no_qr_code = checkDeleteGoogleDriveApiFiles(
    $contact_no->contact_no_qr_code, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($contact_no);
  returnSuccess($contact_no, "contact_no", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
