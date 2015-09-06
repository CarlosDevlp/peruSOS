var reporteController=function ($scope){	
	$scope.reportaje={
		autor:"",
		titulo:"",
		departamento:"",
		enviar: function(){
				// console.log($scope.reportaje);
				setData('1ClZ0z-jMEk61AaS1XBMPgWTftGq4yGzqf8j6acfs','("'+this.autor+'","'+this.titulo+'")');		
		}
	};
	$scope.departamentos=[];
	getData("1fnZ1Ft9Pv7bN34jGN2v-T-tQepmOVV3QMBNu_4bR",
			function(data){

			  	$scope.$apply(function(){
					for(var i in data.rows)
						$scope.departamentos.push(data.rows[i][1]);
				});

			}," ");

};