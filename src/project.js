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
    // SOMEHWERE HERE ADD VALIDATION = GOING THROUGH ALL THE COORDS OF THE PREVIOUS SHIPS AND CHECKING THEY DONT EQUAL EACH OTHER.
    const newShip = Ship(length, xcoord, ycoord, position);
    shipArray.push(newShip);
    return shipArray;
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
          message = "Attack Missed!";
          return message;
        }
        wasHit = true;
        ship.hits = ship.hit();
        ship.sunkStatus = ship.isSunk(ship.length, ship.hits);
        message = "Attack Landed!";
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
      areAllShipsSunk = false;
      return areAllShipsSunk;
    }
    return areAllShipsSunk;
  };

  return {
    placeShip,
    receiveAttack,
    shipArray,
    SquaresHit,
    determineIfConcluded,
    areAllShipsSunk,
  };
};

export { Ship, Gameboard };
