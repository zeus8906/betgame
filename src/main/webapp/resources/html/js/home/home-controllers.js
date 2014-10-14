(function(){
	var app = angular.module('homeControllers', ['services']);
	var dashboardCtrlDef = function($http, $scope, restService){
		$scope.headerText = 'Dashboard';
		$scope.tickets = "bazmeg";
		restService.getDashboardItems().then(setTickets);
		
		function setTickets(response){
			$scope.tickets = response.data;
		};

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
	
	app.controller('DashboardController', ['$http', '$scope', 'restService', dashboardCtrlDef]);
	
	app.controller('HomeHeaderController', ['$scope', headerCtrlDef]);
	app.controller('ContentController', ['$scope', contentCtrlDef]);
})();