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

    tempLayer.add(shape);
    kineticStage.add(tempLayer);

    currentActiveShape.shape = shape;
    currentActiveShape.tempLayer = tempLayer;
    currentActiveShape.tempLayer.draw();
}