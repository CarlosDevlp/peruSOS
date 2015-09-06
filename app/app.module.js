var app=angular.module('Spondylus', ['ngMaterial']);
//controles
	app.controller('mainController',mainController)
		.controller('noticiasController',noticiasController)
		.controller('descriptionController',descriptionController)
		.controller('reporteController',reporteController);
//fábricas
	app.factory('Message',messageFactory);
//configuración
	app.config(appTheme);