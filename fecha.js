
	function RetornarFechaActual(){
		
		var dt= new Date();
		var mes=dt.getMonth()+1;
		var dia=dt.getDate();
		var anio=dt.getFullYear();

		var arrayFechasHabilitadas=[];

		for (var i = 0; i<7 ; i++) {
			arrayFechasHabilitadas[i]=dia+"/"+mes+"/"+anio;
			dia++;
		}
		return arrayFechasHabilitadas;
	}

	function RetornarHoras(){
		
		var arrayHoras=[];
		var aux=0;
		for (var i = 0; i<24 ; i++) {
			aux=i;
			if (i<12) {
				arrayHoras[aux]=i.toString()+":00 "+"hs";
			}
			else{
				arrayHoras[aux]=i.toString()+":00 "+"hs";
			}
		}
		return arrayHoras;
	}
	
	
	function RetornarProvincias(){
		
		var arrayProvincias=["Junín","La Matanza","Mercedes","Bahía Blanca","Mar del Plata","Quilmes","Azul",
						"Zárate Campana","Lomas de Zamora","Morón","La Plata","San Martín","San Nicolás",
						"San Isidro","Necochea","Pergamino","Dolores"];

						return arrayProvincias;
	}
