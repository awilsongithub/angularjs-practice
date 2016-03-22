// TO USE $HTTP TO GET JSON NOT ON A SERVER YOU NEED TO USE SAFARI OR DISABLE CHROME SECURITY BY CLOSING AND OPENING IT IN TERMINAL WITH:  open -a Google\ Chrome --args --disable-web-security


// artistControllers variable holds our module. empty array since no dependencies. artistControllers namespaces code so it won't interfere with other js
var artistControllers = angular.module('artistControllers', ['ngAnimate']);

// $scope is a super variable for passing around betweeen modules
// controller gets a name and a function
// array brackets protect 2 vars and function literal from minification
artistControllers.controller('ListController', ['$scope', '$http',
    function($scope, $http) {
        // $http service get method on success pass data to func. literal
        $http.get('js/data.json').success(function(data) {
            $scope.artists = data;
            $scope.artistOrder = 'name';
    });
}]);


// copy and paste ListController to make a new ctrlr in this artistControllers module. It also has the $routeParams depency. To know which item was clicked,use routeParams.ItemId from url
artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        // chaining http methods
        $http.get('js/data.json').success(function(data) {
            // sub variables of super variable $scope populated
            $scope.artists = data;
            $scope.whichItem = $routeParams.itemId;

            // setting variables for navigating through array:
            // if at first, prev is last. if at last, next is 0.
            // else prev is -1, next is +1
            if ($routeParams.itemId > 0) {
                $scope.prevItem = Number($routeParams.itemId) - 1;
            } else {
                $scope.prevItem = $scope.artists.length-1;
            }

            if ($routeParams.itemId < $scope.artists.length-1) {
                $scope.nextItem = Number($routeParams.itemId) + 1;
            } else {
                $scope.nextItem = 0;
            }

        });
}]); // end controller params, depend. array, ctrlr main function
