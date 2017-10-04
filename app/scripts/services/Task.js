(function() {
  function Task($firebaseArray, $uibModal, $cookies) {
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);
    Task.instance = 0;

    Task.add = function(task) {
      tasks.$add({
        'task': task
      });
    };

    Task.all = tasks;

    return Task;
  }

  angular
    .module('blocItOff')
    .factory('Task', ['$firebaseArray', '$uibModal', '$cookies', Task]);
})();
