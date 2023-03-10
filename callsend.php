<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$email = trim($_POST['email']);
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
// $message = htmlspecialchars($_POST['message']);
$tel = htmlspecialchars($_POST["tel"]);
$error = '';

if(!$name)
{
$error .= 'Podaj imię<br />';
}

// Проверка телефона
function ValidateTel($valueTel)
{
$regexTel = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
if($valueTel == "") {
return false;
} else {
$string = preg_replace($regexTel, "", $valueTel);
}
return empty($string) ? true : false;
}
if(!$email)
{
$error .= "Wpisz swój e-mail<br />";
}
if($email && !ValidateTel($email))
{
$error .= "Podaj poprawne dane<br />";
}
// if(!$error)

// if(!$message || strlen($message) < 1)
// {
// $error .= "Введите ваше сообщение<br />";
// }

if(!$error)
{

$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="Zamówienie połączenia";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
/*
$message ="\n\nСообщение: ".$message."\n\nИмя: " .$name."\n\nТелефон: ".$tel."\n\n";
*/
// $message1 ="\n\nImię: ".$name."\n\nNumer telefonu: " .$tel."\n\nE-mail: " .$email."\n\n";	
$message1 ="\n\nImie: ".$name."\n\nTelefon: " .$tel."\n\nE-mail: " .$email."\n\n";	



$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: Wiadomość ze strony internetowej";	
$mail = mail("vldln08@gmail.com", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>