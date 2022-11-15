const getPlayerName = () => {
    document.getElementById("overlay").style.display = "block";
    const namebutton = document.getElementById("confirmname");
    namebutton.addEventListener("click", () => {
      const nameinput = document.getElementById("name");
      const domplayername = document.querySelector(".playername");

      if (nameinput.value === "") {
        nameinput.value = "Player 1";
      }

      domplayername.textContent = nameinput.value;
      document.getElementById("overlay").style.display = "none";
      return nameinput.value;
    })
}

const generatePlayerBoard = () => {
  const playerboarddiv = document.querySelector(".playerboard");
  const playerBoard = document.createElement("div");
  playerBoard.classList.add("playerboard");
  playerboarddiv.appendChild(playerBoard);

  for (let i = 9; i >= -1; i -= 1) {
    const row = document.createElement("div");
    row.classList.add("row");
    // for
    if ( i === -1) {
      for (let j = -1; j < 10; j += 1) {
        if (j === -1) {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          row.appendChild(squarelabel);
        } else {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          squarelabel.textContent = `${j}`
          row.appendChild(squarelabel);
        }
        }
    } else { 
      for (let j = -1; j < 10; j += 1) {
        if (j === -1) {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          squarelabel.textContent = `${i}`
          row.appendChild(squarelabel);
        } else {
          const square = document.createElement("div");
          square.classList.add("square");
          square.setAttribute("id", `${j},${i}`)
          row.appendChild(square);
        }
      
      }
    }
    //
    playerBoard.appendChild(row);
  }
  
}

const generateComputerBoard = () => {
  const computerboarddiv = document.querySelector(".computerboard");
  const playerBoard = document.createElement("div");
  playerBoard.classList.add("playerboard");
  computerboarddiv.appendChild(playerBoard);

  for (let i = 9; i >= -1; i -= 1) {
    const row = document.createElement("div");
    row.classList.add("row");
    // for
    if ( i === -1) {
      for (let j = -1; j < 10; j += 1) {
        if (j === -1) {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          row.appendChild(squarelabel);
        } else {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          squarelabel.textContent = `${j}`
          row.appendChild(squarelabel);
        }
        }
    } else { 
      for (let j = -1; j < 10; j += 1) {
        if (j === -1) {
          const squarelabel = document.createElement("div");
          squarelabel.classList.add("squarelabel");
          squarelabel.textContent = `${i}`
          row.appendChild(squarelabel);
        } else {
          const square = document.createElement("div");
          square.classList.add("square");
          square.setAttribute("id", `${j},${i}`)
          row.appendChild(square);
        }
      
      }
    }
    //
    playerBoard.appendChild(row);
  }
}

const generateFakeShips = () => {
  const shipbay = document.querySelector(".shipbay");
  // logic for every ship, look at the video
  shipbay.forEach(ship => {

 
  shipone.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", shipone.id);
    console.log("shiponedragstart")
    console.log(e);
    console.log(e.target);
    if (e.offsetX > 32) {
      console.log("second square");
    } else if (e.offsetX < 33) {
      console.log("first square")
    }
  })

  const allsquares = document.querySelectorAll(".square");
  allsquares.forEach(square => {
    square.addEventListener("dragover", e => {

      e.preventDefault();
      // console.log(e);
      // console.log(e.target);
      // e.target.classList.add("red");

    })

    square.addEventListener("drop", e => {
      e.preventDefault();
      e.target.classList.add("red");

      const droppedElement = e.dataTransfer.getData("text/plain");
      console.log(droppedElement);
    })
  })


})

}

export { getPlayerName, generatePlayerBoard, generateComputerBoard,  generateFakeShips}; 

  // for (const squaredropzone of document.querySelectorAll(".square")) {
  //   squaredropzone.addEventListener("dragover", e => {
  //     console.log(e);
  //     console.log(e.target);
  //   })
  // }