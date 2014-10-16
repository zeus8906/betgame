/**
 * 
 */

(function ProfileControllers(){
	var app = angular.module('profileControllers', []);
	
	app.controller('profileController', ['$scope', 'restService', function($scope, restService){
		$scope.user= false;
		restService.getUserDetails(setUser);
		
		function setUser(response){
			$scope.user=response.data;
		}
	}]);
})();