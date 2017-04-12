
var courseController = require('../app/controllers/courseController.js');
exports.index = function(req, res){

  //res.render('index', { title: 'Express' })
};

exports.getCourses = function(req, res){
    var page  = req.params.page;
    var limit = req.params.limit;

    courseController.getCourses(page,limit)
    .then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
    });
    //return new Promise((resolve, reject) => {
    //  resolve({
    //      university:'Mariland',
    //      location: 'blabl',
    //      start:'2016-09-23',
    //      end: '2017-02-18',
    //      price:100,
    //      currency:'AMD'
    //  },
    //  {
    //      university:'UCDAVIS',
    //      location: 'california',
    //      start:'',
    //      end:'',
    //      price:200,
    //      currency:'PLN'
    //  })
    //});
}

exports.getUniversities = function(req, res){
    var val = req.params.val;
    courseController.getUniversities(val)
    .then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
    })
}
exports.getCountries = function(req, res){
    var val = req.params.val;
    courseController.getUniversities(val)
        .then(function(result){
            res.json(result);
        }).catch(function(err){
            console.log(err);
        })
}
exports.getCities = function(req, res){
    var val = req.params.val;
    courseController.getUniversities(val)
        .then(function(result){
            res.json(result);
        }).catch(function(err){
            console.log(err);
        })
}
exports.getCurrency = function(req, res){
    var val = req.params.val;
    courseController.getCurrency(val)
        .then(function(result){
            res.json(result);
        }).catch(function(err){
            console.log(err);
        })
}

exports.updateCourse = function(req, res){

    courseController.updateCourse(req.body.id)
    .then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
    })

}
exports.deleteCourse = function(req, res){

    courseController.deleteCourse(req.params.id)
        .then(function(result){
            res.json(result);
        }).catch(function(err){
            console.log(err);
        })

}
exports.createCourse = function(req, res){

    courseController.createCourse(req.body.course)
        .then(function(result){
            res.json(result);
        }).catch(function(err){
            console.log(err);
        })

}


