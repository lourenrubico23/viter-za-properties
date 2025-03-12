<?php
$conn = null;
$conn = checkDbConnection();
$notification = new Notification($conn);

if (array_key_exists("notificationid", $_GET)) {
    // check data
    checkPayload($data);

    $notification->notification_aid = $_GET['notificationid'];
    $notification->notification_name = trim($data["notification_name"]);
    $notification->notification_email = trim($data["notification_email"]);
    $notification->notification_phone = trim($data["notification_phone"]);
    $notification->notification_datetime = date("Y-m-d H:i:s");
    checkId($notification->notification_aid);

    //checks current data to avoid same entries from being updated
    $notification_name_old = checkIndex($data, 'notification_name_old');
    compareName($notification, $notification_name_old, $notification->notification_name);


    $query = checkUpdate($notification);
    returnSuccess($notification, "notification", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
