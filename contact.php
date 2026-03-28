<?php
include("includes/db.php");

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO messages (name, email, message)
        VALUES ('$name', '$email', '$message')";

if ($conn->query($sql)) {
    echo "success";
} else {
    echo "error";
}
?>