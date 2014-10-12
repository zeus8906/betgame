/**
 * 
 */
(function() {
	var app = angular.module('NotificationBarControllers', []);

	var barCtrlDef = function($scope, $http) {
		$scope.notifications = [];
		var getNotifications = function() {
			$http.get('rest/notifications.json').success(function(data) {
				$scope.notifications = data;
			});
		};
		getNotifications();
		setInterval(getNotifications, 5000);
	};

	app.controller('BarController', [ '$scope', '$http', barCtrlDef ]);

})();