<?php

require '../../../models/developer/sending-email/SendingEmail.php';
require '../../../core/header.php';
require '../../../notification/contact-form-message.php';
require '../../../recaptcha/verify-recaptcha.php';
require '../../../core/functions.php';

// check database connection
$conn = null;
$conn = checkDbConnection();

$notif = new SendingEmail($conn);
$response = new Response();
$returnData = [];

$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $name = checkIndex($data, "client_name");
    $email = checkIndex($data, "client_email");
    $mobileNumber = checkIndex($data, "client_phone");
    $message = checkIndex($data, "client_message");
    $emailSubject = $data["email_subject"];
    $timeToCall = $data["client_time_to_call"];

    // START OF reCAPTCHA VERIFICATION
    $captchaValue = $data["captchaValue"];
    $captchaResponse = verifyRecaptcha($captchaValue);
    // END OF reCAPTCHA VERIFICATION

    // Fetch email receivers
    $emailReceiver = getResultData($notif->readAllEmail());

    if (empty($emailReceiver)) {
        returnError("Something went wrong, Please try again later.");
    }

    // Extract emails
    $newEmailReceiver = [];
    foreach ($emailReceiver as $row) {
        if (isset($row["notification_email"])) {
            $newEmailReceiver[] = $row["notification_email"];
        }
    }

    // Check if emails exist
    if (empty($newEmailReceiver)) {
        returnError("No email receivers found.");
    }

    // Convert array to a comma-separated string
    $receiverList = implode(', ', $newEmailReceiver);

    if (count($newEmailReceiver) > 0) {
        $mail = sendEmail(
            $name,
            $email,
            $emailSubject,
            $mobileNumber,
            $message,
            $timeToCall,
            implode(', ', $newEmailReceiver)
        );
    }

    if ($mail["mail_success"] == true) {
        $returnData["data"] = $mail;
        $returnData["count"] = 0;
        $returnData["success"] = true;
        $response->setData($returnData);
        $response->send();
        exit;
    } else {
        $returnData["data"] = $mail;
        $returnData["count"] = 0;
        $returnData["success"] = false;
        $response->setData($returnData);
        $response->send();
        exit;
    }
}


http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
