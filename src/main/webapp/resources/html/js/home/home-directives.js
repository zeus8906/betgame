/**
 * Defines the directives for the Home module
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

	app.directive('userProfile', function(){
		return {
			restrict: 'E',
			templateUrl: 'template/profile/user-profile.html'
		};
	});
})();