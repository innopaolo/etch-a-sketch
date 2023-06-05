let selectedColor = "black";
let selectedSize = 64;


// Draggable function from GSAP creates the ability to rotate the knobs
const sizeController = Draggable.create("#size-controller",{
    type: "rotation",
    bounds:{minRotation: 270, maxRotation: 360},
    onDragEnd: () => {
        if (sizeController[0].endRotation < 300) {
            selectedSize = 64;
        } else if (sizeController[0].endRotation > 300 && sizeController[0].endRotation < 340) {
            selectedSize = 32; 
        } else {
            selectedSize = 16;
        }        
        eraseGrid();
        createGrid();
    }
});
const colorController = Draggable.create("#color-controller",{
    type: "rotation",
    bounds:{minRotation:0, maxRotation: 90},
    onDragEnd: () => {
        colorController[0].endRotation < 45 ? selectedColor = 'black' : selectedColor = 'rainbow';
    }
});

// Creates the grid based on where the knob is turned 
const grid = document.querySelector(".etch-grid");

// Set grid styles
grid.style.display = "grid";

// Create grid cells based on user selection
function createGrid() {
    grid.innerHTML = "";

    grid.style.gridTemplateColumns = `repeat(${selectedSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${selectedSize}, 1fr)`;

    for (let i = 0; i < selectedSize; i++) {
        for (let j = 0; j < selectedSize; j++) {
            let cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.style.border = "1px solid black";
            grid.appendChild(cell);
        }
    }
}

function eraseGrid() {
    grid.innerHTML = "";
}

createGrid();

grid.addEventListener("mouseover", function(event) {
    if (event.target.matches('.grid-cell')) {
      event.target.style.backgroundColor = "black";
      console.log('Clicked on a grid cell');
      // Add your custom logic here
    }
  });