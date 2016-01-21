app


.controller("nomCtrl", function ($scope) {
		$scope.nombre = "Juan";
		$scope.save = function () {
			console.log("Hola "+$scope.nombre);
		};
});