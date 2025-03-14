<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$colors = new Colors($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$isUpdateColors = $data['isUpdateColors'] ?? '';

$colors->colors_datetime = date("Y-m-d H:i:s");

if ($isUpdateColors == "colorsUpdate") {
    $colors->colors_primary = $data["colors_primary"];
    $colors->colors_secondary = $data["colors_secondary"];
    $colors->colors_accent = $data["colors_accent"];
    $colors->colors_light = $data["colors_light"];
    $colors->colors_dark = $data["colors_dark"];
    $query = checkCreate($colors);
}

// Return response
returnSuccess($colors, "colors", $query);

// Return 404 error if endpoint not available
checkEndpoint();
