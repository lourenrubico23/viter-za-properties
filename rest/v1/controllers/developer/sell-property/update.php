<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$sell = new SellProperty($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("sellid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateSellProperty = $data['isUpdateSellProperty'];


  if ($isUpdateSellProperty == "sellPropertyUpdate") {
    $sell->sell_aid = $_GET['sellid'];
    $sell->sell_title = $data["sell_title"];
    $sell->sell_description = $data["sell_description"];
    $sell->sell_button = $data["sell_button"];

    $sell->sell_datetime = date("Y-m-d H:i:s");
    checkId($sell->sell_aid);

    // update
    $query = checkUpdate($sell);
    returnSuccess($sell, "sell", $query);
  }
  if ($isUpdateSellProperty == "buyPropertyUpdate") {
    $sell->sell_aid = $_GET['sellid'];
    $sell->sell_buy_title = $data["sell_buy_title"];
    $sell->sell_buy_description = $data["sell_buy_description"];
    $sell->sell_buy_button = $data["sell_buy_button"];

    $sell->sell_datetime = date("Y-m-d H:i:s");
    checkId($sell->sell_aid);
    // update
    $query = checkUpdateBuyProperty($sell);
    returnSuccess($sell, "sell", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
