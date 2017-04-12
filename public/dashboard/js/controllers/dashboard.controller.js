cisco.controller('dashboardController',  function($scope,$http, currencyService, globalService, $state) {


    $scope.parseDate = function(str) {
        var mdy = str.split('-')
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    }

    $scope.daydiff = function(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    }
    $scope.returnDiff = function(end,start){
        var endDate = $scope.parseDate(end);
        var startDate = $scope.parseDate(start);
        return $scope.daydiff(endDate,startDate );
    }

    $scope.add = function(){
        $state.go('add');
    }
    $scope.edit = function(){

    }
    $scope.delete = function(index){
        $http.put('/courses/delete/' + $scope.courses[index].id)
        .then(function(courses){
            $scope.filterCourses(courses.data)
        })
    }
    $scope.filterCourses = function(courses){
        for (var i = 0 ; i< courses.length; i++){
            var end  = courses[i].end;
            var start = courses[i].start;
            courses[i].length = $scope.returnDiff(end,start);
            courses[i].price = currencyService.getCurrency(courses[i].currency) +' '+ courses[i].price;
        }
        $scope.courses = courses;
    }
    $scope.courses = function(page){
        $http.get('/courses/' +page+'/10')
        .then(function(courses){
            $scope.filterCourses(courses.data)
        })
        .catch(function(err){

        })
    }
    $scope.init= function(){
        $http.get('/courses/0/10')
        .then(function(courses){
            $scope.filterCourses(courses.data)
        })
        .catch(function(err){

        })
    }
});