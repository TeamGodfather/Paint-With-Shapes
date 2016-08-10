var shapeControls = {
    'container': null,
    'btnUp': null,
    'btnDown': null,
    'btnLeft': null,
    'btnRight': null,
    'btnUpLeft': null,
    'btnUpRight': null,
    'btnDownLeft': null,
    'btnDownRight': null,
    'btnRotateClockwise': null,
    'btnRotateCounterClockwise': null,
    'btnScaleIncrease': null,
    'btnScaleDecrease': null,
    'btnOpacityIncrease': null,
    'btnOpacityDecrease': null,
    'btnCommit': null,
    'sectionMovement': null,
    'sectionRotate': null,
    'sectionScale': null,
    'sectionOpacity': null
};

function initializeShapeControls() {
    buildShapeControlsElements();
    initializeShapeControlsEvents();
}

// TODO: Replace Text with direction/ rotational Arrows
function buildShapeControlsElements() {
    shapeControls.container = $('<section />')
        .attr('id', 'shape-controls');

    shapeControls.sectionMovement = $('<div />')
        .attr('id', 'section-movement');

    shapeControls.sectionRotate = $('<div />')
        .attr('id', 'section-rotate');

    shapeControls.sectionScale = $('<div />')
        .attr('id', 'section-scale');

    shapeControls.sectionOpacity = $('<div />')
        .attr('id', 'section-opacity');

    shapeControls.btnUp = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-up')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
        
        .html('U');

    shapeControls.btnDown = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-down')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
        
        .html('D');

    shapeControls.btnLeft = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-left')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
        
        .html('L');

    shapeControls.btnRight = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-right')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
        
        .html('R');

    shapeControls.btnUpLeft = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-up-left')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
        
        .html('UL');

    shapeControls.btnUpRight = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-up-right')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
      
        .html('UR');

    shapeControls.btnDownLeft = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-down-left')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
        
        .html('DL');

    shapeControls.btnDownRight = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-down-right')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
      
        .html('DR');

    shapeControls.btnRotateClockwise = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-rotate-clockwise')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
        
        .html('Right');

    shapeControls.btnRotateCounterClockwise = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-rotate-counter-clockwise')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')

        .html('Left');

    shapeControls.btnScaleIncrease = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-scale-increase')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')

        .html('+');

    shapeControls.btnScaleDecrease = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-scale-decrease')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
        .html('-');

    shapeControls.btnOpacityIncrease = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-opacity-increase')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
        .html('+');

    shapeControls.btnOpacityDecrease = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-opacity-decrease')
        .addClass('btn-shape-control')
        .css('text-decoration', 'none')
        .html('-');

    shapeControls.btnCommit = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-commit')
        .addClass('btn-shape-control')
        .html('commit to layer')
        .css('text-decoration', 'none');

    shapeControls.sectionMovement
        .append(shapeControls.btnUpLeft)
        .append(shapeControls.btnUp)
        .append(shapeControls.btnUpRight)
        .append(shapeControls.btnRight)
        .append(shapeControls.btnDownRight)
        .append(shapeControls.btnDown)
        .append(shapeControls.btnDownLeft)
        .append(shapeControls.btnLeft);

    shapeControls.sectionRotate
        .append(shapeControls.btnRotateCounterClockwise)
        .append(shapeControls.btnRotateClockwise);

    shapeControls.sectionScale
        .append(shapeControls.btnScaleDecrease)
        .append(shapeControls.btnScaleIncrease);

    shapeControls.sectionOpacity
        .append(shapeControls.btnOpacityDecrease)
        .append(shapeControls.btnOpacityIncrease);

    shapeControls.container
        .append($('<p />').html('move'))
        .append(shapeControls.sectionMovement)
        .append($('<p />').html('rotate'))
        .append(shapeControls.sectionRotate)
        .append($('<p />').html('scale'))
        .append(shapeControls.sectionScale)
        .append($('<p />').html('opacity'))
        .append(shapeControls.sectionOpacity)
        .append(shapeControls.btnCommit)
        .appendTo('#button-controls')
        .accordion({
            collapsible: true
        });
}

function initializeShapeControlsEvents() {
    shapeControls.btnRotateClockwise.on('click', function () {
        rotateCurrentShape(10);
    });

    shapeControls.btnRotateCounterClockwise.on('click', function () {
        rotateCurrentShape(-10);
    });

    shapeControls.btnCommit.on('click', function () {
        releaseCurrentShape();
    });

    shapeControls.btnScaleIncrease.on('click', function () {
        scaleCurrentShape(0.05);
    });

    shapeControls.btnScaleDecrease.on('click', function () {
        scaleCurrentShape(-0.05);
    });

    shapeControls.btnOpacityIncrease.on('click', function () {
        changeCurrentShapeOpacity(0.05);
    });

    shapeControls.btnOpacityDecrease.on('click', function () {
        changeCurrentShapeOpacity(-0.05);
    });

    shapeControls.btnUpLeft.on('click', function () {
        var shapeIsInsideCanvasTop = checkOutOfCanvasBoundsTop(),
            shapeIsInsideCanvasLeft = checkOutOfCanvasBoundsLeft(),
            delta = {
                'x': -5,
                'y': -5
            };

        if (shapeIsInsideCanvasTop && shapeIsInsideCanvasLeft) {
            moveCurrentActiveShape(delta);
        }
    });

    shapeControls.btnUp.on('click', function () {
        moveCurrentActiveShapeUp();
    });

    shapeControls.btnUpRight.on('click', function () {
        var shapeIsInsideCanvasRight = checkOutOfCanvasBoundsRight(),
            shapeIsInsideCanvasTop = checkOutOfCanvasBoundsTop(),
            delta = {
                'x': 5,
                'y': -5
            };

        if (shapeIsInsideCanvasRight && shapeIsInsideCanvasTop) {
            moveCurrentActiveShape(delta);
        }
    });

    shapeControls.btnRight.on('click', function () {
        moveCurrentActiveShapeRight();
    });

    shapeControls.btnDownRight.on('click', function () {
        var shapeIsInsideCanvasRight = checkOutOfCanvasBoundsRight(),
            shapeIsInsideCanvasBottom = checkOutOfCanvasBoundsBottom(),
            delta = {
                'x': +5,
                'y': +5
            };

        if (shapeIsInsideCanvasRight && shapeIsInsideCanvasBottom) {
            moveCurrentActiveShape(delta);
        }
    });

    shapeControls.btnDown.on('click', function () {
        moveCurrentActiveShapeDown();
    });

    shapeControls.btnDownLeft.on('click', function () {
        var shapeIsInsideCanvasBottom = checkOutOfCanvasBoundsBottom(),
            shapeIsInsideCanvasLeft = checkOutOfCanvasBoundsLeft(),
            delta = {
                'x': -5,
                'y': +5
            };

        if (shapeIsInsideCanvasLeft && shapeIsInsideCanvasBottom) {
            moveCurrentActiveShape(delta);
        }
    });

    shapeControls.btnLeft.on('click', function () {
        moveCurrentActiveShapeLeft();
    });
}
