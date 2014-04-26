'use strict';

angular.module('jpfactau')
.controller('MembersCtrl', function ($scope, $resource, $http, $routeParams, ApiService) {
  
  $scope.index = function(){
    $http.get(ApiService.full_path+'members')
    .success(function(data){
      $scope.members = data;
    })
    .error(function(data){
      console.log(data);
      $scope.members = 'Nenhum membro encontrado';
    });
  }

  $scope.create = function() {
    console.log($scope.member);
    $scope.loading = true;
    $http({
      url: ApiService.full_path+'members',
      method: 'POST',
      data: {member: $scope.member }
    }).success(function(){
      $scope.loading = false;
      alert("Usuário cadastrado com sucesso!");
    });
  };

});