<?php

function getHtmlSendMessage(
  $name,
  $email,
  $mobileNumber,
  $message,
) {


  $html = '
  <style>
  @import url("https://fonts.cdnfonts.com/css/Helvetica Neue-neue-9");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  p {
    font-size: 14px;
  }
</style>
 <body
    style="
      background-color: #f0f0f0;
      font-family: Helvetica Neue, sans-serif;
      line-height: 1.6;
      padding: 10px 0;
      background-color: #fff;
    "
  >
    <div>
      <div>
        <p style="margin-bottom: 5px; margin-top: 5px"><b>From: </b>' . $name . '</p> 
        <p style="margin-bottom: 5px; margin-top: 5px"><b>Email:  </b>' . $email . '</p>
        <p style="margin-bottom: 5px; margin-top: 5px"><b>Mobile Number:  </b>' . $mobileNumber . '</p>
        <div style="margin-bottom: 20px">
          <p style="margin-top: 5px"><b>Message: </b></p>
          <p>
            ' . $message . '
          </p>
        </div>
      </div> 
    </div>
  </body>
';
  return $html;
}
