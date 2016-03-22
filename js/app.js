// create a variable to hold this module, give it a name and tell it what we'll be using ie what dependencies we'll rely on.
// ngRoute will handle deep linking and artisControllers is our JS ctrlr
var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'
]);


// config looks like a function we pass an array of a 1. dependency, a 2. function that uses the dependency and has a code block using .when method of routeProvider which takes a 1. url, 2. template and 3. a ctrlr. and says .otherwise... (which looks like another routeProvider method)
myApp.config(['$routeProvider', function($routeProvider) {
    // code block
    $routeProvider.
        when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'ListController'
        }).
        when('/details/:itemId', {
            templateUrl: 'partials/details.html',
            controller: 'DetailsController'
        }).
        otherwise({
            redirectTo: '/list'
        });
}]);
