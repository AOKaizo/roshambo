let pixelTable = document.querySelector("#pixel-table");
let rows = 10;
let cols = 25;

function makeRow() {
  let row = pixelTable.appendChild(document.createElement("tr")); //eventually
  for (let i = 0; i < cols; i++) {
    row.appendChild(document.createElement("td")).classList.add("data-box");
  }
}

let addGridButton = document.getElementById("make-grid");

addGridButton.addEventListener("click", makeGrid);

let clearGridButton = document.querySelector('#clear-grid')

clearGridButton.addEventListener("click", clearGrid);

let mouseColoring = pixelTable.addEventListener("mousedown", colorize);
document.addEventListener("mouseup", () =>
  pixelTable.removeEventListener("mouseover", colorize)
);

function colorize(event) {
  event.target.tagName === "TD"
    ? (event.target.classList.add(document.querySelector("#color-choice").value))
    : null;
  pixelTable.addEventListener("mouseover", colorize);
}

let colButton = document.querySelector("#column-button");
let colInput = document.querySelector("#column-input");
let rowButton = document.querySelector("#row-button");
let rowInput = document.querySelector("#row-input");
let colorButton = document.querySelector("#color-button");
let colorInput = document.querySelector("#color-choice");

colButton.addEventListener("click", () => {
  colInput.className = "show";
  colButton.className = "hide";
});
rowButton.addEventListener("click", () => {
  rowInput.className = "show";
  rowButton.className = "hide";
});
colorButton.addEventListener("click", () => {
  colorInput.className = "show";
  colorButton.className = "hide";
});

function makeGrid() {
  clearGrid()
    colInput.value ? cols = colInput.value : null;
    rowInput.value ? rows = rowInput.value : null;
  for (let i = 0; i < rows; i++) {
    makeRow();
  }
}

function clearGrid() {
    while (pixelTable.firstChild) {
        pixelTable.removeChild(pixelTable.firstChild)
    }
}

let colorClasses = ['red', 'blue', 'magenta', 'yellow', 'limegreen']
let colorIdx = 0;

setInterval(() => {
    colorIdx % colorClasses.length ? null : colorIdx = 0;
    document.querySelector('#make-grid').className = colorClasses[colorIdx++]}, 200)