const Ship = (length, xcoord, ycoord, position) => {
  let tempx = xcoord;
  let tempy = ycoord;

  const shipsCoordinatesArray = [];
  for (let i = 0; i < length; i += 1) {
    let shipCoordinates = `${tempx},${tempy}`;
    shipsCoordinatesArray.push(shipCoordinates);

    if (position === "vertical") {
      shipCoordinates = `${tempx},${(tempy += 1)}`;
    } else if (position === "horizontal") {
      shipCoordinates = `${(tempx += 1)},${tempy}`;
    }
  }

  let hits = 0;
  const hit = () => {
    hits += 1;
    // console.log(hits);
    return hits;
  };

  const sunkStatus = false;
  const isSunk = (lengthOfShip, hitsOfShip) => {
    if (lengthOfShip <= hitsOfShip) {
      return true;
    }
    return false;
  };

  return {
    length,
    shipsCoordinatesArray,
    hits,
    hit,
    position,
    isSunk,
    sunkStatus,
  };
};

const Gameboard = () => {
  let areAllShipsSunk = false;
  const SquaresHit = [];
  const shipArray = [];

  const placeShip = (length, xcoord, ycoord, position) => {
    if (position === "vertical" && ycoord + length > 9) {
      //
    } else if (position === "horizontal" && xcoord + length > 9) {
      //
    } else {
      // SOMEHWERE HERE ADD VALIDATION = GOING THROUGH ALL THE COORDS OF THE PREVIOUS SHIPS AND CHECKING THEY DONT EQUAL EACH OTHER.
      const newShip = Ship(length, xcoord, ycoord, position);
      shipArray.push(newShip);
      return shipArray;
    }
    return "Error";
  };

  const receiveAttack = (xcoord, ycoord) => {
    let wasHit = false;
    let message = "";
    const coordinates = `${xcoord},${ycoord}`;
    if (SquaresHit.includes(coordinates)) {
      return "Please enter coordinates not previously attacked!";
    }
    shipArray.forEach((ship) => {
      ship.shipsCoordinatesArray.forEach((selectedShipCoordinates) => {
        if (wasHit === true) {
          return message;
        }

        if (coordinates === selectedShipCoordinates) {
          //
        } else {
          message = "attack missed";
          return message;
        }
        wasHit = true;
        ship.hits = ship.hit();
        ship.sunkStatus = ship.isSunk(ship.length, ship.hits);
        message = "ship has been hit!";
        return message;
      });
    });
    SquaresHit.push(coordinates);
    return message;
  };

  const determineIfConcluded = () => {
    let sunkenShips = 0;
    shipArray.forEach((ship) => {
      if (ship.sunkStatus === true) {
        sunkenShips += 1;
      }
    });

    if (sunkenShips === shipArray.length) {
      areAllShipsSunk = true;
    } else {
      return areAllShipsSunk;
    }
    return areAllShipsSunk;
  };

  // const gameboard = [];
  // for (let i = 0; i < 10; i += 1) {
  //   let row = [];
  //   for (let j = 0; j < 10; j += 1) {
  //     const temp = [i, j];
  //     row.push(temp);
  //   }
  //   gameboard.push(row);
  //   row = [];
  // }

  return {
    placeShip,
    receiveAttack,
    shipArray,
    SquaresHit,
    determineIfConcluded,
    areAllShipsSunk,
  };
};


const Player = (playername, turn) => 
  // this.playername = playername;
  // this.turn = turn;
   ({ playername, turn })
;

export { Ship, Gameboard, Player };