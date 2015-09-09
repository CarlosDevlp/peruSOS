var firebaseDBFactory= function(){
		return {
			    db:new Firebase("https://spondylus.firebaseio.com/"),
			      //recibir los datos
			    select:function(cb){
			      this.db.on("child_added",function(data){
			                 cb(data.val());
			      });
			    },
			      //insertar los datos
			    insert:function(cb, obj){
			      this.db.push(obj);
			    }
		}
		;
};