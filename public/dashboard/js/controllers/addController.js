cisco.controller('addController',  function($scope,$http, globalService, $state, $rootScope, $q) {

    $scope.newCourse = {};
    $scope.newCourse.startDate ='';
    $scope.newCourse.endDate ='';
    $scope.newCourse.courseName ='';
    $scope.newCourse.university ='';
    $scope.newCourse.country ='';
    $scope.newCourse.city ='';
    $scope.newCourse.price = '';



    $scope.back = function(){
        $state.go('dashboard');
    }
    $scope.startDate = Date.now();
    $scope.enedDate = Date.now();
    $scope.ngModelOptionsSelected = function(value) {
        if (arguments.length) {
            _selected = value;
        } else {
            return _selected;
        }
    };

    $scope.modelOptions = {
        debounce: {
            default: 500,
            blur: 250
        },
        getterSetter: true
    };


    // Dates

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };
    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }


    $scope.create = function(){
        $http.post('courses',$scope.newCourse)
        .then(function(){

        }).catch(function(err){
            console.log(err);
        })

    }
    $scope.getUniversities = function(val){
        return $http.get('/universities/'+val)
        .then(function(universities){
            return $q(function(resolve, reject) {
               resolve(universities.data);
            });

        }).catch(function(err){
            console.log(err);
        })
    }
    $scope.getCountries = function(val){
        $http.get('/countries/'+val)
        .then(function(countries){
            return $q(function(resolve, reject) {
                resolve(countries.data);
            });
        }).catch(function(err){
            console.log(err);
        })
    }
    $scope.getCities = function(val){
        $http.get('/cities/'+val)
        .then(function(cities){
                return $q(function(resolve, reject) {
                    resolve(cities.data);
                });
            //return universities.data;
        }).catch(function(err){
            console.log(err);
        })
    }

    $scope.getCurrency = function(val){
        $http.get('/currency/'+val)
        .then(function(currency){
            return $q(function(resolve, reject) {
                resolve(currency.data);
            });
            //return universities.data;
        }).catch(function(err){
            console.log(err);
        })
    }


});