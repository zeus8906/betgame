/**
 * 
 */

(function WizardDirectives(){
	var app = angular.module('wizardDirectives', []);
	var templateBase = 'template/create-game/';
	
	
	app.directive('wizard', function(){
		return{
			restrict: 'E',
			templateUrl: templateBase + 'wizard.html' 
		};
	});
	
	app.directive('basicDetails', function(){
		return{
			restrict: 'E',
			templateUrl: templateBase + 'basic-details.html' 
		};
	});
	app.directive('groups', function(){
		return{
			restrict: 'E',
			templateUrl: templateBase + 'groups.html' 
		};
	});
	app.directive('fixturesSettings', function(){
		return{
			restrict: 'E',
			templateUrl: templateBase + 'fixtures-settings.html' 
		};
	});
	app.directive('rules', function(){
		return{
			restrict: 'E',
			templateUrl: templateBase + 'rules.html' 
		};
	});
	app.directive('attendes', function(){
		return{
			restrict: 'E',
			templateUrl: templateBase + 'attendes.html' 
		};
	});
})();