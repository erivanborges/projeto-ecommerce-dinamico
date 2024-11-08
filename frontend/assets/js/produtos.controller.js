( function(app) {
        'use strict';

        app.controller('ProdutoController', function($scope, $http) {
            $scope.produtos = [];

            function init() {
                $http.get('http://localhost:3000/produtos')
                        .then(function(result){
                            $scope.produtos = result.data;
                        }).catch(function(error){
                            console.log(error)
                        });
            }

            init();

        });
        
}) (appFE);