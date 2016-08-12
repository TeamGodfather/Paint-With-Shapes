var implementedShapes = {
    'img': 'img',
    'star': 'star',
    'line': 'line',
    'ring': 'ring',
    'ellipse': 'ellipse',
    'circle': 'circle',
    'triangle': 'triangle',
    'square': 'square',
    'rectangle': 'rectangle',
    'pentagon': 'pentagon',
    'hexagon': 'hexagon',
    'heptagon': 'heptagon',
    'octagon': 'octagon',
    'nonegon': 'nonegon',
    'decagon': 'decagon',
    'undecagon': 'undecagon',
    'dodecagon': 'dodecagon',
    'tredecagon': 'tredecagon',
};

function initializeShapesUI() {
    var shapesMenu = $('#shapes-menu').hide();
        $('#get-shape')
            .on('click', function () {
                shapesMenu.toggle();
            });

    intializeShapeMenuButtonsEvents();
}

function applyNewColorToCurrentActiveShape() {
    if (!currentActiveShape.shape) {
        return;
    }

    currentActiveShape.shape.setFill(currentColor);
    currentActiveShape.tempLayer.draw();
}

function intializeShapeMenuButtonsEvents() {
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
                cancelCurrentActiveShape();
            }

            if (layersManager.current === null) {
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

            var shapesMenu = $('#shapes-menu').toggle();
        });
}

function createNewShapeBasedOnInputTypeOfShape(typeOfShape) {
    var newShape;
    switch (typeOfShape) {
        case implementedShapes.img:
            newShape = createImg();
            break;
        case implementedShapes.star:
            newShape = createStar();
            break;
        case implementedShapes.line:
            newShape = createLine();
            break;
        case implementedShapes.ring:
            newShape = createRing();
            break;
        case implementedShapes.circle:
            newShape = createCircle();
            break;
        case implementedShapes.triangle:
            newShape = createTriangle();
            break;
        case implementedShapes.square:
            newShape = createSquare();
            break;
        case implementedShapes.rectangle:
            newShape = createRectangle();
            break;
        case implementedShapes.pentagon:
            newShape = createPentagon();
            break;
        case implementedShapes.hexagon:
            newShape = createHexagon();
            break;
        case implementedShapes.heptagon:
            newShape = createHeptagon();
            break;
        case implementedShapes.octagon:
            newShape = createOctagon();
            break;
        case implementedShapes.nonegon:
            newShape = createNonegon();
            break;
        case implementedShapes.decagon:
            newShape = createDecagon();
            break;
        case implementedShapes.undecagon:
            newShape = createUndecagon();
            break;
        case implementedShapes.dodecagon:
            newShape = createDodecagon();
            break;
        case implementedShapes.tredecagon:
            newShape = createTredecagon();
            break;
        case implementedShapes.ellipse:
            newShape = createEllipse();
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
