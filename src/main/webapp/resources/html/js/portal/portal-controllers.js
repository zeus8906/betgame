/**
 * 
 */
(function PortalController(){
	var app = angular.module('PortalControllers', ['services']);
		
	app.controller('PortalController', ['restService', '$scope', function(restService, $scope){
		$scope.gameObject = {};
		restService.getGameObject().then(setGameObject);
		function setGameObject(response){
			$scope.gameObject = response.data;
		};
	}]);

	app.controller('tournamentController', ['$scope', 'restService', function($scope, restService){
		$scope.structure = false;
		$scope.selectedStage = false;
		$scope.currentGroup = false;

		restService.getGameObject().then(setStructure);
		function setStructure(response){
			$scope.structure = response.data.structure;
			$scope.selectedStage =  $scope.structure.stages[0];
		};
		
		$scope.setGroup = function(value){
			$scope.currentGroup = value;
		};

		$scope.isSet = function(value){
			return $scope.currentGroup === value;
		};

		
	}]);
	
	app.controller('TabController', [ '$scope', function($scope){
		$scope.currentTab = 1;

		$scope.setTab = function(value){
			$scope.currentTab = value;
		};

		$scope.isSet = function(value){
			return $scope.currentTab === value;
		};
	}]);
})();