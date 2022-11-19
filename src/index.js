import { Gameboard } from "./project";
import {
  getPlayerName,
  generatePlayerBoard,
  generateComputerBoard,
} from "./design";

// Game loop begins
// Gets the player and creates both gameboards, and both objects.
let playersname = "Player 1";
playersname = getPlayerName();
generatePlayerBoard();
const Playerboard = Gameboard();
generateComputerBoard();
const Computerboard = Gameboard();
const startbutton = document.querySelector(".start");
const resetbutton = document.querySelector(".reset");
const result = document.querySelector(".result");
const prevhitcoord = document.querySelector(".prevhitcoord");
const allcomputersquares = document.querySelectorAll(".square");

const generateComputerShips = () => {
  for (let i = 1; i < 7; i += 1) {
    if (Computerboard.shipArray.length === 6) {
      i = 8;
    } else {
      i = Computerboard.shipArray.length + 1;
      const tempxcoord = Math.floor(Math.random() * (10 - i));
      const tempycoord = Math.floor(Math.random() * (10 - i));
      const temppos = Math.floor(Math.random() * 2);
      let tempposition;
      if (temppos === 1) {
        tempposition = "vertical";
      } else if (temppos === 0) {
        tempposition = "horizontal";
      }
      let overlappedstatus = false;
      Computerboard.shipArray.forEach((ship) => {
        ship.shipsCoordinatesArray.forEach((shipcoord) => {
          for (let j = 0; j < i; j += 1) {
            if (tempposition === "vertical") {
              if (shipcoord === `${tempxcoord},${tempycoord + j}`) {
                overlappedstatus = true;
              }
            } else if (tempposition === "horizontal") {
              if (shipcoord === `${tempxcoord + j},${tempycoord}`) {
                overlappedstatus = true;
              }
            }
          }
          return i;
        });
      });

      if (overlappedstatus === true) {
        i -= 1;
      } else {
        Computerboard.placeShip(i, tempxcoord, tempycoord, tempposition);
      }
    }
  }
};

generateComputerShips();

const generateVisualShips = () => {
  let shipsplaced = 0;

  const ships = document.querySelectorAll(".ship");
  ships.forEach((ship) => {
    ship.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("shipgrabbed", e.target.id);
      const templength = e.target.childElementCount;
      e.dataTransfer.setData("stringlen", templength);
      e.dataTransfer.setData("xoff", e.offsetX);
      e.dataTransfer.setData("yoff", e.offsetY);
      if (e.target.classList.contains("vertical")) {
        e.dataTransfer.setData("pos", "vertical");
      } else if (e.target.classList.contains("horizontal")) {
        e.dataTransfer.setData("pos", "horizontal");
      }
    });
  });

  const allsquares = document.querySelectorAll(".playersquare");
  allsquares.forEach((square) => {
    square.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    square.addEventListener("drop", (e) => {
      e.preventDefault();
      const stringlen = e.dataTransfer.getData("stringlen");
      const xoff = e.dataTransfer.getData("xoff");
      const yoff = e.dataTransfer.getData("yoff");
      const pos = e.dataTransfer.getData("pos");

      const len = parseInt(stringlen, 10);
      let offsetXSquare = 0;
      let offsetYSquare = 0;
      if (pos === "vertical") {
        offsetXSquare = 0;
        const tempoOffsetYSquare = Math.ceil(yoff / 34);
        offsetYSquare = len - tempoOffsetYSquare;
      } else if (pos === "horizontal") {
        offsetXSquare = Math.floor(xoff / 34);
        offsetYSquare = 0;
      }

      const stringcoord = e.target.id;
      const coordarrray = stringcoord.split(",");

      const finalxcoord = parseInt(coordarrray[0], 10) - offsetXSquare;
      const finalycoord = parseInt(coordarrray[1], 10) - offsetYSquare;

      if (
        (pos === "vertical" && finalycoord + len > 10) ||
        (pos === "vertical" && finalycoord < 0)
      ) {
        //
      } else if (
        (pos === "horizontal" && finalxcoord + len > 10) ||
        (pos === "horizontal" && finalxcoord < 0)
      ) {
        //
      } else {
        let overlappedstatus = false;
        Playerboard.shipArray.forEach((ship) => {
          ship.shipsCoordinatesArray.forEach((shipcoord) => {
            for (let j = 0; j < len; j += 1) {
              if (pos === "vertical") {
                if (shipcoord === `${finalxcoord},${finalycoord + j}`) {
                  overlappedstatus = true;
                }
              } else if (pos === "horizontal") {
                if (shipcoord === `${finalxcoord + j},${finalycoord}`) {
                  overlappedstatus = true;
                }
              }
            }
          });
        });

        if (overlappedstatus === true) {
          //
        } else {
          Playerboard.placeShip(len, finalxcoord, finalycoord, pos);
          const shipgrabbed = document.getElementById(
            e.dataTransfer.getData("shipgrabbed")
          );
          shipgrabbed.style.visibility = "hidden";
          shipsplaced += 1;
          if (shipsplaced === 6) {
            shipsplaced = 0;
            startbutton.disabled = false;
          }
          const lastIndex = Playerboard.shipArray.length - 1;
          const lastShip = Playerboard.shipArray[lastIndex];
          allsquares.forEach((squar) => {
            for (let i = 0; i < lastShip.shipsCoordinatesArray.length; i += 1) {
              if (squar.id === lastShip.shipsCoordinatesArray[i]) {
                squar.classList.add("blue");
              }
            }
          });
        }
      }
    });
  });
};

const secretfunction = () => {
  allcomputersquares.forEach((computersquare) => {
    for (let i = 0; i < Computerboard.shipArray.length; i += 1) {
      Computerboard.shipArray[i].shipsCoordinatesArray.forEach((array) => {
        if (array === computersquare.id) {
          computersquare.classList.add("blue");
        }
      });
    }
  });
};

const secret = document.querySelector(".secret");
secret.addEventListener("click", secretfunction);

generateVisualShips();

// create a reset button for all ships
const computerMove = () => {
  const computerguess = document.querySelector(".computerguess");
  const tempxcoord = Math.floor(Math.random() * 10);
  const tempycoord = Math.floor(Math.random() * 10);
  const coord = `${tempxcoord},${tempycoord}`;
  if (Playerboard.SquaresHit.includes(coord)) {
    computerMove();
  } else {
    Playerboard.receiveAttack(tempxcoord, tempycoord);
    const allplayerssquares = document.querySelectorAll(".playersquare");
    allplayerssquares.forEach((playersquare) => {
      let tempendofarray = 0;
      if (playersquare.id === coord) {
        // LOOP THROUGH
        for (let i = 0; i < Playerboard.shipArray.length; i += 1) {
          for (
            let j = 0;
            j < Playerboard.shipArray[i].shipsCoordinatesArray.length;
            j += 1
          ) {
            if (
              playersquare.id !==
              Playerboard.shipArray[i].shipsCoordinatesArray[j]
            ) {
              tempendofarray = Playerboard.SquaresHit.length;
              computerguess.textContent = `Missed: ${
                Playerboard.SquaresHit[tempendofarray - 1]
              }`;
              playersquare.classList.add("failedhit");
            } else if (
              playersquare.id ===
              Playerboard.shipArray[i].shipsCoordinatesArray[j]
            ) {
              tempendofarray = Playerboard.SquaresHit.length;
              computerguess.textContent = `Hit: ${
                Playerboard.SquaresHit[tempendofarray - 1]
              }`;
              playersquare.classList.add("successfulhit");
              return;
            }
          }
        }
      }
    });
  }
};

const playerMove = (e) => {
  const computersquare = e.target;
  const computerSquareClickedCoordsString = e.target.id;
  const computerSquareClickedCoordsArray =
    computerSquareClickedCoordsString.split(",");
  const ClickedCoordX = computerSquareClickedCoordsArray[0];
  const ClickedCoordY = computerSquareClickedCoordsArray[1];
  let tempendofarray = 0;
  prevhitcoord.textContent = Computerboard.receiveAttack(
    ClickedCoordX,
    ClickedCoordY
  );

  if (
    prevhitcoord.textContent ===
    "Please enter coordinates not previously attacked!"
  ) {
    return;
  }
  if (prevhitcoord.textContent === "Attack Missed!") {
    tempendofarray = Computerboard.SquaresHit.length;
    result.textContent = `Missed: ${
      Computerboard.SquaresHit[tempendofarray - 1]
    }`;
    result.style.color = "red";
    computersquare.classList.add("failedhit");
  } else if (prevhitcoord.textContent === "Attack Landed!") {
    tempendofarray = Computerboard.SquaresHit.length;
    result.textContent = `Hit: ${Computerboard.SquaresHit[tempendofarray - 1]}`;
    result.style.color = "green";
    computersquare.classList.add("successfulhit");
  }

  const isOver = Computerboard.determineIfConcluded();
  if (isOver === true) {
    result.textContent = `Game Over! ${playersname} wins!`;
    result.style.color = "green";
    allcomputersquares.forEach((computersquares) => {
      computersquares.removeEventListener("click", playerMove);
    });
  } else {
    computerMove();
    const isOver1 = Playerboard.determineIfConcluded();
    if (isOver1 === true) {
      result.textContent = `Game Over! Computer wins!`;
      result.style.color = "red";
      allcomputersquares.forEach((computersquares) => {
        computersquares.removeEventListener("click", playerMove);
      });
    }
  }
};

const gameLoop = () => {
  startbutton.disabled = true;

  allcomputersquares.forEach((computersquare) => {
    computersquare.addEventListener("click", playerMove);
  });
};

const resetButton = () => {
  const allplayerssquares = document.querySelectorAll(".playersquare");

  allplayerssquares.forEach((playersquare) => {
    playersquare.classList.remove("successfulhit");
    playersquare.classList.remove("failedhit");
    playersquare.classList.remove("blue");
  });

  allcomputersquares.forEach((computersquare) => {
    computersquare.removeEventListener("click", playerMove);
    computersquare.classList.remove("successfulhit");
    computersquare.classList.remove("failedhit");
    computersquare.classList.remove("blue");
  });

  prevhitcoord.textContent = "";
  result.textContent = "";
  const computerguess = document.querySelector(".computerguess");
  computerguess.textContent = "Computer's Guess: ";

  startbutton.disabled = true;

  Playerboard.shipArray.splice(0, Playerboard.shipArray.length);
  Playerboard.SquaresHit.splice(0, Playerboard.SquaresHit.length);
  Computerboard.shipArray.splice(0, Computerboard.shipArray.length);
  Computerboard.SquaresHit.splice(0, Computerboard.SquaresHit.length);
  Playerboard.areAllShipsSunk = false;
  Computerboard.areAllShipsSunk = false;

  const allships = document.querySelectorAll(".ship");
  allships.forEach((ship) => {
    ship.style.visibility = "visible";
  });
  generateComputerShips();
};

startbutton.addEventListener("click", gameLoop);
resetbutton.addEventListener("click", resetButton);
