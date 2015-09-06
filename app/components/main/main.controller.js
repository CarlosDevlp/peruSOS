var mainController=function($scope,$http,$window){

        $scope.getLocation= function() {
              window.navigator.geolocation.getCurrentPosition(
              function(position) {
                  console.log(position);

                  $scope.$apply(function() {
                      $scope.position = position;
                  });


              }, function(error) {
                  alert(error);
              });
         };

      // $scope.getLocation();
    
    
      
};