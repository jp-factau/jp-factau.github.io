angular.module('jpfactau', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/agenda', {
        templateUrl: 'views/agenda.html',
        controller: 'MeetingsCtrl'
      })
      .when('/reuniao/:id', {
        templateUrl: 'views/meeting.html',
        controller: 'MeetingsCtrl'
      })
      .when('/membros', {
        templateUrl: 'views/members.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
