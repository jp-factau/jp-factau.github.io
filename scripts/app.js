angular.module('jpfactau', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
  ])
  .factory('ApiService', function() {
      var group_acronym =  "jpfactau";
      var api_version =  "v1";
      var server =  "http://192.168.33.10:3000/api";
    return {
      full_path: server+"/"+api_version+"/"+group_acronym+"/"
    };
  })
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/agenda', {
      templateUrl: 'views/meetings/index.html',
      controller: 'MeetingsCtrl'
    })
    .when('/reuniao/:id', {
      templateUrl: 'views/meetings/show.html',
      controller: 'MeetingsCtrl'
    })
    .when('/membros', {
      templateUrl: 'views/members/index.html',
      controller: 'MembersCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });