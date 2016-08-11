$(function () {
    canvasOptions.width = $(document).innerWidth() - 10;
    canvasOptions.height = $(document).innerHeight() - 10;
    kineticStage = intializeCanvas(canvasOptions);

    initializeOpenShapeControlsButton();
    initializeShapeControls();
    initializeLayerUI();
    initializeShapesUI();
    initializeKeyboardControls();
    initializeClearCanvasButton();
    inializeButtonsPositions();
    initializeDraggableMenus();
    initializeOnResize();
});

function intializeCanvas(options) {
    stage = new Kinetic.Stage({
        container: options.container,
        width: options.width,
        height: options.height
    });
    return stage;
}

function initializeOnResize() {
    $(window).on('resize', function () {
        kineticStage.setSize({
            width: window.innerWidth - 10,
            height: window.innerHeight - 10
        });
        updateLayerUiContainerPosition();
        updateNewDrawingBtnPosition();
    });
}