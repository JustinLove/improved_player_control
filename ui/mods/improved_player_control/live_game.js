model.playerControlFlags.subscribe(function(flags) {
  if (!flags) return

  var index = flags.indexOf(true)
  var player = model.players()[index]

  if (player) {
    var color = 'rgba(' + Math.floor(player.primary_color[0]) + ',' + Math.floor(player.primary_color[1]) + ',' + Math.floor(player.primary_color[2]) + ', 0.5)';
    var border = 'rgb(' + Math.floor(player.secondary_color[0]) + ',' + Math.floor(player.secondary_color[1]) + ',' + Math.floor(player.secondary_color[2]) + ')';

    var style = {'background-color': color, 'border-color': border}
    console.log(style, api.panels.devmode, api.panels.sandbox)

    api.panels.devmode && api.panels.devmode.message('improved_player_control_colors', style)
    api.panels.sandbox && api.panels.sandbox.message('improved_player_control_colors', style)
  }

  api.Panel.message('', 'inputmap.reload');
})
