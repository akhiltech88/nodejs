// Defining angularjs application.
var postApp = angular.module('postApp', []);
// Controller function and passing $http service and $scope var.
postApp.controller('postController', function ($scope, $http) {
    $scope.product = {};
    $scope.lists = [{item: 'Tube'},
        {item: 'Card'},
        {item: 'Choke'}];
    
    $scope.products = [{price: 0, quantity: 0,total:0}];

    $scope.newItem = function ($event) {
      
        $scope.products.push({price: 0, quantity: 0,total:0});
        $event.preventDefault();
    }   
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
    $scope.submitPrduct = function () {         
         var postdata = {'call':'saveProduct','data':$scope.products}
         $http.post('/product/saveProduct',postdata).then(function(data){
              if(data.errors){
                  console.log(data.message);
                  $scope.message=data.message;
            }else{
                 console.log(data.message);
                $scope.message = data.message;
            }
         });
    };
    $http.get('/product/getProduct').success(function(data){

    $scope.allProducts = angular.fromJson(data); 
             
    });
    $scope.editProduct = function(dataProduct){
        $scope.eproduct=dataProduct;        
    };    
    $scope.editForm = function(){        
       var edit_data=angular.toJson($scope.eproduct); 

       $http.post('/product/editProduct',edit_data).then( function(data){
           console.log(data);
       });
    };
    $scope.delProduct = function(data_del){       
       $http.post('/product/deleteProduct',data_del).then(function(data){
           console.log(data);
       }); 
    };
    // create a blank object to handle form data.
    $scope.user = {};
    // calling our submit function.
    $scope.submitForm = function () {     
        // Posting data to php file
        $http({
            method: 'POST',
            url: 'clone.php',
            data: $scope.user, //forms user object
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
                .success(function (data) {
                    if (data.errors) {
                        // Showing errors.
                        $scope.errorName = data.errors.name;
                        $scope.errorUserName = data.errors.username;
                        $scope.errorEmail = data.errors.email;
                    } else {
                        $scope.message = data.message;
                    }
                });
    };
});
