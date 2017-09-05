'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// game events

let turn = 'X'

// setting up event listener
// "div[id^='cell']"
$('.box').on('click', function (event) {
  event.preventDefault()

  console.log(this)


 if ($(this).val() === '') {
   // target element that we click on and change text

    if (turn === 'X') {
      $(this).text('X')
      turn = 'O'
    } else {
      $(this).text('O')
      turn = 'X'
    }
 }

 if ($('#cell0').text() === 'X' && $('#cell1').text() === 'X' && $('#cell2').text() === 'X')
   {
     $('#message').text('Player 1 Wins!')
     console.log('Player 1 Wins!')
   }
   else if ($('#cell3').text() === 'X' && $('#cell4').text() === 'X' && $('#cell5').text() === 'X')
   {
     $('#message').text('Player 1 Wins!')
     console.log('Player 1 Wins!')
   }
   else if ($('#cell6').text() === 'X' && $('#cell7').text() === 'X' && $('#cell8').text() === 'X')
   {
     $('#message').text('Player 1 Wins!')
     console.log('Player 1 Wins!')
   }
   else if ($('#cell0').text() === 'X' && $('#cell3').text() === 'X' && $('#cell6').text() === 'X')
   {
     $('#message').text('Player 1 Wins!')
     console.log('Player 1 Wins!')
   }
   else if ($('#cell1').text() === 'X' && $('#cell4').text() === 'X' && $('#cell7').text() === 'X')
   {
     $('#message').text('Player 1 Wins!')
     console.log('Player 1 Wins!')
   }
   else if ($('#cell2').text() === 'X' && $('#cell5').text() === 'X' && $('#cell8').text() === 'X')
   {
     $('#message').text('Player 1 Wins!')
     console.log('Player 1 Wins!')
   }
   else if ($('#cell0').text() === 'X' && $('#cell4').text() === 'X' && $('#cell8').text() === 'X')
   {
     $('#message').text('Player 1 Wins!')
     console.log('Player 1 Wins!')
   }
   else if ($('#cell2').text() === 'X' && $('#cell4').text() === 'X' && $('#cell6').text() === 'X')
   {
     $('#message').text('Player 1 Wins!')
     console.log('Player 1 Wins!')
   }

})








module.exports = {

}
