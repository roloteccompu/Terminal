<?php
class viaje
{

//--ATRIBUTOS
	public $nomEmpresa;
	public $origen;
	public $fechSalida;
	public $horSalida;
	public $destino;
	public $fechLlegada;
	public $horLlegada;
	
 	
//--METODO DE CLASE
  	//SELECCIONAR TODOS LOS COLECTIVOS
public static function ObtenerHorarios($empresa){
		
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM datosViajes WHERE nomEmpresa=:empresa");
		$consulta->bindValue(':empresa',$empresa, PDO::PARAM_STR);
		$consulta->execute();

		$arrayHorarios= $consulta->fetchAll(PDO::FETCH_CLASS, "viaje");	
		return $arrayHorarios;	

	}








	// public static function TraerHorariosViajes(){
	// 	$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	// 	$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from datosViajes WHERE ");
	// 	$consulta->execute();			
	// 	$arrayViajes= $consulta->fetchAll(PDO::FETCH_CLASS, "viaje");	
	// 	return $arrayViajes;
	// }

	// public static function TraerHorariosViajes(){
	// 	$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	// 	$consulta =$objetoAccesoDato->RetornarConsulta("select * from datosViajes");
	// 	$consulta->execute();			
	// 	$arrayViajes= $consulta->fetchAll(PDO::FETCH_CLASS, "viaje");	
	// 	return $arrayViajes;
	// }

	// public static function TraerHorarios(){
	// 	$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	// 	$consulta =$objetoAccesoDato->RetornarConsulta("select * from empresas");
	// 	$consulta->execute();			
	// 	$arrayBuses= $consulta->fetchAll(PDO::FETCH_CLASS, "bus");	
	// 	return $arrayBuses;
	// }

















/*

	//--ATRIBUTOS
	public $id;
	public $nombre;
 	public $correo;
  	public $clave;
  	public $foto

	public static function ValidarSiExiste($datosLogin)
	{
		$user=json_decode($datosLogin);

		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from persona where correo=:correo and clave=:clave ");
		$consulta->bindValue(':correo',$user->correo, PDO::PARAM_STR);	
		$consulta->bindValue(':clave',$user->clave, PDO::PARAM_STR);	
		$consulta->execute();
    		
    		if ($consulta->rowCount() > 0) {
    			return true;
    		}
    		else {
    			return false;
    		}
	}


	public static function TraerUnUsuario($idParametro) 
	{	

		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from persona where id =:id");
		// $consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':id', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$personaBuscada= $consulta->fetchObject('usuario');
		return $personaBuscada;	
					
	}
	
	public static function TraerTodosLosUsuarios()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from persona");
		$consulta->execute();			
		$arrayUsuarios= $consulta->fetchAll(PDO::FETCH_CLASS, "usuario");	
		return $arrayUsuarios;
	}
	
	public static function BorrarUsuario($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from persona	WHERE id=:id");	
		
		$consulta->bindValue(':id',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function ModificarUsuario($objUsuario)
	{
		$usuario=json_decode($objUsuario);
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update persona 
				set nombre=:nombre,
				correo=:correo,
				clave=:clave,
				foto=:foto
				WHERE id=:id");
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			
			$consulta->bindValue(':id',$usuario->id, PDO::PARAM_INT);
			$consulta->bindValue(':nombre',$usuario->nombre, PDO::PARAM_STR);
			$consulta->bindValue(':correo',$usuario->correo, PDO::PARAM_STR);
			$consulta->bindValue(':clave', $usuario->clave, PDO::PARAM_STR);

			$consulta->bindValue(':foto', $usuario->foto, PDO::PARAM_STR);
			
			return $consulta->execute();
	}
	public static function InsertarUsuario($objUsuario)
	{
		$nuevoUsuario=json_decode($objUsuario);
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into persona (nombre,correo,clave,foto)values(:nombre,:correo,:clave,:foto)");
		
		$consulta->bindValue(':nombre',$nuevoUsuario->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':correo',$nuevoUsuario->correo, PDO::PARAM_STR);
		$consulta->bindValue(':clave', $nuevoUsuario->clave, PDO::PARAM_STR);
		$consulta->bindValue(':foto', $nuevoUsuario->foto, PDO::PARAM_STR);
		$consulta->execute();		
		return $nuevoUsuario;		
	}	

	*/

}
