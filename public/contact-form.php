<?php

require_once('vendor/autoload.php');


// Redirect to HTTPS by default (for AppEngine)
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO'])) {
    if ($_SERVER['HTTP_X_FORWARDED_PROTO'] === 'http') {
        header('HTTP/1.1 301 Moved Permanently');
        header('Location: https://'.$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']);
        exit(0);
    } else {
        header('Strict-Transport-Security: max-age=63072000; includeSubDomains; preload');
    }
}

if (!$secret = getenv('GOOGLE_RECAPTCHA_SECRET')) {
    exit('GOOGLE_RECAPTCHA_SECRET env is missing');
}

$recaptcha = new \ReCaptcha\ReCaptcha($secret);
$resp = $recaptcha->setExpectedHostname($_SERVER['SERVER_NAME'])
    ->setExpectedAction($_GET['action'])
    ->setScoreThreshold(0.5)
    ->verify($_GET['token'], $_SERVER['REMOTE_ADDR']);

header('Content-type:application/json');
echo json_encode($resp->toArray());
