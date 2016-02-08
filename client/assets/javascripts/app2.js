// Defining angularjs application.
var postApp = angular.module('postApp', []);
// Controller function and passing $http service and $scope var.
postApp.controller('postController', function ($scope, $http) {
    $scope.product = {};
    $scope.lists = [{item: 'Tube'},
        {item: 'Card'},
        {item: 'Choke'}];

    var counter = 0;    
    $scope.products = [{id: counter, price: 0, quantity: 0,total:0}];

    $scope.newItem = function ($event) {
        counter++;
        $scope.products.push({id: counter, price: 0, quantity: 0,total:0});
        $event.preventDefault();
    }   
 
    $scope.submitPrduct = function () {         
         var postdata = {'call':'saveProduct','data':$scope.products}
         $http.post('/product/',postdata).then(function(data){
              if(data.errors){
                  console.log(data.message);
                  $scope.message=data.message;
            }else{
                 console.log(data.message);
                $scope.message = data.message;
            }
         });

	
    };
    $http.get('savejson.json').success(function(data){
        $scope.allProducts = data;        
    });
    $scope.editProduct = function(dataProduct){
        $scope.eproduct=dataProduct;        
    };    
    $scope.editForm = function(){
        $scope.eproduct['call']='editProduct';
       var edit_data=angular.toJson($scope.eproduct); 
       $http.post('product.php',edit_data).then( function(data){
           
       });
    };
    $scope.delProduct = function(data_del){
        data_del['call']='delProduct';
        console.log(data_del);
       $http.post('product.php',data_del).then(function(data){
           
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
