<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$contact_form = new ContactForm($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateContactUs = $data['isUpdateContactUs'] ?? '';

if ($isUpdateContactUs == "ContactUsUpdate") {

    $contact_form->form_page = $data["form_page"];
    $contact_form->form_label = $data["form_label"];
    $contact_form->form_title = $data["form_title"];
    $contact_form->form_facebook = $data["form_facebook"];
    $contact_form->form_instagram = $data["form_instagram"];
    $contact_form->form_linkedIn = $data["form_linkedIn"];
    $contact_form->form_address = $data["form_address"];
    $contact_form->form_description = $data["form_description"];
    $contact_form->form_contact_description = $data["form_contact_description"];
    $contact_form->form_created = date("Y-m-d H:i:s");
    $contact_form->form_datetime = date("Y-m-d H:i:s");


    $query = checkCreate($contact_form);
}

returnSuccess($contact_form, "contact_form", $query);
