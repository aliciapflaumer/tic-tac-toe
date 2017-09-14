'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')


// game events
const addHandlers = function () {

$('.newGame').on('click', function (event) {
  // console.log('new game button clicked!')
  event.preventDefault()
  const data = getFormFields(event.target)

  $('.game-board').show()
  $('.scoreboard_wrapper').show()

  $('.box').text('')

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
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


  // If tie game
    if ($('#cell0').text() !== '' && $('#cell1').text() !== '' && $('#cell2').text() !== '' &&
    $('#cell3').text() !== '' && $('#cell4').text() !== '' && $('#cell5').text() !== '' &&
    $('#cell6').text() !== '' && $('#cell7').text() !== '' && $('#cell8').text() !== '') {
      $('#game-message').text('It\'s a draw. No one wins this game.').fadeIn(5000)
    }

// if Player X wins
 if ($('#cell0').text() === 'X' && $('#cell1').text() === 'X' && $('#cell2').text() === 'X')
   {
    $('#game-message').text('Player X Wins!').fadeIn(5000)
   }
   else if ($('#cell3').text() === 'X' && $('#cell4').text() === 'X' && $('#cell5').text() === 'X')
   {
    $('#game-message').text('Player X Wins!').fadeIn(5000)
   }
   else if ($('#cell6').text() === 'X' && $('#cell7').text() === 'X' && $('#cell8').text() === 'X')
   {
    $('#game-message').text('Player X Wins!').fadeIn(5000)
   }
   else if ($('#cell0').text() === 'X' && $('#cell3').text() === 'X' && $('#cell6').text() === 'X')
   {
    $('#game-message').text('Player X Wins!').fadeIn(5000)
   }
   else if ($('#cell1').text() === 'X' && $('#cell4').text() === 'X' && $('#cell7').text() === 'X')
   {
    $('#game-message').text('Player X Wins!').fadeIn(5000)
   }
   else if ($('#cell2').text() === 'X' && $('#cell5').text() === 'X' && $('#cell8').text() === 'X')
   {
    $('#game-message').text('Player X Wins!').fadeIn(5000)
   }
   else if ($('#cell0').text() === 'X' && $('#cell4').text() === 'X' && $('#cell8').text() === 'X')
   {
    $('#game-message').text('Player X Wins!').fadeIn(5000)
   }
   else if ($('#cell2').text() === 'X' && $('#cell4').text() === 'X' && $('#cell6').text() === 'X')
   {
    $('#game-message').text('Player X Wins!').fadeIn(5000)
   }

// If player O Wins
if ($('#cell0').text() === 'O' && $('#cell1').text() === 'O' && $('#cell2').text() === 'O')
  {
    $('#game-message').text('Player O Wins!').fadeIn(5000)
  }
  else if ($('#cell3').text() === 'O' && $('#cell4').text() === 'O' && $('#cell5').text() === 'O')
  {
    $('#game-message').text('Player O Wins!').fadeIn(5000)
  }
  else if ($('#cell6').text() === 'O' && $('#cell7').text() === 'O' && $('#cell8').text() === 'O')
  {
    $('#game-message').text('Player O Wins!').fadeIn(5000)
  }
  else if ($('#cell0').text() === 'O' && $('#cell3').text() === 'O' && $('#cell6').text() === 'O')
  {
    $('#game-message').text('Player O Wins!').fadeIn(5000)
  }
  else if ($('#cell1').text() === 'O' && $('#cell4').text() === 'O' && $('#cell7').text() === 'O')
  {
    $('#game-message').text('Player O Wins!').fadeIn(5000)
  }
  else if ($('#cell2').text() === 'O' && $('#cell5').text() === 'O' && $('#cell8').text() === 'O')
  {
    $('#game-message').text('Player O Wins!').fadeIn(5000)
  }
  else if ($('#cell0').text() === 'O' && $('#cell4').text() === 'O' && $('#cell8').text() === 'O')
  {
    $('#game-message').text('Player O Wins!').fadeIn(5000)
  }
  else if ($('#cell2').text() === 'O' && $('#cell4').text() === 'O' && $('#cell6').text() === 'O')
  {
    $('#game-message').text('Player O Wins!').fadeIn(5000)
  }

})

} // end addHandlers function

const onUpdateGame = function (index, value, over) {
  event.preventDefault()
  const data = {
    'game': {
      'cell': {
        'index': index,
        'value': value
      },
      'over': over
    }
  }
  console.log(data)

  api.updateGame(data)
  .then(ui.updateGameSuccess)
  .catch(ui.updateGameFailure)
}

// const onGetGames = function () {
//
//   $('#getGamesBtn').on('click', function(event) {
//       event.preventDefault()
//       // console.log('get game button clicked!')
//       $('#game-message').text('You have played ' + HOW DO I GET THE TOTAL? + ' times').fadeIn(5000)
//   })
//
//   api.getGames()
//     .then(ui.showGamesSuccess)
// }


module.exports = {
  addHandlers,
  onUpdateGame,
  // onGetGames
}
