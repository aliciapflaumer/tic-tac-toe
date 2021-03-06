'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const store = require('../store')

const api = require('./api')
const ui = require('./ui')


// game events
const addHandlers = function () {

  $('.newGame').on('click', function (event) {
    // console.log('new game button clicked!')
    event.preventDefault()
    const data = getFormFields(event.target)
    turn = 'X'
    $('.game-board').show()
    $('.scoreboard_wrapper').show()
    $('.box').text('')
    $('#getGamesBtn').show()
    // $('.resetGame').show()
    api.createGame()
      .then(ui.createGameSuccess)
      .catch(ui.createGameFailure)
  })

  $('#getGamesBtn').on('click', function (event) {
      event.preventDefault()
      // console.log('getGamesBtn button clicked!')
  api.getGames()
    .then(ui.getGamesSuccess)
  })

let turn = 'X'

// setting up event listener
// "div[id^='cell']"
$('.box').on('click', function (event) {
  event.preventDefault()
  // console.log(this)

    if ($(this).text() === '') {
      // target element that we click on and change text

        if (turn === 'X') {
          $(this).text('X')
          turn = 'O'
        } else {
          $(this).text('O')
          turn = 'X'
        }
      }
    onUpdateGame()

  // If tie game
    if ($('#cell0').text() !== '' && $('#cell1').text() !== '' && $('#cell2').text() !== '' &&
    $('#cell3').text() !== '' && $('#cell4').text() !== '' && $('#cell5').text() !== '' &&
    $('#cell6').text() !== '' && $('#cell7').text() !== '' && $('#cell8').text() !== '') {
      $('#game-message').text('Game Over. It\'s a draw. No one wins this game.').fadeIn(5000).fadeOut(5000),
      $('.game-board').hide()
    }

// if Player X wins
 if ($('#cell0').text() === 'X' && $('#cell1').text() === 'X' && $('#cell2').text() === 'X')
   {
    $('#game-message').text('Game Over. Player X Wins!').fadeIn(5000)
    $('.game-board').hide()
   }
   else if ($('#cell3').text() === 'X' && $('#cell4').text() === 'X' && $('#cell5').text() === 'X')
   {
    $('#game-message').text('Game Over. Player X Wins!').fadeIn(5000)
    $('.game-board').hide()
   }
   else if ($('#cell6').text() === 'X' && $('#cell7').text() === 'X' && $('#cell8').text() === 'X')
   {
    $('#game-message').text('Game Over. Player X Wins!').fadeIn(5000)
    $('.game-board').hide()
   }
   else if ($('#cell0').text() === 'X' && $('#cell3').text() === 'X' && $('#cell6').text() === 'X')
   {
    $('#game-message').text('Game Over. Player X Wins!').fadeIn(5000)
    $('.game-board').hide()
   }
   else if ($('#cell1').text() === 'X' && $('#cell4').text() === 'X' && $('#cell7').text() === 'X')
   {
    $('#game-message').text('Game Over. Player X Wins!').fadeIn(5000)
    $('.game-board').hide()
   }
   else if ($('#cell2').text() === 'X' && $('#cell5').text() === 'X' && $('#cell8').text() === 'X')
   {
    $('#game-message').text('Game Over. Player X Wins!').fadeIn(5000)
    $('.game-board').hide()
   }
   else if ($('#cell0').text() === 'X' && $('#cell4').text() === 'X' && $('#cell8').text() === 'X')
   {
    $('#game-message').text('Game Over. Player X Wins!').fadeIn(5000)
    $('.game-board').hide()
   }
   else if ($('#cell2').text() === 'X' && $('#cell4').text() === 'X' && $('#cell6').text() === 'X')
   {
    $('#game-message').text('Game Over. Player X Wins!').fadeIn(5000)
    $('.game-board').hide()
   }

// If player O Wins
if ($('#cell0').text() === 'O' && $('#cell1').text() === 'O' && $('#cell2').text() === 'O')
  {
    $('#game-message').text('Game Over. Player O Wins!').fadeIn(5000)
    $('.game-board').hide()
  }
  else if ($('#cell3').text() === 'O' && $('#cell4').text() === 'O' && $('#cell5').text() === 'O')
  {
    $('#game-message').text('Game Over. Player O Wins!').fadeIn(5000)
    $('.game-board').hide()
  }
  else if ($('#cell6').text() === 'O' && $('#cell7').text() === 'O' && $('#cell8').text() === 'O')
  {
    $('#game-message').text('Game Over. Player O Wins!').fadeIn(5000)
    $('.game-board').hide()
  }
  else if ($('#cell0').text() === 'O' && $('#cell3').text() === 'O' && $('#cell6').text() === 'O')
  {
    $('#game-message').text('Game Over. Player O Wins!').fadeIn(5000)
    $('.game-board').hide()
  }
  else if ($('#cell1').text() === 'O' && $('#cell4').text() === 'O' && $('#cell7').text() === 'O')
  {
    $('#game-message').text('Game Over. Player O Wins!').fadeIn(5000)
    $('.game-board').hide()
  }
  else if ($('#cell2').text() === 'O' && $('#cell5').text() === 'O' && $('#cell8').text() === 'O')
  {
    $('#game-message').text('Game Over. Player O Wins!').fadeIn(5000)
    $('.game-board').hide()
  }
  else if ($('#cell0').text() === 'O' && $('#cell4').text() === 'O' && $('#cell8').text() === 'O')
  {
    $('#game-message').text('Game Over. Player O Wins!').fadeIn(5000)
    $('.game-board').hide()
  }
  else if ($('#cell2').text() === 'O' && $('#cell4').text() === 'O' && $('#cell6').text() === 'O')
  {
    $('#game-message').text('Game Over. Player O Wins!').fadeIn(5000)
    $('.game-board').hide()
  }

})


} // end addHandlers function


// Update the data every time a user makes a move
const onUpdateGame = function (index, value, over) {
  // console.log('onUpdateGame event function reached')

  const data = {
    'game': {
      'cell': {
        'index': index,
        'value': value
      },
      'over': over
    }
  }
  // console.log(data)

  api.updateGame(data)
  .then(ui.updateGameSuccess)
  .catch(ui.updateGameFailure)
}

module.exports = {
  addHandlers,
  onUpdateGame
}
