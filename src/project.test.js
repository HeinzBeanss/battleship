import { Gameboard, Ship } from "./project";

test("Returns a value from activating the function", () => {
  const testThis = Gameboard();
  expect(testThis.placeShip(8, 9)).not.toEqual(undefined);
});

test("Creates a ship object that contains an X coordinate value", () => {
  const testThis = Gameboard();
  const value = testThis.placeShip(1, 3, 3, "vertical");
  expect(value).toMatchObject([
    {
      shipsCoordinatesArray: ["3,3"],
    },
  ]);
});

test("Creates a ship object that contains an Y coordinate value", () => {
  const testThis = Gameboard();

  expect(testThis.placeShip(1, 3, 3, "vertical")).toMatchObject([
    {
      shipsCoordinatesArray: ["3,3"],
    },
  ]);
});

test("Tests the property of a created Ship Object", () => {
  const testThis = Gameboard();
  const newShip = Ship(3, 8, 9);

  expect(newShip.hits).toEqual(0);
});

test("Correctly places a ship and returns an array of the coordinates it covers", () => {
  const testThis = Gameboard();
  const newShip = Ship(3, 2, 3, "vertical");

  expect(newShip.shipsCoordinatesArray).toEqual(["2,3", "2,4", "2,5"]);
});

test("Correctly places a ship and returns an array of the coordinates it covers", () => {
  const testThis = Gameboard();
  const newShip = Ship(3, 2, 3, "horizontal");

  expect(newShip.shipsCoordinatesArray).toEqual(["2,3", "3,3", "4,3"]);
});

test("Accounts for incorrectly placed ships that go past the gameboard border", () => {
  const testThis = Gameboard();
  let newShip;

  expect((newShip = testThis.placeShip(3, 8, 8, "vertical"))).toEqual("Error");
});

//

test("Correctly places multiple ships and returns and array of said ships", () => {
  const testThis = Gameboard();
  testThis.placeShip(3, 2, 4, "vertical");
  testThis.placeShip(2, 1, 1, "horizontal");

  expect(testThis.shipArray).toMatchObject([
    {
      shipsCoordinatesArray: ["2,4", "2,5", "2,6"],
    },
    { shipsCoordinatesArray: ["1,1", "2,1"] },
  ]);
});

test("Successfully registers when a ship is hit", () => {
  const testThis = Gameboard();
  testThis.placeShip(3, 2, 4, "vertical");
  testThis.placeShip(2, 1, 1, "horizontal");
  testThis.placeShip(4, 2, 4, "horizontal");
  expect(testThis.receiveAttack(2, 4)).toEqual("ship has been hit!");
});

test("Successfully registers when a ship is missed", () => {
  const testThis = Gameboard();
  testThis.placeShip(3, 2, 4, "vertical");
  testThis.placeShip(2, 1, 1, "horizontal");
  testThis.placeShip(4, 2, 4, "horizontal");
  expect(testThis.receiveAttack(7, 8)).toEqual("attack missed");
});

test("Receives an attack and registers the hit() function to the correct ship, increasing the ships hits by 1", () => {
  const testThis = Gameboard();
  testThis.placeShip(3, 2, 4, "vertical");
  testThis.placeShip(2, 1, 1, "horizontal");
  testThis.placeShip(4, 2, 4, "horizontal");
  // console.log(testThis.shipArray);
  testThis.receiveAttack(2, 1);
  // console.log(testThis.shipArray);
  expect(testThis.shipArray[1].hits).toEqual(1);
});

test("Records the coordinates of all shots, whether they hit a ship or not", () => {
  const testThis = Gameboard();
  testThis.placeShip(3, 2, 4, "vertical");
  testThis.placeShip(2, 1, 1, "horizontal");
  testThis.placeShip(4, 2, 4, "horizontal");
  // console.log(testThis.shipArray);
  testThis.receiveAttack(2, 1);
  testThis.receiveAttack(5, 3);
  // console.log(testThis.shipArray);
  expect(testThis.SquaresHit).toEqual(["2,1", "5,3"]);
});

test("Checks if a Ship is sunk and returns the sunkStatus value of that ship to true.", () => {
  const testThis = Gameboard();
  testThis.placeShip(3, 2, 4, "vertical");
  testThis.placeShip(2, 1, 1, "horizontal");
  testThis.placeShip(4, 2, 4, "horizontal");
  // console.log(testThis.shipArray);
  testThis.receiveAttack(2, 1);
  testThis.receiveAttack(1, 1);
  // console.log(testThis.shipArray);
  expect(testThis.shipArray[1].sunkStatus).toEqual(true);
});

test("Recognises if all of the ships on that gameboard haven't been sunk.", () => {
  const testThis = Gameboard();
  testThis.placeShip(1, 2, 4, "vertical");
  testThis.placeShip(2, 1, 1, "horizontal");
  testThis.placeShip(4, 2, 4, "horizontal");
  // console.log(testThis.shipArray);
  testThis.receiveAttack(2, 4);
  testThis.receiveAttack(2, 1);
  testThis.receiveAttack(1, 1);
  // console.log(testThis.shipArray);
  expect(testThis.determineIfConcluded()).toEqual(false);
});

test("Recognises if all of the ships on that gameboard have been sunk.", () => {
  const testThis = Gameboard();
  testThis.placeShip(1, 2, 4, "vertical");
  testThis.placeShip(2, 1, 1, "horizontal");
  // testThis.placeShip(4, 2, 4, "horizontal");
  // console.log(testThis.shipArray);
  testThis.receiveAttack(2, 4);
  testThis.receiveAttack(2, 1);
  testThis.receiveAttack(1, 1);
  // console.log(testThis.shipArray);
  expect(testThis.determineIfConcluded()).toEqual(true);
});
