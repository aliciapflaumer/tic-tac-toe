## Resubit checklist

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
   [ ] - Once signed in, button should be shown
   [ ] - Once signed out, button should be hidden again
- in `index.js` uncomment the `gameEvents.addHandlers()`
- in `games/events.js` wrap the code in a function called `addHandlers` and `export.modules = {addHandlers}`
- add another click event within the `addHandlers` function for when the button is clicked
- when the button is clicked it should run an anonymous function that calls `api.createGame()`
- add a `.then(ui.createGameSuccess)` and a `catch(ui.createGameFail)`
- `createGameSuccess` should show the game board and say whos turn it is

Touch base on Tuesday about progress
