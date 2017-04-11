<?php
require_once __DIR__."/Database.php";

$customerID = $_POST['customerID'];
$citizenID = $_POST['citizenID'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];

$db = new Database();
$db->insert($customerID, $citizenID, $fname, $lname);
?>
