<?php


$e = $_POST['e'];
$n = $_POST['n'];
$m = $_POST['m'];
$u = $_POST['u'];


	require 'class.phpmailer.php';
	$mail = new PHPMailer1();


	$mail->From = $e;
	$mail->FromName = $n;
	$mail->Subject = 'Mensaje Enviado desde Noradariana';
	$mail->CharSet = 'UTF-8';
	$mail->Body = "<b>Mensaje: </b>" . $m . "<br><b>Sitio web: </b>" . $u;
	$mail->IsHTML(true);
	$mail->AddAddress('escribes@noradriana.com', "User Name");
	


if($mail->Send()){
	$respuesta = json_encode( 
		array(
			'err' => false, 
			'mensaje' => 'Campo insertado'
		)
	);
} else { 
	$respuesta = json_encode( 
		array(
			'err' => true, 
			'mensaje' => 'Error al insertar'
		)
	);
}


echo $respuesta;