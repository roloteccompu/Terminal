<?php
require_once"accesoDatos.php";

class terminal
{
	public $patente;
	public $idEmpresa;
	public $horarioLlegada;

	public $nomEmpresa;
	
 	
	public static function ObtenerTodasLasEmpresas(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM empresas");
		$consulta->execute();			
		$arrayEmpresas= $consulta->fetchAll(PDO::FETCH_CLASS, "terminal");	
		return $arrayEmpresas;
	}
	public static function ObtenerHorarios($idParametro){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM horarios WHERE idEmpresa=:id");
		$consulta->bindValue(':id', $idParametro, PDO::PARAM_INT);
		$consulta->execute();

		$arrayHorarios= $consulta->fetchAll(PDO::FETCH_CLASS, "terminal");	
		return $arrayHorarios;	

	}


}
