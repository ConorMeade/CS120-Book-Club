<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');
ini_set('display_errors', 1);
// error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
require 'supabaseClient.php';

// $data = json_decode(file_get_contents('php://input'), true);


$result_array = supabase_fetch_books(6);

$data = json_decode($result);


if ($result['status'] === 'success') {
    echo json_encode(["status" => "success", "message" => $data]);
  } else {
    echo json_encode(["status" => "error", "message" => $result['message']]);
  }

?>