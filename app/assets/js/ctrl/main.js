app.controller('StoreController',['$scope','$rootScope','$http','$firebase','$location',function($scope,$rootScope,$http,$firebase,$location){

	var ref = new Firebase('https://yummies-products.firebaseIO.com/');

	$scope.products = $firebase(ref);

}]);

app.controller('AdminController',['$scope','$resource','$firebaseSimpleLogin','$rootScope','$http','$firebase','$location',function($scope,$resource,$firebaseSimpleLogin,$rootScope,$http,$firebase,$location){

	var ref = new Firebase('https://yummies-products.firebaseIO.com/');
	
	$scope.loginObj = $firebaseSimpleLogin(ref);

	$scope.SignIn = function(){

		$scope.loginObj.$login('password',{
				email: $scope.user,
				password: $scope.pass
			}).then(function(user) {
		   		//console.log('Logged in as: ', user);
		   		$location.url('/loggedin');
		   		$rootScope.user = user;
			}, function(error) {
		   		//console.error('Login failed: ', error);
		   		$scope.error = ('Login failed, Check Username/Password');
		   		console.log($scope.error);
		   		console.log($scope.user , $scope.pass);
		   		//console.error(user, pass);

		   		$location.url('/admin');
		});
	};

	$scope.SubmitProduct = function(){

		ref.push({
			'name':$scope.name, 
			'price':$scope.price,
			'quantity':$scope.quantity,
			'info':$scope.productInfo,
		});

		var Files = $resource('../img/');

            angular.extend($scope, {

                model: { file: null },

                upload: function(model) {
                    Files.prototype.$save.call(model.file, function(self, headers) {
                        // Handle server response
                    });
                }
            });
	};

}]);

