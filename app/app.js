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
    templateUrl: 'app/view/components/my-header.html'
  }
})
