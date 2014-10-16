/**
 * 
 */
(function LoginControllers(){
	var app = angular.module('LoginControllers', []);
	
	var loginCtrlDef = function($scope){
		$scope.login(){
			$location.path='/home.html';
		};
	};

	app.controller('loginController', ['$scope', loginCtrlDef]);
	
	
})();