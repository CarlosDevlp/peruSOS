var descriptionController=function($scope,$rootScope,$mdDialog){
			
			 $scope.card=$rootScope.currentCard;
			
			 $scope.$watch('card', function(newValue, oldValue, scope) {
			 	var v=document.getElementById("video");	 	
			 	v.src=newValue.video;
			 });

			 $scope.hide = function() {
                  $mdDialog.hide();
             };

};