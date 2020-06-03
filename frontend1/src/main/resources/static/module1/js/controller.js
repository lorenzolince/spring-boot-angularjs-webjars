(function (angular) {
    'use strict';
    angular.module("module1_app").controller('module1_controller', ["$scope",  "module1_service",
        function ($scope, module1_service) {

            $scope.uploadResult = "";

            $scope.myForm = {
                code: 0,
                description: "",
                name: ""
            }

            $scope.getRestTest = function () {
                module1_service.getTest().get().then(function (data) {
                    $scope.myForm = data;
                });
            }
            ;

        }]);
})(angular);