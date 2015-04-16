(function() {
  model.updatePlayerControlNext = function() {
    var index = model.playerControlFlags().indexOf(true)
    //console.log(index)

    index += 1
    if (index >= model.playerControlFlags().length) {
      index = 0
    }

    //console.log(index)
    model.updatePlayerControlFlag(index)
  }

  model.htmlColor = function(color) {
    //console.log(color)
    return 'rgb(' + Math.floor(color[0]) + ',' + Math.floor(color[1]) + ',' + Math.floor(color[2]) + ')';
  }

  // current state appears to be pre-ko-foreach
  $('tr:nth-child(2)').attr('data-bind', 'click: function () { $parent.updatePlayerControlFlag($index()); }')

  $('tr:nth-child(2) td:nth-child(2)').attr('data-bind', 'click: function () { $parent.updatePlayerVisionFlag($index()); }, clickBubble: false')

  $('.div_primary_color').attr('data-bind', 'style: { backgroundColor: $data.color, borderColor: $parent.htmlColor(secondary_color) }')

  handlers.improved_player_control_colors = function(colors) {
    $('.container').css(colors)
  }

  handlers.improved_player_control_change = model.updatePlayerControlFlag
  handlers.improved_player_control_next = model.updatePlayerControlNext
})()
