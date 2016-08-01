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

    //test 
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
        console.log(kineticStage.getSize());
        kineticStage.setSize({
            width: window.innerWidth - 10,
            height: window.innerHeight - 10
        });
        updateLayerUiContainerPosition();
    });
}