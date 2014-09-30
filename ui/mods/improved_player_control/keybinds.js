(function() {
  var controlPlayer = function(n) {
    return function() {
      api.panels && api.panels.devmode && api.panels.devmode.message('improved_player_control_change', n)
    }
  }
  var def
  for (var i = 1;i <= 10;i++) {
    action_sets.hacks['control_player_' + i] = controlPlayer(i-1)
    if (i == 10) {
      def = 'shift+ctrl+0'
    } else {
      def = 'shift+ctrl+' + i
    }
    api.settings.definitions.keyboard.settings['control_player_' + i] = {
      title: 'control player ' + i,
      type: 'keybind',
      set: 'mods',
      display_group: 'mods',
      display_sub_group: 'improved player control',
      default: def
    }
  }

  action_sets.hacks.control_next_player = function() {
    api.panels && api.panels.devmode && api.panels.devmode.message('improved_player_control_next')
  }
  api.settings.definitions.keyboard.settings.control_next_player = {
    title: 'control next player',
    type: 'keybind',
    set: 'mods',
    display_group: 'mods',
    display_sub_group: 'improved player control',
    default: 'shift+ctrl+,'
  }
})()
