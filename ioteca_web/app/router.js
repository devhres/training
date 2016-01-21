app

.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/nopage");

	$stateProvider

	.state("nop",{
		url:"/nopage",
		templateUrl:"app/views/nopage.html"
	})
	.state("test1",{
		url:"/test1",
		templateUrl:"app/views/test1.html"
	})
	.state("categoria",{
		url:"/categoria",
		templateUrl:"app/views/categoria.html"
	});
});

app.config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    // $httpProvider.defaults.headers.post['Content-Type'] = undefined;
    // $httpProvider.defaults.headers.put['Content-Type'] = undefined;
}])

.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);