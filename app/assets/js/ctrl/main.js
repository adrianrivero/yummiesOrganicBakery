app.controller('StoreController',['$scope','$rootScope','$http','$firebase','$location',function($scope,$rootScope,$http,$firebase,$location){

	var ref = new Firebase('https://yummies-products.firebaseIO.com/');

	$scope.products = $firebase(ref);

}]);

app.controller('AdminController',['$scope','$firebaseSimpleLogin','$rootScope','$http','$firebase','$location',function($scope,$firebaseSimpleLogin,$rootScope,$http,$firebase,$location){

	var ref = new Firebase('https://yummies-products.firebaseIO.com/');
	
	$scope.loginObj = $firebaseSimpleLogin(ref);


	$scope.SignIn = function(){

		$scope.loginObj.$login('password',{
				email: $scope.user,
				password: $scope.pass
			}).then(function(user) {
		   		console.log('Logged in as: ', user);
		   		$location.url('/loggedin');
		   		$rootScope.user = user;
			}, function(error) {
		   		console.error('Login failed: ', error);
		   		console.error(user, pass);
		   		$location.url('/admin');
		});
	};

	$scope.SubmitProduct = function(){

	};

}]);

