/**
 * 
 */
(function LoginDirectives(){
	var app = angular.module('LoginDirectives', []);
	var templateBase = 'template/login/';
	
	app.directive('header', function(){
		return{
			restrict : 'E',
			templateUrl : templateBase + 'header.html'
		};
	});
	
	app.directive('loginForm', function(){
		return {
			restrict : 'E',
			templateUrl : templateBase + 'login-form.html'
		};
	});

	app.directive('username', function(){
		return {
			restrict : 'E',
			templateUrl : templateBase + 'username.html'
		};
	});

	app.directive('password', function(){
		return {
			restrict : 'E',
			templateUrl : templateBase + 'password.html'
		};
	});

	app.directive('submit', function(){
		return {
			restrict : 'E',
			templateUrl : templateBase + 'submit.html'
		};
	});

	app.directive('links', function(){
		return {
			restrict : 'E',
			templateUrl : templateBase + 'links.html'
		};
	});
})();