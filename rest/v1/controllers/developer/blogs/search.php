<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
// require 'functions.php';
require '../../../models/developer/blogs/Blogs.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$blogs = new Blogs($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    // get data
    $blogs->blogs_search = $data["searchValue"];
    checkKeyword($blogs->blogs_search);
    $query = checkSearch($blogs);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
