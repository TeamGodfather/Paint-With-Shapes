window.onload = function () {
    kineticStage = intializeCanvas(canvasOptions);

    initializeLayerUI();
    initializeShapesUI();
    initializeKeyboardControls();
    initializeClearCanvasButton();
};

function intializeCanvas(options) {
    stage = new Kinetic.Stage({
        container: options.container,
        width: options.width,
        height: options.height
    });
    return stage;
}