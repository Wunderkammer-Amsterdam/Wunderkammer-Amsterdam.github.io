<?php

require_once('vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$responsePayload = [];

$storagePath = "data/occupancy.json";

if (! file_exists($storagePath)) {
    file_put_contents($storagePath, '[]');
}

$dataPoints = json_decode(file_get_contents($storagePath));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $date = new DateTimeImmutable('now', new DateTimeZone('utc'));

    if (isset($data['occupancy']) and is_numeric($data['occupancy'])) {
        $occupancy = (int) $data['occupancy'];
    } else {
        $occupancy = 'error';
    }

    $responsePayload['on'] = $date->format(DATE_ATOM);
    $responsePayload['occupancy'] = $occupancy;

    if ($responsePayload['occupancy'] !== 'error') {
        $dataPoints = array_slice($dataPoints, 0, 4 * 24 * 7 * 4);

        $dataPoints[] = $responsePayload;
        file_put_contents($storagePath, json_encode($dataPoints));
    }


    header('Content-Type: application/json');

    print json_encode($responsePayload);

    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');

    print json_encode($dataPoints);

    exit();
}
