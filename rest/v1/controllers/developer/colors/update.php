<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$colors = new Colors($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("colorsid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateColors = $data['isUpdateColors'];
  $colors->colors_datetime = date("Y-m-d H:i:s");

  if ($isUpdateColors == "colorsUpdate") {
    $colors->colors_aid = $_GET['colorsid'];
    $colors->colors_primary = $data["colors_primary"];
    $colors->colors_secondary = $data["colors_secondary"];
    $colors->colors_accent = $data["colors_accent"];
    $colors->colors_light = $data["colors_light"];
    $colors->colors_dark = $data["colors_dark"];

    checkId($colors->colors_aid);
    // update
    $query = checkUpdate($colors);
  }

  returnSuccess($colors, "colors", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
