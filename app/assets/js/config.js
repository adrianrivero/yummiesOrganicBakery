var app = angular.module('YummiesApp', ['ngAnimate','ngRoute','firebase','ngResource'])

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
				controller: 'StoreController'
			})

			//Contact 
			.when('/contact',{
				templateUrl: 'assets/views/contact.yum',
			})

			//Products
			.when('/sweets',{
				templateUrl: 'assets/views/sweets.yum',
			})

			//admin
			.when('/admin',{
				templateUrl: 'assets/views/admin.yum',
				controller:'AdminController'
			})

			//loggedin
			.when('/loggedin',{
				templateUrl: 'assets/views/loggedin.yum',
				controller:'AdminController'
			})

			.otherwise({redirectTo:'/'});

	}]);