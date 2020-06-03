
(function(angular) {
    'use strict';

    angular.module("module2_app").service("module2_service", ["Restangular",
        function(Restangular) {
           
           const headers = {
                'Accept':       'application/json',
                'Content-Type': 'application/json'
            };

         this.getInfo = function() {
            return  Restangular.one('rest/get-info');
                 
            };


    }]);

})(angular);

