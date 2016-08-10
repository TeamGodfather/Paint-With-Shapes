var implementedShapes = {
    'square': 'square',
    'rectangle': 'rectangle',
    'star': 'star',
    'hexagon': 'hexagon',
    'line': 'line',
    'pentagon': 'pentagon',
    'triangle': 'triangle',
    'ring': 'ring',
    'circle': 'circle'
};

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
                // Create a new layer.
                createNewKineticLayer();
            }

            newShape = createNewShapeBasedOnInputTypeOfShape(typeOfShape);
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

function createNewShapeBasedOnInputTypeOfShape(typeOfShape) {
    var newShape;
    switch (typeOfShape) {
        case implementedShapes.square:
            newShape = createSquare();
            break;
        case implementedShapes.rectangle:
            newShape = createRectangle();
            break;
        case implementedShapes.star:
            newShape = createStar();
            break;
        case implementedShapes.hexagon:
            newShape = createHexagon();
            break;
        case implementedShapes.line:
            newShape = createLine();
            break;
        case implementedShapes.pentagon:
            newShape = createPentagon();
            break;
        case implementedShapes.triangle:
            newShape = createTriangle();
            break;
        case implementedShapes.ring:
            newShape = createRing();
            break;
        case implementedShapes.circle:
            newShape = createCircle();
            break;
        default:
            break;
    }
    return newShape;
}

function getActiveOutlineStrokeColor(shape) {

    // defaults to black for testing
    return '#000000';
}
