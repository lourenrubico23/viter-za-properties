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
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $blogs->blogs_start = $_GET['start'];
        $blogs->blogs_total = 10;

        checkLimitId($blogs->blogs_start, $blogs->blogs_total);
        $query = checkReadLimit($blogs);
        $total_result = checkReadAll($blogs);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $blogs->blogs_total,
            $blogs->blogs_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
