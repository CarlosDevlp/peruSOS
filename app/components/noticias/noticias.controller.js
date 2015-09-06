var noticiasController=function($scope,$rootScope,Message){

		$scope.cards=[];
		$rootScope.currentCard={};
		$scope.description={
			show:function(card){
				
				$rootScope.currentCard=card;
				// console.log("http://spondylus.gamaleon.com/"+id+".jpg");
				Message.showLayout("app/components/description/description.tmpl.html",function(){},function(){});		
			}
		};

	  //obtención de datos desde el fusion table
	  getData('1ClZ0z-jMEk61AaS1XBMPgWTftGq4yGzqf8j6acfs',function (data) {

			  	$scope.$apply(function(){
			  		  var i =data.rows.length-1;
		              for(;i>=0;i--)
							$scope.cards.push(data.rows[i]);
			  	});
              
      }," WHERE id<10 ");


};