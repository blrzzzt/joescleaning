	// create the module and name it scotchApp
	var scotchApp = angular.module('posuxApp', ['ngRoute']);

	// configure our routes
	posux.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'homeController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	posuxApp.controller('homeController', function($scope) {
		// create a message to display in our view
		$scope.message = 'HOME';
	});

	posuxApp.controller('aboutController', function($scope) {
		$scope.message = 'ABOUT';
	});

	posuxApp.controller('contactController', function($scope) {
		$scope.message = 'CONTACT';
	});
