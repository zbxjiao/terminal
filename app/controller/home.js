myApp.controller(
  'homeCtrl',
  function ($scope, $rootScope, $state) {
    $scope.dialogIsHidden = true
    $scope.dialogInfo = {text: '请到客户端完善邮箱信息'}
    $scope.close = function () {
      $scope.dialogIsHidden = true
    }
    $scope.handlePrint = function () {
      $state.go('jobList')
    }
  }
);
