(function services(){
	var app = angular.module('services', []);

	app.factory('restService', ['$http', function($http){
			return {
				getDashboardItems : function(){
					return ($http.get('rest/dashboard-items.json').then(handleSuccess, handleError));
				},

				getNotifications : function(){
					return ($http.get('rest/notifications.json').then(handleSuccess, handleError));
				},
				getGameObject : function(){
					return ($http.get('rest/game-details.json').then(handleSuccess, handleError));
				},
				submitTips : function(tips){
					
				},
				rubmitSingleTip : function(tip){
					
				},
				getUserDetails : function(){
					return ($http.get('rest/user-details.json').then(handleSuccess, handleError));
				}

			};
	}]);

	function handleSuccess(data){
		return data;
	};
	function handleError(data){
		alert(data);
	};
})();