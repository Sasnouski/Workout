'use strict';

angular.module('app', ['ngRoute','ngSanitize','mediaPlayer', 'ui.bootstrap', '7minWorkout', 'ngAnimate']).
  config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {
    $routeProvider
      .when('/start', { templateUrl: 'views/start.html' })
      .when('/workout', { templateUrl: 'views/workout.html', controller: 'WorkoutController' })
      .when('/finish', { templateUrl: 'views/finish.html' })
      .otherwise({ redirectTo: '/start' });
    //$locationProvider.html5Mode({
    //  enabled: true,
    //  requireBase: false
    //});
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://*.youtube.com/**']);
  });

angular.module('7minWorkout', []);