/**
 * 
 */
(function WizardControllers(){
	var app = angular.module('wizardControllers', []);

	app.controller('wizardController', ['restService', '$scope', function(restService, $scope){
		$scope.STEP_BASIC_DETAILS = 1;
		$scope.STEP_GROUPS = 2;
		$scope.STEP_FIXTURES_SETTINGS = 3;
		$scope.STEP_RULES = 4;
		$scope.STEP_ATTENDES = 5;
		$scope.gameObject = false;
		$scope.currentStep = $scope.STEP_BASIC_DETAILS;
		
		function nextStep(){
			++$scope.currentStep;
		};
		
		function submitWizard(){
			restService.createGame();
		};
		
		$scope.$on('basic-details-submit', function(event, data){
			$scope.gameObject.basicDetails = data;
			nextStep();
		});
		
		$scope.$on('groups-submit', function(event, data){
			$scope.gameObject.tournament = data;
			nextStep();
		});
		
		$scope.$on('fixtures-settings-submit', function(event, data){
			$scope.gameObject.fixtures= data;
			nextStep();
		});
		
		$scope.$on('rules-submit', function(event, data){
			$scope.gameObject.rules = data;
			nextStep();
		});

		$scope.$on('attendes-submit', function(event, data){
			$scope.gameObject.attendes = data;
			$scope.submitWizard();
		});
		
	}]);
})();