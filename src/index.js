import { Gameboard, Ship, Player } from "./project";
import { getPlayerName, generatePlayerBoard, generateComputerBoard, generateFakeShips } from "./design";



// Game loop begins
// Gets the player and creates both gameboards, and both objects.
const playersname = "Player 1";
// playersname = getPlayerName(); 
generatePlayerBoard();
const Player1 = Player(`${playersname}`, true);
const Playerboard = Gameboard();

generateComputerBoard();
const Computerboard = Gameboard();
const Computer = Player("Computer", false);

// Placing Ships
for (let i = 1; i < 7; i += 1) {
  const tempxcoord = Math.floor(Math.random() * (10 - i));
  const tempycoord = Math.floor(Math.random() * (10 - i));
  const temppos = Math.floor(Math.random() * 2);
  let tempposition;
  
  if (temppos === 1) {
    tempposition = "vertical";
  } else if (temppos === 0) {
    tempposition = "horizontal";
  }

  Computerboard.placeShip(i, tempxcoord, tempycoord, tempposition);
}
// FIX - Ships overlap!

console.log(Computerboard.shipArray);

// console.log(Computerboard.placeShip(6, 5, 3, "horizontal"));

generateFakeShips();