var app = angular.module('YummiesApp', ['ngRoute','firebase'])

	.config(['$routeProvider', function (routes) {

		//Routes
		routes
			// Main Page
			.when('/', {
				templateUrl: 'assets/views/main.yum',
			})
			//About Us
			.when('/aboutus', {
				templateUrl: 'assets/views/aboutUs.yum',
				//controller: 'SignInController'
			})

			//Shop
			.when('/shop', {
				templateUrl: 'assets/views/shop.yum',
				//controller: 'SignUpController'
			})

			//Contact 
			.when('/contact',{
				templateUrl: 'assets/views/contact.yum',
			})

			//Products
			.when('/sweets',{
				templateUrl: 'assets/views/sweets.yum',
			})

			.otherwise({redirectTo:'/'});

	}]);