;(function() {
  model.playerControlFlags.subscribe(function(flags) {
    if (!flags) return

    var index = flags.indexOf(true)
    model.reviewMode(index == -1)

    var player = model.players()[index]

    if (player) {
      var color = 'rgba(' + Math.floor(player.primary_color[0]) + ',' + Math.floor(player.primary_color[1]) + ',' + Math.floor(player.primary_color[2]) + ', 0.5)';
      var border = 'rgb(' + Math.floor(player.secondary_color[0]) + ',' + Math.floor(player.secondary_color[1]) + ',' + Math.floor(player.secondary_color[2]) + ')';

      var style = {'background-color': color, 'border-color': border}

      api.panels.devmode && api.panels.devmode.message('improved_player_control_colors', style)
      api.panels.sandbox && api.panels.sandbox.message('improved_player_control_colors', style)
    }

  })

  var live_game_showCommands = model.showCommands
  model.showCommands = ko.computed(function () {
    if (model.showTimeControls() || model.reviewMode() || model.celestialControlModel.active() || model.playerControlFlags().indexOf(true) == 1)
        return false;

    return true;
  });
  // force captured computes to rerun and get new value
  live_game_showCommands.notifySubscribers()

  api.Panel.message('', 'inputmap.reload');
})()
