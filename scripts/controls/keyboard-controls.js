function initializeKeyboardControls() {
    var canvasContainer = document
        .querySelector('body')
        .addEventListener('keydown', function addKeyboardListener(event) {
            event.preventDefault();

            if (event.keyCode === 37) {
                // Left
                rotateCurrentShape(-10);
            } else if (event.keyCode === 38) {
                // up
                scaleCurrentShape(0.05);
            } else if (event.keyCode === 39) {
                // right
                rotateCurrentShape(10)
            } else if (event.keyCode === 40) {
                // down
                scaleCurrentShape(-0.05);
            } else if (event.keyCode === 13) {
                // enter - > confirm position
                releaseCurrentShape();
            } else if (event.keyCode === 219) {
                // enter - > confirm position
                changeCurrentShapeOpacity(-0.05);
            } else if (event.keyCode === 221) {
                // enter - > confirm position
                changeCurrentShapeOpacity(0.05);
            }
        });
}

function changeCurrentShapeOpacity(delta) {
    console.log('called');
    var currentOpacity = currentActiveShape.shape.getOpacity();

    if (currentOpacity <= 0.05 && +delta < 0) {
        return;
    }

    if (currentOpacity >= 1 && + delta > 0) {
        return;
    }

    currentActiveShape.shape.setOpacity(currentOpacity + delta);
    currentActiveShape.tempLayer.draw();
}

function releaseCurrentShape() {
    currentActiveShape.shape.remove();
    currentActiveShape.shape.draggable(false);
    layersManager.current.layer.add(currentActiveShape.shape);
    currentActiveShape.shape = null;

    currentActiveShape.tempLayer.removeChildren();
    currentActiveShape.tempLayer.remove();
    currentActiveShape.tempLayer = null;
    layersManager.current.layer.draw();
}

function rotateCurrentShape(degrees) {
    currentActiveShape.shape.rotate(degrees);
    currentActiveShape.tempLayer.draw();
}

function scaleCurrentShape(scale) {
    var currentScale = currentActiveShape.shape.getScale();

    if ((currentScale.x < 0.25 && +scale < 0) || (5 < currentScale.x && 0 < +scale)) {
        return;
    }

    currentActiveShape.shape.setScale({
        x: currentScale.x + scale,
        y: currentScale.y + scale
    });
    currentActiveShape.tempLayer.draw();
}