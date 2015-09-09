var noticiasController=function($scope,$rootScope,Message){

		$scope.cards=[];
		$rootScope.currentCard={};
		$scope.description={
			show:function(card){
				if(card.video!="no"){
					$rootScope.currentCard=card;								
					Message.showLayout("app/components/description/description.tmpl.html",function(){},function(){});					
				}
			}
		};

	  //obtención de datos desde el fusion table
	  $scope.dataBase.select(function(data){
	  		//agregar cada dato obtenido al arreglo de cartas  		  	
	  		if(!$scope.$$phase)  		
		  		$scope.$apply(function(){		  		  
		  				  	  $scope.cards.unshift(data);
		  		});
		  	else
		  		$scope.cards.unshift(data);
	  	
	  });

};