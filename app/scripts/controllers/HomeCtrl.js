(function() {
  function HomeCtrl(Task) {
    this.Task = Task;
  }

  angular
    .module('blocItOff')
    .controller('HomeCtrl', ['Task', '$uibModal', HomeCtrl]);
})();
