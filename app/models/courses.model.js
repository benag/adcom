
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var coursesSchema = new Schema({
    university: String,
    city: String,
    country: String,
    courseName: String,
    courseDesc: String,
    startDate: String,
    endDate: String,
    price: Number,
    currency: String

});
mongoose.model('Course', coursesSchema);