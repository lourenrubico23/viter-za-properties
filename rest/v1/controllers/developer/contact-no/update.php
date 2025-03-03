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
  $contact_no->contact_no_datetime = date("Y-m-d H:i:s");
  checkId($contact_no->contact_no_aid);


  // //checks current data to avoid same entries from being updated
  // $user_other_contact_no_fname_old = checkIndex($data, 'user_other_contact_no_fname_old');
  // compareName($contact_no, $user_other_contact_no_fname_old, $contact_no->user_other_contact_no_fname);

  // update
  $query = checkUpdate($contact_no);
  returnSuccess($contact_no, "contact_no", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
