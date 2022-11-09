function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;

  const svg = document.querySelector(".themesvg");
  const svgsrc =
    svg.getAttribute("src") === "assets/sun.svg"
      ? "assets/moon.svg"
      : "assets/sun.svg";
  svg.setAttribute("src", svgsrc);
}

document.querySelector(".theme-toggle").addEventListener("click", setTheme);

//

const Ship = (length, timesHit, isSunk = false, ) => {
  this.timesHit = timesHit;
  return {length, timesHit, isSunk}
};

const Gameboard = () => {
  
}



export { Ship, Gameboard };
