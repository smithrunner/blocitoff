(function() {
  function HistoryCtrl(Task) {
    this.Task = Task;
  }

  angular
    .module('blocItOff')
    .controller('HistoryCtrl', ['Task', HistoryCtrl]);
})();
