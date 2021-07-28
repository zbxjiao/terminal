myApp.controller(
  'jobListCtrl',
  function ($scope) {
    $scope.pageInfo = {pageIndex: 1, pageSize:5}
    $scope.dialogIsHidden = true
    $scope.dialogInfo = {text: ''}
    $scope.editDialogIsHidden = true
    $scope.editObj = {}
    $scope.checkedList = [];
    $scope.list = [
      {
        id: '1',
        fileName: '作业名称.pdf',
        numberOfCopiesT: '1', //份
        numberOfPages: '5',//页
        colorMode: '0', //0-黑白（灰度）1-彩色
        singleAndDoubleSides: '0', //0-单面、1-双面长边翻转、2-双面短边翻转
        createTime: '09/25 15:01:35'
      },
      {
        id: '2',
        fileName: '作业名称.pdf',
        numberOfCopiesT: '1', //份
        numberOfPages: '5',//页
        colorMode: '0', //0-黑白（灰度）1-彩色
        singleAndDoubleSides: '0', //0-单面、1-双面长边翻转、2-双面短边翻转
        createTime: '09/25 15:01:35'
      },
      {
        id: '3',
        fileName: '作业名称.pdf',
        numberOfCopiesT: '1', //份
        numberOfPages: '5',//页
        colorMode: '0', //0-黑白（灰度）1-彩色
        singleAndDoubleSides: '0', //0-单面、1-双面长边翻转、2-双面短边翻转
        createTime: '09/25 15:01:35'
      },
      {
        id: '4',
        fileName: '作业名称.pdf',
        numberOfCopiesT: '1', //份
        numberOfPages: '5',//页
        colorMode: '0', //0-黑白（灰度）1-彩色
        singleAndDoubleSides: '0', //0-单面、1-双面长边翻转、2-双面短边翻转
        createTime: '09/25 15:01:35'
      }
    ]
    $scope.numberIndex = 1
    $scope.list.forEach(item => {
      item.isTest = 0;
    })
    /**
     * 复选框
     * @param item
     * @param index
     */
    $scope.choose = function (item) {
      item.isTest = !item.isTest
      if (item.isTest) {
        //选中
        var flag = $scope.checkedList.some(function (v) {
          return v.id === item.id;
        });
        if (flag) return;
        $scope.checkedList.push(item);
      } else {
        for (var j = 0; j < $scope.checkedList.length; j++) {
          var temp = $scope.checkedList[j];
          if (temp.id === item.id) {
            $scope.checkedList.splice(j, 1);
          }
        }
      }
      console.log($scope.checkedList)
    }
    $scope.first = function () {
      $scope.pageInfo.pageIndex = 1
    }
    $scope.last = function () {
      $scope.pageInfo.pageIndex = $scope.pageInfo.pageSize
    }
    $scope.before = function () {
      $scope.pageInfo.pageIndex = $scope.pageInfo.pageIndex - 1 < 1 ? 1 : $scope.pageInfo.pageIndex - 1;
    }
    $scope.next = function () {
      $scope.pageInfo.pageIndex = $scope.pageInfo.pageIndex + 1 > $scope.pageInfo.pageSize ? $scope.pageInfo.pageSize : $scope.pageInfo.pageIndex + 1
    }
    $scope.moreDel = function () {
      if ($scope.checkedList.length > 0) {
        $scope.dialogIsHidden = false
        $scope.dialogInfo = {text: '确认删除当前勾选作业？'}
      }
    }
    $scope.close = function () {
      $scope.dialogIsHidden = true
      $scope.editDialogIsHidden = true
    }
    $scope.handleJobDelete = function () {
      console.log('删除作业')
      $scope.dialogIsHidden = true
    }
    $scope.handleEdit = function () {
      console.log('编辑',$scope.editObj)
      $scope.editObj.numberOfPages = $scope.numberIndex
      $scope.editDialogIsHidden = true
    }
    $scope.editDialog = function (item) {
      $scope.editDialogIsHidden = false
      $scope.editObj = item
    }
    $scope.addNumber = function () {
      $scope.numberIndex++;
    }
    $scope.minusNumber = function () {
      $scope.numberIndex = $scope.numberIndex - 1 < 1 ? 1 : $scope.numberIndex - 1;
    }
  }
);
