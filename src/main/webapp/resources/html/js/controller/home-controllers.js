(function(){
	var app = angular.module('home-controllers', []);
	var dashboardCtrlDef = function($http){
		var dashboard = this;
		dashboard.headerText = 'Dashboard';
		dashboard.tickets = [];
		$http.get('rest/dashboard-items.json').success(function(data){
			dashboard.tickets = data;
		});
	};
	
	app.controller('DashboardController', ['$http', dashboardCtrlDef]);
	
})();