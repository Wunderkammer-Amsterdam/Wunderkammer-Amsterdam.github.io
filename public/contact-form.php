<?php

require_once('vendor/autoload.php');

exit('ello');

$recaptcha = new \ReCaptcha\ReCaptcha($secret);

$resp = $recaptcha->setExpectedHostname('recaptcha-demo.appspot.com')
    ->setExpectedAction('homepage')
    ->setScoreThreshold(0.5)
    ->verify($gRecaptchaResponse, $remoteIp);

if ($resp->isSuccess()) {
    // Verified!
} else {
    $errors = $resp->getErrorCodes();
}
