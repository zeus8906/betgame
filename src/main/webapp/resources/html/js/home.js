(function(){
	var app = angular.module('BetgameHome', []);
	
	app.directive('header', function(){
		return {
			restrict : 'E',
			templateUrl: 'header.html'
		};
	});
	
	app.directive('notificationBar', function(){
		return {
			restrict : 'E',
			templateUrl: 'notification-bar.html'
		};
	});
	
})();