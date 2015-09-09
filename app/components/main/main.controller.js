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

        
  //main  database  
  $scope.dataBase={
    db:new Firebase("https://spondylus.firebaseio.com/"),
      //recibir los datos
    select:function(cb){
      this.db.on("child_added",function(data){
                 cb(data.val());
      });
    },
      //insertar los datos
    insert:function(obj){
      this.db.push(obj);
    }
 };  
      
};