<?php

	$tex = 'Hortencia';

	$n1 = 10;
$n2 ='15';

	$arrayN = array('Jose','Arturo','Pablo');

	$arrayA = array ('Nombre' => 'Jos�', 'Edad' => 20);

	$bool = true;

//Funcion var_dump()

echo '<pre>';

	var_dump($arrayA);

	echo '</pre>';

//Funci�n print()


	echo '<pre>';

	print_r($bool);

	echo '<pre>';
//Ejemplo de funci�n
	function saludo ($nombre){
		echo '�Saludos, '.$nombre.'!';
		echo '<br/>';
	}
	saludo('Dieguito');
	saludo('Ramonsinbb');
	saludo('Alejandrabbx2');
	saludo('Mam� Briseida');
	saludo('Melissa Beia');

//die();
	echo '<br/>';
//Manera correcta de trabajar con funciones para controlar la informaci�n mostrada
	function saludos($nombre){
		$saludito = 'Saludos, '.$nombre.'!';
		return $saludito;
	}
	$saludito = saludos('Dieguito 10/10');
	echo $saludito.'<br/>';
	$saludito = saludos('Steven');
	echo $saludito.'<br/>';
	$saludito = saludos('MiGato');
	echo $saludito.'<br/>';
	echo '<br/>';

//Funci�n de operador aritm�tico (Tambi�n puede aplicarse en cadenas)
	function sumar ($n1, $n2){
		$res = $n1+$n2;
		return $res;
	}
	$res = sumar(10, 50);
	echo $res.'<br/>';
	$res = sumar(40, 60);
	echo $res.'<br/>';
	$res = sumar(120, 50);
	echo $res.'<br/>';
	echo '<br/>';
//Retomar valores de variables
	$numero = 7;
//Importante colocar la variable como par�metro
	function mostrarNumero($numero){
		echo $numero.'<br/>';
	}
	mostrarNumero($numero);

//Para retornar un valor dentro de la funci�n se debe usar return.
	function mostrarNumeros(){
		$numeros = 10;
		return $numeros;
	}
	echo mostrarNumeros();
?>