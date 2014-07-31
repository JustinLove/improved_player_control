(function() {
  var controlPlayer = function(n) {
    return function() {
      api.panels && api.panels.devmode && api.panels.devmode.message('improved_player_control_change', n)
    }
  }
  for (var i = 1;i <= 10;i++) {
    action_sets.hacks['control player ' + i] = controlPlayer(i-1)
    if (i == 10) {
      default_keybinds.hacks['control player ' + i] = 'shift+ctrl+0'
    } else {
      default_keybinds.hacks['control player ' + i] = 'shift+ctrl+' + i
    }
  }

  action_sets.hacks['control next player'] = function() {
    api.panels && api.panels.devmode && api.panels.devmode.message('improved_player_control_next')
  }
  default_keybinds.hacks['control next player'] = 'shift+ctrl+,'
})()
