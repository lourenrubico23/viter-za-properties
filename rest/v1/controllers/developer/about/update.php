<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$about = new About($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("aboutid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $about->about_aid = $_GET['aboutid'];
  $about->about_img = $data["about_img"];
  $about->about_logo_img = $data["about_logo_img"];
  $about->about_name = $data["about_name"];
  $about->about_paragraph_a = $data["about_paragraph_a"];
  $about->about_paragraph_b = $data["about_paragraph_b"];
  $about->about_paragraph_c = $data["about_paragraph_c"];
  $about->about_datetime = date("Y-m-d H:i:s");

  $about_img_old = $data["about_img_old"];
  $about_logo_img_old = $data["about_logo_img_old"];


  checkId($about->about_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $about->about_img = checkToUploadGoogleDrive(
    $about->about_img, // FILES
    $about_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $about->about_img = checkDeleteGoogleDriveApiFiles(
    $about->about_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $about->about_logo_img = checkToUploadGoogleDrive(
    $about->about_logo_img, // FILES
    $about_logo_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $about->about_logo_img = checkDeleteGoogleDriveApiFiles(
    $about->about_logo_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );


  // update
  $query = checkUpdate($about);
  returnSuccess($about, "about", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
