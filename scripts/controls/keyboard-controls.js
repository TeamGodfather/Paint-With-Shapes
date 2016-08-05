function initializeKeyboardControls() {
    var canvasContainer = document
        .querySelector('body')
        .addEventListener('keydown', function addKeyboardListener(event) {
            event.preventDefault();

            if (!currentActiveShape.shape) {
                return;
            }

            if (event.keyCode === 65) {
                rotateCurrentShape(-10);
            } else if (event.keyCode === 87) {
                scaleCurrentShape(0.05);
            } else if (event.keyCode === 68) {
                rotateCurrentShape(10)
            } else if (event.keyCode === 83) {
                scaleCurrentShape(-0.05);
            } else if (event.keyCode === 13) {
                releaseCurrentShape();
            } else if (event.keyCode === 81) {
                changeCurrentShapeOpacity(-0.05);
            } else if (event.keyCode === 69) {
                changeCurrentShapeOpacity(0.05);
            } else if (event.keyCode === 38) {
                moveCurrentActiveShapeUp();
            } else if (event.keyCode === 40) {
                moveCurrentActiveShapeDown();
            } else if (event.keyCode === 37) {
                moveCurrentActiveShapeLeft();
            } else if (event.keyCode === 39) {
                moveCurrentActiveShapeRight();
            }
        });
}

function changeCurrentShapeOpacity(delta) {
    if (!currentActiveShape.shape) {
        return;
    }

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
    currentActiveShape.shape.setStroke('');
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
    if (!currentActiveShape.shape) {
        return;
    }

    currentActiveShape.shape.rotate(degrees);
    currentActiveShape.tempLayer.draw();
}

function scaleCurrentShape(scale) {
    if (!currentActiveShape.shape) {
        return;
    }

    var currentScale = currentActiveShape.shape.getScale();

    if ((currentScale.x < 0.05 && +scale < 0) || (5 < currentScale.x && 0 < +scale)) {
        return;
    }

    currentActiveShape.shape.setScale({
        x: currentScale.x + scale,
        y: currentScale.y + scale
    });
    currentActiveShape.tempLayer.draw();
}

function moveCurrentActiveShape(delta) {
    var position = currentActiveShape.shape.getPosition();
    currentActiveShape.shape.setPosition({
        x: position.x + delta.x,
        y: position.y + delta.y
    });
    currentActiveShape.tempLayer.draw();
}

function moveCurrentActiveShapeLeft() {
    var delta = {
        'x': -5,
        'y': 0
    };
    moveCurrentActiveShape(delta);
}

function moveCurrentActiveShapeDown() {
    var delta = {
        'x': 0,
        'y': +5
    };
    moveCurrentActiveShape(delta);
}

function moveCurrentActiveShapeRight() {
    var delta = {
        'x': +5,
        'y': 0
    };
    moveCurrentActiveShape(delta);
}

function moveCurrentActiveShapeUp() {
    var delta = {
        'x': 0,
        'y': -5
    };
    moveCurrentActiveShape(delta);
}