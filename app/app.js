var myApp = angular.module('myApp', [
  'ui.router',
]);
myApp.controller('appCtrl', function ($scope) {
})
myApp.directive('myHeader',function () {
  return {
    redirect: 'E', //'A' - 只匹配属性名称'E' - 只匹配元素名称'C' - 只匹配类名 'AEC' - 匹配属性或元素或类名
    scope: {
      user: '=info'
    },
    transclude: true,
    controller: function($scope){
      /*登录退出*/
      $scope.handleExit = function () {
        cnosole.log('退出')
      }
    },
    templateUrl: 'app/view/components/my-header.html'
  }
})

myApp.directive('myDialog', function () {
  return {
    redirect: 'E',
    scope: {
      dialogInfo: '=info',
    },
    transclude: true,
    controller: function () {
    },
    templateUrl: 'app/view/components/my-dialog.html'
  }
})
