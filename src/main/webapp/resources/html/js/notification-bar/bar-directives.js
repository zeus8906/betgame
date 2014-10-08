/**
 * 
 */
(function(){
	var app = angular.module('BarDirectives', []);
	
	app.directive('notificationBar', function(){
		return {
			restrict: 'E',
			templateUrl:'template/common/notification-bar.html'
		};
	});
})();