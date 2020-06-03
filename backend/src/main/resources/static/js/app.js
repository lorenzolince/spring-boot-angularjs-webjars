(function (angular) {
    'use strict';
    const app = angular.module('app', ['ngRoute', 'module1_app' , 'module2_app', 'restangular']);

    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                    .when('/', {templateUrl: '/module1'})
                    .when('/about', {templateUrl: '/module2'})
                    .when('/logout', {templateUrl: '/logout'})
                    .when('/services', {template: '<div class="container"><div class="card-group"> <div class="card-header col-lg-6"><h1>Service</h1></div></div><div class="form-group col-lg-12"><h2>static template service</h2></div></div>'})
                    .when('/gallery', {template: '<div class="container"><div class="card-group"> <div class="card-header col-lg-6"><h1>Gallery</h1></div></div><div class="form-group col-lg-12"><h2>static template gallery</h2></div></div>'})
                    .when('/contact', {template: '<div class="container"><div class="card-group"> <div class="card-header col-lg-6"><h1>Contact</h1></div></div><div class="form-group col-lg-12"><h2>static template Contact</h2></div></div>'})
                    ;

            $routeProvider.otherwise(
                    {redirectTo: '/'}
            );
        }]);
    app.factory('sessionTimeoutInterceptor', ['$q', function ($q) {
            return {
                responseError: function (res) {
                    let response = res;
                    if (res.status == 401 || res.status == 403) {
                        // this should trigger the login page
                        document.location.reload();
                    } else if (res.status == 400 || res.status >= 500) {
                        response = $q.reject(res);
                    } else {
                        //Do nothing
                    }
                    return response;
                }
            };
        }]);
    app.config(function ($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('sessionTimeoutInterceptor');

    });

    /**
     * Restangular configuration for this module
     */
    app.config(['RestangularProvider', function (RestangularProvider) {
            RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});
            RestangularProvider.setBaseUrl(window.location.origin + '/api/');
            RestangularProvider.setRestangularFields({selfLink: '_links.self.href'});
            RestangularProvider.addResponseInterceptor(function (data, operation) {
                let extractedData;
                if (operation === "getList") {

                    if (!data) {
                        extractedData = [];
                    } else {
                        if (!data._embedded) {
                            if (data.entity) {
                                extractedData = data.entity;
                            } else if (data.content) {
                                extractedData = data.content;
                            } else {
                                extractedData = data;
                            }
                        } else {
                            extractedData = data._embedded[Object.keys(data._embedded)[0]];
                            extractedData.meta = data.page;
                        }
                    }
                } else {
                    extractedData = data;
                }
                return extractedData;
            });
            RestangularProvider.setErrorInterceptor(function (response) {
                if (response.status >= 500) {
                    console.error("Error on request, status " + response.status);
                }
            });
            RestangularProvider.setPlainByDefault(true);
        }]);

})(angular);
