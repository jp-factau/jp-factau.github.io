'use strict';

angular.module('jpfactau')
.controller('MeetingsCtrl', function ($scope, $http, $routeParams) {

 $http.get('meetings.json')
 .success(function(data){
  $scope.meetings = data;
})
 .error(function(){
  $scope.meetings = 'Nenhum registro encontrado';
});


 $scope.show = function() {
   $http.get('meetings/'+$routeParams.id+'.json')
   .success(function(data){
    $scope.meeting = data;
  })
   .error(function(){
    $scope.meeting = 'Nenhum registro encontrado';
  });
 };

});