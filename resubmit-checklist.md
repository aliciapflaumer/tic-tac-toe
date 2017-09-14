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
1.  [ done ] - `createGameSuccess` should show the game board and say whos turn it is

Touch base on Tuesday about progress

1. [  ] Update a game by storing new moves. (UPDATE)*

1. [  ] Visually display the results of retrieving game statistics, such as total games won by a user. (READ)*

1. [ done ] Check for draw

1. [ done ] Clear the board when the New Game button is clicked
