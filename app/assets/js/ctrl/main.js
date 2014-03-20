app.controller('StoreController',['$scope','$rootScope','$http','$firebase','$location',function($scope,$rootScope,$http,$firebase,$location){

	var ref = new Firebase('https://yummies-products.firebaseIO.com/');

	$scope.products = $firebase(ref);

}]);

app.controller('AdminController',['$scope','$rootScope','$http','$firebase','$location',function($scope,$rootScope,$http,$firebase,$location){

	var ref = new Firebase('https://yummies-products.firebaseIO.com/');

	

}]);

