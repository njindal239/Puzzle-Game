# Puzzle-Game

This is a simple puzzle game. It is a square grid with 15 boxes on either side of the grid (top-bottom & left-right). The game for the player is to identify the right pair of cells to be selected from the grid that exactly matches the solution. As soon as the grid has all the selected and unselected cells in the right order, the message that you have won flashes on the screen indicating that player has won the game.


# Semantics to Play the Game
There are some header numbers for each column and each row of the grid. Those numbers signify that how many cells should be marked for that particular row/column. For example, a header of "6 2" on a row indicates that the row has 2 strips of marked cells, where the first strip has 6 marked cells and the second strip has 2 marked cells. The player has to analyze all these headers (for each row and column) and come up with a solution that exactly matches the conditions specified by each header. When the grid reaches that state, the player is marked as the winner.

# Future Possiblities
There are a few possiblities that might well become a part of the game in future modifications. Currently, the headers of the game are static and would not vary from one game to another. We could support random headers such that the user would see a different combination of headers on each game run that would increase the randomness of the game. Consequently, it will also allow users to continue playing the game if they have already completed/won one game.

# Contributing to the Game
If you think you have ideas that could make this game more exciting or you find there are some bugs in the game and want to contribute to the project, please follow the steps below:
- Clone this repository using: git clone `https://github.com/njindal239/Puzzle-Game.git`
- Change to a feature branch
- Make your changes and create a pull request for the same
- If approved, your changes would become a part of this application





