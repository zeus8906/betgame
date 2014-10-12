(function(){
	var app = angular.module('home-controllers', []);
	var dashboardCtrlDef = function($http, $scope){
		$scope.headerText = 'Dashboard';
		$scope.tickets = [];
		$http.get('rest/dashboard-items.json').success(function(data){
			$scope.tickets = data;
		});
		
		$scope.openGamePortal = function(gameId){
			$scope.$parent.setView('portal');
		};
	};
	
	var contentCtrlDef = function($scope){
		$scope.currentView = 'home';
		
		$scope.setView = function(view){
			$scope.currentView = view;
		};
	};
	
	var headerCtrlDef = function($scope){
		$scope.pageTitle = "---Home---";
	};
	
	app.controller('DashboardController', ['$http', '$scope', dashboardCtrlDef]);
	
	app.controller('HomeHeaderController', ['$scope', headerCtrlDef]);
	app.controller('ContentController', ['$scope', contentCtrlDef]);
})();