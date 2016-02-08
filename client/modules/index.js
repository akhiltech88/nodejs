// Defining angularjs application.
var loginApp = angular.module('loginApp', []);



// Controller function and passing $http service and $scope var.
loginApp.controller('loginController', function ($scope, $http,$window) {
    $scope.login = {};
    $scope.newUser = function(){
	
    };
    $scope.submitForm = function () {        
         var postdata = {'call':'saveProduct','data':$scope.login}
         $http.post('/user_login/login',postdata).then(function(data){
              if(data.errors){
                  alert('as');
            }else{
           $window.location.href="http://localhost:3000/dashboard.html";
            }
         });

	
    };
    $scope.newForm = function () {        
         var postdata = {'call':'saveProduct','data':$scope.new}
         $http.post('/user_login/',postdata).then(function(data){
              if(data.errors){
                  console.log(data.message);
                  $scope.message=data.message;
            }else{
                 console.log(data.message);
                $scope.message = data.message;
            }
         });

	
    };

});


