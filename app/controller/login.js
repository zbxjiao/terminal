myApp.controller('loginCtrl', function ($scope, $state) {

  $scope.loginTitle = '登录'
  $scope.errorInfo = '用户名或密码不正确'
  $scope.slotCardTitle = '刷卡登录'
  $scope.accountTitle = '账号登录'

  $scope.errorFlag = false //是否提示错误

  $scope.loginPageType = 'login' //登录类型  bind 绑定   login 登录    bindTip 绑卡提示信息      bindTipSuccess  绑卡成功提示信息
  $scope.cardLoginType = 'card' // 登录的方式  刷卡  card    账号 account
  $scope.isEyeFlag = true //


  $scope.eyeClick = function () {
    $scope.isEyeFlag = !$scope.isEyeFlag
  }

  // 模拟刷卡后
  $scope.slotCardClick = function () {
    var res = false // 未绑卡
    $scope.loginPageType = 'bindTip'
  }

  // 去账号登陆
  $scope.slotClick = function () {
    $scope.cardLoginType = 'account'

  }
  // 去刷卡
  $scope.accountClick = function () {
    $scope.cardLoginType = 'card'
  }
  // 登录按钮
  $scope.loginClick = function () {
    //请求接口  返回某个值
    var result = false
    if (!result) {
      $state.go('home')
    }

  }

  //立即绑卡
  $scope.cardBingClick = function () {
    $scope.loginPageType = 'bind'
  }

  //返回
  $scope.goBackClick = function () {
    $scope.loginPageType = 'login'
  }

  //绑卡
  $scope.bindCard = function () {
    var result = false
    if (!result) {
      $scope.errorFlag = true
    } else {
      $scope.errorFlag = false
      $scope.loginPageType = bindTipSuccess
      setTimeout(function () {
        $state.go('home')
      }, 2000)
    }
  }

  $scope.submitForm = function () {
  }
});
