(function() {
  // current state appears to be pre-ko-foreach

  model.currentPlayer = ko.computed(function() {
    var index = model.playerControlFlags().indexOf(true)
    var player = model.players()[index]

    if (player) {
      var color = 'rgba(' + Math.floor(player.primary_color[0]) + ',' + Math.floor(player.primary_color[1]) + ',' + Math.floor(player.primary_color[2]) + ', 0.5)';

      $('.container').css('background-color', color)
    }

    return player
  })

  $('tr:nth-child(2)').attr('data-bind', 'click: function () { $parent.updatePlayerControlFlag($index()); }')
})()
