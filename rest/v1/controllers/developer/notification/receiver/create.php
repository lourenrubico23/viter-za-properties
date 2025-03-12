<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$notification = new Notification($conn);

// check data
checkPayload($data);

$notification->notification_name = trim($data["notification_name"]);
$notification->notification_email = trim($data["notification_email"]);
$notification->notification_phone = trim($data["notification_phone"]);
$notification->notification_is_active = 1;
$notification->notification_created = date("Y-m-d H:i:s");
$notification->notification_datetime = date("Y-m-d H:i:s");

// check name
isNameExist($notification, $notification->notification_name);

// create
$query = checkCreate($notification);
returnSuccess($notification, "notification", $query);
