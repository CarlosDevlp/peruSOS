//menus flotantes y mensajes de alerta
/*
  Información:
  Callbacks:
  -se envían 2 cb  (1 Success callback, 1 Error callback).
  -a ambos cb se les responde con un JSON con el resultado exitoso o el de error.
  -en el caso de la promesa error, si la promesa no responde con un JSON, es el mensaje
   se cerró por razones que no necesariamente son de error; por lo tanto, igual se eje-
   cuta el cb.

*/
var messageFactory = function ($mdDialog,$mdBottomSheet){          
          return{              
              showAlert:function (title,content,btn,callback,params,ev){
                          $mdDialog.show(
                            $mdDialog.alert()
                              .parent(angular.element(document.body))
                              .title(title)
                              .content(content)
                              .ariaLabel('Alert Dialog Demo')
                              .ok(btn)
                              .targetEvent(ev)
                              .escapeToClose(false)
                            ).then(//promesa
                              function(){
                                      try{
                                        callback(params);
                                      }catch(err){
                                          try{
                                            callback();
                                          }catch(err){}
                                      }
                              }
                            );        
                },
              showBrowser:function (cbSuccess,cbError,ev){
                              $mdDialog.show({
                              templateUrl: 'app/components/browser/browser.tmpl.html',
                              parent: angular.element(document.body),
                              targetEvent: ev,
                              escapeToClose:false
                              })
                              .then(function(ans) { //promesas de respuestas
                                  //enviando una respuesta en una estructura de datos
                                  cbSuccess(ans);
                              }, function(error) {
                                //cuando se hace un cancel desde el otro control
                                  //se llama al mensaje de error si hay un contenido inválido
                                  try{                                  

                                    if(error!=undefined)
                                    // para mensajes de error de sintaxis                                    
                                      cbError(error);
                                    else
                                    //se ejecuta la función que pasó como parámetro
                                      cbError();

                                  }catch(err){                                    
                                  }                                  
                              });
                      },
                showLayout:function(tmpl,cb,ecb,ev){
                            $mdDialog.show({
                              templateUrl: tmpl,
                              parent: angular.element(document.body),
                              targetEvent: ev,
                              escapeToClose:false
                            }).then(function(ans) { //promesas de respuestas
                                //enviando una respuesta en una estructura de datos
                                cb(ans);
                            }, function(error) {
                                  //cuando se hace un cancel desde el otro control
                                ecb();
                            });
                }
              

          };
        

};