function getShape(shapeType) {
    if (currentActiveShape.shape) {
        // Do not crate a new shape while this one is active
        return;
    }

    if (layersManager.current === null) {
        // Do not create a shape without a layer
        return;
    }

    var shape = createRectangle(),
        tempLayer = new Kinetic.Layer();

    // mark the active shape with a border
    shape.setStroke(getActiveOutlineStrokeColor(shape));

    tempLayer.add(shape);
    kineticStage.add(tempLayer);

    currentActiveShape.shape = shape;
    currentActiveShape.tempLayer = tempLayer;
    currentActiveShape.tempLayer.draw();
}

function getActiveOutlineStrokeColor(shape) {

    // defaults to black for testing
    return '#000000';
}