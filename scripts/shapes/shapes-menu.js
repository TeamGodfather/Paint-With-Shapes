function initializeShapesUI() {
    var shapesMenu = $('#shapes-menu').hide(),
        btnGetShape = $('#get-shape')
            .on('click', function () {
                shapesMenu.toggle();
            });
    intializeMenuButtonsEvents();
}

function applyNewColorToCurrentActiveShape() {
    if (!currentActiveShape.shape) {
        return;
    }

    currentActiveShape.shape.setFill(currentColor);
    currentActiveShape.tempLayer.draw();
}

function intializeMenuButtonsEvents() {
    var rectangle,
        star;

    rectangle = $('#shapes-menu #shapes')
        .on('click', function (event) {
            var clicked = $(event.target),
                typeOfShape,
                newShape,
                tempLayer;
                
            if (clicked.hasClass('shape')) {

            } else if (clicked.parents('.shape')) {
                clicked = clicked.parents('.shape').first();
            } else {
                return;
            }
            typeOfShape = $(clicked).attr('id');

            if (currentActiveShape.shape) {
                // Do nothing if there's an active shape'
                return;
            }

            if (layersManager.current === null) {
                // Do not create a shape without a layer
                return;
            }

            switch (typeOfShape) {
                case 'rectangle':
                    newShape = createRectangle();
                    break;
                case 'star':
                    newShape = createStar();
                    break;
                default:
                    break;
            }

            // mark the active shape with a border
            newShape.setStroke(getActiveOutlineStrokeColor(newShape));

            tempLayer = new Kinetic.Layer();

            tempLayer.add(newShape);
            kineticStage.add(tempLayer);

            currentActiveShape.shape = newShape;
            currentActiveShape.tempLayer = tempLayer;
            currentActiveShape.tempLayer.draw();
        });
}

function getActiveOutlineStrokeColor(shape) {

    // defaults to black for testing
    return '#000000';
}