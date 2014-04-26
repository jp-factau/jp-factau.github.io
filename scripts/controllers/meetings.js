'use strict';

angular.module('jpfactau')
.controller('MeetingsCtrl', function ($scope,$http,$routeParams,ApiService) {
$scope.loading = true;
 $http.get(ApiService.full_path+'meetings')
 .success(function(data){
  $scope.loading = false;
  $scope.meetings = data;
})
 .error(function(){
  $scope.meetings = 'Nenhum registro encontrado';
});


 $scope.show = function() {
  $scope.loading = true;
  $http.get(ApiService.full_path+'meetings/'+$routeParams.id)
   .success(function(data){
    $scope.loading = false;
    $scope.meeting = data;
  })
   .error(function(){
    $scope.meeting = 'Nenhum registro encontrado';
  });
 };

});