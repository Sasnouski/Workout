'use strict';

angular.module('app')
  .controller('RootController', ['$scope', '$modal', function ($scope, $modal) {
    $scope.showWorkoutHistory = function () {
      $scope.pauseWorkout();
      var dailog = $modal.open({
        templateUrl: 'views/workout-history.html',
        controller: WorkoutHistoryController,
        size: 'lg'
      });
    };

    var WorkoutHistoryController = function ($scope, $modalInstance, workoutHistoryTracker) {
      $scope.search = {};
      $scope.search.completed = '';
      $scope.history = workoutHistoryTracker.getHistory();

      $scope.ok = function () {
        $modalInstance.close();
        $scope.$child.resumeWorkout();
      };
    };
    WorkoutHistoryController['$inject'] = ['$scope', '$modalInstance', 'workoutHistoryTracker'];

  }]);
