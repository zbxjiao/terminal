myApp.config(function ($stateProvider, $urlRouterProvider) {
  // 默认路由
  $urlRouterProvider.when("", "/login");
  $stateProvider
    .state("login", {
      url: "/login",
      templateUrl: "app/view/login/login.html"
    })
    .state("home", {
      url: "/home",
      templateUrl: "app/view/home/home.html"
    })
    .state("jobList", {
      url: "/jobList",
      templateUrl: "app/view/job/jobList.html"
    })
    .state("printJob", {
      url: "/printJob",
      templateUrl: "app/view/job/printJob.html"
    })
    .state("copyJob", {
      url: "/copyJob",
      templateUrl: "app/view/job/copyJob.html"
    })
    .state("setting", {
      url: "/setting",
      templateUrl: "app/view/setting/setting.html"
    })
})
  .config(function (IdleProvider, KeepaliveProvider) {
    // idle设置
    IdleProvider.idle(2) // 5 minutes idle 5秒链接空闲 多久无操作进入timeOut倒计时
    IdleProvider.timeout(15) // after 5 seconds idle, time the user out 倒计时结束之前无操作则执行设定的IdleTimeout。
    KeepaliveProvider.interval(2) // // 2 minute keep-alive ping  2秒  间隔多久进行一次使用户保持活跃的方法。
  })

