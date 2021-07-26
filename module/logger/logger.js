angular.module('Logger', []).provider('Logger', [
  function () {
    var isEnabled = true;
    this.enabled = function (_isEnabled) {
      isEnabled = !!_isEnabled;
    };

    this.$get = [
      '$log',
      '$http',
      function ($log, $http) {
        var Logger = function (context) {
          this.context = context;
        };

        Logger.getInstance = function (context) {
          return new Logger(context);
        };

        //替代
        Logger.supplant = function (str, o) {
          return str.replace(/\{([^{}]*)\}/g, function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
          });
        };

        //格式化时间
        Logger.getFormattedTimestamp = function (date) {
          return Logger.supplant('{0}:{1}:{2}', [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
          ]);
        };

        Logger.prototype = {
          url: '',
          _log: function (originalFn, args) {
            if (!isEnabled) {
              return;
            }

            var now = Logger.getFormattedTimestamp(new Date());
            var message = '',
              supplantData = [];
            switch (args.length) {
              //打印格式：<timestamp> - <context>: <message>
              case 1:
                message = Logger.supplant('{0} - {1}:{2}', [
                  now,
                  this.context,
                  args[0],
                ]);
                break;
              case 3:
                //打印格式：<timestamp> - <context>::<method name>('<message>')
                //第一个参数是方法名
                //第二个参数是消息
                //第三各参数是对象
                supplantData = args[2];
                message = Logger.supplant("{0} - {1}::{1}('{3}')", [
                  now,
                  this.context,
                  args[0],
                  args[1],
                ]);
                break;
              case 2:
                //检测第二个参数类型
                if (typeof args[1] === 'string') {
                  message = Logger.supplant("{0} - {1}::{2}('{3}')", [
                    now,
                    this.context,
                    args[0],
                    args[1],
                  ]);
                } else {
                  supplantData = args[1];
                  message = Logger.supplant('{0} - {1}:{2}', [
                    now,
                    this.context,
                    args[0],
                  ]);
                }
                break;
            }

            $log[originalFn].call(null, Logger.supplant(message, supplantData));
            if (this.url) {
              $http
                .post(this.url, Logger.supplant(message, supplantData))
                .then(function (data) {});
            }
          },
          log: function () {
            this._log('log', arguments);
          },
          info: function () {
            this._log('info', arguments);
          },
          warn: function () {
            this._log('warn', arguments);
          },
          debug: function () {
            this._log('debug', arguments);
          },
          error: function () {
            this._log('error', arguments);
          },
          upload: function (data) {
            var config = {
              headers: { 'Content-Type': 'application/octet-stream' },
              transformRequest: [],
            };
            $http
              .post('http://192.168.24.108:8081/upload', data, config)
              .then(function (data) {});
          },
        };

        return Logger;
      },
    ];
  },
]);
