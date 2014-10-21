/**
 * 
 */
(function WizardControllers() {
	var app = angular.module('wizardControllers', []);

	app.service('gameObject', ['$q', function($q) {
		var gameObject = {};
		var setBasicDetails = function(data){
			gameObject.basicDetails = data;
		};
		var getBasicDetails = function(){
			return gameObject.basicDetails;
		};

		var setStructure = function(data){
			if(gameObject.structure){
				gameObject.structure.resolve(data);
			}
			gameObject.structure = data;
		};
		var getStructure = function(){
			if(!gameObject.structure){
				gameObject.structure = $q.defer();
			}
			return gameObject.structure.promise;
		};

		return {
			setBasicDetails : setBasicDetails,
			getBasicDetails: getBasicDetails,
			setStructure : setStructure,
			getStructure : getStructure
		};
	}]);
	app.controller('wizardController', [
			'restService',
			'gameObject',
			'$scope',
			function(restService, gameObject, $scope) {
				$scope.STEP_BASIC_DETAILS = 1;
				$scope.STEP_GROUPS = 2;
				$scope.STEP_FIXTURES_SETTINGS = 3;
				$scope.STEP_RULES = 4;
				$scope.STEP_ATTENDES = 5;
				$scope.currentStep = $scope.STEP_BASIC_DETAILS;

				function nextStep(sender) {
					sender == $scope.currentStep && ++$scope.currentStep;
				}
				;

				function submitWizard() {
					restService.createGame(gameObject());
				}
				;

				$scope.$on('basic-details-submit', function(event, data) {
					gameObject.setBasicDetails(data);
					restService.getStructure(data.tournamentType).then(
							setStructure);
					function setStructure(response) {
						gameObject.setStructure(response.data);
					}
					;
					nextStep($scope.STEP_BASIC_DETAILS);
				});

				$scope.$on('groups-submit', function(event, data) {
					//gameObject.setField("groups", data);
					nextStep($scope.STEP_GROUPS);
				});

				$scope.$on('fixtures-settings-submit', function(event, data) {
					//gameObject.setField("fixtures", data);
					nextStep($scope.STEP_FIXTURES_SETTINGS);
				});

				$scope.$on('rules-submit', function(event, data) {
					//gameObject.setField("rules", data);
					nextStep($scope.STEP_RULES);
				});

				$scope.$on('attendes-submit', function(event, data) {
					//gameObject.setField("attendes", data);
					$scope.submitWizard();
				});

			} ]);

	app.controller('basicDetailsController', [ '$scope', 'restService',
			function($scope, restService) {
				$scope.tournamentTypes = [];
				$scope.selectedType = false;
				$scope.name = false;

				restService.getTournamentTypes().then(setTournamentTypes);

				function setTournamentTypes(response) {
					$scope.tournamentTypes = response.data;
				}

				$scope.submitBasicDetails = function() {
					var basicDetails = {
						"name" : $scope.name,
						"tournamentType" : $scope.selectedType
					};
					$scope.$emit('basic-details-submit', [ basicDetails ]);
				};

			} ]);

	app.controller('groupsController', [ '$scope', 'gameObject', 'restService',
			function($scope, gameObject, restService) {
				$scope.groups = [];
				$scope.structure = gameObject.getStructure();
				$scope.structure.then(initGroups);

				function initGroups(structure) {
					structure.groups.forEach(function(value){
						$scope.groups.push({
							name:value,
							teams:[]
						});
					});
				}

			} ]);
})();