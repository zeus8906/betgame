/**
 * 
 */
(function LoginControllers(){

	var app = angular.module('LoginControllers', []);
	
	app.config(function($locationProvider){
		$locationProvider.html5Mode(true);
	});
	var loginCtrlDef = function($scope, $location, $window){
		$scope.login = function(){
		        $location.path("/betgame/home.html");
		        $location.replace();
		        $window.location.reload();
		};
	};

	app.controller('loginController', ['$scope', '$location', '$window',loginCtrlDef]);
	
	
})();