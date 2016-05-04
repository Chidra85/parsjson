mainApp.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  	
	$http({
	  method: 'GET',
	  url: 'user.json'
	}).then(function successCallback(response) {
	    $scope.users = response.data;
	    console.log(response);
	  }, function errorCallback(response) {
	    alert("error on road file");
	  });

}]);