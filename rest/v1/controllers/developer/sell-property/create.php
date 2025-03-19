<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$sell = new SellProperty($conn);
// get should not be present

// check data
checkPayload($data);
// get data

// Get the type of create action (logo, navigation, banner)
$isUpdateSellProperty = $data['isUpdateSellProperty'] ?? '';

// Set common fields
$sell->sell_datetime = date("Y-m-d H:i:s");


if ($isUpdateSellProperty == "sellPropertyUpdate") {
    $sell->sell_title = $data["sell_title"];
    $sell->sell_description = $data["sell_description"];
    $sell->sell_button = $data["sell_button"];

    $query = checkCreate($sell);
}
if ($isUpdateSellProperty == "buyPropertyUpdate") {
    $sell->sell_buy_title = $data["sell_buy_title"];
    $sell->sell_buy_description = $data["sell_buy_description"];
    $sell->sell_buy_button = $data["sell_buy_button"];
    $query = checkCreateBuyProperty($sell);
}

// Return response
returnSuccess($sell, "sell", $query);

// Return 404 error if endpoint not available
checkEndpoint();
