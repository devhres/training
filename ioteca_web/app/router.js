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
	});
});