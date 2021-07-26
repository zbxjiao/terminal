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

