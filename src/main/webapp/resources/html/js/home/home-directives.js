/**
 * Defines the directives for the Home module
 * @param homeApp object referencing the Home module
 */
(function(){
	var app = angular.module('home-directives',[]);
	app.directive('header', function(){
		return {
			restrict : 'E',
			templateUrl: 'template/common/header.html'
		};
	});
	
	app.directive('dashboard', function(){
		return {
			restrict: 'E',
			templateUrl: 'template/home/dashboard.html'
		};
	});
})();