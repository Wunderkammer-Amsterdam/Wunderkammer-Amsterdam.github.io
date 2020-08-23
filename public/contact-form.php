<?php

use Laminas\Mail;
use Laminas\Mail\Transport\Smtp as SmtpTransport;
use Laminas\Mail\Transport\SmtpOptions;

require_once('vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

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

if (! $smtpPassword = $_ENV('SMTP_PASSWORD')) {
    exit('SMTP_PASSWORD env is missing');
}

// @todo make this configurable
$recipient = 'hallo@wonderkamer.com';

$transport = new SmtpTransport();
$transport->setOptions(new SmtpOptions([
    'host'              => 'mail.bushbaby.nl',
    'connection_class'  => 'login',
    'connection_config' => [
        'username' => $recipient,
        'password' => $smtpPassword,
    ],
]));


$data = json_decode(file_get_contents('php://input'), true);

$recaptcha = new \ReCaptcha\ReCaptcha($secret);
$resp = $recaptcha->setExpectedHostname($_SERVER['SERVER_NAME'])
    ->verify($data['reCaptchaToken'], $_SERVER['REMOTE_ADDR']);

$responseJson = [];

header('Content-Type: application/json');

if (! $resp->isSuccess()) {
    foreach ($resp->getErrorCodes() as $code) {
        $responseJson['error'] = 'Er kon helaas geen e-mail verzonden worden';
        $responseJson['detail'] = $code;
    }

    print json_encode($responseJson);

    return;
}


$name = $data['name'] ?: 'none';
$subject = $data['subject'] ?: 'none';
$message = $data['message'] ?: 'none';
$via = $data['via'] ?: 'none';

try {
    $mailToUs = new Mail\Message();

    $body = <<<EOT
Er is een bericht via het contactformulier van de wonderkamer.com website...

Van : $name
Via : $via
Onderwerp : $subject
Bericht : 

$message

EOT;

    $mailToUs->setBody($body);
    $mailToUs->setFrom($recipient);
    if (filter_var($data['via'], FILTER_VALIDATE_EMAIL)) {
        $mailToUs->setReplyTo($data['via']);
    }
    $mailToUs->addTo($recipient, 'Wonderkamer');
    $mailToUs->setSubject('[wonderkamer.com] contact verzoek');

    $transport->send($mailToUs);

    if (filter_var($data['via'], FILTER_VALIDATE_EMAIL)) {
        $mailToInquirer = new Mail\Message();

        $body = <<<EOT
Wat leuk van je te horen! Wij nemen zo snel mogelijk contact met je op.

Met vriendelijke groet,

Wonderkamer
EOT;

        $mailToInquirer->setBody($body);
        $mailToInquirer->setFrom($recipient, 'Wonderkamer');
        $mailToInquirer->addTo($data['via'], $data['name']);
        $mailToInquirer->setSubject('[wonderkamer.com] contact verzoek');

        $transport->send($mailToInquirer);
    }

    $responseJson['success'] = true;

} catch (\Exception $e) {
    $responseJson['error'] = 'Er kon helaas geen e-mail verzonden worden';
    $responseJson['detail'] = $e->getMessage();
}

print json_encode($responseJson);
