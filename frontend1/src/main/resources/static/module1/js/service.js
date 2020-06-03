
(function(angular) {
    'use strict';

    angular.module("module1_app").service("module1_service", ["Restangular",
        function(Restangular) {
           
           const headers = {
                'Accept':       'application/json',
                'Content-Type': 'application/json'
            };

         this.getTest = function() {
            return  Restangular.one('rest/get-test');
                 
            };


    }]);

})(angular);

