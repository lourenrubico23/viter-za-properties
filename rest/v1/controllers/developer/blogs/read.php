<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
$blogs = new Blogs($conn);

if (array_key_exists("blogsid", $_GET)) {
    $blogs->blogs_aid = $_GET['blogsid'];
    checkId($blogs->blogs_aid);
    $query = checkReadById($blogs);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($blogs);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
