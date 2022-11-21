const getPlayerName = () => {
  document.getElementById("overlay").style.display = "block";
  const namebutton = document.getElementById("confirmname");
  namebutton.addEventListener("click", () => {
    const nameinput = document.getElementById("name");
    const domplayername = document.querySelector(".playername");

    if (nameinput.value === "") {
      nameinput.value = "Player";
    }

    domplayername.textContent = nameinput.value;
    document.getElementById("overlay").style.display = "none";
    const lastGuest = document.querySelector(".playerguesses");
    lastGuest.textContent = `${nameinput.value}'s Last Guess:`;
    return nameinput.value;
  });
};

const generatePlayerBoard = () => {
  const playerboarddiv = document.querySelector(".playerboard");
  const playerBoard = document.createElement("div");
  playerBoard.classList.add("playerboard");
  playerboarddiv.appendChild(playerBoard);

  for (let i = 9; i >= -1; i -= 1) {
    const row = document.createElement("div");
    row.classList.add("row");

    if (i === -1) {
      for (let j = -1; j < 10; j += 1) {
        if (j === -1) {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          row.appendChild(squarelabel);
        } else {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          squarelabel.textContent = `${j}`;
          row.appendChild(squarelabel);
        }
      }
    } else {
      for (let j = -1; j < 10; j += 1) {
        if (j === -1) {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          squarelabel.textContent = `${i}`;
          row.appendChild(squarelabel);
        } else {
          const square = document.createElement("div");
          square.classList.add("playersquare");
          square.setAttribute("id", `${j},${i}`);
          row.appendChild(square);
        }
      }
    }
    //
    playerBoard.appendChild(row);
  }
};

const generateComputerBoard = () => {
  const computerboarddiv = document.querySelector(".computerboard");
  const playerBoard = document.createElement("div");
  playerBoard.classList.add("playerboard");
  computerboarddiv.appendChild(playerBoard);

  for (let i = 9; i >= -1; i -= 1) {
    const row = document.createElement("div");
    row.classList.add("row");
    // for
    if (i === -1) {
      for (let j = -1; j < 10; j += 1) {
        if (j === -1) {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          row.appendChild(squarelabel);
        } else {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          squarelabel.textContent = `${j}`;
          row.appendChild(squarelabel);
        }
      }
    } else {
      for (let j = -1; j < 10; j += 1) {
        if (j === -1) {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          squarelabel.textContent = `${i}`;
          row.appendChild(squarelabel);
        } else {
          const square = document.createElement("div");
          square.classList.add("square");
          square.setAttribute("id", `${j},${i}`);
          row.appendChild(square);
        }
      }
    }
    //
    playerBoard.appendChild(row);
  }
};

export { getPlayerName, generatePlayerBoard, generateComputerBoard };
