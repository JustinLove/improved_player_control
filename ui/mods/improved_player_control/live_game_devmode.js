(function() {
  // current state appears to be pre-ko-foreach

  $('tr:nth-child(2)').attr('data-bind', 'click: function () { $parent.updatePlayerControlFlag($index()); }')
})()