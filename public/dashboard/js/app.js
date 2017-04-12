
var cisco = angular.module('cisco', ['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap']);




cisco.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardController'

        })
        .state('add', {
            url: '/add',
            templateUrl: 'views/add.html',
            controller:'addController'
        })

});

cisco.controller('leftMenuController',  function($scope,$http, globalService, $state) {

});


//
//auctionPro.controller('oneProController', function($scope, $http, $state, globalService) {
//    $scope.pro = globalService.chosenPro;
//    $scope.back = function(){
//        $state.go('professionals');
//    }
//
//});
