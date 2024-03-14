<?php
// Database credentials
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $cowID = $_POST["cowID"];
    $quantity = $_POST["quantity"];
    $fatContent = $_POST["fatContent"];
    $collectionDate = $_POST["collectionDate"];

    // SQL to insert data into table
    $sql = "INSERT INTO milk_collection (cow_id, quantity, fat_content, collection_date) VALUES ('$cowID', '$quantity', '$fatContent', '$collectionDate')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
