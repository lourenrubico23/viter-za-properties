<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/settings/role/Role.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$role = new Role($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key   
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    checkPayload($data);
    $role->role_search = $data['searchValue'];

    if ($data['filterData'] != '') {
        $role->role_is_active = checkIndex($data, 'filterData');

        if ($role->role_search != '') {
            // Search filter
            $query = checkFilterSearch($role);
            http_response_code(200);
            getQueriedData($query);
        }

        // Filter by active
        $query = checkFilterIsActive($role);
        http_response_code(200);
        getQueriedData($query);
    }

    // Search only
    $query = checkSearch($role);
    http_response_code(200);
    getQueriedData($query);

    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
