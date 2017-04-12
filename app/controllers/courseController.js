
'use strict';

var courseService = require('../services/courseService.js');
var file = require('fs');
var mongoose = require('mongoose'),
    Courses = mongoose.model("Course");

var courseController = {};

courseController.getCourses = function(page,limit) {
    return new Promise((resolve, reject) => {
        resolve(courseService.getCourses(page,limit))
    });
};
courseController.getUniversities = function(val) {
    return new Promise((resolve, reject) => {
        resolve(courseService.getUniversities(val))
    });
};
courseController.getCountries = function(val) {
    return new Promise((resolve, reject) => {
        resolve(courseService.getUniversities(val))
    });
};
courseController.getCities = function(val) {
    return new Promise((resolve, reject) => {
        resolve(courseService.getUniversities(val))
    });
};
courseController.createCourse = function(course) {
    return new Promise((resolve, reject) => {
        resolve(courseService.createCourse(course))
    });
};
courseController.deleteCourse = function(id) {
    return new Promise((resolve, reject) => {
        resolve(courseService.deleteCourse(id))
    });
};

courseController.init = function(){

}


module.exports = courseController;