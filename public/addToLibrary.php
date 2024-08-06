<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');
ini_set('display_errors', 1);
// error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
require 'supabaseClient.php';

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['user_id']) &&isset($data['title']) && isset($data['author']) && isset($data['cover']) && isset($data['pages']) && isset($data['summary']) && isset($data['status']) && isset($data['rating'])) {
    $user = $data['user_id'];
    $title = $data['title'];
    $author = $data['author'];
    $cover = $data['cover'];
    $pages = $data['pages'];
    $summary = $data['summary'];
    $status = $data['status'];
    $rating = $data['rating'];

    
    $result = supabase_add_to_library($user, $title, $author, $cover, $pages, $summary, $status, $rating);

    if ($result['status'] === 'success') {
        echo json_encode(["status" => "success"]);
      } else {
        echo json_encode(["status" => "error", "message" => $result['message']]);
      }
} else {
    echo json_encode(["status" => "error", "message" => "Missing required fields. "]);
}

?>