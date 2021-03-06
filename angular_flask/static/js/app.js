'use strict';

angular.module('AngularFlask', ['ngRoute', 'angularFlaskServices'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/landing.html',
			controller: IndexController
		})
		.when('/login', {
			templateUrl: 'static/partials/about.html',
			controller: AboutController
		})
		.when('/pos', {
			templateUrl: 'static/partials/post-list.html',
			controller: PostListController
		})
		.when('/pos/:postId', {
			templateUrl: '/static/partials/post-detail.html',
			controller: PostDetailController
		})
		/* Create a "/blog" route that takes the user to the same place as "/post" */
		.when('/blog', {
			templateUrl: 'static/partials/post-list.html',
			controller: PostListController
		})
		.otherwise({
			redirectTo: '/'
		})
		;

		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('');
	}])
;
