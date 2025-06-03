<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $destination = htmlspecialchars($_POST['destination']);
    $country = htmlspecialchars($_POST['country']);
    $date = htmlspecialchars($_POST['date']);
    $duration = htmlspecialchars($_POST['duration']);
    $budget = htmlspecialchars($_POST['budget']);
    $type = htmlspecialchars($_POST['type']);
    $notes = htmlspecialchars($_POST['notes']);
} else {
    header("Location: plan.html");
    exit();
}
?>

