angular.module('goldenwolf-test-clientApp')
  .controller('AppCtrl', ['$scope', '$resource', 'appConfig', function AppCtrl($scope, $resource, appConfig) {
    $scope.todos = [];
    
    var todoService = $resource(appConfig.apiRoot + '/todos.json');
    $scope.getTodos = function() {
      console.log('Performing query');
      $scope.todos = todoService.query();
    };
  }]);

function DynamicCtrl($scope) {
    $scope.message = "Hello world!";
}

function DeeplinkCtrl($scope, $routeParams) {
    $scope.paramMsg = $routeParams.msg;
}