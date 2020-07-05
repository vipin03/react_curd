<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");

// JUST A TEMPORARY CODE.
// Please Dont Judge !!!!!!!!!!!!!!!!!!!!!!!!!!!!
$server='localhost';
$domain='http';
$user_name='root';
$password='';
$database='react';

$conn = new mysqli($server,$user_name,$password,$database);

// Check connection
if ($conn->connect_errno) {
  echo "Failed to connect to MySQL: " . $conn->connect_error;
  exit();
}
?>