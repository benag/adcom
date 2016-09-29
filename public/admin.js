// declare a new module called 'myApp', and make it require the `ng-admin` module as a dependency
var myApp = angular.module('myApp', ['ng-admin']);
// declare a function to run when the module bootstraps (during the 'config' phase)
myApp.config(['NgAdminConfigurationProvider', function (nga) {
    // create an admin application
    var admin = nga.application('LifeOpt Backend');

    var user = nga.entity('users');
    // set the fields of the user entity list view
    user.listView().fields([
        nga.field('firstName'),
        nga.field('lastName'),
        nga.field('userName'),
        nga.field('password'),
        nga.field('phone')
    ]);
    // add the user entity to the admin application
    admin.addEntity(user);
    // attach the admin application to the DOM and execute it

    nga.configure(admin);
}]);