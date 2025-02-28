<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

include_once("mail-config.php");
include_once("template/contact-form-message.php");

function sendEmail(
	$name,
	$email,
	$mobileNumber,
	$message,
	$newEmailReceiver
) {
	//trigger exception in a "try" block
	try {
		$mail = new PHPMailer(true);
		$mail->CharSet = "UTF-8";
		$mail->isSMTP();
		$mail->Host = 'mail.frontlinebusiness.com.ph';
		$mail->Port = 465;
		$mail->SMTPSecure = "ssl";
		// $mail->Host = 'smtp.gmail.com'; // if gmail use smtp.gmail.com
		// $mail->Port = 587;
		// $mail->SMTPSecure = "tls";
		$mail->SMTPAuth = true;
		$mail->Username = USERNAME; // if gmail use your gmail email
		$mail->Password = PASSWORD; // if gmail use your email password
		$mail->Subject = "You Have a New Inquiry from D' Container Cafe Hub";
		$mail->setFrom(USERNAME, FROM);
		$mail->isHTML(true);
		$mail->Body = getHtmlSendMessage(
			$name,
			$email,
			$mobileNumber,
			$message
		);

		// If email list is not empty
		if (!empty($newEmailReceiver)) {
			// Ensure $newEmailReceiver is an array
			if (!is_array($newEmailReceiver)) {
				$newEmailReceiver = explode(',', $newEmailReceiver); // Convert string to array 
			}

			// Add each email separately
			foreach ($newEmailReceiver as $receiver) {
				$mail->addAddress(trim($receiver)); // Trim and add each email
			}

			// Send email
			if ($mail->send()) {
				return array(
					"mail_success" => true,
					"error" => "No Error.",
					"email" => implode(", ", $newEmailReceiver), // Return all emails
				);
			} else {
				return array(
					"error" => "Could not send email. Please refresh your page and try again.",
					"mail_success" => false
				);
			}
		} else {
			// If email is empty, return an error
			return array(
				"error" => "No email receiver found!",
				"mail_success" => false
			);
		}
	}

	//catch exception
	catch (Exception $e) {
		return array(
			"mail_error" => $e->getMessage(),
			"error" => "Could not authenticate. Please make sure your email and password are correct.",
			"mail_success" => false
		);
	}
}
