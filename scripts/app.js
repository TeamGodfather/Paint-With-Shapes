$(function () {
    canvasOptions.width = $(document).innerWidth() - 10;
    canvasOptions.height = $(document).innerHeight() - 10;
    kineticStage = intializeCanvas(canvasOptions);

    initializeLayerUI();
    initializeShapesUI();
    initializeKeyboardControls();
    initializeClearCanvasButton();
    inializeButtonsPositions();
    initializeDraggableMenus();
});

function intializeCanvas(options) {
    stage = new Kinetic.Stage({
        container: options.container,
        width: options.width,
        height: options.height
    });
    return stage;
}