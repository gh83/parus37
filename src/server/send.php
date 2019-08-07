
<?php
// phpinfo() ;
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$phone = $_POST['phone'];
$order = $_POST['order'];
$mail = new PHPMailer\PHPMailer\PHPMailer();

// echo "|$name|$email|$text|";
// echo '<pre>';
// print_r($_POST);
// print_r($GLOBALS);

try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'mail.hosting.reg.ru'; // SMTP сервера 
    $mail->Username   = 'mail@parus37.ru'; // Логин на почте
    $mail->Password   = 'Vjhrjdrf2019'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mail@parus37.ru', 'mail@parus37.ru'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('mail@parus37.ru');  
    $mail->addAddress('parus37@inbox.ru'); // Ещё один, если нужен
    // Прикрипление файлов к письму
// if (!empty($_FILES['myfile']['name'][0])) {
//     for ($ct = 0; $ct < count($_FILES['myfile']['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['myfile']['name'][$ct]));
//         $filename = $_FILES['myfile']['name'][$ct];
//         if (move_uploaded_file($_FILES['myfile']['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//         } else {
//             $msg .= 'Неудалось прикрепить файл ' . $uploadfile;
//         }
//     }   
// }
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Новый заказ';
        $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Почта:</b> $email<br><br>
        <b>Телефон:</b> $phone<br><br>
        <b>Заказ:</b> <pre>$order</pre><br><br>
        <b>Сообщение:</b><br>$text";
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


?>