(function (angular) {
    'use strict';
   angular.module("module2_app").controller('module2_controller',["$scope","module2_service",
        function ($scope, module2_service) {
       
        $scope.uploadResult = "";

        $scope.myForm = {
           info: ""
        }

    
          $scope.getRestTes = function () {
            module2_service.getInfo().get().then(function(data) {
                $scope.myForm = data;
            });
        }
        ;

    }]);
})(angular);