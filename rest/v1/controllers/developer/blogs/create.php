<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$blogs = new Blogs($conn);

// check data
checkPayload($data);

$blogs->blogs_title = checkIndex($data, "blogs_title");
$blogs->blogs_author = checkIndex($data, "blogs_author");
$blogs->blogs_published_date = checkIndex($data, "blogs_published_date");
$blogs->blogs_brief_description = checkIndex($data, "blogs_brief_description");
$blogs->blogs_contents_a = $data["blogs_contents_a"];
$blogs->blogs_contents_b = $data["blogs_contents_b"];
$blogs->blogs_contents_c = $data["blogs_contents_c"];
$blogs->blogs_img = $data["blogs_img"];
$blogs->blogs_is_active = 1;
$blogs->blogs_created = date("Y-m-d H:i:s");
$blogs->blogs_datetime = date("Y-m-d H:i:s");

$blogs_img_old = $data["blogs_img_old"];
// check name
isNameExist($blogs, $blogs->blogs_title);

// UPLOAD FILE TO GOOGLE DRIVE  
$blogs->blogs_img = checkToUploadGoogleDrive(
    $blogs->blogs_img, // FILES
    $blogs_img_old, // OLD FILES
);

// create
$query = checkCreate($blogs);


returnSuccess($blogs, "blogs", $query);

// Return 404 error if endpoint not available
checkEndpoint();
