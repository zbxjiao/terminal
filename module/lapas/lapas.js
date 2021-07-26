'use strict';
angular.module('Lapas').factory('$Lapas', function ($http, $q, $cookies) {
  var service = {
    base_url : '',
    loadData: loadData,
    icCardSet: icCardSet,
    userLogin: userLogin,
    userLogout: userLogout,
    cardBind: cardBind,
    deviceReport: deviceReport,
    deviceRegister: deviceRegister,
    jobPrintList: jobPrintList,
    jobModifyTask: jobModifyTask,
    jobDelete: jobDelete,
    jobPrint: jobPrint,
    jobCreateCopy: jobCreateCopy,
    jobScanStart: jobScanStart,
    jobScan: jobScan,
    jobScanContinue: jobScanContinue,
    jobScanStop: jobScanStop,
    jobCopy: jobCopy,
  }
  return service
  function loadData(type, path, req){
    var deferred = $q.defer();
    $http({
      method: type,
      url: this.base_url + path,
      data: req,
      headers: { Authorization: $cookies.get('token')}
    }).success(function (res) {
      if (res.success) {
        deferred.resolve(res.data)
      } else {
        deferred.reject(res.message)
      }
    }).error(function (err) {
      deferred.reject(err)
    })
    return deferred.promise;
  }

  /**
   * 登录嵌入式接口-刷卡开启、关闭事件监听
   * @param req
   */
  function icCardSet(req){
    return this.loadData('POST', '/iccardSet/set', req)
  }

  /**
   * token保持
   */
  function authKeep() {
    return this.loadData('GET', '/user/auth/keep', null)
  }
  /**
   * 登录嵌入式接口-用户密码登录
   * @param req
   */
  function userLogin(req){
    return this.loadData('POST', '/user/login', req)
  }

  /**
   * 登录嵌入式接口-登出
   * @param req
   */
  function userLogout(){
    return this.loadData('POST', '/user/logout', null)
  }

  /**
   * 自助绑卡
   */
  function cardBind(req) {
    return this.loadData('POST', 'user/card/bind', req)
  }

  /**
   * 设备状态上报
   */
  function deviceReport(req){
    return this.loadData('POST','/device/report', req)
  }

  /**
   * 设备自动注册
   */
  function deviceRegister(req){
    return this.loadData('POST','/device/register', req)
  }

  /**
   * 打印作业列表
   */
  function jobPrintList(req){
    return this.loadData('POST','/job/print_list', req)
  }

  /**
   * 修改作业信息
   */
  function jobModifyTask(req){
    return this.loadData('POST','/job/modify_task', req)
  }

  /**
   * 批量删除作业任务
   */

  function jobDelete(req){
    return this.loadData('POST','/job/delete', req)
  }

  /**
   * 批量打印
   */
  function jobPrint(req){
    return this.loadData('POST','/job/print', req)
  }

  /**
   * 创建任务及作业
   */
  function jobCreateCopy(req){
    return this.loadData('POST','/job/create_copy', req)
  }

  /**
   * 开始扫描
   */
  function jobScanStart(req){
    return this.loadData('POST','/job/scan/start', req)
  }

  /**
   * 扫描
   */
  function jobScan(req){
    return this.loadData('POST','/job/scan', req)
  }

  /**
   * 继续扫描
   */
  function jobScanContinue(req){
    return this.loadData('POST','/job/scan/continue', req)
  }

  /**
   * 扫描完成
   */
  function jobScanStop(req){
    return this.loadData('POST','/job/scan/stop', req)
  }

  /**
   * 复印输出
   */
  function jobCopy(req){
    return this.loadData('POST','/job/copy', req)
  }
})
