<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="descricion" contend="una genia descripcion de mi pagina">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Practicando PHP</title>

	
</head> 
	<?php
		//print "bienvenidos al curso de php <br>";
		//echo "hola mundo";
		//include ("funciones.php");
		$nombre="juan";

		function tedoyDatos(){

			global $nombre;
			$nombre="lol";
		}

		echo $nombre;
		echo tedoyDatos();

	?>

	<script scr="scripts.js"></script>
</body>
</html>