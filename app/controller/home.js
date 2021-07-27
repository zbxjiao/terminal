myApp.controller(
  'homeCtrl',
  function ($scope, $rootScope) {
    $scope.currentUser = {username: 'dd'}
    $scope.dialogInfo = {text: '请到客户端完善邮箱信息'}
    $scope.close = function () {
      $scope.dialogIsHidden = true
    }
  }
);
