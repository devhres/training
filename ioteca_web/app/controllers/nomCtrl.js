app


.controller("nomCtrl", function ($scope) {
		//$scope.nombre = "Juan";
		$scope.save = function () {
			console.log("Hola "+$scope.nombre);
		};
		$scope.lista = [
    {
        "id": 3,
        "nombre": "Categoria 3",
        "codigo": "03",
        "estado": false
    },
    {
        "id": 4,
        "nombre": "Categoria 4",
        "codigo": "04",
        "estado": true
    },
    {
        "id": 5,
        "nombre": "Categoria 5",
        "codigo": "05",
        "estado": true
    },
    {
        "id": 7,
        "nombre": "s",
        "codigo": "s",
        "estado": false
    }
];
});