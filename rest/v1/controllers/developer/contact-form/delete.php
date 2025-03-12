<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$contact_form = new ContactForm($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("contactformid", $_GET)) {
  // get data
  $contact_form->form_aid = $_GET['contactformid'];
  checkId($contact_form->form_aid);


  $query = checkDelete($contact_form);

  returnSuccess($contact_form, "contact_form", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
