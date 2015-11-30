var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/about.html',
        controller: 'mainController'
    })
    
    .when('/year1', {
        templateUrl: 'pages/year1.html',
        controller: 'firstController'
    })
    
    .when('/year2', {
        templateUrl: 'pages/year2.html',
        controller: 'secondController'
    })
    
    .when('/year3', {
        templateUrl: 'pages/year3.html',
        controller: 'thirdController'
    })
    
    .when('/year4', {
        templateUrl: 'pages/year4.html',
        controller: 'fourthController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('firstController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'First';
    
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Second';
    
}]);
myApp.controller('thirdController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Third';
    
}]);
myApp.controller('fourthController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Fourth';
    
}]);