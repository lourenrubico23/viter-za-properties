<?php


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$sell = new SellProperty($conn);

if (array_key_exists("sellid", $_GET)) {
    // get data
    $sell->sell_aid = $_GET['sellid'];
    checkId($sell->sell_aid);

    $query = checkDelete($sell);

    returnSuccess($sell, "sell", $query);
}

checkEndpoint();
