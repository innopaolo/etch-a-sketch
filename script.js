//This Draggable constructor creates the ability to rotate the rounded controllers
const sizeController = Draggable.create("#size-controller",{
    type: "rotation",
    bounds:{minRotation: 270, maxRotation: 360},
    throwProps: true,
    onDragEnd: () => {
        sizeController[0].endRotation > 135 ? selectedSize = 32 : selectedSize = 16;        
        eraseGrid();
    }
});
const colorController = Draggable.create("#color-controller",{
    type: "rotation",
    bounds:{minRotation:0, maxRotation: 90},
    onDragEnd: () => {
        colorController[0].endRotation < 45 ? selectedColor = 'black' : selectedColor = 'random';
    }
});