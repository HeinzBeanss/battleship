import { Gameboard, Ship, Player } from "./project";
import { getPlayerName, generatePlayerBoard, generateComputerBoard } from "./design";



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
const generateVisualShips = () => {

  const ships = document.querySelectorAll(".ship");
  // logic for every ship, look at the video
  ships.forEach(ship => {

  ship.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("shipgrabbed", e.target.id)
    const templength = e.target.childElementCount;
    e.dataTransfer.setData("stringlen", templength);
    e.dataTransfer.setData("xoff", e.offsetX);
    e.dataTransfer.setData("yoff", e.offsetY);
    if (e.target.classList.contains("vertical")) {
      e.dataTransfer.setData("pos", "vertical");
    } else if (e.target.classList.contains("horizontal")) {
      e.dataTransfer.setData("pos", "horizontal");
    }
    })
  })

  const allsquares = document.querySelectorAll(".playersquare");
  allsquares.forEach(square => {
    square.addEventListener("dragover", (e) => {
      e.preventDefault();
    })
    square.addEventListener("drop", (e) => {
      e.preventDefault();
      const stringlen = e.dataTransfer.getData("stringlen");
      const xoff = e.dataTransfer.getData("xoff");
      const yoff = e.dataTransfer.getData("yoff");
      const pos = e.dataTransfer.getData("pos");

      const len = parseInt(stringlen, 10);
      let offsetXSquare = 0;
      let offsetYSquare = 0;
      
      // console.log(`${len} and ${xoff}, ${yoff} and ${pos}`

      if (pos === "vertical") {
        offsetXSquare = 0;
        const tempoOffsetYSquare = Math.ceil(yoff / 34);
        offsetYSquare = len - tempoOffsetYSquare;
      } else if (pos === "horizontal") {
        offsetXSquare = Math.floor(xoff / 34);
        offsetYSquare = 0;
      } 
      // console.log(`${offsetXSquare}, ${offsetYSquare}`);
      
      const stringcoord = e.target.id;
      const coordarrray = stringcoord.split(",");
      // console.log(coordarrray);

      const finalxcoord = (parseInt(coordarrray[0], 10)) - offsetXSquare;
      const finalycoord = (parseInt(coordarrray[1], 10)) - offsetYSquare;

      console.log(`Final coords to create object are: ${finalxcoord}, ${finalycoord}`);

      // validate object before creation
      if (pos === "vertical" && finalycoord + len > 10 || pos === "vertical" && finalycoord < 0) {
        console.log("y above 10 or below 0")
      } else if (pos === "horizontal" && finalxcoord + len > 10 || pos === "horizontal" && finalxcoord < 0) {
        console.log("x above 10 or below 0")
      } else {
        // create object
        Playerboard.placeShip(len, finalxcoord, finalycoord, pos);
        console.log(Playerboard.shipArray)

        // remove the element after it's been placed.
        const shipgrabbed = document.getElementById(e.dataTransfer.getData("shipgrabbed"))
        // e.dataTransfer.getData("shipgrabbed");
        // shipgrabbed.style.display = "none";
        shipgrabbed.style.visibility = "hidden";

        // make sure all the ships coords are highlighted red!
        // e.target.classList.add("blue");
        const lastIndex = Playerboard.shipArray.length - 1;
        const lastShip = Playerboard.shipArray[lastIndex];
        allsquares.forEach(squar => {
          for (let i = 0; i < lastShip.shipsCoordinatesArray.length; i += 1) {
            if (squar.id === lastShip.shipsCoordinatesArray[i]) {
              squar.classList.add("blue");
            }
          }
        })
      }
    })
  })

}

generateVisualShips();

