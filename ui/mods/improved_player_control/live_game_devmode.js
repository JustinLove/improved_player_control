(function() {
  // current state appears to be pre-ko-foreach

  $('tr:nth-child(2)').attr('data-bind', 'click: function () { $parent.updatePlayerControlFlag($index()); }')

  handlers.improved_player_control_colors = function(colors) {
    $('.container').css(colors)
  }

  handlers.improved_player_control_change = model.updatePlayerControlFlag
})()
