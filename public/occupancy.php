<?php

use Laminas\Json\Json;

require_once('vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$newDataPoint = [];

$storagePath = "data/occupancy.json";

if (! file_exists($storagePath)) {
    file_put_contents($storagePath, '[]');
}
error_reporting(E_ALL);
ini_set('display_errors', 'on');

class DataPoint implements JsonSerializable
{
    /** @var DateTimeImmutable */
    private $on;

    /** @var int */
    private $occupancy;

    private function __construct()
    {
    }

    static function fromArray(array $data): self
    {
        $dataPoint = new static();

        $dataPoint->setOn(DateTimeImmutable::createFromFormat(DATE_ATOM, $data['on']));
        $dataPoint->setOccupancy($data['occupancy']);

        return $dataPoint;
    }

    public function on(): DateTimeImmutable
    {
        return $this->on;
    }

    public function occupancy(): int
    {
        return $this->occupancy;
    }

    private function setOn(DateTimeImmutable $on): self
    {
        $this->on = $on;

        return $this;
    }

    private function setOccupancy(int $occupancy): self
    {
        $this->occupancy = $occupancy;

        return $this;
    }

    public function jsonSerialize()
    {
        return ['on'=>$this->on()->format(DATE_ATOM), 'occupancy'=>$this->occupancy];
    }
}

$dataPoints = Json::decode(file_get_contents($storagePath), Json::TYPE_ARRAY);

$dataPoints = array_map(function (array $data): DataPoint {
    return DataPoint::fromArray($data);
}, $dataPoints);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = Json::decode(file_get_contents('php://input'), Json::TYPE_ARRAY);

    if (isset($data['occupancy']) and is_numeric($data['occupancy'])) {
        $occupancy = (int) $data['occupancy'];
    } else {
        $occupancy = 'error';
    }

    $newDataPoint['occupancy'] = $occupancy;

    if (isset($data['on']) and $date = DateTimeImmutable::createFromFormat(DATE_ATOM, $data['on'])) {
        $newDataPoint['on'] = $date->format(DATE_ATOM);
    } else {
        $date = new DateTimeImmutable('now', new DateTimeZone('utc'));
        $newDataPoint['on'] = $date->format(DATE_ATOM);
    }

    if ($newDataPoint['occupancy'] !== 'error') {

        $newDataPoint = DataPoint::fromArray($newDataPoint);

        $dataPoints[] = $newDataPoint;

        usort($dataPoints, function ($dataA, $dataB) {
            return $dataA->on() <=> $dataB->on();
        });
        $tresholdDate = (new DateTime('now', new DateTimeZone('utc')))->sub(new DateInterval('P58D'));
        $dataPoints = array_filter($dataPoints, function(DataPoint $dataPoint) use( $tresholdDate):bool {
            return $dataPoint->on() >= $tresholdDate;
        });

        file_put_contents($storagePath, Json::encode(array_values($dataPoints)));
    }

    header('Content-Type: application/json');

    print Json::encode($newDataPoint);

    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');

    print Json::encode($dataPoints);

    exit();
}
