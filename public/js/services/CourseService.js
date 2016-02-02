/// <reference path="../../../typings/tsd.d.ts" />

angular.module('CourseService', []).factory('Course', ['$http', function($http) {

    return {
        // call to get all courses
        get : function() {
            return $http.get('/api/courses');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new Course
        create : function(courseData) {
            return $http.post('/api/courses', courseData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/courses/' + id);
        }
    };       

}]);
