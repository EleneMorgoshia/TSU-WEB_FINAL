<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $firstName = htmlspecialchars($_POST['firstName'] ?? '', ENT_QUOTES, 'UTF-8');
$lastName = htmlspecialchars($_POST['lastName'] ?? '', ENT_QUOTES, 'UTF-8');
$phoneNumber = htmlspecialchars($_POST['phoneNumber'] ?? '', ENT_QUOTES, 'UTF-8');
$appointmentDate = htmlspecialchars($_POST['appointmentDate'] ?? '', ENT_QUOTES, 'UTF-8');
$appointmentMessage = htmlspecialchars($_POST['message'] ?? '', ENT_QUOTES, 'UTF-8');

    // Create an array with the form data
    $data = [
        'firstName' => $firstName,
        'lastName' => $lastName,
        'phoneNumber' => $phoneNumber,
        'appointmentDate' => $appointmentDate,
        'message' => $appointmentMessage,
        'timestamp' => date('Y-m-d H:i:s')
    ];

    // Convert the array to a JSON string (without pretty print)
    $jsonData = json_encode($data);

    // Append the JSON string to the file with a newline
    $filePath = 'appointment.txt';
    $result = file_put_contents($filePath, $jsonData . PHP_EOL, FILE_APPEND | LOCK_EX);

    if ($result !== false) {
        // Redirect to main page with success message
        header("Location: index.html?success=1");
        exit;
    } else {
        // Check if the file is writable
        if (!is_writable($filePath)) {
            echo "Error: The file $filePath is not writable. Please check file permissions.";
        } else {
            echo "Error saving appointment data.";
        }
        exit;
    }
} else {
    // Redirect to main page if accessed directly
    header("Location: index.html");
    exit;
}
?>
