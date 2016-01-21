app


.controller("categoriaController", function ($scope, API) {

     $scope.lista=[];

    API.Categoria.list().$promise.then(function (r) {
        $scope.lista=r;
    }, function (err) {
        console.log(err);
    });
});