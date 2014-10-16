(function(){
	var app = angular.module('homeControllers', ['services']);
	var dashboardCtrlDef = function($http, $scope, restService){
		$scope.headerText = 'Dashboard';
		$scope.tickets = false;
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
		
		$scope.$on("switch-content", function(event, data){
			$scope.setView(data);
		});
	};
	
	var headerCtrlDef = function($scope, $location){
		$scope.pageTitle = "---Home---";
		
		$scope.logout = function(){
			$location.path='/index.html';
		};
		
		$scope.showProfile = function(){
			$scope.$emit('show-user-profile', []);
		};
	};
	

	var homeCtrlDef = function($scope){
		$scope.$on('show-user-profile', function(event, data){
			$scope.$broadcast("switch-content", 'userProfile');
		});
	};
	
	app.controller('dashboardController', ['$http', '$scope', 'restService', dashboardCtrlDef]);
	app.controller('homeHeaderController', ['$scope', '$location', headerCtrlDef]);
	app.controller('contentController', ['$scope', contentCtrlDef]);
	app.controller('homeController', ['$scope', homeCtrlDef]);
	
	
})();