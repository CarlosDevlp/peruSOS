var reporteController=function ($scope, Message){	
	$scope.reportaje={		
	    "id":"1",
	    "latitude":"",
	    "longitude":"",
	    "reportero":"",
	    "tipo_alerta":"",
	    "texto":"",
	    "video":"no",
	    "audio":"no",    
	    "fechahora":Date(),
	    "foto":"no",
	    "departamento":"",
	};
	 
	$scope.reportar={
		enviar:function(){
			var r=$scope.reportaje, mensaje;
			//validar los datos antes de enviar
			if(r.reportero && r.tipo_alerta && r.texto && r.tipo_alerta!="Tipos de Alerta" && r.departamento!="Departamento"){

				//Envio de datos a la base de datos			  		
				$scope.dataBase.insert($scope.reportaje);
				Message.showToast("Se ha enviado el reporte con éxito.",1500);
			}
			else
				Message.showToast("Datos no válidos",1500);


		}
	};
	$scope.tiposAlerta=["Ayuda Social","SOS","Clima","Prevención","Salubridad"];
	$scope.departamentos=[
		"Amazonas",
		"Ancash",
		"Apurimac",
		"Arequipa",
		"Ayacucho",
		"Cajamarca",
		"Callao",
		"Cusco",
		"Huancavelica",
		"Huanuco",
		"Ica",
		"Junin",
		"La Libertad",
		"Lambayeque",
		"Lima",
		"Loreto",
		"Madre De Dios",
		"Moquegua",
		"Pasco",
		"Piura",
		"Puno",
		"San Martin",
		"Tacna",
		"Tumbes",
		"Ucayali"
	];

};