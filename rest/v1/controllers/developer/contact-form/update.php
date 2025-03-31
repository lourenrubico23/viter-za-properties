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
  // check data
  checkPayload($data);
  // get data

  $isUpdateContactUs = $data['isUpdateContactUs'];

  if ($isUpdateContactUs == "ContactUsUpdate") {

    $contact_form->form_aid = $_GET['contactformid'];
    $contact_form->form_page = $data["form_page"];
    $contact_form->form_label = $data["form_label"];
    $contact_form->form_title = $data["form_title"];
    $contact_form->form_facebook = $data["form_facebook"];
    $contact_form->form_instagram = $data["form_instagram"];
    $contact_form->form_linkedIn = $data["form_linkedIn"];
    $contact_form->form_address = $data["form_address"];
    $contact_form->form_description = $data["form_description"];
    $contact_form->form_contact_description = $data["form_contact_description"];
    $contact_form->form_contact_disclaimer = $data["form_contact_disclaimer"];
    $contact_form->form_datetime = date("Y-m-d H:i:s");
    checkId($contact_form->form_aid);


    // update
    $query = checkUpdate($contact_form);
  }
  returnSuccess($contact_form, "contact_form", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
