// TEMPORARY CODE FOR TESTING PURPOSES
var btnGetShape;

function initializeShapesUI() {
    btnGetShape = document
        .querySelector('#get-shape')
        .addEventListener('click', function () {
            getShape();
        });
}

function applyNewColorToCurrentActiveShape() {
    if (!currentActiveShape.shape) {
        return;
    }

    currentActiveShape.shape.setFill(currentColor);
    currentActiveShape.tempLayer.draw();
}
