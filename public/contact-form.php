<?php

require_once('vendor/autoload.php');


// Redirect to HTTPS by default (for AppEngine)
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO'])) {
    if ($_SERVER['HTTP_X_FORWARDED_PROTO'] === 'http') {
        header('HTTP/1.1 301 Moved Permanently');
        header('Location: https://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']);
        exit(0);
    } else {
        header('Strict-Transport-Security: max-age=63072000; includeSubDomains; preload');
        header('Access-Control-Allow-Origin: *');
    }
}

if (! $secret = getenv('GOOGLE_RECAPTCHA_SECRET')) {
    exit('GOOGLE_RECAPTCHA_SECRET env is missing');
}

$recipient = 'baskamer@gmail.com';

$data = json_decode(file_get_contents('php://input'), true);

$recaptcha = new \ReCaptcha\ReCaptcha($secret);
$resp = $recaptcha->setExpectedHostname($_SERVER['SERVER_NAME'])
    //->setExpectedAction($_POST['action'])
    //->setScoreThreshold(0.5)
    ->verify($data['reCaptachToken'], $_SERVER['REMOTE_ADDR']);

$responseJson = [];

header('Content-Type: application/json');

if (! $resp->isSuccess()) {
    foreach ($resp->getErrorCodes() as $code) {
        $responseJson['error'] = $code;
    }

    print json_encode($responseJson);

    return;
}


$name = $data['name'] ?: 'none';
$subject = $data['subject'] ?: 'none';
$message = $data['message'] ?: 'none';
$via = $data['via'] ?: 'none';

$body = <<<EOT
Er is een bericht via het contactformulier van de wunderkammeramsterdam.nl website...

Van : $name
Via : $via
Onderwerp : $subject
Bericht : 

$message

EOT;


if (mail($recipient, "[wunderkammeramsterdam.nl] contact verzoek", $body)) {
    $responseJson['success'] = true;

    if (filter_var($data['via'], FILTER_VALIDATE_EMAIL)) {
        $body = sprintf("Wat leuk van je te horen! Ik neem zo snel mogelijk contact met je op. \n\nMet groet, Eric");
        mail($data['via'], "[wunderkammeramsterdam.nl] terugbelafspraak", $body);
    }
} else {
    $responseJson['error'] = 'Er kon helaas geen e-mail verzonden worden';
}

print json_encode($responseJson);
