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
        selectedColor = colorController[0].endRotation < 45 ? 'black' : 'rainbow';
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
            grid.appendChild(cell);
        }
    }
}

// Generate random colors for rainbow effect
function randomColors () {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    let rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb;
} 

function eraseGrid() {
    grid.innerHTML = "";
}

createGrid();

// Event listeners for the webpage's functionalities
grid.addEventListener("mouseover", function(event) {
    if (event.target.matches('.grid-cell')) {
        if (selectedColor === 'rainbow') {
            event.target.style.backgroundColor = randomColors();
        } else if (selectedColor === 'black') {
            event.target.style.backgroundColor = selectedColor;
        }
    }
  });

const erase = document.querySelector(".buttonCenter")
erase.addEventListener("click", function() {
    eraseGrid();
    createGrid();
});

