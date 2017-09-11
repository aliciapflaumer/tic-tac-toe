'use strict'

const store = require('../store')

const creatGameSuccess = function() {
  $('.game-board').show()
  $('#message').text("It\'s X\'s turn!")
}


module.exports = {
  creatGameSuccess
}
