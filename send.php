<?php
$username = $_POST['username'];
$email = $_POST['email'];
$formtext = $_POST['formtext'];
$username = htmlspecialchars($username);
$email = htmlspecialchars($email);
$formtext = htmlspecialchars($formtext);
$username = urldecode($username);
$email = urldecode($email);
$formtext = urldecode($formtext);
$username = trim($username);
$email = trim($email);
$formtext = trim($formtext);

if (mail("vldln08@gmail.com", "Wiadomość ze strony internetowej", "Imię: ".$username.". E-mail: ".$email.". Wiadomość.:".$formtext))
 {     require('index.html');
} else {
    echo "Error";
}?>