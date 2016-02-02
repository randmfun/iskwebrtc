/// <reference path="../../typings/tsd.d.ts" />

angular.module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/courses', {
            templateUrl: 'views/course.html',
            controller: 'CourseController'
        });

    $locationProvider.html5Mode(true);

}]);