/**
 * 
 */
(function PortalDirectives(){
	var app = angular.module('PortalDirectives', []);
	var templateBase = 'template/game-portal/';
	app.directive('portal', function(){
		return{
			restrict : 'E',
			templateUrl : templateBase + 'portal.html'
		};
	});
	app.directive('tipsToGo', function(){
		return{
			restrict : 'E',
			templateUrl : templateBase + 'tips-to-go.html'
		};
	});
	app.directive('gameStandings', function(){
		return{
			restrict : 'E',
			templateUrl : templateBase + 'game-standings.html'
		};
	});
	app.directive('fixtures', function(){
		return{
			restrict : 'E',
			templateUrl : templateBase + 'fixtures.html'
		};
	});
	app.directive('tournamentStandings', function(){
		return{
			restrict : 'E',
			templateUrl : templateBase + 'tournament-standings.html'
		};
	});

	app.directive('groupStage', function(){
		return{
			restrict : 'E',
			templateUrl : templateBase + 'group-stage.html'
		};
	});
	
})();