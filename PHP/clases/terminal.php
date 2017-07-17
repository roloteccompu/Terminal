<?php

 include_once "AccesoDatos.php";
  

class terminal
{
	public $idEmpresa;
	public $nomEmpresa;
	
	public static function ObtenerTodasLasEmpresas(){

		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM empresas");
		$consulta->execute();			
		$arrayEmpresas= $consulta->fetchAll(PDO::FETCH_CLASS, "terminal");	
		 return $arrayEmpresas;
		// return "hola";
	}



}
