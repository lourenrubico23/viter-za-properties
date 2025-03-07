<?php
$conn = null;
$conn = checkDbConnection();
$blogs = new Blogs($conn);
$error = [];
$returnData = [];
if (array_key_exists("blogsid", $_GET)) {
    // check data
    checkPayload($data);

    $blogs->blogs_aid = $_GET['blogsid'];
    $blogs->blogs_title = checkIndex($data, "blogs_title");
    $blogs->blogs_author = checkIndex($data, "blogs_author");
    $blogs->blogs_published_date = checkIndex($data, "blogs_published_date");
    $blogs->blogs_brief_description = checkIndex($data, "blogs_brief_description");
    $blogs->blogs_contents_a = $data["blogs_contents_a"];
    $blogs->blogs_contents_b = $data["blogs_contents_b"];
    $blogs->blogs_contents_c = $data["blogs_contents_c"];
    $blogs->blogs_img = $data["blogs_img"];
    $blogs->blogs_datetime = date("Y-m-d H:i:s");

    $blogs_img_old = $data["blogs_img_old"];

    checkId($blogs->blogs_aid);

    //checks current data to avoid same entries from being updated
    $blogs_title_old = checkIndex($data, 'blogs_title_old');
    compareName($blogs, $blogs_title_old, $blogs->blogs_title);

    $pendingDeleteFile = $data['pendingDeleteFile'];
    // UPLOAD FILE TO GOOGLDE DRIVE  
    $blogs->blogs_img = checkToUploadGoogleDrive(
        $blogs->blogs_img, // FILES
        $blogs_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $blogs->blogs_img = checkDeleteGoogleDriveApiFiles(
        $blogs->blogs_img, // FILES
        $pendingDeleteFile // TO DELETE FILES
    );

    $query = checkUpdate($blogs);
    returnSuccess($blogs, "blogs", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
