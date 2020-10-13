<?php

$name = "Undefined name";


if(isset($_POST['name'])){
    $name = $_POST['name'];
}

$message = "<p>Hi!</p>";

if(isset($_POST['msg'])){
    $message = $_POST['msg'];
}

$email .= "<p>Wazaaaaa $name</p>";

if(isset($_POST['email'])){
    $name = $_POST['email'];
}

$to_email = 'demo@schallinterferenz.de';
$subject = 'Mail subject';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = $email;

mail($to_email, $subject, $message, implode("\r\n", $headers));

?>