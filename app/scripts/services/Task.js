(function() {
  function Task($firebaseArray, $uibModal, $cookies) {
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);
    Task.instance = 0;

    Task.add = function(task) {
      var datetime = new Date();
      var time = datetime.getTime();
      var finish_time = time + 604800000

      var newTask = {
        task_title : task,
        finish_time : finish_time,
        finished : 'false'
      };
      tasks.$add(newTask);
    };

    Task.checkTime = function(finish_time , finished) {
        var date = new Date();
        var time = date.getTime();

        if (finished == 'true') {
          return true;
        } else if (time > finish_time) {
          return true;
        } else {
          return false;
        };
    };

    Task.complete = function(task) {

      var ref = firebase.database().ref().child("tasks").child(task.$id);
      var obj = {finished : 'true'}
      ref.update(obj);

    };

    Task.all_tasks = tasks;

    return Task;
  }

  angular
    .module('blocItOff')
    .factory('Task', ['$firebaseArray', '$uibModal', '$cookies', Task]);
})();
