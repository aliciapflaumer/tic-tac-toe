## Resubmit checklist

*1.  Authentication:  Hide and show correct forms at the correct time*

1.  [ done ] - Site must start with Sign Up and Sign In forms showing
1.  [ done ] - Site must start with Change Password and Sign Out hidden
1.  [ done ] - Once signed in, Sign Up and Sign In forms must be hidden
1.  [ done ] - Once signed in, Change Password and Sign Out should be shown
1.  [ done] - Once signed out, Sign Up and Sign In must be shown
1.  [ done] - Once signed out, Change Password and Sign Out must be hidden
*2.  API: Create new game on the server. (CREATE)*
1. [ done ]- Create a button in index.html called New Game
   [ done ] - Site must start with button hidden
   [ done ] - Once signed in, button should be shown
   [ done ] - Once signed out, button should be hidden again
1.  [ done ] -  in `index.js` uncomment the `gameEvents.addHandlers()`
1.  [ done ] - in `games/events.js` wrap the code in a function called `addHandlers` and `export.modules = {addHandlers}`
1.  [ done ] - add another click event within the `addHandlers` function for when the button is clicked
1.  [ done ] - when the button is clicked it should run an anonymous function that calls `api.createGame()`
1.  [ done ] - add a `.then(ui.createGameSuccess)` and a `catch(ui.createGameFail)`

1.  [ done ] - `createGameSuccess` should show the game board and say whose turn it is

1. [  ] Update a game by storing new moves. (UPDATE)*

1. [ done ] Visually display the results of retrieving game statistics, such as total games won by a user. (READ)*

*3. Events:*

1. [ done ] Check for draw

1. [ done ] Clear the board when the New Game button is clicked

* ************* *
*4. Bug fixes, post cohort feedback:*

1. [ done ] mobile phone display issue

1. [ done ] sign-out, show both sign-up and sign-in

1. [ done ] in html old password needed "password" for type input field

1. [  ] Make it so user cannot continue clicking empty boxes after winner declared

1. [  ] On newGame click, sometimes starts with a "O"

1. [  ] Need to display message 'try another box' when user clicks already occupied box

1. [ done ] Check success message when password has changed successfully
