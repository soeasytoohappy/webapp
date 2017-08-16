/**
 * Created by Administrator on 2017/8/16.
 */
;(function (angualr) {
     var app=angualr.module("app",[]);
     app.controller("AppController",["$scope",function ($scope) {
         $scope.title="新鲜时刻";
     }])
})(angular);