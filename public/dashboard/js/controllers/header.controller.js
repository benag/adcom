cisco.controller('headerController',  function($scope,$http, globalService, $state, $rootScope) {
    $rootScope.$on('login',function(){
        $scope.member = globalService.user.firstName;
    });
    $scope.logout = function(){
        globalService.login = false;
        globalService.user = {};
        $state.go('login');
    };
    $scope.goPro = function() {
        if (globalService.login) $state.go('professionals');
    };


});