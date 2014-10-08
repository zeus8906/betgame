(function(){
	var app = angular.module('home-controllers', []);
	var dashboardCtrlDef = function($http, $scope){
		$scope.headerText = 'Dashboard';
		$scope.tickets = [];
		$http.get('rest/dashboard-items.json').success(function(data){
			$scope.tickets = data;
		});
	};
	
	var headerCtrlDef = function($scope){
		$scope.pageTitle = "---Home---";
	};
	
	app.controller('DashboardController', ['$http', '$scope', dashboardCtrlDef]);
	
	app.controller('HomeHeaderController', ['$scope', headerCtrlDef]);
})();