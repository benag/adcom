
'use strict';

var courseService = {};
// moc for testing front end

courseService.courses = [{
    id:'1234',
    courseName:'test',
    university:'Mariland',
    location: 'blabl',
    country:'woshington',
    city:'wa',
    start:'2016-09-23',
    end: '2017-02-18',
    price:100,
    currency:'AMD'
},
    {
        id:'467567',
        courseName:'algebra',
        university:'washington',
        location: 'washington',
        country: 'dsasd',
        city:'ergeg',
        start:'2016-04-24',
        end:'2016-06-22',
        price:200,
        currency:'PLN'
    }]

courseService.getCourses = function(page,limit){
    return new Promise((resolve, reject) => {
        var returnArray = [];
        var index  = page*limit;

        resolve(courseService.courses.slice(index));
    });
    //Courses.find()
    //    .skip(page*limit)
    //    .limit(limit)
    //    .exec(function (err, doc) {
    //        if(err) {
    //            deferred.reject({status:'Error',payload:{}})
    //        }else{
    //            deferred.resolve({status:'Ok',payload:doc});
    //        }
    //    });
    //return deferred.promise;
}

courseService.getUniversities = function(val){
    return new Promise((resolve, reject) => {
        let courses = courseService.courses;
        let results = [];
        for (var i =0; i < courses.length; i++ ){
            if (courses[i].university.indexOf(val) != -1) results.push(courses[i].university);
        }
        resolve(results);
    });
}
courseService.getCountries = function(val){
    return new Promise((resolve, reject) => {
        let courses = courseService.courses;
        let results = [];
        for (var i =0; i < courses.length; i++ ){
            if (courses[i].country.indexOf(val) != -1) results.push(courses[i].country);
        }
        resolve(results);
    });
}
courseService.getCities = function(val){
    return new Promise((resolve, reject) => {
        let courses = courseService.courses;
        let results = [];
        for (var i =0; i < courses.length; i++ ){
            if (courses[i].city.indexOf(val) != -1) results.push(courses[i].city);
        }
        resolve(results);
    });
}
courseService.getCurrency = function(val){
    return new Promise((resolve, reject) => {
        let courses = courseService.courses;
        let results = [];
        for (var i =0; i < courses.length; i++ ){
            if (courses[i].currency.indexOf(val) != -1) results.push(courses[i].currency);
        }
        resolve(results);
    });
}
courseService.createCourse = function(course){
    return new Promise((resolve, reject) => {
        let courses = courseService.courses;
        courses.push(course);
        resolve(results);
    });
}
courseService.deleteCourse = function(id){
    return new Promise((resolve, reject) => {
        let courses = courseService.courses;
        for (var i =0; i < courses.length; i++ ){
            if (courses[i].id === id) courses.slice(i,1);
        }
        resolve(courses);
    });
}

module.exports = courseService;