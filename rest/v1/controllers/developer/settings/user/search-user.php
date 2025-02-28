<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/settings/user/User.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user = new User($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key   
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    checkPayload($data);
    $user->user_search = $data['searchValue'];
    $query = checkSearchUser($user);
    http_response_code(200);
    getQueriedData($query);

    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
