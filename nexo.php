<?php 

 include_once "PHP/clases/bus.php";
  include_once "PHP/clases/terminal.php";


	$DatosPorPost = file_get_contents("php://input");
	$consulta = json_decode($DatosPorPost);
   
		switch($consulta->queHacer)
		{
			
			case "traerTodasLasEmpresas":	
				$arrayEmpresas=terminal::ObtenerTodasLasEmpresas();
				echo json_encode($arrayEmpresas);
				break;

		    case "verHorarios":	
		    	
		    	$arrayHorarios=terminal::ObtenerHorarios($consulta->idEmpresa);
		    	
		    	echo  json_encode($arrayHorarios);
				break;

			// case "traerFecha":	
			// 	$fecha= getDate();
			// 	echo json_encode(localtime());
			// 	break;
			// case "traerUnColectivo":	
			// 	$resultado=usuario::Alta($objUsuario->nombre,$objUsuario->fecha);
			// 	echo json_encode($resultado);
			// 	break;
			// case "borrar":
			
			// 	$resultado=usuario::Baja($objUsuario->id);
			// 	echo json_encode($resultado);
			// 	break;
			// case "modificar":
			
			// 	$resultado=usuario::Modificar($objUsuario->id,$objUsuario->nombre,$objUsuario->fecha);
			// 	echo json_encode($resultado);
			// 	break;

			// case "listar":
			
			// 	$resultado=usuario::Listar();
			// 	echo json_encode($resultado);
				

			// 	break;
		}

 ?>