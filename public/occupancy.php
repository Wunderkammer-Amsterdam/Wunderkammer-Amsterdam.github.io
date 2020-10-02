<?php

use Laminas\Json\Json;

require_once('vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$responsePayload = [];

$storagePath = "data/occupancy.json";

if (! file_exists($storagePath)) {
    file_put_contents($storagePath, '[]');
}

$dataPoints = Json::decode(file_get_contents($storagePath));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = Json::decode(file_get_contents('php://input'));

    if (isset($data['occupancy']) and is_numeric($data['occupancy'])) {
        $occupancy = (int) $data['occupancy'];
    } else {
        $occupancy = 'error';
    }

    $responsePayload['occupancy'] = $occupancy;

    if (isset($data['on']) and $date = DateTimeImmutable::createFromFormat(DATE_ATOM, $data['on'])) {
        $responsePayload['on'] = $date->format(DATE_ATOM);
    } else {
        $date = new DateTimeImmutable('now', new DateTimeZone('utc'));
        $responsePayload['on'] = $date->format(DATE_ATOM);
    }


    if ($responsePayload['occupancy'] !== 'error') {
        $dataPoints = array_slice($dataPoints, 0, 4 * 24 * 7 * 4);

        $dataPoints[] = $responsePayload;
        file_put_contents($storagePath, Json::encode($dataPoints));
    }


    header('Content-Type: application/json');

    print Json::encode($responsePayload);

    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');

    print Json::encode($dataPoints);

    exit();
}
