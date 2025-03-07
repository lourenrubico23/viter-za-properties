<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/blogs/Blogs.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$blogs = new Blogs($conn);
$response = new Response();
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("blogsid", $_GET)) {
        // check data
        checkPayload($data);

        $blogs->blogs_aid = $_GET['blogsid'];
        $blogs->blogs_is_active = trim($data["isActive"]);
        $blogs->blogs_datetime = date("Y-m-d H:i:s");

        checkId($blogs->blogs_aid);
        $query = checkActive($blogs);
        http_response_code(200);
        returnSuccess($blogs, "blogs", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
