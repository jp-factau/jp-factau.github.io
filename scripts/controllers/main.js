'use strict';

angular.module('jpfactau')
.controller('MainCtrl', function ($scope, $http, ApiService) {
  
  $http.get(ApiService.full_path+'info')
  .success(function(data){
    $scope.group = data;
  })
  .error(function(){
    $scope.group = 'Nenhum registro encontrado';
  });

});