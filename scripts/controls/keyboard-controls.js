function initializeKeyboardControls() {

    var keys = {65: false, 87: false, 68: false, 83:false, 13: false,
        81: false, 69: false, 38: false, 40: false,
        37: false, 39: false, 27: false };

    $('body').keydown(function (event) {
            // event.preventDefault();

            if (!currentActiveShape.shape) {
                return;
            }

        if(event.keyCode in keys) {
            keys[event.keyCode] = true;
        }


        if (keys[65]) {
            rotateCurrentShape(-10);
        }
        if (keys[87]) {
            scaleCurrentShape(0.05);
        }
        if (keys[68]) {
            rotateCurrentShape(10)
        }
        if (keys[83]) {
            scaleCurrentShape(-0.05);
        }
        if (keys[13]) {
            releaseCurrentShape();
        }
        if (keys[81]) {
            changeCurrentShapeOpacity(-0.05);
        }
        if (keys[69]) {
            changeCurrentShapeOpacity(0.05);
        }
        if (keys[38]) {
            moveCurrentActiveShapeUp();
        }
        if (keys[40]) {
            moveCurrentActiveShapeDown();
        }
        if (keys[37]) {
            moveCurrentActiveShapeLeft();
        }
        if (keys[39]) {
            moveCurrentActiveShapeRight();
        }
        if (keys[27]) {
            cancelCurrentActiveShape();
        }
    }).keyup(function (e) {
        if(e.keyCode in keys) {
            keys[e.keyCode] = false;
        }
    });
}

function cancelCurrentActiveShape(){
    currentActiveShape.shape.remove();
    currentActiveShape.shape.destroy();

    currentActiveShape.tempLayer.draw();
    currentActiveShape.tempLayer.remove();
    currentActiveShape.tempLayer.destroy();

    currentActiveShape.shape = null;
    currentActiveShape.tempLayer = null;
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
    if (currentActiveShape.shape.className === 'Line'){
      currentActiveShape.shape.setStroke(currentColor);
    }else{
    currentActiveShape.shape.setStroke('');
  }
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
    var shapeIsInsideCanvas = checkOutOfCanvasBoundsLeft(),
        delta = {
            'x': -5,
            'y': 0
        };
    if (shapeIsInsideCanvas) {
        moveCurrentActiveShape(delta);
    }
}

function moveCurrentActiveShapeDown() {
    var shapeIsInsideCanvas = checkOutOfCanvasBoundsBottom(),
        delta = {
            'x': 0,
            'y': +5
        };
    if (shapeIsInsideCanvas) {
        moveCurrentActiveShape(delta);
    }
}

function moveCurrentActiveShapeRight() {
    var shapeIsInsideCanvas = checkOutOfCanvasBoundsRight(),
        delta = {
            'x': +5,
            'y': 0
        };
    if (shapeIsInsideCanvas) {
        moveCurrentActiveShape(delta);
    }
}

function moveCurrentActiveShapeUp() {
    var shapeIsInsideCanvas = checkOutOfCanvasBoundsTop(),
        delta = {
            'x': 0,
            'y': -5
        };
    if (shapeIsInsideCanvas) {
        moveCurrentActiveShape(delta);
    }
}

function checkOutOfCanvasBoundsTop() {
    var isInsideCanvas = true,
        shapeActualSize = getShapeCurrentSizeDependingOnScale(),
        shapePosition = currentActiveShape.shape.getPosition();

    if (shapePosition.y <= 0) {
        isInsideCanvas = false;
    }
    return isInsideCanvas;
}

function checkOutOfCanvasBoundsLeft() {
    var isInsideCanvas = true,
        shapeActualSize = getShapeCurrentSizeDependingOnScale(),
        shapePosition = currentActiveShape.shape.getPosition();

    if (shapePosition.x <= 0) {
        isInsideCanvas = false;
    }
    return isInsideCanvas;
}

function checkOutOfCanvasBoundsRight() {
    var isInsideCanvas = true,
        stageSize = kineticStage.getSize(),
        shapeActualSize = getShapeCurrentSizeDependingOnScale(),
        shapePosition = currentActiveShape.shape.getPosition();

    if (shapePosition.x >= stageSize.width) {
        isInsideCanvas = false;
    }
    return isInsideCanvas;
}

function checkOutOfCanvasBoundsBottom() {
    var isInsideCanvas = true,
        stageSize = kineticStage.getSize(),
        shapeActualSize = getShapeCurrentSizeDependingOnScale(),
        shapePosition = currentActiveShape.shape.getPosition();

    if (shapePosition.y >= stageSize.height) {
        isInsideCanvas = false;
    }
    return isInsideCanvas;
}

function getShapeCurrentSizeDependingOnScale() {
    var shapeSize,
        shapeScale,
        shapeActualSize;

    shapeSize = currentActiveShape.shape.getSize();
    shapeScale = currentActiveShape.shape.getScale();
    shapeActualSize = {
        'width': shapeSize.width * shapeScale.x,
        'height': shapeSize.height * shapeScale.y
    };

    return shapeActualSize;
}
