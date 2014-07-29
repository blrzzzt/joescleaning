	// create the module and name it posuxApp
	var posuxApp = angular.module('posuxApp', ['ngRoute']);
	var fbref= new Firebase("https://shining-fire-4822.firebaseio.com");
	
	
		// create the controller and inject Angular's $scope
	posuxApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Welcome to Joe\'s Cleaning!';
	});

	posuxApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	posuxApp.controller('contactController', function($scope) {
		$scope.message = 'This is a contact page!';
	});


	// configure our routes
	posuxApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
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

