var descriptionController=function($scope,$rootScope,$mdDialog){
			
			$scope.card=$rootScope.currentCard;
			
			 $scope.$watch('card', function(newValue, oldValue, scope) {
			 	var v=document.getElementById("video");
			 	v.src="http://files.spondylus.gamaleon.com/"+newValue[0]+".mp4";
			 });			

			$scope.hide = function() {				
                  $mdDialog.hide();
            };

};